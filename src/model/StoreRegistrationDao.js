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
          if(err) {
            reject(err)
          }
          else {
            resolve()
          }
        }
      )
    })
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
