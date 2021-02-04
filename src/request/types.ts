import { AxiosResponse } from 'axios';

interface Response<T> {
  code: number;
  message: {
    description: string;
    detail: any;
  };
  response: T;
}

type ErrorCallback = (msg: string, res?: AxiosResponse<Response<any>>) => void;

export type { Response, ErrorCallback };
