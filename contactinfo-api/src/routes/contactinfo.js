var express = require('express');
const { check } = require('express-validator');

var router = express.Router();
var contactinfo_controller = require('../controllers/contactinfoController');


router.get('/api/contacts/health-status',contactinfo_controller.gethealthStatus);

router.post('/api/contacts',contactinfo_controller.getContactsbyCommunityId);
router.post('/api/contacts/create',contactinfo_controller.createContact);
router.put('/api/contacts/:cid',contactinfo_controller.editContact);
router.delete('/api/contacts/:cid',contactinfo_controller.deleteContact);
module.exports = router;