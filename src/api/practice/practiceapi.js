import { axios } from '@/utils/request-local.js'
/**
 * practice func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function SheetStepApi () {
  return axios({
    url: '/sheet-type/list/0',
    method: 'get'
  })
}
export function SheetStepApiTwo () {
  return axios({
    url: '/sheet-type/list/1',
    method: 'get'
  })
}
export function SheetStepApiNext (index) {
  return axios({
    url: '/sheet-type/list/' + index,
    method: 'get'
  })
}
export function SheetStepApiDesc (index) {
  return axios({
    url: '/sheet/list/' + index,
    method: 'get'
  })
}
