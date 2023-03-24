import Preview from '../../components/Preview';

const Page = () => (
  <Preview path={() => import('@uiw-admin/utils/README.md')} />
);

export default Page;
