import React from 'react';
import './Statistic.css';
import Menu from "../../Menu";
import data from "./json/carByWeight.json"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar, Line, Pie} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function WeightStatistic() {
    return (
        <div className="background">
            <Menu/>
        <div className="statistic" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh'}}>
            {/*<Bar
                data = {data}
                options = {{
                    responsive: true,
                    title: {
                        display:true,
                        text:'Ilość samochodów ze względu na wagę i Państwo'
                    },
                    legend: {
                        display:true,
                        position:'right'
                    }
                }}
            />*/}
        </div>
        </div>
    );
}

export default WeightStatistic;
