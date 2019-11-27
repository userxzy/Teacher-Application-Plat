import { axios } from '@/utils/request-local'

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */

export function test () {
  return axios({
    url: '/sheet',
    method: 'get'
  })
}
