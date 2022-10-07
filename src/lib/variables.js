export const env = {
	mailgunDomain: import.meta.env.VITE_MAILGUN_DOMAIN,
	mailgunApiKey: import.meta.env.VITE_MAILGUN_API_KEY
};

export const socialMediaProfiles = [
	{
		name: 'LinkedIn',
		icon: new URL('/linkedin-icon.png', import.meta.url).href,
		url: 'https://www.linkedin.com/in/thispankajarora'
	},
	{
		name: 'GitHub',
		icon: new URL('/github-icon.svg', import.meta.url).href,
		url: 'https://github.com/arora-pankaj'
	}
];
