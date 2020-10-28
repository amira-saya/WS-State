import React from 'react';
import Photo from './Photo/Tom.jpg'
import './App.css';

class Person extends React.Component {
  state = {
    fullName: "Tom Hanks",
    profession: "actor",
    bio: "born July 9, 1956) is an American actor and filmmaker. Known for both his comedic and dramatic roles, Hanks is one of the most popular and recognizable film stars worldwide",
    imgSrc: Photo,
    show: true,
    counter: 0

  }
  componentDidMount() {
    console.log("Person");
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, 1000);
  }

  switch = () => {
    this.setState({ show: !this.state.show })
  }
  render() {
    return (

      <>
      {this.state.counter}
        <button onClick={this.switch}>showMe</button>
        {this.state.show ? (<div>
          <img src={this.state.imgSrc} alt="profile" />
          <h1>{this.state.fullName}</h1>
          <h3>{this.state.profession}</h3>
          <h3>{this.state.bio}</h3>

        </div>) : null}

      </>
    )
  }

}



export default Person

