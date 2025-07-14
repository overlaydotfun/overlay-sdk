import { RequestHandler } from '../utils/request';
import { NFTResponse, CreateNFTRequest, TransferNFTRequest, MintNFTRequest, BurnNFTRequest } from '../types';

export class NFTEndpoints {
  constructor(private request: RequestHandler) {}

  async create(data: CreateNFTRequest): Promise<NFTResponse> {
    return this.request.post<NFTResponse>('/nfts', data);
  }

  async get(mint_address: string): Promise<NFTResponse> {
    return this.request.get<NFTResponse>(`/nfts/${mint_address}`);
  }

  async transfer(mint_address: string, data: TransferNFTRequest): Promise<any> {
    return this.request.post(`/nfts/${mint_address}/transfer`, data);
  }

  async mint(mint_address: string, data: MintNFTRequest): Promise<any> {
    return this.request.post(`/nfts/${mint_address}/mint`, data);
  }

  async burn(mint_address: string, data: BurnNFTRequest): Promise<any> {
    return this.request.post(`/nfts/${mint_address}/burn`, data);
  }
}