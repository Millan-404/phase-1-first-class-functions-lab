// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

// missed adding const and invoking a function drives for return 1st and last

/*function returnFirstTwoDrivers(){
    return drivers.slice(0,2);
    
    
};



function returnLastTwoDrivers(){
    return drivers.slice(-2);
   
};
function selectingDrivers(){
    returnFirstTwoDrivers();
    returnLastTwoDrivers();
    
    
};

function createFareMultiplier() {
    fareMultiplier()
    const fareMultiplier = createFareMultiplier(2);
};
*/

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };

  const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]; // calling functions from previous declaration

const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn) {
  return driversToReturn(drivers);
};

