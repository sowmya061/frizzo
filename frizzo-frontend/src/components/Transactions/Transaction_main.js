import React from 'react'
import '../Dashboard/Dash_main.css'
import { Icon } from '@iconify/react';


function Transaction_main() {
  return (
    <div>
        <div className='icon-tab'>
        <div className='notif-icon'>
            <Icon icon="mi:notification" />
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

export default Transaction_main