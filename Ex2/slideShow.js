var index=1; 
function move(movement){
var imageC=document.getElementById('image');
  index=index+movement;
  if(index>5){
    index=1;
}
else if(index<1){
    index=5;
}
  if(index==1){
      imageC.src="butter1.jpg";
  }
  else if(index==2){
      imageC.src="butter2.jpg";
  }
  else if(index==3){
      imageC.src="butter3.jpg";
  }
  else if(index==4){
      imageC.src="butter4.jpg";
  }
  else if(index==5){
      imageC.src="butter5.jpg";
  }
}