import { AxiosInstance, AxiosResponse } from 'axios';
import { IGetIdolInfo, IGetIdolInfoArray } from '../schemas/Idols/IGetIdolInfo';
import { PrincessInvalidArgumentException } from '../errer/PrincessInvalidArgumentException';

export class Idols {
  private axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  /**
   * アイドルの情報の取得
   * アイドルの情報を取得します。
   * アイドルの情報のみ取得できます。事務員の情報は取得できません。
   *
   * @returns Promise<IGetLatestAppAssetVersion>
   */
  public async getIdolInfo(
    id?: number
  ): Promise<IGetIdolInfo | IGetIdolInfoArray> {
    if (!id) {
      const response: AxiosResponse<IGetIdolInfoArray> = await this.axios.get(
        '/idols'
      );
      return response.data;
    } else {
      try {
        const response: AxiosResponse<IGetIdolInfo> = await this.axios.get(
          `/idols/${id}`
        );
        return response.data;
      } catch (e) {
        throw new PrincessInvalidArgumentException(
          1,
          `Invalid argument was specified. id = ${id}`
        );
      }
    }
  }
}
