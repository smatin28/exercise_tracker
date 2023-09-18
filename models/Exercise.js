const mongoose = require('mongoose')


const ExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
    },
    sets: {
        type: Number,
        default: 3,
    },
    reps: {
        type: Number,
        default: 12,
    },
    weight: {
        type: Number,
    },
    type: {
        type: String,
        required: true,
        enum: ['Push', 'Pull', 'Legs']
    }
})

module.exports = mongoose.model('Exercise', ExerciseSchema)