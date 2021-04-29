import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
    labels: ['Algorithms And Complexity', 'Architecture And Organization', 'Computational Science', 'Database Development', 'Graphics And Visual Computing', 'Human-Computer Interaction', 'Information Management', 'Intelligent Systems'],
    datasets: [
        {
            label: '# of Votes',
            data: [3, 1, 2, 1, 4, 4, 4, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(215, 17, 62, 0.2)',
                'rgba(9,195,50, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(215, 17, 62, 1)',
                'rgba(9, 195, 50, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const PieChart = () => (
    <>
        <div className='header'>
            <h1 className='title'>Survey Results</h1>
        </div>
        <Pie data={data}
        />
    </>
);

export default PieChart;