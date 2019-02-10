var https = require('https');

console.log('I did it!')

var options = {
  host: 'www.example.org',
  path: '/'
};

//called by https whn the request is made.
var callback = function() {
  console.log('In response handler callback!')
}

console.log('Im about to make the request');

https.request(options, callback).end()

console.log("I've made th request!")