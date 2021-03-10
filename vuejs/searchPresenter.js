//VUE
const SearchPresenter={
	props:["model"], 
    data(){ return {promise:null, data:null, error:null, searchQuery:"",searchType:""};}  ,
	created(){ this.promise= DishSource.searchDishes({}) ; },          // lifecycle 1, execute at creation
	watch:{
        'promise': {   // note: not this.promise! 
           immediate:true,  
           handler(){ 
			this.data= this.error= null;
if(this.promise){
				const p= this.promise;
this.promise.then(dt=>{if(this.promise===p)this.data=dt;})
.catch(er=>{if(this.promise===p)this.error=er;});
}
           }
        }
      } ,
render(){ 
   return <div>
   <SearchFormView options={options}
     onSearch={ ()=> this.promise= DishSource.searchDishes({type:this.searchType, query:this.searchQuery})} 
     onText={txt=>this.searchQuery=txt}
     onDishType={dishType=>this.searchType=dishType} />
 
   {promiseNoData(this.promise, this.data, this.error) || <SearchResultsView searchResults={this.data}
             dishChosen={id=>this.model.setCurrentDish(id)} /> } 
     </div>	  
} 
}

