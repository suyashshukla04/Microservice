import { DataTypes } from "sequelize";
import sequelize from "../configs/db.js";

const Product = new sequelize.define("Product",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    name:{
        type : DataTypes.STRING,
        allowNull:false 
    },
    description : {
        type:DataTypes.TEXT,
        allowNull : true
    },
    price : {
        type : DataTypes.INTEGER,
        allowNull:false
    },
    quantity : {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    imageUrl : {
        type : DataTypes.STRING,
        allowNull:true
    }
},{timestamps: true})


  export default Product;