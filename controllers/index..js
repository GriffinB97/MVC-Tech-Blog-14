const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./api/homeRoutes');  // Updated path

router.use('/api', apiRoutes);
router.use('/', homeRoutes);  // Use homeRoutes for root URL

module.exports = router;
