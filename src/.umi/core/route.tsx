// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/","redirect":"/layouts","parentId":"@@/global-layout","id":"1"},"2":{"name":"layouts","path":"/layouts","layout":false,"id":"2"},"3":{"name":"Build","path":"/layouts","layout":false,"icon":"AppstoreOutlined","parentId":"2","id":"3"},"4":{"name":"videoCenter","path":"/layouts/videoCenter","layout":false,"icon":"AppstoreOutlined","parentId":"2","id":"4"},"5":{"name":"build","path":"/layouts/build","layout":false,"icon":"AppstoreOutlined","parentId":"2","id":"5"},"6":{"path":"*","layout":false,"id":"6"},"@@/global-layout":{"id":"@@/global-layout","path":"/","parentId":"ant-design-pro-layout","isLayout":true},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import( './EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "layouts__index" */'@/layouts/index.tsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__Build__index" */'@/pages/Build/index.jsx')),
'4': React.lazy(() => import(/* webpackChunkName: "p__VideoCenter__index" */'@/pages/VideoCenter/index.jsx')),
'5': React.lazy(() => import(/* webpackChunkName: "p__Build__index" */'@/pages/Build/index.jsx')),
'6': React.lazy(() => import(/* webpackChunkName: "p__404" */'@/pages/404.tsx')),
'@@/global-layout': React.lazy(() => import(/* webpackChunkName: "layouts__index" */'/Users/chaoyang/传说中的神兽/cy/media/code/react/antdPro/src/layouts/index.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "umi__plugin-layout__Layout" */'/Users/chaoyang/传说中的神兽/cy/media/code/react/antdPro/src/.umi/plugin-layout/Layout.tsx')),
},
  };
}
