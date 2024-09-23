import { DataTypes } from "sequelize";
import sequelize from "../configs/db.js";

const User = sequelize.define("User",{
    id:{
        type : DataTypes.INTEGER,
        primaryKey:true,
        allowNull : false,
        autoIncrement:true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,      
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          name: 'email',
          msg: 'Email already exists.'
        }
      },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    },
    
})
User.sync({ alter: true }) 
  .then(() => console.log('User table synced'))
  .catch((err) => console.log('Sync failed: ', err));
export default User;