export type IGetAppVersionArray = Version[];
export type IGetAppVersion = Version;

interface Version {
  version: string;
  updatedAt: Date;
  revision: number | null;
}
