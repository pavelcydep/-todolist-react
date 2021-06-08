import React, {Fragment, useContext,useEffect} from 'react'
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";
import {FirebaseContent} from "../content/firebase/firebaseContent"
import {Loader} from "../components/Loader"
export const Home =() =>{
    const {loading,notes,fetchNotes,removeNote} = useContext(FirebaseContent)
 useEffect(()=>{
     fetchNotes()
 },[])
    return(
        <Fragment>
         <Form/>
         <hr/>
         {loading ? 
         <Loader/>
         :<Notes notes={notes} onRemove = {removeNote}/>
         }
         
        </Fragment>
    )
}