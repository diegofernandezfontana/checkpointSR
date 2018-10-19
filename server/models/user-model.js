import Sequelize from 'sequelize';
import db from './_db';

const User = db.define('user', {
    email: {
        type: Sequelize.JSON,
        allowNull: false,
        validate:{
            notEmpty: true
        }  
    },

});

export default User;