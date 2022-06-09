import { Router } from "express"
import StoreRegistrationController from "../controller/StoreRegistrationController.js"
import ParametersValidation from "../middleware/ParametersValidation.js"

const routes = Router()
routes.put(
  "/store-registration/:id",
  ParametersValidation.update,
  StoreRegistrationController.update
)

export default routes