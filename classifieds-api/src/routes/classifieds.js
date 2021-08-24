var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var classifieds_controller = require('../controllers/classifiedsController');

router.get('/api/classifieds/health-status',classifieds_controller.gethealthStatus);

router.post('/api/classifieds/create',classifieds_controller.createClassfied);

router.get('/api/classifieds/:cid',classifieds_controller.getclassifiedById);

router.post('/api/classifieds',classifieds_controller.getclassifieds);
router.delete('/api/classifieds/:cid',classifieds_controller.deleteclassfied);
router.put('/api/classifieds/:cid',classifieds_controller.editclassfied);

router.post('/api/classifieds/:cid',classifieds_controller.addComment);
router.delete('/api/classifieds/:cid/comment/:commentid',classifieds_controller.deleteComment);
router.put('/api/classifieds/:cid/comment/:commentid',classifieds_controller.editComment);



module.exports = router;