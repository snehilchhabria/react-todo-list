import { useState } from "react"

export function NewTodoForm({onSubmission}) {
    
    const [newItem, setNewItem] = useState("") //newItem is the fixed value and setNewItem is the new value we will keep mpdifying while using

    function handleSubmit(e) {
        e.preventDefault()
        
        if(newItem === "") return
        onSubmission(newItem) //prop usage
        setNewItem("")
      }
   
    return (
        <form onSubmit ={handleSubmit}className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={e => setNewItem(e.target.value)}
        type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
    )
}