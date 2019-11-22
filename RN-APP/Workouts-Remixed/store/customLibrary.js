const initialState = { libraries: [], library: []}

const GOT_ALL_LIBRARIES = 'GOT_ALL_LIBRARIES'

const GOT_ONE_LIBRARY = 'GOT_ONE_LIBRARY'

const CREATE_NEW_LIBRARY = 'CREATE_NEW_LIBRARY'

const DELETE_LIBRARY = 'DELETE_LIBRARY' 

//Actions

export const gotAllLibraries = libraries =>(
    {type: GOT_ALL_LIBRARIES, 
        libraries}
)

export const gotOneLibrary = library =>({
    type: GOT_ONE_LIBRARY,
    library
})

export const createNewLibrary = newLibrary =>({
    type: CREATE_NEW_LIBRARY,
    newLibrary
})

export const deleteLibrary = id =>({
    type: DELETE_LIBRARY,
    id
})

export default libraryReducer = (state = initialState, action)=>{
    switch(action.type){
        case GOT_ALL_LIBRARIES: {
            action.libraries
        }
        case GOT_ONE_LIBRARY: {
            action.library
        }
        case CREATE_NEW_LIBRARY: {
            return {...state, libraries: [....state.libraries, action.library]}
        }
        case DELETE_LIBRARY: {
            const currentLibrary = [...state.libraries];
            const newLibrary = currentLibrary.filter(library=> library.id !== action.library.id)
        }
    }
}