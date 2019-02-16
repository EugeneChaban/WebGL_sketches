//split lines
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

//comparing Float
function compareFloat(a, b, e = 0.001) {
    return Math.abs(a - b) < e;
}


