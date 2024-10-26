module.exports = (sequelize, DataTypes) => {

    const Levels = sequelize.define("Levels", {
        bloodSugarLevel: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        hba1c: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        cholesterol: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        hemoglobin: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        systolicBloodPressure: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        diastolicBloodPressure: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

    })

    return Levels
}