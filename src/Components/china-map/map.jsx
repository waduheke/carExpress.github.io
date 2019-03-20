import React from 'react';
import DataSet from '@antv/data-set';
import {
    G2,
    Chart,
  } from "bizcharts";
import map from"./province.json";
const userData = [];
const geoDv = new DataSet.View().source(data,{
    type:'GeoJSON'
}).transform({
    
})
class Drawit extends React.Component{

    render(){
        const data = [
            { month: '一月', temperature: 5, city: '北京' },
            { month: '二月', temperature: 10, city: '北京' },
            { month: '一月', temperature: 8, city: '南京' },
            { month: '二月', temperature: 14, city: '南京' }
          ];
        const chart = new G2.Chart({
            id: 'mountNode',
            width: 400,
            height: 200
          });
          chart.source(data);
          chart.point().position('month*temperature').color('city', [ '#1890FF', '#2FC25B' ]);
          chart.render();
        return(
            <Chart data={data} forcFit={true}  />
        )
    }
}

export default Drawit;