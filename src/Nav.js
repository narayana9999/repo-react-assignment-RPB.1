import React from 'react';
import './Nav.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar} from '@material-ui/core';

function Nav(){
    return(
        <div className='Navbar'>
            <div className='Navl'>
            <img src="https://images.news18.com/ibnlive/uploads/2020/11/1604413203_gmail_logo.jpg?im=FitAndFill,width=1200,height=1200" alt=""></img>
            <div className='search_box'> 
                <SearchIcon/>
                <input type='text' placeholder='Search'/>
            </div>
            </div>
         
            <div className='Navr'>
                  
                 <NavContents Icon={NotificationsIcon} title="Notifications"/>
                 <NavContents Avatar={Avatar} title="me"/>
            </div>
        </div>
             
         
    );
}
export default Nav;