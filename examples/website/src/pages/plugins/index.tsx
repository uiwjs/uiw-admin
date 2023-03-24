import Preview from '../../components/Preview';

const Page = () => (
  <Preview path={() => import('@uiw-admin/plugins/README.md')} />
);

export default Page;
