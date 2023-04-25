import { AxiosInstance, AxiosResponse } from 'axios';
import { IGetLatestAppAssetVersion } from '../schemas/Versions/IGetLatestAppAssetVersion';
import {
  IGetAppVersion,
  IGetAppVersionArray,
} from '../schemas/Versions/IGetAppVersion';
import { PrincessInvalidArgumentException } from '../errer/PrincessInvalidArgumentException';
import {
  IGetAssetVersion,
  IGetAssetVersionArray,
} from '../schemas/Versions/IGetAssetVersion';

export class Versions {
  private axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  /**
   * 最新のアプリ・アセットバージョンの取得
   * 最新のアプリバージョン、アセットバージョンを取得します。
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

  /**
   * アプリバージョンの取得
   * アプリのバージョン情報を取得します。
   * 必須アプリバージョンにもとづくため、実際には配信されていないバージョンが返される可能性があります。
   *
   * @param version バージョンを指定しない場合、レスポンスはすべてのバージョンの配列になります。
   * @returns Promise<IGetAppVersionArray | IGetAppVersion>
   */
  public async getAppVersion(
    version?: string
  ): Promise<IGetAppVersionArray | IGetAppVersion> {
    if (!version) {
      const response: AxiosResponse<IGetAppVersionArray> = await this.axios.get(
        '/version/apps'
      );
      return response.data.map(data => {
        return {
          revision: data.revision ? data.revision : null,
          updatedAt: new Date(data.updatedAt),
          version: data.version,
        };
      });
    } else {
      try {
        const response: AxiosResponse<IGetAppVersion> = await this.axios.get(
          `/version/apps/${version}`
        );
        return {
          revision: response.data.revision ? response.data.revision : null,
          updatedAt: new Date(response.data.updatedAt),
          version: response.data.version,
        };
      } catch (e) {
        throw new PrincessInvalidArgumentException(
          1,
          `Invalid argument was specified. version = ${version}`
        );
      }
    }
  }

  /**
   * アセットバージョンの取得
   * アセットのバージョン情報を取得します。
   *
   * @param version バージョンを指定しない場合、レスポンスはすべてのバージョンの配列になります。
   * @returns Promise<IGetAssetVersionArray | IGetAssetVersion>
   */
  public async getAssetVersion(
    version?: number
  ): Promise<IGetAssetVersionArray | IGetAssetVersion> {
    if (!version) {
      const response: AxiosResponse<IGetAssetVersionArray> =
        await this.axios.get('/version/assets');
      return response.data.map(data => {
        return {
          indexName: data.indexName,
          updatedAt: new Date(data.updatedAt),
          version: data.version,
        };
      });
    } else {
      try {
        const response: AxiosResponse<IGetAssetVersion> = await this.axios.get(
          `/version/assets/${version}`
        );
        return {
          indexName: response.data.indexName,
          updatedAt: new Date(response.data.updatedAt),
          version: response.data.version,
        };
      } catch (e) {
        throw new PrincessInvalidArgumentException(
          1,
          `Invalid argument was specified. version = ${version}`
        );
      }
    }
  }
}
