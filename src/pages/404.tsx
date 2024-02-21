import { Button, Result } from 'antd';
import React from 'react';
import { history } from "@umijs/max";
const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle={'神马都是浮云'}
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        返回首页
      </Button>
    }
  />
);

export default NoFoundPage;
