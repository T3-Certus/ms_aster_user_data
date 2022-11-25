import {Router} from "express"
import { getUserData, putUserData } from "../controller/user_data.controller"

const router = Router()

router.get('/user-data/:userId', getUserData)

router.put('/update-user/:userId', putUserData)

export default router