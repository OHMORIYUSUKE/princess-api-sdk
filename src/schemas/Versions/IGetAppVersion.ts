export type IGetAppVersionArray = AppVersion[];
export type IGetAppVersion = AppVersion;

interface AppVersion {
  version: string;
  updatedAt: Date;
  revision: number | null;
}
