import { Badge, Icon } from 'uiw'
import useSWR from 'swr'
import AuthPage from '@uiw-admin/authorized'
import { KktproPageProps, Outlet } from '@kkt/pro'
import BasicLayout, {
  useLayouts,
  BasicLayoutProps,
} from '@uiw-admin/basic-layouts'
import LayoutsTabs from '@uiw-admin/layout-tabs'

function BasicLayoutScreen(props: KktproPageProps) {
  const { navigate, routes = [] } = props

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
    onReloadAuth: () => mutate(),
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
        <div style={{ marginRight: 20 }}>
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
    routes: routes,
    headerLayout: 'top',
    headerBackground: '#343a40',
    headerFontColor: '#fff',
  }

  return (
    <AuthPage authority={true} redirectPath="/login">
      <BasicLayout
        {...basicLayoutProps}
        routes={routes}
        onLogoClick={() => {
          navigate('/')
        }}>
        <LayoutsTabs routes={routes} />
        {/* <Outlet /> */}
      </BasicLayout>
    </AuthPage>
  )
}
export default BasicLayoutScreen
