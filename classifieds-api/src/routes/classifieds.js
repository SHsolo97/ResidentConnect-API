var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var classifieds_controller = require('../controllers/classifiedsController');

router.post('/api/community/:id/classified/create',classifieds_controller.createClassfied);

router.get('/api/community/:id/classifieds',classifieds_controller.getclassifiedsByCommunityId);
router.post('/api/community/:id/classifieds',classifieds_controller.getclassifiedsByTags);
router.delete('/api/community/:id/classified/:cid',classifieds_controller.deleteclassfieds);
router.put('/api/community/:id/classified/:cid',classifieds_controller.editclassfieds);

router.post('/api/community/:id/classified/:cid',classifieds_controller.addComment);
router.delete('/api/community/:id/classified/:cid/comment/:commentid',classifieds_controller.deleteComment);
router.put('/api/community/:id/classified/:cid/comment/:commentid',classifieds_controller.editComment);



module.exports = router;