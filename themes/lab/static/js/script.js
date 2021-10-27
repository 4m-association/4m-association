$(function() {
    // anchor with a fixed menu
    if (location.hash) {
        var offset = $(location.hash).offset();
        if (offset) {
          setTimeout(function() {
              window.scrollTo(offset.left, offset.top - ACE_EDITOR_SCROLL_TOP_MARGIN);
          }, 1);
        }
    }

    // usage of http://dimsemenov.com/plugins/magnific-popup/
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });
});