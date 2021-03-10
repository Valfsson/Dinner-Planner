function promiseNoData(promise, data, error) {
 if(promise==null && data==null && error==null){
   return <span>no data</span> }

if(promise!==null && data===null && error===null){
    return  <img src="http://www.csc.kth.se/~cristi/loading.gif"></img>
    }

 if(promise!==null && data===null && error!==null){
    return  <span>some error </span>  }
 

}
