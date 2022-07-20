const express = require('express');
const senatorController = require('../controllers/senator.controller');

const router = express.Router();
router.route('/senators')
    .get(senatorController.getAllSenators);
router.route('/senators/:senatorId')
    .get(senatorController.getOneSenator)
    .delete(senatorController.deleteOneSenator);

module.exports = router;