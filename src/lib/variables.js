import ionLogo from './assets/ION-Logo.png';
import dtuLogo from './assets/DTU-logo.webp';
import profilePic from './assets/profile-pic.png';
import aboutPic from './assets/about-pic.png';
import angular from './assets/angular.svg';
import ansible from './assets/ansible.svg';
import css from './assets/css3.svg';
import docker from './assets/docker.svg';
import html from './assets/html5.svg';
import intellij from './assets/intellij.svg';
import java from './assets/java.svg';
import javascript from './assets/javascript.png';
import jenkins from './assets/jenkins.svg';
import mongodb from './assets/mongodb.svg';
import python from './assets/python.svg';
import sql from './assets/SQL.webp';
import svelte from './assets/svelte.svg';
import typescript from './assets/typescript.svg';
import vscode from './assets/vscode.svg';

export const ENV = {
	mailgunDomain: import.meta.env.VITE_MAILGUN_DOMAIN,
	mailgunApiKey: import.meta.env.VITE_MAILGUN_API_KEY
};
export const PROFILE_NAME = 'Pankaj Arora';
export const PROFILE_DESCRIPTION = 'Pankaj Arora Dev Portfolio';
export const PROFILE_TITLES = [
	'A Backend Engineer',
	'A Development Manager',
	'A Java Developer',
	'A DevOps Engineer'
];
export const PROFILE_IMAGE = profilePic;
export const ABOUT_IMAGE = aboutPic;
export const SOCIAL_MEDIA_PROFILES = [
	{
		name: 'Email',
		description: 'contact@thispankaj.com',
		icon: new URL('/mail-icon.svg', import.meta.url).href,
		backgroundColor: 'transparent',
		url: 'mailto:contact@thispankaj.com'
	},
	{
		name: 'LinkedIn',
		description: '/thispankajarora',
		icon: new URL('/linkedin-icon.png', import.meta.url).href,
		backgroundColor: 'white',
		url: 'https://www.linkedin.com/in/thispankajarora'
	},
	{
		name: 'GitHub',
		description: '/arora-pankaj',
		icon: new URL('/github-icon.svg', import.meta.url).href,
		backgroundColor: 'white',
		url: 'https://github.com/arora-pankaj'
	}
];
export const ABOUT_DESCRIPTION = [
	{ text: 'Engineer who cares deeply about automation and user experience.' },
	{ newline: true },
	{ newline: true },
	{
		text: "I'm a developer specializing in building elegant and performing financial applications."
	},
	{ newline: true },
	{ newline: true },
	{ text: "I've had the privilege of working across many different financial products as part of" },
	{ text: 'ION Group', link: 'https://iongroup.com/markets/' },
	{
		text: '. My main focus these days is building a SaaS platform providing leading covenant research for the credit markets across the globe.'
	}
];
export const SKILLS = [
	{ name: 'Java', icon: java },
	{ name: 'Python', icon: python },
	{ name: 'TypeScript', icon: typescript },
	{ name: 'JavaScript', icon: javascript },
	{ name: 'HTML', icon: html },
	{ name: 'CSS', icon: css },
	{ name: 'Svelte', icon: svelte },
	{ name: 'Angular', icon: angular },
	{ name: 'Relational Databases', icon: sql },
	{ name: 'MongoDB', icon: mongodb },
	{ name: 'Docker', icon: docker },
	{ name: 'Jenkins', icon: jenkins },
	{ name: 'Ansible', icon: ansible },
	{ name: 'IntelliJ IDEA', icon: intellij },
	{ name: 'Visual Studio Code', icon: vscode }
];
