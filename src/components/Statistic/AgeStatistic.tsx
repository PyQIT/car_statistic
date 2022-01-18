import React from 'react';
import './Statistic.css';
import Menu from "../../Menu";
import data from "./json/carsByAge.json"
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

function AgeStatistic() {
    let name = [];
    let years02 = [];
    let years25 = [];
    let years510 = [];
    let years1020 = [];
    let years20x = [];

    for (const dataObj of data.data) {
        name.push(dataObj.name);
        years02.push(dataObj.years02);
        years25.push(dataObj.years25);
        years510.push(dataObj.years510);
        years1020.push(dataObj.years1020);
        years20x.push(dataObj.years20x);
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
                                label: 'mniej niż 2 lata',
                                data: years02,
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 3
                            },
                            {
                                label: 'od 2 lat do 5 lat',
                                data: years25,
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 3
                            },
                            {
                                label: 'od 5 lat do 10 lat',
                                data: years510,
                                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                                borderColor: 'rgba(255, 206, 86, 1)',
                                borderWidth: 3
                            },
                            {
                                label: 'od 10 lat do 20 lat',
                                data: years1020,
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 3
                            },
                            {
                                label: 'od 20 lat',
                                data: years20x,
                                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                                borderColor: 'rgba(153, 102, 255, 1)',
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

export default AgeStatistic;
