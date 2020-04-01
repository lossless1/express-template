const { Router } = require('express');

const router = Router();

router.get('/home', (req, res) => {
  res.send('index home');
});

router.get('/', (req, res) => {
  res.send('index');
});

router.post('/', () => {});

module.exports = router;
