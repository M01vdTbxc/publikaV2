 module.exports = (search, code) =>
   `{
     ${search === "station" ? "stations" : "stops"
     }(name: "${code}") {
    gtfsId
    name
    code
    desc
    zoneId
    lat
    lon
    vehicleMode
    platformCode
    locationType
    stops {
      gtfsId
      name
    }
    parentStation {
      gtfsId
      name
    }
  }
}`;
