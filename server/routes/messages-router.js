import express from 'express';
import db from '../models';
const Message = db.model('message');
const User = db.model('user');

// Este router esta ya montado en /messages en server/app.js
const router = express.Router();


router.get('/to/:user', function (req, res) {
    var id = req.params.user;
    
    Message.findAll({
        where:{
            toId:id
        }
    })
    .then(data => res.send(data))
});

router.get('/from/:user', function (req, res) {
    var id = req.params.user;
    
    Message.findAll({
        where:{
            fromId:id
        }
    })
    .then(data => res.send(data))
});

export default router;