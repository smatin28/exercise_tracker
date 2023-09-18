const Exercise = require('../models/Exercise')

const getAllExercises = async (req, res) => {
    const exercises = await Exercise.find({})
    res.status(200).json({ exercises })
}

const getPullExercises = async (req, res) => {
    const exercises = await Exercise.find({ type: "Pull" })
    res.status(200).json({ exercises })
}

const getPushExercises = async (req, res) => {
    const exercises = await Exercise.find({ type: "Push" })
    res.status(200).json({ exercises })
}

const getLegsExercises = async (req, res) => {
    const exercises = await Exercise.find({ type: "Legs" })
    res.status(200).json({ exercises })
}

const createExercise = async (req, res) => {
    const exercise = await Exercise.create(req.body)
    res.status(201).json({ exercise })
}

const getExercise = async (req, res, next) => {
    const { id: exerciseID } = req.params
    const exercise = await Exercise.findOne({ _id: exerciseID })
    if (!exercise) {
        return next(createCustomError(`No exercise with id : ${exerciseID}`, 404))
    }

res.status(200).json({ exercise })
}

const deleteExercise = async (req, res, next) => {
    const { id: exerciseID } = req.params
    const exercise = await Exercise.findOneAndDelete({ _id: exerciseID })
    if (!exercise) {
        return next(createCustomError(`No exercise with id : ${exerciseID}`, 404))
    }
    res.status(200).json({ exercise })
}

const updateExercise = async (req, res, next) => {
    const { id: exerciseID } = req.params

    const exercise = await Exercise.findOneAndUpdate({ _id: exerciseID }, req.body, {
        new: true,
        runValidators: true,
    })

    if (!exercise) {
        return next(createCustomError(`No exercise with id : ${exerciseID}`, 404))
    }

res.status(200).json({ exercise })
}

module.exports = {
    getAllExercises,
    getPullExercises,
    getPushExercises,
    getLegsExercises,
    createExercise,
    getExercise,
    updateExercise,
    deleteExercise,
}
