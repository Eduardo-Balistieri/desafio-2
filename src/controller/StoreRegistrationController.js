import StoreRegistrationDao from "../model/StoreRegistrationDao.js"

class StoreRegistrationController {
  static async update(req, res) {
    try {
      const id = req.params.id
      const { name, owner, registrationDate, businessType } = req.body
      await StoreRegistrationDao.update({ id, name, owner, registrationDate, businessType })
      res.sendStatus(204)
    }
    catch (err) {
      console.log(err.message)
      res.sendStatus(500)
    }
  }
}

export default StoreRegistrationController