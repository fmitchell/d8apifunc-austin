
;(function (Reveal) {
  'use strict';

  var Phase2Branding = function() {
    var brandingElement = document.createElement('div');
    brandingElement.className = "phase2-branding default";
    var container = document.getElementsByClassName('reveal');
    container = container[0];
    container.appendChild(brandingElement);

    Reveal.addEventListener('slidechanged', function(event) {
      updateBranding(event.currentSlide);
    });

    // Initial run
    updateBranding(Reveal.getCurrentSlide());

    function updateBranding(currentSlide) {
      var slideClassNames = currentSlide.className.split(' ');
      var triggers = ['branding-front', 'branding-hidden'];
      var brandingElementNewClass = 'phase2-branding default';

      for (var i in triggers) {
        if (slideClassNames.indexOf(triggers[i]) !== -1) {
          var newSegment = triggers[i].replace('branding-', '');
          brandingElementNewClass = "phase2-branding " + newSegment;
        }
      }

      brandingElement.className = brandingElementNewClass;
    }
  };

  var branding = new Phase2Branding();
}(Reveal));