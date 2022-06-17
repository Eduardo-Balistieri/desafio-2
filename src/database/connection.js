import mysql from "mysql"

const connection = mysql.createConnection({
  host: "localhost",
  user: "alice",
  password: "password!"
})

connection.connect(err => {
  if (err) {
    console.error("Error connecting: " + err.message)
    throw err
  }
  console.log("MySql: connected as id " + connection.threadId)
})

export default connection