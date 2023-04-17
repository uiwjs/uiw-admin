import Preview from '../../components/Preview';

const Page = () => (
  <Preview path={() => import('@uiw-admin/user-login/README.md')} />
);

export default Page;
