import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("notes", "root", "", {
  host: "34.50.72.116",
  dialect: "mysql",
});

export default db;

