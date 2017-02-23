import React from 'react';

var data = require('../components/Deck.json');


const Hearts = React.createClass({
render() {
	return (
  <div>{
  	data.map(card => (
       	<div id={card.id} >
       	    {card.suit === 'heart' && 

    <div className="col-sm-2">
       	           <div className="card" style={{color: card.color}}>
       	               <div className="text-right"> {card.rank}  {card.symbol} </div>
                           <h1 className="text-center">    {card.symbol} </h1>
       	           <br /><br />
       	           <span > {card.rank}  {card.symbol} </span>
       	           </div> 
       	           <br />  
       	        </div> 


       	    }
       	</div>
    ))
  	}
  </div>
)
}
})

export default Hearts;