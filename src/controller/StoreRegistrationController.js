import StoreRegistrationDao from "../model/StoreRegistrationDao.js"

class StoreRegistrationController {
  static async getByBusinessType(req, res) {
    try {
      const businessType = req.query.type
      const page = Math.max(0, parseInt(req.query.page ?? 0)) //se nao passar, padrao = 0
      const limitPerPage = parseInt(req.query.limit)

      const count = await StoreRegistrationDao.getBusinessTypeCount(businessType)
      const data = await StoreRegistrationDao.getByBusinessType(businessType, page, limitPerPage)
      const response = { results: data }
      if (page > 0 && data.length > 0) {
        response['prev'] = `http://localhost:3030/store-registration/business?type=${businessType}&page=${page - 1}`
      }
      const offset = (limitPerPage * page) + data.length
      if (offset < count) {
        response['next'] = `http://localhost:3030/store-registration/business?type=${businessType}&page=${page + 1}`
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