import { myPackage } from '../src';

describe('index', () => {
  describe('myPackage', () => {
    it('should return a string containing the message', async () => {
      const message = 'Hello';

      const result = await myPackage(message);

      expect(result).toMatch(message);
    });
  });
});
