const chart = document.getElementById('chart');

Chart.defaults.scale.ticks.beginAtZero = true;

let barChart = new Chart(chart, {
    type: 'doughnut',
    data: {
        labels: ['Strength', 'Skill', 'Health', 'Speed', 'Luck'],
        datasets: [
            {
                label: 'Points',
                backgroundColor: ['#f1c40f', '#e67e22', '#16a085', '#2980b9', '#8e44ad'],
                data: [10, 20, 55, 30, 10]
            }
        ]
    },
    options: {
        cutoutPercentage: 50,
        rotation: 90,
        animation: {
            animateScale: true
        }
    }
});