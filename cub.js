class Cuboid {
    constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  //S = 2 (ab + bc + ac)
  get surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }

  //V = a × b × h
  get volume() {
    return this.length * this.width * this.height;
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}
