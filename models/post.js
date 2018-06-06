module.exports = function (sequelize, DataTypes) {

    let Post = sequelize.define("Post", {
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     is: /^[a-z]+$/i
            // }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            //    validate: {
            //     is: /^[a-z]+$/i
            //    }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
     Post.associate = function (models) {
         Post.belongsTo(models.user, {
             foreignKey: {
                 allowNull: false
             }
         })
     };
    return Post
}