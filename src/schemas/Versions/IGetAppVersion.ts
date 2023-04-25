export type IGetAppVersionArray = IGetAppVersion[];

export type IGetAppVersion = {
  version: string;
  updatedAt: Date;
  revision: number | null;
};
