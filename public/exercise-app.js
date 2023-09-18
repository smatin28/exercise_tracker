const pushExercisesDOM = document.querySelector('.push-exercises')
const pullExercisesDOM = document.querySelector('.pull-exercises')
const legExercisesDOM = document.querySelector('.leg-exercises')

const ExercisesDOM = document.querySelector('.exercises-container')
const formDOM = document.querySelector('.exercise-form')
const nameInputDOM = document.querySelector('.name-input')
const setsInputDOM = document.querySelector('.sets-input')
const repsInputDOM = document.querySelector('.reps-input')
const weightInputDOM = document.querySelector('.weight-input')
const typeInputDOM = document.querySelector('.type-input')

const showPushExercises = async () => {
  try {
    const {
      data: { exercises },
    } = await axios.get('/api/v1/exercises/push')
    const allExercises = exercises
      .map((exercise) => {
        const {  _id: exerciseID, name, reps, sets, weight} = exercise
        return `<div class="single-exercise">
<p>${name}: ${weight?weight : "N/A"} lbs</p>
<p>${sets} x ${reps} reps 
<a href="exercise.html?id=${exerciseID}" class="edit">Edit</a>
<button type="button" class="delete" data-id="${exerciseID}">Delete</button></p>`
      })
      .join('')
      pushExercisesDOM.innerHTML = allExercises
  } catch (error) {
    pushExercisesDOM.innerHTML =
      '<p class="empty-list">There was an error, please try later....</p>'
  }
}

const showPullExercises = async () => {
  try {
    const {
      data: { exercises },
    } = await axios.get('/api/v1/exercises/pull')
    const allExercises = exercises
      .map((exercise) => {
        const {  _id: exerciseID, name, reps, sets, weight} = exercise
        return `<div class="single-exercise">
<p>${name}: ${weight?weight : "N/A"} lbs</p>
<p>${sets} x ${reps} reps 
<a href="exercise.html?id=${exerciseID}" class="edit">Edit</a>
<button type="button" class="delete" data-id="${exerciseID}">Delete</button></p>`
      })
      .join('')
      pullExercisesDOM.innerHTML = allExercises
  } catch (error) {
    pullExercisesDOM.innerHTML =
      '<p class="empty-list">There was an error, please try later....</p>'
  }
}

const showLegExercises = async () => {
  try {
    const {
      data: { exercises },
    } = await axios.get('/api/v1/exercises/legs')
    const allExercises = exercises
      .map((exercise) => {
        const {  _id: exerciseID, name, reps, sets, weight} = exercise
        return `<div class="single-exercise">
<p>${name}: ${weight?weight: "N/A"} lbs</p>
<p>${sets} x ${reps} reps 
<a href="exercise.html?id=${exerciseID}" class="edit">Edit</a>
<button type="button" class="delete" data-id="${exerciseID}">Delete</button></p>`
      })
      .join('')
      legExercisesDOM.innerHTML = allExercises
  } catch (error) {
    legExercisesDOM.innerHTML =
      '<p class="empty-list">There was an error, please try later....</p>'
  }
}

showPushExercises();
showPullExercises();
showLegExercises();


// delete push exercise

pushExercisesDOM.addEventListener('click', async (e) => {
    const el = e.target
    if (el.classList.contains('delete')) {
      const id = el.dataset.id
      try {
        console.log(id)
        await axios.delete(`/api/v1/exercises/${id}`)
        showPushExercises();
      } catch (error) {
        console.log(error)
      }
    }
  })

// delete pull exercise

pullExercisesDOM.addEventListener('click', async (e) => {
    const el = e.target
    if (el.classList.contains('delete')) {
      const id = el.dataset.id
      try {
        console.log(id)
        await axios.delete(`/api/v1/exercises/${id}`)
        showPullExercises();
      } catch (error) {
        console.log(error)
      }
    }
  })

// delete leg exercise

legExercisesDOM.addEventListener('click', async (e) => {
    const el = e.target
    if (el.classList.contains('delete')) {
      const id = el.dataset.id
      try {
        console.log(id)
        await axios.delete(`/api/v1/exercises/${id}`)
        showLegExercises();
      } catch (error) {
        console.log(error)
      }
    }
  })

// form

formDOM.addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = nameInputDOM.value
    const sets = setsInputDOM.value
    const reps = repsInputDOM.value
    const weight = weightInputDOM.value
    const type = typeInputDOM.value
    try {
      await axios.post('/api/v1/exercises', { name, sets, reps, weight, type })
      showPushExercises();
      showPullExercises();
      showLegExercises();
    } catch (error) {
        console.log(error)
    }
  })