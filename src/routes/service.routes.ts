import { Router } from "express"
import { getUserData, putUserData } from "../controller/user_data.controller"
import { getUserOrders } from "../controller/user_orders.controller"

const router = Router()

router.get('/user-data/:userId', getUserData)

router.put('/update-user/:userId', putUserData)

router.get('/get-orders', getUserOrders)


export default router