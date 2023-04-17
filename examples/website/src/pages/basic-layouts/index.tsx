import Preview from '../../components/Preview';

const Page = () => (
  <Preview path={() => import('@uiw-admin/basic-layouts/README.md')} />
);

export default Page;
