import { Router } from "express"
import StoreRegistrationController from "../controller/StoreRegistrationController.js"
import ParametersValidation from "../middleware/ParametersValidation.js"

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
routes.delete(
  "/store-registration/product",  
  ParametersValidation.mGet, 
  StoreRegistrationController.mDelete,
)
routes.post(
  "/store-registration/new",  
  ParametersValidation.mInsert, 
  StoreRegistrationController.mInsert,
)


export default routes