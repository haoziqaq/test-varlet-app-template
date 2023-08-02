import { UseAxleOptions } from '@varlet/axle/use'

export interface Response<T> {
  data: T
  code: number
  message: string
}

export interface PageParams {
  current?: number
}

export type Options<D, R = any, P = Record<string, any>> = Partial<Omit<UseAxleOptions<D, R, P>, 'data'>> &
  Pick<UseAxleOptions<D, R, P>, 'data'>
