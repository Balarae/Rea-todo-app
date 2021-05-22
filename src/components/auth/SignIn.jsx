import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {Typography, TextField, Button} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles'

import {signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router'

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

const Signin = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const [creds, setCreds] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e)=>{
        e.preventDefault()

        dispatch(signIn(creds))
        setCreds({
            email: "",
            password: ""
        })
    }

    // if the auth._id exists redirect to home page
    if(auth._id) return <Redirect to="/" />

    return ( 
        <>
          <form  noValidate autoComplete="off" className={classes.formStyles} onSubmit={handleSubmit} >
               <Typography variant="h5" >signIn: </Typography>
               <TextField 
                    id="enter-email"
                    label="enterEmail"
                    variant="outlined"
                    fullWidth
                    className={classes.spacing}
                    value={creds.email}
                    onChange = {(e)=> setCreds({...creds, email: e.target.value})}
                />
                <TextField 
                    id="enter-password"
                    label="enterPassword"
                    type="password"
                    variant="outlined"
                    fullWidth
                     className={classes.spacing}
                     value={creds.password}
                    onChange = {(e)=> setCreds({...creds, password: e.target.value})}
                />
                <Button
                    variant="contained"
                    color="primary"
                     className={classes.spacing}
                     type="submit"
                >
                    SignIn
                </Button>
          </form>
        </>
     );
}
 
export default Signin;
