<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="py-4">
	<!-- <h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1> -->
	<!-- <h1 class="text-3xl font-bold underline text-indigo-700">
		Layout Page
	  </h1> -->

	<div class="container min-h-[80vh] grid grid-cols-4 md:grid-cols-12 grid-rows-6 gap-0">
			<div class="col-span-2 row-span-3 bg-blue-400 hidden md:block"></div>
			<div class="col-span-2 row-span-2 col-start-1 row-start-4 bg-teal-400 hidden md:block"></div>
			<div class="col-span-6 col-start-1 row-start-6 bg-fuchsia-400 hidden md:block"></div>
			<div class="col-span-4 row-span-5 md:col-start-3 md:row-start-1 bg-rose-100 "></div>
			<div class="col-span-6 row-span-2 col-start-7 row-start-1 bg-blue-400 hidden md:block"></div>
			<div class="col-span-4 row-span-4 md:col-start-7 md:row-start-3 bg-yellow-100 flex items-center justify-center">
				<div class="mountain w-[300px] h-[300px] bg-[#293462] flex items-center justify-center">
					<div class="w-[200px] h-[200px] bg-yellow-100 rounded-full relative overflow-hidden before:content-[''] before:absolute before:h-[60px] before:w-[60px] before:bg-[#fe5f55] before:left-[20px] before:bottom-0 before:rotate-45 after:content-[''] after:absolute after:bg-[#fe5f55] after:w-[100px] after:h-[140px] after:rotate-45 after:-bottom-[30px] after:right-[20px]">
						<!-- <div class=" relative overflow-hidden before:content-[''] before:absolute before:h-[100px] before:w-[200px] before:bg-[#fe5f55]"></div> -->
					</div>
				</div>
			</div>
			<div class="col-span-2 row-span-4 col-start-11 row-start-3 bg-emerald-400 hidden md:block"></div>
		
	</div>

	<!-- <Counter /> -->
</section>

<style>
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
