function Vector(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
};

Vector.prototype.plus = function (validVector){
    return new Vector(this.x + validVector.x, this.y + validVector.y, this.z + validVector.z);
};

Vector.prototype.minus = function (vector){
    return new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
};
Vector.prototype.magnitude = function (){
    return Math.sqrt((this.x)*(this.x) + (this.y)*(this.y) + (this.z)*(this.z))
}