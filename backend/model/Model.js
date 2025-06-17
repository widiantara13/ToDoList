import db from '../config/Config.js';
import { DataTypes } from 'sequelize';

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
    }

},{
    freezeTableName: true,
    timestamps: true
});

export default Task;

( 
    async () => {
        await db.sync();
        console.log("Database and tables created successfully!")
    }
)();