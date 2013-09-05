Smartmarks
==========

.. image:: logo.gif  

**Smartmarks** is a collection of micro tools and utilities that run from your URL bar, using the Data URI scheme to create a tiny html + javascript + css page that can be bookmarked and then loaded instantly whenever you need them.

Click one of the demo links to try out Smartmarks, or visit the `easy install <https://rawgithub.com/goldsmith/smartmarks/master/install.html>`_ page and drag the links to your bookmark bar to keep them easily accessible.

The Smartmarks
--------------

**Drawpad** (`demo <https://rawgithub.com/goldsmith/smartmarks/master/drawpad/drawpad.html>`__)

A minimalistic sketchpad that you can use to draw simple sketches and mockups (inspired heavily by/stolen from `Daniel Fernandez <http://dfernandez.me/articles/3%20-%20drawing%20bookmarklet/>`__)

**Notepad** (`demo <https://rawgithub.com/goldsmith/smartmarks/master/notepad/notepad.html>`__)

A clean and simple place to jot some thoughts down. Use keyboard shortcuts (ctrl+b, ctrl+i, etc) for bold, italics, and other formatting.

**Stopwatch** (`demo <https://rawgithub.com/goldsmith/smartmarks/master/stopwatch/stopwatch.html>`__)

Keep track of how much time has passed to the millisecond. 

**Timer** (`demo <https://rawgithub.com/goldsmith/smartmarks/master/timer/timer.html>`__)

A countdown timer that sounds and alarm and triggers an alert (to switch context) when it is finished. 

**Todo** (`demo <https://rawgithub.com/goldsmith/smartmarks/master/todo/todo.html>`__)

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
