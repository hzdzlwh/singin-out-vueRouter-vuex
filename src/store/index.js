/**
 * Created by Administrator on 2017/3/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const USER_SIGNIN = 'USER_SIGNIN'
export const USER_SIGNOUT = 'USER_SIGNOUT'


export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    user: JSON.parse(sessionStorage.getItem('user')) || {}
  },
  mutations: {
    [USER_SIGNIN](state, user) {
      sessionStorage.setItem('user', JSON.stringify(user))
      Object.assign(state.user,user)
    },
    [USER_SIGNOUT](state) {
      sessionStorage.removeItem('user')
      Object.keys(state.user).forEach(k => Vue.delete(state, k))
    }
  },
  actions: {
    [USER_SIGNIN]({commit}, user) {
      console.log(user)
      commit(USER_SIGNIN, user)
    },
    [USER_SIGNOUT]({commit}) {
      commit(USER_SIGNOUT)
    }
  }
})




