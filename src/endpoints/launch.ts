import { RequestHandler } from '../utils/request';
import { LaunchTokenRequest } from '../types';

export class LaunchEndpoints {
  constructor(private request: RequestHandler) {}

  async launch(data: LaunchTokenRequest): Promise<any> {
    return this.request.post('/launch', data);
  }
}