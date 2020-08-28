import React from 'react'
import {Redirect} from 'react-router-dom'

const Adventure = (props) => {

  let adventure = props.adventures.filter(adventure => adventure.id == props.match.params.id)[0]



  return (

    <div>
    <h2>{adventure ? adventure.title : null}, by: {adventure ? adventure.user.name : null} </h2>
    <img src= {adventure ? adventure.image_url : null} />
    <p>{adventure ? adventure.description : null} </p>
    <a href={adventure ? adventure.website_url : null}>Learn More</a>
    <p>Like: {adventure ? <button data-id= {adventure.id} data-likes={adventure.likes} onClick={props.likeHandler}>{adventure.likes}</button> : null} </p>

    <h3>Comments: </h3>
    <button>Add a Comment</button>
    {adventure ? adventure.comments.map(comment => <p>{comment.text}</p>) : null}
    </div>
  )
}

export default Adventure
