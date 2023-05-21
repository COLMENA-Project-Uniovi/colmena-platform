export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },

  getProject(state) {
    return state.project;
  },
  getSubject(state) {
    return JSON.parse(localStorage.getItem('subject'));
  },
  getGroup(state) {
    return JSON.parse(localStorage.getItem('group'));
  },
  getSupervisor(state) {
    return JSON.parse(localStorage.getItem('supervisor'));
  },
  getPageTitle(state) {
    return state.pageTitle;
  }
}

export const state = () => ({
  project: null,
  subject: null,
  group: null,
  supervisor: null,
  pageTitle: null,
  pagePreTitle: null,
})

export const mutations = {
  setProject(state, value) {
    state.project = value;
  },
  setSubject(state, value) {
    localStorage.setItem('subject', value);
    state.subject = value;
  },
  setGroup(state, value) {
    localStorage.setItem('group', value);
    state.group = value;
  },
  setSupervisor(state, value) {
    localStorage.setItem('supervisor', value);
  },
  setPageTitle(state, title) {
    state.pageTitle = title;
  },
}
