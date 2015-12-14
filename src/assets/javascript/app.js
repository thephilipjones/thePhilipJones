'use strict'

// # Require JavaScript for responsive images.
// <% case site.config['picture']['markup']
//     when 'picturefill'
//       require_asset 'picturefill'
//     when 'interchange'
//       require_asset 'foundation/js/foundation/foundation.interchange'
//     end unless site.config['picture'].nil?
// %>

// # Invoke Foundation.
$(document).foundation();

$(window).load(function() {
  // # Create export dropdown
  // $('#drop-export').DropdownMenu();
  var dropdownExport = new Foundation.DropdownMenu($('#drop-export'));
  // if (dropdownExport) { console.log("Dropdown") };
});

// # Invoke highlight.js on page load.
// hljs.initHighlightingOnLoad()
