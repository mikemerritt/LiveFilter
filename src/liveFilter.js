/*
 * liveFilter
 * http://mikemerritt.github.io/LiveFilter/
 *
 * Copyright (c) 2014 Mike Merritt
 * Licensed under the MIT license.
 */

(function($) {
  $.fn.liveFilter = function(opts) {
    opts = $.extend({}, $.fn.liveFilter.options, opts);

    return this.each(function() {
      var list = $(this);
      var items = $(this).find('li, tbody tr');
      var input = $('<input class="filter-input" type="text" placeholder="'+opts.defaultText+'">');

      // Add the filter text input
      if (opts.addInputs) { list.before(input); }

      // Hide list items by default
      if (opts.hideDefault) { list.find('li, tbody tr').hide(); }

      // Keyup event - where the magic hapens
      $('body').on('keyup', input, function() {
        var words = input.val().toLowerCase().split(' '); // Split filter text into words

        // Iterate through the list items we want to filter
        items.hide().filter(function() {
          var text = $(this).text().toLowerCase();

          // Loop through all of the words in our filter
          for (var t = 0; t < words.length; t++) { 
            if (text.indexOf(words[t]) < 0) { 
              return false; // No match if there is an unmatched word
            }
          }

          return true; // Match if there are no unmatched words

        }).show();

      });

    });
  };

  // Default Options
  $.fn.liveFilter.options = {
    delay: 0,
    defaultText: 'Type to filter:',
    noMatchesText: 'No Matches.',
    hideDefault: false,
    addInputs: true,
    zebra: {
      enabled: false,
      baseColor: false,
      altColor: false
    }
  };

}(jQuery));