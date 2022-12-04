import React, { RefObject, useEffect, useRef } from 'react';
import * as echarts from 'echarts'; //(*===所有)，导入所有 并命名为echarts
import ReactECharts from 'echarts-for-react';

const EChartsforReact = () => {
  const options = {
    // 标题
    title: {
      text: '柱状图',
    },
    // 提示框组件
    tooltip: {
      // trigger: 'axis'
    },
    // 图例组件
    legend: {
      // data: ['销量'],
      //     show:true
    },
    // x轴
    xAxis: {
      type: 'category',
      data: ['冬瓜', '茄子', '丝瓜', '玉米', '红薯', '西红柿', '芹菜'],
    },
    // y轴
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [20, 9, 39, 43, 60, 18, 50],
        // type: 'line' 折线图
        type: 'bar', // 柱状图
        name: '销量',
      },
    ],
  };

  return (
    <ReactECharts
      option={options}
      style={{ width: '600px', height: '400px' }}
    />
  );
};
export default EChartsforReact;
