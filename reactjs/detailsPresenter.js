//REACT
function DetailsPresenter(props) {  //Dinner model=  currentDish, currentDishDetails, currentDishError, nr. guests, dishes 

    const [currentDish, setCurrentDish]=React.useState(props.model.currentDish);
    const [data, setData]=React.useState(props.model.currentDishDetails);
    const [error, setError]=React.useState(props.model.currentDishError);
    const [guests, setGuests]=React.useState(props.model.numberOfGuests);
    const [dishes, setDishes]=React.useState(props.model.dishes);

React.useEffect(function(){
    function obs(){
        setCurrentDish(props.model.currentDish);
        setGuests(props.model.numberOfGuests);
        setData(props.model.currentDishDetails);
        setError(props.model.currentDishError);
        setDishes(props.model.dishes);}
        props.model.addObserver(obs); //subscribe

     return function(){props.model.removeObserver(obs); } //unsubscribe
    }, [])   
	
return promiseNoData(currentDish, data, error) || <DetailsView dish={data} 
	people={guests}
    dishes={dishes} 
	isDishInMenu={props.model.dishes.find(d=> d.id===currentDish.id)} 
	dishAdded={e=>props.model.addToMenu(e)} />

}

