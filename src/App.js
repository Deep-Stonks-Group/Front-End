import { useState, useEffect, useContext, createContext} from 'react';
import { Route, Switch, useHistory, withRouter, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

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
  const [currentTitle, setCurrentTitle] = useState('')

  useEffect(() => {
    if(isMobile){
      setCollapsed(true);
    }
  }, []);


  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleNav = (path, label) => {
    history.push('/' + path);
  };


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
        <div className="logo">Deep Stonks</div>
        <Menu theme="dark" defaultSelectedKeys={['/']} selectedKeys={[location.pathname]} mode="inline">
          <Menu.Item key="/" icon={<PieChartOutlined />} onClick={() => {handleNav('', 'Home')}}>
            Home
          </Menu.Item>
          <Menu.Item key="/reports" icon={<DesktopOutlined />} onClick={() => {handleNav('reports', 'Reports')}}>
            Reports
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
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
              <Link title="Reports" path="/reports">
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
