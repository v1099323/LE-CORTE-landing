(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var l in s)
                      Object.prototype.hasOwnProperty.call(s, l) &&
                        (e[l] = s[l]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            l = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            a = t && window.devicePixelRatio > 1,
            c = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
            },
            i = function (t) {
              return e({}, c, t);
            },
            o = function (e, t) {
              var s,
                l = "LazyLoad::Initialized",
                n = new e(t);
              try {
                s = new CustomEvent(l, { detail: { instance: n } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  l,
                  !1,
                  !1,
                  { instance: n }
                );
              }
              window.dispatchEvent(s);
            },
            r = "src",
            d = "srcset",
            u = "sizes",
            h = "poster",
            m = "llOriginalAttrs",
            p = "loading",
            f = "loaded",
            g = "applied",
            v = "error",
            S = "native",
            _ = "data-",
            b = "ll-status",
            y = function (e, t) {
              return e.getAttribute(_ + t);
            },
            E = function (e) {
              return y(e, b);
            },
            C = function (e, t) {
              return (function (e, t, s) {
                var l = "data-ll-status";
                null !== s ? e.setAttribute(l, s) : e.removeAttribute(l);
              })(e, 0, t);
            },
            A = function (e) {
              return C(e, null);
            },
            L = function (e) {
              return null === E(e);
            },
            w = function (e) {
              return E(e) === S;
            },
            $ = [p, f, g, v],
            x = function (e, t, s, l) {
              e &&
                (void 0 === l ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, l));
            },
            O = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            k = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            T = function (e) {
              return e.llTempImage;
            },
            I = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            q = function (e, t) {
              e && (e.loadingCount += t);
            },
            P = function (e, t) {
              e && (e.toLoadCount = t);
            },
            D = function (e) {
              for (var t, s = [], l = 0; (t = e.children[l]); l += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            M = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && D(s).forEach(t);
            },
            N = function (e, t) {
              D(e).forEach(t);
            },
            B = [r],
            R = [r, h],
            z = [r, d, u],
            V = function (e) {
              return !!e[m];
            },
            H = function (e) {
              return e[m];
            },
            j = function (e) {
              return delete e[m];
            },
            F = function (e, t) {
              if (!V(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[m] = s);
              }
            },
            U = function (e, t) {
              if (V(e)) {
                var s = H(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            G = function (e, t, s) {
              O(e, t.class_loading),
                C(e, p),
                s && (q(s, 1), x(t.callback_loading, e, s));
            },
            W = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            Z = function (e, t) {
              W(e, u, y(e, t.data_sizes)),
                W(e, d, y(e, t.data_srcset)),
                W(e, r, y(e, t.data_src));
            },
            X = {
              IMG: function (e, t) {
                M(e, function (e) {
                  F(e, z), Z(e, t);
                }),
                  F(e, z),
                  Z(e, t);
              },
              IFRAME: function (e, t) {
                F(e, B), W(e, r, y(e, t.data_src));
              },
              VIDEO: function (e, t) {
                N(e, function (e) {
                  F(e, B), W(e, r, y(e, t.data_src));
                }),
                  F(e, R),
                  W(e, h, y(e, t.data_poster)),
                  W(e, r, y(e, t.data_src)),
                  e.load();
              },
            },
            Q = ["IMG", "IFRAME", "VIDEO"],
            Y = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                x(e.callback_finish, t);
            },
            J = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            K = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ee = function (e) {
              return !!e.llEvLisnrs;
            },
            te = function (e) {
              if (ee(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var l = t[s];
                  K(e, s, l);
                }
                delete e.llEvLisnrs;
              }
            },
            se = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                q(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                k(e, t.class_loading),
                t.unobserve_completed && I(e, s);
            },
            le = function (e, t, s) {
              var l = T(e) || e;
              ee(l) ||
                (function (e, t, s) {
                  ee(e) || (e.llEvLisnrs = {});
                  var l = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  J(e, l, t), J(e, "error", s);
                })(
                  l,
                  function (n) {
                    !(function (e, t, s, l) {
                      var n = w(t);
                      se(t, s, l),
                        O(t, s.class_loaded),
                        C(t, f),
                        x(s.callback_loaded, t, l),
                        n || Y(s, l);
                    })(0, e, t, s),
                      te(l);
                  },
                  function (n) {
                    !(function (e, t, s, l) {
                      var n = w(t);
                      se(t, s, l),
                        O(t, s.class_error),
                        C(t, v),
                        x(s.callback_error, t, l),
                        n || Y(s, l);
                    })(0, e, t, s),
                      te(l);
                  }
                );
            },
            ne = function (e, t, s) {
              !(function (e) {
                e.llTempImage = document.createElement("IMG");
              })(e),
                le(e, t, s),
                (function (e) {
                  V(e) || (e[m] = { backgroundImage: e.style.backgroundImage });
                })(e),
                (function (e, t, s) {
                  var l = y(e, t.data_bg),
                    n = y(e, t.data_bg_hidpi),
                    c = a && n ? n : l;
                  c &&
                    ((e.style.backgroundImage = 'url("'.concat(c, '")')),
                    T(e).setAttribute(r, c),
                    G(e, t, s));
                })(e, t, s),
                (function (e, t, s) {
                  var l = y(e, t.data_bg_multi),
                    n = y(e, t.data_bg_multi_hidpi),
                    c = a && n ? n : l;
                  c &&
                    ((e.style.backgroundImage = c),
                    (function (e, t, s) {
                      O(e, t.class_applied),
                        C(e, g),
                        s &&
                          (t.unobserve_completed && I(e, t),
                          x(t.callback_applied, e, s));
                    })(e, t, s));
                })(e, t, s);
            },
            ae = function (e, t, s) {
              !(function (e) {
                return Q.indexOf(e.tagName) > -1;
              })(e)
                ? ne(e, t, s)
                : (function (e, t, s) {
                    le(e, t, s),
                      (function (e, t, s) {
                        var l = X[e.tagName];
                        l && (l(e, t), G(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            ce = function (e) {
              e.removeAttribute(r), e.removeAttribute(d), e.removeAttribute(u);
            },
            ie = function (e) {
              M(e, function (e) {
                U(e, z);
              }),
                U(e, z);
            },
            oe = {
              IMG: ie,
              IFRAME: function (e) {
                U(e, B);
              },
              VIDEO: function (e) {
                N(e, function (e) {
                  U(e, B);
                }),
                  U(e, R),
                  e.load();
              },
            },
            re = function (e, t) {
              (function (e) {
                var t = oe[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (V(e)) {
                        var t = H(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  L(e) ||
                    w(e) ||
                    (k(e, t.class_entered),
                    k(e, t.class_exited),
                    k(e, t.class_applied),
                    k(e, t.class_loading),
                    k(e, t.class_loaded),
                    k(e, t.class_error));
                })(e, t),
                A(e),
                j(e);
            },
            de = ["IMG", "IFRAME", "VIDEO"],
            ue = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            he = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, l) {
                      var n = (function (e) {
                        return $.indexOf(E(e)) >= 0;
                      })(e);
                      C(e, "entered"),
                        O(e, s.class_entered),
                        k(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && I(e, s);
                        })(e, s, l),
                        x(s.callback_enter, e, t, l),
                        n || ae(e, s, l);
                    })(e.target, e, t, s)
                  : (function (e, t, s, l) {
                      L(e) ||
                        (O(e, s.class_exited),
                        (function (e, t, s, l) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return E(e) === p;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (te(e),
                            (function (e) {
                              M(e, function (e) {
                                ce(e);
                              }),
                                ce(e);
                            })(e),
                            ie(e),
                            k(e, s.class_loading),
                            q(l, -1),
                            A(e),
                            x(s.callback_cancel, e, t, l));
                        })(e, t, s, l),
                        x(s.callback_exit, e, t, l));
                    })(e.target, e, t, s);
              });
            },
            me = function (e) {
              return Array.prototype.slice.call(e);
            },
            pe = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            fe = function (e) {
              return (function (e) {
                return E(e) === v;
              })(e);
            },
            ge = function (e, t) {
              return (function (e) {
                return me(e).filter(L);
              })(e || pe(t));
            },
            ve = function (e, s) {
              var n = i(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  l &&
                    !ue(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        he(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(n, this),
                (function (e, s) {
                  t &&
                    window.addEventListener("online", function () {
                      !(function (e, t) {
                        var s;
                        ((s = pe(e)), me(s).filter(fe)).forEach(function (t) {
                          k(t, e.class_error), A(t);
                        }),
                          t.update();
                      })(e, s);
                    });
                })(n, this),
                this.update(s);
            };
          return (
            (ve.prototype = {
              update: function (e) {
                var t,
                  n,
                  a = this._settings,
                  c = ge(e, a);
                P(this, c.length),
                  !s && l
                    ? ue(a)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== de.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  le(e, t, s),
                                  (function (e, t) {
                                    var s = X[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  C(e, S);
                              })(e, t, s);
                          }),
                            P(s, 0);
                        })(c, a, this)
                      : ((n = c),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(c);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  pe(this._settings).forEach(function (e) {
                    j(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                ge(e, s).forEach(function (e) {
                  I(e, t), ae(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                pe(e).forEach(function (t) {
                  re(t, e);
                });
              },
            }),
            (ve.load = function (e, t) {
              var s = i(t);
              ae(e, s);
            }),
            (ve.resetStatus = function (e) {
              A(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, l = 0; (s = t[l]); l += 1) o(e, s);
                  else o(e, t);
              })(ve, window.lazyLoadOptions),
            ve
          );
        })();
      },
    },
    t = {};
  function s(l) {
    var n = t[l];
    if (void 0 !== n) return n.exports;
    var a = (t[l] = { exports: {} });
    return e[l].call(a.exports, a, a.exports, s), a.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      l = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let l = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = l + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } })
                );
            }, t);
        }
      },
      n = (e, s = 500) => (e.hidden ? l(e, s) : t(e, s)),
      a = !0,
      c = (e = 500) => {
        let t = document.querySelector("body");
        if (a) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (a = !1),
            setTimeout(function () {
              a = !0;
            }, e);
        }
      },
      i = (e = 500) => {
        let t = document.querySelector("body");
        if (a) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (a = !1),
            setTimeout(function () {
              a = !0;
            }, e);
        }
      };
    function o(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    let r = (e, t = !1, s = 500, l = 0) => {
      const n = "string" == typeof e ? document.querySelector(e) : e;
      if (n) {
        let a = "",
          i = 0;
        t &&
          ((a = "header.header"), (i = document.querySelector(a).offsetHeight));
        let r = {
          speedAsDuration: !0,
          speed: s,
          header: a,
          offset: l,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (c(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(n, "", r);
        else {
          let e = n.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: i ? e - i : e, behavior: "smooth" });
        }
        o(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else o(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    let d = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let s = t.querySelectorAll("input,textarea");
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus"),
                d.removeError(t);
            }
            let l = t.querySelectorAll(".checkbox__input");
            if (l.length > 0)
              for (let e = 0; e < l.length; e++) {
                l[e].checked = !1;
              }
            if (e.select) {
              let s = t.querySelectorAll(".select");
              if (s.length)
                for (let t = 0; t < s.length; t++) {
                  const l = s[t].querySelector("select");
                  e.select.selectBuild(l);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    e.select = new (class {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let l = document.createElement("div");
        if (
          (l.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(l, e),
          l.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          l.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            l,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const l = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            n = this.getSelectElement(l).originalSelect;
          if ("click" === s) {
            if (!n.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(l, n, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(l);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(l, n, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? l.classList.add(this.selectClasses.classSelectFocus)
                  : l.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          n(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          l = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        l && l.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let l = "";
        return (
          (l += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (l += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (l += t ? s : ""),
          (l += t ? "</span>" : ""),
          (l += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (l += e.textContent),
          (l += t ? "</span>" : ""),
          (l += t ? "</span>" : ""),
          l
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          l = Array.from(e.options);
        if (l.length > 0) {
          let n = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (l = l.filter((e) => e.value)),
            (n += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            l.forEach((t) => {
              n += this.getOption(t, e);
            }),
            (n += t ? "</div>" : ""),
            n
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          l =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          n = e.dataset.class ? ` ${e.dataset.class}` : "",
          a = !!e.dataset.href && e.dataset.href,
          c = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let i = "";
        return (
          (i += a
            ? `<a ${c} ${l} href="${a}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
            : `<button ${l} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
          (i += this.getSelectElementContent(e)),
          (i += a ? "</a>" : "</button>"),
          i
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && d.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          l = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          n = this;
        t.addEventListener("input", function () {
          l.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && n.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && o(`[select]: ${e}`);
      }
    })({});
    new (s(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    window.addEventListener("DOMContentLoaded", function () {
      [].forEach.call(document.querySelectorAll(".tel"), function (e) {
        var t;
        function s(e) {
          e.keyCode && (t = e.keyCode),
            this.selectionStart < 3 && e.preventDefault();
          var s = "+7 (___) ___-__-__",
            l = 0,
            n = s.replace(/\D/g, ""),
            a = this.value.replace(/\D/g, ""),
            c = s.replace(/[_\d]/g, function (e) {
              return l < a.length ? a.charAt(l++) || n.charAt(l) : e;
            });
          -1 != (l = c.indexOf("_")) && (l < 5 && (l = 3), (c = c.slice(0, l)));
          var i = s
            .substr(0, this.value.length)
            .replace(/_+/g, function (e) {
              return "\\d{1," + e.length + "}";
            })
            .replace(/[+()]/g, "\\$&");
          (!(i = new RegExp("^" + i + "$")).test(this.value) ||
            this.value.length < 5 ||
            (t > 47 && t < 58)) &&
            (this.value = c),
            "blur" == e.type && this.value.length < 5 && (this.value = "");
        }
        e.addEventListener("input", s, !1),
          e.addEventListener("focus", s, !1),
          e.addEventListener("blur", s, !1),
          e.addEventListener("keydown", s, !1);
      });
    }),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            a &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? c(e)
                  : i(e);
              })(),
              document.documentElement.classList.toggle("menu-open"),
              document.documentElement.classList.contains("catalog-open") &&
                document.documentElement.classList.remove("catalog-open"),
              document.documentElement.classList.contains("sub-menu-open") &&
                document.documentElement.classList.remove("sub-menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              d.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && d.validateInput(t));
          });
      })(),
      (function (t) {
        e.popup && e.popup.open("some");
        const s = document.forms;
        if (s.length)
          for (const e of s)
            e.addEventListener("submit", function (e) {
              l(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                d.formClean(t);
              });
        async function l(e, s) {
          if (0 === (t ? d.getErrors(e) : 0)) {
            if (e.hasAttribute("data-ajax")) {
              s.preventDefault();
              const t = e.getAttribute("action")
                  ? e.getAttribute("action").trim()
                  : "#",
                l = e.getAttribute("method")
                  ? e.getAttribute("method").trim()
                  : "GET",
                a = new FormData(e);
              e.classList.add("_sending");
              const c = await fetch(t, { method: l, body: a });
              if (c.ok) {
                await c.json();
                e.classList.remove("_sending"), n(e);
              } else alert("Ошибка"), e.classList.remove("_sending");
            } else e.hasAttribute("data-dev") && (s.preventDefault(), n(e));
          } else {
            s.preventDefault();
            const t = e.querySelector("._form-error");
            t && e.hasAttribute("data-goto-error") && r(t, !0, 1e3);
          }
        }
        function n(t) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: t } })
          ),
            setTimeout(() => {
              if (e.popup) {
                const s = t.dataset.popupMessage;
                s && e.popup.open(s);
              }
            }, 0),
            d.formClean(t),
            o(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0);
  })();
})();
