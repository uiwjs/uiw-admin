import Preview from '../../components/Preview';

const Page = () => <Preview path={() => import('./README.md')} />;

export default Page;
