class DinnerModel{
    constructor(observers=[], guests=2, dishes=[], currentDish=null)
		{ this.observers = [];
		  this.setNumberOfGuests(guests); //numberOfGuests
		  this.setDishes(dishes);
		  this.setCurrentDish(currentDish); }
	
		
		addObserver(callback){
			this.observers = [...this.observers,callback];	//same as push?	  
		  }

		removeObserver(callback){
			this.observers= [...this.observers.filter(obs=> obs!== callback)]; //??
		  }
		
		notifyObservers(){ //calls all observers in array

			if(this.observers!==[]){
			this.observers.forEach(function(cb){
				
				setTimeout(function() {
					try{ cb() 
					}catch(error){
						console.error(error) 
					} 
				}, 0)
			})
			}
		}
				

		setNumberOfGuests(x){ 
			if((x>0) && (Number.isInteger(x))){
				if(this.numberOfGuests!==x){
					this.numberOfGuests=x;
					this.notifyObservers(); 
				}
				
			} else {
				console.log("Unacceptable input value!");	}
   		}
		
		setDishes(dishes){
			this.dishes=dishes;
			this.notifyObservers(); //TODO: behövs?
		} 
		
		addToMenu(dish){
			if(this.dishes!==[] && this.dishes.some(d=> d.id === dish.id))
				{console.log("The dish is already in the menu!");}
			 
			else{
				this.dishes=[...this.dishes,dish]; //  sets dishes to a new arraywith dish as its last member
				this.notifyObservers(); 
				console.log("dish is added");
		}
			}
	
		removeFromMenu(dishData){
			//checks that dish is in the menu
			if(this.dishes!==[] && this.dishes.some(d=> d.id === dishData)){
				this.dishes=[...this.dishes.filter(x=> x.id != dishData)]; //  uses Array.filter to remove from dishes the dish with the ID dishData.id
				this.notifyObservers(); 
				console.log(this.dishes);
			} else{
				console.log("The dish is not  in the menu!");
			}
			
		}

	setCurrentDish(id){

		if(this.currentDish===id){ // if currentDish doesn’t really change 
			return;
		} else{ //new currentDish
			this.currentDish=id;
			this.currentDishDetails= this.currentDishError= null; 
			this.notifyObservers(); 
			
			if(this.currentDish!==null) {
				DishSource.getDishDetails(id)
				.then(response=>{
					if(this.currentDish===id){ //response.id
						this.currentDishDetails=response;
						this.notifyObservers(); 
					}})
				.catch(error=>{
					if(this.currentDish===id){
						this.currentDishError=error;
						this.notifyObservers(); 
						}})
			} 
		}
   
		}
	
	};
		

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