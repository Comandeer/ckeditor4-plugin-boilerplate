#!/usr/bin/env node

'use strict';

const fs = require( 'fs' );
const path = require( 'path' );

const pluginPath = path.resolve( __dirname, './../..' );
const CKEPath = path.resolve( pluginPath, './../..' );
console.log( CKEPath, __dirname, pluginPath );

const packageInfo = require( path.resolve( pluginPath, 'package.json' ) );
const pluginName = packageInfo.name.replace( 'ckeditor4-plugin-', '' );

if ( !fs.existsSync( path.resolve( CKEPath, 'ckeditor.js' ) ) ) {
	process.exit( 0 );
}

fs.symlinkSync( pluginPath, path.resolve( CKEPath, `plugins/${ pluginName }` ), 'dir' );

// Update config.
fs.appendFileSync( path.resolve( CKEPath, 'config.js' ), `;CKEDITOR.editorConfig = function( config ) {
	config.plugins += ',${ pluginName }';
}`, 'utf8' );

process.exit( 0 );
