$('h1').click(function(){
  $(this).text("I was changed")
})
$('li').click(function(){
  console.log('List elements')
})
$('input').keypress(function(event){
  console.log(event);
})
