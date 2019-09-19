// import axios from 'axios'
// import $ from 'jquery'

export default {
  namespaced: true,
  state: {
<<<<<<< HEAD
    messages: []
=======
    messages: [],
>>>>>>> 334e8f4060868643cf64bb998f97d6f6b134a7a3
  },
  actions: {
    updateMessage (context, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000)
      context.commit('MESSAGES', { message, status, timestamp })
      // this.removeMessageWithTiming(timestamp)
      context.dispatch('removeMessageWithTiming', timestamp)
    },
    removeMessage (context, num) {
      context.commit('REMOVEMESSAGE', num)
    },
    removeMessageWithTiming (context, timestamp) {
      setTimeout(() => {
        context.commit('REMOVEMESSAGEWITHTIMING', timestamp)
      }, 5000)
    }
  },
  mutations: {
<<<<<<< HEAD
    MESSAGES (state, payload) {
      state.messages.push(payload)
    },
    REMOVEMESSAGE (state, payload) {
      state.messages.splice(payload, 1)
    },
    REMOVEMESSAGEWITHTIMING (state, payload) {
=======
    MESSAGES(state, payload) {
      state.messages.push(payload)
    },
    REMOVEMESSAGE(state, payload) {
      state.messages.splice(payload, 1)
    },
    REMOVEMESSAGEWITHTIMING(state, payload) {
>>>>>>> 334e8f4060868643cf64bb998f97d6f6b134a7a3
      state.messages.forEach((item, i) => {
        if (item.timestamp === payload) {
          state.messages.splice(i, 1)
        }
      })
    }
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 334e8f4060868643cf64bb998f97d6f6b134a7a3
