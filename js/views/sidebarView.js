const SidebarView =props=>  //props guests, dishes
	<div class> 
		
		<div class="navigation"><button class="buttonSmallRight"  onClick={event => window.location.hash="#summary"}> See Summary </button> </div>

<div class="navigation">
		<button class="buttonSmall" onClick={event=>props.setGuests(props.guests-1)}
			 disabled={props.guests<=1}> - </button> 
		<span title="nr. guests"> {props.guests} </span> 
		<button class="buttonSmall" onClick={event=>props.setGuests(props.guests +1)}> + </button>
</div>

<table>
	<thead>
   		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</thead>
	<tbody>
	
    {[...props.dishes].sort(compareDishes).map(function(dish){ return <tr>
   		<td><button class="buttonSmall" onClick={event => props.removeDish(dish.id)}> x </button></td>
		<td class="dishTitle">
		<a href="" onClick={e=>{ e.preventDefault(); 
                        		 props.dishChoice(dish.id);
								 window.location.hash="#details";} }>
							 {dish.title} </a> </td>
		<td>{dishType(dish)}</td>
		<td class="pricePerServing">{(dish.pricePerServing*props.guests).toFixed(2)}</td>
	</tr>
	})}
	<tr>
   		<td> </td>
		<td>Total:</td>
		<td> </td>
		<td>{((props.dishes.reduce(function (accumulator, currentValue) {
  			return accumulator + currentValue.pricePerServing}, 0)) * props.guests).toFixed(2)} </td>
	</tr>
	</tbody>
	</table>
	</div>

const types=["starter", "main course", "dessert"];
function dishType(dish){
    if(dish.dishTypes){
    	const tp= dish.dishTypes.filter(value => types.includes(value));
    	if(tp.length)
	    return tp[0];
    }
    return "";
};


function compareDishes(a,b){
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b)); 
		if(ai<bi){
			return -1;
		} else if(ai>bi){
			return 1;
		} else if(ai=bi){
			return 0;
		};
}

