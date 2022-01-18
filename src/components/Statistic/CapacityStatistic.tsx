import React from 'react';
import './Statistic.css';
import Menu from "../../Menu";
import data from "./json/carsByCapacity.json"
import {Bar, Line, Pie} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);


function CapacityStatistic() {
    let name = [];
    let capacityLow = [];
    let capacityMedium = [];
    let capacityHigh = [];


    for (const dataObj of data.data) {
        name.push(dataObj.name);
        capacityLow.push(dataObj.capacityLow);
        capacityMedium.push(dataObj.capacityMedium);
        capacityHigh.push(dataObj.capacityHigh);
    }

    return (
        <div className="background">
            <Menu/>
            <div className="statistic" style={{display: 'flex', marginLeft:'auto', marginRight:'auto', textAlign:'center',  justifyContent:'center', alignItems:'center', height: '90vh', width:'80vw'}}>
                <Line
                    data ={{
                        labels: name,
                        datasets: [
                            {
                                label: 'mniej niż 1400 cm3',
                                data: capacityLow,
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 3
                            },
                            {
                                label: 'od 1400 cm3 do 1999 cm3',
                                data: capacityMedium,
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 3
                            },
                            {
                                label: 'od 2000 cm3 i więcej',
                                data: capacityHigh,
                                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                                borderColor: 'rgba(255, 206, 86, 1)',
                                borderWidth: 3
                            }
                        ],
                    }}
                    options = {{
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Ilość samochodów ze względu na pojemność'
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

export default CapacityStatistic;
