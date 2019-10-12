import request from '../utils/request'

// 获取首页列表
export async function getList(params) {
  return request(`https://cnodejs.org/api/v1/topics?tab=${params.tab}&limit=20&page=${params.page}`)
}
