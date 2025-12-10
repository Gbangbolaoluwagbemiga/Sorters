# Deploy to Mainnet - Quick Guide

## ⚠️ CRITICAL WARNINGS

1. **Mainnet deployment is PERMANENT** - cannot be undone
2. **Costs real STX** - ensure you have 2-3 STX
3. **Test first** - deploy to testnet before mainnet

## 🚀 Deployment Methods

### Method 1: Using Clarinet (Recommended)

```bash
clarinet deployments apply --mainnet
```

### Method 2: Using Stacks CLI

```bash
# Install Stacks CLI if not installed
npm install -g @stacks/cli

# Deploy
stacks deploy sorters contracts/sorters.clar --mainnet
```

### Method 3: Using Hiro Wallet

1. Open Hiro Wallet extension
2. Go to "Deploy Contract"
3. Select "Mainnet"
4. Paste contract code from `contracts/sorters.clar`
5. Review and confirm

## 📋 Pre-Deployment Checklist

- [ ] Contract code reviewed
- [ ] At least 2-3 STX in wallet
- [ ] Wallet on MAINNET (not testnet)
- [ ] Private key backed up
- [ ] Ready to save contract address

## 📝 After Deployment

1. **Save the contract address** immediately
2. Update `frontend/.env.local`:
   ```
   NEXT_PUBLIC_STACKS_NETWORK=mainnet
   NEXT_PUBLIC_CONTRACT_ADDRESS=<your-address>
   ```
3. Verify on [Stacks Explorer](https://explorer.stacks.co/?chain=mainnet)

## 🆘 Need Help?

- Check `MAINNET_DEPLOYMENT.md` for detailed guide
- Review `DEPLOYMENT_CHECKLIST.md`
- Stacks Docs: https://docs.stacks.co/

