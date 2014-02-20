
/*!
 *
 * binder
 *
 * MIT
 *
 */

/**
 * Module dependencies.
 */

var events = require('component-event');
var delegate = require('component-delegate');

/**
 * Bind to `event` for `el` and invoke `fn(e)`.
 * When a `selector` is given then events are delegated.
 *
 * @param {Element} el
 * @param {String} event
 * @param {String} [selector]
 * @param {Function} fn
 * @param {Boolean} [capture]
 * @return {Element} el
 * @api public
 */

exports.on = function(el, event, selector, fn, capture){
  if ('string' == typeof selector) {
    fn._delegate = delegate.bind(el, selector, event, fn, capture);
    return this;
  }

  capture = fn;
  fn = selector;

  events.bind(el, event, fn, capture);

  return el;
};

/**
 * Unbind `event` listener `fn` for `el`.
 *
 * @param {Element} el
 * @param {String} event
 * @param {String} [selector]
 * @param {Function} fn
 * @param {Boolean} [capture]
 * @return {Element} el
 * @api public
 */

exports.off = function(el, event, selector, fn, capture){
  switch (typeof selector) {
    case 'function':
      capture = fn;
      fn = selector;
      if (!fn._delegate) break;
    case 'string':
      delegate.unbind(el, event, fn._delegate, capture);
      return this;
  }

  events.unbind(el, event, fn, capture);

  return el;
};

/**
 * Same as `.on` but will call `.off`
 * immediately after the first event.
 *
 * @param {Element} el
 * @param {String} event
 * @param {String} [selector]
 * @param {Function} fn
 * @param {Boolean} [capture]
 * @return {Element} el
 * @api public
 */

exports.once = function(el, event, selector, fn, capture){
  // regular
  if ('function' == typeof selector) {
    capture = fn;
    fn = selector;
    exports.on(el, event, function removeMe(e){
      exports.off(el, event, removeMe, capture);
      fn.call(el, e);
    }, capture);
  }
  else { // delegate
    exports.on(el, event, selector, function removeMe(e){
      exports.off(el, event, selector, removeMe, capture);
      fn.call(el, e);
    }, capture);
  }

  return el;
};
