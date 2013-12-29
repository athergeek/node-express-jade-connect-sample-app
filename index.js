/**
 * Created by ather on 12/21/13.
 */
var express = require('express'),
    home = require('./routes/home.js'),
    customer = require('./routes/customer.js'),
    examples = require('./routes/examples.js'),
    authentication = require('./routes/authentication.js'),
    app = express();
require('./config/configurations.js')(app,express);

// root
app.get('/',home.index);

//login
app.get('/login',authentication.login);
app.post('/login',authentication.dologin);

//display all
app.get('/customers',customer.index);

// create customer
app.get('/customers/create',customer.create); //this is to show create new form
app.post('/customers/create',customer.createCustomer); // this is to post data and add new record

//view customer
app.get('/customers/view/:id',customer.view);

//edit customer
app.get('/customers/edit/:id',customer.showedit);
app.post('/customers/edit',customer.edit);

//delete customer
app.get('/customers/delete/:id',customer.delete);


//cookie example
// To test this example type http://localhost:8000/cookie in your browser
app.get('/cookie',examples.setcookie);
app.get('/cookie/delete',examples.deletecookie);

//session example
// To test this example type http://localhost:8000/session in your browser
app.get('/session',examples.setsession);


// this is if you want to display route like
///customers/range10:50
//app.get(/^\/customers\/range\/(\d+)(?:\.\.(\d+))?$/,customer.displayRange);


app.listen(8000);








