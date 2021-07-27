export const state = () => ({
  focus: " "
});

export const mutations = {
  setFocus(state, value) {
    state.focus = value;
  }
};
