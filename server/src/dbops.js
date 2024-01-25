const mysql =require('mysql')

//connection with mysql
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'temp'
})

var query ='create table if not exists useri (firtName varchar(30),lastName varchar(30),email varchar(30),age int)'
connection.query(query,(err,result)=>{
    if(err) {
        console.log("qu")
        throw err}
    console.log('table is created') 
})



module.exports.conn = connection