goog.module('symbol_observable');

/* global window */
var ponyfill = goog.require('symbol_observable.ponyfill');

var root;
if (typeof global !== 'undefined') {
	root = global;
} else {
	root = window;
}

var result = ponyfill.default(root);
exports.default = result;
