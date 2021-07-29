export const toDatabase = {
  get(tablename, jql, success=()=>{;}, fail=()=>{;}){
    const db = uniCloud.database();
    db.collection(tablename)
      .where(jql).get()
      .then((res)=>{
        const rm = res.result;
        console.log(rm);
        if(rm.code == 0){
          success(rm.data);
        }
        else{
          uni.showToast({
            duration: 2000,
            icon: 'error',
            title: '访问失败,状态码错误'
          });
        }
      }).catch((err)=>{
        console.log(err.code, err.message);
        uni.showToast({
          duration: 2000,
          icon: 'error',
          title: '访问失败，接口错误'
        });
        fail(err);
      });
  }
}