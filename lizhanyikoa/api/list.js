const sq     = require('../mysql');

module.exports = async (ctx,next)=>{
    // console.log(ctx.request.body.name)
    let list = await sq(`select * from list where zhuangtai='${ctx.request.body.name}'`)
    console.log(list)
    ctx.body={list:list}
}