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
    next()
  }
}

export default ParametersValidation