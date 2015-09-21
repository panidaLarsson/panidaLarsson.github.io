$('article p').hide();
$('h2').click(function(){
  $(this).next().fadeToggle();
})
