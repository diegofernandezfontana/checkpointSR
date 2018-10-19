import express from 'express';
import db from '../models';
const User = db.model('user');
const Message = db.model('message');

// Este router esta ya montado en /useres en server/app.js
const router = express.Router();


router.get('/', function (req, res) {
    User.findAll({})
    .then(usuarios =>res.send(usuarios)
    )
});




/*router.put('/:userId', function (req, res) {
    var email = req.body;
    var id = req.params.id;

    User.update( email, {
        where:{
            id,
        },
        returning: true
    })
    .then(function(usuario){
        console.log(usuario);
        
        res.status(201).send({
        })
    })
});

*/
export default router;