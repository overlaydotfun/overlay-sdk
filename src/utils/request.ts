import { OverlayConfig } from '../types';

const BASE_URLS = {
  devnet: 'https://devnet.overlay.fun',
  mainnet: 'https://mainnet.overlay.fun'
};

export class RequestHandler {
  private config: OverlayConfig;

  constructor(config: OverlayConfig) {
    this.config = config;
  }

  getConfig(): OverlayConfig {
    return this.config;
  }

  private getBaseUrl(): string {
    return BASE_URLS[this.config.env];
  }

  private getHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.config.apiKey}`
    };
  }

  async get<T>(endpoint: string): Promise<T> {
    const url = `${this.getBaseUrl()}${endpoint}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: this.getHeaders()
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json() as Promise<T>;
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    const url = `https://devnet.overlay.fun${endpoint}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: this.getHeaders(),
      body: data ? JSON.stringify(data) : undefined
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json() as Promise<T>;
  }
}