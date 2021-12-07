# rssfeed-nodejs

This application takes an RSS URL parses it and returns a list of episodes from that URL using Node.js REST API. 

The application is ready to run. In order to get the episodes from an RSS URL I use Postman, send a Get request to localhost:5000/api with the RSS URL in the body and it returns the title and link of the episodes with a 200 OK response. 

If a URL is not included in the body you will get a 400 bad request response and a message that says "You have to input URL". 

Part of this code has been tested using Mocha and Chai to make sure URL is included. 

