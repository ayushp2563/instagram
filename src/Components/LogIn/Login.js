import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, TextField, Typography, Button, Hidden, Divider } from '@mui/material'
import igicon from '../images/Instagram_logo.png'
import { useState } from "react"
import mainscreen1 from "../images/mainscreen1.png"


function Login() {

  const [username, setUsername] = useState('')

  const [password, setpassword] = useState('')


  const handleUsername = () => {

  }

  const handlePassword = () => {

  }

  let myurl = "/splashscreen";
  window.onload = function () {
    window.location.replace(myurl);
  }

  let navigate = useNavigate();

  function handleLogin() {
    navigate('/login')
  }
  function handleSignup() {
    navigate('/signup')
  }

  const paperStyle = {
    padding: "25px 20px ",
    width: 400,
    margin: "25px auto",

  }
  return (


    <Grid container spacing={2} sx={{ margin: 0 }} xs={12}>
      <Grid item xs={6} sx={{ alignItems: "center", display: "flex", justifyContent: "flex-end" }} >
        <Hidden mdDown>
          <img style={{

            position: 'relative',
            // top: '10',
            width: '250px'
          }} src={mainscreen1} alt='#' />

        </Hidden>

      </Grid>
      {/* <Grid item xs={3}  > */}
      <Grid item xs={12} md={6} sx={{
        display: "flex",
        justifyContent: 'flex-start',
      }}>
        <div style={{display:"flex", flexDirection:"column"}}>
          <Paper elevation={20} style={paperStyle} >
            <img style={{ position: 'relative', height: '75px', width: '150px', justifyContent: "center" }} src={igicon} alt='#' />
            <br />
            <br />
            <form>
              <TextField sx={{ mt: 2, mb: 2 }} fullWidth label='Username' value={username} onChange={handleUsername} />
              <TextField sx={{ mb: 2 }} fullWidth label='Password' value={password} onChange={handlePassword} />
            </form>

            <Button sx={{ mt: 2, mx: 'auto', width: 350 }} type='submit' variant='contained' color='primary' href='/NavBar'> Log In</Button>

            <Typography varient='caption' align='center' marginTop="10px">
              Forgot Password?
            </Typography>
          <Divider />
            <Typography varient='caption' align='center'> Don't have an account? <Button variant='text' href='/signup'>Sign up</Button> </Typography>
          </Paper>
 

        </div>
      </Grid>
    </Grid>


  )
}

export default Login