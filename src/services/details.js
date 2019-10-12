import request from '../utils/request'

// 根据ID获取详情
export async function getDetailsById(params) {
  return request(`https://cnodejs.org/api/v1/topic/${params.id}`)
}
