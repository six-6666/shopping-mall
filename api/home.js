import request from './request/request.js'

export function gethomes() {
  return request.request({
		url:'/home/multidata',
		method: 'get'
  })
}
export function getHomeGoods() {
  return request.request({
    url: '/home/data?type=sell&page=1',
		method:'get',
    // params: {
    //   type,
    //   page
    // }
  })
}