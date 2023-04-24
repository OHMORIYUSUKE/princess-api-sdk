import { AxiosInstance, AxiosResponse } from 'axios';
import { IGetLatestAppAssetVersion } from '../schemas/IGetLatestAppAssetVersion';

export class Versions {
  private axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  /**
   * バージョン関連 API
   * 最新のアプリ・アセットバージョンの取得
   *
   * @returns Promise<IGetLatestAppAssetVersion>
   */
  public async getLatestAppAssetVersion(): Promise<IGetLatestAppAssetVersion> {
    const response: AxiosResponse<IGetLatestAppAssetVersion> =
      await this.axios.get('/version/latest');
    return {
      app: {
        ...response.data.app,
        updatedAt: new Date(response.data.app.updatedAt),
      },
      asset: {
        ...response.data.asset,
        updatedAt: new Date(response.data.asset.updatedAt),
      },
    };
  }
}
