const router = require('express').Router();
const{
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
    } = require('../../controllers/user-controller');

    router.route('/').get(getUsers).post(createUser);
    router.route('/:id').get(getSingleUser).delete(deleteUser).put(updateUser);

    module.exports = router;