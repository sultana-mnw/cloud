var user123 = require('../models/usermodels');
// get
exports.sample = (req,res)=>{
res.send("get method connected");

}

// post 
exports.login =(req,res)=>{
    // console.log(req);
    var userdetails = new  user123({
        username:req.body.username,
         password:req.body.password
    });



    userdetails.save().then(result =>{
        if(err)
        {
            console.log("error on save");
        }
        if(result)
        {
            console.log("saved");
        }
    })
res.end();
}

exports.viewusers =(req,res)=>{

    user123.find()
    .then(data => {
        res.json(data);
        console.log(data);
    }).catch(err => {
        
        console.log(err);
        res.json(err);
    });



}



