import { RequestHandler } from '../utils/request';
import { CreateWalletRequest, WalletResponse } from '../types';

export class WalletEndpoints {
  constructor(private request: RequestHandler) {}

  async create(data: CreateWalletRequest): Promise<WalletResponse> {
    return this.request.post<WalletResponse>('/wallets', data);
  }

  async get(wallet_address: string): Promise<WalletResponse> {
    return this.request.get<WalletResponse>(`/wallets/${wallet_address}`);
  }
}


