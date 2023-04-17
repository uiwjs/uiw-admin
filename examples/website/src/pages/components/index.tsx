import Preview from '../../components/Preview';

const Page = () => (
  <Preview path={() => import('@uiw-admin/components/README.md')} />
);

export default Page;
