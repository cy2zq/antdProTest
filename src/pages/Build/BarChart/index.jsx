import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React from 'react';

export default class Line extends React.Component {
  getOption = () => {
    let name = this.props.name || 'cy';
    const datas = this.props?.data || [];

    const CubeBack = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0,
      },
      buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x + 9, shape.y - 7]; //右上
        const c1 = [shape.x - 9, shape.y - 7]; //左上
        const c4 = [shape.x, shape.y - 12]; //上中点
        const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 6]; //左下
        const c5 = [xAxisPoint[0], xAxisPoint[1]]; //下中点
        const c3 = [xAxisPoint[0] + 9, xAxisPoint[1] - 6]; //右下
        ctx
          .moveTo(c0[0], c0[1])
          .lineTo(c4[0], c4[1])
          .lineTo(c1[0], c1[1])
          .lineTo(c2[0], c2[1])
          .lineTo(c5[0], c5[1])
          .lineTo(c3[0], c3[1])
          .closePath();
      },
    });
    const CubeLeft = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0,
      },
      buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x, shape.y];
        const c1 = [shape.x - 9, shape.y - 7]; //左上角
        const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 6]; //右上角
        const c3 = [xAxisPoint[0], xAxisPoint[1]];
        ctx
          .moveTo(c0[0], c0[1])
          .lineTo(c1[0], c1[1])
          .lineTo(c2[0], c2[1])
          .lineTo(c3[0], c3[1])
          .closePath();
      },
    });
    const CubeRight = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0,
      },
      buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c1 = [shape.x, shape.y];
        const c2 = [xAxisPoint[0], xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 9, xAxisPoint[1] - 6]; //右下
        const c4 = [shape.x + 9, shape.y - 7];
        ctx
          .moveTo(c1[0], c1[1])
          .lineTo(c2[0], c2[1])
          .lineTo(c3[0], c3[1])
          .lineTo(c4[0], c4[1])
          .closePath();
      },
    });
    const CubeTop = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0,
      },
      buildPath: function (ctx, shape) {
        const c1 = [shape.x, shape.y];
        const c2 = [shape.x + 9, shape.y - 7]; //右下  右
        const c3 = [shape.x, shape.y - 12]; //右上  上
        const c4 = [shape.x - 9, shape.y - 7];
        ctx
          .moveTo(c1[0], c1[1])
          .lineTo(c2[0], c2[1])
          .lineTo(c3[0], c3[1])
          .lineTo(c4[0], c4[1])
          .closePath();
      },
    });
    const CubeBottom = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0,
      },
      buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        //这里xAxisPoint是底部起点，shape -x,y是顶部
        const c1 = [xAxisPoint[0], xAxisPoint[1]];
        const c2 = [xAxisPoint[0] + 9, xAxisPoint[1] - 7]; //右下  右
        const c3 = [xAxisPoint[0], xAxisPoint[1] - 12]; //右上  上
        const c4 = [xAxisPoint[0] - 9, xAxisPoint[1] - 7];
        ctx
          .moveTo(c1[0], c1[1])
          .lineTo(c2[0], c2[1])
          .lineTo(c3[0], c3[1])
          .lineTo(c4[0], c4[1])
          .closePath();
      },
    });

    const CubeLeftf = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0,
      },
      buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x, shape.y];
        const c1 = [shape.x - 9, shape.y - 7]; //左上角
        const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] + 6]; //右上角
        const c3 = [xAxisPoint[0], xAxisPoint[1]];
        ctx
          .moveTo(c0[0], c0[1])
          .lineTo(c1[0], c1[1])
          .lineTo(c2[0], c2[1])
          .lineTo(c3[0], c3[1])
          .closePath();
      },
    });
    const CubeRightf = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0,
      },
      buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c1 = [shape.x, shape.y];
        const c2 = [xAxisPoint[0], xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 9, xAxisPoint[1] + 6]; //右下
        const c4 = [shape.x + 9, shape.y - 7];
        ctx
          .moveTo(c1[0], c1[1])
          .lineTo(c2[0], c2[1])
          .lineTo(c3[0], c3[1])
          .lineTo(c4[0], c4[1])
          .closePath();
      },
    });
    const CubeTopf = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0,
      },
      buildPath: function (ctx, shape) {
        const c1 = [shape.x, shape.y];
        const c2 = [shape.x + 9, shape.y - 7]; //右下  右
        const c3 = [shape.x, shape.y - 12]; //右上  上
        const c4 = [shape.x - 9, shape.y - 7];
        ctx
          .moveTo(c1[0], c1[1])
          .lineTo(c2[0], c2[1])
          .lineTo(c3[0], c3[1])
          .lineTo(c4[0], c4[1])
          .closePath();
      },
    });
    const CubeBottomf = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0,
      },
      buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        //这里xAxisPoint是底部起点，shape -x,y是顶部
        const c1 = [xAxisPoint[0], xAxisPoint[1]];
        const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] + 7]; //右下  右
        const c3 = [xAxisPoint[0], xAxisPoint[1] + 12]; //右上  上
        const c4 = [xAxisPoint[0] + 9, xAxisPoint[1] + 7];
        ctx
          .moveTo(c1[0], c1[1])
          .lineTo(c2[0], c2[1])
          .lineTo(c3[0], c3[1])
          .lineTo(c4[0], c4[1])
          .closePath();
      },
    });
    echarts.graphic.registerShape('CubeBack', CubeBack);
    echarts.graphic.registerShape('CubeLeft', CubeLeft);
    echarts.graphic.registerShape('CubeRight', CubeRight);
    echarts.graphic.registerShape('CubeTop', CubeTop);
    //倒过来
    echarts.graphic.registerShape('CubeBottom', CubeBottom);

    echarts.graphic.registerShape('CubeBottomf', CubeBottomf);
    echarts.graphic.registerShape('CubeLeftf', CubeLeftf);
    echarts.graphic.registerShape('CubeRightf', CubeRightf);
    echarts.graphic.registerShape('CubeTopf', CubeTopf);
    echarts.graphic.registerShape('CubeBottomf', CubeBottomf);
    const option = {
      backgroundColor: 'transparent',
      grid: {
        left: '10',
        right: 0,
        bottom: '3%',
        top: '10%',
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        show: true,
        right: 0,
        itemWidth: 6,
        itemHeight: 6,
        data: [
          {
            name,

            icon: 'rect',
            textStyle: {
              color: 'white',
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(61, 152, 223,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(53, 223, 238,1)',
                },
              ]),
            },
          },
        ],
      },
      xAxis: {
        type: 'category',
        data: datas?.map((item) => item?.name), //数据
        axisLabel: {
          color: 'white',
          formatter: (value) => {
            return value?.replaceAll('-', '\n');
          },
        },
        axisLine: {
          show: true,
        },
        axisTick: false,
      },
      yAxis: {
        min: -100, //最小
        max: 100, //最大
        // interval: 200,//相差
        // name: "MPa", //名称
        type: 'value',
        axisLine: {
          //坐标轴样式
          show: false, //不显示
        },
        axisLabel: {
          color: 'white',
          formatter: '{value} %',
        },
        splitLine: {
          //分隔辅助线
          lineStyle: {
            type: 'dashed', //线的类型 虚线0
            opacity: 1, //透明度
          },
        },
      },
      series: [
        // {
        //   type: "custom",
        //   tooltip: {
        //     show: true,
        //   },
        //   renderItem: (params, api) => {
        //     const location = api.coord([api.value(0), api.value(1)]);
        //     return {
        //       type: "group",
        //       children: [
        //         {
        //           type: "CubeBack",
        //           shape: {
        //             api,
        //             xValue: api.value(0),
        //             yValue: api.value(1),
        //             x: location[0],
        //             y: location[1],
        //             xAxisPoint: api.coord([api.value(0), 0]),
        //           },
        //           style: {
        //             fill: "rgba(16, 55, 77,1)",
        //           },
        //         },
        //       ],
        //     };
        //   },
        //   data: [],
        // },
        {
          zlevel: 1,
          z: -1,
          color: '#3d98df',
          tooltip: {
            // triggerOn:'mousemove'
          },
          type: 'custom',
          name,
          renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)]);
            console.log(location, 234, api.value(1));
            if (api.value(1) < 0) {
              return {
                type: 'group',
                children: [
                  {
                    type: 'CubeLeft',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                          {
                            offset: 1,
                            color: 'red',
                          },
                          {
                            offset: 0.6,
                            color: '#F6596B',
                          },
                          {
                            offset: 0.4,
                            color: '#E24A3B',
                          },
                          {
                            offset: 0,

                            color: '#FCDEE1',
                          },
                        ]?.reverse(),
                      ),
                    },
                  },
                  {
                    type: 'CubeRight',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                          {
                            offset: 1,
                            color: 'red',
                          },
                          {
                            offset: 0.6,
                            color: '#F6596B',
                          },
                          {
                            offset: 0.4,
                            color: 'pink',
                          },
                          {
                            offset: 0,

                            color: '#FCDEE1',
                          },
                        ]?.reverse(),
                      ),
                    },
                  },
                  {
                    type: 'CubeTop',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 1,
                          color: 'red',
                        },
                        {
                          offset: 0,
                          color: 'red',
                        },
                      ]),
                    },
                  },
                  {
                    type: 'CubeBottom',
                    shape: {
                      api,
                      xValue: api.value(1),
                      yValue: api.value(0),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: 'white',
                    },
                  },
                ],
              };
            } else {
              return {
                type: 'group',
                children: [
                  {
                    type: 'CubeLeft',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                          {
                            offset: 1,
                            color: 'rgba(61, 152, 223,1)',
                          },
                          {
                            offset: 0.6,
                            color: 'rgba(60, 163, 225,0.9)',
                          },
                          {
                            offset: 0.4,
                            color: 'rgba(56, 196, 232,1)',
                          },
                          {
                            offset: 0,

                            color: 'rgba(52, 232, 240,1)',
                          },
                        ]?.reverse(),
                      ),
                    },
                  },
                  {
                    type: 'CubeRight',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                          {
                            offset: 1,
                            color: 'rgba(36, 136, 217,1)',
                          },
                          {
                            offset: 0.6,
                            color: 'rgba(60, 160, 224,0.9)',
                          },
                          {
                            offset: 0.4,
                            color: 'rgba(35, 161, 225,1)',
                          },
                          {
                            offset: 0,
                            color: 'rgba(34, 193, 236,1)',
                          },
                        ]?.reverse(),
                      ),
                    },
                  },
                  {
                    type: 'CubeTop',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 1,
                          color: 'rgba(51, 233, 237,1)',
                        },
                        {
                          offset: 0,
                          color: 'rgba(57, 184, 229,1)',
                        },
                      ]),
                    },
                  },
                  {
                    type: 'CubeBottom',
                    shape: {
                      api,
                      xValue: api.value(1),
                      yValue: api.value(0),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: 'rgba(36, 136, 217,1)',
                    },
                  },
                ],
              };
            }
          },
          data: datas?.map((item) => item?.value),
        },

        // {
        //   type: "lines",
        //   coordinateSystem: "cartesian2d",
        //   data: datas.map((item, index) => {
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
        //     symbolSize: 20,
        //     symbol: "pin",
        //     loop: true,
        //     color: "rgba(55,155,255,0.5)",
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
    return option;
  };

  render() {
    return (
      <ReactEcharts
        option={this.getOption()}
        theme="Imooc"
        style={{ height: '500px' }}
      />
    );
  }
}
