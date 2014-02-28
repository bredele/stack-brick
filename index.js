var DomStack = require('domstack');

/**
 * Expose 'stack-plugin'
 */

module.exports = Stack;


/**
 * Stack constructor
 * @param {HTMLElement} el stack anchor (optional)
 * @api pubic
 */

function Stack(el){
  this.stack = new DomStack(el);
}


/**
 * Add dom into stack.
 * @param {HTMLElement} el      
 * @param {String} name    
 * @param {String} visible show el
 * @api private
 */

Stack.prototype.add = function(el, name, visible) {
  this.stack.add(name, el, (visible === 'true'));
};


/**
 * Set the stack anchor.
 * @param  {HTMLElement} el 
 * @api private
 */

Stack.prototype.init = function(el) {
  this.stack.parent = el;
};


/**
 * Show stack child.
 * @param  {String} name
 * @api public
 */

Stack.prototype.show = function(name) {
  this.stack.show(name);
};