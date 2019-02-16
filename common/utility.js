//split lines
function splitLines(text) {
    return text.split(/\r?\n|\r/);
}

let g_pntText = null;
let g_polText = null;

function start() {
    const pntLines = splitLines(g_pntText);
    const polLines = splitLines(g_polText);
    const tblk = document.getElementById("text_block");
    if (tblk) {
        const pntInfo = `pnt: ${pntLines.length} lines`;
        const polInfo = `pol: ${polLines.length} lines`;
        tblk.innerHTML = `${pntInfo}<br>${polInfo}`;
    }
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


