import Preview from '../../components/Preview';

const Page = () => (
  <Preview path={() => import('@uiw-admin/layout-tabs/README.md')} />
);

export default Page;
