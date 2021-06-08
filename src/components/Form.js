import React, {useState,useContext} from 'react';
import { AlertContext } from '../content/alertContext';
import { FirebaseContent } from '../content/firebase/firebaseContent';



export const Form =() =>{
    const [value,setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContent)
    const submitHandler = event =>{
        event.preventDefault()
        if (value.trim()){
firebase.addNote(value.trim()).then(()=>{
    alert.show( 'Заметка была создана','success') 
}).catch(()=>{ 
    alert.show( 'Что-то пошло не так','danger')})
 
    setValue('')
    } 
        else{
            alert.show('Введите текст')
        }
    }
    return(
        <form onSubmit ={submitHandler}>
<div className ="form-group">
    <input type ="text"
    placeholder="введите название"
    className ="form-control"
    value ={value}
    onChange ={e =>setValue(e.target.value)}
    />
</div>
</form>
    );}