import { getList } from '../services/global'
export default {
  namespace: 'global',

  state: {
    loading: true,
    data: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *fetchList({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({
        type: 'save',
        payload: {
          loading: true
        }
      })
      let response = yield call(getList, payload)
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
