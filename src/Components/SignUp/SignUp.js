import React from 'react'
import { Grid, Paper, TextField, Typography,Button } from '@mui/material'
import igicon from '../images/Instagram_logo.png'

const SignUp = () => {

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
       <Typography  marginBottom="20px" varient='caption' align='center'> Sign up to see photos and videos from your friends</Typography>
       <form>
        <TextField  sx={{mb:2}} fullWidth  label ='Mobile Number or Email'/>
        <br/>
         <TextField  sx={{mb:2}} fullWidth label ='Full Name'/>
         <TextField  sx={{mb:2}} fullWidth label ='Username'/>
         <TextField  sx={{mb:2}} fullWidth label ='Password'/>
         </form>
      

       <Typography varient='caption' align='center' marginTop="10px">
        People who use our service may have uploaded your contact information to Instagram.
       </Typography>

       <Typography varient='caption' align='center' marginTop="10px">
        By signing up,you are agree to our Terms,Data Policy and Cookies Policy.
       </Typography>

       <Button sx={{ mt:2,mx:'auto',width:350}} type='submit' variant='contained' color='primary'> Sign Up</Button>
       </Paper>

       <Paper  elevation={10} style={paperStyle} >
         <Typography  varient='caption' align='center'> Have an account? <Button variant='text' href='/login'>Login</Button> </Typography>
       </Paper>
    </Grid>
    
  )
}

export default SignUp