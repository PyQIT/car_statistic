import React from 'react';
import './Statistic.css';
import Menu from "../../Menu";
import data from "./json/carsPerInhabitants.json"
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

function InhabitantsStatistic() {
    let name = [];
    let carPer1000 = [];



    for (const dataObj of data.data) {
        name.push(dataObj.name);
        carPer1000.push(dataObj.carPer1000);
    }

    return (
        <div className="background">
            <Menu/>
            <div className="statistic" style={{display: 'flex', marginLeft:'auto', marginRight:'auto', textAlign:'center',  justifyContent:'center', alignItems:'center', height: '90vh', width:'40vw'}}>
                <PolarArea
                    data ={{
                        labels: name,
                        datasets: [
                            {
                                label: 'samochody',
                                data: carPer1000,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                    'rgba(180, 200, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                    'rgba(180, 200, 64, 1)'
                                ],
                                borderWidth: 3
                            }
                        ],
                    }}
                    options = {{
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Ilość samochodów ze względu na ilość mieszkańców'
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

export default InhabitantsStatistic;
