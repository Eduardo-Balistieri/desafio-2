import { Router } from "express"
import StoreRegistrationController from "../controller/StoreRegistrationController.js"
import ParametersValidation from "../middleware/ParametersValidation.js"

const routes = Router()
routes.get(
  "/store-registration/business",
  ParametersValidation.getByBusinessType,
  StoreRegistrationController.getByBusinessType
  )
  routes.get(
    "/products",  
    StoreRegistrationController.mGetAll
  )
  routes.get(
    "/product",  
    ParametersValidation.mGet, 
    StoreRegistrationController.mGet
  )
  routes.delete(
    "/product",  
    ParametersValidation.mGet, 
    StoreRegistrationController.mDelete,
  )
  routes.post(
    "/new",  
    ParametersValidation.mInsert, 
    StoreRegistrationController.mInsert,
  )

export default routes