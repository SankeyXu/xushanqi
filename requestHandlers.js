var fs = require('fs');
var url = require('url');
var path=require('path');
var CATHE_TIME=60;
var indexPage='';
//--------------------------------------------------------------------
//访问项目html/css/js/img入口
function publicFile(pathname,request,response,mimeType) {
	var pathname = path.resolve(__dirname,"./" + pathname);
	//从服务器读取文件
	fs.readFile(pathname, function(error, file) {
	    if (error) {
	      console.log(error);
	      response.writeHead(500, { "Content-Type":"text/plain"});
	      response.write(error + "\n");
	      response.end();
	    } else {
	      response.writeHead(200, { "Content-Type": mimeType });
	      response.write(file);
	      response.end();
	    }
    })
}
function viewFile(pathname,request,response,mimeType) {
	let name = pathname
	console.log("pathname", pathname)
	if(pathname === "/"){
		name = "index"
	}
	fs.readFile("./" + name + ".html", function(error, file) {
	 	response.writeHead(200, { "Content-Type": "text/html" });
	 	indexPage=file;
		response.end(indexPage);
	 })
}
//路径匹配文件解析
function pageUrl(url){
	var plain = fs.readFileSync("./pathUrl.json",'utf-8')
	return JSON.parse(plain)[url];
}
exports.publicFile = publicFile;
exports.viewFile = viewFile;
