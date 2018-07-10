# Liriiiii I'm hoooooooome!

Your favorite Command Line music, movie, and text browser!

Navigate to your shell of preference...

From here, you have several options at your disposal:

1. node liri.js my-tweets" => displays up to 20 of your past tweets and when they were created in your terminal/bash window
2. node liri.js spotify-this-song '<song name here>' => displays the following information about the song in your terminal/bash windwo:

   * Artist (s)
   * The song's name
   * A preview link of the song from Spotify
   * The album that the song is fro

If no song is provided, your program will default to "The Sign" by Ace of Base... even tho Pitch Perfect's is HELLA better.

3. node liri.js movie-this '<movie name here>' => displays the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.

If the user does not type a movie in after 'movie-this', the program will output data for the movie "Mr. Nobody"

4. node liri.js do-what-it-says => LIRI will take the text inside of random.txt and use it to call one of LIRI's commands.  Check out the current random.txt file to see what you can expect before editing it on your own!

5. Using liriBonus.js instead of liri.js will output the data to log.txt in addition to your terminal/bash window.


NOTE:

This project was completed with the use of a .env file... It is also protected by a .gitignore so you lil' rascals can't steal my identity.. sorry not sorry.

As a result, you'll need to create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:

# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret

You can create your Spotify ID and Secret by visiting https://developer.spotify.com/my-applications/#!/
Once you've logged in or created a free account, you can navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify Api.  You can fill in whatever you'd like for this fields.  I'm not going to judge.  I SWEAR.

LIKEWISE,

You can get your Twitter API keys by visiting https://apps.twitter.com/app/new, filling out the form with dummy data (type http://google.com in the website input AND DON'T FILL OUT THE CALLBACK URL INPUT), and clicking the "Keys and Access Tokens" tab to get your consume key and secret.
Copy and paste them into your .env file replacing the "your-twitter-consumer-key" and "your-twitter-consumer-secret", and click the "Create my access token" button to get the rest.

That's all folks! I hope you enjoy using this app and displaying it to your loved ones.  Let me know if you have any questions, comments, or concerns.

Otherwise, Keep Calm and Liri On *peace sign emoji*
