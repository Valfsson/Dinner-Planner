//VUE
function SidebarPresenter(props) {  //guests, dishes 
	return <SidebarView guests={props.model.numberOfGuests}
			      setGuests={e=>props.model.setNumberOfGuests(e)}
				  dishes={props.model.dishes}
				  removeDish={rd=>props.model.removeFromMenu(rd)}
				  dishChoice={dc=>props.model.setCurrentDish(dc)}
	/>
}

