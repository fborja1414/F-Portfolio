export const state = () => ({
  focus: " ",
  title: " "
});

export const mutations = {
  setFocus(state, value) {
    state.focus = value;
  },

  titleHovered(state, value) {
    state.title = value;
  },

  titleLeave(state) {
    state.title = " ";
  }
};
