module.exports = function (sequelize, DataTypes) {
 
    let Post = sequelize.define("Post", {
       category:
       {
           type:  DataTypes.STRING, 
           allowNull: false,
           validate: {
               is: /^[a-z]+$/i,
           }
       },
       title: 
       {
           type: DataTypes.STRING,
           allowNull: false, 
           validate: {
               is: ["^[a-z]+$",'i'],
           },
       body: 
       {
           type:  DataTypes.STRING,
           allowNull: false,
       },
       author:
       {
           type: DataTypes.STRING,
       } 
       //Data and time should already be store on table &&ForeignKey will reference primary id from UserTable
       } 
   })
    return Post
    }
   