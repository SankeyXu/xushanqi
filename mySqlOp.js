//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '192.168.1.40',
    user: 'root',
    password: '5498800',
    database:'test'
});

connection.connect();
//查询
//selectMotto(function(data){
//	console.log(data)
//});
function selectMotto(callback){
	connection.query("SELECT * from index_data ", function(err, rows, fields) {
	    if (err) throw err;
      	callback(rows);
	});
}



exports.selectMotto = selectMotto;