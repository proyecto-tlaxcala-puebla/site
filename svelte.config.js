import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		prerender: {
			handleMissingId: 'warn',
		}, 
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
		}),

		paths: {
			base: process.env.NODE_ENV === 'production' ? '/site' : ''
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
