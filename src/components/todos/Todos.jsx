import React, { useState } from 'react'
import AddTodo from './AddTodo'
import ListTodos from './ListTodos'
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Todos = () => {
    // This is what they call raising the state, got it from the childComponent of AddTodo
     const [todo, setTodo] = useState({name: "", isComplete: false})

     const auth = useSelector(state => state.auth)
     console.log(auth)
     if(!auth._id) return <Redirect to="/signin" />
    return (
        <div>
            
            <AddTodo todo={todo} setTodo={setTodo} />
            <ListTodos setTodo={setTodo} />
        </div>
    )
}

export default Todos
