import { PrincessApiSdk } from '../src';

describe('index', () => {
  describe('myPackage', () => {
    it('should return a string containing the message', async () => {
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
  });
});
