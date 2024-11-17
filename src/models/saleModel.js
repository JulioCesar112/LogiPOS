const db =require("../config/database")
const {DataTypes} = require("sequelize") 
const Users = require("./userModel")

const Sales = db.define("sales",{
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
    type:DataTypes.ENUM("cash","card"),
    allowNull:false,
    defaultValue:"cash"

  },
  status:{
    type:DataTypes.ENUM("pending", "paid","canceled"),
    allowNull:false,
    defaultValue:"pending"
  },
  userId:{
    type:DataTypes.UUID,
    allowNull:false,
    field:"user_id",
    references:{
      key:"id",
      model: Users,
    }
  }
},{
  timestamps:false
})

module.exports = Sales