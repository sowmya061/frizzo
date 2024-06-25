import React from 'react'
import '../Dashboard/Dash_main.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';



function Budget_main() {
  return (
    <div>
        <div className='icon-tab'>
        <div className='notif-icon'>
        <Link to="/dashboard/notifications">       
         <Icon icon="mi:notification" />
        </Link>
        </div>
        <div className='prof-icon'> 
           <Icon icon="iconamoon:profile" />
        </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Budget_main