export type IGetAppVersionArray = IGetAppVersion[];

export interface IGetAppVersion {
  version: string;
  updatedAt: Date;
  revision: number | null;
}
