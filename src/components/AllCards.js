import React from 'react';



const AllCards = React.createClass({
render() {
	const {cards} = this.props;
	return (
  <div>
  {
  	cards.map(card => (
       	<div id={card.id} >
       	    {
       	    

       	        <div className="col-sm-2">
       	           <div className="card" style={{color: card.color}}>
       	               <div className="text-right"> {card.rank}  {card.symbol} </div>
                           <h1 className="text-center">    {card.symbol} </h1>
       	           <br /><br />
       	          <span> {card.rank}  {card.symbol} </span>
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

export default AllCards;
