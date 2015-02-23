/**
 *
 * Vert.X Javascript HTTP server example
 *
*/

var vertx = require('vertx');
var container = require('vertx/container');
var console = require('vertx/console');

var ip = container.env['OPENSHIFT_VERTX_IP'] || '127.0.0.1';
var port = parseInt(container.env['OPENSHIFT_VERTX_PORT'] || 8080);

vertx.createHttpServer().requestHandler(function(req) {
  var file = req.path() === '/' ? 'index.html' : req.path();
  req.response.sendFile('/opt/repo/ROOT/' + file);
}).listen(port, ip, function(err) {
    if (!err) {
      console.log('Successfully listening on ' + ip + ':' + port);
    } else {
      console.log('Could not bind to ' + ip + ':' + port + '. Error: ' + err);
    }
});
