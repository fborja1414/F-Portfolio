export const state = () => ({
  focus: " ",
  title: " ",
  landing: false
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
  }
};
