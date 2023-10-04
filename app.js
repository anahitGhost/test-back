import express from "express";
import indexRouter from './routes'
import HttpError from "http-errors";
import authorization from "./middlewares/authorization.js";
const app = express();



app.use(express.json());
app.use(express.urlencoded());
app.use(authorization)


app.use('/', indexRouter)


app.use((req, res, next) => {
  next(HttpError(404))
})

app.use((err, req, res, next) => {
  res.status(err.code || 500);
  res.json({
    status: 'error',
    message: err.message,
    errors: err.errors,
    stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined
  });
})


app.listen(4000, () => {
  console.log('Server ready')
})


export default app;
