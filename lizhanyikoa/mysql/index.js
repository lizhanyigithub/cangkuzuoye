const mysql=require('mysql')
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'lizhanyi'
})
connection.connect();//一次
module.exports=(search)=>{
    return new Promise(res=>{
        // connection.connect()
        connection.query(search,(err,results)=>{
            if(err) throw err;
            res(results)
        })
        // connection.end()
    })
}