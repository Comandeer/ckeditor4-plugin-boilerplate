'use strict';

const packageInfo = require( '../../../package.json' );
const plugin = packageInfo.name.replace( 'ckeditor4-plugin-', '' );

const appBaseDir = `/apps/ckeditor/plugins/${ plugin }/`;
const testBaseDir = `/plugins/${ plugin }/tests/`;

const config = {
	applications: {
		ckeditor: {
			path: '.',
			files: [
				'ckeditor.js'
			]
		}
	},

	framework: 'yui',

	plugins: [
		'benderjs-yui',
		'benderjs-sinon',
		'benderjs-jquery',
		'tests/_benderjs/ckeditor'
	],

	tests: {
		'Plugin tests': {
			applications: [ 'ckeditor' ],
			basePath: `plugins/${ plugin }`,
			paths: [
				'tests/**',
				'!**/_*/**'
			]
		}
	}
};

module.exports = config;
