import { Wrap, Hero, BtnGroup, LinkMenu, LinkA, Footer } from './style';

const Page = () => {
  return (
    <Wrap>
      <Hero>
        <h1>UIW ADMNIN</h1>
        <p>
          一个基于{' '}
          <a href="https://github.com/uiwjs/uiw/" target="_blank">
            uiw
          </a>{' '}
          和{' '}
          <a href="https://github.com/kktjs/kkt-pro" target="_blank">
            @kkt/pro
          </a>{' '}
          的初始级别项目
        </p>
        <BtnGroup>
          <LinkMenu to="/docs/quick-start">立即上手</LinkMenu>
          <LinkA href="https://github.com/uiwjs/uiw-admin" target="_blank">
            GitHub
          </LinkA>
        </BtnGroup>
      </Hero>
      <Footer>
        <h3>贡献者</h3>
        <p>感谢所有的贡献者，欢迎开发者为开源项目贡献力量。</p>
        <a
          href="https://github.com/uiwjs/uiw-admin/graphs/contributors"
          target="_blank"
        >
          <img
            src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg"
            alt=""
          />
        </a>
        <div style={{ height: 50 }} />
        <h3>License</h3>
        <p>Licensed under the MIT License.</p>
      </Footer>
    </Wrap>
  );
};
export default Page;
