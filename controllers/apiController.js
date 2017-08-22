var Todos = require("../models/todoModel");
var bodyParser = require('body-parser');

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extend:true}));

    app.get('/api/todos/:uname', function(req,res){
        Todos.find({userName:req.params.uname}, function(err,todos){
            if (err) throw err;
            res.send(todos);

        });
    });

    app.get('/api/todos/:id',function(req,res){
        Todos.findById({ _id:req.params.id}, function(err,todos){
            if (err) throw err;
            res.send(todos);
        });
    });

   app.post('/api/todos', function(req,res){
       if (req.body.id){
           Todos.findByIdAndUpdate(req.body.id,{
               todo:req.body.todo,
               isDone:req.body.isDone,
               hasAttachment:req.body.hasAttachment
           }, function(err,todo){
               if (err) throw err;
               res.send("Successfully Updated !!!");
           })
       }

       else {
           var newTodo = Todos({
               userName:'test',
               todo:req.body.todo,
               isDone:req.body.isDone,
               hasAttachment:req.body.hasAttachment
           })

           newTodo.save(function(err){
               res.send('Successfully Saved your new todo data !')
           })

       }
   });

      app.delete('/api/todos', function(req, res){

        Todos.findByIdAndRemove(req.body.id, function(err){
            res.send('Deleted Successfully !!!');
        });

      });


}