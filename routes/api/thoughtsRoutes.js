const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    createThought,
    updateThought,
    deleteThought,
    deleteReaction,
    addReaction


} = require('../../controllers/thoughtsController');
//    api/thoughts
router.route('/')
.get(getThoughts)
.post(createThought);

//      api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getSingleThought)
.delete(deleteThought)
.put(updateThought);


// api/thoughts/:thoughId/:reactionId
router.route('/:thoughtId/:reactionId')
.put(addReaction)
.delete(deleteReaction);
module.exports = router;
