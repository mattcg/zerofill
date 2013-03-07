/**
 * Zero-pad a number to the given size.
 *
 * @overview
 * @license Creative Commons Attribution 3.0 Unported (CC BY 3.0)
 */

'use strict';

/*jshint node:true */

module.exports = function(number, size) {
	number = number.toString();

	while (number.length < size) {
		number = '0' + number;
	}

	return number;
};
