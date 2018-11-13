import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Header from './components/Header/Header'
import axios from 'axios'
import decode from "jwt-decode"
import Login from './components/User/Login'
import Signup from "./components/User/Signup"
import Splash from './components/Splash/Splash'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: '',
      longitude: '',
      city: '',
      favorite_foods: [],
      username: '',
      password: '',
      isLoggedIn: false,
      loginError: '',
      SignupError: 'Username alreay exsists'
    }
    this.getMyLocation = this.getMyLocation.bind(this)
  }


  handleLogIn = () => {
    axios.post('http://localhost:3001//users/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        console.log(decode(response.data.token))
        localStorage.token = response.data.token
        this.setState({
          isLoggedIn: true
        });
      })

      .catch(err => this.setState({
        loginError: 'Wrong username/password'
      }))
  }

  componentDidMount() {
    this.getMyLocation()
  }
  // got this code from stackoverflow After successfully implementing a react geolocation component but then
  // I switched to this method because it plays better with other components and it sets state
  // so lat and long can be passed down as props!
  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }

  }

  render() {

    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route render={() => <Splash></Splash>}></Route>
          </Switch>
        </main>
      </div>
    )
  }
}


export default App;
