Smartmarks
==========

.. image:: logo.gif  

**Smartmarks** is a collection of micro tools and utilities that run from your URL bar, usin the Data URI scheme to create a tiny html + javascript + css page that can be bookmarked and then loaded instantly whenever you need them.

Click on one of the links below and copy and paste the raw source into the URL bar to try them out.

The Smartmarks
--------------

* `Drawpad <https://raw.github.com/goldsmith/smartmarks/master/drawpad/drawpad.min.html>`__

A minimalistic sketchpad that you can use to draw simple sketches and mockups (inspired heavily by/stolen from `Daniel Fernandez <http://dfernandez.me/articles/3%20-%20drawing%20bookmarklet/>`__)

* `Notepad <https://raw.github.com/goldsmith/smartmarks/master/notepad/notepad.min.html>`__

A clean and simple place to jot some thoughts down. Use keyboard shortcuts (ctrl+b, ctrl+i, etc) for bold, italics, and other formatting.

* `Stopwatch <https://raw.github.com/goldsmith/smartmarks/master/stopwatch/stopwatch.min.html>`__

Keep track of how much time has passed to the millisecond. 

* `Timer <https://raw.github.com/goldsmith/smartmarks/master/timer/timer.min.html>`__

A countdown timer that sounds and alarm and triggers an alert (to switch context) when it is finished. 

* `Todo <https://raw.github.com/goldsmith/smartmarks/master/todo/todo.min.html>`__

Super speedy todo list utlity which let you add, complete, and remove tasks.

Contributing 
------------

Contributions are encouraged and welcomed! Please keep in mind the following guidelines:

- Keep styling minimal with lots of whitespace and few fonts/colors
- No external resources. Use vanilla javascript, and encode images/sounds using data URI/base64
- The utilities have minimal features for a purpose. We want to keep Smartmarks speedy, so don't go overboard on features.

To actually modify or add a new Smartmark, follow these steps:

- Install `HTML compressor <https://code.google.com/p/htmlcompressor/>`__ and `YUI Compressor <http://yui.github.io/yuicompressor/>`__ and put them in the project root directory as ``htmlcompressor.jar`` and ``yuicompressor.jar`` respectively
- Modify or create the main HTML file in a folder with the same name as the Smartmark
- Run ./minimizer.sh smartmark_name from the root directory and it will minimize and prepend "data:text/html," to the HTML file in smartmark_name into smartmark_name/smartmark_name.min.html

License
-------

MIT licensed. See the `LICENSE
file <https://github.com/goldsmith/smartmarks/blob/master/LICENSE>`__ for
full details.
