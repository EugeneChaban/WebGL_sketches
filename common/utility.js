// By Eugene Chaban    <chaban.genya@gmail.com>


// split text into lines, handling different newline formats
function splitLines(text) {
	return text.split(/\r?\n|\r/); 
}

// convert degrees to radians
function radians(degs) {
	return degs * (Math.PI / 180.0);
}

// converts radians to degrees
function degrees(rads) {
	return rads * (180.0 / Math.PI);
}

// comparing floating-point numbers for near-equality
function compareFloat(a, b, e = 0.001) {    // e defines acceptable error
	return Math.abs(a - b) < e;
}
