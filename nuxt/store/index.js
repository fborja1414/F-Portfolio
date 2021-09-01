export const state = () => ({
  focus: " ",
  title: " ",
  landing: false
});

export const mutations = {
  setFocus(state, value) {
    state.focus = value;
  },

  toggleLanding(state) {
    state.landing = !state.landing;
  },

  titleHovered(state, value) {
    state.title = value;
  },

  titleLeave(state) {
    state.title = " ";
  }
};
