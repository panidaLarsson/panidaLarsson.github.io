$('article p').hide();
$('h1').click(function(){
  $(this).next().fadeToggle();
})
