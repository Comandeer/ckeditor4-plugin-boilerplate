/* global CKEDITOR */

/**
 * @license Copyright (c) 2016, Comandeer. All rights reserved.
 * For licensing, see LICENSE.
 */

/**
 * @fileOverview Some plugin.
 */

import { name as packageName } from '../package.json';

const pluginName = packageName.replace( 'ckeditor4-plugin-', '' );

 CKEDITOR.plugins.add( pluginName, {
	init() {}
 } );
