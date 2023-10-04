import { Users } from "../models";
import HttpError from "http-errors";
import Mail from "../services/Mail.js";
import md5 from "md5";
import JWT from "jsonwebtoken";
import _ from 'lodash'

class UsersController {
  static async createUser(req, res, next) {
    try {

      const user = await Users.findOne({ where: { email: req.body.email } });
      if (user) {
        throw HttpError(422, 'User already exists.')
      }

      await Users.create(req.body)
      // await Mail.send(req.body.email, 'ghost test project', 'Activate your account', '<b>rtu</b>')
      res.json({
        status: 'ok',
      });
    } catch (e) {
      next(e);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const { id, ...data } = req.body

      const user = await Users.findOne({ where: { id } });
      if (_.isEmpty(user)) {
        throw HttpError(422, 'Invalid id')
      }

      await Users.update(data, { where: { id } })
      res.json({
        status: 'ok',
      });
    } catch (e) {
      next(e);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params

      const user = await Users.findOne({ where: { id } });
      if (_.isEmpty(user)) {
        throw HttpError(422, 'Invalid id')
      }

      await Users.destroy({ where: { id } })
      res.json({
        status: 'ok',
      });
    } catch (e) {
      next(e);
    }
  }

  static async getUsers(req, res, next) {

    const { page = 1, s = '' } = req.query;

    const limit = 20;
    const offset = page * limit - limit;

    const users = await Users.findAll({
      limit,
      offset,
      where: { $or: { email: { $like: `%${s}%` }, name: { $like: `%${s}%` } } }
    })
    try {
      res.json({
        status: 'ok',
        users
      });
    } catch (e) {
      next(e);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ where: { email, password: md5(md5(password)) } });
      if (!user) {
        throw HttpError(404, "User not found.")
      }

      const token = JWT
        .sign({
          id: user.id,
        }, '87ytfgdcvhou876trtdgfhjk', {
          expiresIn: 3600,
        });
      res.json({
        status: 'ok',
        token
      });
    } catch (e) {
      next(e);
    }
  }
}

export default UsersController;
