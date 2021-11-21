console.log(cityGrowths);

let sortedCities = cityGrowths.sort((a,b)=> a.Increase_from_2016 -b.Increase_from_2016).reverse();
let top5Cities = sortedCities.slice(0,7);

console.log(top5Cities);

let top5CityNames = top5Cities.map(city => city.City);

console.log(top5CityNames);

let top5pop = top5Cities.map(city => parseInt(city.Increase_from_2016));

console.log(top5pop);

let trace ={
    x: top5CityNames,
    y: top5pop,
    type: "bar"
};

let layout ={
    title: "Population increase of top 5 cities",
    xaxis: {title: "City Names"},
    yaxis: {title: "Increase from 2016"}
};

Plotly.newPlot("bar-plot",[trace],layout);
