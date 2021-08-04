var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var user_controller = require('../controllers/userController');


router.get('/api/users',user_controller.getUsers); //done
router.get('/api/community/:cid/users',user_controller.getUserBycommunityId);
router.get('/api/user/:uid',user_controller.getUserById); //done

router.post('/api/user/create',user_controller.createUser); //done
router.patch('/api/user/:uid/apartment/add',user_controller.addApartmentToUser);//done
router.patch('/api/user/:uid/apartment/remove',user_controller.removeApartmentFromUser);//done


router.put('/api/user/:uid',user_controller.editUser); //not done
router.delete('/api/user/:uid',user_controller.deleteUser); //not done
module.exports = router;