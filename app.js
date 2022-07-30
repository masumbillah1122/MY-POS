var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const productRouter = require('./routes/productRoute');
const userRouter = require("./routes/userRoute");
const billsRouter = require('./routes/billsRoute');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


//Route
app.use("/api/products/", productRouter);
app.use("/api/users/", userRouter);
app.use("/api/bills/", billsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// dotenv file import
dotenv.config({
  path: ".env",
});

// DB Connnection Here
// mongoose
//   .connect(
//     "mongodb+srv://masumhaque:169572274@cluster0.wnhig.mongodb.net/new_pos?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       autoIndex: false,
//     }
//   )
//   .then(() => console.log("Datebase connected"))
//   .catch((error) => {
//     if (error) console.log("Database connection failed");
//   });

// OffLine database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connection");
  })
  .catch((err) => {
    console.log(err.message);
  });


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
