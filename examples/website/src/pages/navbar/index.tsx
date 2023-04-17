import Preview from '../../components/Preview';

const Page = () => (
  <Preview path={() => import('@uiw-admin/markdown-navbar/README.md')} />
);

export default Page;
