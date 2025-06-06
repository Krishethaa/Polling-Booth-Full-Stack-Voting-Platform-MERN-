const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const PollSchema = new Schema({
    date: { type: Date, default: Date.now },
    poll_id: { type: String, required: true, unique: true },
    question: { type: String, required: true },
    options: [{
        option: { type: String, required: true },
        count: { type: Number, default: 0 },
        voters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserCollection' }]
    }],
    isActive: { type: Boolean, default: true },
    status: { type: String, enum: ['open', 'closed'], default: 'open' },
    title: { type: String },
    desc: { type: String },
    expirationTime: { type: Date },

    category: {
    type: String,
    enum: ['Technology', 'Songs', 'Health', 'Education', 'Sports', 'Politics', 'Current', 'Entertainment', 'Others'],
    default:"Others",
    required: true
    },
    
    winner: { type: String },
    likers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserCollection' }],
    voters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserCollection' }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'UserCollection', required: true },
    total_votes: { type: Number, default: 0 },
    total_likes: { type: Number, default: 0 },
    comments: [{
        _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'UserCollection' },
        userName: { type: String, default: 'Anonymous' },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
}]

});

module.exports = model('PollCollection', PollSchema);
