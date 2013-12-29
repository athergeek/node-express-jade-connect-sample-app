/**
 * Created by ather on 12/28/13.
 */


exports.setcookie = function (req,res) {
    if(req.cookies.MyCookie==='Eat me now'){
        res.render('examples/cookies',{val:'The cookie value is : '+req.cookies.MyCookie});
    }
    else
    {
        res.cookie("MyCookie","Eat me now");
        res.render('examples/cookies',{val:'The cookie is not set yet.. Please try again.'});
    }

};


exports.setsession = function (req,res) {
    req.session.sessionvar = "Test value from session";
    res.render('examples/session',{request:req}); // this is how you can use request object onto jade view..

};


exports.deletecookie = function (req,res) {

    res.clearCookie("MyCookie");
    res.redirect('/cookie');

};

