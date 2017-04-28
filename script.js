var $nav = $('li');
var $divider = $('.divider');
console.log($divider);
$nav.on('mouseenter', function(){
let $divide = $(this).children('.divider');
console.log($($divide));
// console.log($divide);
$divide.fadeTo(600, 100);
});
$nav.on('mouseleave', function(){
  $divider.fadeTo(100, 0);
});
