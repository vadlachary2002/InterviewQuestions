var t=-1;
var stack=[];
var result=document.getElementById('result');
var output=document.getElementById('output');
function showStack(){
  console.log(stack);
  console.log(t);
  result.innerHTML="";
  for(var i=0;i<=t;i++){
    var tag = document.createElement("p");
    var text = document.createTextNode(stack[t-i]);
    tag.appendChild(text);
    result.appendChild(tag);
  }



}

console.log(t);
function push(){
  var ele= document.getElementById('inp').value;
  if(!ele){
    window.alert("please enter a value");
    return ;
  }
  t++;
  stack[t]=ele;
  var tag = document.createElement("p");
  var text = document.createTextNode("pushed"+ele);
  tag.appendChild(text);
  output.appendChild(tag);
  showStack();
}
function pop(){
  if(t==-1){
    window.alert("stack is underflow");
    status.innerHTML="";
    showStack();
    return;
  }
  var p=stack[t];
  var tag = document.createElement("p");
   var text = document.createTextNode("poped"+p);
   tag.appendChild(text);
   output.appendChild(tag);
   t--;
  showStack();
}
function peek(){
  if(t==-1){
    window.alert("stack is underflow");
    status.innerHTML="";
    showStack();
    return;
  }
  var p=stack[t];
  var tag = document.createElement("p");
   var text = document.createTextNode("top element in stack is"+p);
   tag.appendChild(text);
   output.appendChild(tag);
  showStack();
}
