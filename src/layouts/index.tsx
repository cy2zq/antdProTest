import Header from '@/components/Header';
import { Outlet } from '@umijs/max';
import { ConfigProvider } from 'antd';
import { ScaleViewContainer } from 'react-scale-view';
import styles from './index.less';

export default function Layout() {
  return (
    <ConfigProvider>
      <ScaleViewContainer
        config={{
          width: 1920, // (必选)容器宽度；如 1920，
          height: 1080, // (必选)容器高度；如 1080，
          scaleType: 'FULL_SCREEN',
        }}
      >
        <div className={styles.container}>
          <Header />
          <Outlet />
        </div>
      </ScaleViewContainer>
    </ConfigProvider>
  );
}
