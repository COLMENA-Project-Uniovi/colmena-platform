export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },

  getProject(state) {
    return JSON.parse(localStorage.getItem('project'));
  },
  getSubject(state) {
    return JSON.parse(localStorage.getItem('subject'));
  },
  getGroup(state) {
    return JSON.parse(localStorage.getItem('group'));
  },
  getPreTitle(state) {
    return localStorage.getItem('pretitle');
  }
}

export const state = () => ({
  project: null,
  subject: null,
  group: null,
  pageTitle: null,
  pagePreTitle: null,
})

export const mutations = {
  setProject(state, value) {
    localStorage.setItem('project', value);
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
  setPageTitle(state, title) {
    state.pageTitle = title
  },
  setPagePreTitle(state, title) {
    localStorage.setItem('pretitle', title);
  }
}
