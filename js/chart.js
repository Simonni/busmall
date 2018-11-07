'use strict'

let elChartContainer = document.getElementById('chart-container')
let ctx = elChartContainer.getContext('2d')

function displayChart() {
  let elChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [cities[0].title, cities[1].title, cities[2].title, cities[3].title,cities[4].title,cities[5].title,cities[6].title, cities[7].title],
      datasets: [
        {label: 'Number of Clicked',
        data: [cities[0].clicked, cities[1].clicked, cities[2].clicked, cities[3].clicked, cities[4].clicked, cities[5].clicked, cities[6].clicked, cities[7].clicked],
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 1},
      
        {label: 'Number of Shown',
        data: [cities[0].shown, cities[1].shown, cities[2].shown, cities[3].shown, cities[4].shown, cities[5].shown, cities[6].shown, cities[7].shown],
        backgroundColor: 'yellow',
        borderColor: 'yellow',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  })
}