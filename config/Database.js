import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("notes", "afifah", "123456", {
  host: "34.50.72.116",
  dialect: "mysql",
});

export default db;

