import React from 'react';
import {Route, Link} from 'react-router-dom';
import Adventure from './Adventure'


export default function AdventuresList(props){
  return(
    <div>
    <h2> Adventures </h2>
    {console.log(props)}
    {props.adventures.map(adventure => <span key={adventure.id}> <Link to={`/adventures/${adventure.id}`}>{adventure.title}</Link>
    <br/><br/>
   </span>
     )}
    </div>
      )
    }
