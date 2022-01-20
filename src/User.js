import React, { Component } from 'react';

export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {user: props.user};
    }

      render() {
        const user = this.props.user;
        var birth = new Date(user.dob.date.substring(0, 10)),
        birthDate = (new Date(birth).toLocaleString('fr-FR', {year: "numeric", month: "long", day: "numeric"}));
        var age = Math.floor((new Date() - new Date(birth))/31557600000);
        return (
          <div className="col-md-4 mb-5 mb-md-0">
          <div className="card testimonial-card">
            <div className="card-up bg-primary"></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={user.picture.thumbnail} 
                alt=""
                className="rounded-circle img-fluid"
              />
            </div>
            <div className="card-body">
              <h4 classNameName="mb-4">{user.name.first} {user.name.last.toUpperCase()}</h4>
              <p className="birth">{birthDate} ({age} ans)</p>
              <hr />
              <p className="email">{user.email}</p>
              <p className="location">{user.location.street.number} {user.location.street.name}, {user.location.city} {user.location.state} <i className={"flag flag-" + user.location.country.toLowerCase().split(/[\s]+/).join('-')}></i>{user.location.country.toUpperCase()}</p>
            </div>
          </div>
        </div>
        );
      }
    }