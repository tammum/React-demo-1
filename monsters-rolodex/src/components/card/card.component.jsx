import React from 'react';
import './card.styles.css'


export const Card = props =>{
     return <div className="card-container ">
         {console.log(props.monster.id)}
         <img alt="monster" src={`https://robohash.org/${props.monster.id}/?set=set2&size=180x180`}></img>
        <h2>{props.monster.name}</h2>
        <h5>{props.monster.email}</h5>  
         </div>
};
