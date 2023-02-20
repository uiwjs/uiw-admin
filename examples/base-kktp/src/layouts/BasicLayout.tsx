import { useMemo } from 'react'
import BasicLayout, {
  useLayouts,
  BasicLayoutProps as BasicLayoutType,
} from '@uiw-admin/basic-layouts'
import { RoutesBaseProps } from '@uiw-admin/router-control'
import { Badge, Icon } from 'uiw'
import useSWR from 'swr'
import LayoutTabs from '@uiw-admin/layout-tabs'
import AuthPage from '@uiw-admin/authorized'
// @ts-ignore
import RoutePathArr from '@@/routes/config'
interface BasicLayoutProps {
  routes: RoutesBaseProps[]
}

function BasicLayoutScreen(props: BasicLayoutProps) {
  const route = useMemo(() => {
    const routes = RoutePathArr.find((item: any) => item.path === '/')
    return routes ? routes.children : []
  }, [])

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

  return (
    <AuthPage authority={true} redirectPath="/login">
      <BasicLayout
        {...basicLayoutProps}
        routes={route as RoutesBaseProps[]}
        onLogoClick={(event: any) => {
          // history.push("/demo#/tableList");
          console.log('logo点击事件', event)
        }}
        isDefaultContentStyle={false}>
        <LayoutTabs routes={RoutePathArr || []} />
      </BasicLayout>
    </AuthPage>
  )
}
export default BasicLayoutScreen
