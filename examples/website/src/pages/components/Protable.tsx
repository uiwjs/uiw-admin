import Preview from '../../components/Preview';

const Page = () => (
  <Preview
    path={() => import('@uiw-admin/components/src/ProTable/README.md')}
  />
);

export default Page;
