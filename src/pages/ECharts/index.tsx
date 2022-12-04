import React, { RefObject, useEffect, useRef } from 'react';
import * as echarts from 'echarts'; //(*===所有)，导入所有 并命名为echarts
import reactElementToJSXString from 'react-element-to-jsx-string';

const Index = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const pieRef = useRef<HTMLDivElement>(null);
  const options = {
    // 标题
    title: {
      subtext: '数据size',
    },
    // 提示框组件
    tooltip: {
      // trigger: 'axis'
    },
    // 图例组件
    legend: {
      data: ['停留在传输机的数据', '已传输到hdfs集群的数据'],
      left: '70%',
      icon: 'circle',
    },
    // x轴
    xAxis: {
      data: ['art16_6', 'jinghuan_2', 'yutong_1', 'yutong_2', 'yutong_3'],
    },
    // y轴
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}G',
      },
    },
    series: [
      {
        data: [20, 20, 40, 0, 0],
        type: 'bar',
        stack: 'one',
        name: '停留在传输机的数据',
      },
      {
        data: [0, 5, 10, 55, 59],
        type: 'bar',
        stack: 'one',
        name: '已传输到hdfs集群的数据',
      },
    ],
  };

  const pieTooltip = (
    <div>
      <div>停留在车辆的原始数据总size：300G</div>
      <div>停留在车辆的总bag数：178个</div>
      <div>停留在车辆的size占比：33.0％</div>
      <div>详情</div>
    </div>
  );

  const pieOption = {
    title: {
      text: '各停留位置的数据',
      subtext: '2022-10-12~2022-10-12',
    },
    tooltip: {
      trigger: 'item',
      triggerOn: 'click',
      position: (
        point: Array<string>,
        params: Object | Array<Object>,
        dom: HTMLElement,
        rect: any,
        size: Object,
      ) => {
        console.log(point, params, dom, rect, size);
        return [rect.x + 40, rect.y - 40];
      },
      formatter: function (params, ticket, callback) {
        return reactElementToJSXString(pieTooltip);
      },
    },
    legend: {
      orient: 'vertical',
      right: 0,
      top: 20,
      bottom: 20,
    },

    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 128, name: '车辆' },
          { value: 80, name: '硬盘' },
          { value: 80, name: '传输机' },
          { value: 85, name: 'hdfs集群（碎片化数据）' },
          { value: 185, name: 'hdfs（合并成Rosbag＋备份）' },
          { value: 70, name: '服务器（接收Rosbag）' },
          { value: 60, name: '服务器（完成awbag的数据转换）' },
          { value: 60, name: 'hdfs（完成awbag上传）' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  useEffect(() => {
    // 创建一个echarts实例，返回echarts实例。不能在单个容器中创建多个echarts实例
    const chart = echarts.init(chartRef.current as HTMLDivElement);

    const pirChart = echarts.init(pieRef.current as HTMLDivElement);

    // 设置图表实例的配置项和数据
    chart.setOption(options);

    pirChart.setOption(pieOption);

    // 组件卸载
    return () => {
      chart.dispose(); // 销毁实例。实例销毁后无法再被使用
      pirChart.dispose();
    };
  }, []);

  return (
    // 宽度要大，不然y轴有些名称可能不会显示
    <>
      <div style={{ width: '600px', height: '400px' }} ref={chartRef}></div>
      <div style={{ width: '1000px', height: '400px' }} ref={pieRef}></div>
    </>
  );
};
export default Index;
