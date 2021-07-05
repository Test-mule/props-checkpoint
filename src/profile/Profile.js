import React from 'react'
import UserCard from '../Component/UserCard'
const handleName = (name)=>{
    alert(`Thank you for your visit to the profile of ${name}`);
  }
const Profile = () => {
    
    return (
        <div>
          <UserCard fullName='Zeineb Moalla' bio='Eager to learn new technologies and share knowledge with others in order to create a better ecosystem. ' 
          profession='Software Engineering student' children='/Professional photo.jpg' handleName={handleName} />
        </div>
    )
}

export default Profile
