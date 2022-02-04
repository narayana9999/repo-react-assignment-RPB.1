import React from 'react';
import './NavContents.css';
 
function NavContents({Icon, title, Avatar}){
    return <div className='navContents_container'>
         { Icon && <Icon className="navContents_icon"/>}
         { Avatar && <Avatar className='navContents_avatar'/>}
         <h3>{title}</h3>
    </div>
}
export default NavContents;