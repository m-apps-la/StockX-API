const request = require('supertest'),
  app = 'localhost:8080'


describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app).get('/').expect('Catch All');
  });

  test('It should response the GET method', () => {
    return request(app)
      .post('/postTtsData')
      .send({ 'shoe': 'nike', 'tts_num': 4 })
      .expect(200);
  })
})