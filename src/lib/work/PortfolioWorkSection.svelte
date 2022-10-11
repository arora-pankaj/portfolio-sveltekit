<script lang="ts">
	import ionLogo from './ION-Logo.png';
	import dtuLogo from './DTU-logo.webp';
	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<div class="max-w-3xl font-serif" style="width: {0.6 * innerWidth}px;">
	<div
		class="font-mono text-center text-2xl sm:text-3xl font-bold tracking-wider pb-4 md:pb-6 lg:pb-8"
		style="color: var(--text-secondary);"
	>
		Timeline
	</div>
	<div class="card card-main card-left card-start card-continue-bottom">
		<a
			href="https://iongroup.com/"
			class="font-sans flex flex-col gap-3 md:flex-row md:justify-between pt-2 md:pt-4"
		>
			<div>
				<p>2016-Present</p>
				<h2>ION Group</h2>
			</div>
			<img
				src={ionLogo}
				alt="ION Trading logo"
				class="rounded-2xl w-32 sm:w-44 md:w-52 lg:w-56"
				style="background-color: var(--text-primary);"
			/>
		</a>
	</div>
	<div class="card card-left card-continue-top card-continue-bottom">
		<div>
			<h3>Improve Performance of Queries on In-Memory Data</h3>
			<p>
				Implemented configurable multi-column indexes on in-memory data to improve performance of
				SQL queries by 80%. Using XML to provide configuration of data model and index and Java for
				implemntaiton on server.
			</p>
		</div>
	</div>
	<div class="card card-left card-continue-top card-continue-bottom">
		<h3>Seamless release of Documentation to Clients</h3>
		<p>
			Migrated all client facing and internal documentation to version control. Automated the
			documentation review and upload to wordpress environment using Python, and Docker. Removed the
			delays in solution release due to documenation reviews.
		</p>
	</div>
	<div class="card card-left card-continue-top card-continue-bottom">
		<h3>Release Management Tracking Portal</h3>
		<p>
			Initiated, analysed, and implemented an internal portal for product management to visualise,
			track, and create client releases using Python, and Django. Provided easy deployment using
			Blue-Green deployment methedology.
		</p>
	</div>
	<div class="card card-left card-continue-top card-continue-bottom">
		<h3>Foreign Exchange Sales Portal</h3>
		<p>
			Implemented the low latency multi-threaded application to stream and aggregate prices from
			liquidity providers using Java, and Hibernate. Responsible for setup of the CI pipeline using
			Docker and Jenkins on AWS (EC2 and ECS).
		</p>
	</div>
	<div class="card card-left card-continue-top card-to-right">
		<h3>Straight Through Processing Solution</h3>
		<p>
			Involved from the analysis, development to client deployments and monitoring for the solution.
			Developed the back-office STP solution for FX trades using Java, Hibernate, and Guice. Reduced
			the deployment time by 70% on client environments (both linux and windows machines) using
			Ansible and Jenkins.
		</p>
	</div>
	<div class="card card-main card-right card-from-left card-end">
		<a
			href="http://dtu.ac.in/"
			class="font-sans flex flex-col gap-3 md:flex-row-reverse md:justify-between pt-2 md:pt-4"
		>
			<div>
				<p>2012-2016</p>
				<h2>Delhi Technological University</h2>
				<p class="font-bold">Bachelor of Technology</p>
				<p>Mathematics and Computing Engineering</p>
			</div>
			<img
				src={dtuLogo}
				alt="DTU logo"
				class="rounded-full w-28 sm:w-40 md:w-48 lg:w-52 place-self-center"
			/>
		</a>
	</div>
</div>

<style>
	.card {
		--tl-padding: 1rem;
		--tl-line-width: 0.4rem;
		--tl-radius: 2rem;

		--tl-card-padding-top: calc(0.5 * var(--tl-padding));
		--tl-card-padding-right: var(--tl-padding);
		--tl-card-padding-bottom: calc(0.5 * var(--tl-padding));
		--tl-card-padding-left: var(--tl-padding);

		--tl-card-border-top: var(--tl-line-width);
		--tl-card-border-right: var(--tl-line-width);
		--tl-card-border-bottom: var(--tl-line-width);
		--tl-card-border-left: var(--tl-line-width);

		--tl-card-radius-tl: var(--tl-radius);
		--tl-card-radius-tr: var(--tl-radius);
		--tl-card-radius-br: var(--tl-radius);
		--tl-card-radius-bl: var(--tl-radius);

		position: relative;
		padding: var(--tl-card-padding-top) var(--tl-card-padding-right) var(--tl-card-padding-bottom)
			var(--tl-card-padding-left);
	}

	.card::before {
		content: '';
		position: absolute;
		width: 50%;
		border: solid var(--accent-color);
		border-width: var(--tl-card-border-top) var(--tl-card-border-right) var(--tl-card-border-bottom)
			var(--tl-card-border-left);
		border-radius: var(--tl-card-radius-tl) var(--tl-card-radius-tr) var(--tl-card-radius-br)
			var(--tl-card-radius-bl);
	}

	.card::after {
		content: '';
		position: absolute;
		width: 0.8rem;
		height: 0.8rem;
		background: var(--text-tertiary);
		border-radius: 999px;
		border: 3px solid var(--accent-color);
		top: var(--tl-padding);
	}

	.card.card-main::after {
		height: 2rem;
	}

	.card.card-left {
		text-align: left;
		--tl-card-padding-right: 0;
		--tl-card-border-right: 0;
	}
	.card.card-left::before {
		left: 0;
		top: calc(-0.5 * var(--tl-line-width));
		bottom: calc(-0.5 * var(--tl-line-width));
	}

	.card.card-from-right {
		--tl-card-padding-top: var(--tl-padding);
		--tl-card-radius-tr: 0;
	}
	.card.card-to-right {
		--tl-card-padding-bottom: var(--tl-padding);
		--tl-card-radius-br: 0;
	}

	.card.card-from-left {
		--tl-card-padding-top: var(--tl-padding);
		--tl-card-radius-tl: 0;
	}
	.card.card-to-left {
		--tl-card-padding-bottom: var(--tl-padding);
		--tl-card-radius-bl: 0;
	}
	.card.card-continue-top {
		--tl-card-border-top: 0;
		--tl-card-radius-tl: 0;
		--tl-card-radius-tr: 0;
	}
	.card.card-continue-bottom {
		--tl-card-border-bottom: 0;
		--tl-card-radius-bl: 0;
		--tl-card-radius-br: 0;
	}

	.card.card-left::after {
		left: calc(-0.5 * var(--tl-line-width));
	}

	.card.card-right {
		text-align: right;
		--tl-card-padding-left: 0;
		--tl-card-border-left: 0;
	}

	.card.card-right::before {
		right: 0;
		top: calc(-0.5 * var(--tl-line-width));
		bottom: calc(-0.5 * var(--tl-line-width));
	}

	.card.card-right::after {
		right: calc(-0.5 * var(--tl-line-width));
	}

	.card.card-start {
		--tl-card-border-top: 0;
		--tl-card-radius-tl: 0;
		--tl-card-radius-tr: 0;
	}
	.card.card-end {
		--tl-card-border-bottom: 0;
		--tl-card-radius-bl: 0;
		--tl-card-radius-br: 0;
	}

	.card p {
		font-size: 0.75rem;
		line-height: 1rem;
	}
	.card h2 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 700;
		letter-spacing: 0.05em;
	}
	.card h3 {
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 700;
		letter-spacing: 0.05em;
	}

	@media only screen and (min-width: 360px) {
		.card p {
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
		.card h2 {
			font-size: 1.125rem;
			line-height: 1.75rem;
			font-weight: 700;
			letter-spacing: 0.05em;
		}
		.card h3 {
			font-size: 0.875rem;
			line-height: 1.25rem;
			font-weight: 700;
			letter-spacing: 0.05em;
		}
	}

	@media only screen and (min-width: 640px) {
		.card p {
			font-size: 1rem;
			line-height: 1.5rem;
		}
		.card h2 {
			font-size: 1.5rem;
			line-height: 2rem;
			font-weight: 700;
			letter-spacing: 0.05em;
		}
		.card h3 {
			font-size: 1rem;
			line-height: 1.5rem;
			font-weight: 700;
			letter-spacing: 0.05em;
		}
	}

	@media only screen and (min-width: 640px) {
		.card {
			--tl-padding: 2rem;
			--tl-radius: 3rem;
		}
	}

	@media only screen and (min-width: 1300px) {
		.card {
			--tl-padding: 3rem;
			--tl-radius: 4rem;
		}
	}
</style>
