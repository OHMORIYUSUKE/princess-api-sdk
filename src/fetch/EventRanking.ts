import { AxiosInstance, AxiosResponse } from 'axios';
import { IGetIdolInfo, IGetIdolInfoArray } from '../schemas/Idols/IGetIdolInfo';
import { PrincessInvalidArgumentException } from '../errer/PrincessInvalidArgumentException';
import { axios } from './main';
import { IGetBorderInfo } from '../schemas/EventRanking/IGetBorderInfo';

/**
 * イベントランキング関連 API
 * matsurihi.me 側で取得していない順位・時刻のデータは取得できません。
 * 「Good-Sleep, Baby♡」から「花ざかり Weekend✿」までの個人ランキングのデータは TheaterGate 提供です。
 * pt・スコアは Integer で返します。
 */
export class EventRanking {
  private axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  /**
   * WIP
   * アイドルの情報の取得
   * アイドルの情報を取得します。
   * アイドルの情報のみ取得できます。事務員の情報は取得できません。
   *
   * @returns Promise<IGetLatestAppAssetVersion>
   */
  public async getCurrentBorderScore() {
    const res = await axios.get('/events/192/rankings/borderPoints');
    const etag = res.headers['etag'] as string;
    console.log(etag);
  }

  /**
   * ボーダー情報の取得
   * ランキングイベントの報酬ボーダーの情報を取得します。
   *
   * @returns Promise<IGetBorderInfo>
   */
  public async getBorderInfo(id: number): Promise<IGetBorderInfo> {
    try {
      const response: AxiosResponse<IGetBorderInfo> = await axios.get(
        `/events/${String(id)}/rankings/borders`
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
