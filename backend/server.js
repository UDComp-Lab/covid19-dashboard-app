import Restify from 'restify';
import Mongoose from 'mongoose';

const MONGO_DB_URL = "mongodb+srv://dbUser:mAEwW8cyR88sszp7@testenv-b7bnp.azure.mongodb.net/test?retryWrites=true&w=majority";
const PORT = 8080;

let server = Restify.createServer();

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
        "mongodb://localhost/test",
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
    server.listen(8080, 
        function()
        {
            console.log("%s listening at %s.", server.name, server.url);
            server();
        }
    );
}

// Main entry logic.
function server()
{
    console.log("Server running on port ");
}