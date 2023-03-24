import Preview from '../../components/Preview';

const Page = () => (
  <Preview path={() => import('@uiw-admin/document-title/README.md')} />
);

export default Page;
