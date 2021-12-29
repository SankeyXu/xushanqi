var foo = require('http');
var url = require('url');
var fs= require('fs');
//启动服务器模块
function start(route,handle){
	var mime =  contentType();
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		var i = pathname.lastIndexOf(".");
		var urlType = pathname.substr(i,request.url.length);
		var mimeType =  mime[urlType]?mime[urlType]:false;//判断是文件请求还是路径请求
		route(handle,pathname,request,response,mimeType);
	}
	foo.createServer(onRequest).listen(8888);
}
//连接文件的属性
function contentType(){
	var plain = fs.readFileSync("./contentType.json",'utf-8')
	return JSON.parse(plain);
}
exports.start = start;
