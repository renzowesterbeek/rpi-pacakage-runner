var http = require('http');
var request = require('request');
var fs = require('fs');

setInterval(function(){
  console.log('Checking for updates...');
  // Check for package updates
  var currentFile = "";
  var remoteFile = "";

  fs.readFile('package.json', 'utf-8', function (err, data) {
    if (err) throw err;
    currentFile = data;
  });

  request('https://raw.githubusercontent.com/renzowesterbeek/node-water-reminders/master/package.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    remoteFile = body;
  }

  if(currentFile !== remoteFile){
    console.log('Update available');
  }
})
}, 5*1000); // Every 2 seconds
