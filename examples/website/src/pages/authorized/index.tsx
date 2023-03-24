import Preview from '../../components/Preview';

const Page = () => (
  <Preview path={() => import('@uiw-admin/authorized/README.md')} />
);

export default Page;
