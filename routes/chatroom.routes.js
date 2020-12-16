const { Router } = require('express');
const config = require('config');
const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: `Server on ${config.get('port')}`,
  });
});

module.exports = router;
