import { DataTypes } from "sequelize";
import { sequelize } from "../db/dbConnection"
import { OrderStateModel } from "./order_states.model";
import { UserDataModel } from "./user_data.model";

export const UserOrderModel = sequelize.define(
  "user_orders", {
  id_user_order: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  total_price: {
    type: DataTypes.INTEGER
  },
  total_price_wdisc: {
    type: DataTypes.INTEGER
  },
  order_date: {
    type: DataTypes.DATE
  },
  delivery_date: {
    type: DataTypes.DATE
  },
  total_items_quantity: {
    type: DataTypes.INTEGER
  },
  products: {
    type: DataTypes.JSON
  },
  shipping_address: {
    type: DataTypes.JSON
  },
  shipping_price: {
    type: DataTypes.INTEGER
  },
  id_transaction_pay: {
    type: DataTypes.STRING
  }
},
  {
    timestamps: false
  }
)

UserOrderModel.belongsTo(UserDataModel, {
  foreignKey: 'id_user',
  targetKey: 'id_user',

})

UserDataModel.hasMany(UserOrderModel, {
  foreignKey: 'id_user',
  sourceKey: 'id_user',

})

UserOrderModel.belongsTo(OrderStateModel, {
  foreignKey: 'id_order_state',
  targetKey: 'id_order_state'
})

OrderStateModel.hasMany(UserOrderModel, {
  foreignKey: 'id_order_state',
  sourceKey: 'id_order_state'
})