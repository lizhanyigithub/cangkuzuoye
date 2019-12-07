const sq     = require('../mysql');

module.exports = async (ctx,next)=>{
    // console.log(ctx.request.body)
    const {user,pwd} = ctx.request.body
    // let data = await sq(`SELECT user,pass FROM user where user='${user}'&&pass='${pwd}'`)

     let data = await sq(`select * from deng where user='${user}' && pwd='${pwd}'`)

    if(data.length>0) {
        ctx.body = {code:0,msg:'登录成功',zhuangtai:data}
    }else{
        ctx.body = {code:1,msg:'账户不存在'}
    }
}
   