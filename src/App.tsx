import { useState } from 'react'
import proj4 from 'proj4'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// Parte lógica do cógido

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
  const UTMsul: Record<number, any> = { 17: utm17s, 18: utm18s, 19: utm19s, 20: utm20s, 21: utm21s, 22: utm22s, 23: utm23s, 24: utm24s, 25: utm25s };
  const UTMnorte: Record<number, any> = { 18: utm18n, 19: utm19n, 20: utm20n, 21: utm21n, 22: utm22n };
  let cordenadasgps: Cordenadas[] = [];
  let cordenadasutm: Cordenadas[] = [];

  type Cordenadas = {
    latitude: number;
    longitude: number;
  };
  function handleSubmit(e: React.FormEvent  <HTMLFormElement>) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let latitude = formData.get("latitude") as string;
    let longitude = formData.get("longitude") as string;
    cordenadasgps.push({ latitude: parseFloat(latitude), longitude: parseFloat(longitude) });
     e.currentTarget.reset();
    console.log(cordenadasgps);
  }
  // Falta implementar a função de conversão de coordenadas GPS para UTM, que deve ser chamada após a inserção das coordenadas GPS.
  function conversao(e: React.FormEvent  <HTMLFormElement>){
    e.preventDefault();
  for (const { latitude, longitude } of cordenadasgps) {
    const zona = Math.floor((longitude + 180) / 6) + 1;
    let epsg;
   if (latitude < 0) {
    epsg = UTMsul[zona];
    
  }else {
    epsg = UTMnorte[zona];

  }
  cordenadasutm.push(proj4("EPSG:4674", epsg).forward([longitude, latitude]));
  console.log(cordenadasutm)
  }
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form onSubmit={handleSubmit}>
        Insira latitude: <input type="text" name="latitude" id="latitude" />
        Insira longitude: <input type="text" name="longitude" id="longitude" />
        <button type="submit">Enviar</button>
      </form>
      <form onSubmit={conversao}>
        <button type="submit">"converter</button>
      </form>
    </>
  )
}
export default App
