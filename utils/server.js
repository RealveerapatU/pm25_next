const mysql = require("mysql2");
require("dotenv").config();
export const mysqlpool = mysql.createPool(process.env.NEXT_PUBLIC_PM25_API_KEY);
