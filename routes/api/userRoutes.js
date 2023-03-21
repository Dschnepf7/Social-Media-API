const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUser).post(createUser);

// /api/user/:userId
router.route('/:userId').get(getSingleStudent).delete(deleteStudent);

// /api/user/:userId/thought
router.route('/:userId/thought').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/thought/:thoughtId').delete(removeAssignment);

module.exports = router;
