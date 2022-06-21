import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, TextField, Typography,Button } from '@mui/material'
import igicon from '../images/Instagram_logo.png'


function Login() {

  let navigate=useNavigate();

  function handleLogin(){
    navigate('/login')
  }
  function handleSignup(){
  navigate('/signup')
}
 
const paperStyle ={
  padding :"25px 20px ",
  width:400,
  margin:"25px auto",
  align:'center'
}
return (
<Grid>
 <Paper elevation={20} style={paperStyle}>
 <img style={{ position: 'absolute', marginTop:'-20px',marginLeft: '-70px', left: '50%', height: '75px', width: '150px',justifyContent:"center"}} className='meta_icon' src={igicon} alt='#' />
 <br/>
 <br/>
 <form>
  <TextField  sx={{mt:2,mb:2}} fullWidth  label ='Phone Number,username or Email'/>
   <TextField  sx={{mb:2}} fullWidth label ='Password'/>
   </form>

   <Button sx={{ mt:2,mx:'auto',width:350}} type='submit' variant='contained' color='primary'> Log In</Button>

 <Typography varient='caption' align='center' marginTop="10px">
  Forgot Password?
 </Typography>

 
 </Paper>

 <Paper  elevation={10} style={paperStyle} >
   <Typography  varient='caption' align='center'> Don't have an account? <Button variant='text' href='/signup'>Sign up</Button> </Typography>
 </Paper>
</Grid>

)
  // const middle = {
  //   height: "100vh",
  //   width: "100wh",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexDirection: "column",
  //   // backgroundColor: "aliceblue",
  // };
  // return (
  //   <div style={middle}>
  //     <h1
  //       style={{
  //         margin: "50px",
  //         fontFamily: "Gill Sans",
  //       }}
  //     >
  //       Instagram
  //     </h1>
  //     <div class="d-grid gap-2 col-2 mx-auto my-auto">

  //       <button class="btn btn-outline-primary" type="button"  onClick={handleLogin}>
  //         Login
  //       </button>
  //       <button class="btn btn-outline-primary" type="button" onClick={handleSignup}>
  //         SignUp
  //       </button>

  //     </div>
  //   </div>
  // );
}

export default Login