//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
//Plotly.newPlot("samplePlot",[{x:[5,10,15], y:[15,25,30]}]);
// Bar charts
// let trace = {
//     x:["burrito","pizza","chicken"],
//     y:[10,20,5],
//     type: "bar"
// };
// let layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of respondents"}
// };
// Plotly.newPlot("plotArea",[trace], layout);

// Skill Drill Bar chart

// let trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// };
// let layout = {
//     title: "Drink preferences",
//     xaxis: {title:"Drinks"},
//     yaxis: {title: "Percent of drinks ordered"}
// };
// Plotly.newPlot("plotArea",[trace],layout);

//Pie Chart

// let trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "pie"
// };
// let layout = {
//     title: "Drink preferences",
//     xaxis: {title:"Drinks"},
//     yaxis: {title: "Percent of drinks ordered"}
// };
// Plotly.newPlot("plotArea",[trace],layout);

let words =["abc","def","ghi"];
let caps = words.map(words => words.toUpperCase());
console.log(caps);

let numbers = [1,2,3,4,5];
let plusFive = numbers.map(function(five){
    return five+5;
});
console.log(plusFive);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);
