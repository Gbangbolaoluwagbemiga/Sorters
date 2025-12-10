# Sorters - Complete Setup Guide

## 🎯 Project Overview

Sorters is a complete decentralized note-keeping application built on Stacks blockchain with:
- ✅ Smart contract in Clarity
- ✅ Full test suite
- ✅ React/Next.js frontend
- ✅ Wallet integration
- ✅ Complete documentation

## 📋 Prerequisites

1. **Node.js** 18+ and npm
2. **Stacks CLI**: `npm install -g @stacks/cli`
3. **Clarinet**: `cargo install clarinet` (for contract development)
4. **Stacks Wallet**: Install [Hiro Wallet](https://www.hiro.so/wallet) or [Xverse](https://www.xverse.app/) browser extension

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Root dependencies (for contract testing)
npm install

# Frontend dependencies
cd frontend
npm install
cd ..
```

### 2. Test the Smart Contract

```bash
# Run contract tests
npm test

# Or using Clarinet directly
clarinet test
```

### 3. Deploy Contract to Testnet

```bash
# Deploy to testnet
npm run deploy:testnet

# Or manually
clarinet deploy --testnet
```

**Important**: Save the contract address from the deployment output!

### 4. Configure Frontend

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_STACKS_NETWORK=testnet
NEXT_PUBLIC_CONTRACT_ADDRESS=YOUR_DEPLOYED_CONTRACT_ADDRESS
NEXT_PUBLIC_CONTRACT_NAME=sorters
```

Replace `YOUR_DEPLOYED_CONTRACT_ADDRESS` with the address from step 3.

### 5. Run Frontend

```bash
cd frontend
npm run dev
```

Visit `http://localhost:3000` in your browser.

### 6. Connect Wallet

1. Click "Connect Wallet" in the app
2. Approve the connection in your wallet extension
3. Start creating notes!

## 📁 Project Structure

```
sorters/
├── contracts/
│   └── sorters.clar          # Smart contract
├── tests/
│   └── sorters_test.ts       # Contract tests
├── frontend/
│   ├── app/                  # Next.js app directory
│   ├── components/           # React components
│   ├── lib/                  # Utilities and hooks
│   └── package.json          # Frontend dependencies
├── docs/                     # Documentation
├── package.json              # Root dependencies
├── Clarinet.toml             # Clarinet config
└── README.md                 # Main documentation
```

## 🔧 Development Workflow

### Contract Development

```bash
# Start local devnet
clarinet devnet

# In another terminal, run tests
clarinet test

# Deploy to local devnet
clarinet deploy
```

### Frontend Development

```bash
cd frontend
npm run dev
```

The app will hot-reload on changes.

### Testing

```bash
# Test contract
npm test

# Test frontend (when tests are added)
cd frontend
npm test
```

## 🌐 Deployment

### Contract Deployment

#### Testnet
```bash
npm run deploy:testnet
```

#### Mainnet
⚠️ **Warning**: Mainnet deployment is permanent!

```bash
npm run deploy:mainnet
```

### Frontend Deployment

#### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables:
   - `NEXT_PUBLIC_STACKS_NETWORK`
   - `NEXT_PUBLIC_CONTRACT_ADDRESS`
   - `NEXT_PUBLIC_CONTRACT_NAME`
4. Deploy

#### Netlify

1. Push code to GitHub
2. Import project in Netlify
3. Set environment variables
4. Deploy

## 🐛 Troubleshooting

### Contract Issues

**Tests failing:**
- Ensure Clarinet is installed: `cargo install clarinet`
- Check contract syntax: `clarinet check`

**Deployment failing:**
- Verify you have STX in your wallet
- Check network connectivity
- Review error messages in terminal

### Frontend Issues

**Wallet not connecting:**
- Ensure wallet extension is installed
- Check network matches (testnet/mainnet)
- Refresh page and try again

**Contract calls failing:**
- Verify contract address in `.env.local`
- Check contract is deployed on correct network
- Ensure sufficient STX for fees

**Build errors:**
- Delete `node_modules` and reinstall
- Check Node.js version (18+)
- Review error messages

## 📚 Next Steps

1. ✅ Deploy contract to testnet
2. ✅ Configure frontend environment
3. ✅ Test all features
4. ✅ Deploy frontend
5. 🎉 Share with users!

## 🔗 Useful Links

- [Stacks Documentation](https://docs.stacks.co/)
- [Clarity Language Reference](https://docs.stacks.co/docs/clarity)
- [Stacks Connect Docs](https://docs.hiro.so/stacks.js)
- [Next.js Documentation](https://nextjs.org/docs)

## 💡 Tips

- Always test on testnet before mainnet
- Keep your private keys secure
- Monitor transaction fees
- Use environment variables for configuration
- Test wallet connection early

## 🆘 Getting Help

- Check the [docs](./docs/) folder
- Review [API documentation](./docs/API.md)
- Open an issue on GitHub
- Join Stacks Discord community

---

**Happy Building! 🚀**

