ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:102332").setExtent([335956.008458, 4262828.132099, 370986.055252, 4279206.684512]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Reservatorios_1 = new ol.format.GeoJSON();
var features_Reservatorios_1 = format_Reservatorios_1.readFeatures(json_Reservatorios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Reservatorios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reservatorios_1.addFeatures(features_Reservatorios_1);
cluster_Reservatorios_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Reservatorios_1
});
var lyr_Reservatorios_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Reservatorios_1, 
                style: style_Reservatorios_1,
                popuplayertitle: 'Reservatorios',
                interactive: true,
    title: 'Reservatorios<br />\
    <img src="styles/legend/Reservatorios_1_0.png" /> Pequeno reservatorio<br />\
    <img src="styles/legend/Reservatorios_1_1.png" /> Reservatorio medio<br />\
    <img src="styles/legend/Reservatorios_1_2.png" /> Grande Reservatorio<br />' });
var group_Masse_eau = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Masse_eau'});
var group_Faille = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Faille'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Reservatorios_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Reservatorios_1];
lyr_Reservatorios_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Entrada': 'Entrada', 'Saida': 'Saida', 'Capacidade': 'Capacidade', 'Categoria': 'Categoria', 'Cloragem': 'Cloragem', 'Comentario': 'Comentario', 'Contador': 'Contador', 'Nome': 'Nome', 'popup_html': 'popup_html', 'popup2': 'popup2', 'popup3': 'popup3', });
lyr_Reservatorios_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Entrada': 'TextEdit', 'Saida': 'TextEdit', 'Capacidade': 'TextEdit', 'Categoria': 'TextEdit', 'Cloragem': 'CheckBox', 'Comentario': 'TextEdit', 'Contador': 'CheckBox', 'Nome': 'TextEdit', 'popup_html': '', 'popup2': '', 'popup3': '', });
lyr_Reservatorios_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Entrada': 'hidden field', 'Saida': 'hidden field', 'Capacidade': 'hidden field', 'Categoria': 'hidden field', 'Cloragem': 'hidden field', 'Comentario': 'inline label - visible with data', 'Contador': 'hidden field', 'Nome': 'header label - visible with data', 'popup_html': 'no label', 'popup2': 'no label', 'popup3': 'no label', });
lyr_Reservatorios_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});