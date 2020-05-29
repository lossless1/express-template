const { Router } = require('express');
const { Post, User, Comment } = require('../models');

const router = Router();

router.get('/users', async (req, res) => {
  const users = await User.findAll({ include: [Post, Comment] });
  res.json(users);
});

router.get('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

router.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user.get());
});

router.delete('/users/:id', async (req, res) => {
  const count = await User.destroy({
    where: {
      id: req.params.id,
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
