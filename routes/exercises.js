const express = require('express')
const router = express.Router()

const {
    getAllExercises,
    getPullExercises,
    getPushExercises,
    getLegsExercises,
    createExercise,
    getExercise,
    updateExercise,
    deleteExercise,
} = require('../controllers/exercises')

router.route('/').get(getAllExercises).post(createExercise)
router.route('/pull').get(getPullExercises)
router.route('/push').get(getPushExercises)
router.route('/legs').get(getLegsExercises)
router.route('/:id').get(getExercise).patch(updateExercise).delete(deleteExercise)

module.exports = router
