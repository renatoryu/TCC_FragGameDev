 jQuery(document).on('click', '.navbar-nav > .dropdown', function(e) {
   e.stopPropagation();
 });
 $(".dropdown-submenu").click(function() {
   $(".dropdown-submenu > .dropdown-menu").toggleClass("show");
 });