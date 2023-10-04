class ApiInfoController{
  static apiInfo(req, res, next) {
      try {
        res.send({
          status: 'ok',
        });
      } catch (e) {
        next(e);
      }
    }

}

export default ApiInfoController
