const { Schema, model, SchemaType } = require('mongoose');
const User = require('./User');

const Thoughts = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now, 
        },
        thoughts: {
            type: String,
            maxLength: 500, 
        },
        reactions: {

        },
        user: {
            type: Schema.Types.ObjectId,
            ref:'User',
        }

    
    },
)

    module.exports = Thoughts;