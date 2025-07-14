# overlay-sdk

> **⚠️ This SDK is currently under development. If you'd like to try it out early, please send us a message on [X (Twitter)](https://x.com/overlaydotfun) — we're happy to support you!**

TypeScript SDK for the [overlay.fun](https://overlay.fun) API.

## API Documentation

[https://docs.overlay.fun](https://docs.overlay.fun)

## Installation

```bash
npm install @overlay.fun/kit
```

## Usage

### Basic Setup

```typescript
import { OverlayClient } from '@overlay.fun/kit';

// Initialize client with devnet
const client = new OverlayClient({
  env: 'devnet', // or 'mainnet'
  api_key: 'your-wallet-api-key',
  auth_key: 'your-wallet-auth-key'
});
```

### Wallet

```typescript
// Create a new wallet
const wallet = await client.wallet.create({
  network: "solana" // or "evm" "tron" "ton" "aptos"
});
console.log('Wallet address:', wallet.address);

// Get wallet information
const wallet = await client.wallet.get('wallet-address');
```

### Token

```typescript
// Create a new token
const token = await client.token.create({
  network: "solana", // or "evm" "tron" "ton" "aptos"
  name: 'My Token',
  symbol: 'MTK',
  description: 'This is test token',
  image: 'image url'
  supply: 1000000,
  website: 'https://example.com'
});

// Get token information
const token = await client.token.get('mint-address');

// Transfer tokens (corrected endpoint)
await client.token.transfer('mint-address', {
  network: "solana", // or "evm" "tron" "ton" "aptos"
  recipient: 'recipient-address',
  amount: '100'
});

// Mint tokens
await client.token.mint('mint-address', {
  network: "solana", // or "evm" "tron" "ton" "aptos"
  amount: '1000'
});

// Burn tokens
await client.token.burn('mint-address', {
  network: "solana", // or "evm" "tron" "ton" "aptos"
  amount: '100'
});
```

### NFT

```typescript
// Create a new NFT
const nft = await client.nft.create({
  network: "solana", // or "bsc" "base" "polygon" "blast" etc
  name: 'My NFT',
  image: 'https://example.com/image.png',
  description: 'A unique NFT',
  attributes: [
    { trait_type: 'Color', value: 'Blue' },
    { trait_type: 'Rarity', value: 'Rare' }
  ]
});

// Get NFT information
const nft = await client.nft.get('mint-address');

// Transfer NFT(solana)
await client.nft.transfer('mint-address', {
  network: "solana",
  recipient: 'wallet-address'
});

// Transfer NFT(evm)
await client.nft.transfer('mint-address', {
  network: "bsc", // or "bsc" "base" "polygon" "blast" etc
  recipient: 'wallet-address',
  token_id: '1'
});

// Burn NFT
await client.nft.burn('mint-address');
```

## Configuration

### Networks

- **devnet**: `https://devnet.overlay.fun`
- **mainnet**: `https://mainnet.overlay.fun`

## Examples

### Complete Example

```typescript
import OverlayClient from '@overlay.fun/kit';

// initialize
const client = new OverlayClient({
  env: 'devnet',
  api_key: 'your-wallet-api-key',
  auth_key: 'your-wallet-auth-key'
});


// Create wallet
const wallet = await client.wallet.create({
  network: "solana", // or "bsc" "base" "polygon" "blast" etc
});

// Fetch wallet
const wallet = await client.wallet.get("wallet-address");

// Create token
const token = await client.token.create({
  network: "solana", // or "bsc" "base" "polygon" "blast" etc
  name: 'My Token',
  symbol: 'MTK',
  description: 'This is test token',
  image: 'image url'
  decimals: 9,
  supply: '1000000',
  website: 'https://example.com'
});

// Fetch token
const token = await client.token.get("mint-address");

// Transfer token
await client.token.transfer(token.mint, {
  network: "solana", // or "bsc" "base" "polygon" "blast" etc
  recipient: 'wallet-address',
  amount: "100"
});
```

## License

MIT