const router = require('express').Router();

const{
    getUsers,
    getSingleUser,
    createUser,
    addFriend,
    deleteUser


} = require('../../controllers/userController');

//   /api/users
router.route('/').get(getUsers).post(createUser);

//    /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);


//   /api/users/:userId/:friendId

router.route(':/userId/:friendId').post(addFriend);

module.exports = router;
