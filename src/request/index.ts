import { instance, Request } from './request';

import configHeaders from './config_headers';
import configTrace from './config_trace';
import configError from './config_error';
import { initAuth, clearAuth } from './init';

export {
  instance,
  Request,
  configHeaders,
  configTrace,
  configError,
  initAuth,
  clearAuth,
};

export type { Response } from './types';
