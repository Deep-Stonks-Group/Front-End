import { Card, Col, Row } from 'antd';
import Reports from './Reports';
import { useHistory } from 'react-router-dom';


const { Meta } = Card


function Home() {
  const history = useHistory();

  const handleNav = (path) => {
    history.push('/' + path);
  };

  return (
    <>
    <h3>Reports</h3>
    <div style={{display: 'flex', overflow: 'auto'}}>
      <div style={{margin: 10}}>
        <Card
          onClick={() => {handleNav('reports/report1')}}
          hoverable
          style={{ width: 400 }}
          cover={<Reports reportIdProp="report1" />}>
        </Card>
      </div>
      <div style={{margin: 10}}>
        <Card
          onClick={() => {handleNav('reports/report2')}}
          hoverable
          style={{ width: 400 }}
          cover={<Reports reportIdProp="report2" />}>
        </Card>
      </div>
      <div style={{margin: 10}}>
        <Card
          onClick={() => {handleNav('reports/report2')}}
          hoverable
          style={{ width: 400 }}
          cover={<Reports reportIdProp="report2" />}>
        </Card>
      </div>
      <div style={{margin: 10}}>
        <Card
          onClick={() => {handleNav('reports/report2')}}
          hoverable
          style={{ width: 400 }}
          cover={<Reports reportIdProp="report2" />}>
        </Card>
      </div>
      <div style={{margin: 10}}>
        <Card
          onClick={() => {handleNav('reports/report2')}}
          hoverable
          style={{ width: 400 }}
          cover={<Reports reportIdProp="report2" />}>
        </Card>
      </div>
      <div style={{margin: 10}}>
        <Card
          onClick={() => {handleNav('reports/report2')}}
          hoverable
          style={{ width: 400 }}
          cover={<Reports reportIdProp="report2" />}>
        </Card>
      </div>
      <div style={{margin: 10}}>
        <Card
          onClick={() => {handleNav('reports/report2')}}
          hoverable
          style={{ width: 400 }}
          cover={<Reports reportIdProp="report2" />}>
        </Card>
      </div>
      <div style={{margin: 10}}>
        <Card
          onClick={() => {handleNav('reports/report2')}}
          hoverable
          style={{ width: 400 }}
          cover={<Reports reportIdProp="report2" />}>
        </Card>
      </div>
      <div style={{margin: 10}}>
        <Card
          onClick={() => {handleNav('reports/report2')}}
          hoverable
          style={{ width: 400 }}
          cover={<Reports reportIdProp="report2" />}>
        </Card>
      </div>
      <div style={{margin: 10}}>
        <Card
          onClick={() => {handleNav('reports/report2')}}
          hoverable
          style={{ width: 400 }}
          cover={<Reports reportIdProp="report2" />}>
        </Card>
      </div>
      <div style={{margin: 10}}>
        <Card
          onClick={() => {handleNav('reports/report2')}}
          hoverable
          style={{ width: 400 }}
          cover={<Reports reportIdProp="report2" />}>
        </Card>
      </div>
    </div>
    </>
  );
}

export default Home;
