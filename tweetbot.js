console.log('TwitterBirds are go');

var Twit = require('twit');

var config = require('./config');
//console.log(config);
var T = new Twit(config)

var tweet = {
	status: '#NUMBER2'
}


function postit(){
T.post('statuses/update', tweet, tweeted);
}
function tweeted(err, data, response) {
	if(err){
	console.log('nope')
} else {
	console.log('great')
}
}