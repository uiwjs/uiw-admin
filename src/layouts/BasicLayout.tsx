import BasicLayout, {
  useLayouts,
  BasicLayoutProps as BasicLayoutType,
} from '@uiw-admin/basic-layouts'
import { RoutersProps } from '@uiw-admin/router-control'
import { Badge, Icon } from 'uiw'
import useSWR from 'swr'
import LayoutTabs from '@uiw-admin/layout-tabs'
import AuthPage from '@uiw-admin/authorized'
interface BasicLayoutProps {
  routes: RoutersProps[]
}

function BasicLayoutScreen(props: BasicLayoutProps = { routes: [] }) {
  const layouts = useLayouts()

  const { mutate } = useSWR(['/api/reloadAuth', { method: 'POST' }], {
    revalidateOnMount: false,
    revalidateOnFocus: false,
    onSuccess: (data) => {
      if (data && data.code === 200) {
        sessionStorage.setItem('token', data.token)
        sessionStorage.setItem('auth', JSON.stringify(data.authList || []))
        localStorage.setItem('token', data.token)
        localStorage.setItem('auth', JSON.stringify(data.authList || []))
        window.location.reload()
      }
    },
  })

  const basicLayoutProps: BasicLayoutType = {
    onReloadAuth: async () => mutate(),
    // 修改密码以及其他操作在项目中进行
    menus: [
      {
        title: '欢迎来到uiw',
        icon: 'smile',
        onClick: () => layouts.closeMenu(),
      },
      {
        title: '修改密码',
        icon: 'setting',
        onClick: () => layouts.closeMenu(),
      },
    ],
    profile: {
      avatar: require('../assets/head.png'),
      menuLeft: (
        <div style={{ marginRight: 15 }}>
          <Badge count={66}>
            <Icon
              type="bell"
              // color="#fff"
              style={{ fontSize: 20 }}
            />
          </Badge>
        </div>
      ),
    },
    layouts,
    ...props,
    headerLayout: 'top',
    headerBackground: '#343a40',
    headerFontColor: '#fff',
    // hideReloadButton: true,
    // hideLogoutButton: true,
    // hideUserInfo: true
  }

  // 验证是否登录的方式
  // 1. 使用 Auth 组件
  // 2. 路由中进行处理  path==="/" 的 element 外层包裹组件进行重定向
  // return (
  //   <Auth >
  //   <BasicLayout {...basicLayoutProps} {...props} >
  //     <Outlet />
  //     {/* <LayoutTabs routes={routes || []} /> */}
  //   </BasicLayout>
  //   </Auth>
  // )
  return (
    <AuthPage authority={true} redirectPath="/login">
      <BasicLayout {...basicLayoutProps} isDefaultContentStyle={false}>
        {/* <Outlet /> */}
        <LayoutTabs routes={props.routes || []} />
      </BasicLayout>
    </AuthPage>
  )
}
export default BasicLayoutScreen
