const chart = document.getElementById('chart');

Chart.defaults.scale.ticks.beginAtZero = true;

let barChart = new Chart(chart, {
    type: 'radar',
    data: {
        labels: ['Strength', 'Skill', 'Health', 'Speed', 'Luck'],
        datasets: [
            {
                label: 'Points',
                borderColor: '#00FF00',
                backgroundColor: 'rgba(00, 255, 00, 0.1)',
                borderWidth: 2,
                data: [10, 20, 55, 30, 10]
            },
            {
                label: 'Points',
                borderColor: '#00FFFF',
                backgroundColor: 'rgba(0, 255, 255, 0.1)',
                borderWidth: 2,
                data: [5, 100, 20, 70, 80]
            }
        ]
    }
});