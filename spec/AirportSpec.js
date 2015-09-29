describe("Airport", function() {
  var airport;
  var plane;
  var weather;


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
    // var weather = jasmine.createSpyObj('weather', ['isStormy']);
    // weather.isStormy.and.callFake(function() {
    //   return false;
    // });
    weather = {
      isStormy : function(){
        return false;
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

  it("Should not be able to land a plane if it's stormy", function(){
    spyOn(weather, "isStormy").and.returnValue(true);
    expect(weather.isStormy()).toBe(true);
    expect(function() { airport.land(plane); }).toThrowError("Weather is too stormy");
  });

});