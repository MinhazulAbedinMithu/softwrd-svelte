<svelte:head>
	<title>Chart</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	import { onMount } from 'svelte';
  	import { countryDataStore, fetchCountryData } from './countryDataStore';
  import ChartCountry from './ChartCountry.svelte';

	let countries = []; // Initialize as an empty array

  // Use onMount to fetch data when the component is mounted
  onMount(() => {
    fetchCountryData().then(() => {
      // Access the data from the store after it's fetched
      countries = $countryDataStore;
    });
  });
  </script>
 

<div class="text-column">
	<h1 class="text-3xl text-green-600">Chart Page</h1>

	<!-- {#each countries as country}
  <div>{country.name.common}</div>
{/each} -->
</div>




<div class="flex items-start justify-between">
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
			  <td>{country.unMember ? 'Yes' : 'No'}</td>
			  <td>{country.currencies && Object.keys(country.currencies || {}).join(', ')}</td>
			  <td>{country.population}</td>
			  <td>{Object.values(country.languages || {})?.join(", ")}</td>
			</tr>
		  {/each}
		</tbody>
	</table>
	<ChartCountry/>
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