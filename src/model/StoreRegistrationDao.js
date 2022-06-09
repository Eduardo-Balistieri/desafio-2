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
