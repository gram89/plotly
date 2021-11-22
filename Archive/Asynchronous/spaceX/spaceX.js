const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

//d3.json(url).then(console.log(receivedData.map(spaceXlocation => spaceXlocation.location)));

// let receivedData = d3.json(url);

// console.log(receivedData);

// let loc = receivedData.map(lat => lat.location);

// console.log(loc);
