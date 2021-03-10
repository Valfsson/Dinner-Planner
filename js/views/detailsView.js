function DetailsView(props){  //props=> dish, people, isDishInMenu, dishAdded
return <div id="rootDetailsViewDiv">
    <div class="buttonsDiv">
  
        <button class="button" onClick={event=>{props.dishAdded(props.dish); window.location.hash="#search"}}
			 disabled={(props.dishes!==[] && props.dishes.some(d=> d.id === props.dish.id))}> Add to menu! </button> 
        <button class="button" onClick={event=>window.location.hash="#search"}> Back to search </button>          
    </div>

    <div class="title">
    {props.dish.title}
    </div>
   
    <div>
    <img class="pic" src={props.dish.image}  ></img>
    </div>

    <div class="price">
         Price: {(props.dish.pricePerServing).toFixed(0)+" "} 
        Total Price for {props.people} people:  {((props.dish.pricePerServing)*props.people).toFixed(0)}
    </div>

    <div class="ingridients">
    Ingridients:
    {props.dish.extendedIngredients.map(function(ingridient){ return <p>
        {ingridient.name+": "+(ingridient.measures.us.amount).toFixed(0)+" "+ingridient.measures.us.unitShort}
    </p>})}
    </div>

    <div class="instr">
    {props.dish.instructions}
    </div>

    <div class="link"> <a href={props.dish.sourceUrl}>
							 More details </a> 
    </div>

</div>
}

//Place “Add to Menu” and “Cancel” in a DIV, usefloat  CSS property--> to the right

