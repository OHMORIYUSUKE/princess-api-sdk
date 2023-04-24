import { PrincessApiSdk } from '../src';
import { PrincessInvalidArgumentException } from '../src/errer/PrincessInvalidArgumentException';

describe('index', () => {
  describe('PrincessApiSdk ', () => {
    it('最新のアプリ・アセットバージョンの取得', async () => {
      const princessApiSdk = new PrincessApiSdk();
      const response = await princessApiSdk.getLatestAppAssetVersion();

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

      expect(response).toEqual({
        version: expect.any(String),
        updatedAt: expect.any(Date),
        revision: expect.any(Number),
      });
    });

    it('アプリバージョンの取得(バージョン指定なし)', async () => {
      const princessApiSdk = new PrincessApiSdk();
      const response = await princessApiSdk.getAppVersion();

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

    it('アプリバージョンの取得(バージョン指定(バージョンが不正))', async () => {
      async function errFunction() {
        const princessApiSdk = new PrincessApiSdk();
        await princessApiSdk.getAppVersion('X.X.X');
      }

      await expect(errFunction).rejects.toThrow(
        PrincessInvalidArgumentException
      );
    });
  });
});
