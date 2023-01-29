import React, { Component } from 'react';

class App extends Component {
   constructor(props){
    super(props);
    this.state = {
      users: [],
      name: '',
      lname: ''
    }
  }

  addUser(event){
    event.preventDefault()
    this.setState({
      users: this.state.users.concat({name: this.state.name, lname: this.state.lname}),
      name: '',
      lname: ''
     });
  }

  updateUsername(event){
    this.setState({
      name: event.target.value
    })
  }

  updateUserlname(event){
    this.setState({
      lname: event.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.addUser.bind(this)}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name"value={this.state.name} onChange={this.updateUsername.bind(this)} />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={this.state.lname} onChange={this.updateUserlname.bind(this)} />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
              <tr>
              <td>
                {this.state.users.map((user, index) => <li key={user.id}>{user.name}</li>)} 
              </td>
              <td>
                {this.state.users.map((user, index) => <li key={user.id}>{user.lname}</li>)} 
              </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


