#!/usr/bin/env node

/**
 * Deploy Sorters Contract using Secret Key
 * This script uses @stacks/transactions to deploy the contract
 */

const fs = require('fs');
const path = require('path');
const { makeContractDeploy, broadcastTransaction, AnchorMode, getAddressFromPrivateKey } = require('@stacks/transactions');
const { StacksMainnet, StacksTestnet } = require('@stacks/network');
const bip39 = require('bip39');
const { derivePrivateKey } = require('@stacks/bip32');
require('dotenv').config();

async function deploy() {
  console.log('🚀 Sorters Contract Deployment');
  console.log('==============================\n');

  // Load environment variables
  let secretKey = process.env.STACKS_SECRET_KEY;
  const network = process.env.STACKS_NETWORK || 'mainnet';
  const contractName = process.env.CONTRACT_NAME || 'sorters';

  if (!secretKey) {
    console.error('❌ Error: STACKS_SECRET_KEY not set in .env file');
    process.exit(1);
  }

  // Handle mnemonic - convert to private key if needed
  let privateKey = secretKey;
  let address;
  
  // Remove quotes if present
  privateKey = privateKey.replace(/^["']|["']$/g, '').trim();
  
  // Check if contract file exists
  const contractPath = path.join(__dirname, '..', 'contracts', `${contractName}.clar`);
  if (!fs.existsSync(contractPath)) {
    console.error(`❌ Error: Contract file not found: ${contractPath}`);
    process.exit(1);
  }

  // Read contract code
  const contractCode = fs.readFileSync(contractPath, 'utf8');

  // Determine network
  const stacksNetwork = network === 'mainnet' ? new StacksMainnet() : new StacksTestnet();

  // Check if it's a mnemonic (contains spaces) or a hex private key
  if (privateKey.split(' ').length > 1) {
    // It's a mnemonic - derive the private key
    console.log('📝 Detected mnemonic, deriving private key...');
    try {
      const wallet = await restoreWalletAccounts({
        mnemonic: privateKey,
        password: '',
      });
      if (!wallet || !wallet.accounts || wallet.accounts.length === 0) {
        throw new Error('Failed to restore wallet from mnemonic');
      }
      const account = wallet.accounts[0];
      privateKey = account.stxPrivateKey;
      address = account.address;
    } catch (error) {
      console.error('❌ Error deriving account from mnemonic:', error.message);
      console.error('Trying alternative method...');
      // Try using @stacks/encryption to derive key
      try {
        const { deriveStxPrivateKey } = require('@stacks/encryption');
        privateKey = deriveStxPrivateKey({ mnemonic: privateKey, index: 0 });
        address = getAddressFromPrivateKey(privateKey, stacksNetwork.version);
      } catch (err2) {
        console.error('❌ Alternative method also failed:', err2.message);
        process.exit(1);
      }
    }
  } else {
    // It's a hex private key
    try {
      address = getAddressFromPrivateKey(privateKey, stacksNetwork.version);
    } catch (error) {
      console.error('❌ Error getting address from private key:', error.message);
      console.error('Make sure your STACKS_SECRET_KEY is either a valid mnemonic or hex private key');
      process.exit(1);
    }
  }
  console.log(`Network: ${network}`);
  console.log(`Contract: ${contractName}`);
  console.log(`Deployer: ${address}\n`);

  if (network === 'mainnet') {
    console.log('⚠️  WARNING: MAINNET deployment is PERMANENT and IRREVERSIBLE!\n');
  }

  try {
    // Create deployment transaction
    const txOptions = {
      contractName,
      codeBody: contractCode,
      senderKey: privateKey,
      network: stacksNetwork,
      anchorMode: AnchorMode.Any,
      fee: 10000, // Fee in microstacks
    };

    console.log('📦 Creating deployment transaction...');
    const transaction = await makeContractDeploy(txOptions);

    console.log('📡 Broadcasting transaction...');
    const broadcastResponse = await broadcastTransaction(transaction, stacksNetwork);

    if (broadcastResponse.error) {
      console.error('❌ Deployment failed:', broadcastResponse.error);
      if (broadcastResponse.reason) {
        console.error('Reason:', broadcastResponse.reason);
      }
      process.exit(1);
    }

    console.log('\n✅ Deployment transaction broadcasted!');
    console.log(`Transaction ID: ${broadcastResponse.txid}`);
    console.log(`\n📝 Contract Address: ${address}.${contractName}`);
    console.log(`\n🔗 View on Explorer:`);
    if (network === 'mainnet') {
      console.log(`   https://explorer.stacks.co/txid/${broadcastResponse.txid}?chain=mainnet`);
    } else {
      console.log(`   https://explorer.stacks.co/txid/${broadcastResponse.txid}?chain=testnet`);
    }

    console.log('\n📝 Next steps:');
    console.log(`1. Wait for transaction confirmation (usually 1-2 blocks)`);
    console.log(`2. Update frontend/.env.local with:`);
    console.log(`   NEXT_PUBLIC_STACKS_NETWORK=${network}`);
    console.log(`   NEXT_PUBLIC_CONTRACT_ADDRESS=${address}.${contractName}`);
    console.log(`3. Verify contract on Stacks Explorer`);

  } catch (error) {
    console.error('❌ Deployment error:', error.message);
    process.exit(1);
  }
}

// Run deployment
deploy().catch(console.error);

