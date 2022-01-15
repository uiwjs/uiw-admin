import { ModelDefault } from '@uiw-admin/models';


const demo: ModelDefault = {
  name: "demo",
  state: {
    drawerVisible: false,
    current: 1,
    pageSize: 20,
    dataSource: [],
    total: 0,
    filter: {},
    tableType: ''
  },
  reducers: {
    updateState: (state: any, payload: any) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch: any) => ({}),
};

export default demo