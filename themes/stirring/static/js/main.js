// Lazyload http://www.appelsiini.net/projects/lazyload
// Magnific Popup Documentation http://dimsemenov.com/plugins/magnific-popup/
$(document).ready(function() {
  $('.index-article-content').each(function() {
    $(this).find('a > img').unwrap(); // remove href in index template
  });
  $('.post-content img, .gallery img').each(function() {
    $(this).attr("data-original", $(this).attr("src"));
    $(this).removeAttr("src");
  });
  $('.post-content img, .gallery img').lazyload({
    threshold: 250
    //effect: "fadeIn"
  });
  $('.post-content').each(function() {
    $(this).find('a:not([href$=".html"]) > img').parent().magnificPopup({
      type: 'image',
      overflowY: 'scroll',
      gallery: {
        enabled: true,
        preload: [1,3]
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out' // CSS transition easing function
      },
      retina: {
        ratio: 1, // Increase this number to enable retina image support.
        // Image in popup will be scaled down by this number.
        // Option can also be a function which should return a number (in case you support multiple ratios). For example:
        // ratio: function() { return window.devicePixelRatio === 1.5 ? 1.5 : 2  }

        replaceSrc: function(item, ratio) {
          return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
        } // function that changes image source
      }
    });
  });
  $('#button-open-sidebar').click(function() {
    // mutliple id selector, add pushed
    $('#blog,#header,#sidebar,#main,#button-close-sidebar').each(function(){
      $(this).addClass("pushed");
    });
  });
  $('#button-close-sidebar').click(function() {
    // mutliple id selector, remove pushed
    $('#blog,#header,#sidebar,#main,#button-close-sidebar').each(function(){
      $(this).removeClass("pushed");
    });
  });

});
