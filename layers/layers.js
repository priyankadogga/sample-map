var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_towers_1 = new ol.format.GeoJSON();
var features_towers_1 = format_towers_1.readFeatures(json_towers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_towers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_towers_1.addFeatures(features_towers_1);
var lyr_towers_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_towers_1, 
                style: style_towers_1,
                popuplayertitle: "towers",
                interactive: true,
                title: '<img src="styles/legend/towers_1.png" /> towers'
            });
var format_roads_2 = new ol.format.GeoJSON();
var features_roads_2 = format_roads_2.readFeatures(json_roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_2.addFeatures(features_roads_2);
var lyr_roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_2, 
                style: style_roads_2,
                popuplayertitle: "roads",
                interactive: true,
                title: '<img src="styles/legend/roads_2.png" /> roads'
            });
var format_pnts_3 = new ol.format.GeoJSON();
var features_pnts_3 = format_pnts_3.readFeatures(json_pnts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pnts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pnts_3.addFeatures(features_pnts_3);
var lyr_pnts_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pnts_3, 
                style: style_pnts_3,
                popuplayertitle: "pnts",
                interactive: true,
                title: '<img src="styles/legend/pnts_3.png" /> pnts'
            });

lyr_OSMStandard_0.setVisible(true);lyr_towers_1.setVisible(true);lyr_roads_2.setVisible(true);lyr_pnts_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_towers_1,lyr_roads_2,lyr_pnts_3];
lyr_towers_1.set('fieldAliases', {'id': 'id', 'popuation': 'popuation', 'literacy': 'literacy', });
lyr_roads_2.set('fieldAliases', {'id': 'id', 'length': 'length', });
lyr_pnts_3.set('fieldAliases', {'id': 'id', });
lyr_towers_1.set('fieldImages', {'id': '', 'popuation': '', 'literacy': '', });
lyr_roads_2.set('fieldImages', {'id': '', 'length': '', });
lyr_pnts_3.set('fieldImages', {'id': '', });
lyr_towers_1.set('fieldLabels', {'id': 'no label', 'popuation': 'no label', 'literacy': 'no label', });
lyr_roads_2.set('fieldLabels', {'id': 'no label', 'length': 'no label', });
lyr_pnts_3.set('fieldLabels', {'id': 'no label', });
lyr_pnts_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});