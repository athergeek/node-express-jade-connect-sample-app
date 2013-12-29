/**
 * Created by ather on 12/21/13.
 */
 var path = require('path');

//An example how to implement global intercepters  just like ASP.NET MVC global filters
var  globalintercepter = function(req,res,next){
        console.log('Path requested is  '+req.path);


        if(typeof req.session.user!== 'undefined' && req.session.user.isAuthenticated){
            console.log('User authenticated successfully!!!  '+req.session.user.isAuthenticated);
            next();
        }else{
            //show login page except following routes
            if((req.path==='/customers/create' ||
               req.path.indexOf('/customers/edit')===0 ||
               req.path.indexOf('/customers/delete')===0)){
                console.log('path is not /customer* ...redirecting to login page!!!');
                res.redirect('/login');
            }
            else{
                console.log('Customer allowed to non admin section...');

                next();
            }
        }
};

//An example how to implement 404 page not found view.
var notFound = function(req,res,next){
    res.statusCode=404;
    res.description = 'Not Found';
    res.render('pagenotfound');
};

//An example how to crete error handler in express
//ExpressJS automatically assumes that if a function has four arguments it is an error handler..
var errorHandler = function(err,req,res,next){
      res.render('error',{errmsg:'An Error has occured....',errdtls:err.stack});
};

module.exports = function(app, express){
    app.configure(function() {
        var RedisStore = require('connect-redis')(express); // use redis middleware
        var redis = require("redis").createClient();        // redis client middleware

        //middleware to allow cookie support. It is recommended to use pass phrase to encrypt cookies. I am using
        // 'EncryptME'
        app.use(express.cookieParser('EncryptME'));


        // middleware to use sessions. The store property is used if you want to use Redis to store your session values
        // you can skip it if you don't want to use it
        app.use(express.session({store: new RedisStore({ host: 'localhost',
                                                         port: 6379,
                                                         client: redis }
                                                      ), secret:'SuperSecret'}));

        //app.use(express.basicAuth('admin','adminpass'));    // middleware to implement basic authentication
        app.use(express.logger('dev')); //middleware for logging
        app.use(express.favicon());     //middleware for favicon
        app.set('view engine','jade');  // middleware to setup view engine
        app.set('views','./views');    // middleware to setup views
        app.use(express.json());       // middleware to parse html body
        app.use(express.urlencoded()); // middleware to parse html body
        app.set(express.methodOverride()); // middleware to override a form method

        //An example how to implement global intercepters  just like ASP.NET MVC global filters
        app.use(globalintercepter);
        app.use(express.static('./public')); //middleware to serve static files..

       app.set(require('stylus').middleware({ // middleware to process style tempate
           src: '../public',
           dest: '../public',
           debug: true,
           force: true,
           compile : function(str, path) {
               console.log('compiling..sec: '+str+' path: '+path);
               return stylus(str)
                   .set('filename', path)
                   .set('warn', true)
                   .set('compress', true);
           }
       }));

       // If this is specified explicitly that means try to find all possible routes and if
       // not found then call the next spcified function which is in this case notFound.
       app.use(app.router);
       app.use(notFound); // this will execute if a route is not found

        // this will execute when an error has occured on a view or anywhere else
       app.use(errorHandler);
    });

    app.configure('development', function() {
        app.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
    });

    app.configure('production', function() {
        app.use(express.errorHandler());
    });


};