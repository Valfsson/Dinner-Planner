//REACT
function Show(props){ // subscribe to browser-wide event 
const [hashState, setHash]=React.useState(window.location.hash);
React.useEffect( function(){  
          const listener= function(){ setHash(window.location.hash);}
          window.addEventListener("hashchange", listener);   // 1 subscribe
          return function(){ window.removeEventListener("hashchange", listener) } // unsubscribe
}, []); 

var name="";
if(hashState!==props.hash){name="hidden"}
 	return <div class={name}> {props.children} </div>; 
}
