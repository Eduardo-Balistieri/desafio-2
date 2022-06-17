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

  static async getByBusinessType(req, res) {
    try {
      const businessType = req.query.type
      const page = Math.max(0, parseInt(req.query.page ?? 0)) //se nao passar, padrao = 0
      const limitPerPage = parseInt(req.query.limit)

      const count = await StoreRegistrationDao.getBusinessTypeCount(businessType)
      const data = await StoreRegistrationDao.getByBusinessType(businessType, page, limitPerPage)
      const response = { results: data }
      if (page > 0 && data.length > 0) {
        response['prev'] = `http://localhost:3030/store-registration/business?type=${businessType}&page=${page - 1}&limit=${limitPerPage}`
      }
      const offset = (limitPerPage * page) + data.length
      if (offset < count) {
        response['next'] = `http://localhost:3030/store-registration/business?type=${businessType}&page=${page + 1}&limit=${limitPerPage}`
      }
      res.status(200).json(response)
    }
    catch (err) {
      console.log(err.message)
      res.sendStatus(500)
    }
  }

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
  static mInsert(req, res) {
    const { name, owner, registrationDate, businessType } = req.body
    StoreRegistrationDao.mInsert(
      { name, owner, registrationDate, businessType },
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

  static mDelete(req, res) {
    const id = req.query.id
    StoreRegistrationDao.mDelete(
      id,
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

  static mGet(req, res) {
    const id = req.query.id
    StoreRegistrationDao.mGet(
      id,
      (err, result) => {
        if (err) {
          console.log(err.message)
          res.sendStatus(500)
        }
        else {
          console.log(result)
          res.status(200).json(result)
        }
      }
    )
  }

  static mGetAll(req, res) {
    StoreRegistrationDao.mGetAll(
      (err, result) => {
        if (err) {
          console.log(err.message)
          res.sendStatus(500)
        }
        else {
          console.log(result)
          res.status(200).json(result)
        }
      }
    )
  }
}

export default StoreRegistrationController