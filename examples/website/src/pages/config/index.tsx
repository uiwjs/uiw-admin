import Preview from '../../components/Preview';

const Page = () => (
  <Preview path={() => import('@uiw-admin/config/README.md')} />
);

export default Page;
