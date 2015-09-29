describe("Airport", function() {
  var airport;
  var plane;


  beforeEach(function() {
    airport = new Airport;
    plane = {
    land : function(){
        return true
    },
    takeOff : function(){
      return true
    }
    };
  });

  it("Should be able to accept a plane", function() {
    airport.land(plane);
    expect(airport.hangar).toContain(plane);
  });

  it("Should not be able to accept a plane if the aiport is full", function() {
    for(var i=0; i < airport.capacity; i++){
      airport.land(plane);
    };
    expect(function() { airport.land(plane); }).toThrowError("Airport is full");
  });

  it("Should be able to release a plane", function() {
    airport.land(plane);
    airport.release(plane);
    expect(airport.hangar).not.toContain(plane);
  });

});