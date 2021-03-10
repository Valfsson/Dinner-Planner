const DishSource={  // dish source as an object with 3 methods
    apiCall(params) {
        return fetch(BASE_URL + params, {
            "method":"GET",
            "headers" :{
                'X-Mashape-Key' : API_KEY,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            }
        })
        .then(response=>{ 
            if(response.ok) { //response.status===200)
                console.log(params) ; 
                return response.json();
           }else{ 
            throw new Error("there was a problem: "+ response.statusText +" "+ BASE_URL + params);
                       }
         })   
        .catch(error => {
            console.error(error)   
        });

    }
    ,
    searchDishes(params) { //metod #2
        var searchUrl = new URLSearchParams(params).toString();
         return DishSource.apiCall("/recipes/search?"+ searchUrl)
        .then(data=>data.results);
    }
    ,
    getDishDetails(id){ //method #3
        return DishSource.apiCall("/recipes/"+ id + "/information")
        .then(response => response);
        //.then(response => console.log(response));
    }
};