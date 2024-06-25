import React from 'react'
import "./Explore.css"
import { Icon } from '@iconify/react';


function Explore() {
  return (
    <div>
        <div className='explore-heading'>
            <h1>Features</h1>
            <h4>Empower your financial jounery</h4>
        </div>
        <div className='features-container'>
            <div className='each-feature'>
                <div>          
                    <Icon icon="icon-park-outline:transaction" className='explore-icon'/>
                </div>
                <div>
                    <h2>Transactions</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</span>
                </div>             
            </div>
            <div className='each-feature'>
            <div>   
                <Icon icon="grommet-icons:resources" className='explore-icon'/>
            </div>
             <div>
                <h2>Resources & Investments</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</span>
            </div>           
            </div>
            <div className='each-feature'>
            <div>   
                <Icon icon="heroicons:chart-pie" className='explore-icon'/>
            </div>
             <div>
                <h2>Budget Planning</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</span>
            </div>    
            </div>
            <div className='each-feature'>
            <div>   
                <Icon icon="et:piechart" className='explore-icon'/>
            </div>
             <div>
                <h2>Something</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</span>
            </div>    
            </div>
        </div>
    </div>

  )
}

export default Explore