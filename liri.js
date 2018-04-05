var keys = require("./keys.js");
require("dotenv").config();

var Spotify = function() {
};
var Twitter = function() {
};

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var action = process.argv[2];

function myTweets() {
    if(action === "my-tweets") {
        Twitter.get('statuses/user_timeline', function(error, tweets, response){
            if (!error) {
              console.log("tweets");
            }
          });
    } else {
        console.log("bug fix");
    }
}

myTweets();