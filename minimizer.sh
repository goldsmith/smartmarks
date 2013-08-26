#!/bin/bash

# make sure that an argument was supplied
if [ $# -eq 0 ]
  then
    echo "No Smartmark directory supplied."
    exit 1
fi

# help command
if [ $1 = "-h" ]; then
	echo ""
	echo "Convert HTML file into minimized Data URI bookmarklet. Usage:"
	echo ""
	echo "minimizer.sh FILE 		Minimize FILE/FILE.html into FILE/FILE.min.html"
	echo "minimizer.sh -h 		Get help"
	echo ""
	exit 0
fi

FILE=$1

# make sure that the argument is a valid directory
if [ ! -d $FILE ]; then
    echo "Smartmark directory '$FILE' not found in current working directory."
    exit 1
fi

# make sure that there is a file inside of the directory
if [ ! -f $FILE/$FILE.html ]; then
	echo "Directory '$FILE' does not contain a HTML file called $FILE.html"
	exit 1
fi

# minimize the file using htmlcompressor
java -jar htmlcompressor.jar --compress-css -o $FILE/$FILE.min.html $FILE/$FILE.html

# prepend "data:text/html," so that the page works in the URL bar
echo "data:text/html," | cat - $FILE/$FILE.min.html > tempfile && mv tempfile $FILE/$FILE.min.html

exit 0