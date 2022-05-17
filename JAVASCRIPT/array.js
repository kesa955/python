var arr = ["a","b","c"];
while(true){
var v = prompt("Would like to start the app");
if(v){
  var action = prompt("Would you like to add,remove,display,quit");
  if(action=="add"){
    var en = prompt("enter the name:");
    arr.push(en);
    alert("succesfully addded");
  }
  else if(action=="remove"){

    var p = prompt("enter the name to be removed");
    var index = arr.indexOf(p);
    arr.splice(index,1);
    alert("successfully removed");
  }
  else if(action=="display"){
    for(i in arr){
      alert("Students are " + arr[i]);
    }
  }
  else if(action=="quit"){
    break;
  }
  else{
    alert("enter valid option");
  }
}
else{
  alert("Thank you");
}
}
