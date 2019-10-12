import { getDetailsById } from '../services/details'
export default {
  namespace: 'details',

  state: {
    loading: true,
    data: {
      reply_count: 0,
      replies: [],
      author: {},
      create_at: ''
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *fetchDetailsById({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({
        type: 'save',
        payload: {
          loading: true
        }
      })
      let response = yield call(getDetailsById, payload)
      yield put({
        type: 'save',
        payload: {
          ...response.data,
          loading: false
        }
      })
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
