function Airport() {
  this.hangar = [];
  this.capacity = 5;
  this.weather = new Weather;
};

Airport.prototype.land = function(plane) {
  if(this.isFull()) {
    throw new Error("Airport is full");
  } else if(this.weather.isStormy()) {
    throw new Error("Weather is too stormy");
  } else {
    plane.land();
    this.hangar.push(plane);
  };
};

Airport.prototype.release = function(plane) {
  plane.takeOff()
  index = this.hangar.indexOf(plane);
  this.hangar.splice(index, 1)
};

Airport.prototype.isFull = function() {
  return (this.hangar.length === this.capacity)
};









// Song.prototype.persistFavoriteStatus = function(value) {
//   // something complicated
//   throw new Error("not yet implemented");
// };