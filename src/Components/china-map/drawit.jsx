// data-set 可以按需引入，除此之外不要引入别的包
import React from 'react';
import { Chart, View, Geom, Label } from 'bizcharts';
import DataSet from '@antv/data-set';
import Data from './china.json';

let data = Data;
const userData = [];
const geoDv = new DataSet.View().source(data, {
  type: 'GeoJSON',
}).transform({
  type: 'map',
  callback: function callback(row) {
    userData.push({
      longitude: row.centroidX,
      latitude: row.centroidY,
      name: row.name,
      value: Math.random() * (1000 - 1),
    });
    return row;
  },
});

const scale = {
  latitude: {
    sync: true,
    nice: false,
  },
  longitude: {
    sync: true,
    nice: false,
  },
};

class Demo extends React.Component {
  render() {
    
    return (
      <Chart height={window.innerHeight/2} scale={scale}  forceFit padding={0}>
        {/* // geo view */}
        <View data={geoDv}>
          <Geom type="polygon" position="longitude*latitude" color="grey">
            <Label content="name" offset={0} />
          </Geom>
        </View>
        {/* // user view */}
        <View data={userData}>
          <Geom
            type="heatmap"
            position="longitude*latitude"
            color={['value', 'red']}
            size={5}
            style={{
              blur: 1,
            }}
          />
        </View>
      </Chart>
    );
  }
}

export default Demo;
