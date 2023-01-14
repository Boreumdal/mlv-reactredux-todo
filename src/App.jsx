import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTask, deleteTask, editTask, editWholeTask } from './features/todo'

const App = () => {
  const todo = useSelector(state => state)
  const dispatch = useDispatch()
  const [item, setItem] = useState('')
  const [tempEdit, setTempEdit] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addTask({ name: item, id: Date.now(), editing: false }))
    setItem('')
  }

  const handleDelete = id => {
    dispatch(deleteTask({ id }))
  }

  const handleEdit = id => {
    dispatch(editTask({ id }))
  }

  const handleSaveEdit = id => {
    dispatch(editWholeTask({ name: tempEdit, editing: false, id }))
  }

  return (
    <div>
      <h1>Todo app</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={e => setItem(e.target.value)} placeholder='Enter todo...' />
        <button type="submit">Add</button>
      </form>
      <div>
        {
          todo.todo.length !== 0 && todo.todo.map(data => (
            <div key={data.id}>
              <span>{ data.name }</span>
              <button onClick={() => handleDelete(data.id)}>Delete</button>
              <button onClick={() => handleEdit(data.id)}>Edit</button>
              {
                data.editing && (
                  <div>
                    <input type="text" onChange={e => setTempEdit(e.target.value)} />
                    <button onClick={() => handleSaveEdit(data.id)}>Save edit</button>
                  </div>
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App