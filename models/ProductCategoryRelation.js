
import { DataTypes, Model } from 'sequelize';
import sequelize from '../services/sequelize';
import Products from "./Products.js";
import Categories from "./Categories.js";

class ProductCategoryRelation extends Model {
}

ProductCategoryRelation.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
}, {
  sequelize,
  tableName: 'product_category_relation',
  modelName: 'productCategoryRelation',
});

Products.belongsToMany(Categories, {
  as: 'categories',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  foreignKey: 'categoryId',
  through: ProductCategoryRelation,
});

Categories.belongsToMany(Products, {
  as: 'products',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  foreignKey: 'productId',
  through: ProductCategoryRelation,
});

export default ProductCategoryRelation;

