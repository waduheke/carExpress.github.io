import React from 'react';
import { Modal, Button } from 'antd';
import './index.css';

class PopView extends React.Component {
  state = {
    visible: false,
    windowHeight:100,
  }

  componentWillMount(){
    console.log('window:'+window.screen.availHeight);
    let height = window.screen.availHeight;
    console.log('height:'+height)
    this.setState({windowHeight:height},()=>{console.log('state:'+this.state.windowHeight);});
    //setState是异步的更新，不能直接setState后就改变！
}
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="个体用户详细"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={'75%'}
          style={{centered:true}}
          footer={null}
        >
          <div>
              <div style={{'width':'50%','display':'inline-block'}}>
                <div style={{'height':this.state.windowHeight/3.3}}>基本行驶数据</div>
                <div style={{'height':this.state.windowHeight/3.3}}>驾驶行为评价</div>
              </div>
              <div style={{'width':'50%','display':'inline-block'}}>
                <div style={{'height':this.state.windowHeight/3.3}}>不良驾驶行为</div>
                <div style={{'height':this.state.windowHeight/3.3}}>车况分析</div>
              </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default PopView;