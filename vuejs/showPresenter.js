//VUE
const Show={    // subscribe to browser-wide event
props:["hash"],
data(){ return {hashState:window.location.hash}; },
created(){  
    this.listener=()=> this.hashState= window.location.hash; 
    window.addEventListener("hashchange", this.listener);
},
unmounted(){ window.removeEventListener("hashchange", this.listener); },
render(){
	var name="";
    if(this.hashState!==this.hash){name="hidden"}
    return <div class={name}> {this.$slots.default()} </div>; // div containing nested components
},
}; 



