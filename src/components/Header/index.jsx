import logoUrl from '@/assets/images/logo.png';
import { Link } from '@umijs/max';
import styles from './index.css';

export default function App() {
  const linkListLeft = [
    {
      name: '建筑施工',
      path: '/layouts/build',
    },
    {
      name: '基建投资',
      path: '/layouts/home',
    },
    {
      name: '工业制造',
      path: '/layouts/home',
    },
    {
      name: '海外发展',
      path: '/layouts/home',
    },
    {
      name: '现代化服务',
      path: '/layouts/home',
    },
  ];
  const linkListRight = [
    {
      name: '浙建风采',
      path: '/layouts/home',
    },
    {
      name: '视频中心',
      path: '/layouts/videoCenter',
    },
    {
      name: '预警中心',
      path: '/layouts/home',
    },
    {
      name: '首页',
      path: '/layouts/home',
    },
    {
      name: '集团',
      path: '/layouts/home',
    },
  ];
  return (
    <>
      <header>
        <ul className={styles?.header_left}>
          {linkListLeft?.map((item) => (
            <li key={item?.name}>
              <Link to={item?.path}>{item?.name}</Link>
            </li>
          ))}
        </ul>
        <div className={styles?.header_center}>
          <h1 className={'header_left column'}>
            <img src={logoUrl} className="logo" />
            数智浙建
          </h1>
        </div>

        <ul className={styles?.header_right}>
          {linkListRight?.map((item) => (
            <li key={item?.name}>
              <Link to={item?.path}>{item?.name}</Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
