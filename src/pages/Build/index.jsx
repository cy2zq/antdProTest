import Income from '@/pages/Build/Income';
import 'animate.css';
import { Fragment } from 'react';
import Media from 'react-media';

const App = () => {
  return (
    <>
      {/* 在大于等于768px的宽度上显示 */}
      <Media query="(min-width: 700px)">
        <Fragment>
          <Income />
        </Fragment>
      </Media>

      {/* 在小于768px的宽度上显示 */}
      <Media query="(max-width: 700px)">
        <div>cy</div>
      </Media>
    </>
  );
};

export default App;
