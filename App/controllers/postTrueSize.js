module.exports = (req, res, next) => {
  const middleware = require('../middleware.js'),
    pool = middleware.connectToDb(),
    queryObj = {
      name: 'Post True to Size',
      text: 'INSERT INTO "tts_table"("shoe", "tts_num") VALUES($1, $2)',
      values: [req.body.shoe, req.body.tts_num]
    };

  pool.query(queryObj, (err) => {
    if (err) {
      err.code === '42P01' ? middleware.createDb(req) : res.locals.err = err;
      return next();
    }
    return next();
  });
};