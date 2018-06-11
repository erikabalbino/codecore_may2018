class Vector {

    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    };
    
    plus(validVector) {
        return new Vector(this.x + validVector.x, this.y + validVector.y, this.z + validVector.z);
    };
    
    minus(vector){
        return new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    };
    magnitude(){
        return Math.sqrt((this.x)*(this.x) + (this.y)*(this.y) + (this.z)*(this.z))
    }
}