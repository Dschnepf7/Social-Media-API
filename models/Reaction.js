const {Schema, Types} = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: ObjectId,
        default: new ObjectId
    },
    reactionBody: {
        type: string,
        required: true,
        maxLength: 280
    },
    username: {
        type: string,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
},
{
    toJSON: {
        getters: true,
    },
    id: false,
});

module.exports = reactionSchema;