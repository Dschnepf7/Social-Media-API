const {Schema, model} = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtsText: {
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
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction'
        }

    ],

    reactionCount: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction'
        }
    ]
    }}
)
    thoughtsSchema.virtual('reactionCount').get(function() {
        return this.reactions.length;
    });

    const Thought = model('Thought', thoughtSchema);

    module.exports = Thought;
    