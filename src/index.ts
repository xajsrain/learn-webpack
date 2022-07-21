// 中间件：一个方法，返回布尔值
// 请求接口：一些方法，返回请求数据

import { useMiddleWare } from "./middleware";
import { useApi } from "./api";
import { RedisConf, SdConf } from "./interface";

const useSdPlatform = (sdConf: SdConf, redisConf: RedisConf) => {
  const apis = useApi(sdConf, redisConf);
  const middlewares = useMiddleWare(sdConf, redisConf);
  return { ...apis, ...middlewares };
};
export { useSdPlatform };
