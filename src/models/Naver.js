const { Model, DataTypes } = require('sequelize');

class Naver extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            job_role: DataTypes.STRING,
            birthdate: DataTypes.DATE,
            admission_date: DataTypes.DATE,
        }, {
            sequelize
        })
    }
}

module.exports = Naver;