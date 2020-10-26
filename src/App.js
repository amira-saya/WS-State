import React from 'react';
import Photo from './Photo/Tom.jpg'
import './App.css';

class Person extends React.Component{
  state={
    fullName:"Tom Hanks",
    profession:"actor",
    bio:"born July 9, 1956) is an American actor and filmmaker. Known for both his comedic and dramatic roles, Hanks is one of the most popular and recognizable film stars worldwide",
    imgSrc:Photo,
    show: true
    
  };
  render (){
    return <>
     <img src={this.state.imgSrc}  alt="profile" />
    <h1>{this.state.fullName}</h1>
   <h3>{this.state.profession}</h3>
    <h3>{this.state.bio}</h3>
    <button onClick={this.show}>toggle</button>
           </>
  }

}
export default Person
