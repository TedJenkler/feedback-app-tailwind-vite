const express = require('express');
const router = express.Router();
const replyController = require('../controllers/replyController');

router.get('/', replyController.getAllReplies);
router.get('/:id', replyController.getReplyById);
router.post('/add/:id', replyController.addReply);
router.put('/update/:id', replyController.updateReplyByID);
router.delete('/delete/:id', replyController.deleteReplyById);

module.exports = router;