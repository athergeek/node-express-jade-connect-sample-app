/**
 * Created by ather on 12/28/13.
 */
exports.login = function (req,res) {
    res.render('login/login');
};

exports.dologin = function (req,res) {
    console.log('inside dologin... '+req.body.username);
    if(req.body.username===req.body.password){
       console.log('Setting req.session.user... ');
      req.session.user = {isAuthenticated:true,username:req.body.username}
    }
    res.redirect('/customers/create');
};
