var $nav = $('li');
var $divider = $('.divider');
console.log($divider);
$nav.on('mouseenter', function(){
//   let $divider = $('<div class="divider"></div>');
// $(this).append($divider);
$divider.fadeIn(1000);
});
$nav.on('mouseleave', function(){
  current = $(this).children($divider);
  console.log(current);
  $(current).fadeTo(400, 0);
});
