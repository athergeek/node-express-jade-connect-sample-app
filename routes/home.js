/**
 * Created by ather on 12/21/13.
 */

exports.index = function(req,res){

    // res.send('Welcome to index function..');
    res.render('home/default');

};

exports.other = function(req,res){

    res.send('OTher..');

};

exports.singleIntercepter = function(req,res,next){

    console.log('single interceptor called...');
    next();


};




//exports.index = index; // this is to expose this function to outside world.