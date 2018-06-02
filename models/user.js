Sequelize = require("sequelize")
module.exports = function (sequelize, DataTypes) {
    //User Model used to access User Table on MySql database

    let User = sequelize.define("User", {
        userId:
         {
            type: DataTypes.BIGINT,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
            validation: {
                is: /^[a-z]+$/i
            }
        },
        userName: 
        {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                is: /^[a-z]+$/i
            }
        },
        userPsswd: 
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: 
        {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                is: /^[a-z]+$/i
            }
        },
        lastName: 
        {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                is: /^[a-z]+$/i
            }
        },
        unitNumber: 
        {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                is: /^[a-z]+$/i
            }
        },
        email: 
        {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                isEmail: true,
                is: /^[a-z]+$/i
            },
        },
        leaseEnd: 
        {
            type: DataTypes.STRING,
            allowNull: true,
            validation: {
                isDate: true
            }
        },
        phone: 
        {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: DataTypes.UUIDV1,
            validation: {
                isNumeric: true
            }
        },
        interest: 
        {
            type: DataTypes.STRING,
            allowNull: true,
            validation: {
                notEmpty: true
            }
        },
        address: 
        {
            type: DataTypes.STRING,
            allowNull: true,
            validation: {
                is: /^[a-z]+$/i
            }
        },
        geoLocation: 
        {
            type: DataTypes.STRING,
            allowNull: true,
            validation: {
                isDecimal: true
            }
        }
    });
    return User
}