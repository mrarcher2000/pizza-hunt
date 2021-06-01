const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controllers');

// post comments to /api/comments/:pizzaId
router
    .route('/:pizzaId')
    .post(addComment);


// delete comments at /api/comments/:pizzaId/:commentId
router
    .route('/:pizzaId/:commentId')
    .delete(removeComment);

module.exports = router;