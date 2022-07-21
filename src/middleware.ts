import { RedisConf, SdConf } from "./interface";

export const useMiddleWare = (sdConf: SdConf, redisConf: RedisConf) => {
  const authMidWare = () => {
    return true;
  };
  return { authMidWare };
};
