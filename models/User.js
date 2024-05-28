const { Schema, SchemaType } = require('mongoose');
const Thoughts = require('./Thoughts');
const Friends = require('./Friends');


const userSchema = new Schema(
    {
        first: String,
        last: String,
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts',
            }
        ],
        friends: [Friends]
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false,
    }

);




module.exports = userSchema;