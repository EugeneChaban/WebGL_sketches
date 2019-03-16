// 3D vector class
// By Eugene Chaban    <chaban.genya@gmail.com>

class Vector3 {
	constructor(x, y, z) {
		this.e = new Float32Array(3); // elements
		this.x = x;
		this.y = y;
		this.z = z;
	}

	add(v) {
		for (let i = 0; i < 3; i++) {
			this.e[i] += v.e[i];
		}
		return this;
	}
	
	subtract(v) {
		for (let i = 0; i < 3; i++) {
			this.e[i] -= v.e[i];
		}
		return this;
	}
	
	scale(s) {
		for (let i = 0; i < 3; i++) {
			this.e[i] *= s;
		}
		return this;
	}

	compare(v, e = 1e-3) {
		for (let i = 0; i < 3; i++) {
			if (!compareFloat(this.e[i], v.e[i], e)) return false;
		}
		return true;
	}
	
	copy(v) {
		for (let i = 0; i < 3; i++) {
			this.e[i] = v.e[i];
		}
		return this;
	}
	
	dot(v) {
		let sum = 0;
		for (let i = 0; i < 3; i++) {
			let a = this.e[i] * v.e[i];
			sum += a;
		}
		return sum;
	}
	
	cross(v) {
		let ax = this.x;
		let ay = this.y;
		let az = this.z;
		let bx = v.x;
		let by = v.y;
		let bz = v.z;
		this.x = ay * bz - by * az;
		this.y = az * bx - bz * ax;
		this.z = ax * by - bx * ay;
		return this;
	}
	
	get norm() {
		return Math.sqrt(this.dot(this));
	}
	
	normalize() {
		let n = this.norm
		if (n !== 0) {
			this.scale(1 / n);
		}
		return this
	}
	
	get x() { return this.e[0]; }
	get y() { return this.e[1]; }
	get z() { return this.e[2]; }

	set x(val) { this.e[0] = val; }
	set y(val) { this.e[1] = val; }
	set z(val) { this.e[2] = val; }
};


