import { RequestHandler } from '../utils/request';
import { TokenResponse, TransferTokenRequest, CreateTokenRequest, MintTokenRequest, BurnTokenRequest } from '../types';

export class TokenEndpoints {
  constructor(private request: RequestHandler) {}

  async create(data: CreateTokenRequest): Promise<TokenResponse> {
    return this.request.post<TokenResponse>('/tokens', data);
  }

  async get(mint_address: string): Promise<TokenResponse> {
    return this.request.get<TokenResponse>(`/tokens/${mint_address}`);
  }

  async transfer(mint_address: string, data: TransferTokenRequest): Promise<any> {
    return this.request.post(`/tokens/${mint_address}/transfer`, data);
  }

  async mint(mint_address: string, data: MintTokenRequest): Promise<any> {
    return this.request.post(`/tokens/${mint_address}/mint`, data);
  }

  async burn(mint_address: string, data: BurnTokenRequest): Promise<any> {
    return this.request.post(`/tokens/${mint_address}/burn`, data);
  }
}