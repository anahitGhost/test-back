import jwt from "jsonwebtoken";
import HttpError from "http-errors";


const EXCLUDE = [
  'POST:/users/login',
  'POST:/users/register',
]


export default function authorization(req, res, next) {
  try {
    if (EXCLUDE.includes(`${req.method}:${req.path}`)) {
      next();
      return;
    }
    const { authorization } = req.headers;

    const { id } = jwt.verify(authorization, '87ytfgdcvhou876trtdgfhjk')
    if (!id) {
      throw HttpError(401)
    }
    next();
  } catch (e) {
    e.status = 401;
    next(e);
  }
}
