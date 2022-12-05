var arr=[1,2,3,4,5,7,8,10];
var hash={}
function check(){
  var block= document.getElementById('block');
  var row=0,col=0;
  for(var i=0;i<8;i++){
    col=row;
    for(var j=0;j<8;j++){
      if(col==0){
        var div=document.createElement("div");
        block.appendChild(div);
        div.className="black";
      }else{
        var div=document.createElement("div");
        block.appendChild(div);
        div.className="white";
      }
      col=1-col;
    }
    row=1-row;
  }
}
check();
function width(){
  window.alert(screen.width);
}
