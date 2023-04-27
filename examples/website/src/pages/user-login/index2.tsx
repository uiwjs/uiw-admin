import Preview from '../../components/Preview';

const Page = () => (
  <Preview
    path={() =>
      import(
        'https://github.com/uiwjs/react-login-page/edit/main/core/README.md'
      )
    }
  />
);

export default Page;
