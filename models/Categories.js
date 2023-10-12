import { DataTypes, Model } from 'sequelize';
import sequelize from '../services/sequelize';

class Categories extends Model {
}

Categories.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true,
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description:{
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'categories',
  modelName: 'categories',
});

export default Categories;
