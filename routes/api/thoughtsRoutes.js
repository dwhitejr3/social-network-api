const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
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
.put(updateThought)
.put(addReaction);


// api/thoughts/:thoughId/:reactionId
router.route('/:thoughtId/:reactionId')

.delete(deleteReaction);
module.exports = router;
