export interface IGetLatestAppAssetVersion {
  app: App;
  asset: Asset;
}

interface App {
  version: string;
  updatedAt: Date;
  revision: number;
}

interface Asset {
  version: number;
  updatedAt: Date;
  indexName: string;
}
