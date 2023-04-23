export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },

  getProject(state) {
    return JSON.parse(localStorage.getItem('project'));
  }
}

export const state = () => ({
  project: null,
  pageTitle: null
})

export const mutations = {
  setProject(state, value) {
    localStorage.setItem('project', value);
    state.project = value;
  },
  setPageTitle (state, title) {
    state.pageTitle = title
  }
}
