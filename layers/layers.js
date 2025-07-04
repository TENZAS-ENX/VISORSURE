var wms_layers = [];

var lyr_TOPOGRAFICO_IGN_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/mapa-raster",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mtn_rasterizado",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'TOPOGRAFICO_IGN',
                            popuplayertitle: 'TOPOGRAFICO_IGN',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TOPOGRAFICO_IGN_0, 0]);
var format_type_ii_1 = new ol.format.GeoJSON();
var features_type_ii_1 = format_type_ii_1.readFeatures(json_type_ii_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_type_ii_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_type_ii_1.addFeatures(features_type_ii_1);
var lyr_type_ii_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_type_ii_1, 
                style: style_type_ii_1,
                popuplayertitle: 'type_ii',
                interactive: true,
                title: '<img src="styles/legend/type_ii_1.png" /> type_ii'
            });
var format_type_i_2 = new ol.format.GeoJSON();
var features_type_i_2 = format_type_i_2.readFeatures(json_type_i_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_type_i_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_type_i_2.addFeatures(features_type_i_2);
var lyr_type_i_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_type_i_2, 
                style: style_type_i_2,
                popuplayertitle: 'type_i',
                interactive: true,
                title: '<img src="styles/legend/type_i_2.png" /> type_i'
            });
var group_ortofotosantiguas = new ol.layer.Group({
                                layers: [lyr_TOPOGRAFICO_IGN_0,],
                                fold: 'open',
                                title: 'ortofotos antiguas'});

lyr_TOPOGRAFICO_IGN_0.setVisible(true);lyr_type_ii_1.setVisible(true);lyr_type_i_2.setVisible(true);
var layersList = [group_ortofotosantiguas,lyr_type_ii_1,lyr_type_i_2];
lyr_type_ii_1.set('fieldAliases', {'layer': 'layer', });
lyr_type_i_2.set('fieldAliases', {'layer': 'layer', });
lyr_type_ii_1.set('fieldImages', {'layer': 'TextEdit', });
lyr_type_i_2.set('fieldImages', {'layer': 'TextEdit', });
lyr_type_ii_1.set('fieldLabels', {'layer': 'no label', });
lyr_type_i_2.set('fieldLabels', {'layer': 'no label', });
lyr_type_i_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});