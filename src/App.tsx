import React from 'react';
import './App.css';
import Menu from "./Menu";

function App() {
  return (
    <div className="map-size">
        <Menu/>
        <img src="./images/legenda.png" alt="Legenda" style={{position: 'absolute', marginLeft: 30}}/>
        <div>
            <img src="./images/szwecja.png" alt="Sweden" width={300} style={{marginTop: 210, marginLeft: 930 }}/>
        </div>
        <div>
            <img src="./images/norwegia.png" alt="Norway" width={300} style={{ marginTop: -400, marginLeft: 620 }}/>
        </div>
        <div>
            <img src="./images/polska.png" alt="Poland" width={300} style={{ marginTop: 10, marginLeft: 1020 }}/>
        </div>
        <div>
            <img src="./images/niemcy.png" alt="Germany" width={300} style={{ marginTop: -130, marginLeft: 720 }}/>
        </div>
        <div>
            <img src="./images/francja.png" alt="France" width={300} style={{ marginTop: -50, marginLeft: 470 }}/>
        </div>
        <div>
            <img src="./images/hiszpania.png" alt="Spain" width={300} style={{ marginTop: -50, marginLeft: 180 }}/>
        </div>
        <div>
            <img src="./images/wlochy.png" alt="Italy" width={300} style={{ marginTop: -450, marginLeft: 800 }}/>
        </div>
    </div>
  );
}

export default App;
