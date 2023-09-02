<!-- PolarAreaChart.svelte -->
<script>
    import { onDestroy, onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  import { countryDataStore } from '../../lib/stores/countryDataStore';

// Function to get the top 10 countries by population
function getTop10Countries(countries) {
  return countries
    .slice()
    .sort((a, b) => b.population - a.population)
    .slice(0, 10);
}

// Access the data from the store
let countries = [];
let top10Countries = [];
let data = {};
const unsubscribe = countryDataStore.subscribe(data => {
    countries = data;
    top10Countries = getTop10Countries(data);
    
  });

     
  
    let chart; // Reference to the chart instance
    onMount(() => {
      // Get the canvas element to render the chart
      const ctx = document.getElementById("polar-area-chart").getContext("2d");
      data = {
      labels: top10Countries.map(country => country.name.common),
      datasets: [
        {
          label: "Population",
          // data: [1444216107, 1393409038, 331002651, 273523615, 220892340, 212559417, 206139589, 164689383, 145934462, 128932753],
          data: top10Countries.map(country => country.population),
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
          ],
        },
      ],
    };
      // Create the Polar Area Chart
      chart = new Chart(ctx, {
        type: "polarArea",
        data: data,
      });
    });

    onDestroy(unsubscribe);
  </script>
  
  <canvas id="polar-area-chart" width="200" height="200"></canvas>
  
  <style>
    /* Add any additional styles for the chart container here */
  </style>
  