/*
 * multi-d-array
 * https://github.com/THEtheChad/multi-d-array
 *
 * Copyright (c) 2013 THEtheChad
 * Licensed under the MIT license.
 */

'use strict';

function Multi(sizes){
	if(!(sizes instanceof Array)){
		sizes = Array.prototype.slice.call(arguments);
	}

	if(!(this instanceof Multi)) return new Multi(sizes);

	var dimensions = sizes.length
	  , last = dimensions - 1
	;//var

	this.dimensions = dimensions;
	this.sizes      = sizes;
	this.length     = sizes[ last ];

	Multi.create(dimensions, sizes, this);
}

Multi.create = function(lvl, sizes, initial){
	var i = sizes[--lvl];
	var array = initial || new Array(i);

	if(lvl)
		while(i--)
			array[i] = this.create(lvl, sizes);

	return array;
};

Multi.prototype = {
	forEach: function(iterator, array){
		array = array || this;

		var len = array.length;

		for(var i = 0; i < len; i++){
			var value = array[i];

			if(value instanceof Array){
				this.each(iterator, value);
			}
			else{
				iterator(value, i, array);
			}
		}
	},

	splice: function(){}
};

module.exports = Multi;