import { Buffer } from 'buffer'

export const encodeBase64 = string =>
  Buffer.from(string, 'utf8').toString('base64')
export const decodeBase64 = string =>
  Buffer.from(string, 'base64').toString('utf8')
