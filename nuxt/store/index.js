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
    console.log("projectfilter");
    console.log(projectfilter);
    state.projects = projectfilter;
  }
};

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { app, $axios }) {
    const projectsraw = await this.$axios.$get(
      "https://young-caverns-11391.herokuapp.com/api/projects?populate=*"
    );
   // console.log(projectsraw.data);
    commit("saveProjects", projectsraw.data);
  }
};
