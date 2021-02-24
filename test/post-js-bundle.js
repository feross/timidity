var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime_1 = createCommonjsModule(function (module) {
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function () {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function (record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

var requiresPort = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;
  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

var has = Object.prototype.hasOwnProperty,
    undef;
/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */

function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}
/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */


function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}
/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */


function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g,
      result = {},
      part;

  while (part = parser.exec(query)) {
    var key = decode(part[1]),
        value = decode(part[2]); //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //

    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}
/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */


function querystringify(obj, prefix) {
  prefix = prefix || '';
  var pairs = [],
      value,
      key; //
  // Optionally prefix with a '?' if needed
  //

  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key]; //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //

      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value); //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //

      if (key === null || value === null) continue;
      pairs.push(key + '=' + value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
} //
// Expose the module.
//


var stringify = querystringify;
var parse = querystring;
var querystringify_1 = {
  stringify: stringify,
  parse: parse
};

var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/,
    protocolre = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i,
    whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]',
    left = new RegExp('^' + whitespace + '+');
/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */

function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}
/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */


var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
function sanitize(address) {
  // Sanitize what is left of the address
  return address.replace('\\', '/');
}, ['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];
/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */

var ignore = {
  hash: 1,
  query: 1
};
/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */

function lolcation(loc) {
  var globalVar;
  if (typeof window !== 'undefined') globalVar = window;else if (typeof commonjsGlobal !== 'undefined') globalVar = commonjsGlobal;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};
  var location = globalVar.location || {};
  loc = loc || location;
  var finaldestination = {},
      type = typeof loc,
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});

    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}
/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */


function extractProtocol(address) {
  address = trimLeft(address);
  var match = protocolre.exec(address),
      protocol = match[1] ? match[1].toLowerCase() : '',
      slashes = !!(match[2] && match[2].length >= 2),
      rest = match[2] && match[2].length === 1 ? '/' + match[3] : match[3];
  return {
    protocol: protocol,
    slashes: slashes,
    rest: rest
  };
}
/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */


function resolve(relative, base) {
  if (relative === '') return base;
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');
  return path.join('/');
}
/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */


function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = typeof location,
      url = this,
      i = 0; //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //

  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = querystringify_1.parse;
  location = lolcation(location); //
  // Extract protocol information before running the instructions.
  //

  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest; //
  // When the authority component is absent the URL starts with a path
  // component.
  //

  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : ''); //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //

    if (instruction[4]) url[key] = url[key].toLowerCase();
  } //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //


  if (parser) url.query = parser(url.query); //
  // If the URL is relative, resolve the pathname against the base URL.
  //

  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  } //
  // Default to a / for pathname if none exists. This normalizes the URL
  // to always have a /
  //


  if (url.pathname.charAt(0) !== '/' && url.hostname) {
    url.pathname = '/' + url.pathname;
  } //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //


  if (!requiresPort(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  } //
  // Parse down the `auth` for the username and password.
  //


  url.username = url.password = '';

  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null'; //
  // The href is just the compiled result.
  //

  url.href = url.toString();
}
/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */


function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || querystringify_1.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!requiresPort(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;
      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }

      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];
    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';
  url.href = url.toString();
  return url;
}
/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */


function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = querystringify_1.stringify;
  var query,
      url = this,
      protocol = url.protocol;
  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;
  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
  if (url.hash) result += url.hash;
  return result;
}

Url.prototype = {
  set: set,
  toString: toString
}; //
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//

Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = querystringify_1;
var urlParse = Url;

// import LibTimidity from './libtimidity'
// Inlined at build time by 'brfs' browserify transform

const TIMIDITY_CFG = "# Bank name:  GUS Classic Patch Set v1.6b   www.rarek.ceron.pl\n# Date:       Feb 25, 1999\n# Made by:    Converted by ArekR\n# Target:     SBAWE32\n# Copyright:  EYE&I and Advanced Gravis\n# Tools:      Polyphone\n\nbank 0 #N gravis-B0\n\t0 gravis-B0/GrandPiano\n\t1 gravis-B0/BritePiano\n\t2 gravis-B0/SynthPiano1\n\t3 gravis-B0/HonkyTonkPiano\n\t4 gravis-B0/RhodesPiano\n\t5 gravis-B0/ChorusedPiano\n\t6 gravis-B0/Harpsichord\n\t7 gravis-B0/Clavinet\n\t8 gravis-B0/Celeste\n\t9 gravis-B0/Glockenspiel\n\t10 gravis-B0/MusicBox\n\t11 gravis-B0/Vibes\n\t12 gravis-B0/Marimba\n\t13 gravis-B0/Xylophone\n\t14 gravis-B0/TubularBells\n\t15 gravis-B0/Dulcimer\n\t16 gravis-B0/HammondOrgan\n\t17 gravis-B0/PercussiveOrgan\n\t18 gravis-B0/RockOrgan\n\t19 gravis-B0/ChurchOrgan\n\t20 gravis-B0/ReedOrgan\n\t21 gravis-B0/Accordion\n\t22 gravis-B0/Harmonica\n\t23 gravis-B0/Concertina\n\t24 gravis-B0/NylonStringGtr\n\t25 gravis-B0/SteelStringGtr\n\t26 gravis-B0/JazzGuitar\n\t27 gravis-B0/ElecGtrclean\n\t28 gravis-B0/MutedGuitar\n\t29 gravis-B0/OverdriveGuitar\n\t30 gravis-B0/DistortionGtr\n\t31 gravis-B0/GuitarHarmonics\n\t32 gravis-B0/AcousticBass\n\t33 gravis-B0/FingeredBass\n\t34 gravis-B0/PickedBass\n\t35 gravis-B0/FretlessBass\n\t36 gravis-B0/SlapBass1\n\t37 gravis-B0/SlapBass2\n\t38 gravis-B0/SynthBass1\n\t39 gravis-B0/SynthBass2\n\t40 gravis-B0/Violin\n\t41 gravis-B0/Viola\n\t42 gravis-B0/Cello\n\t43 gravis-B0/Contrabass\n\t44 gravis-B0/TremoloStrings\n\t45 gravis-B0/PizzicatoString\n\t46 gravis-B0/OrchestralHarp\n\t47 gravis-B0/Timpani\n\t48 gravis-B0/MarcatoStrings\n\t49 gravis-B0/SlowStrings\n\t50 gravis-B0/SynthStrings1\n\t51 gravis-B0/SynthStrings2\n\t52 gravis-B0/ChoirAahs\n\t53 gravis-B0/VoiceOohs\n\t54 gravis-B0/SynthVoices\n\t55 gravis-B0/OrchestraHit\n\t56 gravis-B0/Trumpet\n\t57 gravis-B0/Trombone\n\t58 gravis-B0/Tuba\n\t59 gravis-B0/MutedTrumpet\n\t60 gravis-B0/FrenchHorn\n\t61 gravis-B0/BrassSection\n\t62 gravis-B0/SynthBrass1\n\t63 gravis-B0/SynthBrass2\n\t64 gravis-B0/SopranoSax\n\t65 gravis-B0/AltoSax\n\t66 gravis-B0/TenorSax\n\t67 gravis-B0/BaritoneSax\n\t68 gravis-B0/Oboe\n\t69 gravis-B0/EnglishHorn\n\t70 gravis-B0/Bassoon\n\t71 gravis-B0/Clarinet\n\t72 gravis-B0/Piccolo\n\t73 gravis-B0/Flute\n\t74 gravis-B0/Recorder\n\t75 gravis-B0/WoodenFlute\n\t76 gravis-B0/Bottle\n\t77 gravis-B0/Shakuhachi\n\t78 gravis-B0/Whistle\n\t79 gravis-B0/Ocarina\n\t80 gravis-B0/SquareWave\n\t81 gravis-B0/SawtoothWave\n\t82 gravis-B0/Calliope\n\t83 gravis-B0/Chifflead\n\t84 gravis-B0/Charang\n\t85 gravis-B0/Voxlead\n\t86 gravis-B0/Fifthslead\n\t87 gravis-B0/BassLead\n\t88 gravis-B0/Fantasia\n\t89 gravis-B0/Warmpad\n\t90 gravis-B0/Polysynth\n\t91 gravis-B0/Ghostie\n\t92 gravis-B0/BowedGlass\n\t93 gravis-B0/Metalpad\n\t94 gravis-B0/Halopad\n\t95 gravis-B0/Sweeper\n\t96 gravis-B0/Aurora\n\t97 gravis-B0/Soundtrack\n\t98 gravis-B0/Crystal\n\t99 gravis-B0/Atmosphere\n\t100 gravis-B0/FreshAir\n\t101 gravis-B0/Unicorn\n\t102 gravis-B0/EchoVox\n\t103 gravis-B0/Startrak\n\t104 gravis-B0/Sitar\n\t105 gravis-B0/Banjo\n\t106 gravis-B0/Shamisen\n\t107 gravis-B0/Koto\n\t108 gravis-B0/Kalimba\n\t109 gravis-B0/Bagpipes\n\t110 gravis-B0/Fiddle\n\t111 gravis-B0/Shannai\n\t112 gravis-B0/Carillon\n\t113 gravis-B0/Agogo\n\t114 gravis-B0/SteelDrums\n\t115 gravis-B0/Woodblock\n\t116 gravis-B0/TaikoDrum\n\t117 gravis-B0/Toms\n\t118 gravis-B0/SynthTom\n\t119 gravis-B0/ReverseCymbal\n\t120 gravis-B0/GtrFretnoise\n\t121 gravis-B0/BreathNoise\n\t122 gravis-B0/Seashore\n\t123 gravis-B0/Junglenoises\n\t124 gravis-B0/Telephone\n\t125 gravis-B0/Helicopter\n\t126 gravis-B0/Applause\n\t127 gravis-B0/Gunshot\n\nbank 1 #N gravis-B1\n\t0 gravis-B1/long\n\ndrumset 0 #N Standard\n\t27 gravis-Standard/HighQ\n\t28 gravis-Standard/Slap\n\t29 gravis-Standard/Scratch1\n\t30 gravis-Standard/Scratch2\n\t31 gravis-Standard/Sticks\n\t32 gravis-Standard/SquareClick\n\t33 gravis-Standard/MetronomeClick\n\t34 gravis-Standard/MetronomeBell\n\t35 gravis-Standard/KickDrum1\n\t36 gravis-Standard/KickDrum2\n\t37 gravis-Standard/RimSideStick\n\t38 gravis-Standard/GatedSnare\n\t39 gravis-Standard/HandClap\n\t40 gravis-Standard/AcousticSnare\n\t41 gravis-Standard/Tomlow2\n\t42 gravis-Standard/ClosedHighHat\n\t43 gravis-Standard/Tomlow1\n\t44 gravis-Standard/PedalHighHat\n\t45 gravis-Standard/Tommid2\n\t46 gravis-Standard/OpenHighHat\n\t47 gravis-Standard/Tommid1\n\t48 gravis-Standard/Tomhigh2\n\t49 gravis-Standard/CrashCymbal1\n\t50 gravis-Standard/Tomhigh1\n\t51 gravis-Standard/RideCymbal1\n\t52 gravis-Standard/Chinesecymbal\n\t53 gravis-Standard/Ridebell\n\t54 gravis-Standard/Tambourine\n\t55 gravis-Standard/SplashCymbal\n\t56 gravis-Standard/Cowbell\n\t57 gravis-Standard/CrashCymbal2\n\t58 gravis-Standard/Vibraslap\n\t59 gravis-Standard/RideCymbal2\n\t60 gravis-Standard/HighBongo\n\t61 gravis-Standard/LowBongo\n\t62 gravis-Standard/MuteHighConga\n\t63 gravis-Standard/OpenHighConga\n\t64 gravis-Standard/LowConga\n\t65 gravis-Standard/HighTimbale\n\t66 gravis-Standard/LowTimbale\n\t67 gravis-Standard/Agogohigh\n\t68 gravis-Standard/Agogolow\n\t69 gravis-Standard/Cabasa\n\t70 gravis-Standard/Maracas\n\t71 gravis-Standard/ShortWhistle\n\t72 gravis-Standard/LongWhistle\n\t73 gravis-Standard/ShortGuiro\n\t74 gravis-Standard/LongGuiro\n\t75 gravis-Standard/Claves\n\t76 gravis-Standard/HighWoodblock\n\t77 gravis-Standard/LowWoodblock\n\t78 gravis-Standard/MuteCuica\n\t79 gravis-Standard/OpenCuica\n\t80 gravis-Standard/MuteTriangle\n\t81 gravis-Standard/OpenTriangle\n\t82 gravis-Standard/Shaker\n\t83 gravis-Standard/JingleBells\n\t84 gravis-Standard/BellTree\n\t85 gravis-Standard/Castinet\n\t86 gravis-Standard/MuteSurdo\n\t87 gravis-Standard/OpenSurdo\n";
const SAMPLE_RATE = 44100;
const AUDIO_FORMAT = 0x8010; // format of the rendered audio 's16'

const NUM_CHANNELS = 2; // stereo (2 channels)

const BYTES_PER_SAMPLE = 2 * NUM_CHANNELS;
const BUFFER_SIZE = 128; // buffer size for each render() call

registerProcessor('midiplayer', class extends AudioWorkletProcessor {
  constructor(args) {
    super();
    let baseUrl = args.processorOptions.baseURL;
    const midiBuff = args.processorOptions.midiBuff;
    if (!baseUrl.endsWith('/')) baseUrl += '/';
    this._baseUrl = new urlParse(baseUrl).href;
    this._songPtr = 0;
    this._bufferPtr = 0;
    this._array = new Int16Array(BUFFER_SIZE * 2);
    this._currentUrlOrBuf = null; // currently loading url or buf

    this._interval = null;
    this.oncer = true;
    this._lib = LibTimidity({
      locateFile: file => new urlParse(file, this._baseUrl).href
    });

    this._lib.FS.writeFile('/timidity.cfg', TIMIDITY_CFG);

    const result = this._lib._mid_init('/timidity.cfg');

    if (result !== 0) {
      return this._destroy(new Error('Failed to initialize libtimidity'));
    }

    this._bufferPtr = this._lib._malloc(BUFFER_SIZE * BYTES_PER_SAMPLE);
    if (!(midiBuff instanceof Uint8Array)) throw new Error('load() expects a `string` or `Uint8Array` argument');
    this.port.onmessage = this._handleMessage.bind(this);
    this._midiBuf = midiBuff;

    this._loadSong(midiBuff).then(songPtr => {
      this._songPtr = songPtr;

      this._reqInstruments(songPtr, midiBuff); // Now, wait for failure or all the instruments

    });
  }

  async _handleMessage(message) {
    if (message.data.type === 'instPayload') {
      for (let inst of message.data.buffs) {
        this._writeInstrumentFile(inst.instrumentName, inst.instrumentBuff);
      }

      this.port.postMessage(this._lib._mid_get_load_request_count(this._songPtr));

      this._lib._mid_song_free(this._songPtr);

      this._songPtr = await this._loadSong(this._midiBuf);

      this._lib._mid_song_start(this._songPtr);

      this._playing = true;
    }
  }

  _reqInstruments(songPtr, midiBuff) {
    // Are we missing instrument files?
    let missingCount = this._lib._mid_get_load_request_count(songPtr);

    if (missingCount > 0) {
      let missingInstruments = this._getMissingInstruments(songPtr, missingCount); // Request instruments to be fetched from the main thread
      // missingInstruments.map(instrument => this._reqInstrument(instrument))


      this.port.postMessage({
        type: 'missingInstruments',
        instruments: missingInstruments
      });
    }
  }

  _getMissingInstruments(songPtr, missingCount) {
    const missingInstruments = [];

    for (let i = 0; i < missingCount; i++) {
      const instrumentPtr = this._lib._mid_get_load_request(songPtr, i);

      const instrument = this._lib.UTF8ToString(instrumentPtr);

      missingInstruments.push(instrument);
    }

    return missingInstruments;
  }

  async _loadSong(midiBuf) {
    const optsPtr = this._lib._mid_alloc_options(SAMPLE_RATE, AUDIO_FORMAT, NUM_CHANNELS, BUFFER_SIZE); // Copy the MIDI buffer into the heap


    const midiBufPtr = this._lib._malloc(midiBuf.byteLength);

    this._lib.HEAPU8.set(midiBuf, midiBufPtr); // Create a stream


    const iStreamPtr = this._lib._mid_istream_open_mem(midiBufPtr, midiBuf.byteLength); // Load the song


    const songPtr = this._lib._mid_song_load(iStreamPtr, optsPtr); // Free resources no longer needed


    this._lib._mid_istream_close(iStreamPtr);

    this._lib._free(optsPtr);

    this._lib._free(midiBufPtr);

    if (songPtr === 0) {
      return this._destroy(new Error('Failed to load MIDI file'));
    }

    return songPtr;
  }

  _writeInstrumentFile(instrument, buf) {
    const folderPath = instrument.split('/').slice(0, -1) // remove basename
    .join('/');

    this._mkdirp(folderPath);

    this._lib.FS.writeFile(instrument, buf, {
      encoding: 'binary'
    });
  }

  _mkdirp(folderPath) {
    const pathParts = folderPath.split('/');
    let dirPath = '/';

    for (let i = 0; i < pathParts.length; i++) {
      const curPart = pathParts[i];

      try {
        this._lib.FS.mkdir(`${dirPath}${curPart}`);
      } catch (err) {}

      dirPath += `${curPart}/`;
    }
  }

  _onAudioProcess(outputs) {
    const sampleCount = this._songPtr && this._playing ? this._readMidiData() : 0; // if (sampleCount > 0 && this._currentUrlOrBuf) {
    //   this._currentUrlOrBuf = null
    //   this.emit('playing')
    //   this._startInterval()
    // }

    if (this.oncer) {
      this.port.postMessage(sampleCount);
      this.port.postMessage(outputs[0][0].length);
      this.oncer = false;
    }

    const output0 = outputs[0][0];
    const output1 = outputs[0][1];

    for (let i = 0; i < sampleCount; i++) {
      output0[i] = this._array[i * 2] / 0x7FFF;
      output1[i] = this._array[i * 2 + 1] / 0x7FFF;
    }

    for (let i = sampleCount; i < BUFFER_SIZE; i++) {
      output0[i] = 0;
      output1[i] = 0;
    } // if (this._songPtr && this._playing && sampleCount === 0) {
    //   // Reached the end of the file
    //   // this.seek(0)
    //   // this.pause()
    //   this._lib._mid_song_start(this._songPtr)
    //   // this.emit('ended')
    // }


    return outputs;
  }

  _readMidiData() {
    const byteCount = this._lib._mid_song_read_wave(this._songPtr, this._bufferPtr, BUFFER_SIZE * BYTES_PER_SAMPLE);

    const sampleCount = byteCount / BYTES_PER_SAMPLE; // Was anything output? If not, don't bother copying anything

    if (sampleCount === 0) {
      return 0;
    }

    this._array.set(this._lib.HEAP16.subarray(this._bufferPtr / 2, (this._bufferPtr + byteCount) / 2));

    return sampleCount;
  }

  process(inputs, outputs, params) {
    if (this._playing) {
      outputs = this._onAudioProcess(outputs);
    }

    return true;
  } // noiseTest(outputs){
  //   let output = outputs[0];
  //   for (let channel = 0; channel < output.length; ++channel) {
  //     let outputChannel = output[channel];
  //     for (let i = 0; i < outputChannel.length; ++i) {
  //       outputChannel[i] = 2 * (Math.random() - 0.5) * 0.25;
  //     }
  //   }
  // }
  // process(inputs, outputs, parameters) {
  //   this.noiseTest(outputs)
  //   return true;
  // }


});
