module.exports = (sequelize, DataTypes) => {

    const Info = sequelize.define("Info", {
        identificationKey: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        smoking: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        comment: {
            type: DataTypes.STRING,
            allowNull: true
            
        }
        
    });

    Info.associate = (models) => {
        Info.hasMany(models.Levels,{
            onDelete: "cascade",
        })
    }

    return Info
}