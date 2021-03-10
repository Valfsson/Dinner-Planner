//SAVE TO FIREBASE
function persistModel(model){
    let loadingFromFirebase=false; //bolean flag
    model.addObserver(function(){
        if(loadingFromFirebase==false){ //set values only if not loading
            firebase.database().ref("dinnerModel").set({  // object literal
                guests: model.numberOfGuests,
                dishes: model.dishes,
                currentDish: model.currentDish
            });
        }
    });

      firebase.database().ref("dinnerModel").on("value", function(data){
            loadingFromFirebase=true;
            if(data.val()){
                model.setNumberOfGuests(data.val().guests);
                model.setCurrentDish(data.val().currentDish || null);
                model.setDishes([...data.val().dishes]);
        }   loadingFromFirebase=false;
    });
    }
        

/*       firebase.database().ref("dinnerModel/guests").on("value", data=>
                model.setNumberOfGuests(data.val())),
        
        firebase.database().ref("dinnerModel/currentDish").on("value", data=>
            model.setCurrentDish(data.val() || null)),

        firebase.database().ref("dinnerModel/dishes").push("child_added", data=>
                model.setDishes([...data.val()] ));    
}*/


//only save data
/*function persistModel(model){
    model.addObserver(function(){
         	firebase.database().ref("dinnerModel").set({  // object literal
			guests: model.numberOfGuests,
            dishes: model.dishes,
            currentDish: model.currentDish
		});
    });
}
*/
