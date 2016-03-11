var myMap;
        
        
        require([
        "cedar",
        "esri/map",
        "esri/layers/FeatureLayer",
        "esri/dijit/Popup",
        "esri/dijit/PopupTemplate",
        "esri/symbols/SimpleFillSymbol",
        "esri/dijit/Legend",
         
        "dojo/on",


        "dojo/domReady!"], 
    
    
    function(Cedar, 
    
            Map, FeatureLayer, Popup, PopupTemplate,SimpleFillSymbol, Legend,
             on) {
           
        
        myMap = new Map("Map", {
                basemap : "topo",
                 center : [39.452953, -4.174387],
                zoom : 15
            });
            
            myMap.on('extent-change', function() {
      onExtentChanged();
    });

            
            
            
            //Define pop up for outdoor advertisements
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
                fieldName: "plot_no",
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
            
            var outdoorAdvertisementLayer = new FeatureLayer("http://192.168.10.73:6080/arcgis/rest/services/kwale_rms/kwalerms/FeatureServer/0", {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        infoTemplate: outdoorTemplate,
        id: "outdoorAdvertisementLayer"
    });
    var marketLayer = new FeatureLayer("http://192.168.10.73:6080/arcgis/rest/services/kwale_rms/kwalerms/FeatureServer/1", {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        infoTemplate: marketTemplate,
        id: "marketLayer"
    });
    var houseLayer = new FeatureLayer("http://192.168.10.73:6080/arcgis/rest/services/kwale_rms/kwalerms/FeatureServer/2", {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        infoTemplate: houseTemplate,
        id: "houseLayer"
    });
    var buildingLayer = new FeatureLayer("http://192.168.10.73:6080/arcgis/rest/services/kwale_rms/kwalerms/FeatureServer/3", {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        infoTemplate: buildingsTemplate,
        id: "buildingLayer"
    });
    var parkingLayer = new FeatureLayer("http://192.168.10.73:6080/arcgis/rest/services/kwale_rms/kwalerms/FeatureServer/4", {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        infoTemplate: parkingTemplate,
        id: "parkingLayer"
    });
    var parcelsLayer = new FeatureLayer("http://192.168.10.73:6080/arcgis/rest/services/test/kwale_test101/FeatureServer/5", {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        opacity: 0.7,
        infoTemplate: parcelsTemplate,
        id: "parcelsLayer"
    });
    
    //Initialize Administrative Map Layer
    var boundaryLayer = new FeatureLayer("http://192.168.10.73:6080/arcgis/rest/services/test/KwaleAdministrative/MapServer/0", {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        id: "boundaryLayer"
    });
    
    //Add feature layers to map
    myMap.addLayers([boundaryLayer, parcelsLayer, buildingLayer, houseLayer, marketLayer, outdoorAdvertisementLayer, parkingLayer]);

    
    myMap.on("layers-add-result", function() {
                var dijitLegend = new Legend({
                    map: myMap,
                    arrangement: Legend.ALIGN_LEFT
                }, "divLegend");
                dijitLegend.startup();
        }
                 ); 
         
    
        
         //create a cedar chart using the known 'bar' type
  // this is the same as passing {"specification": "path/to/cedar/charts/bar.json"}
  
       
 
      var chart = new Cedar({"type": "bar"});

  //create the dataset w/ mappings
  var dataset = {
    "url":"http://192.168.10.73:6080/arcgis/rest/services/test/kwale_test101/FeatureServer/5",
    "query": {
                "where": "balance > 100000"
            },
            "mappings": {
                "x": {"field": "plot_no", "label": "Plot Number"},
                "y": {"field": "balance", "label": "Balance"}
      }

  };
  
  chart.tooltip = {
    "title": "{plot_no}",
    "content": "{balance} Shillings"
  };

  //assign to the chart
  chart.dataset = dataset;


    chart.override = {
     // "height": 300,
      "marks": [{"properties": {
          "hover": {"fill": {"value": "#f8bb25"}},
          "update": {"fill": {"value": "#c60c46"}}
        }
      }]
    };

  //show the chart
  chart.show({
    elementId: "#Graphs"


  });
      window.chart = chart;
      
      function onExtentChanged(){
      var extent = myMap.geographicExtent.toJson();
      //WESN order
      chart.dataset.query.bbox = extent.xmin + ',' + extent.xmax + ',' + extent.ymin + ',' + extent.ymax;
      chart.update();
    }

  
    });