'use strict';

const fs = require( 'fs' );
const cwd = process.cwd();

const packageInfo = require( `${ cwd }/package.json` );
const pluginName = packageInfo.name.replace( 'ckeditor4-plugin-', '' );

const CKEPath = `${ cwd }/../..`;

if ( !fs.existsSync( `${ CKEPath }/ckeditor.js` ) ) {
	process.exit( 0 );
}

fs.linkSync( cwd, `${ CKEPath }/plugins/${ pluginName }` );

// Update config.
fs.appendFileSync( `${ CKEPath }/config.js`, `CKEDITOR.editorConfig = function( config ) {
	config.plugins.push( '${ pluginName }' );
}`, 'utf8' );
