function RenderTest(){ console.log("Vue sub-component render test"); return false; }
function App(props) {
	defaultRoute(); // when the application loads, set the default route!
	window.addEventListener("hashchange", defaultRoute); 
	return (
		<div class="flexParent">
  			<div class="sidebar"> <SidebarPresenter model={props.model}/></div>
  			<div class="mainContent"> <Show hash="#search"><SearchPresenter model={props.model}/></Show>
			  						 <Show hash="#summary"><SummaryPresenter model={props.model}/></Show>	
									<Show hash="#details"><DetailsPresenter model={props.model}/></Show>	
									</div>
			<RenderTest />
		</div>
	)
}

function defaultRoute(){
    if(["#search", "#summary", "#details"].find((knownRoute)=> window.location.hash=== knownRoute)) {
}else{
	window.location.hash="#search";
}
}

//<Show hash="#search"><SearchPresenter model={props.model} /> </Show>
//<Show hash="#summary"><SummaryPresenter model={props.model} /> </Show>
//<Show hash="#details"><DetailsPresenter model={props.model}/></Show>


//   			<div class="mainContent"> <SearchPresenter model={props.model}/> 
//			<DetailsPresenter model={props.model}/>  </div>	