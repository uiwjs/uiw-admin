export const global = {
  state: {
    collapsed: false,
  }, // initial state
  reducers: {
    changeCollapsed(state, payload) {
      return { ...state, collapsed: payload };
    },
  },
  effects: {
  },
};
