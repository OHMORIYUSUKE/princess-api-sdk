import { PrincessApiSdk } from '../src';

describe('index', () => {
  describe('PrincessApiSdk ', () => {
    it('最新のアプリ・アセットバージョンの取得', async () => {
      const princessApiSdk = new PrincessApiSdk();
      const response = await princessApiSdk.getLatestAppAssetVersion();

      console.log(response);

      expect(response).toEqual({
        app: {
          version: expect.any(String),
          updatedAt: expect.any(Date),
          revision: expect.any(Number),
        },
        asset: {
          version: expect.any(Number),
          indexName: expect.any(String),
          updatedAt: expect.any(Date),
        },
      });
    });

    it('アプリバージョンの取得(バージョン指定)', async () => {
      const princessApiSdk = new PrincessApiSdk();
      const response = await princessApiSdk.getAppVersion('1.0.6');
      console.log(response);

      expect(response).toEqual({
        version: expect.any(String),
        updatedAt: expect.any(Date),
        revision: expect.any(Number),
      });
    });

    it('アプリバージョンの取得(バージョン指定なし)', async () => {
      const princessApiSdk = new PrincessApiSdk();
      const response = await princessApiSdk.getAppVersion();
      console.log(response);

      expect(response).toEqual(
        expect.arrayContaining([
          {
            version: expect.any(String),
            updatedAt: expect.any(Date),
            revision: expect.any(Number),
          },
        ])
      );
    });
  });
});
