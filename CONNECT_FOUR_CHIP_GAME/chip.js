var player1 = prompt("ENter player one name, color isblue");
var player1color = 'rgb(86, 151, 255)';

var player2 = prompt("ENter player two name, color is red")
var player2color = 'rgb(237, 45, 73)';

var game_on = true;
var table = $('table tr');

function changeColor(rowIndex,colIndex,color){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

function returnColor(rowIndex,colIndex){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex){
  var colorReport = returnColor(5,colIndex);
  for(var row=5;row>-1;row--){
    colorReport = returnColor(row,colIndex);
    if(colorReport === 'rgb(128, 128, 128)'){
      return row;
  }
}
}

function colorMActhCheck(one,two,three,four){
  return (one === two && one===two && one===four && one!=='rgb(128, 128, 128)' && one!== undefined)
}


function horizontalcheck(){
  for(var row=0;row<6;row++){
    for(var col=0;col<4;col++){
      if(colorMActhCheck(returnColor(row,col),returnColor(row,col+1),returnColor(row,col+2),returnColor(row,col+3))){
        console.log("Horizontal")
        console.log("Win at row" + row + "and col at" + col);
        return true;
      }
      else{
        continue;
      }
    }
  }
}

function verticalcheck(){
  for(var col=0;col<7;col++){
    for(var row=0;row<4;row++){
      if(colorMActhCheck(returnColor(row,col),returnColor(row+1,col),returnColor(row+2,col),returnColor(row+3,col))){
        console.log("Vertical")
        console.log("Win at row" + row + "and col at" + col);
        return true;
      }
      else{
        continue;
      }
    }
  }
}

function diagonalcheck(){
  for(var col=0;col<5;col++){
    for(var row=0;row<7;row++){
      if(colorMActhCheck(returnColor(row,col),returnColor(row+1,col+1),returnColor(row+2,col+2),returnColor(row+3,col+3))){
        console.log("Diagonal");
        console.log("row and col " + row + " " + col);
        return true;
      }
      else if(colorMActhCheck(returnColor(row,col),returnColor(row-1,col+1),returnColor(row-2,col+2),returnColor(row-3,col+3))){
        console.log("Diagonal");
        console.log("row and col " + row + " " + col);
        return true;
      }
      else{
      }
      continue;
    }
  }
}

var currentplayer = 1;
var currentname = player1;
var currentcolor = player1color;

$('h3').text(player1+" it is your turn, pick a cell ")

$('.board button').on('click',function(){
  var col = $(this).closest('td').index();

  var bottomavail = checkBottom(col);

  changeColor(bottomavail,col,currentcolor);

  if(horizontalcheck() || verticalcheck() || diagonalcheck()){
    $('h1').text(currentname + "you have won!")
    $('h3').fadeOut('fast');
    $('h2').fadeOut('fast');


  }

  currentplayer = currentplayer * -1;

  if(currentplayer === 1){
    currentname = player1;
    $('h3').text(currentname + "it is your turn");
    currentcolor = player1color;

  }
  else{
    currentname = player2;
    $('h3').text(currentname + "it is your turn");
    currentcolor = player2color;
  }
})
