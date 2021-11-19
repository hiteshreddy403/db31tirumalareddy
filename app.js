var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport'); 
var LocalStrategy = require('passport-local').Strategy; 
passport.use(new LocalStrategy( 
  function(username, password, done) { 
    Account.findOne({ username: username }, function (err, user) { 
      if (err) { return done(err); } 
      if (!user) { 
        return done(null, false, { message: 'Incorrect username.' }); 
      } 
      if (!user.validPassword(password)) { 
        return done(null, false, { message: 'Incorrect password.' }); 
      } 
      return done(null, user); 
    }); 
  } ));
var Costume = require("./models/costume");
// database connection
const connectionString =  
process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect('mongodb+srv://learningmongo:shashank1214@cluster0.p5q2s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',  
{useNewUrlParser: true, 
useUnifiedTopology: true});
 
//Bind connection to error event
var db = mongoose.connection;   
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
 console.log("Connection to DB succeeded")});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var persisRouter = require('./routes/persis');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resource = require('./routes/resource');
var costume = require('./routes/costumes')
 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({ 
  secret: 'keyboard cat', 
  resave: false, 
  saveUninitialized: false 
})); 
app.use(passport.initialize()); 
app.use(passport.session()); 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/persis', persisRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource',resource);
app.use('/costume',costume)

// passport config 
// Use the existing connection 
// The Account model  
var Account = require('./models/account'); 
 
passport.use(new LocalStrategy(Account.authenticate())); 
passport.serializeUser(Account.serializeUser()); 
passport.deserializeUser(Account.deserializeUser()); 
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on 
async function recreateDB(){ 
  // Delete everything 
 await Costume.deleteMany();  
  let instance1 = new 
Costume({costume_type:"coat",  size:'large', 
cost:25.4}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 

let instance2 = new 
Costume({costume_type:"pant",  size:'medium', 
cost:25.4}); 
  instance2.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("second object saved") 
  });
  
let instance3 = new 
Costume({costume_type:"jeans",  size:'medium', 
cost:25.4}); 
  instance3.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("second object saved") 
  }); 
} 
 

let reseed = true; 
if (reseed) { recreateDB();} 


module.exports = app;