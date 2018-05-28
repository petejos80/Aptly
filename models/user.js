module.exports = function(sequelize, Sequelize) {

    var DataTypes = require('sequelize/lib/data-types');
 
    var User = sequelize.define('user', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true,
            validation:  {
                is: /^[a-z]+$/i,          
            } 
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true,
            validation: {
                is: /^[a-z]+$/i,           
             } 
        },
        
        unitNumber: {
            type: DataTypes.STRING,
            allowNull: false, 
            validation: {
                is: /^[a-z]+$/i,          
            }
        }, 

        leaseEnd:{
            type: DataTypes.STRING,
            allowNull: false, 
            validation:{
                isDate: true, 
            } 
        },  
 
        username: {
            type: Sequelize.TEXT,
            allowNull: false,
            validation:  {
                is: /^[a-z]+$/i,   
            }
        },
 
        about: {
            type: Sequelize.TEXT
        },

        interest:{
            type:  DataTypes.STRING,
            allowNull: false, 
            validation: {
                notEmpty: true,
            }
         }, 

         leaseEnd: {
                type: DataTypes.STRING,
                allowNull: false, 
                validation:{
                    isDate: true, 
                } 
             },  
 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        Address:{
            type: DataTypes.STRING,
            allowNull: false, 
            validation: {
                is: /^[a-z]+$/i,          
            }
        },  

        geoLocation:{
                type: DataTypes.STRING,
                allowNull: false,
                validation: {
                    isDecimal: true,
                } 
        }, 
        
        cookies:{
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                
            } 
        }, 
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        last_login: {
            type: Sequelize.DATE
        },
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
 
    });
 
    return User;
 
}