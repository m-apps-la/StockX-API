module.exports = (req, res, next) => {
  const middleware = require('../middleware.js'),
    pool = middleware.connectToDb(),
    queryObj = {
      name: 'Get True to Size',
      text: 'SELECT AVG(TTS_NUM) FROM "tts_table" WHERE "shoe" = ($1)',
      values: [req.params.shoe]
    };

  pool.query(queryObj, (err, results) => {
    if (err) {
      console.log(err);
      res.locals.err = err;
      return next();
    }
    res.locals.data = results.rows[0];
    return next();
  });
};
