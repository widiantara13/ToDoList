import { DataTypes } from 'sequelize';
import db from '../config/Config.js';

const User = db.define("user", {
    uuid:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true

        }
    },
    name:{
        type: DataTypes.STRING,       
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [2, 100]
        }
    },
    
    
    email:{
        type: DataTypes.STRING,       
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,       
        allowNull: false,
        validate:{
            notEmpty: true
            
        }
    },
    
    
},{
    freezeTableName: true,
    timestamps: false
});

export default User;
  