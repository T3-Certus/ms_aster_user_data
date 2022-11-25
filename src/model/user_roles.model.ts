import { DataTypes } from "sequelize";
import { sequelize } from "../db/dbConnection";

export const UserRoleModel = sequelize.define(
  "user_roles", {
    id_user_rol:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_rol_name: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  }
)