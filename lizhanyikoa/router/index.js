const router = require('koa-router')();
//登录接口
const login  = require('../api/login')
router.post('/deng',login)
//list接口
const list  = require('../api/list')
router.post('/list',list)


module.exports = router