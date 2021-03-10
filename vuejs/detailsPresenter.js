//VUE

function DetailsPresenter(props) {  //guests, dishes 	

    return  promiseNoData(props.model.currentDish, props.model.currentDishDetails, props.model.currentDishError) || <DetailsView dish={props.model.currentDishDetails} 
	people={props.model.numberOfGuests}
	dishes={props.model.dishes} 
	isDishInMenu={props.model.dishes.find(d=> d.id===props.model.currentDish.id)} 
	dishAdded={e=>props.model.addToMenu(e)} /> 
}
