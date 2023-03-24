import Preview from '../../components/Preview';

const Page = () => (
  <Preview path={() => import('@uiw-admin/exceptions/README.md')} />
);

export default Page;
