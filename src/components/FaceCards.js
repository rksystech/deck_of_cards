import React from 'react';

var data = require('../components/Deck.json');


const FaceCards = React.createClass({
render() {
	return (
  <div>{
  	data.map(card => (
       	<div id={card.id} >
       	    {card.facecard === true && 
          

          <div className="col-sm-2">
       	           <div className="card" style={{color: card.color}}>
       	               <div className="text-right"> {card.rank}  {card.symbol} </div>
                           <h1 className="text-center">   {card.symbol} </h1>
       	           <br /><br />
       	        {card.rank}  {card.symbol} 
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

export default FaceCards;