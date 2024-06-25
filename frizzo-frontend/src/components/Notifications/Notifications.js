import React from 'react'
import { Notifdata } from './Notifdata';
import "./Notifications.css"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


function Notifications() {
  return (
    <div>
        <div className='notif-head'>
            <div className='notif-heading'>
        <Link to="/dashboard"><Icon icon="ic:twotone-arrow-back" width="24" height="24" /></Link> 
            <h1>Notifications</h1>
        </div>
        <div className='reminder-icon'>
           <Icon icon="streamline:add-bell-notification-solid" width="24" height="24" />
        </div>
        </div>

        <div>
        <ul className='notif-elements'>
          {Notifdata.map((val, key) => (
            <li
              key={key}
              className='notif-row'
              
            >
              <div className='notif-inside'>
                <div className='notif-icons'><div className='icon-bg'>{val.icon}</div></div>
                <div className='notif-title-container'>
                    <div className='notif-title'><span>{val.title}</span><small>{val.time}</small></div>
                    <div className='notif-details'><p>{val.details}</p></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
        
    </div>
  )
}

export default Notifications