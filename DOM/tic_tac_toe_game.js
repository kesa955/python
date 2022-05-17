
var restart = document.getElementById('b')
console.log(restart);
var squares = document.querySelectorAll('td');
console.log(squares.length);
function clearBoard(){
  for(var i=0;i< squares.length ;i++){
    squares[i].textContent = '';
  }
}

restart.addEventListener('click',clearBoard);
// var cell1 = document.querySelector('#one');
// cell1.addEventListener('click',function(){
//   if(cell1.textContent=="")cell1.textContent = 'X';
//   else if(cell1.textContent=="X")cell1.textContent = 'O';
//   else cell1.textContent = '';
// })
function change(){
  if(this.textContent=="")this.textContent = 'X';
 else if(this.textContent=="X")this.textContent = 'O';
 else this.textContent = '';
}
for(var i=0;i<squares.length;i++){
  squares[i].addEventListener('click',change);
}
