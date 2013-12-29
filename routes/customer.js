
/**
 * Created by ather on 12/21/13.
 */
var     db = require('../db/Customerdb.js');

exports.index = function (req,res) {
     res.render('customer/listcustomers',{customers:db.listCustomers()});
};

exports.create = function(req,res){
    var cust =  {
        name:'',
        address:'',
        city:'',
        state:'',
        zip:''
    };
    res.render('customer/createeditcustomer',{heading:'Add New Customer....',
                                              addeditflag:'create',
                                              customer:cust,
                                              submitButtonText:'Add New Customer'});
};

exports.createCustomer = function(req,res){
    db.addCustomer({
        name:req.body.name,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip

    });
    res.redirect('/customers');
};


exports.view = function(req,res){
    var customer = db.getCustomerById(req.params.id);
    res.render('customer/viewcustomer',{customer:customer})
};

exports.showedit = function(req,res){
    var customer = db.getCustomerById(req.params.id); //another way to get query string
    res.render('customer/createeditcustomer',{heading:'Add New Customer....',
        addeditflag:'edit',
        customer:customer,
        submitButtonText:'Edit Customer'});
};

exports.edit = function(req,res){
    db.updateCustomer({
        id:req.body.hiddenid,
        name:req.body.name,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip

    });
    res.redirect('/customers');
 };
exports.delete = function(req,res){
    console.log('req.params.id = '+req.params.id);
    db.deleteCustomer(req.params.id);
    res.redirect('/customers');
};

/*
exports.displayRange = function(req,res){
    res.send('Displaying customers from  '+req.params[0]+'  to  '+req.params[1]);
};
*/