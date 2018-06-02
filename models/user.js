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
            notEmpty: true
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        username: {
            type: Sequelize.TEXT
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        leaseEnd:
        {
            type: DataTypes.STRING,
            allowNull: true, 
            validation:{
                isDate: true
            } 
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
        
        interest: {
            type:  DataTypes.STRING,
            allowNull: true, 
            validation: {
                notEmpty: true
            }
        }, 
    
        address: {
            type: DataTypes.STRING,
            allowNull: true, 
            validation: {
                is: /^[a-z]+$/i         
            }
        },  
    
        geoLocation: {
            type: DataTypes.STRING,
            allowNull: true,
            validation: {
                isDecimal: true
            } 
        }, 
    
        cookies: {
            type: DataTypes.STRING,
            allowNull: true
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