
/////////////////////////////////////
//
//            VARIABLES
//
/////////////////////////////////////

var startZoom = 11;
var maxZoom = startZoom;
var minZoom = startZoom;
var slcLocation = [40.710,-111.870];
var loc2 = [43.710,-94.870];
var loc3 = [0.710,4.870];
var loc4 = [100,-100];


var mapSettings = {
    zoomControl:false
};

//set map view location and zoom level
var myMap1 = L.map('tab1-map',mapSettings).setView(slcLocation,startZoom);
var myMap2 = L.map('tab2-map',mapSettings).setView(loc2,startZoom);
var myMap3 = L.map('tab3-map',mapSettings).setView(loc3,startZoom);
var myMap4 = L.map('tab4-map',mapSettings).setView(loc4,startZoom);


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
}).addTo(myMap1);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: maxZoom,
    minZoom: minZoom,
    id: 'mapbox.streets',
    accessToken:'pk.eyJ1IjoiamFtb29yZTg0IiwiYSI6ImNqbm0zeWo5ZTAwcDIzcXM4NjJ4czBuODUifQ.cJSLiKVi7lbGzE4RQTRNHA'
}).addTo(myMap2);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: maxZoom,
    minZoom: minZoom,
    id: 'mapbox.streets',
    accessToken:'pk.eyJ1IjoiamFtb29yZTg0IiwiYSI6ImNqbm0zeWo5ZTAwcDIzcXM4NjJ4czBuODUifQ.cJSLiKVi7lbGzE4RQTRNHA'
}).addTo(myMap3);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: maxZoom,
    minZoom: minZoom,
    id: 'mapbox.streets',
    accessToken:'pk.eyJ1IjoiamFtb29yZTg0IiwiYSI6ImNqbm0zeWo5ZTAwcDIzcXM4NjJ4czBuODUifQ.cJSLiKVi7lbGzE4RQTRNHA'
}).addTo(myMap4);




/////////////////////////////////////
//
//            FUNCTIONS
//
/////////////////////////////////////
