const chart = document.querySelector("#chart").getContext('2d');

let myChart = new chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
         'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

        datasets: [

            { label: 'BTC',
              data: [29374, 33537, 49631, 59095, 57828, 36684,
              33572, 39974, 48847, 48116, 61004],
              borderColor: 'red',
              borderWidth: 2

            },
            { label: 'ETH',
              data: [29374, 33537, 49631, 59095, 57828, 36684,
              33572, 39974, 48847, 48116, 61004],
              borderColor: 'red',
              borderWidth: 2

            }
        ]
    },
    options: {
        responsive: true
    }
})