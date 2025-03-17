<script lang="ts">
	import amazonLogo from './Amazon-logo.png';
	import ionLogo from './ION-logo.png';
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
		<a href="https://iongroup.com/" class="font-sans flex flex-col md:flex-row md:justify-between">
			<div>
				<p>2023 - Present</p>
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
		<div class="flex justify-between mb-1">
			<h3>Development Manager Responsibilities</h3>
			<p class="team-date">Jan 2024 - Present</p>
		</div>
		<ul>
			<li>
				Leading a high-performing global development team of <b>20+ engineers</b>, driving
				collaboration across multiple time zones
			</li>
			<li>
				Spearheading cross-functional initiatives to enhance development workflows, optimize delivery timelines, and maintain high-quality standards and Mentoring and empowering team members, fostering a culture of ownership, and continuous learning
			</li>
			<li>
				<b>Recruitment & Campus Placement</b> - Developed and implemented standardized online assessments
				using <b>HackerRank</b> which were utilized <b>organization-wide</b> to streamline recruitment for both graduate
				and experienced candidates
			</li>
		</ul>
	</div>
	<div class="card card-left card-continue-top card-to-right">
		<div class="flex justify-between mb-1">
			<h3>DBX</h3>
			<p class="team-date">Feb 2023 - Present</p>
		</div>
		<ul>
			<li>Developed Remote Digital Signature workflow as a service for bank's customers</li>
			<li>
				Developed products marketplace for retail and corporate customers of the banks with self
				purchase and appointment booking process
			</li>
			<li>
				Contributed towards creating an automated Loan approval workflow using <b>Kogito BPMN</b>
				and <b>Quarkus</b> applications
			</li>
			<li>
				Automated deployment of <b>Quarkus</b> Java applications in <b>Kubernetes</b> clusters
			</li>
		</ul>
	</div>
	<div class="card card-main card-right card-from-left card-continue-bottom">
		<a
			href="https://aws.amazon.com/just-walk-out/"
			class="font-sans flex flex-col md:flex-row-reverse md:justify-between"
		>
			<div class="flex flex-col">
				<p>2022 - 2023</p>
				<h2>Amazon</h2>
			</div>
			<img
				src={amazonLogo}
				alt="Amazon logo"
				class="rounded-2xl w-32 sm:w-44 md:w-52 lg:w-56 ml-auto md:ml-0"
			/>
		</a>
	</div>
	<div class="card card-right card-continue-top card-to-left">
		<div class="flex justify-between mb-1 flex-row-reverse">
			<h3>Payments Team - JustWalkout Stores</h3>
			<p class="team-date">Dec 2022 - Mar 2023</p>
		</div>
		<b>SDE-2</b> managing the payment infrastructure for Amazon Go and third party JustWalkOut
		stores.<br />
		Affected by the <b>layoff of whole India vertical</b> due to restructuring of business.
	</div>
	<div class="card card-main card-left card-from-right card-continue-bottom">
		<a
			href="https://iongroup.com/"
			class="font-sans flex flex-col gap-3 md:flex-row md:justify-between"
		>
			<div>
				<p>2016 - 2022</p>
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
		<div class="flex justify-between mb-1">
			<h3>Acuris Xtract Research</h3>
			<p class="team-date">Feb 2020 - Present</p>
		</div>
		<ul>
			<li>
				Responsible for development, deployment and maintenance of public Xtract application on <b
					>AWS</b
				>
				and <b>Redhat OpenShift</b>
			</li>
			<li>
				Keyword based search on documents and deals using <b>OpenSearch</b> and Document matching and
				approvals using custom tokenization of document content
			</li>
			<li>
				Document management using <b>AWS S3</b> and <b>MongoDB</b> with real-time integration with
				Microsoft <b>SharePoint</b> using Microsoft Graph API, <b>RestAPI</b>, and <b>webhooks</b>
			</li>
		</ul>
	</div>
	<div class="card card-left card-continue-top card-continue-bottom">
		<div class="flex justify-between mb-1">
			<h3>ARC (Agregation and Reporting)</h3>
			<p class="team-date">Nov 2020 - Jan 2022</p>
		</div>
		<ul>
			<li>
				<b>Improve performance</b> of SQL queries <b>by 80%</b> by implementing configurable
				multi-column indexes on in-memory data.<br />
				Using <b>XML</b> to provide configuration of data model and index and <b>Java</b> for implemntaiton
				on server.
			</li>
			<li>
				Automated release of clients facing and internal documentation from version control using
				<b>WordPress</b>, <b>Python</b> and <b>Docker</b>.<br />
				Removed the delays in solution release by automating the documenation reviews.
			</li>
		</ul>
	</div>
	<div class="card card-left card-continue-top card-continue-bottom">
		<div class="flex justify-between mb-1">
			<h3>ION-FX STP (WSS FX)</h3>
			<p class="team-date">Feb 2017 - Oct 2020</p>
		</div>
		<ul>
			<li>
				Developed back-office STP (Straight Through Processing) solution for FX trades using
				<b>Java</b>, <b>Hibernate</b> and <b>MySQL</b>.<br />
				Involved from the initial analysis, development to client deployments and monitoring for the
				solution.
			</li>
			<li>
				Automated the client deployments and monitoring for the solution using <b>Jenkins</b>,
				<b>Ansible</b> and <b>Nagios</b>. Reduced deployment time <b>by 70%</b> on client environments
				(both linux and windows machines).
			</li>
			<li>
				Release Management Tracking Portal<br />
				Initiated, analysed, and implemented an internal portal for product management to visualise,
				track, and create client releases using <b>Python</b> and <b>Django</b>. Provided easy
				deployment using <b>blue-green deployment</b> methedology.
			</li>
		</ul>
	</div>
	<div class="card card-left card-continue-top card-to-right">
		<div class="flex justify-between mb-1">
			<h3>Foreign Exchange Sales Portal</h3>
			<p class="team-date">July 2016 - Jan 2017</p>
		</div>
		<ul>
			<li>
				Implemented low latency multi threaded application to stream and aggregate prices from
				liquidity providers using <b>Java</b>. Responsible for setup of the CI pipeline using
				<b>Docker</b> and <b>Jenkins</b>.
			</li>
		</ul>
	</div>
	<div class="card card-main card-right card-from-left card-end">
		<a
			href="http://dtu.ac.in/"
			class="font-sans flex flex-col gap-3 md:flex-row-reverse md:justify-between"
		>
			<div class="flex flex-col gap-y-0 md:gap-y-2">
				<p>2012-2016</p>
				<h2>Delhi Technological University</h2>
				<p class="font-bold">Bachelor of Technology</p>
				<p>Mathematics and Computing Engineering</p>
			</div>
			<img
				src={dtuLogo}
				alt="DTU logo"
				class="rounded-full w-32 h-28 sm:w-44 sm:h-40 md:w-52 md:h-48 lg:w-56 lg:h-52 place-self-end"
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

	.card .team-date {
		display: none;
	}

	.card ul {
		padding-left: 0.75rem;
		list-style-type: disc;
	}
	.card li {
		font-size: 0.75rem;
		line-height: 1rem;
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
		.card li {
			font-size: 0.875rem;
			line-height: 1.25rem;
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
		.card .team-date {
			display: inline-block;
		}
		.card li {
			font-size: 1rem;
			line-height: 1.5rem;
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
