module.exports = function (sequelize, DataTypes) {
    //User Model used to access User Table on MySql database

        let User = sequelize.define("User", {
            userId:
            {
                type: DataTypes.BIGINT,
                allowNull: false,
                validation: {
                        is: /^[a-z]+$/i,          
                } 
            },  
            userName:
            {
               type:  DataTypes.STRING, 
               allowNull: false,
               validation:  {
                   is: /^[a-z]+$/i,          
               }
            },
            userPsswd:{
                type: DataTypes.STRING,
                allowNull: false,
                validation: {
                    
                }  
            }, 
            firstName:
            {
                type: DataTypes.STRING,
                allowNull: false,
                validation:  {
                    is: /^[a-z]+$/i,          
                } 
             }, 
            lastName:
            {
                type: DataTypes.STRING,
                allowNull: false,
                validation: {
                   is: /^[a-z]+$/i,           
                } 
             }, 
            unitNumber:
            {
                type: DataTypes.STRING,
                allowNull: false, 
                validation: {
                    is: /^[a-z]+$/i,          
                }
            }, 
            email:
            {
                type: DataTypes.STRING,
                allowNull: false,
                validation: {
                     isEmail: true, is: /^[a-z]+$/i,          
                }         
             }, 
            leaseEnd:
            {
                type: DataTypes.STRING,
                allowNull: false, 
                validation:{
                    isDate: true, 
                } 
             },  
            phone:
            {
                type: DataTypes.STRING,
                allowNull: false, 
                validation: {
                    isNumeric: true,         
                }
             }, 
            interest:
            {
                type:  DataTypes.STRING,
                allowNull: false, 
                validation: {
                    notEmpty: true,
                }
             }, 
            Address:
            {
                type: DataTypes.STRING,
                allowNull: false, 
                validation: {
                    is: /^[a-z]+$/i,          
                }
             },  
            geoLocation:
            {
                type: DataTypes.STRING,
                allowNull: false,
                validation: {
                    isDecimal: true,
                } 
             }, 
            cookies:
            {
                type: DataTypes.STRING,
                allowNull: false,
                validation: {
                    
                } 
             }, 
    });
return User
}