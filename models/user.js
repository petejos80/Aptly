


module.exports = function(sequelize, Sequelize) {
 
    var DataTypes = require('sequelize/lib/data-types');

    var User = sequelize.define('user', {
 
 
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        email: {
            type: Sequelize.STRING,
            // validate: {
            //     isEmail: true
            // }
        },

        leaseEnd:
        {
            type: DataTypes.DATE,
            allowNull: true, 
            // validation:{
            //     isDate: true
            // } 
        },
        leaseStart:
        {
            type: DataTypes.DATE,
            allowNull: true,
            // validation:{
            //     isDate: true
            // }
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        
        unitnumber: {
            type: DataTypes.STRING,
            allowNull: false, 
            validation: {
                is: /^[a-z]+$/i          
            }
        }, 

        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: DataTypes.UUIDV1, 
            validation: {
                isNumeric: true        
            }
        }, 
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
        
 
    });
        User.associate = function(models){
            User.hasMany(models.Post);
        };
    return User;
 
}