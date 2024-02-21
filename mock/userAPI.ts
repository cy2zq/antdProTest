//用户列表
let users = [
  { id: 0, name: '晁阳', nickName: 'chaoyang', gender: 'MALE' },
  { id: 1, name: 'zq', nickName: 'Bsdfasfa', gender: 'FEMALE' },
];

export default {
  //获取用户列表
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    let list=users?.filter(item=>(req?.query?.name?item?.name?.includes(req?.query?.name):true))
                  ?.filter(item=>(req?.query?.nickName?item?.nickName?.includes(req?.query?.nickName):true))
                  ?.filter(item=>(req?.query?.gender?item?.gender===(req?.query?.gender):true)
          )
    res.json({
      success: true,
      data: { list },
      errorCode: 0,
    });
  },
    //新增
    'POST /api/v1/user/': (req: any, res: any) => {
      users=users?.concat({
        id:users?.length+1,
        ...req?.body
      })  
      res.json({
        success: true,
        data: { list:users },
        errorCode: 0,
      });
    },
    //修改
  'PUT /api/v1/user/': (req: any, res: any) => {
    users=users?.map(item=>{      
      if(item?.id==req?.query?.userId){
        return {id:req?.query?.userId,...req?.query}
      }else{
        return item
      }
    })
    res.json({
      data: { list:users },
      success: true,
      errorCode: 0,
    });
  },
  'DELETE /api/v1/user/': (req: any, res: any) => {
    users=users?.filter(item=>!req?.query?.userId?.includes(item?.id+''))
    res.json({
      data: { list:users },
      success: true,
      errorCode: 0,
    });
  },
};
