import React from 'react';
import './Statistic.css';
import Menu from "../../Menu";
import data from "./json/carsByMotorEnergy.json"

function MotorEnergyStatistic() {
    return (
        <div className="background">
            <Menu/>
            <div className="statistic" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh'}}>
                {/*} <Bar
                data = {data}
                options = {{
                    maintainAspectRatio: false
                }}
            />*/}
            </div>
        </div>
    );
}

export default MotorEnergyStatistic;
