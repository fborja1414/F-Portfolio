export const state = () => ({
  focus: " ",
  scrolledfocus: [],
  title: " "
});

export const mutations = {
  setFocus(state, value) {
    state.focus = value;
  },

  updateFocus(state, value) {
    state.scrolledfocus.push(value);
  },
  resetFocus(state) {
    state.scrolledfocus = [];
  },

  titleHovered(state, value) {
    state.title = value;
  },

  titleLeave(state) {
    state.title = " ";
  }
};
