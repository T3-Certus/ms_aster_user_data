import { DataTypes } from "sequelize";
import {sequelize} from "../db/dbConnection"
import { UserRoleModel } from "./user_roles.model";

export const UserDataModel = sequelize.define(
  "user_data", {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }, 
    user_name: {
      type: DataTypes.STRING
    },
    user_surname: {
      type: DataTypes.STRING
    },
    user_document_type:{
      type: DataTypes.STRING
    },
    user_document_number: {
      type: DataTypes.STRING
    },
    user_cellphone: {
      type: DataTypes.STRING
    },
    user_email:{
      type: DataTypes.STRING
    },
    user_password: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  }
)

UserDataModel.belongsTo(UserRoleModel, {
  foreignKey: 'id_user_rol',
  targetKey: 'id_user_rol'
})

UserRoleModel.hasMany(UserDataModel, {
  foreignKey: 'id_user_rol',
  sourceKey: 'id_user_rol'
})