export interface SdConf {
  npt: string;
  webUrl: string;
  loginUrl: string;
  logoutUrl: string;
  checkUrl: string;
  permissionUrl: string;
  whiteList: string[];
}

export interface RedisConf {
  urls: string[];
  tokenEx: string | number;
  username: string;
  password: string;
  dbIndex: number | string;
}
