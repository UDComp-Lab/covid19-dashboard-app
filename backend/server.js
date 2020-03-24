const Restify = require('restify');
const Mongoose = require('mongoose');

const FeaturedArticle = require('./lib/ODM/FeaturedArticle');

const MONGO_DB_URL = "mongodb+srv://dbUser:mAEwW8cyR88sszp7@testenv-b7bnp.azure.mongodb.net/test?retryWrites=true&w=majority";
const PORT = 8080;

let restServer = Restify.createServer();

// Begins the intialization chain.
function InitializeEverything()
{
    MongoInitialization();
}

// Connect to MongoDb
function MongoInitialization()
{
    console.log("Connecting to database...");
    Mongoose.connect(
        MONGO_DB_URL,
        {
            useNewUrlParser: true
        }
    );
    
    let db = Mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open',
        function()
        {
            console.log("Connected to MongoDb.")
            RestifyInitialization();
        }
    );
}

// Initialize Restify server and routes
function RestifyInitialization()
{
    restServer.listen(8080, 
        function()
        {
            console.log("%s listening at %s.", restServer.name, restServer.url);
            server();
        }
    );
}

// Main entry logic.
function server()
{
    console.log("Server running on port " + PORT.toString());
}

InitializeEverything();