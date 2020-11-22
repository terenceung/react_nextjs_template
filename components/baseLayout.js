import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import { useRouter } from 'next/router';
import { routes } from '../routes';
import { withTranslation } from '../i18n';

function BaseLayout({ children, title, t, breadcrumbs }) {
  const [isCollapsed, onCollapse] = useState(false);
  const router = useRouter();


  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={isCollapsed} onCollapse={onCollapse}>
          <div className={styles.logo} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" selectedKeys={[router.route]}>
            {routes.map(route => route.children ?
              <SubMenu key={route.route} title={t(route.name)}>
                {route.children.map(child =>
                  <Menu.Item key={child.route}>
                    <Link href={child.route}>{t(child.name)}</Link>
                  </Menu.Item>)}
              </SubMenu> :
              <Menu.Item key={route.route}>
                <Link href={route.route}>{t(route.name)}</Link>
              </Menu.Item>)
            }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {breadcrumbs ?
                breadcrumbs.map(breadcrumb => <Breadcrumb.Item key={breadcrumb.name} href={breadcrumb.link}>{t(breadcrumb.name)}</Breadcrumb.Item>) :
                <Breadcrumb.Item>{t('home')}</Breadcrumb.Item>}
            </Breadcrumb>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Your footer</Footer>
        </Layout>
      </Layout>
    </React.Fragment>
  )
}

export default withTranslation('common')(BaseLayout);