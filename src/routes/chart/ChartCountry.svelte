<!-- PolarAreaChart.svelte -->
<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    // Data for the 10 most populated countries (example data)
    const data = {
      labels: ["China", "India", "United States", "Indonesia", "Pakistan", "Brazil", "Nigeria", "Bangladesh", "Russia", "Mexico"],
      datasets: [
        {
          label: "Population",
          data: [1444216107, 1393409038, 331002651, 273523615, 220892340, 212559417, 206139589, 164689383, 145934462, 128932753],
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
  
    let chart; // Reference to the chart instance
  
    onMount(() => {
      // Get the canvas element to render the chart
      const ctx = document.getElementById("polar-area-chart").getContext("2d");
  
      // Create the Polar Area Chart
      chart = new Chart(ctx, {
        type: "polarArea",
        data: data,
      });
    });
  </script>
  
  <canvas id="polar-area-chart" width="200" height="200"></canvas>
  
  <style>
    /* Add any additional styles for the chart container here */
  </style>
  