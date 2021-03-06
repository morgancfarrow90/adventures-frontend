import React from 'react'
import { createAdventure } from '../actions/createAdventure'
import { connect } from 'react-redux';

class NewAdventure extends React.Component {

  constructor(props){
    super(props);
    this.state={
      title: "",
      description: "",
      website_url: "",
      image_url: "",
      user_id: props.user.id
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    this.props.boundcreateAdventure(this.state)
    console.log(this.state)
    this.setState({
      title: "",
      description: "",
      website_url: "",
      image_url: "",
      user_id: ""
    })
    this.props.history.push(`/users/${this.state.user_id}`)
  }

  render() {
    console.log(this.props)

    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <h1>Add Adventure </h1>
        <label>Title:</label>
        <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Description:</label>
        <input type="text" name="description" value={this.state.description} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Website URL:</label>
        <input type="text" name="website_url" value={this.state.website_url} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Image URL:</label>
        <input type="text" name="image_url" value={this.state.image_url} onChange={this.handleOnChange}/>
        <br/><br/>

        <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { boundcreateAdventure: (userEntry) => dispatch(createAdventure(userEntry))
}}


export default connect(null, mapDispatchToProps)(NewAdventure)
