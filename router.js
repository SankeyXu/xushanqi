function route(handle,pathname,request,response,mimeType){
	if(mimeType){
		return  handle["/publicFile"](pathname,request,response,mimeType);
	}else{
		console.log(pathname)
		return handle["/viewFile"](pathname,request,response,mimeType);
	}
}
exports.route = route;
