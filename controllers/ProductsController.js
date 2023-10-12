import { Categories, ProductCategoryRelation, Products } from "../models/index.js";
import _ from 'lodash';

class ProductsController {
  static async createProduct(req, res, next) {

    try {
      const { id, categories, ...data } = req.body
      if (id) {
        await Products.update(data, { where: { id } })
        await Promise.all(categories.map(c => {
          ProductCategoryRelation.create({ productId: id, categoryId:+c })
        }))

      } else {
        await Products.create(data)
      }
      res.json({
        status: 'ok',
      });
    } catch (e) {
      next(e);
    }
  }

  static async getProducts(req, res, next) {

    try {
      const products = await Products.findAll()
      res.json({
        status: 'ok',
        products
      });
    } catch (e) {
      next(e);
    }
  }


  static async getCategories(req, res, next) {
    try {
      const categories = await Categories.findAll()
      res.json({
        status: 'ok',
        categories
      });
    } catch (e) {
      next(e);
    }
  }
}

export default ProductsController;
