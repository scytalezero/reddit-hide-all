// ==UserScript==
// @name          Reddit Hide All
// @namespace     http://ligature.me
// @version       1.0.1
// @description   Adds a button to Reddit that hides all posts on the current screen.
// @homepageURL   https://github.com/scytalezero/reddit-hide-all
// @updateURL     https://github.com/scytalezero/reddit-hide-all/raw/master/reddit-hide-all.user.js
// @downloadURL   https://github.com/scytalezero/reddit-hide-all/raw/master/reddit-hide-all.user.js
// @author        ScytaleZero
// @match         https://www.reddit.com/*
// @match         http://www.reddit.com/*
// @grant         none
// ==/UserScript==

/* jshint asi: true, esnext: true */
(function() {
  'use strict'
  
  //Reddit seems to be rate-limited or something. A 400ms delay seems to work.
  function hidePump(elements) {
    if (elements.length > 0) {
      elements.shift().click()
      setTimeout(() => hidePump(elements), 400)
    }
  }
  
  if ($(".hide-button").length > 0) {
    const $hideButton = $("<a>hide page</a>")
        .attr({
          "href": "#",
          "id": "hide-all"
        })
        .click(function() {
          hidePump($(".hide-button a").toArray())
        })
    $("#header-bottom-right")
      .prepend(`<span class="separator">|</span>`)
      .prepend($hideButton.clone(true))
    $(".nextprev")
      .append($hideButton)
  }

})()
