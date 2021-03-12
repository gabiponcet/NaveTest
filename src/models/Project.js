const { Model, DataTypes } = require('sequelize');

class Project extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'projects',
            freezeTableName: true,
        })
    }

     static associate(models) {
        this.belongsToMany(models.Naver, { foreignKey: 'project_id', through: 'navers_projects', as: 'navers'})
    } 
}

module.exports = Project;