import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Totalchart from '../../Components/bizchars/totalAnalyze.jsx';
import Picktime from '../../Components/picktime.jsx';
import ListRender from '../../Components/listRender.jsx';
import PopView from '../Popview/index.jsx';
import './index.css';

class Home extends Component {
    state = {
      breakdownNumber: 123456,
      breakdownClassNumber: 11,
      breakdownClass: ['驱动系统故障报警', '制动系统故障报警', '电池管理系统故障报警'],
    }
  
    render() {
      return (
        <Row style={{ height: '100%', width: '100%' }}>
          <Col className="changeHeight" span={8}>
            <div style={{ height: '50%' }}>
              <h3>综合故障分析</h3>
              <div style={{ display: 'inline-block', width: '48%' }}>
                <Totalchart />
                <Totalchart />
              </div>
              <div style={{ display: 'inline-block', width: '48%' }}>
                <Totalchart />
                <Totalchart />
              </div>
            </div>
            <div>
              <h3>个体故障分析</h3>
              <PopView/>
            </div>
          </Col>
          <Col className="changeHeight" span={8}>
            <h2>车联网大数据应用平台</h2>
            <Picktime />
            <div style={{ height: '33%' }}>aaa</div>
            <div style={{ height: '33%' }}>
              <p>故障数量</p>
              <p>{this.state.breakdownNumber}</p>
              <p>涉及故障类别</p>
              <p>{this.state.breakdownClassNumber}个</p>
              <p>涉及故障类别</p>
              <ListRender values={this.state.breakdownClass} />
            </div>
          </Col>
          <Col className="changeHeight" span={8}>
            <div style={{ height: '50%' }} />
            <div>
            车速变化图
            </div>
          </Col>
        </Row>
      );
    }
}
export default Home;
