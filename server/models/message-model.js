import Sequelize from 'sequelize';
import db from './_db';
const User = db.model('user');

const Message = db.define('message', {
    subject: {
        type: Sequelize.JSON,
        defaultValue: 'No Subject'
    },
    body: {
        type: Sequelize.JSON,
        validate: {
            notNull: true
        }
    },
});

Message.getAllWhereSender = function(user){
    return Message.findAll({
        where: {
            fromId: user
        }
    });
}
Message.prototype.truncateSubject = function(num, val = false){
    if(val == false){
        return {
            body: this.body,
            subject: this.subject.slice(0,num)
        };
    } else{
        return{
            body: this.body,
            subject: this.subject.slice(0,num) + '...'
        }
    }
}
 

export default Message;