import React from 'react'
import './Dash_main.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';



function Dash_main() {
  return (
    <div>
        <div className='icon-tab'>
        <div className='notif-icon'>
        <Link to="/dashboard/notifications">       
         <Icon icon="mi:notification" className='each-icon'/>
        </Link>
        </div>
        <div className='prof-icon'> 
           <Icon icon="iconamoon:profile" className='each-icon'/>
        </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Dash_main