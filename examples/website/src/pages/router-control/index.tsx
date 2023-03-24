import Preview from '../../components/Preview';

const Page = () => (
  <Preview path={() => import('@uiw-admin/router-control/README.md')} />
);

export default Page;
