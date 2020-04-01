const { Router } = require('express');

const router = Router();
const User = require('../models/User');

router.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.param.id);
  res.json(user);
});

router.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user.get());
});

router.delete('/users/:id', async (req, res) => {
  const count = await User.destroy({
    where: {
      firstName: 'Jane',
    },
  });
  res.json({ message: `${count} deleted` });
});

router.put('/users/:id', async (req, res) => {
  const user = await User.update(
    { lastName: '123' },
    {
      where: {
        id: req.params.id,
      },
    },
  );
  res.json(user);
});

module.exports = router;
