# Softwrd AI Job Task

## Routes

### Layout (/layout):

- Create Layout with CSS Grid System with Tailwind css grid classes.
- In Desktop screen show all the block. But In small device Showing just 2 block and reduce width.
- Create Mountain icon with only css.[apply content before after with tailwind css class ]

### Chart (/chart):

1. create a writable svelte store.
2. After Page OnMount fetch countries data to store that in svelte store variable.
3. create a table with countries data.
4. Install Chart.js for generate chart.
5. Calculate top 10 population countries to generate chart.

### Map (/map):

1. Install OpenLayer map (ol).
2. Generate full screen width map after header.
3. Trying to generate downloaded geojson vector data. But I cannot fetch that data and cannot access that file path.
4. create a demo vector tiles for testing.

#### Challanges:

Actually I'm React js/Next js Developer. I have no experience with svelte. That's why I face lots of problems,

1. Firstly I facing to generate svelte/store writeable value and use it.
2. Then When I create a chart, after page reloading, I cannot get updated chart data array. after resolve it with another method.
3. I face some problems with OnMount data and props drilling.
4. In /map route, I cannot showed downloaded vector tiles geojson data. Trying to generate downloaded geojson vector data. But I cannot fetch that data and cannot access that file path.
   But, I was collect a small size geojson data to showed it in map.
