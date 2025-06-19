import db from '../config/Config.js';
import { DataTypes, HasMany } from 'sequelize';
import User from './UserModel.js'
const Task = db.define('task', {
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    desc:{
        type: DataTypes.STRING,
        allowNull: false
    },
    is_done:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    userId:{

        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }

},{
    freezeTableName: true,
    timestamps: true
});

User.hasMany(Task);
Task.belongsTo(User);


export default Task;

