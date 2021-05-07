import { useState, useEffect, useContext, createContext} from 'react';
import { Route, Switch, useHistory, withRouter, useLocation } from 'react-router-dom';
import { Layout, Menu, Image } from 'antd';
import logo from './assets/logo.jpg';

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import {
  isMobile
} from "react-device-detect";

import './App.css';
import Home from './components/Home';
import Reports from './components/Reports';
import NoRoute from './components/NoRoute';
import Link from './components/Link';
import { CurrentPageTitleContext } from "./components/contexts/CurrentPageTitleContext";




const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const history = useHistory();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');


  useEffect(() => {
    if(isMobile){
      setCollapsed(true);
    }
  }, []);


  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const getSubmenuKey = (location) => {
    let arr = location.split('/');
    return arr[1];
  }

  const getMenuItemKey = (location) => {
    let arr = location.split('/');
    return arr[2];
  }

  const handleNav = (path) => {
    history.push('/' + path);
  };


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
        <div className="logo">
          <img className="logo-open" src={logo} /> 
        </div>
        <Menu theme="dark" defaultSelectedKeys={['/']} selectedKeys={[getMenuItemKey(location.pathname) || '/']} defaultOpenKeys={[getSubmenuKey(location.pathname)]} mode="inline">
          <Menu.Item key="/" icon={<DesktopOutlined />} onClick={() => {handleNav('')}}>
            Home
          </Menu.Item>
          <SubMenu key="reports" icon={<PieChartOutlined />} title="Reports">
            <Menu.Item key="report1" icon={<PieChartOutlined />} onClick={() => {handleNav('reports/report1')}}>
              Report 1
            </Menu.Item>
            <Menu.Item key="report2" icon={<PieChartOutlined />} onClick={() => {handleNav('reports/report2')}}>
              Report 2
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <CurrentPageTitleContext.Provider value={{currentTitle, setCurrentTitle}}>
        <Layout className="site-layout">
          <Header className="site-layout-background" id="app-header" >
            {currentTitle ? currentTitle : 'Page Not Found'}
          </Header>
          <Content style={{ margin: '16px 16px' }}>
            <Switch>
              <Link exact title="Home" path="/">
                <Home />
              </Link>
              <Link title="Reports" path="/reports/:reportId">
                <Reports />
              </Link>
              <Link>
                <NoRoute />
              </Link>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Deep Stonks ©2021 Created by </Footer>
        </Layout>
      </CurrentPageTitleContext.Provider>
    </Layout>
  );
}

export default withRouter(App);
