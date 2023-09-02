// countryDataStore.js
import { writable } from "svelte/store";

// Create an initial empty store
export const countryDataStore = writable([]);

// Function to fetch data and update the store
export async function fetchCountryData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (response.ok) {
      const data = await response.json();
      // Update the store with the fetched data
      countryDataStore.set(data);
    } else {
      console.error("Failed to fetch data from the API");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
