//Add Hover effect to menus
jQuery('ul.nav li.dropdown').hover(function() {
  if ($(window).width() > 768) {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).show();
  }
}, function() {
  if ($(window).width() > 768) {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).hide();
  }
});