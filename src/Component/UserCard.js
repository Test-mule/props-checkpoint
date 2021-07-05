import React from 'react'
import { Card, Button } from 'react-bootstrap' 
import {PropTypes} from 'prop-types'
const styleObject ={
    textAlign: "center",
    display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:'#DEB887'
}
const UserCard = ({fullName, bio, profession, children, handleName}) => {
    return (
        <div style={styleObject}>
              <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={children} style={{width:'100px'}}/>
              <Card.Body>
                 <Card.Title><h1 style={{color:'#981b1b'}}>{fullName}</h1></Card.Title>
                 <Card.Text>
                     <h2>{profession}</h2>
                     <h3>{bio}</h3>
                 </Card.Text>
                 <Button onClick={()=>handleName('Zeineb')} style={{marginTop:'300px'}}>Click me!</Button>
              </Card.Body>
           </Card>
        </div>
    )
}
 UserCard.defaultProps = {
    fullName: "First Name Last Name",
    bio:
      "Empowering whoever needs it",
    profession: "profession",
    children: "profile photo",
  };

 UserCard.propTypes={
    fullName:  PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    rofession:PropTypes.string.isRequired,
   handleName: PropTypes.func.isRequired
  }
export default UserCard
