import express from "express"
import StoreRegistrationDao from "./model/StoreRegistrationDao.js"
import useRoutes from "./routes/index.js"

const app = express()
app.use(express.json())
try {
  StoreRegistrationDao.init()
}
catch(err) {
  console.log("Error initializing database: ", err.message)
}
useRoutes(app)

export default app