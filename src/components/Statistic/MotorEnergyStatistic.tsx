import React from 'react';
import './Statistic.css';
import Menu from "../../Menu";
import data from "./json/carsByMotorEnergy.json"
import {Bar, Line, Pie, Doughnut, PolarArea} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    BarElement,
    LineElement,
    Title,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
);

function MotorEnergyStatistic() {

    let name = [];
    let petrol = [];
    let diesel = [];
    let other = [];


    for (const dataObj of data.data) {
        name.push(dataObj.name);
        petrol.push(dataObj.petrol);
        diesel.push(dataObj.diesel);
        other.push(dataObj.other);
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
                                label: 'benzyna',
                                data: petrol,
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 3
                            },
                            {
                                label: 'diesel',
                                data: diesel,
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 3
                            },
                            {
                                label: 'inne',
                                data: other,
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
                                text: 'Ilość samochodów ze względu na rodzaj paliwa'
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

export default MotorEnergyStatistic;
