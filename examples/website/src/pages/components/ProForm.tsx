import Preview from '../../components/Preview';

const Page = () => (
  <Preview path={() => import('@uiw-admin/components/src/ProForm/README.md')} />
);

export default Page;
