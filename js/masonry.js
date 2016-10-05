var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
  transitionDuration: '0.8s';
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
    gutter: 0
});

// init Masonry
var $grid = $('.grid').masonry({
  // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});
