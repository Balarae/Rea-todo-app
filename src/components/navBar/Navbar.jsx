import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {Link, useHistory} from 'react-router-dom'
import {signOut} from '../../store/actions/authActions'

import {AppBar, Typography, Toolbar, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
        linkStyle: {
            color: '#fafafa',
            textDecoration: 'none'
        },
        root:{
            flexGrow: 1
        }
        
    })

const Navbar = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    // use it to access the auth.name
    const auth = useSelector(state => state.auth)

    console.log(auth)
    console.log(state)

const handleSignOut =()=>{
    //SignOut the User
    dispatch(signOut())
    history.push('/signin')
}
    return (
        <div>
            <AppBar position="static" color="primary" >
                <Toolbar>
                     <Typography variant="h4" className={classes.root} >
                    <Link to="/" className={classes.linkStyle} >
                        todoApp
                    </Link>
                    </Typography>
                    {auth._id? (
                        <>
                            <Typography variant="subtitle2" className={classes.root} >
                                Logged in as {auth.name}
                            </Typography>
                            <Button onClick={()=> handleSignOut()}  color="inherit">
                                SignOut
                            </Button>
                        </>
                    ):(
                        <>
                            <Button  color="inherit">
                                <Link className={classes.linkStyle} to="/signin" >
                                    SignIn
                                </Link>
                            </Button>
                            <Button  color="inherit">
                                <Link className={classes.linkStyle} to="/signup" >
                                    SignUp
                                </Link>
                            </Button>
                        </>

                    )
                    }
                   
                    
                    
                </Toolbar>
               
            </AppBar>
        </div>
    )
}

export default Navbar
