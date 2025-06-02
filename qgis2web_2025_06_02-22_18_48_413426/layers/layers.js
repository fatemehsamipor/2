var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_adarehpost_1 = new ol.format.GeoJSON();
var features_adarehpost_1 = format_adarehpost_1.readFeatures(json_adarehpost_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adarehpost_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adarehpost_1.addFeatures(features_adarehpost_1);
var lyr_adarehpost_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adarehpost_1, 
                style: style_adarehpost_1,
                popuplayertitle: 'adarehpost',
                interactive: true,
                title: '<img src="styles/legend/adarehpost_1.png" /> adarehpost'
            });
var format_amozeshparvaresh_2 = new ol.format.GeoJSON();
var features_amozeshparvaresh_2 = format_amozeshparvaresh_2.readFeatures(json_amozeshparvaresh_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amozeshparvaresh_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amozeshparvaresh_2.addFeatures(features_amozeshparvaresh_2);
var lyr_amozeshparvaresh_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amozeshparvaresh_2, 
                style: style_amozeshparvaresh_2,
                popuplayertitle: 'amozeshparvaresh',
                interactive: true,
                title: '<img src="styles/legend/amozeshparvaresh_2.png" /> amozeshparvaresh'
            });
var format_asnaf_3 = new ol.format.GeoJSON();
var features_asnaf_3 = format_asnaf_3.readFeatures(json_asnaf_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_asnaf_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_asnaf_3.addFeatures(features_asnaf_3);
var lyr_asnaf_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_asnaf_3, 
                style: style_asnaf_3,
                popuplayertitle: 'asnaf',
                interactive: true,
                title: '<img src="styles/legend/asnaf_3.png" /> asnaf'
            });
var format_atashneshani_4 = new ol.format.GeoJSON();
var features_atashneshani_4 = format_atashneshani_4.readFeatures(json_atashneshani_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_atashneshani_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_atashneshani_4.addFeatures(features_atashneshani_4);
var lyr_atashneshani_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_atashneshani_4, 
                style: style_atashneshani_4,
                popuplayertitle: 'atashneshani',
                interactive: true,
                title: '<img src="styles/legend/atashneshani_4.png" /> atashneshani'
            });
var format_bank_5 = new ol.format.GeoJSON();
var features_bank_5 = format_bank_5.readFeatures(json_bank_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bank_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bank_5.addFeatures(features_bank_5);
var lyr_bank_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bank_5, 
                style: style_bank_5,
                popuplayertitle: 'bank',
                interactive: true,
                title: '<img src="styles/legend/bank_5.png" /> bank'
            });
var format_bashgah_6 = new ol.format.GeoJSON();
var features_bashgah_6 = format_bashgah_6.readFeatures(json_bashgah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bashgah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bashgah_6.addFeatures(features_bashgah_6);
var lyr_bashgah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bashgah_6, 
                style: style_bashgah_6,
                popuplayertitle: 'bashgah',
                interactive: true,
                title: '<img src="styles/legend/bashgah_6.png" /> bashgah'
            });
var format_bazar_7 = new ol.format.GeoJSON();
var features_bazar_7 = format_bazar_7.readFeatures(json_bazar_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bazar_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bazar_7.addFeatures(features_bazar_7);
var lyr_bazar_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bazar_7, 
                style: style_bazar_7,
                popuplayertitle: 'bazar',
                interactive: true,
                title: '<img src="styles/legend/bazar_7.png" /> bazar'
            });
var format_dadgah_8 = new ol.format.GeoJSON();
var features_dadgah_8 = format_dadgah_8.readFeatures(json_dadgah_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dadgah_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dadgah_8.addFeatures(features_dadgah_8);
var lyr_dadgah_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dadgah_8, 
                style: style_dadgah_8,
                popuplayertitle: 'dadgah',
                interactive: true,
                title: '<img src="styles/legend/dadgah_8.png" /> dadgah'
            });
var format_daneshgah_9 = new ol.format.GeoJSON();
var features_daneshgah_9 = format_daneshgah_9.readFeatures(json_daneshgah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_daneshgah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_daneshgah_9.addFeatures(features_daneshgah_9);
var lyr_daneshgah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_daneshgah_9, 
                style: style_daneshgah_9,
                popuplayertitle: 'daneshgah',
                interactive: true,
                title: '<img src="styles/legend/daneshgah_9.png" /> daneshgah'
            });
var format_darokhaneh_10 = new ol.format.GeoJSON();
var features_darokhaneh_10 = format_darokhaneh_10.readFeatures(json_darokhaneh_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_darokhaneh_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_darokhaneh_10.addFeatures(features_darokhaneh_10);
var lyr_darokhaneh_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_darokhaneh_10, 
                style: style_darokhaneh_10,
                popuplayertitle: 'darokhaneh',
                interactive: true,
                title: '<img src="styles/legend/darokhaneh_10.png" /> darokhaneh'
            });
var format_farmandari_11 = new ol.format.GeoJSON();
var features_farmandari_11 = format_farmandari_11.readFeatures(json_farmandari_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_farmandari_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_farmandari_11.addFeatures(features_farmandari_11);
var lyr_farmandari_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_farmandari_11, 
                style: style_farmandari_11,
                popuplayertitle: 'farmandari',
                interactive: true,
                title: '<img src="styles/legend/farmandari_11.png" /> farmandari'
            });
var format_froshgah_12 = new ol.format.GeoJSON();
var features_froshgah_12 = format_froshgah_12.readFeatures(json_froshgah_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_froshgah_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_froshgah_12.addFeatures(features_froshgah_12);
var lyr_froshgah_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_froshgah_12, 
                style: style_froshgah_12,
                popuplayertitle: 'froshgah',
                interactive: true,
                title: '<img src="styles/legend/froshgah_12.png" /> froshgah'
            });
var format_khadamatdarmani_13 = new ol.format.GeoJSON();
var features_khadamatdarmani_13 = format_khadamatdarmani_13.readFeatures(json_khadamatdarmani_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_khadamatdarmani_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_khadamatdarmani_13.addFeatures(features_khadamatdarmani_13);
var lyr_khadamatdarmani_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_khadamatdarmani_13, 
                style: style_khadamatdarmani_13,
                popuplayertitle: 'khadamatdarmani',
                interactive: true,
                title: '<img src="styles/legend/khadamatdarmani_13.png" /> khadamatdarmani'
            });
var format_masged_14 = new ol.format.GeoJSON();
var features_masged_14 = format_masged_14.readFeatures(json_masged_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masged_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masged_14.addFeatures(features_masged_14);
var lyr_masged_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_masged_14, 
                style: style_masged_14,
                popuplayertitle: 'masged',
                interactive: true,
                title: '<img src="styles/legend/masged_14.png" /> masged'
            });
var format_mokhaberat_15 = new ol.format.GeoJSON();
var features_mokhaberat_15 = format_mokhaberat_15.readFeatures(json_mokhaberat_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mokhaberat_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mokhaberat_15.addFeatures(features_mokhaberat_15);
var lyr_mokhaberat_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mokhaberat_15, 
                style: style_mokhaberat_15,
                popuplayertitle: 'mokhaberat',
                interactive: true,
                title: '<img src="styles/legend/mokhaberat_15.png" /> mokhaberat'
            });
var format_nezampezeshki_16 = new ol.format.GeoJSON();
var features_nezampezeshki_16 = format_nezampezeshki_16.readFeatures(json_nezampezeshki_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nezampezeshki_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nezampezeshki_16.addFeatures(features_nezampezeshki_16);
var lyr_nezampezeshki_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nezampezeshki_16, 
                style: style_nezampezeshki_16,
                popuplayertitle: 'nezampezeshki',
                interactive: true,
                title: '<img src="styles/legend/nezampezeshki_16.png" /> nezampezeshki'
            });
var format_pasag_17 = new ol.format.GeoJSON();
var features_pasag_17 = format_pasag_17.readFeatures(json_pasag_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pasag_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pasag_17.addFeatures(features_pasag_17);
var lyr_pasag_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pasag_17, 
                style: style_pasag_17,
                popuplayertitle: 'pasag',
                interactive: true,
                title: '<img src="styles/legend/pasag_17.png" /> pasag'
            });
var format_park_18 = new ol.format.GeoJSON();
var features_park_18 = format_park_18.readFeatures(json_park_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_park_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park_18.addFeatures(features_park_18);
var lyr_park_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_park_18, 
                style: style_park_18,
                popuplayertitle: 'park',
                interactive: true,
                title: '<img src="styles/legend/park_18.png" /> park'
            });
var format_polis_19 = new ol.format.GeoJSON();
var features_polis_19 = format_polis_19.readFeatures(json_polis_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polis_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polis_19.addFeatures(features_polis_19);
var lyr_polis_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polis_19, 
                style: style_polis_19,
                popuplayertitle: 'polis',
                interactive: true,
                title: '<img src="styles/legend/polis_19.png" /> polis'
            });
var format_Pompbenzin_20 = new ol.format.GeoJSON();
var features_Pompbenzin_20 = format_Pompbenzin_20.readFeatures(json_Pompbenzin_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pompbenzin_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pompbenzin_20.addFeatures(features_Pompbenzin_20);
var lyr_Pompbenzin_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pompbenzin_20, 
                style: style_Pompbenzin_20,
                popuplayertitle: 'Pompbenzin',
                interactive: true,
                title: '<img src="styles/legend/Pompbenzin_20.png" /> Pompbenzin'
            });
var format_sepah_21 = new ol.format.GeoJSON();
var features_sepah_21 = format_sepah_21.readFeatures(json_sepah_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sepah_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sepah_21.addFeatures(features_sepah_21);
var lyr_sepah_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sepah_21, 
                style: style_sepah_21,
                popuplayertitle: 'sepah',
                interactive: true,
                title: '<img src="styles/legend/sepah_21.png" /> sepah'
            });
var format_shorayshahr_22 = new ol.format.GeoJSON();
var features_shorayshahr_22 = format_shorayshahr_22.readFeatures(json_shorayshahr_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shorayshahr_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shorayshahr_22.addFeatures(features_shorayshahr_22);
var lyr_shorayshahr_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shorayshahr_22, 
                style: style_shorayshahr_22,
                popuplayertitle: 'shorayshahr',
                interactive: true,
                title: '<img src="styles/legend/shorayshahr_22.png" /> shorayshahr'
            });
var format_Shorayshar_23 = new ol.format.GeoJSON();
var features_Shorayshar_23 = format_Shorayshar_23.readFeatures(json_Shorayshar_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shorayshar_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shorayshar_23.addFeatures(features_Shorayshar_23);
var lyr_Shorayshar_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shorayshar_23, 
                style: style_Shorayshar_23,
                popuplayertitle: 'Shorayshar',
                interactive: true,
                title: '<img src="styles/legend/Shorayshar_23.png" /> Shorayshar'
            });
var format_sinam_24 = new ol.format.GeoJSON();
var features_sinam_24 = format_sinam_24.readFeatures(json_sinam_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sinam_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sinam_24.addFeatures(features_sinam_24);
var lyr_sinam_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sinam_24, 
                style: style_sinam_24,
                popuplayertitle: 'sinam',
                interactive: true,
                title: '<img src="styles/legend/sinam_24.png" /> sinam'
            });
var format_Sinama_25 = new ol.format.GeoJSON();
var features_Sinama_25 = format_Sinama_25.readFeatures(json_Sinama_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sinama_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sinama_25.addFeatures(features_Sinama_25);
var lyr_Sinama_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sinama_25, 
                style: style_Sinama_25,
                popuplayertitle: 'Sinama',
                interactive: true,
                title: '<img src="styles/legend/Sinama_25.png" /> Sinama'
            });
var format_zendan_26 = new ol.format.GeoJSON();
var features_zendan_26 = format_zendan_26.readFeatures(json_zendan_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zendan_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zendan_26.addFeatures(features_zendan_26);
var lyr_zendan_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zendan_26, 
                style: style_zendan_26,
                popuplayertitle: 'zendan',
                interactive: true,
                title: '<img src="styles/legend/zendan_26.png" /> zendan'
            });

lyr_OSMStandard_0.setVisible(true);lyr_adarehpost_1.setVisible(true);lyr_amozeshparvaresh_2.setVisible(true);lyr_asnaf_3.setVisible(true);lyr_atashneshani_4.setVisible(true);lyr_bank_5.setVisible(true);lyr_bashgah_6.setVisible(true);lyr_bazar_7.setVisible(true);lyr_dadgah_8.setVisible(true);lyr_daneshgah_9.setVisible(true);lyr_darokhaneh_10.setVisible(true);lyr_farmandari_11.setVisible(true);lyr_froshgah_12.setVisible(true);lyr_khadamatdarmani_13.setVisible(true);lyr_masged_14.setVisible(true);lyr_mokhaberat_15.setVisible(true);lyr_nezampezeshki_16.setVisible(true);lyr_pasag_17.setVisible(true);lyr_park_18.setVisible(true);lyr_polis_19.setVisible(true);lyr_Pompbenzin_20.setVisible(true);lyr_sepah_21.setVisible(true);lyr_shorayshahr_22.setVisible(true);lyr_Shorayshar_23.setVisible(true);lyr_sinam_24.setVisible(true);lyr_Sinama_25.setVisible(true);lyr_zendan_26.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_adarehpost_1,lyr_amozeshparvaresh_2,lyr_asnaf_3,lyr_atashneshani_4,lyr_bank_5,lyr_bashgah_6,lyr_bazar_7,lyr_dadgah_8,lyr_daneshgah_9,lyr_darokhaneh_10,lyr_farmandari_11,lyr_froshgah_12,lyr_khadamatdarmani_13,lyr_masged_14,lyr_mokhaberat_15,lyr_nezampezeshki_16,lyr_pasag_17,lyr_park_18,lyr_polis_19,lyr_Pompbenzin_20,lyr_sepah_21,lyr_shorayshahr_22,lyr_Shorayshar_23,lyr_sinam_24,lyr_Sinama_25,lyr_zendan_26];
lyr_adarehpost_1.set('fieldAliases', {'id': 'id', 'adareh pos': 'adareh pos', });
lyr_amozeshparvaresh_2.set('fieldAliases', {'id': 'id', 'amozesh': 'amozesh', });
lyr_asnaf_3.set('fieldAliases', {'id': 'id', 'asnaf': 'asnaf', });
lyr_atashneshani_4.set('fieldAliases', {'id': 'id', 'atashnesha': 'atashnesha', });
lyr_bank_5.set('fieldAliases', {'id': 'id', 'bank': 'bank', });
lyr_bashgah_6.set('fieldAliases', {'id': 'id', 'bashgah': 'bashgah', });
lyr_bazar_7.set('fieldAliases', {'id': 'id', 'BAZAR': 'BAZAR', });
lyr_dadgah_8.set('fieldAliases', {'id': 'id', 'dadgah': 'dadgah', });
lyr_daneshgah_9.set('fieldAliases', {'id': 'id', 'daneshgah': 'daneshgah', });
lyr_darokhaneh_10.set('fieldAliases', {'id': 'id', 'darokhaneh': 'darokhaneh', });
lyr_farmandari_11.set('fieldAliases', {'id': 'id', 'farmandari': 'farmandari', });
lyr_froshgah_12.set('fieldAliases', {'id': 'id', 'FROSHGAH': 'FROSHGAH', });
lyr_khadamatdarmani_13.set('fieldAliases', {'id': 'id', 'darmani': 'darmani', });
lyr_masged_14.set('fieldAliases', {'id': 'id', 'masged': 'masged', });
lyr_mokhaberat_15.set('fieldAliases', {'id': 'id', 'mokhaberat': 'mokhaberat', });
lyr_nezampezeshki_16.set('fieldAliases', {'id': 'id', 'nezampezes': 'nezampezes', });
lyr_pasag_17.set('fieldAliases', {'id': 'id', 'PASAG': 'PASAG', });
lyr_park_18.set('fieldAliases', {'id': 'id', 'park': 'park', });
lyr_polis_19.set('fieldAliases', {'id': 'id', 'polis': 'polis', });
lyr_Pompbenzin_20.set('fieldAliases', {'id': 'id', 'benzin': 'benzin', });
lyr_sepah_21.set('fieldAliases', {'id': 'id', 'swepah': 'swepah', });
lyr_shorayshahr_22.set('fieldAliases', {'id': 'id', 'shora': 'shora', });
lyr_Shorayshar_23.set('fieldAliases', {'id': 'id', 'shora': 'shora', });
lyr_sinam_24.set('fieldAliases', {'id': 'id', 'sinama': 'sinama', });
lyr_Sinama_25.set('fieldAliases', {'id': 'id', 'sinama': 'sinama', });
lyr_zendan_26.set('fieldAliases', {'id': 'id', 'zendan': 'zendan', });
lyr_adarehpost_1.set('fieldImages', {'id': '', 'adareh pos': '', });
lyr_amozeshparvaresh_2.set('fieldImages', {'id': '', 'amozesh': '', });
lyr_asnaf_3.set('fieldImages', {'id': '', 'asnaf': '', });
lyr_atashneshani_4.set('fieldImages', {'id': '', 'atashnesha': '', });
lyr_bank_5.set('fieldImages', {'id': '', 'bank': '', });
lyr_bashgah_6.set('fieldImages', {'id': '', 'bashgah': '', });
lyr_bazar_7.set('fieldImages', {'id': '', 'BAZAR': '', });
lyr_dadgah_8.set('fieldImages', {'id': '', 'dadgah': '', });
lyr_daneshgah_9.set('fieldImages', {'id': '', 'daneshgah': '', });
lyr_darokhaneh_10.set('fieldImages', {'id': '', 'darokhaneh': '', });
lyr_farmandari_11.set('fieldImages', {'id': '', 'farmandari': '', });
lyr_froshgah_12.set('fieldImages', {'id': '', 'FROSHGAH': '', });
lyr_khadamatdarmani_13.set('fieldImages', {'id': '', 'darmani': '', });
lyr_masged_14.set('fieldImages', {'id': '', 'masged': '', });
lyr_mokhaberat_15.set('fieldImages', {'id': '', 'mokhaberat': '', });
lyr_nezampezeshki_16.set('fieldImages', {'id': '', 'nezampezes': '', });
lyr_pasag_17.set('fieldImages', {'id': '', 'PASAG': '', });
lyr_park_18.set('fieldImages', {'id': '', 'park': '', });
lyr_polis_19.set('fieldImages', {'id': '', 'polis': '', });
lyr_Pompbenzin_20.set('fieldImages', {'id': '', 'benzin': '', });
lyr_sepah_21.set('fieldImages', {'id': '', 'swepah': '', });
lyr_shorayshahr_22.set('fieldImages', {'id': '', 'shora': '', });
lyr_Shorayshar_23.set('fieldImages', {'id': '', 'shora': '', });
lyr_sinam_24.set('fieldImages', {'id': '', 'sinama': '', });
lyr_Sinama_25.set('fieldImages', {'id': '', 'sinama': '', });
lyr_zendan_26.set('fieldImages', {'id': '', 'zendan': '', });
lyr_adarehpost_1.set('fieldLabels', {'id': 'no label', 'adareh pos': 'no label', });
lyr_amozeshparvaresh_2.set('fieldLabels', {'id': 'no label', 'amozesh': 'no label', });
lyr_asnaf_3.set('fieldLabels', {'id': 'no label', 'asnaf': 'no label', });
lyr_atashneshani_4.set('fieldLabels', {'id': 'no label', 'atashnesha': 'no label', });
lyr_bank_5.set('fieldLabels', {'id': 'no label', 'bank': 'no label', });
lyr_bashgah_6.set('fieldLabels', {'id': 'no label', 'bashgah': 'no label', });
lyr_bazar_7.set('fieldLabels', {'id': 'no label', 'BAZAR': 'no label', });
lyr_dadgah_8.set('fieldLabels', {'id': 'no label', 'dadgah': 'no label', });
lyr_daneshgah_9.set('fieldLabels', {'id': 'no label', 'daneshgah': 'no label', });
lyr_darokhaneh_10.set('fieldLabels', {'id': 'no label', 'darokhaneh': 'no label', });
lyr_farmandari_11.set('fieldLabels', {'id': 'no label', 'farmandari': 'no label', });
lyr_froshgah_12.set('fieldLabels', {'id': 'no label', 'FROSHGAH': 'no label', });
lyr_khadamatdarmani_13.set('fieldLabels', {'id': 'no label', 'darmani': 'no label', });
lyr_masged_14.set('fieldLabels', {'id': 'no label', 'masged': 'no label', });
lyr_mokhaberat_15.set('fieldLabels', {'id': 'no label', 'mokhaberat': 'no label', });
lyr_nezampezeshki_16.set('fieldLabels', {'id': 'no label', 'nezampezes': 'no label', });
lyr_pasag_17.set('fieldLabels', {'id': 'no label', 'PASAG': 'no label', });
lyr_park_18.set('fieldLabels', {'id': 'no label', 'park': 'no label', });
lyr_polis_19.set('fieldLabels', {'id': 'no label', 'polis': 'no label', });
lyr_Pompbenzin_20.set('fieldLabels', {'id': 'no label', 'benzin': 'no label', });
lyr_sepah_21.set('fieldLabels', {'id': 'no label', 'swepah': 'no label', });
lyr_shorayshahr_22.set('fieldLabels', {'id': 'no label', 'shora': 'no label', });
lyr_Shorayshar_23.set('fieldLabels', {'id': 'no label', 'shora': 'no label', });
lyr_sinam_24.set('fieldLabels', {'id': 'no label', 'sinama': 'no label', });
lyr_Sinama_25.set('fieldLabels', {'id': 'no label', 'sinama': 'no label', });
lyr_zendan_26.set('fieldLabels', {'id': 'no label', 'zendan': 'no label', });
lyr_zendan_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});