import { OverlayConfig } from './types';
import { RequestHandler } from './utils/request';
import { WalletEndpoints } from './endpoints/wallet';
import { TokenEndpoints } from './endpoints/token';
import { NFTEndpoints } from './endpoints/nft';
import { LaunchEndpoints } from './endpoints/launch';

export class OverlayClient {
  private request: RequestHandler;
  
  public wallet: WalletEndpoints;
  public token: TokenEndpoints;
  public nft: NFTEndpoints;
  public launch: LaunchEndpoints;

  constructor(config: OverlayConfig) {
    this.request = new RequestHandler(config);
    
    this.wallet = new WalletEndpoints(this.request);
    this.token = new TokenEndpoints(this.request);
    this.nft = new NFTEndpoints(this.request);
    this.launch = new LaunchEndpoints(this.request);
  }

  updateConfig(config: Partial<OverlayConfig>): void {
    const currentConfig = this.request.getConfig();
    this.request = new RequestHandler({
      ...currentConfig,
      ...config
    });
    
    // エンドポイントを再初期化
    this.wallet = new WalletEndpoints(this.request);
    this.token = new TokenEndpoints(this.request);
    this.nft = new NFTEndpoints(this.request);
    this.launch = new LaunchEndpoints(this.request);
  }
}