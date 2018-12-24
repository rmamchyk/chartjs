const chart = document.getElementById('chart');

Chart.defaults.scale.ticks.beginAtZero = true;

let options = {
    tooltips: {
        enabled: true,
        backgroundColor: 'purple',
        titleFontColor: 'white',
        titleSpacing: 5,
        titleMarginBottom: 20,
        yPadding: 15,
        xPadding: 15,
        caretSize: 0
    }
}

let barChart = new Chart(chart, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
            {
                label: 'Numbers per month',
                borderColor: '#00FF00',
                backgroundColor: '#00FF00',
                borderWidth: 2,
                data: [10, 20, 55, 30]
            }
        ]
    },
    options
});