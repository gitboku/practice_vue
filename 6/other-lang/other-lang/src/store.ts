import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ストア定義
const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: '牛乳を買う',
        done: false
      },
      {
        id: 2,
        name: '本を買う',
        done: true
      }
    ],
  },
})

export default store

