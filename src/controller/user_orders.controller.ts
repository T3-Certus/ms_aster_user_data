import { Response } from "express";
import { GenericServiceErrorResponse, GenericServiceResponse } from "../utils/interfaces";
import { UserOrderModel } from "../model/user_orders.model";
import { status500InternalServerError } from "../utils/methods";
import { OrderStateModel } from "../model/order_states.model";
import { getGenericResponseHelper } from "../utils/methods/responseHelpers";

const model = UserOrderModel
const resourceName = "user_orders"

export async function getUserOrders(req: any,
  res: Response<GenericServiceResponse | GenericServiceErrorResponse>) {

  const { userId, orderId } = req.query

  try {
    let userOrders

    if (userId && !orderId) {
      userOrders = await model.findAll({
        where: { id_user: userId }, include: {
          model: OrderStateModel, attributes: [
            ["id_order_state", "id"], ["order_state", "name"]
          ]
        }
      })

      getGenericResponseHelper(userOrders, resourceName, res)
    }

    if (userId && orderId) {
      userOrders = await model.findOne({
        where: { id_user: userId, id_user_order: orderId }, include: {
          model: OrderStateModel, attributes: [
            ["id_order_state", "id"], ["order_state", "name"]
          ]
        }
      })

      getGenericResponseHelper(userOrders, resourceName, res)
    }

  } catch (error) {
    return res.status(500).json(status500InternalServerError(`${error}`))
  }
}