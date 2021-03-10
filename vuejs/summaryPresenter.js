//VUE
function SummaryPresenter(props){  //persons, menu
	return <SummaryView persons={props.model.numberOfGuests} 
						menu={props.model.dishes} />
};