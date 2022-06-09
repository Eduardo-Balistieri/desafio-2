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

  static getOwnerCount(owner) {
    return new Promise((resolve, reject) => db.query(
      `SELECT COUNT(*) AS COUNT FROM ${TABLE_NAME} WHERE OWNER LIKE ?`,
      [`%${owner}%`],
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

  static getByOwner(owner, page, limitPerPage) {
    return new Promise((resolve, reject) => db.query(
      `SELECT * FROM ${TABLE_NAME} WHERE OWNER LIKE ? LIMIT ? OFFSET ?`,
      [`%${owner}%`, limitPerPage, page * limitPerPage],
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
