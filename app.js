//启动服务器
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/publicFile'] = requestHandlers.publicFile;
handle['/viewFile'] = requestHandlers.viewFile;
server.start(router.route,handle)
