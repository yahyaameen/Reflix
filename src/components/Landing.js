import React from 'react';
import { useState } from 'react'
import User from './User';
import './landing.css'
import usersData from '../mock-data/users.json'

const Landing = () => {
  let [users, setUsers] = useState(usersData.users)
    return (
       <div>
         <div >WHO'S WATCHING?</div>
         <div id='users'>
          { users.map((u, index) => 
                <User key={index} user={u}/>
            ) 
          }
         </div>
       </div>
    )   
}

export default Landing