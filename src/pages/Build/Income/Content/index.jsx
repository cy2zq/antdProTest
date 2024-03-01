import TopList from '@/components/TopList';
import BarChart from '@/pages/Build/BarChart';
import { useEffect, useState } from 'react';
// import Bar02 from "@/pages/Bar02";
import styles from './index.less';
export default function Content(props) {
  const [classNameRandom, setClassNameRandom] = useState({
    title: '',
    topLeft: '',
    topRight: '',
    bottom: '',
  });
  //水平柱状图
  let data = [
    { name: 'NO.1-浙江云采', value: parseInt(Math.random(0, 1) * 100) },
    { name: 'NO.2-浙江云采', value: parseInt(Math.random(0, 1) * 100) },
    { name: 'NO.3-浙江云采', value: parseInt(Math.random(0, 1) * 100) },
  ];
  //垂直柱状图
  const datas1 = [
    {
      name: '浙江-云彩',
      value: -90,
    },
    {
      name: '浙江-云彩1',
      value: 90,
    },
  ];
  const datas = [
    {
      name: '浙江-云彩',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '浙建-实业',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '浙江-安装',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '浙江-二建',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '浙江-装饰',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '浙江-三建',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '浙江-一建',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '商贸-物流',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '物资-设备',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '设计-总院',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '海外-部',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '浙江-交建',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '浙江-建工',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '浙江-建材',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '浙江-建机',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '浙建-环保',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '投资-公司',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '三五九-建工',
      value: Math.floor(Math.random() * 201) - 100,
    },
    {
      name: '美丽-乡村',
      value: Math.floor(Math.random() * 201) - 100,
    },
  ];

  useEffect(() => {
    // setClassNameRandom({
    //   title: ''||getClassNameRandom(),
    //   topLeft: getClassNameRandom(),
    //   topRight: getClassNameRandom(),
    //   bottom: getClassNameRandom(),
    // });
  }, [props?.activeInfo?.name]);
  return (
    <div className={styles?.content_right}>
      <div
        // className={'chart_title ' + `${classNameRandom?.title}`}
        className={styles?.chart_title}
      >
        <img
          src={require('@/assets/images/mainbox8.png')}
          className={styles?.mainbox8}
        />
        <span>{props?.activeInfo?.name}完成率（第3期）</span>
      </div>
      <div className={styles.chart_box}>
        <div className={styles?.chart_left}>
          <img
            src={require('@/assets/images/mainbox37.png')}
            className={styles.top_list}
          />
          <div className={styles.top_chart}>
            <div>前三名</div>
            <TopList type="top" data={data} />
          </div>
        </div>
        <div className={styles.chart_right}>
          <div>后三名</div>
          <TopList type="bottom" data={data} />
        </div>
      </div>
      <div className={styles.chart_bottom}>
        <BarChart data={datas} name={props?.activeInfo?.name} />
      </div>
    </div>
  );
}
