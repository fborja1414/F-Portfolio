export const state = () => ({
  title: " ",
  projects: Object
});

export const mutations = {
  setFocus(state, value) {
    state.focus = value;
  },

  toggleLanding(state, value) {
    state.landing = value;
  },

  titleHovered(state, value) {
    state.title = value;
  },

  titleLeave(state) {
    state.title = " ";
  },

  saveProjects(state, value) {
    const projectfilter = value.sort(function(firstItem, secondItem) {
      return firstItem.id - secondItem.id;
    });
    state.projects = projectfilter;
  }
};

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { app, $axios }) {
    const projectsraw = await this.$axios.$get(
      "https://agile-peak-21162.herokuapp.com/projects"
    );
    commit("saveProjects", projectsraw);
  }
};
