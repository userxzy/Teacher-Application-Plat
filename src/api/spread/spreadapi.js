import { axios } from '@/utils/request-local'

// const path = 'http://192.168.1.129/api/'

export function SpreadApi () {
  return axios({
    url: '/sheet/all',
    method: 'get'
  })
}
