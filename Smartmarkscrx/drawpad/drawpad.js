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