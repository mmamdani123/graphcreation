var myMap;
        
        
        require([
        "cedar",
        
        "esri/map",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/layers/FeatureLayer",
        "esri/dijit/Popup",
        "esri/dijit/PopupTemplate",
        "esri/symbols/SimpleFillSymbol",
        "esri/dijit/Legend",
         
        "dojo/on",


        "dojo/domReady!"], 
    
    
    function(Cedar, 
    
            Map, ArcGISDynamicMapServiceLayer, FeatureLayer, Popup, PopupTemplate,SimpleFillSymbol, Legend,
             on, domready) {
           
        
        myMap = new Map("Map", {
                basemap : "topo",
                 center : [39.452953, -4.174387],
                zoom : 15
            });
            
            
            var lyrKwale = new ArcGISDynamicMapServiceLayer("http://kdc-srv-073.tbldc.com:6080/arcgis/rest/services/test/kwalerms3/MapServer", {
                id: "Kwale"
            });

            
                        //Define pop up for outdoor advertisements
                        
        var testPointTemplate = new PopupTemplate({
        title: "Test Point",
        //description: "GIS Code: {giscode}",
        fieldInfos: [{
                fieldName: "Building_Name",
                label: "Building Name:",
                visible: true
            }, {
                fieldName: "GIS_code",
                label: "GIS Code:",
                visible: true
            },{
                fieldName: "invoice_total",
                label: "Invoice:",
                visible: true
            }, {
                fieldName: "receipt_total",
                label: "Receipt:",
                visible: true
            }, {
                fieldName: "balance",
                label: "Balance:",
                visible: true
            }]
    });

    var outdoorTemplate = new PopupTemplate({
        title: "Outdoor Advertisement",
        //description: "GIS Code: {giscode}",
        fieldInfos: [{
                fieldName: "road_name",
                label: "Road Name:",
                visible: true
            }, {
                fieldName: "size",
                label: "Size:",
                visible: true
            }, {
                fieldName: "structure_owner",
                label: "Structure Owner:",
                visible: true
            }, {
                fieldName: "gis_code",
                label: "GIS Code:",
                visible: true
            }]
    });

    //Define pop up for markets
    var marketTemplate = new PopupTemplate({
        title: "Market",
        //description: "Market ID: {market_name}",
        fieldInfos: [{
                fieldName: "market_name",
                label: "Market Name:",
                visible: true
            }, {
                fieldName: "gis_code",
                label: "GIS Code:",
                visible: true
            }]
    });

    //Define pop up for houses
    var houseTemplate = new PopupTemplate({
        title: "House",
        //description: "House No: {house_no}",
        fieldInfos: [{
                fieldName: "house_no",
                label: "House No:",
                visible: true
            }, {
                fieldName: "gis_code",
                label: "GIS Code:",
                visible: true
            }]
    });

    //Define pop up for buildings
    var buildingsTemplate = new PopupTemplate({
        title: "Building",
        //description: "Building Name: {building_name}",
        fieldInfos: [
            {
                fieldName: "building_name",
                label: "Building Name:",
                visible: true
            }, {
                fieldName: "number_of_units",
                label: "Number of Units:",
                visible: true
            }, {
                fieldName: "number_of_storeys",
                label: "Number of Storeys:",
                visible: true
            }, {
                fieldName: "ward_id",
                label: "Ward ID:",
                visible: true
            }, {
                fieldName: "village_id",
                label: "Village ID:",
                visible: true
            }, {
                fieldName: "subcounty_id",
                label: "Subcounty ID:",
                visible: true
            }, {
                fieldName: "PLOTNO_",
                label: "Plot No:",
                visible: true
            }, {
                fieldName: "building_id",
                label: "Building ID:",
                visible: true
            }, {
                fieldName: "gis_code",
                label: "GIS Code:",
                visible: true
            }]
    });
    
    
                //Define pop up for other features
    var otherTemplate = new PopupTemplate({
        title: "Parking",
        //description: "Name: {name}",
        fieldInfos: [{
                fieldName: "name",
                label: "Name:",
                visible: true
            }, {
                fieldName: "gis_code",
                label: "GIS Code:",
                visible: true
            }]
    });
            //Define pop up for parking areas
    var parkingTemplate = new PopupTemplate({
        title: "Parking",
        //description: "Name: {name}",
        fieldInfos: [{
                fieldName: "name",
                label: "Name:",
                visible: true
            }, {
                fieldName: "capacity",
                label: "Capacity:",
                visible: true
            }, {
                fieldName: "gis_code",
                label: "GIS Code:",
                visible: true
            }]
    });

    //Define pop up for parcels
    var parcelsTemplate = new PopupTemplate({
        title: "Parcel",
        //description: "Plot No: {PLOTNO_}",
        fieldInfos: [
            {
                fieldName: "giskwalerms.SDE.Parcels.ENTITY",
                label: "Entity:",
                visible: true
            }, {
                fieldName: "LAYER",
                label: "Layer:",
                visible: true
            }, {
                fieldName: "LEVEL_",
                label: "Level:",
                visible: true
            }, {
                fieldName: "ELEVATION",
                label: "Elevation:",
                visible: true
            }, {
                fieldName: "COLOR",
                label: "Color:",
                visible: true
            }, {
                fieldName: "PLOTNO_",
                label: "Plot No:",
                visible: true
            }, {
                fieldName: "NAME",
                label: "Name:",
                visible: true
            }, {
                fieldName: "BLOCK",
                label: "Block:",
                visible: true
            }, {
                fieldName: "CLASS",
                label: "Class:",
                visible: true
            }, {
                fieldName: "balance",
                label: "Balance:",
                visible: true
            }, {
                fieldName: "gis_code",
                label: "GIS Code:",
                visible: true
            }]
    });
            
            
            
            
    var testPointLayer = new FeatureLayer("http://kdc-srv-073.tbldc.com:6080/arcgis/rest/services/test/kwale_test103/FeatureServer/0", {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        infoTemplate: testPointTemplate,
        id: "testPointLayer"
    });           
    var outdoorAdvertisementLayer = new FeatureLayer("http://kdc-srv-073.tbldc.com:6080/arcgis/rest/services/test/kwalerms3/MapServer/0", {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        infoTemplate: outdoorTemplate,
        id: "outdoorAdvertisementLayer"
    });
    var marketLayer = new FeatureLayer("http://kdc-srv-073.tbldc.com:6080/arcgis/rest/services/test/kwalerms3/MapServer/1", {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        infoTemplate: marketTemplate,
        id: "marketLayer"
    });
    var houseLayer = new FeatureLayer("http://kdc-srv-073.tbldc.com:6080/arcgis/rest/services/test/kwalerms3/MapServer/2", {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        infoTemplate: houseTemplate,
        id: "houseLayer"
    });
    var buildingLayer = new FeatureLayer("http://kdc-srv-073.tbldc.com:6080/arcgis/rest/services/test/kwalerms3/MapServer/3", {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        infoTemplate: buildingsTemplate,
        id: "buildingLayer"
    });
    var otherLayer = new FeatureLayer("http://kdc-srv-073.tbldc.com:6080/arcgis/rest/services/test/kwalerms3/MapServer/4", {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        infoTemplate: otherTemplate,
        id: "otherLayer"
    });
    var parkingLayer = new FeatureLayer("http://kdc-srv-073.tbldc.com:6080/arcgis/rest/services/test/kwalerms3/MapServer/5", {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        infoTemplate: parkingTemplate,
        id: "parkingLayer"
    });
    var parcelsLayer = new FeatureLayer("http://kdc-srv-073.tbldc.com:6080/arcgis/rest/services/test/kwalerms3/MapServer/6", {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        opacity: 0.7,
        infoTemplate: parcelsTemplate,
        id: "parcelsLayer"
    });

    //Add feature layers to map
    myMap.addLayers([ parcelsLayer, buildingLayer, houseLayer, marketLayer, outdoorAdvertisementLayer, testPointLayer, parkingLayer, otherLayer]);


    //Add a legend to the map
    myMap.on("layers-add-result", function() {
                var dijitLegend = new Legend({
                    map: myMap,
                    arrangement: Legend.ALIGN_LEFT
                }, "divLegend");
                dijitLegend.startup();
        }
        ); 
//
//        var chart = new Cedar({
//	"type": "grouped",
//	"tooltip": {
//		"title": "{Building_Name}",
//		"content": "Invoice: {invoice_total} <br /> Reciept: {receipt_total} <br /> Balance: {balance}"
//	},
//	"dataset":{
//	  "url": "http://192.168.10.73:6080/arcgis/rest/services/test/kwale_test103/FeatureServer/7",
//          "query": {
//              "groupByFieldsForStatistics":"GIS_code",
//              "outStatistics": {"statisticType":"sum","onStatisticField":"invoice_total","outStatisticFieldName":"sum_invoice"}},
//	  "mappings":{
//	    "x": {"field":["GIS_code"],"label":"GIS Code"},
//	    "group":{"field":"sum_invoice","label":"Amount"}
//	  }
//	}
//    });
    
    
    var chart = new Cedar({"type": "grouped",
        "tooltip": {
		"title": "{GIS_code}",
		"content": "Invoice: {sum_invoice} <br /> Reciept: {sum_receipt} <br /> Balance: {sum_balance}"
	}
    });
    
    var dataset = {
            "url": "http://kdc-srv-073.tbldc.com:6080/arcgis/rest/services/test/kwale_test103/FeatureServer/0",
            "query": {
              "groupByFieldsForStatistics":"GIS_code",
              "outStatistics": [{
                      "statisticType":"sum",
                      "onStatisticField":"invoice_total",
                      "outStatisticFieldName":"sum_invoice"
                  },
              {"statisticType":"sum",
                "onStatisticField":"receipt_total",
                "outStatisticFieldName":"sum_receipt"},
            {"statisticType":"sum",
                "onStatisticField":"balance",
                "outStatisticFieldName":"sum_balance"}
        ]
          },
            "mappings": {
                "x": {"field":["attributes.sum_invoice", "attributes.sum_receipt", "attributes.sum_balance"],"label":"Amount"},
                "group": {"field": "GIS_code", "label": "GIS Code"}
            }
        };

        chart.dataset = dataset;

    chart.show({
	elementId: "#Graphs",
	height: 400,
        width: 1400
    });
    
     window.chart = chart;
    

    function onExtentChanged() {
        var extent = myMap.extent;
        extent = JSON.stringify(extent);
        chart.dataset.query.geometry = extent;
        chart.update();
    }
    
        //Fires when the map extent changes to update the chart
    myMap.on('extent-change', function () {
        onExtentChanged();
    });



    });