import { FC, PropsWithRef } from 'react';
import { Link } from '@kkt/pro';
import Icon from '@uiw/react-icon';
import {
  Wrapper,
  Left,
  Right,
  Logo,
  HeaderTools,
  Title,
  Version,
  LinkMenu,
} from './style';

interface NavbarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

const Navbar: FC<PropsWithRef<NavbarProps>> = (props) => {
  return (
    <Wrapper>
      <Left>
        <Logo to="/">
          <Icon type="uiw" style={{ fontSize: 20 }} />
          <Title>
            UIW ADMIN<Version>{VERSION}</Version>
          </Title>
        </Logo>
      </Left>
      <Right>
        <LinkMenu to="/docs">教程</LinkMenu>
        <LinkMenu to="/components">组件</LinkMenu>
        <HeaderTools>
          <dark-mode permanent></dark-mode>
        </HeaderTools>
        <Link
          to="https://github.com/uiwjs/uiw-admin"
          target="_blank"
          style={{ color: 'var(--color-fg-default)' }}
        >
          <Icon type="github" style={{ fontSize: 20 }} />
        </Link>
      </Right>
    </Wrapper>
  );
};

export default Navbar;
