import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";

const Note = db.define(
  "notes",
  {
    judul: DataTypes.STRING,
    konten: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

db.sync().then(() => console.log("Database synced"));

export default Note;
