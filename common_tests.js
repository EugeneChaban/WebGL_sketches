function println(text) {
    const tout = document.getElementById("out");
    if (tout) tout.innerHTML += text + "<br>";
}

function testCompareFloat() {
    const e = 1e-5;
    const x = 100.0;
    if (!compareFloat(x, x + e*0.9, e)) {
        return false;
    }
    if (compareFloat(x, x + e*1.1, e)) {
        return false;
    }
    if (!compareFloat(Math.sqrt(2), 99/70)) {
        return false;
    }
    return true;
}

function testDegRad() {
    for (let deg of [10.0, -20.04, 30.0]) {
        let tstRad = radians(deg);
        let tstDeg = degrees(tstRad);
        if (!compareFloat(deg, tstDeg)) {
            return false;
        }
    }
    return true;
}

function main() {
    const tests = ["CompareFloat", "DegRad"];
    for (const testName of tests) {
        const res = eval("test" + testName + "();");
        const resColor = res ? "green" : "red";
        const resText = res ? "OK" : "Failed";
        println(testName + ": <span style='color: " + resColor + ";'>" + resText + "</span>");
    }
}
