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
import { IGetIdolInfo, IGetIdolInfoArray } from './schemas/Idols/IGetIdolInfo';
import { Idols } from './fetch/Idols';

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
   *
   * @param version バージョンを指定しない場合、レスポンスはすべてのバージョンの配列になります。
   * @returns Promise<IGetAppVersion>
   */
  getAppVersion(version: string): Promise<IGetAppVersion>;
  getAppVersion(): Promise<IGetAppVersionArray>;
  public async getAppVersion(
    version?: string
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
  getAssetVersion(version: number): Promise<IGetAssetVersion>;
  getAssetVersion(): Promise<IGetAssetVersionArray>;
  public async getAssetVersion(
    version?: number
  ): Promise<IGetAssetVersionArray | IGetAssetVersion> {
    return new Versions(this.axios).getAssetVersion(version);
  }

  /**
   * アイドルの情報の取得
   * アイドルの情報を取得します。
   * アイドルの情報のみ取得できます。事務員の情報は取得できません。
   *
   * @param id ID を指定しない場合、レスポンスはすべてのアイドルの配列になります。
   * @returns Promise<IGetIdolInfo | IGetIdolInfoArray>
   */
  getIdolInfo(version: number): Promise<IGetIdolInfo>;
  getIdolInfo(): Promise<IGetIdolInfoArray>;
  public async getIdolInfo(
    id?: number
  ): Promise<IGetIdolInfo | IGetIdolInfoArray> {
    return new Idols(this.axios).getIdolInfo(id);
  }
}
