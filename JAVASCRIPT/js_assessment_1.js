var firstname = prompt("enter your first name:");
var lastname = prompt("enter your last name:");
var age = +prompt("enter your age:");
var height = +prompt("enter your height in centimeters");
var petname = prompt("enter your pet name:");
if(firstname[0]===lastname[0] && age>=20 && age<=30 && height>=170 && petname[petname.length-1]=="y"){
  console.log("Welcome" + firstname + " " + lastname + ", now you're a spy");
}
