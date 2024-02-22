// Import Sequelize and DataTypes
import { DataTypes } from "sequelize";
import { sequelize} from "../config/db.js";


// Define the Keyword model
const Industry = sequelize.define('Industry', {
  // Model attributes
  ind_id: {
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

export default Industry;
