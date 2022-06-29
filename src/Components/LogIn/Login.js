import React, { useEffect } from "react";
import { Grid, Paper, TextField, Typography, Button, Hidden, Divider } from '@mui/material'
import igicon from '../images/Instagram_logo.png'
import { useState } from "react"
import mainscreen1 from "../images/mainscreen1.png"
import mainscreen2 from "../images/mainscreen2.png"
import mainscreen3 from "../images/mainscreen3.png"
import mainscreen4 from "../images/mainscreen4.png"
import "../LogIn/Login.css"
// import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate } from "react-router-dom"


function Login() {

  let myurl = "/splashscreen";
  window.onload = function () {
    window.location.replace(myurl);
  }

  let slide_content = document.querySelector("#slide-content")

  let slide_index = 0

  const slide = () => {
    let slide_items = slide_content.querySelectorAll('img')
    slide_items.forEach(e => e.classList.remove('active'))
    slide_index = slide_index + 1 === slide_items.length ? 0 : slide_index + 1
    slide_items[slide_index].classList.add('active')
  }
  useEffect(() => {
    setInterval(() => {
      slide()
    }, 1000);
  }, [])
  // setInterval(slide,2000)

  const paperStyle = {
    padding: "25px 20px ",
    width: 400,
    margin: "25px auto",
  }


  const [username, setUsername] = useState('')

  const [password, setpassword] = useState('')

  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate("/InstagramPost")
    }
  }, [])
  
  async function login() {
    console.warn("data", username, password)
    let item = { username, password }
    let result = await fetch("",
      {
        method: 'POST',
        headers: {
          "Content-Type": "",
          "Accept": "",
        },
        body: JSON.stringify(item)
      });
    result = await result.json();
    localStorage.setItem('user-info', JSON.stringify(result));
    navigate("/InstagramPost")
  }

  return (


    <Grid container spacing={2} sx={{ margin: 0 }} xs={12}>
      <Grid item xs={6} sx={{ alignItems: "center", display: "flex", justifyContent: "flex-end", mt: 5 }} >
        <Hidden mdDown>
          <div className="slide-container">
            <div className="slide-content" id="slide-content">
              <img src={mainscreen1} alt="slide" className="active" />
              <img src={mainscreen2} alt="slide" />
              <img src={mainscreen3} alt="slide" />
              <img src={mainscreen4} alt="slide" />
              {/* <SimpleImageSlider
                height="538px"
                images={images}
                showBullets={true}
                showNavs={true}
              /> */}
            </div>
          </div>
        </Hidden>
      </Grid>
      {/* <Grid item xs={3}  > */}
      <Grid item xs={12} md={6} sx={{
        display: "flex",
        justifyContent: 'flex-start',
      }}>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "70px" }}>
          <Paper elevation={20} style={paperStyle} >
            <img style={{ position: 'relative', height: '75px', width: '150px', justifyContent: "center", marginLeft: "90px" }} src={igicon} alt='#' />
            <br />
            <br />
            <form>
              <TextField onChange={(e) => setUsername(e.target.value)} sx={{ mt: 2, mb: 2 }} fullWidth label='Username' id="username" value={username} />
              <TextField onChange={(e) => setpassword(e.target.value)} sx={{ mb: 2 }} fullWidth label='Password' id="password" value={password} />
            </form>

            <Button onChange={login} sx={{ mt: 2, mx: 'auto', width: 350 }} type='submit' variant='contained' color='primary' href='/InstagramPost'> Log In </Button>

            <Typography marginBottom={2} varient='caption' align='center' marginTop="10px">
              Forgot Password?
            </Typography>
            <Divider />
            <Typography marginTop={2} varient='caption' align='center'> Don't have an account? <Button variant='text' href='/signup'>Sign up</Button> </Typography>
          </Paper>
        </div>
      </Grid>
    </Grid>


  )
}

export default Login;