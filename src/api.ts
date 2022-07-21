import { RedisConf, SdConf } from "./interface";

export const useApi = (sdConf: SdConf, redisConf: RedisConf) => {
  const check = () => {
    const username = "";
    const token = "";
    return { username, token };
  };

  const permission = () => {
    const info = { menus: [] };
    return info;
  };

  const logout = () => {
    const logoutUrl = "";
    return logoutUrl;
  };
  return { check, permission, logout };
};
