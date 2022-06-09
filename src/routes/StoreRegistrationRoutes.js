import { Router } from "express"
import ParametersValidation from "../middleware/ParametersValidation.js"
import StoreRegistrationController from "../controller/StoreRegistrationController.js"

const routes = Router()
routes.get(
  "/store-registration/business",
  ParametersValidation.getByBusinessType,
  StoreRegistrationController.getByBusinessType
)
routes.put(
  "/store-registration/:id",
  ParametersValidation.update,
  StoreRegistrationController.update
)
routes.get(
  "/store-registration/owner",
  ParametersValidation.getByOwner,
  StoreRegistrationController.getByOwner
)

export default routes