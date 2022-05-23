var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};

// node_modules/@okta/okta-auth-js/dist/okta-auth-js.umd.js
var require_okta_auth_js_umd = __commonJS((exports, module) => {
  /*! For license information please see okta-auth-js.umd.js.LICENSE.txt */
  !function(e, t) {
    typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.OktaAuth = t() : e.OktaAuth = t();
  }(self, function() {
    return function() {
      var e = {1506: function(e2) {
        e2.exports = function(e3) {
          if (e3 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }, e2.exports.default = e2.exports, e2.exports.__esModule = true;
      }, 4575: function(e2) {
        e2.exports = function(e3, t2) {
          if (!(e3 instanceof t2))
            throw new TypeError("Cannot call a class as a function");
        }, e2.exports.default = e2.exports, e2.exports.__esModule = true;
      }, 9100: function(e2, t2, n2) {
        var r2 = n2(9489), o = n2(7067);
        function i(t3, n3, a) {
          return o() ? (e2.exports = i = Reflect.construct, e2.exports.default = e2.exports, e2.exports.__esModule = true) : (e2.exports = i = function(e3, t4, n4) {
            var o2 = [null];
            o2.push.apply(o2, t4);
            var i2 = new (Function.bind.apply(e3, o2))();
            return n4 && r2(i2, n4.prototype), i2;
          }, e2.exports.default = e2.exports, e2.exports.__esModule = true), i.apply(null, arguments);
        }
        e2.exports = i, e2.exports.default = e2.exports, e2.exports.__esModule = true;
      }, 3913: function(e2) {
        function t2(e3, t3) {
          for (var n2 = 0; n2 < t3.length; n2++) {
            var r2 = t3[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
          }
        }
        e2.exports = function(e3, n2, r2) {
          return n2 && t2(e3.prototype, n2), r2 && t2(e3, r2), e3;
        }, e2.exports.default = e2.exports, e2.exports.__esModule = true;
      }, 9754: function(e2) {
        function t2(n2) {
          return e2.exports = t2 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e3) {
            return e3.__proto__ || Object.getPrototypeOf(e3);
          }, e2.exports.default = e2.exports, e2.exports.__esModule = true, t2(n2);
        }
        e2.exports = t2, e2.exports.default = e2.exports, e2.exports.__esModule = true;
      }, 2205: function(e2, t2, n2) {
        var r2 = n2(9489);
        e2.exports = function(e3, t3) {
          if (typeof t3 != "function" && t3 !== null)
            throw new TypeError("Super expression must either be null or a function");
          e3.prototype = Object.create(t3 && t3.prototype, {constructor: {value: e3, writable: true, configurable: true}}), t3 && r2(e3, t3);
        }, e2.exports.default = e2.exports, e2.exports.__esModule = true;
      }, 430: function(e2) {
        e2.exports = function(e3) {
          return Function.toString.call(e3).indexOf("[native code]") !== -1;
        }, e2.exports.default = e2.exports, e2.exports.__esModule = true;
      }, 7067: function(e2) {
        e2.exports = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (e3) {
            return false;
          }
        }, e2.exports.default = e2.exports, e2.exports.__esModule = true;
      }, 8585: function(e2, t2, n2) {
        var r2 = n2(8).default, o = n2(1506);
        e2.exports = function(e3, t3) {
          return !t3 || r2(t3) !== "object" && typeof t3 != "function" ? o(e3) : t3;
        }, e2.exports.default = e2.exports, e2.exports.__esModule = true;
      }, 9489: function(e2) {
        function t2(n2, r2) {
          return e2.exports = t2 = Object.setPrototypeOf || function(e3, t3) {
            return e3.__proto__ = t3, e3;
          }, e2.exports.default = e2.exports, e2.exports.__esModule = true, t2(n2, r2);
        }
        e2.exports = t2, e2.exports.default = e2.exports, e2.exports.__esModule = true;
      }, 8: function(e2) {
        function t2(n2) {
          return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? (e2.exports = t2 = function(e3) {
            return typeof e3;
          }, e2.exports.default = e2.exports, e2.exports.__esModule = true) : (e2.exports = t2 = function(e3) {
            return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
          }, e2.exports.default = e2.exports, e2.exports.__esModule = true), t2(n2);
        }
        e2.exports = t2, e2.exports.default = e2.exports, e2.exports.__esModule = true;
      }, 5957: function(e2, t2, n2) {
        var r2 = n2(9754), o = n2(9489), i = n2(430), a = n2(9100);
        function u(t3) {
          var n3 = typeof Map == "function" ? new Map() : void 0;
          return e2.exports = u = function(e3) {
            if (e3 === null || !i(e3))
              return e3;
            if (typeof e3 != "function")
              throw new TypeError("Super expression must either be null or a function");
            if (n3 !== void 0) {
              if (n3.has(e3))
                return n3.get(e3);
              n3.set(e3, t4);
            }
            function t4() {
              return a(e3, arguments, r2(this).constructor);
            }
            return t4.prototype = Object.create(e3.prototype, {constructor: {value: t4, enumerable: false, writable: true, configurable: true}}), o(t4, e3);
          }, e2.exports.default = e2.exports, e2.exports.__esModule = true, u(t3);
        }
        e2.exports = u, e2.exports.default = e2.exports, e2.exports.__esModule = true;
      }, 7757: function(e2, t2, n2) {
        e2.exports = n2(5666);
      }, 7913: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {a: function() {
          return g;
        }, E: function() {
          return O;
        }});
        var r2 = n2(5861), o = n2(5671), i = n2(3144), a = n2(4942), u = n2(7757), s = n2.n(u), c = n2(3615), f = n2.n(c), l = n2(7301), p = n2(146), h = n2(8092), d = n2(5991);
        function v(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function y(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? v(Object(n3), true).forEach(function(t4) {
              (0, a.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : v(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        var g = null, m = {updateAuthStatePromise: null, canceledTimes: 0}, b = "authStateChange", O = function() {
          function e3(t4) {
            var n3 = this;
            if ((0, o.Z)(this, e3), (0, a.Z)(this, "_sdk", void 0), (0, a.Z)(this, "_pending", void 0), (0, a.Z)(this, "_authState", void 0), (0, a.Z)(this, "_prevAuthState", void 0), (0, a.Z)(this, "_logOptions", void 0), (0, a.Z)(this, "_transformQueue", void 0), !t4.emitter)
              throw new l.R("Emitter should be initialized before AuthStateManager");
            this._sdk = t4, this._pending = y({}, m), this._authState = g, this._logOptions = {}, this._prevAuthState = null, this._transformQueue = new d.Z({quiet: true}), t4.tokenManager.on(h.O3, function(e4, t5) {
              n3._setLogOptions({event: h.O3, key: e4, token: t5}), n3.updateAuthState();
            }), t4.tokenManager.on(h.FT, function(e4, t5) {
              n3._setLogOptions({event: h.FT, key: e4, token: t5}), n3.updateAuthState();
            });
          }
          var t3;
          return (0, i.Z)(e3, [{key: "_setLogOptions", value: function(e4) {
            this._logOptions = e4;
          }}, {key: "getAuthState", value: function() {
            return this._authState;
          }}, {key: "getPreviousAuthState", value: function() {
            return this._prevAuthState;
          }}, {key: "updateAuthState", value: (t3 = (0, r2.Z)(s().mark(function e4() {
            var t4, n3, r3, o2, i2, a2, u2, c2 = this;
            return s().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    if (t4 = this._sdk.options, n3 = t4.transformAuthState, r3 = t4.devMode, o2 = function(e6) {
                      var t5 = c2._logOptions, n4 = t5.event, r4 = t5.key, o3 = t5.token;
                      (0, p.dr)().group("OKTA-AUTH-JS:updateAuthState: Event:".concat(n4, " Status:").concat(e6)), (0, p.dr)().log(r4, o3), (0, p.dr)().log("Current authState", c2._authState), (0, p.dr)().groupEnd(), c2._logOptions = {};
                    }, i2 = function(e6) {
                      var t5, n4;
                      n4 = e6, (t5 = c2._authState) && t5.isAuthenticated === n4.isAuthenticated && JSON.stringify(t5.idToken) === JSON.stringify(n4.idToken) && JSON.stringify(t5.accessToken) === JSON.stringify(n4.accessToken) && t5.error === n4.error ? r3 && o2("unchanged") : (c2._prevAuthState = c2._authState, c2._authState = e6, c2._sdk.emitter.emit(b, y({}, e6)), r3 && o2("emitted"));
                    }, a2 = function e6(t5) {
                      return c2._pending.updateAuthStatePromise.then(function() {
                        var n4 = c2._pending.updateAuthStatePromise;
                        return n4 && n4 !== t5 ? e6(n4) : c2.getAuthState();
                      });
                    }, !this._pending.updateAuthStatePromise) {
                      e5.next = 11;
                      break;
                    }
                    if (!(this._pending.canceledTimes >= 10)) {
                      e5.next = 10;
                      break;
                    }
                    return r3 && o2("terminated"), e5.abrupt("return", a2(this._pending.updateAuthStatePromise));
                  case 10:
                    this._pending.updateAuthStatePromise.cancel();
                  case 11:
                    return u2 = new (f())(function(e6, t5, a3) {
                      a3.shouldReject = false, a3(function() {
                        c2._pending.updateAuthStatePromise = null, c2._pending.canceledTimes = c2._pending.canceledTimes + 1, r3 && o2("canceled");
                      });
                      var s2 = function(t6) {
                        u2.isCanceled ? e6() : (i2(t6), e6(), c2._pending = y({}, m));
                      };
                      c2._sdk.isAuthenticated().then(function() {
                        if (u2.isCanceled)
                          e6();
                        else {
                          var t6 = c2._sdk.tokenManager.getTokensSync(), r4 = t6.accessToken, o3 = t6.idToken, i3 = t6.refreshToken, a4 = {accessToken: r4, idToken: o3, refreshToken: i3, isAuthenticated: !(!r4 || !o3)};
                          (n3 ? c2._transformQueue.push(n3, null, c2._sdk, a4) : Promise.resolve(a4)).then(function(e7) {
                            return s2(e7);
                          }).catch(function(e7) {
                            return s2({accessToken: r4, idToken: o3, refreshToken: i3, isAuthenticated: false, error: e7});
                          });
                        }
                      });
                    }), this._pending.updateAuthStatePromise = u2, e5.abrupt("return", a2(u2));
                  case 14:
                  case "end":
                    return e5.stop();
                }
            }, e4, this);
          })), function() {
            return t3.apply(this, arguments);
          })}, {key: "subscribe", value: function(e4) {
            this._sdk.emitter.on(b, e4);
          }}, {key: "unsubscribe", value: function(e4) {
            this._sdk.emitter.off(b, e4);
          }}]), e3;
        }();
      }, 7725: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {Z: function() {
          return ft;
        }});
        var r2 = {};
        n2.r(r2), n2.d(r2, {buildCredentialCreationOptions: function() {
          return A;
        }, buildCredentialRequestOptions: function() {
          return P;
        }, getAssertion: function() {
          return x;
        }, getAttestation: function() {
          return R;
        }});
        var o = n2(4925), i = n2(5861), a = n2(5671), u = n2(3144), s = n2(4942), c = n2(7757), f = n2.n(c), l = n2(1971), p = n2(2375), h = n2(3611), d = n2(3193), v = n2(6718), y = n2(6780);
        function g(e3) {
          return e3.session.get().then(function(e4) {
            return e4.status === "ACTIVE";
          }).catch(function() {
            return false;
          });
        }
        function m(e3) {
          return (0, y.U2)(e3, "/api/v1/sessions/me", {withCredentials: true}).then(function(t3) {
            var n3 = (0, d.CE)(t3, "_links");
            return n3.refresh = function() {
              return (0, y.v_)(e3, (0, d.Rg)(t3, "refresh").href, {}, {withCredentials: true});
            }, n3.user = function() {
              return (0, y.U2)(e3, (0, d.Rg)(t3, "user").href, {withCredentials: true});
            }, n3;
          }).catch(function() {
            return {status: "INACTIVE"};
          });
        }
        function b(e3) {
          return (0, y.c3)(e3, {url: e3.getIssuerOrigin() + "/api/v1/sessions/me", method: "DELETE", withCredentials: true});
        }
        function O(e3) {
          return (0, y.v_)(e3, "/api/v1/sessions/me/lifecycle/refresh", {}, {withCredentials: true});
        }
        function k(e3, t3, n3) {
          n3 = n3 || window.location.href, window.location.assign(e3.getIssuerOrigin() + "/login/sessionCookieRedirect" + (0, v.UK)({checkAccountSetupComplete: true, token: t3, redirectUrl: n3}));
        }
        var w = n2(1416), T = n2(415), E = n2(9326), S = n2(7987), _ = function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t3 = [];
          return e3.forEach(function(e4) {
            e4.key === "webauthn" && t3.push({type: "public-key", id: (0, S.dX)(e4.credentialId)});
          }), t3;
        }, A = function(e3, t3) {
          return {publicKey: {rp: e3.rp, user: {id: (0, S.dX)(e3.user.id), name: e3.user.name, displayName: e3.user.displayName}, challenge: (0, S.dX)(e3.challenge), pubKeyCredParams: e3.pubKeyCredParams, attestation: e3.attestation, authenticatorSelection: e3.authenticatorSelection, excludeCredentials: _(t3)}};
        }, P = function(e3, t3) {
          return {publicKey: {challenge: (0, S.dX)(e3.challenge), userVerification: e3.userVerification, allowCredentials: _(t3)}};
        }, R = function(e3) {
          var t3 = e3.response;
          return {id: e3.id, clientData: (0, S.kQ)(t3.clientDataJSON), attestation: (0, S.kQ)(t3.attestationObject)};
        }, x = function(e3) {
          var t3 = e3.response;
          return {id: e3.id, clientData: (0, S.kQ)(t3.clientDataJSON), authenticatorData: (0, S.kQ)(t3.authenticatorData), signatureData: (0, S.kQ)(t3.signature)};
        };
        function j(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3];
            for (var r3 in n3)
              e3[r3] = n3[r3];
          }
          return e3;
        }
        var Z = function e3(t3, n3) {
          function r3(e4, r4, o2) {
            if (typeof document != "undefined") {
              typeof (o2 = j({}, n3, o2)).expires == "number" && (o2.expires = new Date(Date.now() + 864e5 * o2.expires)), o2.expires && (o2.expires = o2.expires.toUTCString()), e4 = encodeURIComponent(e4).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
              var i2 = "";
              for (var a2 in o2)
                o2[a2] && (i2 += "; " + a2, o2[a2] !== true && (i2 += "=" + o2[a2].split(";")[0]));
              return document.cookie = e4 + "=" + t3.write(r4, e4) + i2;
            }
          }
          return Object.create({set: r3, get: function(e4) {
            if (typeof document != "undefined" && (!arguments.length || e4)) {
              for (var n4 = document.cookie ? document.cookie.split("; ") : [], r4 = {}, o2 = 0; o2 < n4.length; o2++) {
                var i2 = n4[o2].split("="), a2 = i2.slice(1).join("=");
                try {
                  var u2 = decodeURIComponent(i2[0]);
                  if (r4[u2] = t3.read(a2, u2), e4 === u2)
                    break;
                } catch (e5) {
                }
              }
              return e4 ? r4[e4] : r4;
            }
          }, remove: function(e4, t4) {
            r3(e4, "", j({}, t4, {expires: -1}));
          }, withAttributes: function(t4) {
            return e3(this.converter, j({}, this.attributes, t4));
          }, withConverter: function(t4) {
            return e3(j({}, this.converter, t4), this.attributes);
          }}, {attributes: {value: Object.freeze(n3)}, converter: {value: Object.freeze(t3)}});
        }({read: function(e3) {
          return e3[0] === '"' && (e3 = e3.slice(1, -1)), e3.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        }, write: function(e3) {
          return encodeURIComponent(e3).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
        }}, {path: "/"}), C = Z, D = n2(9123), I = n2(146), M = {getHttpCache: function() {
          return null;
        }, getPKCEStorage: function() {
          return null;
        }, browserHasLocalStorage: function() {
          try {
            var e3 = this.getLocalStorage();
            return this.testStorage(e3);
          } catch (e4) {
            return false;
          }
        }, browserHasSessionStorage: function() {
          try {
            var e3 = this.getSessionStorage();
            return this.testStorage(e3);
          } catch (e4) {
            return false;
          }
        }, testStorageType: function(e3) {
          var t3 = false;
          switch (e3) {
            case "sessionStorage":
              t3 = this.browserHasSessionStorage();
              break;
            case "localStorage":
              t3 = this.browserHasLocalStorage();
              break;
            case "cookie":
            case "memory":
              t3 = true;
              break;
            default:
              t3 = false;
          }
          return t3;
        }, getStorageByType: function(e3, t3) {
          var n3;
          switch (e3) {
            case "sessionStorage":
              n3 = this.getSessionStorage();
              break;
            case "localStorage":
              n3 = this.getLocalStorage();
              break;
            case "cookie":
              n3 = this.getCookieStorage(t3);
              break;
            case "memory":
              n3 = this.getInMemoryStorage();
              break;
            default:
              throw new D.Z("Unrecognized storage option: ".concat(e3));
          }
          return n3;
        }, findStorageType: function(e3) {
          var t3, n3;
          return t3 = (e3 = e3.slice()).shift(), (n3 = e3.length ? e3[0] : null) ? this.testStorageType(t3) ? t3 : ((0, I.ZK)("This browser doesn't support ".concat(t3, ". Switching to ").concat(n3, ".")), this.findStorageType(e3)) : t3;
        }, getLocalStorage: function() {
          return localStorage;
        }, getSessionStorage: function() {
          return sessionStorage;
        }, getCookieStorage: function(e3) {
          var t3 = this, n3 = e3.secure, r3 = e3.sameSite, o2 = e3.sessionCookie;
          if (n3 === void 0 || r3 === void 0)
            throw new D.Z('getCookieStorage: "secure" and "sameSite" options must be provided');
          var i2 = {getItem: this.storage.get, setItem: function(e4, i3) {
            var a2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "2200-01-01T00:00:00.000Z";
            a2 = o2 ? null : a2, t3.storage.set(e4, i3, a2, {secure: n3, sameSite: r3});
          }, removeItem: function(e4) {
            t3.storage.delete(e4);
          }};
          return e3.useSeparateCookies ? {getItem: function(e4) {
            var t4 = i2.getItem(), n4 = {};
            return Object.keys(t4).forEach(function(r4) {
              r4.indexOf(e4) === 0 && (n4[r4.replace("".concat(e4, "_"), "")] = JSON.parse(t4[r4]));
            }), JSON.stringify(n4);
          }, setItem: function(e4, t4) {
            var n4 = JSON.parse(this.getItem(e4));
            t4 = JSON.parse(t4), Object.keys(t4).forEach(function(r4) {
              var o3 = e4 + "_" + r4, a2 = JSON.stringify(t4[r4]);
              i2.setItem(o3, a2), delete n4[r4];
            }), Object.keys(n4).forEach(function(t5) {
              i2.removeItem(e4 + "_" + t5);
            });
          }, removeItem: function(e4) {
            var t4 = JSON.parse(this.getItem(e4));
            Object.keys(t4).forEach(function(t5) {
              i2.removeItem(e4 + "_" + t5);
            });
          }} : i2;
        }, inMemoryStore: {}, getInMemoryStorage: function() {
          var e3 = this;
          return {getItem: function(t3) {
            return e3.inMemoryStore[t3];
          }, setItem: function(t3, n3) {
            e3.inMemoryStore[t3] = n3;
          }};
        }, testStorage: function(e3) {
          var t3 = "okta-test-storage";
          try {
            return e3.setItem(t3, t3), e3.removeItem(t3), true;
          } catch (e4) {
            return false;
          }
        }, storage: {set: function(e3, t3, n3, r3) {
          var o2 = r3.sameSite, i2 = r3.secure;
          if (i2 === void 0 || o2 === void 0)
            throw new D.Z('storage.set: "secure" and "sameSite" options must be provided');
          var a2 = {path: r3.path || "/", secure: i2, sameSite: o2};
          return Date.parse(n3) && (a2.expires = new Date(n3)), C.set(e3, t3, a2), this.get(e3);
        }, get: function(e3) {
          return arguments.length ? C.get(e3) : C.get();
        }, delete: function(e3) {
          return C.remove(e3, {path: "/"});
        }}}, N = M, U = n2(8092), L = n2(2982);
        Promise.resolve(false);
        var F = Promise.resolve(true), K = Promise.resolve();
        function H(e3, t3) {
          return e3 || (e3 = 0), new Promise(function(n3) {
            return setTimeout(function() {
              return n3(t3);
            }, e3);
          });
        }
        function B() {
          return Math.random().toString(36).substring(2);
        }
        var G = 0, V = 0;
        function q() {
          var e3 = new Date().getTime();
          return e3 === G ? 1e3 * e3 + ++V : (G = e3, V = 0, 1e3 * e3);
        }
        var Y = Object.prototype.toString.call(typeof process != "undefined" ? process : 0) === "[object process]", W = {create: function(e3) {
          var t3 = {messagesCallback: null, bc: new BroadcastChannel(e3), subFns: []};
          return t3.bc.onmessage = function(e4) {
            t3.messagesCallback && t3.messagesCallback(e4.data);
          }, t3;
        }, close: function(e3) {
          e3.bc.close(), e3.subFns = [];
        }, onMessage: function(e3, t3) {
          e3.messagesCallback = t3;
        }, postMessage: function(e3, t3) {
          try {
            return e3.bc.postMessage(t3, false), K;
          } catch (e4) {
            return Promise.reject(e4);
          }
        }, canBeUsed: function() {
          if (Y && typeof window == "undefined")
            return false;
          if (typeof BroadcastChannel == "function") {
            if (BroadcastChannel._pubkey)
              throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");
            return true;
          }
          return false;
        }, type: "native", averageResponseTime: function() {
          return 150;
        }, microSeconds: q}, z = function() {
          function e3(e4) {
            this.ttl = e4, this.set = new Set(), this.timeMap = new Map();
          }
          return e3.prototype.has = function(e4) {
            return this.set.has(e4);
          }, e3.prototype.add = function(e4) {
            var t3 = this;
            this.timeMap.set(e4, J()), this.set.add(e4), setTimeout(function() {
              !function(e5) {
                for (var t4 = J() - e5.ttl, n3 = e5.set[Symbol.iterator](); ; ) {
                  var r3 = n3.next().value;
                  if (!r3)
                    return;
                  if (!(e5.timeMap.get(r3) < t4))
                    return;
                  e5.timeMap.delete(r3), e5.set.delete(r3);
                }
              }(t3);
            }, 0);
          }, e3.prototype.clear = function() {
            this.set.clear(), this.timeMap.clear();
          }, e3;
        }();
        function J() {
          return new Date().getTime();
        }
        function Q() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t3 = JSON.parse(JSON.stringify(e3));
          return t3.webWorkerSupport === void 0 && (t3.webWorkerSupport = true), t3.idb || (t3.idb = {}), t3.idb.ttl || (t3.idb.ttl = 45e3), t3.idb.fallbackInterval || (t3.idb.fallbackInterval = 150), e3.idb && typeof e3.idb.onclose == "function" && (t3.idb.onclose = e3.idb.onclose), t3.localstorage || (t3.localstorage = {}), t3.localstorage.removeTimeout || (t3.localstorage.removeTimeout = 6e4), e3.methods && (t3.methods = e3.methods), t3.node || (t3.node = {}), t3.node.ttl || (t3.node.ttl = 12e4), t3.node.maxParallelWrites || (t3.node.maxParallelWrites = 2048), t3.node.useFastPath === void 0 && (t3.node.useFastPath = true), t3;
        }
        var $ = "messages";
        function X() {
          if (typeof indexedDB != "undefined")
            return indexedDB;
          if (typeof window != "undefined") {
            if (window.mozIndexedDB !== void 0)
              return window.mozIndexedDB;
            if (window.webkitIndexedDB !== void 0)
              return window.webkitIndexedDB;
            if (window.msIndexedDB !== void 0)
              return window.msIndexedDB;
          }
          return false;
        }
        function ee(e3) {
          e3.closed || te(e3).then(function() {
            return H(e3.options.idb.fallbackInterval);
          }).then(function() {
            return ee(e3);
          });
        }
        function te(e3) {
          return e3.closed ? K : e3.messagesCallback ? (t3 = e3.db, n3 = e3.lastCursorId, r3 = t3.transaction($).objectStore($), o2 = [], new Promise(function(e4) {
            (function() {
              try {
                var e5 = IDBKeyRange.bound(n3 + 1, 1 / 0);
                return r3.openCursor(e5);
              } catch (e6) {
                return r3.openCursor();
              }
            })().onsuccess = function(t4) {
              var r4 = t4.target.result;
              r4 ? r4.value.id < n3 + 1 ? r4.continue(n3 + 1) : (o2.push(r4.value), r4.continue()) : e4(o2);
            };
          })).then(function(t4) {
            var n4 = t4.filter(function(e4) {
              return !!e4;
            }).map(function(t5) {
              return t5.id > e3.lastCursorId && (e3.lastCursorId = t5.id), t5;
            }).filter(function(t5) {
              return function(e4, t6) {
                return !(e4.uuid === t6.uuid || t6.eMIs.has(e4.id) || e4.data.time < t6.messagesCallbackTime);
              }(t5, e3);
            }).sort(function(e4, t5) {
              return e4.time - t5.time;
            });
            return n4.forEach(function(t5) {
              e3.messagesCallback && (e3.eMIs.add(t5.id), e3.messagesCallback(t5.data));
            }), K;
          }) : K;
          var t3, n3, r3, o2;
        }
        var ne = {create: function(e3, t3) {
          return t3 = Q(t3), function(e4) {
            var t4 = "pubkey.broadcast-channel-0-" + e4, n3 = X().open(t4, 1);
            return n3.onupgradeneeded = function(e5) {
              e5.target.result.createObjectStore($, {keyPath: "id", autoIncrement: true});
            }, new Promise(function(e5, t5) {
              n3.onerror = function(e6) {
                return t5(e6);
              }, n3.onsuccess = function() {
                e5(n3.result);
              };
            });
          }(e3).then(function(n3) {
            var r3 = {closed: false, lastCursorId: 0, channelName: e3, options: t3, uuid: B(), eMIs: new z(2 * t3.idb.ttl), writeBlockPromise: K, messagesCallback: null, readQueuePromises: [], db: n3};
            return n3.onclose = function() {
              r3.closed = true, t3.idb.onclose && t3.idb.onclose();
            }, ee(r3), r3;
          });
        }, close: function(e3) {
          e3.closed = true, e3.db.close();
        }, onMessage: function(e3, t3, n3) {
          e3.messagesCallbackTime = n3, e3.messagesCallback = t3, te(e3);
        }, postMessage: function(e3, t3) {
          return e3.writeBlockPromise = e3.writeBlockPromise.then(function() {
            return function(e4, t4, n3) {
              var r3 = {uuid: t4, time: new Date().getTime(), data: n3}, o2 = e4.transaction([$], "readwrite");
              return new Promise(function(e5, t5) {
                o2.oncomplete = function() {
                  return e5();
                }, o2.onerror = function(e6) {
                  return t5(e6);
                }, o2.objectStore($).add(r3);
              });
            }(e3.db, e3.uuid, t3);
          }).then(function() {
            var t4, n3;
            (0, 10, Math.floor(11 * Math.random() + 0)) === 0 && (t4 = e3.db, n3 = e3.options.idb.ttl, function(e4, t5) {
              var n4 = new Date().getTime() - t5, r3 = e4.transaction($).objectStore($), o2 = [];
              return new Promise(function(e5) {
                r3.openCursor().onsuccess = function(t6) {
                  var r4 = t6.target.result;
                  if (r4) {
                    var i2 = r4.value;
                    if (!(i2.time < n4))
                      return void e5(o2);
                    o2.push(i2), r4.continue();
                  } else
                    e5(o2);
                };
              });
            }(t4, n3).then(function(e4) {
              return Promise.all(e4.map(function(e5) {
                return function(e6, t5) {
                  var n4 = e6.transaction([$], "readwrite").objectStore($).delete(t5);
                  return new Promise(function(e7) {
                    n4.onsuccess = function() {
                      return e7();
                    };
                  });
                }(t4, e5.id);
              }));
            }));
          }), e3.writeBlockPromise;
        }, canBeUsed: function() {
          return !Y && !!X();
        }, type: "idb", averageResponseTime: function(e3) {
          return 2 * e3.idb.fallbackInterval;
        }, microSeconds: q};
        function re() {
          var e3;
          if (typeof window == "undefined")
            return null;
          try {
            e3 = window.localStorage, e3 = window["ie8-eventlistener/storage"] || window.localStorage;
          } catch (e4) {
          }
          return e3;
        }
        function oe(e3) {
          return "pubkey.broadcastChannel-" + e3;
        }
        function ie() {
          if (Y)
            return false;
          var e3 = re();
          if (!e3)
            return false;
          try {
            var t3 = "__broadcastchannel_check";
            e3.setItem(t3, "works"), e3.removeItem(t3);
          } catch (e4) {
            return false;
          }
          return true;
        }
        var ae = {create: function(e3, t3) {
          if (t3 = Q(t3), !ie())
            throw new Error("BroadcastChannel: localstorage cannot be used");
          var n3 = B(), r3 = new z(t3.localstorage.removeTimeout), o2 = {channelName: e3, uuid: n3, eMIs: r3};
          return o2.listener = function(e4, t4) {
            var i2 = oe(e4), a2 = function(e5) {
              var t5;
              e5.key === i2 && (t5 = JSON.parse(e5.newValue), o2.messagesCallback && t5.uuid !== n3 && t5.token && !r3.has(t5.token) && (t5.data.time && t5.data.time < o2.messagesCallbackTime || (r3.add(t5.token), o2.messagesCallback(t5.data))));
            };
            return window.addEventListener("storage", a2), a2;
          }(e3), o2;
        }, close: function(e3) {
          var t3;
          t3 = e3.listener, window.removeEventListener("storage", t3);
        }, onMessage: function(e3, t3, n3) {
          e3.messagesCallbackTime = n3, e3.messagesCallback = t3;
        }, postMessage: function(e3, t3) {
          return new Promise(function(n3) {
            H().then(function() {
              var r3 = oe(e3.channelName), o2 = {token: B(), time: new Date().getTime(), data: t3, uuid: e3.uuid}, i2 = JSON.stringify(o2);
              re().setItem(r3, i2);
              var a2 = document.createEvent("Event");
              a2.initEvent("storage", true, true), a2.key = r3, a2.newValue = i2, window.dispatchEvent(a2), n3();
            });
          });
        }, canBeUsed: ie, type: "localstorage", averageResponseTime: function() {
          var e3 = navigator.userAgent.toLowerCase();
          return e3.includes("safari") && !e3.includes("chrome") ? 240 : 120;
        }, microSeconds: q}, ue = q, se = new Set(), ce = {create: function(e3) {
          var t3 = {name: e3, messagesCallback: null};
          return se.add(t3), t3;
        }, close: function(e3) {
          se.delete(e3);
        }, onMessage: function(e3, t3) {
          e3.messagesCallback = t3;
        }, postMessage: function(e3, t3) {
          return new Promise(function(n3) {
            return setTimeout(function() {
              Array.from(se).filter(function(t4) {
                return t4.name === e3.name;
              }).filter(function(t4) {
                return t4 !== e3;
              }).filter(function(e4) {
                return !!e4.messagesCallback;
              }).forEach(function(e4) {
                return e4.messagesCallback(t3);
              }), n3();
            }, 5);
          });
        }, canBeUsed: function() {
          return true;
        }, type: "simulate", averageResponseTime: function() {
          return 5;
        }, microSeconds: ue}, fe = [W, ne, ae], le = new Set(), pe = 0, he = function(e3, t3) {
          var n3, r3, o2;
          this.id = pe++, le.add(this), this.name = e3, this.options = Q(t3), this.method = function(e4) {
            var t4 = [].concat(e4.methods, fe).filter(Boolean);
            if (e4.type) {
              if (e4.type === "simulate")
                return ce;
              var n4 = t4.find(function(t5) {
                return t5.type === e4.type;
              });
              if (n4)
                return n4;
              throw new Error("method-type " + e4.type + " not found");
            }
            e4.webWorkerSupport || Y || (t4 = t4.filter(function(e5) {
              return e5.type !== "idb";
            }));
            var r4 = t4.find(function(e5) {
              return e5.canBeUsed();
            });
            if (r4)
              return r4;
            throw new Error("No useable method found in " + JSON.stringify(fe.map(function(e5) {
              return e5.type;
            })));
          }(this.options), this._iL = false, this._onML = null, this._addEL = {message: [], internal: []}, this._uMP = new Set(), this._befC = [], this._prepP = null, (o2 = r3 = (n3 = this).method.create(n3.name, n3.options)) && typeof o2.then == "function" ? (n3._prepP = r3, r3.then(function(e4) {
            n3._state = e4;
          })) : n3._state = r3;
        };
        function de(e3, t3, n3) {
          var r3 = {time: e3.method.microSeconds(), type: t3, data: n3};
          return (e3._prepP ? e3._prepP : K).then(function() {
            var t4 = e3.method.postMessage(e3._state, r3);
            return e3._uMP.add(t4), t4.catch().then(function() {
              return e3._uMP.delete(t4);
            }), t4;
          });
        }
        function ve(e3) {
          return e3._addEL.message.length > 0 || e3._addEL.internal.length > 0;
        }
        function ye(e3, t3, n3) {
          e3._addEL[t3].push(n3), function(e4) {
            if (!e4._iL && ve(e4)) {
              var t4 = function(t5) {
                e4._addEL[t5.type].forEach(function(e5) {
                  var n5 = e5.time - 1e5;
                  t5.time >= n5 && e5.fn(t5.data);
                });
              }, n4 = e4.method.microSeconds();
              e4._prepP ? e4._prepP.then(function() {
                e4._iL = true, e4.method.onMessage(e4._state, t4, n4);
              }) : (e4._iL = true, e4.method.onMessage(e4._state, t4, n4));
            }
          }(e3);
        }
        function ge(e3, t3, n3) {
          e3._addEL[t3] = e3._addEL[t3].filter(function(e4) {
            return e4 !== n3;
          }), function(e4) {
            if (e4._iL && !ve(e4)) {
              e4._iL = false;
              var t4 = e4.method.microSeconds();
              e4.method.onMessage(e4._state, null, t4);
            }
          }(e3);
        }
        he._pubkey = true, he.prototype = {postMessage: function(e3) {
          if (this.closed)
            throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed " + JSON.stringify(e3));
          return de(this, "message", e3);
        }, postInternal: function(e3) {
          return de(this, "internal", e3);
        }, set onmessage(e3) {
          var t3 = {time: this.method.microSeconds(), fn: e3};
          ge(this, "message", this._onML), e3 && typeof e3 == "function" ? (this._onML = t3, ye(this, "message", t3)) : this._onML = null;
        }, addEventListener: function(e3, t3) {
          ye(this, e3, {time: this.method.microSeconds(), fn: t3});
        }, removeEventListener: function(e3, t3) {
          ge(this, e3, this._addEL[e3].find(function(e4) {
            return e4.fn === t3;
          }));
        }, close: function() {
          var e3 = this;
          if (!this.closed) {
            le.delete(this), this.closed = true;
            var t3 = this._prepP ? this._prepP : K;
            return this._onML = null, this._addEL.message = [], t3.then(function() {
              return Promise.all(Array.from(e3._uMP));
            }).then(function() {
              return Promise.all(e3._befC.map(function(e4) {
                return e4();
              }));
            }).then(function() {
              return e3.method.close(e3._state);
            });
          }
        }, get type() {
          return this.method.type;
        }, get isClosed() {
          return this.closed;
        }};
        var me = n2(5643), be = n2.n(me), Oe = {add: function(e3) {
          if (typeof WorkerGlobalScope == "function" && self instanceof WorkerGlobalScope)
            ;
          else {
            if (typeof window.addEventListener != "function")
              return;
            window.addEventListener("beforeunload", function() {
              e3();
            }, true), window.addEventListener("unload", function() {
              e3();
            }, true);
          }
        }}, ke = n2(199), we = n2.n(ke), Te = be() ? we() : Oe, Ee = new Set(), Se = false;
        function _e() {
          var e3 = [];
          return Ee.forEach(function(t3) {
            e3.push(t3()), Ee.delete(t3);
          }), Promise.all(e3);
        }
        var Ae = function(e3, t3) {
          var n3 = this;
          this.broadcastChannel = e3, this._options = t3, this.isLeader = false, this.hasLeader = false, this.isDead = false, this.token = B(), this._aplQ = K, this._aplQC = 0, this._unl = [], this._lstns = [], this._dpL = function() {
          }, this._dpLC = false;
          var r3 = function(e4) {
            e4.context === "leader" && (e4.action === "death" && (n3.hasLeader = false), e4.action === "tell" && (n3.hasLeader = true));
          };
          this.broadcastChannel.addEventListener("internal", r3), this._lstns.push(r3);
        };
        function Pe(e3, t3) {
          var n3 = {context: "leader", action: t3, token: e3.token};
          return e3.broadcastChannel.postInternal(n3);
        }
        Ae.prototype = {applyOnce: function(e3) {
          var t3 = this;
          if (this.isLeader)
            return H(0, true);
          if (this.isDead)
            return H(0, false);
          if (this._aplQC > 1)
            return this._aplQ;
          var n3 = function() {
            if (t3.isLeader)
              return F;
            var n4, r3 = false, o2 = new Promise(function(e4) {
              n4 = function() {
                r3 = true, e4();
              };
            }), i2 = [], a2 = function(e4) {
              e4.context === "leader" && e4.token != t3.token && (i2.push(e4), e4.action === "apply" && e4.token > t3.token && n4(), e4.action === "tell" && (n4(), t3.hasLeader = true));
            };
            t3.broadcastChannel.addEventListener("internal", a2);
            var u2 = e3 ? 4 * t3._options.responseTime : t3._options.responseTime;
            return Pe(t3, "apply").then(function() {
              return Promise.race([H(u2), o2.then(function() {
                return Promise.reject(new Error());
              })]);
            }).then(function() {
              return Pe(t3, "apply");
            }).then(function() {
              return Promise.race([H(u2), o2.then(function() {
                return Promise.reject(new Error());
              })]);
            }).catch(function() {
            }).then(function() {
              return t3.broadcastChannel.removeEventListener("internal", a2), !r3 && function(e4) {
                e4.isLeader = true, e4.hasLeader = true;
                var t4 = function(e5) {
                  if (Se || (Se = true, Te.add(_e)), typeof e5 != "function")
                    throw new Error("Listener is no function");
                  return Ee.add(e5), {remove: function() {
                    return Ee.delete(e5);
                  }, run: function() {
                    return Ee.delete(e5), e5();
                  }};
                }(function() {
                  return e4.die();
                });
                e4._unl.push(t4);
                var n5 = function(t5) {
                  t5.context === "leader" && t5.action === "apply" && Pe(e4, "tell"), t5.context !== "leader" || t5.action !== "tell" || e4._dpLC || (e4._dpLC = true, e4._dpL(), Pe(e4, "tell"));
                };
                return e4.broadcastChannel.addEventListener("internal", n5), e4._lstns.push(n5), Pe(e4, "tell");
              }(t3).then(function() {
                return true;
              });
            });
          };
          return this._aplQC = this._aplQC + 1, this._aplQ = this._aplQ.then(function() {
            return n3();
          }).then(function() {
            t3._aplQC = t3._aplQC - 1;
          }), this._aplQ.then(function() {
            return t3.isLeader;
          });
        }, awaitLeadership: function() {
          return this._aLP || (this._aLP = (e3 = this).isLeader ? K : new Promise(function(t3) {
            var n3 = false;
            function r3() {
              n3 || (n3 = true, e3.broadcastChannel.removeEventListener("internal", o2), t3(true));
            }
            e3.applyOnce().then(function() {
              e3.isLeader && r3();
            }), function t4() {
              return H(e3._options.fallbackInterval).then(function() {
                if (!e3.isDead && !n3)
                  return e3.isLeader ? void r3() : e3.applyOnce(true).then(function() {
                    e3.isLeader ? r3() : t4();
                  });
              });
            }();
            var o2 = function(t4) {
              t4.context === "leader" && t4.action === "death" && (e3.hasLeader = false, e3.applyOnce().then(function() {
                e3.isLeader && r3();
              }));
            };
            e3.broadcastChannel.addEventListener("internal", o2), e3._lstns.push(o2);
          })), this._aLP;
          var e3;
        }, set onduplicate(e3) {
          this._dpL = e3;
        }, die: function() {
          var e3 = this;
          return this._lstns.forEach(function(t3) {
            return e3.broadcastChannel.removeEventListener("internal", t3);
          }), this._lstns = [], this._unl.forEach(function(e4) {
            return e4.remove();
          }), this._unl = [], this.isLeader && (this.hasLeader = false, this.isLeader = false), this.isDead = true, Pe(this, "death");
        }};
        var Re = n2(7301), xe = function() {
          function e3(t3) {
            var n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            (0, a.Z)(this, e3), (0, s.Z)(this, "tokenManager", void 0), (0, s.Z)(this, "options", void 0), (0, s.Z)(this, "renewTimeQueue", void 0), (0, s.Z)(this, "started", false), this.tokenManager = t3, this.options = n3, this.renewTimeQueue = [], this.onTokenExpiredHandler = this.onTokenExpiredHandler.bind(this);
          }
          return (0, u.Z)(e3, [{key: "shouldThrottleRenew", value: function() {
            var e4 = false;
            if (this.renewTimeQueue.push(Date.now()), this.renewTimeQueue.length >= 10) {
              var t3 = this.renewTimeQueue.shift();
              e4 = this.renewTimeQueue[this.renewTimeQueue.length - 1] - t3 < 3e4;
            }
            return e4;
          }}, {key: "requiresLeadership", value: function() {
            return !!this.options.syncStorage && (0, T.isBrowser)();
          }}, {key: "onTokenExpiredHandler", value: function(e4) {
            if (this.options.autoRenew)
              if (this.shouldThrottleRenew()) {
                var t3 = new Re.R("Too many token renew requests");
                this.tokenManager.emitError(t3);
              } else
                this.tokenManager.renew(e4).catch(function() {
                });
            else
              this.options.autoRemove && this.tokenManager.remove(e4);
          }}, {key: "canStart", value: function() {
            return !!this.options.autoRenew || !!this.options.autoRemove;
          }}, {key: "start", value: function() {
            this.canStart() && (this.stop(), this.tokenManager.on(U.$Y, this.onTokenExpiredHandler), this.started = true);
          }}, {key: "stop", value: function() {
            this.started && (this.tokenManager.off(U.$Y, this.onTokenExpiredHandler), this.renewTimeQueue = [], this.started = false);
          }}, {key: "isStarted", value: function() {
            return this.started;
          }}]), e3;
        }(), je = function() {
          function e3(t3) {
            var n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            (0, a.Z)(this, e3), (0, s.Z)(this, "tokenManager", void 0), (0, s.Z)(this, "options", void 0), (0, s.Z)(this, "syncTimeout", void 0), (0, s.Z)(this, "started", false), this.tokenManager = t3, this.options = n3, this.storageListener = this.storageListener.bind(this);
          }
          return (0, u.Z)(e3, [{key: "storageListener", value: function(e4) {
            var t3 = this, n3 = e4.key, r3 = e4.newValue, o2 = e4.oldValue, i2 = this.tokenManager.getOptions();
            (!n3 || n3 === i2.storageKey && r3 !== o2) && (this.syncTimeout = setTimeout(function() {
              return t3.tokenManager.resetExpireEventTimeoutAll(), void t3.tokenManager.emitEventsForCrossTabsStorageUpdate(r3, o2);
            }, i2._storageEventDelay));
          }}, {key: "requiresLeadership", value: function() {
            return false;
          }}, {key: "isStarted", value: function() {
            return this.started;
          }}, {key: "canStart", value: function() {
            return !!this.options.syncStorage && (0, T.isBrowser)();
          }}, {key: "start", value: function() {
            this.canStart() && (this.stop(), window.addEventListener("storage", this.storageListener), this.started = true);
          }}, {key: "stop", value: function() {
            this.started && (window.removeEventListener("storage", this.storageListener), clearTimeout(this.syncTimeout), this.started = false);
          }}]), e3;
        }();
        function Ze(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function Ce(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? Ze(Object(n3), true).forEach(function(t4) {
              (0, s.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Ze(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function De(e3, t3) {
          var n3 = typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
          if (!n3) {
            if (Array.isArray(e3) || (n3 = function(e4, t4) {
              if (e4) {
                if (typeof e4 == "string")
                  return Ie(e4, t4);
                var n4 = Object.prototype.toString.call(e4).slice(8, -1);
                return n4 === "Object" && e4.constructor && (n4 = e4.constructor.name), n4 === "Map" || n4 === "Set" ? Array.from(e4) : n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? Ie(e4, t4) : void 0;
              }
            }(e3)) || t3 && e3 && typeof e3.length == "number") {
              n3 && (e3 = n3);
              var r3 = 0, o2 = function() {
              };
              return {s: o2, n: function() {
                return r3 >= e3.length ? {done: true} : {done: false, value: e3[r3++]};
              }, e: function(e4) {
                throw e4;
              }, f: o2};
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var i2, a2 = true, u2 = false;
          return {s: function() {
            n3 = n3.call(e3);
          }, n: function() {
            var e4 = n3.next();
            return a2 = e4.done, e4;
          }, e: function(e4) {
            u2 = true, i2 = e4;
          }, f: function() {
            try {
              a2 || n3.return == null || n3.return();
            } finally {
              if (u2)
                throw i2;
            }
          }};
        }
        function Ie(e3, t3) {
          (t3 == null || t3 > e3.length) && (t3 = e3.length);
          for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
            r3[n3] = e3[n3];
          return r3;
        }
        var Me = function() {
          function e3(t3) {
            var n3 = this, r3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            (0, a.Z)(this, e3), (0, s.Z)(this, "sdk", void 0), (0, s.Z)(this, "options", void 0), (0, s.Z)(this, "services", void 0), (0, s.Z)(this, "channel", void 0), (0, s.Z)(this, "elector", void 0), (0, s.Z)(this, "started", void 0), this.sdk = t3;
            var o2 = t3.tokenManager.getOptions(), i2 = o2.autoRenew, u2 = o2.autoRemove, c2 = o2.syncStorage;
            this.options = Object.assign({}, e3.defaultOptions, {autoRenew: i2, autoRemove: u2, syncStorage: c2}, r3), this.started = false, this.services = new Map(), this.onLeaderDuplicate = this.onLeaderDuplicate.bind(this), this.onLeader = this.onLeader.bind(this), e3.knownServices.forEach(function(e4) {
              var t4 = n3.createService(e4);
              t4 && n3.services.set(e4, t4);
            });
          }
          return (0, u.Z)(e3, [{key: "onLeader", value: function() {
            this.started && this.startServices();
          }}, {key: "onLeaderDuplicate", value: function() {
          }}, {key: "isLeader", value: function() {
            var e4;
            return !((e4 = this.elector) === null || e4 === void 0 || !e4.isLeader);
          }}, {key: "hasLeader", value: function() {
            var e4;
            return (e4 = this.elector) === null || e4 === void 0 ? void 0 : e4.hasLeader;
          }}, {key: "isLeaderRequired", value: function() {
            return (0, L.Z)(this.services.values()).some(function(e4) {
              return e4.requiresLeadership();
            });
          }}, {key: "start", value: function() {
            this.started || (this.isLeaderRequired() && this.startElector(), this.startServices(), this.started = true);
          }}, {key: "stop", value: function() {
            this.stopElector(), this.stopServices(), this.started = false;
          }}, {key: "getService", value: function(e4) {
            return this.services.get(e4);
          }}, {key: "startServices", value: function() {
            var e4, t3 = De(this.services.values());
            try {
              for (t3.s(); !(e4 = t3.n()).done; ) {
                var n3 = e4.value;
                n3.canStart() && !n3.isStarted() && (!n3.requiresLeadership() || this.isLeader()) && n3.start();
              }
            } catch (e5) {
              t3.e(e5);
            } finally {
              t3.f();
            }
          }}, {key: "stopServices", value: function() {
            var e4, t3 = De(this.services.values());
            try {
              for (t3.s(); !(e4 = t3.n()).done; )
                e4.value.stop();
            } catch (e5) {
              t3.e(e5);
            } finally {
              t3.f();
            }
          }}, {key: "startElector", value: function() {
            if (this.stopElector(), e3.canUseLeaderElection()) {
              if (!this.channel) {
                var t3 = this.options.broadcastChannelName;
                this.channel = new he(t3);
              }
              this.elector || (this.elector = function(e4, t4) {
                if (e4._leaderElector)
                  throw new Error("BroadcastChannel already has a leader-elector");
                t4 = function(e5, t5) {
                  return e5 || (e5 = {}), (e5 = JSON.parse(JSON.stringify(e5))).fallbackInterval || (e5.fallbackInterval = 3e3), e5.responseTime || (e5.responseTime = t5.method.averageResponseTime(t5.options)), e5;
                }(t4, e4);
                var n3 = new Ae(e4, t4);
                return e4._befC.push(function() {
                  return n3.die();
                }), e4._leaderElector = n3, n3;
              }(this.channel), this.elector.onduplicate = this.onLeaderDuplicate, this.elector.awaitLeadership().then(this.onLeader));
            }
          }}, {key: "stopElector", value: function() {
            var e4, t3;
            this.elector && ((e4 = this.elector) === null || e4 === void 0 || e4.die(), this.elector = void 0, (t3 = this.channel) === null || t3 === void 0 || t3.close(), this.channel = void 0);
          }}, {key: "createService", value: function(e4) {
            var t3, n3 = this.sdk.tokenManager;
            switch (e4) {
              case "autoRenew":
                t3 = new xe(n3, Ce({}, this.options));
                break;
              case "syncStorage":
                t3 = new je(n3, Ce({}, this.options));
                break;
              default:
                throw new Error("Unknown service ".concat(e4));
            }
            return t3;
          }}], [{key: "canUseLeaderElection", value: function() {
            return (0, T.isBrowser)();
          }}]), e3;
        }();
        (0, s.Z)(Me, "knownServices", ["autoRenew", "syncStorage"]), (0, s.Z)(Me, "defaultOptions", {autoRenew: true, autoRemove: true, syncStorage: true});
        var Ne = n2(5991);
        function Ue(e3, t3) {
          return t3 = t3 || {}, (0, T.isFingerprintSupported)() ? new Promise(function(i2, a2) {
            var u2;
            (r3 = document.createElement("iframe")).style.display = "none", o2 = function(t4) {
              if (t4 && t4.data && t4.origin === e3.getIssuerOrigin()) {
                try {
                  var n4 = JSON.parse(t4.data);
                } catch (e4) {
                  return;
                }
                if (n4)
                  return n4.type === "FingerprintAvailable" ? i2(n4.fingerprint) : void (n4.type === "FingerprintServiceReady" && t4.source.postMessage(JSON.stringify({type: "GetFingerprint"}), t4.origin));
              }
            }, (0, w.NH)(window, "message", o2), r3.src = e3.getIssuerOrigin() + "/auth/services/devicefingerprint", document.body.appendChild(r3), n3 = setTimeout(function() {
              a2(new Re.R("Fingerprinting timed out"));
            }, ((u2 = t3) === null || u2 === void 0 ? void 0 : u2.timeout) || 15e3);
          }).finally(function() {
            clearTimeout(n3), (0, w.ys)(window, "message", o2), document.body.contains(r3) && r3.parentElement.removeChild(r3);
          }) : Promise.reject(new Re.R("Fingerprinting is not supported on this device"));
          var n3, r3, o2;
        }
        var Le = n2(7913), Fe = n2(6311), Ke = n2(6529);
        function He(e3) {
          var t3 = (e3 = e3 || {}).scopes;
          if (t3 && !Array.isArray(t3))
            throw new D.Z('scopes must be a array of strings. Required usage: new OktaAuth({scopes: ["openid", "email"]})');
          var n3 = e3.issuer;
          if (!n3)
            throw new D.Z('No issuer passed to constructor. Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com/oauth2/{authServerId}"})');
          if (!new RegExp("^http?s?://.+").test(n3))
            throw new D.Z('Issuer must be a valid URL. Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com/oauth2/{authServerId}"})');
          if (n3.indexOf("-admin.") !== -1)
            throw new D.Z('Issuer URL passed to constructor contains "-admin" in subdomain. Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com})');
        }
        var Be = n2(885), Ge = n2(1002), Ve = n2(4098), qe = n2.n(Ve);
        function Ye(e3, t3) {
          (t3 == null || t3 > e3.length) && (t3 = e3.length);
          for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
            r3[n3] = e3[n3];
          return r3;
        }
        var We = /application\/\w*\+?json/, ze = function(e3, t3, r3) {
          var o2 = r3.data, i2 = r3.headers || {}, a2 = i2["Content-Type"] || i2["content-type"] || "";
          o2 && typeof o2 != "string" && (We.test(a2) ? o2 = JSON.stringify(o2) : a2 === "application/x-www-form-urlencoded" && (o2 = Object.entries(o2).map(function(e4) {
            var t4 = (0, Be.Z)(e4, 2), n3 = t4[0], r4 = t4[1];
            return "".concat(n3, "=").concat(encodeURIComponent(r4));
          }).join("&")));
          var u2 = (n2.g.fetch || qe())(t3, {method: e3, headers: r3.headers, body: o2, credentials: r3.withCredentials ? "include" : "omit"});
          return u2.finally || (u2 = Promise.resolve(u2)), u2.then(function(e4) {
            var t4 = !e4.ok, n3 = e4.status;
            return function(e5) {
              return e5.headers.get("Content-Type") && e5.headers.get("Content-Type").toLowerCase().indexOf("application/json") >= 0 ? e5.json().catch(function(e6) {
                return {error: e6, errorSummary: "Could not parse server response"};
              }) : e5.text();
            }(e4).then(function(t5) {
              return function(e5, t6, n4) {
                var r4, o3 = (0, Ge.Z)(t6) === "object", i3 = {}, a3 = function(e6, t7) {
                  var n5 = typeof Symbol != "undefined" && e6[Symbol.iterator] || e6["@@iterator"];
                  if (!n5) {
                    if (Array.isArray(e6) || (n5 = function(e7, t8) {
                      if (e7) {
                        if (typeof e7 == "string")
                          return Ye(e7, t8);
                        var n6 = Object.prototype.toString.call(e7).slice(8, -1);
                        return n6 === "Object" && e7.constructor && (n6 = e7.constructor.name), n6 === "Map" || n6 === "Set" ? Array.from(e7) : n6 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n6) ? Ye(e7, t8) : void 0;
                      }
                    }(e6)) || t7 && e6 && typeof e6.length == "number") {
                      n5 && (e6 = n5);
                      var r5 = 0, o4 = function() {
                      };
                      return {s: o4, n: function() {
                        return r5 >= e6.length ? {done: true} : {done: false, value: e6[r5++]};
                      }, e: function(e7) {
                        throw e7;
                      }, f: o4};
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }
                  var i4, a4 = true, u4 = false;
                  return {s: function() {
                    n5 = n5.call(e6);
                  }, n: function() {
                    var e7 = n5.next();
                    return a4 = e7.done, e7;
                  }, e: function(e7) {
                    u4 = true, i4 = e7;
                  }, f: function() {
                    try {
                      a4 || n5.return == null || n5.return();
                    } finally {
                      if (u4)
                        throw i4;
                    }
                  }};
                }(n4.headers.entries());
                try {
                  for (a3.s(); !(r4 = a3.n()).done; ) {
                    var u3 = r4.value;
                    i3[u3[0]] = u3[1];
                  }
                } catch (e6) {
                  a3.e(e6);
                } finally {
                  a3.f();
                }
                var s2 = {responseText: o3 ? JSON.stringify(t6) : t6, status: e5, headers: i3};
                return o3 && (s2.responseType = "json", s2.responseJSON = t6), s2;
              }(n3, t5, e4);
            }).then(function(e5) {
              var n4;
              if (t4 || (n4 = e5.responseJSON) !== null && n4 !== void 0 && n4.error)
                throw e5;
              return e5;
            });
          });
        }, Je = {token: {storageTypes: ["localStorage", "sessionStorage", "cookie"]}, cache: {storageTypes: ["localStorage", "sessionStorage", "cookie"]}, transaction: {storageTypes: ["sessionStorage", "localStorage", "cookie"]}, "shared-transaction": {storageTypes: ["localStorage"]}, "original-uri": {storageTypes: ["localStorage"]}};
        function Qe() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t3 = arguments.length > 1 ? arguments[1] : void 0, n3 = e3.cookies || {};
          return n3.secure === void 0 && (n3.secure = t3), n3.sameSite === void 0 && (n3.sameSite = n3.secure ? "none" : "lax"), n3.secure && !t3 && ((0, I.ZK)('The current page is not being served with the HTTPS protocol.\nFor security reasons, we strongly recommend using HTTPS.\nIf you cannot use HTTPS, set "cookies.secure" option to false.'), n3.secure = false), n3.sameSite !== "none" || n3.secure || (n3.sameSite = "lax"), n3;
        }
        function $e() {
          return {devMode: false, httpRequestClient: ze, storageUtil: Object.assign({}, N, {inMemoryStore: {}}), storageManager: Je, transactionManager: {enableSharedStorage: true}};
        }
        function Xe(e3, t3) {
          return Object.assign({}, e3, (0, d.YY)(t3), {storageManager: Object.assign({}, e3.storageManager, t3.storageManager), transactionManager: Object.assign({}, e3.transactionManager, t3.transactionManager)});
        }
        var et = n2(6861), tt = function() {
          function e3() {
            (0, a.Z)(this, e3), (0, s.Z)(this, "environments", void 0), this.environments = ["okta-auth-js/".concat("6.5.1")];
          }
          return (0, u.Z)(e3, [{key: "addEnvironment", value: function(e4) {
            this.environments.push(e4);
          }}, {key: "getHttpHeader", value: function() {
            return this.maybeAddNodeEnvironment(), {"X-Okta-User-Agent-Extended": this.environments.join(" ")};
          }}, {key: "getVersion", value: function() {
            return "6.5.1";
          }}, {key: "maybeAddNodeEnvironment", value: function() {
            if (!(0, T.isBrowser)() && process && process.versions) {
              var e4 = process.versions.node;
              this.environments.push("nodejs/".concat(e4));
            }
          }}]), e3;
        }(), nt = n2(5372), rt = n2(2620), ot = n2(4279), it = n2.n(ot), at = ["originalUri"];
        function ut(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function st(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? ut(Object(n3), true).forEach(function(t4) {
              (0, s.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : ut(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        var ct = function() {
          function e3(t4) {
            var n4 = this;
            (0, a.Z)(this, e3), (0, s.Z)(this, "options", void 0), (0, s.Z)(this, "storageManager", void 0), (0, s.Z)(this, "transactionManager", void 0), (0, s.Z)(this, "tx", void 0), (0, s.Z)(this, "idx", void 0), (0, s.Z)(this, "session", void 0), (0, s.Z)(this, "pkce", void 0), (0, s.Z)(this, "features", T), (0, s.Z)(this, "token", void 0), (0, s.Z)(this, "_tokenQueue", void 0), (0, s.Z)(this, "emitter", void 0), (0, s.Z)(this, "tokenManager", void 0), (0, s.Z)(this, "authStateManager", void 0), (0, s.Z)(this, "serviceManager", void 0), (0, s.Z)(this, "http", void 0), (0, s.Z)(this, "fingerprint", void 0), (0, s.Z)(this, "_oktaUserAgent", void 0), (0, s.Z)(this, "_pending", void 0);
            var r4 = this.options = function() {
              var e4, t5 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              return He(t5), t5 = Xe($e(), t5), (0, d.YY)({issuer: (0, v.Qj)(t5.issuer), tokenUrl: (0, v.Qj)(t5.tokenUrl), authorizeUrl: (0, v.Qj)(t5.authorizeUrl), userinfoUrl: (0, v.Qj)(t5.userinfoUrl), revokeUrl: (0, v.Qj)(t5.revokeUrl), logoutUrl: (0, v.Qj)(t5.logoutUrl), clientId: t5.clientId, redirectUri: t5.redirectUri, state: t5.state, scopes: t5.scopes, postLogoutRedirectUri: t5.postLogoutRedirectUri, responseMode: t5.responseMode, responseType: t5.responseType, pkce: t5.pkce !== false, useInteractionCodeFlow: t5.useInteractionCodeFlow, httpRequestClient: t5.httpRequestClient, transformErrorXHR: t5.transformErrorXHR, transformAuthState: t5.transformAuthState, restoreOriginalUri: t5.restoreOriginalUri, storageUtil: t5.storageUtil, headers: t5.headers, devMode: !!t5.devMode, storageManager: t5.storageManager, transactionManager: t5.transactionManager, cookies: Qe(t5, (0, T.isHTTPS)()), flow: t5.flow, codeChallenge: t5.codeChallenge, codeChallengeMethod: t5.codeChallengeMethod, recoveryToken: t5.recoveryToken, activationToken: t5.activationToken, idx: {useGenericRemediator: !((e4 = t5.idx) === null || e4 === void 0 || !e4.useGenericRemediator)}, ignoreSignature: !!t5.ignoreSignature, clientSecret: t5.clientSecret});
            }(t4);
            this.storageManager = new Fe.A(r4.storageManager, r4.cookies, r4.storageUtil), this.transactionManager = new Ke.Z(Object.assign({storageManager: this.storageManager}, r4.transactionManager)), this._oktaUserAgent = new tt(), this.tx = {status: p.transactionStatus.bind(null, this), resume: p.resumeTransaction.bind(null, this), exists: Object.assign(p.transactionExists.bind(null, this), {_get: function(e4) {
              return r4.storageUtil.storage.get(e4);
            }}), introspect: p.introspectAuthn.bind(null, this)}, this.pkce = {DEFAULT_CODE_CHALLENGE_METHOD: h.Z.DEFAULT_CODE_CHALLENGE_METHOD, generateVerifier: h.Z.generateVerifier, computeChallenge: h.Z.computeChallenge}, Object.assign(this.options.storageUtil, {getPKCEStorage: this.storageManager.getLegacyPKCEStorage.bind(this.storageManager), getHttpCache: this.storageManager.getHttpCache.bind(this.storageManager)}), this._pending = {handleLogin: false}, (0, T.isBrowser)() && (this.options = Object.assign(this.options, {redirectUri: (0, v.BY)(t4.redirectUri, window.location.origin)})), t4.maxClockSkew || t4.maxClockSkew === 0 ? this.options.maxClockSkew = t4.maxClockSkew : this.options.maxClockSkew = l.DEFAULT_MAX_CLOCK_SKEW, this.options.ignoreLifetime = !!t4.ignoreLifetime, this.session = {close: b.bind(null, this), exists: g.bind(null, this), get: m.bind(null, this), refresh: O.bind(null, this), setCookieAndRedirect: k.bind(null, this)}, this._tokenQueue = new Ne.Z();
            var o2 = function(e4) {
              return Ne.Z.prototype.push.bind(n4._tokenQueue, e4, null);
            }, i2 = o2(w.Hq.bind(null, this)), u2 = Object.assign(i2, {_setLocation: function(e4) {
              window.location = e4;
            }}), c3 = o2(w.ko.bind(null, this)), f2 = Object.assign(c3, {_getHistory: function() {
              return window.history;
            }, _getLocation: function() {
              return window.location;
            }, _getDocument: function() {
              return window.document;
            }});
            this.token = {prepareTokenParams: w.wu.bind(null, this), exchangeCodeForTokens: w.rz.bind(null, this), getWithoutPrompt: w.y6.bind(null, this), getWithPopup: w.dh.bind(null, this), getWithRedirect: u2, parseFromUrl: f2, decode: w.TD, revoke: w.PX.bind(null, this), renew: w.$m.bind(null, this), renewTokensWithRefresh: w.Rm.bind(null, this), renewTokens: w.IK.bind(null, this), getUserInfo: w.bG.bind(null, this), verify: w.WX.bind(null, this), isLoginRedirect: w.gM.bind(null, this)};
            var E3 = ["decode", "isLoginRedirect", "getWithRedirect", "parseFromUrl"];
            Object.keys(this.token).forEach(function(e4) {
              if (!(E3.indexOf(e4) >= 0)) {
                var t5 = n4.token[e4];
                n4.token[e4] = Ne.Z.prototype.push.bind(n4._tokenQueue, t5, null);
              }
            });
            var S3 = et.Yr.bind(null, this);
            this.idx = {interact: et.EW.bind(null, this), introspect: et.L8.bind(null, this), authenticate: et.YR.bind(null, this), register: et.z2.bind(null, this), start: S3, startTransaction: S3, poll: et.$l.bind(null, this), proceed: et.xc.bind(null, this), cancel: et.al.bind(null, this), recoverPassword: et.M4.bind(null, this), handleInteractionCodeRedirect: et.Xx.bind(null, this), isInteractionRequired: w.wc.bind(null, this), isInteractionRequiredError: w.Cf, handleEmailVerifyCallback: et.Jn.bind(null, this), isEmailVerifyCallback: et.GA, parseEmailVerifyCallback: et.mo, isEmailVerifyCallbackError: et.gc, getSavedTransactionMeta: rt.uN.bind(null, this), createTransactionMeta: rt.Xc.bind(null, this), getTransactionMeta: rt.Co.bind(null, this), saveTransactionMeta: rt.r0.bind(null, this), clearTransactionMeta: rt.Jm.bind(null, this), isTransactionMetaValid: rt.Wf, setFlow: function(e4) {
              n4.options.flow = e4;
            }, getFlow: function() {
              return n4.options.flow;
            }, canProceed: et.Ch.bind(null, this), unlockAccount: et.le.bind(null, this)}, this.http = {setRequestHeader: y.rn.bind(null, this)}, this.fingerprint = Ue.bind(null, this), this.emitter = new (it())(), this.tokenManager = new U.Md(this, t4.tokenManager), this.authStateManager = new Le.E(this), this.serviceManager = new Me(this, t4.services);
          }
          var t3, n3, r3, c2, E2, S2, _2, A2, P2, R2, x2;
          return (0, u.Z)(e3, [{key: "start", value: function() {
            this.tokenManager.start(), this.token.isLoginRedirect() || this.authStateManager.updateAuthState(), this.serviceManager.start();
          }}, {key: "stop", value: function() {
            this.tokenManager.stop(), this.serviceManager.stop();
          }}, {key: "setHeaders", value: function(e4) {
            this.options.headers = Object.assign({}, this.options.headers, e4);
          }}, {key: "signIn", value: (x2 = (0, i.Z)(f().mark(function e4(t4) {
            return f().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    return e5.abrupt("return", this.signInWithCredentials(t4));
                  case 1:
                  case "end":
                    return e5.stop();
                }
            }, e4, this);
          })), function(e4) {
            return x2.apply(this, arguments);
          })}, {key: "signInWithCredentials", value: (R2 = (0, i.Z)(f().mark(function e4(t4) {
            var n4, r4 = this;
            return f().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    if (t4 = (0, d.d9)(t4 || {}), n4 = function(e6) {
                      return delete t4.sendFingerprint, (0, p.postToTransaction)(r4, "/api/v1/authn", t4, e6);
                    }, t4.sendFingerprint) {
                      e5.next = 4;
                      break;
                    }
                    return e5.abrupt("return", n4());
                  case 4:
                    return e5.abrupt("return", this.fingerprint().then(function(e6) {
                      return n4({headers: {"X-Device-Fingerprint": e6}});
                    }));
                  case 5:
                  case "end":
                    return e5.stop();
                }
            }, e4, this);
          })), function(e4) {
            return R2.apply(this, arguments);
          })}, {key: "signInWithRedirect", value: (P2 = (0, i.Z)(f().mark(function e4() {
            var t4, n4, r4, i2, a2 = arguments;
            return f().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    if (t4 = a2.length > 0 && a2[0] !== void 0 ? a2[0] : {}, n4 = t4.originalUri, r4 = (0, o.Z)(t4, at), !this._pending.handleLogin) {
                      e5.next = 4;
                      break;
                    }
                    return e5.abrupt("return");
                  case 4:
                    return this._pending.handleLogin = true, e5.prev = 5, n4 && this.setOriginalUri(n4), i2 = Object.assign({scopes: this.options.scopes || ["openid", "email", "profile"]}, r4), e5.next = 10, this.token.getWithRedirect(i2);
                  case 10:
                    return e5.prev = 10, this._pending.handleLogin = false, e5.finish(10);
                  case 13:
                  case "end":
                    return e5.stop();
                }
            }, e4, this, [[5, , 10, 13]]);
          })), function() {
            return P2.apply(this, arguments);
          })}, {key: "closeSession", value: function() {
            var e4 = this;
            return this.session.close().then((0, i.Z)(f().mark(function t4() {
              return f().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      e4.tokenManager.clear();
                    case 1:
                    case "end":
                      return t5.stop();
                  }
              }, t4);
            }))).catch(function(e5) {
              if (e5.name === "AuthApiError" && e5.errorCode === "E0000007")
                return null;
              throw e5;
            });
          }}, {key: "revokeAccessToken", value: (A2 = (0, i.Z)(f().mark(function e4(t4) {
            var n4;
            return f().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    if (t4) {
                      e5.next = 6;
                      break;
                    }
                    return e5.next = 3, this.tokenManager.getTokens();
                  case 3:
                    t4 = e5.sent.accessToken, n4 = this.tokenManager.getStorageKeyByType("accessToken"), this.tokenManager.remove(n4);
                  case 6:
                    if (t4) {
                      e5.next = 8;
                      break;
                    }
                    return e5.abrupt("return", Promise.resolve(null));
                  case 8:
                    return e5.abrupt("return", this.token.revoke(t4));
                  case 9:
                  case "end":
                    return e5.stop();
                }
            }, e4, this);
          })), function(e4) {
            return A2.apply(this, arguments);
          })}, {key: "revokeRefreshToken", value: (_2 = (0, i.Z)(f().mark(function e4(t4) {
            var n4;
            return f().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    if (t4) {
                      e5.next = 6;
                      break;
                    }
                    return e5.next = 3, this.tokenManager.getTokens();
                  case 3:
                    t4 = e5.sent.refreshToken, n4 = this.tokenManager.getStorageKeyByType("refreshToken"), this.tokenManager.remove(n4);
                  case 6:
                    if (t4) {
                      e5.next = 8;
                      break;
                    }
                    return e5.abrupt("return", Promise.resolve(null));
                  case 8:
                    return e5.abrupt("return", this.token.revoke(t4));
                  case 9:
                  case "end":
                    return e5.stop();
                }
            }, e4, this);
          })), function(e4) {
            return _2.apply(this, arguments);
          })}, {key: "getSignOutRedirectUrl", value: function() {
            var e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t4 = e4.idToken, n4 = e4.postLogoutRedirectUri, r4 = e4.state;
            if (t4 || (t4 = this.tokenManager.getTokensSync().idToken), !t4)
              return "";
            n4 || (n4 = this.options.postLogoutRedirectUri);
            var o2 = (0, w.Fc)(this).logoutUrl, i2 = t4.idToken, a2 = o2 + "?id_token_hint=" + encodeURIComponent(i2);
            return n4 && (a2 += "&post_logout_redirect_uri=" + encodeURIComponent(n4)), r4 && (a2 += "&state=" + encodeURIComponent(r4)), a2;
          }}, {key: "signOut", value: (S2 = (0, i.Z)(f().mark(function e4(t4) {
            var n4, r4, o2, i2, a2, u2, s2, c3;
            return f().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    if (t4 = Object.assign({}, t4), n4 = window.location.origin, r4 = window.location.href, o2 = t4.postLogoutRedirectUri || this.options.postLogoutRedirectUri || n4, i2 = t4.accessToken, a2 = t4.refreshToken, u2 = t4.revokeAccessToken !== false, (s2 = t4.revokeRefreshToken !== false) && a2 === void 0 && (a2 = this.tokenManager.getTokensSync().refreshToken), u2 && i2 === void 0 && (i2 = this.tokenManager.getTokensSync().accessToken), t4.idToken || (t4.idToken = this.tokenManager.getTokensSync().idToken), !s2 || !a2) {
                      e5.next = 14;
                      break;
                    }
                    return e5.next = 14, this.revokeRefreshToken(a2);
                  case 14:
                    if (!u2 || !i2) {
                      e5.next = 17;
                      break;
                    }
                    return e5.next = 17, this.revokeAccessToken(i2);
                  case 17:
                    if (c3 = this.getSignOutRedirectUrl(st(st({}, t4), {}, {postLogoutRedirectUri: o2}))) {
                      e5.next = 22;
                      break;
                    }
                    return e5.abrupt("return", this.closeSession().then(function() {
                      o2 === r4 ? window.location.reload() : window.location.assign(o2);
                    }));
                  case 22:
                    t4.clearTokensBeforeRedirect ? this.tokenManager.clear() : this.tokenManager.addPendingRemoveFlags(), window.location.assign(c3);
                  case 24:
                  case "end":
                    return e5.stop();
                }
            }, e4, this);
          })), function(e4) {
            return S2.apply(this, arguments);
          })}, {key: "webfinger", value: function(e4) {
            var t4 = "/.well-known/webfinger" + (0, v.UK)(e4);
            return (0, y.U2)(this, t4, {headers: {Accept: "application/jrd+json"}});
          }}, {key: "isAuthenticated", value: (E2 = (0, i.Z)(f().mark(function e4() {
            var t4, n4, r4, o2, i2, a2, u2, s2, c3, l2, p2 = arguments;
            return f().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    if (t4 = p2.length > 0 && p2[0] !== void 0 ? p2[0] : {}, n4 = this.tokenManager.getOptions(), r4 = n4.autoRenew, o2 = n4.autoRemove, i2 = t4.onExpiredToken ? t4.onExpiredToken === "renew" : r4, a2 = t4.onExpiredToken ? t4.onExpiredToken === "remove" : o2, u2 = this.tokenManager.getTokensSync(), !(s2 = u2.accessToken) || !this.tokenManager.hasExpired(s2)) {
                      e5.next = 19;
                      break;
                    }
                    if (s2 = void 0, !i2) {
                      e5.next = 18;
                      break;
                    }
                    return e5.prev = 8, e5.next = 11, this.tokenManager.renew("accessToken");
                  case 11:
                    s2 = e5.sent, e5.next = 16;
                    break;
                  case 14:
                    e5.prev = 14, e5.t0 = e5.catch(8);
                  case 16:
                    e5.next = 19;
                    break;
                  case 18:
                    a2 && this.tokenManager.remove("accessToken");
                  case 19:
                    if (c3 = this.tokenManager.getTokensSync(), !(l2 = c3.idToken) || !this.tokenManager.hasExpired(l2)) {
                      e5.next = 34;
                      break;
                    }
                    if (l2 = void 0, !i2) {
                      e5.next = 33;
                      break;
                    }
                    return e5.prev = 23, e5.next = 26, this.tokenManager.renew("idToken");
                  case 26:
                    l2 = e5.sent, e5.next = 31;
                    break;
                  case 29:
                    e5.prev = 29, e5.t1 = e5.catch(23);
                  case 31:
                    e5.next = 34;
                    break;
                  case 33:
                    a2 && this.tokenManager.remove("idToken");
                  case 34:
                    return e5.abrupt("return", !(!s2 || !l2));
                  case 35:
                  case "end":
                    return e5.stop();
                }
            }, e4, this, [[8, 14], [23, 29]]);
          })), function() {
            return E2.apply(this, arguments);
          })}, {key: "getUser", value: (c2 = (0, i.Z)(f().mark(function e4() {
            var t4, n4, r4;
            return f().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    return t4 = this.tokenManager.getTokensSync(), n4 = t4.idToken, r4 = t4.accessToken, e5.abrupt("return", this.token.getUserInfo(r4, n4));
                  case 2:
                  case "end":
                    return e5.stop();
                }
            }, e4, this);
          })), function() {
            return c2.apply(this, arguments);
          })}, {key: "getIdToken", value: function() {
            var e4 = this.tokenManager.getTokensSync().idToken;
            return e4 ? e4.idToken : void 0;
          }}, {key: "getAccessToken", value: function() {
            var e4 = this.tokenManager.getTokensSync().accessToken;
            return e4 ? e4.accessToken : void 0;
          }}, {key: "getRefreshToken", value: function() {
            var e4 = this.tokenManager.getTokensSync().refreshToken;
            return e4 ? e4.refreshToken : void 0;
          }}, {key: "storeTokensFromRedirect", value: (r3 = (0, i.Z)(f().mark(function e4() {
            var t4, n4;
            return f().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    return e5.next = 2, this.token.parseFromUrl();
                  case 2:
                    t4 = e5.sent, n4 = t4.tokens, this.tokenManager.setTokens(n4);
                  case 5:
                  case "end":
                    return e5.stop();
                }
            }, e4, this);
          })), function() {
            return r3.apply(this, arguments);
          })}, {key: "setOriginalUri", value: function(e4, t4) {
            N.getSessionStorage().setItem(l.REFERRER_PATH_STORAGE_KEY, e4), (t4 = t4 || this.options.state) && this.storageManager.getOriginalUriStorage().setItem(t4, e4);
          }}, {key: "getOriginalUri", value: function(e4) {
            if (e4 = e4 || this.options.state) {
              var t4 = this.storageManager.getOriginalUriStorage().getItem(e4);
              if (t4)
                return t4;
            }
            var n4 = N.getSessionStorage();
            return n4 && n4.getItem(l.REFERRER_PATH_STORAGE_KEY) || void 0;
          }}, {key: "removeOriginalUri", value: function(e4) {
            if (N.getSessionStorage().removeItem(l.REFERRER_PATH_STORAGE_KEY), e4 = e4 || this.options.state) {
              var t4 = this.storageManager.getOriginalUriStorage();
              t4.removeItem && t4.removeItem(e4);
            }
          }}, {key: "isLoginRedirect", value: function() {
            return (0, w.gM)(this);
          }}, {key: "handleLoginRedirect", value: (n3 = (0, i.Z)(f().mark(function e4(t4, n4) {
            var r4, o2, i2;
            return f().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    if (r4 = this.options.state, !t4) {
                      e5.next = 6;
                      break;
                    }
                    this.tokenManager.setTokens(t4), n4 = n4 || this.getOriginalUri(this.options.state), e5.next = 25;
                    break;
                  case 6:
                    if (!this.isLoginRedirect()) {
                      e5.next = 24;
                      break;
                    }
                    return e5.prev = 7, e5.next = 10, (0, nt.Tp)(this, {});
                  case 10:
                    return o2 = e5.sent, r4 = o2.state, n4 = n4 || this.getOriginalUri(r4), e5.next = 15, this.storeTokensFromRedirect();
                  case 15:
                    e5.next = 22;
                    break;
                  case 17:
                    return e5.prev = 17, e5.t0 = e5.catch(7), e5.next = 21, this.authStateManager.updateAuthState();
                  case 21:
                    throw e5.t0;
                  case 22:
                    e5.next = 25;
                    break;
                  case 24:
                    return e5.abrupt("return");
                  case 25:
                    return e5.next = 27, this.authStateManager.updateAuthState();
                  case 27:
                    if (this.removeOriginalUri(r4), !(i2 = this.options.restoreOriginalUri)) {
                      e5.next = 34;
                      break;
                    }
                    return e5.next = 32, i2(this, n4);
                  case 32:
                    e5.next = 35;
                    break;
                  case 34:
                    n4 && window.location.replace(n4);
                  case 35:
                  case "end":
                    return e5.stop();
                }
            }, e4, this, [[7, 17]]);
          })), function(e4, t4) {
            return n3.apply(this, arguments);
          })}, {key: "isPKCE", value: function() {
            return !!this.options.pkce;
          }}, {key: "hasResponseType", value: function(e4) {
            return Array.isArray(this.options.responseType) && this.options.responseType.length ? this.options.responseType.indexOf(e4) >= 0 : this.options.responseType === e4;
          }}, {key: "isAuthorizationCodeFlow", value: function() {
            return this.hasResponseType("code");
          }}, {key: "getIssuerOrigin", value: function() {
            return this.options.issuer.split("/oauth2/")[0];
          }}, {key: "forgotPassword", value: function(e4) {
            return (0, p.postToTransaction)(this, "/api/v1/authn/recovery/password", e4);
          }}, {key: "unlockAccount", value: function(e4) {
            return (0, p.postToTransaction)(this, "/api/v1/authn/recovery/unlock", e4);
          }}, {key: "verifyRecoveryToken", value: function(e4) {
            return (0, p.postToTransaction)(this, "/api/v1/authn/recovery/token", e4);
          }}, {key: "invokeApiMethod", value: (t3 = (0, i.Z)(f().mark(function e4(t4) {
            var n4;
            return f().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    if (t4.accessToken) {
                      e5.next = 5;
                      break;
                    }
                    return e5.next = 3, this.tokenManager.getTokens();
                  case 3:
                    n4 = e5.sent.accessToken, t4.accessToken = n4 == null ? void 0 : n4.accessToken;
                  case 5:
                    return e5.abrupt("return", (0, y.c3)(this, t4));
                  case 6:
                  case "end":
                    return e5.stop();
                }
            }, e4, this);
          })), function(e4) {
            return t3.apply(this, arguments);
          })}]), e3;
        }();
        (0, s.Z)(ct, "features", T), (0, s.Z)(ct, "crypto", E), (0, s.Z)(ct, "webauthn", r2), ct.features = ct.prototype.features = T, Object.assign(ct, {constants: l});
        var ft = ct;
      }, 5991: function(e2, t2, n2) {
        "use strict";
        var r2 = n2(5671), o = n2(3144), i = n2(4942), a = n2(146), u = n2(4771), s = function() {
          function e3() {
            var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {quiet: false};
            (0, r2.Z)(this, e3), (0, i.Z)(this, "queue", void 0), (0, i.Z)(this, "running", void 0), (0, i.Z)(this, "options", void 0), this.queue = [], this.running = false, this.options = t3;
          }
          return (0, o.Z)(e3, [{key: "push", value: function(e4, t3) {
            for (var n3 = this, r3 = arguments.length, o2 = new Array(r3 > 2 ? r3 - 2 : 0), i2 = 2; i2 < r3; i2++)
              o2[i2 - 2] = arguments[i2];
            return new Promise(function(r4, i3) {
              n3.queue.length > 0 && n3.options.quiet !== false && (0, a.ZK)("Async method is being called but another async method is already running. The new method will be delayed until the previous method completes."), n3.queue.push({method: e4, thisObject: t3, args: o2, resolve: r4, reject: i3}), n3.run();
            });
          }}, {key: "run", value: function() {
            var e4 = this;
            if (!this.running && this.queue.length !== 0) {
              this.running = true;
              var t3 = this.queue.shift(), n3 = t3.method.apply(t3.thisObject, t3.args);
              (0, u.tI)(n3) ? n3.then(t3.resolve, t3.reject).finally(function() {
                e4.running = false, e4.run();
              }) : (t3.resolve(n3), this.running = false, this.run());
            }
          }}]), e3;
        }();
        t2.Z = s;
      }, 6311: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {A: function() {
          return h;
        }});
        var r2 = n2(5671), o = n2(3144), i = n2(4942), a = n2(1971), u = n2(9123), s = function() {
          function e3(t3, n3) {
            if ((0, r2.Z)(this, e3), (0, i.Z)(this, "storageProvider", void 0), (0, i.Z)(this, "storageName", void 0), !t3)
              throw new u.Z('"storage" is required');
            if (typeof n3 != "string" || !n3.length)
              throw new u.Z('"storageName" is required');
            this.storageName = n3, this.storageProvider = t3;
          }
          return (0, o.Z)(e3, [{key: "getItem", value: function(e4) {
            return this.getStorage()[e4];
          }}, {key: "setItem", value: function(e4, t3) {
            return this.updateStorage(e4, t3);
          }}, {key: "removeItem", value: function(e4) {
            return this.clearStorage(e4);
          }}, {key: "getStorage", value: function() {
            var e4 = this.storageProvider.getItem(this.storageName);
            e4 = e4 || "{}";
            try {
              return JSON.parse(e4);
            } catch (e5) {
              throw new u.Z("Unable to parse storage string: " + this.storageName);
            }
          }}, {key: "setStorage", value: function(e4) {
            try {
              var t3 = e4 ? JSON.stringify(e4) : "{}";
              this.storageProvider.setItem(this.storageName, t3);
            } catch (e5) {
              throw new u.Z("Unable to set storage: " + this.storageName);
            }
          }}, {key: "clearStorage", value: function(e4) {
            if (e4) {
              var t3 = this.getStorage();
              delete t3[e4], this.setStorage(t3);
            } else
              this.storageProvider.removeItem ? this.storageProvider.removeItem(this.storageName) : this.setStorage();
          }}, {key: "updateStorage", value: function(e4, t3) {
            var n3 = this.getStorage();
            n3[e4] = t3, this.setStorage(n3);
          }}]), e3;
        }(), c = n2(415), f = n2(146), l = n2(7301);
        function p(e3) {
          (0, c.isBrowser)() || e3.storageProvider || e3.storageProvider || (0, f.ZK)("Memory storage can only support simple single user use case on server side, please provide custom storageProvider or storageKey if advanced scenarios need to be supported.");
        }
        var h = function() {
          function e3(t3, n3, o2) {
            (0, r2.Z)(this, e3), (0, i.Z)(this, "storageManagerOptions", void 0), (0, i.Z)(this, "cookieOptions", void 0), (0, i.Z)(this, "storageUtil", void 0), this.storageManagerOptions = t3, this.cookieOptions = n3, this.storageUtil = o2;
          }
          return (0, o.Z)(e3, [{key: "getOptionsForSection", value: function(e4, t3) {
            return Object.assign({}, this.storageManagerOptions[e4], t3);
          }}, {key: "getStorage", value: function(e4) {
            if ((e4 = Object.assign({}, this.cookieOptions, e4)).storageProvider)
              return e4.storageProvider;
            var t3 = e4, n3 = t3.storageType, r3 = t3.storageTypes;
            if (n3 === "sessionStorage" && (e4.sessionCookie = true), n3 && r3) {
              var o2 = r3.indexOf(n3);
              o2 >= 0 && (r3 = r3.slice(o2), n3 = void 0);
            }
            return n3 || (n3 = this.storageUtil.findStorageType(r3)), this.storageUtil.getStorageByType(n3, e4);
          }}, {key: "getTransactionStorage", value: function(e4) {
            p(e4 = this.getOptionsForSection("transaction", e4));
            var t3 = this.getStorage(e4), n3 = e4.storageKey || a.TRANSACTION_STORAGE_NAME;
            return new s(t3, n3);
          }}, {key: "getSharedTansactionStorage", value: function(e4) {
            p(e4 = this.getOptionsForSection("shared-transaction", e4));
            var t3 = this.getStorage(e4), n3 = e4.storageKey || a.SHARED_TRANSACTION_STORAGE_NAME;
            return new s(t3, n3);
          }}, {key: "getOriginalUriStorage", value: function(e4) {
            p(e4 = this.getOptionsForSection("original-uri", e4));
            var t3 = this.getStorage(e4), n3 = e4.storageKey || a.ORIGINAL_URI_STORAGE_NAME;
            return new s(t3, n3);
          }}, {key: "getIdxResponseStorage", value: function(e4) {
            var t3;
            if ((0, c.isBrowser)())
              try {
                t3 = this.storageUtil.getStorageByType("memory", e4);
              } catch (e5) {
                (0, f.ZK)("No response storage found, you may want to provide custom implementation for intermediate idx responses to optimize the network traffic");
              }
            else {
              var n3 = this.getTransactionStorage(e4);
              n3 && (t3 = {getItem: function(e5) {
                var t4 = n3.getStorage();
                return t4 && t4[e5] ? t4[e5] : null;
              }, setItem: function(e5, t4) {
                var r3 = n3.getStorage();
                if (!r3)
                  throw new l.R("Transaction has been cleared, failed to save idxState");
                r3[e5] = t4, n3.setStorage(r3);
              }, removeItem: function(e5) {
                var t4 = n3.getStorage();
                t4 && (delete t4[e5], n3.setStorage(t4));
              }});
            }
            return t3 ? new s(t3, a.IDX_RESPONSE_STORAGE_NAME) : null;
          }}, {key: "getTokenStorage", value: function(e4) {
            p(e4 = this.getOptionsForSection("token", e4));
            var t3 = this.getStorage(e4), n3 = e4.storageKey || a.TOKEN_STORAGE_NAME;
            return new s(t3, n3);
          }}, {key: "getHttpCache", value: function(e4) {
            e4 = this.getOptionsForSection("cache", e4);
            var t3 = this.getStorage(e4), n3 = e4.storageKey || a.CACHE_STORAGE_NAME;
            return new s(t3, n3);
          }}, {key: "getLegacyPKCEStorage", value: function(e4) {
            e4 = this.getOptionsForSection("legacy-pkce", e4);
            var t3 = this.getStorage(e4), n3 = e4.storageKey || a.PKCE_STORAGE_NAME;
            return new s(t3, n3);
          }}, {key: "getLegacyOAuthParamsStorage", value: function(e4) {
            e4 = this.getOptionsForSection("legacy-oauth-params", e4);
            var t3 = this.getStorage(e4), n3 = e4.storageKey || a.REDIRECT_OAUTH_PARAMS_NAME;
            return new s(t3, n3);
          }}]), e3;
        }();
      }, 8092: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {O3: function() {
          return w;
        }, $I: function() {
          return E;
        }, $Y: function() {
          return O;
        }, FT: function() {
          return T;
        }, E: function() {
          return k;
        }, Md: function() {
          return S;
        }});
        var r2 = n2(5861), o = n2(1002), i = n2(5671), a = n2(3144), u = n2(4942), s = n2(7757), c = n2.n(s), f = n2(3193), l = n2(7301), p = n2(9120), h = n2(415), d = function() {
          function e3(t3) {
            (0, i.Z)(this, e3), (0, u.Z)(this, "localOffset", void 0), this.localOffset = parseInt(t3 || 0);
          }
          return (0, a.Z)(e3, [{key: "now", value: function() {
            return (Date.now() + this.localOffset) / 1e3;
          }}], [{key: "create", value: function() {
            return new e3(0);
          }}]), e3;
        }(), v = n2(2852), y = n2(1971);
        function g(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function m(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? g(Object(n3), true).forEach(function(t4) {
              (0, u.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : g(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        var b = {autoRenew: true, autoRemove: true, syncStorage: true, clearPendingRemoveTokens: true, storage: void 0, expireEarlySeconds: 30, storageKey: y.TOKEN_STORAGE_NAME, _storageEventDelay: 0}, O = "expired", k = "renewed", w = "added", T = "removed", E = "error", S = function() {
          function e3(t4) {
            var n4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if ((0, i.Z)(this, e3), (0, u.Z)(this, "sdk", void 0), (0, u.Z)(this, "clock", void 0), (0, u.Z)(this, "emitter", void 0), (0, u.Z)(this, "storage", void 0), (0, u.Z)(this, "state", void 0), (0, u.Z)(this, "options", void 0), (0, u.Z)(this, "on", void 0), (0, u.Z)(this, "off", void 0), this.sdk = t4, this.emitter = t4.emitter, !this.emitter)
              throw new l.R("Emitter should be initialized before TokenManager");
            n4 = Object.assign({}, b, (0, f.YY)(n4)), (0, h.isIE11OrLess)() && (n4._storageEventDelay = n4._storageEventDelay || 1e3), (0, h.isLocalhost)() || (n4.expireEarlySeconds = b.expireEarlySeconds), this.options = n4;
            var r3 = (0, f.YY)({storageKey: n4.storageKey, secure: n4.secure});
            (0, o.Z)(n4.storage) === "object" ? r3.storageProvider = n4.storage : n4.storage && (r3.storageType = n4.storage), this.storage = t4.storageManager.getTokenStorage(m(m({}, r3), {}, {useSeparateCookies: true})), this.clock = d.create(), this.state = {expireTimeouts: {}, renewPromise: null}, this.on = this.emitter.on.bind(this.emitter), this.off = this.emitter.off.bind(this.emitter);
          }
          var t3, n3, s2;
          return (0, a.Z)(e3, [{key: "start", value: function() {
            this.options.clearPendingRemoveTokens && this.clearPendingRemoveTokens(), this.setExpireEventTimeoutAll();
          }}, {key: "stop", value: function() {
            this.clearExpireEventTimeoutAll();
          }}, {key: "getOptions", value: function() {
            return (0, f.d9)(this.options);
          }}, {key: "getExpireTime", value: function(e4) {
            var t4 = this.options.expireEarlySeconds || 0;
            return e4.expiresAt - t4;
          }}, {key: "hasExpired", value: function(e4) {
            return this.getExpireTime(e4) <= this.clock.now();
          }}, {key: "emitExpired", value: function(e4, t4) {
            this.emitter.emit(O, e4, t4);
          }}, {key: "emitRenewed", value: function(e4, t4, n4) {
            this.emitter.emit(k, e4, t4, n4);
          }}, {key: "emitAdded", value: function(e4, t4) {
            this.emitter.emit(w, e4, t4);
          }}, {key: "emitRemoved", value: function(e4, t4) {
            this.emitter.emit(T, e4, t4);
          }}, {key: "emitError", value: function(e4) {
            this.emitter.emit(E, e4);
          }}, {key: "emitEventsForCrossTabsStorageUpdate", value: function(e4, t4) {
            var n4 = this, r3 = this.getTokensFromStorageValue(t4), o2 = this.getTokensFromStorageValue(e4);
            Object.keys(o2).forEach(function(e5) {
              var t5 = r3[e5], i2 = o2[e5];
              JSON.stringify(t5) !== JSON.stringify(i2) && n4.emitAdded(e5, i2);
            }), Object.keys(r3).forEach(function(e5) {
              var t5 = r3[e5];
              o2[e5] || n4.emitRemoved(e5, t5);
            });
          }}, {key: "clearExpireEventTimeout", value: function(e4) {
            clearTimeout(this.state.expireTimeouts[e4]), delete this.state.expireTimeouts[e4], this.state.renewPromise = null;
          }}, {key: "clearExpireEventTimeoutAll", value: function() {
            var e4 = this.state.expireTimeouts;
            for (var t4 in e4)
              Object.prototype.hasOwnProperty.call(e4, t4) && this.clearExpireEventTimeout(t4);
          }}, {key: "setExpireEventTimeout", value: function(e4, t4) {
            var n4 = this;
            if (!(0, v.isRefreshToken)(t4)) {
              var r3 = this.getExpireTime(t4), o2 = 1e3 * Math.max(r3 - this.clock.now(), 0);
              this.clearExpireEventTimeout(e4);
              var i2 = setTimeout(function() {
                n4.emitExpired(e4, t4);
              }, o2);
              this.state.expireTimeouts[e4] = i2;
            }
          }}, {key: "setExpireEventTimeoutAll", value: function() {
            var e4 = this.storage.getStorage();
            for (var t4 in e4)
              if (Object.prototype.hasOwnProperty.call(e4, t4)) {
                var n4 = e4[t4];
                this.setExpireEventTimeout(t4, n4);
              }
          }}, {key: "resetExpireEventTimeoutAll", value: function() {
            this.clearExpireEventTimeoutAll(), this.setExpireEventTimeoutAll();
          }}, {key: "add", value: function(e4, t4) {
            var n4 = this.storage.getStorage();
            (0, p.Rp)(t4), n4[e4] = t4, this.storage.setStorage(n4), this.emitAdded(e4, t4), this.setExpireEventTimeout(e4, t4);
          }}, {key: "getSync", value: function(e4) {
            return this.storage.getStorage()[e4];
          }}, {key: "get", value: (s2 = (0, r2.Z)(c().mark(function e4(t4) {
            return c().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    return e5.abrupt("return", this.getSync(t4));
                  case 1:
                  case "end":
                    return e5.stop();
                }
            }, e4, this);
          })), function(e4) {
            return s2.apply(this, arguments);
          })}, {key: "getTokensSync", value: function() {
            var e4 = {}, t4 = this.storage.getStorage();
            return Object.keys(t4).forEach(function(n4) {
              var r3 = t4[n4];
              (0, v.isAccessToken)(r3) ? e4.accessToken = r3 : (0, v.isIDToken)(r3) ? e4.idToken = r3 : (0, v.isRefreshToken)(r3) && (e4.refreshToken = r3);
            }), e4;
          }}, {key: "getTokens", value: (n3 = (0, r2.Z)(c().mark(function e4() {
            return c().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    return e5.abrupt("return", this.getTokensSync());
                  case 1:
                  case "end":
                    return e5.stop();
                }
            }, e4, this);
          })), function() {
            return n3.apply(this, arguments);
          })}, {key: "getStorageKeyByType", value: function(e4) {
            var t4 = this.storage.getStorage();
            return Object.keys(t4).filter(function(n4) {
              var r3 = t4[n4];
              return (0, v.isAccessToken)(r3) && e4 === "accessToken" || (0, v.isIDToken)(r3) && e4 === "idToken" || (0, v.isRefreshToken)(r3) && e4 === "refreshToken";
            })[0];
          }}, {key: "getTokenType", value: function(e4) {
            if ((0, v.isAccessToken)(e4))
              return "accessToken";
            if ((0, v.isIDToken)(e4))
              return "idToken";
            if ((0, v.isRefreshToken)(e4))
              return "refreshToken";
            throw new l.R("Unknown token type");
          }}, {key: "setTokens", value: function(e4, t4, n4, r3) {
            var o2 = this, i2 = function(e5, i3) {
              var a3 = o2.getTokenType(i3);
              a3 === "accessToken" ? t4 && t4(e5, i3) : a3 === "idToken" ? n4 && n4(e5, i3) : a3 === "refreshToken" && r3 && r3(e5, i3);
            }, a2 = function(e5, t5) {
              o2.emitAdded(e5, t5), o2.setExpireEventTimeout(e5, t5), i2(e5, t5);
            }, u2 = function(e5, t5) {
              o2.clearExpireEventTimeout(e5), o2.emitRemoved(e5, t5), i2(e5, t5);
            }, s3 = ["idToken", "accessToken", "refreshToken"], c2 = this.getTokensSync();
            s3.forEach(function(t5) {
              var n5 = e4[t5];
              n5 && (0, p.Rp)(n5, t5);
            });
            var f2 = s3.reduce(function(t5, n5) {
              var r4 = e4[n5];
              return r4 && (t5[o2.getStorageKeyByType(n5) || n5] = r4), t5;
            }, {});
            this.storage.setStorage(f2), s3.forEach(function(t5) {
              var n5, r4, s4, f3 = e4[t5], l2 = c2[t5], p2 = o2.getStorageKeyByType(t5) || t5;
              f3 && l2 ? (u2(p2, l2), a2(p2, f3), n5 = p2, r4 = f3, s4 = l2, o2.emitRenewed(n5, r4, s4), o2.clearExpireEventTimeout(n5), o2.setExpireEventTimeout(n5, r4), i2(n5, r4)) : f3 ? a2(p2, f3) : l2 && u2(p2, l2);
            });
          }}, {key: "remove", value: function(e4) {
            this.clearExpireEventTimeout(e4);
            var t4 = this.storage.getStorage(), n4 = t4[e4];
            delete t4[e4], this.storage.setStorage(t4), this.emitRemoved(e4, n4);
          }}, {key: "renewToken", value: (t3 = (0, r2.Z)(c().mark(function e4(t4) {
            var n4;
            return c().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    return e5.abrupt("return", (n4 = this.sdk.token) === null || n4 === void 0 ? void 0 : n4.renew(t4));
                  case 1:
                  case "end":
                    return e5.stop();
                }
            }, e4, this);
          })), function(e4) {
            return t3.apply(this, arguments);
          })}, {key: "validateToken", value: function(e4) {
            return (0, p.Rp)(e4);
          }}, {key: "renew", value: function(e4) {
            var t4 = this;
            if (this.state.renewPromise)
              return this.state.renewPromise;
            try {
              var n4 = this.getSync(e4);
              if (!n4)
                throw new l.R("The tokenManager has no token for the key: " + e4);
            } catch (e5) {
              return Promise.reject(e5);
            }
            return this.clearExpireEventTimeout(e4), this.state.renewPromise = this.sdk.token.renewTokens().then(function(e5) {
              return t4.setTokens(e5), e5[t4.getTokenType(n4)];
            }).catch(function(n5) {
              throw t4.remove(e4), n5.tokenKey = e4, t4.emitError(n5), n5;
            }).finally(function() {
              t4.state.renewPromise = null;
            }), this.state.renewPromise;
          }}, {key: "clear", value: function() {
            this.clearExpireEventTimeoutAll(), this.storage.clearStorage();
          }}, {key: "clearPendingRemoveTokens", value: function() {
            var e4 = this, t4 = this.getTokensSync();
            Object.keys(t4).forEach(function(n4) {
              t4[n4].pendingRemove && e4.remove(n4);
            });
          }}, {key: "getTokensFromStorageValue", value: function(e4) {
            var t4;
            try {
              t4 = JSON.parse(e4) || {};
            } catch (e5) {
              t4 = {};
            }
            return t4;
          }}, {key: "updateRefreshToken", value: function(e4) {
            var t4 = this.getStorageKeyByType("refreshToken") || y.REFRESH_TOKEN_STORAGE_KEY, n4 = this.storage.getStorage();
            (0, p.Rp)(e4), n4[t4] = e4, this.storage.setStorage(n4);
          }}, {key: "addPendingRemoveFlags", value: function() {
            var e4 = this.getTokensSync();
            Object.keys(e4).forEach(function(t4) {
              e4[t4].pendingRemove = true;
            }), this.setTokens(e4);
          }}]), e3;
        }();
      }, 6529: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {Z: function() {
          return v;
        }});
        var r2 = n2(5671), o = n2(3144), i = n2(4942), a = n2(7301), u = n2(1971), s = n2(2852), c = n2(480), f = n2(146);
        function l(e3) {
          var t3 = e3.getSharedTansactionStorage(), n3 = t3.getStorage();
          Object.keys(n3).forEach(function(e4) {
            var t4 = n3[e4];
            Date.now() - t4.dateCreated > 18e5 && delete n3[e4];
          }), t3.setStorage(n3);
        }
        function p(e3, t3, n3) {
          var r3 = e3.getSharedTansactionStorage(), o2 = r3.getStorage();
          o2[t3] = {dateCreated: Date.now(), transaction: n3}, r3.setStorage(o2);
        }
        function h(e3, t3) {
          var n3 = e3.getSharedTansactionStorage().getStorage()[t3];
          return n3 && n3.transaction && (0, s.isTransactionMeta)(n3.transaction) ? n3.transaction : null;
        }
        function d(e3, t3) {
          var n3 = e3.getSharedTansactionStorage(), r3 = n3.getStorage();
          delete r3[t3], n3.setStorage(r3);
        }
        var v = function() {
          function e3(t3) {
            (0, r2.Z)(this, e3), (0, i.Z)(this, "options", void 0), (0, i.Z)(this, "storageManager", void 0), (0, i.Z)(this, "legacyWidgetSupport", void 0), (0, i.Z)(this, "saveNonceCookie", void 0), (0, i.Z)(this, "saveStateCookie", void 0), (0, i.Z)(this, "saveParamsCookie", void 0), (0, i.Z)(this, "enableSharedStorage", void 0), (0, i.Z)(this, "saveLastResponse", void 0), this.storageManager = t3.storageManager, this.legacyWidgetSupport = t3.legacyWidgetSupport !== false, this.saveNonceCookie = t3.saveNonceCookie !== false, this.saveStateCookie = t3.saveStateCookie !== false, this.saveParamsCookie = t3.saveParamsCookie !== false, this.enableSharedStorage = t3.enableSharedStorage !== false, this.saveLastResponse = t3.saveLastResponse !== false, this.options = t3;
          }
          return (0, o.Z)(e3, [{key: "clear", value: function() {
            var e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t3 = this.storageManager.getTransactionStorage(), n3 = t3.getStorage();
            if (t3.clearStorage(), this.enableSharedStorage && e4.clearSharedStorage !== false) {
              var r3 = e4.state || (n3 == null ? void 0 : n3.state);
              r3 && d(this.storageManager, r3);
            }
            e4.clearIdxResponse !== false && this.clearIdxResponse(), this.legacyWidgetSupport && (e4.oauth && this.clearLegacyOAuthParams(), e4.pkce && this.clearLegacyPKCE());
          }}, {key: "save", value: function(e4) {
            var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n3 = this.storageManager.getTransactionStorage(), r3 = n3.getStorage();
            if ((0, s.isTransactionMeta)(r3) && !t3.muteWarning && (0, f.ZK)("a saved auth transaction exists in storage. This may indicate another auth flow is already in progress."), n3.setStorage(e4), this.enableSharedStorage && e4.state && p(this.storageManager, e4.state, e4), t3.oauth && (this.saveNonceCookie || this.saveStateCookie || this.saveParamsCookie)) {
              var o2 = this.storageManager.getStorage({storageType: "cookie"});
              if (this.saveParamsCookie) {
                var i2 = e4.responseType, a2 = e4.state, c2 = e4.nonce, l2 = e4.scopes, h2 = e4.clientId, d2 = e4.urls, v2 = e4.ignoreSignature, y = {responseType: i2, state: a2, nonce: c2, scopes: l2, clientId: h2, urls: d2, ignoreSignature: v2};
                o2.setItem(u.REDIRECT_OAUTH_PARAMS_NAME, JSON.stringify(y), null);
              }
              this.saveNonceCookie && e4.nonce && o2.setItem(u.REDIRECT_NONCE_COOKIE_NAME, e4.nonce, null), this.saveStateCookie && e4.state && o2.setItem(u.REDIRECT_STATE_COOKIE_NAME, e4.state, null);
            }
          }}, {key: "exists", value: function() {
            var e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            try {
              var t3 = this.load(e4);
              return !!t3;
            } catch (e5) {
              return false;
            }
          }}, {key: "load", value: function() {
            var e4, t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (this.enableSharedStorage && t3.state && (l(this.storageManager), e4 = h(this.storageManager, t3.state), (0, s.isTransactionMeta)(e4)))
              return e4;
            var n3 = this.storageManager.getTransactionStorage();
            if (e4 = n3.getStorage(), (0, s.isTransactionMeta)(e4))
              return e4;
            if (!this.legacyWidgetSupport)
              return null;
            if (t3.oauth)
              try {
                var r3 = this.loadLegacyOAuthParams();
                Object.assign(e4, r3);
              } finally {
                this.clearLegacyOAuthParams();
              }
            if (t3.pkce)
              try {
                var o2 = this.loadLegacyPKCE();
                Object.assign(e4, o2);
              } finally {
                this.clearLegacyPKCE();
              }
            return (0, s.isTransactionMeta)(e4) ? e4 : null;
          }}, {key: "clearLegacyPKCE", value: function() {
            this.storageManager.storageUtil.testStorageType("localStorage") && this.storageManager.getLegacyPKCEStorage({storageType: "localStorage"}).clearStorage(), this.storageManager.storageUtil.testStorageType("sessionStorage") && this.storageManager.getLegacyPKCEStorage({storageType: "sessionStorage"}).clearStorage();
          }}, {key: "loadLegacyPKCE", value: function() {
            var e4;
            if (this.storageManager.storageUtil.testStorageType("localStorage") && (e4 = this.storageManager.getLegacyPKCEStorage({storageType: "localStorage"}).getStorage()) && e4.codeVerifier)
              return e4;
            if (this.storageManager.storageUtil.testStorageType("sessionStorage") && (e4 = this.storageManager.getLegacyPKCEStorage({storageType: "sessionStorage"}).getStorage()) && e4.codeVerifier)
              return e4;
            throw new a.R("Could not load PKCE codeVerifier from storage. This may indicate the auth flow has already completed or multiple auth flows are executing concurrently.", void 0);
          }}, {key: "clearLegacyOAuthParams", value: function() {
            this.storageManager.storageUtil.testStorageType("sessionStorage") && this.storageManager.getLegacyOAuthParamsStorage({storageType: "sessionStorage"}).clearStorage(), this.storageManager.storageUtil.testStorageType("cookie") && this.storageManager.getLegacyOAuthParamsStorage({storageType: "cookie"}).clearStorage();
          }}, {key: "loadLegacyOAuthParams", value: function() {
            var e4;
            if (this.storageManager.storageUtil.testStorageType("sessionStorage") && (e4 = this.storageManager.getLegacyOAuthParamsStorage({storageType: "sessionStorage"}).getStorage()), (0, s.isOAuthTransactionMeta)(e4))
              return e4;
            if (this.storageManager.storageUtil.testStorageType("cookie") && (e4 = this.storageManager.getLegacyOAuthParamsStorage({storageType: "cookie"}).getStorage()), (0, s.isOAuthTransactionMeta)(e4))
              return e4;
            throw new a.R("Unable to retrieve OAuth redirect params from storage");
          }}, {key: "saveIdxResponse", value: function(e4) {
            if (this.saveLastResponse) {
              var t3 = this.storageManager.getIdxResponseStorage();
              t3 && t3.setStorage(e4);
            }
          }}, {key: "loadIdxResponse", value: function(e4) {
            if (!this.saveLastResponse)
              return null;
            var t3 = this.storageManager.getIdxResponseStorage();
            if (!t3)
              return null;
            var n3 = t3.getStorage();
            if (!n3 || !(0, c.P)(n3.rawIdxResponse))
              return null;
            if (e4) {
              var r3 = e4.stateHandle, o2 = e4.interactionHandle;
              if (r3 && n3.stateHandle !== r3)
                return null;
              if (o2 && n3.interactionHandle !== o2)
                return null;
            }
            return n3;
          }}, {key: "clearIdxResponse", value: function() {
            if (this.saveLastResponse) {
              var e4 = this.storageManager.getIdxResponseStorage();
              e4 == null || e4.clearStorage();
            }
          }}]), e3;
        }();
      }, 1971: function(e2, t2, n2) {
        "use strict";
        n2.r(t2), n2.d(t2, {STATE_TOKEN_KEY_NAME: function() {
          return r2;
        }, DEFAULT_POLLING_DELAY: function() {
          return o;
        }, DEFAULT_MAX_CLOCK_SKEW: function() {
          return i;
        }, DEFAULT_CACHE_DURATION: function() {
          return a;
        }, REDIRECT_OAUTH_PARAMS_NAME: function() {
          return u;
        }, REDIRECT_STATE_COOKIE_NAME: function() {
          return s;
        }, REDIRECT_NONCE_COOKIE_NAME: function() {
          return c;
        }, TOKEN_STORAGE_NAME: function() {
          return f;
        }, CACHE_STORAGE_NAME: function() {
          return l;
        }, PKCE_STORAGE_NAME: function() {
          return p;
        }, TRANSACTION_STORAGE_NAME: function() {
          return h;
        }, SHARED_TRANSACTION_STORAGE_NAME: function() {
          return d;
        }, ORIGINAL_URI_STORAGE_NAME: function() {
          return v;
        }, IDX_RESPONSE_STORAGE_NAME: function() {
          return y;
        }, ACCESS_TOKEN_STORAGE_KEY: function() {
          return g;
        }, ID_TOKEN_STORAGE_KEY: function() {
          return m;
        }, REFRESH_TOKEN_STORAGE_KEY: function() {
          return b;
        }, REFERRER_PATH_STORAGE_KEY: function() {
          return O;
        }, MIN_VERIFIER_LENGTH: function() {
          return k;
        }, MAX_VERIFIER_LENGTH: function() {
          return w;
        }, DEFAULT_CODE_CHALLENGE_METHOD: function() {
          return T;
        }, IDX_API_VERSION: function() {
          return E;
        }});
        var r2 = "oktaStateToken", o = 500, i = 300, a = 86400, u = "okta-oauth-redirect-params", s = "okta-oauth-state", c = "okta-oauth-nonce", f = "okta-token-storage", l = "okta-cache-storage", p = "okta-pkce-storage", h = "okta-transaction-storage", d = "okta-shared-transaction-storage", v = "okta-original-uri-storage", y = "okta-idx-response-storage", g = "accessToken", m = "idToken", b = "refreshToken", O = "referrerPath", k = 43, w = 128, T = "S256", E = "1.0.0";
      }, 7987: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {NL: function() {
          return i;
        }, aR: function() {
          return a;
        }, Df: function() {
          return u;
        }, Wy: function() {
          return s;
        }, k8: function() {
          return c;
        }, EL: function() {
          return f;
        }, dX: function() {
          return l;
        }, kQ: function() {
          return p;
        }});
        var r2 = n2(7301), o = n2(4029);
        function i(e3) {
          return a((0, o.r3)(e3));
        }
        function a(e3) {
          return e3.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
        }
        function u(e3) {
          return e3.replace(/-/g, "+").replace(/_/g, "/");
        }
        function s(e3) {
          var t3 = u(e3);
          switch (t3.length % 4) {
            case 0:
              break;
            case 2:
              t3 += "==";
              break;
            case 3:
              t3 += "=";
              break;
            default:
              throw new r2.R("Not a valid Base64Url");
          }
          var n3 = (0, o.ty)(t3);
          try {
            return decodeURIComponent(escape(n3));
          } catch (e4) {
            return n3;
          }
        }
        function c(e3) {
          for (var t3 = new Uint8Array(e3.length), n3 = 0; n3 < e3.length; n3++)
            t3[n3] = e3.charCodeAt(n3);
          return t3;
        }
        function f(e3) {
          return (0, o.ty)(u(e3));
        }
        function l(e3) {
          return Uint8Array.from(f(e3), function(e4) {
            return e4.charCodeAt(0);
          });
        }
        function p(e3) {
          return (0, o.r3)(new Uint8Array(e3).reduce(function(e4, t3) {
            return e4 + String.fromCharCode(t3);
          }, ""));
        }
      }, 9326: function(e2, t2, n2) {
        "use strict";
        n2.r(t2), n2.d(t2, {atob: function() {
          return o.ty;
        }, base64ToBase64Url: function() {
          return r2.aR;
        }, base64UrlDecode: function() {
          return r2.EL;
        }, base64UrlToBase64: function() {
          return r2.Df;
        }, base64UrlToBuffer: function() {
          return r2.dX;
        }, base64UrlToString: function() {
          return r2.Wy;
        }, btoa: function() {
          return o.r3;
        }, bufferToBase64Url: function() {
          return r2.kQ;
        }, getOidcHash: function() {
          return i;
        }, stringToBase64Url: function() {
          return r2.NL;
        }, stringToBuffer: function() {
          return r2.k8;
        }, verifyToken: function() {
          return u;
        }, webcrypto: function() {
          return o.KP;
        }});
        var r2 = n2(7987), o = n2(4029);
        function i(e3) {
          var t3 = new TextEncoder().encode(e3);
          return o.KP.subtle.digest("SHA-256", t3).then(function(e4) {
            var t4 = new Uint8Array(e4).slice(0, 16), n3 = String.fromCharCode.apply(null, t4);
            return (0, r2.NL)(n3);
          });
        }
        var a = n2(3193);
        function u(e3, t3) {
          t3 = (0, a.d9)(t3);
          var n3 = {name: "RSASSA-PKCS1-v1_5", hash: {name: "SHA-256"}};
          return delete t3.use, o.KP.subtle.importKey("jwk", t3, n3, true, ["verify"]).then(function(t4) {
            var i2 = e3.split("."), a2 = (0, r2.k8)(i2[0] + "." + i2[1]), u2 = (0, r2.EL)(i2[2]), s = (0, r2.k8)(u2);
            return o.KP.subtle.verify(n3, t4, s, a2);
          });
        }
      }, 4029: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {ty: function() {
          return r2;
        }, r3: function() {
          return o;
        }, KP: function() {
          return i;
        }});
        var r2 = function(e3) {
          return atob(e3);
        }, o = function(e3) {
          return btoa(e3);
        }, i = typeof crypto == "undefined" ? null : crypto;
      }, 3983: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {Z: function() {
          return c;
        }});
        var r2 = n2(5671), o = n2(7326), i = n2(136), a = n2(2963), u = n2(1120), s = n2(4942);
        var c = function(e3) {
          (0, i.Z)(f, e3);
          var t3, n3, c2 = (t3 = f, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r3 = (0, u.Z)(t3);
            if (n3) {
              var o2 = (0, u.Z)(this).constructor;
              e4 = Reflect.construct(r3, arguments, o2);
            } else
              e4 = r3.apply(this, arguments);
            return (0, a.Z)(this, e4);
          });
          function f(e4, t4) {
            var n4;
            (0, r2.Z)(this, f);
            var i2 = e4.errorSummary;
            return n4 = c2.call(this, i2), (0, s.Z)((0, o.Z)(n4), "errorSummary", void 0), (0, s.Z)((0, o.Z)(n4), "errorCode", void 0), (0, s.Z)((0, o.Z)(n4), "errorLink", void 0), (0, s.Z)((0, o.Z)(n4), "errorId", void 0), (0, s.Z)((0, o.Z)(n4), "errorCauses", void 0), (0, s.Z)((0, o.Z)(n4), "xhr", void 0), n4.name = "AuthApiError", n4.errorSummary = e4.errorSummary, n4.errorCode = e4.errorCode, n4.errorLink = e4.errorLink, n4.errorId = e4.errorId, n4.errorCauses = e4.errorCauses, t4 && (n4.xhr = t4), n4;
          }
          return f;
        }(n2(6245).Z);
      }, 6573: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {Z: function() {
          return u;
        }});
        var r2 = n2(5671), o = n2(136), i = n2(2963), a = n2(1120);
        var u = function(e3) {
          (0, o.Z)(s, e3);
          var t3, n3, u2 = (t3 = s, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r3 = (0, a.Z)(t3);
            if (n3) {
              var o2 = (0, a.Z)(this).constructor;
              e4 = Reflect.construct(r3, arguments, o2);
            } else
              e4 = r3.apply(this, arguments);
            return (0, i.Z)(this, e4);
          });
          function s() {
            return (0, r2.Z)(this, s), u2.call(this, "The poll was stopped by the sdk");
          }
          return s;
        }(n2(6245).Z);
      }, 9123: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {Z: function() {
          return c;
        }});
        var r2 = n2(5671), o = n2(7326), i = n2(136), a = n2(2963), u = n2(1120), s = n2(4942);
        var c = function(e3) {
          (0, i.Z)(f, e3);
          var t3, n3, c2 = (t3 = f, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r3 = (0, u.Z)(t3);
            if (n3) {
              var o2 = (0, u.Z)(this).constructor;
              e4 = Reflect.construct(r3, arguments, o2);
            } else
              e4 = r3.apply(this, arguments);
            return (0, a.Z)(this, e4);
          });
          function f(e4, t4) {
            var n4;
            return (0, r2.Z)(this, f), n4 = c2.call(this, e4), (0, s.Z)((0, o.Z)(n4), "errorSummary", void 0), (0, s.Z)((0, o.Z)(n4), "errorCode", void 0), (0, s.Z)((0, o.Z)(n4), "errorLink", void 0), (0, s.Z)((0, o.Z)(n4), "errorId", void 0), (0, s.Z)((0, o.Z)(n4), "errorCauses", void 0), (0, s.Z)((0, o.Z)(n4), "xhr", void 0), n4.name = "AuthSdkError", n4.errorCode = "INTERNAL", n4.errorSummary = e4, n4.errorLink = "INTERNAL", n4.errorId = "INTERNAL", n4.errorCauses = [], t4 && (n4.xhr = t4), n4;
          }
          return f;
        }(n2(6245).Z);
      }, 6245: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {Z: function() {
          return p;
        }});
        var r2 = n2(5671), o = n2(7326), i = n2(136), a = n2(2963), u = n2(1120), s = n2(9611);
        function c() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (e3) {
            return false;
          }
        }
        function f(e3, t3, n3) {
          return f = c() ? Reflect.construct : function(e4, t4, n4) {
            var r3 = [null];
            r3.push.apply(r3, t4);
            var o2 = new (Function.bind.apply(e4, r3))();
            return n4 && (0, s.Z)(o2, n4.prototype), o2;
          }, f.apply(null, arguments);
        }
        function l(e3) {
          var t3 = typeof Map == "function" ? new Map() : void 0;
          return l = function(e4) {
            if (e4 === null || (n3 = e4, Function.toString.call(n3).indexOf("[native code]") === -1))
              return e4;
            var n3;
            if (typeof e4 != "function")
              throw new TypeError("Super expression must either be null or a function");
            if (t3 !== void 0) {
              if (t3.has(e4))
                return t3.get(e4);
              t3.set(e4, r3);
            }
            function r3() {
              return f(e4, arguments, (0, u.Z)(this).constructor);
            }
            return r3.prototype = Object.create(e4.prototype, {constructor: {value: r3, enumerable: false, writable: true, configurable: true}}), (0, s.Z)(r3, e4);
          }, l(e3);
        }
        var p = function(e3) {
          (0, i.Z)(c2, e3);
          var t3, n3, s2 = (t3 = c2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r3 = (0, u.Z)(t3);
            if (n3) {
              var o2 = (0, u.Z)(this).constructor;
              e4 = Reflect.construct(r3, arguments, o2);
            } else
              e4 = r3.apply(this, arguments);
            return (0, a.Z)(this, e4);
          });
          function c2(e4) {
            var t4;
            return (0, r2.Z)(this, c2), t4 = s2.call(this, e4), Object.setPrototypeOf((0, o.Z)(t4), (this instanceof c2 ? this.constructor : void 0).prototype), t4;
          }
          return c2;
        }(l(Error));
      }, 7301: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {Ws: function() {
          return r2.Z;
        }, j2: function() {
          return o.Z;
        }, R: function() {
          return i.Z;
        }, BK: function() {
          return p;
        }, Tw: function() {
          return h;
        }});
        var r2 = n2(3983), o = n2(6573), i = n2(9123), a = n2(5671), u = n2(7326), s = n2(136), c = n2(2963), f = n2(1120), l = n2(4942);
        var p = function(e3) {
          (0, s.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, f.Z)(t3);
            if (n3) {
              var o3 = (0, f.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, c.Z)(this, e4);
          });
          function o2(e4, t4) {
            var n4;
            return (0, a.Z)(this, o2), n4 = r3.call(this, t4), (0, l.Z)((0, u.Z)(n4), "errorCode", void 0), (0, l.Z)((0, u.Z)(n4), "errorSummary", void 0), (0, l.Z)((0, u.Z)(n4), "error", void 0), (0, l.Z)((0, u.Z)(n4), "error_description", void 0), n4.name = "OAuthError", n4.errorCode = e4, n4.errorSummary = t4, n4.error = e4, n4.error_description = t4, n4;
          }
          return o2;
        }(n2(6245).Z);
        function h(e3) {
          return e3 instanceof r2.Z;
        }
      }, 415: function(e2, t2, n2) {
        "use strict";
        n2.r(t2), n2.d(t2, {isBrowser: function() {
          return i;
        }, isIE11OrLess: function() {
          return a;
        }, getUserAgent: function() {
          return u;
        }, isFingerprintSupported: function() {
          return s;
        }, isPopupPostMessageSupported: function() {
          return c;
        }, isTokenVerifySupported: function() {
          return f;
        }, hasTextEncoder: function() {
          return l;
        }, isPKCESupported: function() {
          return p;
        }, isHTTPS: function() {
          return h;
        }, isLocalhost: function() {
          return d;
        }});
        var r2 = n2(9326), o = /windows phone|iemobile|wpdesktop/i;
        function i() {
          return typeof document != "undefined" && typeof window != "undefined";
        }
        function a() {
          if (!i())
            return false;
          var e3 = document.documentMode;
          return !!e3 && e3 <= 11;
        }
        function u() {
          return navigator.userAgent;
        }
        function s() {
          var e3 = u();
          return e3 && !o.test(e3);
        }
        function c() {
          if (!i())
            return false;
          var e3 = document.documentMode, t3 = e3 && e3 < 10;
          return window.postMessage !== void 0 && !t3;
        }
        function f() {
          return r2.webcrypto !== void 0 && r2.webcrypto !== null && r2.webcrypto.subtle !== void 0 && typeof Uint8Array != "undefined";
        }
        function l() {
          return typeof TextEncoder != "undefined";
        }
        function p() {
          return f() && l();
        }
        function h() {
          return !!i() && window.location.protocol === "https:";
        }
        function d() {
          return i() && window.location.hostname === "localhost";
        }
      }, 6780: function(e2, t2, n2) {
        "use strict";
        function r2(e3, t3, n3) {
          e3.options.headers = e3.options.headers || {}, e3.options.headers[t3] = n3;
        }
        n2.d(t2, {U2: function() {
          return h;
        }, c3: function() {
          return p;
        }, v_: function() {
          return d;
        }, rn: function() {
          return r2;
        }});
        var o = n2(1002), i = n2(4942), a = n2(3193), u = n2(4771), s = n2(6718), c = n2(1971), f = n2(7301);
        function l(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function p(e3, t3) {
          var n3 = (t3 = t3 || {}).url, r3 = t3.method, s2 = t3.args, p2 = t3.saveAuthnState, h2 = t3.accessToken, d2 = t3.withCredentials === true, v = e3.options.storageUtil.storage, y = e3.storageManager.getHttpCache(e3.options.cookies);
          if (t3.cacheResponse) {
            var g = y.getStorage()[n3];
            if (g && Date.now() / 1e3 < g.expiresAt)
              return Promise.resolve(g.response);
          }
          var m = function(e4) {
            for (var t4 = 1; t4 < arguments.length; t4++) {
              var n4 = arguments[t4] != null ? arguments[t4] : {};
              t4 % 2 ? l(Object(n4), true).forEach(function(t5) {
                (0, i.Z)(e4, t5, n4[t5]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(n4)) : l(Object(n4)).forEach(function(t5) {
                Object.defineProperty(e4, t5, Object.getOwnPropertyDescriptor(n4, t5));
              });
            }
            return e4;
          }({Accept: "application/json", "Content-Type": "application/json"}, e3._oktaUserAgent.getHttpHeader());
          Object.assign(m, e3.options.headers, t3.headers), m = (0, a.YY)(m), h2 && (0, u.HD)(h2) && (m.Authorization = "Bearer " + h2);
          var b, O, k = {headers: m, data: s2 || void 0, withCredentials: d2};
          return e3.options.httpRequestClient(r3, n3, k).then(function(r4) {
            return (O = r4.responseText) && (0, u.HD)(O) && (O = JSON.parse(O)) && (0, o.Z)(O) === "object" && !O.headers && (O.headers = r4.headers), p2 && (O.stateToken || v.delete(c.STATE_TOKEN_KEY_NAME)), O && O.stateToken && O.expiresAt && v.set(c.STATE_TOKEN_KEY_NAME, O.stateToken, O.expiresAt, e3.options.cookies), O && t3.cacheResponse && y.updateStorage(n3, {expiresAt: Math.floor(Date.now() / 1e3) + c.DEFAULT_CACHE_DURATION, response: O}), O;
          }).catch(function(t4) {
            var n4 = t4.responseText || {};
            if ((0, u.HD)(n4))
              try {
                n4 = JSON.parse(n4);
              } catch (e4) {
                n4 = {errorSummary: "Unknown error"};
              }
            throw t4.status >= 500 && (n4.errorSummary = "Unknown error"), e3.options.transformErrorXHR && (t4 = e3.options.transformErrorXHR((0, a.d9)(t4))), (b = n4.error && n4.error_description ? new f.BK(n4.error, n4.error_description) : new f.Ws(n4, t4)).errorCode === "E0000011" && v.delete(c.STATE_TOKEN_KEY_NAME), b;
          });
        }
        function h(e3, t3, n3) {
          var r3 = {url: t3 = (0, s.sD)(t3) ? t3 : e3.getIssuerOrigin() + t3, method: "GET"};
          return Object.assign(r3, n3), p(e3, r3);
        }
        function d(e3, t3, n3, r3) {
          var o2 = {url: t3 = (0, s.sD)(t3) ? t3 : e3.getIssuerOrigin() + t3, method: "POST", args: n3, saveAuthnState: true};
          return Object.assign(o2, r3), p(e3, o2);
        }
      }, 6861: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {YR: function() {
          return Dn;
        }, Ch: function() {
          return It;
        }, al: function() {
          return Un;
        }, Jm: function() {
          return c.Jm;
        }, Xc: function() {
          return c.Xc;
        }, uN: function() {
          return c.uN;
        }, Co: function() {
          return c.Co;
        }, Jn: function() {
          return qn;
        }, Xx: function() {
          return sr;
        }, $0: function() {
          return c.$0;
        }, EW: function() {
          return y;
        }, L8: function() {
          return ue;
        }, GA: function() {
          return Gn;
        }, gc: function() {
          return Bn;
        }, Wf: function() {
          return c.Wf;
        }, bl: function() {
          return c.bl;
        }, UC: function() {
          return c.UC;
        }, mo: function() {
          return Vn;
        }, $l: function() {
          return Wn;
        }, xc: function() {
          return Mt;
        }, M4: function() {
          return ar;
        }, z2: function() {
          return nr;
        }, r0: function() {
          return c.r0;
        }, Yr: function() {
          return $n;
        }, le: function() {
          return pr;
        }});
        var r2 = {};
        n2.r(r2), n2.d(r2, {AuthenticatorEnrollmentData: function() {
          return xt;
        }, AuthenticatorVerificationData: function() {
          return At;
        }, ChallengeAuthenticator: function() {
          return Xe;
        }, ChallengePoll: function() {
          return et;
        }, EnrollAuthenticator: function() {
          return Be;
        }, EnrollPoll: function() {
          return qe;
        }, EnrollProfile: function() {
          return ot;
        }, EnrollmentChannelData: function() {
          return $e;
        }, GenericRemediator: function() {
          return Kt;
        }, Identify: function() {
          return ut;
        }, ReEnrollAuthenticator: function() {
          return ft;
        }, RedirectIdp: function() {
          return lt;
        }, Remediator: function() {
          return ke;
        }, ResetAuthenticator: function() {
          return tt;
        }, SelectAuthenticatorAuthenticate: function() {
          return yt;
        }, SelectAuthenticatorEnroll: function() {
          return gt;
        }, SelectAuthenticatorUnlockAccount: function() {
          return Ot;
        }, SelectEnrollProfile: function() {
          return kt;
        }, SelectEnrollmentChannel: function() {
          return ze;
        }, Skip: function() {
          return jt;
        }});
        var o = n2(4942), i = n2(5861), a = n2(7757), u = n2.n(a), s = n2(2852), c = n2(2620), f = n2(1416), l = n2(3193), p = n2(6780);
        function h(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function d(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? h(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : h(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function v(e3) {
          return {meta: e3, interactionHandle: e3.interactionHandle, state: e3.state};
        }
        function y(e3) {
          return g.apply(this, arguments);
        }
        function g() {
          return g = (0, i.Z)(u().mark(function e3(t3) {
            var n3, r3, o2, i2, a2, s2, h2, y2, g2, m2, b2, O2, k2, w2, T2, E2, S2, _2, A2, P2, R2, x2, j2, Z2 = arguments;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (o2 = Z2.length > 1 && Z2[1] !== void 0 ? Z2[1] : {}, o2 = (0, l.YY)(o2), i2 = (0, c.uN)(t3, o2), (n3 = i2) === null || n3 === void 0 || !n3.interactionHandle) {
                      e4.next = 5;
                      break;
                    }
                    return e4.abrupt("return", v(i2));
                  case 5:
                    return e4.next = 7, (0, c.Xc)(t3, d(d({}, i2), o2));
                  case 7:
                    return i2 = e4.sent, a2 = (0, f.zf)(t3), h2 = (s2 = i2).clientId, y2 = s2.redirectUri, g2 = s2.state, m2 = s2.scopes, b2 = s2.withCredentials, O2 = s2.codeChallenge, k2 = s2.codeChallengeMethod, w2 = s2.activationToken, T2 = s2.recoveryToken, E2 = s2.maxAge, S2 = o2.clientSecret || t3.options.clientSecret, b2 = (r3 = b2) === null || r3 === void 0 || r3, _2 = "".concat(a2, "/v1/interact"), A2 = d(d(d(d({client_id: h2, scope: m2.join(" "), redirect_uri: y2, code_challenge: O2, code_challenge_method: k2, state: g2}, w2 && {activation_token: w2}), T2 && {recovery_token: T2}), S2 && {client_secret: S2}), E2 && {max_age: E2}), P2 = {"Content-Type": "application/x-www-form-urlencoded"}, e4.next = 17, (0, p.c3)(t3, {method: "POST", url: _2, headers: P2, withCredentials: b2, args: A2});
                  case 17:
                    return R2 = e4.sent, x2 = R2.interaction_handle, j2 = d(d({}, i2), {}, {interactionHandle: x2, withCredentials: b2, state: g2, scopes: m2, recoveryToken: T2, activationToken: w2}), (0, c.r0)(t3, j2), e4.abrupt("return", v(j2));
                  case 22:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), g.apply(this, arguments);
        }
        var m = n2(1971), b = n2(2982), O = n2(885), k = n2(4925), w = n2(1002);
        function T(e3, t3) {
          var n3 = typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
          if (!n3) {
            if (Array.isArray(e3) || (n3 = function(e4, t4) {
              if (e4) {
                if (typeof e4 == "string")
                  return E(e4, t4);
                var n4 = Object.prototype.toString.call(e4).slice(8, -1);
                return n4 === "Object" && e4.constructor && (n4 = e4.constructor.name), n4 === "Map" || n4 === "Set" ? Array.from(e4) : n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? E(e4, t4) : void 0;
              }
            }(e3)) || t3 && e3 && typeof e3.length == "number") {
              n3 && (e3 = n3);
              var r3 = 0, o2 = function() {
              };
              return {s: o2, n: function() {
                return r3 >= e3.length ? {done: true} : {done: false, value: e3[r3++]};
              }, e: function(e4) {
                throw e4;
              }, f: o2};
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var i2, a2 = true, u2 = false;
          return {s: function() {
            n3 = n3.call(e3);
          }, n: function() {
            var e4 = n3.next();
            return a2 = e4.done, e4;
          }, e: function(e4) {
            u2 = true, i2 = e4;
          }, f: function() {
            try {
              a2 || n3.return == null || n3.return();
            } finally {
              if (u2)
                throw i2;
            }
          }};
        }
        function E(e3, t3) {
          (t3 == null || t3 > e3.length) && (t3 = e3.length);
          for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
            r3[n3] = e3[n3];
          return r3;
        }
        var S = function(e3) {
          return e3.mutable !== false;
        }, _ = function(e3) {
          var t3 = {}, n3 = [], r3 = {};
          if (!e3.value)
            return n3.push(e3), {defaultParamsForAction: t3, neededParamsForAction: n3, immutableParamsForAction: r3};
          var o2, i2 = T(e3.value);
          try {
            for (i2.s(); !(o2 = i2.n()).done; ) {
              var a2, u2, s2 = o2.value;
              S(s2) ? (n3.push(s2), (a2 = s2.value) !== null && a2 !== void 0 && a2 && (t3[s2.name] = s2.value)) : r3[s2.name] = (u2 = s2.value) !== null && u2 !== void 0 ? u2 : "";
            }
          } catch (e4) {
            i2.e(e4);
          } finally {
            i2.f();
          }
          return {defaultParamsForAction: t3, neededParamsForAction: n3, immutableParamsForAction: r3};
        }, A = n2(3983);
        function P(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function R(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? P(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : P(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        var x = function(e3, t3) {
          var n3 = t3.actionDefinition, r3 = t3.defaultParamsForAction, o2 = r3 === void 0 ? {} : r3, a2 = t3.immutableParamsForAction, s2 = a2 === void 0 ? {} : a2, c2 = t3.toPersist, f2 = c2 === void 0 ? {} : c2, l2 = n3.href;
          return (0, i.Z)(u().mark(function t4() {
            var r4, i2, a3, c3, h2, d2, v2, y2, g2, m2 = arguments;
            return u().wrap(function(t5) {
              for (; ; )
                switch (t5.prev = t5.next) {
                  case 0:
                    return r4 = m2.length > 0 && m2[0] !== void 0 ? m2[0] : {}, i2 = {"Content-Type": "application/json", Accept: n3.accepts || "application/ion+json"}, a3 = JSON.stringify(R(R(R({}, o2), r4), s2)), t5.prev = 3, t5.next = 6, (0, p.c3)(e3, {url: l2, method: n3.method, headers: i2, args: a3, withCredentials: (c3 = f2 == null ? void 0 : f2.withCredentials) === null || c3 === void 0 || c3});
                  case 6:
                    return h2 = t5.sent, t5.abrupt("return", ee(e3, R({}, h2), f2, true));
                  case 10:
                    if (t5.prev = 10, t5.t0 = t5.catch(3), t5.t0 instanceof A.Z && t5.t0 !== null && t5.t0 !== void 0 && t5.t0.xhr) {
                      t5.next = 14;
                      break;
                    }
                    throw t5.t0;
                  case 14:
                    throw d2 = t5.t0.xhr, v2 = d2.responseJSON || JSON.parse(d2.responseText), y2 = d2.headers["WWW-Authenticate"] || d2.headers["www-authenticate"], g2 = ee(e3, R({}, v2), f2, false), d2.status === 401 && y2 === 'Oktadevicejwt realm="Okta Device"' && (g2.stepUp = true), g2;
                  case 20:
                  case "end":
                    return t5.stop();
                }
            }, t4, null, [[3, 10]]);
          }));
        }, j = function(e3, t3, n3) {
          var r3 = x, o2 = function(e4) {
            var t4, n4 = [], r4 = {}, o3 = {}, i3 = T(e4 = Array.isArray(e4) ? e4 : [e4]);
            try {
              for (i3.s(); !(t4 = i3.n()).done; ) {
                var a3 = t4.value, u3 = _(a3), s3 = u3.defaultParamsForAction, c2 = u3.neededParamsForAction, f2 = u3.immutableParamsForAction;
                n4.push(c2), r4[a3.name] = s3, o3[a3.name] = f2;
              }
            } catch (e5) {
              i3.e(e5);
            } finally {
              i3.f();
            }
            return {defaultParams: r4, neededParams: n4, immutableParams: o3};
          }(t3), i2 = o2.defaultParams, a2 = o2.neededParams, u2 = o2.immutableParams, s2 = r3(e3, {actionDefinition: t3, defaultParamsForAction: i2[t3.name], immutableParamsForAction: u2[t3.name], toPersist: n3});
          return s2.neededParams = a2, s2;
        };
        function Z(e3) {
          return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, Z(e3);
        }
        function C(e3) {
          return C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, C(e3);
        }
        function D(e3, t3) {
          return D = Object.setPrototypeOf || function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, D(e3, t3);
        }
        function I() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (e3) {
            return false;
          }
        }
        function M(e3, t3, n3) {
          return M = I() ? Reflect.construct : function(e4, t4, n4) {
            var r3 = [null];
            r3.push.apply(r3, t4);
            var o2 = new (Function.bind.apply(e4, r3))();
            return n4 && D(o2, n4.prototype), o2;
          }, M.apply(null, arguments);
        }
        function N(e3) {
          var t3 = typeof Map == "function" ? new Map() : void 0;
          return N = function(e4) {
            if (e4 === null || (n3 = e4, Function.toString.call(n3).indexOf("[native code]") === -1))
              return e4;
            var n3;
            if (typeof e4 != "function")
              throw new TypeError("Super expression must either be null or a function");
            if (t3 !== void 0) {
              if (t3.has(e4))
                return t3.get(e4);
              t3.set(e4, r3);
            }
            function r3() {
              return M(e4, arguments, C(this).constructor);
            }
            return r3.prototype = Object.create(e4.prototype, {constructor: {value: r3, enumerable: false, writable: true, configurable: true}}), D(r3, e4);
          }, N(e3);
        }
        function U(e3, t3) {
          return !t3 || typeof t3 != "object" && typeof t3 != "function" ? function(e4) {
            if (e4 === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e4;
          }(e3) : t3;
        }
        function L(e3) {
          return function(e4) {
            if (Array.isArray(e4))
              return K(e4);
          }(e3) || function(e4) {
            if (typeof Symbol != "undefined" && e4[Symbol.iterator] != null || e4["@@iterator"] != null)
              return Array.from(e4);
          }(e3) || F(e3) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function F(e3, t3) {
          if (e3) {
            if (typeof e3 == "string")
              return K(e3, t3);
            var n3 = Object.prototype.toString.call(e3).slice(8, -1);
            return n3 === "Object" && e3.constructor && (n3 = e3.constructor.name), n3 === "Map" || n3 === "Set" ? Array.from(e3) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? K(e3, t3) : void 0;
          }
        }
        function K(e3, t3) {
          (t3 == null || t3 > e3.length) && (t3 = e3.length);
          for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
            r3[n3] = e3[n3];
          return r3;
        }
        var H = Object.prototype.hasOwnProperty;
        function B(e3, t3) {
          return (e3 = e3.slice()).push(t3), e3;
        }
        function G(e3, t3) {
          return (t3 = t3.slice()).unshift(e3), t3;
        }
        var V = function(e3) {
          !function(e4, t4) {
            if (typeof t4 != "function" && t4 !== null)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t4 && t4.prototype, {constructor: {value: e4, writable: true, configurable: true}}), t4 && D(e4, t4);
          }(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = I(), function() {
            var e4, r4 = C(t3);
            if (n3) {
              var o3 = C(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return U(this, e4);
          });
          function o2(e4) {
            var t4;
            return function(e5, t5) {
              if (!(e5 instanceof t5))
                throw new TypeError("Cannot call a class as a function");
            }(this, o2), (t4 = r3.call(this, 'JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)')).avoidNew = true, t4.value = e4, t4.name = "NewError", t4;
          }
          return o2;
        }(N(Error));
        function q(e3, t3, n3, r3, o2) {
          if (!(this instanceof q))
            try {
              return new q(e3, t3, n3, r3, o2);
            } catch (e4) {
              if (!e4.avoidNew)
                throw e4;
              return e4.value;
            }
          typeof e3 == "string" && (o2 = r3, r3 = n3, n3 = t3, t3 = e3, e3 = null);
          var i2 = e3 && Z(e3) === "object";
          if (e3 = e3 || {}, this.json = e3.json || n3, this.path = e3.path || t3, this.resultType = e3.resultType || "value", this.flatten = e3.flatten || false, this.wrap = !H.call(e3, "wrap") || e3.wrap, this.sandbox = e3.sandbox || {}, this.preventEval = e3.preventEval || false, this.parent = e3.parent || null, this.parentProperty = e3.parentProperty || null, this.callback = e3.callback || r3 || null, this.otherTypeCallback = e3.otherTypeCallback || o2 || function() {
            throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
          }, e3.autostart !== false) {
            var a2 = {path: i2 ? e3.path : t3};
            i2 ? "json" in e3 && (a2.json = e3.json) : a2.json = n3;
            var u2 = this.evaluate(a2);
            if (!u2 || Z(u2) !== "object")
              throw new V(u2);
            return u2;
          }
        }
        q.prototype.evaluate = function(e3, t3, n3, r3) {
          var o2 = this, i2 = this.parent, a2 = this.parentProperty, u2 = this.flatten, s2 = this.wrap;
          if (this.currResultType = this.resultType, this.currPreventEval = this.preventEval, this.currSandbox = this.sandbox, n3 = n3 || this.callback, this.currOtherTypeCallback = r3 || this.otherTypeCallback, t3 = t3 || this.json, (e3 = e3 || this.path) && Z(e3) === "object" && !Array.isArray(e3)) {
            if (!e3.path && e3.path !== "")
              throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');
            if (!H.call(e3, "json"))
              throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');
            t3 = e3.json, u2 = H.call(e3, "flatten") ? e3.flatten : u2, this.currResultType = H.call(e3, "resultType") ? e3.resultType : this.currResultType, this.currSandbox = H.call(e3, "sandbox") ? e3.sandbox : this.currSandbox, s2 = H.call(e3, "wrap") ? e3.wrap : s2, this.currPreventEval = H.call(e3, "preventEval") ? e3.preventEval : this.currPreventEval, n3 = H.call(e3, "callback") ? e3.callback : n3, this.currOtherTypeCallback = H.call(e3, "otherTypeCallback") ? e3.otherTypeCallback : this.currOtherTypeCallback, i2 = H.call(e3, "parent") ? e3.parent : i2, a2 = H.call(e3, "parentProperty") ? e3.parentProperty : a2, e3 = e3.path;
          }
          if (i2 = i2 || null, a2 = a2 || null, Array.isArray(e3) && (e3 = q.toPathString(e3)), (e3 || e3 === "") && t3) {
            var c2 = q.toPathArray(e3);
            c2[0] === "$" && c2.length > 1 && c2.shift(), this._hasParentSelector = null;
            var f2 = this._trace(c2, t3, ["$"], i2, a2, n3).filter(function(e4) {
              return e4 && !e4.isParentSelector;
            });
            return f2.length ? s2 || f2.length !== 1 || f2[0].hasArrExpr ? f2.reduce(function(e4, t4) {
              var n4 = o2._getPreferredOutput(t4);
              return u2 && Array.isArray(n4) ? e4 = e4.concat(n4) : e4.push(n4), e4;
            }, []) : this._getPreferredOutput(f2[0]) : s2 ? [] : void 0;
          }
        }, q.prototype._getPreferredOutput = function(e3) {
          var t3 = this.currResultType;
          switch (t3) {
            case "all":
              var n3 = Array.isArray(e3.path) ? e3.path : q.toPathArray(e3.path);
              return e3.pointer = q.toPointer(n3), e3.path = typeof e3.path == "string" ? e3.path : q.toPathString(e3.path), e3;
            case "value":
            case "parent":
            case "parentProperty":
              return e3[t3];
            case "path":
              return q.toPathString(e3[t3]);
            case "pointer":
              return q.toPointer(e3.path);
            default:
              throw new TypeError("Unknown result type");
          }
        }, q.prototype._handleCallback = function(e3, t3, n3) {
          if (t3) {
            var r3 = this._getPreferredOutput(e3);
            e3.path = typeof e3.path == "string" ? e3.path : q.toPathString(e3.path), t3(r3, n3, e3);
          }
        }, q.prototype._trace = function(e3, t3, n3, r3, o2, i2, a2, u2) {
          var s2, c2 = this;
          if (!e3.length)
            return s2 = {path: n3, value: t3, parent: r3, parentProperty: o2, hasArrExpr: a2}, this._handleCallback(s2, i2, "value"), s2;
          var f2 = e3[0], l2 = e3.slice(1), p2 = [];
          function h2(e4) {
            Array.isArray(e4) ? e4.forEach(function(e5) {
              p2.push(e5);
            }) : p2.push(e4);
          }
          if ((typeof f2 != "string" || u2) && t3 && H.call(t3, f2))
            h2(this._trace(l2, t3[f2], B(n3, f2), t3, f2, i2, a2));
          else if (f2 === "*")
            this._walk(f2, l2, t3, n3, r3, o2, i2, function(e4, t4, n4, r4, o3, i3, a3, u3) {
              h2(c2._trace(G(e4, n4), r4, o3, i3, a3, u3, true, true));
            });
          else if (f2 === "..")
            h2(this._trace(l2, t3, n3, r3, o2, i2, a2)), this._walk(f2, l2, t3, n3, r3, o2, i2, function(e4, t4, n4, r4, o3, i3, a3, u3) {
              Z(r4[e4]) === "object" && h2(c2._trace(G(t4, n4), r4[e4], B(o3, e4), r4, e4, u3, true));
            });
          else {
            if (f2 === "^")
              return this._hasParentSelector = true, {path: n3.slice(0, -1), expr: l2, isParentSelector: true};
            if (f2 === "~")
              return s2 = {path: B(n3, f2), value: o2, parent: r3, parentProperty: null}, this._handleCallback(s2, i2, "property"), s2;
            if (f2 === "$")
              h2(this._trace(l2, t3, n3, null, null, i2, a2));
            else if (/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(f2))
              h2(this._slice(f2, l2, t3, n3, r3, o2, i2));
            else if (f2.indexOf("?(") === 0) {
              if (this.currPreventEval)
                throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
              this._walk(f2, l2, t3, n3, r3, o2, i2, function(e4, t4, n4, r4, o3, i3, a3, u3) {
                c2._eval(t4.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/, "$1"), r4[e4], e4, o3, i3, a3) && h2(c2._trace(G(e4, n4), r4, o3, i3, a3, u3, true));
              });
            } else if (f2[0] === "(") {
              if (this.currPreventEval)
                throw new Error("Eval [(expr)] prevented in JSONPath expression.");
              h2(this._trace(G(this._eval(f2, t3, n3[n3.length - 1], n3.slice(0, -1), r3, o2), l2), t3, n3, r3, o2, i2, a2));
            } else if (f2[0] === "@") {
              var d2 = false, v2 = f2.slice(1, -2);
              switch (v2) {
                case "scalar":
                  t3 && ["object", "function"].includes(Z(t3)) || (d2 = true);
                  break;
                case "boolean":
                case "string":
                case "undefined":
                case "function":
                  Z(t3) === v2 && (d2 = true);
                  break;
                case "integer":
                  !Number.isFinite(t3) || t3 % 1 || (d2 = true);
                  break;
                case "number":
                  Number.isFinite(t3) && (d2 = true);
                  break;
                case "nonFinite":
                  typeof t3 != "number" || Number.isFinite(t3) || (d2 = true);
                  break;
                case "object":
                  t3 && Z(t3) === v2 && (d2 = true);
                  break;
                case "array":
                  Array.isArray(t3) && (d2 = true);
                  break;
                case "other":
                  d2 = this.currOtherTypeCallback(t3, n3, r3, o2);
                  break;
                case "null":
                  t3 === null && (d2 = true);
                  break;
                default:
                  throw new TypeError("Unknown value type " + v2);
              }
              if (d2)
                return s2 = {path: n3, value: t3, parent: r3, parentProperty: o2}, this._handleCallback(s2, i2, "value"), s2;
            } else if (f2[0] === "`" && t3 && H.call(t3, f2.slice(1))) {
              var y2 = f2.slice(1);
              h2(this._trace(l2, t3[y2], B(n3, y2), t3, y2, i2, a2, true));
            } else if (f2.includes(",")) {
              var g2, m2 = function(e4, t4) {
                var n4 = typeof Symbol != "undefined" && e4[Symbol.iterator] || e4["@@iterator"];
                if (!n4) {
                  if (Array.isArray(e4) || (n4 = F(e4))) {
                    n4 && (e4 = n4);
                    var r4 = 0, o3 = function() {
                    };
                    return {s: o3, n: function() {
                      return r4 >= e4.length ? {done: true} : {done: false, value: e4[r4++]};
                    }, e: function(e5) {
                      throw e5;
                    }, f: o3};
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i3, a3 = true, u3 = false;
                return {s: function() {
                  n4 = n4.call(e4);
                }, n: function() {
                  var e5 = n4.next();
                  return a3 = e5.done, e5;
                }, e: function(e5) {
                  u3 = true, i3 = e5;
                }, f: function() {
                  try {
                    a3 || n4.return == null || n4.return();
                  } finally {
                    if (u3)
                      throw i3;
                  }
                }};
              }(f2.split(","));
              try {
                for (m2.s(); !(g2 = m2.n()).done; ) {
                  var b2 = g2.value;
                  h2(this._trace(G(b2, l2), t3, n3, r3, o2, i2, true));
                }
              } catch (e4) {
                m2.e(e4);
              } finally {
                m2.f();
              }
            } else
              !u2 && t3 && H.call(t3, f2) && h2(this._trace(l2, t3[f2], B(n3, f2), t3, f2, i2, a2, true));
          }
          if (this._hasParentSelector)
            for (var O2 = 0; O2 < p2.length; O2++) {
              var k2 = p2[O2];
              if (k2 && k2.isParentSelector) {
                var w2 = this._trace(k2.expr, t3, k2.path, r3, o2, i2, a2);
                if (Array.isArray(w2)) {
                  p2[O2] = w2[0];
                  for (var T2 = w2.length, E2 = 1; E2 < T2; E2++)
                    O2++, p2.splice(O2, 0, w2[E2]);
                } else
                  p2[O2] = w2;
              }
            }
          return p2;
        }, q.prototype._walk = function(e3, t3, n3, r3, o2, i2, a2, u2) {
          if (Array.isArray(n3))
            for (var s2 = n3.length, c2 = 0; c2 < s2; c2++)
              u2(c2, e3, t3, n3, r3, o2, i2, a2);
          else
            n3 && Z(n3) === "object" && Object.keys(n3).forEach(function(s3) {
              u2(s3, e3, t3, n3, r3, o2, i2, a2);
            });
        }, q.prototype._slice = function(e3, t3, n3, r3, o2, i2, a2) {
          if (Array.isArray(n3)) {
            var u2 = n3.length, s2 = e3.split(":"), c2 = s2[2] && Number.parseInt(s2[2]) || 1, f2 = s2[0] && Number.parseInt(s2[0]) || 0, l2 = s2[1] && Number.parseInt(s2[1]) || u2;
            f2 = f2 < 0 ? Math.max(0, f2 + u2) : Math.min(u2, f2), l2 = l2 < 0 ? Math.max(0, l2 + u2) : Math.min(u2, l2);
            for (var p2 = [], h2 = f2; h2 < l2; h2 += c2)
              this._trace(G(h2, t3), n3, r3, o2, i2, a2, true).forEach(function(e4) {
                p2.push(e4);
              });
            return p2;
          }
        }, q.prototype._eval = function(e3, t3, n3, r3, o2, i2) {
          e3.includes("@parentProperty") && (this.currSandbox._$_parentProperty = i2, e3 = e3.replace(/@parentProperty/g, "_$_parentProperty")), e3.includes("@parent") && (this.currSandbox._$_parent = o2, e3 = e3.replace(/@parent/g, "_$_parent")), e3.includes("@property") && (this.currSandbox._$_property = n3, e3 = e3.replace(/@property/g, "_$_property")), e3.includes("@path") && (this.currSandbox._$_path = q.toPathString(r3.concat([n3])), e3 = e3.replace(/@path/g, "_$_path")), e3.includes("@root") && (this.currSandbox._$_root = this.json, e3 = e3.replace(/@root/g, "_$_root")), /@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/.test(e3) && (this.currSandbox._$_v = t3, e3 = e3.replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g, "_$_v$1"));
          try {
            return this.vm.runInNewContext(e3, this.currSandbox);
          } catch (t4) {
            throw console.log(t4), new Error("jsonPath: " + t4.message + ": " + e3);
          }
        }, q.cache = {}, q.toPathString = function(e3) {
          for (var t3 = e3, n3 = t3.length, r3 = "$", o2 = 1; o2 < n3; o2++)
            /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(t3[o2]) || (r3 += /^[\*0-9]+$/.test(t3[o2]) ? "[" + t3[o2] + "]" : "['" + t3[o2] + "']");
          return r3;
        }, q.toPointer = function(e3) {
          for (var t3 = e3, n3 = t3.length, r3 = "", o2 = 1; o2 < n3; o2++)
            /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(t3[o2]) || (r3 += "/" + t3[o2].toString().replace(/~/g, "~0").replace(/\//g, "~1"));
          return r3;
        }, q.toPathArray = function(e3) {
          var t3 = q.cache;
          if (t3[e3])
            return t3[e3].concat();
          var n3 = [], r3 = e3.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g, ";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g, function(e4, t4) {
            return "[#" + (n3.push(t4) - 1) + "]";
          }).replace(/\[["']((?:(?!['\]])[\s\S])*)["']\]/g, function(e4, t4) {
            return "['" + t4.replace(/\./g, "%@%").replace(/~/g, "%%@@%%") + "']";
          }).replace(/~/g, ";~;").replace(/["']?\.["']?(?!(?:(?!\[)[\s\S])*\])|\[["']?/g, ";").replace(/%@%/g, ".").replace(/%%@@%%/g, "~").replace(/(?:;)?(\^+)(?:;)?/g, function(e4, t4) {
            return ";" + t4.split("").join(";") + ";";
          }).replace(/;;;|;;/g, ";..;").replace(/;$|'?\]|'$/g, "").split(";").map(function(e4) {
            var t4 = e4.match(/#([0-9]+)/);
            return t4 && t4[1] ? n3[t4[1]] : e4;
          });
          return t3[e3] = r3, t3[e3].concat();
        }, q.prototype.vm = {runInNewContext: function(e3, t3) {
          var n3 = Object.keys(t3), r3 = [];
          !function(e4, n4, r4) {
            for (var o3 = e4.length, i3 = 0; i3 < o3; i3++)
              a3 = e4[i3], typeof t3[a3] == "function" && n4.push(e4.splice(i3--, 1)[0]);
            var a3;
          }(n3, r3);
          var o2 = n3.map(function(e4, n4) {
            return t3[e4];
          }), i2 = r3.reduce(function(e4, n4) {
            var r4 = t3[n4].toString();
            return /function/.test(r4) || (r4 = "function " + r4), "var " + n4 + "=" + r4 + ";" + e4;
          }, "");
          /(["'])use strict\1/.test(e3 = i2 + e3) || n3.includes("arguments") || (e3 = "var arguments = undefined;" + e3);
          var a2 = (e3 = e3.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, "")).lastIndexOf(";"), u2 = a2 > -1 ? e3.slice(0, a2 + 1) + " return " + e3.slice(a2 + 1) : " return " + e3;
          return M(Function, L(n3).concat([u2])).apply(void 0, L(o2));
        }};
        var Y = ["value", "type"];
        function W(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function z(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? W(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : W(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        var J = Object.fromEntries(["remediation", "context"].map(function(e3) {
          return [e3, true];
        })), Q = function(e3, t3) {
          var n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r3 = {}, o2 = {};
          return Object.keys(t3).filter(function(e4) {
            return !J[e4];
          }).forEach(function(i2) {
            if ((0, w.Z)(t3[i2]) === "object" && t3[i2])
              if (t3[i2].rel)
                r3[t3[i2].name] = j(e3, t3[i2], n3);
              else {
                var a2 = t3[i2], u2 = a2.value, s2 = a2.type, c2 = (0, k.Z)(a2, Y);
                o2[i2] = z({type: s2}, c2), s2 === "object" ? (o2[i2].value = {}, Object.entries(u2).forEach(function(t4) {
                  var a3 = (0, O.Z)(t4, 2), u3 = a3[0], s3 = a3[1];
                  s3.rel ? r3["".concat(i2, "-").concat(u3.name || u3)] = j(e3, s3, n3) : o2[i2].value[u3] = s3;
                })) : o2[i2].value = u2;
              }
            else
              o2[i2] = t3[i2];
          }), {context: o2, actions: r3};
        }, $ = function e3(t3, n3) {
          Object.keys(n3).forEach(function(r3) {
            if (r3 === "relatesTo") {
              var o2 = Array.isArray(n3[r3]) ? n3[r3][0] : n3[r3];
              if (typeof o2 == "string") {
                var i2 = q({path: o2, json: t3})[0];
                if (i2)
                  return void (n3[r3] = i2);
              }
            }
            Array.isArray(n3[r3]) && n3[r3].forEach(function(n4) {
              return e3(t3, n4);
            });
          });
        }, X = function(e3, t3, n3) {
          if (t3.rel) {
            var r3 = function(e4, t4) {
              var n4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return Object.fromEntries(t4.map(function(t5) {
                return [t5.name, j(e4, t5, n4)];
              }));
            }(e3, [t3], n3), o2 = r3[t3.name];
            return z(z({}, t3), {}, {action: o2});
          }
          return t3;
        };
        function ee(e3, t3, n3, r3) {
          var o2, a2, s2, c2, f2 = t3, l2 = function(e4, t4) {
            var n4, r4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o3 = ((n4 = t4.remediation) === null || n4 === void 0 ? void 0 : n4.value) || [];
            o3.forEach(function(e5) {
              return $(t4, e5);
            });
            var i2 = o3.map(function(t5) {
              return X(e4, t5, r4);
            }), a3 = Q(e4, t4, r4), u2 = a3.context, s3 = a3.actions;
            return {remediations: i2, context: u2, actions: s3};
          }(e3, t3, n3), p2 = l2.remediations, h2 = l2.context, d2 = l2.actions, v2 = (0, b.Z)(p2), y2 = (c2 = (0, i.Z)(u().mark(function e4(t4) {
            var n4, r4, o3 = arguments;
            return u().wrap(function(e5) {
              for (; ; )
                switch (e5.prev = e5.next) {
                  case 0:
                    if (n4 = o3.length > 1 && o3[1] !== void 0 ? o3[1] : {}, r4 = p2.find(function(e6) {
                      return e6.name === t4;
                    })) {
                      e5.next = 4;
                      break;
                    }
                    return e5.abrupt("return", Promise.reject("Unknown remediation choice: [".concat(t4, "]")));
                  case 4:
                    if (typeof r4.action == "function") {
                      e5.next = 7;
                      break;
                    }
                    return e5.abrupt("return", Promise.reject("Current remediation cannot make form submit action: [".concat(t4, "]")));
                  case 7:
                    return e5.abrupt("return", r4.action(n4));
                  case 8:
                  case "end":
                    return e5.stop();
                }
            }, e4);
          })), function(e4) {
            return c2.apply(this, arguments);
          });
          return {proceed: y2, neededToProceed: v2, actions: d2, context: h2, rawIdxState: f2, interactionCode: (o2 = f2.successWithInteractionCode) === null || o2 === void 0 || (a2 = o2.value) === null || a2 === void 0 || (s2 = a2.find(function(e4) {
            return e4.name === "interaction_code";
          })) === null || s2 === void 0 ? void 0 : s2.value, toPersist: n3, requestDidSucceed: r3};
        }
        var te = {makeIdxState: ee}, ne = function(e3) {
          switch (e3) {
            case "1.0.0":
              return te;
            case void 0:
            case null:
              throw new Error("Api version is required");
            default:
              throw new Error("Unknown api version: ".concat(e3, ".  Use an exact semver version."));
          }
        };
        function re(e3) {
          if (!e3)
            throw new Error("version is required");
          if ((e3 != null ? e3 : "").replace(/[^0-9a-zA-Z._-]/, "") !== e3 || !e3)
            throw new Error("invalid version supplied - version is required and uses semver syntax");
          ne(e3);
        }
        function oe(e3, t3) {
          var n3, r3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o2 = arguments.length > 3 ? arguments[3] : void 0, i2 = (n3 = t3 == null ? void 0 : t3.version) !== null && n3 !== void 0 ? n3 : m.IDX_API_VERSION;
          re(i2);
          var a2 = ne(i2), u2 = a2.makeIdxState;
          return u2(e3, t3, r3, o2);
        }
        var ie = n2(480), ae = n2(7301);
        function ue(e3) {
          return se.apply(this, arguments);
        }
        function se() {
          return se = (0, i.Z)(u().mark(function e3(t3) {
            var n3, r3, o2, i2, a2, s2, c2, l2, h2, d2, v2, y2, g2, b2, O2 = arguments;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (n3 = O2.length > 1 && O2[1] !== void 0 ? O2[1] : {}, (i2 = t3.transactionManager.loadIdxResponse(n3)) && (r3 = i2.rawIdxResponse, o2 = i2.requestDidSucceed), r3) {
                      e4.next = 27;
                      break;
                    }
                    return s2 = n3.version || m.IDX_API_VERSION, c2 = (0, f.Xp)(t3), l2 = n3.interactionHandle, h2 = n3.stateHandle, d2 = (a2 = n3.withCredentials) === null || a2 === void 0 || a2, e4.prev = 8, o2 = true, re(s2), v2 = "".concat(c2, "/idp/idx/introspect"), y2 = h2 ? {stateToken: h2} : {interactionHandle: l2}, g2 = {"Content-Type": "application/ion+json; okta-version=".concat(s2), Accept: "application/ion+json; okta-version=".concat(s2)}, e4.next = 16, (0, p.c3)(t3, {method: "POST", url: v2, headers: g2, withCredentials: d2, args: y2});
                  case 16:
                    r3 = e4.sent, e4.next = 27;
                    break;
                  case 19:
                    if (e4.prev = 19, e4.t0 = e4.catch(8), !((0, ae.Tw)(e4.t0) && e4.t0.xhr && (0, ie.P)(e4.t0.xhr.responseJSON))) {
                      e4.next = 26;
                      break;
                    }
                    r3 = e4.t0.xhr.responseJSON, o2 = false, e4.next = 27;
                    break;
                  case 26:
                    throw e4.t0;
                  case 27:
                    return b2 = n3.withCredentials, e4.abrupt("return", oe(t3, r3, {withCredentials: b2}, o2));
                  case 29:
                  case "end":
                    return e4.stop();
                }
            }, e3, null, [[8, 19]]);
          })), se.apply(this, arguments);
        }
        var ce = n2(146), fe = n2(5671), le = n2(3144);
        function pe(e3) {
          return e3.charAt(0).toUpperCase() + e3.substring(1);
        }
        function he(e3) {
          return e3.value.find(function(e4) {
            return e4.name === "authenticator";
          });
        }
        var de = n2(1384);
        function ve(e3, t3) {
          (t3 == null || t3 > e3.length) && (t3 = e3.length);
          for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
            r3[n3] = e3[n3];
          return r3;
        }
        function ye(e3) {
          var t3;
          if ((0, de.H)(e3))
            t3 = e3;
          else {
            if (typeof e3 != "string")
              throw new Error("Invalid format for authenticator");
            t3 = {key: e3};
          }
          return t3;
        }
        function ge(e3, t3) {
          return !!(e3 && t3 && (e3.id && t3.id ? e3.id === t3.id : e3.key && t3.key && e3.key === t3.key));
        }
        function me(e3, t3) {
          (t3 == null || t3 > e3.length) && (t3 = e3.length);
          for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
            r3[n3] = e3[n3];
          return r3;
        }
        function be(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function Oe(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? be(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : be(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        var ke = function() {
          function e3(t3) {
            var n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            (0, fe.Z)(this, e3), (0, o.Z)(this, "remediation", void 0), (0, o.Z)(this, "values", void 0), (0, o.Z)(this, "options", void 0), (0, o.Z)(this, "map", void 0), this.values = Oe({}, n3), this.options = Oe({}, r3), this.formatAuthenticators(), this.remediation = t3;
          }
          return (0, le.Z)(e3, [{key: "formatAuthenticators", value: function() {
            if (this.values.authenticators = this.values.authenticators || [], this.values.authenticators = this.values.authenticators.map(function(e5) {
              return ye(e5);
            }), this.values.authenticator) {
              var e4 = ye(this.values.authenticator);
              this.values.authenticators.some(function(t3) {
                return ge(e4, t3);
              }) || this.values.authenticators.push(e4);
            }
            this.values.authenticatorsData = this.values.authenticators.reduce(function(e5, t3) {
              return (0, w.Z)(t3) === "object" && Object.keys(t3).length > 1 && e5.push(t3), e5;
            }, this.values.authenticatorsData || []);
          }}, {key: "getName", value: function() {
            return this.remediation.name;
          }}, {key: "canRemediate", value: function() {
            var e4, t3, n3 = this;
            return !(e4 = this.remediation, (t3 = e4.value) === null || t3 === void 0 ? void 0 : t3.reduce(function(e5, t4) {
              return t4.required && e5.push(t4.name), e5;
            }, [])).find(function(e5) {
              return !n3.hasData(e5);
            });
          }}, {key: "getData", value: function(e4) {
            var t3, n3, r3 = this;
            if (!e4) {
              var o2 = (t3 = this.remediation, (n3 = t3.value) === null || n3 === void 0 ? void 0 : n3.map(function(e5) {
                return e5.name;
              })).reduce(function(e5, t4) {
                return e5[t4] = r3.getData(t4), e5;
              }, {});
              return o2;
            }
            if (typeof this["map".concat(pe(e4))] == "function") {
              var i2 = this["map".concat(pe(e4))](this.remediation.value.find(function(t4) {
                return t4.name === e4;
              }));
              if (i2)
                return i2;
            }
            if (this.map && this.map[e4])
              for (var a2 = this.map[e4], u2 = 0; u2 < a2.length; u2++) {
                var s2 = this.values[a2[u2]];
                if (s2)
                  return s2;
              }
            return this.values[e4];
          }}, {key: "hasData", value: function(e4) {
            return !!this.getData(e4);
          }}, {key: "getNextStep", value: function(e4, t3) {
            var n3 = this.getName(), r3 = this.getInputs(), o2 = this.getAuthenticator(), i2 = o2 == null ? void 0 : o2.type;
            return Oe(Oe({name: n3, inputs: r3}, i2 && {type: i2}), o2 && {authenticator: o2});
          }}, {key: "getInputs", value: function() {
            var e4 = this, t3 = [];
            return (this.remediation.value || []).forEach(function(n3) {
              var r3, o2 = n3.name, i2 = n3.type, a2 = n3.visible, u2 = n3.messages;
              if (a2 !== false) {
                if (typeof e4["getInput".concat(pe(o2))] == "function")
                  r3 = e4["getInput".concat(pe(o2))](n3);
                else if (i2 !== "object") {
                  var s2, c2 = (e4.map ? e4.map[o2] : null) || [];
                  s2 = c2.length === 1 ? c2[0] : c2.find(function(t4) {
                    return Object.keys(e4.values).includes(t4);
                  }), s2 && (r3 = Oe(Oe({}, n3), {}, {name: s2}));
                }
                r3 || (r3 = n3), Array.isArray(r3) ? r3.forEach(function(e5) {
                  return t3.push(e5);
                }) : (u2 && (r3.messages = u2), t3.push(r3));
              }
            }), t3;
          }}, {key: "getValuesAfterProceed", value: function() {
            var e4, t3 = this.remediation.value || [], n3 = this.getInputs(), r3 = function(e5, t4) {
              var n4 = typeof Symbol != "undefined" && e5[Symbol.iterator] || e5["@@iterator"];
              if (!n4) {
                if (Array.isArray(e5) || (n4 = function(e6, t5) {
                  if (e6) {
                    if (typeof e6 == "string")
                      return me(e6, t5);
                    var n5 = Object.prototype.toString.call(e6).slice(8, -1);
                    return n5 === "Object" && e6.constructor && (n5 = e6.constructor.name), n5 === "Map" || n5 === "Set" ? Array.from(e6) : n5 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n5) ? me(e6, t5) : void 0;
                  }
                }(e5)) || t4 && e5 && typeof e5.length == "number") {
                  n4 && (e5 = n4);
                  var r4 = 0, o3 = function() {
                  };
                  return {s: o3, n: function() {
                    return r4 >= e5.length ? {done: true} : {done: false, value: e5[r4++]};
                  }, e: function(e6) {
                    throw e6;
                  }, f: o3};
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var i2, a2 = true, u2 = false;
              return {s: function() {
                n4 = n4.call(e5);
              }, n: function() {
                var e6 = n4.next();
                return a2 = e6.done, e6;
              }, e: function(e6) {
                u2 = true, i2 = e6;
              }, f: function() {
                try {
                  a2 || n4.return == null || n4.return();
                } finally {
                  if (u2)
                    throw i2;
                }
              }};
            }([].concat((0, b.Z)(t3), (0, b.Z)(n3)));
            try {
              for (r3.s(); !(e4 = r3.n()).done; ) {
                var o2 = e4.value;
                delete this.values[o2.name];
              }
            } catch (e5) {
              r3.e(e5);
            } finally {
              r3.f();
            }
            return this.values;
          }}, {key: "getAuthenticator", value: function() {
            var e4, t3, n3 = (e4 = this.remediation.relatesTo) === null || e4 === void 0 ? void 0 : e4.value;
            if (n3) {
              var r3 = he(this.remediation);
              if (!r3)
                return n3;
              var o2 = r3.form.value.find(function(e5) {
                return e5.name === "id";
              }).value, i2 = (t3 = r3.form.value.find(function(e5) {
                return e5.name === "enrollmentId";
              })) === null || t3 === void 0 ? void 0 : t3.value;
              return Oe(Oe({}, n3), {}, {id: o2, enrollmentId: i2});
            }
          }}], [{key: "getMessages", value: function(e4) {
            var t3, n3;
            if (e4.value)
              return (t3 = e4.value[0]) === null || t3 === void 0 || (n3 = t3.form) === null || n3 === void 0 ? void 0 : n3.value.reduce(function(e5, t4) {
                return t4.messages && (e5 = [].concat((0, b.Z)(e5), (0, b.Z)(t4.messages.value))), e5;
              }, []);
          }}]), e3;
        }();
        (0, o.Z)(ke, "remediationName", void 0);
        var we = n2(136), Te = n2(2963), Ee = n2(1120), Se = n2(7326);
        function _e(e3, t3, n3) {
          return _e = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(e4, t4, n4) {
            var r3 = function(e5, t5) {
              for (; !Object.prototype.hasOwnProperty.call(e5, t5) && (e5 = (0, Ee.Z)(e5)) !== null; )
                ;
              return e5;
            }(e4, t4);
            if (r3) {
              var o2 = Object.getOwnPropertyDescriptor(r3, t4);
              return o2.get ? o2.get.call(n4) : o2.value;
            }
          }, _e(e3, t3, n3 || e3);
        }
        var Ae = function e3(t3) {
          (0, fe.Z)(this, e3), (0, o.Z)(this, "meta", void 0), this.meta = t3;
        };
        function Pe(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function Re(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? Pe(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Pe(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        var xe = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return (0, le.Z)(o2, [{key: "canVerify", value: function(e4) {
            return !!(e4.credentials || e4.verificationCode || e4.otp);
          }}, {key: "mapCredentials", value: function(e4) {
            var t4 = e4.credentials, n4 = e4.verificationCode, r4 = e4.otp;
            if (t4 || n4 || r4)
              return t4 || {passcode: n4 || r4};
          }}, {key: "getInputs", value: function(e4) {
            var t4;
            return Re(Re({}, (t4 = e4.form) === null || t4 === void 0 ? void 0 : t4.value[0]), {}, {name: "verificationCode", type: "string", required: e4.required});
          }}]), o2;
        }(Ae);
        var je = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return (0, le.Z)(o2, [{key: "mapCredentials", value: function(e4) {
            var t4 = e4.verificationCode;
            if (t4)
              return {totp: t4};
          }}]), o2;
        }(xe);
        function Ze(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function Ce(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? Ze(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Ze(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        var De = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return (0, le.Z)(o2, [{key: "canVerify", value: function(e4) {
            return !(!e4.credentials && !e4.password);
          }}, {key: "mapCredentials", value: function(e4) {
            var t4 = e4.credentials, n4 = e4.password;
            if (t4 || n4)
              return t4 || {passcode: n4};
          }}, {key: "getInputs", value: function(e4) {
            var t4;
            return Ce(Ce({}, (t4 = e4.form) === null || t4 === void 0 ? void 0 : t4.value[0]), {}, {name: "password", type: "string", required: e4.required});
          }}]), o2;
        }(Ae);
        var Ie = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return (0, le.Z)(o2, [{key: "canVerify", value: function(e4) {
            var t4 = e4.credentials;
            if (t4 && t4.questionKey && t4.answer)
              return true;
            var n4 = e4.questionKey, r4 = e4.question, o3 = e4.answer;
            return !(!n4 || !o3) || !(!r4 || !o3);
          }}, {key: "mapCredentials", value: function(e4) {
            var t4 = e4.questionKey, n4 = e4.question, r4 = e4.answer;
            if (r4 && (t4 || n4))
              return {questionKey: n4 ? "custom" : t4, question: n4, answer: r4};
          }}, {key: "getInputs", value: function() {
            return [{name: "questionKey", type: "string", required: true}, {name: "question", type: "string", label: "Create a security question"}, {name: "answer", type: "string", label: "Answer", required: true}];
          }}]), o2;
        }(Ae);
        var Me = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return (0, le.Z)(o2, [{key: "canVerify", value: function(e4) {
            var t4 = e4.credentials;
            return !(!t4 || !t4.answer) || !!e4.answer;
          }}, {key: "mapCredentials", value: function(e4) {
            var t4 = e4.answer;
            if (t4)
              return {questionKey: this.meta.contextualData.enrolledQuestion.questionKey, answer: t4};
          }}, {key: "getInputs", value: function() {
            return [{name: "answer", type: "string", label: "Answer", required: true}];
          }}]), o2;
        }(Ae);
        var Ne = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return (0, le.Z)(o2, [{key: "canVerify", value: function(e4) {
            var t4 = e4.credentials || e4, n4 = t4.clientData, r4 = t4.attestation;
            return !(!n4 || !r4);
          }}, {key: "mapCredentials", value: function(e4) {
            var t4 = e4.credentials, n4 = e4.clientData, r4 = e4.attestation;
            if (t4 || n4 || r4)
              return t4 || {clientData: n4, attestation: r4};
          }}, {key: "getInputs", value: function() {
            return [{name: "clientData", type: "string", required: true, visible: false, label: "Client Data"}, {name: "attestation", type: "string", required: true, visible: false, label: "Attestation"}];
          }}]), o2;
        }(Ae);
        var Ue = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return (0, le.Z)(o2, [{key: "canVerify", value: function(e4) {
            var t4 = e4.credentials || e4, n4 = t4.clientData, r4 = t4.authenticatorData, o3 = t4.signatureData;
            return !!(n4 && r4 && o3);
          }}, {key: "mapCredentials", value: function(e4) {
            var t4 = e4.credentials, n4 = e4.authenticatorData, r4 = e4.clientData, o3 = e4.signatureData;
            if (t4 || n4 || r4 || o3)
              return t4 || {authenticatorData: n4, clientData: r4, signatureData: o3};
          }}, {key: "getInputs", value: function() {
            return [{name: "authenticatorData", type: "string", label: "Authenticator Data", required: true, visible: false}, {name: "clientData", type: "string", label: "Client Data", required: true, visible: false}, {name: "signatureData", type: "string", label: "Signature Data", required: true, visible: false}];
          }}]), o2;
        }(Ae);
        function Le(e3) {
          var t3, n3, r3 = e3.relatesTo, o2 = (r3 == null ? void 0 : r3.value) || {};
          switch (o2.key) {
            case de.pc.OKTA_PASSWORD:
              return new De(o2);
            case de.pc.SECURITY_QUESTION:
              return (t3 = o2.contextualData) !== null && t3 !== void 0 && t3.enrolledQuestion ? new Me(o2) : new Ie(o2);
            case de.pc.OKTA_VERIFY:
              return new je(o2);
            case de.pc.WEBAUTHN:
              return (n3 = o2.contextualData) !== null && n3 !== void 0 && n3.challengeData ? new Ue(o2) : new Ne(o2);
            default:
              return new xe(o2);
          }
        }
        function Fe(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function Ke(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? Fe(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Fe(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        var He = function(e3) {
          (0, we.Z)(i2, e3);
          var t3, n3, r3 = (t3 = i2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o2 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o2);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function i2(e4) {
            var t4, n4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return (0, fe.Z)(this, i2), t4 = r3.call(this, e4, n4), (0, o.Z)((0, Se.Z)(t4), "authenticator", void 0), t4.authenticator = Le(e4), t4;
          }
          return (0, le.Z)(i2, [{key: "getNextStep", value: function(e4, t4) {
            var n4, r4 = _e((0, Ee.Z)(i2.prototype), "getNextStep", this).call(this, e4, t4), o2 = t4 == null || (n4 = t4.authenticatorEnrollments) === null || n4 === void 0 ? void 0 : n4.value;
            return Ke(Ke({}, r4), {}, {authenticatorEnrollments: o2});
          }}, {key: "canRemediate", value: function() {
            return this.authenticator.canVerify(this.values);
          }}, {key: "mapCredentials", value: function() {
            return this.authenticator.mapCredentials(this.values);
          }}, {key: "getInputCredentials", value: function(e4) {
            return this.authenticator.getInputs(e4);
          }}, {key: "getValuesAfterProceed", value: function() {
            var e4 = this;
            return this.values = _e((0, Ee.Z)(i2.prototype), "getValuesAfterProceed", this).call(this), Object.keys(this.values).filter(function(e5) {
              return e5 !== "credentials";
            }).reduce(function(t4, n4) {
              return Ke(Ke({}, t4), {}, (0, o.Z)({}, n4, e4.values[n4]));
            }, {});
          }}]), i2;
        }(ke);
        var Be = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return o2;
        }(He);
        function Ge(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function Ve(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? Ge(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Ge(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        (0, o.Z)(Be, "remediationName", "enroll-authenticator");
        var qe = function(e3) {
          (0, we.Z)(i2, e3);
          var t3, n3, r3 = (t3 = i2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o2 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o2);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function i2() {
            return (0, fe.Z)(this, i2), r3.apply(this, arguments);
          }
          return (0, le.Z)(i2, [{key: "canRemediate", value: function() {
            return !!this.values.startPolling || this.options.step === "enroll-poll";
          }}, {key: "getNextStep", value: function(e4, t4) {
            var n4 = _e((0, Ee.Z)(i2.prototype), "getNextStep", this).call(this, e4, t4), r4 = this.getAuthenticator();
            return !r4 && t4 != null && t4.currentAuthenticator && (r4 = t4.currentAuthenticator.value), Ve(Ve({}, n4), {}, {authenticator: r4, poll: {required: true, refresh: this.remediation.refresh}});
          }}, {key: "getValuesAfterProceed", value: function() {
            var e4 = this;
            return Object.keys(this.values).filter(function(e5) {
              return e5 !== "startPolling";
            }).reduce(function(t4, n4) {
              return Ve(Ve({}, t4), {}, (0, o.Z)({}, n4, e4.values[n4]));
            }, {});
          }}]), i2;
        }(ke);
        function Ye(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function We(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? Ye(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Ye(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        (0, o.Z)(qe, "remediationName", "enroll-poll");
        var ze = function(e3) {
          (0, we.Z)(i2, e3);
          var t3, n3, r3 = (t3 = i2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o2 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o2);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function i2() {
            return (0, fe.Z)(this, i2), r3.apply(this, arguments);
          }
          return (0, le.Z)(i2, [{key: "canRemediate", value: function() {
            return Boolean(this.values.channel);
          }}, {key: "getNextStep", value: function(e4, t4) {
            var n4 = _e((0, Ee.Z)(i2.prototype), "getNextStep", this).call(this, e4, t4), r4 = this.getChannels(), o2 = t4.currentAuthenticator.value;
            return We(We(We({}, n4), r4 && {options: r4}), {}, {authenticator: o2});
          }}, {key: "getChannels", value: function() {
            var e4;
            return (e4 = he(this.remediation).value.form.value.find(function(e5) {
              return e5.name === "channel";
            })) === null || e4 === void 0 ? void 0 : e4.options;
          }}, {key: "getData", value: function() {
            return {authenticator: {id: this.remediation.value[0].value.form.value[0].value, channel: this.values.channel}, stateHandle: this.values.stateHandle};
          }}, {key: "getValuesAfterProceed", value: function() {
            var e4 = this;
            return Object.keys(this.values).filter(function(e5) {
              return e5 !== "channel";
            }).reduce(function(t4, n4) {
              return We(We({}, t4), {}, (0, o.Z)({}, n4, e4.values[n4]));
            }, {});
          }}]), i2;
        }(ke);
        function Je(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function Qe(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? Je(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Je(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        (0, o.Z)(ze, "remediationName", "select-enrollment-channel");
        var $e = function(e3) {
          (0, we.Z)(i2, e3);
          var t3, n3, r3 = (t3 = i2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o2 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o2);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function i2() {
            return (0, fe.Z)(this, i2), r3.apply(this, arguments);
          }
          return (0, le.Z)(i2, [{key: "getInputEmail", value: function() {
            return [{name: "email", type: "string", required: true, label: "Email"}];
          }}, {key: "getInputPhoneNumber", value: function() {
            return [{name: "phoneNumber", type: "string", required: true, label: "Phone Number"}];
          }}, {key: "canRemediate", value: function() {
            return Boolean(this.values.email || this.values.phoneNumber);
          }}, {key: "getNextStep", value: function(e4, t4) {
            var n4 = _e((0, Ee.Z)(i2.prototype), "getNextStep", this).call(this, e4, t4), r4 = t4.currentAuthenticator.value;
            return Qe(Qe({}, n4), {}, {authenticator: r4});
          }}, {key: "getData", value: function() {
            return {stateHandle: this.values.stateHandle, email: this.values.email, phoneNumber: this.values.phoneNumber};
          }}, {key: "getValuesAfterProceed", value: function() {
            var e4 = this;
            return Object.keys(this.values).filter(function(e5) {
              return !["email", "phoneNumber"].includes(e5);
            }).reduce(function(t4, n4) {
              return Qe(Qe({}, t4), {}, (0, o.Z)({}, n4, e4.values[n4]));
            }, {});
          }}]), i2;
        }(ke);
        (0, o.Z)($e, "remediationName", "enrollment-channel-data");
        var Xe = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return o2;
        }(He);
        (0, o.Z)(Xe, "remediationName", "challenge-authenticator");
        var et = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return (0, le.Z)(o2, [{key: "canRemediate", value: function() {
            return !!this.values.startPolling || this.options.step === "challenge-poll";
          }}]), o2;
        }(qe);
        (0, o.Z)(et, "remediationName", "challenge-poll");
        var tt = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return o2;
        }(He);
        function nt(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function rt(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? nt(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : nt(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        (0, o.Z)(tt, "remediationName", "reset-authenticator");
        var ot = function(e3) {
          (0, we.Z)(i2, e3);
          var t3, n3, r3 = (t3 = i2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o2 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o2);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function i2() {
            return (0, fe.Z)(this, i2), r3.apply(this, arguments);
          }
          return (0, le.Z)(i2, [{key: "canRemediate", value: function() {
            var e4 = this.getData().userProfile;
            return !!e4 && this.remediation.value.find(function(e5) {
              return e5.name === "userProfile";
            }).form.value.reduce(function(t4, n4) {
              return n4.required && (t4 = t4 && !!e4[n4.name]), t4;
            }, true);
          }}, {key: "mapUserProfile", value: function(e4) {
            var t4 = this, n4 = e4.form.value.map(function(e5) {
              return e5.name;
            }).reduce(function(e5, n5) {
              return t4.values[n5] ? rt(rt({}, e5), {}, (0, o.Z)({}, n5, t4.values[n5])) : e5;
            }, {});
            if (Object.keys(n4).length !== 0)
              return n4;
          }}, {key: "getInputUserProfile", value: function(e4) {
            return (0, b.Z)(e4.form.value);
          }}, {key: "getErrorMessages", value: function(e4) {
            return e4.value[0].form.value.reduce(function(e5, t4) {
              return t4.messages && e5.push(t4.messages.value[0].message), e5;
            }, []);
          }}]), i2;
        }(ke);
        function it(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function at(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? it(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : it(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        (0, o.Z)(ot, "remediationName", "enroll-profile");
        var ut = function(e3) {
          (0, we.Z)(i2, e3);
          var t3, n3, r3 = (t3 = i2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o2 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o2);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function i2() {
            var e4;
            (0, fe.Z)(this, i2);
            for (var t4 = arguments.length, n4 = new Array(t4), a2 = 0; a2 < t4; a2++)
              n4[a2] = arguments[a2];
            return e4 = r3.call.apply(r3, [this].concat(n4)), (0, o.Z)((0, Se.Z)(e4), "map", {identifier: ["username"]}), e4;
          }
          return (0, le.Z)(i2, [{key: "canRemediate", value: function() {
            return !!this.getData().identifier;
          }}, {key: "mapCredentials", value: function() {
            var e4 = this.values, t4 = e4.credentials, n4 = e4.password;
            if (t4 || n4)
              return t4 || {passcode: n4};
          }}, {key: "getInputCredentials", value: function(e4) {
            return at(at({}, e4.form.value[0]), {}, {name: "password", required: e4.required});
          }}]), i2;
        }(ke);
        function st(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function ct(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? st(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : st(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        (0, o.Z)(ut, "remediationName", "identify");
        var ft = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return (0, le.Z)(o2, [{key: "mapCredentials", value: function() {
            var e4 = this.values.newPassword;
            if (e4)
              return {passcode: e4};
          }}, {key: "getInputCredentials", value: function(e4) {
            var t4 = this.getAuthenticator().type === "password" ? "newPassword" : "verificationCode";
            return ct(ct({}, e4.form.value[0]), {}, {name: t4});
          }}]), o2;
        }(ke);
        (0, o.Z)(ft, "remediationName", "reenroll-authenticator");
        var lt = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return (0, le.Z)(o2, [{key: "canRemediate", value: function() {
            return false;
          }}, {key: "getNextStep", value: function() {
            var e4 = this.remediation;
            return {name: e4.name, type: e4.type, idp: e4.idp, href: e4.href};
          }}]), o2;
        }(ke);
        function pt(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function ht(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? pt(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : pt(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function dt(e3, t3) {
          (t3 == null || t3 > e3.length) && (t3 = e3.length);
          for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
            r3[n3] = e3[n3];
          return r3;
        }
        (0, o.Z)(lt, "remediationName", "redirect-idp");
        var vt = function(e3) {
          (0, we.Z)(i2, e3);
          var t3, n3, r3 = (t3 = i2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o2 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o2);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function i2() {
            var e4;
            (0, fe.Z)(this, i2);
            for (var t4 = arguments.length, n4 = new Array(t4), a2 = 0; a2 < t4; a2++)
              n4[a2] = arguments[a2];
            return e4 = r3.call.apply(r3, [this].concat(n4)), (0, o.Z)((0, Se.Z)(e4), "selectedAuthenticator", void 0), (0, o.Z)((0, Se.Z)(e4), "selectedOption", void 0), e4;
          }
          return (0, le.Z)(i2, [{key: "findMatchedOption", value: function(e4, t4) {
            var n4, r4, o2 = function(e5, t5) {
              var n5 = typeof Symbol != "undefined" && e5[Symbol.iterator] || e5["@@iterator"];
              if (!n5) {
                if (Array.isArray(e5) || (n5 = function(e6, t6) {
                  if (e6) {
                    if (typeof e6 == "string")
                      return dt(e6, t6);
                    var n6 = Object.prototype.toString.call(e6).slice(8, -1);
                    return n6 === "Object" && e6.constructor && (n6 = e6.constructor.name), n6 === "Map" || n6 === "Set" ? Array.from(e6) : n6 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n6) ? dt(e6, t6) : void 0;
                  }
                }(e5)) || t5 && e5 && typeof e5.length == "number") {
                  n5 && (e5 = n5);
                  var r5 = 0, o3 = function() {
                  };
                  return {s: o3, n: function() {
                    return r5 >= e5.length ? {done: true} : {done: false, value: e5[r5++]};
                  }, e: function(e6) {
                    throw e6;
                  }, f: o3};
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var i4, a2 = true, u2 = false;
              return {s: function() {
                n5 = n5.call(e5);
              }, n: function() {
                var e6 = n5.next();
                return a2 = e6.done, e6;
              }, e: function(e6) {
                u2 = true, i4 = e6;
              }, f: function() {
                try {
                  a2 || n5.return == null || n5.return();
                } finally {
                  if (u2)
                    throw i4;
                }
              }};
            }(e4);
            try {
              var i3 = function() {
                var e5 = r4.value;
                if (n4 = t4.find(function(t5) {
                  return t5.relatesTo.key === e5.key;
                }))
                  return "break";
              };
              for (o2.s(); !(r4 = o2.n()).done && i3() !== "break"; )
                ;
            } catch (e5) {
              o2.e(e5);
            } finally {
              o2.f();
            }
            return n4;
          }}, {key: "canRemediate", value: function() {
            var e4 = this.values, t4 = e4.authenticators, n4 = e4.authenticator, r4 = he(this.remediation).options;
            return !!(t4 && t4.length && ((0, de.H)(n4) && n4.id || this.findMatchedOption(t4, r4)));
          }}, {key: "getNextStep", value: function(e4) {
            var t4 = _e((0, Ee.Z)(i2.prototype), "getNextStep", this).call(this, e4), n4 = he(this.remediation).options.map(function(e5) {
              var t5 = e5;
              return {label: t5.label, value: t5.relatesTo.key};
            });
            return ht(ht({}, t4), {}, {options: n4});
          }}, {key: "mapAuthenticator", value: function(e4) {
            var t4 = this.values, n4 = t4.authenticators, r4 = t4.authenticator;
            if ((0, de.H)(r4) && r4.id)
              return this.selectedAuthenticator = r4, r4;
            var o2 = function(e5, t5) {
              var n5, r5, o3 = function(e6, t6) {
                var n6 = typeof Symbol != "undefined" && e6[Symbol.iterator] || e6["@@iterator"];
                if (!n6) {
                  if (Array.isArray(e6) || (n6 = function(e7, t7) {
                    if (e7) {
                      if (typeof e7 == "string")
                        return ve(e7, t7);
                      var n7 = Object.prototype.toString.call(e7).slice(8, -1);
                      return n7 === "Object" && e7.constructor && (n7 = e7.constructor.name), n7 === "Map" || n7 === "Set" ? Array.from(e7) : n7 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n7) ? ve(e7, t7) : void 0;
                    }
                  }(e6)) || t6 && e6 && typeof e6.length == "number") {
                    n6 && (e6 = n6);
                    var r6 = 0, o4 = function() {
                    };
                    return {s: o4, n: function() {
                      return r6 >= e6.length ? {done: true} : {done: false, value: e6[r6++]};
                    }, e: function(e7) {
                      throw e7;
                    }, f: o4};
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i4, a2 = true, u2 = false;
                return {s: function() {
                  n6 = n6.call(e6);
                }, n: function() {
                  var e7 = n6.next();
                  return a2 = e7.done, e7;
                }, e: function(e7) {
                  u2 = true, i4 = e7;
                }, f: function() {
                  try {
                    a2 || n6.return == null || n6.return();
                  } finally {
                    if (u2)
                      throw i4;
                  }
                }};
              }(e5);
              try {
                var i3 = function() {
                  var e6 = r5.value;
                  if (n5 = t5.find(function(t6) {
                    return t6.relatesTo.key === e6.key;
                  }))
                    return "break";
                };
                for (o3.s(); !(r5 = o3.n()).done && i3() !== "break"; )
                  ;
              } catch (e6) {
                o3.e(e6);
              } finally {
                o3.f();
              }
              return n5;
            }(n4, e4.options);
            return this.selectedAuthenticator = o2.relatesTo, this.selectedOption = o2, {id: o2 == null ? void 0 : o2.value.form.value.find(function(e5) {
              return e5.name === "id";
            }).value};
          }}, {key: "getInputAuthenticator", value: function(e4) {
            return {name: "authenticator", type: "string", options: e4.options.map(function(e5) {
              return {label: e5.label, value: e5.relatesTo.key};
            })};
          }}, {key: "getValuesAfterProceed", value: function() {
            var e4 = this;
            this.values = _e((0, Ee.Z)(i2.prototype), "getValuesAfterProceed", this).call(this);
            var t4 = this.values.authenticators.filter(function(t5) {
              return ge(t5, e4.selectedAuthenticator) !== true;
            });
            return ht(ht({}, this.values), {}, {authenticators: t4});
          }}]), i2;
        }(ke);
        var yt = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2(e4) {
            var t4, n4, i2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            (0, fe.Z)(this, o2);
            var u2 = (n4 = r3.call(this, e4, i2, a2)).options.flow === "recoverPassword", s2 = (t4 = he(e4).options) === null || t4 === void 0 ? void 0 : t4.some(function(e5) {
              var t5 = e5.relatesTo;
              return (t5 == null ? void 0 : t5.key) === de.pc.OKTA_PASSWORD;
            });
            return s2 && (u2 || n4.values.password) && (n4.values.authenticators = [].concat((0, b.Z)(n4.values.authenticators || []), [{key: de.pc.OKTA_PASSWORD}])), n4;
          }
          return o2;
        }(vt);
        (0, o.Z)(yt, "remediationName", "select-authenticator-authenticate");
        var gt = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return o2;
        }(vt);
        function mt(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function bt(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? mt(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : mt(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        (0, o.Z)(gt, "remediationName", "select-authenticator-enroll");
        var Ot = function(e3) {
          (0, we.Z)(i2, e3);
          var t3, n3, r3 = (t3 = i2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o2 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o2);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function i2() {
            var e4;
            (0, fe.Z)(this, i2);
            for (var t4 = arguments.length, n4 = new Array(t4), a2 = 0; a2 < t4; a2++)
              n4[a2] = arguments[a2];
            return e4 = r3.call.apply(r3, [this].concat(n4)), (0, o.Z)((0, Se.Z)(e4), "authenticator", void 0), (0, o.Z)((0, Se.Z)(e4), "map", {identifier: ["username"]}), e4;
          }
          return (0, le.Z)(i2, [{key: "canRemediate", value: function() {
            return !!this.getData("identifier") && _e((0, Ee.Z)(i2.prototype), "canRemediate", this).call(this);
          }}, {key: "mapAuthenticator", value: function(e4) {
            var t4, n4, r4, o2 = _e((0, Ee.Z)(i2.prototype), "mapAuthenticator", this).call(this, e4), a2 = (t4 = this.selectedOption) === null || t4 === void 0 ? void 0 : t4.value.form.value.find(function(e5) {
              return e5.name === "methodType";
            }), u2 = this.values.methodType || (a2 == null ? void 0 : a2.value) || (a2 == null || (n4 = a2.options) === null || n4 === void 0 || (r4 = n4[0]) === null || r4 === void 0 ? void 0 : r4.value);
            return u2 ? bt(bt({}, o2), {}, {methodType: u2}) : o2;
          }}, {key: "getInputUsername", value: function() {
            return {name: "username", type: "string"};
          }}]), i2;
        }(vt);
        (0, o.Z)(Ot, "remediationName", "select-authenticator-unlock-account");
        var kt = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return (0, le.Z)(o2, [{key: "canRemediate", value: function() {
            return true;
          }}]), o2;
        }(ke);
        function wt(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function Tt(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? wt(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : wt(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        (0, o.Z)(kt, "remediationName", "select-enroll-profile");
        var Et = function(e3) {
          (0, we.Z)(i2, e3);
          var t3, n3, r3 = (t3 = i2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o2 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o2);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function i2(e4) {
            var t4, n4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return (0, fe.Z)(this, i2), t4 = r3.call(this, e4, n4), (0, o.Z)((0, Se.Z)(t4), "authenticator", void 0), t4.authenticator = t4.getAuthenticator(), t4.formatAuthenticatorData(), t4;
          }
          return (0, le.Z)(i2, [{key: "formatAuthenticatorData", value: function() {
            var e4 = this;
            if (this.getAuthenticatorData())
              this.values.authenticatorsData = this.values.authenticatorsData.map(function(t5) {
                return ge(e4.authenticator, t5) ? e4.mapAuthenticatorDataFromValues(t5) : t5;
              });
            else {
              var t4 = this.mapAuthenticatorDataFromValues();
              t4 && this.values.authenticatorsData.push(t4);
            }
          }}, {key: "getAuthenticatorData", value: function() {
            var e4 = this;
            return this.values.authenticatorsData.find(function(t4) {
              return ge(e4.authenticator, t4);
            });
          }}, {key: "canRemediate", value: function() {
            var e4 = this;
            return this.values.authenticatorsData.some(function(t4) {
              return ge(e4.authenticator, t4);
            });
          }}, {key: "getNextStep", value: function(e4) {
            var t4 = _e((0, Ee.Z)(i2.prototype), "getNextStep", this).call(this, e4), n4 = this.getMethodTypes();
            return Tt(Tt({}, t4), n4 && {options: n4});
          }}, {key: "mapAuthenticatorDataFromValues", value: function(e4) {
            var t4 = this.values, n4 = t4.methodType, r4 = t4.authenticator;
            !n4 && (0, de.H)(r4) && (n4 = r4 == null ? void 0 : r4.methodType);
            var o2 = this.authenticator, i3 = Tt(Tt({id: o2.id, enrollmentId: o2.enrollmentId}, e4 && e4), n4 && {methodType: n4});
            return i3.methodType ? i3 : null;
          }}, {key: "getAuthenticatorFromRemediation", value: function() {
            return this.remediation.value.find(function(e4) {
              return e4.name === "authenticator";
            });
          }}, {key: "getMethodTypes", value: function() {
            var e4;
            return (e4 = this.getAuthenticatorFromRemediation().form.value.find(function(e5) {
              return e5.name === "methodType";
            })) === null || e4 === void 0 ? void 0 : e4.options;
          }}, {key: "getValuesAfterProceed", value: function() {
            var e4 = this;
            this.values = _e((0, Ee.Z)(i2.prototype), "getValuesAfterProceed", this).call(this);
            var t4 = this.values.authenticatorsData.filter(function(t5) {
              return ge(e4.authenticator, t5) !== true;
            });
            return Tt(Tt({}, this.values), {}, {authenticatorsData: t4});
          }}]), i2;
        }(ke);
        function St(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function _t(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? St(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : St(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        var At = function(e3) {
          (0, we.Z)(i2, e3);
          var t3, n3, r3 = (t3 = i2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o2 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o2);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function i2(e4) {
            var t4, n4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return (0, fe.Z)(this, i2), t4 = r3.call(this, e4, n4), (0, o.Z)((0, Se.Z)(t4), "shouldProceedWithEmailAuthenticator", void 0), t4.shouldProceedWithEmailAuthenticator = a2.shouldProceedWithEmailAuthenticator !== false && t4.authenticator.methods.length === 1 && t4.authenticator.methods[0].type === "email", t4;
          }
          return (0, le.Z)(i2, [{key: "canRemediate", value: function() {
            return this.shouldProceedWithEmailAuthenticator !== false || _e((0, Ee.Z)(i2.prototype), "canRemediate", this).call(this);
          }}, {key: "mapAuthenticator", value: function() {
            var e4;
            return this.shouldProceedWithEmailAuthenticator !== false ? (e4 = this.getAuthenticatorFromRemediation().form) === null || e4 === void 0 ? void 0 : e4.value.reduce(function(e5, t4) {
              if (t4.value)
                e5[t4.name] = t4.value;
              else {
                if (!t4.options)
                  throw new ae.R("Unsupported authenticator data type: ".concat(t4));
                e5[t4.name] = t4.options[0].value;
              }
              return e5;
            }, {}) : this.getAuthenticatorData();
          }}, {key: "getInputAuthenticator", value: function() {
            var e4 = this.getAuthenticatorFromRemediation(), t4 = e4.form.value.find(function(e5) {
              return e5.name === "methodType";
            });
            return t4 && t4.options ? {name: "methodType", type: "string", required: true, options: t4.options} : (0, b.Z)(e4.form.value);
          }}, {key: "getValuesAfterProceed", value: function() {
            var e4 = this;
            return this.values = _e((0, Ee.Z)(i2.prototype), "getValuesAfterProceed", this).call(this), Object.keys(this.values).filter(function(e5) {
              return e5 !== "authenticator";
            }).reduce(function(t4, n4) {
              return _t(_t({}, t4), {}, (0, o.Z)({}, n4, e4.values[n4]));
            }, {});
          }}]), i2;
        }(Et);
        function Pt(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function Rt(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? Pt(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Pt(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        (0, o.Z)(At, "remediationName", "authenticator-verification-data");
        var xt = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return (0, le.Z)(o2, [{key: "mapAuthenticator", value: function() {
            var e4 = this.getAuthenticatorData();
            return {id: he(this.remediation).form.value.find(function(e5) {
              return e5.name === "id";
            }).value, methodType: e4.methodType, phoneNumber: e4.phoneNumber};
          }}, {key: "getInputAuthenticator", value: function(e4) {
            return [{name: "methodType", type: "string"}, {name: "phoneNumber", label: "Phone Number", type: "string"}].map(function(t4) {
              return Rt(Rt({}, e4.form.value.find(function(e5) {
                return e5.name === t4.name;
              })), t4);
            });
          }}, {key: "mapAuthenticatorDataFromValues", value: function(e4) {
            e4 = _e((0, Ee.Z)(o2.prototype), "mapAuthenticatorDataFromValues", this).call(this, e4);
            var t4 = this.values.phoneNumber;
            if (e4 || t4)
              return Rt(Rt({}, e4 && e4), t4 && {phoneNumber: t4});
          }}]), o2;
        }(Et);
        (0, o.Z)(xt, "remediationName", "authenticator-enrollment-data");
        var jt = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return (0, le.Z)(o2, [{key: "canRemediate", value: function() {
            return !!this.values.skip || this.options.step === "skip";
          }}]), o2;
        }(ke);
        function Zt(e3) {
          for (var t3 = {}, n3 = 0, r3 = Object.entries(e3); n3 < r3.length; n3++) {
            var o2 = (0, O.Z)(r3[n3], 2), i2 = o2[0], a2 = o2[1];
            if (a2 != null)
              if (Array.isArray(a2))
                t3[i2] = a2.map(Zt);
              else if ((0, w.Z)(a2) === "object") {
                var u2 = Object.keys(a2);
                if (["value", "form"].includes(i2) && u2.length === 1 && ["value", "form"].includes(u2[0])) {
                  var s2 = Zt(a2);
                  Object.entries(s2).forEach(function(e4) {
                    var n4 = (0, O.Z)(e4, 2), r4 = n4[0], o3 = n4[1];
                    t3[r4] = o3;
                  });
                } else
                  t3[i2] = Zt(a2);
              } else
                t3[i2] = a2;
          }
          return t3;
        }
        function Ct(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function Dt(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? Ct(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Ct(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function It(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n3 = (0, c.uN)(e3, t3);
          return !(!n3 && !t3.stateHandle);
        }
        function Mt(e3) {
          return Nt.apply(this, arguments);
        }
        function Nt() {
          return Nt = (0, i.Z)(u().mark(function e3(t3) {
            var n3, r3, o2, i2, a2 = arguments;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (n3 = a2.length > 1 && a2[1] !== void 0 ? a2[1] : {}, It(t3, n3)) {
                      e4.next = 3;
                      break;
                    }
                    throw new ae.R("Unable to proceed: saved transaction could not be loaded");
                  case 3:
                    return r3 = n3.flow, o2 = n3.state, r3 || (i2 = (0, c.uN)(t3, {state: o2}), r3 = i2 == null ? void 0 : i2.flow), e4.abrupt("return", xn(t3, Dt(Dt({}, n3), {}, {flow: r3})));
                  case 6:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), Nt.apply(this, arguments);
        }
        (0, o.Z)(jt, "remediationName", "skip");
        var Ut = ["href", "method", "rel", "accepts", "produces", "value", "action"];
        function Lt(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function Ft(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? Lt(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Lt(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        var Kt = function(e3) {
          (0, we.Z)(o2, e3);
          var t3, n3, r3 = (t3 = o2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o3 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o3);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function o2() {
            return (0, fe.Z)(this, o2), r3.apply(this, arguments);
          }
          return (0, le.Z)(o2, [{key: "canRemediate", value: function() {
            var e4 = this;
            return typeof this.remediation.action == "function" && this.getInputs().reduce(function(t4, n4) {
              return t4 && function(e5, t5) {
                return function e6(t6, n5, r4) {
                  var o3 = t6.name, i2 = t6.value, a2 = t6.type, u2 = t6.options, s2 = t6.required, c2 = s2 || r4;
                  if (Array.isArray(i2))
                    return i2.reduce(function(t7, r5) {
                      return t7 && e6(r5, n5[o3], c2);
                    }, true);
                  if (u2) {
                    if (a2 === "object") {
                      var f2 = n5[o3];
                      if (f2 == null || !f2.id)
                        return false;
                      var l2 = u2.find(function(e7) {
                        return e7.value.find(function(e8) {
                          return e8.name === "id";
                        }).value === f2.id;
                      });
                      return !!l2 && l2.value.filter(function(e7) {
                        return !!e7.required;
                      }).reduce(function(e7, t7) {
                        var n6 = t7.name;
                        return e7 && !!f2[n6];
                      }, true);
                    }
                    if (s2 === false)
                      return true;
                    if (s2 === true)
                      return !!n5[o3];
                    throw new ae.R("Unknown options type, ".concat(JSON.stringify(t6)));
                  }
                  return !c2 || !(!n5 || !n5[o3]);
                }(e5, t5, false);
              }(n4, e4.values);
            }, true);
          }}, {key: "getData", value: function() {
            var e4 = this;
            return this.getInputs().reduce(function(t4, n4) {
              var r4 = n4.name;
              return t4[r4] = e4.values[r4], t4;
            }, {});
          }}, {key: "getNextStep", value: function(e4, t4) {
            var n4, r4 = this.getName(), o3 = this.getInputs(), a2 = this.remediation, s2 = (a2.href, a2.method, a2.rel, a2.accepts, a2.produces, a2.value, a2.action), c2 = (0, k.Z)(a2, Ut);
            return s2 ? Ft(Ft(Ft({}, c2), !!o3.length && {inputs: o3}), {}, {action: (n4 = (0, i.Z)(u().mark(function t5(n5) {
              return u().wrap(function(t6) {
                for (; ; )
                  switch (t6.prev = t6.next) {
                    case 0:
                      return t6.abrupt("return", Mt(e4, Ft({step: r4}, n5)));
                    case 1:
                    case "end":
                      return t6.stop();
                  }
              }, t5);
            })), function(e5) {
              return n4.apply(this, arguments);
            })}) : Ft({}, this.remediation);
          }}, {key: "getInputs", value: function() {
            return (this.remediation.value || []).filter(function(e4) {
              return e4.name !== "stateHandle";
            }).map(Zt).map(function(e4) {
              return e4.type = e4.type || "string", e4;
            });
          }}]), o2;
        }(ke);
        function Ht(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function Bt(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? Ht(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Ht(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function Gt(e3, t3) {
          var n3 = typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
          if (!n3) {
            if (Array.isArray(e3) || (n3 = function(e4, t4) {
              if (e4) {
                if (typeof e4 == "string")
                  return Vt(e4, t4);
                var n4 = Object.prototype.toString.call(e4).slice(8, -1);
                return n4 === "Object" && e4.constructor && (n4 = e4.constructor.name), n4 === "Map" || n4 === "Set" ? Array.from(e4) : n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? Vt(e4, t4) : void 0;
              }
            }(e3)) || t3 && e3 && typeof e3.length == "number") {
              n3 && (e3 = n3);
              var r3 = 0, o2 = function() {
              };
              return {s: o2, n: function() {
                return r3 >= e3.length ? {done: true} : {done: false, value: e3[r3++]};
              }, e: function(e4) {
                throw e4;
              }, f: o2};
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var i2, a2 = true, u2 = false;
          return {s: function() {
            n3 = n3.call(e3);
          }, n: function() {
            var e4 = n3.next();
            return a2 = e4.done, e4;
          }, e: function(e4) {
            u2 = true, i2 = e4;
          }, f: function() {
            try {
              a2 || n3.return == null || n3.return();
            } finally {
              if (u2)
                throw i2;
            }
          }};
        }
        function Vt(e3, t3) {
          (t3 == null || t3 > e3.length) && (t3 = e3.length);
          for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
            r3[n3] = e3[n3];
          return r3;
        }
        function qt(e3) {
          var t3 = e3.neededToProceed, n3 = e3.interactionCode;
          return !t3.length && !n3;
        }
        function Yt(e3) {
          if (e3 && Array.isArray(e3))
            return e3.reduce(function(e4, t3) {
              if (t3.messages && (e4 = [].concat((0, b.Z)(e4), (0, b.Z)(t3.messages.value))), t3.form) {
                var n3 = Yt(t3.form.value) || [];
                e4 = [].concat((0, b.Z)(e4), (0, b.Z)(n3));
              }
              if (t3.options) {
                var r3 = [];
                t3.options.forEach(function(e5) {
                  e5.value && typeof e5.value != "string" && (r3 = [].concat((0, b.Z)(r3), [e5.value]));
                });
                var o2 = Yt(r3) || [];
                e4 = [].concat((0, b.Z)(e4), (0, b.Z)(o2));
              }
              return e4;
            }, []);
        }
        function Wt(e3) {
          var t3, n3 = [], r3 = e3.rawIdxState, o2 = e3.neededToProceed, i2 = (t3 = r3.messages) === null || t3 === void 0 ? void 0 : t3.value.map(function(e4) {
            return e4;
          });
          i2 && (n3 = [].concat((0, b.Z)(n3), (0, b.Z)(i2)));
          var a2, u2 = Gt(o2);
          try {
            for (u2.s(); !(a2 = u2.n()).done; ) {
              var s2 = Yt(a2.value.value);
              s2 && (n3 = [].concat((0, b.Z)(n3), (0, b.Z)(s2)));
            }
          } catch (e4) {
            u2.e(e4);
          } finally {
            u2.f();
          }
          var c2 = {};
          return n3.reduce(function(e4, t4) {
            var n4, r4 = (n4 = t4.i18n) === null || n4 === void 0 ? void 0 : n4.key;
            return r4 && c2[r4] ? e4 : (c2[r4] = t4, e4 = [].concat((0, b.Z)(e4), [t4]));
          }, []);
        }
        function zt(e3) {
          var t3 = [], n3 = e3.actions, r3 = e3.neededToProceed;
          return n3["currentAuthenticator-recover"] && t3.push(de.Fw.PASSWORD_RECOVERY), r3.some(function(e4) {
            return e4.name === "select-enroll-profile";
          }) && t3.push(de.Fw.REGISTRATION), r3.some(function(e4) {
            return e4.name === "redirect-idp";
          }) && t3.push(de.Fw.SOCIAL_IDP), r3.some(function(e4) {
            return e4.name === "unlock-account";
          }) && t3.push(de.Fw.ACCOUNT_UNLOCK), t3;
        }
        function Jt(e3, t3, n3) {
          var o2, a2 = [], s2 = Object.values(r2).reduce(function(e4, t4) {
            return t4.remediationName && (e4[t4.remediationName] = t4), e4;
          }, {}), c2 = Gt(t3.neededToProceed);
          try {
            for (c2.s(); !(o2 = c2.n()).done; ) {
              var f2 = o2.value, l2 = $t(f2, {useGenericRemediator: n3, remediators: s2});
              if (l2) {
                var p2 = new l2(f2);
                a2.push(p2.getNextStep(e3, t3.context));
              }
            }
          } catch (e4) {
            c2.e(e4);
          } finally {
            c2.f();
          }
          for (var h2 = function() {
            var t4, n4 = (0, O.Z)(v2[d2], 1)[0];
            a2.push({name: n4, action: (t4 = (0, i.Z)(u().mark(function t5(r3) {
              return u().wrap(function(t6) {
                for (; ; )
                  switch (t6.prev = t6.next) {
                    case 0:
                      return t6.abrupt("return", Mt(e3, {actions: [{name: n4, params: r3}]}));
                    case 1:
                    case "end":
                      return t6.stop();
                  }
              }, t5);
            })), function(e4) {
              return t4.apply(this, arguments);
            })});
          }, d2 = 0, v2 = Object.entries(t3.actions || {}); d2 < v2.length; d2++)
            h2();
          return a2;
        }
        function Qt(e3, t3, n3) {
          var r3 = (e3.neededToProceed || []).find(function(e4) {
            return e4.name === t3;
          });
          return r3 ? r3.value.reduce(function(e4, t4) {
            var r4 = t4.name, o2 = t4.value;
            return e4[r4] = r4 === "stateHandle" ? o2 : n3[r4], e4;
          }, {}) : ((0, ce.ZK)('filterValuesForRemediation: "'.concat(t3, '" did not match any remediations')), n3);
        }
        function $t(e3, t3) {
          var n3 = t3.useGenericRemediator, r3 = t3.remediators;
          if (e3)
            return n3 ? Kt : r3[e3.name];
        }
        function Xt(e3, t3, n3) {
          var r3, o2 = n3.remediators, i2 = n3.useGenericRemediator;
          if (!n3.step) {
            var a2 = [];
            if (i2)
              a2.push(new Kt(e3[0], t3, n3));
            else {
              var u2, s2 = Gt(e3);
              try {
                for (s2.s(); !(u2 = s2.n()).done; ) {
                  var c2 = u2.value;
                  if (Object.keys(o2).includes(c2.name)) {
                    if ((r3 = new ($t(c2, n3))(c2, t3, n3)).canRemediate())
                      return r3;
                    a2.push(r3);
                  }
                }
              } catch (e4) {
                s2.e(e4);
              } finally {
                s2.f();
              }
            }
            return a2[0];
          }
          var f2 = e3.find(function(e4) {
            return e4.name === n3.step;
          });
          if (f2) {
            var l2 = $t(f2, n3);
            return l2 ? new l2(f2, t3, n3) : void 0;
          }
          (0, ce.ZK)('step "'.concat(n3.step, '" did not match any remediations'));
        }
        function en(e3, t3, n3) {
          var r3 = t3.getNextStep(e3, n3.context), o2 = function(e4) {
            return e4.neededToProceed.some(function(e5) {
              return e5.name === "skip";
            });
          }(n3), i2 = function(e4) {
            return Object.keys(e4.actions).some(function(e5) {
              return e5.includes("resend");
            });
          }(n3);
          return Bt(Bt(Bt({}, r3), o2 && {canSkip: o2}), i2 && {canResend: i2});
        }
        function tn(e3, t3, n3) {
          var r3 = (0, ie.f)(t3) ? t3 : null;
          if (!r3)
            throw t3;
          var o2 = qt(r3 = Bt(Bt({}, r3), {}, {requestDidSucceed: false})), i2 = Wt(r3);
          if (o2)
            return {idxResponse: r3, terminal: o2, messages: i2};
          var a2 = n3 && en(e3, n3, r3);
          return Bt({idxResponse: r3, messages: i2}, a2 && {nextStep: a2});
        }
        function nn(e3, t3) {
          var n3 = typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
          if (!n3) {
            if (Array.isArray(e3) || (n3 = function(e4, t4) {
              if (e4) {
                if (typeof e4 == "string")
                  return rn(e4, t4);
                var n4 = Object.prototype.toString.call(e4).slice(8, -1);
                return n4 === "Object" && e4.constructor && (n4 = e4.constructor.name), n4 === "Map" || n4 === "Set" ? Array.from(e4) : n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? rn(e4, t4) : void 0;
              }
            }(e3)) || t3 && e3 && typeof e3.length == "number") {
              n3 && (e3 = n3);
              var r3 = 0, o2 = function() {
              };
              return {s: o2, n: function() {
                return r3 >= e3.length ? {done: true} : {done: false, value: e3[r3++]};
              }, e: function(e4) {
                throw e4;
              }, f: o2};
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var i2, a2 = true, u2 = false;
          return {s: function() {
            n3 = n3.call(e3);
          }, n: function() {
            var e4 = n3.next();
            return a2 = e4.done, e4;
          }, e: function(e4) {
            u2 = true, i2 = e4;
          }, f: function() {
            try {
              a2 || n3.return == null || n3.return();
            } finally {
              if (u2)
                throw i2;
            }
          }};
        }
        function rn(e3, t3) {
          (t3 == null || t3 > e3.length) && (t3 = e3.length);
          for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
            r3[n3] = e3[n3];
          return r3;
        }
        function on(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function an(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? on(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : on(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function un(e3, t3) {
          return Object.keys(t3.actions).find(function(t4) {
            return !!e3.resend && t4.includes("-resend");
          });
        }
        function sn(e3) {
          return an(an({}, e3), {}, {resend: void 0});
        }
        function cn(e3, t3) {
          var n3 = e3.actions || [];
          return n3 = n3.filter(function(e4) {
            return typeof e4 == "string" ? e4 !== t3 : e4.name !== t3;
          }), an(an({}, e3), {}, {actions: n3});
        }
        function fn(e3, t3, n3, r3) {
          return ln.apply(this, arguments);
        }
        function ln() {
          return (ln = (0, i.Z)(u().mark(function e3(t3, n3, r3, o2) {
            var i2, a2, s2, c2, f2, l2, p2, h2, d2, v2, y2, g2, m2, O2, k2, T2, E2;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (a2 = (i2 = n3).neededToProceed, s2 = i2.interactionCode, c2 = o2.flow, !s2) {
                      e4.next = 4;
                      break;
                    }
                    return e4.abrupt("return", {idxResponse: n3});
                  case 4:
                    if (f2 = Xt(a2, r3, o2), l2 = un(r3, n3), p2 = o2.actions || [], !(h2 = [].concat((0, b.Z)(p2), (0, b.Z)(l2 && [l2] || [])))) {
                      e4.next = 28;
                      break;
                    }
                    d2 = nn(h2), e4.prev = 10, y2 = u().mark(function e5() {
                      var i3, s3, c3, l3;
                      return u().wrap(function(e6) {
                        for (; ; )
                          switch (e6.prev = e6.next) {
                            case 0:
                              if (i3 = v2.value, s3 = {}, typeof i3 != "string" && (s3 = i3.params || {}, i3 = i3.name), c3 = sn(r3), l3 = cn(o2, i3), typeof n3.actions[i3] != "function") {
                                e6.next = 19;
                                break;
                              }
                              return e6.prev = 6, e6.next = 9, n3.actions[i3](s3);
                            case 9:
                              n3 = an(an({}, n3 = e6.sent), {}, {requestDidSucceed: true}), e6.next = 16;
                              break;
                            case 13:
                              return e6.prev = 13, e6.t0 = e6.catch(6), e6.abrupt("return", {v: tn(t3, e6.t0, f2)});
                            case 16:
                              if (i3 !== "cancel") {
                                e6.next = 18;
                                break;
                              }
                              return e6.abrupt("return", {v: {idxResponse: n3, canceled: true}});
                            case 18:
                              return e6.abrupt("return", {v: fn(t3, n3, c3, l3)});
                            case 19:
                              if (!a2.find(function(e7) {
                                return e7.name === i3;
                              })) {
                                e6.next = 32;
                                break;
                              }
                              return e6.prev = 21, e6.next = 24, n3.proceed(i3, s3);
                            case 24:
                              n3 = an(an({}, n3 = e6.sent), {}, {requestDidSucceed: true}), e6.next = 31;
                              break;
                            case 28:
                              return e6.prev = 28, e6.t1 = e6.catch(21), e6.abrupt("return", {v: tn(t3, e6.t1, f2)});
                            case 31:
                              return e6.abrupt("return", {v: fn(t3, n3, r3, l3)});
                            case 32:
                            case "end":
                              return e6.stop();
                          }
                      }, e5, null, [[6, 13], [21, 28]]);
                    }), d2.s();
                  case 13:
                    if ((v2 = d2.n()).done) {
                      e4.next = 20;
                      break;
                    }
                    return e4.delegateYield(y2(), "t0", 15);
                  case 15:
                    if (g2 = e4.t0, (0, w.Z)(g2) !== "object") {
                      e4.next = 18;
                      break;
                    }
                    return e4.abrupt("return", g2.v);
                  case 18:
                    e4.next = 13;
                    break;
                  case 20:
                    e4.next = 25;
                    break;
                  case 22:
                    e4.prev = 22, e4.t1 = e4.catch(10), d2.e(e4.t1);
                  case 25:
                    return e4.prev = 25, d2.f(), e4.finish(25);
                  case 28:
                    if (m2 = qt(n3), O2 = Wt(n3), !m2) {
                      e4.next = 32;
                      break;
                    }
                    return e4.abrupt("return", {idxResponse: n3, terminal: m2, messages: O2});
                  case 32:
                    if (f2) {
                      e4.next = 49;
                      break;
                    }
                    if (!o2.step) {
                      e4.next = 46;
                      break;
                    }
                    return r3 = Qt(n3, o2.step, r3), e4.prev = 35, e4.next = 38, n3.proceed(o2.step, r3);
                  case 38:
                    return n3 = an(an({}, n3 = e4.sent), {}, {requestDidSucceed: true}), e4.abrupt("return", {idxResponse: n3});
                  case 43:
                    return e4.prev = 43, e4.t2 = e4.catch(35), e4.abrupt("return", tn(t3, e4.t2));
                  case 46:
                    if (c2 !== "default") {
                      e4.next = 48;
                      break;
                    }
                    return e4.abrupt("return", {idxResponse: n3});
                  case 48:
                    throw new ae.R("\n      No remediation can match current flow, check policy settings in your org.\n      Remediations: [".concat(a2.reduce(function(e5, t4) {
                      return e5 ? e5 + " ," + t4.name : t4.name;
                    }, ""), "]\n    "));
                  case 49:
                    if (f2.canRemediate()) {
                      e4.next = 52;
                      break;
                    }
                    return k2 = en(t3, f2, n3), e4.abrupt("return", {idxResponse: n3, nextStep: k2, messages: O2.length ? O2 : void 0});
                  case 52:
                    return T2 = f2.getName(), E2 = f2.getData(), e4.prev = 54, e4.next = 57, n3.proceed(T2, E2);
                  case 57:
                    return n3 = an(an({}, n3 = e4.sent), {}, {requestDidSucceed: true}), r3 = f2.getValuesAfterProceed(), o2 = an(an({}, o2), {}, {step: void 0}), e4.abrupt("return", fn(t3, n3, r3, o2));
                  case 64:
                    return e4.prev = 64, e4.t3 = e4.catch(54), e4.abrupt("return", tn(t3, e4.t3, f2));
                  case 67:
                  case "end":
                    return e4.stop();
                }
            }, e3, null, [[10, 22, 25, 28], [35, 43], [54, 64]]);
          }))).apply(this, arguments);
        }
        var pn = {identify: ut, "select-authenticator-authenticate": yt, "select-authenticator-enroll": gt, "authenticator-enrollment-data": xt, "authenticator-verification-data": At, "enroll-authenticator": Be, "challenge-authenticator": Xe, "challenge-poll": et, "reenroll-authenticator": ft, "enroll-poll": qe, "redirect-idp": lt, skip: jt}, hn = {identify: ut, "identify-recovery": ut, "select-authenticator-authenticate": yt, "select-authenticator-enroll": gt, "challenge-authenticator": Xe, "authenticator-verification-data": At, "authenticator-enrollment-data": xt, "reset-authenticator": tt, "reenroll-authenticator": ft, "enroll-poll": qe}, dn = {"select-enroll-profile": kt, "enroll-profile": ot, "authenticator-enrollment-data": xt, "select-authenticator-enroll": gt, "enroll-poll": qe, "select-enrollment-channel": ze, "enrollment-channel-data": $e, "enroll-authenticator": Be, skip: jt}, vn = {identify: ut, "select-authenticator-unlock-account": Ot, "select-authenticator-authenticate": yt, "challenge-authenticator": Xe, "challenge-poll": et, "authenticator-verification-data": At};
        function yn(e3) {
          var t3, n3, r3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", o2 = true;
          switch (r3) {
            case "register":
            case "signup":
            case "enrollProfile":
              t3 = dn, o2 = false;
              break;
            case "recoverPassword":
            case "resetPassword":
              t3 = hn, n3 = ["currentAuthenticator-recover", "currentAuthenticatorEnrollment-recover"], o2 = false;
              break;
            case "unlockAccount":
              t3 = vn, o2 = false, n3 = ["unlock-account"];
              break;
            default:
              t3 = pn;
          }
          return {flow: r3, remediators: t3, actions: n3, withCredentials: o2};
        }
        function gn(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function mn(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? gn(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : gn(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function bn(e3) {
          var t3 = mn({}, e3);
          return ["flow", "remediators", "actions", "withCredentials", "step", "shouldProceedWithEmailAuthenticator"].forEach(function(e4) {
            delete t3[e4];
          }), t3;
        }
        function On(e3, t3) {
          var n3, r3 = t3.options, o2 = r3.flow, i2 = r3.withCredentials, a2 = r3.remediators, u2 = r3.actions, c2 = r3.useGenericRemediator, f2 = s.IdxStatus.PENDING;
          if (o2 = o2 || e3.idx.getFlow() || "default") {
            e3.idx.setFlow(o2);
            var l2 = yn(e3, o2);
            i2 = i2 !== void 0 ? i2 : l2.withCredentials, a2 = a2 || l2.remediators, u2 = u2 || l2.actions;
          }
          return c2 = c2 || ((n3 = e3.options.idx) === null || n3 === void 0 ? void 0 : n3.useGenericRemediator) || false, mn(mn({}, t3), {}, {options: mn(mn({}, r3), {}, {flow: o2, withCredentials: i2, remediators: a2, actions: u2, useGenericRemediator: c2}), status: f2});
        }
        function kn(e3, t3) {
          return wn.apply(this, arguments);
        }
        function wn() {
          return (wn = (0, i.Z)(u().mark(function e3(t3, n3) {
            var r3, o2, i2, a2, s2, f2, l2, p2, h2, d2, v2, g2, m2, b2;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (r3 = n3.options, o2 = r3.stateHandle, i2 = r3.withCredentials, a2 = r3.version, s2 = r3.state, f2 = r3.scopes, l2 = r3.recoveryToken, p2 = r3.activationToken, h2 = r3.maxAge, v2 = (0, c.uN)(t3, {state: s2, recoveryToken: l2, activationToken: p2}), !o2) {
                      e4.next = 9;
                      break;
                    }
                    return e4.next = 6, ue(t3, {withCredentials: i2, version: a2, stateHandle: o2});
                  case 6:
                    d2 = e4.sent, e4.next = 20;
                    break;
                  case 9:
                    if (m2 = (g2 = v2) === null || g2 === void 0 ? void 0 : g2.interactionHandle) {
                      e4.next = 17;
                      break;
                    }
                    return t3.transactionManager.clear(), e4.next = 14, y(t3, {withCredentials: i2, state: s2, scopes: f2, activationToken: p2, recoveryToken: l2, maxAge: h2});
                  case 14:
                    b2 = e4.sent, m2 = b2.interactionHandle, v2 = b2.meta;
                  case 17:
                    return e4.next = 19, ue(t3, {withCredentials: i2, version: a2, interactionHandle: m2});
                  case 19:
                    d2 = e4.sent;
                  case 20:
                    return e4.abrupt("return", mn(mn({}, n3), {}, {idxResponse: d2, meta: v2}));
                  case 21:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        function Tn(e3, t3) {
          return En.apply(this, arguments);
        }
        function En() {
          return (En = (0, i.Z)(u().mark(function e3(t3, n3) {
            var r3, o2, i2, a2, s2, c2, f2, l2, p2, h2, d2, v2, y2, g2;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (r3 = n3.idxResponse, o2 = n3.options, i2 = n3.values, a2 = o2.autoRemediate, s2 = o2.remediators, c2 = o2.actions, f2 = o2.flow, l2 = o2.step, p2 = o2.shouldProceedWithEmailAuthenticator, h2 = o2.useGenericRemediator, a2 !== false && (s2 || c2 || l2)) {
                      e4.next = 5;
                      break;
                    }
                    return e4.abrupt("return", n3);
                  case 5:
                    return i2 = mn(mn({}, i2), {}, {stateHandle: r3.rawIdxState.stateHandle}), e4.next = 8, fn(t3, r3, i2, {remediators: s2, actions: c2, flow: f2, step: l2, shouldProceedWithEmailAuthenticator: p2, useGenericRemediator: h2});
                  case 8:
                    return d2 = e4.sent, v2 = d2.idxResponse, y2 = d2.nextStep, g2 = d2.canceled, r3 = v2, e4.abrupt("return", mn(mn({}, n3), {}, {idxResponse: r3, nextStep: y2, canceled: g2}));
                  case 14:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        function Sn(e3, t3) {
          return _n.apply(this, arguments);
        }
        function _n() {
          return (_n = (0, i.Z)(u().mark(function e3(t3, n3) {
            var r3, o2, i2, a2, s2, c2, f2, l2, p2, h2, d2;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return r3 = n3.meta, o2 = n3.idxResponse, i2 = o2.interactionCode, s2 = (a2 = r3).clientId, c2 = a2.codeVerifier, f2 = a2.ignoreSignature, l2 = a2.redirectUri, p2 = a2.urls, h2 = a2.scopes, e4.next = 5, t3.token.exchangeCodeForTokens({interactionCode: i2, clientId: s2, codeVerifier: c2, ignoreSignature: f2, redirectUri: l2, scopes: h2}, p2);
                  case 5:
                    return d2 = e4.sent, e4.abrupt("return", d2.tokens);
                  case 7:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        function An(e3, t3) {
          return Pn.apply(this, arguments);
        }
        function Pn() {
          return (Pn = (0, i.Z)(u().mark(function e3(t3, n3) {
            var r3, o2, i2, a2, c2, f2, l2, p2, h2, d2, v2, y2, g2, m2, b2, O2;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (r3 = n3.options, o2 = n3.idxResponse, i2 = n3.canceled, a2 = n3.status, c2 = r3.exchangeCodeForTokens, f2 = false, l2 = false, p2 = true, o2 && (f2 = !(!o2.requestDidSucceed && !o2.stepUp), v2 = zt(o2), y2 = Jt(t3, o2, r3.useGenericRemediator), g2 = Wt(o2), m2 = qt(o2)), !m2) {
                      e4.next = 15;
                      break;
                    }
                    a2 = s.IdxStatus.TERMINAL, b2 = Object.keys(o2.actions).length > 0, O2 = !!g2.find(function(e5) {
                      return e5.class === "ERROR";
                    }), b2 || O2 || o2.requestDidSucceed !== true ? f2 = f2 && b2 : l2 = true, p2 = false, e4.next = 32;
                    break;
                  case 15:
                    if (!i2) {
                      e4.next = 20;
                      break;
                    }
                    a2 = s.IdxStatus.CANCELED, l2 = true, e4.next = 32;
                    break;
                  case 20:
                    if (o2 == null || !o2.interactionCode) {
                      e4.next = 32;
                      break;
                    }
                    if (h2 = o2.interactionCode, c2 !== false) {
                      e4.next = 27;
                      break;
                    }
                    a2 = s.IdxStatus.SUCCESS, l2 = false, e4.next = 32;
                    break;
                  case 27:
                    return e4.next = 29, Sn(t3, n3);
                  case 29:
                    d2 = e4.sent, a2 = s.IdxStatus.SUCCESS, l2 = true;
                  case 32:
                    return e4.abrupt("return", mn(mn({}, n3), {}, {status: a2, interactionCode: h2, tokens: d2, shouldSaveResponse: f2, shouldClearTransaction: l2, clearSharedStorage: p2, enabledFeatures: v2, availableSteps: y2, messages: g2, terminal: m2}));
                  case 33:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        function Rn(e3, t3) {
          var n3 = t3.error, r3 = t3.status;
          t3.shouldClearTransaction;
          if (!(0, ie.f)(e3))
            throw e3;
          return n3 = e3, r3 = s.IdxStatus.FAILURE, true, mn(mn({}, t3), {}, {error: n3, status: r3, shouldClearTransaction: true});
        }
        function xn(e3) {
          return jn.apply(this, arguments);
        }
        function jn() {
          return jn = (0, i.Z)(u().mark(function e3(t3) {
            var n3, r3, o2, i2, a2, s2, f2, l2, p2, h2, d2, v2, y2, g2, m2, b2, O2, k2, w2, T2, E2, S2, _2, A2, P2, R2, x2, j2, Z2 = arguments;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return n3 = Z2.length > 1 && Z2[1] !== void 0 ? Z2[1] : {}, r3 = {options: n3, values: bn(n3)}, r3 = On(t3, r3), e4.prev = 3, e4.next = 6, kn(t3, r3);
                  case 6:
                    return r3 = e4.sent, e4.next = 9, Tn(t3, r3);
                  case 9:
                    r3 = e4.sent, e4.next = 15;
                    break;
                  case 12:
                    e4.prev = 12, e4.t0 = e4.catch(3), r3 = Rn(e4.t0, r3);
                  case 15:
                    return e4.next = 17, An(t3, r3);
                  case 17:
                    return r3 = e4.sent, i2 = (o2 = r3).idxResponse, a2 = o2.meta, s2 = o2.shouldSaveResponse, f2 = o2.shouldClearTransaction, l2 = o2.clearSharedStorage, p2 = o2.status, h2 = o2.enabledFeatures, d2 = o2.availableSteps, v2 = o2.tokens, y2 = o2.nextStep, g2 = o2.messages, m2 = o2.error, b2 = o2.interactionCode, f2 ? t3.transactionManager.clear({clearSharedStorage: l2}) : ((0, c.r0)(t3, mn({}, a2)), s2 && (w2 = (k2 = i2).rawIdxState, T2 = k2.requestDidSucceed, t3.transactionManager.saveIdxResponse({rawIdxResponse: w2, requestDidSucceed: T2, stateHandle: (O2 = i2.context) === null || O2 === void 0 ? void 0 : O2.stateHandle, interactionHandle: a2 == null ? void 0 : a2.interactionHandle}))), S2 = (E2 = i2 || {}).actions, _2 = E2.context, A2 = E2.neededToProceed, P2 = E2.proceed, R2 = E2.rawIdxState, x2 = E2.requestDidSucceed, j2 = E2.stepUp, e4.abrupt("return", mn(mn(mn(mn(mn(mn(mn(mn(mn({status: p2}, a2 && {meta: a2}), h2 && {enabledFeatures: h2}), d2 && {availableSteps: d2}), v2 && {tokens: v2}), y2 && {nextStep: y2}), g2 && g2.length && {messages: g2}), m2 && {error: m2}), j2 && {stepUp: j2}), {}, {interactionCode: b2, actions: S2, context: _2, neededToProceed: A2, proceed: P2, rawIdxState: R2, requestDidSucceed: x2}));
                  case 22:
                  case "end":
                    return e4.stop();
                }
            }, e3, null, [[3, 12]]);
          })), jn.apply(this, arguments);
        }
        function Zn(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function Cn(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? Zn(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Zn(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function Dn(e3) {
          return In.apply(this, arguments);
        }
        function In() {
          return In = (0, i.Z)(u().mark(function e3(t3) {
            var n3, r3 = arguments;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return (n3 = r3.length > 1 && r3[1] !== void 0 ? r3[1] : {}).password && !n3.authenticator && (n3.authenticator = s.AuthenticatorKey.OKTA_PASSWORD), e4.abrupt("return", xn(t3, Cn(Cn({}, n3), {}, {flow: "authenticate"})));
                  case 3:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), In.apply(this, arguments);
        }
        function Mn(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function Nn(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? Mn(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Mn(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function Un(e3, t3) {
          return Ln.apply(this, arguments);
        }
        function Ln() {
          return (Ln = (0, i.Z)(u().mark(function e3(t3, n3) {
            var r3, o2;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return r3 = t3.transactionManager.load(), o2 = yn(t3, r3.flow), e4.abrupt("return", xn(t3, Nn(Nn(Nn({}, n3), o2), {}, {actions: ["cancel"]})));
                  case 3:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        var Fn = n2(6245), Kn = n2(1969);
        var Hn = function(e3) {
          (0, we.Z)(i2, e3);
          var t3, n3, r3 = (t3 = i2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r4 = (0, Ee.Z)(t3);
            if (n3) {
              var o2 = (0, Ee.Z)(this).constructor;
              e4 = Reflect.construct(r4, arguments, o2);
            } else
              e4 = r4.apply(this, arguments);
            return (0, Te.Z)(this, e4);
          });
          function i2(e4, t4) {
            var n4;
            return (0, fe.Z)(this, i2), n4 = r3.call(this, "Enter the OTP code in the originating client: ".concat(t4)), (0, o.Z)((0, Se.Z)(n4), "state", void 0), (0, o.Z)((0, Se.Z)(n4), "otp", void 0), n4.name = "EmailVerifyCallbackError", n4.state = e4, n4.otp = t4, n4;
          }
          return i2;
        }(Fn.Z);
        function Bn(e3) {
          return e3.name === "EmailVerifyCallbackError";
        }
        function Gn(e3) {
          return /(otp=)/i.test(e3) && /(state=)/i.test(e3);
        }
        function Vn(e3) {
          return (0, Kn.v)(e3);
        }
        function qn(e3, t3) {
          return Yn.apply(this, arguments);
        }
        function Yn() {
          return (Yn = (0, i.Z)(u().mark(function e3(t3, n3) {
            var r3, o2, i2;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (!Gn(n3)) {
                      e4.next = 9;
                      break;
                    }
                    if (r3 = Vn(n3), o2 = r3.state, i2 = r3.otp, !t3.idx.canProceed({state: o2})) {
                      e4.next = 8;
                      break;
                    }
                    return e4.next = 5, t3.idx.proceed({state: o2, otp: i2});
                  case 5:
                    return e4.abrupt("return", e4.sent);
                  case 8:
                    throw new Hn(o2, i2);
                  case 9:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        function Wn(e3) {
          return zn.apply(this, arguments);
        }
        function zn() {
          return zn = (0, i.Z)(u().mark(function e3(t3) {
            var n3, r3, o2, a2, s2, f2 = arguments;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return r3 = f2.length > 1 && f2[1] !== void 0 ? f2[1] : {}, e4.next = 3, Mt(t3, {startPolling: true});
                  case 3:
                    if (o2 = e4.sent, a2 = (0, c.uN)(t3), (s2 = a2 == null || (n3 = a2.remediations) === null || n3 === void 0 ? void 0 : n3.find(function(e5) {
                      return e5.includes("poll");
                    })) != null && s2.length || (0, ce.ZK)("No polling remediations available at the current IDX flow stage"), !Number.isInteger(r3.refresh)) {
                      e4.next = 9;
                      break;
                    }
                    return e4.abrupt("return", new Promise(function(e5, n4) {
                      setTimeout((0, i.Z)(u().mark(function r4() {
                        var i2, a3, s3;
                        return u().wrap(function(r5) {
                          for (; ; )
                            switch (r5.prev = r5.next) {
                              case 0:
                                try {
                                  s3 = (i2 = o2.nextStep) === null || i2 === void 0 || (a3 = i2.poll) === null || a3 === void 0 ? void 0 : a3.refresh, e5(s3 ? Wn(t3, {refresh: s3}) : o2);
                                } catch (e6) {
                                  n4(e6);
                                }
                              case 1:
                              case "end":
                                return r5.stop();
                            }
                        }, r4);
                      })), r3.refresh);
                    }));
                  case 9:
                    return e4.abrupt("return", o2);
                  case 10:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), zn.apply(this, arguments);
        }
        function Jn(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function Qn(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? Jn(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Jn(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function $n(e3) {
          return Xn.apply(this, arguments);
        }
        function Xn() {
          return Xn = (0, i.Z)(u().mark(function e3(t3) {
            var n3, r3 = arguments;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return n3 = r3.length > 1 && r3[1] !== void 0 ? r3[1] : {}, t3.transactionManager.clear(), e4.abrupt("return", xn(t3, Qn({exchangeCodeForTokens: false}, n3)));
                  case 3:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), Xn.apply(this, arguments);
        }
        function er(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function tr(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? er(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : er(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function nr(e3) {
          return rr.apply(this, arguments);
        }
        function rr() {
          return rr = (0, i.Z)(u().mark(function e3(t3) {
            var n3, r3, o2, i2, a2 = arguments;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (n3 = a2.length > 1 && a2[1] !== void 0 ? a2[1] : {}, (0, c.$0)(t3)) {
                      e4.next = 13;
                      break;
                    }
                    return e4.next = 4, $n(t3, tr(tr({}, n3), {}, {flow: "register", autoRemediate: false}));
                  case 4:
                    if (r3 = e4.sent, o2 = r3.enabledFeatures, i2 = r3.availableSteps, n3.activationToken || !o2 || o2.includes(s.IdxFeature.REGISTRATION)) {
                      e4.next = 10;
                      break;
                    }
                    throw new ae.R("Registration is not supported based on your current org configuration.");
                  case 10:
                    if (!n3.activationToken || i2 == null || !i2.some(function(e5) {
                      return e5.name === "identify";
                    })) {
                      e4.next = 13;
                      break;
                    }
                    throw new ae.R("activationToken is not supported based on your current org configuration.");
                  case 13:
                    return e4.abrupt("return", xn(t3, tr(tr({}, n3), {}, {flow: "register"})));
                  case 14:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), rr.apply(this, arguments);
        }
        function or(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function ir(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? or(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : or(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function ar(e3) {
          return ur.apply(this, arguments);
        }
        function ur() {
          return ur = (0, i.Z)(u().mark(function e3(t3) {
            var n3, r3, o2 = arguments;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return n3 = o2.length > 1 && o2[1] !== void 0 ? o2[1] : {}, r3 = yn(t3, "recoverPassword"), e4.abrupt("return", xn(t3, ir(ir({}, n3), r3)));
                  case 3:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), ur.apply(this, arguments);
        }
        function sr(e3, t3) {
          return cr.apply(this, arguments);
        }
        function cr() {
          return (cr = (0, i.Z)(u().mark(function e3(t3, n3) {
            var r3, o2, i2, a2, s2, c2, f2, l2, p2, h2;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (r3 = t3.transactionManager.load()) {
                      e4.next = 3;
                      break;
                    }
                    throw new ae.R("No transaction data was found in storage");
                  case 3:
                    if (o2 = r3.codeVerifier, i2 = r3.state, a2 = new URL(n3), s2 = a2.searchParams, c2 = s2.get("state"), f2 = s2.get("interaction_code"), !(l2 = s2.get("error"))) {
                      e4.next = 10;
                      break;
                    }
                    throw new ae.BK(l2, s2.get("error_description"));
                  case 10:
                    if (c2 === i2) {
                      e4.next = 12;
                      break;
                    }
                    throw new ae.R("State in redirect uri does not match with transaction state");
                  case 12:
                    if (f2) {
                      e4.next = 14;
                      break;
                    }
                    throw new ae.R("Unable to parse interaction_code from the url");
                  case 14:
                    return e4.next = 16, t3.token.exchangeCodeForTokens({interactionCode: f2, codeVerifier: o2});
                  case 16:
                    p2 = e4.sent, h2 = p2.tokens, t3.tokenManager.setTokens(h2);
                  case 19:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        function fr(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function lr(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? fr(Object(n3), true).forEach(function(t4) {
              (0, o.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : fr(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function pr(e3) {
          return hr.apply(this, arguments);
        }
        function hr() {
          return hr = (0, i.Z)(u().mark(function e3(t3) {
            var n3, r3, o2, i2 = arguments;
            return u().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if ((n3 = i2.length > 1 && i2[1] !== void 0 ? i2[1] : {}).flow = "unlockAccount", (0, c.$0)(t3)) {
                      e4.next = 9;
                      break;
                    }
                    return e4.next = 5, $n(t3, lr(lr({}, n3), {}, {autoRemediate: false}));
                  case 5:
                    if (r3 = e4.sent, !(o2 = r3.enabledFeatures) || o2.includes(s.IdxFeature.ACCOUNT_UNLOCK)) {
                      e4.next = 9;
                      break;
                    }
                    throw new ae.R("Self Service Account Unlock is not supported based on your current org configuration.");
                  case 9:
                    return e4.abrupt("return", xn(t3, lr({}, n3)));
                  case 10:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), hr.apply(this, arguments);
        }
      }, 2620: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {Xc: function() {
          return p;
        }, $0: function() {
          return d;
        }, uN: function() {
          return v;
        }, Co: function() {
          return y;
        }, r0: function() {
          return m;
        }, Jm: function() {
          return b;
        }, Wf: function() {
          return O;
        }, bl: function() {
          return k;
        }, UC: function() {
          return w;
        }});
        var r2 = n2(4942), o = n2(5861), i = n2(7757), a = n2.n(i), u = n2(3193), s = n2(146), c = n2(1416);
        function f(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function l(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? f(Object(n3), true).forEach(function(t4) {
              (0, r2.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : f(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function p(e3) {
          return h.apply(this, arguments);
        }
        function h() {
          return h = (0, o.Z)(a().mark(function e3(t3) {
            var n3, r3, o2, i2, u2, s2, f2, p2, h2, d2, v2, y2, g2, m2, b2, O2 = arguments;
            return a().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return n3 = O2.length > 1 && O2[1] !== void 0 ? O2[1] : {}, e4.next = 3, t3.token.prepareTokenParams(n3);
                  case 3:
                    return r3 = e4.sent, o2 = (0, c.H)(t3, r3), i2 = l(l({}, t3.options), n3), u2 = i2.flow, s2 = u2 === void 0 ? "default" : u2, f2 = i2.withCredentials, p2 = f2 === void 0 || f2, h2 = i2.activationToken, d2 = h2 === void 0 ? void 0 : h2, v2 = i2.recoveryToken, y2 = v2 === void 0 ? void 0 : v2, g2 = i2.maxAge, m2 = g2 === void 0 ? void 0 : g2, b2 = l(l({}, o2), {}, {flow: s2, withCredentials: p2, activationToken: d2, recoveryToken: y2, maxAge: m2}), e4.abrupt("return", b2);
                  case 8:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), h.apply(this, arguments);
        }
        function d(e3, t3) {
          var n3 = v(e3, t3);
          return !(n3 == null || !n3.interactionHandle);
        }
        function v(e3, t3) {
          var n3;
          t3 = (0, u.YY)(t3), t3 = l(l({}, e3.options), t3);
          try {
            n3 = e3.transactionManager.load(t3);
          } catch (e4) {
          }
          if (n3)
            return O(n3, t3) ? n3 : void (0, s.ZK)("Saved transaction meta does not match the current configuration. This may indicate that two apps are sharing a storage key.");
        }
        function y(e3, t3) {
          return g.apply(this, arguments);
        }
        function g() {
          return (g = (0, o.Z)(a().mark(function e3(t3, n3) {
            var r3;
            return a().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (n3 = (0, u.YY)(n3), n3 = l(l({}, t3.options), n3), !(r3 = v(t3, n3))) {
                      e4.next = 5;
                      break;
                    }
                    return e4.abrupt("return", r3);
                  case 5:
                    return e4.abrupt("return", p(t3, n3));
                  case 6:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        function m(e3, t3) {
          e3.transactionManager.save(t3, {muteWarning: true});
        }
        function b(e3) {
          e3.transactionManager.clear();
        }
        function O(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n3 = ["issuer", "clientId", "redirectUri", "state", "codeChallenge", "codeChallengeMethod", "activationToken", "recoveryToken"];
          if (w(e3, t3, n3) === false)
            return false;
          var r3 = t3.flow;
          return k(e3, r3) !== false;
        }
        function k(e3, t3) {
          return !(t3 && t3 !== "default" && t3 !== "proceed") || t3 === e3.flow;
        }
        function w(e3, t3, n3) {
          return !n3.some(function(n4) {
            var r3 = t3[n4];
            if (r3 && r3 !== e3[n4])
              return true;
          });
        }
      }, 480: function(e2, t2, n2) {
        "use strict";
        function r2(e3) {
          return e3 && e3.version;
        }
        function o(e3) {
          return e3 && r2(e3.rawIdxState);
        }
        n2.d(t2, {P: function() {
          return r2;
        }, f: function() {
          return o;
        }});
      }, 1384: function(e2, t2, n2) {
        "use strict";
        var r2, o, i;
        function a(e3) {
          return e3 && (e3.key || e3.id);
        }
        n2.d(t2, {pc: function() {
          return o;
        }, Fw: function() {
          return i;
        }, Qd: function() {
          return r2;
        }, H: function() {
          return a;
        }}), function(e3) {
          e3.SUCCESS = "SUCCESS", e3.PENDING = "PENDING", e3.FAILURE = "FAILURE", e3.TERMINAL = "TERMINAL", e3.CANCELED = "CANCELED";
        }(r2 || (r2 = {})), function(e3) {
          e3.OKTA_PASSWORD = "okta_password", e3.OKTA_EMAIL = "okta_email", e3.PHONE_NUMBER = "phone_number", e3.GOOGLE_AUTHENTICATOR = "google_otp", e3.SECURITY_QUESTION = "security_question", e3.OKTA_VERIFY = "okta_verify", e3.WEBAUTHN = "webauthn";
        }(o || (o = {})), function(e3) {
          e3.PASSWORD_RECOVERY = "recover-password", e3.REGISTRATION = "enroll-profile", e3.SOCIAL_IDP = "redirect-idp", e3.ACCOUNT_UNLOCK = "unlock-account";
        }(i || (i = {}));
      }, 1237: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {T: function() {
          return i;
        }});
        var r2 = n2(7301), o = n2(9326);
        function i(e3) {
          var t3, n3 = e3.split(".");
          try {
            t3 = {header: JSON.parse((0, o.base64UrlToString)(n3[0])), payload: JSON.parse((0, o.base64UrlToString)(n3[1])), signature: n3[2]};
          } catch (e4) {
            throw new r2.R("Malformed token");
          }
          return t3;
        }
      }, 9231: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {t: function() {
          return s;
        }, D: function() {
          return c;
        }});
        var r2 = n2(885), o = n2(7301), i = n2(3193), a = n2(6718), u = n2(6780);
        function s(e3, t3, n3) {
          !function(e4) {
            if (!e4.clientId)
              throw new o.R("A clientId must be specified in the OktaAuth constructor to get a token");
            if (!e4.redirectUri)
              throw new o.R("The redirectUri passed to /authorize must also be passed to /token");
            if (!e4.authorizationCode && !e4.interactionCode)
              throw new o.R("An authorization code (returned from /authorize) must be passed to /token");
            if (!e4.codeVerifier)
              throw new o.R('The "codeVerifier" (generated and saved by your app) must be passed to /token');
          }(t3);
          var r3 = function(e4, t4) {
            var n4 = (0, i.YY)({client_id: t4.clientId, redirect_uri: t4.redirectUri, grant_type: t4.interactionCode ? "interaction_code" : "authorization_code", code_verifier: t4.codeVerifier});
            t4.interactionCode ? n4.interaction_code = t4.interactionCode : t4.authorizationCode && (n4.code = t4.authorizationCode);
            var r4 = e4.options.clientSecret;
            return r4 && (n4.client_secret = r4), (0, a.UK)(n4).slice(1);
          }(e3, t3);
          return (0, u.c3)(e3, {url: n3.tokenUrl, method: "POST", args: r3, headers: {"Content-Type": "application/x-www-form-urlencoded"}});
        }
        function c(e3, t3, n3) {
          return (0, u.c3)(e3, {url: n3.tokenUrl, method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, args: Object.entries({client_id: t3.clientId, grant_type: "refresh_token", scope: n3.scopes.join(" "), refresh_token: n3.refreshToken}).map(function(e4) {
            var t4 = (0, r2.Z)(e4, 2), n4 = t4[0], o2 = t4[1];
            return n4 + "=" + encodeURIComponent(o2);
          }).join("&")});
        }
      }, 52: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {E: function() {
          return a;
        }, k: function() {
          return u;
        }});
        var r2 = n2(6780), o = n2(3193), i = n2(9123);
        function a(e3, t3) {
          var n3 = t3 || e3.options.issuer;
          return (0, r2.U2)(e3, n3 + "/.well-known/openid-configuration", {cacheResponse: true});
        }
        function u(e3, t3, n3) {
          var u2 = e3.storageManager.getHttpCache(e3.options.cookies);
          return a(e3, t3).then(function(t4) {
            var a2 = t4.jwks_uri, s = u2.getStorage()[a2];
            if (s && Date.now() / 1e3 < s.expiresAt) {
              var c = (0, o.sE)(s.response.keys, {kid: n3});
              if (c)
                return c;
            }
            return u2.clearStorage(a2), (0, r2.U2)(e3, a2, {cacheResponse: true}).then(function(e4) {
              var t5 = (0, o.sE)(e4.keys, {kid: n3});
              if (t5)
                return t5;
              throw new i.Z("The key id, " + n3 + ", was not found in the server's keys");
            });
          });
        }
      }, 8707: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {r: function() {
          return u;
        }});
        var r2 = n2(9120), o = n2(3193), i = n2(9231), a = n2(8676);
        function u(e3, t3, n3) {
          n3 = n3 || (0, r2.Fc)(e3, t3);
          var u2 = t3 = Object.assign({}, (0, r2.Dx)(e3), (0, o.d9)(t3)), s = u2.authorizationCode, c = u2.interactionCode, f = u2.codeVerifier, l = u2.clientId, p = u2.redirectUri, h = u2.scopes, d = u2.ignoreSignature, v = u2.state, y = {clientId: l, redirectUri: p, authorizationCode: s, interactionCode: c, codeVerifier: f};
          return (0, i.t)(e3, y, n3).then(function(t4) {
            var r3 = ["token"];
            h.indexOf("openid") !== -1 && r3.push("id_token");
            var o2 = {clientId: l, redirectUri: p, scopes: h, responseType: r3, ignoreSignature: d};
            return (0, a.s)(e3, o2, t4, n3).then(function(e4) {
              return e4.code = s, e4.state = v, e4;
            });
          }).finally(function() {
            e3.transactionManager.clear();
          });
        }
      }, 8676: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {s: function() {
          return h;
        }});
        var r2 = n2(5861), o = n2(7757), i = n2.n(o), a = n2(3193), u = n2(7599), s = n2(7301), c = n2(8707), f = n2(1260), l = n2(9120);
        function p(e3, t3) {
          if (e3.error && e3.error_description)
            throw new s.BK(e3.error, e3.error_description);
          if (e3.state !== t3.state)
            throw new s.R("OAuth flow response state doesn't match request state");
        }
        function h(e3, t3, n3, r3) {
          return d.apply(this, arguments);
        }
        function d() {
          return (d = (0, r2.Z)(i().mark(function e3(t3, n3, r3, o2) {
            var h2, d2, v, y, g, m, b, O, k, w, T, E, S, _;
            return i().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (t3.options.pkce === false || !r3.code && !r3.interaction_code) {
                      e4.next = 3;
                      break;
                    }
                    return e4.abrupt("return", (0, c.r)(t3, Object.assign({}, n3, {authorizationCode: r3.code, interactionCode: r3.interaction_code}), o2));
                  case 3:
                    if (n3 = n3 || (0, l.Dx)(t3), o2 = o2 || (0, u.Fc)(t3, n3), h2 = n3.responseType || [], Array.isArray(h2) || (h2 = [h2]), d2 = r3.scope ? r3.scope.split(" ") : (0, a.d9)(n3.scopes), v = n3.clientId || t3.options.clientId, p(r3, n3), y = {}, g = r3.expires_in, m = r3.token_type, b = r3.access_token, O = r3.id_token, k = r3.refresh_token, w = Math.floor(Date.now() / 1e3), b && (T = t3.token.decode(b), y.accessToken = {accessToken: b, claims: T.payload, expiresAt: Number(g) + w, tokenType: m, scopes: d2, authorizeUrl: o2.authorizeUrl, userinfoUrl: o2.userinfoUrl}), k && (y.refreshToken = {refreshToken: k, expiresAt: Number(g) + w, scopes: d2, tokenUrl: o2.tokenUrl, authorizeUrl: o2.authorizeUrl, issuer: o2.issuer}), !O) {
                      e4.next = 27;
                      break;
                    }
                    return E = t3.token.decode(O), S = {idToken: O, claims: E.payload, expiresAt: E.payload.exp - E.payload.iat + w, scopes: d2, authorizeUrl: o2.authorizeUrl, issuer: o2.issuer, clientId: v}, _ = {clientId: v, issuer: o2.issuer, nonce: n3.nonce, accessToken: b}, n3.ignoreSignature !== void 0 && (_.ignoreSignature = n3.ignoreSignature), e4.next = 26, (0, f.W)(t3, S, _);
                  case 26:
                    y.idToken = S;
                  case 27:
                    if (h2.indexOf("token") === -1 || y.accessToken) {
                      e4.next = 29;
                      break;
                    }
                    throw new s.R('Unable to parse OAuth flow response: response type "token" was requested but "access_token" was not returned.');
                  case 29:
                    if (h2.indexOf("id_token") === -1 || y.idToken) {
                      e4.next = 31;
                      break;
                    }
                    throw new s.R('Unable to parse OAuth flow response: response type "id_token" was requested but "id_token" was not returned.');
                  case 31:
                    return e4.abrupt("return", {tokens: y, state: r3.state, code: r3.code});
                  case 32:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
      }, 1416: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {NH: function() {
          return d.NH;
        }, iC: function() {
          return d.iC;
        }, vz: function() {
          return d.vz;
        }, R0: function() {
          return l;
        }, _6: function() {
          return f;
        }, H: function() {
          return d.H;
        }, TD: function() {
          return v.T;
        }, rz: function() {
          return H.r;
        }, PY: function() {
          return d.PY;
        }, aV: function() {
          return d.aV;
        }, Dx: function() {
          return d.Dx;
        }, O2: function() {
          return d.O2;
        }, km: function() {
          return h.k;
        }, zf: function() {
          return d.zf;
        }, Xp: function() {
          return d.Xp;
        }, Fc: function() {
          return d.Fc;
        }, LP: function() {
          return P;
        }, bG: function() {
          return F;
        }, ES: function() {
          return h.E;
        }, dh: function() {
          return B;
        }, Hq: function() {
          return G;
        }, y6: function() {
          return R;
        }, sw: function() {
          return A.s;
        }, ZP: function() {
          return d.ZP;
        }, hg: function() {
          return d.hg;
        }, d_: function() {
          return d.d_;
        }, kU: function() {
          return d.kU;
        }, tC: function() {
          return d.tC;
        }, Ik: function() {
          return d.Ik;
        }, wc: function() {
          return d.wc;
        }, Cf: function() {
          return d.Cf;
        }, gM: function() {
          return d.gM;
        }, Qs: function() {
          return d.Qs;
        }, Yo: function() {
          return d.Yo;
        }, q0: function() {
          return d.q0;
        }, Rl: function() {
          return d.Rl;
        }, pU: function() {
          return d.pU;
        }, ko: function() {
          return q.ko;
        }, U5: function() {
          return d.U5;
        }, Dp: function() {
          return p.D;
        }, ti: function() {
          return p.t;
        }, mi: function() {
          return d.mi;
        }, wu: function() {
          return d.wu;
        }, ys: function() {
          return d.ys;
        }, $m: function() {
          return I;
        }, IK: function() {
          return N;
        }, Rm: function() {
          return j;
        }, PX: function() {
          return T;
        }, vL: function() {
          return d.vL;
        }, pj: function() {
          return d.pj;
        }, br: function() {
          return d.br;
        }, Rp: function() {
          return d.Rp;
        }, WX: function() {
          return L.W;
        }});
        var r2 = n2(4942), o = n2(4771), i = n2(3193), a = n2(6718), u = n2(7301);
        function s(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function c(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? s(Object(n3), true).forEach(function(t4) {
              (0, r2.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : s(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function f(e3) {
          if (!e3.clientId)
            throw new u.R("A clientId must be specified in the OktaAuth constructor to get a token");
          if ((0, o.HD)(e3.responseType) && e3.responseType.indexOf(" ") !== -1)
            throw new u.R("Multiple OAuth responseTypes must be defined as an array");
          var t3 = {client_id: e3.clientId, code_challenge: e3.codeChallenge, code_challenge_method: e3.codeChallengeMethod, display: e3.display, idp: e3.idp, idp_scope: e3.idpScope, login_hint: e3.loginHint, max_age: e3.maxAge, nonce: e3.nonce, prompt: e3.prompt, redirect_uri: e3.redirectUri, response_mode: e3.responseMode, response_type: e3.responseType, sessionToken: e3.sessionToken, state: e3.state};
          if (t3 = (0, i.YY)(t3), ["idp_scope", "response_type"].forEach(function(e4) {
            Array.isArray(t3[e4]) && (t3[e4] = t3[e4].join(" "));
          }), e3.responseType.indexOf("id_token") !== -1 && e3.scopes.indexOf("openid") === -1)
            throw new u.R("openid scope must be specified in the scopes argument when requesting an id_token");
          return t3.scope = e3.scopes.join(" "), t3;
        }
        function l(e3) {
          var t3 = f(e3);
          return (0, a.UK)(c(c({}, t3), e3.extraParams && c({}, e3.extraParams)));
        }
        var p = n2(9231), h = n2(52), d = n2(9120), v = n2(1237), y = n2(5861), g = n2(7757), m = n2.n(g), b = n2(6780), O = n2(7599), k = n2(9326), w = n2(9123);
        function T(e3, t3) {
          return E.apply(this, arguments);
        }
        function E() {
          return E = (0, y.Z)(m().mark(function e3(t3, n3) {
            var r3, o2, i2, u2, s2, c2, f2;
            return m().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (r3 = "", o2 = "", n3 && (r3 = n3.accessToken, o2 = n3.refreshToken), r3 || o2) {
                      e4.next = 5;
                      break;
                    }
                    throw new w.Z("A valid access or refresh token object is required");
                  case 5:
                    if (i2 = t3.options.clientId, u2 = t3.options.clientSecret, i2) {
                      e4.next = 9;
                      break;
                    }
                    throw new w.Z("A clientId must be specified in the OktaAuth constructor to revoke a token");
                  case 9:
                    return s2 = (0, O.Fc)(t3).revokeUrl, c2 = (0, a.UK)({token_type_hint: o2 ? "refresh_token" : "access_token", token: o2 || r3}).slice(1), f2 = u2 ? (0, k.btoa)("".concat(i2, ":").concat(u2)) : (0, k.btoa)(i2), e4.abrupt("return", (0, b.v_)(t3, s2, c2, {headers: {"Content-Type": "application/x-www-form-urlencoded", Authorization: "Basic " + f2}}));
                  case 13:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), E.apply(this, arguments);
        }
        var S = n2(2852), _ = n2(6898), A = n2(8676);
        function P(e3, t3) {
          if (arguments.length > 2)
            return Promise.reject(new w.Z('As of version 3.0, "getToken" takes only a single set of options'));
          var n3 = (t3 = t3 || {}).popupWindow;
          return t3.popupWindow = void 0, (0, _.wu)(e3, t3).then(function(r3) {
            var o2, i2;
            switch (t3.sessionToken ? Object.assign(r3, {prompt: "none", responseMode: "okta_post_message", display: null}) : t3.idp && Object.assign(r3, {display: "popup"}), i2 = (0, d.Fc)(e3, r3), o2 = (t3.codeVerifier ? i2.tokenUrl : i2.authorizeUrl) + l(r3), r3.sessionToken || r3.display === null ? "IFRAME" : r3.display === "popup" ? "POPUP" : "IMPLICIT") {
              case "IFRAME":
                var a2 = (0, d.iC)(e3, t3.timeout, r3.state), u2 = (0, d.Rl)(o2);
                return a2.then(function(t4) {
                  return (0, A.s)(e3, r3, t4, i2);
                }).finally(function() {
                  var e4;
                  document.body.contains(u2) && ((e4 = u2.parentElement) === null || e4 === void 0 || e4.removeChild(u2));
                });
              case "POPUP":
                var s2;
                if (r3.responseMode === "okta_post_message") {
                  if (!e3.features.isPopupPostMessageSupported())
                    throw new w.Z("This browser doesn't have full postMessage support");
                  s2 = (0, d.iC)(e3, t3.timeout, r3.state);
                }
                return n3 && n3.location.assign(o2), new Promise(function(e4, t4) {
                  var r4 = setInterval(function() {
                    n3 && !n3.closed || (clearInterval(r4), t4(new w.Z("Unable to parse OAuth flow response")));
                  }, 100);
                  s2.then(function(t5) {
                    clearInterval(r4), e4(t5);
                  }).catch(function(e5) {
                    clearInterval(r4), t4(e5);
                  });
                }).then(function(t4) {
                  return (0, A.s)(e3, r3, t4, i2);
                }).finally(function() {
                  n3 && !n3.closed && n3.close();
                });
              default:
                throw new w.Z("The full page redirect flow is not supported");
            }
          });
        }
        function R(e3, t3) {
          return arguments.length > 2 ? Promise.reject(new u.R('As of version 3.0, "getWithoutPrompt" takes only a single set of options')) : (t3 = (0, i.d9)(t3) || {}, Object.assign(t3, {prompt: "none", responseMode: "okta_post_message", display: null}), P(e3, t3));
        }
        var x = n2(6635);
        function j(e3, t3, n3) {
          return Z.apply(this, arguments);
        }
        function Z() {
          return (Z = (0, y.Z)(m().mark(function e3(t3, n3, r3) {
            var o2, i2, a2, s2, c2, f2, l2;
            return m().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (o2 = t3.options.clientId) {
                      e4.next = 3;
                      break;
                    }
                    throw new u.R("A clientId must be specified in the OktaAuth constructor to renew tokens");
                  case 3:
                    return i2 = Object.assign({}, n3, {clientId: o2}), e4.next = 6, (0, p.D)(t3, i2, r3);
                  case 6:
                    return a2 = e4.sent, s2 = (0, O.Fc)(t3, n3), e4.next = 10, (0, A.s)(t3, i2, a2, s2);
                  case 10:
                    return c2 = e4.sent, f2 = c2.tokens, (l2 = f2.refreshToken) && !(0, x.q)(l2, r3) && t3.tokenManager.updateRefreshToken(l2), e4.abrupt("return", f2);
                  case 15:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        function C() {
          throw new u.R("Renew must be passed a token with an array of scopes and an accessToken or idToken");
        }
        function D(e3, t3) {
          return (0, S.isIDToken)(e3) ? t3.idToken : (0, S.isAccessToken)(e3) ? t3.accessToken : void C();
        }
        function I(e3, t3) {
          return M.apply(this, arguments);
        }
        function M() {
          return M = (0, y.Z)(m().mark(function e3(t3, n3) {
            var r3, o2, i2, a2, u2, s2, c2;
            return m().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if ((0, S.isIDToken)(n3) || (0, S.isAccessToken)(n3) || C(), !(r3 = t3.tokenManager.getTokensSync()).refreshToken) {
                      e4.next = 7;
                      break;
                    }
                    return e4.next = 5, j(t3, {scopes: n3.scopes}, r3.refreshToken);
                  case 5:
                    return r3 = e4.sent, e4.abrupt("return", D(n3, r3));
                  case 7:
                    return o2 = t3.options.pkce ? "code" : (0, S.isAccessToken)(n3) ? "token" : "id_token", a2 = (i2 = n3).scopes, u2 = i2.authorizeUrl, s2 = i2.userinfoUrl, c2 = i2.issuer, e4.abrupt("return", R(t3, {responseType: o2, scopes: a2, authorizeUrl: u2, userinfoUrl: s2, issuer: c2}).then(function(e5) {
                      return D(n3, e5.tokens);
                    }));
                  case 10:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), M.apply(this, arguments);
        }
        function N(e3, t3) {
          return U.apply(this, arguments);
        }
        function U() {
          return (U = (0, y.Z)(m().mark(function e3(t3, n3) {
            var r3, o2, i2, a2, s2, c2, f2, l2, p2;
            return m().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (!(r3 = t3.tokenManager.getTokensSync()).refreshToken) {
                      e4.next = 3;
                      break;
                    }
                    return e4.abrupt("return", j(t3, n3 || {}, r3.refreshToken));
                  case 3:
                    if (r3.accessToken || r3.idToken) {
                      e4.next = 5;
                      break;
                    }
                    throw new u.R("renewTokens() was called but there is no existing token");
                  case 5:
                    if (o2 = r3.accessToken || {}, i2 = r3.idToken || {}, a2 = o2.scopes || i2.scopes) {
                      e4.next = 10;
                      break;
                    }
                    throw new u.R("renewTokens: invalid tokens: could not read scopes");
                  case 10:
                    if (s2 = o2.authorizeUrl || i2.authorizeUrl) {
                      e4.next = 13;
                      break;
                    }
                    throw new u.R("renewTokens: invalid tokens: could not read authorizeUrl");
                  case 13:
                    return c2 = o2.userinfoUrl || t3.options.userinfoUrl, f2 = i2.issuer || t3.options.issuer, n3 = Object.assign({scopes: a2, authorizeUrl: s2, userinfoUrl: c2, issuer: f2}, n3), t3.options.pkce ? n3.responseType = "code" : (l2 = (0, d.Dx)(t3), p2 = l2.responseType, n3.responseType = p2), e4.abrupt("return", R(t3, n3).then(function(e5) {
                      return e5.tokens;
                    }));
                  case 18:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        var L = n2(1260);
        function F(e3, t3, n3) {
          return K.apply(this, arguments);
        }
        function K() {
          return (K = (0, y.Z)(m().mark(function e3(t3, n3, r3) {
            return m().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (n3) {
                      e4.next = 4;
                      break;
                    }
                    return e4.next = 3, t3.tokenManager.getTokens();
                  case 3:
                    n3 = e4.sent.accessToken;
                  case 4:
                    if (r3) {
                      e4.next = 8;
                      break;
                    }
                    return e4.next = 7, t3.tokenManager.getTokens();
                  case 7:
                    r3 = e4.sent.idToken;
                  case 8:
                    if (n3 && (0, S.isAccessToken)(n3)) {
                      e4.next = 10;
                      break;
                    }
                    return e4.abrupt("return", Promise.reject(new u.R("getUserInfo requires an access token object")));
                  case 10:
                    if (r3 && (0, S.isIDToken)(r3)) {
                      e4.next = 12;
                      break;
                    }
                    return e4.abrupt("return", Promise.reject(new u.R("getUserInfo requires an ID token object")));
                  case 12:
                    return e4.abrupt("return", (0, b.c3)(t3, {url: n3.userinfoUrl, method: "GET", accessToken: n3.accessToken}).then(function(e5) {
                      return e5.sub === r3.claims.sub ? e5 : Promise.reject(new u.R("getUserInfo request was rejected due to token mismatch"));
                    }).catch(function(e5) {
                      var t4;
                      if (e5.xhr && (e5.xhr.status === 401 || e5.xhr.status === 403) && (e5.xhr.headers && (0, o.mf)(e5.xhr.headers.get) && e5.xhr.headers.get("WWW-Authenticate") ? t4 = e5.xhr.headers.get("WWW-Authenticate") : (0, o.mf)(e5.xhr.getResponseHeader) && (t4 = e5.xhr.getResponseHeader("WWW-Authenticate")), t4)) {
                        var n4 = t4.match(/error="(.*?)"/) || [], r4 = t4.match(/error_description="(.*?)"/) || [], i2 = n4[1], a2 = r4[1];
                        i2 && a2 && (e5 = new u.BK(i2, a2));
                      }
                      throw e5;
                    }));
                  case 13:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        var H = n2(8707);
        function B(e3, t3) {
          if (arguments.length > 2)
            return Promise.reject(new u.R('As of version 3.0, "getWithPopup" takes only a single set of options'));
          var n3 = (0, d.pU)("/", t3);
          return t3 = (0, i.d9)(t3) || {}, Object.assign(t3, {display: "popup", responseMode: "okta_post_message", popupWindow: n3}), P(e3, t3);
        }
        function G(e3, t3) {
          return V.apply(this, arguments);
        }
        function V() {
          return V = (0, y.Z)(m().mark(function e3(t3, n3) {
            var r3, o2, a2, s2 = arguments;
            return m().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (!(s2.length > 2)) {
                      e4.next = 2;
                      break;
                    }
                    return e4.abrupt("return", Promise.reject(new u.R('As of version 3.0, "getWithRedirect" takes only a single set of options')));
                  case 2:
                    return n3 = (0, i.d9)(n3) || {}, e4.next = 5, (0, d.wu)(t3, n3);
                  case 5:
                    r3 = e4.sent, o2 = (0, d.H)(t3, r3), a2 = o2.urls.authorizeUrl + l(r3), t3.transactionManager.save(o2, {oauth: true}), t3.token.getWithRedirect._setLocation(a2);
                  case 10:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), V.apply(this, arguments);
        }
        var q = n2(5372);
      }, 5372: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {Tp: function() {
          return l;
        }, ko: function() {
          return h;
        }});
        var r2 = n2(5861), o = n2(7757), i = n2.n(o), a = n2(7301), u = n2(9120), s = n2(4771), c = n2(8676);
        function f(e3) {
          var t3 = e3.options.pkce ? "query" : "fragment";
          return e3.options.responseMode || t3;
        }
        function l(e3, t3) {
          t3 = t3 || {};
          var n3, r3 = (t3 = (0, s.HD)(t3) ? {url: t3} : t3).url, o2 = t3.responseMode || f(e3), i2 = e3.token.parseFromUrl._getLocation();
          if (!(n3 = o2 === "query" ? r3 ? r3.substring(r3.indexOf("?")) : i2.search : r3 ? r3.substring(r3.indexOf("#")) : i2.hash))
            throw new a.R("Unable to parse a token from the url");
          return (0, u.vL)(n3);
        }
        function p(e3, t3) {
          (t3.responseMode || f(e3)) === "query" ? function(e4) {
            var t4 = e4.token.parseFromUrl._getHistory(), n3 = e4.token.parseFromUrl._getDocument(), r3 = e4.token.parseFromUrl._getLocation();
            t4 && t4.replaceState ? t4.replaceState(null, n3.title, r3.pathname + r3.hash) : r3.search = "";
          }(e3) : function(e4) {
            var t4 = e4.token.parseFromUrl._getHistory(), n3 = e4.token.parseFromUrl._getDocument(), r3 = e4.token.parseFromUrl._getLocation();
            t4 && t4.replaceState ? t4.replaceState(null, n3.title, r3.pathname + r3.search) : r3.hash = "";
          }(e3);
        }
        function h(e3, t3) {
          return d.apply(this, arguments);
        }
        function d() {
          return (d = (0, r2.Z)(i().mark(function e3(t3, n3) {
            var r3, o2, f2, h2;
            return i().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (n3 = n3 || {}, n3 = (0, s.HD)(n3) ? {url: n3} : n3, r3 = l(t3, n3), o2 = r3.state, f2 = t3.transactionManager.load({oauth: true, pkce: t3.options.pkce, state: o2})) {
                      e4.next = 7;
                      break;
                    }
                    return e4.abrupt("return", Promise.reject(new a.R("Unable to retrieve OAuth redirect params from storage")));
                  case 7:
                    return h2 = f2.urls, delete f2.urls, n3.url || p(t3, n3), e4.abrupt("return", (0, c.s)(t3, f2, r3, h2).catch(function(e5) {
                      throw (0, u.Cf)(e5) || t3.transactionManager.clear({state: o2}), e5;
                    }).then(function(e5) {
                      return t3.transactionManager.clear({state: o2}), e5;
                    }));
                  case 11:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
      }, 7756: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {D: function() {
          return a;
        }});
        var r2 = n2(7599), o = n2(415), i = n2(3193);
        function a(e3) {
          var t3 = e3.options, n3 = t3.pkce, a2 = t3.clientId, u = t3.redirectUri, s = t3.responseType, c = t3.responseMode, f = t3.scopes, l = t3.state, p = t3.ignoreSignature, h = (0, o.isBrowser)() ? window.location.href : void 0;
          return (0, i.YY)({pkce: n3, clientId: a2, redirectUri: u || h, responseType: s || ["token", "id_token"], responseMode: c, state: l || (0, r2.aV)(), nonce: (0, r2.NH)(), scopes: f || ["openid", "email"], ignoreSignature: p});
        }
      }, 9120: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {NH: function() {
          return o;
        }, iC: function() {
          return s;
        }, vz: function() {
          return A.vz;
        }, H: function() {
          return S;
        }, PY: function() {
          return k.NH;
        }, aV: function() {
          return k.aV;
        }, Dx: function() {
          return c.D;
        }, O2: function() {
          return m;
        }, zf: function() {
          return k.zf;
        }, Xp: function() {
          return k.Xp;
        }, Fc: function() {
          return k.Fc;
        }, ZP: function() {
          return h;
        }, hg: function() {
          return v;
        }, d_: function() {
          return d;
        }, kU: function() {
          return p;
        }, tC: function() {
          return l;
        }, Ik: function() {
          return g;
        }, wc: function() {
          return O;
        }, Cf: function() {
          return f;
        }, gM: function() {
          return b;
        }, Qs: function() {
          return y;
        }, Yo: function() {
          return P.Y;
        }, q0: function() {
          return P.q;
        }, Rl: function() {
          return a;
        }, pU: function() {
          return u;
        }, U5: function() {
          return _.Z;
        }, mi: function() {
          return A.mi;
        }, wu: function() {
          return A.wu;
        }, ys: function() {
          return i;
        }, vL: function() {
          return R.v;
        }, pj: function() {
          return j;
        }, br: function() {
          return A.br;
        }, Rp: function() {
          return C;
        }});
        var r2 = n2(7301);
        function o(e3, t3, n3) {
          e3.addEventListener ? e3.addEventListener(t3, n3) : e3.attachEvent("on" + t3, n3);
        }
        function i(e3, t3, n3) {
          e3.removeEventListener ? e3.removeEventListener(t3, n3) : e3.detachEvent("on" + t3, n3);
        }
        function a(e3) {
          var t3 = document.createElement("iframe");
          return t3.style.display = "none", t3.src = e3, document.body.appendChild(t3);
        }
        function u(e3, t3) {
          var n3 = t3.popupTitle || "External Identity Provider User Authentication";
          return window.open(e3, n3, "toolbar=no, scrollbars=yes, resizable=yes, top=100, left=500, width=600, height=600");
        }
        function s(e3, t3, n3) {
          var a2, u2;
          return new Promise(function(i2, s2) {
            a2 = function(t4) {
              if (t4.data && t4.data.state === n3)
                return t4.origin !== e3.getIssuerOrigin() ? s2(new r2.R("The request does not match client configuration")) : void i2(t4.data);
            }, o(window, "message", a2), u2 = setTimeout(function() {
              s2(new r2.R("OAuth flow timed out"));
            }, t3 || 12e4);
          }).finally(function() {
            clearTimeout(u2), i(window, "message", a2);
          });
        }
        var c = n2(7756);
        function f(e3) {
          return e3.name === "OAuthError" && e3.errorCode === "interaction_required";
        }
        function l(e3, t3) {
          if (t3.name !== "AuthApiError")
            return false;
          var n3 = t3.xhr, r3 = n3 == null ? void 0 : n3.responseJSON;
          return e3.options.pkce && (r3 == null ? void 0 : r3.error) === "invalid_grant";
        }
        function p(e3) {
          return /((id|access)_token=)/i.test(e3);
        }
        function h(e3) {
          return /(code=)/i.test(e3);
        }
        function d(e3) {
          return /(interaction_code=)/i.test(e3);
        }
        function v(e3) {
          return /(error=)/i.test(e3) || /(error_description)/i.test(e3);
        }
        function y(e3, t3) {
          var n3 = t3.options;
          return !(!e3 || !n3.redirectUri) && e3.indexOf(n3.redirectUri) === 0;
        }
        function g(e3) {
          return e3.pkce || e3.responseType === "code" || e3.responseMode === "query";
        }
        function m(e3) {
          return g(e3) && e3.responseMode !== "fragment" ? window.location.search : window.location.hash;
        }
        function b(e3) {
          if (!y(window.location.href, e3))
            return false;
          var t3 = g(e3.options), n3 = m(e3.options);
          return !!v(n3) || (t3 ? h(n3) || d(n3) : p(window.location.hash));
        }
        function O(e3, t3) {
          if (!t3) {
            if (!b(e3))
              return false;
            t3 = m(e3.options);
          }
          return /(error=interaction_required)/i.test(t3);
        }
        var k = n2(7599), w = n2(4942);
        function T(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function E(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? T(Object(n3), true).forEach(function(t4) {
              (0, w.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : T(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function S(e3, t3) {
          var n3 = {issuer: e3.options.issuer, urls: (0, k.Fc)(e3, t3), clientId: t3.clientId, redirectUri: t3.redirectUri, responseType: t3.responseType, responseMode: t3.responseMode, scopes: t3.scopes, state: t3.state, nonce: t3.nonce, ignoreSignature: t3.ignoreSignature};
          return t3.pkce === false ? n3 : E(E({}, n3), {}, {codeVerifier: t3.codeVerifier, codeChallengeMethod: t3.codeChallengeMethod, codeChallenge: t3.codeChallenge});
        }
        var _ = n2(3611), A = n2(6898), P = n2(6635), R = n2(1969), x = n2(9123);
        function j(e3, t3, n3) {
          var r3 = n3.clientId, o2 = n3.issuer, i2 = n3.nonce;
          if (!t3 || !o2 || !r3)
            throw new x.Z("The jwt, iss, and aud arguments are all required");
          if (i2 && t3.nonce !== i2)
            throw new x.Z("OAuth flow response nonce doesn't match request nonce");
          var a2 = Math.floor(Date.now() / 1e3);
          if (t3.iss !== o2)
            throw new x.Z("The issuer [" + t3.iss + "] does not match [" + o2 + "]");
          if (t3.aud !== r3)
            throw new x.Z("The audience [" + t3.aud + "] does not match [" + r3 + "]");
          if (t3.iat > t3.exp)
            throw new x.Z("The JWT expired before it was issued");
          if (!e3.options.ignoreLifetime) {
            if (a2 - e3.options.maxClockSkew > t3.exp)
              throw new x.Z("The JWT expired and is no longer valid");
            if (t3.iat > a2 + e3.options.maxClockSkew)
              throw new x.Z("The JWT was issued in the future");
          }
        }
        var Z = n2(2852);
        function C(e3, t3) {
          if (!(0, Z.isIDToken)(e3) && !(0, Z.isAccessToken)(e3) && !(0, Z.isRefreshToken)(e3))
            throw new r2.R("Token must be an Object with scopes, expiresAt, and one of: an idToken, accessToken, or refreshToken property");
          if (t3 === "accessToken" && !(0, Z.isAccessToken)(e3))
            throw new r2.R("invalid accessToken");
          if (t3 === "idToken" && !(0, Z.isIDToken)(e3))
            throw new r2.R("invalid idToken");
          if (t3 === "refreshToken" && !(0, Z.isRefreshToken)(e3))
            throw new r2.R("invalid refreshToken");
        }
      }, 7599: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {aV: function() {
          return a;
        }, NH: function() {
          return u;
        }, zf: function() {
          return c;
        }, Xp: function() {
          return f;
        }, Fc: function() {
          return l;
        }});
        var r2 = n2(8750), o = n2(6718), i = n2(9123);
        function a() {
          return (0, r2.uh)(64);
        }
        function u() {
          return (0, r2.uh)(64);
        }
        function s(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n3 = (0, o.Qj)(t3.issuer) || e3.options.issuer;
          return n3;
        }
        function c(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n3 = s(e3, t3), r3 = n3.indexOf("/oauth2") > 0 ? n3 : n3 + "/oauth2";
          return r3;
        }
        function f(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n3 = s(e3, t3), r3 = n3.split("/oauth2")[0];
          return r3;
        }
        function l(e3, t3) {
          if (arguments.length > 2)
            throw new i.Z('As of version 3.0, "getOAuthUrls" takes only a single set of options');
          t3 = t3 || {};
          var n3 = (0, o.Qj)(t3.authorizeUrl) || e3.options.authorizeUrl, r3 = s(e3, t3), a2 = (0, o.Qj)(t3.userinfoUrl) || e3.options.userinfoUrl, u2 = (0, o.Qj)(t3.tokenUrl) || e3.options.tokenUrl, f2 = (0, o.Qj)(t3.logoutUrl) || e3.options.logoutUrl, l2 = (0, o.Qj)(t3.revokeUrl) || e3.options.revokeUrl, p = c(e3, t3);
          return {issuer: r3, authorizeUrl: n3 = n3 || p + "/v1/authorize", userinfoUrl: a2 = a2 || p + "/v1/userinfo", tokenUrl: u2 = u2 || p + "/v1/token", revokeUrl: l2 = l2 || p + "/v1/revoke", logoutUrl: f2 = f2 || p + "/v1/logout"};
        }
      }, 3611: function(e2, t2, n2) {
        "use strict";
        var r2 = n2(9326), o = n2(1971);
        function i(e3) {
          return ("0" + e3.toString(16)).substr(-2);
        }
        t2.Z = {DEFAULT_CODE_CHALLENGE_METHOD: o.DEFAULT_CODE_CHALLENGE_METHOD, generateVerifier: function(e3) {
          var t3, n3, a = e3 || "";
          return a.length < o.MIN_VERIFIER_LENGTH && (a += (t3 = o.MIN_VERIFIER_LENGTH - a.length, n3 = new Uint8Array(Math.ceil(t3 / 2)), r2.webcrypto.getRandomValues(n3), Array.from(n3, i).join("").slice(0, t3))), encodeURIComponent(a).slice(0, o.MAX_VERIFIER_LENGTH);
        }, computeChallenge: function(e3) {
          var t3 = new TextEncoder().encode(e3);
          return r2.webcrypto.subtle.digest("SHA-256", t3).then(function(e4) {
            var t4 = String.fromCharCode.apply(null, new Uint8Array(e4));
            return (0, r2.stringToBase64Url)(t4);
          });
        }};
      }, 6898: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {vz: function() {
          return d;
        }, br: function() {
          return v;
        }, mi: function() {
          return g;
        }, wu: function() {
          return b;
        }});
        var r2 = n2(4942), o = n2(5861), i = n2(7757), a = n2.n(i), u = n2(52), s = n2(7301), c = n2(7756), f = n2(1971), l = n2(3611);
        function p(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function h(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3] != null ? arguments[t3] : {};
            t3 % 2 ? p(Object(n3), true).forEach(function(t4) {
              (0, r2.Z)(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : p(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function d(e3) {
          if (!e3.features.isPKCESupported()) {
            var t3 = "PKCE requires a modern browser with encryption support running in a secure context.";
            throw e3.features.isHTTPS() || (t3 += "\nThe current page is not being served with HTTPS protocol. PKCE requires secure HTTPS protocol."), e3.features.hasTextEncoder() || (t3 += '\n"TextEncoder" is not defined. To use PKCE, you may need to include a polyfill/shim for this browser.'), new s.R(t3);
          }
        }
        function v(e3, t3) {
          return y.apply(this, arguments);
        }
        function y() {
          return (y = (0, o.Z)(a().mark(function e3(t3, n3) {
            return a().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return n3 = n3 || t3.options.codeChallengeMethod || f.DEFAULT_CODE_CHALLENGE_METHOD, e4.next = 3, (0, u.E)(t3);
                  case 3:
                    if ((e4.sent.code_challenge_methods_supported || []).indexOf(n3) !== -1) {
                      e4.next = 7;
                      break;
                    }
                    throw new s.R("Invalid code_challenge_method");
                  case 7:
                    return e4.abrupt("return", n3);
                  case 8:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        function g(e3, t3) {
          return m.apply(this, arguments);
        }
        function m() {
          return (m = (0, o.Z)(a().mark(function e3(t3, n3) {
            var r3, o2, i2, u2;
            return a().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (o2 = (r3 = n3).codeVerifier, i2 = r3.codeChallenge, u2 = r3.codeChallengeMethod, i2 = i2 || t3.options.codeChallenge) {
                      e4.next = 8;
                      break;
                    }
                    return d(t3), o2 = o2 || l.Z.generateVerifier(), e4.next = 7, l.Z.computeChallenge(o2);
                  case 7:
                    i2 = e4.sent;
                  case 8:
                    return e4.next = 10, v(t3, u2);
                  case 10:
                    return u2 = e4.sent, n3 = h(h({}, n3), {}, {responseType: "code", codeVerifier: o2, codeChallenge: i2, codeChallengeMethod: u2}), e4.abrupt("return", n3);
                  case 13:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        function b(e3) {
          return O.apply(this, arguments);
        }
        function O() {
          return O = (0, o.Z)(a().mark(function e3(t3) {
            var n3, r3, o2 = arguments;
            return a().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (n3 = o2.length > 1 && o2[1] !== void 0 ? o2[1] : {}, r3 = (0, c.D)(t3), (n3 = h(h({}, r3), n3)).pkce !== false) {
                      e4.next = 5;
                      break;
                    }
                    return e4.abrupt("return", n3);
                  case 5:
                    return e4.abrupt("return", g(t3, n3));
                  case 6:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), O.apply(this, arguments);
        }
      }, 6635: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {q: function() {
          return o;
        }, Y: function() {
          return i;
        }});
        var r2 = n2(7301);
        function o(e3, t3) {
          return e3.refreshToken === t3.refreshToken;
        }
        function i(e3) {
          return !(!(0, r2.Tw)(e3) || !e3.xhr || !e3.xhr.responseJSON || e3.xhr.responseJSON.error !== "invalid_grant");
        }
      }, 1969: function(e2, t2, n2) {
        "use strict";
        function r2(e3) {
          var t3 = /\+/g, n3 = /([^&=]+)=?([^&]*)/g, r3 = e3 || "";
          r3.charAt(0) === "#" && r3.charAt(1) === "/" && (r3 = r3.substring(2)), r3.charAt(0) !== "#" && r3.charAt(0) !== "?" || (r3 = r3.substring(1));
          for (var o, i = {}; o = n3.exec(r3); ) {
            var a = o[1], u = o[2];
            i[a] = a === "id_token" || a === "access_token" || a === "code" ? u : decodeURIComponent(u.replace(t3, " "));
          }
          return i;
        }
        n2.d(t2, {v: function() {
          return r2;
        }});
      }, 1260: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {W: function() {
          return l;
        }});
        var r2 = n2(5861), o = n2(7757), i = n2.n(o), a = n2(52), u = n2(9120), s = n2(7301), c = n2(1237), f = n2(9326);
        function l(e3, t3, n3) {
          return p.apply(this, arguments);
        }
        function p() {
          return (p = (0, r2.Z)(i().mark(function e3(t3, n3, r3) {
            var o2, l2, p2, h, d, v;
            return i().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (n3 && n3.idToken) {
                      e4.next = 2;
                      break;
                    }
                    throw new s.R("Only idTokens may be verified");
                  case 2:
                    return o2 = (0, c.T)(n3.idToken), l2 = (r3 == null ? void 0 : r3.issuer) || t3.options.issuer, e4.next = 6, (0, a.E)(t3, l2);
                  case 6:
                    if (p2 = e4.sent, h = p2.issuer, d = Object.assign({clientId: t3.options.clientId, ignoreSignature: t3.options.ignoreSignature}, r3, {issuer: h}), (0, u.pj)(t3, o2.payload, d), d.ignoreSignature != 1 && t3.features.isTokenVerifySupported()) {
                      e4.next = 12;
                      break;
                    }
                    return e4.abrupt("return", n3);
                  case 12:
                    return e4.next = 14, (0, a.k)(t3, n3.issuer, o2.header.kid);
                  case 14:
                    return v = e4.sent, e4.next = 17, f.verifyToken(n3.idToken, v);
                  case 17:
                    if (e4.sent) {
                      e4.next = 20;
                      break;
                    }
                    throw new s.R("The token signature is not valid");
                  case 20:
                    if (!(r3 && r3.accessToken && n3.claims.at_hash)) {
                      e4.next = 26;
                      break;
                    }
                    return e4.next = 23, f.getOidcHash(r3.accessToken);
                  case 23:
                    if (e4.sent === n3.claims.at_hash) {
                      e4.next = 26;
                      break;
                    }
                    throw new s.R("Token hash verification failed");
                  case 26:
                    return e4.abrupt("return", n3);
                  case 27:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
      }, 3291: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {D: function() {
          return h;
        }});
        var r2 = n2(5671), o = n2(4942), i = n2(6780), a = n2(3193), u = n2(6718), s = n2(4771), c = n2(9123), f = n2(459), l = n2(8903), p = n2(4393), h = function e3(t3) {
          var n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          if ((0, r2.Z)(this, e3), (0, o.Z)(this, "next", void 0), (0, o.Z)(this, "cancel", void 0), (0, o.Z)(this, "skip", void 0), (0, o.Z)(this, "unlock", void 0), (0, o.Z)(this, "changePassword", void 0), (0, o.Z)(this, "resetPassword", void 0), (0, o.Z)(this, "answer", void 0), (0, o.Z)(this, "recovery", void 0), (0, o.Z)(this, "verify", void 0), (0, o.Z)(this, "resend", void 0), (0, o.Z)(this, "activate", void 0), (0, o.Z)(this, "poll", void 0), (0, o.Z)(this, "prev", void 0), (0, o.Z)(this, "data", void 0), (0, o.Z)(this, "stateToken", void 0), (0, o.Z)(this, "sessionToken", void 0), (0, o.Z)(this, "status", void 0), (0, o.Z)(this, "user", void 0), (0, o.Z)(this, "factor", void 0), (0, o.Z)(this, "factors", void 0), (0, o.Z)(this, "policy", void 0), (0, o.Z)(this, "scopes", void 0), (0, o.Z)(this, "target", void 0), (0, o.Z)(this, "authentication", void 0), this.data = void 0, this.status = void 0, n3) {
            if (this.data = n3, this.data.interactionHandle)
              return void (this.status = n3.status);
            Object.assign(this, v(t3, n3, n3, {})), delete this.stateToken, n3.status !== "RECOVERY_CHALLENGE" || n3._links || (this.cancel = function() {
              return Promise.resolve(new e3(t3));
            });
          }
        };
        function d(e3, t3, n3, r3, o2) {
          if (Array.isArray(r3))
            return function(i2, u2) {
              if (!i2)
                throw new c.Z("Must provide a link name");
              var s2 = (0, a.sE)(r3, {name: i2});
              if (!s2)
                throw new c.Z("No link found for that name");
              return d(e3, t3, n3, s2, o2)(u2);
            };
          if (r3.hints && r3.hints.allow && r3.hints.allow.length === 1)
            switch (r3.hints.allow[0]) {
              case "GET":
                return function() {
                  return (0, i.U2)(e3, r3.href, {withCredentials: true});
                };
              case "POST":
                return function(i2) {
                  o2 && o2.isPolling && (o2.isPolling = false);
                  var s2 = (0, f.$)(t3, i2);
                  t3.status !== "MFA_ENROLL" && t3.status !== "FACTOR_ENROLL" || Object.assign(s2, {factorType: n3.factorType, provider: n3.provider});
                  var l2 = {}, h2 = s2.autoPush;
                  if (h2 !== void 0) {
                    if (typeof h2 == "function")
                      try {
                        l2.autoPush = !!h2();
                      } catch (e4) {
                        return Promise.reject(new c.Z("AutoPush resulted in an error."));
                      }
                    else
                      h2 !== null && (l2.autoPush = !!h2);
                    s2 = (0, a.CE)(s2, "autoPush");
                  }
                  var d2 = s2.rememberDevice;
                  if (d2 !== void 0) {
                    if (typeof d2 == "function")
                      try {
                        l2.rememberDevice = !!d2();
                      } catch (e4) {
                        return Promise.reject(new c.Z("RememberDevice resulted in an error."));
                      }
                    else
                      d2 !== null && (l2.rememberDevice = !!d2);
                    s2 = (0, a.CE)(s2, "rememberDevice");
                  } else
                    s2.profile && s2.profile.updatePhone !== void 0 && (s2.profile.updatePhone && (l2.updatePhone = true), s2.profile = (0, a.CE)(s2.profile, "updatePhone"));
                  var v2 = r3.href + (0, u.UK)(l2);
                  return (0, p.TG)(e3, v2, s2);
                };
            }
        }
        function v(e3, t3, n3, r3) {
          if (n3 = n3 || t3, n3 = (0, a.d9)(n3), Array.isArray(n3)) {
            for (var o2 = [], i2 = 0, u2 = n3.length; i2 < u2; i2++)
              o2.push(v(e3, t3, n3[i2], r3));
            return o2;
          }
          var c2 = n3._embedded || {};
          for (var f2 in c2)
            Object.prototype.hasOwnProperty.call(c2, f2) && ((0, s.Kn)(c2[f2]) || Array.isArray(c2[f2])) && (c2[f2] = v(e3, t3, c2[f2], r3));
          var p2 = function(e4, t4, n4, r4) {
            var o3 = {};
            for (var i3 in n4._links)
              if (Object.prototype.hasOwnProperty.call(n4._links, i3)) {
                var a2 = n4._links[i3];
                if (i3 === "next" && (i3 = a2.name), a2.type)
                  o3[i3] = a2;
                else if (i3 === "poll")
                  o3.poll = (0, l.I)(e4, t4, r4);
                else {
                  var u3 = d(e4, t4, n4, a2, r4);
                  u3 && (o3[i3] = u3);
                }
              }
            return o3;
          }(e3, t3, n3, r3);
          return Object.assign(c2, p2), n3 = (0, a.CE)(n3, "_embedded", "_links"), Object.assign(n3, c2), n3;
        }
      }, 5760: function() {
      }, 4393: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {L0: function() {
          return s;
        }, oN: function() {
          return c;
        }, LB: function() {
          return f;
        }, FO: function() {
          return l;
        }, lI: function() {
          return p;
        }, TG: function() {
          return h;
        }});
        var r2 = n2(6780), o = n2(9123), i = n2(1971), a = n2(459), u = n2(3291);
        function s(e3, t3) {
          return t3 = (0, a.$)(e3, t3), (0, r2.v_)(e3, e3.getIssuerOrigin() + "/api/v1/authn", t3, {withCredentials: true});
        }
        function c(e3, t3) {
          if (!t3 || !t3.stateToken) {
            var n3 = e3.tx.exists._get(i.STATE_TOKEN_KEY_NAME);
            if (!n3)
              return Promise.reject(new o.Z("No transaction to resume"));
            t3 = {stateToken: n3};
          }
          return e3.tx.status(t3).then(function(t4) {
            return new u.D(e3, t4);
          });
        }
        function f(e3, t3) {
          if (!t3 || !t3.stateToken) {
            var n3 = e3.tx.exists._get(i.STATE_TOKEN_KEY_NAME);
            if (!n3)
              return Promise.reject(new o.Z("No transaction to evaluate"));
            t3 = {stateToken: n3};
          }
          return l(e3, t3).then(function(t4) {
            return new u.D(e3, t4);
          });
        }
        function l(e3, t3) {
          return t3 = (0, a.$)(e3, t3), (0, r2.v_)(e3, e3.getIssuerOrigin() + "/api/v1/authn/introspect", t3, {withCredentials: true});
        }
        function p(e3) {
          return !!e3.tx.exists._get(i.STATE_TOKEN_KEY_NAME);
        }
        function h(e3, t3, n3, o2) {
          return o2 = Object.assign({withCredentials: true}, o2), (0, r2.v_)(e3, t3, n3, o2).then(function(t4) {
            return new u.D(e3, t4);
          });
        }
      }, 2375: function(e2, t2, n2) {
        "use strict";
        n2.r(t2), n2.d(t2, {introspectAuthn: function() {
          return r2.LB;
        }, postToTransaction: function() {
          return r2.TG;
        }, resumeTransaction: function() {
          return r2.oN;
        }, transactionExists: function() {
          return r2.lI;
        }, transactionStatus: function() {
          return r2.L0;
        }, transactionStep: function() {
          return r2.FO;
        }, AuthTransaction: function() {
          return o.D;
        }, getPollFn: function() {
          return i.I;
        }, addStateToken: function() {
          return c.$;
        }, getStateToken: function() {
          return c.q;
        }});
        var r2 = n2(4393), o = n2(3291), i = n2(8903), a = n2(5760), u = {};
        for (var s in a)
          ["default", "introspectAuthn", "postToTransaction", "resumeTransaction", "transactionExists", "transactionStatus", "transactionStep", "AuthTransaction", "getPollFn"].indexOf(s) < 0 && (u[s] = function(e3) {
            return a[e3];
          }.bind(0, s));
        n2.d(t2, u);
        var c = n2(459);
      }, 8903: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {I: function() {
          return h;
        }});
        var r2 = n2(6780), o = n2(4771), i = n2(3193), a = n2(6718), u = n2(8750), s = n2(1971), c = n2(9123), f = n2(6573), l = n2(3291), p = n2(459);
        function h(e3, t3, n3) {
          return function(h2) {
            var d, v, y, g;
            (0, o.hj)(h2) ? d = h2 : (0, o.Kn)(h2) && (d = (h2 = h2).delay, v = h2.rememberDevice, y = h2.autoPush, g = h2.transactionCallBack), d || d === 0 || (d = s.DEFAULT_POLLING_DELAY);
            var m = (0, i.Rg)(t3, "next", "poll");
            n3.isPolling = true;
            var b = 0;
            return function o2() {
              return n3.isPolling ? function() {
                var n4 = {};
                if (typeof y == "function")
                  try {
                    n4.autoPush = !!y();
                  } catch (e4) {
                    return Promise.reject(new c.Z("AutoPush resulted in an error."));
                  }
                else
                  y != null && (n4.autoPush = !!y);
                if (typeof v == "function")
                  try {
                    n4.rememberDevice = !!v();
                  } catch (e4) {
                    return Promise.reject(new c.Z("RememberDevice resulted in an error."));
                  }
                else
                  v != null && (n4.rememberDevice = !!v);
                var o3 = m.href + (0, a.UK)(n4);
                return (0, r2.v_)(e3, o3, (0, p.q)(t3), {saveAuthnState: false, withCredentials: true});
              }().then(function(t4) {
                if (b = 0, t4.factorResult && t4.factorResult === "WAITING") {
                  if (!n3.isPolling)
                    throw new f.Z();
                  return typeof g == "function" && g(t4), (0, u.gw)(d).then(o2);
                }
                return n3.isPolling = false, new l.D(e3, t4);
              }).catch(function(e4) {
                if (e4.xhr && (e4.xhr.status === 0 || e4.xhr.status === 429) && b <= 4) {
                  var t4 = 1e3 * Math.pow(2, b);
                  return b++, (0, u.gw)(t4).then(o2);
                }
                throw e4;
              }) : Promise.reject(new f.Z());
            }().catch(function(e4) {
              throw n3.isPolling = false, e4;
            });
          };
        }
      }, 459: function(e2, t2, n2) {
        "use strict";
        function r2(e3, t3) {
          var n3 = {};
          return Object.assign(n3, t3), !n3.stateToken && e3.stateToken && (n3.stateToken = e3.stateToken), n3;
        }
        function o(e3) {
          return r2(e3);
        }
        n2.d(t2, {$: function() {
          return r2;
        }, q: function() {
          return o;
        }});
      }, 3031: function() {
      }, 2516: function() {
      }, 3833: function() {
      }, 9573: function() {
      }, 4283: function(e2, t2, n2) {
        "use strict";
        function r2(e3) {
          return !!(e3 && (e3.accessToken || e3.idToken || e3.refreshToken) && Array.isArray(e3.scopes));
        }
        function o(e3) {
          return e3 && e3.accessToken;
        }
        function i(e3) {
          return e3 && e3.idToken;
        }
        function a(e3) {
          return e3 && e3.refreshToken;
        }
        n2.d(t2, {hD: function() {
          return r2;
        }, hv: function() {
          return o;
        }, sI: function() {
          return i;
        }, z9: function() {
          return a;
        }});
      }, 1925: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {G5: function() {
          return i;
        }, ZT: function() {
          return a;
        }, sG: function() {
          return u;
        }, rZ: function() {
          return s;
        }, mH: function() {
          return c;
        }});
        var r2 = n2(1002);
        function o(e3) {
          return !(!e3 || (0, r2.Z)(e3) !== "object" || Object.values(e3).length === 0);
        }
        function i(e3) {
          return !(!o(e3) || !e3.redirectUri && !e3.responseType);
        }
        function a(e3) {
          return !!i(e3) && !!e3.codeVerifier;
        }
        function u(e3) {
          return !!a(e3) && !!e3.interactionHandle;
        }
        function s(e3) {
          return !!o(e3) && Object.values(e3).find(function(e4) {
            return typeof e4 != "string";
          }) === void 0;
        }
        function c(e3) {
          return !(!i(e3) && !s(e3));
        }
      }, 6854: function() {
      }, 2852: function(e2, t2, n2) {
        "use strict";
        n2.r(t2), n2.d(t2, {isCustomAuthTransactionMeta: function() {
          return a.rZ;
        }, isIdxTransactionMeta: function() {
          return a.sG;
        }, isOAuthTransactionMeta: function() {
          return a.G5;
        }, isPKCETransactionMeta: function() {
          return a.ZT;
        }, isTransactionMeta: function() {
          return a.mH;
        }, AuthenticatorKey: function() {
          return s.pc;
        }, IdxFeature: function() {
          return s.Fw;
        }, IdxStatus: function() {
          return s.Qd;
        }, isAuthenticator: function() {
          return s.H;
        }, isAccessToken: function() {
          return f.hv;
        }, isIDToken: function() {
          return f.sI;
        }, isRefreshToken: function() {
          return f.z9;
        }, isToken: function() {
          return f.hD;
        }});
        var r2 = n2(2516), o = {};
        for (var i in r2)
          i !== "default" && (o[i] = function(e3) {
            return r2[e3];
          }.bind(0, i));
        n2.d(t2, o);
        var a = n2(1925), u = n2(3031);
        for (var i in o = {}, u)
          ["default", "isCustomAuthTransactionMeta", "isIdxTransactionMeta", "isOAuthTransactionMeta", "isPKCETransactionMeta", "isTransactionMeta"].indexOf(i) < 0 && (o[i] = function(e3) {
            return u[e3];
          }.bind(0, i));
        n2.d(t2, o);
        var s = n2(1384), c = n2(3833);
        for (var i in o = {}, c)
          ["default", "isCustomAuthTransactionMeta", "isIdxTransactionMeta", "isOAuthTransactionMeta", "isPKCETransactionMeta", "isTransactionMeta", "AuthenticatorKey", "IdxFeature", "IdxStatus", "isAuthenticator"].indexOf(i) < 0 && (o[i] = function(e3) {
            return c[e3];
          }.bind(0, i));
        n2.d(t2, o);
        var f = n2(4283), l = n2(9573);
        for (var i in o = {}, l)
          ["default", "isCustomAuthTransactionMeta", "isIdxTransactionMeta", "isOAuthTransactionMeta", "isPKCETransactionMeta", "isTransactionMeta", "AuthenticatorKey", "IdxFeature", "IdxStatus", "isAuthenticator", "isAccessToken", "isIDToken", "isRefreshToken", "isToken"].indexOf(i) < 0 && (o[i] = function(e3) {
            return l[e3];
          }.bind(0, i));
        n2.d(t2, o);
        var p = n2(6854);
        for (var i in o = {}, p)
          ["default", "isCustomAuthTransactionMeta", "isIdxTransactionMeta", "isOAuthTransactionMeta", "isPKCETransactionMeta", "isTransactionMeta", "AuthenticatorKey", "IdxFeature", "IdxStatus", "isAuthenticator", "isAccessToken", "isIDToken", "isRefreshToken", "isToken"].indexOf(i) < 0 && (o[i] = function(e3) {
            return p[e3];
          }.bind(0, i));
        n2.d(t2, o);
      }, 146: function(e2, t2, n2) {
        "use strict";
        function r2() {
          return typeof window != "undefined" ? window.console : typeof console != "undefined" ? console : void 0;
        }
        function o() {
          var e3 = r2();
          return e3 && e3.log ? e3 : {log: function() {
          }, warn: function() {
          }, group: function() {
          }, groupEnd: function() {
          }};
        }
        function i(e3) {
          o().warn("[okta-auth-sdk] WARN: " + e3);
        }
        function a(e3) {
          o().warn("[okta-auth-sdk] DEPRECATION: " + e3);
        }
        function u(e3, t3) {
          return function() {
            return a(e3), t3.apply(null, arguments);
          };
        }
        n2.d(t2, {sW: function() {
          return r2;
        }, dr: function() {
          return o;
        }, ZK: function() {
          return i;
        }, Rn: function() {
          return a;
        }, VA: function() {
          return u;
        }});
      }, 305: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {Rn: function() {
          return r2.Rn;
        }, VA: function() {
          return r2.VA;
        }, dr: function() {
          return r2.dr;
        }, sW: function() {
          return r2.sW;
        }, ZK: function() {
          return r2.ZK;
        }, gw: function() {
          return o.gw;
        }, uh: function() {
          return o.uh;
        }, ng: function() {
          return o.ng;
        }, ak: function() {
          return i.ak;
        }, d9: function() {
          return i.d9;
        }, l7: function() {
          return i.l7;
        }, sE: function() {
          return i.sE;
        }, Rg: function() {
          return i.Rg;
        }, CE: function() {
          return i.CE;
        }, YY: function() {
          return i.YY;
        }, mf: function() {
          return a.mf;
        }, hj: function() {
          return a.hj;
        }, Kn: function() {
          return a.Kn;
        }, tI: function() {
          return a.tI;
        }, HD: function() {
          return a.HD;
        }, sD: function() {
          return u.sD;
        }, Qj: function() {
          return u.Qj;
        }, BY: function() {
          return u.BY;
        }, UK: function() {
          return u.UK;
        }, QN: function() {
          return u.QN;
        }});
        var r2 = n2(146), o = n2(8750), i = n2(3193), a = n2(4771), u = n2(6718);
      }, 8750: function(e2, t2, n2) {
        "use strict";
        function r2(e3) {
          var t3 = e3.match(/\d+/g), n3 = Date.UTC(t3[0], t3[1] - 1, t3[2], t3[3], t3[4], t3[5]);
          return new Date(n3).toUTCString();
        }
        function o(e3) {
          for (var t3 = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", n3 = "", r3 = 0, o2 = t3.length; r3 < e3; ++r3)
            n3 += t3[Math.floor(Math.random() * o2)];
          return n3;
        }
        function i(e3) {
          return new Promise(function(t3) {
            setTimeout(t3, e3);
          });
        }
        n2.d(t2, {ng: function() {
          return r2;
        }, uh: function() {
          return o;
        }, gw: function() {
          return i;
        }});
      }, 3193: function(e2, t2, n2) {
        "use strict";
        function r2(e3, t3) {
          var n3 = Array.prototype.slice.call(arguments, 2);
          return function() {
            var r3 = Array.prototype.slice.call(arguments);
            return r3 = n3.concat(r3), e3.apply(t3, r3);
          };
        }
        function o() {
          var e3 = arguments[0], t3 = [].slice.call(arguments, 1);
          return t3.forEach(function(t4) {
            for (var n3 in t4)
              Object.prototype.hasOwnProperty.call(t4, n3) && t4[n3] !== void 0 && (e3[n3] = t4[n3]);
          }), e3;
        }
        function i(e3) {
          var t3 = {};
          for (var n3 in e3)
            if (Object.prototype.hasOwnProperty.call(e3, n3)) {
              var r3 = e3[n3];
              r3 != null && (t3[n3] = r3);
            }
          return t3;
        }
        function a(e3) {
          if (e3) {
            var t3 = JSON.stringify(e3);
            if (t3)
              return JSON.parse(t3);
          }
          return e3;
        }
        function u(e3) {
          for (var t3 = {}, n3 = arguments.length, r3 = new Array(n3 > 1 ? n3 - 1 : 0), o2 = 1; o2 < n3; o2++)
            r3[o2 - 1] = arguments[o2];
          for (var i2 in e3)
            Object.prototype.hasOwnProperty.call(e3, i2) && r3.indexOf(i2) == -1 && (t3[i2] = e3[i2]);
          return a(t3);
        }
        function s(e3, t3) {
          for (var n3 = e3.length; n3--; ) {
            var r3 = e3[n3], o2 = true;
            for (var i2 in t3)
              if (Object.prototype.hasOwnProperty.call(t3, i2) && r3[i2] !== t3[i2]) {
                o2 = false;
                break;
              }
            if (o2)
              return r3;
          }
        }
        function c(e3, t3, n3) {
          if (e3 && e3._links) {
            var r3 = a(e3._links[t3]);
            return r3 && r3.name && n3 ? r3.name === n3 ? r3 : void 0 : r3;
          }
        }
        n2.d(t2, {ak: function() {
          return r2;
        }, l7: function() {
          return o;
        }, YY: function() {
          return i;
        }, d9: function() {
          return a;
        }, CE: function() {
          return u;
        }, sE: function() {
          return s;
        }, Rg: function() {
          return c;
        }});
      }, 4771: function(e2, t2, n2) {
        "use strict";
        function r2(e3) {
          return Object.prototype.toString.call(e3) === "[object String]";
        }
        function o(e3) {
          return Object.prototype.toString.call(e3) === "[object Object]";
        }
        function i(e3) {
          return Object.prototype.toString.call(e3) === "[object Number]";
        }
        function a(e3) {
          return !!e3 && {}.toString.call(e3) === "[object Function]";
        }
        function u(e3) {
          return e3 && e3.finally && typeof e3.finally == "function";
        }
        n2.d(t2, {HD: function() {
          return r2;
        }, Kn: function() {
          return o;
        }, hj: function() {
          return i;
        }, mf: function() {
          return a;
        }, tI: function() {
          return u;
        }});
      }, 6718: function(e2, t2, n2) {
        "use strict";
        function r2(e3) {
          return /^(?:[a-z]+:)?\/\//i.test(e3);
        }
        function o() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t3 = arguments.length > 1 ? arguments[1] : void 0;
          return r2(e3) ? e3 : (t3 = u(t3), e3[0] === "/" ? "".concat(t3).concat(e3) : "".concat(t3, "/").concat(e3));
        }
        function i() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t3 = arguments.length > 1 ? arguments[1] : void 0;
          return r2(e3) && (e3 = e3.substring(t3.length)), e3[0] === "/" ? e3 : "/".concat(e3);
        }
        function a(e3) {
          var t3 = [];
          if (e3 !== null)
            for (var n3 in e3)
              Object.prototype.hasOwnProperty.call(e3, n3) && e3[n3] !== void 0 && e3[n3] !== null && t3.push(n3 + "=" + encodeURIComponent(e3[n3]));
          return t3.length ? "?" + t3.join("&") : "";
        }
        function u(e3) {
          if (e3) {
            var t3 = e3.replace(/^\s+|\s+$/gm, "");
            return t3.replace(/\/+$/, "");
          }
        }
        n2.d(t2, {sD: function() {
          return r2;
        }, BY: function() {
          return o;
        }, QN: function() {
          return i;
        }, UK: function() {
          return a;
        }, Qj: function() {
          return u;
        }});
      }, 3615: function(e2, t2, n2) {
        "use strict";
        var r2 = n2(4575), o = n2(3913), i = n2(2205), a = n2(8585), u = n2(9754);
        function s(e3, t3) {
          (t3 == null || t3 > e3.length) && (t3 = e3.length);
          for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
            r3[n3] = e3[n3];
          return r3;
        }
        var c = function(e3) {
          i(c2, e3);
          var t3, n3, s2 = (t3 = c2, n3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, r3 = u(t3);
            if (n3) {
              var o2 = u(this).constructor;
              e4 = Reflect.construct(r3, arguments, o2);
            } else
              e4 = r3.apply(this, arguments);
            return a(this, e4);
          });
          function c2(e4) {
            var t4;
            return r2(this, c2), (t4 = s2.call(this, e4 || "Promise was canceled")).name = "CancelError", t4;
          }
          return o(c2, [{key: "isCanceled", get: function() {
            return true;
          }}]), c2;
        }(n2(5957)(Error)), f = function() {
          function e3(t3) {
            var n3 = this;
            r2(this, e3), this._cancelHandlers = [], this._isPending = true, this._isCanceled = false, this._rejectOnCancel = true, this._promise = new Promise(function(e4, r3) {
              n3._reject = r3;
              var o2 = function(e5) {
                if (!n3._isPending)
                  throw new Error("The `onCancel` handler was attached after the promise settled.");
                n3._cancelHandlers.push(e5);
              };
              return Object.defineProperties(o2, {shouldReject: {get: function() {
                return n3._rejectOnCancel;
              }, set: function(e5) {
                n3._rejectOnCancel = e5;
              }}}), t3(function(t4) {
                n3._isCanceled && o2.shouldReject || (n3._isPending = false, e4(t4));
              }, function(e5) {
                n3._isPending = false, r3(e5);
              }, o2);
            });
          }
          return o(e3, [{key: "then", value: function(e4, t3) {
            return this._promise.then(e4, t3);
          }}, {key: "catch", value: function(e4) {
            return this._promise.catch(e4);
          }}, {key: "finally", value: function(e4) {
            return this._promise.finally(e4);
          }}, {key: "cancel", value: function(e4) {
            if (this._isPending && !this._isCanceled) {
              if (this._isCanceled = true, this._cancelHandlers.length > 0)
                try {
                  var t3, n3 = function(e5, t4) {
                    var n4 = typeof Symbol != "undefined" && e5[Symbol.iterator] || e5["@@iterator"];
                    if (!n4) {
                      if (Array.isArray(e5) || (n4 = function(e6, t5) {
                        if (e6) {
                          if (typeof e6 == "string")
                            return s(e6, t5);
                          var n5 = Object.prototype.toString.call(e6).slice(8, -1);
                          return n5 === "Object" && e6.constructor && (n5 = e6.constructor.name), n5 === "Map" || n5 === "Set" ? Array.from(e6) : n5 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n5) ? s(e6, t5) : void 0;
                        }
                      }(e5)) || t4 && e5 && typeof e5.length == "number") {
                        n4 && (e5 = n4);
                        var r3 = 0, o2 = function() {
                        };
                        return {s: o2, n: function() {
                          return r3 >= e5.length ? {done: true} : {done: false, value: e5[r3++]};
                        }, e: function(e6) {
                          throw e6;
                        }, f: o2};
                      }
                      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var i2, a2 = true, u2 = false;
                    return {s: function() {
                      n4 = n4.call(e5);
                    }, n: function() {
                      var e6 = n4.next();
                      return a2 = e6.done, e6;
                    }, e: function(e6) {
                      u2 = true, i2 = e6;
                    }, f: function() {
                      try {
                        a2 || n4.return == null || n4.return();
                      } finally {
                        if (u2)
                          throw i2;
                      }
                    }};
                  }(this._cancelHandlers);
                  try {
                    for (n3.s(); !(t3 = n3.n()).done; )
                      (0, t3.value)();
                  } catch (e5) {
                    n3.e(e5);
                  } finally {
                    n3.f();
                  }
                } catch (e5) {
                  return void this._reject(e5);
                }
              this._rejectOnCancel && this._reject(new c(e4));
            }
          }}, {key: "isCanceled", get: function() {
            return this._isCanceled;
          }}], [{key: "fn", value: function(t3) {
            return function() {
              for (var n3 = arguments.length, r3 = new Array(n3), o2 = 0; o2 < n3; o2++)
                r3[o2] = arguments[o2];
              return new e3(function(e4, n4, o3) {
                r3.push(o3), t3.apply(void 0, r3).then(e4, n4);
              });
            };
          }}]), e3;
        }();
        Object.setPrototypeOf(f.prototype, Promise.prototype), e2.exports = f, e2.exports.CancelError = c;
      }, 4098: function(e2, t2) {
        var n2 = typeof self != "undefined" ? self : this, r2 = function() {
          function e3() {
            this.fetch = false, this.DOMException = n2.DOMException;
          }
          return e3.prototype = n2, new e3();
        }();
        !function(e3) {
          !function(t3) {
            var n3 = "URLSearchParams" in e3, r3 = "Symbol" in e3 && "iterator" in Symbol, o2 = "FileReader" in e3 && "Blob" in e3 && function() {
              try {
                return new Blob(), true;
              } catch (e4) {
                return false;
              }
            }(), i = "FormData" in e3, a = "ArrayBuffer" in e3;
            if (a)
              var u = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], s = ArrayBuffer.isView || function(e4) {
                return e4 && u.indexOf(Object.prototype.toString.call(e4)) > -1;
              };
            function c(e4) {
              if (typeof e4 != "string" && (e4 = String(e4)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e4))
                throw new TypeError("Invalid character in header field name");
              return e4.toLowerCase();
            }
            function f(e4) {
              return typeof e4 != "string" && (e4 = String(e4)), e4;
            }
            function l(e4) {
              var t4 = {next: function() {
                var t5 = e4.shift();
                return {done: t5 === void 0, value: t5};
              }};
              return r3 && (t4[Symbol.iterator] = function() {
                return t4;
              }), t4;
            }
            function p(e4) {
              this.map = {}, e4 instanceof p ? e4.forEach(function(e5, t4) {
                this.append(t4, e5);
              }, this) : Array.isArray(e4) ? e4.forEach(function(e5) {
                this.append(e5[0], e5[1]);
              }, this) : e4 && Object.getOwnPropertyNames(e4).forEach(function(t4) {
                this.append(t4, e4[t4]);
              }, this);
            }
            function h(e4) {
              if (e4.bodyUsed)
                return Promise.reject(new TypeError("Already read"));
              e4.bodyUsed = true;
            }
            function d(e4) {
              return new Promise(function(t4, n4) {
                e4.onload = function() {
                  t4(e4.result);
                }, e4.onerror = function() {
                  n4(e4.error);
                };
              });
            }
            function v(e4) {
              var t4 = new FileReader(), n4 = d(t4);
              return t4.readAsArrayBuffer(e4), n4;
            }
            function y(e4) {
              if (e4.slice)
                return e4.slice(0);
              var t4 = new Uint8Array(e4.byteLength);
              return t4.set(new Uint8Array(e4)), t4.buffer;
            }
            function g() {
              return this.bodyUsed = false, this._initBody = function(e4) {
                var t4;
                this._bodyInit = e4, e4 ? typeof e4 == "string" ? this._bodyText = e4 : o2 && Blob.prototype.isPrototypeOf(e4) ? this._bodyBlob = e4 : i && FormData.prototype.isPrototypeOf(e4) ? this._bodyFormData = e4 : n3 && URLSearchParams.prototype.isPrototypeOf(e4) ? this._bodyText = e4.toString() : a && o2 && (t4 = e4) && DataView.prototype.isPrototypeOf(t4) ? (this._bodyArrayBuffer = y(e4.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a && (ArrayBuffer.prototype.isPrototypeOf(e4) || s(e4)) ? this._bodyArrayBuffer = y(e4) : this._bodyText = e4 = Object.prototype.toString.call(e4) : this._bodyText = "", this.headers.get("content-type") || (typeof e4 == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n3 && URLSearchParams.prototype.isPrototypeOf(e4) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
              }, o2 && (this.blob = function() {
                var e4 = h(this);
                if (e4)
                  return e4;
                if (this._bodyBlob)
                  return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]));
              }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? h(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(v);
              }), this.text = function() {
                var e4, t4, n4, r4 = h(this);
                if (r4)
                  return r4;
                if (this._bodyBlob)
                  return e4 = this._bodyBlob, n4 = d(t4 = new FileReader()), t4.readAsText(e4), n4;
                if (this._bodyArrayBuffer)
                  return Promise.resolve(function(e5) {
                    for (var t5 = new Uint8Array(e5), n5 = new Array(t5.length), r5 = 0; r5 < t5.length; r5++)
                      n5[r5] = String.fromCharCode(t5[r5]);
                    return n5.join("");
                  }(this._bodyArrayBuffer));
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }, i && (this.formData = function() {
                return this.text().then(O);
              }), this.json = function() {
                return this.text().then(JSON.parse);
              }, this;
            }
            p.prototype.append = function(e4, t4) {
              e4 = c(e4), t4 = f(t4);
              var n4 = this.map[e4];
              this.map[e4] = n4 ? n4 + ", " + t4 : t4;
            }, p.prototype.delete = function(e4) {
              delete this.map[c(e4)];
            }, p.prototype.get = function(e4) {
              return e4 = c(e4), this.has(e4) ? this.map[e4] : null;
            }, p.prototype.has = function(e4) {
              return this.map.hasOwnProperty(c(e4));
            }, p.prototype.set = function(e4, t4) {
              this.map[c(e4)] = f(t4);
            }, p.prototype.forEach = function(e4, t4) {
              for (var n4 in this.map)
                this.map.hasOwnProperty(n4) && e4.call(t4, this.map[n4], n4, this);
            }, p.prototype.keys = function() {
              var e4 = [];
              return this.forEach(function(t4, n4) {
                e4.push(n4);
              }), l(e4);
            }, p.prototype.values = function() {
              var e4 = [];
              return this.forEach(function(t4) {
                e4.push(t4);
              }), l(e4);
            }, p.prototype.entries = function() {
              var e4 = [];
              return this.forEach(function(t4, n4) {
                e4.push([n4, t4]);
              }), l(e4);
            }, r3 && (p.prototype[Symbol.iterator] = p.prototype.entries);
            var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function b(e4, t4) {
              var n4, r4, o3 = (t4 = t4 || {}).body;
              if (e4 instanceof b) {
                if (e4.bodyUsed)
                  throw new TypeError("Already read");
                this.url = e4.url, this.credentials = e4.credentials, t4.headers || (this.headers = new p(e4.headers)), this.method = e4.method, this.mode = e4.mode, this.signal = e4.signal, o3 || e4._bodyInit == null || (o3 = e4._bodyInit, e4.bodyUsed = true);
              } else
                this.url = String(e4);
              if (this.credentials = t4.credentials || this.credentials || "same-origin", !t4.headers && this.headers || (this.headers = new p(t4.headers)), this.method = (r4 = (n4 = t4.method || this.method || "GET").toUpperCase(), m.indexOf(r4) > -1 ? r4 : n4), this.mode = t4.mode || this.mode || null, this.signal = t4.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && o3)
                throw new TypeError("Body not allowed for GET or HEAD requests");
              this._initBody(o3);
            }
            function O(e4) {
              var t4 = new FormData();
              return e4.trim().split("&").forEach(function(e5) {
                if (e5) {
                  var n4 = e5.split("="), r4 = n4.shift().replace(/\+/g, " "), o3 = n4.join("=").replace(/\+/g, " ");
                  t4.append(decodeURIComponent(r4), decodeURIComponent(o3));
                }
              }), t4;
            }
            function k(e4, t4) {
              t4 || (t4 = {}), this.type = "default", this.status = t4.status === void 0 ? 200 : t4.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t4 ? t4.statusText : "OK", this.headers = new p(t4.headers), this.url = t4.url || "", this._initBody(e4);
            }
            b.prototype.clone = function() {
              return new b(this, {body: this._bodyInit});
            }, g.call(b.prototype), g.call(k.prototype), k.prototype.clone = function() {
              return new k(this._bodyInit, {status: this.status, statusText: this.statusText, headers: new p(this.headers), url: this.url});
            }, k.error = function() {
              var e4 = new k(null, {status: 0, statusText: ""});
              return e4.type = "error", e4;
            };
            var w = [301, 302, 303, 307, 308];
            k.redirect = function(e4, t4) {
              if (w.indexOf(t4) === -1)
                throw new RangeError("Invalid status code");
              return new k(null, {status: t4, headers: {location: e4}});
            }, t3.DOMException = e3.DOMException;
            try {
              new t3.DOMException();
            } catch (e4) {
              t3.DOMException = function(e5, t4) {
                this.message = e5, this.name = t4;
                var n4 = Error(e5);
                this.stack = n4.stack;
              }, t3.DOMException.prototype = Object.create(Error.prototype), t3.DOMException.prototype.constructor = t3.DOMException;
            }
            function T(e4, n4) {
              return new Promise(function(r4, i2) {
                var a2 = new b(e4, n4);
                if (a2.signal && a2.signal.aborted)
                  return i2(new t3.DOMException("Aborted", "AbortError"));
                var u2 = new XMLHttpRequest();
                function s2() {
                  u2.abort();
                }
                u2.onload = function() {
                  var e5, t4, n5 = {status: u2.status, statusText: u2.statusText, headers: (e5 = u2.getAllResponseHeaders() || "", t4 = new p(), e5.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e6) {
                    var n6 = e6.split(":"), r5 = n6.shift().trim();
                    if (r5) {
                      var o4 = n6.join(":").trim();
                      t4.append(r5, o4);
                    }
                  }), t4)};
                  n5.url = "responseURL" in u2 ? u2.responseURL : n5.headers.get("X-Request-URL");
                  var o3 = "response" in u2 ? u2.response : u2.responseText;
                  r4(new k(o3, n5));
                }, u2.onerror = function() {
                  i2(new TypeError("Network request failed"));
                }, u2.ontimeout = function() {
                  i2(new TypeError("Network request failed"));
                }, u2.onabort = function() {
                  i2(new t3.DOMException("Aborted", "AbortError"));
                }, u2.open(a2.method, a2.url, true), a2.credentials === "include" ? u2.withCredentials = true : a2.credentials === "omit" && (u2.withCredentials = false), "responseType" in u2 && o2 && (u2.responseType = "blob"), a2.headers.forEach(function(e5, t4) {
                  u2.setRequestHeader(t4, e5);
                }), a2.signal && (a2.signal.addEventListener("abort", s2), u2.onreadystatechange = function() {
                  u2.readyState === 4 && a2.signal.removeEventListener("abort", s2);
                }), u2.send(a2._bodyInit === void 0 ? null : a2._bodyInit);
              });
            }
            T.polyfill = true, e3.fetch || (e3.fetch = T, e3.Headers = p, e3.Request = b, e3.Response = k), t3.Headers = p, t3.Request = b, t3.Response = k, t3.fetch = T, Object.defineProperty(t3, "__esModule", {value: true});
          }({});
        }(r2), r2.fetch.ponyfill = true, delete r2.fetch.polyfill;
        var o = r2;
        (t2 = o.fetch).default = o.fetch, t2.fetch = o.fetch, t2.Headers = o.Headers, t2.Request = o.Request, t2.Response = o.Response, e2.exports = t2;
      }, 5643: function(e2) {
        e2.exports = false;
      }, 5666: function(e2) {
        var t2 = function(e3) {
          "use strict";
          var t3, n2 = Object.prototype, r2 = n2.hasOwnProperty, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag";
          function s(e4, t4, n3) {
            return Object.defineProperty(e4, t4, {value: n3, enumerable: true, configurable: true, writable: true}), e4[t4];
          }
          try {
            s({}, "");
          } catch (e4) {
            s = function(e5, t4, n3) {
              return e5[t4] = n3;
            };
          }
          function c(e4, t4, n3, r3) {
            var o2 = t4 && t4.prototype instanceof y ? t4 : y, i2 = Object.create(o2.prototype), a2 = new P(r3 || []);
            return i2._invoke = function(e5, t5, n4) {
              var r4 = l;
              return function(o3, i3) {
                if (r4 === h)
                  throw new Error("Generator is already running");
                if (r4 === d) {
                  if (o3 === "throw")
                    throw i3;
                  return x();
                }
                for (n4.method = o3, n4.arg = i3; ; ) {
                  var a3 = n4.delegate;
                  if (a3) {
                    var u2 = S(a3, n4);
                    if (u2) {
                      if (u2 === v)
                        continue;
                      return u2;
                    }
                  }
                  if (n4.method === "next")
                    n4.sent = n4._sent = n4.arg;
                  else if (n4.method === "throw") {
                    if (r4 === l)
                      throw r4 = d, n4.arg;
                    n4.dispatchException(n4.arg);
                  } else
                    n4.method === "return" && n4.abrupt("return", n4.arg);
                  r4 = h;
                  var s2 = f(e5, t5, n4);
                  if (s2.type === "normal") {
                    if (r4 = n4.done ? d : p, s2.arg === v)
                      continue;
                    return {value: s2.arg, done: n4.done};
                  }
                  s2.type === "throw" && (r4 = d, n4.method = "throw", n4.arg = s2.arg);
                }
              };
            }(e4, n3, a2), i2;
          }
          function f(e4, t4, n3) {
            try {
              return {type: "normal", arg: e4.call(t4, n3)};
            } catch (e5) {
              return {type: "throw", arg: e5};
            }
          }
          e3.wrap = c;
          var l = "suspendedStart", p = "suspendedYield", h = "executing", d = "completed", v = {};
          function y() {
          }
          function g() {
          }
          function m() {
          }
          var b = {};
          b[i] = function() {
            return this;
          };
          var O = Object.getPrototypeOf, k = O && O(O(R([])));
          k && k !== n2 && r2.call(k, i) && (b = k);
          var w = m.prototype = y.prototype = Object.create(b);
          function T(e4) {
            ["next", "throw", "return"].forEach(function(t4) {
              s(e4, t4, function(e5) {
                return this._invoke(t4, e5);
              });
            });
          }
          function E(e4, t4) {
            function n3(o3, i2, a2, u2) {
              var s2 = f(e4[o3], e4, i2);
              if (s2.type !== "throw") {
                var c2 = s2.arg, l2 = c2.value;
                return l2 && typeof l2 == "object" && r2.call(l2, "__await") ? t4.resolve(l2.__await).then(function(e5) {
                  n3("next", e5, a2, u2);
                }, function(e5) {
                  n3("throw", e5, a2, u2);
                }) : t4.resolve(l2).then(function(e5) {
                  c2.value = e5, a2(c2);
                }, function(e5) {
                  return n3("throw", e5, a2, u2);
                });
              }
              u2(s2.arg);
            }
            var o2;
            this._invoke = function(e5, r3) {
              function i2() {
                return new t4(function(t5, o3) {
                  n3(e5, r3, t5, o3);
                });
              }
              return o2 = o2 ? o2.then(i2, i2) : i2();
            };
          }
          function S(e4, n3) {
            var r3 = e4.iterator[n3.method];
            if (r3 === t3) {
              if (n3.delegate = null, n3.method === "throw") {
                if (e4.iterator.return && (n3.method = "return", n3.arg = t3, S(e4, n3), n3.method === "throw"))
                  return v;
                n3.method = "throw", n3.arg = new TypeError("The iterator does not provide a 'throw' method");
              }
              return v;
            }
            var o2 = f(r3, e4.iterator, n3.arg);
            if (o2.type === "throw")
              return n3.method = "throw", n3.arg = o2.arg, n3.delegate = null, v;
            var i2 = o2.arg;
            return i2 ? i2.done ? (n3[e4.resultName] = i2.value, n3.next = e4.nextLoc, n3.method !== "return" && (n3.method = "next", n3.arg = t3), n3.delegate = null, v) : i2 : (n3.method = "throw", n3.arg = new TypeError("iterator result is not an object"), n3.delegate = null, v);
          }
          function _(e4) {
            var t4 = {tryLoc: e4[0]};
            1 in e4 && (t4.catchLoc = e4[1]), 2 in e4 && (t4.finallyLoc = e4[2], t4.afterLoc = e4[3]), this.tryEntries.push(t4);
          }
          function A(e4) {
            var t4 = e4.completion || {};
            t4.type = "normal", delete t4.arg, e4.completion = t4;
          }
          function P(e4) {
            this.tryEntries = [{tryLoc: "root"}], e4.forEach(_, this), this.reset(true);
          }
          function R(e4) {
            if (e4) {
              var n3 = e4[i];
              if (n3)
                return n3.call(e4);
              if (typeof e4.next == "function")
                return e4;
              if (!isNaN(e4.length)) {
                var o2 = -1, a2 = function n4() {
                  for (; ++o2 < e4.length; )
                    if (r2.call(e4, o2))
                      return n4.value = e4[o2], n4.done = false, n4;
                  return n4.value = t3, n4.done = true, n4;
                };
                return a2.next = a2;
              }
            }
            return {next: x};
          }
          function x() {
            return {value: t3, done: true};
          }
          return g.prototype = w.constructor = m, m.constructor = g, g.displayName = s(m, u, "GeneratorFunction"), e3.isGeneratorFunction = function(e4) {
            var t4 = typeof e4 == "function" && e4.constructor;
            return !!t4 && (t4 === g || (t4.displayName || t4.name) === "GeneratorFunction");
          }, e3.mark = function(e4) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e4, m) : (e4.__proto__ = m, s(e4, u, "GeneratorFunction")), e4.prototype = Object.create(w), e4;
          }, e3.awrap = function(e4) {
            return {__await: e4};
          }, T(E.prototype), E.prototype[a] = function() {
            return this;
          }, e3.AsyncIterator = E, e3.async = function(t4, n3, r3, o2, i2) {
            i2 === void 0 && (i2 = Promise);
            var a2 = new E(c(t4, n3, r3, o2), i2);
            return e3.isGeneratorFunction(n3) ? a2 : a2.next().then(function(e4) {
              return e4.done ? e4.value : a2.next();
            });
          }, T(w), s(w, u, "Generator"), w[i] = function() {
            return this;
          }, w.toString = function() {
            return "[object Generator]";
          }, e3.keys = function(e4) {
            var t4 = [];
            for (var n3 in e4)
              t4.push(n3);
            return t4.reverse(), function n4() {
              for (; t4.length; ) {
                var r3 = t4.pop();
                if (r3 in e4)
                  return n4.value = r3, n4.done = false, n4;
              }
              return n4.done = true, n4;
            };
          }, e3.values = R, P.prototype = {constructor: P, reset: function(e4) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t3, this.done = false, this.delegate = null, this.method = "next", this.arg = t3, this.tryEntries.forEach(A), !e4)
              for (var n3 in this)
                n3.charAt(0) === "t" && r2.call(this, n3) && !isNaN(+n3.slice(1)) && (this[n3] = t3);
          }, stop: function() {
            this.done = true;
            var e4 = this.tryEntries[0].completion;
            if (e4.type === "throw")
              throw e4.arg;
            return this.rval;
          }, dispatchException: function(e4) {
            if (this.done)
              throw e4;
            var n3 = this;
            function o2(r3, o3) {
              return u2.type = "throw", u2.arg = e4, n3.next = r3, o3 && (n3.method = "next", n3.arg = t3), !!o3;
            }
            for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
              var a2 = this.tryEntries[i2], u2 = a2.completion;
              if (a2.tryLoc === "root")
                return o2("end");
              if (a2.tryLoc <= this.prev) {
                var s2 = r2.call(a2, "catchLoc"), c2 = r2.call(a2, "finallyLoc");
                if (s2 && c2) {
                  if (this.prev < a2.catchLoc)
                    return o2(a2.catchLoc, true);
                  if (this.prev < a2.finallyLoc)
                    return o2(a2.finallyLoc);
                } else if (s2) {
                  if (this.prev < a2.catchLoc)
                    return o2(a2.catchLoc, true);
                } else {
                  if (!c2)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < a2.finallyLoc)
                    return o2(a2.finallyLoc);
                }
              }
            }
          }, abrupt: function(e4, t4) {
            for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
              var o2 = this.tryEntries[n3];
              if (o2.tryLoc <= this.prev && r2.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
                var i2 = o2;
                break;
              }
            }
            i2 && (e4 === "break" || e4 === "continue") && i2.tryLoc <= t4 && t4 <= i2.finallyLoc && (i2 = null);
            var a2 = i2 ? i2.completion : {};
            return a2.type = e4, a2.arg = t4, i2 ? (this.method = "next", this.next = i2.finallyLoc, v) : this.complete(a2);
          }, complete: function(e4, t4) {
            if (e4.type === "throw")
              throw e4.arg;
            return e4.type === "break" || e4.type === "continue" ? this.next = e4.arg : e4.type === "return" ? (this.rval = this.arg = e4.arg, this.method = "return", this.next = "end") : e4.type === "normal" && t4 && (this.next = t4), v;
          }, finish: function(e4) {
            for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
              var n3 = this.tryEntries[t4];
              if (n3.finallyLoc === e4)
                return this.complete(n3.completion, n3.afterLoc), A(n3), v;
            }
          }, catch: function(e4) {
            for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
              var n3 = this.tryEntries[t4];
              if (n3.tryLoc === e4) {
                var r3 = n3.completion;
                if (r3.type === "throw") {
                  var o2 = r3.arg;
                  A(n3);
                }
                return o2;
              }
            }
            throw new Error("illegal catch attempt");
          }, delegateYield: function(e4, n3, r3) {
            return this.delegate = {iterator: R(e4), resultName: n3, nextLoc: r3}, this.method === "next" && (this.arg = t3), v;
          }}, e3;
        }(e2.exports);
        try {
          regeneratorRuntime = t2;
        } catch (e3) {
          Function("r", "regeneratorRuntime = r")(t2);
        }
      }, 4279: function(e2) {
        function t2() {
        }
        t2.prototype = {on: function(e3, t3, n2) {
          var r2 = this.e || (this.e = {});
          return (r2[e3] || (r2[e3] = [])).push({fn: t3, ctx: n2}), this;
        }, once: function(e3, t3, n2) {
          var r2 = this;
          function o() {
            r2.off(e3, o), t3.apply(n2, arguments);
          }
          return o._ = t3, this.on(e3, o, n2);
        }, emit: function(e3) {
          for (var t3 = [].slice.call(arguments, 1), n2 = ((this.e || (this.e = {}))[e3] || []).slice(), r2 = 0, o = n2.length; r2 < o; r2++)
            n2[r2].fn.apply(n2[r2].ctx, t3);
          return this;
        }, off: function(e3, t3) {
          var n2 = this.e || (this.e = {}), r2 = n2[e3], o = [];
          if (r2 && t3)
            for (var i = 0, a = r2.length; i < a; i++)
              r2[i].fn !== t3 && r2[i].fn._ !== t3 && o.push(r2[i]);
          return o.length ? n2[e3] = o : delete n2[e3], this;
        }}, e2.exports = t2;
      }, 199: function() {
      }, 907: function(e2, t2, n2) {
        "use strict";
        function r2(e3, t3) {
          (t3 == null || t3 > e3.length) && (t3 = e3.length);
          for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
            r3[n3] = e3[n3];
          return r3;
        }
        n2.d(t2, {Z: function() {
          return r2;
        }});
      }, 7326: function(e2, t2, n2) {
        "use strict";
        function r2(e3) {
          if (e3 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        n2.d(t2, {Z: function() {
          return r2;
        }});
      }, 5861: function(e2, t2, n2) {
        "use strict";
        function r2(e3, t3, n3, r3, o2, i, a) {
          try {
            var u = e3[i](a), s = u.value;
          } catch (e4) {
            return void n3(e4);
          }
          u.done ? t3(s) : Promise.resolve(s).then(r3, o2);
        }
        function o(e3) {
          return function() {
            var t3 = this, n3 = arguments;
            return new Promise(function(o2, i) {
              var a = e3.apply(t3, n3);
              function u(e4) {
                r2(a, o2, i, u, s, "next", e4);
              }
              function s(e4) {
                r2(a, o2, i, u, s, "throw", e4);
              }
              u(void 0);
            });
          };
        }
        n2.d(t2, {Z: function() {
          return o;
        }});
      }, 5671: function(e2, t2, n2) {
        "use strict";
        function r2(e3, t3) {
          if (!(e3 instanceof t3))
            throw new TypeError("Cannot call a class as a function");
        }
        n2.d(t2, {Z: function() {
          return r2;
        }});
      }, 3144: function(e2, t2, n2) {
        "use strict";
        function r2(e3, t3) {
          for (var n3 = 0; n3 < t3.length; n3++) {
            var r3 = t3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
          }
        }
        function o(e3, t3, n3) {
          return t3 && r2(e3.prototype, t3), n3 && r2(e3, n3), e3;
        }
        n2.d(t2, {Z: function() {
          return o;
        }});
      }, 4942: function(e2, t2, n2) {
        "use strict";
        function r2(e3, t3, n3) {
          return t3 in e3 ? Object.defineProperty(e3, t3, {value: n3, enumerable: true, configurable: true, writable: true}) : e3[t3] = n3, e3;
        }
        n2.d(t2, {Z: function() {
          return r2;
        }});
      }, 1120: function(e2, t2, n2) {
        "use strict";
        function r2(e3) {
          return r2 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, r2(e3);
        }
        n2.d(t2, {Z: function() {
          return r2;
        }});
      }, 136: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {Z: function() {
          return o;
        }});
        var r2 = n2(9611);
        function o(e3, t3) {
          if (typeof t3 != "function" && t3 !== null)
            throw new TypeError("Super expression must either be null or a function");
          e3.prototype = Object.create(t3 && t3.prototype, {constructor: {value: e3, writable: true, configurable: true}}), t3 && (0, r2.Z)(e3, t3);
        }
      }, 4925: function(e2, t2, n2) {
        "use strict";
        function r2(e3, t3) {
          if (e3 == null)
            return {};
          var n3, r3, o = function(e4, t4) {
            if (e4 == null)
              return {};
            var n4, r4, o2 = {}, i2 = Object.keys(e4);
            for (r4 = 0; r4 < i2.length; r4++)
              n4 = i2[r4], t4.indexOf(n4) >= 0 || (o2[n4] = e4[n4]);
            return o2;
          }(e3, t3);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e3);
            for (r3 = 0; r3 < i.length; r3++)
              n3 = i[r3], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, n3) && (o[n3] = e3[n3]);
          }
          return o;
        }
        n2.d(t2, {Z: function() {
          return r2;
        }});
      }, 2963: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {Z: function() {
          return i;
        }});
        var r2 = n2(1002), o = n2(7326);
        function i(e3, t3) {
          return !t3 || (0, r2.Z)(t3) !== "object" && typeof t3 != "function" ? (0, o.Z)(e3) : t3;
        }
      }, 9611: function(e2, t2, n2) {
        "use strict";
        function r2(e3, t3) {
          return r2 = Object.setPrototypeOf || function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, r2(e3, t3);
        }
        n2.d(t2, {Z: function() {
          return r2;
        }});
      }, 885: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {Z: function() {
          return o;
        }});
        var r2 = n2(181);
        function o(e3, t3) {
          return function(e4) {
            if (Array.isArray(e4))
              return e4;
          }(e3) || function(e4, t4) {
            var n3 = e4 == null ? null : typeof Symbol != "undefined" && e4[Symbol.iterator] || e4["@@iterator"];
            if (n3 != null) {
              var r3, o2, i = [], a = true, u = false;
              try {
                for (n3 = n3.call(e4); !(a = (r3 = n3.next()).done) && (i.push(r3.value), !t4 || i.length !== t4); a = true)
                  ;
              } catch (e5) {
                u = true, o2 = e5;
              } finally {
                try {
                  a || n3.return == null || n3.return();
                } finally {
                  if (u)
                    throw o2;
                }
              }
              return i;
            }
          }(e3, t3) || (0, r2.Z)(e3, t3) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
      }, 2982: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {Z: function() {
          return i;
        }});
        var r2 = n2(907), o = n2(181);
        function i(e3) {
          return function(e4) {
            if (Array.isArray(e4))
              return (0, r2.Z)(e4);
          }(e3) || function(e4) {
            if (typeof Symbol != "undefined" && e4[Symbol.iterator] != null || e4["@@iterator"] != null)
              return Array.from(e4);
          }(e3) || (0, o.Z)(e3) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
      }, 1002: function(e2, t2, n2) {
        "use strict";
        function r2(e3) {
          return r2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, r2(e3);
        }
        n2.d(t2, {Z: function() {
          return r2;
        }});
      }, 181: function(e2, t2, n2) {
        "use strict";
        n2.d(t2, {Z: function() {
          return o;
        }});
        var r2 = n2(907);
        function o(e3, t3) {
          if (e3) {
            if (typeof e3 == "string")
              return (0, r2.Z)(e3, t3);
            var n3 = Object.prototype.toString.call(e3).slice(8, -1);
            return n3 === "Object" && e3.constructor && (n3 = e3.constructor.name), n3 === "Map" || n3 === "Set" ? Array.from(e3) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? (0, r2.Z)(e3, t3) : void 0;
          }
        }
      }}, t = {};
      function n(r2) {
        var o = t[r2];
        if (o !== void 0)
          return o.exports;
        var i = t[r2] = {exports: {}};
        return e[r2].call(i.exports, i, i.exports, n), i.exports;
      }
      n.n = function(e2) {
        var t2 = e2 && e2.__esModule ? function() {
          return e2.default;
        } : function() {
          return e2;
        };
        return n.d(t2, {a: t2}), t2;
      }, n.d = function(e2, t2) {
        for (var r2 in t2)
          n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, {enumerable: true, get: t2[r2]});
      }, n.g = function() {
        if (typeof globalThis == "object")
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e2) {
          if (typeof window == "object")
            return window;
        }
      }(), n.o = function(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }, n.r = function(e2) {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e2, "__esModule", {value: true});
      };
      var r = {};
      return function() {
        "use strict";
        n.r(r), n.d(r, {OktaAuth: function() {
          return t2.Z;
        }, ACCESS_TOKEN_STORAGE_KEY: function() {
          return o.ACCESS_TOKEN_STORAGE_KEY;
        }, CACHE_STORAGE_NAME: function() {
          return o.CACHE_STORAGE_NAME;
        }, DEFAULT_CACHE_DURATION: function() {
          return o.DEFAULT_CACHE_DURATION;
        }, DEFAULT_CODE_CHALLENGE_METHOD: function() {
          return o.DEFAULT_CODE_CHALLENGE_METHOD;
        }, DEFAULT_MAX_CLOCK_SKEW: function() {
          return o.DEFAULT_MAX_CLOCK_SKEW;
        }, DEFAULT_POLLING_DELAY: function() {
          return o.DEFAULT_POLLING_DELAY;
        }, IDX_API_VERSION: function() {
          return o.IDX_API_VERSION;
        }, IDX_RESPONSE_STORAGE_NAME: function() {
          return o.IDX_RESPONSE_STORAGE_NAME;
        }, ID_TOKEN_STORAGE_KEY: function() {
          return o.ID_TOKEN_STORAGE_KEY;
        }, MAX_VERIFIER_LENGTH: function() {
          return o.MAX_VERIFIER_LENGTH;
        }, MIN_VERIFIER_LENGTH: function() {
          return o.MIN_VERIFIER_LENGTH;
        }, ORIGINAL_URI_STORAGE_NAME: function() {
          return o.ORIGINAL_URI_STORAGE_NAME;
        }, PKCE_STORAGE_NAME: function() {
          return o.PKCE_STORAGE_NAME;
        }, REDIRECT_NONCE_COOKIE_NAME: function() {
          return o.REDIRECT_NONCE_COOKIE_NAME;
        }, REDIRECT_OAUTH_PARAMS_NAME: function() {
          return o.REDIRECT_OAUTH_PARAMS_NAME;
        }, REDIRECT_STATE_COOKIE_NAME: function() {
          return o.REDIRECT_STATE_COOKIE_NAME;
        }, REFERRER_PATH_STORAGE_KEY: function() {
          return o.REFERRER_PATH_STORAGE_KEY;
        }, REFRESH_TOKEN_STORAGE_KEY: function() {
          return o.REFRESH_TOKEN_STORAGE_KEY;
        }, SHARED_TRANSACTION_STORAGE_NAME: function() {
          return o.SHARED_TRANSACTION_STORAGE_NAME;
        }, STATE_TOKEN_KEY_NAME: function() {
          return o.STATE_TOKEN_KEY_NAME;
        }, TOKEN_STORAGE_NAME: function() {
          return o.TOKEN_STORAGE_NAME;
        }, TRANSACTION_STORAGE_NAME: function() {
          return o.TRANSACTION_STORAGE_NAME;
        }, authenticate: function() {
          return i.YR;
        }, canProceed: function() {
          return i.Ch;
        }, cancel: function() {
          return i.al;
        }, clearTransactionMeta: function() {
          return i.Jm;
        }, createTransactionMeta: function() {
          return i.Xc;
        }, getSavedTransactionMeta: function() {
          return i.uN;
        }, getTransactionMeta: function() {
          return i.Co;
        }, handleEmailVerifyCallback: function() {
          return i.Jn;
        }, handleInteractionCodeRedirect: function() {
          return i.Xx;
        }, hasSavedInteractionHandle: function() {
          return i.$0;
        }, interact: function() {
          return i.EW;
        }, introspect: function() {
          return i.L8;
        }, isEmailVerifyCallback: function() {
          return i.GA;
        }, isEmailVerifyCallbackError: function() {
          return i.gc;
        }, isTransactionMetaValid: function() {
          return i.Wf;
        }, isTransactionMetaValidForFlow: function() {
          return i.bl;
        }, isTransactionMetaValidForOptions: function() {
          return i.UC;
        }, parseEmailVerifyCallback: function() {
          return i.mo;
        }, poll: function() {
          return i.$l;
        }, proceed: function() {
          return i.xc;
        }, recoverPassword: function() {
          return i.M4;
        }, register: function() {
          return i.z2;
        }, saveTransactionMeta: function() {
          return i.r0;
        }, startTransaction: function() {
          return i.Yr;
        }, unlockAccount: function() {
          return i.le;
        }, AuthApiError: function() {
          return f.Ws;
        }, AuthPollStopError: function() {
          return f.j2;
        }, AuthSdkError: function() {
          return f.R;
        }, OAuthError: function() {
          return f.BK;
        }, isAuthApiError: function() {
          return f.Tw;
        }, addListener: function() {
          return l.NH;
        }, addPostMessageListener: function() {
          return l.iC;
        }, assertPKCESupport: function() {
          return l.vz;
        }, buildAuthorizeParams: function() {
          return l.R0;
        }, convertTokenParamsToOAuthParams: function() {
          return l._6;
        }, createOAuthMeta: function() {
          return l.H;
        }, decodeToken: function() {
          return l.TD;
        }, exchangeCodeForTokens: function() {
          return l.rz;
        }, generateNonce: function() {
          return l.PY;
        }, generateState: function() {
          return l.aV;
        }, getDefaultTokenParams: function() {
          return l.Dx;
        }, getHashOrSearch: function() {
          return l.O2;
        }, getKey: function() {
          return l.km;
        }, getOAuthBaseUrl: function() {
          return l.zf;
        }, getOAuthDomain: function() {
          return l.Xp;
        }, getOAuthUrls: function() {
          return l.Fc;
        }, getToken: function() {
          return l.LP;
        }, getUserInfo: function() {
          return l.bG;
        }, getWellKnown: function() {
          return l.ES;
        }, getWithPopup: function() {
          return l.dh;
        }, getWithRedirect: function() {
          return l.Hq;
        }, getWithoutPrompt: function() {
          return l.y6;
        }, handleOAuthResponse: function() {
          return l.sw;
        }, hasAuthorizationCode: function() {
          return l.ZP;
        }, hasErrorInUrl: function() {
          return l.hg;
        }, hasInteractionCode: function() {
          return l.d_;
        }, hasTokensInHash: function() {
          return l.kU;
        }, isAuthorizationCodeError: function() {
          return l.tC;
        }, isCodeFlow: function() {
          return l.Ik;
        }, isInteractionRequired: function() {
          return l.wc;
        }, isInteractionRequiredError: function() {
          return l.Cf;
        }, isLoginRedirect: function() {
          return l.gM;
        }, isRedirectUri: function() {
          return l.Qs;
        }, isRefreshTokenError: function() {
          return l.Yo;
        }, isSameRefreshToken: function() {
          return l.q0;
        }, loadFrame: function() {
          return l.Rl;
        }, loadPopup: function() {
          return l.pU;
        }, parseFromUrl: function() {
          return l.ko;
        }, pkce: function() {
          return l.U5;
        }, postRefreshToken: function() {
          return l.Dp;
        }, postToTokenEndpoint: function() {
          return l.ti;
        }, preparePKCE: function() {
          return l.mi;
        }, prepareTokenParams: function() {
          return l.wu;
        }, removeListener: function() {
          return l.ys;
        }, renewToken: function() {
          return l.$m;
        }, renewTokens: function() {
          return l.IK;
        }, renewTokensWithRefresh: function() {
          return l.Rm;
        }, revokeToken: function() {
          return l.PX;
        }, urlParamsToObject: function() {
          return l.vL;
        }, validateClaims: function() {
          return l.pj;
        }, validateCodeChallengeMethod: function() {
          return l.br;
        }, validateToken: function() {
          return l.Rp;
        }, verifyToken: function() {
          return l.WX;
        }, StorageManager: function() {
          return p.A;
        }, EVENT_ADDED: function() {
          return h.O3;
        }, EVENT_ERROR: function() {
          return h.$I;
        }, EVENT_EXPIRED: function() {
          return h.$Y;
        }, EVENT_REMOVED: function() {
          return h.FT;
        }, EVENT_RENEWED: function() {
          return h.E;
        }, TokenManager: function() {
          return h.Md;
        }, AuthStateManager: function() {
          return d.E;
        }, INITIAL_AUTH_STATE: function() {
          return d.a;
        }, bind: function() {
          return v.ak;
        }, clone: function() {
          return v.d9;
        }, delay: function() {
          return v.gw;
        }, deprecate: function() {
          return v.Rn;
        }, deprecateWrap: function() {
          return v.VA;
        }, extend: function() {
          return v.l7;
        }, find: function() {
          return v.sE;
        }, genRandomString: function() {
          return v.uh;
        }, getConsole: function() {
          return v.dr;
        }, getLink: function() {
          return v.Rg;
        }, getNativeConsole: function() {
          return v.sW;
        }, isAbsoluteUrl: function() {
          return v.sD;
        }, isFunction: function() {
          return v.mf;
        }, isNumber: function() {
          return v.hj;
        }, isObject: function() {
          return v.Kn;
        }, isPromise: function() {
          return v.tI;
        }, isString: function() {
          return v.HD;
        }, isoToUTCString: function() {
          return v.ng;
        }, omit: function() {
          return v.CE;
        }, removeNils: function() {
          return v.YY;
        }, removeTrailingSlash: function() {
          return v.Qj;
        }, toAbsoluteUrl: function() {
          return v.BY;
        }, toQueryString: function() {
          return v.UK;
        }, toRelativeUrl: function() {
          return v.QN;
        }, warn: function() {
          return v.ZK;
        }, crypto: function() {
          return e2;
        }});
        var e2 = n(9326), t2 = n(7725), o = n(1971), i = n(6861), a = n(2852), u = {};
        for (var s in a)
          ["default", "OktaAuth", "crypto", "ACCESS_TOKEN_STORAGE_KEY", "CACHE_STORAGE_NAME", "DEFAULT_CACHE_DURATION", "DEFAULT_CODE_CHALLENGE_METHOD", "DEFAULT_MAX_CLOCK_SKEW", "DEFAULT_POLLING_DELAY", "IDX_API_VERSION", "IDX_RESPONSE_STORAGE_NAME", "ID_TOKEN_STORAGE_KEY", "MAX_VERIFIER_LENGTH", "MIN_VERIFIER_LENGTH", "ORIGINAL_URI_STORAGE_NAME", "PKCE_STORAGE_NAME", "REDIRECT_NONCE_COOKIE_NAME", "REDIRECT_OAUTH_PARAMS_NAME", "REDIRECT_STATE_COOKIE_NAME", "REFERRER_PATH_STORAGE_KEY", "REFRESH_TOKEN_STORAGE_KEY", "SHARED_TRANSACTION_STORAGE_NAME", "STATE_TOKEN_KEY_NAME", "TOKEN_STORAGE_NAME", "TRANSACTION_STORAGE_NAME", "authenticate", "canProceed", "cancel", "clearTransactionMeta", "createTransactionMeta", "getSavedTransactionMeta", "getTransactionMeta", "handleEmailVerifyCallback", "handleInteractionCodeRedirect", "hasSavedInteractionHandle", "interact", "introspect", "isEmailVerifyCallback", "isEmailVerifyCallbackError", "isTransactionMetaValid", "isTransactionMetaValidForFlow", "isTransactionMetaValidForOptions", "parseEmailVerifyCallback", "poll", "proceed", "recoverPassword", "register", "saveTransactionMeta", "startTransaction", "unlockAccount"].indexOf(s) < 0 && (u[s] = function(e3) {
            return a[e3];
          }.bind(0, s));
        n.d(r, u);
        var c = n(2375);
        for (var s in u = {}, c)
          ["default", "OktaAuth", "crypto", "ACCESS_TOKEN_STORAGE_KEY", "CACHE_STORAGE_NAME", "DEFAULT_CACHE_DURATION", "DEFAULT_CODE_CHALLENGE_METHOD", "DEFAULT_MAX_CLOCK_SKEW", "DEFAULT_POLLING_DELAY", "IDX_API_VERSION", "IDX_RESPONSE_STORAGE_NAME", "ID_TOKEN_STORAGE_KEY", "MAX_VERIFIER_LENGTH", "MIN_VERIFIER_LENGTH", "ORIGINAL_URI_STORAGE_NAME", "PKCE_STORAGE_NAME", "REDIRECT_NONCE_COOKIE_NAME", "REDIRECT_OAUTH_PARAMS_NAME", "REDIRECT_STATE_COOKIE_NAME", "REFERRER_PATH_STORAGE_KEY", "REFRESH_TOKEN_STORAGE_KEY", "SHARED_TRANSACTION_STORAGE_NAME", "STATE_TOKEN_KEY_NAME", "TOKEN_STORAGE_NAME", "TRANSACTION_STORAGE_NAME", "authenticate", "canProceed", "cancel", "clearTransactionMeta", "createTransactionMeta", "getSavedTransactionMeta", "getTransactionMeta", "handleEmailVerifyCallback", "handleInteractionCodeRedirect", "hasSavedInteractionHandle", "interact", "introspect", "isEmailVerifyCallback", "isEmailVerifyCallbackError", "isTransactionMetaValid", "isTransactionMetaValidForFlow", "isTransactionMetaValidForOptions", "parseEmailVerifyCallback", "poll", "proceed", "recoverPassword", "register", "saveTransactionMeta", "startTransaction", "unlockAccount", "AuthenticatorKey", "IdxFeature", "IdxStatus", "isAccessToken", "isAuthenticator", "isCustomAuthTransactionMeta", "isIDToken", "isIdxTransactionMeta", "isOAuthTransactionMeta", "isPKCETransactionMeta", "isRefreshToken", "isToken", "isTransactionMeta"].indexOf(s) < 0 && (u[s] = function(e3) {
            return c[e3];
          }.bind(0, s));
        n.d(r, u);
        var f = n(7301), l = n(1416), p = n(6311), h = (n(6529), n(8092)), d = n(7913), v = n(305);
      }(), r;
    }();
  });
});
export default require_okta_auth_js_umd();
