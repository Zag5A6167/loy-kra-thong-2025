import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		

		
		paths:{
			base: '/loy-kra-thong-2025',
		},
		adapter: adapter({
			page: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
	}
};

export default config;
