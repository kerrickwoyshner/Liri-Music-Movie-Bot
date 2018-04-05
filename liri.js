var keys = require("./keys.js");
var Twitter = require('twitter');
require("dotenv").config();

var Spotify = function() {
};
var Twitter = function() {
};

var spotify = new Spotify(keys.spotify);
var T = new Twitter(keys.twitter);
var action = process.argv[2];

function myTweets() {
    if(action === "my-tweets") {
        var params = {
            q: '@slice_served',
            count: 2,
            result_type: 'recent',
            lang: 'en'
          }
        T.get('statuses/user_timeline', params, function(error, tweets, response){
            if (!error) {
              console.log(tweets);
            }
          });
    } else {
        console.log("bug fix");
    }
};

myTweets();