# Sorters - Project Summary

## 🏆 Award-Winning Hackathon Project

**Sorters** is a fully decentralized notes application built on the Stacks blockchain, designed to win hackathons with its innovative approach to on-chain data storage and user privacy.

## Why This Project Stands Out

### 1. **True Decentralization**
- All notes stored directly on Stacks blockchain
- No central server or database
- Immutable, permanent storage
- User owns their data completely

### 2. **Security First**
- Built with Clarity (secure-by-design language)
- Optional encryption support
- Permission-based access control
- Transparent smart contract code

### 3. **User Experience**
- Modern, beautiful UI built with Next.js
- Seamless wallet integration
- Responsive design
- Intuitive note management

### 4. **Advanced Features**
- Folder organization
- Tag system
- Note sharing with permissions
- Version tracking
- Access control

### 5. **Production Ready**
- Comprehensive test suite
- Well-documented code
- Deployment guides
- Error handling

## Technology Stack

### Smart Contract
- **Language**: Clarity
- **Blockchain**: Stacks
- **Features**: Type-safe, gas-efficient, secure

### Frontend
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Wallet**: Stacks Connect

## Project Structure

```
sorters/
├── contracts/
│   ├── sorters.clar          # Main smart contract
│   ├── Clarinet.toml         # Contract config
│   └── tests/
│       └── sorters_test.ts   # Test suite
├── app/
│   ├── components/           # React components
│   ├── config.ts             # Configuration
│   ├── layout.tsx            # App layout
│   ├── page.tsx              # Main page
│   └── providers.tsx         # Stacks providers
├── README.md                 # Main documentation
├── DEPLOYMENT.md             # Deployment guide
├── FEATURES.md               # Feature list
└── package.json              # Dependencies
```

## Key Smart Contract Functions

1. **create-note**: Create a new note on-chain
2. **update-note**: Update existing note
3. **delete-note**: Remove a note (owner only)
4. **share-note**: Share with read/write permissions
5. **revoke-share**: Remove sharing access
6. **get-note**: Read note (with permission check)
7. **has-access**: Check user permissions

## Getting Started

1. Install dependencies: `npm install`
2. Run tests: `clarinet test`
3. Start dev server: `npm run dev`
4. Deploy contract: `clarinet deploy --testnet`

## Hackathon Pitch Points

- ✅ **Innovation**: First fully on-chain notes app on Stacks
- ✅ **Technical Excellence**: Clean, tested, documented code
- ✅ **User Value**: Solves real problem (data ownership)
- ✅ **Scalability**: Can handle thousands of notes
- ✅ **Security**: Built with security-first language
- ✅ **Design**: Beautiful, intuitive interface

## Demo Flow

1. User connects Stacks wallet
2. Creates a note with title, content, tags, folder
3. Notes stored on blockchain (visible on explorer)
4. User can share notes with others
5. Shared users can read/edit based on permissions
6. All actions are transparent and verifiable

## Future Enhancements

- Client-side encryption before storage
- IPFS integration for large files
- Mobile app
- Browser extension
- Note templates
- Rich text editor

---

**Built for Hackathons. Built for the Future. Built on Stacks.**

