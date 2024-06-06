const { Schema, SchemaType } = require('mongoose');
const Thoughts = require('./Thoughts');


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
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User', 
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false,
    }

);




module.exports = User;