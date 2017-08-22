var Todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/',function(req,res){

        //seed database
        var starterTodos = [
            {
                 userName:"arun",
                 todo:"pls study daily",
                 isDone:false,
                 hasAttachment:false

            },
                 {
                 userName:"ashok",
                 todo:"pls call home",
                 isDone:false,
                 hasAttachment:false

            },
                 {
                 userName:"sethuram",
                 todo:"pls obey your mother",
                 isDone:false,
                 hasAttachment:false

            }
              
        ];
        
        Todos.create(starterTodos,function(err,results){
            res.send(results);
        });

    });
}