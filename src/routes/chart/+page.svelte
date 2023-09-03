<svelte:head>
	<title>Chart</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  	import { countryDataStore, fetchCountryData } from '../../lib/stores/countryDataStore';
//   import ChartCountry from './ChartCountry.svelte';

	let countries = []; // Initialize as an empty array
	let top10Countries = [];
	  // Function to get the top 10 countries by population
	function getTop10Countries(countries) {
		return countries
		.slice()
		.sort((a, b) => b.population - a.population)
		.slice(0, 10);
	}

	let chart;

  // Use onMount to fetch data when the component is mounted
  onMount(() => {
    fetchCountryData().then(() => {
      // Access the data from the store after it's fetched
      countries = $countryDataStore;
	  top10Countries = getTop10Countries(countries);
	  const ctx = document.getElementById("polar-area-chart").getContext("2d");
     let data = {
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
    });
	
  </script>
 




<div class="px-4 md:px-14 py-2 w-full flex items-start justify-between">
	<div class="w-1/2">
		<table class="bg-white table-auto">
			<thead>
			  <tr>
				<th class="w-auto">Flag</th>
				<th class="w-auto">Name</th>
				<th class="w-auto">CIOC</th>
				<th class="w-[15%]">UN Member Status</th>
				<th class="w-[14%]">Currencies (Key)</th>
				<th class="w-auto">Population</th>
				<th class="w-auto">Languages</th>
			  </tr>
			</thead>
			<tbody>
			  {#each countries as country}
				<tr>
				  <td><img src={country.flags.png} alt={country.name.common} width="50" /></td>
				  <td>{country.name.common}</td>
				  <td>{country.cioc || ""}</td>
				  <td class="text-center"><span class="bg-gray-300 px-2 py-1 rounded-sm">{country.unMember ? 'Yes' : 'No'}</span></td>
				  <td>{country.currencies && Object.keys(country.currencies || {}).join(', ')}</td>
				  <td>{country.population}</td>
				  <td>{Object.values(country.languages || {})?.join(", ")}</td>
				</tr>
			  {/each}
			</tbody>
		</table>
	</div>
	<div class="w-1/2">
		<!-- <ChartCountry /> -->

		<canvas id="polar-area-chart" width="200" height="200"></canvas>
	</div>
</div>
  
 <style>
	table {
	  width: 100%;
	  border-collapse: collapse;
	}
	th, td {
	  border: 1px solid #ddd;
	  padding: 4px 7px;
	  text-align: left;
	  /* width: auto; */
	  /* width: 12%; */
	  font-size: 12px;
	}
  
	th {
	  background-color: #f2f2f2;
	}
  </style>