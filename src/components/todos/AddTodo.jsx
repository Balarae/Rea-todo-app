import React  from 'react'
import {useDispatch} from "react-redux"

import {TextField, Button} from '@material-ui/core'
import {Send} from '@material-ui/icons'
import {makeStyles} from '@material-ui/core/styles'

import {addTodo, updateTodo} from '../../store/actions/todoActions'

const useStyles = makeStyles({
    formStyle:{
        margin: "0px auto",
        padding: "30px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px #000000",
        display: "flex",
        justifyContent: "space-between"
    },
    submitButton:{
        marginLeft: "20px"
    }
})

const AddTodo = ({todo, setTodo}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
   

    const handleSubmit =(e)=>{
        e.preventDefault()
        //check if we're Updating or creating a new todo
        
        if (todo._id) {
            //  recall updatedTodo and id from our updateTodo action creator
            // we do this coz mongoDB has a version prop, so to prevent an error throwback we created the id and updatedTodo
            const id = todo._id
            const updatedTodo = {
                name: todo.name,
                isComplete: todo.isComplete,
                date: todo.date,
                author: todo.author,
                uid: todo.uid
            }

            dispatch(updateTodo(updatedTodo, id))
        }else{
            // console.log(todo)
            // Creating a new todo
            const newTodo = {
                ...todo,
                date: new Date()
            }
            dispatch(addTodo(newTodo))
        }
        

        setTodo({
            name: "",
            isComplete: false
        })
    }
    return (
        <div>
            <form noValidate autoComplete="off" className={classes.formStyle} onSubmit={handleSubmit} >
                <TextField 
                    id="enter Todo"
                    label="enterToDo"
                    variant="outlined"
                    autoFocus
                    fullWidth
                    value ={todo.name}
                    onChange ={(e)=> setTodo({...todo, name: e.target.value})}
                 />
                <Button color="primary" variant="contained" type="submit" className={classes.submitButton} >
                    <Send />
                </Button>
            </form>
        </div>
    )
}

export default AddTodo
