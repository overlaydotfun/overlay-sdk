export interface OverlayConfig {
  env: 'devnet' | 'mainnet';
  apiKey: string;
}

export interface WalletResponse {
  wallet_address: string;
  secret_key: string;
}

export interface TokenResponse {
  tx: string;
  mint_address: string;
}

export interface NFTResponse {
  tx: string;
  mint_address: string;
}

export interface LaunchTokenRequest {
  tx: string;
  mint_address: string;
}

export interface CreateWalletRequest {
  network: string;
}

export interface CreateTokenRequest {
  network: string;
  name: string;
  symbol: string;
  description: string;
  image: string;
  decimals: number;
  supply: string;
  website: string;
}

export interface CreateNFTRequest {
  network: string;
  name: string;
  description: string;
  image: string;
  website: string;
  attributes?: Array<{
    trait_type: string;
    value: string;
  }>;
}

export interface TransferTokenRequest {
  network: string;
  recipient: string;
  amount: string;
}

export interface TransferNFTRequest {
  network: string;
  recipient: string;
  token_id: string;
}

export interface MintTokenRequest {
  network: string;
  amount: string;
}

export interface MintNFTRequest {
  network: string;
  name: string;
  description: string;
  image: string;
}

export interface BurnTokenRequest {
  network: string;
  amount: string;
}

export interface BurnNFTRequest {
  network: string;
  token_id: string;
}