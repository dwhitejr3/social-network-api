const {Thoughts, User} = require('../models');

module.exports = {

    // get all thoughts
    async getThoughts(req,res) {
        try {
            const thoughts = await Thoughts.find();
            res.json(thoughts);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    async getSingleThought(req,res) {
        try {
            const thought = await Thoughts.findOne({_id: req.params.thoughtId});
            if(!thought) {
                return res.status(404).json({ message: 'No thought with this ID was found'})
            } 
        } catch(err) {
            res.status(500).json(err); 
        }
    },

    async createThought(req,res) {
        try {
            const thought = await Thoughts.create(req.body);
            const user = await User.findOneAndUpdate(
                {_id: req.body.userId},
                {$addToSet: {thoughts: thought._id }},
                { new: true }
            )
            if (!user) 
                return res.status(404).json({message:'Thought created but no user with that id'})
        } catch(err) {
            res.status(500).json(err)
        }
    }
}