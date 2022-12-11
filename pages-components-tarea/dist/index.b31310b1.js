// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var _router = require("./router");
var _header = require("./component/header");
var _footer = require("./component/footer");
var _text = require("./component/text");
var _formInput = require("./component/form_input");
var _formBtn = require("./component/form_btn");
var _formSelect = require("./component/form-select");
(function() {
    const root = document.querySelector(".root");
    _header.initHeader();
    _footer.initFooter();
    _text.initText();
    _formInput.initInput();
    _formSelect.initSelect();
    _formBtn.initBtn();
    _router.initRoute(root);
})();

},{"./router":"b2iia","./component/header":"bgjYj","./component/footer":"2tDD7","./component/text":"3Xvh8","./component/form_input":"he3SV","./component/form_btn":"13XxV","./component/form-select":"lpgPj"}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRoute", ()=>initRoute
);
var _welcome = require("./pages/welcome");
var _step1 = require("./pages/step1");
var _thankYou = require("./pages/thankYou");
const router = [
    {
        path: /\/welcome/,
        component: _welcome.initWelcome
    },
    {
        path: /\/step1/,
        component: _step1.initStep1
    },
    {
        path: /\/thankYou/,
        component: _thankYou.initThankYou
    }, 
];
function initRoute(container) {
    function goTo(path) {
        history.pushState({
        }, "", path);
        handleRoute(path);
    }
    function handleRoute(root) {
        console.log("El handler Root recibio una nueva ruta", root);
        for (let r of router)if (r.path.test(root)) {
            let el = r.component({
                goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname == "/") goTo("/welcome");
    else handleRoute(location.pathname);
    window.onpopstate = ()=>{
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome":"bFh5y","./pages/step1":"bOSPc","./pages/thankYou":"6gPux","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bFh5y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcome", ()=>initWelcome
);
function initWelcome(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.innerHTML = `\n      <custom-header></custom-header>\n      <div class="contenedor">\n         <custom-text variant="title">Te damos la bienvenida a esta página</custom-text>\n         <custom-text variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</custom-text>\n      \n         <form class="formulario" action>  \n            <custom-text variant="form__title" >Para continuar ingresá tu nombre</custom-text>\n            <custom-input label="Nombre :"></custom-input>\n            <custom-btn btn="Comenzar" class="btn"></custom-btn>\n         </form>\n      </div>\n      <custom-footer></custom-footer>\n   `;
    style.innerHTML = `\n      .contenedor{\n         padding:3rem 1.5rem;\n\n      }\n\n   `;
    div.appendChild(style);
    let btn = div.querySelector(".btn");
    btn.addEventListener("click", ()=>{
        params.goTo("/step1");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bOSPc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStep1", ()=>initStep1
);
function initStep1(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.innerHTML = `\n   <custom-header></custom-header>\n   <div class="contenedor">\n      <custom-text variant="title">Necesitamos unos datos más</custom-text>\n      <custom-input label="Email :"></custom-input>\n      <custom-input label="Comida favorita :"></custom-input>\n      <custom-form-select>Alguna de estas tres opciones :</custom-form-select>\n      <custom-btn btn="Comenzar" class="comenzar"></custom-btn>\n      <custom-btn btn="Volver" class="volver" ></custom-btn>\n   </div>\n   <custom-footer></custom-footer>\n   `;
    style.innerHTML = `\n   .contenedor{\n      padding:3rem 1.3rem;\n\n   }\n`;
    div.appendChild(style);
    const btnComenzar = div.querySelector(".comenzar");
    btnComenzar.addEventListener("click", ()=>{
        params.goTo("/thankYou");
    });
    const btnVolver = div.querySelector(".volver");
    btnVolver.addEventListener("click", ()=>{
        params.goTo("/welcome");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6gPux":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initThankYou", ()=>initThankYou
);
function initThankYou(parmas) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.innerHTML = `\n   <custom-header></custom-header>\n   <div class="contenedor">\n    <custom-text variant="title">Gracias</custom-text>\n    <custom-text variant="body">Toda la información que nos brindaste es muy importante</custom-text>\n    <custom-btn btn="De Nada"></custom-btn>\n   </div>\n   <custom-footer></custom-footer>\n   `;
    style.innerHTML = `\n      .contenedor{\n         padding:3rem 1.5rem;\n         height:60vh;\n      }\n   `;
    div.appendChild(style);
    div.addEventListener("click", ()=>{
        parmas.goTo("/welcome");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bgjYj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHeader", ()=>initHeader
);
function initHeader() {
    class HeaderComponent extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.classList.add("header");
            div.innerHTML = `\n         <h2 class="titulo"> Header </h2>\n         `;
            style.innerHTML = `\n            .header{\n               background-color:red;\n               height:8vh;\n               display:flex;\n               flex-direction:column;\n               justify-content:center;\n               align-items:center;\n            }\n            .titulo {\n               font-size: 1.9rem;\n               color:#fff;\n               text-align:center;\n               margin:0;\n            }\n         `;
            shadow.appendChild(style);
            shadow.appendChild(div);
        }
    }
    customElements.define("custom-header", HeaderComponent);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"2tDD7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initFooter", ()=>initFooter
);
function initFooter() {
    class Footer extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.classList.add("footer");
            div.innerHTML = `\n            <h2 class="footer__titulo">Footer</h2>\n         `;
            style.innerHTML = `\n         .footer{\n            background-color:#ff5d5d;\n            height:40vh;\n            display:flex;\n            justify-content:center;\n            align-items: center; \n         }\n         .footer .footer__titulo {\n            font-size: 1.9rem;\n            color:#fff;\n            margin:0;\n         }\n         `;
            shadow.appendChild(style);
            shadow.appendChild(div);
        }
    }
    customElements.define("custom-footer", Footer);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3Xvh8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initText", ()=>initText
);
function initText() {
    class Text1 extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const variant = this.getAttribute("variant") || "body";
            const style = document.createElement("style");
            const h3 = document.createElement("h3");
            h3.className = variant;
            style.innerHTML = `\n            .title {\n               font-size : 3rem ;\n               margin:0;\n            }\n            .body{\n               font-size:1rem;\n               \n            }\n            .form__title{\n               font-size:1.3rem;\n            }\n         `;
            h3.textContent = this.textContent;
            shadow.appendChild(style);
            shadow.appendChild(h3);
        }
    }
    customElements.define("custom-text", Text1);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"he3SV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInput", ()=>initInput
);
function initInput() {
    class Input extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const label = this.getAttribute("label");
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.classList.add("form");
            div.innerHTML = `\n            <label for="name" >${label}</label>\n            <input type="text" name="name" id="name" required>\n         `;
            style.innerHTML = `\n            .form{\n               display:flex;\n               flex-direction:column;\n               row-gap:0.5rem;\n               margin-top:1.5rem;\n            }\n            label{\n               display:block;\n            }\n            input{\n               font-size:1.1rem;\n               height:40px;\n               padding:0;\n               margin:0;\n               border:solid 2px #000;\n               padding-left:1rem;\n            }\n         `;
            shadow.appendChild(style);
            shadow.appendChild(div);
        }
    }
    customElements.define("custom-input", Input);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"13XxV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initBtn", ()=>initBtn
);
function initBtn() {
    class Btn extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const variant = this.getAttribute("btn");
            const clase = this.getAttribute("class");
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `\n         <button>${variant}</button>\n         `;
            if (variant === "Comenzar" || variant === "De Nada") style.innerHTML = `\n            button{\n               width:100%;\n               margin-top:2rem;\n               border:none;\n               background-color:#9CBBE9;\n               height:40px;\n               font-size:1.1rem;\n               font-weight: 600;\n            }\n            `;
            else if (variant === "Volver") style.innerHTML = `\n               button{\n                  width:100%;\n                  margin-top:2rem;\n                  height:40px;\n                  font-size:1.1rem;\n                  font-weight: 600;\n                  background-color: #fff;\n                  border:solid 1px #000;\n               }\n\n               button:active{\n                  background-color:#c6ddff;\n                  font-size:1.2rem;\n               }\n            `;
            shadow.appendChild(style);
            shadow.appendChild(div);
        }
    }
    customElements.define("custom-btn", Btn);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"lpgPj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSelect", ()=>initSelect
);
function initSelect() {
    class Select extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.classList.add("form_select");
            div.innerHTML = `\n            <label for="name">${this.textContent}</label>\n            <select name="" id="" class="select" required>\n               <option value="piedra">Piedra</option>\n               <option value="papel">Papel</option>\n               <option value="tijera">Tijera</option>\n            </select>\n         `;
            style.innerHTML = `\n\n            .form_select{\n               margin-top:1.5rem;\n               dislay:flex;\n               row-gap:0.5rem;\n            }\n            \n            .select{\n               border:solid 2px #000;\n               display:block;\n               width:100%;\n               text-aling:center;\n               height:44px;\n               font-size:1.1rem;\n            }\n\n            .select option{\n               width:50px;\n            }\n         `;
            shadow.appendChild(style);
            shadow.appendChild(div);
        }
    }
    customElements.define("custom-form-select", Select);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["8uBhv","4aleK"], "4aleK", "parcelRequire2af0")

//# sourceMappingURL=index.b31310b1.js.map
