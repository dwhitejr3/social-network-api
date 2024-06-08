const {Thoughts, User} = require('../models');
const Thought = require('../models/Thoughts');

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
            
            if (!thought) 
                return res.status(404).json({message:'Thought created but no user with that id'})
        } catch(err) {
            console.error(err);
            res.status(500).json(err)
        }
    },

    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: req.body },
                { runValidators: true, new: true },
            )
            if (!thought) {
                return res.status(404).json({ message: 'No user with this id was found' })
            }
            res.json(thought);
        }
        catch (err) {
            res.status(500).json(err)
        }


    },

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete(
                { _id: req.params.thoughtId },
                
            )
            if (!thought) {
                return res.status(404).json({ message: 'No user with this id was found' })
            }
            res.json(thought);
        }
        catch (err) {
            res.status(500).json(err)
        }


    },

    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: {reactions: reactions._id} },
                { new: true }
                
            )
            if (!thought) {
                return res.status(404).json({ message: 'No user with this id was found' })
            }
            res.json(thought);
        }
        catch (err) {
            res.status(500).json(err)
        }


    },

    async addReaction(req, res) {
        
        try {
            const thought = await Thought.findOneAndUpdate(
                {id: req.params.thoughtId},
                { $addToSet: { reactions }},
                { runValidators: true, new: true },
            )
            if (!thought) {
                return res.status(404).json({ message: 'No user with this id was found' })
            }
            res.json(thought);
        }
        catch (err) {
            res.status(500).json(err)
        }
    }


}