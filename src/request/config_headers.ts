import { instance } from './request';
import { UUID } from '../util';

function configHeaders(): void {
  // 指纹暂时使用 UUID，RN 可以使用设备识别号代替
  let clientId = UUID.generate();

  const clientName = 'driver';
  const version = '1.0.0';

  instance.defaults.headers.common[
    'X-Client'
  ] = `${clientName}/${version} ${clientId}`;

  instance.interceptors.request.use((config) => {
    config.headers['X-Request-Id'] = UUID.generate();
    return config;
  });
}

export default configHeaders;
