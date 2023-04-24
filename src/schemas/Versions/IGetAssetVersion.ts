export type IGetAssetVersionArray = AssetVersion[];
export type IGetAssetVersion = AssetVersion;

interface AssetVersion {
  version: number;
  updatedAt: Date;
  indexName: string;
}
