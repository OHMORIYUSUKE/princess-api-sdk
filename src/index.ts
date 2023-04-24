import { AxiosInstance } from 'axios';
import { axios } from './fetch/main';
import { IGetLatestAppAssetVersion } from './schemas/Versions/IGetLatestAppAssetVersion';
import { Versions } from './fetch/Versions';
import {
  IGetAppVersion,
  IGetAppVersionArray,
} from './schemas/Versions/IGetAppVersion';
import {
  IGetAssetVersion,
  IGetAssetVersionArray,
} from './schemas/Versions/IGetAssetVersion';

export class PrincessApiSdk {
  private axios: AxiosInstance;
  constructor(myAxios = axios) {
    this.axios = myAxios;
  }
  /**
   * 最新のアプリ・アセットバージョンの取得
   * 最新のアプリバージョン、アセットバージョンを取得します。
   *
   * @returns Promise<IGetLatestAppAssetVersion>
   */
  public async getLatestAppAssetVersion(): Promise<IGetLatestAppAssetVersion> {
    return new Versions(this.axios).getLatestAppAssetVersion();
  }

  /**
   * アプリバージョンの取得
   * アプリのバージョン情報を取得します。
   * 必須アプリバージョンにもとづくため、実際には配信されていないバージョンが返される可能性があります。
   * @param version
   * @returns Promise<IGetAppVersion>
   */
  public async getAppVersion(
    version = ''
  ): Promise<IGetAppVersionArray | IGetAppVersion> {
    return new Versions(this.axios).getAppVersion(version);
  }

  /**
   * アセットバージョンの取得
   * アセットのバージョン情報を取得します。
   *
   * @param version バージョンを指定しない場合、レスポンスはすべてのバージョンの配列になります。
   * @returns Promise<IGetAssetVersionArray | IGetAssetVersion>
   */
  public async getAssetVersion(
    version = 0
  ): Promise<IGetAssetVersionArray | IGetAssetVersion> {
    return new Versions(this.axios).getAssetVersion(version);
  }
}
