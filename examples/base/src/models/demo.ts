import { ModelDefault, Dispatch } from '@uiw-admin/models';
import { insert, selectById, update } from '../servers/demo'
import { Notify } from 'uiw'

const demo: ModelDefault = {
  name: "demo",
  state: {
    drawerVisible: false,
    tableType: '',
    queryInfo: {},
    isView: false
  },
  reducers: {
    updateState: (state: any, payload: any) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch: any) => ({
    async insert(payload: any) {
      const dph = dispatch as Dispatch;
      const data = await insert(payload);
      if (data.code === 200) {
        Notify.success({ title: data.message });
        dph.demo.clean()
      }
    },
    async update(payload: any) {
      const dph = dispatch as Dispatch;
      const data = await update(payload);
      if (data.code === 200) {
        Notify.success({ title: data.message });
        dph.demo.clean()
      }
    },
    async selectById(payload: any) {
      const dph = dispatch as Dispatch;
      const data = await selectById(payload);
      if (data.code === 200) {
        dph.demo.updateState({
          drawerVisible: true,
          queryInfo: data.data || {},
        });
      }
    },
    clean() {
      const dph = dispatch as Dispatch;
      dph.demo.updateState({
        drawerVisible: false,
        tableType: '',
        queryInfo: {},
        isView: false
      });
    }
  }),
};

export default demo