const initialState = { programs: [], program: []}

const GET_ALL_PROGRAMS = 'GET_ALL_PROGRAMS'
 
const GET_ONE_PROGRAM = 'GET_ONE_PROGRAM'

export const getAllPrograms = programs =>({
    type: GET_ALL_PROGRAMS,
    programs
})

export const getOneProgram = program =({
    type: GET_ONE_PROGRAM,
    program
})

export default programsReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_PROGRAMS: {
            action.programs
        }
        case GET_ONE_PROGRAM: {
            action.program
        }
    }
}