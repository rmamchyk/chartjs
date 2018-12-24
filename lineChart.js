const chart = document.getElementById('chart');

//Chart.defaults.global.responsive = false;
Chart.defaults.global.animation.onComplete = () => {
    console.log('complete');
};
Chart.defaults.global.animation.duration = 200;

const options = {
    showLines: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                fontSize: 14,
                fontStyle: 'bold',
                maxTicksLimit: 5,
            }
        }]
    }
};

let lineChart = new Chart(chart, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75, 75, 192, 0.4)',
            borderColor: 'rgba(75, 72, 192, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75, 72, 192, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75, 72, 192, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointBackgroundColor: 'rgba(75, 72, 192, 1)',
            pointHitRadius: 10,
            data: [100, 20, 60, 20, 80, 55, 90]
        }]
    },
    options 
});