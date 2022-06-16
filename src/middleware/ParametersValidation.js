class ParametersValidation {
  static getByBusinessType(req, res, next) {
    const businessType = req.query.type
    const page = req.query.page ?? 0
    const limit = req.query.limit
    if (!businessType) {
      return res.status(400).json({ message: "Missing business type" })
    }
    if (!limit) {
      return res.status(400).json({ message: "You need to pass a limit per page" })
    }
    if (isNaN(page) || isNaN(limit) || parseInt(limit) <= 0) {
      return res.status(400).json({ message: "Invalid argument" })
    }
  }

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

  static mInsert(req, res, next) {
    const { name, owner, registrationDate, businessType } = req.body
    try {
      Validation.storeRegistration(name, owner, registrationDate, businessType)
    }
    catch (err) {
      return res.status(400).json({ message: err.message })
    }
    next()
  }

  static mGet(req, res, next) {
    const id = req.query.id
    if (!id) {
      return res.status(400).json({ message: "Missing id" })
    }
    next()
  }

}

export default ParametersValidation