import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Banner.css"

const Banner = () => {
  return (
    <div className='banner'>
      <div className="overlay"></div>
        <div className="banner-title">
            <h3 className="text-white">Follow Us On Social Media</h3>
            <div className="links-gp">
                <IconButton color='primary' size="large">
                    <FacebookOutlinedIcon/>
                </IconButton>

                <IconButton color='secondary'>
                    <InstagramIcon/>
                </IconButton>

                <IconButton color='primary'>
                    <LinkedInIcon/>
                </IconButton>
            </div>
        </div>
        </div>

  )
}

export default Banner
