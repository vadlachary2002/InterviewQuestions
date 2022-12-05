var arr=[1,2,3,4,5,6,7,8,10];
var hash={};
function check(){
  for(var i=0;i<9;i++){
    if(hash[10-arr[i]]){
      console.log(arr[i],10-arr[i]);
    }
    hash[arr[i]]=arr[i];
  }
}
check();
