import _ from 'lodash';
import HttpError from "http-errors";

export const validator = (schema, path = 'body') => (req, res, next) => {
  try {
    const { error } = schema.validate(req[path]);
    if (!_.isEmpty(error)) {
      const { details } = error;
      const errors = {};
      console.log(errors)
      details.map(d => {
        _.set(errors, d.path, d.message)
      })
      throw HttpError(422, { errors })
    }
    next();
  } catch (e) {
    next(e);
  }
}
