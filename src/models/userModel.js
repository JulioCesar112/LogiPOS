const db = require("../config/database")
const { DataTypes } = require("sequelize")

const User = db.define("user", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name"
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name"
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true,
    validate: {
      isEmail: true
    }
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull:false,
    defaultValue: "active"
  },
  role:{
    type:DataTypes.STRING,
    allowNull: false,
    defaultValue:"normal"
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field:"is_verified",
    defaultValue:false
  }
})

module.exports = User