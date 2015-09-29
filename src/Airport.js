function Airport() {
  this.hangar = [];
  this.capacity = 5;
};

Airport.prototype.land = function(plane) {
  if(this.isFull()) {
    throw new Error("Airport is full");
  } else {
    this.hangar.push(plane);
  };
};

Airport.prototype.isFull = function() {
  return (this.hangar.length === this.capacity)
};








// Song.prototype.persistFavoriteStatus = function(value) {
//   // something complicated
//   throw new Error("not yet implemented");
// };