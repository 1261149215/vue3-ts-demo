import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface PlainObject<T = any> {
  [key: string]: T
}

export type UnPromise<T> = T extends Promise<infer U> ? U : undefined

export interface RequestExtData<T = unknown> {
  request: AxiosRequestConfig

  requestStartTime: number

  requestEndTime?: number

  response?: AxiosResponse<unknown>

  frontendResponse?: T
}

export interface BaseApiResponse<T = unknown> {
  Code: number
  Message: string
  Result?: T | null
  RequestId?: string,
  error?: Error
}

export interface baseError {
  Code: string
  Message: string
  RequestId: string
}