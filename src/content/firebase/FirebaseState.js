import React, { useReducer } from 'react'
import axios from 'axios'
import {firebaseReduser} from './firebaseReducer'
import {FirebaseContent} from './firebaseContent'
import { ADD_NOTE, REMOVE_NOTE, SHOW_LOADER,FETCH_NOTES } from '../types'

export const FirebaseState =({children}) =>{
    const initialState ={
        notes:[],
        loading:false
    }
    const [state,dispatch] = useReducer(firebaseReduser,initialState)
    const showLoader = () =>dispatch({type:SHOW_LOADER})
    const fetchNotes = async () =>{
        showLoader()
        const res = await axios.get('https://react-pavel-default-rtdb.firebaseio.com/notes.json')
        const payload = Object.keys(res.data).map(key=>{
            return{
                ...res.data[key],
                id:key
            }
        }
               )
               dispatch({type:FETCH_NOTES,
                payload}) }
    const addNote = async title =>{
        const note ={
            title,date: new Date().toJSON()
        }
         try{
        const res = await axios.post('https://react-pavel-default-rtdb.firebaseio.com/notes.json',note)
        const payload = {
...note,
id:res.data.name
        }
        dispatch({type:ADD_NOTE,
        payload})
    }catch(e){
        throw new Error(e.message)
    }


    }
    const removeNote = async id =>{
        await axios.delete( `https://react-pavel-default-rtdb.firebaseio.com/notes/${id}.json`)
        dispatch({
            type:REMOVE_NOTE,
        payload:id
        })
    }
    return (
        <FirebaseContent.Provider value = {{ showLoader,fetchNotes,addNote,removeNote,loading:state.loading,notes:state.notes }}>
            {children}
        </FirebaseContent.Provider>
    )
}