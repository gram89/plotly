d3.json("samples.json").then(function(data){
    console.log(data)
});

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

d3.json("samples.json").then(function(data) {
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b-a);
    console.log(wfreq);
    filteredWfreq = wfreq.filter(element => element!= null);
    console.log(filteredWfreq);
});

//object.entries

researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};

console.log(Object.entries(researcher1));

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key,value]) => { console.log(key +": "+ value)});
});

d3.selectAll("body").on("change",updatePage);

function updatePage() {
    let dropdownMenu = d3.selectAll("#selectOption").node();
    let dropdownMenuId = dropdownMenu.id;
    let selectedOption = dropdownMenu.value;

    console.log(dropdownMenuId);
    console.log(selectedOption);
    console.log(d3.selectAll("#menu").node().id);
};
