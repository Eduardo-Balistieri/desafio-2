import db from "../database/connection.js"

const DATABASE_NAME = "EVALUATION"
const TABLE_NAME = "STORE_REGISTRATION"

class StoreRegistrationDao {
  static init() {
    db.query(`CREATE DATABASE IF NOT EXISTS ${DATABASE_NAME}`);
    db.query(`USE ${DATABASE_NAME}`);
    db.query(`CREATE TABLE IF NOT EXISTS ${TABLE_NAME}(
      ID INT NOT NULL AUTO_INCREMENT,
      NAME VARCHAR(100) NOT NULL,
      OWNER VARCHAR(100) NOT NULL,
      REGISTRATION_DATE DATE NOT NULL,
      BUSINESS_TYPE VARCHAR(100) NOT NULL,
      PRIMARY KEY (ID)
    )`)
  }

  static getBusinessTypeCount(businessType) {
    return new Promise((resolve, reject) => db.query(
      `SELECT COUNT(*) AS COUNT FROM ${TABLE_NAME} WHERE BUSINESS_TYPE LIKE ?`,
      [`%${businessType}%`],
      (err, result, fields) => {
        if (err) {
          reject(err)
        }
        else {
          resolve(result[0]['COUNT'])
        }
      }
    ))
  }

  static getByBusinessType(businessType, page, limitPerPage) {
    return new Promise((resolve, reject) => db.query(
      `SELECT * FROM ${TABLE_NAME} WHERE BUSINESS_TYPE LIKE ? LIMIT ? OFFSET ?`,
      [`%${businessType}%`, limitPerPage, page * limitPerPage],
      (err, result, fields) => {
        if (err) {
          reject(err)
        }
        else {
          resolve(result)
        }
      }
    ))
  }

  static update(storeRegistration) {
    const { id, name, owner, registrationDate, businessType } = storeRegistration
    return new Promise((resolve, reject) => {
      db.query(`UPDATE ${TABLE_NAME} SET
          NAME=?,
          OWNER=?,
          REGISTRATION_DATE=?,
          BUSINESS_TYPE=?
          WHERE ID=?`,
        [name, owner, registrationDate, businessType, id],
        (err, result, fields) => {
          if (err) {
            reject(err)
          }
          else {
            resolve()
          }
        }
      )
    })
  }

  static mInsert(storeRegistration, callback) {
    const { name, owner, registrationDate, businessType } = storeRegistration
    db.query(`INSERT INTO ${TABLE_NAME} 
      (NAME, 
      OWNER, 
      REGISTRATION_DATE, 
      BUSINESS_TYPE) VALUES (?, ?, ?, ?)`,
      [name, owner, registrationDate, businessType],
      (err, result, fields) => callback(err)
    )
  }

  static mGetAll(callback) {
    db.query(`SELECT * FROM ${TABLE_NAME}`,
      (err, result, fields) => callback(err)
    )
  }

  static mGet(id, callback) {
    db.query(`SELECT * FROM ${TABLE_NAME}
      WHERE ID=?`,
      [id],
      (err, result, fields) => callback(err)
    )
  }

  static mDelete(id, callback) {
    db.query(`DELETE FROM ${TABLE_NAME}
      WHERE ID=?`,
      [id],
      (err, result, fields) => callback(err)
    )
  }


  /*
  Eduardo
    CREATE
    UPDATE
    SELECT (ATRIBUTO 1)
    SELECT (ATRIBUTO 2)

  Alice
    INSERT
    SELECT (TODOS)
    SELECT (UM)
    DELETE
  */
}

export default StoreRegistrationDao
