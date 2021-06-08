import {ADD_NOTE,FETCH_NOTES,REMOVE_NOTE,SHOW_LOADER} from '../types'


const handlers = {
    [SHOW_LOADER]: state => ({...state,loading:true}),
    [ADD_NOTE]:(state, {payload}) =>({...state,
        notes: [...state.notes,payload]}),
    [REMOVE_NOTE]:(state,{payload}) =>({...state, notes:state.notes.filter(note =>note.id !== payload)}),
    [FETCH_NOTES]:(state,{payload}) => ({...state,notes:payload,loading:false}),
    DEFAULT:state => state}

export const firebaseReduser=(state,action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}