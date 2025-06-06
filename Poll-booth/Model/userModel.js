const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const UserSchema = new Schema({
    user_name: { type: String },
    user_profile: { type: String },
    age: { type: Number },
    gender: { type: String },
    email: { type: String, unique: true },
    phone_number: { type: String, unique: true },
    password: { type: String },
    created_polls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PollCollection' }],
    voted_polls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PollCollection' }],
    liked_polls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PollCollection' }],
    commented_polls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PollCollection' }],
    joined_date: { type: Date, default: Date.now }
});

module.exports = model('UserCollection', UserSchema);
