
var exec = require('child_process').exec;

exports.handler = function(event, context) {
    exec('./hello', function(error, stdout) {
        context.done(error, stdout);
    });
};

/*
var child_process = require('child_process');

exports.handler = function(event, context) {
  var proc = child_process.spawn('./hello', [ JSON.stringify(event) ], { stdio: 'inherit' });

  proc.on('close', function(code){
    if(code !== 0) {
      return context.done(new Error("Process exited with non-zero status code"));
    }

    context.done(null);
  });
}
*/

/*



var execFile = require('child_process').execFile;

execFile('./execfile.sh', function(error, stdout, stderr) {
	console.log(stdout);
	console.log(stderr);
	console.log(error);
});

*/