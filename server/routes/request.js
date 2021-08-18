const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');

const {
    getRequests,
    addRequest,
    updateRequest,
} = require('../controllers/request');

router.route('/get-requests').get(protect, getRequests);

router.route('/post-request').post(protect, addRequest);

router.route('/update-request/:request_id').put(protect, updateRequest);

module.exports = router;
