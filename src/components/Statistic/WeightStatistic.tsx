import React from 'react';
import './Statistic.css';
import Menu from "../../Menu";
import data from "./json/carByWeight.json"
import {Bar, Line, Pie} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function WeightStatistic() {

    let name = [];
    let smallWeight = [];
    let mediumWeight = [];
    let secondMediumWeight = [];
    let highWeight = [];

    for (const dataObj of data.data) {
        name.push(dataObj.name);
        smallWeight.push(dataObj.smallWeight);
        mediumWeight.push(dataObj.mediumWeight);
        secondMediumWeight.push(dataObj.secondMediumWeight);
        highWeight.push(dataObj.highWeight);
    }

    return (
        <div className="background">
            <Menu/>
        <div className="statistic" style={{display: 'flex', marginLeft:'auto', marginRight:'auto', textAlign:'center',  justifyContent:'center', alignItems:'center', height: '90vh', width:'80vw'}}>
            <Bar
                data ={{
                    labels: name,
                    datasets: [
                        {
                            label: 'mniej niż 1000 kg',
                            data: smallWeight,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 3
                        },
                        {
                            label: 'od 1000 do 1249 kg',
                            data: mediumWeight,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 3
                        },
                        {
                            label: 'od 1250 do 1499 kg',
                            data: secondMediumWeight,
                            backgroundColor: 'rgba(255, 206, 86, 0.2)',
                            borderColor: 'rgba(255, 206, 86, 1)',
                            borderWidth: 3
                        },
                        {
                            label: '1500 kg oraz ponad',
                            data: highWeight,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 3
                        }
                    ],
                }}
                options = {{
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Ilość samochodów ze względu na wagę'
                        },
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    }
                }}
            />
        </div>
        </div>
    );
}

export default WeightStatistic;
