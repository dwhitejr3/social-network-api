const { Schema, model } = require('mongoose');
const Thoughts = require('./Thoughts');


const userSchema = new Schema(
    {

        userName: {
            type: String,
            required: true,
            unique: true
        },

        email: {
            type: String,
            required: true,
            unique: true

        },

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

const User = model('user', userSchema)



module.exports = User;