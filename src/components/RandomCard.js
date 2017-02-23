
import React from 'react';

var data = require('../components/Deck.json');


const RandomCard = React.createClass({



		render() {
			{  
	let all_cards = data;
      var random =  Math.floor(Math.random() * (50 - 1) + 1);
      var temp = [];

       temp[0] = all_cards[random];
    
			return (
		  <div>{
             <div className="col-sm-2">
       	           <div className="card" style={{color: temp[0].color}}>
       	               <div className="text-right" > {temp[0].rank}  {temp[0].symbol} </div>
                           <h1 className="text-center">   {temp[0].symbol} </h1>
       	           <br /><br />
       	           <span> {temp[0].rank}  {temp[0].symbol} </span>
       	           </div> 
       	           <br />  
       	        </div>
		  	}
		  </div>
		)

}
}});
export default RandomCard;