import Preview from '../../components/Preview';

const Page = () => (
  <Preview
    path={() => import('@uiw-admin/components/src/Skeleton/README.md')}
  />
);

export default Page;
