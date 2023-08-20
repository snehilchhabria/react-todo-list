import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("") //newItem is the fixed value and setNewItem is the new value we will keep mpdifying while using
  return (
    <>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={e => setNewItem(e.target.value)}
        type="text" id="item" />
      </div>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="list">
      <li>
        <label>
          <input type="checkbox" />
          Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Item 2
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>
    </>
  )
}