//REACT
function SidebarPresenter(props) {  //guests, dishes 

	const [guests, setGuests]=React.useState(props.model.numberOfGuests);
	const [dishes, setDishes]=React.useState(props.model.dishes);

	React.useEffect( function(){  
		function obs(){ 
			setGuests(props.model.numberOfGuests); 
			setDishes(props.model.dishes);}
			props.model.addObserver(obs);  //subscribe
			
		return function(){ props.model.removeObserver(obs);} //unsubscribe
		}, [])  
		
	return <SidebarView guests={guests}
						dishes={dishes}
						setGuests={e=>props.model.setNumberOfGuests(e)}
						removeDish={rd=>props.model.removeFromMenu(rd)}
						dishChoice={dc=>props.model.setCurrentDish(dc)}

			/> 
}



