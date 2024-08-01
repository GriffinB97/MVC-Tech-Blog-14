const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const homeRoutes = require('./homeRoutes');  // Correct path for home routes

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/', homeRoutes);  // Use homeRoutes for root URL

module.exports = router;
