import React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from 'bizcharts';

class TotalChart extends React.Component {
  
  state={
    height:230,
  }

  componentWillMount(){
    let height = window.screen.availHeight
    this.setState({height:height})
  }
  
  render() {
    const data = [
      {
        year: '1991',
        value: 3,
      },
      {
        year: '1992',
        value: 4,
      },
      {
        year: '1993',
        value: 3.5,
      },
      {
        year: '1994',
        value: 5,
      },
      {
        year: '1995',
        value: 4.9,
      },
      {
        year: '1996',
        value: 6,
      },
      {
        year: '1997',
        value: 7,
      },
      {
        year: '1998',
        value: 9,
      },
      {
        year: '1999',
        value: 13,
      },
      {
        year: '2000',
        value: 9,
      },
      {
        year: '2001',
        value: 9,
      },
      {
        year: '2002',
        value: 9,
      },
    ];
    const cols = {
      value: {
        min: 0,
      },
      year: {
        range: [0, 1],
      },
    };
    if (this.chart) {
      this.chart.forceFit();
    }
    // 这里考虑获取屏幕整体高度，通过换算确定一个图形的具体高度，用px表示，通过变量传入，实现响应式
    return (
      <div >
        <Chart height={this.state.height/4.4}  data={data} scale={cols} onGetG2Instance={(chart) => {
        this.chart = chart;
      }} forceFit>
          <Axis name="year" />
          <Axis name="value" />
          <Tooltip
            crosshairs={{
              type: 'y',
            }}
          />
          <Geom type="line" position="year*value" size={2} />
          <Geom
            type="point"
            position="year*value"
            size={4}
            shape={'circle'}
            style={{
              stroke: '#fff',
              lineWidth: 1,
            }}
          />
        </Chart>
      </div>
    );
  }
}

export default TotalChart;
