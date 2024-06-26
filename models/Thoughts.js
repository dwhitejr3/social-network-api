const { Schema, model, SchemaType } = require('mongoose');
const User = require('./User');

const thoughtSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now, 
        },
        thoughtText: {
            type: String,
            maxLength: 500, 
            required: true
        },
        reactions: [
            {
            reactionId:{
                type: Schema.Types.ObjectId,
                default: () => new Types.ObjectId()
            },
            reactionBody: {
                type: String,
                required: true,
                maxlength: 280,
            }
        }

        ],
        user: {
            type: String,
            ref:'User',
        },
       

    
    },
    {
    toJSON: {
        virtuals: true,
      },
      id: false,
    },

);

thoughtSchema
.virtual('reactionCount')
.get(function () {
    return `${this.length}`;
})

const Thought = model('thought', thoughtSchema);

    module.exports = Thought;