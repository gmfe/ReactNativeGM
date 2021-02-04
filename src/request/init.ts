import { AsyncStorage } from '../';
import _ from 'lodash';
import { instance } from './request';
import { authInfoKey, accessTokenKey } from './util';

let accessToken: string | null;
let authInfo: { url: string; field: string } | undefined;

export function initAuth(url: string, field: string) {
  authInfo = { url, field };
  AsyncStorage.save(authInfoKey, authInfo);

  instance.interceptors.request.use((config) => {
    if (!accessToken) {
      AsyncStorage.loadString(accessTokenKey).then((res) => {
        accessToken = res;
      });
    }
    console.log('==>accessToken', accessToken);
    if (accessToken) {
      config.headers.authorization = accessToken;
    }
    return config;
  });

  instance.interceptors.response.use((response) => {
    const json = response.data;
    const { url } = response.config;
    if (authInfo?.url === url && authInfo?.field) {
      const accessToken = _.get(json, authInfo.field);
      if (accessToken && typeof accessToken === 'string') {
        AsyncStorage.saveString(accessTokenKey, accessToken);
      }
    }

    return response;
  });
}

export function clearAuth() {
  AsyncStorage.remove(accessTokenKey);
  accessToken = null;
}
