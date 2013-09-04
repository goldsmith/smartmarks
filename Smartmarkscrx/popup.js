// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr. In this
 * case, kittens!
 *
 * @type {string}
 */
 var QUERY = 'kittens';

 var marks = {
  opentodo: function() {
    chrome.tabs.create({url:"todo/todo.html"})
  },
  opennote: function() {
    chrome.tabs.create({url:"notepad/notepad.html"})
  },
  openwatch: function() {
    chrome.tabs.create({url:"stopwatch/stopwatch.html"})
  },
  opentimer:function(){
    chrome.tabs.create({url:"timer/timer.html"})
  },
  opendraw:function(){
    chrome.tabs.create({url:"drawpad/drawpad.html"})
  }
};

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {  
 document.getElementById("todo").addEventListener('click',
   todoHandler);
 document.getElementById("note").addEventListener('click',
   noteHandler);
 document.getElementById("watch").addEventListener('click',
   watchHandler);
 document.getElementById("timer").addEventListener('click',
   timerHandler);
  document.getElementById("draw").addEventListener('click',
   drawHandler);
}); 
function drawHandler(e) {   marks.opendraw(); }
function timerHandler(e) {   marks.opentimer(); }
function todoHandler(e) {   marks.opentodo(); }
function noteHandler(e) {   marks.opennote(); }
function watchHandler(e) {   marks.openwatch(); }