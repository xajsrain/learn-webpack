import { useSdPlatform } from "./index";
import { RedisConf, SdConf } from "./interface";
const sdConf: SdConf = {
  npt: "",
  webUrl: "",
  checkUrl: "",
  loginUrl: "",
  logoutUrl: "",
  permissionUrl: "",
  whiteList: [""],
};
const redisConf: RedisConf = {
  urls: [""],
  tokenEx: 3600,
  dbIndex: 11,
  username: "jack",
  password: "",
};
const sds = useSdPlatform(sdConf, redisConf);
// sds.authMidWare();
