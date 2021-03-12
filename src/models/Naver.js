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
     static associate(models) {
        this.belongsToMany(models.Project, { foreignKey: 'naver_id', through: 'navers_projects', as: 'projects'});
    } 

}

module.exports = Naver;