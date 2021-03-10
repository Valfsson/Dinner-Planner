//REACT
function usePromise(promise) {  //guests, dishes 
 
  const [data, setData]=React.useState(null);
  const [error, setError]=React.useState(null);

  React.useEffect(
      function(){ 
          setData(null); setError(null); 
          if(promise){
              const p=promise;
              promise.then(dt=>{if(promise===p)setData(dt);})
                      .catch(er=>{if(promise===p)setError(er) });
        }
          }, 
          [promise]
        );
        return [data, error];
      }

function SearchPresenter(props) {  //guests, dishes 
  const [promise, setPromise]=React.useState(null);
  const [searchQuery, setSearchQuery]=React.useState("");
  const [searchType, setSearchType]=React.useState("");
  React.useEffect(function(){setPromise(DishSource.searchDishes()) }, [] );

        const [data, error]=usePromise(promise);

        return  <div><SearchFormView options={["starter", "main course", "dessert"]}
          onSearch={ ()=>setPromise(DishSource.searchDishes({type:searchType, query:searchQuery})) }
          onText={txt=>setSearchQuery(txt)}
          onDishType={dishType=>setSearchType(dishType)} />
        
          {promiseNoData(promise, data, error) || <SearchResultsView searchResults={data}
              dishChosen={id=>props.model.setCurrentDish(id)} /> }
          </div>         
        }       

   //   onDishType={dishType=>console.log("User chose dish type: ", dishType)} />
