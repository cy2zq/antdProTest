import { useState } from 'react';
import ContentChart from './Content';
import styles from './index.less';

export default function App() {
  const idList = [
    {
      id: 1,
      name: '营业收入',
      imgUrl: require('@/assets/images/101.png'),
      value: '7.06%',
    },
    {
      id: 2,
      name: '实现利润总额',
      imgUrl: require('@/assets/images/03.png'),
      value: '9.06%',
    },
    {
      id: 3,
      name: '营业现金比率',
      imgUrl: require('@/assets/images/101.png'),
    },

    {
      id: 5,
      name: '两金总额',
      imgUrl: require('@/assets/images/100.png'),
    },
    {
      id: 6,
      name: '全口径融资额',
      imgUrl: require('@/assets/images/99.png'),
      value: '89.13%',
    },
    {
      id: 7,
      name: '新签合同额',
      imgUrl: require('@/assets/images/98.png'),
    },
    {
      id: 8,
      name: '经营外向度',
      imgUrl: require('@/assets/images/102.png'),
      value: '2.33%',
    },
    {
      id: 9,
      name: '总产值',
      imgUrl: require('@/assets/images/101.png'),
      value: '6.32%',
    },
    {
      id: 10,
      name: '研发经费投入',
      imgUrl: require('@/assets/images/103.png'),
      value: '4.31%',
    },
    {
      id: 11,
      name: '公开采购率',
      imgUrl: require('@/assets/images/103.png'),
      value: '4.31%',
    },
  ];
  const [activeInfo, setActiveInfo] = useState(idList[0]);

  return (
    <>
      <section className={styles?.mainbox}>
        <ul className={styles?.ul}>
          {idList?.map((item) => (
            <li
              key={item?.id}
              className={item?.id === activeInfo?.id ? styles?.active : ''}
              onClick={() => setActiveInfo(item)}
            >
              <span>
                <img src={item?.imgUrl} />
                <span className={styles.item_name}>{item?.name}</span>
              </span>
              <span className={styles?.count}>{item?.value || '--'}</span>
            </li>
          ))}
        </ul>
        <ContentChart activeInfo={activeInfo} />
      </section>
    </>
  );
}
