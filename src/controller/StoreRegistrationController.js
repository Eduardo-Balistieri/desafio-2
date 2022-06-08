import StoreRegistrationDao from "../model/StoreRegistrationDao.js"

class StoreRegistrationController {
  static update(req, res) {
    const id = req.query.id
    const { name, owner, registrationDate, businessType } = req.body
    StoreRegistrationDao.update(
      { id, name, owner, registrationDate, businessType },
      (err) => {
        if (err) {
          console.log(err.message)
          res.sendStatus(500)
        }
        else {
          res.sendStatus(204)
        }
      }
    )
  }
}
export default StoreRegistrationController