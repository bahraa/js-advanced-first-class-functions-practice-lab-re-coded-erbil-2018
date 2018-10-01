


function logDriverNames(drivers){
 drivers.forEach(function (driver,index,array){
   console.log(driver.name)
 })
}
const logDriversByHometown= function(drivers, location){
  drivers.forEach(function (el, i, arr){
    if(el.hometown==location)
    console.log(el.name);
})
}

const driversByRevenue =function(drivers){
 
  return drivers.slice().sort(function(n1,n2){
    return n1.revenue-n2.revenue;
  })
}



















