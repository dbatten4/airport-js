describe("Airport", function() {
  var airport;
  var plane;


  beforeEach(function() {
    airport = new Airport;
    plane = {};
  });

  it("Should be able to accept a plane", function() {
    airport.land(plane);
    expect(airport.hangar).toContain(plane);
  });

  it("Should not be able to accept a plane if the aiport is full", function() {
    for(var i=0; i < airport.capacity; i++){
      plane = {};
      airport.land(plane);   
    };
    plane = {};  
    expect(function() { airport.land(plane); }).toThrowError("Airport is full");
  });

});