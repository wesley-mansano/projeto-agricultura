import './App.css'
import proj4 from 'proj4'
//SIRGAS2000
  proj4.defs("EPSG:4674","+proj=longlat +ellps=GRS80 +no_defs +type=crs");
//UTM Sul
  proj4.defs("EPSG:31977","+proj=utm +zone=17 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");
  proj4.defs("EPSG:31978","+proj=utm +zone=18 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");
  proj4.defs("EPSG:31979","+proj=utm +zone=19 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");
  proj4.defs("EPSG:31980","+proj=utm +zone=20 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");
  proj4.defs("EPSG:31981","+proj=utm +zone=21 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");
  proj4.defs("EPSG:31982","+proj=utm +zone=22 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");
  proj4.defs("EPSG:31983","+proj=utm +zone=23 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");
  proj4.defs("EPSG:31984","+proj=utm +zone=24 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");
  proj4.defs("EPSG:31985","+proj=utm +zone=25 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");
 
  //UTM Norte
  proj4.defs("EPSG:31972","+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");
  proj4.defs("EPSG:31973","+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");
  proj4.defs("EPSG:31974","+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");
  proj4.defs("EPSG:31975","+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");
  proj4.defs("EPSG:31976","+proj=utm +zone=22 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");

  const sirgas2000 = proj4('EPSG:4674');
  const utm17s = proj4('EPSG:31977');
  const utm18s = proj4('EPSG:31978');
  const utm19s = proj4('EPSG:31979');
  const utm20s = proj4('EPSG:31980');
  const utm21s = proj4('EPSG:31981');
  const utm22s = proj4('EPSG:31982');
  const utm23s = proj4('EPSG:31983');
  const utm24s = proj4('EPSG:31984');
  const utm25s = proj4('EPSG:31985');
  const utm18n = proj4('EPSG:31972');
  const utm19n = proj4('EPSG:31973');
  const utm20n = proj4('EPSG:31974');
  const utm21n = proj4('EPSG:31975');
  const utm22n = proj4('EPSG:31976');
  
    
 // Parte lógica do cógido

 
  // Parte visual do código
}

export default App
