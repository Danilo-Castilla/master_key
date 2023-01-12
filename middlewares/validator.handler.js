import boom from '@hapi/boom';

function validatorHandler(schema, prop) {
  return (req, res, next) => {
    const data = req[prop];
    const { error } = schema.validate(data, { abortEarly: false });
    console.log("esta es la data =>", data);
    if (error) {
      console.log("un error ha sido generado =>", error );
      next(boom.badRequest(error));
    }
    next();
  }
}

export default validatorHandler