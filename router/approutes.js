module.exports=(app)=>{

    var controller = require('../controller/controller');

    app.get('/',controller.sample);
    
    app.post('/login',controller.login);

    app.get('/view',controller.viewusers);

}
