import { useState, useEffect} from 'react';
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


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const history = useHistory();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('');


  useEffect(() => {
    if(isMobile){
      setCollapsed(true);
    }
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleNav = (path, label) => {
    setCurrentPage(label);
    history.push('/' + path);
  };


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
        <div className="logo">Deep Stonks</div>
        <Menu theme="dark" defaultSelectedKeys={['/']} selectedKeys={[location.pathname]} mode="inline">
          <Menu.Item key="/home" icon={<PieChartOutlined />} onClick={() => {handleNav('home', 'Home')}}>
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
      <Layout className="site-layout">
        <Header className="site-layout-background" id="app-header" >
          {currentPage}
        </Header>
        <Content style={{ margin: '16px 16px' }}>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/reports">
              <Reports />
            </Route>
          </Switch>  
        </Content>
        <Footer style={{ textAlign: 'center' }}>Deep Stonks ©2021 Created by </Footer>
      </Layout>
    </Layout>
  );
}

export default withRouter(App);
