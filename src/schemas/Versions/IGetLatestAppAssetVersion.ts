export interface IGetLatestAppAssetVersion {
  app: App;
  asset: Asset;
}

type App = {
  version: string;
  updatedAt: Date;
  revision: number | null;
};

type Asset = {
  version: number;
  updatedAt: Date;
  indexName: string;
};
