import { useState } from "react";
export function NewToDoForm(props){
    const [newItem, setNewItem] = useState("");


    function handleSubmit(e){
        e.preventDefault();
        props.onSubmit(newItem)
        setNewItem('')
      
      }
    return (
        <form onSubmit = {handleSubmit} className='new-item-form'>
          <div className='form-row'>
          <label htmlFor='item'>New item</label>
          <input type='text' id='item' value={newItem} onChange={e => setNewItem(e.target.value)}></input>
          <button className='btn'>Add</button>
        </div>
    </form>
    )
}