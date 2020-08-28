import React from 'react'
import { connect } from 'react-redux';
import { editUser } from '../actions/editUser'

class EditUser extends React.Component {

  constructor(props){
    super(props)

    console.log(props)
    this.state={
      name: "",
      email: "",
      city: "",
      state: "",
      id: ""
    }
    console.log(this.state)
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    event.persist()
    let id= parseInt(event.target.dataset.id)
    console.log(this.props)
    console.log(id)
    this.props.editUser(id, this.state)
    this.setState({
      name: "",
      email: "",
      city: "",
      state: ""
    })
    //need to redirect
  }

  componentDidMount(){
    const user = this.props.users.filter(user => user.id == this.props.match.params.id)[0]
    console.log(user.name)
    this.setState({
      name: user.name,
      email: user.email,
      city: user.city,
      state: user.state,
      id: user.id
    })
  }


  render(){
    let user = this.props.users.filter(user => user.id == this.props.match.params.id)[0]
    console.log(user)
    console.log(this.state)
    return(
      <div>

      {user ?
        <>
        <form data-id={this.state.id} onSubmit={this.handleOnSubmit}>
        <h2>Edit User Profile</h2>
        <label>Name:</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Email:</label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>City:</label>
        <input type="text" name="city" value={this.state.city} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>State:</label>
        <input type="text" name="state" value={this.state.state} onChange={this.handleOnChange}/>
        <br/><br/>
        <input type="submit" value="Submit"/>
        </form>

      </>
      :
      null

      }
      </div>
    )
  }
}

export default connect(null, {editUser})(EditUser)
