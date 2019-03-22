export const global = {
  state: {
    test: '测试全局State',
    collapsed: false,
  },
  reducers: {
    updateState: (state, payload) => ({ ...state, ...payload }),
    changeCollapsed: (state, payload) => ({ ...state, collapsed: payload }),
  },
  effects: {},
};
