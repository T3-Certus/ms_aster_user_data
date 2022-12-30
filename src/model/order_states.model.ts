import { DataTypes } from "sequelize";
import { sequelize } from "../db/dbConnection";

export const OrderStateModel = sequelize.define(
  "order_states", {
    id_order_state: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_state: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  }
)