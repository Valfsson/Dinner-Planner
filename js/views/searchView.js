const SearchFormView =props =>
   <div class="searchArea"> 
	<input 
	
		
	//onChange
	onInput= {e=> props.onText(e.target.value)} placeholder="type here"/>
	
	<select onChange= {e=> props.onDishType(e.target.value) }>
	  <option> Choose: </option>
	{props.options.map(
               function(opt){return <option key={opt} > {opt} </option>})}
	</select>

	<button class="buttonSmall"  onClick={event => props.onSearch()}> Search </button>
	
   </div>

function SearchResultsView (props){  //prop called searchResults
		
return <div>
						
	{props.searchResults.map(
		function(dish){ return <span key={dish.id} class="searchResult" onClick={e=>{props.dishChosen(dish.id); window.location.hash="#details";}}> 
		<img class="smallPic" src={"https://spoonacular.com/recipeImages/"+dish.image} ></img>
		<p> {dish.title} </p> 
		</span> })}

</div> 
}
