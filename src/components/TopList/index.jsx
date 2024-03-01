import { useEffect, useState } from 'react';

import ReactEcharts from 'echarts-for-react';

const BarList = (props) => {
  const [option, setOption] = useState({});
  let result = props?.data;
  useEffect(() => {
    let typeColor = props.type === 'bottom' ? '#E24A3B' : '#11d8ff';
    let icon1 =
      'data:image/png;base64,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';
    let icon2 =
      'data:image/png;base64,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';
    let colorList = ['#eaa257', '#11d8ff', '#E24A3B'];

    const optionNew = {
      color: colorList,
      backgroundColor: 'transparent',
      tooltip: {
        show: true,
        trigger: 'item',
        padding: [8, 0],
        backgroundColor: 'rgba(23, 51, 67,1)',
        textStyle: {
          color: 'rgba(255, 255, 255, 1)',
        },
      },
      legend: {
        show: false,
      },
      grid: {
        left: '3',
        right: '16',
        top: '10',
        bottom: '0',
      },
      xAxis: [
        {
          splitLine: {
            show: false,
          },
          type: 'value',
          show: false,
        },
      ],
      yAxis: [
        {
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          type: 'category',
          axisTick: {
            show: false,
          },
          inverse: true,
          data: result.map((item) => item.name),
          axisLabel: {
            color: 'white',
            fontSize: 14,
            margin: 10,
            formatter: (name, index) => {
              const id = index + 1;
              if (id === 1) {
                return `{icon1|${id}}`;
              } else {
                return `{icon2|${id}}`;
              }
            },
            rich: {
              icon1: {
                width: 54,
                height: 54,
                padding: [5, 0, 2, 0],
                align: 'center',
                backgroundColor: {
                  image: icon1,
                },
                color: '#ffffff',
                fontSize: 20,
              },
              icon2: {
                width: 54,
                height: 54,
                padding: [5, 0, 2, 0],
                align: 'center',
                backgroundColor: {
                  image: icon2,
                },
                color: '#ffffff',
                fontSize: 20,
              },
            },
          },
        },
        {
          type: 'category',
          inverse: true,
          axisTick: 'none',
          axisLine: 'none',
          show: true,
          axisLabel: {
            verticalAlign: 'bottom',
            align: 'right',
            margin: 0,
            padding: [0, 0, 15, 0],
            textStyle: {
              //右侧文本颜色
              color: typeColor,
              fontSize: 16,
              fontWeight: 700,
            },
            formatter: function (value) {
              return value;
            },
          },
          data: result.map((item) => item.value),
        },
      ],
      series: [
        {
          name: '',
          type: 'bar',
          barWidth: 5, // 柱子宽度
          MaxSize: 0,
          showBackground: true,
          barBorderRadius: [30, 0, 0, 30],
          backgroundStyle: {
            color: 'rgba(80, 121, 150, 0.6)',
          },
          label: {
            show: true,
            offset: [0, -20],
            //toplist颜色,左侧文本颜色
            color: 'white',
            fontWeight: 500,
            position: 'left',
            align: 'left',
            formatter: function (params, index) {
              const id = params.data.name?.split('-')[0];
              const name = params.data.name?.split('-')[1];
              return `{icon1|${id}}` + name;
            },
            rich: {
              icon1: {
                width: 50,
                height: 0,
                padding: [5, 0, 2, 0],
                align: 'center',
                backgroundColor: {
                  image: 'transparent',
                },
                color: typeColor,
                fontSize: 14,
              },
              icon2: {
                width: 40,
                height: 0,
                padding: [5, 0, 2, 0],
                align: 'center',
                backgroundColor: {
                  image: icon2,
                },
                color: '#ffffff',
                fontSize: 14,
              },
            },
          },
          data: result.map((item, index) => {
            return {
              name: item.name,
              value: item.value,
              itemStyle: {
                barBorderRadius: [30, 0, 0, 30],
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#00000000',
                    },
                    {
                      offset: 1,
                      color: typeColor,
                    },
                  ],
                },
              },
            };
          }),
        },
        {
          name: '外圆',
          type: 'scatter',
          emphasis: {
            scale: false,
          },
          symbol: 'circle',
          symbolSize: [10, 10], // 进度条白点
          itemStyle: {
            barBorderRadius: [30, 0, 0, 30],
            color: 'white',
            shadowColor: 'rgba(255, 255, 255, 0.5)',
            shadowBlur: 5,
            borderWidth: 1,
            opacity: 1,
          },
          z: 2,
          data: result,
          animationDelay: 500,
        },
        // 进度条的小圆圈
        {
          name: '指标',
          type: 'scatter',
          emphasis: {
            scale: false,
          },
          symbol:
            'image://data:image/png;base64,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',
          symbolSize: [20, 20],
          itemStyle: {
            color: 'red',
            shadowColor: 'rgba(255, 255, 255, 1)',
            shadowBlur: 5,
            borderWidth: 1,
            opacity: 1,
          },
          z: 2,
          zlevel: 10,
          data: result,
          animationDelay: 500,
        },
        //流光动画
        // {
        //   type: "lines",
        //   coordinateSystem: "cartesian2d",
        //   data: result.map((item, index) => {
        //     return {
        //       coords: [
        //         [0, index],
        //         [item?.value - 4, index],
        //       ],
        //     };
        //   }),
        //   effect: {
        //     show: true,
        //     period: 2.5,
        //     trailLength: 0.5,
        //     symbolSize: 14,
        //     symbol: "pin",
        //     loop: true,
        //     color: typeColor,
        //   },
        //   lineStyle: {
        //     width: 0,
        //     opacity: 0.6,
        //     curveness: 0,
        //   },
        //   z: 99,
        // },
      ],
    };
    setOption(optionNew);
  }, []);

  return (
    <ReactEcharts option={option} theme="Imooc" style={{ height: '250px' }} />
  );
};

export default BarList;
