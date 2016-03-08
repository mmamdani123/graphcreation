/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 window.dojoConfig = {
            async : true,
            packages: [
         {
            name: 'd3',
            //location: 'http://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5',
            location: location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/subfolder/js/cedarfiles',
            main: 'd3.min'
        }, {
            name: 'topojson',
            //location: 'http://cdnjs.cloudflare.com/ajax/libs/topojson/1.6.19',
            location: location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/subfolder/js/cedarfiles',
            main: 'topojson.min'
        }, {
            name: 'vega',
            //location: 'http://vega.github.io/vega/',
            location: location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/subfolder/js/cedarfiles',
            main: 'vega.min'
        }, {
            name: 'cedar',
            location: location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/subfolder/js/cedarfiles',
            main: 'cedar'
        }]
};
        
        
            //Make call to agsjs Table of Content
    /*paths: {
     //if you want to host on your own server, download and put in folders then use path like: 
     agsjs: location.pathname.replace(/\/[^/]+$/, '') + '/assets/agsjs'
     }*/
    //parseOnLoad: true,
   
        /*
        
        {
            
             
            /name: "agsjs",
            location: location.pathname.replace(/\/[^/]+$/, "") + '/../kwalerms/assets/agsjs'
            //location: 'http://localhost:8383/FacilitiesViewer/assets/agsjs' // for xdomain load  
            //"location": 'http://gmaps-utility-gis.googlecode.com/svn/tags/agsjs/latest/build/agsjs' // for xdomain load 
        },
        
        */
        //Cedar.js chart libraries
       
        
