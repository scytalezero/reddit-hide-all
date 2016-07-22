// ==UserScript==
// @name          Reddit Hide All
// @namespace     http://ligature.me
// @version       1.0.0
// @description   Adds a button to Reddit that hides all posts on the current screen.
// @homepageURL   https://github.com/scytalezero/reddit-hide-all
// @updateURL     https://github.com/scytalezero/reddit-hide-all/raw/master/reddit-hide-all.user.js
// @downloadURL   https://github.com/scytalezero/reddit-hide-all/raw/master/reddit-hide-all.user.js
// @author        ScytaleZero
// @match         https://www.reddit.com/*
// @match         http://www.reddit.com/*
// @grant         none
// ==/UserScript==

if ($(".hide-button").length > 0) {
  $("#header-bottom-right")
    .prepend(`<span class="separator">|</span>`)
    .prepend($("<a>hide page</a>")
      .attr({
        "href": "#",
        "id": "hide-all"
      })
      .click(() => {
        $(".hide-button a").trigger("click")
      })
    )	
}
