import { useState, useEffect} from 'react';
import { Route, Switch, useHistory, withRouter } from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import {
  isBrowser,
  isMobile
} from "react-device-detect";

import './App.css';


import Home from './components/Home';
import Page1 from './components/Page1';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function App() {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('');


  useEffect(() => {
    if(isMobile){
      setCollapsed(true);
    }
    handleNav('home', 'Home');
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
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />} onClick={() => {handleNav('home', 'Home')}}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />} onClick={() => {handleNav('page1', 'Page 1')}}>
            Option 2
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
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <Switch>
            <Route path="/home">
             <Home />
           </Route>
           <Route path="/page1">
             <Page1 />
           </Route>
         </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Deep Stonks ©2021 Created by </Footer>
      </Layout>
    </Layout>
  );
}

export default withRouter(App);
