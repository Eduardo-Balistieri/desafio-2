class ParametersValidation {
  static getByOwner(req, res, next) {
    const name = req.query.name
    const page = req.query.page ?? 0
    const limit = req.query.limit
    if (!name) {
      return res.status(400).json({ message: "Missing store registration owner name" })
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