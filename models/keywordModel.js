// Import Sequelize and DataTypes
import { DataTypes } from "sequelize";
import { sequelize} from "../config/db.js";


// Define the Keyword model
const Keyword = sequelize.define('Keyword', {
  // Model attributes
  key_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Added autoIncrement property
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  }
},{
    timestamps:true
});

export default Keyword;
