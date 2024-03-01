// 全局共享数据示例
import { USERINFO } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [userInfo, setUserInfo] = useState<any>(USERINFO);
  return {
    userInfo,
    setUserInfo,
  };
};

export default useUser;
