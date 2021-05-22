import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {Typography, TextField, Button} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles'


import {signUp} from '../../store/actions/authActions'

const useStyles = makeStyles({
    formStyles:{
        margin: "0px auto",
        padding: "30px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px  #000000 "
    },
    spacing:{
        marginTop: "20px"
    }
})

const SignUp = () => {
    const classes = useStyles()

    const dispatch = useDispatch()
    //we use the auth to atain the auth._id that we use when if we're redirecting the user incase it exists
    const auth = useSelector(state => state.auth)
    // console.log(state)
    const[user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(signUp(user))

        setUser({
        name: "",
        email: "",
        password: "",
        })

    }
    // if the auth._id exists redirect to home page
    if(auth._id) return <Redirect to="/" />

    return ( 
      <>
          <form  noValidate autoComplete="off" className={classes.formStyles} onSubmit={handleSubmit}>
               <Typography variant="h5" >signUp: </Typography>
               <TextField 
                    id="enter-name"
                    label="enterName"
                    variant="outlined"
                    fullWidth
                    className={classes.spacing}
                    value={user.name}
                    onChange = {(e)=> setUser({...user, name: e.target.value})}
                />
               <TextField 
                    id="enter-email"
                    label="enterEmail"
                    variant="outlined"
                    fullWidth
                    className={classes.spacing}
                    value={user.email}
                    onChange = {(e)=> setUser({...user, email: e.target.value})}
                />
                <TextField 
                    id="enter-password"
                    label="enterPassword"
                    type="password"
                    variant="outlined"
                    fullWidth
                     className={classes.spacing}
                    value={user.password}
                    onChange = {(e)=> setUser({...user,password: e.target.value})}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.spacing}
                    type="submit"
                >
                    SignUp
                </Button>
          </form>
        </>
     );
}
 
export default SignUp;
