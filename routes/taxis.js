var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.post('/', function (req, res, next) {
  const { lat, lon, count } = req.body;

  axios.get(`https://qa-interview-test.splytech.dev/api/drivers?latitude=${lat}&longitude=${lon}&count=${count}`)
    .then(response => {
      console.log('response',response.data);
      res.status(200).send(response.data);
    })
    .catch()
});

router.get('/get', function ({lat, lon, count}, res, next) {
  axios.get('https://qa-interview-test.splytech.dev/api/drivers?latitude=2.9947739&longitude=101.6681359&count=5')
    .then(response => {
      console.log('response',response.data);
      res.status(200).send(response.data);
    })
    .catch()
});

// router.post('/', function ({lat, lon, count}, res, next) {
//   axios.get(`https://qa-interview-test.splytech.dev/api/drivers?latitude=${lat}&longitude=${lon}&count=${count}`)
//     .then(response => {
//       console.log('response',response.data);
//       res.status(200).send(response.data);
//     })
//     .catch()
// });

module.exports = router;
