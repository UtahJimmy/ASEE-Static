
/////////////////////////////////////
//
//            VARIABLES
//
/////////////////////////////////////

var startZoom = 11;
var maxZoom = startZoom;
var minZoom = startZoom;
var slcLocation = [40.710,-111.870];

var markerRadius = 6;
var circMarker1Options = {
    radius:markerRadius,
    color:'#000000',
    weight:2,
    fill:true,
    fillColor:'#ffffff',
    fillOpacity: 0.9,
    interactive:true
};

var circMarker2Options = {
    radius:markerRadius,
    color:'#000000',
    weight:2,
    fill:true,
    fillColor:'#fea211',
    fillOpacity: 0.9,
    interactive:true
};

var clickOn = "#3e79d2";
var clickOff = "#eeede9";




var mapSettings = {
    zoomControl:false
};

//set map view location and zoom level
var fireworksMap = L.map('tab1-map',mapSettings).setView(slcLocation,startZoom);
var wildfireMap  = L.map('tab2-map',mapSettings).setView(slcLocation,startZoom);
var sandstormMap = L.map('tab3-map',mapSettings).setView(slcLocation,startZoom);
var inversionMap = L.map('tab4-map',mapSettings).setView(slcLocation,startZoom);


// read data from CSV files
var fireworkSensorPositions  = readTextFile("data/fireworkSensors.csv");
var wildfireSensorPositions  = readTextFile("data/wildfireSensors.csv");
var sandstormSensorPositions = readTextFile("data/sandstormSensors.csv");
var inversionSensorPositions = readTextFile("data/inversionSensors.csv");

// convert to JSON
var fireworksJSON = csvJSON(fireworkSensorPositions);
var wildfireJSON  = csvJSON(wildfireSensorPositions);
var sandstormJSON = csvJSON(sandstormSensorPositions);
var inversionJSON = csvJSON(inversionSensorPositions);


var markerList={};

/////////////////////////////////////
//
//            STATEMENTS
//
/////////////////////////////////////

// Add tile layer to map -- MapBox Streets tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: maxZoom,
    minZoom: minZoom,
    id: 'mapbox.streets',
    accessToken:'pk.eyJ1IjoiamFtb29yZTg0IiwiYSI6ImNqbm0zeWo5ZTAwcDIzcXM4NjJ4czBuODUifQ.cJSLiKVi7lbGzE4RQTRNHA'
}).addTo(fireworksMap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: maxZoom,
    minZoom: minZoom,
    id: 'mapbox.streets',
    accessToken:'pk.eyJ1IjoiamFtb29yZTg0IiwiYSI6ImNqbm0zeWo5ZTAwcDIzcXM4NjJ4czBuODUifQ.cJSLiKVi7lbGzE4RQTRNHA'
}).addTo(wildfireMap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: maxZoom,
    minZoom: minZoom,
    id: 'mapbox.streets',
    accessToken:'pk.eyJ1IjoiamFtb29yZTg0IiwiYSI6ImNqbm0zeWo5ZTAwcDIzcXM4NjJ4czBuODUifQ.cJSLiKVi7lbGzE4RQTRNHA'
}).addTo(sandstormMap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: maxZoom,
    minZoom: minZoom,
    id: 'mapbox.streets',
    accessToken:'pk.eyJ1IjoiamFtb29yZTg0IiwiYSI6ImNqbm0zeWo5ZTAwcDIzcXM4NjJ4czBuODUifQ.cJSLiKVi7lbGzE4RQTRNHA'
}).addTo(inversionMap);


Object.keys(fireworksJSON).forEach(function(k,i){

    var sensor = fireworksJSON[i];
    var lat = parseFloat(sensor.lat);
    var lng = parseFloat(sensor.long);
    var id  = sensor.ID;
    var type = sensor.type;

    // console.log("ID: " + id + " length = " +id.length);


    //console.log(k, lat,lng,id, type)

    if(id.length > 5) {
        markerList[id] = L.circleMarker ([lat,lng], circMarker1Options).addTo(fireworksMap)

    } else{
        markerList[id] = L.circleMarker ([lat,lng], circMarker2Options).addTo(fireworksMap);
    }

    markerList[id].bindPopup("<b>monitor: </b>" + id);
    markerList[id]._path.id = id;
    //console.log(markerList[id]);
    //markerList[id].sourceTarget._leaflet_id = id;
    markerList[id].on("mouseover",mouseOverEvent);
    markerList[id].on("click", clickEvent);
    markerList[id].on('mouseout',mouseOutEvent);

});

Object.keys(wildfireJSON).forEach(function(k,i){

    var sensor = wildfireJSON[i];
    var lat = parseFloat(sensor.lat);
    var lng = parseFloat(sensor.long);
    var id  = sensor.ID;
    var type = sensor.type;

    // console.log("ID: " + id + " length = " +id.length);


    //console.log(k, lat,lng,id, type)

    if(id.length > 5) {
        markerList[id] = L.circleMarker ([lat,lng], circMarker1Options).addTo(wildfireMap)

    } else{
        markerList[id] = L.circleMarker ([lat,lng], circMarker2Options).addTo(wildfireMap);
    }

    markerList[id].bindPopup("<b>monitor: </b>" + id);
    markerList[id]._path.id = id;
    //console.log(markerList[id]);
    //markerList[id].sourceTarget._leaflet_id = id;
    markerList[id].on("mouseover",mouseOverEvent);
    markerList[id].on("click", clickEvent);
    markerList[id].on('mouseout',mouseOutEvent);

});

Object.keys(sandstormJSON).forEach(function(k,i){

    var sensor = sandstormJSON[i];
    var lat = parseFloat(sensor.lat);
    var lng = parseFloat(sensor.long);
    var id  = sensor.ID;
    var type = sensor.type;

    // console.log("ID: " + id + " length = " +id.length);


    //console.log(k, lat,lng,id, type)

    if(id.length > 5) {
        markerList[id] = L.circleMarker ([lat,lng], circMarker1Options).addTo(sandstormMap)

    } else{
        markerList[id] = L.circleMarker ([lat,lng], circMarker2Options).addTo(sandstormMap);
    }

    markerList[id].bindPopup("<b>monitor: </b>" + id);
    markerList[id]._path.id = id;
    //console.log(markerList[id]);
    //markerList[id].sourceTarget._leaflet_id = id;
    markerList[id].on("mouseover",mouseOverEvent);
    markerList[id].on("click", clickEvent);
    markerList[id].on('mouseout',mouseOutEvent);

});

Object.keys(inversionJSON).forEach(function(k,i){

    var sensor = inversionJSON[i];
    var lat = parseFloat(sensor.lat);
    var lng = parseFloat(sensor.long);
    var id  = sensor.ID;
    var type = sensor.type;

    // console.log("ID: " + id + " length = " +id.length);


    //console.log(k, lat,lng,id, type)

    if(id.length > 5) {
        markerList[id] = L.circleMarker ([lat,lng], circMarker1Options).addTo(inversionMap)

    } else{
        markerList[id] = L.circleMarker ([lat,lng], circMarker2Options).addTo(inversionMap);
    }

    markerList[id].bindPopup("<b>monitor: </b>" + id);
    markerList[id]._path.id = id;
    //console.log(markerList[id]);
    //markerList[id].sourceTarget._leaflet_id = id;
    markerList[id].on("mouseover",mouseOverEvent);
    markerList[id].on("click", clickEvent);
    markerList[id].on('mouseout',mouseOutEvent);

});

/////////////////////////////////////
//
//            FUNCTIONS
//
/////////////////////////////////////
function csvJSON(csv){

    var lines=csv.split('\n');

    var result = [];

    var headers=lines[0].split(',');
    lines.splice(0, 1);
    lines.forEach(function(line) {
        var obj = {};
        var currentline = line.split(',');
        headers.forEach(function(header, i) {
            obj[header] = currentline[i];
        });
        result.push(obj);
    });

    return result; //JavaScript object
    //return JSON.stringify(result); //JSON
}
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                //console.log(allText);

            }
        }
    }
    rawFile.send(null);
    return rawFile.responseText;
}

function mouseOverEvent(e){

    var markerID = e.sourceTarget._path.id;
    this.openPopup();
    console.log("you hovered " + markerID);

}


function clickEvent(e){

    var markerID = e.sourceTarget._path.id;

    var dot = document.getElementById(markerID);

    var dotColor = dot.attributes.fill.value;
    //var dot = d3.select('#'+markerID);
    console.log("Dot color: " + dotColor);

    if(dotColor == clickOn){
        dot.style.fill = clickOff;
    } else {
        dot.style.fill = clickOn
    }
    // dot.style.fill='black';s
}


function mouseOutEvent(e){

    var markerID = e.sourceTarget._path.id;
    this.closePopup();
    console.log("you hovered " + markerID);

}