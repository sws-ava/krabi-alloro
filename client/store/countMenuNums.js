
// state
export const state = () => ({
  countUnreadedReviews: 1,
  countUnreadedFeedbacks: 4,
})

// getters
export const getters = {
  countUnreadedReviews: state => state.countUnreadedReviews,
  countUnreadedFeedbacks: state => state.countUnreadedFeedbacks,
}

// mutations
export const mutations = {
  SET_UNREADEDREVIEWS(state, countUnreadedReviews){
    state.countUnreadedReviews = countUnreadedReviews
  },
  SET_UNREADEDFEEDBACKS(state, countUnreadedFeedbacks){
    state.countUnreadedFeedbacks = countUnreadedFeedbacks
  },

  UPDATE_UNREADEDREVIEWS (state, { countUnreadedReviews }) {
    state.countUnreadedReviews = countUnreadedReviews
  },

  UPDATE_UNREADEDFEEDBACKS (state, { countUnreadedFeedbacks }) {
    state.countUnreadedFeedbacks = countUnreadedFeedbacks
  }
}

// actions
export const actions = {
  updateCountUnreadedReviews ({ countUnreadedReviews }, payload) {
    commit('UPDATE_UNREADEDFEEDBACKS', payload)
  },
  async countUnreadedFeedbacks(){
    try {
      let response = await axios.get('/admin/getUnreadedFeedbacksAndReviews')
      commit('UPDATE_UNREADEDFEEDBACKS', response.data)
    } catch (e) {
      console.log('some updateCountUnreadedReviews error')
    } 
  },
}
