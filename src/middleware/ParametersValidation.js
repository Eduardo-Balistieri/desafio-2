import Validation from "../util/Validation.js"

class ParametersValidation {
  static update(req, res, next) {
    const { name, owner, registrationDate, businessType } = req.body
    try {
      Validation.storeRegistration(name, owner, registrationDate, businessType)
    }
    catch (err) {
      return res.status(400).json({ message: err.message })
    }
    next()
  }
}

export default ParametersValidation