const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const server = require("./database/startserver");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({limit:"1000mb"}));

// imports files
const userRouter = require("./routes/user_router");
const dishRoute = require("./routes/dishRoute");
const restaurantRouter = require('./routes/restaurant_router');

app.use("/api", userRouter);
app.use("/api/dish", dishRoute);
app.use('/api/restaurant', restaurantRouter);

app.get("/",(req,res) => {
    try{
        let data=null;
        let newdata=data.name;
        res.send("Hello World!").status(200);
    } catch (err) {
        res.send("error occured!").status(500)
    }
});


// Error handler middleware
const errorHandler = (err, req, res, next) =>{
    logger.error(`Error : ${err.message}`);
    res.status(500).json({error:"Internal Server Error"});
};

// Null pointer exception handler middleware
const nullPointExceptionHandler = (err, req, res, next) =>{
    logger.error(`Error : ${err.message}`);
    res.status(404).json({error:"Not Found"});
};

app.use(errorHandler);
app.use(nullPointExceptionHandler);


server.startServer(app);