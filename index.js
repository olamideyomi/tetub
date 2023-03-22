$(document).ready(function() {
    // Activate Bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();
  
    // Activate Bootstrap popovers
    $('[data-toggle="popover"]').popover();
  
    // Highlight the active nav item
    var navItems = $('.navbar-nav .nav-link');
    var navHeight = $('.navbar').outerHeight();
    var scrollItems = navItems.map(function() {
      var item = $($(this).attr('href'));
      if (item.length) {
        return item;
      }
    });
  
    $(window).scroll(function() {
      var fromTop = $(this).scrollTop() + navHeight;
  
      var currentSection = scrollItems.map(function() {
        if ($(this).offset().top < fromTop) {
          return this;
        }
      });
  
      currentSection = currentSection[currentSection.length - 1];
      var id = currentSection && currentSection.length ? currentSection[0].id : "";
  
      navItems.removeClass('active');
      if (id) {
        $('[href="#' + id + '"]').addClass('active');
      }
    });
  });
  