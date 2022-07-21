import React from 'react'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
// import LinkedIn from "../assets/LinkedIn.svg";
// import Facebook from "../assets/Facebook.svg";
import Logo from "../Assets/logo.svg"
// import Instagram from "../assets/Instagram.svg";
// import Twitter from "../assets/Twitter.svg"
import { Grid,  Stack,  Typography} from '@mui/material';
import "./footer.scss"

function Footer() {
  return (

      <Grid id='footerContainer' container direction={{md:'row',xs:'column'}}
          align-items={{md:'center',xs:'center'}} rowSpacing={{md:0,xs:8}}
          justifyContent={{md:"space-evenly",xs:'space-evenly'}}>

          <Grid item container direction={{md:'column',xs:'column'}} 
            className='firstBox' alignItems={{md:'flex-start',xs:'center'}}
            justifyContent={{md:'space-between',xs:'space-around'}}
            md={4} xs={12} order={{md:1,xs:3}} rowSpacing={{md:3,xs:3}} > 
             
              <Grid item className='firstBoxItem1'>
                <Stack  spacing={2} direction='row' justifyContent="flex-start" alignItems="center">
                   <img className='logo' src={Logo} alt='logo'/>
                   <Typography variant='body1' className='logoTitle'>
                      Medico
                    </Typography>
                </Stack>
              </Grid>
              
              <Grid item className='firstBoxItem2'>
                <Typography className='descr' variant='body1' >
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                   nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Grid>
              
              <Grid item className='firstBoxItem3'>
                <Stack direction={{md:"row",xs:'row'}} spacing={{md:4,xs:5}} 
                  justifyContent={{md:"space-evenly",xs:'center'}} alignItems={{md:"flex-start",xs:'center'}}>
                  {/* <img className='socialIcons' src={Facebook} alt='fb'/>
                  <img className='socialIcons' src={Twitter} alt='tw'/>
                  <img className='socialIcons' src={Instagram} alt='Ig'/>
                  <img className='socialIcons' src={LinkedIn} alt='ln'/>    */}
                  <span>FB</span>
                  <span>TW</span>
                  <span>IG</span>
                  
                </Stack>
              </Grid> 
             
              <Grid item className='firstBoxItem4'>
                <Typography className='copyRights' variant='body1' align='left'>
                  © 2022. All rights reserved
               </Typography>
              </Grid>  
          </Grid>






          <Grid item container direction={{md:'row',xs:'row'}} justifyContent={{md:'space-around',xs:'space-between'}}
              alignItems={{md:'flex-start',xs:'flex-start'}} md={4} xs={12} order={{md:2,xs:2}} 
              className='secondAndThirdContainer'>

              <Grid item className='secondBox' > 
                <Typography className='secondBoxTitle' variant='h5'>Links</Typography>
                <Stack  direction='column' alignItems='flex-start'>
                  <a className='secondBoxLinks' href='www'>Patient</a>
                  <a className='secondBoxLinks' href='www'>Doctor</a>
                  <a className='secondBoxLinks' href='www'>Insurer</a>
                  <a className='secondBoxLinks' href='www'>About Us</a>
                </Stack>
              </Grid>

              <Grid item className='thirdBox'>
                <Typography className='thirdBoxTitle' variant='h5'>Useful Link</Typography>
                <Stack   direction='column' alignItems='flex-start'>
                  <a className='thirdBoxLinks' href='www'>Github Repo</a>
                  <a className='thirdBoxLinks' href='www'>Research Paper</a>
                  <a className='thirdBoxLinks' href='www'>Documentation</a>
                  <a className='thirdBoxLinks' href='www'>Cryptography</a>
                </Stack>  
              </Grid>
          </Grid>




          <Grid item container direction={{md:'column',xs:'column',}} justifyContent={{md:'center',xs:'flex-start'}} 
             alignItems={{md:'flex-start',xs:'center'}} rowSpacing={{md:3.5,xs:3.5}}
             className='fourthBox' md={4} xs={12} order={{md:3,xs:1}}> 
             
              <Grid item>
                    <Typography className='fourthBoxTitle' variant='h5'>Subscribe</Typography>  
              </Grid>
              <Grid item>
                    <Typography className='fourthBoxDescr' variant='body1'>Subscribe to get latest property, blog news from us</Typography>
              </Grid>
              <Grid item className='emailContainer'>
                    <input className='fourthBoxEmail' 
                    placeholder='Email Address'/>
                    <ArrowCircleRightRoundedIcon 
                    id='emailSendIcon'/> 
              </Grid>
          </Grid>


      </Grid>
  )
}

export default Footer