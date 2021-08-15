const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');

const {
    getRequests,
    addRequest,
    updateRequest,
} = require('../controllers/request');

router.route('/getRequests').get(protect, getRequests);

router.route('/postRequest').post(protect, addRequest);

router.route('/updateRequest/:request_id').put(protect, updateRequest);

module.exports = router;
