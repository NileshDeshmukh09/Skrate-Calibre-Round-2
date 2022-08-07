const express = require("express");
const serverConfig = require("./configs/server.config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConfig = require("./configs/db.config");
const PORT = 8000

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/home" , ( req , res ) => {
    res.send("Hii , the app is working !");
})

mongoose.connect(dbConfig.MONGO_URL, ()=>{
    console.log("MongoDB connected ");
    // Initailization
    // init();
})

/**
 * Start the express server
 */

app.listen(serverConfig.PORT, () => {
    console.log(`Application has started on the port https://localhost:${serverConfig.PORT}` );
})