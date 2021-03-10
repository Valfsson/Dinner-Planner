//REACT
function SummaryPresenter(props){  //persons, menu

	const [number, setNumber]=React.useState(props.model.numberOfGuests);
	const [menu, setMenu]=React.useState(props.model.dishes);

	React.useEffect( function(){  
		function obs(){ 
			setNumber(props.model.numberOfGuests); 
			setMenu(props.model.dishes);}
			props.model.addObserver(obs);  //subscribe
			
		return function(){ props.model.removeObserver(obs);} //unsubscribe
		}, []) 
		
	return <SummaryView persons={number}
				menu={menu} /> 

};