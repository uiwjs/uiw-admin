import Preview from '../../components/Preview';

const Page = () => (
  <Preview path={() => import('@uiw-admin/models/README.md')} />
);

export default Page;
