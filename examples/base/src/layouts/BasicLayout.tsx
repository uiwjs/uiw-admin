import BasicLayout, {
  useLayouts,
  BasicLayoutProps,
} from '@uiw-admin/basic-layouts'
import { Badge, Icon } from 'uiw'
import useSWR from 'swr'
import { Outlet } from 'react-router-dom'
import AuthPage from '@uiw-admin/authorized'
import { KktproPageProps } from '@kkt/pro'

function BasicLayoutScreen(props: KktproPageProps) {
  const route = props.routes

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

  const basicLayoutProps: BasicLayoutProps = {
    onReloadAuth: async () => mutate(),
    // 修改密码以及其他操作在项目中进行
    menus: [
      {
        title: '欢迎来到uiw',
        icon: <Icon type="smile" />,
        onClick: () => layouts.closeMenu(),
      },
      {
        title: '修改密码',
        icon: <Icon type="setting" />,
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
    routes: props.routes as any,
    headerLayout: 'top',
    headerBackground: '#343a40',
    headerFontColor: '#fff',
  }

  return (
    <AuthPage authority={true} redirectPath="/login">
      <BasicLayout
        {...basicLayoutProps}
        routes={route as any}
        onLogoClick={(event: any) => {
          // history.push("/demo#/tableList");
          console.log('logo点击事件', event)
        }}
        isDefaultContentStyle={false}>
        <Outlet />
      </BasicLayout>
    </AuthPage>
  )
}
export default BasicLayoutScreen
