!(function webpackUniversalModuleDefinition(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.bulmaCollapsible = t())
    : (e.bulmaCollapsible = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function __webpack_require__(n) {
      if (t[n]) return t[n].exports;
      var r = (t[n] = { i: n, l: !1, exports: {} });
      return (
        e[n].call(r.exports, r, r.exports, __webpack_require__),
        (r.l = !0),
        r.exports
      );
    }
    return (
      (__webpack_require__.m = e),
      (__webpack_require__.c = t),
      (__webpack_require__.d = function (e, t, n) {
        __webpack_require__.o(e, t) ||
          Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (__webpack_require__.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (__webpack_require__.t = function (e, t) {
        if ((1 & t && (e = __webpack_require__(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (__webpack_require__.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var r in e)
            __webpack_require__.d(
              n,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return n;
      }),
      (__webpack_require__.n = function (e) {
        var t =
          e && e.__esModule
            ? function getDefault() {
                return e.default;
              }
            : function getModuleExports() {
                return e;
              };
        return __webpack_require__.d(t, "a", t), t;
      }),
      (__webpack_require__.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (__webpack_require__.p = ""),
      __webpack_require__((__webpack_require__.s = 12))
    );
  })([
    function (e, t) {
      function _getPrototypeOf(t) {
        return (
          (e.exports = _getPrototypeOf =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          _getPrototypeOf(t)
        );
      }
      e.exports = _getPrototypeOf;
    },
    function (e, t) {
      e.exports = function _classCallCheck(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      };
    },
    function (e, t) {
      function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      e.exports = function _createClass(e, t, n) {
        return (
          t && _defineProperties(e.prototype, t),
          n && _defineProperties(e, n),
          e
        );
      };
    },
    function (e, t, n) {
      var r = n(8);
      e.exports = function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              r(e, t, n[t]);
            });
        }
        return e;
      };
    },
    function (e, t) {
      e.exports = function _assertThisInitialized(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    function (e, t, n) {
      var r = n(6),
        o = n(4);
      e.exports = function _possibleConstructorReturn(e, t) {
        return !t || ("object" !== r(t) && "function" != typeof t) ? o(e) : t;
      };
    },
    function (e, t) {
      function _typeof2(e) {
        return (_typeof2 =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function _typeof2(e) {
                return typeof e;
              }
            : function _typeof2(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function _typeof(t) {
        return (
          "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator)
            ? (e.exports = _typeof =
                function _typeof(e) {
                  return _typeof2(e);
                })
            : (e.exports = _typeof =
                function _typeof(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : _typeof2(e);
                }),
          _typeof(t)
        );
      }
      e.exports = _typeof;
    },
    function (e, t, n) {
      var r = n(11);
      e.exports = function _inherits(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t);
      };
    },
    function (e, t) {
      e.exports = function _defineProperty(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      };
    },
    function (e, t, n) {
      n(0);
      var r = n(10);
      function _get(t, n, o) {
        return (
          "undefined" != typeof Reflect && Reflect.get
            ? (e.exports = _get = Reflect.get)
            : (e.exports = _get =
                function _get(e, t, n) {
                  var o = r(e, t);
                  if (o) {
                    var i = Object.getOwnPropertyDescriptor(o, t);
                    return i.get ? i.get.call(n) : i.value;
                  }
                }),
          _get(t, n, o || t)
        );
      }
      e.exports = _get;
    },
    function (e, t, n) {
      var r = n(0);
      e.exports = function _superPropBase(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e));

        );
        return e;
      };
    },
    function (e, t) {
      function _setPrototypeOf(t, n) {
        return (
          (e.exports = _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(e, t) {
              return (e.__proto__ = t), e;
            }),
          _setPrototypeOf(t, n)
        );
      }
      e.exports = _setPrototypeOf;
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(1),
        o = n.n(r),
        i = n(2),
        s = n.n(i),
        l = n(5),
        a = n.n(l),
        c = n(4),
        u = n.n(c),
        f = n(0),
        p = n.n(f),
        d = n(9),
        _ = n.n(d),
        h = n(7),
        y = n.n(h),
        v = n(3),
        m = n.n(v),
        b = (function () {
          function EventEmitter() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            o()(this, EventEmitter),
              (this._listeners = new Map(e)),
              (this._middlewares = new Map());
          }
          return (
            s()(EventEmitter, [
              {
                key: "listenerCount",
                value: function listenerCount(e) {
                  return this._listeners.has(e)
                    ? this._listeners.get(e).length
                    : 0;
                },
              },
              {
                key: "removeListeners",
                value: function removeListeners() {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  null !== t
                    ? Array.isArray(t)
                      ? name.forEach(function (t) {
                          return e.removeListeners(t, n);
                        })
                      : (this._listeners.delete(t),
                        n && this.removeMiddleware(t))
                    : (this._listeners = new Map());
                },
              },
              {
                key: "middleware",
                value: function middleware(e, t) {
                  var n = this;
                  Array.isArray(e)
                    ? name.forEach(function (e) {
                        return n.middleware(e, t);
                      })
                    : (Array.isArray(this._middlewares.get(e)) ||
                        this._middlewares.set(e, []),
                      this._middlewares.get(e).push(t));
                },
              },
              {
                key: "removeMiddleware",
                value: function removeMiddleware() {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                  null !== t
                    ? Array.isArray(t)
                      ? name.forEach(function (t) {
                          return e.removeMiddleware(t);
                        })
                      : this._middlewares.delete(t)
                    : (this._middlewares = new Map());
                },
              },
              {
                key: "on",
                value: function on(e, t) {
                  var n = this,
                    r =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                  if (Array.isArray(e))
                    e.forEach(function (e) {
                      return n.on(e, t);
                    });
                  else {
                    var o = (e = e.toString()).split(/,|, | /);
                    o.length > 1
                      ? o.forEach(function (e) {
                          return n.on(e, t);
                        })
                      : (Array.isArray(this._listeners.get(e)) ||
                          this._listeners.set(e, []),
                        this._listeners.get(e).push({ once: r, callback: t }));
                  }
                },
              },
              {
                key: "once",
                value: function once(e, t) {
                  this.on(e, t, !0);
                },
              },
              {
                key: "emit",
                value: function emit(e, t) {
                  var n = this,
                    r =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                  e = e.toString();
                  var o = this._listeners.get(e),
                    i = null,
                    s = 0,
                    l = r;
                  if (Array.isArray(o))
                    for (
                      o.forEach(function (a, c) {
                        r ||
                          ((i = n._middlewares.get(e)),
                          Array.isArray(i)
                            ? (i.forEach(function (n) {
                                n(
                                  t,
                                  function () {
                                    var e =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : null;
                                    null !== e && (t = e), s++;
                                  },
                                  e
                                );
                              }),
                              s >= i.length && (l = !0))
                            : (l = !0)),
                          l && (a.once && (o[c] = null), a.callback(t));
                      });
                      -1 !== o.indexOf(null);

                    )
                      o.splice(o.indexOf(null), 1);
                },
              },
            ]),
            EventEmitter
          );
        })(),
        g = n(8),
        w = n.n(g),
        k = n(6),
        O = n.n(k),
        x = function isFunction(e) {
          return "function" == typeof e;
        },
        P = function isString(e) {
          return (
            "string" == typeof e ||
            (!!e &&
              "object" === O()(e) &&
              "[object String]" === Object.prototype.toString.call(e))
          );
        },
        E = function isNode(e) {
          try {
            return Node.prototype.cloneNode.call(e, !1), !0;
          } catch (e) {
            return !1;
          }
        },
        S = function isNodeList(e) {
          return NodeList.prototype.isPrototypeOf(e);
        },
        j = /^(?:f(?:alse)?|no?|0+)$/i,
        C = function uuid() {
          return (
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "") +
            ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
              /[018]/g,
              function (e) {
                return (
                  e ^
                  (crypto.getRandomValues(new Uint8Array(1))[0] &
                    (15 >> (e / 4)))
                ).toString(16);
              }
            )
          );
        },
        A = function detectSupportsPassive() {
          var e = !1;
          if (
            "undefined" != typeof window &&
            "function" == typeof window.addEventListener
          ) {
            var t = Object.defineProperty({}, "passive", {
                get: function get() {
                  return (e = !0), !0;
                },
              }),
              n = function noop() {};
            window.addEventListener("testPassive", n, t),
              window.removeEventListener("testPassive", n, t);
          }
          return e;
        },
        q = function querySelectorAll(e, t) {
          return x(e)
            ? e(t || ("undefined" != typeof document ? document : null))
            : P(e)
            ? t && E(t)
              ? t.querySelectorAll(e)
              : "undefined" != typeof document
              ? document.querySelectorAll(e)
              : null
            : E(e)
            ? [e]
            : S(e)
            ? e
            : null;
        },
        L = function optionsFromDataset(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return E(e) && e.dataset
            ? Object.keys(e.dataset)
                .filter(function (e) {
                  return Object.keys(t).includes(e);
                })
                .reduce(function (t, n) {
                  return m()({}, t, w()({}, n, e.dataset[n]));
                }, {})
            : {};
        };
      "undefined" == typeof Node ||
        Node.prototype.on ||
        (Node.prototype.on = function (e, t) {
          var n = this;
          return (
            Array.isArray(e) || (e = e.split(" ")),
            e.forEach(function (e) {
              n.addEventListener(e.trim(), t, !!A() && { passive: !1 });
            }),
            this
          );
        }),
        "undefined" == typeof NodeList ||
          NodeList.prototype.on ||
          (NodeList.prototype.on = function (e, t) {
            return (
              this.forEach(function (n) {
                n.on(e, t);
              }),
              this
            );
          }),
        "undefined" == typeof Node ||
          Node.prototype.off ||
          (Node.prototype.off = function (e, t) {
            var n = this;
            return (
              Array.isArray(e) || (e = e.split(" ")),
              e.forEach(function (e) {
                n.removeEventListener(e.trim(), t, !!A() && { passive: !1 });
              }),
              this
            );
          }),
        "undefined" == typeof NodeList ||
          NodeList.prototype.off ||
          (NodeList.prototype.off = function (e, t) {
            return (
              this.forEach(function (n) {
                n.off(e, t);
              }),
              this
            );
          });
      var N = (function (e) {
          function Component(e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            if (
              (o()(this, Component),
              ((t = a()(this, p()(Component).call(this))).element = P(e)
                ? t.options.container.querySelector(e)
                : e),
              !t.element)
            )
              throw new Error(
                "An invalid selector or non-DOM node has been provided for ".concat(
                  t.constructor.name,
                  "."
                )
              );
            return (
              (t.element[t.constructor.name] = t.constructor._interface.bind(
                u()(t)
              )),
              (t.element[t.constructor.name].Constructor = t.constructor.name),
              (t.id = C(t.constructor.name + "-")),
              (t.options = m()({}, r, n, L(t.element, r))),
              t
            );
          }
          return (
            y()(Component, e),
            s()(Component, null, [
              {
                key: "attach",
                value: function attach() {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    o = new Array();
                  return null === t
                    ? o
                    : ((n = m()({}, r, n, L(this.element, r))),
                      (q(t, n.container) || []).forEach(function (r) {
                        void 0 === r[e.constructor.name]
                          ? o.push(new e(r, m()({ selector: t }, n)))
                          : o.push(r[e.constructor.name]);
                      }),
                      o);
                },
              },
              {
                key: "_interface",
                value: function _interface() {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  if ("string" == typeof e) {
                    if (void 0 === this[e])
                      throw new TypeError('No method named "'.concat(e, '"'));
                    return this[e](e);
                  }
                  return this;
                },
              },
            ]),
            Component
          );
        })(b),
        M = {
          allowMultiple: !1,
          container: "undefined" != typeof document ? document : null,
        };
      n.d(t, "default", function () {
        return T;
      });
      var T = (function (e) {
        function bulmaCollapsible(e) {
          var t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            o()(this, bulmaCollapsible),
            ((t = a()(
              this,
              p()(bulmaCollapsible).call(this, e, n, M)
            )).onTriggerClick = t.onTriggerClick.bind(u()(t))),
            t._init(),
            t
          );
        }
        return (
          y()(bulmaCollapsible, e),
          s()(
            bulmaCollapsible,
            [
              {
                key: "_init",
                value: function _init() {
                  if (
                    ((this._parent = this.element.dataset.parent), this._parent)
                  ) {
                    var e = this.options.container.querySelector(
                      "#".concat(this._parent)
                    );
                    this._siblings = q(this.options.selector, e) || [];
                  }
                  (this._triggers =
                    this.options.container.querySelectorAll(
                      '[data-action="collapse"][href="#'
                        .concat(
                          this.element.id,
                          '"], [data-action="collapse"][data-target="'
                        )
                        .concat(this.element.id, '"]')
                    ) || null),
                    this._triggers &&
                      this._triggers.on("click touch", this.onTriggerClick),
                    this.element.classList.contains("is-active")
                      ? this.expand()
                      : this.collapse();
                },
              },
              {
                key: "destroy",
                value: function destroy() {
                  this._triggers &&
                    this._triggers.off("click touch", this.onTriggerClick, !1);
                },
              },
              {
                key: "collapsed",
                value: function collapsed() {
                  return this._collapsed;
                },
              },
              {
                key: "expand",
                value: function expand() {
                  var e = this;
                  var transitionEndEventName_ = transitionEndEventName();
                  var done = false;
                  const transitionEnded = (obj) => function () {
                    done = true;
                    obj.element.style.height = "fit-content";
                    //do your transition finished stuff..
                    obj.element.removeEventListener(
                      transitionEndEventName_,
                      transitionEnded,
                      false
                    );
                  };
                  (void 0 === this._collapsed || this._collapsed) &&
                    (this.emit("before:expand", this),
                    this._parent &&
                      !(function BooleanParse(e) {
                        return !j.test(e) && !!e;
                      })(this.options.allowMultiple) &&
                      this._siblings.forEach(function (t) {
                        t.isSameNode(e.element) ||
                          (t.bulmaCollapsible && t.bulmaCollapsible("close"));
                      }),
                    this.TransitionEventListener = transitionEnded(this),
                    this.element.addEventListener(
                      transitionEndEventName_,
                      this.TransitionEventListener,
                      false
                    ),
                    (this.element.style.height =
                      this.element.scrollHeight + "px"),
                    this.element.classList.add("is-active"),
                    this.element.setAttribute("aria-expanded", !0),
                    this._triggers &&
                      this._triggers.forEach(function (e) {
                        e.classList.add("is-active");
                      }),
                    (this._collapsed = !1),
                    this.emit("after:expand", this));
                },
              },
              {
                key: "open",
                value: function open() {
                  this.expand();
                },
              },
              {
                key: "collapse",
                value: function collapse() {
                  (void 0 !== this._collapsed && this._collapsed) ||
                    (this.emit("before:collapse", this),
                    (this.element.style.height =
                      this.element.scrollHeight + "px"),
                      this.element.removeEventListener(
                        transitionEndEventName(),
                        this.TransitionEventListener,
                        false
                      ),
                    setTimeout(() => {
                      this.element.style.height = 0;
                    }, 50),
                    this.element.classList.remove("is-active"),
                    this.element.setAttribute("aria-expanded", !1),
                    this._triggers &&
                      this._triggers.forEach(function (e) {
                        e.classList.remove("is-active");
                      }),
                    (this._collapsed = !0),
                    this.emit("after:collapse", this));
                },
              },
              {
                key: "close",
                value: function close() {
                  this.collapse();
                },
              },
              {
                key: "onTriggerClick",
                value: function onTriggerClick(e) {
                  e.preventDefault(),
                    this.collapsed()
                      ? (e.currentTarget.classList.add("is-active"),
                        this.expand())
                      : (e.currentTarget.classList.remove("is-active"),
                        this.collapse());
                },
              },
            ],
            [
              {
                key: "attach",
                value: function attach() {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : ".is-collapsible",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return _()(p()(bulmaCollapsible), "attach", this).call(
                    this,
                    e,
                    t,
                    M
                  );
                },
              },
            ]
          ),
          bulmaCollapsible
        );
      })(N);
    },
  ]).default;
});
function transitionEndEventName() {
  var i,
    undefined,
    el = document.createElement("div"),
    transitions = {
      transition: "transitionend",
      OTransition: "otransitionend", // oTransitionEnd in very old Opera
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd",
    };

  for (i in transitions) {
    if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
      return transitions[i];
    }
  }

  //TODO: throw 'TransitionEnd event is not supported in this browser';
}
