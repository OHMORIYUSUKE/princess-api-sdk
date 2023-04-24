import { AxiosInstance } from 'axios';
import { axios } from './fetch/main';
import { IGetLatestAppAssetVersion } from './schemas/IGetLatestAppAssetVersion';
import { Versions } from './fetch/Versions';

export class PrincessApiSdk {
  private axios: AxiosInstance;
  constructor() {
    this.axios = axios;
  }
  /**
   * バージョン関連 API
   * 最新のアプリ・アセットバージョンの取得
   *
   * @returns Promise<IGetLatestAppAssetVersion>
   */
  public async getLatestAppAssetVersion(): Promise<IGetLatestAppAssetVersion> {
    return new Versions(this.axios).getLatestAppAssetVersion();
  }
}
