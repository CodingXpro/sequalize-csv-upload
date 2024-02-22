// Import Sequelize and DataTypes
import {  DataTypes } from 'sequelize';
import { sequelize} from '../config/db.js';

import Industry from './industryModel.js'; // Assuming the file name is industry.js
import Keyword from './keywordModel.js'; // Assuming the file name is keyword.js

// Define the Lead model
const Lead = sequelize.define('Lead', {
  // Model attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  job_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company_size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user'
  },
  
  IndustryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Industry,
      key: 'ind_id'
    }
  },
  KeywordId: {
    type: DataTypes.INTEGER,
    references: {
      model: Keyword,
      key: 'key_id'
    }
  }
});

Lead.belongsTo(Industry,{foreignKey:'IndustryId'})
Lead.belongsTo(Keyword,{foreignKey:'KeywordId'})
// Lead.hasMany(Industry, {
//   as: 'children',
//   foreignKey: 'IndustryId',
//   sourceKey: 'ind_id',
//   useJunctionTable: false
// });
// Lead.belongsTo(Industry, {
//   foreignKey: "IndustryId",
//   targetKey: "ind_id",
// });

// Lead.hasMany(Keyword, {
//   as: 'children',
//   foreignKey: 'KeywordId',
//   sourceKey: 'key_id',
//   useJunctionTable: false
// });
// Lead.belongsTo(Keyword, {
//   foreignKey: "KeywordId",
//   targetKey: "key_id",
// });

export default Lead;
