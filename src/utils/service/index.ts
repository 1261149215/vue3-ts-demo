import axios from 'axios'
import type { AxiosRequestConfig, Method, AxiosError } from 'axios'
import type { PlainObject, RequestExtData } from './types'

export interface RequestConfig extends AxiosRequestConfig {
  type?: Method
  url: string
  data?: PlainObject
  alwaysResolve?: boolean
  timeout?: number
}
export function request<T = PlainObject>(opts: RequestConfig): Promise<T> {
  const {
    type = 'get',
    url,
    data = {},
    cancelToken,
    timeout,
    headers = {},
    alwaysResolve,
    responseType = 'json',
  } = opts;

  const source = axios.CancelToken.source();
  const axiosOptions: AxiosRequestConfig = {
    params: type.toLowerCase() === 'get' ? data : undefined,
    data,
    url,
    headers: {
      ...headers,
      token: headers.token || localStorage.getItem('token') || '',
    },
    method: type,
    timeout: timeout || 60 * 1000,
    cancelToken: cancelToken || source.token,
    responseType,
  };

  const extData: RequestExtData = {
    request: axiosOptions,
    requestStartTime: Date.now(),
  };

  const promise = new Promise<T>((resolve, reject) => {
    const req = axios(axiosOptions);
    console.log(req)

    req
      .then((res): void => {
        extData.response = res;
        extData.requestEndTime = Date.now();
        resolve(res.data as any);
      })
      .catch((error: AxiosError): void => {
        console.log(error)
        extData.requestEndTime = Date.now();
        extData.response = error.response;
        if (error.response?.status === 406) {
            // window.location.href = 
        }
        alwaysResolve ? resolve({ error } as unknown as T) : reject(error);
      });
  });

  Object.defineProperty(promise, 'extData', {
    get(): RequestExtData {
      return extData;
    },
  });

  const cancel = () => {
    !cancelToken && source.cancel();
  };

  return Object.assign(promise, { cancel });
}