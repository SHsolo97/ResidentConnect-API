var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var contactinfo_controller = require('../controllers/contactinfoController');



router.get('/api/community/:id/contacts',contactinfo_controller.getContactsbyCommunityId);
router.post('/api/community/:id/contact/create',contactinfo_controller.createContact);
router.put('/api/community/:id/contact/:cid',contactinfo_controller.editContact);
router.delete('/api/community/:id/contact/:cid',contactinfo_controller.deleteContact);
module.exports = router;