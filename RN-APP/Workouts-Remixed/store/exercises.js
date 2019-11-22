const initialState = { exercises: [], exercise: []}

const GOT_ALL_EXERCISES = 'GOT_ALL_EXERCISES'

const GOT_ONE_EXERCISE = 'GOT_ONE_EXERCISE'

const ADD_EXERCISE = 'ADD_EXERCISE'

const DELETE_EXERCISE = 'DELETE_EXERCISE' 

//Actions

export const gotAllExercises= exercises =>(
    {type: GOT_ALL_EXERCISES, 
        exercises}
)

export const gotOneExercise = exercise => ({
    type: GOT_ONE_EXERCISE,
    exercise

})

export const addExercise = exercise =>({
    type: ADD_EXERCISE,
    exercise
})

export const deleteExercise = exercise =>({
    type: DELETE_EXERCISE,
    exercise
})

export default exerciseReducer = (state = initialState, action)=>{
    switch(action.type){
        case GOT_ALL_EXERCISES: {
            action.exercises
        }
        case GOT_ONE_EXERCISE: {
            action.exercise
        }
    }
}