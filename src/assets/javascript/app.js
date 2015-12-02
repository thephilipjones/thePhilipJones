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

// # Invoke highlight.js on page load.
// hljs.initHighlightingOnLoad()
