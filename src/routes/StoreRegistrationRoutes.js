import { Router } from "express"
import StoreRegistrationController from "../controller/StoreRegistrationController.js"
import ParametersValidation from "../middleware/ParametersValidation.js"

const routes = Router()
routes.get(
  "/store-registration/business",
  ParametersValidation.getByBusinessType,
  StoreRegistrationController.getByBusinessType
)

export default routes