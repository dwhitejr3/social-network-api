const router = require('express').Router();

const{
    getUsers,
    getSingleUser,
    createUser,
    addFriend,
    deleteUser


} = require('../../controllers/userController');

//   /api/user
router.route('/').get(getUsers).post(createUser);

//    /api/user/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);


//   /api/user/:userId/:friendId

router.route(':/userId/:friendId').post(addFriend);

module.exports = router;
