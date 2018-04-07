require("dotenv").config();
var fs = require("fs");
var request = require("request");
var keys = require("./keys.js");

var Twitter = function () { };
var twitter = require('twitter');
var T = new Twitter(keys.twitter);

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var action = process.argv[2];

switch (action) {
    case "my-tweets":
        myTweets();
        break;
    case "spotify-this-song":
        spotifyThisSong();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
};

function nodeRecord() {
fs.appendFile("log.txt", "utf8", function(err) {
    // If an error was experienced we say it.
    if (err) {
      console.log(err);
    }
    // If no error is experienced, we'll log the phrase "Content Added" to our node console.
    else {
      console.log("Content Added!");
    }
  });
};
  

function myTweets() {
    var params = {
        q: '@slice_served',
        count: 2,
        result_type: 'recent',
        lang: 'en'
    }
    request('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
            nodeRecord();
        }
    });
};

function spotifyThisSong() {
    var songName = process.argv[3];
    var queryUrl = "https://api.spotify.com/v1/artists/" + spotify.id;
    console.log(queryUrl);

    nodeRecord();
};

function movieThis() {
    var movie = process.argv[3];
    request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {
            console.log("The movie's title is: " + JSON.parse(body));
            // console.log("The movie came out in  " + JSON.parse(body).);
            // console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
            // console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).);
            // console.log("The movie was produced in: " + JSON.parse(body).);
            // console.log("The movie's spoken in: " + JSON.parse(body).);
            // console.log("The movie's plot is: " + JSON.parse(body).);
            // console.log("The actors featured in this movie are: " + JSON.parse(body).);
            nodeRecord();
        } else {
            var movie = 'Mr. Nobody'
            request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
                // console.log("The movie's title is: " + JSON.parse(body).);
                // console.log("The movie came out in  " + JSON.parse(body).);
                // console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
                // console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).);
                // console.log("The movie was produced in: " + JSON.parse(body).);
                // console.log("The movie's spoken in: " + JSON.parse(body).);
                // console.log("The movie's plot is: " + JSON.parse(body).);
                // console.log("The actors featured in this movie are: " + JSON.parse(body).);
                nodeRecord();
            }
        }
});
};

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        } else {
            console.log(data);
            nodeRecord();
        }
    })
};