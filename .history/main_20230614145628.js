const chart = document.querySelector("#chart").getContext('2d');

var myChart = new chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
         'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    },
    options: {
        responsive: true
    }
})