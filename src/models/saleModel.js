const db =require("../config/database")
const {DataTypes} = require("sequelize") 
const User = require("./userModel")

const Sale = db.define("sale",{
  id :{
    type:DataTypes.UUID,
    allowNull:true,
    primaryKey:true,
    defaultValue:DataTypes.UUIDV4
  },
  total:{
    type:DataTypes.DECIMAL,
    allowNull:false,
    validate:{
      min:0
    }
  },
  date:{
    type:DataTypes.DATE,
    allowNull:false,
    defaultValue:DataTypes.NOW
  },
  paymentMethod:{
    type:DataTypes.STRING,
    allowNull:false
  },
  userId:{
    tupe:DataTypes.UUID,
    allowNull:false,
    field:"user_id",
    references:{
      model: User,
      key:"id"
    }
  }
})

module.exports = Sale