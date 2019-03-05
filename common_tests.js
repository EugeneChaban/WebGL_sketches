function println(text) {
	const tout = document.getElementById("out");
	if (tout) {
		let t = text;
		if (t === undefined) {
			t = "";
		}
		tout.innerHTML += text + "<br>";
	}
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
		if (Math.abs(tstRad) >= Math.abs(tstDeg)) {
			return false;
		}
		if (!compareFloat(deg, tstDeg)) {
			return false;
		}
	}
	return true;
}

function testVectorScale() {
	const v1 = new Vector3(1, 2, 3);
	const v2 = new Vector3();
	v2.copy(v1);
	v2.scale(2);
	v2.scale(1/2);
	return v1.compare(v2);
}

function main() {
	const tests = ["CompareFloat", "DegRad", "VectorScale"];
	for (const testName of tests) {
		const res = eval("test" + testName + "();");
		const resColor = res ? "green" : "red";
		const resText = res ? "OK" : "Failed";
		println(testName + ": <span style='color: " + resColor + ";'>" + resText + "</span>");
	}
}

