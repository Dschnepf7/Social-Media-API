const {Schema, model} = require('mongoose');

const thoughtSchema = new Schema(
    {
    thoughtText: {
          type: String,
          required: true,
          max_length: 280

    },
    createdAt: {
        type: Date,
        default: Date.now,
        toJSON: {
            getters: true,
    },
    username: {
        type: String,
        required: true
    },
    reaction: [
        reactionSchema

    ],
    createdAt: {
        type: Date,
        default: Date.now,
        get:timestamp=>datFormat(timestamp)
    },

    reactionCount: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction'
        }
    ],
    }}
)
    thoughtSchema.virtual('reactionCount').get(function() {
        return this.reactions.length;
    });

    const Thought = model('thought', thoughtSchema);

    module.exports = Thought;
    