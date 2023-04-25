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

  it('アセットバージョンの取得(バージョン指定)', async () => {
    const princessApiSdk = new PrincessApiSdk();
    const response = await princessApiSdk.getAssetVersion(1);

    expect(response).toEqual({
      version: expect.any(Number),
      updatedAt: expect.any(Date),
      indexName: expect.any(String),
    });
  });

  it('アセットバージョンの取得(バージョン指定なし)', async () => {
    const princessApiSdk = new PrincessApiSdk();
    const response = await princessApiSdk.getAssetVersion();

    expect(response).toEqual(
      expect.arrayContaining([
        {
          version: expect.any(Number),
          updatedAt: expect.any(Date),
          indexName: expect.any(String),
        },
      ])
    );
  });

  it('アセットバージョンの取得(バージョン指定(バージョンが不正))', async () => {
    async function errFunction() {
      const princessApiSdk = new PrincessApiSdk();
      await princessApiSdk.getAssetVersion(-1);
    }

    await expect(errFunction).rejects.toThrow(PrincessInvalidArgumentException);
  });

  it('アイドルの情報の取得(ID指定)', async () => {
    const princessApiSdk = new PrincessApiSdk();
    const response = await princessApiSdk.getIdolInfo(1);

    expect(response).toEqual({
      id: expect.any(Number),
      sortId: expect.any(Number),
      resourceId: expect.any(String),
      type: expect.any(Number),
      fullName: expect.any(String),
      displayName: expect.any(String),
      lastName: expect.any(String),
      firstName: expect.any(String),
      alphabetName: expect.any(String),
      fullNameRuby: expect.any(String),
      age: expect.any(Number),
      birthplace: {
        id: expect.any(Number),
        name: expect.any(String),
      },
      handednessType: {
        id: expect.any(Number),
        name: expect.any(String),
      },
      height: expect.any(Number),
      weight: expect.any(Number),
      hobby: expect.any(String),
      speciality: expect.any(String),
      favorites: expect.any(String),
      cv: expect.any(String),
      colorCode: expect.any(String),
      birthday: {
        month: expect.any(Number),
        day: expect.any(Number),
      },
      constellation: {
        id: expect.any(Number),
        name: expect.any(String),
      },
      bloodType: {
        id: expect.any(Number),
        name: expect.any(String),
      },
      measurements: {
        bust: expect.any(Number),
        waist: expect.any(Number),
        hip: expect.any(Number),
      },
    });
  });

  it('アイドルの情報の取得(ID指定なし)', async () => {
    const princessApiSdk = new PrincessApiSdk();
    const response = await princessApiSdk.getIdolInfo();

    expect(response).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          sortId: expect.any(Number),
          resourceId: expect.any(String),
          type: expect.any(Number),
          fullName: expect.any(String),
          displayName: expect.any(String),
          lastName: expect.any(String),
          firstName: expect.any(String),
          alphabetName: expect.any(String),
          fullNameRuby: expect.any(String),
          age: expect.any(Number),
          birthplace: {
            id: expect.any(Number),
            name: expect.any(String),
          },
          handednessType: {
            id: expect.any(Number),
            name: expect.any(String),
          },
          height: expect.any(Number),
          weight: expect.any(Number),
          hobby: expect.any(String),
          speciality: expect.any(String),
          favorites: expect.any(String),
          cv: expect.any(String),
          colorCode: expect.any(String),
          birthday: {
            month: expect.any(Number),
            day: expect.any(Number),
          },
          constellation: {
            id: expect.any(Number),
            name: expect.any(String),
          },
          bloodType: {
            id: expect.any(Number),
            name: expect.any(String),
          },
          measurements: {
            bust: expect.any(Number),
            waist: expect.any(Number),
            hip: expect.any(Number),
          },
        },
      ])
    );
  });

  it('アイドルの情報の取得(ID指定(IDが不正))', async () => {
    async function errFunction() {
      const princessApiSdk = new PrincessApiSdk();
      await princessApiSdk.getIdolInfo(-1);
    }

    await expect(errFunction).rejects.toThrow(PrincessInvalidArgumentException);
  });
});
