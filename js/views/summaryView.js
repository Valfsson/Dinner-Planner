
const SummaryView =props=>              //props= persons,menu
	<div>
		<button class="buttonSmallRight"  onClick={event => window.location.hash="#search"}> Back to Search </button>
       <div class="title"> Dinner for <span title="nr. guests">{props.persons}</span> guests: </div>  
<div>       
<table class="table">
     <thead class="tableHead">
   		<td>Ingredient</td>
		<td>Aisle</td>
		<td>Quantity</td>
	</thead>
	<tbody>
     
     {getIngredients(props.menu).sort(compareIngredients).map(function(ingridient){ return <tr class="tableRaw">
          <td> {ingridient.name}</td>
		<td> {ingridient.aisle} </td>
		<td> {((ingridient.amount).toFixed(0)*props.persons)+" "+ingridient.measures.us.unitShort}</td>
	</tr>
	})}

     </tbody>
</table>
 </div>
 </div>      


// Sort by aisle and (for the same aisle) ingredient name

function getIngredients(dishArr){
	const result={}; // object used as mapping
	dishArr.forEach(d=> d.extendedIngredients.forEach(i=>{
		 if(!result[i.id])
		// ingredient not taken into account yet associate the ingredient with the ID
		// {...i } is a *copy* of the ingredient (spread syntax)we copy just in case, as we’ll change the object below
		 result[i.id]={...i};
		else
		  { (result[i.id].amount+i.amount) } /*TODO: add i.amount to the amount of result[i.id]*/
	}))
   return Object.values(result);
 }



function compareIngredients(a,b){  //Sorting by aisle and name
     if(a.aisle < b.aisle)
         return -1;
     else if(a.aisle > b.aisle)
          return 1;
     else {     // At this point, we know that a.aisle===b.aisle
          if(a.name < b.name)
               return -1;
           else if(a.name > b.name)
               return 1;
           else if(a.name===b.name)
           console.error("Ingridients must be unique!");     
     }     

 }
 