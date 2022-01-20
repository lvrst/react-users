import React, { Component } from 'react';
import axios from 'axios';
import User from './User';

export default class Thing extends Component {
    state = {
      users: []
    }
  
    componentDidMount = () => {
      console.log("Coucou c'est le démarrage de l'application")  
      this.getUsers();
    }
  
  
    getUsers = () => {
      axios.get('https://randomuser.me/api/?results=9')
      .then(res => {
        this.setState({
          users: res.data.results
        })
      })
    }  
    render() {
        const usersJSX = this.state.users.map(user => {
          return (
            <User user={user} />
            ); 
        }) 
        return (
        <div>
            <button class="btn btn-dark" onClick={this.getUsers}>Charger des utilisateurs <i class="fas fa-redo"></i></button>
            <div class="row text-center">{usersJSX}
            </div>
        </div>
        
        );
    }
}