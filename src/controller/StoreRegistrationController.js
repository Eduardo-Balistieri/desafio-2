import StoreRegistrationDao from "../model/StoreRegistrationDao.js"

class StoreRegistrationController {
  static async getByOwner(req, res) {
    try {
      const ownerName = req.query.name
      const page = Math.max(0, parseInt(req.query.page ?? 0))
      const limitPerPage = parseInt(req.query.limit)

      const count = await StoreRegistrationDao.getOwnerCount(ownerName)
      const data = await StoreRegistrationDao.getByOwner(ownerName, page, limitPerPage)

      const response = { results: data }
      if (page > 0 && data.length > 0) {
        response['prev'] = `http://localhost:3030/store-registration/owner?name=${ownerName}&page=${page - 1}&limit=${limitPerPage}`
      }
      const offset = (limitPerPage * page) + data.length
      if (offset < count) {
        response['next'] = `http://localhost:3030/store-registration/owner?name=${ownerName}&page=${page + 1}&limit=${limitPerPage}`
      }
      res.status(200).json(response)
    }
    catch (err) {
      console.log(err.message)
      res.sendStatus(500)
    }
  }
}
export default StoreRegistrationController