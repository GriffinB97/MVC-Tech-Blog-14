const router = require('express').Router();
const { Post, User, Comment } = require('../../model');  // Ensure correct path
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  console.log('Root route hit');  // Debugging log
  try {
    const postData = await Post.findAll({
      include: [{ model: User }, { model: Comment }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('home', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
