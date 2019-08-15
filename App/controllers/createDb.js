module.exports = (req) => {
  const middleware = require('../middleware.js'),
    pool = middleware.connectToDb(),
    queryCreate = {
      name: 'Create Database',
      text: 'CREATE TABLE "public"."tts_table"("id" serial, "shoe" text, "tts_num" int, PRIMARY KEY("id"))'
    },
    queryObj = {
      name: 'Post True to Size',
      text: 'INSERT INTO "tts_table"("shoe", "tts_num") VALUES($1, $2)',
      values: [req.body.shoe, req.body.tts_num]
    };

  pool.query(queryCreate, (err) => {
    if (err) {
      console.log(`Error creating table in database`)
      return;
    };

    pool.query(queryObj, (err) => {
      if (err) {
        console.log(`Error creating entry in new database table`)
        return;
      }
      return;
    });
  });
};
