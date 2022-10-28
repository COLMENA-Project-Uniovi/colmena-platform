export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },

  getProject(state) {
    return state.project;
  }
}

export const state = () => ({
  project: null,
})

export const mutations = {
  setProject(state, value) {
    state.project = value;
  }
}
