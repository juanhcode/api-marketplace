const { DataTypes } = require('sequelize');
const db = require('../connection');
const User = require('./user.model');
const Coach = db.define('coach', {
    coach_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description : {
        type: DataTypes.STRING,
        allowNull: false
    },
    price : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    calification : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references:{
            model:User,
            key:'user_id'
        }
    }},
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'task'
    }
);

Coach.belongsTo(User,{foreignKey:'user_id'});


Coach.prototype.toJSON = function(){
    let values = Object.assign({}, this.get());
    return values;
}

module.exports = Coach;