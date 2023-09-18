const exerciseNameDOM = document.querySelector('.exercise-edit-name')
const exerciseSetsDOM = document.querySelector('.exercise-edit-sets')
const exerciseRepsDOM = document.querySelector('.exercise-edit-reps')
const exerciseWeightDOM = document.querySelector('.exercise-edit-weight')
const exerciseTypeDOM = document.querySelector('.exercise-edit-type')
const editFormDOM = document.querySelector('.edit-exercise-form')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
let tempName, tempSets, tempReps, tempWeight, tempType

const showExercise = async () => {
  try {
    const {
      data: { exercise },
    } = await axios.get(`/api/v1/exercises/${id}`)
    const { name, sets, reps, weight } = exercise

    exerciseNameDOM.value = name
    tempName = name
    exerciseSetsDOM.value = sets
    tempSets = sets
    exerciseRepsDOM.value = reps
    tempReps = reps
    exerciseWeightDOM.value = weight
    tempWeight = weight
    exerciseTypeDOM.value = type
    tempType = type
  } catch (error) {
    console.log(error)
  }
}

showExercise()

editFormDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  try {
    const exerciseName = exerciseNameDOM.value
    const exerciseSets = exerciseSetsDOM.value
    const exerciseReps = exerciseRepsDOM.value
    const exerciseWeight = exerciseWeightDOM.value
    const exerciseType = exerciseTypeDOM.value
    const {
      data: { exercise },
    } = await axios.patch(`/api/v1/exercises/${id}`, {
      name: exerciseName,
      sets: exerciseSets,
      reps: exerciseReps,
      weight: exerciseWeight,
      type: exerciseType
    })

    const { name, reps, sets, weight, type } = exercise

    exerciseNameDOM.value = name
    tempName = name
    exerciseSetsDOM.value = sets
    tempSets = sets
    exerciseRepsDOM.value = reps
    tempReps = reps
    exerciseWeightDOM.value = weight
    tempWeight = weight
    exerciseTypeDOM.value = type
    tempType = type
    window.location.href = "/";
  } catch (error) {
    console.error(error)
    exerciseNameDOM.value = tempName
    exerciseSetsDOM.value = tempSets
    exerciseRepsDOM.value = tempReps
    exerciseWeightDOM.value = tempWeight
    exerciseTypeDOM.value = tempType
    alert(`error, please try again`)
  }
})
