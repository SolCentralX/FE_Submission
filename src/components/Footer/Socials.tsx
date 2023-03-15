import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
const Socials = () => {
  return (
    <div className='flex flex-row space-x-5'>     
        <a href="https://twitter.com/soldecentral" target="_blank"><TwitterIcon/></a>
        <a href="https://github.com/SolCentralX/FE_Submission" target="_blank"><GitHubIcon/></a>
    </div>
  )
}

export default Socials