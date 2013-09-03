Smartmarks
==========

.. image:: logo.gif  

**Smartmarks** is a collection of micro tools and utilities that run from your URL bar, usin the Data URI scheme to create a tiny html + javascript + css page that can be bookmarked and then loaded instantly whenever you need them.

Click the demo link to try out Smartmarks, or click the raw link and paste the source on the page (should start with "data:text/html") into the URL bar to bookmark them.

The Smartmarks
--------------

**Drawpad** (`demo <https://rawgithub.com/goldsmith/smartmarks/master/drawpad/drawpad.html>`__)(`raw <https://raw.github.com/goldsmith/smartmarks/master/drawpad/drawpad.min.html>`__)

A minimalistic sketchpad that you can use to draw simple sketches and mockups (inspired heavily by/stolen from `Daniel Fernandez <http://dfernandez.me/articles/3%20-%20drawing%20bookmarklet/>`__)

**Notepad** (`demo <https://rawgithub.com/goldsmith/smartmarks/master/notepad/notepad.html>`__)(`raw <https://raw.github.com/goldsmith/smartmarks/master/notepad/notepad.min.html>`__)

A clean and simple place to jot some thoughts down. Use keyboard shortcuts (ctrl+b, ctrl+i, etc) for bold, italics, and other formatting.

**Stopwatch** (`demo <https://rawgithub.com/goldsmith/smartmarks/master/stopwatch/stopwatch.html>`__)(`raw <https://raw.github.com/goldsmith/smartmarks/master/stopwatch/stopwatch.min.html>`__)

Keep track of how much time has passed to the millisecond. 

**Timer** (`demo <https://rawgithub.com/goldsmith/smartmarks/master/timer/timer.html>`__)(`raw <https://raw.github.com/goldsmith/smartmarks/master/timer/timer.min.html>`__)

A countdown timer that sounds and alarm and triggers an alert (to switch context) when it is finished. 

**Todo** (`demo <https://rawgithub.com/goldsmith/smartmarks/master/todo/todo.html>`__)(`raw <https://raw.github.com/goldsmith/smartmarks/master/todo/todo.min.html>`__)

Super speedy todo list utlity which let you add, complete, and remove tasks.

Easy Install
------------
Drag these to your bookmarks bar to keep the Smartmarks for offline use:
(`Drawpad <data:text/html,
<html> <head> <link rel="shortcut icon" href="data:image/gif;base64,R0lGODlhUQBfAPQAAAzykQAzmQAjaAAodwAkawAmcQAmcgAmcwAoeAApegAndgAndAAndQAkbQAlbwAoeQAlcAAlbgAjaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAksAQAALAAAAABRAF8AAAX/ICCOZGmeaKqubOu+cCzPdG3feK5HfET8BIlwKAQSerok4HCAOAPQqHRKhToNyhmDwax6v1UDI9tSbMHotHRMPine6nh80B4h7vJ8HNF+IPSAcUoJDw+Bh2k6CYuIjWA4iwmOk143D5KUmVM1hZqeUjOdn6MyAwOjqAExpqmoL6ykqS8Lmiu1LrSULpktC7mNMbosDsIvf44txMgyk8nNMg3LK8qINNHSKQTYMNfAKj/bL93V388z5inFMeOBLeh1NuHwNPLzzI1b9vGTbPr3kwUC+oPxKWCBgSxSGUR4ohWUhQxHOJRSwAAWhhOpMEGYscqBBf46elGgT+RIeya9pPCBl7ISy5ZU5sGM+XJmlJo2oeDMudNmxJ9AgwodmkWA0aNIkypdupSoiFZOJX6KWuIWVTvqrgLgZYIA069Kc2SVSu7GMW9a06pdy7at27dOwcpFamPuXBUHxrpgVO+pXhUI+KJFkZcSnRZ3zg5G4SngDxI/LFq0muLUKCPgprrLWXaFZc564IoeTbq06dOoU6tezZqt3dd0r3pyC6i17du4SYcAADs="> </head> <style>*{margin:0;padding:0}html,body{cursor:pointer;width:100 %;height:100 %}canvas{display:block}</style> <script>
        /* 
        totally stolen from
        http://dfernandez.me/articles/3%20-%20drawing%20bookmarklet/
        */
		window.onload = function () {
    		var myCanvas = document.getElementById("myCanvas");
    		var data = document.getElementById("data");
    		var curColor = "#000";
    		if (myCanvas) {
    		    var isDown = false;
    		    var ctx = myCanvas.getContext("2d");
    		    var canvasX, canvasY;
    		    var img = new Image;
    		    img.onload = function () {
    		        ctx.drawImage(img, 0, 0);
    		    };
    		    img.src = data.value;
    		    myCanvas.addEventListener("mousedown", function (e) {
    		        isDown = true;
    		        ctx.beginPath();
    		        canvasX = e.pageX - myCanvas.offsetLeft;
    		        canvasY = e.pageY - myCanvas.offsetTop;
    		        ctx.moveTo(canvasX, canvasY);
    		    }, false);
    		    myCanvas.addEventListener("mousemove", function (e) {
    		        if (isDown != false) {
    		            canvasX = e.pageX - myCanvas.offsetLeft;
    		            canvasY = e.pageY - myCanvas.offsetTop;
    		            ctx.lineTo(canvasX, canvasY);
    		            ctx.strokeStyle = curColor;
    		            ctx.stroke();
    		        }
    		    }, false);
    		    myCanvas.addEventListener("mouseup", function (e) {
    		        isDown = false;
    		        ctx.closePath();
    		        data.value = myCanvas.toDataURL();
    		    }, false);
    		}
    		window.addEventListener("resize", resizeCanvas, false);
		
    		function resizeCanvas() {
    		    myCanvas.width = window.innerWidth;
    		    myCanvas.height = window.innerHeight;
    		}
    		resizeCanvas();
		};
	</script> <body> <input type="hidden" id="data"/> <canvas id="myCanvas">Sorry, your browser does not support canvas technology.</canvas> </body> </html>>)

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
