// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}
  
function logDriversByHometown(drivers, driverLocation) {
  drivers.forEach(function (driver) {
    if (driver.hometown === driverLocation) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (firstDriver, secondDriver) {
    return firstDriver.revenue - secondDriver.revenue
  })
}


