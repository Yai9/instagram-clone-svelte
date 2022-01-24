var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
__export(exports, {
  F: () => FieldValue,
  f: () => firebase
});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics$1 = function(d, b) {
  extendStatics$1 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p2 in b2)
      if (b2.hasOwnProperty(p2))
        d2[p2] = b2[p2];
  };
  return extendStatics$1(d, b);
};
function __extends$1(d, b) {
  extendStatics$1(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f, y2, t2, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e) {
        op = [6, e];
        y2 = 0;
      } finally {
        f = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values$1(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n2) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r2, ar2 = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar2.push(r2.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar2;
}
function __spread() {
  for (var ar2 = [], i = 0; i < arguments.length; i++)
    ar2 = ar2.concat(__read(arguments[i]));
  return ar2;
}
function __spreadArrays$1() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r2 = Array(s), k2 = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j2 = 0, jl = a.length; j2 < jl; j2++, k2++)
      r2[k2] = a[j2];
  return r2;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deepCopy(value) {
  return deepExtend(void 0, value);
}
function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }
  switch (source.constructor) {
    case Date:
      var dateValue = source;
      return new Date(dateValue.getTime());
    case Object:
      if (target === void 0) {
        target = {};
      }
      break;
    case Array:
      target = [];
      break;
    default:
      return source;
  }
  for (var prop in source) {
    if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
      continue;
    }
    target[prop] = deepExtend(target[prop], source[prop]);
  }
  return target;
}
function isValidKey(key) {
  return key !== "__proto__";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = function() {
  function Deferred2() {
    var _this = this;
    this.reject = function() {
    };
    this.resolve = function() {
    };
    this.promise = new Promise(function(resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  }
  Deferred2.prototype.wrapCallback = function(callback) {
    var _this = this;
    return function(error, value) {
      if (error) {
        _this.reject(error);
      } else {
        _this.resolve(value);
      }
      if (typeof callback === "function") {
        _this.promise.catch(function() {
        });
        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  };
  return Deferred2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getUA() {
  if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
    return navigator["userAgent"];
  } else {
    return "";
  }
}
function isMobileCordova() {
  return typeof window !== "undefined" && !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === "[object process]";
  } catch (e) {
    return false;
  }
}
function isBrowser() {
  return typeof self === "object" && self.self === self;
}
function isBrowserExtension() {
  var runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
  return typeof runtime === "object" && runtime.id !== void 0;
}
function isReactNative() {
  return typeof navigator === "object" && navigator["product"] === "ReactNative";
}
function isElectron() {
  return getUA().indexOf("Electron/") >= 0;
}
function isIE() {
  var ua2 = getUA();
  return ua2.indexOf("MSIE ") >= 0 || ua2.indexOf("Trident/") >= 0;
}
function isUWP() {
  return getUA().indexOf("MSAppHost/") >= 0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = "FirebaseError";
var FirebaseError = function(_super) {
  __extends$1(FirebaseError2, _super);
  function FirebaseError2(code, message, customData) {
    var _this = _super.call(this, message) || this;
    _this.code = code;
    _this.customData = customData;
    _this.name = ERROR_NAME;
    Object.setPrototypeOf(_this, FirebaseError2.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, ErrorFactory.prototype.create);
    }
    return _this;
  }
  return FirebaseError2;
}(Error);
var ErrorFactory = function() {
  function ErrorFactory2(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }
  ErrorFactory2.prototype.create = function(code) {
    var data = [];
    for (var _i2 = 1; _i2 < arguments.length; _i2++) {
      data[_i2 - 1] = arguments[_i2];
    }
    var customData = data[0] || {};
    var fullCode = this.service + "/" + code;
    var template = this.errors[code];
    var message = template ? replaceTemplate(template, customData) : "Error";
    var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
    var error = new FirebaseError(fullCode, fullMessage, customData);
    return error;
  };
  return ErrorFactory2;
}();
function replaceTemplate(template, data) {
  return template.replace(PATTERN, function(_2, key) {
    var value = data[key];
    return value != null ? String(value) : "<" + key + "?>";
  });
}
var PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function createSubscribe(executor, onNoObservers) {
  var proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
var ObserverProxy = function() {
  function ObserverProxy2(executor, onNoObservers) {
    var _this = this;
    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0;
    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers;
    this.task.then(function() {
      executor(_this);
    }).catch(function(e) {
      _this.error(e);
    });
  }
  ObserverProxy2.prototype.next = function(value) {
    this.forEachObserver(function(observer) {
      observer.next(value);
    });
  };
  ObserverProxy2.prototype.error = function(error) {
    this.forEachObserver(function(observer) {
      observer.error(error);
    });
    this.close(error);
  };
  ObserverProxy2.prototype.complete = function() {
    this.forEachObserver(function(observer) {
      observer.complete();
    });
    this.close();
  };
  ObserverProxy2.prototype.subscribe = function(nextOrObserver, error, complete) {
    var _this = this;
    var observer;
    if (nextOrObserver === void 0 && error === void 0 && complete === void 0) {
      throw new Error("Missing Observer.");
    }
    if (implementsAnyMethods(nextOrObserver, [
      "next",
      "error",
      "complete"
    ])) {
      observer = nextOrObserver;
    } else {
      observer = {
        next: nextOrObserver,
        error,
        complete
      };
    }
    if (observer.next === void 0) {
      observer.next = noop;
    }
    if (observer.error === void 0) {
      observer.error = noop;
    }
    if (observer.complete === void 0) {
      observer.complete = noop;
    }
    var unsub = this.unsubscribeOne.bind(this, this.observers.length);
    if (this.finalized) {
      this.task.then(function() {
        try {
          if (_this.finalError) {
            observer.error(_this.finalError);
          } else {
            observer.complete();
          }
        } catch (e) {
        }
        return;
      });
    }
    this.observers.push(observer);
    return unsub;
  };
  ObserverProxy2.prototype.unsubscribeOne = function(i) {
    if (this.observers === void 0 || this.observers[i] === void 0) {
      return;
    }
    delete this.observers[i];
    this.observerCount -= 1;
    if (this.observerCount === 0 && this.onNoObservers !== void 0) {
      this.onNoObservers(this);
    }
  };
  ObserverProxy2.prototype.forEachObserver = function(fn2) {
    if (this.finalized) {
      return;
    }
    for (var i = 0; i < this.observers.length; i++) {
      this.sendOne(i, fn2);
    }
  };
  ObserverProxy2.prototype.sendOne = function(i, fn2) {
    var _this = this;
    this.task.then(function() {
      if (_this.observers !== void 0 && _this.observers[i] !== void 0) {
        try {
          fn2(_this.observers[i]);
        } catch (e) {
          if (typeof console !== "undefined" && console.error) {
            console.error(e);
          }
        }
      }
    });
  };
  ObserverProxy2.prototype.close = function(err) {
    var _this = this;
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    if (err !== void 0) {
      this.finalError = err;
    }
    this.task.then(function() {
      _this.observers = void 0;
      _this.onNoObservers = void 0;
    });
  };
  return ObserverProxy2;
}();
function implementsAnyMethods(obj, methods) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  for (var _i2 = 0, methods_1 = methods; _i2 < methods_1.length; _i2++) {
    var method = methods_1[_i2];
    if (method in obj && typeof obj[method] === "function") {
      return true;
    }
  }
  return false;
}
function noop() {
}
var Component = function() {
  function Component2(name2, instanceFactory, type) {
    this.name = name2;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    this.serviceProps = {};
    this.instantiationMode = "LAZY";
  }
  Component2.prototype.setInstantiationMode = function(mode) {
    this.instantiationMode = mode;
    return this;
  };
  Component2.prototype.setMultipleInstances = function(multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  };
  Component2.prototype.setServiceProps = function(props) {
    this.serviceProps = props;
    return this;
  };
  return Component2;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME$1 = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Provider = function() {
  function Provider2(name2, container) {
    this.name = name2;
    this.container = container;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
  }
  Provider2.prototype.get = function(identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME$1;
    }
    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      var deferred = new Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred);
      try {
        var instance = this.getOrInitializeService(normalizedIdentifier);
        if (instance) {
          deferred.resolve(instance);
        }
      } catch (e) {
      }
    }
    return this.instancesDeferred.get(normalizedIdentifier).promise;
  };
  Provider2.prototype.getImmediate = function(options) {
    var _a2 = __assign({ identifier: DEFAULT_ENTRY_NAME$1, optional: false }, options), identifier = _a2.identifier, optional = _a2.optional;
    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    try {
      var instance = this.getOrInitializeService(normalizedIdentifier);
      if (!instance) {
        if (optional) {
          return null;
        }
        throw Error("Service " + this.name + " is not available");
      }
      return instance;
    } catch (e) {
      if (optional) {
        return null;
      } else {
        throw e;
      }
    }
  };
  Provider2.prototype.getComponent = function() {
    return this.component;
  };
  Provider2.prototype.setComponent = function(component) {
    var e_1, _a2;
    if (component.name !== this.name) {
      throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
    }
    if (this.component) {
      throw Error("Component for " + this.name + " has already been provided");
    }
    this.component = component;
    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService(DEFAULT_ENTRY_NAME$1);
      } catch (e) {
      }
    }
    try {
      for (var _b = __values$1(this.instancesDeferred.entries()), _c2 = _b.next(); !_c2.done; _c2 = _b.next()) {
        var _d = __read(_c2.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
        var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        try {
          var instance = this.getOrInitializeService(normalizedIdentifier);
          instanceDeferred.resolve(instance);
        } catch (e) {
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c2 && !_c2.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  Provider2.prototype.clearInstance = function(identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME$1;
    }
    this.instancesDeferred.delete(identifier);
    this.instances.delete(identifier);
  };
  Provider2.prototype.delete = function() {
    return __awaiter(this, void 0, void 0, function() {
      var services;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            services = Array.from(this.instances.values());
            return [4, Promise.all(__spread(services.filter(function(service) {
              return "INTERNAL" in service;
            }).map(function(service) {
              return service.INTERNAL.delete();
            }), services.filter(function(service) {
              return "_delete" in service;
            }).map(function(service) {
              return service._delete();
            })))];
          case 1:
            _a2.sent();
            return [2];
        }
      });
    });
  };
  Provider2.prototype.isComponentSet = function() {
    return this.component != null;
  };
  Provider2.prototype.getOrInitializeService = function(identifier) {
    var instance = this.instances.get(identifier);
    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
      this.instances.set(identifier, instance);
    }
    return instance || null;
  };
  Provider2.prototype.normalizeInstanceIdentifier = function(identifier) {
    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME$1;
    } else {
      return identifier;
    }
  };
  return Provider2;
}();
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME$1 ? void 0 : identifier;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ComponentContainer = function() {
  function ComponentContainer2(name2) {
    this.name = name2;
    this.providers = new Map();
  }
  ComponentContainer2.prototype.addComponent = function(component) {
    var provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      throw new Error("Component " + component.name + " has already been registered with " + this.name);
    }
    provider.setComponent(component);
  };
  ComponentContainer2.prototype.addOrOverwriteComponent = function(component) {
    var provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      this.providers.delete(component.name);
    }
    this.addComponent(component);
  };
  ComponentContainer2.prototype.getProvider = function(name2) {
    if (this.providers.has(name2)) {
      return this.providers.get(name2);
    }
    var provider = new Provider(name2, this);
    this.providers.set(name2, provider);
    return provider;
  };
  ComponentContainer2.prototype.getProviders = function() {
    return Array.from(this.providers.values());
  };
  return ComponentContainer2;
}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r2 = Array(s), k2 = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j2 = 0, jl = a.length; j2 < jl; j2++, k2++)
      r2[k2] = a[j2];
  return r2;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$2;
var instances = [];
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
  "debug": LogLevel.DEBUG,
  "verbose": LogLevel.VERBOSE,
  "info": LogLevel.INFO,
  "warn": LogLevel.WARN,
  "error": LogLevel.ERROR,
  "silent": LogLevel.SILENT
};
var defaultLogLevel = LogLevel.INFO;
var ConsoleMethod = (_a$2 = {}, _a$2[LogLevel.DEBUG] = "log", _a$2[LogLevel.VERBOSE] = "log", _a$2[LogLevel.INFO] = "info", _a$2[LogLevel.WARN] = "warn", _a$2[LogLevel.ERROR] = "error", _a$2);
var defaultLogHandler = function(instance, logType) {
  var args = [];
  for (var _i2 = 2; _i2 < arguments.length; _i2++) {
    args[_i2 - 2] = arguments[_i2];
  }
  if (logType < instance.logLevel) {
    return;
  }
  var now = new Date().toISOString();
  var method = ConsoleMethod[logType];
  if (method) {
    console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
  } else {
    throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
  }
};
var Logger = function() {
  function Logger2(name2) {
    this.name = name2;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
    instances.push(this);
  }
  Object.defineProperty(Logger2.prototype, "logLevel", {
    get: function() {
      return this._logLevel;
    },
    set: function(val) {
      if (!(val in LogLevel)) {
        throw new TypeError('Invalid value "' + val + '" assigned to `logLevel`');
      }
      this._logLevel = val;
    },
    enumerable: false,
    configurable: true
  });
  Logger2.prototype.setLogLevel = function(val) {
    this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
  };
  Object.defineProperty(Logger2.prototype, "logHandler", {
    get: function() {
      return this._logHandler;
    },
    set: function(val) {
      if (typeof val !== "function") {
        throw new TypeError("Value assigned to `logHandler` must be a function");
      }
      this._logHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Logger2.prototype, "userLogHandler", {
    get: function() {
      return this._userLogHandler;
    },
    set: function(val) {
      this._userLogHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  Logger2.prototype.debug = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
    this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
  };
  Logger2.prototype.log = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
    this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
  };
  Logger2.prototype.info = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
    this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
  };
  Logger2.prototype.warn = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
    this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
  };
  Logger2.prototype.error = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
    this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
  };
  return Logger2;
}();
function setLogLevel(level) {
  instances.forEach(function(inst) {
    inst.setLogLevel(level);
  });
}
function setUserLogHandler(logCallback, options) {
  var _loop_1 = function(instance2) {
    var customLogLevel = null;
    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }
    if (logCallback === null) {
      instance2.userLogHandler = null;
    } else {
      instance2.userLogHandler = function(instance3, level) {
        var args = [];
        for (var _i3 = 2; _i3 < arguments.length; _i3++) {
          args[_i3 - 2] = arguments[_i3];
        }
        var message = args.map(function(arg) {
          if (arg == null) {
            return null;
          } else if (typeof arg === "string") {
            return arg;
          } else if (typeof arg === "number" || typeof arg === "boolean") {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(function(arg) {
          return arg;
        }).join(" ");
        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance3.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message,
            args,
            type: instance3.name
          });
        }
      };
    }
  };
  for (var _i2 = 0, instances_1 = instances; _i2 < instances_1.length; _i2++) {
    var instance = instances_1[_i2];
    _loop_1(instance);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
var ERRORS = (_a$1 = {}, _a$1["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()", _a$1["bad-app-name"] = "Illegal App name: '{$appName}", _a$1["duplicate-app"] = "Firebase App named '{$appName}' already exists", _a$1["app-deleted"] = "Firebase App named '{$appName}' already deleted", _a$1["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", _a$1["invalid-log-argument"] = "First argument to `onLog` must be null or a function.", _a$1);
var ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
var name$1 = "@firebase/app";
var version = "0.6.14";
var name$2 = "@firebase/analytics";
var name$3 = "@firebase/auth";
var name$4 = "@firebase/database";
var name$5 = "@firebase/functions";
var name$6 = "@firebase/installations";
var name$7 = "@firebase/messaging";
var name$8 = "@firebase/performance";
var name$9 = "@firebase/remote-config";
var name$a = "@firebase/storage";
var name$b = "@firebase/firestore";
var name$c = "firebase-wrapper";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1$1;
var DEFAULT_ENTRY_NAME = "[DEFAULT]";
var PLATFORM_LOG_STRING = (_a$1$1 = {}, _a$1$1[name$1] = "fire-core", _a$1$1[name$2] = "fire-analytics", _a$1$1[name$3] = "fire-auth", _a$1$1[name$4] = "fire-rtdb", _a$1$1[name$5] = "fire-fn", _a$1$1[name$6] = "fire-iid", _a$1$1[name$7] = "fire-fcm", _a$1$1[name$8] = "fire-perf", _a$1$1[name$9] = "fire-rc", _a$1$1[name$a] = "fire-gcs", _a$1$1[name$b] = "fire-fst", _a$1$1["fire-js"] = "fire-js", _a$1$1[name$c] = "fire-js-all", _a$1$1);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new Logger("@firebase/app");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseAppImpl = function() {
  function FirebaseAppImpl2(options, config2, firebase_) {
    var e_1, _a2;
    var _this = this;
    this.firebase_ = firebase_;
    this.isDeleted_ = false;
    this.name_ = config2.name;
    this.automaticDataCollectionEnabled_ = config2.automaticDataCollectionEnabled || false;
    this.options_ = deepCopy(options);
    this.container = new ComponentContainer(config2.name);
    this._addComponent(new Component("app", function() {
      return _this;
    }, "PUBLIC"));
    try {
      for (var _b = __values$1(this.firebase_.INTERNAL.components.values()), _c2 = _b.next(); !_c2.done; _c2 = _b.next()) {
        var component = _c2.value;
        this._addComponent(component);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c2 && !_c2.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  }
  Object.defineProperty(FirebaseAppImpl2.prototype, "automaticDataCollectionEnabled", {
    get: function() {
      this.checkDestroyed_();
      return this.automaticDataCollectionEnabled_;
    },
    set: function(val) {
      this.checkDestroyed_();
      this.automaticDataCollectionEnabled_ = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl2.prototype, "name", {
    get: function() {
      this.checkDestroyed_();
      return this.name_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl2.prototype, "options", {
    get: function() {
      this.checkDestroyed_();
      return this.options_;
    },
    enumerable: false,
    configurable: true
  });
  FirebaseAppImpl2.prototype.delete = function() {
    var _this = this;
    return new Promise(function(resolve) {
      _this.checkDestroyed_();
      resolve();
    }).then(function() {
      _this.firebase_.INTERNAL.removeApp(_this.name_);
      return Promise.all(_this.container.getProviders().map(function(provider) {
        return provider.delete();
      }));
    }).then(function() {
      _this.isDeleted_ = true;
    });
  };
  FirebaseAppImpl2.prototype._getService = function(name2, instanceIdentifier) {
    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    }
    this.checkDestroyed_();
    return this.container.getProvider(name2).getImmediate({
      identifier: instanceIdentifier
    });
  };
  FirebaseAppImpl2.prototype._removeServiceInstance = function(name2, instanceIdentifier) {
    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    }
    this.container.getProvider(name2).clearInstance(instanceIdentifier);
  };
  FirebaseAppImpl2.prototype._addComponent = function(component) {
    try {
      this.container.addComponent(component);
    } catch (e) {
      logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
    }
  };
  FirebaseAppImpl2.prototype._addOrOverwriteComponent = function(component) {
    this.container.addOrOverwriteComponent(component);
  };
  FirebaseAppImpl2.prototype.toJSON = function() {
    return {
      name: this.name,
      automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
      options: this.options
    };
  };
  FirebaseAppImpl2.prototype.checkDestroyed_ = function() {
    if (this.isDeleted_) {
      throw ERROR_FACTORY.create("app-deleted", { appName: this.name_ });
    }
  };
  return FirebaseAppImpl2;
}();
FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype.delete || console.log("dc");
var version$1 = "8.2.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
  var apps = {};
  var components = new Map();
  var namespace = {
    __esModule: true,
    initializeApp: initializeApp2,
    app,
    registerVersion,
    setLogLevel,
    onLog,
    apps: null,
    SDK_VERSION: version$1,
    INTERNAL: {
      registerComponent,
      removeApp,
      components,
      useAsService
    }
  };
  namespace["default"] = namespace;
  Object.defineProperty(namespace, "apps", {
    get: getApps
  });
  function removeApp(name2) {
    delete apps[name2];
  }
  function app(name2) {
    name2 = name2 || DEFAULT_ENTRY_NAME;
    if (!contains(apps, name2)) {
      throw ERROR_FACTORY.create("no-app", { appName: name2 });
    }
    return apps[name2];
  }
  app["App"] = firebaseAppImpl;
  function initializeApp2(options, rawConfig) {
    if (rawConfig === void 0) {
      rawConfig = {};
    }
    if (typeof rawConfig !== "object" || rawConfig === null) {
      var name_1 = rawConfig;
      rawConfig = { name: name_1 };
    }
    var config2 = rawConfig;
    if (config2.name === void 0) {
      config2.name = DEFAULT_ENTRY_NAME;
    }
    var name2 = config2.name;
    if (typeof name2 !== "string" || !name2) {
      throw ERROR_FACTORY.create("bad-app-name", {
        appName: String(name2)
      });
    }
    if (contains(apps, name2)) {
      throw ERROR_FACTORY.create("duplicate-app", { appName: name2 });
    }
    var app2 = new firebaseAppImpl(options, config2, namespace);
    apps[name2] = app2;
    return app2;
  }
  function getApps() {
    return Object.keys(apps).map(function(name2) {
      return apps[name2];
    });
  }
  function registerComponent(component) {
    var e_1, _a2;
    var componentName = component.name;
    if (components.has(componentName)) {
      logger.debug("There were multiple attempts to register component " + componentName + ".");
      return component.type === "PUBLIC" ? namespace[componentName] : null;
    }
    components.set(componentName, component);
    if (component.type === "PUBLIC") {
      var serviceNamespace = function(appArg) {
        if (appArg === void 0) {
          appArg = app();
        }
        if (typeof appArg[componentName] !== "function") {
          throw ERROR_FACTORY.create("invalid-app-argument", {
            appName: componentName
          });
        }
        return appArg[componentName]();
      };
      if (component.serviceProps !== void 0) {
        deepExtend(serviceNamespace, component.serviceProps);
      }
      namespace[componentName] = serviceNamespace;
      firebaseAppImpl.prototype[componentName] = function() {
        var args = [];
        for (var _i2 = 0; _i2 < arguments.length; _i2++) {
          args[_i2] = arguments[_i2];
        }
        var serviceFxn = this._getService.bind(this, componentName);
        return serviceFxn.apply(this, component.multipleInstances ? args : []);
      };
    }
    try {
      for (var _b = __values$1(Object.keys(apps)), _c2 = _b.next(); !_c2.done; _c2 = _b.next()) {
        var appName = _c2.value;
        apps[appName]._addComponent(component);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c2 && !_c2.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return component.type === "PUBLIC" ? namespace[componentName] : null;
  }
  function registerVersion(libraryKeyOrName, version2, variant) {
    var _a2;
    var library = (_a2 = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a2 !== void 0 ? _a2 : libraryKeyOrName;
    if (variant) {
      library += "-" + variant;
    }
    var libraryMismatch = library.match(/\s|\//);
    var versionMismatch = version2.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
      var warning = [
        'Unable to register library "' + library + '" with version "' + version2 + '":'
      ];
      if (libraryMismatch) {
        warning.push('library name "' + library + '" contains illegal characters (whitespace or "/")');
      }
      if (libraryMismatch && versionMismatch) {
        warning.push("and");
      }
      if (versionMismatch) {
        warning.push('version name "' + version2 + '" contains illegal characters (whitespace or "/")');
      }
      logger.warn(warning.join(" "));
      return;
    }
    registerComponent(new Component(library + "-version", function() {
      return { library, version: version2 };
    }, "VERSION"));
  }
  function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== "function") {
      throw ERROR_FACTORY.create("invalid-log-argument", {
        appName: name
      });
    }
    setUserLogHandler(logCallback, options);
  }
  function useAsService(app2, name2) {
    if (name2 === "serverAuth") {
      return null;
    }
    var useService = name2;
    return useService;
  }
  return namespace;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createFirebaseNamespace() {
  var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
  namespace.INTERNAL = __assign(__assign({}, namespace.INTERNAL), {
    createFirebaseNamespace,
    extendNamespace,
    createSubscribe,
    ErrorFactory,
    deepExtend
  });
  function extendNamespace(props) {
    deepExtend(namespace, props);
  }
  return namespace;
}
var firebase$1 = createFirebaseNamespace();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerService = function() {
  function PlatformLoggerService2(container) {
    this.container = container;
  }
  PlatformLoggerService2.prototype.getPlatformInfoString = function() {
    var providers = this.container.getProviders();
    return providers.map(function(provider) {
      if (isVersionServiceProvider(provider)) {
        var service = provider.getImmediate();
        return service.library + "/" + service.version;
      } else {
        return null;
      }
    }).filter(function(logString) {
      return logString;
    }).join(" ");
  };
  return PlatformLoggerService2;
}();
function isVersionServiceProvider(provider) {
  var component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(firebase2, variant) {
  firebase2.INTERNAL.registerComponent(new Component("platform-logger", function(container) {
    return new PlatformLoggerService(container);
  }, "PRIVATE"));
  firebase2.registerVersion(name$1, version, variant);
  firebase2.registerVersion("fire-js", "");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if (isBrowser() && self.firebase !== void 0) {
  logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
  var sdkVersion = self.firebase.SDK_VERSION;
  if (sdkVersion && sdkVersion.indexOf("LITE") >= 0) {
    logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
  }
}
var initializeApp = firebase$1.initializeApp;
firebase$1.initializeApp = function() {
  var args = [];
  for (var _i2 = 0; _i2 < arguments.length; _i2++) {
    args[_i2] = arguments[_i2];
  }
  if (isNode()) {
    logger.warn(`
      Warning: This is a browser-targeted Firebase bundle but it appears it is being
      run in a Node environment.  If running in a Node environment, make sure you
      are using the bundle specified by the "main" field in package.json.
      
      If you are using Webpack, you can specify "main" as the first item in
      "resolve.mainFields":
      https://webpack.js.org/configuration/resolve/#resolvemainfields
      
      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"
      as the first item in "mainFields", e.g. ['main', 'module'].
      https://github.com/rollup/@rollup/plugin-node-resolve
      `);
  }
  return initializeApp.apply(void 0, args);
};
var firebase$1$1 = firebase$1;
registerCoreComponents(firebase$1$1);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p2 in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p2))
        d2[p2] = b2[p2];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var h, goog = goog || {}, k$1 = commonjsGlobal || self;
function aa$1() {
}
function ba$1(a) {
  var b = typeof a;
  b = b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
  return b == "array" || b == "object" && typeof a.length == "number";
}
function n(a) {
  var b = typeof a;
  return b == "object" && a != null || b == "function";
}
function ca$1(a) {
  return Object.prototype.hasOwnProperty.call(a, da$1) && a[da$1] || (a[da$1] = ++ea$1);
}
var da$1 = "closure_uid_" + (1e9 * Math.random() >>> 0), ea$1 = 0;
function fa$1(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ha$1(a, b, c) {
  if (!a)
    throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function p(a, b, c) {
  Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? p = fa$1 : p = ha$1;
  return p.apply(null, arguments);
}
function ja$1(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
}
function q$1() {
  return Date.now();
}
function r(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.X = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.Kb = function(d, e, f) {
    for (var g = Array(arguments.length - 2), m = 2; m < arguments.length; m++)
      g[m - 2] = arguments[m];
    return b.prototype[e].apply(d, g);
  };
}
function t() {
  this.j = this.j;
  this.i = this.i;
}
var ka$1 = 0;
t.prototype.j = false;
t.prototype.ja = function() {
  if (!this.j && (this.j = true, this.G(), ka$1 != 0)) {
    ca$1(this);
  }
};
t.prototype.G = function() {
  if (this.i)
    for (; this.i.length; )
      this.i.shift()();
};
var ma$1 = Array.prototype.indexOf ? function(a, b) {
  return Array.prototype.indexOf.call(a, b, void 0);
} : function(a, b) {
  if (typeof a === "string")
    return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
  for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b)
      return c;
  return -1;
}, na$1 = Array.prototype.forEach ? function(a, b, c) {
  Array.prototype.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = typeof a === "string" ? a.split("") : a, f = 0; f < d; f++)
    f in e && b.call(c, e[f], f, a);
};
function oa$1(a) {
  a: {
    var b = pa$1;
    for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) {
        b = e;
        break a;
      }
    b = -1;
  }
  return 0 > b ? null : typeof a === "string" ? a.charAt(b) : a[b];
}
function qa$1(a) {
  return Array.prototype.concat.apply([], arguments);
}
function ra$1(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++)
      c[d] = a[d];
    return c;
  }
  return [];
}
function sa$1(a) {
  return /^[\s\xa0]*$/.test(a);
}
var ta$1 = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
};
function v(a, b) {
  return a.indexOf(b) != -1;
}
function ua$1(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
var w;
a: {
  var va$1 = k$1.navigator;
  if (va$1) {
    var wa$1 = va$1.userAgent;
    if (wa$1) {
      w = wa$1;
      break a;
    }
  }
  w = "";
}
function za$1(a, b, c) {
  for (var d in a)
    b.call(c, a[d], d, a);
}
function Aa$1(a) {
  var b = {};
  for (var c in a)
    b[c] = a[c];
  return b;
}
var Ba$1 = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ca$1(a, b) {
  var c, d;
  for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
      a[c] = d[c];
    for (var f = 0; f < Ba$1.length; f++)
      c = Ba$1[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function Da$1(a) {
  Da$1[" "](a);
  return a;
}
Da$1[" "] = aa$1;
function Ea$1(a, b) {
  var c = Fa$1;
  return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
}
var Ga$1 = v(w, "Opera"), x$1 = v(w, "Trident") || v(w, "MSIE"), Ha$1 = v(w, "Edge"), Ia$1 = Ha$1 || x$1, Ja$1 = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge"), Ka$1 = v(w.toLowerCase(), "webkit") && !v(w, "Edge");
function La$1() {
  var a = k$1.document;
  return a ? a.documentMode : void 0;
}
var Ma$1;
a: {
  var Na$1 = "", Oa$1 = function() {
    var a = w;
    if (Ja$1)
      return /rv:([^\);]+)(\)|;)/.exec(a);
    if (Ha$1)
      return /Edge\/([\d\.]+)/.exec(a);
    if (x$1)
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (Ka$1)
      return /WebKit\/(\S+)/.exec(a);
    if (Ga$1)
      return /(?:Version)[ \/]?(\S+)/.exec(a);
  }();
  Oa$1 && (Na$1 = Oa$1 ? Oa$1[1] : "");
  if (x$1) {
    var Pa$1 = La$1();
    if (Pa$1 != null && Pa$1 > parseFloat(Na$1)) {
      Ma$1 = String(Pa$1);
      break a;
    }
  }
  Ma$1 = Na$1;
}
var Fa$1 = {};
function Qa$1(a) {
  return Ea$1(a, function() {
    {
      var b = 0;
      var e = ta$1(String(Ma$1)).split("."), f = ta$1(String(a)).split("."), g = Math.max(e.length, f.length);
      for (var m = 0; b == 0 && m < g; m++) {
        var c = e[m] || "", d = f[m] || "";
        do {
          c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
          d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
          if (c[0].length == 0 && d[0].length == 0)
            break;
          b = ua$1(c[1].length == 0 ? 0 : parseInt(c[1], 10), d[1].length == 0 ? 0 : parseInt(d[1], 10)) || ua$1(c[2].length == 0, d[2].length == 0) || ua$1(c[2], d[2]);
          c = c[3];
          d = d[3];
        } while (b == 0);
      }
    }
    return 0 <= b;
  });
}
var Ra;
if (k$1.document && x$1) {
  var Sa$1 = La$1();
  Ra = Sa$1 ? Sa$1 : parseInt(Ma$1, 10) || void 0;
} else
  Ra = void 0;
var Ta$1 = Ra;
var Ua$1 = !x$1 || 9 <= Number(Ta$1), Va$1 = x$1 && !Qa$1("9"), Wa$1 = function() {
  if (!k$1.addEventListener || !Object.defineProperty)
    return false;
  var a = false, b = Object.defineProperty({}, "passive", { get: function() {
    a = true;
  } });
  try {
    k$1.addEventListener("test", aa$1, b), k$1.removeEventListener("test", aa$1, b);
  } catch (c) {
  }
  return a;
}();
function y(a, b) {
  this.type = a;
  this.a = this.target = b;
  this.defaultPrevented = false;
}
y.prototype.b = function() {
  this.defaultPrevented = true;
};
function z$1(a, b) {
  y.call(this, a ? a.type : "");
  this.relatedTarget = this.a = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
  this.pointerId = 0;
  this.pointerType = "";
  this.c = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.a = b;
    if (b = a.relatedTarget) {
      if (Ja$1) {
        a: {
          try {
            Da$1(b.nodeName);
            var e = true;
            break a;
          } catch (f) {
          }
          e = false;
        }
        e || (b = null);
      }
    } else
      c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement);
    this.relatedTarget = b;
    d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = typeof a.pointerType === "string" ? a.pointerType : Xa$1[a.pointerType] || "";
    this.c = a;
    a.defaultPrevented && this.b();
  }
}
r(z$1, y);
var Xa$1 = { 2: "touch", 3: "pen", 4: "mouse" };
z$1.prototype.b = function() {
  z$1.X.b.call(this);
  var a = this.c;
  if (a.preventDefault)
    a.preventDefault();
  else if (a.returnValue = false, Va$1)
    try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
        a.keyCode = -1;
    } catch (b) {
    }
};
var A$1 = "closure_listenable_" + (1e6 * Math.random() | 0), Ya$1 = 0;
function Za$1(a, b, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.ca = e;
  this.key = ++Ya$1;
  this.Y = this.Z = false;
}
function $a$1(a) {
  a.Y = true;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.ca = null;
}
function ab(a) {
  this.src = a;
  this.a = {};
  this.b = 0;
}
ab.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.a[f];
  a || (a = this.a[f] = [], this.b++);
  var g = bb(a, b, d, e);
  -1 < g ? (b = a[g], c || (b.Z = false)) : (b = new Za$1(b, this.src, f, !!d, e), b.Z = c, a.push(b));
  return b;
};
function cb(a, b) {
  var c = b.type;
  if (c in a.a) {
    var d = a.a[c], e = ma$1(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && ($a$1(b), a.a[c].length == 0 && (delete a.a[c], a.b--));
  }
}
function bb(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.Y && f.listener == b && f.capture == !!c && f.ca == d)
      return e;
  }
  return -1;
}
var db = "closure_lm_" + (1e6 * Math.random() | 0), eb = {};
function gb(a, b, c, d, e) {
  if (d && d.once)
    return hb(a, b, c, d, e);
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
      gb(a, b[f], c, d, e);
    return null;
  }
  c = ib(c);
  return a && a[A$1] ? a.va(b, c, n(d) ? !!d.capture : !!d, e) : jb(a, b, c, false, d, e);
}
function jb(a, b, c, d, e, f) {
  if (!b)
    throw Error("Invalid event type");
  var g = n(e) ? !!e.capture : !!e;
  if (g && !Ua$1)
    return null;
  var m = kb(a);
  m || (a[db] = m = new ab(a));
  c = m.add(b, c, d, g, f);
  if (c.proxy)
    return c;
  d = lb();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener)
    Wa$1 || (e = g), e === void 0 && (e = false), a.addEventListener(b.toString(), d, e);
  else if (a.attachEvent)
    a.attachEvent(mb(b.toString()), d);
  else if (a.addListener && a.removeListener)
    a.addListener(d);
  else
    throw Error("addEventListener and attachEvent are unavailable.");
  return c;
}
function lb() {
  var a = nb, b = Ua$1 ? function(c) {
    return a.call(b.src, b.listener, c);
  } : function(c) {
    c = a.call(b.src, b.listener, c);
    if (!c)
      return c;
  };
  return b;
}
function hb(a, b, c, d, e) {
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
      hb(a, b[f], c, d, e);
    return null;
  }
  c = ib(c);
  return a && a[A$1] ? a.wa(b, c, n(d) ? !!d.capture : !!d, e) : jb(a, b, c, true, d, e);
}
function ob(a, b, c, d, e) {
  if (Array.isArray(b))
    for (var f = 0; f < b.length; f++)
      ob(a, b[f], c, d, e);
  else
    (d = n(d) ? !!d.capture : !!d, c = ib(c), a && a[A$1]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = bb(f, c, d, e), -1 < c && ($a$1(f[c]), Array.prototype.splice.call(f, c, 1), f.length == 0 && (delete a.a[b], a.b--)))) : a && (a = kb(a)) && (b = a.a[b.toString()], a = -1, b && (a = bb(b, c, d, e)), (c = -1 < a ? b[a] : null) && pb(c));
}
function pb(a) {
  if (typeof a !== "number" && a && !a.Y) {
    var b = a.src;
    if (b && b[A$1])
      cb(b.c, a);
    else {
      var c = a.type, d = a.proxy;
      b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(mb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
      (c = kb(b)) ? (cb(c, a), c.b == 0 && (c.src = null, b[db] = null)) : $a$1(a);
    }
  }
}
function mb(a) {
  return a in eb ? eb[a] : eb[a] = "on" + a;
}
function qb(a, b) {
  var c = a.listener, d = a.ca || a.src;
  a.Z && pb(a);
  return c.call(d, b);
}
function nb(a, b) {
  if (a.Y)
    return true;
  if (!Ua$1) {
    if (!b)
      a: {
        b = ["window", "event"];
        for (var c = k$1, d = 0; d < b.length; d++)
          if (c = c[b[d]], c == null) {
            b = null;
            break a;
          }
        b = c;
      }
    b = new z$1(b, this);
    return qb(a, b);
  }
  return qb(a, new z$1(b, this));
}
function kb(a) {
  a = a[db];
  return a instanceof ab ? a : null;
}
var sb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
function ib(a) {
  if (typeof a === "function")
    return a;
  a[sb] || (a[sb] = function(b) {
    return a.handleEvent(b);
  });
  return a[sb];
}
function D$1() {
  t.call(this);
  this.c = new ab(this);
  this.J = this;
  this.C = null;
}
r(D$1, t);
D$1.prototype[A$1] = true;
h = D$1.prototype;
h.addEventListener = function(a, b, c, d) {
  gb(this, a, b, c, d);
};
h.removeEventListener = function(a, b, c, d) {
  ob(this, a, b, c, d);
};
function E$1(a, b) {
  var c, d = a.C;
  if (d)
    for (c = []; d; d = d.C)
      c.push(d);
  a = a.J;
  d = b.type || b;
  if (typeof b === "string")
    b = new y(b, a);
  else if (b instanceof y)
    b.target = b.target || a;
  else {
    var e = b;
    b = new y(d, a);
    Ca$1(b, e);
  }
  e = true;
  if (c)
    for (var f = c.length - 1; 0 <= f; f--) {
      var g = b.a = c[f];
      e = tb(g, d, true, b) && e;
    }
  g = b.a = a;
  e = tb(g, d, true, b) && e;
  e = tb(g, d, false, b) && e;
  if (c)
    for (f = 0; f < c.length; f++)
      g = b.a = c[f], e = tb(g, d, false, b) && e;
}
h.G = function() {
  D$1.X.G.call(this);
  if (this.c) {
    var a = this.c, c;
    for (c in a.a) {
      for (var d = a.a[c], e = 0; e < d.length; e++)
        $a$1(d[e]);
      delete a.a[c];
      a.b--;
    }
  }
  this.C = null;
};
h.va = function(a, b, c, d) {
  return this.c.add(String(a), b, false, c, d);
};
h.wa = function(a, b, c, d) {
  return this.c.add(String(a), b, true, c, d);
};
function tb(a, b, c, d) {
  b = a.c.a[String(b)];
  if (!b)
    return true;
  b = b.concat();
  for (var e = true, f = 0; f < b.length; ++f) {
    var g = b[f];
    if (g && !g.Y && g.capture == c) {
      var m = g.listener, l = g.ca || g.src;
      g.Z && cb(a.c, g);
      e = m.call(l, d) !== false && e;
    }
  }
  return e && !d.defaultPrevented;
}
var ub = k$1.JSON.stringify;
function vb() {
  this.b = this.a = null;
}
var xb = new (function() {
  function class_1(a, b) {
    this.c = a;
    this.f = b;
    this.b = 0;
    this.a = null;
  }
  class_1.prototype.get = function() {
    var a;
    0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
    return a;
  };
  return class_1;
}())(function() {
  return new wb();
}, function(a) {
  a.reset();
});
vb.prototype.add = function(a, b) {
  var c = xb.get();
  c.set(a, b);
  this.b ? this.b.next = c : this.a = c;
  this.b = c;
};
function yb() {
  var a = zb, b = null;
  a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
  return b;
}
function wb() {
  this.next = this.b = this.a = null;
}
wb.prototype.set = function(a, b) {
  this.a = a;
  this.b = b;
  this.next = null;
};
wb.prototype.reset = function() {
  this.next = this.b = this.a = null;
};
function Ab(a) {
  k$1.setTimeout(function() {
    throw a;
  }, 0);
}
function Bb(a, b) {
  Cb || Db();
  Eb || (Cb(), Eb = true);
  zb.add(a, b);
}
var Cb;
function Db() {
  var a = k$1.Promise.resolve(void 0);
  Cb = function() {
    a.then(Fb);
  };
}
var Eb = false, zb = new vb();
function Fb() {
  for (var a; a = yb(); ) {
    try {
      a.a.call(a.b);
    } catch (c) {
      Ab(c);
    }
    var b = xb;
    b.f(a);
    100 > b.b && (b.b++, a.next = b.a, b.a = a);
  }
  Eb = false;
}
function Gb(a, b) {
  D$1.call(this);
  this.b = a || 1;
  this.a = b || k$1;
  this.f = p(this.Za, this);
  this.g = q$1();
}
r(Gb, D$1);
h = Gb.prototype;
h.aa = false;
h.M = null;
h.Za = function() {
  if (this.aa) {
    var a = q$1() - this.g;
    0 < a && a < 0.8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), E$1(this, "tick"), this.aa && (Hb(this), this.start()));
  }
};
h.start = function() {
  this.aa = true;
  this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q$1());
};
function Hb(a) {
  a.aa = false;
  a.M && (a.a.clearTimeout(a.M), a.M = null);
}
h.G = function() {
  Gb.X.G.call(this);
  Hb(this);
  delete this.a;
};
function Ib(a, b, c) {
  if (typeof a === "function")
    c && (a = p(a, c));
  else if (a && typeof a.handleEvent == "function")
    a = p(a.handleEvent, a);
  else
    throw Error("Invalid listener argument");
  return 2147483647 < Number(b) ? -1 : k$1.setTimeout(a, b || 0);
}
function Jb(a) {
  a.a = Ib(function() {
    a.a = null;
    a.c && (a.c = false, Jb(a));
  }, a.h);
  var b = a.b;
  a.b = null;
  a.g.apply(null, b);
}
var Kb = function(_super) {
  __extends(Kb2, _super);
  function Kb2(a, b) {
    var _this = _super.call(this) || this;
    _this.g = a;
    _this.h = b;
    _this.b = null;
    _this.c = false;
    _this.a = null;
    return _this;
  }
  Kb2.prototype.f = function(a) {
    this.b = arguments;
    this.a ? this.c = true : Jb(this);
  };
  Kb2.prototype.G = function() {
    _super.prototype.G.call(this);
    this.a && (k$1.clearTimeout(this.a), this.a = null, this.c = false, this.b = null);
  };
  return Kb2;
}(t);
function F$1(a) {
  t.call(this);
  this.b = a;
  this.a = {};
}
r(F$1, t);
var Lb = [];
function Mb(a, b, c, d) {
  Array.isArray(c) || (c && (Lb[0] = c.toString()), c = Lb);
  for (var e = 0; e < c.length; e++) {
    var f = gb(b, c[e], d || a.handleEvent, false, a.b || a);
    if (!f)
      break;
    a.a[f.key] = f;
  }
}
function Nb(a) {
  za$1(a.a, function(b, c) {
    this.a.hasOwnProperty(c) && pb(b);
  }, a);
  a.a = {};
}
F$1.prototype.G = function() {
  F$1.X.G.call(this);
  Nb(this);
};
F$1.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Ob() {
  this.a = true;
}
function Pb(a, b, c, d, e, f) {
  a.info(function() {
    if (a.a)
      if (f) {
        var g = "";
        for (var m = f.split("&"), l = 0; l < m.length; l++) {
          var u = m[l].split("=");
          if (1 < u.length) {
            var C2 = u[0];
            u = u[1];
            var B2 = C2.split("_");
            g = 2 <= B2.length && B2[1] == "type" ? g + (C2 + "=" + u + "&") : g + (C2 + "=redacted&");
          }
        }
      } else
        g = null;
    else
      g = f;
    return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + g;
  });
}
function Qb(a, b, c, d, e, f, g) {
  a.info(function() {
    return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + g;
  });
}
function G$1(a, b, c, d) {
  a.info(function() {
    return "XMLHTTP TEXT (" + b + "): " + Rb(a, c) + (d ? " " + d : "");
  });
}
function Sb(a, b) {
  a.info(function() {
    return "TIMEOUT: " + b;
  });
}
Ob.prototype.info = function() {
};
function Rb(a, b) {
  if (!a.a)
    return b;
  if (!b)
    return null;
  try {
    var c = JSON.parse(b);
    if (c) {
      for (a = 0; a < c.length; a++)
        if (Array.isArray(c[a])) {
          var d = c[a];
          if (!(2 > d.length)) {
            var e = d[1];
            if (Array.isArray(e) && !(1 > e.length)) {
              var f = e[0];
              if (f != "noop" && f != "stop" && f != "close")
                for (var g = 1; g < e.length; g++)
                  e[g] = "";
            }
          }
        }
    }
    return ub(c);
  } catch (m) {
    return b;
  }
}
var H$1 = {}, Tb = null;
function Ub() {
  return Tb = Tb || new D$1();
}
H$1.Fa = "serverreachability";
function Vb(a) {
  y.call(this, H$1.Fa, a);
}
r(Vb, y);
function I$1(a) {
  var b = Ub();
  E$1(b, new Vb(b, a));
}
H$1.STAT_EVENT = "statevent";
function Wb(a, b) {
  y.call(this, H$1.STAT_EVENT, a);
  this.stat = b;
}
r(Wb, y);
function J$1(a) {
  var b = Ub();
  E$1(b, new Wb(b, a));
}
H$1.Ga = "timingevent";
function Xb(a) {
  y.call(this, H$1.Ga, a);
}
r(Xb, y);
function K$1(a, b) {
  if (typeof a !== "function")
    throw Error("Fn must not be null and must be a function");
  return k$1.setTimeout(function() {
    a();
  }, b);
}
var Yb = { NO_ERROR: 0, $a: 1, nb: 2, mb: 3, hb: 4, lb: 5, ob: 6, Da: 7, TIMEOUT: 8, rb: 9 };
var Zb = { fb: "complete", Bb: "success", Ea: "error", Da: "abort", tb: "ready", ub: "readystatechange", TIMEOUT: "timeout", pb: "incrementaldata", sb: "progress", ib: "downloadprogress", Jb: "uploadprogress" };
function $b() {
}
$b.prototype.a = null;
function ac$1(a) {
  var b;
  (b = a.a) || (b = a.a = {});
  return b;
}
function bc$1() {
}
var L$2 = { OPEN: "a", eb: "b", Ea: "c", qb: "d" };
function cc$1() {
  y.call(this, "d");
}
r(cc$1, y);
function dc$1() {
  y.call(this, "c");
}
r(dc$1, y);
var ec$1;
function fc$1() {
}
r(fc$1, $b);
ec$1 = new fc$1();
function M$1(a, b, c, d) {
  this.g = a;
  this.c = b;
  this.f = c;
  this.S = d || 1;
  this.J = new F$1(this);
  this.P = gc$1;
  a = Ia$1 ? 125 : void 0;
  this.R = new Gb(a);
  this.B = null;
  this.b = false;
  this.j = this.l = this.i = this.H = this.u = this.T = this.o = null;
  this.s = [];
  this.a = null;
  this.D = 0;
  this.h = this.m = null;
  this.N = -1;
  this.A = false;
  this.O = 0;
  this.F = null;
  this.V = this.C = this.U = this.I = false;
}
var gc$1 = 45e3, hc$1 = {}, ic$1 = {};
h = M$1.prototype;
h.setTimeout = function(a) {
  this.P = a;
};
function jc$1(a, b, c) {
  a.H = 1;
  a.i = kc$1(N$1(b));
  a.j = c;
  a.I = true;
  lc$1(a, null);
}
function lc$1(a, b) {
  a.u = q$1();
  mc$1(a);
  a.l = N$1(a.i);
  var c = a.l, d = a.S;
  Array.isArray(d) || (d = [String(d)]);
  nc$1(c.b, "t", d);
  a.D = 0;
  a.a = oc$1(a.g, a.g.C ? b : null);
  0 < a.O && (a.F = new Kb(p(a.Ca, a, a.a), a.O));
  Mb(a.J, a.a, "readystatechange", a.Xa);
  b = a.B ? Aa$1(a.B) : {};
  a.j ? (a.m || (a.m = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b));
  I$1(1);
  Pb(a.c, a.m, a.l, a.f, a.S, a.j);
}
h.Xa = function(a) {
  a = a.target;
  var b = this.F;
  b && O$1(a) == 3 ? b.f() : this.Ca(a);
};
h.Ca = function(a) {
  try {
    if (a == this.a)
      a: {
        var b = O$1(this.a), c = this.a.ua(), d = this.a.W();
        if (!(3 > b || b == 3 && !Ia$1 && !this.a.$())) {
          this.A || b != 4 || c == 7 || (c == 8 || 0 >= d ? I$1(3) : I$1(2));
          pc$1(this);
          var e = this.a.W();
          this.N = e;
          var f = this.a.$();
          this.b = e == 200;
          Qb(this.c, this.m, this.l, this.f, this.S, b, e);
          if (this.b) {
            if (this.U && !this.C) {
              b: {
                if (this.a) {
                  var g, m = this.a;
                  if ((g = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !sa$1(g)) {
                    var l = g;
                    break b;
                  }
                }
                l = null;
              }
              if (l)
                G$1(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"), this.C = true, qc$1(this, l);
              else {
                this.b = false;
                this.h = 3;
                J$1(12);
                P$2(this);
                rc$1(this);
                break a;
              }
            }
            this.I ? (sc$1(this, b, f), Ia$1 && this.b && b == 3 && (Mb(this.J, this.R, "tick", this.Wa), this.R.start())) : (G$1(this.c, this.f, f, null), qc$1(this, f));
            b == 4 && P$2(this);
            this.b && !this.A && (b == 4 ? uc$1(this.g, this) : (this.b = false, mc$1(this)));
          } else
            e == 400 && 0 < f.indexOf("Unknown SID") ? (this.h = 3, J$1(12)) : (this.h = 0, J$1(13)), P$2(this), rc$1(this);
        }
      }
  } catch (u) {
  } finally {
  }
};
function sc$1(a, b, c) {
  for (var d = true; !a.A && a.D < c.length; ) {
    var e = vc$1(a, c);
    if (e == ic$1) {
      b == 4 && (a.h = 4, J$1(14), d = false);
      G$1(a.c, a.f, null, "[Incomplete Response]");
      break;
    } else if (e == hc$1) {
      a.h = 4;
      J$1(15);
      G$1(a.c, a.f, c, "[Invalid Chunk]");
      d = false;
      break;
    } else
      G$1(a.c, a.f, e, null), qc$1(a, e);
  }
  b == 4 && c.length == 0 && (a.h = 1, J$1(16), d = false);
  a.b = a.b && d;
  d ? 0 < c.length && !a.V && (a.V = true, b = a.g, b.a == a && b.U && !b.F && (b.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), wc$1(b), b.F = true, J$1(11))) : (G$1(a.c, a.f, c, "[Invalid Chunked Response]"), P$2(a), rc$1(a));
}
h.Wa = function() {
  if (this.a) {
    var a = O$1(this.a), b = this.a.$();
    this.D < b.length && (pc$1(this), sc$1(this, a, b), this.b && a != 4 && mc$1(this));
  }
};
function vc$1(a, b) {
  var c = a.D, d = b.indexOf("\n", c);
  if (d == -1)
    return ic$1;
  c = Number(b.substring(c, d));
  if (isNaN(c))
    return hc$1;
  d += 1;
  if (d + c > b.length)
    return ic$1;
  b = b.substr(d, c);
  a.D = d + c;
  return b;
}
h.cancel = function() {
  this.A = true;
  P$2(this);
};
function mc$1(a) {
  a.T = q$1() + a.P;
  yc$1(a, a.P);
}
function yc$1(a, b) {
  if (a.o != null)
    throw Error("WatchDog timer not null");
  a.o = K$1(p(a.Va, a), b);
}
function pc$1(a) {
  a.o && (k$1.clearTimeout(a.o), a.o = null);
}
h.Va = function() {
  this.o = null;
  var a = q$1();
  0 <= a - this.T ? (Sb(this.c, this.l), this.H != 2 && (I$1(3), J$1(17)), P$2(this), this.h = 2, rc$1(this)) : yc$1(this, this.T - a);
};
function rc$1(a) {
  a.g.v == 0 || a.A || uc$1(a.g, a);
}
function P$2(a) {
  pc$1(a);
  var b = a.F;
  b && typeof b.ja == "function" && b.ja();
  a.F = null;
  Hb(a.R);
  Nb(a.J);
  a.a && (b = a.a, a.a = null, b.abort(), b.ja());
}
function qc$1(a, b) {
  try {
    var c = a.g;
    if (c.v != 0 && (c.a == a || zc$1(c.b, a))) {
      if (c.I = a.N, !a.C && zc$1(c.b, a) && c.v == 3) {
        try {
          var d = c.ka.a.parse(b);
        } catch (tc2) {
          d = null;
        }
        if (Array.isArray(d) && d.length == 3) {
          var e = d;
          if (e[0] == 0)
            a: {
              if (!c.j) {
                if (c.a)
                  if (c.a.u + 3e3 < a.u)
                    Ac$1(c), Bc(c);
                  else
                    break a;
                Cc$1(c);
                J$1(18);
              }
            }
          else
            c.oa = e[1], 0 < c.oa - c.P && 37500 > e[2] && c.H && c.o == 0 && !c.m && (c.m = K$1(p(c.Sa, c), 6e3));
          if (1 >= Dc$1(c.b) && c.ea) {
            try {
              c.ea();
            } catch (tc2) {
            }
            c.ea = void 0;
          }
        } else
          Q$1(c, 11);
      } else if ((a.C || c.a == a) && Ac$1(c), !sa$1(b))
        for (b = d = c.ka.a.parse(b), d = 0; d < b.length; d++)
          if (e = b[d], c.P = e[0], e = e[1], c.v == 2)
            if (e[0] == "c") {
              c.J = e[1];
              c.ga = e[2];
              var f = e[3];
              f != null && (c.ha = f, c.c.info("VER=" + c.ha));
              var g = e[4];
              g != null && (c.pa = g, c.c.info("SVER=" + c.pa));
              var m = e[5];
              if (m != null && typeof m === "number" && 0 < m) {
                var l = 1.5 * m;
                c.D = l;
                c.c.info("backChannelRequestTimeoutMs_=" + l);
              }
              l = c;
              var u = a.a;
              if (u) {
                var C2 = u.a ? u.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                if (C2) {
                  var B2 = l.b;
                  !B2.a && (v(C2, "spdy") || v(C2, "quic") || v(C2, "h2")) && (B2.f = B2.g, B2.a = new Set(), B2.b && (Ec$1(B2, B2.b), B2.b = null));
                }
                if (l.A) {
                  var rb = u.a ? u.a.getResponseHeader("X-HTTP-Session-Id") : null;
                  rb && (l.na = rb, R$1(l.B, l.A, rb));
                }
              }
              c.v = 3;
              c.f && c.f.ta();
              c.U && (c.N = q$1() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
              l = c;
              var xa2 = a;
              l.la = Fc$1(l, l.C ? l.ga : null, l.fa);
              if (xa2.C) {
                Gc$1(l.b, xa2);
                var ya2 = xa2, xc2 = l.D;
                xc2 && ya2.setTimeout(xc2);
                ya2.o && (pc$1(ya2), mc$1(ya2));
                l.a = xa2;
              } else
                Hc(l);
              0 < c.g.length && Ic$1(c);
            } else
              e[0] != "stop" && e[0] != "close" || Q$1(c, 7);
          else
            c.v == 3 && (e[0] == "stop" || e[0] == "close" ? e[0] == "stop" ? Q$1(c, 7) : Jc(c) : e[0] != "noop" && c.f && c.f.sa(e), c.o = 0);
    }
    I$1(4);
  } catch (tc2) {
  }
}
function Kc(a) {
  if (a.K && typeof a.K == "function")
    return a.K();
  if (typeof a === "string")
    return a.split("");
  if (ba$1(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
      b.push(a[d]);
    return b;
  }
  b = [];
  c = 0;
  for (d in a)
    b[c++] = a[d];
  return a = b;
}
function Lc$1(a, b) {
  if (a.forEach && typeof a.forEach == "function")
    a.forEach(b, void 0);
  else if (ba$1(a) || typeof a === "string")
    na$1(a, b, void 0);
  else {
    if (a.L && typeof a.L == "function")
      var c = a.L();
    else if (a.K && typeof a.K == "function")
      c = void 0;
    else if (ba$1(a) || typeof a === "string") {
      c = [];
      for (var d = a.length, e = 0; e < d; e++)
        c.push(e);
    } else
      for (e in c = [], d = 0, a)
        c[d++] = e;
    d = Kc(a);
    e = d.length;
    for (var f = 0; f < e; f++)
      b.call(void 0, d[f], c && c[f], a);
  }
}
function S$1(a, b) {
  this.b = {};
  this.a = [];
  this.c = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2)
      throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
      this.set(arguments[d], arguments[d + 1]);
  } else if (a)
    if (a instanceof S$1)
      for (c = a.L(), d = 0; d < c.length; d++)
        this.set(c[d], a.get(c[d]));
    else
      for (d in a)
        this.set(d, a[d]);
}
h = S$1.prototype;
h.K = function() {
  Mc$1(this);
  for (var a = [], b = 0; b < this.a.length; b++)
    a.push(this.b[this.a[b]]);
  return a;
};
h.L = function() {
  Mc$1(this);
  return this.a.concat();
};
function Mc$1(a) {
  if (a.c != a.a.length) {
    for (var b = 0, c = 0; b < a.a.length; ) {
      var d = a.a[b];
      T$1(a.b, d) && (a.a[c++] = d);
      b++;
    }
    a.a.length = c;
  }
  if (a.c != a.a.length) {
    var e = {};
    for (c = b = 0; b < a.a.length; )
      d = a.a[b], T$1(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    a.a.length = c;
  }
}
h.get = function(a, b) {
  return T$1(this.b, a) ? this.b[a] : b;
};
h.set = function(a, b) {
  T$1(this.b, a) || (this.c++, this.a.push(a));
  this.b[a] = b;
};
h.forEach = function(a, b) {
  for (var c = this.L(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
  }
};
function T$1(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
var Nc$1 = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Oc$1(a, b) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="), e = null;
      if (0 <= d) {
        var f = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else
        f = a[c];
      b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
  }
}
function U$1(a, b) {
  this.c = this.j = this.f = "";
  this.h = null;
  this.i = this.g = "";
  this.a = false;
  if (a instanceof U$1) {
    this.a = b !== void 0 ? b : a.a;
    Pc$1(this, a.f);
    this.j = a.j;
    Qc(this, a.c);
    Rc$1(this, a.h);
    this.g = a.g;
    b = a.b;
    var c = new Sc$1();
    c.c = b.c;
    b.a && (c.a = new S$1(b.a), c.b = b.b);
    Tc$1(this, c);
    this.i = a.i;
  } else
    a && (c = String(a).match(Nc$1)) ? (this.a = !!b, Pc$1(this, c[1] || "", true), this.j = Uc$1(c[2] || ""), Qc(this, c[3] || "", true), Rc$1(this, c[4]), this.g = Uc$1(c[5] || "", true), Tc$1(this, c[6] || "", true), this.i = Uc$1(c[7] || "")) : (this.a = !!b, this.b = new Sc$1(null, this.a));
}
U$1.prototype.toString = function() {
  var a = [], b = this.f;
  b && a.push(Vc$1(b, Wc, true), ":");
  var c = this.c;
  if (c || b == "file")
    a.push("//"), (b = this.j) && a.push(Vc$1(b, Wc, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, c != null && a.push(":", String(c));
  if (c = this.g)
    this.c && c.charAt(0) != "/" && a.push("/"), a.push(Vc$1(c, c.charAt(0) == "/" ? Xc : Yc, true));
  (c = this.b.toString()) && a.push("?", c);
  (c = this.i) && a.push("#", Vc$1(c, Zc));
  return a.join("");
};
function N$1(a) {
  return new U$1(a);
}
function Pc$1(a, b, c) {
  a.f = c ? Uc$1(b, true) : b;
  a.f && (a.f = a.f.replace(/:$/, ""));
}
function Qc(a, b, c) {
  a.c = c ? Uc$1(b, true) : b;
}
function Rc$1(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b)
      throw Error("Bad port number " + b);
    a.h = b;
  } else
    a.h = null;
}
function Tc$1(a, b, c) {
  b instanceof Sc$1 ? (a.b = b, $c(a.b, a.a)) : (c || (b = Vc$1(b, ad)), a.b = new Sc$1(b, a.a));
}
function R$1(a, b, c) {
  a.b.set(b, c);
}
function kc$1(a) {
  R$1(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q$1()).toString(36));
  return a;
}
function bd(a) {
  return a instanceof U$1 ? N$1(a) : new U$1(a, void 0);
}
function cd(a, b, c, d) {
  var e = new U$1(null, void 0);
  a && Pc$1(e, a);
  b && Qc(e, b);
  c && Rc$1(e, c);
  d && (e.g = d);
  return e;
}
function Uc$1(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function Vc$1(a, b, c) {
  return typeof a === "string" ? (a = encodeURI(a).replace(b, dd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function dd(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Wc = /[#\/\?@]/g, Yc = /[#\?:]/g, Xc = /[#\?]/g, ad = /[#\?@]/g, Zc = /#/g;
function Sc$1(a, b) {
  this.b = this.a = null;
  this.c = a || null;
  this.f = !!b;
}
function V$1(a) {
  a.a || (a.a = new S$1(), a.b = 0, a.c && Oc$1(a.c, function(b, c) {
    a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
  }));
}
h = Sc$1.prototype;
h.add = function(a, b) {
  V$1(this);
  this.c = null;
  a = W$1(this, a);
  var c = this.a.get(a);
  c || this.a.set(a, c = []);
  c.push(b);
  this.b += 1;
  return this;
};
function ed(a, b) {
  V$1(a);
  b = W$1(a, b);
  T$1(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, T$1(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Mc$1(a)));
}
function fd(a, b) {
  V$1(a);
  b = W$1(a, b);
  return T$1(a.a.b, b);
}
h.forEach = function(a, b) {
  V$1(this);
  this.a.forEach(function(c, d) {
    na$1(c, function(e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};
h.L = function() {
  V$1(this);
  for (var a = this.a.K(), b = this.a.L(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
      c.push(b[d]);
  return c;
};
h.K = function(a) {
  V$1(this);
  var b = [];
  if (typeof a === "string")
    fd(this, a) && (b = qa$1(b, this.a.get(W$1(this, a))));
  else {
    a = this.a.K();
    for (var c = 0; c < a.length; c++)
      b = qa$1(b, a[c]);
  }
  return b;
};
h.set = function(a, b) {
  V$1(this);
  this.c = null;
  a = W$1(this, a);
  fd(this, a) && (this.b -= this.a.get(a).length);
  this.a.set(a, [b]);
  this.b += 1;
  return this;
};
h.get = function(a, b) {
  if (!a)
    return b;
  a = this.K(a);
  return 0 < a.length ? String(a[0]) : b;
};
function nc$1(a, b, c) {
  ed(a, b);
  0 < c.length && (a.c = null, a.a.set(W$1(a, b), ra$1(c)), a.b += c.length);
}
h.toString = function() {
  if (this.c)
    return this.c;
  if (!this.a)
    return "";
  for (var a = [], b = this.a.L(), c = 0; c < b.length; c++) {
    var d = b[c], e = encodeURIComponent(String(d));
    d = this.K(d);
    for (var f = 0; f < d.length; f++) {
      var g = e;
      d[f] !== "" && (g += "=" + encodeURIComponent(String(d[f])));
      a.push(g);
    }
  }
  return this.c = a.join("&");
};
function W$1(a, b) {
  b = String(b);
  a.f && (b = b.toLowerCase());
  return b;
}
function $c(a, b) {
  b && !a.f && (V$1(a), a.c = null, a.a.forEach(function(c, d) {
    var e = d.toLowerCase();
    d != e && (ed(this, d), nc$1(this, e, c));
  }, a));
  a.f = b;
}
var gd = function() {
  function gd2(a, b) {
    this.b = a;
    this.a = b;
  }
  return gd2;
}();
function hd(a) {
  this.g = a || id;
  k$1.PerformanceNavigationTiming ? (a = k$1.performance.getEntriesByType("navigation"), a = 0 < a.length && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")) : a = !!(k$1.ia && k$1.ia.ya && k$1.ia.ya() && k$1.ia.ya().Lb);
  this.f = a ? this.g : 1;
  this.a = null;
  1 < this.f && (this.a = new Set());
  this.b = null;
  this.c = [];
}
var id = 10;
function jd(a) {
  return a.b ? true : a.a ? a.a.size >= a.f : false;
}
function Dc$1(a) {
  return a.b ? 1 : a.a ? a.a.size : 0;
}
function zc$1(a, b) {
  return a.b ? a.b == b : a.a ? a.a.has(b) : false;
}
function Ec$1(a, b) {
  a.a ? a.a.add(b) : a.b = b;
}
function Gc$1(a, b) {
  a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b);
}
hd.prototype.cancel = function() {
  var e_1, _a2;
  this.c = kd(this);
  if (this.b)
    this.b.cancel(), this.b = null;
  else if (this.a && this.a.size !== 0) {
    try {
      for (var _b = __values(this.a.values()), _c2 = _b.next(); !_c2.done; _c2 = _b.next()) {
        var a = _c2.value;
        a.cancel();
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c2 && !_c2.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    this.a.clear();
  }
};
function kd(a) {
  var e_2, _a2;
  if (a.b != null)
    return a.c.concat(a.b.s);
  if (a.a != null && a.a.size !== 0) {
    var b = a.c;
    try {
      for (var _b = __values(a.a.values()), _c2 = _b.next(); !_c2.done; _c2 = _b.next()) {
        var c = _c2.value;
        b = b.concat(c.s);
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (_c2 && !_c2.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    return b;
  }
  return ra$1(a.c);
}
function ld() {
}
ld.prototype.stringify = function(a) {
  return k$1.JSON.stringify(a, void 0);
};
ld.prototype.parse = function(a) {
  return k$1.JSON.parse(a, void 0);
};
function md() {
  this.a = new ld();
}
function nd(a, b, c) {
  var d = c || "";
  try {
    Lc$1(a, function(e, f) {
      var g = e;
      n(e) && (g = ub(e));
      b.push(d + f + "=" + encodeURIComponent(g));
    });
  } catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
  }
}
function od(a, b) {
  var c = new Ob();
  if (k$1.Image) {
    var d = new Image();
    d.onload = ja$1(pd, c, d, "TestLoadImage: loaded", true, b);
    d.onerror = ja$1(pd, c, d, "TestLoadImage: error", false, b);
    d.onabort = ja$1(pd, c, d, "TestLoadImage: abort", false, b);
    d.ontimeout = ja$1(pd, c, d, "TestLoadImage: timeout", false, b);
    k$1.setTimeout(function() {
      if (d.ontimeout)
        d.ontimeout();
    }, 1e4);
    d.src = a;
  } else
    b(false);
}
function pd(a, b, c, d, e) {
  try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
  } catch (f) {
  }
}
var qd = k$1.JSON.parse;
function X$1(a) {
  D$1.call(this);
  this.headers = new S$1();
  this.H = a || null;
  this.b = false;
  this.s = this.a = null;
  this.B = "";
  this.h = 0;
  this.f = "";
  this.g = this.A = this.l = this.u = false;
  this.o = 0;
  this.m = null;
  this.I = rd;
  this.D = this.F = false;
}
r(X$1, D$1);
var rd = "", sd = /^https?$/i, td = ["POST", "PUT"];
h = X$1.prototype;
h.ba = function(a, b, c, d) {
  if (this.a)
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
  b = b ? b.toUpperCase() : "GET";
  this.B = a;
  this.f = "";
  this.h = 0;
  this.u = false;
  this.b = true;
  this.a = new XMLHttpRequest();
  this.s = this.H ? ac$1(this.H) : ac$1(ec$1);
  this.a.onreadystatechange = p(this.za, this);
  try {
    this.A = true, this.a.open(b, String(a), true), this.A = false;
  } catch (f) {
    ud(this, f);
    return;
  }
  a = c || "";
  var e = new S$1(this.headers);
  d && Lc$1(d, function(f, g) {
    e.set(g, f);
  });
  d = oa$1(e.L());
  c = k$1.FormData && a instanceof k$1.FormData;
  !(0 <= ma$1(td, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  e.forEach(function(f, g) {
    this.a.setRequestHeader(g, f);
  }, this);
  this.I && (this.a.responseType = this.I);
  "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
  try {
    vd(this), 0 < this.o && ((this.D = wd(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Ib(this.xa, this.o, this)), this.l = true, this.a.send(a), this.l = false;
  } catch (f) {
    ud(this, f);
  }
};
function wd(a) {
  return x$1 && Qa$1(9) && typeof a.timeout === "number" && a.ontimeout !== void 0;
}
function pa$1(a) {
  return a.toLowerCase() == "content-type";
}
h.xa = function() {
  typeof goog != "undefined" && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, E$1(this, "timeout"), this.abort(8));
};
function ud(a, b) {
  a.b = false;
  a.a && (a.g = true, a.a.abort(), a.g = false);
  a.f = b;
  a.h = 5;
  xd(a);
  yd(a);
}
function xd(a) {
  a.u || (a.u = true, E$1(a, "complete"), E$1(a, "error"));
}
h.abort = function(a) {
  this.a && this.b && (this.b = false, this.g = true, this.a.abort(), this.g = false, this.h = a || 7, E$1(this, "complete"), E$1(this, "abort"), yd(this));
};
h.G = function() {
  this.a && (this.b && (this.b = false, this.g = true, this.a.abort(), this.g = false), yd(this, true));
  X$1.X.G.call(this);
};
h.za = function() {
  this.j || (this.A || this.l || this.g ? zd(this) : this.Ua());
};
h.Ua = function() {
  zd(this);
};
function zd(a) {
  if (a.b && typeof goog != "undefined" && (!a.s[1] || O$1(a) != 4 || a.W() != 2)) {
    if (a.l && O$1(a) == 4)
      Ib(a.za, 0, a);
    else if (E$1(a, "readystatechange"), O$1(a) == 4) {
      a.b = false;
      try {
        {
          var l = a.W();
          a:
            switch (l) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var b = true;
                break a;
              default:
                b = false;
            }
          var c;
          if (!(c = b)) {
            var d;
            if (d = l === 0) {
              var e = String(a.B).match(Nc$1)[1] || null;
              if (!e && k$1.self && k$1.self.location) {
                var f = k$1.self.location.protocol;
                e = f.substr(0, f.length - 1);
              }
              d = !sd.test(e ? e.toLowerCase() : "");
            }
            c = d;
          }
          var g = c;
        }
        if (g)
          E$1(a, "complete"), E$1(a, "success");
        else {
          a.h = 6;
          try {
            var m = 2 < O$1(a) ? a.a.statusText : "";
          } catch (l2) {
            m = "";
          }
          a.f = m + " [" + a.W() + "]";
          xd(a);
        }
      } finally {
        yd(a);
      }
    }
  }
}
function yd(a, b) {
  if (a.a) {
    vd(a);
    var c = a.a, d = a.s[0] ? aa$1 : null;
    a.a = null;
    a.s = null;
    b || E$1(a, "ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function vd(a) {
  a.a && a.D && (a.a.ontimeout = null);
  a.m && (k$1.clearTimeout(a.m), a.m = null);
}
function O$1(a) {
  return a.a ? a.a.readyState : 0;
}
h.W = function() {
  try {
    return 2 < O$1(this) ? this.a.status : -1;
  } catch (a) {
    return -1;
  }
};
h.$ = function() {
  try {
    return this.a ? this.a.responseText : "";
  } catch (a) {
    return "";
  }
};
h.Pa = function(a) {
  if (this.a) {
    var b = this.a.responseText;
    a && b.indexOf(a) == 0 && (b = b.substring(a.length));
    return qd(b);
  }
};
h.ua = function() {
  return this.h;
};
h.Qa = function() {
  return typeof this.f === "string" ? this.f : String(this.f);
};
function Ad(a) {
  var b = "";
  za$1(a, function(c, d) {
    b += d;
    b += ":";
    b += c;
    b += "\r\n";
  });
  return b;
}
function Bd(a, b, c) {
  a: {
    for (d in c) {
      var d = false;
      break a;
    }
    d = true;
  }
  d || (c = Ad(c), typeof a === "string" ? c != null && encodeURIComponent(String(c)) : R$1(a, b, c));
}
function Cd(a, b, c) {
  return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
}
function Dd(a) {
  this.pa = 0;
  this.g = [];
  this.c = new Ob();
  this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.V = this.i = this.O = this.l = null;
  this.Oa = this.R = 0;
  this.La = Cd("failFast", false, a);
  this.H = this.m = this.j = this.h = this.f = null;
  this.S = true;
  this.I = this.oa = this.P = -1;
  this.T = this.o = this.u = 0;
  this.Ha = Cd("baseRetryDelayMs", 5e3, a);
  this.Ra = Cd("retryDelaySeedMs", 1e4, a);
  this.Ma = Cd("forwardChannelMaxRetries", 2, a);
  this.ma = Cd("forwardChannelRequestTimeoutMs", 2e4, a);
  this.Na = a && a.g || void 0;
  this.D = void 0;
  this.C = a && a.supportsCrossDomainXhr || false;
  this.J = "";
  this.b = new hd(a && a.concurrentRequestLimit);
  this.ka = new md();
  this.da = a && a.fastHandshake || false;
  this.Ia = a && a.b || false;
  a && a.f && (this.c.a = false);
  a && a.forceLongPolling && (this.S = false);
  this.U = !this.da && this.S && a && a.detectBufferingProxy || false;
  this.ea = void 0;
  this.N = 0;
  this.F = false;
  this.s = null;
  (this.Ka = a && a.c || false) && this.c.info("Opt-in to enable Chrome Origin Trials.");
}
h = Dd.prototype;
h.ha = 8;
h.v = 1;
function Jc(a) {
  Ed(a);
  if (a.v == 3) {
    var b = a.R++, c = N$1(a.B);
    R$1(c, "SID", a.J);
    R$1(c, "RID", b);
    R$1(c, "TYPE", "terminate");
    Fd(a, c);
    b = new M$1(a, a.c, b, void 0);
    b.H = 2;
    b.i = kc$1(N$1(c));
    c = false;
    k$1.navigator && k$1.navigator.sendBeacon && (c = k$1.navigator.sendBeacon(b.i.toString(), ""));
    !c && k$1.Image && (new Image().src = b.i, c = true);
    c || (b.a = oc$1(b.g, null), b.a.ba(b.i));
    b.u = q$1();
    mc$1(b);
  }
  Gd(a);
}
function Bc(a) {
  a.a && (wc$1(a), a.a.cancel(), a.a = null);
}
function Ed(a) {
  Bc(a);
  a.j && (k$1.clearTimeout(a.j), a.j = null);
  Ac$1(a);
  a.b.cancel();
  a.h && (typeof a.h === "number" && k$1.clearTimeout(a.h), a.h = null);
}
function Hd(a, b) {
  a.g.push(new gd(a.Oa++, b));
  a.v == 3 && Ic$1(a);
}
function Ic$1(a) {
  jd(a.b) || a.h || (a.h = true, Bb(a.Ba, a), a.u = 0);
}
function Id(a, b) {
  if (Dc$1(a.b) >= a.b.f - (a.h ? 1 : 0))
    return false;
  if (a.h)
    return a.g = b.s.concat(a.g), true;
  if (a.v == 1 || a.v == 2 || a.u >= (a.La ? 0 : a.Ma))
    return false;
  a.h = K$1(p(a.Ba, a, b), Jd(a, a.u));
  a.u++;
  return true;
}
h.Ba = function(a) {
  if (this.h)
    if (this.h = null, this.v == 1) {
      if (!a) {
        this.R = Math.floor(1e5 * Math.random());
        a = this.R++;
        var b = new M$1(this, this.c, a, void 0), c = this.l;
        this.O && (c ? (c = Aa$1(c), Ca$1(c, this.O)) : c = this.O);
        this.i === null && (b.B = c);
        var d;
        if (this.da)
          a: {
            for (var e = d = 0; e < this.g.length; e++) {
              b: {
                var f = this.g[e];
                if ("__data__" in f.a && (f = f.a.__data__, typeof f === "string")) {
                  f = f.length;
                  break b;
                }
                f = void 0;
              }
              if (f === void 0)
                break;
              d += f;
              if (4096 < d) {
                d = e;
                break a;
              }
              if (d === 4096 || e === this.g.length - 1) {
                d = e + 1;
                break a;
              }
            }
            d = 1e3;
          }
        else
          d = 1e3;
        d = Kd(this, b, d);
        e = N$1(this.B);
        R$1(e, "RID", a);
        R$1(e, "CVER", 22);
        this.A && R$1(e, "X-HTTP-Session-Id", this.A);
        Fd(this, e);
        this.i && c && Bd(e, this.i, c);
        Ec$1(this.b, b);
        this.Ia && R$1(e, "TYPE", "init");
        this.da ? (R$1(e, "$req", d), R$1(e, "SID", "null"), b.U = true, jc$1(b, e, null)) : jc$1(b, e, d);
        this.v = 2;
      }
    } else
      this.v == 3 && (a ? Ld(this, a) : this.g.length == 0 || jd(this.b) || Ld(this));
};
function Ld(a, b) {
  var c;
  b ? c = b.f : c = a.R++;
  var d = N$1(a.B);
  R$1(d, "SID", a.J);
  R$1(d, "RID", c);
  R$1(d, "AID", a.P);
  Fd(a, d);
  a.i && a.l && Bd(d, a.i, a.l);
  c = new M$1(a, a.c, c, a.u + 1);
  a.i === null && (c.B = a.l);
  b && (a.g = b.s.concat(a.g));
  b = Kd(a, c, 1e3);
  c.setTimeout(Math.round(0.5 * a.ma) + Math.round(0.5 * a.ma * Math.random()));
  Ec$1(a.b, c);
  jc$1(c, d, b);
}
function Fd(a, b) {
  a.f && Lc$1({}, function(c, d) {
    R$1(b, d, c);
  });
}
function Kd(a, b, c) {
  c = Math.min(a.g.length, c);
  var d = a.f ? p(a.f.Ja, a.f, a) : null;
  a:
    for (var e = a.g, f = -1; ; ) {
      var g = ["count=" + c];
      f == -1 ? 0 < c ? (f = e[0].b, g.push("ofs=" + f)) : f = 0 : g.push("ofs=" + f);
      for (var m = true, l = 0; l < c; l++) {
        var u = e[l].b, C2 = e[l].a;
        u -= f;
        if (0 > u)
          f = Math.max(0, e[l].b - 100), m = false;
        else
          try {
            nd(C2, g, "req" + u + "_");
          } catch (B2) {
            d && d(C2);
          }
      }
      if (m) {
        d = g.join("&");
        break a;
      }
    }
  a = a.g.splice(0, c);
  b.s = a;
  return d;
}
function Hc(a) {
  a.a || a.j || (a.T = 1, Bb(a.Aa, a), a.o = 0);
}
function Cc$1(a) {
  if (a.a || a.j || 3 <= a.o)
    return false;
  a.T++;
  a.j = K$1(p(a.Aa, a), Jd(a, a.o));
  a.o++;
  return true;
}
h.Aa = function() {
  this.j = null;
  Md(this);
  if (this.U && !(this.F || this.a == null || 0 >= this.N)) {
    var a = 2 * this.N;
    this.c.info("BP detection timer enabled: " + a);
    this.s = K$1(p(this.Ta, this), a);
  }
};
h.Ta = function() {
  this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = false, this.F = true, J$1(10), Bc(this), Md(this));
};
function wc$1(a) {
  a.s != null && (k$1.clearTimeout(a.s), a.s = null);
}
function Md(a) {
  a.a = new M$1(a, a.c, "rpc", a.T);
  a.i === null && (a.a.B = a.l);
  a.a.O = 0;
  var b = N$1(a.la);
  R$1(b, "RID", "rpc");
  R$1(b, "SID", a.J);
  R$1(b, "CI", a.H ? "0" : "1");
  R$1(b, "AID", a.P);
  Fd(a, b);
  R$1(b, "TYPE", "xmlhttp");
  a.i && a.l && Bd(b, a.i, a.l);
  a.D && a.a.setTimeout(a.D);
  var c = a.a;
  a = a.ga;
  c.H = 1;
  c.i = kc$1(N$1(b));
  c.j = null;
  c.I = true;
  lc$1(c, a);
}
h.Sa = function() {
  this.m != null && (this.m = null, Bc(this), Cc$1(this), J$1(19));
};
function Ac$1(a) {
  a.m != null && (k$1.clearTimeout(a.m), a.m = null);
}
function uc$1(a, b) {
  var c = null;
  if (a.a == b) {
    Ac$1(a);
    wc$1(a);
    a.a = null;
    var d = 2;
  } else if (zc$1(a.b, b))
    c = b.s, Gc$1(a.b, b), d = 1;
  else
    return;
  a.I = b.N;
  if (a.v != 0) {
    if (b.b)
      if (d == 1) {
        c = b.j ? b.j.length : 0;
        b = q$1() - b.u;
        var e = a.u;
        d = Ub();
        E$1(d, new Xb(d, c, b, e));
        Ic$1(a);
      } else
        Hc(a);
    else if (e = b.h, e == 3 || e == 0 && 0 < a.I || !(d == 1 && Id(a, b) || d == 2 && Cc$1(a)))
      switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
        case 1:
          Q$1(a, 5);
          break;
        case 4:
          Q$1(a, 10);
          break;
        case 3:
          Q$1(a, 6);
          break;
        default:
          Q$1(a, 2);
      }
  }
}
function Jd(a, b) {
  var c = a.Ha + Math.floor(Math.random() * a.Ra);
  a.f || (c *= 2);
  return c * b;
}
function Q$1(a, b) {
  a.c.info("Error code " + b);
  if (b == 2) {
    var c = null;
    a.f && (c = null);
    var d = p(a.Ya, a);
    c || (c = new U$1("//www.google.com/images/cleardot.gif"), k$1.location && k$1.location.protocol == "http" || Pc$1(c, "https"), kc$1(c));
    od(c.toString(), d);
  } else
    J$1(2);
  a.v = 0;
  a.f && a.f.ra(b);
  Gd(a);
  Ed(a);
}
h.Ya = function(a) {
  a ? (this.c.info("Successfully pinged google.com"), J$1(2)) : (this.c.info("Failed to ping google.com"), J$1(1));
};
function Gd(a) {
  a.v = 0;
  a.I = -1;
  if (a.f) {
    if (kd(a.b).length != 0 || a.g.length != 0)
      a.b.c.length = 0, ra$1(a.g), a.g.length = 0;
    a.f.qa();
  }
}
function Fc$1(a, b, c) {
  var d = bd(c);
  if (d.c != "")
    b && Qc(d, b + "." + d.c), Rc$1(d, d.h);
  else {
    var e = k$1.location;
    d = cd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
  }
  a.V && za$1(a.V, function(f, g) {
    R$1(d, g, f);
  });
  b = a.A;
  c = a.na;
  b && c && R$1(d, b, c);
  R$1(d, "VER", a.ha);
  Fd(a, d);
  return d;
}
function oc$1(a, b) {
  if (b && !a.C)
    throw Error("Can't create secondary domain capable XhrIo object.");
  b = new X$1(a.Na);
  b.F = a.C;
  return b;
}
function Nd() {
}
h = Nd.prototype;
h.ta = function() {
};
h.sa = function() {
};
h.ra = function() {
};
h.qa = function() {
};
h.Ja = function() {
};
function Od() {
  if (x$1 && !(10 <= Number(Ta$1)))
    throw Error("Environmental error: no available transport.");
}
Od.prototype.a = function(a, b) {
  return new Y$1(a, b);
};
function Y$1(a, b) {
  D$1.call(this);
  this.a = new Dd(b);
  this.o = a;
  this.b = b && b.messageUrlParams || null;
  a = b && b.messageHeaders || null;
  b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
  this.a.l = a;
  a = b && b.initMessageHeaders || null;
  b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
  b && b.a && (a ? a["X-WebChannel-Client-Profile"] = b.a : a = { "X-WebChannel-Client-Profile": b.a });
  this.a.O = a;
  (a = b && b.httpHeadersOverwriteParam) && !sa$1(a) && (this.a.i = a);
  this.m = b && b.supportsCrossDomainXhr || false;
  this.l = b && b.sendRawJson || false;
  (b = b && b.httpSessionIdParam) && !sa$1(b) && (this.a.A = b, a = this.b, a !== null && b in a && (a = this.b, b in a && delete a[b]));
  this.f = new Z$1(this);
}
r(Y$1, D$1);
Y$1.prototype.g = function() {
  this.a.f = this.f;
  this.m && (this.a.C = true);
  var a = this.a, b = this.o, c = this.b || void 0;
  J$1(0);
  a.fa = b;
  a.V = c || {};
  a.H = a.S;
  a.B = Fc$1(a, null, a.fa);
  Ic$1(a);
};
Y$1.prototype.close = function() {
  Jc(this.a);
};
Y$1.prototype.h = function(a) {
  if (typeof a === "string") {
    var b = {};
    b.__data__ = a;
    Hd(this.a, b);
  } else
    this.l ? (b = {}, b.__data__ = ub(a), Hd(this.a, b)) : Hd(this.a, a);
};
Y$1.prototype.G = function() {
  this.a.f = null;
  delete this.f;
  Jc(this.a);
  delete this.a;
  Y$1.X.G.call(this);
};
function Pd(a) {
  cc$1.call(this);
  var b = a.__sm__;
  if (b) {
    a: {
      for (var c in b) {
        a = c;
        break a;
      }
      a = void 0;
    }
    (this.c = a) ? (a = this.c, this.data = b !== null && a in b ? b[a] : void 0) : this.data = b;
  } else
    this.data = a;
}
r(Pd, cc$1);
function Qd() {
  dc$1.call(this);
  this.status = 1;
}
r(Qd, dc$1);
function Z$1(a) {
  this.a = a;
}
r(Z$1, Nd);
Z$1.prototype.ta = function() {
  E$1(this.a, "a");
};
Z$1.prototype.sa = function(a) {
  E$1(this.a, new Pd(a));
};
Z$1.prototype.ra = function(a) {
  E$1(this.a, new Qd(a));
};
Z$1.prototype.qa = function() {
  E$1(this.a, "b");
};
Od.prototype.createWebChannel = Od.prototype.a;
Y$1.prototype.send = Y$1.prototype.h;
Y$1.prototype.open = Y$1.prototype.g;
Y$1.prototype.close = Y$1.prototype.close;
Yb.NO_ERROR = 0;
Yb.TIMEOUT = 8;
Yb.HTTP_ERROR = 6;
Zb.COMPLETE = "complete";
bc$1.EventType = L$2;
L$2.OPEN = "a";
L$2.CLOSE = "b";
L$2.ERROR = "c";
L$2.MESSAGE = "d";
D$1.prototype.listen = D$1.prototype.va;
X$1.prototype.listenOnce = X$1.prototype.wa;
X$1.prototype.getLastError = X$1.prototype.Qa;
X$1.prototype.getLastErrorCode = X$1.prototype.ua;
X$1.prototype.getStatus = X$1.prototype.W;
X$1.prototype.getResponseJson = X$1.prototype.Pa;
X$1.prototype.getResponseText = X$1.prototype.$;
X$1.prototype.send = X$1.prototype.ba;
var createWebChannelTransport = function() {
  return new Od();
};
var getStatEventTarget = function() {
  return Ub();
};
var ErrorCode = Yb;
var EventType = Zb;
var Event = H$1;
var Stat = { gb: 0, jb: 1, kb: 2, Db: 3, Ib: 4, Fb: 5, Gb: 6, Eb: 7, Cb: 8, Hb: 9, PROXY: 10, NOPROXY: 11, Ab: 12, wb: 13, xb: 14, vb: 15, yb: 16, zb: 17, bb: 18, ab: 19, cb: 20 };
var WebChannel = bc$1;
var XhrIo = X$1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _ = function(t2, e, n2, r2, i, o) {
  this.t = t2, this.persistenceKey = e, this.host = n2, this.ssl = r2, this.forceLongPolling = i, this.i = o;
}, I = function() {
  function t2(t3, e) {
    this.projectId = t3, this.database = e || "(default)";
  }
  return Object.defineProperty(t2.prototype, "o", {
    get: function() {
      return this.database === "(default)";
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.isEqual = function(e) {
    return e instanceof t2 && e.projectId === this.projectId && e.database === this.database;
  }, t2;
}(), E = new Logger("@firebase/firestore");
function T() {
  return E.logLevel;
}
function N(t2) {
  for (var n2 = [], r2 = 1; r2 < arguments.length; r2++)
    n2[r2 - 1] = arguments[r2];
  if (E.logLevel <= LogLevel.DEBUG) {
    var i = n2.map(S);
    E.debug.apply(E, __spreadArrays$1(["Firestore (8.2.7): " + t2], i));
  }
}
function A(t2) {
  for (var n2 = [], r2 = 1; r2 < arguments.length; r2++)
    n2[r2 - 1] = arguments[r2];
  if (E.logLevel <= LogLevel.ERROR) {
    var i = n2.map(S);
    E.error.apply(E, __spreadArrays$1(["Firestore (8.2.7): " + t2], i));
  }
}
function D(t2) {
  for (var n2 = [], r2 = 1; r2 < arguments.length; r2++)
    n2[r2 - 1] = arguments[r2];
  if (E.logLevel <= LogLevel.WARN) {
    var i = n2.map(S);
    E.warn.apply(E, __spreadArrays$1(["Firestore (8.2.7): " + t2], i));
  }
}
function S(t2) {
  if (typeof t2 == "string")
    return t2;
  try {
    return e = t2, JSON.stringify(e);
  } catch (e2) {
    return t2;
  }
  /**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
  var e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(t2) {
  t2 === void 0 && (t2 = "Unexpected state");
  var e = "FIRESTORE (8.2.7) INTERNAL ASSERTION FAILED: " + t2;
  throw A(e), new Error(e);
}
function k(t2, e) {
  t2 || x();
}
function O(t2, e) {
  return t2;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P$1(t2) {
  var e = typeof self != "undefined" && (self.crypto || self.msCrypto), n2 = new Uint8Array(t2);
  if (e && typeof e.getRandomValues == "function")
    e.getRandomValues(n2);
  else
    for (var r2 = 0; r2 < t2; r2++)
      n2[r2] = Math.floor(256 * Math.random());
  return n2;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var V = function() {
  function t2() {
  }
  return t2.u = function() {
    for (var t3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t3.length) * t3.length, n2 = ""; n2.length < 20; )
      for (var r2 = P$1(40), i = 0; i < r2.length; ++i)
        n2.length < 20 && r2[i] < e && (n2 += t3.charAt(r2[i] % t3.length));
    return n2;
  }, t2;
}();
function C(t2, e) {
  return t2 < e ? -1 : t2 > e ? 1 : 0;
}
function L$1(t2, e, n2) {
  return t2.length === e.length && t2.every(function(t3, r2) {
    return n2(t3, e[r2]);
  });
}
function R(t2) {
  return t2 + "\0";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var U = function() {
  function t2(t3) {
    this.h = t3;
  }
  return t2.fromBase64String = function(e) {
    return new t2(atob(e));
  }, t2.fromUint8Array = function(e) {
    return new t2(function(t3) {
      for (var e2 = "", n2 = 0; n2 < t3.length; ++n2)
        e2 += String.fromCharCode(t3[n2]);
      return e2;
    }(e));
  }, t2.prototype.toBase64 = function() {
    return t3 = this.h, btoa(t3);
    var t3;
  }, t2.prototype.toUint8Array = function() {
    return function(t3) {
      for (var e = new Uint8Array(t3.length), n2 = 0; n2 < t3.length; n2++)
        e[n2] = t3.charCodeAt(n2);
      return e;
    }(this.h);
  }, t2.prototype.l = function() {
    return 2 * this.h.length;
  }, t2.prototype._ = function(t3) {
    return C(this.h, t3.h);
  }, t2.prototype.isEqual = function(t3) {
    return this.h === t3.h;
  }, t2;
}();
U.T = new U("");
var M = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss"
}, q = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, n2) || this).code = e2, r2.message = n2, r2.name = "FirebaseError", r2.toString = function() {
      return r2.name + ": [code=" + r2.code + "]: " + r2.message;
    }, r2;
  }
  return __extends$1(e, t2), e;
}(Error), F = function() {
  function t2(t3) {
    this.I = t3;
  }
  return t2.fromBase64String = function(e) {
    try {
      return new t2(U.fromBase64String(e));
    } catch (e2) {
      throw new q(M.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e2);
    }
  }, t2.fromUint8Array = function(e) {
    return new t2(U.fromUint8Array(e));
  }, t2.prototype.toBase64 = function() {
    return this.I.toBase64();
  }, t2.prototype.toUint8Array = function() {
    return this.I.toUint8Array();
  }, t2.prototype.toString = function() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }, t2.prototype.isEqual = function(t3) {
    return this.I.isEqual(t3.I);
  }, t2;
}(), j = function() {
  function t2(t3) {
    this.uid = t3;
  }
  return t2.prototype.m = function() {
    return this.uid != null;
  }, t2.prototype.A = function() {
    return this.m() ? "uid:" + this.uid : "anonymous-user";
  }, t2.prototype.isEqual = function(t3) {
    return t3.uid === this.uid;
  }, t2;
}();
j.UNAUTHENTICATED = new j(null), j.R = new j("google-credentials-uid"), j.P = new j("first-party-uid");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var z = function(t2, e) {
  this.user = e, this.type = "OAuth", this.g = {}, this.g.Authorization = "Bearer " + t2;
}, G = function() {
  function t2() {
    this.V = null;
  }
  return t2.prototype.getToken = function() {
    return Promise.resolve(null);
  }, t2.prototype.p = function() {
  }, t2.prototype.v = function(t3) {
    this.V = t3, t3(j.UNAUTHENTICATED);
  }, t2.prototype.S = function() {
    this.V = null;
  }, t2;
}(), B = function() {
  function t2(t3) {
    var e = this;
    this.D = null, this.currentUser = j.UNAUTHENTICATED, this.C = false, this.N = 0, this.V = null, this.forceRefresh = false, this.D = function() {
      e.N++, e.currentUser = e.$(), e.C = true, e.V && e.V(e.currentUser);
    }, this.N = 0, this.auth = t3.getImmediate({
      optional: true
    }), this.auth ? this.auth.addAuthTokenListener(this.D) : (this.D(null), t3.get().then(function(t4) {
      e.auth = t4, e.D && e.auth.addAuthTokenListener(e.D);
    }, function() {
    }));
  }
  return t2.prototype.getToken = function() {
    var t3 = this, e = this.N, n2 = this.forceRefresh;
    return this.forceRefresh = false, this.auth ? this.auth.getToken(n2).then(function(n3) {
      return t3.N !== e ? (N("FirebaseCredentialsProvider", "getToken aborted due to token change."), t3.getToken()) : n3 ? (k(typeof n3.accessToken == "string"), new z(n3.accessToken, t3.currentUser)) : null;
    }) : Promise.resolve(null);
  }, t2.prototype.p = function() {
    this.forceRefresh = true;
  }, t2.prototype.v = function(t3) {
    this.V = t3, this.C && t3(this.currentUser);
  }, t2.prototype.S = function() {
    this.auth && this.auth.removeAuthTokenListener(this.D), this.D = null, this.V = null;
  }, t2.prototype.$ = function() {
    var t3 = this.auth && this.auth.getUid();
    return k(t3 === null || typeof t3 == "string"), new j(t3);
  }, t2;
}(), Q = function() {
  function t2(t3, e) {
    this.F = t3, this.O = e, this.type = "FirstParty", this.user = j.P;
  }
  return Object.defineProperty(t2.prototype, "g", {
    get: function() {
      var t3 = {
        "X-Goog-AuthUser": this.O
      }, e = this.F.auth.getAuthHeaderValueForFirstParty([]);
      return e && (t3.Authorization = e), t3;
    },
    enumerable: false,
    configurable: true
  }), t2;
}(), Y = function() {
  function t2(t3, e) {
    this.F = t3, this.O = e;
  }
  return t2.prototype.getToken = function() {
    return Promise.resolve(new Q(this.F, this.O));
  }, t2.prototype.v = function(t3) {
    t3(j.P);
  }, t2.prototype.S = function() {
  }, t2.prototype.p = function() {
  }, t2;
}(), H = function() {
  function t2(t3, e) {
    var n2 = this;
    this.previousValue = t3, e && (e.k = function(t4) {
      return n2.M(t4);
    }, this.L = function(t4) {
      return e.B(t4);
    });
  }
  return t2.prototype.M = function(t3) {
    return this.previousValue = Math.max(t3, this.previousValue), this.previousValue;
  }, t2.prototype.next = function() {
    var t3 = ++this.previousValue;
    return this.L && this.L(t3), t3;
  }, t2;
}();
H.q = -1;
var K = function() {
  function t2(t3, e) {
    if (this.seconds = t3, this.nanoseconds = e, e < 0)
      throw new q(M.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (e >= 1e9)
      throw new q(M.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (t3 < -62135596800)
      throw new q(M.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t3);
    if (t3 >= 253402300800)
      throw new q(M.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t3);
  }
  return t2.now = function() {
    return t2.fromMillis(Date.now());
  }, t2.fromDate = function(e) {
    return t2.fromMillis(e.getTime());
  }, t2.fromMillis = function(e) {
    var n2 = Math.floor(e / 1e3);
    return new t2(n2, 1e6 * (e - 1e3 * n2));
  }, t2.prototype.toDate = function() {
    return new Date(this.toMillis());
  }, t2.prototype.toMillis = function() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }, t2.prototype.U = function(t3) {
    return this.seconds === t3.seconds ? C(this.nanoseconds, t3.nanoseconds) : C(this.seconds, t3.seconds);
  }, t2.prototype.isEqual = function(t3) {
    return t3.seconds === this.seconds && t3.nanoseconds === this.nanoseconds;
  }, t2.prototype.toString = function() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }, t2.prototype.toJSON = function() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }, t2.prototype.valueOf = function() {
    var t3 = this.seconds - -62135596800;
    return String(t3).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }, t2;
}(), X = function() {
  function t2(t3) {
    this.timestamp = t3;
  }
  return t2.K = function(e) {
    return new t2(e);
  }, t2.min = function() {
    return new t2(new K(0, 0));
  }, t2.prototype._ = function(t3) {
    return this.timestamp.U(t3.timestamp);
  }, t2.prototype.isEqual = function(t3) {
    return this.timestamp.isEqual(t3.timestamp);
  }, t2.prototype.W = function() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }, t2.prototype.toString = function() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }, t2.prototype.j = function() {
    return this.timestamp;
  }, t2;
}(), W = function() {
  function t2(t3, e, n2) {
    e === void 0 ? e = 0 : e > t3.length && x(), n2 === void 0 ? n2 = t3.length - e : n2 > t3.length - e && x(), this.segments = t3, this.offset = e, this.G = n2;
  }
  return Object.defineProperty(t2.prototype, "length", {
    get: function() {
      return this.G;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.isEqual = function(e) {
    return t2.H(this, e) === 0;
  }, t2.prototype.child = function(e) {
    var n2 = this.segments.slice(this.offset, this.limit());
    return e instanceof t2 ? e.forEach(function(t3) {
      n2.push(t3);
    }) : n2.push(e), this.J(n2);
  }, t2.prototype.limit = function() {
    return this.offset + this.length;
  }, t2.prototype.Y = function(t3) {
    return t3 = t3 === void 0 ? 1 : t3, this.J(this.segments, this.offset + t3, this.length - t3);
  }, t2.prototype.X = function() {
    return this.J(this.segments, this.offset, this.length - 1);
  }, t2.prototype.Z = function() {
    return this.segments[this.offset];
  }, t2.prototype.tt = function() {
    return this.get(this.length - 1);
  }, t2.prototype.get = function(t3) {
    return this.segments[this.offset + t3];
  }, t2.prototype.et = function() {
    return this.length === 0;
  }, t2.prototype.nt = function(t3) {
    if (t3.length < this.length)
      return false;
    for (var e = 0; e < this.length; e++)
      if (this.get(e) !== t3.get(e))
        return false;
    return true;
  }, t2.prototype.st = function(t3) {
    if (this.length + 1 !== t3.length)
      return false;
    for (var e = 0; e < this.length; e++)
      if (this.get(e) !== t3.get(e))
        return false;
    return true;
  }, t2.prototype.forEach = function(t3) {
    for (var e = this.offset, n2 = this.limit(); e < n2; e++)
      t3(this.segments[e]);
  }, t2.prototype.it = function() {
    return this.segments.slice(this.offset, this.limit());
  }, t2.H = function(t3, e) {
    for (var n2 = Math.min(t3.length, e.length), r2 = 0; r2 < n2; r2++) {
      var i = t3.get(r2), o = e.get(r2);
      if (i < o)
        return -1;
      if (i > o)
        return 1;
    }
    return t3.length < e.length ? -1 : t3.length > e.length ? 1 : 0;
  }, t2;
}(), Z = function(t2) {
  function e() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return __extends$1(e, t2), e.prototype.J = function(t3, n2, r2) {
    return new e(t3, n2, r2);
  }, e.prototype.rt = function() {
    return this.it().join("/");
  }, e.prototype.toString = function() {
    return this.rt();
  }, e.ot = function() {
    for (var t3 = [], n2 = 0; n2 < arguments.length; n2++)
      t3[n2] = arguments[n2];
    for (var r2 = [], i = 0, o = t3; i < o.length; i++) {
      var u = o[i];
      if (u.indexOf("//") >= 0)
        throw new q(M.INVALID_ARGUMENT, "Invalid segment (" + u + "). Paths must not contain // in them.");
      r2.push.apply(r2, u.split("/").filter(function(t4) {
        return t4.length > 0;
      }));
    }
    return new e(r2);
  }, e.ct = function() {
    return new e([]);
  }, e;
}(W), J = /^[_a-zA-Z][_a-zA-Z0-9]*$/, $ = function(t2) {
  function e() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return __extends$1(e, t2), e.prototype.J = function(t3, n2, r2) {
    return new e(t3, n2, r2);
  }, e.at = function(t3) {
    return J.test(t3);
  }, e.prototype.rt = function() {
    return this.it().map(function(t3) {
      return t3 = t3.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), e.at(t3) || (t3 = "`" + t3 + "`"), t3;
    }).join(".");
  }, e.prototype.toString = function() {
    return this.rt();
  }, e.prototype.ut = function() {
    return this.length === 1 && this.get(0) === "__name__";
  }, e.ht = function() {
    return new e(["__name__"]);
  }, e.lt = function(t3) {
    for (var n2 = [], r2 = "", i = 0, o = function() {
      if (r2.length === 0)
        throw new q(M.INVALID_ARGUMENT, "Invalid field path (" + t3 + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
      n2.push(r2), r2 = "";
    }, u = false; i < t3.length; ) {
      var s = t3[i];
      if (s === "\\") {
        if (i + 1 === t3.length)
          throw new q(M.INVALID_ARGUMENT, "Path has trailing escape character: " + t3);
        var a = t3[i + 1];
        if (a !== "\\" && a !== "." && a !== "`")
          throw new q(M.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t3);
        r2 += a, i += 2;
      } else
        s === "`" ? (u = !u, i++) : s !== "." || u ? (r2 += s, i++) : (o(), i++);
    }
    if (o(), u)
      throw new q(M.INVALID_ARGUMENT, "Unterminated ` in path: " + t3);
    return new e(n2);
  }, e.ct = function() {
    return new e([]);
  }, e;
}(W), tt = function() {
  function t2(t3) {
    this.path = t3;
  }
  return t2._t = function(e) {
    return new t2(Z.ot(e));
  }, t2.ft = function(e) {
    return new t2(Z.ot(e).Y(5));
  }, t2.prototype.dt = function(t3) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t3;
  }, t2.prototype.isEqual = function(t3) {
    return t3 !== null && Z.H(this.path, t3.path) === 0;
  }, t2.prototype.toString = function() {
    return this.path.toString();
  }, t2.H = function(t3, e) {
    return Z.H(t3.path, e.path);
  }, t2.wt = function(t3) {
    return t3.length % 2 == 0;
  }, t2.Et = function(e) {
    return new t2(new Z(e.slice()));
  }, t2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function et(t2) {
  var e = 0;
  for (var n2 in t2)
    Object.prototype.hasOwnProperty.call(t2, n2) && e++;
  return e;
}
function nt(t2, e) {
  for (var n2 in t2)
    Object.prototype.hasOwnProperty.call(t2, n2) && e(n2, t2[n2]);
}
function rt(t2) {
  for (var e in t2)
    if (Object.prototype.hasOwnProperty.call(t2, e))
      return false;
  return true;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var it = function() {
  function t2(t3) {
    this.fields = t3, t3.sort($.H);
  }
  return t2.prototype.Tt = function(t3) {
    for (var e = 0, n2 = this.fields; e < n2.length; e++) {
      if (n2[e].nt(t3))
        return true;
    }
    return false;
  }, t2.prototype.isEqual = function(t3) {
    return L$1(this.fields, t3.fields, function(t4, e) {
      return t4.isEqual(e);
    });
  }, t2;
}(), ot = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ut(t2) {
  if (k(!!t2), typeof t2 == "string") {
    var e = 0, n2 = ot.exec(t2);
    if (k(!!n2), n2[1]) {
      var r2 = n2[1];
      r2 = (r2 + "000000000").substr(0, 9), e = Number(r2);
    }
    var i = new Date(t2);
    return {
      seconds: Math.floor(i.getTime() / 1e3),
      nanos: e
    };
  }
  return {
    seconds: st(t2.seconds),
    nanos: st(t2.nanos)
  };
}
function st(t2) {
  return typeof t2 == "number" ? t2 : typeof t2 == "string" ? Number(t2) : 0;
}
function at(t2) {
  return typeof t2 == "string" ? U.fromBase64String(t2) : U.fromUint8Array(t2);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ct(t2) {
  var e, n2;
  return ((n2 = (((e = t2 == null ? void 0 : t2.mapValue) === null || e === void 0 ? void 0 : e.fields) || {}).__type__) === null || n2 === void 0 ? void 0 : n2.stringValue) === "server_timestamp";
}
function ht(t2) {
  var e = t2.mapValue.fields.__previous_value__;
  return ct(e) ? ht(e) : e;
}
function ft(t2) {
  var e = ut(t2.mapValue.fields.__local_write_time__.timestampValue);
  return new K(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(t2) {
  return t2 == null;
}
function pt(t2) {
  return t2 === 0 && 1 / t2 == -1 / 0;
}
function dt(t2) {
  return typeof t2 == "number" && Number.isInteger(t2) && !pt(t2) && t2 <= Number.MAX_SAFE_INTEGER && t2 >= Number.MIN_SAFE_INTEGER;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vt(t2) {
  return "nullValue" in t2 ? 0 : "booleanValue" in t2 ? 1 : "integerValue" in t2 || "doubleValue" in t2 ? 2 : "timestampValue" in t2 ? 3 : "stringValue" in t2 ? 5 : "bytesValue" in t2 ? 6 : "referenceValue" in t2 ? 7 : "geoPointValue" in t2 ? 8 : "arrayValue" in t2 ? 9 : "mapValue" in t2 ? ct(t2) ? 4 : 10 : x();
}
function yt(t2, e) {
  var n2 = vt(t2);
  if (n2 !== vt(e))
    return false;
  switch (n2) {
    case 0:
      return true;
    case 1:
      return t2.booleanValue === e.booleanValue;
    case 4:
      return ft(t2).isEqual(ft(e));
    case 3:
      return function(t3, e2) {
        if (typeof t3.timestampValue == "string" && typeof e2.timestampValue == "string" && t3.timestampValue.length === e2.timestampValue.length)
          return t3.timestampValue === e2.timestampValue;
        var n3 = ut(t3.timestampValue), r2 = ut(e2.timestampValue);
        return n3.seconds === r2.seconds && n3.nanos === r2.nanos;
      }(t2, e);
    case 5:
      return t2.stringValue === e.stringValue;
    case 6:
      return function(t3, e2) {
        return at(t3.bytesValue).isEqual(at(e2.bytesValue));
      }(t2, e);
    case 7:
      return t2.referenceValue === e.referenceValue;
    case 8:
      return function(t3, e2) {
        return st(t3.geoPointValue.latitude) === st(e2.geoPointValue.latitude) && st(t3.geoPointValue.longitude) === st(e2.geoPointValue.longitude);
      }(t2, e);
    case 2:
      return function(t3, e2) {
        if ("integerValue" in t3 && "integerValue" in e2)
          return st(t3.integerValue) === st(e2.integerValue);
        if ("doubleValue" in t3 && "doubleValue" in e2) {
          var n3 = st(t3.doubleValue), r2 = st(e2.doubleValue);
          return n3 === r2 ? pt(n3) === pt(r2) : isNaN(n3) && isNaN(r2);
        }
        return false;
      }(t2, e);
    case 9:
      return L$1(t2.arrayValue.values || [], e.arrayValue.values || [], yt);
    case 10:
      return function(t3, e2) {
        var n3 = t3.mapValue.fields || {}, r2 = e2.mapValue.fields || {};
        if (et(n3) !== et(r2))
          return false;
        for (var i in n3)
          if (n3.hasOwnProperty(i) && (r2[i] === void 0 || !yt(n3[i], r2[i])))
            return false;
        return true;
      }(t2, e);
    default:
      return x();
  }
}
function mt(t2, e) {
  return (t2.values || []).find(function(t3) {
    return yt(t3, e);
  }) !== void 0;
}
function gt(t2, e) {
  var n2 = vt(t2), r2 = vt(e);
  if (n2 !== r2)
    return C(n2, r2);
  switch (n2) {
    case 0:
      return 0;
    case 1:
      return C(t2.booleanValue, e.booleanValue);
    case 2:
      return function(t3, e2) {
        var n3 = st(t3.integerValue || t3.doubleValue), r3 = st(e2.integerValue || e2.doubleValue);
        return n3 < r3 ? -1 : n3 > r3 ? 1 : n3 === r3 ? 0 : isNaN(n3) ? isNaN(r3) ? 0 : -1 : 1;
      }(t2, e);
    case 3:
      return wt(t2.timestampValue, e.timestampValue);
    case 4:
      return wt(ft(t2), ft(e));
    case 5:
      return C(t2.stringValue, e.stringValue);
    case 6:
      return function(t3, e2) {
        var n3 = at(t3), r3 = at(e2);
        return n3._(r3);
      }(t2.bytesValue, e.bytesValue);
    case 7:
      return function(t3, e2) {
        for (var n3 = t3.split("/"), r3 = e2.split("/"), i = 0; i < n3.length && i < r3.length; i++) {
          var o = C(n3[i], r3[i]);
          if (o !== 0)
            return o;
        }
        return C(n3.length, r3.length);
      }(t2.referenceValue, e.referenceValue);
    case 8:
      return function(t3, e2) {
        var n3 = C(st(t3.latitude), st(e2.latitude));
        return n3 !== 0 ? n3 : C(st(t3.longitude), st(e2.longitude));
      }(t2.geoPointValue, e.geoPointValue);
    case 9:
      return function(t3, e2) {
        for (var n3 = t3.values || [], r3 = e2.values || [], i = 0; i < n3.length && i < r3.length; ++i) {
          var o = gt(n3[i], r3[i]);
          if (o)
            return o;
        }
        return C(n3.length, r3.length);
      }(t2.arrayValue, e.arrayValue);
    case 10:
      return function(t3, e2) {
        var n3 = t3.fields || {}, r3 = Object.keys(n3), i = e2.fields || {}, o = Object.keys(i);
        r3.sort(), o.sort();
        for (var u = 0; u < r3.length && u < o.length; ++u) {
          var s = C(r3[u], o[u]);
          if (s !== 0)
            return s;
          var a = gt(n3[r3[u]], i[o[u]]);
          if (a !== 0)
            return a;
        }
        return C(r3.length, o.length);
      }(t2.mapValue, e.mapValue);
    default:
      throw x();
  }
}
function wt(t2, e) {
  if (typeof t2 == "string" && typeof e == "string" && t2.length === e.length)
    return C(t2, e);
  var n2 = ut(t2), r2 = ut(e), i = C(n2.seconds, r2.seconds);
  return i !== 0 ? i : C(n2.nanos, r2.nanos);
}
function bt(t2) {
  return _t(t2);
}
function _t(t2) {
  return "nullValue" in t2 ? "null" : "booleanValue" in t2 ? "" + t2.booleanValue : "integerValue" in t2 ? "" + t2.integerValue : "doubleValue" in t2 ? "" + t2.doubleValue : "timestampValue" in t2 ? function(t3) {
    var e2 = ut(t3);
    return "time(" + e2.seconds + "," + e2.nanos + ")";
  }(t2.timestampValue) : "stringValue" in t2 ? t2.stringValue : "bytesValue" in t2 ? at(t2.bytesValue).toBase64() : "referenceValue" in t2 ? (n2 = t2.referenceValue, tt.ft(n2).toString()) : "geoPointValue" in t2 ? "geo(" + (e = t2.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in t2 ? function(t3) {
    for (var e2 = "[", n3 = true, r2 = 0, i = t3.values || []; r2 < i.length; r2++) {
      n3 ? n3 = false : e2 += ",", e2 += _t(i[r2]);
    }
    return e2 + "]";
  }(t2.arrayValue) : "mapValue" in t2 ? function(t3) {
    for (var e2 = "{", n3 = true, r2 = 0, i = Object.keys(t3.fields || {}).sort(); r2 < i.length; r2++) {
      var o = i[r2];
      n3 ? n3 = false : e2 += ",", e2 += o + ":" + _t(t3.fields[o]);
    }
    return e2 + "}";
  }(t2.mapValue) : x();
  var e, n2;
}
function It(t2, e) {
  return {
    referenceValue: "projects/" + t2.projectId + "/databases/" + t2.database + "/documents/" + e.path.rt()
  };
}
function Et(t2) {
  return !!t2 && "integerValue" in t2;
}
function Tt(t2) {
  return !!t2 && "arrayValue" in t2;
}
function Nt(t2) {
  return !!t2 && "nullValue" in t2;
}
function At(t2) {
  return !!t2 && "doubleValue" in t2 && isNaN(Number(t2.doubleValue));
}
function Dt(t2) {
  return !!t2 && "mapValue" in t2;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var St = function() {
  function t2(t3) {
    this.proto = t3;
  }
  return t2.empty = function() {
    return new t2({
      mapValue: {}
    });
  }, t2.prototype.field = function(t3) {
    if (t3.et())
      return this.proto;
    for (var e = this.proto, n2 = 0; n2 < t3.length - 1; ++n2) {
      if (!e.mapValue.fields)
        return null;
      if (!Dt(e = e.mapValue.fields[t3.get(n2)]))
        return null;
    }
    return (e = (e.mapValue.fields || {})[t3.tt()]) || null;
  }, t2.prototype.isEqual = function(t3) {
    return yt(this.proto, t3.proto);
  }, t2;
}(), xt = function() {
  function t2(t3) {
    t3 === void 0 && (t3 = St.empty()), this.It = t3, this.At = new Map();
  }
  return t2.prototype.set = function(t3, e) {
    return this.Rt(t3, e), this;
  }, t2.prototype.delete = function(t3) {
    return this.Rt(t3, null), this;
  }, t2.prototype.Rt = function(t3, e) {
    for (var n2 = this.At, r2 = 0; r2 < t3.length - 1; ++r2) {
      var i = t3.get(r2), o = n2.get(i);
      o instanceof Map ? n2 = o : o && vt(o) === 10 ? (o = new Map(Object.entries(o.mapValue.fields || {})), n2.set(i, o), n2 = o) : (o = new Map(), n2.set(i, o), n2 = o);
    }
    n2.set(t3.tt(), e);
  }, t2.prototype.Pt = function() {
    var t3 = this.yt($.ct(), this.At);
    return t3 != null ? new St(t3) : this.It;
  }, t2.prototype.yt = function(t3, e) {
    var n2 = this, r2 = false, i = this.It.field(t3), o = Dt(i) ? Object.assign({}, i.mapValue.fields) : {};
    return e.forEach(function(e2, i2) {
      if (e2 instanceof Map) {
        var u = n2.yt(t3.child(i2), e2);
        u != null && (o[i2] = u, r2 = true);
      } else
        e2 !== null ? (o[i2] = e2, r2 = true) : o.hasOwnProperty(i2) && (delete o[i2], r2 = true);
    }), r2 ? {
      mapValue: {
        fields: o
      }
    } : null;
  }, t2;
}();
function kt(t2) {
  var e = [];
  return nt(t2.fields || {}, function(t3, n2) {
    var r2 = new $([t3]);
    if (Dt(n2)) {
      var i = kt(n2.mapValue).fields;
      if (i.length === 0)
        e.push(r2);
      else
        for (var o = 0, u = i; o < u.length; o++) {
          var s = u[o];
          e.push(r2.child(s));
        }
    } else
      e.push(r2);
  }), new it(e);
}
var Ot = function(t2, e) {
  this.key = t2, this.version = e;
}, Pt = function(t2) {
  function e(e2, n2, r2, i) {
    var o = this;
    return (o = t2.call(this, e2, n2) || this).gt = r2, o.Vt = !!i.Vt, o.hasCommittedMutations = !!i.hasCommittedMutations, o;
  }
  return __extends$1(e, t2), e.prototype.field = function(t3) {
    return this.gt.field(t3);
  }, e.prototype.data = function() {
    return this.gt;
  }, e.prototype.bt = function() {
    return this.gt.proto;
  }, e.prototype.isEqual = function(t3) {
    return t3 instanceof e && this.key.isEqual(t3.key) && this.version.isEqual(t3.version) && this.Vt === t3.Vt && this.hasCommittedMutations === t3.hasCommittedMutations && this.gt.isEqual(t3.gt);
  }, e.prototype.toString = function() {
    return "Document(" + this.key + ", " + this.version + ", " + this.gt.toString() + ", {hasLocalMutations: " + this.Vt + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
  }, Object.defineProperty(e.prototype, "hasPendingWrites", {
    get: function() {
      return this.Vt || this.hasCommittedMutations;
    },
    enumerable: false,
    configurable: true
  }), e;
}(Ot), Vt = function(t2) {
  function e(e2, n2, r2) {
    var i = this;
    return (i = t2.call(this, e2, n2) || this).hasCommittedMutations = !(!r2 || !r2.hasCommittedMutations), i;
  }
  return __extends$1(e, t2), e.prototype.toString = function() {
    return "NoDocument(" + this.key + ", " + this.version + ")";
  }, Object.defineProperty(e.prototype, "hasPendingWrites", {
    get: function() {
      return this.hasCommittedMutations;
    },
    enumerable: false,
    configurable: true
  }), e.prototype.isEqual = function(t3) {
    return t3 instanceof e && t3.hasCommittedMutations === this.hasCommittedMutations && t3.version.isEqual(this.version) && t3.key.isEqual(this.key);
  }, e;
}(Ot), Ct = function(t2) {
  function e() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return __extends$1(e, t2), e.prototype.toString = function() {
    return "UnknownDocument(" + this.key + ", " + this.version + ")";
  }, Object.defineProperty(e.prototype, "hasPendingWrites", {
    get: function() {
      return true;
    },
    enumerable: false,
    configurable: true
  }), e.prototype.isEqual = function(t3) {
    return t3 instanceof e && t3.version.isEqual(this.version) && t3.key.isEqual(this.key);
  }, e;
}(Ot), Lt = function(t2, e, n2, r2, i, o, u) {
  e === void 0 && (e = null), n2 === void 0 && (n2 = []), r2 === void 0 && (r2 = []), i === void 0 && (i = null), o === void 0 && (o = null), u === void 0 && (u = null), this.path = t2, this.collectionGroup = e, this.orderBy = n2, this.filters = r2, this.limit = i, this.startAt = o, this.endAt = u, this.vt = null;
};
function Rt(t2, e, n2, r2, i, o, u) {
  return e === void 0 && (e = null), n2 === void 0 && (n2 = []), r2 === void 0 && (r2 = []), i === void 0 && (i = null), o === void 0 && (o = null), u === void 0 && (u = null), new Lt(t2, e, n2, r2, i, o, u);
}
function Ut(t2) {
  var e = O(t2);
  if (e.vt === null) {
    var n2 = e.path.rt();
    e.collectionGroup !== null && (n2 += "|cg:" + e.collectionGroup), n2 += "|f:", n2 += e.filters.map(function(t3) {
      return function(t4) {
        return t4.field.rt() + t4.op.toString() + bt(t4.value);
      }(t3);
    }).join(","), n2 += "|ob:", n2 += e.orderBy.map(function(t3) {
      return function(t4) {
        return t4.field.rt() + t4.dir;
      }(t3);
    }).join(","), lt(e.limit) || (n2 += "|l:", n2 += e.limit), e.startAt && (n2 += "|lb:", n2 += Wt(e.startAt)), e.endAt && (n2 += "|ub:", n2 += Wt(e.endAt)), e.vt = n2;
  }
  return e.vt;
}
function Mt(t2, e) {
  if (t2.limit !== e.limit)
    return false;
  if (t2.orderBy.length !== e.orderBy.length)
    return false;
  for (var n2 = 0; n2 < t2.orderBy.length; n2++)
    if (!Jt(t2.orderBy[n2], e.orderBy[n2]))
      return false;
  if (t2.filters.length !== e.filters.length)
    return false;
  for (var r2 = 0; r2 < t2.filters.length; r2++)
    if (i = t2.filters[r2], o = e.filters[r2], i.op !== o.op || !i.field.isEqual(o.field) || !yt(i.value, o.value))
      return false;
  var i, o;
  return t2.collectionGroup === e.collectionGroup && !!t2.path.isEqual(e.path) && !!te(t2.startAt, e.startAt) && te(t2.endAt, e.endAt);
}
function qt(t2) {
  return tt.wt(t2.path) && t2.collectionGroup === null && t2.filters.length === 0;
}
var Ft = function(t2) {
  function e(e2, n2, r2) {
    var i = this;
    return (i = t2.call(this) || this).field = e2, i.op = n2, i.value = r2, i;
  }
  return __extends$1(e, t2), e.create = function(t3, n2, r2) {
    return t3.ut() ? n2 === "in" || n2 === "not-in" ? this.St(t3, n2, r2) : new jt(t3, n2, r2) : n2 === "array-contains" ? new Qt(t3, r2) : n2 === "in" ? new Yt(t3, r2) : n2 === "not-in" ? new Ht(t3, r2) : n2 === "array-contains-any" ? new Kt(t3, r2) : new e(t3, n2, r2);
  }, e.St = function(t3, e2, n2) {
    return e2 === "in" ? new zt(t3, n2) : new Gt(t3, n2);
  }, e.prototype.matches = function(t3) {
    var e2 = t3.field(this.field);
    return this.op === "!=" ? e2 !== null && this.Dt(gt(e2, this.value)) : e2 !== null && vt(this.value) === vt(e2) && this.Dt(gt(e2, this.value));
  }, e.prototype.Dt = function(t3) {
    switch (this.op) {
      case "<":
        return t3 < 0;
      case "<=":
        return t3 <= 0;
      case "==":
        return t3 === 0;
      case "!=":
        return t3 !== 0;
      case ">":
        return t3 > 0;
      case ">=":
        return t3 >= 0;
      default:
        return x();
    }
  }, e.prototype.Ct = function() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }, e;
}(function() {
});
var jt = function(t2) {
  function e(e2, n2, r2) {
    var i = this;
    return (i = t2.call(this, e2, n2, r2) || this).key = tt.ft(r2.referenceValue), i;
  }
  return __extends$1(e, t2), e.prototype.matches = function(t3) {
    var e2 = tt.H(t3.key, this.key);
    return this.Dt(e2);
  }, e;
}(Ft), zt = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, e2, "in", n2) || this).keys = Bt("in", n2), r2;
  }
  return __extends$1(e, t2), e.prototype.matches = function(t3) {
    return this.keys.some(function(e2) {
      return e2.isEqual(t3.key);
    });
  }, e;
}(Ft), Gt = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, e2, "not-in", n2) || this).keys = Bt("not-in", n2), r2;
  }
  return __extends$1(e, t2), e.prototype.matches = function(t3) {
    return !this.keys.some(function(e2) {
      return e2.isEqual(t3.key);
    });
  }, e;
}(Ft);
function Bt(t2, e) {
  var n2;
  return (((n2 = e.arrayValue) === null || n2 === void 0 ? void 0 : n2.values) || []).map(function(t3) {
    return tt.ft(t3.referenceValue);
  });
}
var Qt = function(t2) {
  function e(e2, n2) {
    return t2.call(this, e2, "array-contains", n2) || this;
  }
  return __extends$1(e, t2), e.prototype.matches = function(t3) {
    var e2 = t3.field(this.field);
    return Tt(e2) && mt(e2.arrayValue, this.value);
  }, e;
}(Ft), Yt = function(t2) {
  function e(e2, n2) {
    return t2.call(this, e2, "in", n2) || this;
  }
  return __extends$1(e, t2), e.prototype.matches = function(t3) {
    var e2 = t3.field(this.field);
    return e2 !== null && mt(this.value.arrayValue, e2);
  }, e;
}(Ft), Ht = function(t2) {
  function e(e2, n2) {
    return t2.call(this, e2, "not-in", n2) || this;
  }
  return __extends$1(e, t2), e.prototype.matches = function(t3) {
    if (mt(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    }))
      return false;
    var e2 = t3.field(this.field);
    return e2 !== null && !mt(this.value.arrayValue, e2);
  }, e;
}(Ft), Kt = function(t2) {
  function e(e2, n2) {
    return t2.call(this, e2, "array-contains-any", n2) || this;
  }
  return __extends$1(e, t2), e.prototype.matches = function(t3) {
    var e2 = this, n2 = t3.field(this.field);
    return !(!Tt(n2) || !n2.arrayValue.values) && n2.arrayValue.values.some(function(t4) {
      return mt(e2.value.arrayValue, t4);
    });
  }, e;
}(Ft), Xt = function(t2, e) {
  this.position = t2, this.before = e;
};
function Wt(t2) {
  return (t2.before ? "b" : "a") + ":" + t2.position.map(function(t3) {
    return bt(t3);
  }).join(",");
}
var Zt = function(t2, e) {
  e === void 0 && (e = "asc"), this.field = t2, this.dir = e;
};
function Jt(t2, e) {
  return t2.dir === e.dir && t2.field.isEqual(e.field);
}
function $t(t2, e, n2) {
  for (var r2 = 0, i = 0; i < t2.position.length; i++) {
    var o = e[i], u = t2.position[i];
    if (r2 = o.field.ut() ? tt.H(tt.ft(u.referenceValue), n2.key) : gt(u, n2.field(o.field)), o.dir === "desc" && (r2 *= -1), r2 !== 0)
      break;
  }
  return t2.before ? r2 <= 0 : r2 < 0;
}
function te(t2, e) {
  if (t2 === null)
    return e === null;
  if (e === null)
    return false;
  if (t2.before !== e.before || t2.position.length !== e.position.length)
    return false;
  for (var n2 = 0; n2 < t2.position.length; n2++)
    if (!yt(t2.position[n2], e.position[n2]))
      return false;
  return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ee = function(t2, e, n2, r2, i, o, u, s) {
  e === void 0 && (e = null), n2 === void 0 && (n2 = []), r2 === void 0 && (r2 = []), i === void 0 && (i = null), o === void 0 && (o = "F"), u === void 0 && (u = null), s === void 0 && (s = null), this.path = t2, this.collectionGroup = e, this.xt = n2, this.filters = r2, this.limit = i, this.limitType = o, this.startAt = u, this.endAt = s, this.Nt = null, this.$t = null, this.startAt, this.endAt;
};
function ne(t2, e, n2, r2, i, o, u, s) {
  return new ee(t2, e, n2, r2, i, o, u, s);
}
function re(t2) {
  return new ee(t2);
}
function ie(t2) {
  return !lt(t2.limit) && t2.limitType === "F";
}
function oe(t2) {
  return !lt(t2.limit) && t2.limitType === "L";
}
function ue(t2) {
  return t2.xt.length > 0 ? t2.xt[0].field : null;
}
function se(t2) {
  for (var e = 0, n2 = t2.filters; e < n2.length; e++) {
    var r2 = n2[e];
    if (r2.Ct())
      return r2.field;
  }
  return null;
}
function ae(t2) {
  return t2.collectionGroup !== null;
}
function ce(t2) {
  var e = O(t2);
  if (e.Nt === null) {
    e.Nt = [];
    var n2 = se(e), r2 = ue(e);
    if (n2 !== null && r2 === null)
      n2.ut() || e.Nt.push(new Zt(n2)), e.Nt.push(new Zt($.ht(), "asc"));
    else {
      for (var i = false, o = 0, u = e.xt; o < u.length; o++) {
        var s = u[o];
        e.Nt.push(s), s.field.ut() && (i = true);
      }
      if (!i) {
        var a = e.xt.length > 0 ? e.xt[e.xt.length - 1].dir : "asc";
        e.Nt.push(new Zt($.ht(), a));
      }
    }
  }
  return e.Nt;
}
function he(t2) {
  var e = O(t2);
  if (!e.$t)
    if (e.limitType === "F")
      e.$t = Rt(e.path, e.collectionGroup, ce(e), e.filters, e.limit, e.startAt, e.endAt);
    else {
      for (var n2 = [], r2 = 0, i = ce(e); r2 < i.length; r2++) {
        var o = i[r2], u = o.dir === "desc" ? "asc" : "desc";
        n2.push(new Zt(o.field, u));
      }
      var s = e.endAt ? new Xt(e.endAt.position, !e.endAt.before) : null, a = e.startAt ? new Xt(e.startAt.position, !e.startAt.before) : null;
      e.$t = Rt(e.path, e.collectionGroup, n2, e.filters, e.limit, s, a);
    }
  return e.$t;
}
function fe(t2, e, n2) {
  return new ee(t2.path, t2.collectionGroup, t2.xt.slice(), t2.filters.slice(), e, n2, t2.startAt, t2.endAt);
}
function le(t2, e) {
  return Mt(he(t2), he(e)) && t2.limitType === e.limitType;
}
function pe(t2) {
  return Ut(he(t2)) + "|lt:" + t2.limitType;
}
function de(t2) {
  return "Query(target=" + function(t3) {
    var e = t3.path.rt();
    return t3.collectionGroup !== null && (e += " collectionGroup=" + t3.collectionGroup), t3.filters.length > 0 && (e += ", filters: [" + t3.filters.map(function(t4) {
      return (e2 = t4).field.rt() + " " + e2.op + " " + bt(e2.value);
      var e2;
    }).join(", ") + "]"), lt(t3.limit) || (e += ", limit: " + t3.limit), t3.orderBy.length > 0 && (e += ", orderBy: [" + t3.orderBy.map(function(t4) {
      return function(t5) {
        return t5.field.rt() + " (" + t5.dir + ")";
      }(t4);
    }).join(", ") + "]"), t3.startAt && (e += ", startAt: " + Wt(t3.startAt)), t3.endAt && (e += ", endAt: " + Wt(t3.endAt)), "Target(" + e + ")";
  }(he(t2)) + "; limitType=" + t2.limitType + ")";
}
function ve(t2, e) {
  return function(t3, e2) {
    var n2 = e2.key.path;
    return t3.collectionGroup !== null ? e2.key.dt(t3.collectionGroup) && t3.path.nt(n2) : tt.wt(t3.path) ? t3.path.isEqual(n2) : t3.path.st(n2);
  }(t2, e) && function(t3, e2) {
    for (var n2 = 0, r2 = t3.xt; n2 < r2.length; n2++) {
      var i = r2[n2];
      if (!i.field.ut() && e2.field(i.field) === null)
        return false;
    }
    return true;
  }(t2, e) && function(t3, e2) {
    for (var n2 = 0, r2 = t3.filters; n2 < r2.length; n2++) {
      if (!r2[n2].matches(e2))
        return false;
    }
    return true;
  }(t2, e) && function(t3, e2) {
    return !(t3.startAt && !$t(t3.startAt, ce(t3), e2)) && (!t3.endAt || !$t(t3.endAt, ce(t3), e2));
  }(t2, e);
}
function ye(t2) {
  return function(e, n2) {
    for (var r2 = false, i = 0, o = ce(t2); i < o.length; i++) {
      var u = o[i], s = me(u, e, n2);
      if (s !== 0)
        return s;
      r2 = r2 || u.field.ut();
    }
    return 0;
  };
}
function me(t2, e, n2) {
  var r2 = t2.field.ut() ? tt.H(e.key, n2.key) : function(t3, e2, n3) {
    var r3 = e2.field(t3), i = n3.field(t3);
    return r3 !== null && i !== null ? gt(r3, i) : x();
  }(t2.field, e, n2);
  switch (t2.dir) {
    case "asc":
      return r2;
    case "desc":
      return -1 * r2;
    default:
      return x();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ge = function() {
  function t2(t3, e, n2, r2, i, o, u) {
    i === void 0 && (i = X.min()), o === void 0 && (o = X.min()), u === void 0 && (u = U.T), this.target = t3, this.targetId = e, this.Ft = n2, this.sequenceNumber = r2, this.Ot = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = u;
  }
  return t2.prototype.kt = function(e) {
    return new t2(this.target, this.targetId, this.Ft, e, this.Ot, this.lastLimboFreeSnapshotVersion, this.resumeToken);
  }, t2.prototype.Mt = function(e, n2) {
    return new t2(this.target, this.targetId, this.Ft, this.sequenceNumber, n2, this.lastLimboFreeSnapshotVersion, e);
  }, t2.prototype.Lt = function(e) {
    return new t2(this.target, this.targetId, this.Ft, this.sequenceNumber, this.Ot, e, this.resumeToken);
  }, t2;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function we(t2, e) {
  if (t2.Bt) {
    if (isNaN(e))
      return {
        doubleValue: "NaN"
      };
    if (e === 1 / 0)
      return {
        doubleValue: "Infinity"
      };
    if (e === -1 / 0)
      return {
        doubleValue: "-Infinity"
      };
  }
  return {
    doubleValue: pt(e) ? "-0" : e
  };
}
function be(t2) {
  return {
    integerValue: "" + t2
  };
}
function _e(t2, e) {
  return dt(e) ? be(e) : we(t2, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ie = function() {
  this.qt = void 0;
};
function Ee(t2, e, n2) {
  return t2 instanceof Ae ? function(t3, e2) {
    var n3 = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: t3.seconds,
            nanos: t3.nanoseconds
          }
        }
      }
    };
    return e2 && (n3.fields.__previous_value__ = e2), {
      mapValue: n3
    };
  }(n2, e) : t2 instanceof De ? Se(t2, e) : t2 instanceof xe ? ke(t2, e) : function(t3, e2) {
    var n3 = Ne(t3, e2), r2 = Pe(n3) + Pe(t3.Ut);
    return Et(n3) && Et(t3.Ut) ? be(r2) : we(t3.Qt, r2);
  }(t2, e);
}
function Te(t2, e, n2) {
  return t2 instanceof De ? Se(t2, e) : t2 instanceof xe ? ke(t2, e) : n2;
}
function Ne(t2, e) {
  return t2 instanceof Oe ? Et(n2 = e) || function(t3) {
    return !!t3 && "doubleValue" in t3;
  }(n2) ? e : {
    integerValue: 0
  } : null;
  var n2;
}
var Ae = function(t2) {
  function e() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return __extends$1(e, t2), e;
}(Ie), De = function(t2) {
  function e(e2) {
    var n2 = this;
    return (n2 = t2.call(this) || this).elements = e2, n2;
  }
  return __extends$1(e, t2), e;
}(Ie);
function Se(t2, e) {
  for (var n2 = Ve(e), r2 = function(t3) {
    n2.some(function(e2) {
      return yt(e2, t3);
    }) || n2.push(t3);
  }, i = 0, o = t2.elements; i < o.length; i++) {
    r2(o[i]);
  }
  return {
    arrayValue: {
      values: n2
    }
  };
}
var xe = function(t2) {
  function e(e2) {
    var n2 = this;
    return (n2 = t2.call(this) || this).elements = e2, n2;
  }
  return __extends$1(e, t2), e;
}(Ie);
function ke(t2, e) {
  for (var n2 = Ve(e), r2 = function(t3) {
    n2 = n2.filter(function(e2) {
      return !yt(e2, t3);
    });
  }, i = 0, o = t2.elements; i < o.length; i++) {
    r2(o[i]);
  }
  return {
    arrayValue: {
      values: n2
    }
  };
}
var Oe = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this) || this).Qt = e2, r2.Ut = n2, r2;
  }
  return __extends$1(e, t2), e;
}(Ie);
function Pe(t2) {
  return st(t2.integerValue || t2.doubleValue);
}
function Ve(t2) {
  return Tt(t2) && t2.arrayValue.values ? t2.arrayValue.values.slice() : [];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ce = function(t2, e) {
  this.field = t2, this.transform = e;
};
var Le = function(t2, e) {
  this.version = t2, this.transformResults = e;
}, Re = function() {
  function t2(t3, e) {
    this.updateTime = t3, this.exists = e;
  }
  return t2.Kt = function() {
    return new t2();
  }, t2.exists = function(e) {
    return new t2(void 0, e);
  }, t2.updateTime = function(e) {
    return new t2(e);
  }, Object.defineProperty(t2.prototype, "Wt", {
    get: function() {
      return this.updateTime === void 0 && this.exists === void 0;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.isEqual = function(t3) {
    return this.exists === t3.exists && (this.updateTime ? !!t3.updateTime && this.updateTime.isEqual(t3.updateTime) : !t3.updateTime);
  }, t2;
}();
function Ue(t2, e) {
  return t2.updateTime !== void 0 ? e instanceof Pt && e.version.isEqual(t2.updateTime) : t2.exists === void 0 || t2.exists === e instanceof Pt;
}
var Me = function() {
};
function qe(t2, e, n2) {
  return t2 instanceof Be ? function(t3, e2, n3) {
    var r2 = t3.value;
    if (n3.transformResults) {
      var i = He(t3.fieldTransforms, e2, n3.transformResults);
      r2 = Xe(t3.fieldTransforms, r2, i);
    }
    return new Pt(t3.key, n3.version, r2, {
      hasCommittedMutations: true
    });
  }(t2, e, n2) : t2 instanceof Qe ? function(t3, e2, n3) {
    if (!Ue(t3.jt, e2))
      return new Ct(t3.key, n3.version);
    var r2 = Ye(t3, e2, n3.transformResults ? He(t3.fieldTransforms, e2, n3.transformResults) : []);
    return new Pt(t3.key, n3.version, r2, {
      hasCommittedMutations: true
    });
  }(t2, e, n2) : function(t3, e2, n3) {
    return new Vt(t3.key, n3.version, {
      hasCommittedMutations: true
    });
  }(t2, 0, n2);
}
function Fe(t2, e, n2) {
  return t2 instanceof Be ? function(t3, e2, n3) {
    if (!Ue(t3.jt, e2))
      return e2;
    var r2 = t3.value, i = Ke(t3.fieldTransforms, n3, e2);
    r2 = Xe(t3.fieldTransforms, r2, i);
    var o = Ge(e2);
    return new Pt(t3.key, o, r2, {
      Vt: true
    });
  }(t2, e, n2) : t2 instanceof Qe ? function(t3, e2, n3) {
    if (!Ue(t3.jt, e2))
      return e2;
    var r2 = Ge(e2), i = Ye(t3, e2, Ke(t3.fieldTransforms, n3, e2));
    return new Pt(t3.key, r2, i, {
      Vt: true
    });
  }(t2, e, n2) : function(t3, e2) {
    return Ue(t3.jt, e2) ? new Vt(t3.key, X.min()) : e2;
  }(t2, e);
}
function je(t2, e) {
  return function(t3, e2) {
    for (var n2 = null, r2 = 0, i = t3; r2 < i.length; r2++) {
      var o = i[r2], u = e2 instanceof Pt ? e2.field(o.field) : void 0, s = Ne(o.transform, u || null);
      s != null && (n2 = n2 == null ? new xt().set(o.field, s) : n2.set(o.field, s));
    }
    return n2 ? n2.Pt() : null;
  }(t2.fieldTransforms, e);
}
function ze(t2, e) {
  return t2.type === e.type && !!t2.key.isEqual(e.key) && !!t2.jt.isEqual(e.jt) && !!function(t3, e2) {
    return t3 === void 0 && e2 === void 0 || !(!t3 || !e2) && L$1(t3, e2, function(t4, e3) {
      return function(t5, e4) {
        return t5.field.isEqual(e4.field) && function(t6, e5) {
          return t6 instanceof De && e5 instanceof De || t6 instanceof xe && e5 instanceof xe ? L$1(t6.elements, e5.elements, yt) : t6 instanceof Oe && e5 instanceof Oe ? yt(t6.Ut, e5.Ut) : t6 instanceof Ae && e5 instanceof Ae;
        }(t5.transform, e4.transform);
      }(t4, e3);
    });
  }(t2.fieldTransforms, e.fieldTransforms) && (t2.type === 0 ? t2.value.isEqual(e.value) : t2.type !== 1 || t2.data.isEqual(e.data) && t2.Gt.isEqual(e.Gt));
}
function Ge(t2) {
  return t2 instanceof Pt ? t2.version : X.min();
}
var Be = function(t2) {
  function e(e2, n2, r2, i) {
    i === void 0 && (i = []);
    var o = this;
    return (o = t2.call(this) || this).key = e2, o.value = n2, o.jt = r2, o.fieldTransforms = i, o.type = 0, o;
  }
  return __extends$1(e, t2), e;
}(Me), Qe = function(t2) {
  function e(e2, n2, r2, i, o) {
    o === void 0 && (o = []);
    var u = this;
    return (u = t2.call(this) || this).key = e2, u.data = n2, u.Gt = r2, u.jt = i, u.fieldTransforms = o, u.type = 1, u;
  }
  return __extends$1(e, t2), e;
}(Me);
function Ye(t2, e, n2) {
  var r2;
  return r2 = function(t3, e2) {
    var n3 = new xt(e2);
    return t3.Gt.fields.forEach(function(e3) {
      if (!e3.et()) {
        var r3 = t3.data.field(e3);
        r3 !== null ? n3.set(e3, r3) : n3.delete(e3);
      }
    }), n3.Pt();
  }(t2, r2 = e instanceof Pt ? e.data() : St.empty()), r2 = Xe(t2.fieldTransforms, r2, n2);
}
function He(t2, e, n2) {
  var r2 = [];
  k(t2.length === n2.length);
  for (var i = 0; i < n2.length; i++) {
    var o = t2[i], u = o.transform, s = null;
    e instanceof Pt && (s = e.field(o.field)), r2.push(Te(u, s, n2[i]));
  }
  return r2;
}
function Ke(t2, e, n2) {
  for (var r2 = [], i = 0, o = t2; i < o.length; i++) {
    var u = o[i], s = u.transform, a = null;
    n2 instanceof Pt && (a = n2.field(u.field)), r2.push(Ee(s, a, e));
  }
  return r2;
}
function Xe(t2, e, n2) {
  for (var r2 = new xt(e), i = 0; i < t2.length; i++) {
    var o = t2[i];
    r2.set(o.field, n2[i]);
  }
  return r2.Pt();
}
var We, Ze, Je = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this) || this).key = e2, r2.jt = n2, r2.type = 2, r2.fieldTransforms = [], r2;
  }
  return __extends$1(e, t2), e;
}(Me), $e = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this) || this).key = e2, r2.jt = n2, r2.type = 3, r2.fieldTransforms = [], r2;
  }
  return __extends$1(e, t2), e;
}(Me), tn = function(t2) {
  this.count = t2;
};
function en(t2) {
  switch (t2) {
    case M.OK:
      return x();
    case M.CANCELLED:
    case M.UNKNOWN:
    case M.DEADLINE_EXCEEDED:
    case M.RESOURCE_EXHAUSTED:
    case M.INTERNAL:
    case M.UNAVAILABLE:
    case M.UNAUTHENTICATED:
      return false;
    case M.INVALID_ARGUMENT:
    case M.NOT_FOUND:
    case M.ALREADY_EXISTS:
    case M.PERMISSION_DENIED:
    case M.FAILED_PRECONDITION:
    case M.ABORTED:
    case M.OUT_OF_RANGE:
    case M.UNIMPLEMENTED:
    case M.DATA_LOSS:
      return true;
    default:
      return x();
  }
}
function nn(t2) {
  if (t2 === void 0)
    return A("GRPC error has no .code"), M.UNKNOWN;
  switch (t2) {
    case We.OK:
      return M.OK;
    case We.CANCELLED:
      return M.CANCELLED;
    case We.UNKNOWN:
      return M.UNKNOWN;
    case We.DEADLINE_EXCEEDED:
      return M.DEADLINE_EXCEEDED;
    case We.RESOURCE_EXHAUSTED:
      return M.RESOURCE_EXHAUSTED;
    case We.INTERNAL:
      return M.INTERNAL;
    case We.UNAVAILABLE:
      return M.UNAVAILABLE;
    case We.UNAUTHENTICATED:
      return M.UNAUTHENTICATED;
    case We.INVALID_ARGUMENT:
      return M.INVALID_ARGUMENT;
    case We.NOT_FOUND:
      return M.NOT_FOUND;
    case We.ALREADY_EXISTS:
      return M.ALREADY_EXISTS;
    case We.PERMISSION_DENIED:
      return M.PERMISSION_DENIED;
    case We.FAILED_PRECONDITION:
      return M.FAILED_PRECONDITION;
    case We.ABORTED:
      return M.ABORTED;
    case We.OUT_OF_RANGE:
      return M.OUT_OF_RANGE;
    case We.UNIMPLEMENTED:
      return M.UNIMPLEMENTED;
    case We.DATA_LOSS:
      return M.DATA_LOSS;
    default:
      return x();
  }
}
(Ze = We || (We = {}))[Ze.OK = 0] = "OK", Ze[Ze.CANCELLED = 1] = "CANCELLED", Ze[Ze.UNKNOWN = 2] = "UNKNOWN", Ze[Ze.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Ze[Ze.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Ze[Ze.NOT_FOUND = 5] = "NOT_FOUND", Ze[Ze.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Ze[Ze.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Ze[Ze.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Ze[Ze.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Ze[Ze.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Ze[Ze.ABORTED = 10] = "ABORTED", Ze[Ze.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Ze[Ze.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Ze[Ze.INTERNAL = 13] = "INTERNAL", Ze[Ze.UNAVAILABLE = 14] = "UNAVAILABLE", Ze[Ze.DATA_LOSS = 15] = "DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var rn = function() {
  function t2(t3, e) {
    this.H = t3, this.root = e || un.EMPTY;
  }
  return t2.prototype.zt = function(e, n2) {
    return new t2(this.H, this.root.zt(e, n2, this.H).copy(null, null, un.Ht, null, null));
  }, t2.prototype.remove = function(e) {
    return new t2(this.H, this.root.remove(e, this.H).copy(null, null, un.Ht, null, null));
  }, t2.prototype.get = function(t3) {
    for (var e = this.root; !e.et(); ) {
      var n2 = this.H(t3, e.key);
      if (n2 === 0)
        return e.value;
      n2 < 0 ? e = e.left : n2 > 0 && (e = e.right);
    }
    return null;
  }, t2.prototype.indexOf = function(t3) {
    for (var e = 0, n2 = this.root; !n2.et(); ) {
      var r2 = this.H(t3, n2.key);
      if (r2 === 0)
        return e + n2.left.size;
      r2 < 0 ? n2 = n2.left : (e += n2.left.size + 1, n2 = n2.right);
    }
    return -1;
  }, t2.prototype.et = function() {
    return this.root.et();
  }, Object.defineProperty(t2.prototype, "size", {
    get: function() {
      return this.root.size;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.Jt = function() {
    return this.root.Jt();
  }, t2.prototype.Yt = function() {
    return this.root.Yt();
  }, t2.prototype.Xt = function(t3) {
    return this.root.Xt(t3);
  }, t2.prototype.forEach = function(t3) {
    this.Xt(function(e, n2) {
      return t3(e, n2), false;
    });
  }, t2.prototype.toString = function() {
    var t3 = [];
    return this.Xt(function(e, n2) {
      return t3.push(e + ":" + n2), false;
    }), "{" + t3.join(", ") + "}";
  }, t2.prototype.Zt = function(t3) {
    return this.root.Zt(t3);
  }, t2.prototype.te = function() {
    return new on(this.root, null, this.H, false);
  }, t2.prototype.ee = function(t3) {
    return new on(this.root, t3, this.H, false);
  }, t2.prototype.ne = function() {
    return new on(this.root, null, this.H, true);
  }, t2.prototype.se = function(t3) {
    return new on(this.root, t3, this.H, true);
  }, t2;
}(), on = function() {
  function t2(t3, e, n2, r2) {
    this.ie = r2, this.re = [];
    for (var i = 1; !t3.et(); )
      if (i = e ? n2(t3.key, e) : 1, r2 && (i *= -1), i < 0)
        t3 = this.ie ? t3.left : t3.right;
      else {
        if (i === 0) {
          this.re.push(t3);
          break;
        }
        this.re.push(t3), t3 = this.ie ? t3.right : t3.left;
      }
  }
  return t2.prototype.oe = function() {
    var t3 = this.re.pop(), e = {
      key: t3.key,
      value: t3.value
    };
    if (this.ie)
      for (t3 = t3.left; !t3.et(); )
        this.re.push(t3), t3 = t3.right;
    else
      for (t3 = t3.right; !t3.et(); )
        this.re.push(t3), t3 = t3.left;
    return e;
  }, t2.prototype.ce = function() {
    return this.re.length > 0;
  }, t2.prototype.ae = function() {
    if (this.re.length === 0)
      return null;
    var t3 = this.re[this.re.length - 1];
    return {
      key: t3.key,
      value: t3.value
    };
  }, t2;
}(), un = function() {
  function t2(e, n2, r2, i, o) {
    this.key = e, this.value = n2, this.color = r2 != null ? r2 : t2.RED, this.left = i != null ? i : t2.EMPTY, this.right = o != null ? o : t2.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  return t2.prototype.copy = function(e, n2, r2, i, o) {
    return new t2(e != null ? e : this.key, n2 != null ? n2 : this.value, r2 != null ? r2 : this.color, i != null ? i : this.left, o != null ? o : this.right);
  }, t2.prototype.et = function() {
    return false;
  }, t2.prototype.Xt = function(t3) {
    return this.left.Xt(t3) || t3(this.key, this.value) || this.right.Xt(t3);
  }, t2.prototype.Zt = function(t3) {
    return this.right.Zt(t3) || t3(this.key, this.value) || this.left.Zt(t3);
  }, t2.prototype.min = function() {
    return this.left.et() ? this : this.left.min();
  }, t2.prototype.Jt = function() {
    return this.min().key;
  }, t2.prototype.Yt = function() {
    return this.right.et() ? this.key : this.right.Yt();
  }, t2.prototype.zt = function(t3, e, n2) {
    var r2 = this, i = n2(t3, r2.key);
    return (r2 = i < 0 ? r2.copy(null, null, null, r2.left.zt(t3, e, n2), null) : i === 0 ? r2.copy(null, e, null, null, null) : r2.copy(null, null, null, null, r2.right.zt(t3, e, n2))).ue();
  }, t2.prototype.he = function() {
    if (this.left.et())
      return t2.EMPTY;
    var e = this;
    return e.left.le() || e.left.left.le() || (e = e._e()), (e = e.copy(null, null, null, e.left.he(), null)).ue();
  }, t2.prototype.remove = function(e, n2) {
    var r2, i = this;
    if (n2(e, i.key) < 0)
      i.left.et() || i.left.le() || i.left.left.le() || (i = i._e()), i = i.copy(null, null, null, i.left.remove(e, n2), null);
    else {
      if (i.left.le() && (i = i.fe()), i.right.et() || i.right.le() || i.right.left.le() || (i = i.de()), n2(e, i.key) === 0) {
        if (i.right.et())
          return t2.EMPTY;
        r2 = i.right.min(), i = i.copy(r2.key, r2.value, null, null, i.right.he());
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n2));
    }
    return i.ue();
  }, t2.prototype.le = function() {
    return this.color;
  }, t2.prototype.ue = function() {
    var t3 = this;
    return t3.right.le() && !t3.left.le() && (t3 = t3.we()), t3.left.le() && t3.left.left.le() && (t3 = t3.fe()), t3.left.le() && t3.right.le() && (t3 = t3.Ee()), t3;
  }, t2.prototype._e = function() {
    var t3 = this.Ee();
    return t3.right.left.le() && (t3 = (t3 = (t3 = t3.copy(null, null, null, null, t3.right.fe())).we()).Ee()), t3;
  }, t2.prototype.de = function() {
    var t3 = this.Ee();
    return t3.left.left.le() && (t3 = (t3 = t3.fe()).Ee()), t3;
  }, t2.prototype.we = function() {
    var e = this.copy(null, null, t2.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }, t2.prototype.fe = function() {
    var e = this.copy(null, null, t2.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }, t2.prototype.Ee = function() {
    var t3 = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t3, e);
  }, t2.prototype.Te = function() {
    var t3 = this.Ie();
    return Math.pow(2, t3) <= this.size + 1;
  }, t2.prototype.Ie = function() {
    if (this.le() && this.left.le())
      throw x();
    if (this.right.le())
      throw x();
    var t3 = this.left.Ie();
    if (t3 !== this.right.Ie())
      throw x();
    return t3 + (this.le() ? 0 : 1);
  }, t2;
}();
un.EMPTY = null, un.RED = true, un.Ht = false, un.EMPTY = new (function() {
  function t2() {
    this.size = 0;
  }
  return Object.defineProperty(t2.prototype, "key", {
    get: function() {
      throw x();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "value", {
    get: function() {
      throw x();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "color", {
    get: function() {
      throw x();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "left", {
    get: function() {
      throw x();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "right", {
    get: function() {
      throw x();
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.copy = function(t3, e, n2, r2, i) {
    return this;
  }, t2.prototype.zt = function(t3, e, n2) {
    return new un(t3, e);
  }, t2.prototype.remove = function(t3, e) {
    return this;
  }, t2.prototype.et = function() {
    return true;
  }, t2.prototype.Xt = function(t3) {
    return false;
  }, t2.prototype.Zt = function(t3) {
    return false;
  }, t2.prototype.Jt = function() {
    return null;
  }, t2.prototype.Yt = function() {
    return null;
  }, t2.prototype.le = function() {
    return false;
  }, t2.prototype.Te = function() {
    return true;
  }, t2.prototype.Ie = function() {
    return 0;
  }, t2;
}())();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var sn = function() {
  function t2(t3) {
    this.H = t3, this.data = new rn(this.H);
  }
  return t2.prototype.has = function(t3) {
    return this.data.get(t3) !== null;
  }, t2.prototype.first = function() {
    return this.data.Jt();
  }, t2.prototype.last = function() {
    return this.data.Yt();
  }, Object.defineProperty(t2.prototype, "size", {
    get: function() {
      return this.data.size;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.indexOf = function(t3) {
    return this.data.indexOf(t3);
  }, t2.prototype.forEach = function(t3) {
    this.data.Xt(function(e, n2) {
      return t3(e), false;
    });
  }, t2.prototype.me = function(t3, e) {
    for (var n2 = this.data.ee(t3[0]); n2.ce(); ) {
      var r2 = n2.oe();
      if (this.H(r2.key, t3[1]) >= 0)
        return;
      e(r2.key);
    }
  }, t2.prototype.Ae = function(t3, e) {
    var n2;
    for (n2 = e !== void 0 ? this.data.ee(e) : this.data.te(); n2.ce(); )
      if (!t3(n2.oe().key))
        return;
  }, t2.prototype.Re = function(t3) {
    var e = this.data.ee(t3);
    return e.ce() ? e.oe().key : null;
  }, t2.prototype.te = function() {
    return new an(this.data.te());
  }, t2.prototype.ee = function(t3) {
    return new an(this.data.ee(t3));
  }, t2.prototype.add = function(t3) {
    return this.copy(this.data.remove(t3).zt(t3, true));
  }, t2.prototype.delete = function(t3) {
    return this.has(t3) ? this.copy(this.data.remove(t3)) : this;
  }, t2.prototype.et = function() {
    return this.data.et();
  }, t2.prototype.Pe = function(t3) {
    var e = this;
    return e.size < t3.size && (e = t3, t3 = this), t3.forEach(function(t4) {
      e = e.add(t4);
    }), e;
  }, t2.prototype.isEqual = function(e) {
    if (!(e instanceof t2))
      return false;
    if (this.size !== e.size)
      return false;
    for (var n2 = this.data.te(), r2 = e.data.te(); n2.ce(); ) {
      var i = n2.oe().key, o = r2.oe().key;
      if (this.H(i, o) !== 0)
        return false;
    }
    return true;
  }, t2.prototype.it = function() {
    var t3 = [];
    return this.forEach(function(e) {
      t3.push(e);
    }), t3;
  }, t2.prototype.toString = function() {
    var t3 = [];
    return this.forEach(function(e) {
      return t3.push(e);
    }), "SortedSet(" + t3.toString() + ")";
  }, t2.prototype.copy = function(e) {
    var n2 = new t2(this.H);
    return n2.data = e, n2;
  }, t2;
}(), an = function() {
  function t2(t3) {
    this.ye = t3;
  }
  return t2.prototype.oe = function() {
    return this.ye.oe().key;
  }, t2.prototype.ce = function() {
    return this.ye.ce();
  }, t2;
}(), cn = new rn(tt.H);
function hn() {
  return cn;
}
function fn() {
  return hn();
}
var ln = new rn(tt.H);
function pn() {
  return ln;
}
var dn = new rn(tt.H);
function vn() {
  return dn;
}
var yn = new sn(tt.H);
function mn() {
  for (var t2 = [], e = 0; e < arguments.length; e++)
    t2[e] = arguments[e];
  for (var n2 = yn, r2 = 0, i = t2; r2 < i.length; r2++) {
    var o = i[r2];
    n2 = n2.add(o);
  }
  return n2;
}
var gn = new sn(C);
function wn() {
  return gn;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bn = function() {
  function t2(t3) {
    this.H = t3 ? function(e, n2) {
      return t3(e, n2) || tt.H(e.key, n2.key);
    } : function(t4, e) {
      return tt.H(t4.key, e.key);
    }, this.ge = pn(), this.Ve = new rn(this.H);
  }
  return t2.pe = function(e) {
    return new t2(e.H);
  }, t2.prototype.has = function(t3) {
    return this.ge.get(t3) != null;
  }, t2.prototype.get = function(t3) {
    return this.ge.get(t3);
  }, t2.prototype.first = function() {
    return this.Ve.Jt();
  }, t2.prototype.last = function() {
    return this.Ve.Yt();
  }, t2.prototype.et = function() {
    return this.Ve.et();
  }, t2.prototype.indexOf = function(t3) {
    var e = this.ge.get(t3);
    return e ? this.Ve.indexOf(e) : -1;
  }, Object.defineProperty(t2.prototype, "size", {
    get: function() {
      return this.Ve.size;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.forEach = function(t3) {
    this.Ve.Xt(function(e, n2) {
      return t3(e), false;
    });
  }, t2.prototype.add = function(t3) {
    var e = this.delete(t3.key);
    return e.copy(e.ge.zt(t3.key, t3), e.Ve.zt(t3, null));
  }, t2.prototype.delete = function(t3) {
    var e = this.get(t3);
    return e ? this.copy(this.ge.remove(t3), this.Ve.remove(e)) : this;
  }, t2.prototype.isEqual = function(e) {
    if (!(e instanceof t2))
      return false;
    if (this.size !== e.size)
      return false;
    for (var n2 = this.Ve.te(), r2 = e.Ve.te(); n2.ce(); ) {
      var i = n2.oe().key, o = r2.oe().key;
      if (!i.isEqual(o))
        return false;
    }
    return true;
  }, t2.prototype.toString = function() {
    var t3 = [];
    return this.forEach(function(e) {
      t3.push(e.toString());
    }), t3.length === 0 ? "DocumentSet ()" : "DocumentSet (\n  " + t3.join("  \n") + "\n)";
  }, t2.prototype.copy = function(e, n2) {
    var r2 = new t2();
    return r2.H = this.H, r2.ge = e, r2.Ve = n2, r2;
  }, t2;
}(), _n = function() {
  function t2() {
    this.be = new rn(tt.H);
  }
  return t2.prototype.track = function(t3) {
    var e = t3.doc.key, n2 = this.be.get(e);
    n2 ? t3.type !== 0 && n2.type === 3 ? this.be = this.be.zt(e, t3) : t3.type === 3 && n2.type !== 1 ? this.be = this.be.zt(e, {
      type: n2.type,
      doc: t3.doc
    }) : t3.type === 2 && n2.type === 2 ? this.be = this.be.zt(e, {
      type: 2,
      doc: t3.doc
    }) : t3.type === 2 && n2.type === 0 ? this.be = this.be.zt(e, {
      type: 0,
      doc: t3.doc
    }) : t3.type === 1 && n2.type === 0 ? this.be = this.be.remove(e) : t3.type === 1 && n2.type === 2 ? this.be = this.be.zt(e, {
      type: 1,
      doc: n2.doc
    }) : t3.type === 0 && n2.type === 1 ? this.be = this.be.zt(e, {
      type: 2,
      doc: t3.doc
    }) : x() : this.be = this.be.zt(e, t3);
  }, t2.prototype.ve = function() {
    var t3 = [];
    return this.be.Xt(function(e, n2) {
      t3.push(n2);
    }), t3;
  }, t2;
}(), In = function() {
  function t2(t3, e, n2, r2, i, o, u, s) {
    this.query = t3, this.docs = e, this.Se = n2, this.docChanges = r2, this.De = i, this.fromCache = o, this.Ce = u, this.xe = s;
  }
  return t2.Ne = function(e, n2, r2, i) {
    var o = [];
    return n2.forEach(function(t3) {
      o.push({
        type: 0,
        doc: t3
      });
    }), new t2(e, n2, bn.pe(n2), o, r2, i, true, false);
  }, Object.defineProperty(t2.prototype, "hasPendingWrites", {
    get: function() {
      return !this.De.et();
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.isEqual = function(t3) {
    if (!(this.fromCache === t3.fromCache && this.Ce === t3.Ce && this.De.isEqual(t3.De) && le(this.query, t3.query) && this.docs.isEqual(t3.docs) && this.Se.isEqual(t3.Se)))
      return false;
    var e = this.docChanges, n2 = t3.docChanges;
    if (e.length !== n2.length)
      return false;
    for (var r2 = 0; r2 < e.length; r2++)
      if (e[r2].type !== n2[r2].type || !e[r2].doc.isEqual(n2[r2].doc))
        return false;
    return true;
  }, t2;
}(), En = function() {
  function t2(t3, e, n2, r2, i) {
    this.Ot = t3, this.$e = e, this.Fe = n2, this.Oe = r2, this.ke = i;
  }
  return t2.Me = function(e, n2) {
    var r2 = new Map();
    return r2.set(e, Tn.Le(e, n2)), new t2(X.min(), r2, wn(), hn(), mn());
  }, t2;
}(), Tn = function() {
  function t2(t3, e, n2, r2, i) {
    this.resumeToken = t3, this.Be = e, this.qe = n2, this.Ue = r2, this.Qe = i;
  }
  return t2.Le = function(e, n2) {
    return new t2(U.T, n2, mn(), mn(), mn());
  }, t2;
}(), Nn = function(t2, e, n2, r2) {
  this.Ke = t2, this.removedTargetIds = e, this.key = n2, this.We = r2;
}, An = function(t2, e) {
  this.targetId = t2, this.je = e;
}, Dn = function(t2, e, n2, r2) {
  n2 === void 0 && (n2 = U.T), r2 === void 0 && (r2 = null), this.state = t2, this.targetIds = e, this.resumeToken = n2, this.cause = r2;
}, Sn = function() {
  function t2() {
    this.Ge = 0, this.ze = On(), this.He = U.T, this.Je = false, this.Ye = true;
  }
  return Object.defineProperty(t2.prototype, "Be", {
    get: function() {
      return this.Je;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "resumeToken", {
    get: function() {
      return this.He;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "Xe", {
    get: function() {
      return this.Ge !== 0;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "Ze", {
    get: function() {
      return this.Ye;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.tn = function(t3) {
    t3.l() > 0 && (this.Ye = true, this.He = t3);
  }, t2.prototype.en = function() {
    var t3 = mn(), e = mn(), n2 = mn();
    return this.ze.forEach(function(r2, i) {
      switch (i) {
        case 0:
          t3 = t3.add(r2);
          break;
        case 2:
          e = e.add(r2);
          break;
        case 1:
          n2 = n2.add(r2);
          break;
        default:
          x();
      }
    }), new Tn(this.He, this.Je, t3, e, n2);
  }, t2.prototype.nn = function() {
    this.Ye = false, this.ze = On();
  }, t2.prototype.sn = function(t3, e) {
    this.Ye = true, this.ze = this.ze.zt(t3, e);
  }, t2.prototype.rn = function(t3) {
    this.Ye = true, this.ze = this.ze.remove(t3);
  }, t2.prototype.on = function() {
    this.Ge += 1;
  }, t2.prototype.cn = function() {
    this.Ge -= 1;
  }, t2.prototype.an = function() {
    this.Ye = true, this.Je = true;
  }, t2;
}(), xn = function() {
  function t2(t3) {
    this.un = t3, this.hn = new Map(), this.ln = hn(), this._n = kn(), this.fn = new sn(C);
  }
  return t2.prototype.dn = function(t3) {
    for (var e = 0, n2 = t3.Ke; e < n2.length; e++) {
      var r2 = n2[e];
      t3.We instanceof Pt ? this.wn(r2, t3.We) : t3.We instanceof Vt && this.En(r2, t3.key, t3.We);
    }
    for (var i = 0, o = t3.removedTargetIds; i < o.length; i++) {
      r2 = o[i];
      this.En(r2, t3.key, t3.We);
    }
  }, t2.prototype.Tn = function(t3) {
    var e = this;
    this.In(t3, function(n2) {
      var r2 = e.mn(n2);
      switch (t3.state) {
        case 0:
          e.An(n2) && r2.tn(t3.resumeToken);
          break;
        case 1:
          r2.cn(), r2.Xe || r2.nn(), r2.tn(t3.resumeToken);
          break;
        case 2:
          r2.cn(), r2.Xe || e.removeTarget(n2);
          break;
        case 3:
          e.An(n2) && (r2.an(), r2.tn(t3.resumeToken));
          break;
        case 4:
          e.An(n2) && (e.Rn(n2), r2.tn(t3.resumeToken));
          break;
        default:
          x();
      }
    });
  }, t2.prototype.In = function(t3, e) {
    var n2 = this;
    t3.targetIds.length > 0 ? t3.targetIds.forEach(e) : this.hn.forEach(function(t4, r2) {
      n2.An(r2) && e(r2);
    });
  }, t2.prototype.Pn = function(t3) {
    var e = t3.targetId, n2 = t3.je.count, r2 = this.yn(e);
    if (r2) {
      var i = r2.target;
      if (qt(i))
        if (n2 === 0) {
          var o = new tt(i.path);
          this.En(e, o, new Vt(o, X.min()));
        } else
          k(n2 === 1);
      else
        this.gn(e) !== n2 && (this.Rn(e), this.fn = this.fn.add(e));
    }
  }, t2.prototype.Vn = function(t3) {
    var e = this, n2 = new Map();
    this.hn.forEach(function(r3, i2) {
      var o = e.yn(i2);
      if (o) {
        if (r3.Be && qt(o.target)) {
          var u = new tt(o.target.path);
          e.ln.get(u) !== null || e.pn(i2, u) || e.En(i2, u, new Vt(u, t3));
        }
        r3.Ze && (n2.set(i2, r3.en()), r3.nn());
      }
    });
    var r2 = mn();
    this._n.forEach(function(t4, n3) {
      var i2 = true;
      n3.Ae(function(t5) {
        var n4 = e.yn(t5);
        return !n4 || n4.Ft === 2 || (i2 = false, false);
      }), i2 && (r2 = r2.add(t4));
    });
    var i = new En(t3, n2, this.fn, this.ln, r2);
    return this.ln = hn(), this._n = kn(), this.fn = new sn(C), i;
  }, t2.prototype.wn = function(t3, e) {
    if (this.An(t3)) {
      var n2 = this.pn(t3, e.key) ? 2 : 0;
      this.mn(t3).sn(e.key, n2), this.ln = this.ln.zt(e.key, e), this._n = this._n.zt(e.key, this.bn(e.key).add(t3));
    }
  }, t2.prototype.En = function(t3, e, n2) {
    if (this.An(t3)) {
      var r2 = this.mn(t3);
      this.pn(t3, e) ? r2.sn(e, 1) : r2.rn(e), this._n = this._n.zt(e, this.bn(e).delete(t3)), n2 && (this.ln = this.ln.zt(e, n2));
    }
  }, t2.prototype.removeTarget = function(t3) {
    this.hn.delete(t3);
  }, t2.prototype.gn = function(t3) {
    var e = this.mn(t3).en();
    return this.un.vn(t3).size + e.qe.size - e.Qe.size;
  }, t2.prototype.on = function(t3) {
    this.mn(t3).on();
  }, t2.prototype.mn = function(t3) {
    var e = this.hn.get(t3);
    return e || (e = new Sn(), this.hn.set(t3, e)), e;
  }, t2.prototype.bn = function(t3) {
    var e = this._n.get(t3);
    return e || (e = new sn(C), this._n = this._n.zt(t3, e)), e;
  }, t2.prototype.An = function(t3) {
    var e = this.yn(t3) !== null;
    return e || N("WatchChangeAggregator", "Detected inactive target", t3), e;
  }, t2.prototype.yn = function(t3) {
    var e = this.hn.get(t3);
    return e && e.Xe ? null : this.un.Sn(t3);
  }, t2.prototype.Rn = function(t3) {
    var e = this;
    this.hn.set(t3, new Sn()), this.un.vn(t3).forEach(function(n2) {
      e.En(t3, n2, null);
    });
  }, t2.prototype.pn = function(t3, e) {
    return this.un.vn(t3).has(e);
  }, t2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kn() {
  return new rn(tt.H);
}
function On() {
  return new rn(tt.H);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Pn = {
  asc: "ASCENDING",
  desc: "DESCENDING"
}, Vn = {
  "<": "LESS_THAN",
  "<=": "LESS_THAN_OR_EQUAL",
  ">": "GREATER_THAN",
  ">=": "GREATER_THAN_OR_EQUAL",
  "==": "EQUAL",
  "!=": "NOT_EQUAL",
  "array-contains": "ARRAY_CONTAINS",
  in: "IN",
  "not-in": "NOT_IN",
  "array-contains-any": "ARRAY_CONTAINS_ANY"
}, Cn = function(t2, e) {
  this.t = t2, this.Bt = e;
};
function Ln(t2, e) {
  return t2.Bt ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
function Rn(t2, e) {
  return t2.Bt ? e.toBase64() : e.toUint8Array();
}
function Un(t2, e) {
  return Ln(t2, e.j());
}
function Mn(t2) {
  return k(!!t2), X.K(function(t3) {
    var e = ut(t3);
    return new K(e.seconds, e.nanos);
  }(t2));
}
function qn(t2, e) {
  return function(t3) {
    return new Z(["projects", t3.projectId, "databases", t3.database]);
  }(t2).child("documents").child(e).rt();
}
function Fn(t2) {
  var e = Z.ot(t2);
  return k(hr(e)), e;
}
function jn(t2, e) {
  return qn(t2.t, e.path);
}
function zn(t2, e) {
  var n2 = Fn(e);
  if (n2.get(1) !== t2.t.projectId)
    throw new q(M.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n2.get(1) + " vs " + t2.t.projectId);
  if (n2.get(3) !== t2.t.database)
    throw new q(M.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n2.get(3) + " vs " + t2.t.database);
  return new tt(Yn(n2));
}
function Gn(t2, e) {
  return qn(t2.t, e);
}
function Bn(t2) {
  var e = Fn(t2);
  return e.length === 4 ? Z.ct() : Yn(e);
}
function Qn(t2) {
  return new Z(["projects", t2.t.projectId, "databases", t2.t.database]).rt();
}
function Yn(t2) {
  return k(t2.length > 4 && t2.get(4) === "documents"), t2.Y(5);
}
function Hn(t2, e, n2) {
  return {
    name: jn(t2, e),
    fields: n2.proto.mapValue.fields
  };
}
function Kn(t2, e, n2) {
  var r2 = zn(t2, e.name), i = Mn(e.updateTime), o = new St({
    mapValue: {
      fields: e.fields
    }
  });
  return new Pt(r2, i, o, {
    hasCommittedMutations: !!n2
  });
}
function Xn(t2, e) {
  var n2;
  if (e instanceof Be)
    n2 = {
      update: Hn(t2, e.key, e.value)
    };
  else if (e instanceof Je)
    n2 = {
      delete: jn(t2, e.key)
    };
  else if (e instanceof Qe)
    n2 = {
      update: Hn(t2, e.key, e.data),
      updateMask: cr(e.Gt)
    };
  else {
    if (!(e instanceof $e))
      return x();
    n2 = {
      verify: jn(t2, e.key)
    };
  }
  return e.fieldTransforms.length > 0 && (n2.updateTransforms = e.fieldTransforms.map(function(t3) {
    return function(t4, e2) {
      var n3 = e2.transform;
      if (n3 instanceof Ae)
        return {
          fieldPath: e2.field.rt(),
          setToServerValue: "REQUEST_TIME"
        };
      if (n3 instanceof De)
        return {
          fieldPath: e2.field.rt(),
          appendMissingElements: {
            values: n3.elements
          }
        };
      if (n3 instanceof xe)
        return {
          fieldPath: e2.field.rt(),
          removeAllFromArray: {
            values: n3.elements
          }
        };
      if (n3 instanceof Oe)
        return {
          fieldPath: e2.field.rt(),
          increment: n3.Ut
        };
      throw x();
    }(0, t3);
  })), e.jt.Wt || (n2.currentDocument = function(t3, e2) {
    return e2.updateTime !== void 0 ? {
      updateTime: Un(t3, e2.updateTime)
    } : e2.exists !== void 0 ? {
      exists: e2.exists
    } : x();
  }(t2, e.jt)), n2;
}
function Wn(t2, e) {
  var n2 = e.currentDocument ? function(t3) {
    return t3.updateTime !== void 0 ? Re.updateTime(Mn(t3.updateTime)) : t3.exists !== void 0 ? Re.exists(t3.exists) : Re.Kt();
  }(e.currentDocument) : Re.Kt(), r2 = e.updateTransforms ? e.updateTransforms.map(function(e2) {
    return function(t3, e3) {
      var n3 = null;
      if ("setToServerValue" in e3)
        k(e3.setToServerValue === "REQUEST_TIME"), n3 = new Ae();
      else if ("appendMissingElements" in e3) {
        var r3 = e3.appendMissingElements.values || [];
        n3 = new De(r3);
      } else if ("removeAllFromArray" in e3) {
        var i2 = e3.removeAllFromArray.values || [];
        n3 = new xe(i2);
      } else
        "increment" in e3 ? n3 = new Oe(t3, e3.increment) : x();
      var o2 = $.lt(e3.fieldPath);
      return new Ce(o2, n3);
    }(t2, e2);
  }) : [];
  if (e.update) {
    e.update.name;
    var i = zn(t2, e.update.name), o = new St({
      mapValue: {
        fields: e.update.fields
      }
    });
    if (e.updateMask) {
      var u = function(t3) {
        var e2 = t3.fieldPaths || [];
        return new it(e2.map(function(t4) {
          return $.lt(t4);
        }));
      }(e.updateMask);
      return new Qe(i, o, u, n2, r2);
    }
    return new Be(i, o, n2, r2);
  }
  if (e.delete) {
    var s = zn(t2, e.delete);
    return new Je(s, n2);
  }
  if (e.verify) {
    var a = zn(t2, e.verify);
    return new $e(a, n2);
  }
  return x();
}
function Zn(t2, e) {
  return {
    documents: [Gn(t2, e.path)]
  };
}
function Jn(t2, e) {
  var n2 = {
    structuredQuery: {}
  }, r2 = e.path;
  e.collectionGroup !== null ? (n2.parent = Gn(t2, r2), n2.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: true
  }]) : (n2.parent = Gn(t2, r2.X()), n2.structuredQuery.from = [{
    collectionId: r2.tt()
  }]);
  var i = function(t3) {
    if (t3.length !== 0) {
      var e2 = t3.map(function(t4) {
        return function(t5) {
          if (t5.op === "==") {
            if (At(t5.value))
              return {
                unaryFilter: {
                  field: or(t5.field),
                  op: "IS_NAN"
                }
              };
            if (Nt(t5.value))
              return {
                unaryFilter: {
                  field: or(t5.field),
                  op: "IS_NULL"
                }
              };
          } else if (t5.op === "!=") {
            if (At(t5.value))
              return {
                unaryFilter: {
                  field: or(t5.field),
                  op: "IS_NOT_NAN"
                }
              };
            if (Nt(t5.value))
              return {
                unaryFilter: {
                  field: or(t5.field),
                  op: "IS_NOT_NULL"
                }
              };
          }
          return {
            fieldFilter: {
              field: or(t5.field),
              op: ir(t5.op),
              value: t5.value
            }
          };
        }(t4);
      });
      return e2.length === 1 ? e2[0] : {
        compositeFilter: {
          op: "AND",
          filters: e2
        }
      };
    }
  }(e.filters);
  i && (n2.structuredQuery.where = i);
  var o = function(t3) {
    if (t3.length !== 0)
      return t3.map(function(t4) {
        return function(t5) {
          return {
            field: or(t5.field),
            direction: rr(t5.dir)
          };
        }(t4);
      });
  }(e.orderBy);
  o && (n2.structuredQuery.orderBy = o);
  var u = function(t3, e2) {
    return t3.Bt || lt(e2) ? e2 : {
      value: e2
    };
  }(t2, e.limit);
  return u !== null && (n2.structuredQuery.limit = u), e.startAt && (n2.structuredQuery.startAt = er(e.startAt)), e.endAt && (n2.structuredQuery.endAt = er(e.endAt)), n2;
}
function $n(t2) {
  var e = Bn(t2.parent), n2 = t2.structuredQuery, r2 = n2.from ? n2.from.length : 0, i = null;
  if (r2 > 0) {
    k(r2 === 1);
    var o = n2.from[0];
    o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
  }
  var u = [];
  n2.where && (u = tr(n2.where));
  var s = [];
  n2.orderBy && (s = n2.orderBy.map(function(t3) {
    return function(t4) {
      return new Zt(ur(t4.field), function(t5) {
        switch (t5) {
          case "ASCENDING":
            return "asc";
          case "DESCENDING":
            return "desc";
          default:
            return;
        }
      }(t4.direction));
    }(t3);
  }));
  var a = null;
  n2.limit && (a = function(t3) {
    var e2;
    return lt(e2 = typeof t3 == "object" ? t3.value : t3) ? null : e2;
  }(n2.limit));
  var c = null;
  n2.startAt && (c = nr(n2.startAt));
  var h2 = null;
  return n2.endAt && (h2 = nr(n2.endAt)), ne(e, i, s, u, a, "F", c, h2);
}
function tr(t2) {
  return t2 ? t2.unaryFilter !== void 0 ? [ar(t2)] : t2.fieldFilter !== void 0 ? [sr(t2)] : t2.compositeFilter !== void 0 ? t2.compositeFilter.filters.map(function(t3) {
    return tr(t3);
  }).reduce(function(t3, e) {
    return t3.concat(e);
  }) : x() : [];
}
function er(t2) {
  return {
    before: t2.before,
    values: t2.position
  };
}
function nr(t2) {
  var e = !!t2.before, n2 = t2.values || [];
  return new Xt(n2, e);
}
function rr(t2) {
  return Pn[t2];
}
function ir(t2) {
  return Vn[t2];
}
function or(t2) {
  return {
    fieldPath: t2.rt()
  };
}
function ur(t2) {
  return $.lt(t2.fieldPath);
}
function sr(t2) {
  return Ft.create(ur(t2.fieldFilter.field), function(t3) {
    switch (t3) {
      case "EQUAL":
        return "==";
      case "NOT_EQUAL":
        return "!=";
      case "GREATER_THAN":
        return ">";
      case "GREATER_THAN_OR_EQUAL":
        return ">=";
      case "LESS_THAN":
        return "<";
      case "LESS_THAN_OR_EQUAL":
        return "<=";
      case "ARRAY_CONTAINS":
        return "array-contains";
      case "IN":
        return "in";
      case "NOT_IN":
        return "not-in";
      case "ARRAY_CONTAINS_ANY":
        return "array-contains-any";
      case "OPERATOR_UNSPECIFIED":
      default:
        return x();
    }
  }(t2.fieldFilter.op), t2.fieldFilter.value);
}
function ar(t2) {
  switch (t2.unaryFilter.op) {
    case "IS_NAN":
      var e = ur(t2.unaryFilter.field);
      return Ft.create(e, "==", {
        doubleValue: NaN
      });
    case "IS_NULL":
      var n2 = ur(t2.unaryFilter.field);
      return Ft.create(n2, "==", {
        nullValue: "NULL_VALUE"
      });
    case "IS_NOT_NAN":
      var r2 = ur(t2.unaryFilter.field);
      return Ft.create(r2, "!=", {
        doubleValue: NaN
      });
    case "IS_NOT_NULL":
      var i = ur(t2.unaryFilter.field);
      return Ft.create(i, "!=", {
        nullValue: "NULL_VALUE"
      });
    case "OPERATOR_UNSPECIFIED":
    default:
      return x();
  }
}
function cr(t2) {
  var e = [];
  return t2.fields.forEach(function(t3) {
    return e.push(t3.rt());
  }), {
    fieldPaths: e
  };
}
function hr(t2) {
  return t2.length >= 4 && t2.get(0) === "projects" && t2.get(2) === "databases";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fr = function() {
  var t2 = this;
  this.promise = new Promise(function(e, n2) {
    t2.resolve = e, t2.reject = n2;
  });
}, lr = function() {
  function t2(t3) {
    var e = this;
    this.Dn = null, this.Cn = null, this.result = void 0, this.error = void 0, this.xn = false, this.Nn = false, t3(function(t4) {
      e.xn = true, e.result = t4, e.Dn && e.Dn(t4);
    }, function(t4) {
      e.xn = true, e.error = t4, e.Cn && e.Cn(t4);
    });
  }
  return t2.prototype.catch = function(t3) {
    return this.next(void 0, t3);
  }, t2.prototype.next = function(e, n2) {
    var r2 = this;
    return this.Nn && x(), this.Nn = true, this.xn ? this.error ? this.$n(n2, this.error) : this.Fn(e, this.result) : new t2(function(t3, i) {
      r2.Dn = function(n3) {
        r2.Fn(e, n3).next(t3, i);
      }, r2.Cn = function(e2) {
        r2.$n(n2, e2).next(t3, i);
      };
    });
  }, t2.prototype.On = function() {
    var t3 = this;
    return new Promise(function(e, n2) {
      t3.next(e, n2);
    });
  }, t2.prototype.kn = function(e) {
    try {
      var n2 = e();
      return n2 instanceof t2 ? n2 : t2.resolve(n2);
    } catch (e2) {
      return t2.reject(e2);
    }
  }, t2.prototype.Fn = function(e, n2) {
    return e ? this.kn(function() {
      return e(n2);
    }) : t2.resolve(n2);
  }, t2.prototype.$n = function(e, n2) {
    return e ? this.kn(function() {
      return e(n2);
    }) : t2.reject(n2);
  }, t2.resolve = function(e) {
    return new t2(function(t3, n2) {
      t3(e);
    });
  }, t2.reject = function(e) {
    return new t2(function(t3, n2) {
      n2(e);
    });
  }, t2.Mn = function(e) {
    return new t2(function(t3, n2) {
      var r2 = 0, i = 0, o = false;
      e.forEach(function(e2) {
        ++r2, e2.next(function() {
          ++i, o && i === r2 && t3();
        }, function(t4) {
          return n2(t4);
        });
      }), o = true, i === r2 && t3();
    });
  }, t2.Ln = function(e) {
    for (var n2 = t2.resolve(false), r2 = function(e2) {
      n2 = n2.next(function(n3) {
        return n3 ? t2.resolve(n3) : e2();
      });
    }, i = 0, o = e; i < o.length; i++) {
      r2(o[i]);
    }
    return n2;
  }, t2.forEach = function(t3, e) {
    var n2 = this, r2 = [];
    return t3.forEach(function(t4, i) {
      r2.push(e.call(n2, t4, i));
    }), this.Mn(r2);
  }, t2;
}(), pr = function() {
  function t2(t3, e) {
    var n2 = this;
    this.action = t3, this.transaction = e, this.aborted = false, this.Bn = new fr(), this.transaction.oncomplete = function() {
      n2.Bn.resolve();
    }, this.transaction.onabort = function() {
      e.error ? n2.Bn.reject(new yr(t3, e.error)) : n2.Bn.resolve();
    }, this.transaction.onerror = function(e2) {
      var r2 = _r(e2.target.error);
      n2.Bn.reject(new yr(t3, r2));
    };
  }
  return t2.open = function(e, n2, r2, i) {
    try {
      return new t2(n2, e.transaction(i, r2));
    } catch (e2) {
      throw new yr(n2, e2);
    }
  }, Object.defineProperty(t2.prototype, "qn", {
    get: function() {
      return this.Bn.promise;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.abort = function(t3) {
    t3 && this.Bn.reject(t3), this.aborted || (N("SimpleDb", "Aborting transaction:", t3 ? t3.message : "Client-initiated abort"), this.aborted = true, this.transaction.abort());
  }, t2.prototype.store = function(t3) {
    var e = this.transaction.objectStore(t3);
    return new gr(e);
  }, t2;
}(), dr = function() {
  function t2(e, r2, i) {
    this.name = e, this.version = r2, this.Un = i, t2.Qn(getUA()) === 12.2 && A("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
  }
  return t2.delete = function(t3) {
    return N("SimpleDb", "Removing database:", t3), wr(window.indexedDB.deleteDatabase(t3)).On();
  }, t2.Kn = function() {
    if (typeof indexedDB == "undefined")
      return false;
    if (t2.Wn())
      return true;
    var e = getUA(), r2 = t2.Qn(e), i = 0 < r2 && r2 < 10, o = t2.jn(e), u = 0 < o && o < 4.5;
    return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || i || u);
  }, t2.Wn = function() {
    var t3;
    return typeof process != "undefined" && ((t3 = process.env) === null || t3 === void 0 ? void 0 : t3.Gn) === "YES";
  }, t2.zn = function(t3, e) {
    return t3.store(e);
  }, t2.Qn = function(t3) {
    var e = t3.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n2 = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(n2);
  }, t2.jn = function(t3) {
    var e = t3.match(/Android ([\d.]+)/i), n2 = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(n2);
  }, t2.prototype.Hn = function(t3) {
    return __awaiter(this, void 0, void 0, function() {
      var e, n2 = this;
      return __generator(this, function(r2) {
        switch (r2.label) {
          case 0:
            return this.db ? [3, 2] : (N("SimpleDb", "Opening database:", this.name), e = this, [4, new Promise(function(e2, r3) {
              var i = indexedDB.open(n2.name, n2.version);
              i.onsuccess = function(t4) {
                var n3 = t4.target.result;
                e2(n3);
              }, i.onblocked = function() {
                r3(new yr(t3, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
              }, i.onerror = function(e3) {
                var n3 = e3.target.error;
                n3.name === "VersionError" ? r3(new q(M.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : r3(new yr(t3, n3));
              }, i.onupgradeneeded = function(t4) {
                N("SimpleDb", 'Database "' + n2.name + '" requires upgrade from version:', t4.oldVersion);
                var e3 = t4.target.result;
                n2.Un.Jn(e3, i.transaction, t4.oldVersion, n2.version).next(function() {
                  N("SimpleDb", "Database upgrade to version " + n2.version + " complete");
                });
              };
            })]);
          case 1:
            e.db = r2.sent(), r2.label = 2;
          case 2:
            return [2, (this.Yn && (this.db.onversionchange = function(t4) {
              return n2.Yn(t4);
            }), this.db)];
        }
      });
    });
  }, t2.prototype.Xn = function(t3) {
    this.Yn = t3, this.db && (this.db.onversionchange = function(e) {
      return t3(e);
    });
  }, t2.prototype.runTransaction = function(t3, e, n2, r2) {
    return __awaiter(this, void 0, void 0, function() {
      var i, o, u, s, a;
      return __generator(this, function(c) {
        switch (c.label) {
          case 0:
            i = e === "readonly", o = 0, u = function() {
              var e2, u2, a2, c2, h2;
              return __generator(this, function(f) {
                switch (f.label) {
                  case 0:
                    ++o, f.label = 1;
                  case 1:
                    return f.trys.push([1, 4, , 5]), [4, s.Hn(t3)];
                  case 2:
                    return s.db = f.sent(), e2 = pr.open(s.db, t3, i ? "readonly" : "readwrite", n2), u2 = r2(e2).catch(function(t4) {
                      return e2.abort(t4), lr.reject(t4);
                    }).On(), a2 = {}, u2.catch(function() {
                    }), [4, e2.qn];
                  case 3:
                    return [2, (a2.value = (f.sent(), u2), a2)];
                  case 4:
                    return c2 = f.sent(), h2 = c2.name !== "FirebaseError" && o < 3, N("SimpleDb", "Transaction failed with error:", c2.message, "Retrying:", h2), s.close(), h2 ? [3, 5] : [2, {
                      value: Promise.reject(c2)
                    }];
                  case 5:
                    return [2];
                }
              });
            }, s = this, c.label = 1;
          case 1:
            return [5, u()];
          case 2:
            if (typeof (a = c.sent()) == "object")
              return [2, a.value];
            c.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, t2.prototype.close = function() {
    this.db && this.db.close(), this.db = void 0;
  }, t2;
}(), vr = function() {
  function t2(t3) {
    this.Zn = t3, this.ts = false, this.es = null;
  }
  return Object.defineProperty(t2.prototype, "xn", {
    get: function() {
      return this.ts;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "ns", {
    get: function() {
      return this.es;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "cursor", {
    set: function(t3) {
      this.Zn = t3;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.done = function() {
    this.ts = true;
  }, t2.prototype.ss = function(t3) {
    this.es = t3;
  }, t2.prototype.delete = function() {
    return wr(this.Zn.delete());
  }, t2;
}(), yr = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, M.UNAVAILABLE, "IndexedDB transaction '" + e2 + "' failed: " + n2) || this).name = "IndexedDbTransactionError", r2;
  }
  return __extends$1(e, t2), e;
}(q);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mr(t2) {
  return t2.name === "IndexedDbTransactionError";
}
var gr = function() {
  function t2(t3) {
    this.store = t3;
  }
  return t2.prototype.put = function(t3, e) {
    var n2;
    return e !== void 0 ? (N("SimpleDb", "PUT", this.store.name, t3, e), n2 = this.store.put(e, t3)) : (N("SimpleDb", "PUT", this.store.name, "<auto-key>", t3), n2 = this.store.put(t3)), wr(n2);
  }, t2.prototype.add = function(t3) {
    return N("SimpleDb", "ADD", this.store.name, t3, t3), wr(this.store.add(t3));
  }, t2.prototype.get = function(t3) {
    var e = this;
    return wr(this.store.get(t3)).next(function(n2) {
      return n2 === void 0 && (n2 = null), N("SimpleDb", "GET", e.store.name, t3, n2), n2;
    });
  }, t2.prototype.delete = function(t3) {
    return N("SimpleDb", "DELETE", this.store.name, t3), wr(this.store.delete(t3));
  }, t2.prototype.count = function() {
    return N("SimpleDb", "COUNT", this.store.name), wr(this.store.count());
  }, t2.prototype.rs = function(t3, e) {
    var n2 = this.cursor(this.options(t3, e)), r2 = [];
    return this.os(n2, function(t4, e2) {
      r2.push(e2);
    }).next(function() {
      return r2;
    });
  }, t2.prototype.cs = function(t3, e) {
    N("SimpleDb", "DELETE ALL", this.store.name);
    var n2 = this.options(t3, e);
    n2.us = false;
    var r2 = this.cursor(n2);
    return this.os(r2, function(t4, e2, n3) {
      return n3.delete();
    });
  }, t2.prototype.hs = function(t3, e) {
    var n2;
    e ? n2 = t3 : (n2 = {}, e = t3);
    var r2 = this.cursor(n2);
    return this.os(r2, e);
  }, t2.prototype.ls = function(t3) {
    var e = this.cursor({});
    return new lr(function(n2, r2) {
      e.onerror = function(t4) {
        var e2 = _r(t4.target.error);
        r2(e2);
      }, e.onsuccess = function(e2) {
        var r3 = e2.target.result;
        r3 ? t3(r3.primaryKey, r3.value).next(function(t4) {
          t4 ? r3.continue() : n2();
        }) : n2();
      };
    });
  }, t2.prototype.os = function(t3, e) {
    var n2 = [];
    return new lr(function(r2, i) {
      t3.onerror = function(t4) {
        i(t4.target.error);
      }, t3.onsuccess = function(t4) {
        var i2 = t4.target.result;
        if (i2) {
          var o = new vr(i2), u = e(i2.primaryKey, i2.value, o);
          if (u instanceof lr) {
            var s = u.catch(function(t5) {
              return o.done(), lr.reject(t5);
            });
            n2.push(s);
          }
          o.xn ? r2() : o.ns === null ? i2.continue() : i2.continue(o.ns);
        } else
          r2();
      };
    }).next(function() {
      return lr.Mn(n2);
    });
  }, t2.prototype.options = function(t3, e) {
    var n2;
    return t3 !== void 0 && (typeof t3 == "string" ? n2 = t3 : e = t3), {
      index: n2,
      range: e
    };
  }, t2.prototype.cursor = function(t3) {
    var e = "next";
    if (t3.reverse && (e = "prev"), t3.index) {
      var n2 = this.store.index(t3.index);
      return t3.us ? n2.openKeyCursor(t3.range, e) : n2.openCursor(t3.range, e);
    }
    return this.store.openCursor(t3.range, e);
  }, t2;
}();
function wr(t2) {
  return new lr(function(e, n2) {
    t2.onsuccess = function(t3) {
      var n3 = t3.target.result;
      e(n3);
    }, t2.onerror = function(t3) {
      var e2 = _r(t3.target.error);
      n2(e2);
    };
  });
}
var br = false;
function _r(t2) {
  var e = dr.Qn(getUA());
  if (e >= 12.2 && e < 13) {
    var r2 = "An internal error was encountered in the Indexed Database server";
    if (t2.message.indexOf(r2) >= 0) {
      var i = new q("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + r2 + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
      return br || (br = true, setTimeout(function() {
        throw i;
      }, 0)), i;
    }
  }
  return t2;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ir = function() {
  function t2(t3, e, n2, r2, i) {
    this._s = t3, this.fs = e, this.ds = n2, this.op = r2, this.ws = i, this.Es = new fr(), this.then = this.Es.promise.then.bind(this.Es.promise), this.Es.promise.catch(function(t4) {
    });
  }
  return t2.Ts = function(e, n2, r2, i, o) {
    var u = new t2(e, n2, Date.now() + r2, i, o);
    return u.start(r2), u;
  }, t2.prototype.start = function(t3) {
    var e = this;
    this.Is = setTimeout(function() {
      return e.As();
    }, t3);
  }, t2.prototype.Rs = function() {
    return this.As();
  }, t2.prototype.cancel = function(t3) {
    this.Is !== null && (this.clearTimeout(), this.Es.reject(new q(M.CANCELLED, "Operation cancelled" + (t3 ? ": " + t3 : ""))));
  }, t2.prototype.As = function() {
    var t3 = this;
    this._s.Ps(function() {
      return t3.Is !== null ? (t3.clearTimeout(), t3.op().then(function(e) {
        return t3.Es.resolve(e);
      })) : Promise.resolve();
    });
  }, t2.prototype.clearTimeout = function() {
    this.Is !== null && (this.ws(this), clearTimeout(this.Is), this.Is = null);
  }, t2;
}();
function Er(t2, e) {
  if (A("AsyncQueue", e + ": " + t2), mr(t2))
    return new q(M.UNAVAILABLE, e + ": " + t2);
  throw t2;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Tr = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", Nr = function() {
  function t2() {
    this.ys = [];
  }
  return t2.prototype.gs = function(t3) {
    this.ys.push(t3);
  }, t2.prototype.Vs = function() {
    this.ys.forEach(function(t3) {
      return t3();
    });
  }, t2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ar(t2) {
  for (var e = "", n2 = 0; n2 < t2.length; n2++)
    e.length > 0 && (e = Sr(e)), e = Dr(t2.get(n2), e);
  return Sr(e);
}
function Dr(t2, e) {
  for (var n2 = e, r2 = t2.length, i = 0; i < r2; i++) {
    var o = t2.charAt(i);
    switch (o) {
      case "\0":
        n2 += "";
        break;
      case "":
        n2 += "";
        break;
      default:
        n2 += o;
    }
  }
  return n2;
}
function Sr(t2) {
  return t2 + "";
}
function xr(t2) {
  var e = t2.length;
  if (k(e >= 2), e === 2)
    return k(t2.charAt(0) === "" && t2.charAt(1) === ""), Z.ct();
  for (var n2 = e - 2, r2 = [], i = "", o = 0; o < e; ) {
    var u = t2.indexOf("", o);
    switch ((u < 0 || u > n2) && x(), t2.charAt(u + 1)) {
      case "":
        var s = t2.substring(o, u), a = void 0;
        i.length === 0 ? a = s : (a = i += s, i = ""), r2.push(a);
        break;
      case "":
        i += t2.substring(o, u), i += "\0";
        break;
      case "":
        i += t2.substring(o, u + 1);
        break;
      default:
        x();
    }
    o = u + 2;
  }
  return new Z(r2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var kr = function(t2, e) {
  this.seconds = t2, this.nanoseconds = e;
}, Or = function(t2, e, n2) {
  this.ownerId = t2, this.allowTabSynchronization = e, this.leaseTimestampMs = n2;
};
Or.store = "owner", Or.key = "owner";
var Pr = function(t2, e, n2) {
  this.userId = t2, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n2;
};
Pr.store = "mutationQueues", Pr.keyPath = "userId";
var Vr = function(t2, e, n2, r2, i) {
  this.userId = t2, this.batchId = e, this.localWriteTimeMs = n2, this.baseMutations = r2, this.mutations = i;
};
Vr.store = "mutations", Vr.keyPath = "batchId", Vr.userMutationsIndex = "userMutationsIndex", Vr.userMutationsKeyPath = ["userId", "batchId"];
var Cr = function() {
  function t2() {
  }
  return t2.prefixForUser = function(t3) {
    return [t3];
  }, t2.prefixForPath = function(t3, e) {
    return [t3, Ar(e)];
  }, t2.key = function(t3, e, n2) {
    return [t3, Ar(e), n2];
  }, t2;
}();
Cr.store = "documentMutations", Cr.PLACEHOLDER = new Cr();
var Lr = function(t2, e) {
  this.path = t2, this.readTime = e;
}, Rr = function(t2, e) {
  this.path = t2, this.version = e;
}, Ur = function(t2, e, n2, r2, i, o) {
  this.unknownDocument = t2, this.noDocument = e, this.document = n2, this.hasCommittedMutations = r2, this.readTime = i, this.parentPath = o;
};
Ur.store = "remoteDocuments", Ur.readTimeIndex = "readTimeIndex", Ur.readTimeIndexPath = "readTime", Ur.collectionReadTimeIndex = "collectionReadTimeIndex", Ur.collectionReadTimeIndexPath = ["parentPath", "readTime"];
var Mr = function(t2) {
  this.byteSize = t2;
};
Mr.store = "remoteDocumentGlobal", Mr.key = "remoteDocumentGlobalKey";
var qr = function(t2, e, n2, r2, i, o, u) {
  this.targetId = t2, this.canonicalId = e, this.readTime = n2, this.resumeToken = r2, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = u;
};
qr.store = "targets", qr.keyPath = "targetId", qr.queryTargetsIndexName = "queryTargetsIndex", qr.queryTargetsKeyPath = ["canonicalId", "targetId"];
var Fr = function(t2, e, n2) {
  this.targetId = t2, this.path = e, this.sequenceNumber = n2;
};
Fr.store = "targetDocuments", Fr.keyPath = ["targetId", "path"], Fr.documentTargetsIndex = "documentTargetsIndex", Fr.documentTargetsKeyPath = ["path", "targetId"];
var jr = function(t2, e, n2, r2) {
  this.highestTargetId = t2, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n2, this.targetCount = r2;
};
jr.key = "targetGlobalKey", jr.store = "targetGlobal";
var zr = function(t2, e) {
  this.collectionId = t2, this.parent = e;
};
zr.store = "collectionParents", zr.keyPath = ["collectionId", "parent"];
var Gr = function(t2, e, n2, r2) {
  this.clientId = t2, this.updateTimeMs = e, this.networkEnabled = n2, this.inForeground = r2;
};
Gr.store = "clientMetadata", Gr.keyPath = "clientId";
var Br = function(t2, e, n2) {
  this.bundleId = t2, this.createTime = e, this.version = n2;
};
Br.store = "bundles", Br.keyPath = "bundleId";
var Qr = function(t2, e, n2) {
  this.name = t2, this.readTime = e, this.bundledQuery = n2;
};
Qr.store = "namedQueries", Qr.keyPath = "name";
var Yr = __spreadArrays$1(__spreadArrays$1(__spreadArrays$1(__spreadArrays$1([Pr.store, Vr.store, Cr.store, Ur.store, qr.store, Or.store, jr.store, Fr.store], [Gr.store]), [Mr.store]), [zr.store]), [Br.store, Qr.store]), Hr = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this) || this).ps = e2, r2.bs = n2, r2;
  }
  return __extends$1(e, t2), e;
}(Nr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kr(t2, e) {
  var n2 = O(t2);
  return dr.zn(n2.ps, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xr = function() {
  function t2(t3, e, n2, r2) {
    this.batchId = t3, this.vs = e, this.baseMutations = n2, this.mutations = r2;
  }
  return t2.prototype.Ss = function(t3, e, n2) {
    for (var r2 = n2.Ds, i = 0; i < this.mutations.length; i++) {
      var o = this.mutations[i];
      o.key.isEqual(t3) && (e = qe(o, e, r2[i]));
    }
    return e;
  }, t2.prototype.Cs = function(t3, e) {
    for (var n2 = 0, r2 = this.baseMutations; n2 < r2.length; n2++) {
      (u = r2[n2]).key.isEqual(t3) && (e = Fe(u, e, this.vs));
    }
    for (var i = 0, o = this.mutations; i < o.length; i++) {
      var u;
      (u = o[i]).key.isEqual(t3) && (e = Fe(u, e, this.vs));
    }
    return e;
  }, t2.prototype.xs = function(t3) {
    var e = this, n2 = t3;
    return this.mutations.forEach(function(r2) {
      var i = e.Cs(r2.key, t3.get(r2.key));
      i && (n2 = n2.zt(r2.key, i));
    }), n2;
  }, t2.prototype.keys = function() {
    return this.mutations.reduce(function(t3, e) {
      return t3.add(e.key);
    }, mn());
  }, t2.prototype.isEqual = function(t3) {
    return this.batchId === t3.batchId && L$1(this.mutations, t3.mutations, function(t4, e) {
      return ze(t4, e);
    }) && L$1(this.baseMutations, t3.baseMutations, function(t4, e) {
      return ze(t4, e);
    });
  }, t2;
}(), Wr = function() {
  function t2(t3, e, n2, r2) {
    this.batch = t3, this.Ns = e, this.Ds = n2, this.$s = r2;
  }
  return t2.from = function(e, n2, r2) {
    k(e.mutations.length === r2.length);
    for (var i = vn(), o = e.mutations, u = 0; u < o.length; u++)
      i = i.zt(o[u].key, r2[u].version);
    return new t2(e, n2, r2, i);
  }, t2;
}(), Zr = function(t2) {
  this.Fs = t2;
};
function Jr(t2, e) {
  if (e.document)
    return Kn(t2.Fs, e.document, !!e.hasCommittedMutations);
  if (e.noDocument) {
    var n2 = tt.Et(e.noDocument.path), r2 = ri(e.noDocument.readTime);
    return new Vt(n2, r2, {
      hasCommittedMutations: !!e.hasCommittedMutations
    });
  }
  if (e.unknownDocument) {
    var i = tt.Et(e.unknownDocument.path);
    r2 = ri(e.unknownDocument.version);
    return new Ct(i, r2);
  }
  return x();
}
function $r(t2, e, n2) {
  var r2 = ti(n2), i = e.key.path.X().it();
  if (e instanceof Pt) {
    var o = function(t3, e2) {
      return {
        name: jn(t3, e2.key),
        fields: e2.bt().mapValue.fields,
        updateTime: Ln(t3, e2.version.j())
      };
    }(t2.Fs, e), u = e.hasCommittedMutations;
    return new Ur(null, null, o, u, r2, i);
  }
  if (e instanceof Vt) {
    var s = e.key.path.it(), a = ni(e.version);
    u = e.hasCommittedMutations;
    return new Ur(null, new Lr(s, a), null, u, r2, i);
  }
  if (e instanceof Ct) {
    var c = e.key.path.it(), h2 = ni(e.version);
    return new Ur(new Rr(c, h2), null, null, true, r2, i);
  }
  return x();
}
function ti(t2) {
  var e = t2.j();
  return [e.seconds, e.nanoseconds];
}
function ei(t2) {
  var e = new K(t2[0], t2[1]);
  return X.K(e);
}
function ni(t2) {
  var e = t2.j();
  return new kr(e.seconds, e.nanoseconds);
}
function ri(t2) {
  var e = new K(t2.seconds, t2.nanoseconds);
  return X.K(e);
}
function ii(t2, e) {
  for (var n2 = (e.baseMutations || []).map(function(e2) {
    return Wn(t2.Fs, e2);
  }), r2 = 0; r2 < e.mutations.length - 1; ++r2) {
    var i = e.mutations[r2];
    if (r2 + 1 < e.mutations.length && e.mutations[r2 + 1].transform !== void 0) {
      var o = e.mutations[r2 + 1];
      i.updateTransforms = o.transform.fieldTransforms, e.mutations.splice(r2 + 1, 1), ++r2;
    }
  }
  var u = e.mutations.map(function(e2) {
    return Wn(t2.Fs, e2);
  }), s = K.fromMillis(e.localWriteTimeMs);
  return new Xr(e.batchId, s, n2, u);
}
function oi(t2) {
  var e, n2, r2 = ri(t2.readTime), i = t2.lastLimboFreeSnapshotVersion !== void 0 ? ri(t2.lastLimboFreeSnapshotVersion) : X.min();
  return t2.query.documents !== void 0 ? (k((n2 = t2.query).documents.length === 1), e = he(re(Bn(n2.documents[0])))) : e = function(t3) {
    return he($n(t3));
  }(t2.query), new ge(e, t2.targetId, 0, t2.lastListenSequenceNumber, r2, i, U.fromBase64String(t2.resumeToken));
}
function ui(t2, e) {
  var n2, r2 = ni(e.Ot), i = ni(e.lastLimboFreeSnapshotVersion);
  n2 = qt(e.target) ? Zn(t2.Fs, e.target) : Jn(t2.Fs, e.target);
  var o = e.resumeToken.toBase64();
  return new qr(e.targetId, Ut(e.target), r2, o, e.sequenceNumber, i, n2);
}
function si(t2) {
  var e = $n({
    parent: t2.parent,
    structuredQuery: t2.structuredQuery
  });
  return t2.limitType === "LAST" ? fe(e, e.limit, "L") : e;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ai = function() {
  function t2() {
  }
  return t2.prototype.Os = function(t3, e) {
    return ci(t3).get(e).next(function(t4) {
      if (t4)
        return {
          id: (e2 = t4).bundleId,
          createTime: ri(e2.createTime),
          version: e2.version
        };
      var e2;
    });
  }, t2.prototype.ks = function(t3, e) {
    return ci(t3).put({
      bundleId: (n2 = e).id,
      createTime: ni(Mn(n2.createTime)),
      version: n2.version
    });
    var n2;
  }, t2.prototype.Ms = function(t3, e) {
    return hi(t3).get(e).next(function(t4) {
      if (t4)
        return {
          name: (e2 = t4).name,
          query: si(e2.bundledQuery),
          readTime: ri(e2.readTime)
        };
      var e2;
    });
  }, t2.prototype.Ls = function(t3, e) {
    return hi(t3).put(function(t4) {
      return {
        name: t4.name,
        readTime: ni(Mn(t4.readTime)),
        bundledQuery: t4.bundledQuery
      };
    }(e));
  }, t2;
}();
function ci(t2) {
  return Kr(t2, Br.store);
}
function hi(t2) {
  return Kr(t2, Qr.store);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fi = function() {
  function t2() {
    this.Bs = new li();
  }
  return t2.prototype.qs = function(t3, e) {
    return this.Bs.add(e), lr.resolve();
  }, t2.prototype.Us = function(t3, e) {
    return lr.resolve(this.Bs.getEntries(e));
  }, t2;
}(), li = function() {
  function t2() {
    this.index = {};
  }
  return t2.prototype.add = function(t3) {
    var e = t3.tt(), n2 = t3.X(), r2 = this.index[e] || new sn(Z.H), i = !r2.has(n2);
    return this.index[e] = r2.add(n2), i;
  }, t2.prototype.has = function(t3) {
    var e = t3.tt(), n2 = t3.X(), r2 = this.index[e];
    return r2 && r2.has(n2);
  }, t2.prototype.getEntries = function(t3) {
    return (this.index[t3] || new sn(Z.H)).it();
  }, t2;
}(), pi = function() {
  function t2() {
    this.Qs = new li();
  }
  return t2.prototype.qs = function(t3, e) {
    var n2 = this;
    if (!this.Qs.has(e)) {
      var r2 = e.tt(), i = e.X();
      t3.gs(function() {
        n2.Qs.add(e);
      });
      var o = {
        collectionId: r2,
        parent: Ar(i)
      };
      return di(t3).put(o);
    }
    return lr.resolve();
  }, t2.prototype.Us = function(t3, e) {
    var n2 = [], r2 = IDBKeyRange.bound([e, ""], [R(e), ""], false, true);
    return di(t3).rs(r2).next(function(t4) {
      for (var r3 = 0, i = t4; r3 < i.length; r3++) {
        var o = i[r3];
        if (o.collectionId !== e)
          break;
        n2.push(xr(o.parent));
      }
      return n2;
    });
  }, t2;
}();
function di(t2) {
  return Kr(t2, zr.store);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vi = {
  Ks: false,
  Ws: 0,
  js: 0,
  Gs: 0
}, yi = function() {
  function t2(t3, e, n2) {
    this.zs = t3, this.Hs = e, this.Js = n2;
  }
  return t2.Ys = function(e) {
    return new t2(e, t2.Xs, t2.Zs);
  }, t2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mi(t2) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(e) {
      if (t2.code !== M.FAILED_PRECONDITION || t2.message !== Tr)
        throw t2;
      return N("LocalStore", "Unexpectedly lost primary lease"), [2];
    });
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
yi.Xs = 10, yi.Zs = 1e3, yi.ti = new yi(41943040, yi.Xs, yi.Zs), yi.ei = new yi(-1, 0, 0);
var gi = function() {
  function t2(t3, e) {
    this.ni = t3, this.si = e, this.ii = {};
  }
  return t2.prototype.get = function(t3) {
    var e = this.ni(t3), n2 = this.ii[e];
    if (n2 !== void 0)
      for (var r2 = 0, i = n2; r2 < i.length; r2++) {
        var o = i[r2], u = o[0], s = o[1];
        if (this.si(u, t3))
          return s;
      }
  }, t2.prototype.has = function(t3) {
    return this.get(t3) !== void 0;
  }, t2.prototype.set = function(t3, e) {
    var n2 = this.ni(t3), r2 = this.ii[n2];
    if (r2 !== void 0) {
      for (var i = 0; i < r2.length; i++)
        if (this.si(r2[i][0], t3))
          return void (r2[i] = [t3, e]);
      r2.push([t3, e]);
    } else
      this.ii[n2] = [[t3, e]];
  }, t2.prototype.delete = function(t3) {
    var e = this.ni(t3), n2 = this.ii[e];
    if (n2 === void 0)
      return false;
    for (var r2 = 0; r2 < n2.length; r2++)
      if (this.si(n2[r2][0], t3))
        return n2.length === 1 ? delete this.ii[e] : n2.splice(r2, 1), true;
    return false;
  }, t2.prototype.forEach = function(t3) {
    nt(this.ii, function(e, n2) {
      for (var r2 = 0, i = n2; r2 < i.length; r2++) {
        var o = i[r2], u = o[0], s = o[1];
        t3(u, s);
      }
    });
  }, t2.prototype.et = function() {
    return rt(this.ii);
  }, t2;
}(), wi = function() {
  function t2() {
    this.ri = new gi(function(t3) {
      return t3.toString();
    }, function(t3, e) {
      return t3.isEqual(e);
    }), this.oi = false;
  }
  return t2.prototype.ci = function(t3) {
    var e = this.ri.get(t3);
    return e ? e.readTime : X.min();
  }, t2.prototype.ai = function(t3, e) {
    this.ui(), this.ri.set(t3.key, {
      hi: t3,
      readTime: e
    });
  }, t2.prototype.li = function(t3, e) {
    e === void 0 && (e = null), this.ui(), this.ri.set(t3, {
      hi: null,
      readTime: e
    });
  }, t2.prototype._i = function(t3, e) {
    this.ui();
    var n2 = this.ri.get(e);
    return n2 !== void 0 ? lr.resolve(n2.hi) : this.fi(t3, e);
  }, t2.prototype.getEntries = function(t3, e) {
    return this.di(t3, e);
  }, t2.prototype.apply = function(t3) {
    return this.ui(), this.oi = true, this.wi(t3);
  }, t2.prototype.ui = function() {
  }, t2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bi(t2, e, n2) {
  var r2 = t2.store(Vr.store), i = t2.store(Cr.store), o = [], u = IDBKeyRange.only(n2.batchId), s = 0, a = r2.hs({
    range: u
  }, function(t3, e2, n3) {
    return s++, n3.delete();
  });
  o.push(a.next(function() {
    k(s === 1);
  }));
  for (var c = [], h2 = 0, f = n2.mutations; h2 < f.length; h2++) {
    var l = f[h2], p2 = Cr.key(e, l.key.path, n2.batchId);
    o.push(i.delete(p2)), c.push(l.key);
  }
  return lr.Mn(o).next(function() {
    return c;
  });
}
function _i(t2) {
  var e;
  if (t2.document)
    e = t2.document;
  else if (t2.unknownDocument)
    e = t2.unknownDocument;
  else {
    if (!t2.noDocument)
      throw x();
    e = t2.noDocument;
  }
  return JSON.stringify(e).length;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ii = function() {
  function t2(t3, e, n2, r2) {
    this.userId = t3, this.Qt = e, this.Ei = n2, this.Ti = r2, this.Ii = {};
  }
  return t2.mi = function(e, n2, r2, i) {
    return k(e.uid !== ""), new t2(e.m() ? e.uid : "", n2, r2, i);
  }, t2.prototype.Ai = function(t3) {
    var e = true, n2 = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
    return Ti(t3).hs({
      index: Vr.userMutationsIndex,
      range: n2
    }, function(t4, n3, r2) {
      e = false, r2.done();
    }).next(function() {
      return e;
    });
  }, t2.prototype.Ri = function(t3, e, n2, r2) {
    var i = this, o = Ni(t3), u = Ti(t3);
    return u.add({}).next(function(s) {
      k(typeof s == "number");
      for (var a = new Xr(s, e, n2, r2), c = function(t4, e2, n3) {
        var r3 = n3.baseMutations.map(function(e3) {
          return Xn(t4.Fs, e3);
        }), i2 = n3.mutations.map(function(e3) {
          return Xn(t4.Fs, e3);
        });
        return new Vr(e2, n3.batchId, n3.vs.toMillis(), r3, i2);
      }(i.Qt, i.userId, a), h2 = [], f = new sn(function(t4, e2) {
        return C(t4.rt(), e2.rt());
      }), l = 0, p2 = r2; l < p2.length; l++) {
        var d = p2[l], v2 = Cr.key(i.userId, d.key.path, s);
        f = f.add(d.key.path.X()), h2.push(u.put(c)), h2.push(o.put(v2, Cr.PLACEHOLDER));
      }
      return f.forEach(function(e2) {
        h2.push(i.Ei.qs(t3, e2));
      }), t3.gs(function() {
        i.Ii[s] = a.keys();
      }), lr.Mn(h2).next(function() {
        return a;
      });
    });
  }, t2.prototype.Pi = function(t3, e) {
    var n2 = this;
    return Ti(t3).get(e).next(function(t4) {
      return t4 ? (k(t4.userId === n2.userId), ii(n2.Qt, t4)) : null;
    });
  }, t2.prototype.yi = function(t3, e) {
    var n2 = this;
    return this.Ii[e] ? lr.resolve(this.Ii[e]) : this.Pi(t3, e).next(function(t4) {
      if (t4) {
        var r2 = t4.keys();
        return n2.Ii[e] = r2, r2;
      }
      return null;
    });
  }, t2.prototype.gi = function(t3, e) {
    var n2 = this, r2 = e + 1, i = IDBKeyRange.lowerBound([this.userId, r2]), o = null;
    return Ti(t3).hs({
      index: Vr.userMutationsIndex,
      range: i
    }, function(t4, e2, i2) {
      e2.userId === n2.userId && (k(e2.batchId >= r2), o = ii(n2.Qt, e2)), i2.done();
    }).next(function() {
      return o;
    });
  }, t2.prototype.Vi = function(t3) {
    var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]), n2 = -1;
    return Ti(t3).hs({
      index: Vr.userMutationsIndex,
      range: e,
      reverse: true
    }, function(t4, e2, r2) {
      n2 = e2.batchId, r2.done();
    }).next(function() {
      return n2;
    });
  }, t2.prototype.pi = function(t3) {
    var e = this, n2 = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
    return Ti(t3).rs(Vr.userMutationsIndex, n2).next(function(t4) {
      return t4.map(function(t5) {
        return ii(e.Qt, t5);
      });
    });
  }, t2.prototype.bi = function(t3, e) {
    var n2 = this, r2 = Cr.prefixForPath(this.userId, e.path), i = IDBKeyRange.lowerBound(r2), o = [];
    return Ni(t3).hs({
      range: i
    }, function(r3, i2, u) {
      var s = r3[0], a = r3[1], c = r3[2], h2 = xr(a);
      if (s === n2.userId && e.path.isEqual(h2))
        return Ti(t3).get(c).next(function(t4) {
          if (!t4)
            throw x();
          k(t4.userId === n2.userId), o.push(ii(n2.Qt, t4));
        });
      u.done();
    }).next(function() {
      return o;
    });
  }, t2.prototype.vi = function(t3, e) {
    var n2 = this, r2 = new sn(C), i = [];
    return e.forEach(function(e2) {
      var o = Cr.prefixForPath(n2.userId, e2.path), u = IDBKeyRange.lowerBound(o), s = Ni(t3).hs({
        range: u
      }, function(t4, i2, o2) {
        var u2 = t4[0], s2 = t4[1], a = t4[2], c = xr(s2);
        u2 === n2.userId && e2.path.isEqual(c) ? r2 = r2.add(a) : o2.done();
      });
      i.push(s);
    }), lr.Mn(i).next(function() {
      return n2.Si(t3, r2);
    });
  }, t2.prototype.Di = function(t3, e) {
    var n2 = this, r2 = e.path, i = r2.length + 1, o = Cr.prefixForPath(this.userId, r2), u = IDBKeyRange.lowerBound(o), s = new sn(C);
    return Ni(t3).hs({
      range: u
    }, function(t4, e2, o2) {
      var u2 = t4[0], a = t4[1], c = t4[2], h2 = xr(a);
      u2 === n2.userId && r2.nt(h2) ? h2.length === i && (s = s.add(c)) : o2.done();
    }).next(function() {
      return n2.Si(t3, s);
    });
  }, t2.prototype.Si = function(t3, e) {
    var n2 = this, r2 = [], i = [];
    return e.forEach(function(e2) {
      i.push(Ti(t3).get(e2).next(function(t4) {
        if (t4 === null)
          throw x();
        k(t4.userId === n2.userId), r2.push(ii(n2.Qt, t4));
      }));
    }), lr.Mn(i).next(function() {
      return r2;
    });
  }, t2.prototype.Ci = function(t3, e) {
    var n2 = this;
    return bi(t3.ps, this.userId, e).next(function(r2) {
      return t3.gs(function() {
        n2.xi(e.batchId);
      }), lr.forEach(r2, function(e2) {
        return n2.Ti.Ni(t3, e2);
      });
    });
  }, t2.prototype.xi = function(t3) {
    delete this.Ii[t3];
  }, t2.prototype.$i = function(t3) {
    var e = this;
    return this.Ai(t3).next(function(n2) {
      if (!n2)
        return lr.resolve();
      var r2 = IDBKeyRange.lowerBound(Cr.prefixForUser(e.userId)), i = [];
      return Ni(t3).hs({
        range: r2
      }, function(t4, n3, r3) {
        if (t4[0] === e.userId) {
          var o = xr(t4[1]);
          i.push(o);
        } else
          r3.done();
      }).next(function() {
        k(i.length === 0);
      });
    });
  }, t2.prototype.Fi = function(t3, e) {
    return Ei(t3, this.userId, e);
  }, t2.prototype.Oi = function(t3) {
    var e = this;
    return Ai(t3).get(this.userId).next(function(t4) {
      return t4 || new Pr(e.userId, -1, "");
    });
  }, t2;
}();
function Ei(t2, e, n2) {
  var r2 = Cr.prefixForPath(e, n2.path), i = r2[1], o = IDBKeyRange.lowerBound(r2), u = false;
  return Ni(t2).hs({
    range: o,
    us: true
  }, function(t3, n3, r3) {
    var o2 = t3[0], s = t3[1];
    t3[2];
    o2 === e && s === i && (u = true), r3.done();
  }).next(function() {
    return u;
  });
}
function Ti(t2) {
  return Kr(t2, Vr.store);
}
function Ni(t2) {
  return Kr(t2, Cr.store);
}
function Ai(t2) {
  return Kr(t2, Pr.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Di = function() {
  function t2(t3) {
    this.ki = t3;
  }
  return t2.prototype.next = function() {
    return this.ki += 2, this.ki;
  }, t2.Mi = function() {
    return new t2(0);
  }, t2.Li = function() {
    return new t2(-1);
  }, t2;
}(), Si = function() {
  function t2(t3, e) {
    this.Ti = t3, this.Qt = e;
  }
  return t2.prototype.Bi = function(t3) {
    var e = this;
    return this.qi(t3).next(function(n2) {
      var r2 = new Di(n2.highestTargetId);
      return n2.highestTargetId = r2.next(), e.Ui(t3, n2).next(function() {
        return n2.highestTargetId;
      });
    });
  }, t2.prototype.Qi = function(t3) {
    return this.qi(t3).next(function(t4) {
      return X.K(new K(t4.lastRemoteSnapshotVersion.seconds, t4.lastRemoteSnapshotVersion.nanoseconds));
    });
  }, t2.prototype.Ki = function(t3) {
    return this.qi(t3).next(function(t4) {
      return t4.highestListenSequenceNumber;
    });
  }, t2.prototype.Wi = function(t3, e, n2) {
    var r2 = this;
    return this.qi(t3).next(function(i) {
      return i.highestListenSequenceNumber = e, n2 && (i.lastRemoteSnapshotVersion = n2.j()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r2.Ui(t3, i);
    });
  }, t2.prototype.ji = function(t3, e) {
    var n2 = this;
    return this.Gi(t3, e).next(function() {
      return n2.qi(t3).next(function(r2) {
        return r2.targetCount += 1, n2.zi(e, r2), n2.Ui(t3, r2);
      });
    });
  }, t2.prototype.Hi = function(t3, e) {
    return this.Gi(t3, e);
  }, t2.prototype.Ji = function(t3, e) {
    var n2 = this;
    return this.Yi(t3, e.targetId).next(function() {
      return xi(t3).delete(e.targetId);
    }).next(function() {
      return n2.qi(t3);
    }).next(function(e2) {
      return k(e2.targetCount > 0), e2.targetCount -= 1, n2.Ui(t3, e2);
    });
  }, t2.prototype.Xi = function(t3, e, n2) {
    var r2 = this, i = 0, o = [];
    return xi(t3).hs(function(u, s) {
      var a = oi(s);
      a.sequenceNumber <= e && n2.get(a.targetId) === null && (i++, o.push(r2.Ji(t3, a)));
    }).next(function() {
      return lr.Mn(o);
    }).next(function() {
      return i;
    });
  }, t2.prototype.In = function(t3, e) {
    return xi(t3).hs(function(t4, n2) {
      var r2 = oi(n2);
      e(r2);
    });
  }, t2.prototype.qi = function(t3) {
    return ki(t3).get(jr.key).next(function(t4) {
      return k(t4 !== null), t4;
    });
  }, t2.prototype.Ui = function(t3, e) {
    return ki(t3).put(jr.key, e);
  }, t2.prototype.Gi = function(t3, e) {
    return xi(t3).put(ui(this.Qt, e));
  }, t2.prototype.zi = function(t3, e) {
    var n2 = false;
    return t3.targetId > e.highestTargetId && (e.highestTargetId = t3.targetId, n2 = true), t3.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t3.sequenceNumber, n2 = true), n2;
  }, t2.prototype.Zi = function(t3) {
    return this.qi(t3).next(function(t4) {
      return t4.targetCount;
    });
  }, t2.prototype.tr = function(t3, e) {
    var n2 = Ut(e), r2 = IDBKeyRange.bound([n2, Number.NEGATIVE_INFINITY], [n2, Number.POSITIVE_INFINITY]), i = null;
    return xi(t3).hs({
      range: r2,
      index: qr.queryTargetsIndexName
    }, function(t4, n3, r3) {
      var o = oi(n3);
      Mt(e, o.target) && (i = o, r3.done());
    }).next(function() {
      return i;
    });
  }, t2.prototype.er = function(t3, e, n2) {
    var r2 = this, i = [], o = Oi(t3);
    return e.forEach(function(e2) {
      var u = Ar(e2.path);
      i.push(o.put(new Fr(n2, u))), i.push(r2.Ti.nr(t3, n2, e2));
    }), lr.Mn(i);
  }, t2.prototype.sr = function(t3, e, n2) {
    var r2 = this, i = Oi(t3);
    return lr.forEach(e, function(e2) {
      var o = Ar(e2.path);
      return lr.Mn([i.delete([n2, o]), r2.Ti.ir(t3, n2, e2)]);
    });
  }, t2.prototype.Yi = function(t3, e) {
    var n2 = Oi(t3), r2 = IDBKeyRange.bound([e], [e + 1], false, true);
    return n2.delete(r2);
  }, t2.prototype.rr = function(t3, e) {
    var n2 = IDBKeyRange.bound([e], [e + 1], false, true), r2 = Oi(t3), i = mn();
    return r2.hs({
      range: n2,
      us: true
    }, function(t4, e2, n3) {
      var r3 = xr(t4[1]), o = new tt(r3);
      i = i.add(o);
    }).next(function() {
      return i;
    });
  }, t2.prototype.Fi = function(t3, e) {
    var n2 = Ar(e.path), r2 = IDBKeyRange.bound([n2], [R(n2)], false, true), i = 0;
    return Oi(t3).hs({
      index: Fr.documentTargetsIndex,
      us: true,
      range: r2
    }, function(t4, e2, n3) {
      var r3 = t4[0];
      t4[1];
      r3 !== 0 && (i++, n3.done());
    }).next(function() {
      return i > 0;
    });
  }, t2.prototype.Sn = function(t3, e) {
    return xi(t3).get(e).next(function(t4) {
      return t4 ? oi(t4) : null;
    });
  }, t2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xi(t2) {
  return Kr(t2, qr.store);
}
function ki(t2) {
  return Kr(t2, jr.store);
}
function Oi(t2) {
  return Kr(t2, Fr.store);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pi(t2, e) {
  var n2 = t2[0], r2 = t2[1], i = e[0], o = e[1], u = C(n2, i);
  return u === 0 ? C(r2, o) : u;
}
var Vi = function() {
  function t2(t3) {
    this.cr = t3, this.buffer = new sn(Pi), this.ar = 0;
  }
  return t2.prototype.ur = function() {
    return ++this.ar;
  }, t2.prototype.hr = function(t3) {
    var e = [t3, this.ur()];
    if (this.buffer.size < this.cr)
      this.buffer = this.buffer.add(e);
    else {
      var n2 = this.buffer.last();
      Pi(e, n2) < 0 && (this.buffer = this.buffer.delete(n2).add(e));
    }
  }, Object.defineProperty(t2.prototype, "maxValue", {
    get: function() {
      return this.buffer.last()[0];
    },
    enumerable: false,
    configurable: true
  }), t2;
}(), Ci = function() {
  function t2(t3, e) {
    this.lr = t3, this._s = e, this._r = false, this.dr = null;
  }
  return t2.prototype.start = function(t3) {
    this.lr.params.zs !== -1 && this.wr(t3);
  }, t2.prototype.stop = function() {
    this.dr && (this.dr.cancel(), this.dr = null);
  }, Object.defineProperty(t2.prototype, "Er", {
    get: function() {
      return this.dr !== null;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.wr = function(t3) {
    var e = this, n2 = this._r ? 3e5 : 6e4;
    N("LruGarbageCollector", "Garbage collection scheduled in " + n2 + "ms"), this.dr = this._s.Tr("lru_garbage_collection", n2, function() {
      return __awaiter(e, void 0, void 0, function() {
        var e2;
        return __generator(this, function(n3) {
          switch (n3.label) {
            case 0:
              this.dr = null, this._r = true, n3.label = 1;
            case 1:
              return n3.trys.push([1, 3, , 7]), [4, t3.Ir(this.lr)];
            case 2:
              return n3.sent(), [3, 7];
            case 3:
              return mr(e2 = n3.sent()) ? (N("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e2), [3, 6]) : [3, 4];
            case 4:
              return [4, mi(e2)];
            case 5:
              n3.sent(), n3.label = 6;
            case 6:
              return [3, 7];
            case 7:
              return [4, this.wr(t3)];
            case 8:
              return n3.sent(), [2];
          }
        });
      });
    });
  }, t2;
}(), Li = function() {
  function t2(t3, e) {
    this.mr = t3, this.params = e;
  }
  return t2.prototype.Ar = function(t3, e) {
    return this.mr.Rr(t3).next(function(t4) {
      return Math.floor(e / 100 * t4);
    });
  }, t2.prototype.Pr = function(t3, e) {
    var n2 = this;
    if (e === 0)
      return lr.resolve(H.q);
    var r2 = new Vi(e);
    return this.mr.In(t3, function(t4) {
      return r2.hr(t4.sequenceNumber);
    }).next(function() {
      return n2.mr.yr(t3, function(t4) {
        return r2.hr(t4);
      });
    }).next(function() {
      return r2.maxValue;
    });
  }, t2.prototype.Xi = function(t3, e, n2) {
    return this.mr.Xi(t3, e, n2);
  }, t2.prototype.gr = function(t3, e) {
    return this.mr.gr(t3, e);
  }, t2.prototype.Vr = function(t3, e) {
    var n2 = this;
    return this.params.zs === -1 ? (N("LruGarbageCollector", "Garbage collection skipped; disabled"), lr.resolve(vi)) : this.pr(t3).next(function(r2) {
      return r2 < n2.params.zs ? (N("LruGarbageCollector", "Garbage collection skipped; Cache size " + r2 + " is lower than threshold " + n2.params.zs), vi) : n2.br(t3, e);
    });
  }, t2.prototype.pr = function(t3) {
    return this.mr.pr(t3);
  }, t2.prototype.br = function(t3, n2) {
    var r2, i, o, u, s, a, c, h2 = this, f = Date.now();
    return this.Ar(t3, this.params.Hs).next(function(e) {
      return e > h2.params.Js ? (N("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h2.params.Js + " from " + e), i = h2.params.Js) : i = e, u = Date.now(), h2.Pr(t3, i);
    }).next(function(e) {
      return r2 = e, s = Date.now(), h2.Xi(t3, r2, n2);
    }).next(function(e) {
      return o = e, a = Date.now(), h2.gr(t3, r2);
    }).next(function(t4) {
      return c = Date.now(), T() <= LogLevel.DEBUG && N("LruGarbageCollector", "LRU Garbage Collection\n	Counted targets in " + (u - f) + "ms\n	Determined least recently used " + i + " in " + (s - u) + "ms\n	Removed " + o + " targets in " + (a - s) + "ms\n	Removed " + t4 + " documents in " + (c - a) + "ms\nTotal Duration: " + (c - f) + "ms"), lr.resolve({
        Ks: true,
        Ws: i,
        js: o,
        Gs: t4
      });
    });
  }, t2;
}(), Ri = function() {
  function t2(t3, e) {
    this.db = t3, this.lr = function(t4, e2) {
      return new Li(t4, e2);
    }(this, e);
  }
  return t2.prototype.Rr = function(t3) {
    var e = this.vr(t3);
    return this.db.Sr().Zi(t3).next(function(t4) {
      return e.next(function(e2) {
        return t4 + e2;
      });
    });
  }, t2.prototype.vr = function(t3) {
    var e = 0;
    return this.yr(t3, function(t4) {
      e++;
    }).next(function() {
      return e;
    });
  }, t2.prototype.In = function(t3, e) {
    return this.db.Sr().In(t3, e);
  }, t2.prototype.yr = function(t3, e) {
    return this.Dr(t3, function(t4, n2) {
      return e(n2);
    });
  }, t2.prototype.nr = function(t3, e, n2) {
    return Ui(t3, n2);
  }, t2.prototype.ir = function(t3, e, n2) {
    return Ui(t3, n2);
  }, t2.prototype.Xi = function(t3, e, n2) {
    return this.db.Sr().Xi(t3, e, n2);
  }, t2.prototype.Ni = function(t3, e) {
    return Ui(t3, e);
  }, t2.prototype.Cr = function(t3, e) {
    return function(t4, e2) {
      var n2 = false;
      return Ai(t4).ls(function(r2) {
        return Ei(t4, r2, e2).next(function(t5) {
          return t5 && (n2 = true), lr.resolve(!t5);
        });
      }).next(function() {
        return n2;
      });
    }(t3, e);
  }, t2.prototype.gr = function(t3, e) {
    var n2 = this, r2 = this.db.$r().Nr(), i = [], o = 0;
    return this.Dr(t3, function(u, s) {
      if (s <= e) {
        var a = n2.Cr(t3, u).next(function(e2) {
          if (!e2)
            return o++, r2._i(t3, u).next(function() {
              return r2.li(u), Oi(t3).delete([0, Ar(u.path)]);
            });
        });
        i.push(a);
      }
    }).next(function() {
      return lr.Mn(i);
    }).next(function() {
      return r2.apply(t3);
    }).next(function() {
      return o;
    });
  }, t2.prototype.removeTarget = function(t3, e) {
    var n2 = e.kt(t3.bs);
    return this.db.Sr().Hi(t3, n2);
  }, t2.prototype.Fr = function(t3, e) {
    return Ui(t3, e);
  }, t2.prototype.Dr = function(t3, e) {
    var n2, r2 = Oi(t3), i = H.q;
    return r2.hs({
      index: Fr.documentTargetsIndex
    }, function(t4, r3) {
      var o = t4[0], u = (t4[1], r3.path), s = r3.sequenceNumber;
      o === 0 ? (i !== H.q && e(new tt(xr(n2)), i), i = s, n2 = u) : i = H.q;
    }).next(function() {
      i !== H.q && e(new tt(xr(n2)), i);
    });
  }, t2.prototype.pr = function(t3) {
    return this.db.$r().Or(t3);
  }, t2;
}();
function Ui(t2, e) {
  return Oi(t2).put(function(t3, e2) {
    return new Fr(0, Ar(t3.path), e2);
  }(e, t2.bs));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mi = function() {
  function t2(t3, e) {
    this.Qt = t3, this.Ei = e;
  }
  return t2.prototype.ai = function(t3, e, n2) {
    return ji(t3).put(zi(e), n2);
  }, t2.prototype.li = function(t3, e) {
    var n2 = ji(t3), r2 = zi(e);
    return n2.delete(r2);
  }, t2.prototype.updateMetadata = function(t3, e) {
    var n2 = this;
    return this.getMetadata(t3).next(function(r2) {
      return r2.byteSize += e, n2.kr(t3, r2);
    });
  }, t2.prototype._i = function(t3, e) {
    var n2 = this;
    return ji(t3).get(zi(e)).next(function(t4) {
      return n2.Mr(t4);
    });
  }, t2.prototype.Lr = function(t3, e) {
    var n2 = this;
    return ji(t3).get(zi(e)).next(function(t4) {
      var e2 = n2.Mr(t4);
      return e2 ? {
        hi: e2,
        size: _i(t4)
      } : null;
    });
  }, t2.prototype.getEntries = function(t3, e) {
    var n2 = this, r2 = fn();
    return this.Br(t3, e, function(t4, e2) {
      var i = n2.Mr(e2);
      r2 = r2.zt(t4, i);
    }).next(function() {
      return r2;
    });
  }, t2.prototype.qr = function(t3, e) {
    var n2 = this, r2 = fn(), i = new rn(tt.H);
    return this.Br(t3, e, function(t4, e2) {
      var o = n2.Mr(e2);
      o ? (r2 = r2.zt(t4, o), i = i.zt(t4, _i(e2))) : (r2 = r2.zt(t4, null), i = i.zt(t4, 0));
    }).next(function() {
      return {
        Ur: r2,
        Qr: i
      };
    });
  }, t2.prototype.Br = function(t3, e, n2) {
    if (e.et())
      return lr.resolve();
    var r2 = IDBKeyRange.bound(e.first().path.it(), e.last().path.it()), i = e.te(), o = i.oe();
    return ji(t3).hs({
      range: r2
    }, function(t4, e2, r3) {
      for (var u = tt.Et(t4); o && tt.H(o, u) < 0; )
        n2(o, null), o = i.oe();
      o && o.isEqual(u) && (n2(o, e2), o = i.ce() ? i.oe() : null), o ? r3.ss(o.path.it()) : r3.done();
    }).next(function() {
      for (; o; )
        n2(o, null), o = i.ce() ? i.oe() : null;
    });
  }, t2.prototype.Kr = function(t3, e, n2) {
    var r2 = this, i = pn(), o = e.path.length + 1, u = {};
    if (n2.isEqual(X.min())) {
      var s = e.path.it();
      u.range = IDBKeyRange.lowerBound(s);
    } else {
      var a = e.path.it(), c = ti(n2);
      u.range = IDBKeyRange.lowerBound([a, c], true), u.index = Ur.collectionReadTimeIndex;
    }
    return ji(t3).hs(u, function(t4, n3, u2) {
      if (t4.length === o) {
        var s2 = Jr(r2.Qt, n3);
        e.path.nt(s2.key.path) ? s2 instanceof Pt && ve(e, s2) && (i = i.zt(s2.key, s2)) : u2.done();
      }
    }).next(function() {
      return i;
    });
  }, t2.prototype.Nr = function(t3) {
    return new qi(this, !!t3 && t3.Wr);
  }, t2.prototype.Or = function(t3) {
    return this.getMetadata(t3).next(function(t4) {
      return t4.byteSize;
    });
  }, t2.prototype.getMetadata = function(t3) {
    return Fi(t3).get(Mr.key).next(function(t4) {
      return k(!!t4), t4;
    });
  }, t2.prototype.kr = function(t3, e) {
    return Fi(t3).put(Mr.key, e);
  }, t2.prototype.Mr = function(t3) {
    if (t3) {
      var e = Jr(this.Qt, t3);
      return e instanceof Vt && e.version.isEqual(X.min()) ? null : e;
    }
    return null;
  }, t2;
}(), qi = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this) || this).jr = e2, r2.Wr = n2, r2.Gr = new gi(function(t3) {
      return t3.toString();
    }, function(t3, e3) {
      return t3.isEqual(e3);
    }), r2;
  }
  return __extends$1(e, t2), e.prototype.wi = function(t3) {
    var e2 = this, n2 = [], r2 = 0, i = new sn(function(t4, e3) {
      return C(t4.rt(), e3.rt());
    });
    return this.ri.forEach(function(o, u) {
      var s = e2.Gr.get(o);
      if (u.hi) {
        var a = $r(e2.jr.Qt, u.hi, e2.ci(o));
        i = i.add(o.path.X());
        var c = _i(a);
        r2 += c - s, n2.push(e2.jr.ai(t3, o, a));
      } else if (r2 -= s, e2.Wr) {
        var h2 = $r(e2.jr.Qt, new Vt(o, X.min()), e2.ci(o));
        n2.push(e2.jr.ai(t3, o, h2));
      } else
        n2.push(e2.jr.li(t3, o));
    }), i.forEach(function(r3) {
      n2.push(e2.jr.Ei.qs(t3, r3));
    }), n2.push(this.jr.updateMetadata(t3, r2)), lr.Mn(n2);
  }, e.prototype.fi = function(t3, e2) {
    var n2 = this;
    return this.jr.Lr(t3, e2).next(function(t4) {
      return t4 === null ? (n2.Gr.set(e2, 0), null) : (n2.Gr.set(e2, t4.size), t4.hi);
    });
  }, e.prototype.di = function(t3, e2) {
    var n2 = this;
    return this.jr.qr(t3, e2).next(function(t4) {
      var e3 = t4.Ur;
      return t4.Qr.forEach(function(t5, e4) {
        n2.Gr.set(t5, e4);
      }), e3;
    });
  }, e;
}(wi);
function Fi(t2) {
  return Kr(t2, Mr.store);
}
function ji(t2) {
  return Kr(t2, Ur.store);
}
function zi(t2) {
  return t2.path.it();
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gi = function() {
  function t2(t3) {
    this.Qt = t3;
  }
  return t2.prototype.Jn = function(t3, e, n2, r2) {
    var i = this;
    k(n2 < r2 && n2 >= 0 && r2 <= 11);
    var o = new pr("createOrUpgrade", e);
    n2 < 1 && r2 >= 1 && (function(t4) {
      t4.createObjectStore(Or.store);
    }(t3), function(t4) {
      t4.createObjectStore(Pr.store, {
        keyPath: Pr.keyPath
      }), t4.createObjectStore(Vr.store, {
        keyPath: Vr.keyPath,
        autoIncrement: true
      }).createIndex(Vr.userMutationsIndex, Vr.userMutationsKeyPath, {
        unique: true
      }), t4.createObjectStore(Cr.store);
    }(t3), Bi(t3), function(t4) {
      t4.createObjectStore(Ur.store);
    }(t3));
    var u = lr.resolve();
    return n2 < 3 && r2 >= 3 && (n2 !== 0 && (function(t4) {
      t4.deleteObjectStore(Fr.store), t4.deleteObjectStore(qr.store), t4.deleteObjectStore(jr.store);
    }(t3), Bi(t3)), u = u.next(function() {
      return function(t4) {
        var e2 = t4.store(jr.store), n3 = new jr(0, 0, X.min().j(), 0);
        return e2.put(jr.key, n3);
      }(o);
    })), n2 < 4 && r2 >= 4 && (n2 !== 0 && (u = u.next(function() {
      return function(t4, e2) {
        return e2.store(Vr.store).rs().next(function(n3) {
          t4.deleteObjectStore(Vr.store), t4.createObjectStore(Vr.store, {
            keyPath: Vr.keyPath,
            autoIncrement: true
          }).createIndex(Vr.userMutationsIndex, Vr.userMutationsKeyPath, {
            unique: true
          });
          var r3 = e2.store(Vr.store), i2 = n3.map(function(t5) {
            return r3.put(t5);
          });
          return lr.Mn(i2);
        });
      }(t3, o);
    })), u = u.next(function() {
      !function(t4) {
        t4.createObjectStore(Gr.store, {
          keyPath: Gr.keyPath
        });
      }(t3);
    })), n2 < 5 && r2 >= 5 && (u = u.next(function() {
      return i.zr(o);
    })), n2 < 6 && r2 >= 6 && (u = u.next(function() {
      return function(t4) {
        t4.createObjectStore(Mr.store);
      }(t3), i.Hr(o);
    })), n2 < 7 && r2 >= 7 && (u = u.next(function() {
      return i.Jr(o);
    })), n2 < 8 && r2 >= 8 && (u = u.next(function() {
      return i.Yr(t3, o);
    })), n2 < 9 && r2 >= 9 && (u = u.next(function() {
      !function(t4) {
        t4.objectStoreNames.contains("remoteDocumentChanges") && t4.deleteObjectStore("remoteDocumentChanges");
      }(t3), function(t4) {
        var e2 = t4.objectStore(Ur.store);
        e2.createIndex(Ur.readTimeIndex, Ur.readTimeIndexPath, {
          unique: false
        }), e2.createIndex(Ur.collectionReadTimeIndex, Ur.collectionReadTimeIndexPath, {
          unique: false
        });
      }(e);
    })), n2 < 10 && r2 >= 10 && (u = u.next(function() {
      return i.Xr(o);
    })), n2 < 11 && r2 >= 11 && (u = u.next(function() {
      !function(t4) {
        t4.createObjectStore(Br.store, {
          keyPath: Br.keyPath
        });
      }(t3), function(t4) {
        t4.createObjectStore(Qr.store, {
          keyPath: Qr.keyPath
        });
      }(t3);
    })), u;
  }, t2.prototype.Hr = function(t3) {
    var e = 0;
    return t3.store(Ur.store).hs(function(t4, n2) {
      e += _i(n2);
    }).next(function() {
      var n2 = new Mr(e);
      return t3.store(Mr.store).put(Mr.key, n2);
    });
  }, t2.prototype.zr = function(t3) {
    var e = this, n2 = t3.store(Pr.store), r2 = t3.store(Vr.store);
    return n2.rs().next(function(n3) {
      return lr.forEach(n3, function(n4) {
        var i = IDBKeyRange.bound([n4.userId, -1], [n4.userId, n4.lastAcknowledgedBatchId]);
        return r2.rs(Vr.userMutationsIndex, i).next(function(r3) {
          return lr.forEach(r3, function(r4) {
            k(r4.userId === n4.userId);
            var i2 = ii(e.Qt, r4);
            return bi(t3, n4.userId, i2).next(function() {
            });
          });
        });
      });
    });
  }, t2.prototype.Jr = function(t3) {
    var e = t3.store(Fr.store), n2 = t3.store(Ur.store);
    return t3.store(jr.store).get(jr.key).next(function(t4) {
      var r2 = [];
      return n2.hs(function(n3, i) {
        var o = new Z(n3), u = function(t5) {
          return [0, Ar(t5)];
        }(o);
        r2.push(e.get(u).next(function(n4) {
          return n4 ? lr.resolve() : function(n5) {
            return e.put(new Fr(0, Ar(n5), t4.highestListenSequenceNumber));
          }(o);
        }));
      }).next(function() {
        return lr.Mn(r2);
      });
    });
  }, t2.prototype.Yr = function(t3, e) {
    t3.createObjectStore(zr.store, {
      keyPath: zr.keyPath
    });
    var n2 = e.store(zr.store), r2 = new li(), i = function(t4) {
      if (r2.add(t4)) {
        var e2 = t4.tt(), i2 = t4.X();
        return n2.put({
          collectionId: e2,
          parent: Ar(i2)
        });
      }
    };
    return e.store(Ur.store).hs({
      us: true
    }, function(t4, e2) {
      var n3 = new Z(t4);
      return i(n3.X());
    }).next(function() {
      return e.store(Cr.store).hs({
        us: true
      }, function(t4, e2) {
        t4[0];
        var n3 = t4[1], r3 = (t4[2], xr(n3));
        return i(r3.X());
      });
    });
  }, t2.prototype.Xr = function(t3) {
    var e = this, n2 = t3.store(qr.store);
    return n2.hs(function(t4, r2) {
      var i = oi(r2), o = ui(e.Qt, i);
      return n2.put(o);
    });
  }, t2;
}();
function Bi(t2) {
  t2.createObjectStore(Fr.store, {
    keyPath: Fr.keyPath
  }).createIndex(Fr.documentTargetsIndex, Fr.documentTargetsKeyPath, {
    unique: true
  }), t2.createObjectStore(qr.store, {
    keyPath: qr.keyPath
  }).createIndex(qr.queryTargetsIndexName, qr.queryTargetsKeyPath, {
    unique: true
  }), t2.createObjectStore(jr.store);
}
var Qi = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.", Yi = function() {
  function t2(e, n2, r2, i, o, u, s, a, c, h2) {
    if (this.allowTabSynchronization = e, this.persistenceKey = n2, this.clientId = r2, this.Zr = o, this.window = u, this.document = s, this.eo = c, this.no = h2, this.so = null, this.io = false, this.isPrimary = false, this.networkEnabled = true, this.ro = null, this.inForeground = false, this.oo = null, this.co = null, this.ao = Number.NEGATIVE_INFINITY, this.uo = function(t3) {
      return Promise.resolve();
    }, !t2.Kn())
      throw new q(M.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
    this.Ti = new Ri(this, i), this.ho = n2 + "main", this.Qt = new Zr(a), this.lo = new dr(this.ho, 11, new Gi(this.Qt)), this._o = new Si(this.Ti, this.Qt), this.Ei = new pi(), this.fo = function(t3, e2) {
      return new Mi(t3, e2);
    }(this.Qt, this.Ei), this.wo = new ai(), this.window && this.window.localStorage ? this.Eo = this.window.localStorage : (this.Eo = null, h2 === false && A("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
  }
  return t2.prototype.start = function() {
    var t3 = this;
    return this.To().then(function() {
      if (!t3.isPrimary && !t3.allowTabSynchronization)
        throw new q(M.FAILED_PRECONDITION, Qi);
      return t3.Io(), t3.mo(), t3.Ao(), t3.runTransaction("getHighestListenSequenceNumber", "readonly", function(e) {
        return t3._o.Ki(e);
      });
    }).then(function(e) {
      t3.so = new H(e, t3.eo);
    }).then(function() {
      t3.io = true;
    }).catch(function(e) {
      return t3.lo && t3.lo.close(), Promise.reject(e);
    });
  }, t2.prototype.Ro = function(t3) {
    var e = this;
    return this.uo = function(n2) {
      return __awaiter(e, void 0, void 0, function() {
        return __generator(this, function(e2) {
          return this.Er ? [2, t3(n2)] : [2];
        });
      });
    }, t3(this.isPrimary);
  }, t2.prototype.Po = function(t3) {
    var e = this;
    this.lo.Xn(function(n2) {
      return __awaiter(e, void 0, void 0, function() {
        return __generator(this, function(e2) {
          switch (e2.label) {
            case 0:
              return n2.newVersion === null ? [4, t3()] : [3, 2];
            case 1:
              e2.sent(), e2.label = 2;
            case 2:
              return [2];
          }
        });
      });
    });
  }, t2.prototype.yo = function(t3) {
    var e = this;
    this.networkEnabled !== t3 && (this.networkEnabled = t3, this.Zr.Ps(function() {
      return __awaiter(e, void 0, void 0, function() {
        return __generator(this, function(t4) {
          switch (t4.label) {
            case 0:
              return this.Er ? [4, this.To()] : [3, 2];
            case 1:
              t4.sent(), t4.label = 2;
            case 2:
              return [2];
          }
        });
      });
    }));
  }, t2.prototype.To = function() {
    var t3 = this;
    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", function(e) {
      return Ki(e).put(new Gr(t3.clientId, Date.now(), t3.networkEnabled, t3.inForeground)).next(function() {
        if (t3.isPrimary)
          return t3.Vo(e).next(function(e2) {
            e2 || (t3.isPrimary = false, t3.Zr.po(function() {
              return t3.uo(false);
            }));
          });
      }).next(function() {
        return t3.bo(e);
      }).next(function(n2) {
        return t3.isPrimary && !n2 ? t3.vo(e).next(function() {
          return false;
        }) : !!n2 && t3.So(e).next(function() {
          return true;
        });
      });
    }).catch(function(e) {
      if (mr(e))
        return N("IndexedDbPersistence", "Failed to extend owner lease: ", e), t3.isPrimary;
      if (!t3.allowTabSynchronization)
        throw e;
      return N("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), false;
    }).then(function(e) {
      t3.isPrimary !== e && t3.Zr.po(function() {
        return t3.uo(e);
      }), t3.isPrimary = e;
    });
  }, t2.prototype.Vo = function(t3) {
    var e = this;
    return Hi(t3).get(Or.key).next(function(t4) {
      return lr.resolve(e.Do(t4));
    });
  }, t2.prototype.Co = function(t3) {
    return Ki(t3).delete(this.clientId);
  }, t2.prototype.xo = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t3, e, n2, r2, i = this;
      return __generator(this, function(o) {
        switch (o.label) {
          case 0:
            return !this.isPrimary || this.No(this.ao, 18e5) ? [3, 2] : (this.ao = Date.now(), [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function(t4) {
              var e2 = Kr(t4, Gr.store);
              return e2.rs().next(function(t5) {
                var n3 = i.$o(t5, 18e5), r3 = t5.filter(function(t6) {
                  return n3.indexOf(t6) === -1;
                });
                return lr.forEach(r3, function(t6) {
                  return e2.delete(t6.clientId);
                }).next(function() {
                  return r3;
                });
              });
            }).catch(function() {
              return [];
            })]);
          case 1:
            if (t3 = o.sent(), this.Eo)
              for (e = 0, n2 = t3; e < n2.length; e++)
                r2 = n2[e], this.Eo.removeItem(this.Fo(r2.clientId));
            o.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, t2.prototype.Ao = function() {
    var t3 = this;
    this.co = this.Zr.Tr("client_metadata_refresh", 4e3, function() {
      return t3.To().then(function() {
        return t3.xo();
      }).then(function() {
        return t3.Ao();
      });
    });
  }, t2.prototype.Do = function(t3) {
    return !!t3 && t3.ownerId === this.clientId;
  }, t2.prototype.bo = function(t3) {
    var e = this;
    return this.no ? lr.resolve(true) : Hi(t3).get(Or.key).next(function(n2) {
      if (n2 !== null && e.No(n2.leaseTimestampMs, 5e3) && !e.Oo(n2.ownerId)) {
        if (e.Do(n2) && e.networkEnabled)
          return true;
        if (!e.Do(n2)) {
          if (!n2.allowTabSynchronization)
            throw new q(M.FAILED_PRECONDITION, Qi);
          return false;
        }
      }
      return !(!e.networkEnabled || !e.inForeground) || Ki(t3).rs().next(function(t4) {
        return e.$o(t4, 5e3).find(function(t5) {
          if (e.clientId !== t5.clientId) {
            var n3 = !e.networkEnabled && t5.networkEnabled, r2 = !e.inForeground && t5.inForeground, i = e.networkEnabled === t5.networkEnabled;
            if (n3 || r2 && i)
              return true;
          }
          return false;
        }) === void 0;
      });
    }).next(function(t4) {
      return e.isPrimary !== t4 && N("IndexedDbPersistence", "Client " + (t4 ? "is" : "is not") + " eligible for a primary lease."), t4;
    });
  }, t2.prototype.ko = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t3 = this;
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return this.io = false, this.Mo(), this.co && (this.co.cancel(), this.co = null), this.Lo(), this.Bo(), [4, this.lo.runTransaction("shutdown", "readwrite", [Or.store, Gr.store], function(e2) {
              var n2 = new Hr(e2, H.q);
              return t3.vo(n2).next(function() {
                return t3.Co(n2);
              });
            })];
          case 1:
            return e.sent(), this.lo.close(), this.qo(), [2];
        }
      });
    });
  }, t2.prototype.$o = function(t3, e) {
    var n2 = this;
    return t3.filter(function(t4) {
      return n2.No(t4.updateTimeMs, e) && !n2.Oo(t4.clientId);
    });
  }, t2.prototype.Uo = function() {
    var t3 = this;
    return this.runTransaction("getActiveClients", "readonly", function(e) {
      return Ki(e).rs().next(function(e2) {
        return t3.$o(e2, 18e5).map(function(t4) {
          return t4.clientId;
        });
      });
    });
  }, Object.defineProperty(t2.prototype, "Er", {
    get: function() {
      return this.io;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.Qo = function(t3) {
    return Ii.mi(t3, this.Qt, this.Ei, this.Ti);
  }, t2.prototype.Sr = function() {
    return this._o;
  }, t2.prototype.$r = function() {
    return this.fo;
  }, t2.prototype.Ko = function() {
    return this.Ei;
  }, t2.prototype.Wo = function() {
    return this.wo;
  }, t2.prototype.runTransaction = function(t3, e, n2) {
    var r2 = this;
    N("IndexedDbPersistence", "Starting transaction:", t3);
    var i, o = e === "readonly" ? "readonly" : "readwrite";
    return this.lo.runTransaction(t3, o, Yr, function(o2) {
      return i = new Hr(o2, r2.so ? r2.so.next() : H.q), e === "readwrite-primary" ? r2.Vo(i).next(function(t4) {
        return !!t4 || r2.bo(i);
      }).next(function(e2) {
        if (!e2)
          throw A("Failed to obtain primary lease for action '" + t3 + "'."), r2.isPrimary = false, r2.Zr.po(function() {
            return r2.uo(false);
          }), new q(M.FAILED_PRECONDITION, Tr);
        return n2(i);
      }).next(function(t4) {
        return r2.So(i).next(function() {
          return t4;
        });
      }) : r2.jo(i).next(function() {
        return n2(i);
      });
    }).then(function(t4) {
      return i.Vs(), t4;
    });
  }, t2.prototype.jo = function(t3) {
    var e = this;
    return Hi(t3).get(Or.key).next(function(t4) {
      if (t4 !== null && e.No(t4.leaseTimestampMs, 5e3) && !e.Oo(t4.ownerId) && !e.Do(t4) && !(e.no || e.allowTabSynchronization && t4.allowTabSynchronization))
        throw new q(M.FAILED_PRECONDITION, Qi);
    });
  }, t2.prototype.So = function(t3) {
    var e = new Or(this.clientId, this.allowTabSynchronization, Date.now());
    return Hi(t3).put(Or.key, e);
  }, t2.Kn = function() {
    return dr.Kn();
  }, t2.prototype.vo = function(t3) {
    var e = this, n2 = Hi(t3);
    return n2.get(Or.key).next(function(t4) {
      return e.Do(t4) ? (N("IndexedDbPersistence", "Releasing primary lease."), n2.delete(Or.key)) : lr.resolve();
    });
  }, t2.prototype.No = function(t3, e) {
    var n2 = Date.now();
    return !(t3 < n2 - e || t3 > n2 && (A("Detected an update time that is in the future: " + t3 + " > " + n2), 1));
  }, t2.prototype.Io = function() {
    var t3 = this;
    this.document !== null && typeof this.document.addEventListener == "function" && (this.oo = function() {
      t3.Zr.Ps(function() {
        return t3.inForeground = t3.document.visibilityState === "visible", t3.To();
      });
    }, this.document.addEventListener("visibilitychange", this.oo), this.inForeground = this.document.visibilityState === "visible");
  }, t2.prototype.Lo = function() {
    this.oo && (this.document.removeEventListener("visibilitychange", this.oo), this.oo = null);
  }, t2.prototype.mo = function() {
    var t3, e = this;
    typeof ((t3 = this.window) === null || t3 === void 0 ? void 0 : t3.addEventListener) == "function" && (this.ro = function() {
      e.Mo(), e.Zr.Ps(function() {
        return e.ko();
      });
    }, this.window.addEventListener("unload", this.ro));
  }, t2.prototype.Bo = function() {
    this.ro && (this.window.removeEventListener("unload", this.ro), this.ro = null);
  }, t2.prototype.Oo = function(t3) {
    var e;
    try {
      var n2 = ((e = this.Eo) === null || e === void 0 ? void 0 : e.getItem(this.Fo(t3))) !== null;
      return N("IndexedDbPersistence", "Client '" + t3 + "' " + (n2 ? "is" : "is not") + " zombied in LocalStorage"), n2;
    } catch (t4) {
      return A("IndexedDbPersistence", "Failed to get zombied client id.", t4), false;
    }
  }, t2.prototype.Mo = function() {
    if (this.Eo)
      try {
        this.Eo.setItem(this.Fo(this.clientId), String(Date.now()));
      } catch (t3) {
        A("Failed to set zombie client id.", t3);
      }
  }, t2.prototype.qo = function() {
    if (this.Eo)
      try {
        this.Eo.removeItem(this.Fo(this.clientId));
      } catch (t3) {
      }
  }, t2.prototype.Fo = function(t3) {
    return "firestore_zombie_" + this.persistenceKey + "_" + t3;
  }, t2;
}();
function Hi(t2) {
  return Kr(t2, Or.store);
}
function Ki(t2) {
  return Kr(t2, Gr.store);
}
function Xi(t2, e) {
  var n2 = t2.projectId;
  return t2.o || (n2 += "." + t2.database), "firestore/" + e + "/" + n2 + "/";
}
var Zi = function() {
  function t2(t3, e, n2) {
    this.fo = t3, this.zo = e, this.Ei = n2;
  }
  return t2.prototype.Ho = function(t3, e) {
    var n2 = this;
    return this.zo.bi(t3, e).next(function(r2) {
      return n2.Jo(t3, e, r2);
    });
  }, t2.prototype.Jo = function(t3, e, n2) {
    return this.fo._i(t3, e).next(function(t4) {
      for (var r2 = 0, i = n2; r2 < i.length; r2++) {
        t4 = i[r2].Cs(e, t4);
      }
      return t4;
    });
  }, t2.prototype.Yo = function(t3, e, n2) {
    var r2 = fn();
    return e.forEach(function(t4, e2) {
      for (var i = 0, o = n2; i < o.length; i++) {
        e2 = o[i].Cs(t4, e2);
      }
      r2 = r2.zt(t4, e2);
    }), r2;
  }, t2.prototype.Xo = function(t3, e) {
    var n2 = this;
    return this.fo.getEntries(t3, e).next(function(e2) {
      return n2.Zo(t3, e2);
    });
  }, t2.prototype.Zo = function(t3, e) {
    var n2 = this;
    return this.zo.vi(t3, e).next(function(r2) {
      var i = n2.Yo(t3, e, r2), o = hn();
      return i.forEach(function(t4, e2) {
        e2 || (e2 = new Vt(t4, X.min())), o = o.zt(t4, e2);
      }), o;
    });
  }, t2.prototype.Kr = function(t3, e, n2) {
    return function(t4) {
      return tt.wt(t4.path) && t4.collectionGroup === null && t4.filters.length === 0;
    }(e) ? this.tc(t3, e.path) : ae(e) ? this.ec(t3, e, n2) : this.nc(t3, e, n2);
  }, t2.prototype.tc = function(t3, e) {
    return this.Ho(t3, new tt(e)).next(function(t4) {
      var e2 = pn();
      return t4 instanceof Pt && (e2 = e2.zt(t4.key, t4)), e2;
    });
  }, t2.prototype.ec = function(t3, e, n2) {
    var r2 = this, i = e.collectionGroup, o = pn();
    return this.Ei.Us(t3, i).next(function(u) {
      return lr.forEach(u, function(u2) {
        var s = function(t4, e2) {
          return new ee(e2, null, t4.xt.slice(), t4.filters.slice(), t4.limit, t4.limitType, t4.startAt, t4.endAt);
        }(e, u2.child(i));
        return r2.nc(t3, s, n2).next(function(t4) {
          t4.forEach(function(t5, e2) {
            o = o.zt(t5, e2);
          });
        });
      }).next(function() {
        return o;
      });
    });
  }, t2.prototype.nc = function(t3, e, n2) {
    var r2, i, o = this;
    return this.fo.Kr(t3, e, n2).next(function(n3) {
      return r2 = n3, o.zo.Di(t3, e);
    }).next(function(e2) {
      return i = e2, o.sc(t3, i, r2).next(function(t4) {
        r2 = t4;
        for (var e3 = 0, n3 = i; e3 < n3.length; e3++)
          for (var o2 = n3[e3], u = 0, s = o2.mutations; u < s.length; u++) {
            var a = s[u], c = a.key, h2 = Fe(a, r2.get(c), o2.vs);
            r2 = h2 instanceof Pt ? r2.zt(c, h2) : r2.remove(c);
          }
      });
    }).next(function() {
      return r2.forEach(function(t4, n3) {
        ve(e, n3) || (r2 = r2.remove(t4));
      }), r2;
    });
  }, t2.prototype.sc = function(t3, e, n2) {
    for (var r2 = mn(), i = 0, o = e; i < o.length; i++)
      for (var u = 0, s = o[i].mutations; u < s.length; u++) {
        var a = s[u];
        a instanceof Qe && n2.get(a.key) === null && (r2 = r2.add(a.key));
      }
    var c = n2;
    return this.fo.getEntries(t3, r2).next(function(t4) {
      return t4.forEach(function(t5, e2) {
        e2 !== null && e2 instanceof Pt && (c = c.zt(t5, e2));
      }), c;
    });
  }, t2;
}(), Ji = function() {
  function t2(t3, e, n2, r2) {
    this.targetId = t3, this.fromCache = e, this.ic = n2, this.rc = r2;
  }
  return t2.oc = function(e, n2) {
    for (var r2 = mn(), i = mn(), o = 0, u = n2.docChanges; o < u.length; o++) {
      var s = u[o];
      switch (s.type) {
        case 0:
          r2 = r2.add(s.doc.key);
          break;
        case 1:
          i = i.add(s.doc.key);
      }
    }
    return new t2(e, n2.fromCache, r2, i);
  }, t2;
}(), $i = function() {
  function t2() {
  }
  return t2.prototype.cc = function(t3) {
    this.ac = t3;
  }, t2.prototype.Kr = function(t3, n2, r2, i) {
    var o = this;
    return function(t4) {
      return t4.filters.length === 0 && t4.limit === null && t4.startAt == null && t4.endAt == null && (t4.xt.length === 0 || t4.xt.length === 1 && t4.xt[0].field.ut());
    }(n2) || r2.isEqual(X.min()) ? this.uc(t3, n2) : this.ac.Xo(t3, i).next(function(u) {
      var s = o.hc(n2, u);
      return (ie(n2) || oe(n2)) && o.lc(n2.limitType, s, i, r2) ? o.uc(t3, n2) : (T() <= LogLevel.DEBUG && N("QueryEngine", "Re-using previous result from %s to execute query: %s", r2.toString(), de(n2)), o.ac.Kr(t3, n2, r2).next(function(t4) {
        return s.forEach(function(e) {
          t4 = t4.zt(e.key, e);
        }), t4;
      }));
    });
  }, t2.prototype.hc = function(t3, e) {
    var n2 = new sn(ye(t3));
    return e.forEach(function(e2, r2) {
      r2 instanceof Pt && ve(t3, r2) && (n2 = n2.add(r2));
    }), n2;
  }, t2.prototype.lc = function(t3, e, n2, r2) {
    if (n2.size !== e.size)
      return true;
    var i = t3 === "F" ? e.last() : e.first();
    return !!i && (i.hasPendingWrites || i.version._(r2) > 0);
  }, t2.prototype.uc = function(t3, n2) {
    return T() <= LogLevel.DEBUG && N("QueryEngine", "Using full collection scan to execute query:", de(n2)), this.ac.Kr(t3, n2, X.min());
  }, t2;
}(), to = function() {
  function t2(t3, e, n2, r2) {
    this.persistence = t3, this._c = e, this.Qt = r2, this.fc = new rn(C), this.dc = new gi(function(t4) {
      return Ut(t4);
    }, Mt), this.wc = X.min(), this.zo = t3.Qo(n2), this.Ec = t3.$r(), this._o = t3.Sr(), this.Tc = new Zi(this.Ec, this.zo, this.persistence.Ko()), this.wo = t3.Wo(), this._c.cc(this.Tc);
  }
  return t2.prototype.Ir = function(t3) {
    var e = this;
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function(n2) {
      return t3.Vr(n2, e.fc);
    });
  }, t2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function eo(t2, e, n2, r2) {
  return new to(t2, e, n2, r2);
}
function no(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    var n2, r2, i, o;
    return __generator(this, function(u) {
      switch (u.label) {
        case 0:
          return n2 = O(t2), r2 = n2.zo, i = n2.Tc, [4, n2.persistence.runTransaction("Handle user change", "readonly", function(t3) {
            var o2;
            return n2.zo.pi(t3).next(function(u2) {
              return o2 = u2, r2 = n2.persistence.Qo(e), i = new Zi(n2.Ec, r2, n2.persistence.Ko()), r2.pi(t3);
            }).next(function(e2) {
              for (var n3 = [], r3 = [], u2 = mn(), s = 0, a = o2; s < a.length; s++) {
                var c = a[s];
                n3.push(c.batchId);
                for (var h2 = 0, f = c.mutations; h2 < f.length; h2++) {
                  var l = f[h2];
                  u2 = u2.add(l.key);
                }
              }
              for (var p2 = 0, d = e2; p2 < d.length; p2++) {
                var v2 = d[p2];
                r3.push(v2.batchId);
                for (var y2 = 0, m = v2.mutations; y2 < m.length; y2++) {
                  var g = m[y2];
                  u2 = u2.add(g.key);
                }
              }
              return i.Xo(t3, u2).next(function(t4) {
                return {
                  Ic: t4,
                  mc: n3,
                  Ac: r3
                };
              });
            });
          })];
        case 1:
          return o = u.sent(), [2, (n2.zo = r2, n2.Tc = i, n2._c.cc(n2.Tc), o)];
      }
    });
  });
}
function ro(t2, e) {
  var n2 = O(t2);
  return n2.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function(t3) {
    var r2 = e.batch.keys(), i = n2.Ec.Nr({
      Wr: true
    });
    return function(t4, e2, n3, r3) {
      var i2 = n3.batch, o = i2.keys(), u = lr.resolve();
      return o.forEach(function(t5) {
        u = u.next(function() {
          return r3._i(e2, t5);
        }).next(function(e3) {
          var o2 = e3, u2 = n3.$s.get(t5);
          k(u2 !== null), (!o2 || o2.version._(u2) < 0) && ((o2 = i2.Ss(t5, o2, n3)) && r3.ai(o2, n3.Ns));
        });
      }), u.next(function() {
        return t4.zo.Ci(e2, i2);
      });
    }(n2, t3, e, i).next(function() {
      return i.apply(t3);
    }).next(function() {
      return n2.zo.$i(t3);
    }).next(function() {
      return n2.Tc.Xo(t3, r2);
    });
  });
}
function io(t2) {
  var e = O(t2);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", function(t3) {
    return e._o.Qi(t3);
  });
}
function oo(t2, e) {
  var n2 = O(t2), r2 = e.Ot, i = n2.fc;
  return n2.persistence.runTransaction("Apply remote event", "readwrite-primary", function(t3) {
    var o = n2.Ec.Nr({
      Wr: true
    });
    i = n2.fc;
    var u = [];
    e.$e.forEach(function(e2, o2) {
      var s2 = i.get(o2);
      if (s2) {
        u.push(n2._o.sr(t3, e2.Qe, o2).next(function() {
          return n2._o.er(t3, e2.qe, o2);
        }));
        var a2 = e2.resumeToken;
        if (a2.l() > 0) {
          var c = s2.Mt(a2, r2).kt(t3.bs);
          i = i.zt(o2, c), function(t4, e3, n3) {
            return k(e3.resumeToken.l() > 0), t4.resumeToken.l() === 0 || (e3.Ot.W() - t4.Ot.W() >= 3e8 || n3.qe.size + n3.Ue.size + n3.Qe.size > 0);
          }(s2, c, e2) && u.push(n2._o.Hi(t3, c));
        }
      }
    });
    var s = hn();
    if (e.Oe.forEach(function(r3, i2) {
      e.ke.has(r3) && u.push(n2.persistence.Ti.Fr(t3, r3));
    }), u.push(uo(t3, o, e.Oe, r2, void 0).next(function(t4) {
      s = t4;
    })), !r2.isEqual(X.min())) {
      var a = n2._o.Qi(t3).next(function(e2) {
        return n2._o.Wi(t3, t3.bs, r2);
      });
      u.push(a);
    }
    return lr.Mn(u).next(function() {
      return o.apply(t3);
    }).next(function() {
      return n2.Tc.Zo(t3, s);
    });
  }).then(function(t3) {
    return n2.fc = i, t3;
  });
}
function uo(t2, e, n2, r2, i) {
  var o = mn();
  return n2.forEach(function(t3) {
    return o = o.add(t3);
  }), e.getEntries(t2, o).next(function(t3) {
    var o2 = hn();
    return n2.forEach(function(n3, u) {
      var s = t3.get(n3), a = (i == null ? void 0 : i.get(n3)) || r2;
      u instanceof Vt && u.version.isEqual(X.min()) ? (e.li(n3, a), o2 = o2.zt(n3, u)) : s == null || u.version._(s.version) > 0 || u.version._(s.version) === 0 && s.hasPendingWrites ? (e.ai(u, a), o2 = o2.zt(n3, u)) : N("LocalStore", "Ignoring outdated watch update for ", n3, ". Current version:", s.version, " Watch version:", u.version);
    }), o2;
  });
}
function so(t2, e) {
  var n2 = O(t2);
  return n2.persistence.runTransaction("Get next mutation batch", "readonly", function(t3) {
    return e === void 0 && (e = -1), n2.zo.gi(t3, e);
  });
}
function ao(t2, e) {
  var n2 = O(t2);
  return n2.persistence.runTransaction("Allocate target", "readwrite", function(t3) {
    var r2;
    return n2._o.tr(t3, e).next(function(i) {
      return i ? (r2 = i, lr.resolve(r2)) : n2._o.Bi(t3).next(function(i2) {
        return r2 = new ge(e, i2, 0, t3.bs), n2._o.ji(t3, r2).next(function() {
          return r2;
        });
      });
    });
  }).then(function(t3) {
    var r2 = n2.fc.get(t3.targetId);
    return (r2 === null || t3.Ot._(r2.Ot) > 0) && (n2.fc = n2.fc.zt(t3.targetId, t3), n2.dc.set(e, t3.targetId)), t3;
  });
}
function co(t2, e, n2) {
  return __awaiter(this, void 0, void 0, function() {
    var r2, i, o, u;
    return __generator(this, function(s) {
      switch (s.label) {
        case 0:
          r2 = O(t2), i = r2.fc.get(e), o = n2 ? "readwrite" : "readwrite-primary", s.label = 1;
        case 1:
          return s.trys.push([1, 4, , 5]), n2 ? [3, 3] : [4, r2.persistence.runTransaction("Release target", o, function(t3) {
            return r2.persistence.Ti.removeTarget(t3, i);
          })];
        case 2:
          s.sent(), s.label = 3;
        case 3:
          return [3, 5];
        case 4:
          if (!mr(u = s.sent()))
            throw u;
          return N("LocalStore", "Failed to update sequence numbers for target " + e + ": " + u), [3, 5];
        case 5:
          return r2.fc = r2.fc.remove(e), r2.dc.delete(i.target), [2];
      }
    });
  });
}
function ho(t2, e, n2) {
  var r2 = O(t2), i = X.min(), o = mn();
  return r2.persistence.runTransaction("Execute query", "readonly", function(t3) {
    return function(t4, e2, n3) {
      var r3 = O(t4), i2 = r3.dc.get(n3);
      return i2 !== void 0 ? lr.resolve(r3.fc.get(i2)) : r3._o.tr(e2, n3);
    }(r2, t3, he(e)).next(function(e2) {
      if (e2)
        return i = e2.lastLimboFreeSnapshotVersion, r2._o.rr(t3, e2.targetId).next(function(t4) {
          o = t4;
        });
    }).next(function() {
      return r2._c.Kr(t3, e, n2 ? i : X.min(), n2 ? o : mn());
    }).next(function(t4) {
      return {
        documents: t4,
        Rc: o
      };
    });
  });
}
function fo(t2, e) {
  var n2 = O(t2), r2 = O(n2._o), i = n2.fc.get(e);
  return i ? Promise.resolve(i.target) : n2.persistence.runTransaction("Get target data", "readonly", function(t3) {
    return r2.Sn(t3, e).next(function(t4) {
      return t4 ? t4.target : null;
    });
  });
}
function lo(t2) {
  var e = O(t2);
  return e.persistence.runTransaction("Get new document changes", "readonly", function(t3) {
    return function(t4, e2, n2) {
      var r2 = O(t4), i = hn(), o = ti(n2), u = ji(e2), s = IDBKeyRange.lowerBound(o, true);
      return u.hs({
        index: Ur.readTimeIndex,
        range: s
      }, function(t5, e3) {
        var n3 = Jr(r2.Qt, e3);
        i = i.zt(n3.key, n3), o = e3.readTime;
      }).next(function() {
        return {
          Go: i,
          readTime: ei(o)
        };
      });
    }(e.Ec, t3, e.wc);
  }).then(function(t3) {
    var n2 = t3.Go, r2 = t3.readTime;
    return e.wc = r2, n2;
  });
}
function po(t2) {
  return __awaiter(this, void 0, void 0, function() {
    var e;
    return __generator(this, function(n2) {
      return [2, (e = O(t2)).persistence.runTransaction("Synchronize last document change read time", "readonly", function(t3) {
        return function(t4) {
          var e2 = ji(t4), n3 = X.min();
          return e2.hs({
            index: Ur.readTimeIndex,
            reverse: true
          }, function(t5, e3, r2) {
            e3.readTime && (n3 = ei(e3.readTime)), r2.done();
          }).next(function() {
            return n3;
          });
        }(t3);
      }).then(function(t3) {
        e.wc = t3;
      })];
    });
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var mo = function() {
  function t2(t3) {
    this.Qt = t3, this.Vc = new Map(), this.bc = new Map();
  }
  return t2.prototype.Os = function(t3, e) {
    return lr.resolve(this.Vc.get(e));
  }, t2.prototype.ks = function(t3, e) {
    var n2;
    return this.Vc.set(e.id, {
      id: (n2 = e).id,
      version: n2.version,
      createTime: Mn(n2.createTime)
    }), lr.resolve();
  }, t2.prototype.Ms = function(t3, e) {
    return lr.resolve(this.bc.get(e));
  }, t2.prototype.Ls = function(t3, e) {
    return this.bc.set(e.name, function(t4) {
      return {
        name: t4.name,
        query: si(t4.bundledQuery),
        readTime: Mn(t4.readTime)
      };
    }(e)), lr.resolve();
  }, t2;
}(), go = function() {
  function t2() {
    this.vc = new sn(wo.Sc), this.Dc = new sn(wo.Cc);
  }
  return t2.prototype.et = function() {
    return this.vc.et();
  }, t2.prototype.nr = function(t3, e) {
    var n2 = new wo(t3, e);
    this.vc = this.vc.add(n2), this.Dc = this.Dc.add(n2);
  }, t2.prototype.xc = function(t3, e) {
    var n2 = this;
    t3.forEach(function(t4) {
      return n2.nr(t4, e);
    });
  }, t2.prototype.ir = function(t3, e) {
    this.Nc(new wo(t3, e));
  }, t2.prototype.$c = function(t3, e) {
    var n2 = this;
    t3.forEach(function(t4) {
      return n2.ir(t4, e);
    });
  }, t2.prototype.Fc = function(t3) {
    var e = this, n2 = new tt(new Z([])), r2 = new wo(n2, t3), i = new wo(n2, t3 + 1), o = [];
    return this.Dc.me([r2, i], function(t4) {
      e.Nc(t4), o.push(t4.key);
    }), o;
  }, t2.prototype.Oc = function() {
    var t3 = this;
    this.vc.forEach(function(e) {
      return t3.Nc(e);
    });
  }, t2.prototype.Nc = function(t3) {
    this.vc = this.vc.delete(t3), this.Dc = this.Dc.delete(t3);
  }, t2.prototype.kc = function(t3) {
    var e = new tt(new Z([])), n2 = new wo(e, t3), r2 = new wo(e, t3 + 1), i = mn();
    return this.Dc.me([n2, r2], function(t4) {
      i = i.add(t4.key);
    }), i;
  }, t2.prototype.Fi = function(t3) {
    var e = new wo(t3, 0), n2 = this.vc.Re(e);
    return n2 !== null && t3.isEqual(n2.key);
  }, t2;
}(), wo = function() {
  function t2(t3, e) {
    this.key = t3, this.Mc = e;
  }
  return t2.Sc = function(t3, e) {
    return tt.H(t3.key, e.key) || C(t3.Mc, e.Mc);
  }, t2.Cc = function(t3, e) {
    return C(t3.Mc, e.Mc) || tt.H(t3.key, e.key);
  }, t2;
}(), bo = function() {
  function t2(t3, e) {
    this.Ei = t3, this.Ti = e, this.zo = [], this.Lc = 1, this.Bc = new sn(wo.Sc);
  }
  return t2.prototype.Ai = function(t3) {
    return lr.resolve(this.zo.length === 0);
  }, t2.prototype.Ri = function(t3, e, n2, r2) {
    var i = this.Lc;
    this.Lc++, this.zo.length > 0 && this.zo[this.zo.length - 1];
    var o = new Xr(i, e, n2, r2);
    this.zo.push(o);
    for (var u = 0, s = r2; u < s.length; u++) {
      var a = s[u];
      this.Bc = this.Bc.add(new wo(a.key, i)), this.Ei.qs(t3, a.key.path.X());
    }
    return lr.resolve(o);
  }, t2.prototype.Pi = function(t3, e) {
    return lr.resolve(this.qc(e));
  }, t2.prototype.gi = function(t3, e) {
    var n2 = e + 1, r2 = this.Uc(n2), i = r2 < 0 ? 0 : r2;
    return lr.resolve(this.zo.length > i ? this.zo[i] : null);
  }, t2.prototype.Vi = function() {
    return lr.resolve(this.zo.length === 0 ? -1 : this.Lc - 1);
  }, t2.prototype.pi = function(t3) {
    return lr.resolve(this.zo.slice());
  }, t2.prototype.bi = function(t3, e) {
    var n2 = this, r2 = new wo(e, 0), i = new wo(e, Number.POSITIVE_INFINITY), o = [];
    return this.Bc.me([r2, i], function(t4) {
      var e2 = n2.qc(t4.Mc);
      o.push(e2);
    }), lr.resolve(o);
  }, t2.prototype.vi = function(t3, e) {
    var n2 = this, r2 = new sn(C);
    return e.forEach(function(t4) {
      var e2 = new wo(t4, 0), i = new wo(t4, Number.POSITIVE_INFINITY);
      n2.Bc.me([e2, i], function(t5) {
        r2 = r2.add(t5.Mc);
      });
    }), lr.resolve(this.Qc(r2));
  }, t2.prototype.Di = function(t3, e) {
    var n2 = e.path, r2 = n2.length + 1, i = n2;
    tt.wt(i) || (i = i.child(""));
    var o = new wo(new tt(i), 0), u = new sn(C);
    return this.Bc.Ae(function(t4) {
      var e2 = t4.key.path;
      return !!n2.nt(e2) && (e2.length === r2 && (u = u.add(t4.Mc)), true);
    }, o), lr.resolve(this.Qc(u));
  }, t2.prototype.Qc = function(t3) {
    var e = this, n2 = [];
    return t3.forEach(function(t4) {
      var r2 = e.qc(t4);
      r2 !== null && n2.push(r2);
    }), n2;
  }, t2.prototype.Ci = function(t3, e) {
    var n2 = this;
    k(this.Kc(e.batchId, "removed") === 0), this.zo.shift();
    var r2 = this.Bc;
    return lr.forEach(e.mutations, function(i) {
      var o = new wo(i.key, e.batchId);
      return r2 = r2.delete(o), n2.Ti.Ni(t3, i.key);
    }).next(function() {
      n2.Bc = r2;
    });
  }, t2.prototype.xi = function(t3) {
  }, t2.prototype.Fi = function(t3, e) {
    var n2 = new wo(e, 0), r2 = this.Bc.Re(n2);
    return lr.resolve(e.isEqual(r2 && r2.key));
  }, t2.prototype.$i = function(t3) {
    return this.zo.length, lr.resolve();
  }, t2.prototype.Kc = function(t3, e) {
    return this.Uc(t3);
  }, t2.prototype.Uc = function(t3) {
    return this.zo.length === 0 ? 0 : t3 - this.zo[0].batchId;
  }, t2.prototype.qc = function(t3) {
    var e = this.Uc(t3);
    return e < 0 || e >= this.zo.length ? null : this.zo[e];
  }, t2;
}(), _o = function() {
  function t2(t3, e) {
    this.Ei = t3, this.Wc = e, this.docs = new rn(tt.H), this.size = 0;
  }
  return t2.prototype.ai = function(t3, e, n2) {
    var r2 = e.key, i = this.docs.get(r2), o = i ? i.size : 0, u = this.Wc(e);
    return this.docs = this.docs.zt(r2, {
      hi: e,
      size: u,
      readTime: n2
    }), this.size += u - o, this.Ei.qs(t3, r2.path.X());
  }, t2.prototype.li = function(t3) {
    var e = this.docs.get(t3);
    e && (this.docs = this.docs.remove(t3), this.size -= e.size);
  }, t2.prototype._i = function(t3, e) {
    var n2 = this.docs.get(e);
    return lr.resolve(n2 ? n2.hi : null);
  }, t2.prototype.getEntries = function(t3, e) {
    var n2 = this, r2 = fn();
    return e.forEach(function(t4) {
      var e2 = n2.docs.get(t4);
      r2 = r2.zt(t4, e2 ? e2.hi : null);
    }), lr.resolve(r2);
  }, t2.prototype.Kr = function(t3, e, n2) {
    for (var r2 = pn(), i = new tt(e.path.child("")), o = this.docs.ee(i); o.ce(); ) {
      var u = o.oe(), s = u.key, a = u.value, c = a.hi, h2 = a.readTime;
      if (!e.path.nt(s.path))
        break;
      h2._(n2) <= 0 || c instanceof Pt && ve(e, c) && (r2 = r2.zt(c.key, c));
    }
    return lr.resolve(r2);
  }, t2.prototype.jc = function(t3, e) {
    return lr.forEach(this.docs, function(t4) {
      return e(t4);
    });
  }, t2.prototype.Nr = function(t3) {
    return new Io(this);
  }, t2.prototype.Or = function(t3) {
    return lr.resolve(this.size);
  }, t2;
}(), Io = function(t2) {
  function e(e2) {
    var n2 = this;
    return (n2 = t2.call(this) || this).jr = e2, n2;
  }
  return __extends$1(e, t2), e.prototype.wi = function(t3) {
    var e2 = this, n2 = [];
    return this.ri.forEach(function(r2, i) {
      i && i.hi ? n2.push(e2.jr.ai(t3, i.hi, e2.ci(r2))) : e2.jr.li(r2);
    }), lr.Mn(n2);
  }, e.prototype.fi = function(t3, e2) {
    return this.jr._i(t3, e2);
  }, e.prototype.di = function(t3, e2) {
    return this.jr.getEntries(t3, e2);
  }, e;
}(wi), Eo = function() {
  function t2(t3) {
    this.persistence = t3, this.Gc = new gi(function(t4) {
      return Ut(t4);
    }, Mt), this.lastRemoteSnapshotVersion = X.min(), this.highestTargetId = 0, this.zc = 0, this.Hc = new go(), this.targetCount = 0, this.Jc = Di.Mi();
  }
  return t2.prototype.In = function(t3, e) {
    return this.Gc.forEach(function(t4, n2) {
      return e(n2);
    }), lr.resolve();
  }, t2.prototype.Qi = function(t3) {
    return lr.resolve(this.lastRemoteSnapshotVersion);
  }, t2.prototype.Ki = function(t3) {
    return lr.resolve(this.zc);
  }, t2.prototype.Bi = function(t3) {
    return this.highestTargetId = this.Jc.next(), lr.resolve(this.highestTargetId);
  }, t2.prototype.Wi = function(t3, e, n2) {
    return n2 && (this.lastRemoteSnapshotVersion = n2), e > this.zc && (this.zc = e), lr.resolve();
  }, t2.prototype.Gi = function(t3) {
    this.Gc.set(t3.target, t3);
    var e = t3.targetId;
    e > this.highestTargetId && (this.Jc = new Di(e), this.highestTargetId = e), t3.sequenceNumber > this.zc && (this.zc = t3.sequenceNumber);
  }, t2.prototype.ji = function(t3, e) {
    return this.Gi(e), this.targetCount += 1, lr.resolve();
  }, t2.prototype.Hi = function(t3, e) {
    return this.Gi(e), lr.resolve();
  }, t2.prototype.Ji = function(t3, e) {
    return this.Gc.delete(e.target), this.Hc.Fc(e.targetId), this.targetCount -= 1, lr.resolve();
  }, t2.prototype.Xi = function(t3, e, n2) {
    var r2 = this, i = 0, o = [];
    return this.Gc.forEach(function(u, s) {
      s.sequenceNumber <= e && n2.get(s.targetId) === null && (r2.Gc.delete(u), o.push(r2.Yi(t3, s.targetId)), i++);
    }), lr.Mn(o).next(function() {
      return i;
    });
  }, t2.prototype.Zi = function(t3) {
    return lr.resolve(this.targetCount);
  }, t2.prototype.tr = function(t3, e) {
    var n2 = this.Gc.get(e) || null;
    return lr.resolve(n2);
  }, t2.prototype.er = function(t3, e, n2) {
    return this.Hc.xc(e, n2), lr.resolve();
  }, t2.prototype.sr = function(t3, e, n2) {
    this.Hc.$c(e, n2);
    var r2 = this.persistence.Ti, i = [];
    return r2 && e.forEach(function(e2) {
      i.push(r2.Ni(t3, e2));
    }), lr.Mn(i);
  }, t2.prototype.Yi = function(t3, e) {
    return this.Hc.Fc(e), lr.resolve();
  }, t2.prototype.rr = function(t3, e) {
    var n2 = this.Hc.kc(e);
    return lr.resolve(n2);
  }, t2.prototype.Fi = function(t3, e) {
    return lr.resolve(this.Hc.Fi(e));
  }, t2;
}(), To = function() {
  function t2(t3, e) {
    var n2 = this;
    this.Yc = {}, this.so = new H(0), this.io = false, this.io = true, this.Ti = t3(this), this._o = new Eo(this), this.Ei = new fi(), this.fo = function(t4, e2) {
      return new _o(t4, function(t5) {
        return n2.Ti.Xc(t5);
      });
    }(this.Ei), this.Qt = new Zr(e), this.wo = new mo(this.Qt);
  }
  return t2.prototype.start = function() {
    return Promise.resolve();
  }, t2.prototype.ko = function() {
    return this.io = false, Promise.resolve();
  }, Object.defineProperty(t2.prototype, "Er", {
    get: function() {
      return this.io;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.Po = function() {
  }, t2.prototype.yo = function() {
  }, t2.prototype.Ko = function() {
    return this.Ei;
  }, t2.prototype.Qo = function(t3) {
    var e = this.Yc[t3.A()];
    return e || (e = new bo(this.Ei, this.Ti), this.Yc[t3.A()] = e), e;
  }, t2.prototype.Sr = function() {
    return this._o;
  }, t2.prototype.$r = function() {
    return this.fo;
  }, t2.prototype.Wo = function() {
    return this.wo;
  }, t2.prototype.runTransaction = function(t3, e, n2) {
    var r2 = this;
    N("MemoryPersistence", "Starting transaction:", t3);
    var i = new No(this.so.next());
    return this.Ti.Zc(), n2(i).next(function(t4) {
      return r2.Ti.ta(i).next(function() {
        return t4;
      });
    }).On().then(function(t4) {
      return i.Vs(), t4;
    });
  }, t2.prototype.ea = function(t3, e) {
    return lr.Ln(Object.values(this.Yc).map(function(n2) {
      return function() {
        return n2.Fi(t3, e);
      };
    }));
  }, t2;
}(), No = function(t2) {
  function e(e2) {
    var n2 = this;
    return (n2 = t2.call(this) || this).bs = e2, n2;
  }
  return __extends$1(e, t2), e;
}(Nr), Ao = function() {
  function t2(t3) {
    this.persistence = t3, this.na = new go(), this.sa = null;
  }
  return t2.ia = function(e) {
    return new t2(e);
  }, Object.defineProperty(t2.prototype, "ra", {
    get: function() {
      if (this.sa)
        return this.sa;
      throw x();
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.nr = function(t3, e, n2) {
    return this.na.nr(n2, e), this.ra.delete(n2.toString()), lr.resolve();
  }, t2.prototype.ir = function(t3, e, n2) {
    return this.na.ir(n2, e), this.ra.add(n2.toString()), lr.resolve();
  }, t2.prototype.Ni = function(t3, e) {
    return this.ra.add(e.toString()), lr.resolve();
  }, t2.prototype.removeTarget = function(t3, e) {
    var n2 = this;
    this.na.Fc(e.targetId).forEach(function(t4) {
      return n2.ra.add(t4.toString());
    });
    var r2 = this.persistence.Sr();
    return r2.rr(t3, e.targetId).next(function(t4) {
      t4.forEach(function(t5) {
        return n2.ra.add(t5.toString());
      });
    }).next(function() {
      return r2.Ji(t3, e);
    });
  }, t2.prototype.Zc = function() {
    this.sa = new Set();
  }, t2.prototype.ta = function(t3) {
    var e = this, n2 = this.persistence.$r().Nr();
    return lr.forEach(this.ra, function(r2) {
      var i = tt._t(r2);
      return e.oa(t3, i).next(function(t4) {
        t4 || n2.li(i);
      });
    }).next(function() {
      return e.sa = null, n2.apply(t3);
    });
  }, t2.prototype.Fr = function(t3, e) {
    var n2 = this;
    return this.oa(t3, e).next(function(t4) {
      t4 ? n2.ra.delete(e.toString()) : n2.ra.add(e.toString());
    });
  }, t2.prototype.Xc = function(t3) {
    return 0;
  }, t2.prototype.oa = function(t3, e) {
    var n2 = this;
    return lr.Ln([function() {
      return lr.resolve(n2.na.Fi(e));
    }, function() {
      return n2.persistence.Sr().Fi(t3, e);
    }, function() {
      return n2.persistence.ea(t3, e);
    }]);
  }, t2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Do(t2, e) {
  return "firestore_clients_" + t2 + "_" + e;
}
function So(t2, e, n2) {
  var r2 = "firestore_mutations_" + t2 + "_" + n2;
  return e.m() && (r2 += "_" + e.uid), r2;
}
function xo(t2, e) {
  return "firestore_targets_" + t2 + "_" + e;
}
var ko = function() {
  function t2(t3, e, n2, r2) {
    this.user = t3, this.batchId = e, this.state = n2, this.error = r2;
  }
  return t2.ca = function(e, n2, r2) {
    var i, o = JSON.parse(r2), u = typeof o == "object" && ["pending", "acknowledged", "rejected"].indexOf(o.state) !== -1 && (o.error === void 0 || typeof o.error == "object");
    return u && o.error && ((u = typeof o.error.message == "string" && typeof o.error.code == "string") && (i = new q(o.error.code, o.error.message))), u ? new t2(e, n2, o.state, i) : (A("SharedClientState", "Failed to parse mutation state for ID '" + n2 + "': " + r2), null);
  }, t2.prototype.aa = function() {
    var t3 = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t3.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t3);
  }, t2;
}(), Oo = function() {
  function t2(t3, e, n2) {
    this.targetId = t3, this.state = e, this.error = n2;
  }
  return t2.ca = function(e, n2) {
    var r2, i = JSON.parse(n2), o = typeof i == "object" && ["not-current", "current", "rejected"].indexOf(i.state) !== -1 && (i.error === void 0 || typeof i.error == "object");
    return o && i.error && ((o = typeof i.error.message == "string" && typeof i.error.code == "string") && (r2 = new q(i.error.code, i.error.message))), o ? new t2(e, i.state, r2) : (A("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n2), null);
  }, t2.prototype.aa = function() {
    var t3 = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t3.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t3);
  }, t2;
}(), Po = function() {
  function t2(t3, e) {
    this.clientId = t3, this.activeTargetIds = e;
  }
  return t2.ca = function(e, n2) {
    for (var r2 = JSON.parse(n2), i = typeof r2 == "object" && r2.activeTargetIds instanceof Array, o = wn(), u = 0; i && u < r2.activeTargetIds.length; ++u)
      i = dt(r2.activeTargetIds[u]), o = o.add(r2.activeTargetIds[u]);
    return i ? new t2(e, o) : (A("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n2), null);
  }, t2;
}(), Vo = function() {
  function t2(t3, e) {
    this.clientId = t3, this.onlineState = e;
  }
  return t2.ca = function(e) {
    var n2 = JSON.parse(e);
    return typeof n2 == "object" && ["Unknown", "Online", "Offline"].indexOf(n2.onlineState) !== -1 && typeof n2.clientId == "string" ? new t2(n2.clientId, n2.onlineState) : (A("SharedClientState", "Failed to parse online state: " + e), null);
  }, t2;
}(), Co = function() {
  function t2() {
    this.activeTargetIds = wn();
  }
  return t2.prototype.ua = function(t3) {
    this.activeTargetIds = this.activeTargetIds.add(t3);
  }, t2.prototype.ha = function(t3) {
    this.activeTargetIds = this.activeTargetIds.delete(t3);
  }, t2.prototype.aa = function() {
    var t3 = {
      activeTargetIds: this.activeTargetIds.it(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(t3);
  }, t2;
}(), Lo = function() {
  function t2(t3, e, n2, r2, i) {
    this.window = t3, this.Zr = e, this.persistenceKey = n2, this.la = r2, this._a = null, this.fa = null, this.k = null, this.da = this.wa.bind(this), this.Ea = new rn(C), this.Er = false, this.Ta = [];
    var o = n2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    this.storage = this.window.localStorage, this.currentUser = i, this.Ia = Do(this.persistenceKey, this.la), this.ma = function(t4) {
      return "firestore_sequence_number_" + t4;
    }(this.persistenceKey), this.Ea = this.Ea.zt(this.la, new Co()), this.Aa = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.Ra = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.Pa = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.ya = function(t4) {
      return "firestore_online_state_" + t4;
    }(this.persistenceKey), this.ga = function(t4) {
      return "firestore_bundle_loaded_" + t4;
    }(this.persistenceKey), this.window.addEventListener("storage", this.da);
  }
  return t2.Kn = function(t3) {
    return !(!t3 || !t3.localStorage);
  }, t2.prototype.start = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t3, e, n2, r2, i, o, u, s, a, c, h2, f = this;
      return __generator(this, function(l) {
        switch (l.label) {
          case 0:
            return [4, this._a.Uo()];
          case 1:
            for (t3 = l.sent(), e = 0, n2 = t3; e < n2.length; e++)
              (r2 = n2[e]) !== this.la && (i = this.getItem(Do(this.persistenceKey, r2))) && (o = Po.ca(r2, i)) && (this.Ea = this.Ea.zt(o.clientId, o));
            for (this.Va(), (u = this.storage.getItem(this.ya)) && (s = this.pa(u)) && this.ba(s), a = 0, c = this.Ta; a < c.length; a++)
              h2 = c[a], this.wa(h2);
            return this.Ta = [], this.window.addEventListener("unload", function() {
              return f.ko();
            }), this.Er = true, [2];
        }
      });
    });
  }, t2.prototype.B = function(t3) {
    this.setItem(this.ma, JSON.stringify(t3));
  }, t2.prototype.va = function() {
    return this.Sa(this.Ea);
  }, t2.prototype.Da = function(t3) {
    var e = false;
    return this.Ea.forEach(function(n2, r2) {
      r2.activeTargetIds.has(t3) && (e = true);
    }), e;
  }, t2.prototype.Ca = function(t3) {
    this.xa(t3, "pending");
  }, t2.prototype.Na = function(t3, e, n2) {
    this.xa(t3, e, n2), this.$a(t3);
  }, t2.prototype.Fa = function(t3) {
    var e = "not-current";
    if (this.Da(t3)) {
      var n2 = this.storage.getItem(xo(this.persistenceKey, t3));
      if (n2) {
        var r2 = Oo.ca(t3, n2);
        r2 && (e = r2.state);
      }
    }
    return this.Oa.ua(t3), this.Va(), e;
  }, t2.prototype.ka = function(t3) {
    this.Oa.ha(t3), this.Va();
  }, t2.prototype.Ma = function(t3) {
    return this.Oa.activeTargetIds.has(t3);
  }, t2.prototype.La = function(t3) {
    this.removeItem(xo(this.persistenceKey, t3));
  }, t2.prototype.Ba = function(t3, e, n2) {
    this.qa(t3, e, n2);
  }, t2.prototype.Ua = function(t3, e, n2) {
    var r2 = this;
    e.forEach(function(t4) {
      r2.$a(t4);
    }), this.currentUser = t3, n2.forEach(function(t4) {
      r2.Ca(t4);
    });
  }, t2.prototype.Qa = function(t3) {
    this.Ka(t3);
  }, t2.prototype.Wa = function() {
    this.ja();
  }, t2.prototype.ko = function() {
    this.Er && (this.window.removeEventListener("storage", this.da), this.removeItem(this.Ia), this.Er = false);
  }, t2.prototype.getItem = function(t3) {
    var e = this.storage.getItem(t3);
    return N("SharedClientState", "READ", t3, e), e;
  }, t2.prototype.setItem = function(t3, e) {
    N("SharedClientState", "SET", t3, e), this.storage.setItem(t3, e);
  }, t2.prototype.removeItem = function(t3) {
    N("SharedClientState", "REMOVE", t3), this.storage.removeItem(t3);
  }, t2.prototype.wa = function(t3) {
    var e = this, n2 = t3;
    if (n2.storageArea === this.storage) {
      if (N("SharedClientState", "EVENT", n2.key, n2.newValue), n2.key === this.Ia)
        return void A("Received WebStorage notification for local change. Another client might have garbage-collected our state");
      this.Zr.po(function() {
        return __awaiter(e, void 0, void 0, function() {
          var t4, e2, r2, i, o, u;
          return __generator(this, function(s) {
            if (this.Er) {
              if (n2.key !== null) {
                if (this.Aa.test(n2.key)) {
                  if (n2.newValue == null)
                    return t4 = this.Ga(n2.key), [2, this.za(t4, null)];
                  if (e2 = this.Ha(n2.key, n2.newValue))
                    return [2, this.za(e2.clientId, e2)];
                } else if (this.Ra.test(n2.key)) {
                  if (n2.newValue !== null && (r2 = this.Ja(n2.key, n2.newValue)))
                    return [2, this.Ya(r2)];
                } else if (this.Pa.test(n2.key)) {
                  if (n2.newValue !== null && (i = this.Xa(n2.key, n2.newValue)))
                    return [2, this.Za(i)];
                } else if (n2.key === this.ya) {
                  if (n2.newValue !== null && (o = this.pa(n2.newValue)))
                    return [2, this.ba(o)];
                } else if (n2.key === this.ma)
                  (u = function(t5) {
                    var e3 = H.q;
                    if (t5 != null)
                      try {
                        var n3 = JSON.parse(t5);
                        k(typeof n3 == "number"), e3 = n3;
                      } catch (t6) {
                        A("SharedClientState", "Failed to read sequence number from WebStorage", t6);
                      }
                    return e3;
                  }(n2.newValue)) !== H.q && this.k(u);
                else if (n2.key === this.ga)
                  return [2, this._a.tu()];
              }
            } else
              this.Ta.push(n2);
            return [2];
          });
        });
      });
    }
  }, Object.defineProperty(t2.prototype, "Oa", {
    get: function() {
      return this.Ea.get(this.la);
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.Va = function() {
    this.setItem(this.Ia, this.Oa.aa());
  }, t2.prototype.xa = function(t3, e, n2) {
    var r2 = new ko(this.currentUser, t3, e, n2), i = So(this.persistenceKey, this.currentUser, t3);
    this.setItem(i, r2.aa());
  }, t2.prototype.$a = function(t3) {
    var e = So(this.persistenceKey, this.currentUser, t3);
    this.removeItem(e);
  }, t2.prototype.Ka = function(t3) {
    var e = {
      clientId: this.la,
      onlineState: t3
    };
    this.storage.setItem(this.ya, JSON.stringify(e));
  }, t2.prototype.qa = function(t3, e, n2) {
    var r2 = xo(this.persistenceKey, t3), i = new Oo(t3, e, n2);
    this.setItem(r2, i.aa());
  }, t2.prototype.ja = function() {
    this.setItem(this.ga, "value-not-used");
  }, t2.prototype.Ga = function(t3) {
    var e = this.Aa.exec(t3);
    return e ? e[1] : null;
  }, t2.prototype.Ha = function(t3, e) {
    var n2 = this.Ga(t3);
    return Po.ca(n2, e);
  }, t2.prototype.Ja = function(t3, e) {
    var n2 = this.Ra.exec(t3), r2 = Number(n2[1]), i = n2[2] !== void 0 ? n2[2] : null;
    return ko.ca(new j(i), r2, e);
  }, t2.prototype.Xa = function(t3, e) {
    var n2 = this.Pa.exec(t3), r2 = Number(n2[1]);
    return Oo.ca(r2, e);
  }, t2.prototype.pa = function(t3) {
    return Vo.ca(t3);
  }, t2.prototype.Ya = function(t3) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e) {
        return t3.user.uid === this.currentUser.uid ? [2, this._a.eu(t3.batchId, t3.state, t3.error)] : (N("SharedClientState", "Ignoring mutation for non-active user " + t3.user.uid), [2]);
      });
    });
  }, t2.prototype.Za = function(t3) {
    return this._a.nu(t3.targetId, t3.state, t3.error);
  }, t2.prototype.za = function(t3, e) {
    var n2 = this, r2 = e ? this.Ea.zt(t3, e) : this.Ea.remove(t3), i = this.Sa(this.Ea), o = this.Sa(r2), u = [], s = [];
    return o.forEach(function(t4) {
      i.has(t4) || u.push(t4);
    }), i.forEach(function(t4) {
      o.has(t4) || s.push(t4);
    }), this._a.su(u, s).then(function() {
      n2.Ea = r2;
    });
  }, t2.prototype.ba = function(t3) {
    this.Ea.get(t3.clientId) && this.fa(t3.onlineState);
  }, t2.prototype.Sa = function(t3) {
    var e = wn();
    return t3.forEach(function(t4, n2) {
      e = e.Pe(n2.activeTargetIds);
    }), e;
  }, t2;
}(), Ro = function() {
  function t2() {
    this.iu = new Co(), this.ru = {}, this.fa = null, this.k = null;
  }
  return t2.prototype.Ca = function(t3) {
  }, t2.prototype.Na = function(t3, e, n2) {
  }, t2.prototype.Fa = function(t3) {
    return this.iu.ua(t3), this.ru[t3] || "not-current";
  }, t2.prototype.Ba = function(t3, e, n2) {
    this.ru[t3] = e;
  }, t2.prototype.ka = function(t3) {
    this.iu.ha(t3);
  }, t2.prototype.Ma = function(t3) {
    return this.iu.activeTargetIds.has(t3);
  }, t2.prototype.La = function(t3) {
    delete this.ru[t3];
  }, t2.prototype.va = function() {
    return this.iu.activeTargetIds;
  }, t2.prototype.Da = function(t3) {
    return this.iu.activeTargetIds.has(t3);
  }, t2.prototype.start = function() {
    return this.iu = new Co(), Promise.resolve();
  }, t2.prototype.Ua = function(t3, e, n2) {
  }, t2.prototype.Qa = function(t3) {
  }, t2.prototype.ko = function() {
  }, t2.prototype.B = function(t3) {
  }, t2.prototype.Wa = function() {
  }, t2;
}(), Uo = function() {
  function t2() {
  }
  return t2.prototype.ou = function(t3) {
  }, t2.prototype.ko = function() {
  }, t2;
}(), Mo = function() {
  function t2() {
    var t3 = this;
    this.cu = function() {
      return t3.au();
    }, this.uu = function() {
      return t3.hu();
    }, this.lu = [], this._u();
  }
  return t2.prototype.ou = function(t3) {
    this.lu.push(t3);
  }, t2.prototype.ko = function() {
    window.removeEventListener("online", this.cu), window.removeEventListener("offline", this.uu);
  }, t2.prototype._u = function() {
    window.addEventListener("online", this.cu), window.addEventListener("offline", this.uu);
  }, t2.prototype.au = function() {
    N("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (var t3 = 0, e = this.lu; t3 < e.length; t3++) {
      (0, e[t3])(0);
    }
  }, t2.prototype.hu = function() {
    N("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (var t3 = 0, e = this.lu; t3 < e.length; t3++) {
      (0, e[t3])(1);
    }
  }, t2.Kn = function() {
    return typeof window != "undefined" && window.addEventListener !== void 0 && window.removeEventListener !== void 0;
  }, t2;
}(), qo = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery"
}, Fo = function() {
  function t2(t3) {
    this.fu = t3.fu, this.du = t3.du;
  }
  return t2.prototype.wu = function(t3) {
    this.Eu = t3;
  }, t2.prototype.Tu = function(t3) {
    this.Iu = t3;
  }, t2.prototype.onMessage = function(t3) {
    this.mu = t3;
  }, t2.prototype.close = function() {
    this.du();
  }, t2.prototype.send = function(t3) {
    this.fu(t3);
  }, t2.prototype.Au = function() {
    this.Eu();
  }, t2.prototype.Ru = function(t3) {
    this.Iu(t3);
  }, t2.prototype.Pu = function(t3) {
    this.mu(t3);
  }, t2;
}(), jo = function(t2) {
  function e(e2) {
    var n2 = this;
    return (n2 = t2.call(this, e2) || this).forceLongPolling = e2.forceLongPolling, n2.i = e2.i, n2;
  }
  return __extends$1(e, t2), e.prototype.Su = function(t3, e2, n2, r2) {
    return new Promise(function(i, o) {
      var u = new XhrIo();
      u.listenOnce(EventType.COMPLETE, function() {
        try {
          switch (u.getLastErrorCode()) {
            case ErrorCode.NO_ERROR:
              var e3 = u.getResponseJson();
              N("Connection", "XHR received:", JSON.stringify(e3)), i(e3);
              break;
            case ErrorCode.TIMEOUT:
              N("Connection", 'RPC "' + t3 + '" timed out'), o(new q(M.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case ErrorCode.HTTP_ERROR:
              var n3 = u.getStatus();
              if (N("Connection", 'RPC "' + t3 + '" failed with status:', n3, "response text:", u.getResponseText()), n3 > 0) {
                var r3 = u.getResponseJson().error;
                if (r3 && r3.status && r3.message) {
                  var s2 = function(t4) {
                    var e4 = t4.toLowerCase().replace(/_/g, "-");
                    return Object.values(M).indexOf(e4) >= 0 ? e4 : M.UNKNOWN;
                  }(r3.status);
                  o(new q(s2, r3.message));
                } else
                  o(new q(M.UNKNOWN, "Server responded with status " + u.getStatus()));
              } else
                o(new q(M.UNAVAILABLE, "Connection failed."));
              break;
            default:
              x();
          }
        } finally {
          N("Connection", 'RPC "' + t3 + '" completed.');
        }
      });
      var s = JSON.stringify(r2);
      u.send(e2, "POST", s, n2, 15);
    });
  }, e.prototype.Cu = function(t3, e2) {
    var n2 = [this.gu, "/", "google.firestore.v1.Firestore", "/", t3, "/channel"], c = createWebChannelTransport(), h2 = getStatEventTarget(), f = {
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        database: "projects/" + this.t.projectId + "/databases/" + this.t.database
      },
      sendRawJson: true,
      supportsCrossDomainXhr: true,
      internalChannelParams: {
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.i
    };
    this.vu(f.initMessageHeaders, e2), isMobileCordova() || isReactNative() || isElectron() || isIE() || isUWP() || isBrowserExtension() || (f.httpHeadersOverwriteParam = "$httpHeaders");
    var m = n2.join("");
    N("Connection", "Creating WebChannel: " + m, f);
    var g = c.createWebChannel(m, f), w2 = false, b = false, _2 = new Fo({
      fu: function(t4) {
        b ? N("Connection", "Not sending because WebChannel is closed:", t4) : (w2 || (N("Connection", "Opening WebChannel transport."), g.open(), w2 = true), N("Connection", "WebChannel sending:", t4), g.send(t4));
      },
      du: function() {
        return g.close();
      }
    }), I2 = function(t4, e3, n3) {
      t4.listen(e3, function(t5) {
        try {
          n3(t5);
        } catch (t6) {
          setTimeout(function() {
            throw t6;
          }, 0);
        }
      });
    };
    return I2(g, WebChannel.EventType.OPEN, function() {
      b || N("Connection", "WebChannel transport opened.");
    }), I2(g, WebChannel.EventType.CLOSE, function() {
      b || (b = true, N("Connection", "WebChannel transport closed"), _2.Ru());
    }), I2(g, WebChannel.EventType.ERROR, function(t4) {
      b || (b = true, D("Connection", "WebChannel transport errored:", t4), _2.Ru(new q(M.UNAVAILABLE, "The operation could not be completed")));
    }), I2(g, WebChannel.EventType.MESSAGE, function(t4) {
      var e3;
      if (!b) {
        var n3 = t4.data[0];
        k(!!n3);
        var r2 = n3, i = r2.error || ((e3 = r2[0]) === null || e3 === void 0 ? void 0 : e3.error);
        if (i) {
          N("Connection", "WebChannel received error:", i);
          var o = i.status, u = function(t5) {
            var e4 = We[t5];
            if (e4 !== void 0)
              return nn(e4);
          }(o), s = i.message;
          u === void 0 && (u = M.INTERNAL, s = "Unknown error status: " + o + " with message " + i.message), b = true, _2.Ru(new q(u, s)), g.close();
        } else
          N("Connection", "WebChannel received:", n3), _2.Pu(n3);
      }
    }), I2(h2, Event.STAT_EVENT, function(t4) {
      t4.stat === Stat.PROXY ? N("Connection", "Detected buffering proxy") : t4.stat === Stat.NOPROXY && N("Connection", "Detected no buffering proxy");
    }), setTimeout(function() {
      _2.Au();
    }, 0), _2;
  }, e;
}(function() {
  function t2(t3) {
    this.yu = t3, this.t = t3.t;
    var e = t3.ssl ? "https" : "http";
    this.gu = e + "://" + t3.host, this.Vu = "projects/" + this.t.projectId + "/databases/" + this.t.database + "/documents";
  }
  return t2.prototype.pu = function(t3, e, n2, r2) {
    var i = this.bu(t3, e);
    N("RestConnection", "Sending: ", i, n2);
    var o = {};
    return this.vu(o, r2), this.Su(t3, i, o, n2).then(function(t4) {
      return N("RestConnection", "Received: ", t4), t4;
    }, function(e2) {
      throw D("RestConnection", t3 + " failed with error: ", e2, "url: ", i, "request:", n2), e2;
    });
  }, t2.prototype.Du = function(t3, e, n2, r2) {
    return this.pu(t3, e, n2, r2);
  }, t2.prototype.vu = function(t3, e) {
    if (t3["X-Goog-Api-Client"] = "gl-js/ fire/8.2.7", t3["Content-Type"] = "text/plain", e)
      for (var n2 in e.g)
        e.g.hasOwnProperty(n2) && (t3[n2] = e.g[n2]);
  }, t2.prototype.bu = function(t3, e) {
    var n2 = qo[t3];
    return this.gu + "/v1/" + e + ":" + n2;
  }, t2;
}());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zo() {
  return typeof window != "undefined" ? window : null;
}
function Go() {
  return typeof document != "undefined" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bo(t2) {
  return new Cn(t2, true);
}
var Qo = function() {
  function t2(t3, e, n2, r2, i) {
    n2 === void 0 && (n2 = 1e3), r2 === void 0 && (r2 = 1.5), i === void 0 && (i = 6e4), this.Zr = t3, this.fs = e, this.xu = n2, this.Nu = r2, this.$u = i, this.Fu = 0, this.Ou = null, this.ku = Date.now(), this.reset();
  }
  return t2.prototype.reset = function() {
    this.Fu = 0;
  }, t2.prototype.Mu = function() {
    this.Fu = this.$u;
  }, t2.prototype.Lu = function(t3) {
    var e = this;
    this.cancel();
    var n2 = Math.floor(this.Fu + this.Bu()), r2 = Math.max(0, Date.now() - this.ku), i = Math.max(0, n2 - r2);
    i > 0 && N("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Fu + " ms, delay with jitter: " + n2 + " ms, last attempt: " + r2 + " ms ago)"), this.Ou = this.Zr.Tr(this.fs, i, function() {
      return e.ku = Date.now(), t3();
    }), this.Fu *= this.Nu, this.Fu < this.xu && (this.Fu = this.xu), this.Fu > this.$u && (this.Fu = this.$u);
  }, t2.prototype.qu = function() {
    this.Ou !== null && (this.Ou.Rs(), this.Ou = null);
  }, t2.prototype.cancel = function() {
    this.Ou !== null && (this.Ou.cancel(), this.Ou = null);
  }, t2.prototype.Bu = function() {
    return (Math.random() - 0.5) * this.Fu;
  }, t2;
}(), Yo = function() {
  function t2(t3, e, n2, r2, i, o) {
    this.Zr = t3, this.Uu = n2, this.Qu = r2, this.Ku = i, this.listener = o, this.state = 0, this.Wu = 0, this.ju = null, this.stream = null, this.Gu = new Qo(t3, e);
  }
  return t2.prototype.zu = function() {
    return this.state === 1 || this.state === 2 || this.state === 4;
  }, t2.prototype.Hu = function() {
    return this.state === 2;
  }, t2.prototype.start = function() {
    this.state !== 3 ? this.auth() : this.Ju();
  }, t2.prototype.stop = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t3) {
        switch (t3.label) {
          case 0:
            return this.zu() ? [4, this.close(0)] : [3, 2];
          case 1:
            t3.sent(), t3.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, t2.prototype.Yu = function() {
    this.state = 0, this.Gu.reset();
  }, t2.prototype.Xu = function() {
    var t3 = this;
    this.Hu() && this.ju === null && (this.ju = this.Zr.Tr(this.Uu, 6e4, function() {
      return t3.Zu();
    }));
  }, t2.prototype.th = function(t3) {
    this.eh(), this.stream.send(t3);
  }, t2.prototype.Zu = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t3) {
        return this.Hu() ? [2, this.close(0)] : [2];
      });
    });
  }, t2.prototype.eh = function() {
    this.ju && (this.ju.cancel(), this.ju = null);
  }, t2.prototype.close = function(t3, e) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.eh(), this.Gu.cancel(), this.Wu++, t3 !== 3 ? this.Gu.reset() : e && e.code === M.RESOURCE_EXHAUSTED ? (A(e.toString()), A("Using maximum backoff delay to prevent overloading the backend."), this.Gu.Mu()) : e && e.code === M.UNAUTHENTICATED && this.Ku.p(), this.stream !== null && (this.nh(), this.stream.close(), this.stream = null), this.state = t3, [4, this.listener.Tu(e)];
          case 1:
            return n2.sent(), [2];
        }
      });
    });
  }, t2.prototype.nh = function() {
  }, t2.prototype.auth = function() {
    var t3 = this;
    this.state = 1;
    var e = this.sh(this.Wu), n2 = this.Wu;
    this.Ku.getToken().then(function(e2) {
      t3.Wu === n2 && t3.ih(e2);
    }, function(n3) {
      e(function() {
        var e2 = new q(M.UNKNOWN, "Fetching auth token failed: " + n3.message);
        return t3.rh(e2);
      });
    });
  }, t2.prototype.ih = function(t3) {
    var e = this, n2 = this.sh(this.Wu);
    this.stream = this.oh(t3), this.stream.wu(function() {
      n2(function() {
        return e.state = 2, e.listener.wu();
      });
    }), this.stream.Tu(function(t4) {
      n2(function() {
        return e.rh(t4);
      });
    }), this.stream.onMessage(function(t4) {
      n2(function() {
        return e.onMessage(t4);
      });
    });
  }, t2.prototype.Ju = function() {
    var t3 = this;
    this.state = 4, this.Gu.Lu(function() {
      return __awaiter(t3, void 0, void 0, function() {
        return __generator(this, function(t4) {
          return this.state = 0, this.start(), [2];
        });
      });
    });
  }, t2.prototype.rh = function(t3) {
    return N("PersistentStream", "close with error: " + t3), this.stream = null, this.close(3, t3);
  }, t2.prototype.sh = function(t3) {
    var e = this;
    return function(n2) {
      e.Zr.Ps(function() {
        return e.Wu === t3 ? n2() : (N("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve());
      });
    };
  }, t2;
}(), Ho = function(t2) {
  function e(e2, n2, r2, i, o) {
    var u = this;
    return (u = t2.call(this, e2, "listen_stream_connection_backoff", "listen_stream_idle", n2, r2, o) || this).Qt = i, u;
  }
  return __extends$1(e, t2), e.prototype.oh = function(t3) {
    return this.Qu.Cu("Listen", t3);
  }, e.prototype.onMessage = function(t3) {
    this.Gu.reset();
    var e2 = function(t4, e3) {
      var n3;
      if ("targetChange" in e3) {
        e3.targetChange;
        var r2 = function(t5) {
          return t5 === "NO_CHANGE" ? 0 : t5 === "ADD" ? 1 : t5 === "REMOVE" ? 2 : t5 === "CURRENT" ? 3 : t5 === "RESET" ? 4 : x();
        }(e3.targetChange.targetChangeType || "NO_CHANGE"), i = e3.targetChange.targetIds || [], o = function(t5, e4) {
          return t5.Bt ? (k(e4 === void 0 || typeof e4 == "string"), U.fromBase64String(e4 || "")) : (k(e4 === void 0 || e4 instanceof Uint8Array), U.fromUint8Array(e4 || new Uint8Array()));
        }(t4, e3.targetChange.resumeToken), u = (s = e3.targetChange.cause) && function(t5) {
          var e4 = t5.code === void 0 ? M.UNKNOWN : nn(t5.code);
          return new q(e4, t5.message || "");
        }(s);
        n3 = new Dn(r2, i, o, u || null);
      } else if ("documentChange" in e3) {
        e3.documentChange, (r2 = e3.documentChange).document, r2.document.name, r2.document.updateTime, i = zn(t4, r2.document.name), o = Mn(r2.document.updateTime);
        var s = new St({
          mapValue: {
            fields: r2.document.fields
          }
        }), a = (u = new Pt(i, o, s, {}), r2.targetIds || []), c = r2.removedTargetIds || [];
        n3 = new Nn(a, c, u.key, u);
      } else if ("documentDelete" in e3)
        e3.documentDelete, (r2 = e3.documentDelete).document, i = zn(t4, r2.document), o = r2.readTime ? Mn(r2.readTime) : X.min(), s = new Vt(i, o), u = r2.removedTargetIds || [], n3 = new Nn([], u, s.key, s);
      else if ("documentRemove" in e3)
        e3.documentRemove, (r2 = e3.documentRemove).document, i = zn(t4, r2.document), o = r2.removedTargetIds || [], n3 = new Nn([], o, i, null);
      else {
        if (!("filter" in e3))
          return x();
        e3.filter;
        var h2 = e3.filter;
        h2.targetId, r2 = h2.count || 0, i = new tn(r2), o = h2.targetId, n3 = new An(o, i);
      }
      return n3;
    }(this.Qt, t3), n2 = function(t4) {
      if (!("targetChange" in t4))
        return X.min();
      var e3 = t4.targetChange;
      return e3.targetIds && e3.targetIds.length ? X.min() : e3.readTime ? Mn(e3.readTime) : X.min();
    }(t3);
    return this.listener.ah(e2, n2);
  }, e.prototype.uh = function(t3) {
    var e2 = {};
    e2.database = Qn(this.Qt), e2.addTarget = function(t4, e3) {
      var n3, r2 = e3.target;
      return (n3 = qt(r2) ? {
        documents: Zn(t4, r2)
      } : {
        query: Jn(t4, r2)
      }).targetId = e3.targetId, e3.resumeToken.l() > 0 ? n3.resumeToken = Rn(t4, e3.resumeToken) : e3.Ot._(X.min()) > 0 && (n3.readTime = Ln(t4, e3.Ot.j())), n3;
    }(this.Qt, t3);
    var n2 = function(t4, e3) {
      var n3 = function(t5, e4) {
        switch (e4) {
          case 0:
            return null;
          case 1:
            return "existence-filter-mismatch";
          case 2:
            return "limbo-document";
          default:
            return x();
        }
      }(0, e3.Ft);
      return n3 == null ? null : {
        "goog-listen-tags": n3
      };
    }(this.Qt, t3);
    n2 && (e2.labels = n2), this.th(e2);
  }, e.prototype.hh = function(t3) {
    var e2 = {};
    e2.database = Qn(this.Qt), e2.removeTarget = t3, this.th(e2);
  }, e;
}(Yo), Ko = function(t2) {
  function e(e2, n2, r2, i, o) {
    var u = this;
    return (u = t2.call(this, e2, "write_stream_connection_backoff", "write_stream_idle", n2, r2, o) || this).Qt = i, u.lh = false, u;
  }
  return __extends$1(e, t2), Object.defineProperty(e.prototype, "_h", {
    get: function() {
      return this.lh;
    },
    enumerable: false,
    configurable: true
  }), e.prototype.start = function() {
    this.lh = false, this.lastStreamToken = void 0, t2.prototype.start.call(this);
  }, e.prototype.nh = function() {
    this.lh && this.fh([]);
  }, e.prototype.oh = function(t3) {
    return this.Qu.Cu("Write", t3);
  }, e.prototype.onMessage = function(t3) {
    if (k(!!t3.streamToken), this.lastStreamToken = t3.streamToken, this.lh) {
      this.Gu.reset();
      var e2 = function(t4, e3) {
        return t4 && t4.length > 0 ? (k(e3 !== void 0), t4.map(function(t5) {
          return function(t6, e4) {
            var n3 = t6.updateTime ? Mn(t6.updateTime) : Mn(e4);
            n3.isEqual(X.min()) && (n3 = Mn(e4));
            var r2 = null;
            return t6.transformResults && t6.transformResults.length > 0 && (r2 = t6.transformResults), new Le(n3, r2);
          }(t5, e3);
        })) : [];
      }(t3.writeResults, t3.commitTime), n2 = Mn(t3.commitTime);
      return this.listener.dh(n2, e2);
    }
    return k(!t3.writeResults || t3.writeResults.length === 0), this.lh = true, this.listener.wh();
  }, e.prototype.Eh = function() {
    var t3 = {};
    t3.database = Qn(this.Qt), this.th(t3);
  }, e.prototype.fh = function(t3) {
    var e2 = this, n2 = {
      streamToken: this.lastStreamToken,
      writes: t3.map(function(t4) {
        return Xn(e2.Qt, t4);
      })
    };
    this.th(n2);
  }, e;
}(Yo), Xo = function(t2) {
  function e(e2, n2, r2) {
    var i = this;
    return (i = t2.call(this) || this).credentials = e2, i.Qu = n2, i.Qt = r2, i.Th = false, i;
  }
  return __extends$1(e, t2), e.prototype.Ih = function() {
    if (this.Th)
      throw new q(M.FAILED_PRECONDITION, "The client has already been terminated.");
  }, e.prototype.pu = function(t3, e2, n2) {
    var r2 = this;
    return this.Ih(), this.credentials.getToken().then(function(i) {
      return r2.Qu.pu(t3, e2, n2, i);
    }).catch(function(t4) {
      throw t4.code === M.UNAUTHENTICATED && r2.credentials.p(), t4;
    });
  }, e.prototype.Du = function(t3, e2, n2) {
    var r2 = this;
    return this.Ih(), this.credentials.getToken().then(function(i) {
      return r2.Qu.Du(t3, e2, n2, i);
    }).catch(function(t4) {
      throw t4.code === M.UNAUTHENTICATED && r2.credentials.p(), t4;
    });
  }, e.prototype.terminate = function() {
    this.Th = false;
  }, e;
}(function() {
}), Wo = function() {
  function t2(t3, e) {
    this._s = t3, this.fa = e, this.state = "Unknown", this.mh = 0, this.Ah = null, this.Rh = true;
  }
  return t2.prototype.Ph = function() {
    var t3 = this;
    this.mh === 0 && (this.yh("Unknown"), this.Ah = this._s.Tr("online_state_timeout", 1e4, function() {
      return t3.Ah = null, t3.gh("Backend didn't respond within 10 seconds."), t3.yh("Offline"), Promise.resolve();
    }));
  }, t2.prototype.Vh = function(t3) {
    this.state === "Online" ? this.yh("Unknown") : (this.mh++, this.mh >= 1 && (this.ph(), this.gh("Connection failed 1 times. Most recent error: " + t3.toString()), this.yh("Offline")));
  }, t2.prototype.set = function(t3) {
    this.ph(), this.mh = 0, t3 === "Online" && (this.Rh = false), this.yh(t3);
  }, t2.prototype.yh = function(t3) {
    t3 !== this.state && (this.state = t3, this.fa(t3));
  }, t2.prototype.gh = function(t3) {
    var e = "Could not reach Cloud Firestore backend. " + t3 + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
    this.Rh ? (A(e), this.Rh = false) : N("OnlineStateTracker", e);
  }, t2.prototype.ph = function() {
    this.Ah !== null && (this.Ah.cancel(), this.Ah = null);
  }, t2;
}(), Zo = function(t2, e, n2, r2, i) {
  var o = this;
  this.bh = t2, this.Sh = e, this._s = n2, this.Dh = {}, this.Ch = [], this.xh = new Map(), this.Nh = new Set(), this.$h = [], this.Fh = i, this.Fh.ou(function(t3) {
    n2.Ps(function() {
      return __awaiter(o, void 0, void 0, function() {
        return __generator(this, function(t4) {
          switch (t4.label) {
            case 0:
              return uu(this) ? (N("RemoteStore", "Restarting streams for network reachability change."), [4, function(t5) {
                return __awaiter(this, void 0, void 0, function() {
                  var e2;
                  return __generator(this, function(n3) {
                    switch (n3.label) {
                      case 0:
                        return (e2 = O(t5)).Nh.add(4), [4, $o(e2)];
                      case 1:
                        return n3.sent(), e2.Oh.set("Unknown"), e2.Nh.delete(4), [4, Jo(e2)];
                      case 2:
                        return n3.sent(), [2];
                    }
                  });
                });
              }(this)]) : [3, 2];
            case 1:
              t4.sent(), t4.label = 2;
            case 2:
              return [2];
          }
        });
      });
    });
  }), this.Oh = new Wo(n2, r2);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jo(t2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, n2;
    return __generator(this, function(r2) {
      switch (r2.label) {
        case 0:
          if (!uu(t2))
            return [3, 4];
          e = 0, n2 = t2.$h, r2.label = 1;
        case 1:
          return e < n2.length ? [4, (0, n2[e])(true)] : [3, 4];
        case 2:
          r2.sent(), r2.label = 3;
        case 3:
          return e++, [3, 1];
        case 4:
          return [2];
      }
    });
  });
}
function $o(t2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, n2;
    return __generator(this, function(r2) {
      switch (r2.label) {
        case 0:
          e = 0, n2 = t2.$h, r2.label = 1;
        case 1:
          return e < n2.length ? [4, (0, n2[e])(false)] : [3, 4];
        case 2:
          r2.sent(), r2.label = 3;
        case 3:
          return e++, [3, 1];
        case 4:
          return [2];
      }
    });
  });
}
function tu(t2, e) {
  var n2 = O(t2);
  n2.xh.has(e.targetId) || (n2.xh.set(e.targetId, e), ou(n2) ? iu(n2) : _u(n2).Hu() && nu(n2, e));
}
function eu(t2, e) {
  var n2 = O(t2), r2 = _u(n2);
  n2.xh.delete(e), r2.Hu() && ru(n2, e), n2.xh.size === 0 && (r2.Hu() ? r2.Xu() : uu(n2) && n2.Oh.set("Unknown"));
}
function nu(t2, e) {
  t2.kh.on(e.targetId), _u(t2).uh(e);
}
function ru(t2, e) {
  t2.kh.on(e), _u(t2).hh(e);
}
function iu(t2) {
  t2.kh = new xn({
    vn: function(e) {
      return t2.Dh.vn(e);
    },
    Sn: function(e) {
      return t2.xh.get(e) || null;
    }
  }), _u(t2).start(), t2.Oh.Ph();
}
function ou(t2) {
  return uu(t2) && !_u(t2).zu() && t2.xh.size > 0;
}
function uu(t2) {
  return O(t2).Nh.size === 0;
}
function su(t2) {
  t2.kh = void 0;
}
function au(t2) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(e) {
      return t2.xh.forEach(function(e2, n2) {
        nu(t2, e2);
      }), [2];
    });
  });
}
function cu(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(n2) {
      return su(t2), ou(t2) ? (t2.Oh.Vh(e), iu(t2)) : t2.Oh.set("Unknown"), [2];
    });
  });
}
function hu(t2, e, n2) {
  return __awaiter(this, void 0, void 0, function() {
    var r2, i, o;
    return __generator(this, function(u) {
      switch (u.label) {
        case 0:
          if (t2.Oh.set("Online"), !(e instanceof Dn && e.state === 2 && e.cause))
            return [3, 6];
          u.label = 1;
        case 1:
          return u.trys.push([1, 3, , 5]), [
            4,
            function(t3, e2) {
              return __awaiter(this, void 0, void 0, function() {
                var n3, r3, i2, o2;
                return __generator(this, function(u2) {
                  switch (u2.label) {
                    case 0:
                      n3 = e2.cause, r3 = 0, i2 = e2.targetIds, u2.label = 1;
                    case 1:
                      return r3 < i2.length ? (o2 = i2[r3], t3.xh.has(o2) ? [4, t3.Dh.Mh(o2, n3)] : [3, 3]) : [3, 5];
                    case 2:
                      u2.sent(), t3.xh.delete(o2), t3.kh.removeTarget(o2), u2.label = 3;
                    case 3:
                      u2.label = 4;
                    case 4:
                      return r3++, [3, 1];
                    case 5:
                      return [2];
                  }
                });
              });
            }(t2, e)
          ];
        case 2:
          return u.sent(), [3, 5];
        case 3:
          return r2 = u.sent(), N("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), r2), [4, fu(t2, r2)];
        case 4:
          return u.sent(), [3, 5];
        case 5:
          return [3, 13];
        case 6:
          if (e instanceof Nn ? t2.kh.dn(e) : e instanceof An ? t2.kh.Pn(e) : t2.kh.Tn(e), n2.isEqual(X.min()))
            return [3, 13];
          u.label = 7;
        case 7:
          return u.trys.push([7, 11, , 13]), [4, io(t2.bh)];
        case 8:
          return i = u.sent(), n2._(i) >= 0 ? [
            4,
            function(t3, e2) {
              var n3 = t3.kh.Vn(e2);
              return n3.$e.forEach(function(n4, r3) {
                if (n4.resumeToken.l() > 0) {
                  var i2 = t3.xh.get(r3);
                  i2 && t3.xh.set(r3, i2.Mt(n4.resumeToken, e2));
                }
              }), n3.Fe.forEach(function(e3) {
                var n4 = t3.xh.get(e3);
                if (n4) {
                  t3.xh.set(e3, n4.Mt(U.T, n4.Ot)), ru(t3, e3);
                  var r3 = new ge(n4.target, e3, 1, n4.sequenceNumber);
                  nu(t3, r3);
                }
              }), t3.Dh.Lh(n3);
            }(t2, n2)
          ] : [3, 10];
        case 9:
          u.sent(), u.label = 10;
        case 10:
          return [3, 13];
        case 11:
          return N("RemoteStore", "Failed to raise snapshot:", o = u.sent()), [4, fu(t2, o)];
        case 12:
          return u.sent(), [3, 13];
        case 13:
          return [2];
      }
    });
  });
}
function fu(t2, e, n2) {
  return __awaiter(this, void 0, void 0, function() {
    var r2 = this;
    return __generator(this, function(i) {
      switch (i.label) {
        case 0:
          if (!mr(e))
            throw e;
          return t2.Nh.add(1), [4, $o(t2)];
        case 1:
          return i.sent(), t2.Oh.set("Offline"), n2 || (n2 = function() {
            return io(t2.bh);
          }), t2._s.po(function() {
            return __awaiter(r2, void 0, void 0, function() {
              return __generator(this, function(e2) {
                switch (e2.label) {
                  case 0:
                    return N("RemoteStore", "Retrying IndexedDB access"), [4, n2()];
                  case 1:
                    return e2.sent(), t2.Nh.delete(1), [4, Jo(t2)];
                  case 2:
                    return e2.sent(), [2];
                }
              });
            });
          }), [2];
      }
    });
  });
}
function lu(t2, e) {
  return e().catch(function(n2) {
    return fu(t2, n2, e);
  });
}
function pu(t2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, n2, r2, i, o;
    return __generator(this, function(u) {
      switch (u.label) {
        case 0:
          e = O(t2), n2 = Iu(e), r2 = e.Ch.length > 0 ? e.Ch[e.Ch.length - 1].batchId : -1, u.label = 1;
        case 1:
          if (!function(t3) {
            return uu(t3) && t3.Ch.length < 10;
          }(e))
            return [3, 7];
          u.label = 2;
        case 2:
          return u.trys.push([2, 4, , 6]), [4, so(e.bh, r2)];
        case 3:
          return (i = u.sent()) === null ? (e.Ch.length === 0 && n2.Xu(), [3, 7]) : (r2 = i.batchId, function(t3, e2) {
            t3.Ch.push(e2);
            var n3 = Iu(t3);
            n3.Hu() && n3._h && n3.fh(e2.mutations);
          }(e, i), [3, 6]);
        case 4:
          return o = u.sent(), [4, fu(e, o)];
        case 5:
          return u.sent(), [3, 6];
        case 6:
          return [3, 1];
        case 7:
          return du(e) && vu(e), [2];
      }
    });
  });
}
function du(t2) {
  return uu(t2) && !Iu(t2).zu() && t2.Ch.length > 0;
}
function vu(t2) {
  Iu(t2).start();
}
function yu(t2) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(e) {
      return Iu(t2).Eh(), [2];
    });
  });
}
function mu(t2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, n2, r2, i;
    return __generator(this, function(o) {
      for (e = Iu(t2), n2 = 0, r2 = t2.Ch; n2 < r2.length; n2++)
        i = r2[n2], e.fh(i.mutations);
      return [2];
    });
  });
}
function gu(t2, e, n2) {
  return __awaiter(this, void 0, void 0, function() {
    var r2, i;
    return __generator(this, function(o) {
      switch (o.label) {
        case 0:
          return r2 = t2.Ch.shift(), i = Wr.from(r2, e, n2), [4, lu(t2, function() {
            return t2.Dh.Bh(i);
          })];
        case 1:
          return o.sent(), [4, pu(t2)];
        case 2:
          return o.sent(), [2];
      }
    });
  });
}
function wu(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return e && Iu(t2)._h ? [4, function(t3, e2) {
            return __awaiter(this, void 0, void 0, function() {
              var n3, r2;
              return __generator(this, function(i) {
                switch (i.label) {
                  case 0:
                    return en(r2 = e2.code) && r2 !== M.ABORTED ? (n3 = t3.Ch.shift(), Iu(t3).Yu(), [4, lu(t3, function() {
                      return t3.Dh.qh(n3.batchId, e2);
                    })]) : [3, 3];
                  case 1:
                    return i.sent(), [4, pu(t3)];
                  case 2:
                    i.sent(), i.label = 3;
                  case 3:
                    return [2];
                }
              });
            });
          }(t2, e)] : [3, 2];
        case 1:
          n2.sent(), n2.label = 2;
        case 2:
          return du(t2) && vu(t2), [2];
      }
    });
  });
}
function bu(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    var n2;
    return __generator(this, function(i) {
      switch (i.label) {
        case 0:
          return n2 = O(t2), e ? (n2.Nh.delete(2), [4, Jo(n2)]) : [3, 2];
        case 1:
          return i.sent(), [3, 5];
        case 2:
          return e ? [3, 4] : (n2.Nh.add(2), [4, $o(n2)]);
        case 3:
          i.sent(), n2.Oh.set("Unknown"), i.label = 4;
        case 4:
          i.label = 5;
        case 5:
          return [2];
      }
    });
  });
}
function _u(t2) {
  var e = this;
  return t2.Uh || (t2.Uh = function(t3, e2, n2) {
    var r2 = O(t3);
    return r2.Ih(), new Ho(e2, r2.Qu, r2.credentials, r2.Qt, n2);
  }(t2.Sh, t2._s, {
    wu: au.bind(null, t2),
    Tu: cu.bind(null, t2),
    ah: hu.bind(null, t2)
  }), t2.$h.push(function(n2) {
    return __awaiter(e, void 0, void 0, function() {
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            return n2 ? (t2.Uh.Yu(), ou(t2) ? iu(t2) : t2.Oh.set("Unknown"), [3, 3]) : [3, 1];
          case 1:
            return [4, t2.Uh.stop()];
          case 2:
            e2.sent(), su(t2), e2.label = 3;
          case 3:
            return [2];
        }
      });
    });
  })), t2.Uh;
}
function Iu(t2) {
  var e = this;
  return t2.Qh || (t2.Qh = function(t3, e2, n2) {
    var r2 = O(t3);
    return r2.Ih(), new Ko(e2, r2.Qu, r2.credentials, r2.Qt, n2);
  }(t2.Sh, t2._s, {
    wu: yu.bind(null, t2),
    Tu: wu.bind(null, t2),
    wh: mu.bind(null, t2),
    dh: gu.bind(null, t2)
  }), t2.$h.push(function(n2) {
    return __awaiter(e, void 0, void 0, function() {
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            return n2 ? (t2.Qh.Yu(), [4, pu(t2)]) : [3, 2];
          case 1:
            return e2.sent(), [3, 4];
          case 2:
            return [4, t2.Qh.stop()];
          case 3:
            e2.sent(), t2.Ch.length > 0 && (N("RemoteStore", "Stopping write stream with " + t2.Ch.length + " pending writes"), t2.Ch = []), e2.label = 4;
          case 4:
            return [2];
        }
      });
    });
  })), t2.Qh;
}
var Eu = function() {
  this.Kh = void 0, this.listeners = [];
}, Tu = function() {
  this.queries = new gi(function(t2) {
    return pe(t2);
  }, le), this.onlineState = "Unknown", this.Wh = new Set();
};
function Nu(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    var n2, r2, i, o, u, s, a;
    return __generator(this, function(c) {
      switch (c.label) {
        case 0:
          if (n2 = O(t2), r2 = e.query, i = false, (o = n2.queries.get(r2)) || (i = true, o = new Eu()), !i)
            return [3, 4];
          c.label = 1;
        case 1:
          return c.trys.push([1, 3, , 4]), u = o, [4, n2.jh(r2)];
        case 2:
          return u.Kh = c.sent(), [3, 4];
        case 3:
          return s = c.sent(), a = Er(s, "Initialization of query '" + de(e.query) + "' failed"), [2, void e.onError(a)];
        case 4:
          return n2.queries.set(r2, o), o.listeners.push(e), e.Gh(n2.onlineState), o.Kh && e.zh(o.Kh) && xu(n2), [2];
      }
    });
  });
}
function Au(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    var n2, r2, i, o, u;
    return __generator(this, function(s) {
      return n2 = O(t2), r2 = e.query, i = false, (o = n2.queries.get(r2)) && (u = o.listeners.indexOf(e)) >= 0 && (o.listeners.splice(u, 1), i = o.listeners.length === 0), i ? [2, (n2.queries.delete(r2), n2.Hh(r2))] : [2];
    });
  });
}
function Du(t2, e) {
  for (var n2 = O(t2), r2 = false, i = 0, o = e; i < o.length; i++) {
    var u = o[i], s = u.query, a = n2.queries.get(s);
    if (a) {
      for (var c = 0, h2 = a.listeners; c < h2.length; c++) {
        h2[c].zh(u) && (r2 = true);
      }
      a.Kh = u;
    }
  }
  r2 && xu(n2);
}
function Su(t2, e, n2) {
  var r2 = O(t2), i = r2.queries.get(e);
  if (i)
    for (var o = 0, u = i.listeners; o < u.length; o++) {
      u[o].onError(n2);
    }
  r2.queries.delete(e);
}
function xu(t2) {
  t2.Wh.forEach(function(t3) {
    t3.next();
  });
}
var ku = function() {
  function t2(t3, e, n2) {
    this.query = t3, this.Jh = e, this.Yh = false, this.Xh = null, this.onlineState = "Unknown", this.options = n2 || {};
  }
  return t2.prototype.zh = function(t3) {
    if (!this.options.includeMetadataChanges) {
      for (var e = [], n2 = 0, r2 = t3.docChanges; n2 < r2.length; n2++) {
        var i = r2[n2];
        i.type !== 3 && e.push(i);
      }
      t3 = new In(t3.query, t3.docs, t3.Se, e, t3.De, t3.fromCache, t3.Ce, true);
    }
    var o = false;
    return this.Yh ? this.Zh(t3) && (this.Jh.next(t3), o = true) : this.tl(t3, this.onlineState) && (this.el(t3), o = true), this.Xh = t3, o;
  }, t2.prototype.onError = function(t3) {
    this.Jh.error(t3);
  }, t2.prototype.Gh = function(t3) {
    this.onlineState = t3;
    var e = false;
    return this.Xh && !this.Yh && this.tl(this.Xh, t3) && (this.el(this.Xh), e = true), e;
  }, t2.prototype.tl = function(t3, e) {
    if (!t3.fromCache)
      return true;
    var n2 = e !== "Offline";
    return !(this.options.nl && n2 || t3.docs.et() && e !== "Offline");
  }, t2.prototype.Zh = function(t3) {
    if (t3.docChanges.length > 0)
      return true;
    var e = this.Xh && this.Xh.hasPendingWrites !== t3.hasPendingWrites;
    return !(!t3.Ce && !e) && this.options.includeMetadataChanges === true;
  }, t2.prototype.el = function(t3) {
    t3 = In.Ne(t3.query, t3.docs, t3.De, t3.fromCache), this.Yh = true, this.Jh.next(t3);
  }, t2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Lu = function(t2) {
  this.key = t2;
}, Ru = function(t2) {
  this.key = t2;
}, Uu = function() {
  function t2(t3, e) {
    this.query = t3, this.cl = e, this.al = null, this.Be = false, this.ul = mn(), this.De = mn(), this.hl = ye(t3), this.ll = new bn(this.hl);
  }
  return Object.defineProperty(t2.prototype, "_l", {
    get: function() {
      return this.cl;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.fl = function(t3, e) {
    var n2 = this, r2 = e ? e.dl : new _n(), i = e ? e.ll : this.ll, o = e ? e.De : this.De, u = i, s = false, a = ie(this.query) && i.size === this.query.limit ? i.last() : null, c = oe(this.query) && i.size === this.query.limit ? i.first() : null;
    if (t3.Xt(function(t4, e2) {
      var h3 = i.get(t4), f = e2 instanceof Pt ? e2 : null;
      f && (f = ve(n2.query, f) ? f : null);
      var l = !!h3 && n2.De.has(h3.key), p2 = !!f && (f.Vt || n2.De.has(f.key) && f.hasCommittedMutations), d = false;
      h3 && f ? h3.data().isEqual(f.data()) ? l !== p2 && (r2.track({
        type: 3,
        doc: f
      }), d = true) : n2.wl(h3, f) || (r2.track({
        type: 2,
        doc: f
      }), d = true, (a && n2.hl(f, a) > 0 || c && n2.hl(f, c) < 0) && (s = true)) : !h3 && f ? (r2.track({
        type: 0,
        doc: f
      }), d = true) : h3 && !f && (r2.track({
        type: 1,
        doc: h3
      }), d = true, (a || c) && (s = true)), d && (f ? (u = u.add(f), o = p2 ? o.add(t4) : o.delete(t4)) : (u = u.delete(t4), o = o.delete(t4)));
    }), ie(this.query) || oe(this.query))
      for (; u.size > this.query.limit; ) {
        var h2 = ie(this.query) ? u.last() : u.first();
        u = u.delete(h2.key), o = o.delete(h2.key), r2.track({
          type: 1,
          doc: h2
        });
      }
    return {
      ll: u,
      dl: r2,
      lc: s,
      De: o
    };
  }, t2.prototype.wl = function(t3, e) {
    return t3.Vt && e.hasCommittedMutations && !e.Vt;
  }, t2.prototype.wi = function(t3, e, n2) {
    var r2 = this, i = this.ll;
    this.ll = t3.ll, this.De = t3.De;
    var o = t3.dl.ve();
    o.sort(function(t4, e2) {
      return function(t5, e3) {
        var n3 = function(t6) {
          switch (t6) {
            case 0:
              return 1;
            case 2:
            case 3:
              return 2;
            case 1:
              return 0;
            default:
              return x();
          }
        };
        return n3(t5) - n3(e3);
      }(t4.type, e2.type) || r2.hl(t4.doc, e2.doc);
    }), this.El(n2);
    var u = e ? this.Tl() : [], s = this.ul.size === 0 && this.Be ? 1 : 0, a = s !== this.al;
    return this.al = s, o.length !== 0 || a ? {
      snapshot: new In(this.query, t3.ll, i, o, t3.De, s === 0, a, false),
      Il: u
    } : {
      Il: u
    };
  }, t2.prototype.Gh = function(t3) {
    return this.Be && t3 === "Offline" ? (this.Be = false, this.wi({
      ll: this.ll,
      dl: new _n(),
      De: this.De,
      lc: false
    }, false)) : {
      Il: []
    };
  }, t2.prototype.ml = function(t3) {
    return !this.cl.has(t3) && !!this.ll.has(t3) && !this.ll.get(t3).Vt;
  }, t2.prototype.El = function(t3) {
    var e = this;
    t3 && (t3.qe.forEach(function(t4) {
      return e.cl = e.cl.add(t4);
    }), t3.Ue.forEach(function(t4) {
    }), t3.Qe.forEach(function(t4) {
      return e.cl = e.cl.delete(t4);
    }), this.Be = t3.Be);
  }, t2.prototype.Tl = function() {
    var t3 = this;
    if (!this.Be)
      return [];
    var e = this.ul;
    this.ul = mn(), this.ll.forEach(function(e2) {
      t3.ml(e2.key) && (t3.ul = t3.ul.add(e2.key));
    });
    var n2 = [];
    return e.forEach(function(e2) {
      t3.ul.has(e2) || n2.push(new Ru(e2));
    }), this.ul.forEach(function(t4) {
      e.has(t4) || n2.push(new Lu(t4));
    }), n2;
  }, t2.prototype.Al = function(t3) {
    this.cl = t3.Rc, this.ul = mn();
    var e = this.fl(t3.documents);
    return this.wi(e, true);
  }, t2.prototype.Rl = function() {
    return In.Ne(this.query, this.ll, this.De, this.al === 0);
  }, t2;
}(), Mu = function(t2, e, n2) {
  this.query = t2, this.targetId = e, this.view = n2;
}, qu = function(t2) {
  this.key = t2, this.Pl = false;
}, Fu = function() {
  function t2(t3, e, n2, r2, i, o) {
    this.bh = t3, this.yl = e, this.gl = n2, this.Vl = r2, this.currentUser = i, this.pl = o, this.bl = {}, this.vl = new gi(function(t4) {
      return pe(t4);
    }, le), this.Sl = new Map(), this.Dl = new Set(), this.Cl = new rn(tt.H), this.xl = new Map(), this.Nl = new go(), this.$l = {}, this.Fl = new Map(), this.Ol = Di.Li(), this.onlineState = "Unknown", this.kl = void 0;
  }
  return Object.defineProperty(t2.prototype, "Ml", {
    get: function() {
      return this.kl === true;
    },
    enumerable: false,
    configurable: true
  }), t2;
}();
function ju(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    var n2, r2, i, o, u, s;
    return __generator(this, function(a) {
      switch (a.label) {
        case 0:
          return n2 = ys(t2), (o = n2.vl.get(e)) ? (r2 = o.targetId, n2.Vl.Fa(r2), i = o.view.Rl(), [3, 4]) : [3, 1];
        case 1:
          return [4, ao(n2.bh, he(e))];
        case 2:
          return u = a.sent(), s = n2.Vl.Fa(u.targetId), r2 = u.targetId, [4, zu(n2, e, r2, s === "current")];
        case 3:
          i = a.sent(), n2.Ml && tu(n2.yl, u), a.label = 4;
        case 4:
          return [2, i];
      }
    });
  });
}
function zu(t2, e, n2, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var i, o, u, s, a, c;
    return __generator(this, function(h2) {
      switch (h2.label) {
        case 0:
          return t2.Ll = function(e2, n3, r3) {
            return function(t3, e3, n4, r4) {
              return __awaiter(this, void 0, void 0, function() {
                var i2, o2, u2;
                return __generator(this, function(s2) {
                  switch (s2.label) {
                    case 0:
                      return i2 = e3.view.fl(n4), i2.lc ? [4, ho(t3.bh, e3.query, false).then(function(t4) {
                        var n5 = t4.documents;
                        return e3.view.fl(n5, i2);
                      })] : [3, 2];
                    case 1:
                      i2 = s2.sent(), s2.label = 2;
                    case 2:
                      return o2 = r4 && r4.$e.get(e3.targetId), u2 = e3.view.wi(i2, t3.Ml, o2), [2, (es(t3, e3.targetId, u2.Il), u2.snapshot)];
                  }
                });
              });
            }(t2, e2, n3, r3);
          }, [4, ho(t2.bh, e, true)];
        case 1:
          return i = h2.sent(), o = new Uu(e, i.Rc), u = o.fl(i.documents), s = Tn.Le(n2, r2 && t2.onlineState !== "Offline"), a = o.wi(u, t2.Ml, s), es(t2, n2, a.Il), c = new Mu(e, n2, o), [2, (t2.vl.set(e, c), t2.Sl.has(n2) ? t2.Sl.get(n2).push(e) : t2.Sl.set(n2, [e]), a.snapshot)];
      }
    });
  });
}
function Gu(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    var n2, r2, i;
    return __generator(this, function(o) {
      switch (o.label) {
        case 0:
          return n2 = O(t2), r2 = n2.vl.get(e), (i = n2.Sl.get(r2.targetId)).length > 1 ? [2, (n2.Sl.set(r2.targetId, i.filter(function(t3) {
            return !le(t3, e);
          })), void n2.vl.delete(e))] : n2.Ml ? (n2.Vl.ka(r2.targetId), n2.Vl.Da(r2.targetId) ? [3, 2] : [4, co(n2.bh, r2.targetId, false).then(function() {
            n2.Vl.La(r2.targetId), eu(n2.yl, r2.targetId), $u(n2, r2.targetId);
          }).catch(mi)]) : [3, 3];
        case 1:
          o.sent(), o.label = 2;
        case 2:
          return [3, 5];
        case 3:
          return $u(n2, r2.targetId), [4, co(n2.bh, r2.targetId, true)];
        case 4:
          o.sent(), o.label = 5;
        case 5:
          return [2];
      }
    });
  });
}
function Bu(t2, e, n2) {
  return __awaiter(this, void 0, void 0, function() {
    var r2, i, o, u;
    return __generator(this, function(s) {
      switch (s.label) {
        case 0:
          r2 = ms(t2), s.label = 1;
        case 1:
          return s.trys.push([1, 5, , 6]), [4, function(t3, e2) {
            var n3, r3 = O(t3), i2 = K.now(), o2 = e2.reduce(function(t4, e3) {
              return t4.add(e3.key);
            }, mn());
            return r3.persistence.runTransaction("Locally write mutations", "readwrite", function(t4) {
              return r3.Tc.Xo(t4, o2).next(function(o3) {
                n3 = o3;
                for (var u2 = [], s2 = 0, a = e2; s2 < a.length; s2++) {
                  var c = a[s2], h2 = je(c, n3.get(c.key));
                  h2 != null && u2.push(new Qe(c.key, h2, kt(h2.proto.mapValue), Re.exists(true)));
                }
                return r3.zo.Ri(t4, i2, u2, e2);
              });
            }).then(function(t4) {
              var e3 = t4.xs(n3);
              return {
                batchId: t4.batchId,
                ri: e3
              };
            });
          }(r2.bh, e)];
        case 2:
          return i = s.sent(), r2.Vl.Ca(i.batchId), function(t3, e2, n3) {
            var r3 = t3.$l[t3.currentUser.A()];
            r3 || (r3 = new rn(C)), r3 = r3.zt(e2, n3), t3.$l[t3.currentUser.A()] = r3;
          }(r2, i.batchId, n2), [4, is(r2, i.ri)];
        case 3:
          return s.sent(), [4, pu(r2.yl)];
        case 4:
          return s.sent(), [3, 6];
        case 5:
          return o = s.sent(), u = Er(o, "Failed to persist write"), n2.reject(u), [3, 6];
        case 6:
          return [2];
      }
    });
  });
}
function Qu(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    var n2, r2;
    return __generator(this, function(i) {
      switch (i.label) {
        case 0:
          n2 = O(t2), i.label = 1;
        case 1:
          return i.trys.push([1, 4, , 6]), [4, oo(n2.bh, e)];
        case 2:
          return r2 = i.sent(), e.$e.forEach(function(t3, e2) {
            var r3 = n2.xl.get(e2);
            r3 && (k(t3.qe.size + t3.Ue.size + t3.Qe.size <= 1), t3.qe.size > 0 ? r3.Pl = true : t3.Ue.size > 0 ? k(r3.Pl) : t3.Qe.size > 0 && (k(r3.Pl), r3.Pl = false));
          }), [4, is(n2, r2, e)];
        case 3:
          return i.sent(), [3, 6];
        case 4:
          return [4, mi(i.sent())];
        case 5:
          return i.sent(), [3, 6];
        case 6:
          return [2];
      }
    });
  });
}
function Yu(t2, e, n2) {
  var r2 = O(t2);
  if (r2.Ml && n2 === 0 || !r2.Ml && n2 === 1) {
    var i = [];
    r2.vl.forEach(function(t3, n3) {
      var r3 = n3.view.Gh(e);
      r3.snapshot && i.push(r3.snapshot);
    }), function(t3, e2) {
      var n3 = O(t3);
      n3.onlineState = e2;
      var r3 = false;
      n3.queries.forEach(function(t4, n4) {
        for (var i2 = 0, o = n4.listeners; i2 < o.length; i2++) {
          o[i2].Gh(e2) && (r3 = true);
        }
      }), r3 && xu(n3);
    }(r2.gl, e), i.length && r2.bl.ah(i), r2.onlineState = e, r2.Ml && r2.Vl.Qa(e);
  }
}
function Hu(t2, e, n2) {
  return __awaiter(this, void 0, void 0, function() {
    var r2, i, o, u, s, a;
    return __generator(this, function(c) {
      switch (c.label) {
        case 0:
          return (r2 = O(t2)).Vl.Ba(e, "rejected", n2), i = r2.xl.get(e), (o = i && i.key) ? (u = (u = new rn(tt.H)).zt(o, new Vt(o, X.min())), s = mn().add(o), a = new En(X.min(), new Map(), new sn(C), u, s), [4, Qu(r2, a)]) : [3, 2];
        case 1:
          return c.sent(), r2.Cl = r2.Cl.remove(o), r2.xl.delete(e), rs(r2), [3, 4];
        case 2:
          return [4, co(r2.bh, e, false).then(function() {
            return $u(r2, e, n2);
          }).catch(mi)];
        case 3:
          c.sent(), c.label = 4;
        case 4:
          return [2];
      }
    });
  });
}
function Ku(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    var n2, r2, i;
    return __generator(this, function(o) {
      switch (o.label) {
        case 0:
          n2 = O(t2), r2 = e.batch.batchId, o.label = 1;
        case 1:
          return o.trys.push([1, 4, , 6]), [4, ro(n2.bh, e)];
        case 2:
          return i = o.sent(), Ju(n2, r2, null), Zu(n2, r2), n2.Vl.Na(r2, "acknowledged"), [4, is(n2, i)];
        case 3:
          return o.sent(), [3, 6];
        case 4:
          return [4, mi(o.sent())];
        case 5:
          return o.sent(), [3, 6];
        case 6:
          return [2];
      }
    });
  });
}
function Xu(t2, e, n2) {
  return __awaiter(this, void 0, void 0, function() {
    var r2, i;
    return __generator(this, function(o) {
      switch (o.label) {
        case 0:
          r2 = O(t2), o.label = 1;
        case 1:
          return o.trys.push([1, 4, , 6]), [4, function(t3, e2) {
            var n3 = O(t3);
            return n3.persistence.runTransaction("Reject batch", "readwrite-primary", function(t4) {
              var r3;
              return n3.zo.Pi(t4, e2).next(function(e3) {
                return k(e3 !== null), r3 = e3.keys(), n3.zo.Ci(t4, e3);
              }).next(function() {
                return n3.zo.$i(t4);
              }).next(function() {
                return n3.Tc.Xo(t4, r3);
              });
            });
          }(r2.bh, e)];
        case 2:
          return i = o.sent(), Ju(r2, e, n2), Zu(r2, e), r2.Vl.Na(e, "rejected", n2), [4, is(r2, i)];
        case 3:
          return o.sent(), [3, 6];
        case 4:
          return [4, mi(o.sent())];
        case 5:
          return o.sent(), [3, 6];
        case 6:
          return [2];
      }
    });
  });
}
function Wu(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    var n2, r2, i, o, u;
    return __generator(this, function(s) {
      switch (s.label) {
        case 0:
          uu((n2 = O(t2)).yl) || N("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), s.label = 1;
        case 1:
          return s.trys.push([1, 3, , 4]), [4, function(t3) {
            var e2 = O(t3);
            return e2.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function(t4) {
              return e2.zo.Vi(t4);
            });
          }(n2.bh)];
        case 2:
          return (r2 = s.sent()) === -1 ? [2, void e.resolve()] : ((i = n2.Fl.get(r2) || []).push(e), n2.Fl.set(r2, i), [3, 4]);
        case 3:
          return o = s.sent(), u = Er(o, "Initialization of waitForPendingWrites() operation failed"), e.reject(u), [3, 4];
        case 4:
          return [2];
      }
    });
  });
}
function Zu(t2, e) {
  (t2.Fl.get(e) || []).forEach(function(t3) {
    t3.resolve();
  }), t2.Fl.delete(e);
}
function Ju(t2, e, n2) {
  var r2 = O(t2), i = r2.$l[r2.currentUser.A()];
  if (i) {
    var o = i.get(e);
    o && (n2 ? o.reject(n2) : o.resolve(), i = i.remove(e)), r2.$l[r2.currentUser.A()] = i;
  }
}
function $u(t2, e, n2) {
  n2 === void 0 && (n2 = null), t2.Vl.ka(e);
  for (var r2 = 0, i = t2.Sl.get(e); r2 < i.length; r2++) {
    var o = i[r2];
    t2.vl.delete(o), n2 && t2.bl.Bl(o, n2);
  }
  t2.Sl.delete(e), t2.Ml && t2.Nl.Fc(e).forEach(function(e2) {
    t2.Nl.Fi(e2) || ts(t2, e2);
  });
}
function ts(t2, e) {
  t2.Dl.delete(e.path.rt());
  var n2 = t2.Cl.get(e);
  n2 !== null && (eu(t2.yl, n2), t2.Cl = t2.Cl.remove(e), t2.xl.delete(n2), rs(t2));
}
function es(t2, e, n2) {
  for (var r2 = 0, i = n2; r2 < i.length; r2++) {
    var o = i[r2];
    o instanceof Lu ? (t2.Nl.nr(o.key, e), ns(t2, o)) : o instanceof Ru ? (N("SyncEngine", "Document no longer in limbo: " + o.key), t2.Nl.ir(o.key, e), t2.Nl.Fi(o.key) || ts(t2, o.key)) : x();
  }
}
function ns(t2, e) {
  var n2 = e.key, r2 = n2.path.rt();
  t2.Cl.get(n2) || t2.Dl.has(r2) || (N("SyncEngine", "New document in limbo: " + n2), t2.Dl.add(r2), rs(t2));
}
function rs(t2) {
  for (; t2.Dl.size > 0 && t2.Cl.size < t2.pl; ) {
    var e = t2.Dl.values().next().value;
    t2.Dl.delete(e);
    var n2 = new tt(Z.ot(e)), r2 = t2.Ol.next();
    t2.xl.set(r2, new qu(n2)), t2.Cl = t2.Cl.zt(n2, r2), tu(t2.yl, new ge(he(re(n2.path)), r2, 2, H.q));
  }
}
function is(t2, e, n2) {
  return __awaiter(this, void 0, void 0, function() {
    var r2, i, o, u;
    return __generator(this, function(s) {
      switch (s.label) {
        case 0:
          return r2 = O(t2), i = [], o = [], u = [], r2.vl.et() ? [3, 3] : (r2.vl.forEach(function(t3, s2) {
            u.push(r2.Ll(s2, e, n2).then(function(t4) {
              if (t4) {
                r2.Ml && r2.Vl.Ba(s2.targetId, t4.fromCache ? "not-current" : "current"), i.push(t4);
                var e2 = Ji.oc(s2.targetId, t4);
                o.push(e2);
              }
            }));
          }), [4, Promise.all(u)]);
        case 1:
          return s.sent(), r2.bl.ah(i), [4, function(t3, e2) {
            return __awaiter(this, void 0, void 0, function() {
              var n3, r3, i2, o2, u2, s2, a, c, h2;
              return __generator(this, function(f) {
                switch (f.label) {
                  case 0:
                    n3 = O(t3), f.label = 1;
                  case 1:
                    return f.trys.push([1, 3, , 4]), [4, n3.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function(t4) {
                      return lr.forEach(e2, function(e3) {
                        return lr.forEach(e3.ic, function(r4) {
                          return n3.persistence.Ti.nr(t4, e3.targetId, r4);
                        }).next(function() {
                          return lr.forEach(e3.rc, function(r4) {
                            return n3.persistence.Ti.ir(t4, e3.targetId, r4);
                          });
                        });
                      });
                    })];
                  case 2:
                    return f.sent(), [3, 4];
                  case 3:
                    if (!mr(r3 = f.sent()))
                      throw r3;
                    return N("LocalStore", "Failed to update sequence numbers: " + r3), [3, 4];
                  case 4:
                    for (i2 = 0, o2 = e2; i2 < o2.length; i2++)
                      u2 = o2[i2], s2 = u2.targetId, u2.fromCache || (a = n3.fc.get(s2), c = a.Ot, h2 = a.Lt(c), n3.fc = n3.fc.zt(s2, h2));
                    return [2];
                }
              });
            });
          }(r2.bh, o)];
        case 2:
          s.sent(), s.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
function os(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    var n2, r2;
    return __generator(this, function(i) {
      switch (i.label) {
        case 0:
          return (n2 = O(t2)).currentUser.isEqual(e) ? [3, 3] : (N("SyncEngine", "User change. New user:", e.A()), [4, no(n2.bh, e)]);
        case 1:
          return r2 = i.sent(), n2.currentUser = e, function(t3, e2) {
            t3.Fl.forEach(function(t4) {
              t4.forEach(function(t5) {
                t5.reject(new q(M.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
              });
            }), t3.Fl.clear();
          }(n2), n2.Vl.Ua(e, r2.mc, r2.Ac), [4, is(n2, r2.Ic)];
        case 2:
          i.sent(), i.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
function us(t2, e) {
  var n2 = O(t2), r2 = n2.xl.get(e);
  if (r2 && r2.Pl)
    return mn().add(r2.key);
  var i = mn(), o = n2.Sl.get(e);
  if (!o)
    return i;
  for (var u = 0, s = o; u < s.length; u++) {
    var a = s[u], c = n2.vl.get(a);
    i = i.Pe(c.view._l);
  }
  return i;
}
function ss(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    var n2, r2, i;
    return __generator(this, function(o) {
      switch (o.label) {
        case 0:
          return [4, ho((n2 = O(t2)).bh, e.query, true)];
        case 1:
          return r2 = o.sent(), i = e.view.Al(r2), [2, (n2.Ml && es(n2, e.targetId, i.Il), i)];
      }
    });
  });
}
function as(t2) {
  return __awaiter(this, void 0, void 0, function() {
    var e;
    return __generator(this, function(n2) {
      return [2, lo((e = O(t2)).bh).then(function(t3) {
        return is(e, t3);
      })];
    });
  });
}
function cs(t2, e, n2, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var i, o;
    return __generator(this, function(u) {
      switch (u.label) {
        case 0:
          return [4, function(t3, e2) {
            var n3 = O(t3), r3 = O(n3.zo);
            return n3.persistence.runTransaction("Lookup mutation documents", "readonly", function(t4) {
              return r3.yi(t4, e2).next(function(e3) {
                return e3 ? n3.Tc.Xo(t4, e3) : lr.resolve(null);
              });
            });
          }((i = O(t2)).bh, e)];
        case 1:
          return (o = u.sent()) === null ? [3, 6] : n2 !== "pending" ? [3, 3] : [4, pu(i.yl)];
        case 2:
          return u.sent(), [3, 4];
        case 3:
          n2 === "acknowledged" || n2 === "rejected" ? (Ju(i, e, r2 || null), Zu(i, e), function(t3, e2) {
            O(O(t3).zo).xi(e2);
          }(i.bh, e)) : x(), u.label = 4;
        case 4:
          return [4, is(i, o)];
        case 5:
          return u.sent(), [3, 7];
        case 6:
          N("SyncEngine", "Cannot apply mutation batch with id: " + e), u.label = 7;
        case 7:
          return [2];
      }
    });
  });
}
function hs(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    var n2, r2, i, o, u, s, a, c;
    return __generator(this, function(h2) {
      switch (h2.label) {
        case 0:
          return ys(n2 = O(t2)), ms(n2), e !== true || n2.kl === true ? [3, 3] : (r2 = n2.Vl.va(), [4, fs(n2, r2.it())]);
        case 1:
          return i = h2.sent(), n2.kl = true, [4, bu(n2.yl, true)];
        case 2:
          for (h2.sent(), o = 0, u = i; o < u.length; o++)
            s = u[o], tu(n2.yl, s);
          return [3, 7];
        case 3:
          return e !== false || n2.kl === false ? [3, 7] : (a = [], c = Promise.resolve(), n2.Sl.forEach(function(t3, e2) {
            n2.Vl.Ma(e2) ? a.push(e2) : c = c.then(function() {
              return $u(n2, e2), co(n2.bh, e2, true);
            }), eu(n2.yl, e2);
          }), [4, c]);
        case 4:
          return h2.sent(), [4, fs(n2, a)];
        case 5:
          return h2.sent(), function(t3) {
            var e2 = O(t3);
            e2.xl.forEach(function(t4, n3) {
              eu(e2.yl, n3);
            }), e2.Nl.Oc(), e2.xl = new Map(), e2.Cl = new rn(tt.H);
          }(n2), n2.kl = false, [4, bu(n2.yl, false)];
        case 6:
          h2.sent(), h2.label = 7;
        case 7:
          return [2];
      }
    });
  });
}
function fs(t2, e, n2) {
  return __awaiter(this, void 0, void 0, function() {
    var n3, r2, i, o, u, s, a, c, h2, f, l, p2, d, v2;
    return __generator(this, function(y2) {
      switch (y2.label) {
        case 0:
          n3 = O(t2), r2 = [], i = [], o = 0, u = e, y2.label = 1;
        case 1:
          return o < u.length ? (s = u[o], a = void 0, (c = n3.Sl.get(s)) && c.length !== 0 ? [4, ao(n3.bh, he(c[0]))] : [3, 7]) : [3, 13];
        case 2:
          a = y2.sent(), h2 = 0, f = c, y2.label = 3;
        case 3:
          return h2 < f.length ? (l = f[h2], p2 = n3.vl.get(l), [4, ss(n3, p2)]) : [3, 6];
        case 4:
          (d = y2.sent()).snapshot && i.push(d.snapshot), y2.label = 5;
        case 5:
          return h2++, [3, 3];
        case 6:
          return [3, 11];
        case 7:
          return [4, fo(n3.bh, s)];
        case 8:
          return v2 = y2.sent(), [4, ao(n3.bh, v2)];
        case 9:
          return a = y2.sent(), [4, zu(n3, ls(v2), s, false)];
        case 10:
          y2.sent(), y2.label = 11;
        case 11:
          r2.push(a), y2.label = 12;
        case 12:
          return o++, [3, 1];
        case 13:
          return [2, (n3.bl.ah(i), r2)];
      }
    });
  });
}
function ls(t2) {
  return ne(t2.path, t2.collectionGroup, t2.orderBy, t2.filters, t2.limit, "F", t2.startAt, t2.endAt);
}
function ps(t2) {
  var e = O(t2);
  return O(O(e.bh).persistence).Uo();
}
function ds(t2, e, n2, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var i, o, u;
    return __generator(this, function(s) {
      switch (s.label) {
        case 0:
          return (i = O(t2)).kl ? (N("SyncEngine", "Ignoring unexpected query state notification."), [3, 8]) : [3, 1];
        case 1:
          if (!i.Sl.has(e))
            return [3, 8];
          switch (n2) {
            case "current":
            case "not-current":
              return [3, 2];
            case "rejected":
              return [3, 5];
          }
          return [3, 7];
        case 2:
          return [4, lo(i.bh)];
        case 3:
          return o = s.sent(), u = En.Me(e, n2 === "current"), [4, is(i, o, u)];
        case 4:
          return s.sent(), [3, 8];
        case 5:
          return [4, co(i.bh, e, true)];
        case 6:
          return s.sent(), $u(i, e, r2), [3, 8];
        case 7:
          x(), s.label = 8;
        case 8:
          return [2];
      }
    });
  });
}
function vs(t2, e, n2) {
  return __awaiter(this, void 0, void 0, function() {
    var r2, i, o, u, s, a, c, h2, f, l;
    return __generator(this, function(p2) {
      switch (p2.label) {
        case 0:
          if (!(r2 = ys(t2)).kl)
            return [3, 10];
          i = 0, o = e, p2.label = 1;
        case 1:
          return i < o.length ? (u = o[i], r2.Sl.has(u) ? (N("SyncEngine", "Adding an already active target " + u), [3, 5]) : [4, fo(r2.bh, u)]) : [3, 6];
        case 2:
          return s = p2.sent(), [4, ao(r2.bh, s)];
        case 3:
          return a = p2.sent(), [4, zu(r2, ls(s), a.targetId, false)];
        case 4:
          p2.sent(), tu(r2.yl, a), p2.label = 5;
        case 5:
          return i++, [3, 1];
        case 6:
          c = function(t3) {
            return __generator(this, function(e2) {
              switch (e2.label) {
                case 0:
                  return r2.Sl.has(t3) ? [4, co(r2.bh, t3, false).then(function() {
                    eu(r2.yl, t3), $u(r2, t3);
                  }).catch(mi)] : [3, 2];
                case 1:
                  e2.sent(), e2.label = 2;
                case 2:
                  return [2];
              }
            });
          }, h2 = 0, f = n2, p2.label = 7;
        case 7:
          return h2 < f.length ? (l = f[h2], [5, c(l)]) : [3, 10];
        case 8:
          p2.sent(), p2.label = 9;
        case 9:
          return h2++, [3, 7];
        case 10:
          return [2];
      }
    });
  });
}
function ys(t2) {
  var e = O(t2);
  return e.yl.Dh.Lh = Qu.bind(null, e), e.yl.Dh.vn = us.bind(null, e), e.yl.Dh.Mh = Hu.bind(null, e), e.bl.ah = Du.bind(null, e.gl), e.bl.Bl = Su.bind(null, e.gl), e;
}
function ms(t2) {
  var e = O(t2);
  return e.yl.Dh.Bh = Ku.bind(null, e), e.yl.Dh.qh = Xu.bind(null, e), e;
}
var ws = function() {
  function t2() {
    this.synchronizeTabs = false;
  }
  return t2.prototype.initialize = function(t3) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return this.Qt = Bo(t3.yu.t), this.Vl = this.Wl(t3), this.persistence = this.jl(t3), [4, this.persistence.start()];
          case 1:
            return e.sent(), this.Gl = this.zl(t3), this.bh = this.Hl(t3), [2];
        }
      });
    });
  }, t2.prototype.zl = function(t3) {
    return null;
  }, t2.prototype.Hl = function(t3) {
    return eo(this.persistence, new $i(), t3.Jl, this.Qt);
  }, t2.prototype.jl = function(t3) {
    return new To(Ao.ia, this.Qt);
  }, t2.prototype.Wl = function(t3) {
    return new Ro();
  }, t2.prototype.terminate = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t3) {
        switch (t3.label) {
          case 0:
            return this.Gl && this.Gl.stop(), [4, this.Vl.ko()];
          case 1:
            return t3.sent(), [4, this.persistence.ko()];
          case 2:
            return t3.sent(), [2];
        }
      });
    });
  }, t2;
}(), bs = function(t2) {
  function e(e2, n2, r2) {
    var i = this;
    return (i = t2.call(this) || this).Yl = e2, i.cacheSizeBytes = n2, i.forceOwnership = r2, i.synchronizeTabs = false, i;
  }
  return __extends$1(e, t2), e.prototype.initialize = function(e2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, t2.prototype.initialize.call(this, e2)];
          case 1:
            return n2.sent(), [4, po(this.bh)];
          case 2:
            return n2.sent(), [4, this.Yl.initialize(this, e2)];
          case 3:
            return n2.sent(), [4, ms(this.Yl._a)];
          case 4:
            return n2.sent(), [4, pu(this.Yl.yl)];
          case 5:
            return n2.sent(), [2];
        }
      });
    });
  }, e.prototype.Hl = function(t3) {
    return eo(this.persistence, new $i(), t3.Jl, this.Qt);
  }, e.prototype.zl = function(t3) {
    var e2 = this.persistence.Ti.lr;
    return new Ci(e2, t3._s);
  }, e.prototype.jl = function(t3) {
    var e2 = Xi(t3.yu.t, t3.yu.persistenceKey), n2 = this.cacheSizeBytes !== void 0 ? yi.Ys(this.cacheSizeBytes) : yi.ti;
    return new Yi(this.synchronizeTabs, e2, t3.clientId, n2, t3._s, zo(), Go(), this.Qt, this.Vl, !!this.forceOwnership);
  }, e.prototype.Wl = function(t3) {
    return new Ro();
  }, e;
}(ws), _s = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, e2, n2, false) || this).Yl = e2, r2.cacheSizeBytes = n2, r2.synchronizeTabs = true, r2;
  }
  return __extends$1(e, t2), e.prototype.initialize = function(e2) {
    return __awaiter(this, void 0, void 0, function() {
      var n2, r2 = this;
      return __generator(this, function(i) {
        switch (i.label) {
          case 0:
            return [4, t2.prototype.initialize.call(this, e2)];
          case 1:
            return i.sent(), n2 = this.Yl._a, this.Vl instanceof Lo ? (this.Vl._a = {
              eu: cs.bind(null, n2),
              nu: ds.bind(null, n2),
              su: vs.bind(null, n2),
              Uo: ps.bind(null, n2),
              tu: as.bind(null, n2)
            }, [4, this.Vl.start()]) : [3, 3];
          case 2:
            i.sent(), i.label = 3;
          case 3:
            return [4, this.persistence.Ro(function(t3) {
              return __awaiter(r2, void 0, void 0, function() {
                return __generator(this, function(e3) {
                  switch (e3.label) {
                    case 0:
                      return [4, hs(this.Yl._a, t3)];
                    case 1:
                      return e3.sent(), this.Gl && (t3 && !this.Gl.Er ? this.Gl.start(this.bh) : t3 || this.Gl.stop()), [2];
                  }
                });
              });
            })];
          case 4:
            return i.sent(), [2];
        }
      });
    });
  }, e.prototype.Wl = function(t3) {
    var e2 = zo();
    if (!Lo.Kn(e2))
      throw new q(M.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
    var n2 = Xi(t3.yu.t, t3.yu.persistenceKey);
    return new Lo(e2, t3._s, n2, t3.clientId, t3.Jl);
  }, e;
}(bs), Is = function() {
  function t2() {
  }
  return t2.prototype.initialize = function(t3, e) {
    return __awaiter(this, void 0, void 0, function() {
      var n2 = this;
      return __generator(this, function(r2) {
        switch (r2.label) {
          case 0:
            return this.bh ? [3, 2] : (this.bh = t3.bh, this.Vl = t3.Vl, this.Sh = this.Xl(e), this.yl = this.Zl(e), this.gl = this.t_(e), this._a = this.e_(e, !t3.synchronizeTabs), this.Vl.fa = function(t4) {
              return Yu(n2._a, t4, 1);
            }, this.yl.Dh.n_ = os.bind(null, this._a), [4, bu(this.yl, this._a.Ml)]);
          case 1:
            r2.sent(), r2.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, t2.prototype.t_ = function(t3) {
    return new Tu();
  }, t2.prototype.Xl = function(t3) {
    var e, n2 = Bo(t3.yu.t), r2 = (e = t3.yu, new jo(e));
    return function(t4, e2, n3) {
      return new Xo(t4, e2, n3);
    }(t3.credentials, r2, n2);
  }, t2.prototype.Zl = function(t3) {
    var e, n2, r2, i, o, u = this;
    return e = this.bh, n2 = this.Sh, r2 = t3._s, i = function(t4) {
      return Yu(u._a, t4, 0);
    }, o = Mo.Kn() ? new Mo() : new Uo(), new Zo(e, n2, r2, i, o);
  }, t2.prototype.e_ = function(t3, e) {
    return function(t4, e2, n2, r2, i, o, u) {
      var s = new Fu(t4, e2, n2, r2, i, o);
      return u && (s.kl = true), s;
    }(this.bh, this.yl, this.gl, this.Vl, t3.Jl, t3.pl, e);
  }, t2.prototype.terminate = function() {
    return function(t3) {
      return __awaiter(this, void 0, void 0, function() {
        var e;
        return __generator(this, function(n2) {
          switch (n2.label) {
            case 0:
              return e = O(t3), N("RemoteStore", "RemoteStore shutting down."), e.Nh.add(5), [4, $o(e)];
            case 1:
              return n2.sent(), e.Fh.ko(), e.Oh.set("Unknown"), [2];
          }
        });
      });
    }(this.yl);
  }, t2;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ts = function() {
  function t2(t3) {
    this.observer = t3, this.muted = false;
  }
  return t2.prototype.next = function(t3) {
    this.observer.next && this.s_(this.observer.next, t3);
  }, t2.prototype.error = function(t3) {
    this.observer.error ? this.s_(this.observer.error, t3) : console.error("Uncaught Error in snapshot listener:", t3);
  }, t2.prototype.i_ = function() {
    this.muted = true;
  }, t2.prototype.s_ = function(t3, e) {
    var n2 = this;
    this.muted || setTimeout(function() {
      n2.muted || t3(e);
    }, 0);
  }, t2;
}(), As = function() {
  function t2() {
    for (var t3 = [], e = 0; e < arguments.length; e++)
      t3[e] = arguments[e];
    for (var n2 = 0; n2 < t3.length; ++n2)
      if (t3[n2].length === 0)
        throw new q(M.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this.f_ = new $(t3);
  }
  return t2.prototype.isEqual = function(t3) {
    return this.f_.isEqual(t3.f_);
  }, t2;
}(), Ds = function(t2) {
  this._methodName = t2;
}, Ss = function(t2) {
  this.d_ = t2;
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xs(t2, e, n2) {
  if (!n2)
    throw new q(M.INVALID_ARGUMENT, "Function " + t2 + "() cannot be called with an empty " + e + ".");
}
function ks(t2, e) {
  if (e === void 0)
    return {
      merge: false
    };
  if (e.mergeFields !== void 0 && e.merge !== void 0)
    throw new q(M.INVALID_ARGUMENT, "Invalid options passed to function " + t2 + '(): You cannot specify both "merge" and "mergeFields".');
  return e;
}
function Os(t2, e, n2, r2) {
  if (e === true && r2 === true)
    throw new q(M.INVALID_ARGUMENT, t2 + " and " + n2 + " cannot be used together.");
}
function Ps(t2) {
  if (!tt.wt(t2))
    throw new q(M.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t2 + " has " + t2.length + ".");
}
function Vs(t2) {
  if (tt.wt(t2))
    throw new q(M.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t2 + " has " + t2.length + ".");
}
function Cs(t2) {
  if (t2 === void 0)
    return "undefined";
  if (t2 === null)
    return "null";
  if (typeof t2 == "string")
    return t2.length > 20 && (t2 = t2.substring(0, 20) + "..."), JSON.stringify(t2);
  if (typeof t2 == "number" || typeof t2 == "boolean")
    return "" + t2;
  if (typeof t2 == "object") {
    if (t2 instanceof Array)
      return "an array";
    var e = function(t3) {
      if (t3.constructor) {
        var e2 = /function\s+([^\s(]+)\s*\(/.exec(t3.constructor.toString());
        if (e2 && e2.length > 1)
          return e2[1];
      }
      return null;
    }(t2);
    return e ? "a custom " + e + " object" : "an object";
  }
  return typeof t2 == "function" ? "a function" : x();
}
function Ls(t2, e) {
  if ("_delegate" in t2 && (t2 = t2.d_), !(t2 instanceof e)) {
    if (e.name === t2.constructor.name)
      throw new q(M.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    var n2 = Cs(t2);
    throw new q(M.INVALID_ARGUMENT, "Expected type '" + e.name + "', but it was: " + n2);
  }
  return t2;
}
function Rs(t2, e) {
  if (e <= 0)
    throw new q(M.INVALID_ARGUMENT, "Function " + t2 + "() requires a positive number, but it was: " + e + ".");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Us = function() {
  function t2(t3) {
    var e;
    if (t3.host === void 0) {
      if (t3.ssl !== void 0)
        throw new q(M.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = true;
    } else
      this.host = t3.host, this.ssl = (e = t3.ssl) === null || e === void 0 || e;
    if (this.credentials = t3.credentials, this.ignoreUndefinedProperties = !!t3.ignoreUndefinedProperties, t3.cacheSizeBytes === void 0)
      this.cacheSizeBytes = 41943040;
    else {
      if (t3.cacheSizeBytes !== -1 && t3.cacheSizeBytes < 1048576)
        throw new q(M.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = t3.cacheSizeBytes;
    }
    this.experimentalForceLongPolling = !!t3.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t3.experimentalAutoDetectLongPolling, Os("experimentalForceLongPolling", t3.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t3.experimentalAutoDetectLongPolling);
  }
  return t2.prototype.isEqual = function(t3) {
    return this.host === t3.host && this.ssl === t3.ssl && this.credentials === t3.credentials && this.cacheSizeBytes === t3.cacheSizeBytes && this.experimentalForceLongPolling === t3.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t3.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t3.ignoreUndefinedProperties;
  }, t2;
}(), Ms = new Map(), qs = function() {
  function t2(t3, e) {
    this.w_ = "(lite)", this.E_ = new Us({}), this.T_ = false, t3 instanceof I ? (this.I_ = t3, this.m_ = new G()) : (this.A_ = t3, this.I_ = function(t4) {
      if (!Object.prototype.hasOwnProperty.apply(t4.options, ["projectId"]))
        throw new q(M.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new I(t4.options.projectId);
    }(t3), this.m_ = new B(e));
  }
  return Object.defineProperty(t2.prototype, "app", {
    get: function() {
      if (!this.A_)
        throw new q(M.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
      return this.A_;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "R_", {
    get: function() {
      return this.T_;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "P_", {
    get: function() {
      return this.y_ !== void 0;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.g_ = function(t3) {
    if (this.T_)
      throw new q(M.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this.E_ = new Us(t3), t3.credentials !== void 0 && (this.m_ = function(t4) {
      if (!t4)
        return new G();
      switch (t4.type) {
        case "gapi":
          var e = t4.client;
          return k(!(typeof e != "object" || e === null || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new Y(e, t4.sessionIndex || "0");
        case "provider":
          return t4.client;
        default:
          throw new q(M.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
      }
    }(t3.credentials));
  }, t2.prototype.V_ = function() {
    return this.E_;
  }, t2.prototype.p_ = function() {
    return this.T_ = true, this.E_;
  }, t2.prototype._delete = function() {
    return this.y_ || (this.y_ = this.b_()), this.y_;
  }, t2.prototype.toJSON = function() {
    return {
      app: this.A_,
      t: this.I_,
      settings: this.E_
    };
  }, t2.prototype.b_ = function() {
    return t3 = this, (e = Ms.get(t3)) && (N("ComponentProvider", "Removing Datastore"), Ms.delete(t3), e.terminate()), Promise.resolve();
    var t3, e;
  }, t2;
}(), Fs = function() {
  function t2(t3, e, n2) {
    this.v_ = e, this.S_ = n2, this.type = "document", this.firestore = t3;
  }
  return Object.defineProperty(t2.prototype, "D_", {
    get: function() {
      return this.S_.path;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "id", {
    get: function() {
      return this.S_.path.tt();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "path", {
    get: function() {
      return this.S_.path.rt();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "parent", {
    get: function() {
      return new zs(this.firestore, this.v_, this.S_.path.X());
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.withConverter = function(e) {
    return new t2(this.firestore, e, this.S_);
  }, t2;
}(), js = function() {
  function t2(t3, e, n2) {
    this.v_ = e, this.C_ = n2, this.type = "query", this.firestore = t3;
  }
  return t2.prototype.withConverter = function(e) {
    return new t2(this.firestore, e, this.C_);
  }, t2;
}(), zs = function(t2) {
  function e(e2, n2, r2) {
    var i = this;
    return (i = t2.call(this, e2, n2, re(r2)) || this).firestore = e2, i.D_ = r2, i.type = "collection", i;
  }
  return __extends$1(e, t2), Object.defineProperty(e.prototype, "id", {
    get: function() {
      return this.C_.path.tt();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "path", {
    get: function() {
      return this.C_.path.rt();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "parent", {
    get: function() {
      var t3 = this.D_.X();
      return t3.et() ? null : new Fs(this.firestore, null, new tt(t3));
    },
    enumerable: false,
    configurable: true
  }), e.prototype.withConverter = function(t3) {
    return new e(this.firestore, t3, this.D_);
  }, e;
}(js);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gs(t2, e) {
  for (var n2, r2 = [], i = 2; i < arguments.length; i++)
    r2[i - 2] = arguments[i];
  if (t2 instanceof Ss && (t2 = t2.d_), xs("collection", "path", e), t2 instanceof qs)
    return Vs(n2 = Z.ot.apply(Z, __spreadArrays$1([e], r2))), new zs(t2, null, n2);
  if (!(t2 instanceof Fs || t2 instanceof zs))
    throw new q(M.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
  return Vs(n2 = Z.ot.apply(Z, __spreadArrays$1([t2.path], r2)).child(Z.ot(e))), new zs(t2.firestore, null, n2);
}
function Bs(t2, e) {
  for (var n2, r2 = [], i = 2; i < arguments.length; i++)
    r2[i - 2] = arguments[i];
  if (t2 instanceof Ss && (t2 = t2.d_), arguments.length === 1 && (e = V.u()), xs("doc", "path", e), t2 instanceof qs)
    return Ps(n2 = Z.ot.apply(Z, __spreadArrays$1([e], r2))), new Fs(t2, null, new tt(n2));
  if (!(t2 instanceof Fs || t2 instanceof zs))
    throw new q(M.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
  return Ps(n2 = t2.D_.child(Z.ot.apply(Z, __spreadArrays$1([e], r2)))), new Fs(t2.firestore, t2 instanceof zs ? t2.v_ : null, new tt(n2));
}
function Qs(t2, e) {
  return t2 instanceof Ss && (t2 = t2.d_), e instanceof Ss && (e = e.d_), (t2 instanceof Fs || t2 instanceof zs) && (e instanceof Fs || e instanceof zs) && t2.firestore === e.firestore && t2.path === e.path && t2.v_ === e.v_;
}
function Ys(t2, e) {
  return t2 instanceof Ss && (t2 = t2.d_), e instanceof Ss && (e = e.d_), t2 instanceof js && e instanceof js && t2.firestore === e.firestore && le(t2.C_, e.C_) && t2.v_ === e.v_;
}
var Hs = function() {
  function t2(t3, e) {
    if (!isFinite(t3) || t3 < -90 || t3 > 90)
      throw new q(M.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t3);
    if (!isFinite(e) || e < -180 || e > 180)
      throw new q(M.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
    this.x_ = t3, this.N_ = e;
  }
  return Object.defineProperty(t2.prototype, "latitude", {
    get: function() {
      return this.x_;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "longitude", {
    get: function() {
      return this.N_;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.isEqual = function(t3) {
    return this.x_ === t3.x_ && this.N_ === t3.N_;
  }, t2.prototype.toJSON = function() {
    return {
      latitude: this.x_,
      longitude: this.N_
    };
  }, t2.prototype.U = function(t3) {
    return C(this.x_, t3.x_) || C(this.N_, t3.N_);
  }, t2;
}(), Ks = /^__.*__$/, Xs = function() {
  function t2(t3, e, n2) {
    this.data = t3, this.Gt = e, this.fieldTransforms = n2;
  }
  return t2.prototype.F_ = function(t3, e) {
    return this.Gt !== null ? new Qe(t3, this.data, this.Gt, e, this.fieldTransforms) : new Be(t3, this.data, e, this.fieldTransforms);
  }, t2;
}(), Ws = function() {
  function t2(t3, e, n2) {
    this.data = t3, this.Gt = e, this.fieldTransforms = n2;
  }
  return t2.prototype.F_ = function(t3, e) {
    return new Qe(t3, this.data, this.Gt, e, this.fieldTransforms);
  }, t2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zs(t2) {
  switch (t2) {
    case 0:
    case 2:
    case 1:
      return true;
    case 3:
    case 4:
      return false;
    default:
      throw x();
  }
}
var Js = function() {
  function t2(t3, e, n2, r2, i, o) {
    this.settings = t3, this.t = e, this.Qt = n2, this.ignoreUndefinedProperties = r2, i === void 0 && this.O_(), this.fieldTransforms = i || [], this.Gt = o || [];
  }
  return Object.defineProperty(t2.prototype, "path", {
    get: function() {
      return this.settings.path;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "k_", {
    get: function() {
      return this.settings.k_;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.M_ = function(e) {
    return new t2(Object.assign(Object.assign({}, this.settings), e), this.t, this.Qt, this.ignoreUndefinedProperties, this.fieldTransforms, this.Gt);
  }, t2.prototype.L_ = function(t3) {
    var e, n2 = (e = this.path) === null || e === void 0 ? void 0 : e.child(t3), r2 = this.M_({
      path: n2,
      B_: false
    });
    return r2.q_(t3), r2;
  }, t2.prototype.U_ = function(t3) {
    var e, n2 = (e = this.path) === null || e === void 0 ? void 0 : e.child(t3), r2 = this.M_({
      path: n2,
      B_: false
    });
    return r2.O_(), r2;
  }, t2.prototype.Q_ = function(t3) {
    return this.M_({
      path: void 0,
      B_: true
    });
  }, t2.prototype.K_ = function(t3) {
    return ga(t3, this.settings.methodName, this.settings.W_ || false, this.path, this.settings.j_);
  }, t2.prototype.contains = function(t3) {
    return this.Gt.find(function(e) {
      return t3.nt(e);
    }) !== void 0 || this.fieldTransforms.find(function(e) {
      return t3.nt(e.field);
    }) !== void 0;
  }, t2.prototype.O_ = function() {
    if (this.path)
      for (var t3 = 0; t3 < this.path.length; t3++)
        this.q_(this.path.get(t3));
  }, t2.prototype.q_ = function(t3) {
    if (t3.length === 0)
      throw this.K_("Document fields must not be empty");
    if (Zs(this.k_) && Ks.test(t3))
      throw this.K_('Document fields cannot begin and end with "__"');
  }, t2;
}(), $s = function() {
  function t2(t3, e, n2) {
    this.t = t3, this.ignoreUndefinedProperties = e, this.Qt = n2 || Bo(t3);
  }
  return t2.prototype.G_ = function(t3, e, n2, r2) {
    return r2 === void 0 && (r2 = false), new Js({
      k_: t3,
      methodName: e,
      j_: n2,
      path: $.ct(),
      B_: false,
      W_: r2
    }, this.t, this.Qt, this.ignoreUndefinedProperties);
  }, t2;
}();
function ta(t2) {
  var e = t2.p_(), n2 = Bo(t2.I_);
  return new $s(t2.I_, !!e.ignoreUndefinedProperties, n2);
}
function ea(t2, e, n2, r2, i, o) {
  o === void 0 && (o = {});
  var u = t2.G_(o.merge || o.mergeFields ? 2 : 0, e, n2, i);
  da("Data must be an object, but it was:", u, r2);
  var s, a, c = la(r2, u);
  if (o.merge)
    s = new it(u.Gt), a = u.fieldTransforms;
  else if (o.mergeFields) {
    for (var h2 = [], f = 0, l = o.mergeFields; f < l.length; f++) {
      var p2 = va(e, l[f], n2);
      if (!u.contains(p2))
        throw new q(M.INVALID_ARGUMENT, "Field '" + p2 + "' is specified in your field mask but missing from your input data.");
      wa(h2, p2) || h2.push(p2);
    }
    s = new it(h2), a = u.fieldTransforms.filter(function(t3) {
      return s.Tt(t3.field);
    });
  } else
    s = null, a = u.fieldTransforms;
  return new Xs(new St(c), s, a);
}
var na = function(t2) {
  function e() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return __extends$1(e, t2), e.prototype.z_ = function(t3) {
    if (t3.k_ !== 2)
      throw t3.k_ === 1 ? t3.K_(this._methodName + "() can only appear at the top level of your update data") : t3.K_(this._methodName + "() cannot be used with set() unless you pass {merge:true}");
    return t3.Gt.push(t3.path), null;
  }, e.prototype.isEqual = function(t3) {
    return t3 instanceof e;
  }, e;
}(Ds);
function ra(t2, e, n2) {
  return new Js({
    k_: 3,
    j_: e.settings.j_,
    methodName: t2._methodName,
    B_: n2
  }, e.t, e.Qt, e.ignoreUndefinedProperties);
}
var ia = function(t2) {
  function e() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return __extends$1(e, t2), e.prototype.z_ = function(t3) {
    return new Ce(t3.path, new Ae());
  }, e.prototype.isEqual = function(t3) {
    return t3 instanceof e;
  }, e;
}(Ds), oa = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, e2) || this).H_ = n2, r2;
  }
  return __extends$1(e, t2), e.prototype.z_ = function(t3) {
    var e2 = ra(this, t3, true), n2 = this.H_.map(function(t4) {
      return fa(t4, e2);
    }), r2 = new De(n2);
    return new Ce(t3.path, r2);
  }, e.prototype.isEqual = function(t3) {
    return this === t3;
  }, e;
}(Ds), ua = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, e2) || this).H_ = n2, r2;
  }
  return __extends$1(e, t2), e.prototype.z_ = function(t3) {
    var e2 = ra(this, t3, true), n2 = this.H_.map(function(t4) {
      return fa(t4, e2);
    }), r2 = new xe(n2);
    return new Ce(t3.path, r2);
  }, e.prototype.isEqual = function(t3) {
    return this === t3;
  }, e;
}(Ds), sa = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, e2) || this).J_ = n2, r2;
  }
  return __extends$1(e, t2), e.prototype.z_ = function(t3) {
    var e2 = new Oe(t3.Qt, _e(t3.Qt, this.J_));
    return new Ce(t3.path, e2);
  }, e.prototype.isEqual = function(t3) {
    return this === t3;
  }, e;
}(Ds);
function aa(t2, e, n2, r2) {
  var i = t2.G_(1, e, n2);
  da("Data must be an object, but it was:", i, r2);
  var o = [], u = new xt();
  nt(r2, function(t3, r3) {
    var s2 = ma(e, t3, n2);
    r3 instanceof Ss && (r3 = r3.d_);
    var a = i.U_(s2);
    if (r3 instanceof na)
      o.push(s2);
    else {
      var c = fa(r3, a);
      c != null && (o.push(s2), u.set(s2, c));
    }
  });
  var s = new it(o);
  return new Ws(u.Pt(), s, i.fieldTransforms);
}
function ca(t2, e, n2, r2, i, o) {
  var u = t2.G_(1, e, n2), s = [va(e, r2, n2)], a = [i];
  if (o.length % 2 != 0)
    throw new q(M.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
  for (var c = 0; c < o.length; c += 2)
    s.push(va(e, o[c])), a.push(o[c + 1]);
  for (var h2 = [], f = new xt(), l = s.length - 1; l >= 0; --l)
    if (!wa(h2, s[l])) {
      var p2 = s[l], d = a[l];
      d instanceof Ss && (d = d.d_);
      var v2 = u.U_(p2);
      if (d instanceof na)
        h2.push(p2);
      else {
        var y2 = fa(d, v2);
        y2 != null && (h2.push(p2), f.set(p2, y2));
      }
    }
  var m = new it(h2);
  return new Ws(f.Pt(), m, u.fieldTransforms);
}
function ha(t2, e, n2, r2) {
  return r2 === void 0 && (r2 = false), fa(n2, t2.G_(r2 ? 4 : 3, e));
}
function fa(t2, e) {
  if (t2 instanceof Ss && (t2 = t2.d_), pa(t2))
    return da("Unsupported field value:", e, t2), la(t2, e);
  if (t2 instanceof Ds)
    return function(t3, e2) {
      if (!Zs(e2.k_))
        throw e2.K_(t3._methodName + "() can only be used with update() and set()");
      if (!e2.path)
        throw e2.K_(t3._methodName + "() is not currently supported inside arrays");
      var n2 = t3.z_(e2);
      n2 && e2.fieldTransforms.push(n2);
    }(t2, e), null;
  if (t2 === void 0 && e.ignoreUndefinedProperties)
    return null;
  if (e.path && e.Gt.push(e.path), t2 instanceof Array) {
    if (e.settings.B_ && e.k_ !== 4)
      throw e.K_("Nested arrays are not supported");
    return function(t3, e2) {
      for (var n2 = [], r2 = 0, i = 0, o = t3; i < o.length; i++) {
        var u = fa(o[i], e2.Q_(r2));
        u == null && (u = {
          nullValue: "NULL_VALUE"
        }), n2.push(u), r2++;
      }
      return {
        arrayValue: {
          values: n2
        }
      };
    }(t2, e);
  }
  return function(t3, e2) {
    if (t3 instanceof Ss && (t3 = t3.d_), t3 === null)
      return {
        nullValue: "NULL_VALUE"
      };
    if (typeof t3 == "number")
      return _e(e2.Qt, t3);
    if (typeof t3 == "boolean")
      return {
        booleanValue: t3
      };
    if (typeof t3 == "string")
      return {
        stringValue: t3
      };
    if (t3 instanceof Date) {
      var n2 = K.fromDate(t3);
      return {
        timestampValue: Ln(e2.Qt, n2)
      };
    }
    if (t3 instanceof K) {
      n2 = new K(t3.seconds, 1e3 * Math.floor(t3.nanoseconds / 1e3));
      return {
        timestampValue: Ln(e2.Qt, n2)
      };
    }
    if (t3 instanceof Hs)
      return {
        geoPointValue: {
          latitude: t3.latitude,
          longitude: t3.longitude
        }
      };
    if (t3 instanceof F)
      return {
        bytesValue: Rn(e2.Qt, t3.I)
      };
    if (t3 instanceof Fs) {
      n2 = e2.t;
      var r2 = t3.firestore.I_;
      if (!r2.isEqual(n2))
        throw e2.K_("Document reference is for database " + r2.projectId + "/" + r2.database + " but should be for database " + n2.projectId + "/" + n2.database);
      return {
        referenceValue: qn(t3.firestore.I_ || e2.t, t3.S_.path)
      };
    }
    throw e2.K_("Unsupported field value: " + Cs(t3));
  }(t2, e);
}
function la(t2, e) {
  var n2 = {};
  return rt(t2) ? e.path && e.path.length > 0 && e.Gt.push(e.path) : nt(t2, function(t3, r2) {
    var i = fa(r2, e.L_(t3));
    i != null && (n2[t3] = i);
  }), {
    mapValue: {
      fields: n2
    }
  };
}
function pa(t2) {
  return !(typeof t2 != "object" || t2 === null || t2 instanceof Array || t2 instanceof Date || t2 instanceof K || t2 instanceof Hs || t2 instanceof F || t2 instanceof Fs || t2 instanceof Ds);
}
function da(t2, e, n2) {
  if (!pa(n2) || !function(t3) {
    return typeof t3 == "object" && t3 !== null && (Object.getPrototypeOf(t3) === Object.prototype || Object.getPrototypeOf(t3) === null);
  }(n2)) {
    var r2 = Cs(n2);
    throw r2 === "an object" ? e.K_(t2 + " a custom object") : e.K_(t2 + " " + r2);
  }
}
function va(t2, e, n2) {
  if (e instanceof Ss && (e = e.d_), e instanceof As)
    return e.f_;
  if (typeof e == "string")
    return ma(t2, e);
  throw ga("Field path arguments must be of type string or FieldPath.", t2, false, void 0, n2);
}
var ya = new RegExp("[~\\*/\\[\\]]");
function ma(t2, e, n2) {
  if (e.search(ya) >= 0)
    throw ga("Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'", t2, false, void 0, n2);
  try {
    return new (As.bind.apply(As, __spreadArrays$1([void 0], e.split("."))))().f_;
  } catch (r2) {
    throw ga("Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'", t2, false, void 0, n2);
  }
}
function ga(t2, e, n2, r2, i) {
  var o = r2 && !r2.et(), u = i !== void 0, s = "Function " + e + "() called with invalid data";
  n2 && (s += " (via `toFirestore()`)");
  var a = "";
  return (o || u) && (a += " (found", o && (a += " in field " + r2), u && (a += " in document " + i), a += ")"), new q(M.INVALID_ARGUMENT, (s += ". ") + t2 + a);
}
function wa(t2, e) {
  return t2.some(function(t3) {
    return t3.isEqual(e);
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ba = function() {
  function t2(t3) {
    this.Sh = t3, this.Y_ = new Map(), this.mutations = [], this.X_ = false, this.Z_ = null, this.tf = new Set();
  }
  return t2.prototype.ef = function(t3) {
    return __awaiter(this, void 0, void 0, function() {
      var e, n2 = this;
      return __generator(this, function(r2) {
        switch (r2.label) {
          case 0:
            if (this.nf(), this.mutations.length > 0)
              throw new q(M.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
            return [4, function(t4, e2) {
              return __awaiter(this, void 0, void 0, function() {
                var n3, r3, i, o, u, s;
                return __generator(this, function(a) {
                  switch (a.label) {
                    case 0:
                      return n3 = O(t4), r3 = Qn(n3.Qt) + "/documents", i = {
                        documents: e2.map(function(t5) {
                          return jn(n3.Qt, t5);
                        })
                      }, [4, n3.Du("BatchGetDocuments", r3, i)];
                    case 1:
                      return o = a.sent(), u = new Map(), o.forEach(function(t5) {
                        var e3 = function(t6, e4) {
                          return "found" in e4 ? function(t7, e5) {
                            k(!!e5.found), e5.found.name, e5.found.updateTime;
                            var n4 = zn(t7, e5.found.name), r4 = Mn(e5.found.updateTime), i2 = new St({
                              mapValue: {
                                fields: e5.found.fields
                              }
                            });
                            return new Pt(n4, r4, i2, {});
                          }(t6, e4) : "missing" in e4 ? function(t7, e5) {
                            k(!!e5.missing), k(!!e5.readTime);
                            var n4 = zn(t7, e5.missing), r4 = Mn(e5.readTime);
                            return new Vt(n4, r4);
                          }(t6, e4) : x();
                        }(n3.Qt, t5);
                        u.set(e3.key.toString(), e3);
                      }), s = [], [2, (e2.forEach(function(t5) {
                        var e3 = u.get(t5.toString());
                        k(!!e3), s.push(e3);
                      }), s)];
                  }
                });
              });
            }(this.Sh, t3)];
          case 1:
            return [2, ((e = r2.sent()).forEach(function(t4) {
              t4 instanceof Vt || t4 instanceof Pt ? n2.sf(t4) : x();
            }), e)];
        }
      });
    });
  }, t2.prototype.set = function(t3, e) {
    this.write(e.F_(t3, this.jt(t3))), this.tf.add(t3.toString());
  }, t2.prototype.update = function(t3, e) {
    try {
      this.write(e.F_(t3, this.rf(t3)));
    } catch (t4) {
      this.Z_ = t4;
    }
    this.tf.add(t3.toString());
  }, t2.prototype.delete = function(t3) {
    this.write(new Je(t3, this.jt(t3))), this.tf.add(t3.toString());
  }, t2.prototype.commit = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t3, e = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            if (this.nf(), this.Z_)
              throw this.Z_;
            return t3 = this.Y_, this.mutations.forEach(function(e2) {
              t3.delete(e2.key.toString());
            }), t3.forEach(function(t4, n3) {
              var r2 = tt._t(n3);
              e.mutations.push(new $e(r2, e.jt(r2)));
            }), [4, function(t4, e2) {
              return __awaiter(this, void 0, void 0, function() {
                var n3, r2, i;
                return __generator(this, function(o) {
                  switch (o.label) {
                    case 0:
                      return n3 = O(t4), r2 = Qn(n3.Qt) + "/documents", i = {
                        writes: e2.map(function(t5) {
                          return Xn(n3.Qt, t5);
                        })
                      }, [4, n3.pu("Commit", r2, i)];
                    case 1:
                      return o.sent(), [2];
                  }
                });
              });
            }(this.Sh, this.mutations)];
          case 1:
            return n2.sent(), this.X_ = true, [2];
        }
      });
    });
  }, t2.prototype.sf = function(t3) {
    var e;
    if (t3 instanceof Pt)
      e = t3.version;
    else {
      if (!(t3 instanceof Vt))
        throw x();
      e = X.min();
    }
    var n2 = this.Y_.get(t3.key.toString());
    if (n2) {
      if (!e.isEqual(n2))
        throw new q(M.ABORTED, "Document version changed between two reads.");
    } else
      this.Y_.set(t3.key.toString(), e);
  }, t2.prototype.jt = function(t3) {
    var e = this.Y_.get(t3.toString());
    return !this.tf.has(t3.toString()) && e ? Re.updateTime(e) : Re.Kt();
  }, t2.prototype.rf = function(t3) {
    var e = this.Y_.get(t3.toString());
    if (!this.tf.has(t3.toString()) && e) {
      if (e.isEqual(X.min()))
        throw new q(M.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
      return Re.updateTime(e);
    }
    return Re.exists(true);
  }, t2.prototype.write = function(t3) {
    this.nf(), this.mutations.push(t3);
  }, t2.prototype.nf = function() {
  }, t2;
}(), _a = function() {
  function t2(t3, e, n2, r2) {
    this._s = t3, this.Sh = e, this.updateFunction = n2, this.Es = r2, this.cf = 5, this.Gu = new Qo(this._s, "transaction_retry");
  }
  return t2.prototype.run = function() {
    this.af();
  }, t2.prototype.af = function() {
    var t3 = this;
    this.Gu.Lu(function() {
      return __awaiter(t3, void 0, void 0, function() {
        var t4, e, n2 = this;
        return __generator(this, function(r2) {
          return t4 = new ba(this.Sh), (e = this.uf(t4)) && e.then(function(e2) {
            n2._s.Ps(function() {
              return t4.commit().then(function() {
                n2.Es.resolve(e2);
              }).catch(function(t5) {
                n2.hf(t5);
              });
            });
          }).catch(function(t5) {
            n2.hf(t5);
          }), [2];
        });
      });
    });
  }, t2.prototype.uf = function(t3) {
    try {
      var e = this.updateFunction(t3);
      return !lt(e) && e.catch && e.then ? e : (this.Es.reject(Error("Transaction callback must return a Promise")), null);
    } catch (t4) {
      return this.Es.reject(t4), null;
    }
  }, t2.prototype.hf = function(t3) {
    var e = this;
    this.cf > 0 && this.lf(t3) ? (this.cf -= 1, this._s.Ps(function() {
      return e.af(), Promise.resolve();
    })) : this.Es.reject(t3);
  }, t2.prototype.lf = function(t3) {
    if (t3.name === "FirebaseError") {
      var e = t3.code;
      return e === "aborted" || e === "failed-precondition" || !en(e);
    }
    return false;
  }, t2;
}(), Ia = function() {
  function t2(t3, e, n2) {
    var r2 = this;
    this.credentials = t3, this._s = e, this.yu = n2, this.user = j.UNAUTHENTICATED, this.clientId = V.u(), this._f = function() {
    }, this.C = new fr(), this.credentials.v(function(t4) {
      N("FirestoreClient", "Received user=", t4.uid), r2.user = t4, r2._f(t4), r2.C.resolve();
    });
  }
  return t2.prototype.getConfiguration = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, this.C.promise];
          case 1:
            return [2, (t3.sent(), {
              _s: this._s,
              yu: this.yu,
              clientId: this.clientId,
              credentials: this.credentials,
              Jl: this.user,
              pl: 100
            })];
        }
      });
    });
  }, t2.prototype.ff = function(t3) {
    var e = this;
    this._f = t3, this.C.promise.then(function() {
      return e._f(e.user);
    });
  }, t2.prototype.df = function() {
    if (this._s.wf)
      throw new q(M.FAILED_PRECONDITION, "The client has already been terminated.");
  }, t2.prototype.terminate = function() {
    var t3 = this;
    this._s.Ef();
    var e = new fr();
    return this._s.Tf(function() {
      return __awaiter(t3, void 0, void 0, function() {
        var t4, n2;
        return __generator(this, function(r2) {
          switch (r2.label) {
            case 0:
              return r2.trys.push([0, 5, , 6]), this.If ? [4, this.If.terminate()] : [3, 2];
            case 1:
              r2.sent(), r2.label = 2;
            case 2:
              return this.mf ? [4, this.mf.terminate()] : [3, 4];
            case 3:
              r2.sent(), r2.label = 4;
            case 4:
              return this.credentials.S(), e.resolve(), [3, 6];
            case 5:
              return t4 = r2.sent(), n2 = Er(t4, "Failed to shutdown persistence"), e.reject(n2), [3, 6];
            case 6:
              return [2];
          }
        });
      });
    }), e.promise;
  }, t2;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ea(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    var n2, r2, i = this;
    return __generator(this, function(o) {
      switch (o.label) {
        case 0:
          return t2._s.Af(), N("FirestoreClient", "Initializing OfflineComponentProvider"), [4, t2.getConfiguration()];
        case 1:
          return n2 = o.sent(), [4, e.initialize(n2)];
        case 2:
          return o.sent(), r2 = n2.Jl, t2.ff(function(n3) {
            r2.isEqual(n3) || (r2 = n3, t2._s.po(function() {
              return __awaiter(i, void 0, void 0, function() {
                return __generator(this, function(t3) {
                  switch (t3.label) {
                    case 0:
                      return [4, no(e.bh, n3)];
                    case 1:
                      return t3.sent(), [2];
                  }
                });
              });
            }));
          }), e.persistence.Po(function() {
            return t2.terminate();
          }), t2.mf = e, [2];
      }
    });
  });
}
function Ta(t2, e) {
  return __awaiter(this, void 0, void 0, function() {
    var n2, r2;
    return __generator(this, function(i) {
      switch (i.label) {
        case 0:
          return t2._s.Af(), [4, Na(t2)];
        case 1:
          return n2 = i.sent(), N("FirestoreClient", "Initializing OnlineComponentProvider"), [4, t2.getConfiguration()];
        case 2:
          return r2 = i.sent(), [4, e.initialize(n2, r2)];
        case 3:
          return i.sent(), t2.ff(function(n3) {
            return t2._s.po(function() {
              return function(t3, e2) {
                return __awaiter(this, void 0, void 0, function() {
                  var n4, r3;
                  return __generator(this, function(i2) {
                    switch (i2.label) {
                      case 0:
                        return (n4 = O(t3))._s.Af(), N("RemoteStore", "RemoteStore received new credentials"), r3 = uu(n4), n4.Nh.add(3), [4, $o(n4)];
                      case 1:
                        return i2.sent(), r3 && n4.Oh.set("Unknown"), [4, n4.Dh.n_(e2)];
                      case 2:
                        return i2.sent(), n4.Nh.delete(3), [4, Jo(n4)];
                      case 3:
                        return i2.sent(), [2];
                    }
                  });
                });
              }(e.yl, n3);
            });
          }), t2.If = e, [2];
      }
    });
  });
}
function Na(t2) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(e) {
      switch (e.label) {
        case 0:
          return t2.mf ? [3, 2] : (N("FirestoreClient", "Using default OfflineComponentProvider"), [4, Ea(t2, new ws())]);
        case 1:
          e.sent(), e.label = 2;
        case 2:
          return [2, t2.mf];
      }
    });
  });
}
function Aa(t2) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(e) {
      switch (e.label) {
        case 0:
          return t2.If ? [3, 2] : (N("FirestoreClient", "Using default OnlineComponentProvider"), [4, Ta(t2, new Is())]);
        case 1:
          e.sent(), e.label = 2;
        case 2:
          return [2, t2.If];
      }
    });
  });
}
function Da(t2) {
  return Na(t2).then(function(t3) {
    return t3.persistence;
  });
}
function Sa(t2) {
  return Na(t2).then(function(t3) {
    return t3.bh;
  });
}
function xa(t2) {
  return Aa(t2).then(function(t3) {
    return t3.yl;
  });
}
function ka(t2) {
  return Aa(t2).then(function(t3) {
    return t3._a;
  });
}
function Oa(t2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, n2;
    return __generator(this, function(r2) {
      switch (r2.label) {
        case 0:
          return [4, Aa(t2)];
        case 1:
          return e = r2.sent(), [2, ((n2 = e.gl).jh = ju.bind(null, e._a), n2.Hh = Gu.bind(null, e._a), n2)];
      }
    });
  });
}
function Pa(t2, e, n2) {
  var r2 = this;
  n2 === void 0 && (n2 = {});
  var i = new fr();
  return t2._s.Ps(function() {
    return __awaiter(r2, void 0, void 0, function() {
      var r3;
      return __generator(this, function(o) {
        switch (o.label) {
          case 0:
            return r3 = function(t3, e2, n3, r4, i2) {
              var o2 = new Ts({
                next: function(o3) {
                  e2.Ps(function() {
                    return Au(t3, u);
                  });
                  var s = o3.docs.has(n3);
                  !s && o3.fromCache ? i2.reject(new q(M.UNAVAILABLE, "Failed to get document because the client is offline.")) : s && o3.fromCache && r4 && r4.source === "server" ? i2.reject(new q(M.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i2.resolve(o3);
                },
                error: function(t4) {
                  return i2.reject(t4);
                }
              }), u = new ku(re(n3.path), o2, {
                includeMetadataChanges: true,
                nl: true
              });
              return Nu(t3, u);
            }, [4, Oa(t2)];
          case 1:
            return [2, r3.apply(void 0, [o.sent(), t2._s, e, n2, i])];
        }
      });
    });
  }), i.promise;
}
function Va(t2, e, n2) {
  var r2 = this;
  n2 === void 0 && (n2 = {});
  var i = new fr();
  return t2._s.Ps(function() {
    return __awaiter(r2, void 0, void 0, function() {
      var r3;
      return __generator(this, function(o) {
        switch (o.label) {
          case 0:
            return r3 = function(t3, e2, n3, r4, i2) {
              var o2 = new Ts({
                next: function(n4) {
                  e2.Ps(function() {
                    return Au(t3, u);
                  }), n4.fromCache && r4.source === "server" ? i2.reject(new q(M.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i2.resolve(n4);
                },
                error: function(t4) {
                  return i2.reject(t4);
                }
              }), u = new ku(n3, o2, {
                includeMetadataChanges: true,
                nl: true
              });
              return Nu(t3, u);
            }, [4, Oa(t2)];
          case 1:
            return [2, r3.apply(void 0, [o.sent(), t2._s, e, n2, i])];
        }
      });
    });
  }), i.promise;
}
var Ca = function() {
  function t2() {
    var t3 = this;
    this.Rf = Promise.resolve(), this.Pf = [], this.yf = false, this.gf = [], this.Vf = null, this.pf = false, this.bf = [], this.Gu = new Qo(this, "async_queue_retry"), this.vf = function() {
      var e2 = Go();
      e2 && N("AsyncQueue", "Visibility state changed to " + e2.visibilityState), t3.Gu.qu();
    };
    var e = Go();
    e && typeof e.addEventListener == "function" && e.addEventListener("visibilitychange", this.vf);
  }
  return Object.defineProperty(t2.prototype, "wf", {
    get: function() {
      return this.yf;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.Ps = function(t3) {
    this.enqueue(t3);
  }, t2.prototype.Tf = function(t3) {
    this.Sf(), this.Df(t3);
  }, t2.prototype.Ef = function() {
    if (!this.yf) {
      this.yf = true;
      var t3 = Go();
      t3 && typeof t3.removeEventListener == "function" && t3.removeEventListener("visibilitychange", this.vf);
    }
  }, t2.prototype.enqueue = function(t3) {
    return this.Sf(), this.yf ? new Promise(function(t4) {
    }) : this.Df(t3);
  }, t2.prototype.po = function(t3) {
    var e = this;
    this.Ps(function() {
      return e.Pf.push(t3), e.Cf();
    });
  }, t2.prototype.Cf = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t3, e = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            if (this.Pf.length === 0)
              return [3, 5];
            n2.label = 1;
          case 1:
            return n2.trys.push([1, 3, , 4]), [4, this.Pf[0]()];
          case 2:
            return n2.sent(), this.Pf.shift(), this.Gu.reset(), [3, 4];
          case 3:
            if (!mr(t3 = n2.sent()))
              throw t3;
            return N("AsyncQueue", "Operation failed with retryable error: " + t3), [3, 4];
          case 4:
            this.Pf.length > 0 && this.Gu.Lu(function() {
              return e.Cf();
            }), n2.label = 5;
          case 5:
            return [2];
        }
      });
    });
  }, t2.prototype.Df = function(t3) {
    var e = this, n2 = this.Rf.then(function() {
      return e.pf = true, t3().catch(function(t4) {
        throw e.Vf = t4, e.pf = false, A("INTERNAL UNHANDLED ERROR: ", function(t5) {
          var e2 = t5.message || "";
          return t5.stack && (e2 = t5.stack.includes(t5.message) ? t5.stack : t5.message + "\n" + t5.stack), e2;
        }(t4)), t4;
      }).then(function(t4) {
        return e.pf = false, t4;
      });
    });
    return this.Rf = n2, n2;
  }, t2.prototype.Tr = function(t3, e, n2) {
    var r2 = this;
    this.Sf(), this.bf.indexOf(t3) > -1 && (e = 0);
    var i = Ir.Ts(this, t3, e, n2, function(t4) {
      return r2.xf(t4);
    });
    return this.gf.push(i), i;
  }, t2.prototype.Sf = function() {
    this.Vf && x();
  }, t2.prototype.Af = function() {
  }, t2.prototype.Nf = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t3;
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return [4, t3 = this.Rf];
          case 1:
            e.sent(), e.label = 2;
          case 2:
            if (t3 !== this.Rf)
              return [3, 0];
            e.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, t2.prototype.$f = function(t3) {
    for (var e = 0, n2 = this.gf; e < n2.length; e++) {
      if (n2[e].fs === t3)
        return true;
    }
    return false;
  }, t2.prototype.Ff = function(t3) {
    var e = this;
    return this.Nf().then(function() {
      e.gf.sort(function(t4, e2) {
        return t4.ds - e2.ds;
      });
      for (var n2 = 0, r2 = e.gf; n2 < r2.length; n2++) {
        var i = r2[n2];
        if (i.Rs(), t3 !== "all" && i.fs === t3)
          break;
      }
      return e.Nf();
    });
  }, t2.prototype.Of = function(t3) {
    this.bf.push(t3);
  }, t2.prototype.xf = function(t3) {
    var e = this.gf.indexOf(t3);
    this.gf.splice(e, 1);
  }, t2;
}();
function La(t2) {
  return function(t3, e) {
    if (typeof t3 != "object" || t3 === null)
      return false;
    for (var n2 = t3, r2 = 0, i = ["next", "error", "complete"]; r2 < i.length; r2++) {
      var o = i[r2];
      if (o in n2 && typeof n2[o] == "function")
        return true;
    }
    return false;
  }(t2);
}
var Ua = -1, Ma = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, e2, n2) || this).Bf = new Ca(), r2.w_ = "name" in e2 ? e2.name : "[DEFAULT]", r2;
  }
  return __extends$1(e, t2), e.prototype.b_ = function() {
    return this.qf || Fa(this), this.qf.terminate();
  }, e;
}(qs);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qa(t2) {
  return t2.qf || Fa(t2), t2.qf.df(), t2.qf;
}
function Fa(t2) {
  var e = t2.p_(), n2 = function(t3, e2, n3) {
    return new _(t3, e2, n3.host, n3.ssl, n3.experimentalForceLongPolling, n3.experimentalAutoDetectLongPolling);
  }(t2.I_, t2.w_, e);
  t2.qf = new Ia(t2.m_, t2.Bf, n2);
}
function ja(t2, e, n2) {
  var r2 = this, i = new fr();
  return t2._s.enqueue(function() {
    return __awaiter(r2, void 0, void 0, function() {
      var r3;
      return __generator(this, function(o) {
        switch (o.label) {
          case 0:
            return o.trys.push([0, 3, , 4]), [4, Ea(t2, n2)];
          case 1:
            return o.sent(), [4, Ta(t2, e)];
          case 2:
            return o.sent(), i.resolve(), [3, 4];
          case 3:
            if (!function(t3) {
              return t3.name === "FirebaseError" ? t3.code === M.FAILED_PRECONDITION || t3.code === M.UNIMPLEMENTED : !(typeof DOMException != "undefined" && t3 instanceof DOMException) || (t3.code === 22 || t3.code === 20 || t3.code === 11);
            }(r3 = o.sent()))
              throw r3;
            return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + r3), i.reject(r3), [3, 4];
          case 4:
            return [2];
        }
      });
    });
  }).then(function() {
    return i.promise;
  });
}
function za(t2) {
  if (t2.R_ || t2.P_)
    throw new q(M.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ga = function() {
  function t2() {
  }
  return t2.prototype.Uf = function(t3, e) {
    switch (e === void 0 && (e = "none"), vt(t3)) {
      case 0:
        return null;
      case 1:
        return t3.booleanValue;
      case 2:
        return st(t3.integerValue || t3.doubleValue);
      case 3:
        return this.Qf(t3.timestampValue);
      case 4:
        return this.Kf(t3, e);
      case 5:
        return t3.stringValue;
      case 6:
        return this.Wf(at(t3.bytesValue));
      case 7:
        return this.jf(t3.referenceValue);
      case 8:
        return this.Gf(t3.geoPointValue);
      case 9:
        return this.zf(t3.arrayValue, e);
      case 10:
        return this.Hf(t3.mapValue, e);
      default:
        throw x();
    }
  }, t2.prototype.Hf = function(t3, e) {
    var n2 = this, r2 = {};
    return nt(t3.fields || {}, function(t4, i) {
      r2[t4] = n2.Uf(i, e);
    }), r2;
  }, t2.prototype.Gf = function(t3) {
    return new Hs(st(t3.latitude), st(t3.longitude));
  }, t2.prototype.zf = function(t3, e) {
    var n2 = this;
    return (t3.values || []).map(function(t4) {
      return n2.Uf(t4, e);
    });
  }, t2.prototype.Kf = function(t3, e) {
    switch (e) {
      case "previous":
        var n2 = ht(t3);
        return n2 == null ? null : this.Uf(n2, e);
      case "estimate":
        return this.Qf(ft(t3));
      default:
        return null;
    }
  }, t2.prototype.Qf = function(t3) {
    var e = ut(t3);
    return new K(e.seconds, e.nanos);
  }, t2.prototype.Jf = function(t3, e) {
    var n2 = Z.ot(t3);
    k(hr(n2));
    var r2 = new I(n2.get(1), n2.get(3)), i = new tt(n2.Y(5));
    return r2.isEqual(e) || A("Document " + i + " contains a document reference within a different database (" + r2.projectId + "/" + r2.database + ") which is not supported. It will be treated as a reference in the current database (" + e.projectId + "/" + e.database + ") instead."), i;
  }, t2;
}(), Ba = function() {
  function t2(t3, e, n2, r2, i) {
    this.Yf = t3, this.Xf = e, this.S_ = n2, this.Zf = r2, this.v_ = i;
  }
  return Object.defineProperty(t2.prototype, "id", {
    get: function() {
      return this.S_.path.tt();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "ref", {
    get: function() {
      return new Fs(this.Yf, this.v_, this.S_);
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.exists = function() {
    return this.Zf !== null;
  }, t2.prototype.data = function() {
    if (this.Zf) {
      if (this.v_) {
        var t3 = new Qa(this.Yf, this.Xf, this.S_, this.Zf, null);
        return this.v_.fromFirestore(t3);
      }
      return this.Xf.Uf(this.Zf.bt());
    }
  }, t2.prototype.get = function(t3) {
    if (this.Zf) {
      var e = this.Zf.data().field(Ya("DocumentSnapshot.get", t3));
      if (e !== null)
        return this.Xf.Uf(e);
    }
  }, t2;
}(), Qa = function(t2) {
  function e() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return __extends$1(e, t2), e.prototype.data = function() {
    return t2.prototype.data.call(this);
  }, e;
}(Ba);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ya(t2, e) {
  return typeof e == "string" ? ma(t2, e) : e instanceof Ss ? e.d_.f_ : e.f_;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ha(t2) {
  if (oe(t2) && t2.xt.length === 0)
    throw new q(M.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
var Ka = function() {
};
function Xa(t2) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++)
    e[n2 - 1] = arguments[n2];
  for (var r2 = 0, i = e; r2 < i.length; r2++) {
    var o = i[r2];
    t2 = o.td(t2);
  }
  return t2;
}
var Wa = function(t2) {
  function e(e2, n2, r2) {
    var i = this;
    return (i = t2.call(this) || this).ed = e2, i.nd = n2, i.sd = r2, i.type = "where", i;
  }
  return __extends$1(e, t2), e.prototype.td = function(t3) {
    var e2 = ta(t3.firestore), n2 = function(t4, e3, n3, r2, i, o, u) {
      var s;
      if (i.ut()) {
        if (o === "array-contains" || o === "array-contains-any")
          throw new q(M.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
        if (o === "in" || o === "not-in") {
          rc(u, o);
          for (var a = [], c = 0, h2 = u; c < h2.length; c++) {
            var f = h2[c];
            a.push(nc(r2, t4, f));
          }
          s = {
            arrayValue: {
              values: a
            }
          };
        } else
          s = nc(r2, t4, u);
      } else
        o !== "in" && o !== "not-in" && o !== "array-contains-any" || rc(u, o), s = ha(n3, "where", u, o === "in" || o === "not-in");
      var l = Ft.create(i, o, s);
      return function(t5, e4) {
        if (e4.Ct()) {
          var n4 = se(t5);
          if (n4 !== null && !n4.isEqual(e4.field))
            throw new q(M.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" + n4.toString() + "' and '" + e4.field.toString() + "'");
          var r3 = ue(t5);
          r3 !== null && ic(t5, e4.field, r3);
        }
        var i2 = function(t6, e5) {
          for (var n5 = 0, r4 = t6.filters; n5 < r4.length; n5++) {
            var i3 = r4[n5];
            if (e5.indexOf(i3.op) >= 0)
              return i3.op;
          }
          return null;
        }(t5, function(t6) {
          switch (t6) {
            case "!=":
              return ["!=", "not-in"];
            case "array-contains":
              return ["array-contains", "array-contains-any", "not-in"];
            case "in":
              return ["array-contains-any", "in", "not-in"];
            case "array-contains-any":
              return ["array-contains", "array-contains-any", "in", "not-in"];
            case "not-in":
              return ["array-contains", "array-contains-any", "in", "not-in", "!="];
            default:
              return [];
          }
        }(e4.op));
        if (i2 !== null)
          throw i2 === e4.op ? new q(M.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e4.op.toString() + "' filter.") : new q(M.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e4.op.toString() + "' filters with '" + i2.toString() + "' filters.");
      }(t4, l), l;
    }(t3.C_, 0, e2, t3.firestore.I_, this.ed, this.nd, this.sd);
    return new js(t3.firestore, t3.v_, function(t4, e3) {
      var n3 = t4.filters.concat([e3]);
      return new ee(t4.path, t4.collectionGroup, t4.xt.slice(), n3, t4.limit, t4.limitType, t4.startAt, t4.endAt);
    }(t3.C_, n2));
  }, e;
}(Ka), Za = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this) || this).ed = e2, r2.rd = n2, r2.type = "orderBy", r2;
  }
  return __extends$1(e, t2), e.prototype.td = function(t3) {
    var e2 = function(t4, e3, n2) {
      if (t4.startAt !== null)
        throw new q(M.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
      if (t4.endAt !== null)
        throw new q(M.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
      var r2 = new Zt(e3, n2);
      return function(t5, e4) {
        if (ue(t5) === null) {
          var n3 = se(t5);
          n3 !== null && ic(t5, n3, e4.field);
        }
      }(t4, r2), r2;
    }(t3.C_, this.ed, this.rd);
    return new js(t3.firestore, t3.v_, function(t4, e3) {
      var n2 = t4.xt.concat([e3]);
      return new ee(t4.path, t4.collectionGroup, n2, t4.filters.slice(), t4.limit, t4.limitType, t4.startAt, t4.endAt);
    }(t3.C_, e2));
  }, e;
}(Ka), Ja = function(t2) {
  function e(e2, n2, r2) {
    var i = this;
    return (i = t2.call(this) || this).type = e2, i.od = n2, i.ad = r2, i;
  }
  return __extends$1(e, t2), e.prototype.td = function(t3) {
    return new js(t3.firestore, t3.v_, fe(t3.C_, this.od, this.ad));
  }, e;
}(Ka), $a = function(t2) {
  function e(e2, n2, r2) {
    var i = this;
    return (i = t2.call(this) || this).type = e2, i.ud = n2, i.hd = r2, i;
  }
  return __extends$1(e, t2), e.prototype.td = function(t3) {
    var e2 = ec(t3, this.type, this.ud, this.hd);
    return new js(t3.firestore, t3.v_, function(t4, e3) {
      return new ee(t4.path, t4.collectionGroup, t4.xt.slice(), t4.filters.slice(), t4.limit, t4.limitType, e3, t4.endAt);
    }(t3.C_, e2));
  }, e;
}(Ka), tc = function(t2) {
  function e(e2, n2, r2) {
    var i = this;
    return (i = t2.call(this) || this).type = e2, i.ud = n2, i.hd = r2, i;
  }
  return __extends$1(e, t2), e.prototype.td = function(t3) {
    var e2 = ec(t3, this.type, this.ud, this.hd);
    return new js(t3.firestore, t3.v_, function(t4, e3) {
      return new ee(t4.path, t4.collectionGroup, t4.xt.slice(), t4.filters.slice(), t4.limit, t4.limitType, t4.startAt, e3);
    }(t3.C_, e2));
  }, e;
}(Ka);
function ec(t2, e, n2, r2) {
  if (n2[0] instanceof Ss && (n2[0] = n2[0].d_), n2[0] instanceof Ba)
    return function(t3, e2, n3, r3, i2) {
      if (!r3)
        throw new q(M.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n3 + "().");
      for (var o = [], u = 0, s = ce(t3); u < s.length; u++) {
        var a = s[u];
        if (a.field.ut())
          o.push(It(e2, r3.key));
        else {
          var c = r3.field(a.field);
          if (ct(c))
            throw new q(M.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
          if (c === null) {
            var h2 = a.field.rt();
            throw new q(M.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h2 + "' (used as the orderBy) does not exist.");
          }
          o.push(c);
        }
      }
      return new Xt(o, i2);
    }(t2.C_, t2.firestore.I_, e, n2[0].Zf, r2);
  var i = ta(t2.firestore);
  return function(t3, e2, n3, r3, i2, o) {
    var u = t3.xt;
    if (i2.length > u.length)
      throw new q(M.INVALID_ARGUMENT, "Too many arguments provided to " + r3 + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
    for (var s = [], a = 0; a < i2.length; a++) {
      var c = i2[a];
      if (u[a].field.ut()) {
        if (typeof c != "string")
          throw new q(M.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r3 + "(), but got a " + typeof c);
        if (!ae(t3) && c.indexOf("/") !== -1)
          throw new q(M.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r3 + "() must be a plain document ID, but '" + c + "' contains a slash.");
        var h2 = t3.path.child(Z.ot(c));
        if (!tt.wt(h2))
          throw new q(M.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r3 + "() must result in a valid document path, but '" + h2 + "' is not because it contains an odd number of segments.");
        var f = new tt(h2);
        s.push(It(e2, f));
      } else {
        var l = ha(n3, r3, c);
        s.push(l);
      }
    }
    return new Xt(s, o);
  }(t2.C_, t2.firestore.I_, i, e, n2, r2);
}
function nc(t2, e, n2) {
  if (n2 instanceof Ss && (n2 = n2.d_), typeof n2 == "string") {
    if (n2 === "")
      throw new q(M.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!ae(e) && n2.indexOf("/") !== -1)
      throw new q(M.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n2 + "' contains a '/' character.");
    var r2 = e.path.child(Z.ot(n2));
    if (!tt.wt(r2))
      throw new q(M.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r2 + "' is not because it has an odd number of segments (" + r2.length + ").");
    return It(t2, new tt(r2));
  }
  if (n2 instanceof Fs)
    return It(t2, n2.S_);
  throw new q(M.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + Cs(n2) + ".");
}
function rc(t2, e) {
  if (!Array.isArray(t2) || t2.length === 0)
    throw new q(M.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
  if (t2.length > 10)
    throw new q(M.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
}
function ic(t2, e, n2) {
  if (!n2.isEqual(e))
    throw new q(M.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first argument to orderBy(), but your first orderBy() is on field '" + n2.toString() + "' instead.");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oc(t2, e, n2) {
  return t2 ? n2 && (n2.merge || n2.mergeFields) ? t2.toFirestore(e, n2) : t2.toFirestore(e) : e;
}
var uc = function(t2) {
  function e(e2) {
    var n2 = this;
    return (n2 = t2.call(this) || this).firestore = e2, n2;
  }
  return __extends$1(e, t2), e.prototype.Wf = function(t3) {
    return new F(t3);
  }, e.prototype.jf = function(t3) {
    var e2 = this.Jf(t3, this.firestore.I_);
    return new Fs(this.firestore, null, e2);
  }, e;
}(Ga), sc = function() {
  function t2(t3, e) {
    this.hasPendingWrites = t3, this.fromCache = e;
  }
  return t2.prototype.isEqual = function(t3) {
    return this.hasPendingWrites === t3.hasPendingWrites && this.fromCache === t3.fromCache;
  }, t2;
}(), ac = function(t2) {
  function e(e2, n2, r2, i, o, u) {
    var s = this;
    return (s = t2.call(this, e2, n2, r2, i, u) || this).Yf = e2, s.ld = e2, s.metadata = o, s;
  }
  return __extends$1(e, t2), e.prototype.exists = function() {
    return t2.prototype.exists.call(this);
  }, e.prototype.data = function(t3) {
    if (t3 === void 0 && (t3 = {}), this.Zf) {
      if (this.v_) {
        var e2 = new cc(this.Yf, this.Xf, this.S_, this.Zf, this.metadata, null);
        return this.v_.fromFirestore(e2, t3);
      }
      return this.Xf.Uf(this.Zf.bt(), t3.serverTimestamps);
    }
  }, e.prototype.get = function(t3, e2) {
    if (e2 === void 0 && (e2 = {}), this.Zf) {
      var n2 = this.Zf.data().field(Ya("DocumentSnapshot.get", t3));
      if (n2 !== null)
        return this.Xf.Uf(n2, e2.serverTimestamps);
    }
  }, e;
}(Ba), cc = function(t2) {
  function e() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return __extends$1(e, t2), e.prototype.data = function(e2) {
    return e2 === void 0 && (e2 = {}), t2.prototype.data.call(this, e2);
  }, e;
}(ac), hc = function() {
  function t2(t3, e, n2, r2) {
    this.Yf = t3, this.Xf = e, this._d = r2, this.metadata = new sc(r2.hasPendingWrites, r2.fromCache), this.query = n2;
  }
  return Object.defineProperty(t2.prototype, "docs", {
    get: function() {
      var t3 = [];
      return this.forEach(function(e) {
        return t3.push(e);
      }), t3;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "size", {
    get: function() {
      return this._d.docs.size;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t2.prototype, "empty", {
    get: function() {
      return this.size === 0;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype.forEach = function(t3, e) {
    var n2 = this;
    this._d.docs.forEach(function(r2) {
      t3.call(e, new cc(n2.Yf, n2.Xf, r2.key, r2, new sc(n2._d.De.has(r2.key), n2._d.fromCache), n2.query.v_));
    });
  }, t2.prototype.docChanges = function(t3) {
    t3 === void 0 && (t3 = {});
    var e = !!t3.includeMetadataChanges;
    if (e && this._d.xe)
      throw new q(M.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this.fd && this.dd === e || (this.fd = function(t4, e2) {
      if (t4._d.Se.et()) {
        var n2 = 0;
        return t4._d.docChanges.map(function(e3) {
          var r3 = new cc(t4.Yf, t4.Xf, e3.doc.key, e3.doc, new sc(t4._d.De.has(e3.doc.key), t4._d.fromCache), t4.query.v_);
          return e3.doc, {
            type: "added",
            doc: r3,
            oldIndex: -1,
            newIndex: n2++
          };
        });
      }
      var r2 = t4._d.Se;
      return t4._d.docChanges.filter(function(t5) {
        return e2 || t5.type !== 3;
      }).map(function(e3) {
        var n3 = new cc(t4.Yf, t4.Xf, e3.doc.key, e3.doc, new sc(t4._d.De.has(e3.doc.key), t4._d.fromCache), t4.query.v_), i = -1, o = -1;
        return e3.type !== 0 && (i = r2.indexOf(e3.doc.key), r2 = r2.delete(e3.doc.key)), e3.type !== 1 && (o = (r2 = r2.add(e3.doc)).indexOf(e3.doc.key)), {
          type: fc(e3.type),
          doc: n3,
          oldIndex: i,
          newIndex: o
        };
      });
    }(this, e), this.dd = e), this.fd;
  }, t2;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fc(t2) {
  switch (t2) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return x();
  }
}
function lc(t2, e) {
  return t2 instanceof ac && e instanceof ac ? t2.Yf === e.Yf && t2.S_.isEqual(e.S_) && (t2.Zf === null ? e.Zf === null : t2.Zf.isEqual(e.Zf)) && t2.v_ === e.v_ : t2 instanceof hc && e instanceof hc && t2.Yf === e.Yf && Ys(t2.query, e.query) && t2.metadata.isEqual(e.metadata) && t2._d.isEqual(e._d);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pc = function(t2) {
  function e(e2) {
    var n2 = this;
    return (n2 = t2.call(this) || this).firestore = e2, n2;
  }
  return __extends$1(e, t2), e.prototype.Wf = function(t3) {
    return new F(t3);
  }, e.prototype.jf = function(t3) {
    var e2 = this.Jf(t3, this.firestore.I_);
    return new Fs(this.firestore, null, e2);
  }, e;
}(Ga);
function dc(t2, e, n2) {
  for (var r2 = [], i = 3; i < arguments.length; i++)
    r2[i - 3] = arguments[i];
  t2 = Ls(t2, Fs);
  var o = Ls(t2.firestore, Ma), u = ta(o);
  return e instanceof Ss && (e = e.d_), yc(o, [(typeof e == "string" || e instanceof As ? ca(u, "updateDoc", t2.S_, e, n2, r2) : aa(u, "updateDoc", t2.S_, e)).F_(t2.S_, Re.exists(true))]);
}
function vc(t2) {
  for (var e, n2, r2, i = [], o = 1; o < arguments.length; o++)
    i[o - 1] = arguments[o];
  t2 instanceof Ss && (t2 = t2.d_);
  var u = {
    includeMetadataChanges: false
  }, s = 0;
  typeof i[s] != "object" || La(i[s]) || (u = i[s], s++);
  var a, c, h2, f = {
    includeMetadataChanges: u.includeMetadataChanges
  };
  if (La(i[s])) {
    var l = i[s];
    i[s] = (e = l.next) === null || e === void 0 ? void 0 : e.bind(l), i[s + 1] = (n2 = l.error) === null || n2 === void 0 ? void 0 : n2.bind(l), i[s + 2] = (r2 = l.complete) === null || r2 === void 0 ? void 0 : r2.bind(l);
  }
  if (t2 instanceof Fs)
    c = Ls(t2.firestore, Ma), h2 = re(t2.S_.path), a = {
      next: function(e2) {
        i[s] && i[s](mc(c, t2, e2));
      },
      error: i[s + 1],
      complete: i[s + 2]
    };
  else {
    var p2 = Ls(t2, js);
    c = Ls(p2.firestore, Ma), h2 = p2.C_;
    var d = new pc(c);
    a = {
      next: function(t3) {
        i[s] && i[s](new hc(c, d, p2, t3));
      },
      error: i[s + 1],
      complete: i[s + 2]
    }, Ha(t2.C_);
  }
  return function(t3, e2, n3, r3) {
    var i2 = this, o2 = new Ts(r3), u2 = new ku(e2, o2, n3);
    return t3._s.Ps(function() {
      return __awaiter(i2, void 0, void 0, function() {
        var e3;
        return __generator(this, function(n4) {
          switch (n4.label) {
            case 0:
              return e3 = Nu, [4, Oa(t3)];
            case 1:
              return [2, e3.apply(void 0, [n4.sent(), u2])];
          }
        });
      });
    }), function() {
      o2.i_(), t3._s.Ps(function() {
        return __awaiter(i2, void 0, void 0, function() {
          var e3;
          return __generator(this, function(n4) {
            switch (n4.label) {
              case 0:
                return e3 = Au, [4, Oa(t3)];
              case 1:
                return [2, e3.apply(void 0, [n4.sent(), u2])];
            }
          });
        });
      });
    };
  }(qa(c), h2, f, a);
}
function yc(t2, e) {
  return function(t3, e2) {
    var n2 = this, r2 = new fr();
    return t3._s.Ps(function() {
      return __awaiter(n2, void 0, void 0, function() {
        var n3;
        return __generator(this, function(i) {
          switch (i.label) {
            case 0:
              return n3 = Bu, [4, ka(t3)];
            case 1:
              return [2, n3.apply(void 0, [i.sent(), e2, r2])];
          }
        });
      });
    }), r2.promise;
  }(qa(t2), e);
}
function mc(t2, e, n2) {
  var r2 = n2.docs.get(e.S_), i = new pc(t2);
  return new ac(t2, i, e.S_, r2, new sc(n2.hasPendingWrites, n2.fromCache), e.v_);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gc = function() {
  function t2(t3, e) {
    this.Yf = t3, this.wd = e, this.Ed = [], this.Td = false, this.Id = ta(t3);
  }
  return t2.prototype.set = function(t3, e, n2) {
    this.md();
    var r2 = wc(t3, this.Yf), i = oc(r2.v_, e, n2), o = ea(this.Id, "WriteBatch.set", r2.S_, i, r2.v_ !== null, n2);
    return this.Ed.push(o.F_(r2.S_, Re.Kt())), this;
  }, t2.prototype.update = function(t3, e, n2) {
    for (var r2 = [], i = 3; i < arguments.length; i++)
      r2[i - 3] = arguments[i];
    this.md();
    var o, u = wc(t3, this.Yf);
    return e instanceof Ss && (e = e.d_), o = typeof e == "string" || e instanceof As ? ca(this.Id, "WriteBatch.update", u.S_, e, n2, r2) : aa(this.Id, "WriteBatch.update", u.S_, e), this.Ed.push(o.F_(u.S_, Re.exists(true))), this;
  }, t2.prototype.delete = function(t3) {
    this.md();
    var e = wc(t3, this.Yf);
    return this.Ed = this.Ed.concat(new Je(e.S_, Re.Kt())), this;
  }, t2.prototype.commit = function() {
    return this.md(), this.Td = true, this.Ed.length > 0 ? this.wd(this.Ed) : Promise.resolve();
  }, t2.prototype.md = function() {
    if (this.Td)
      throw new q(M.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
  }, t2;
}();
function wc(t2, e) {
  if (t2 instanceof Ss && (t2 = t2.d_), t2.firestore !== e)
    throw new q(M.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
  return t2;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bc = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, e2, n2) || this).Yf = e2, r2;
  }
  return __extends$1(e, t2), e.prototype.get = function(e2) {
    var n2 = this, r2 = wc(e2, this.Yf), i = new pc(this.Yf);
    return t2.prototype.get.call(this, e2).then(function(t3) {
      return new ac(n2.Yf, i, r2.S_, t3.Zf, new sc(false, false), r2.v_);
    });
  }, e;
}(function() {
  function t2(t3, e) {
    this.Yf = t3, this.Ad = e, this.Id = ta(t3);
  }
  return t2.prototype.get = function(t3) {
    var e = this, n2 = wc(t3, this.Yf), r2 = new uc(this.Yf);
    return this.Ad.ef([n2.S_]).then(function(t4) {
      if (!t4 || t4.length !== 1)
        return x();
      var i = t4[0];
      if (i instanceof Vt)
        return new Ba(e.Yf, r2, n2.S_, null, n2.v_);
      if (i instanceof Pt)
        return new Ba(e.Yf, r2, i.key, i, n2.v_);
      throw x();
    });
  }, t2.prototype.set = function(t3, e, n2) {
    var r2 = wc(t3, this.Yf), i = oc(r2.v_, e, n2), o = ea(this.Id, "Transaction.set", r2.S_, i, r2.v_ !== null, n2);
    return this.Ad.set(r2.S_, o), this;
  }, t2.prototype.update = function(t3, e, n2) {
    for (var r2 = [], i = 3; i < arguments.length; i++)
      r2[i - 3] = arguments[i];
    var o, u = wc(t3, this.Yf);
    return e instanceof Ss && (e = e.d_), o = typeof e == "string" || e instanceof As ? ca(this.Id, "Transaction.update", u.S_, e, n2, r2) : aa(this.Id, "Transaction.update", u.S_, e), this.Ad.update(u.S_, o), this;
  }, t2.prototype.delete = function(t3) {
    var e = wc(t3, this.Yf);
    return this.Ad.delete(e.S_), this;
  }, t2;
}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _c() {
  if (typeof Uint8Array == "undefined")
    throw new q(M.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}
function Ic() {
  if (typeof atob == "undefined")
    throw new q(M.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}
var Ec = function(t2) {
  function e() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return __extends$1(e, t2), e.fromBase64String = function(t3) {
    return Ic(), new e(F.fromBase64String(t3));
  }, e.fromUint8Array = function(t3) {
    return _c(), new e(F.fromUint8Array(t3));
  }, e.prototype.toBase64 = function() {
    return Ic(), this.d_.toBase64();
  }, e.prototype.toUint8Array = function() {
    return _c(), this.d_.toUint8Array();
  }, e.prototype.isEqual = function(t3) {
    return this.d_.isEqual(t3.d_);
  }, e.prototype.toString = function() {
    return "Blob(base64: " + this.toBase64() + ")";
  }, e;
}(Ss), Tc = function() {
  function t2() {
  }
  return t2.prototype.enableIndexedDbPersistence = function(t3, e) {
    return function(t4, e2) {
      za(t4 = Ls(t4, Ma));
      var n2 = qa(t4), r2 = t4.p_(), i = new Is();
      return ja(n2, i, new bs(i, r2.cacheSizeBytes, e2 == null ? void 0 : e2.forceOwnership));
    }(t3.d_, {
      forceOwnership: e
    });
  }, t2.prototype.enableMultiTabIndexedDbPersistence = function(t3) {
    return function(t4) {
      za(t4 = Ls(t4, Ma));
      var e = qa(t4), n2 = t4.p_(), r2 = new Is();
      return ja(e, r2, new _s(r2, n2.cacheSizeBytes));
    }(t3.d_);
  }, t2.prototype.clearIndexedDbPersistence = function(t3) {
    return function(t4) {
      var e = this;
      if (t4.R_ && !t4.P_)
        throw new q(M.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
      var n2 = new fr();
      return t4.Bf.Tf(function() {
        return __awaiter(e, void 0, void 0, function() {
          var e2;
          return __generator(this, function(r2) {
            switch (r2.label) {
              case 0:
                return r2.trys.push([0, 2, , 3]), [4, function(t5) {
                  return __awaiter(this, void 0, void 0, function() {
                    var e3;
                    return __generator(this, function(n3) {
                      switch (n3.label) {
                        case 0:
                          return dr.Kn() ? (e3 = t5 + "main", [4, dr.delete(e3)]) : [2, Promise.resolve()];
                        case 1:
                          return n3.sent(), [2];
                      }
                    });
                  });
                }(Xi(t4.I_, t4.w_))];
              case 1:
                return r2.sent(), n2.resolve(), [3, 3];
              case 2:
                return e2 = r2.sent(), n2.reject(e2), [3, 3];
              case 3:
                return [2];
            }
          });
        });
      }), n2.promise;
    }(t3.d_);
  }, t2;
}(), Nc = function(t2) {
  function e(e2, n2, r2) {
    var i = this;
    return (i = t2.call(this, n2) || this).Rd = r2, i.INTERNAL = {
      delete: function() {
        return i.terminate();
      }
    }, e2 instanceof I || (i.Pd = e2), i;
  }
  return __extends$1(e, t2), Object.defineProperty(e.prototype, "I_", {
    get: function() {
      return this.d_.I_;
    },
    enumerable: false,
    configurable: true
  }), e.prototype.settings = function(t3) {
    t3.merge && delete (t3 = Object.assign(Object.assign({}, this.d_.V_()), t3)).merge, this.d_.g_(t3);
  }, e.prototype.useEmulator = function(t3, e2) {
    !function(t4, e3, n2) {
      var r2 = (t4 = Ls(t4, qs)).V_();
      r2.host !== "firestore.googleapis.com" && r2.host !== e3 && D("Host has been set in both settings() and useEmulator(), emulator host will be used"), t4.g_(Object.assign(Object.assign({}, r2), {
        host: e3 + ":" + n2,
        ssl: false
      }));
    }(this.d_, t3, e2);
  }, e.prototype.enableNetwork = function() {
    return function(t3) {
      var e2 = this;
      return t3._s.enqueue(function() {
        return __awaiter(e2, void 0, void 0, function() {
          var e3, n2;
          return __generator(this, function(r2) {
            switch (r2.label) {
              case 0:
                return [4, Da(t3)];
              case 1:
                return e3 = r2.sent(), [4, xa(t3)];
              case 2:
                return n2 = r2.sent(), [2, (e3.yo(true), function(t4) {
                  var e4 = O(t4);
                  return e4.Nh.delete(0), Jo(e4);
                }(n2))];
            }
          });
        });
      });
    }(qa(Ls(this.d_, Ma)));
  }, e.prototype.disableNetwork = function() {
    return function(t3) {
      var e2 = this;
      return t3._s.enqueue(function() {
        return __awaiter(e2, void 0, void 0, function() {
          var e3, n2;
          return __generator(this, function(r2) {
            switch (r2.label) {
              case 0:
                return [4, Da(t3)];
              case 1:
                return e3 = r2.sent(), [4, xa(t3)];
              case 2:
                return n2 = r2.sent(), [2, (e3.yo(false), function(t4) {
                  return __awaiter(this, void 0, void 0, function() {
                    var e4;
                    return __generator(this, function(n3) {
                      switch (n3.label) {
                        case 0:
                          return (e4 = O(t4)).Nh.add(0), [4, $o(e4)];
                        case 1:
                          return n3.sent(), e4.Oh.set("Offline"), [2];
                      }
                    });
                  });
                }(n2))];
            }
          });
        });
      });
    }(qa(Ls(this.d_, Ma)));
  }, e.prototype.enablePersistence = function(t3) {
    var e2 = false, n2 = false;
    return t3 && Os("synchronizeTabs", e2 = !!t3.synchronizeTabs, "experimentalForceOwningTab", n2 = !!t3.experimentalForceOwningTab), e2 ? this.Rd.enableMultiTabIndexedDbPersistence(this) : this.Rd.enableIndexedDbPersistence(this, n2);
  }, e.prototype.clearPersistence = function() {
    return this.Rd.clearIndexedDbPersistence(this);
  }, e.prototype.terminate = function() {
    return this.Pd && (this.Pd._removeServiceInstance("firestore"), this.Pd._removeServiceInstance("firestore-exp")), this.d_._delete();
  }, e.prototype.waitForPendingWrites = function() {
    return function(t3) {
      var e2 = this, n2 = new fr();
      return t3._s.Ps(function() {
        return __awaiter(e2, void 0, void 0, function() {
          var e3;
          return __generator(this, function(r2) {
            switch (r2.label) {
              case 0:
                return e3 = Wu, [4, ka(t3)];
              case 1:
                return [2, e3.apply(void 0, [r2.sent(), n2])];
            }
          });
        });
      }), n2.promise;
    }(qa(Ls(this.d_, Ma)));
  }, e.prototype.onSnapshotsInSync = function(t3) {
    return function(t4, e2) {
      return function(t5, e3) {
        var n2 = this, r2 = new Ts(e3);
        return t5._s.Ps(function() {
          return __awaiter(n2, void 0, void 0, function() {
            var e4;
            return __generator(this, function(n3) {
              switch (n3.label) {
                case 0:
                  return e4 = function(t6, e5) {
                    O(t6).Wh.add(e5), e5.next();
                  }, [4, Oa(t5)];
                case 1:
                  return [2, e4.apply(void 0, [n3.sent(), r2])];
              }
            });
          });
        }), function() {
          r2.i_(), t5._s.Ps(function() {
            return __awaiter(n2, void 0, void 0, function() {
              var e4;
              return __generator(this, function(n3) {
                switch (n3.label) {
                  case 0:
                    return e4 = function(t6, e5) {
                      O(t6).Wh.delete(e5);
                    }, [4, Oa(t5)];
                  case 1:
                    return [2, e4.apply(void 0, [n3.sent(), r2])];
                }
              });
            });
          });
        };
      }(qa(t4 = Ls(t4, Ma)), La(e2) ? e2 : {
        next: e2
      });
    }(this.d_, t3);
  }, Object.defineProperty(e.prototype, "app", {
    get: function() {
      if (!this.Pd)
        throw new q(M.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
      return this.Pd;
    },
    enumerable: false,
    configurable: true
  }), e.prototype.collection = function(t3) {
    try {
      return new Fc(this, Gs(this.d_, t3));
    } catch (t4) {
      throw Pc(t4, "collection()", "Firestore.collection()");
    }
  }, e.prototype.doc = function(t3) {
    try {
      return new Oc(this, Bs(this.d_, t3));
    } catch (t4) {
      throw Pc(t4, "doc()", "Firestore.doc()");
    }
  }, e.prototype.collectionGroup = function(t3) {
    try {
      return new Uc(this, function(t4, e2) {
        if (t4 = Ls(t4, qs), xs("collectionGroup", "collection id", e2), e2.indexOf("/") >= 0)
          throw new q(M.INVALID_ARGUMENT, "Invalid collection ID '" + e2 + "' passed to function collectionGroup(). Collection IDs must not contain '/'.");
        return new js(t4, null, function(t5) {
          return new ee(Z.ct(), t5);
        }(e2));
      }(this.d_, t3));
    } catch (t4) {
      throw Pc(t4, "collectionGroup()", "Firestore.collectionGroup()");
    }
  }, e.prototype.runTransaction = function(t3) {
    var e2 = this;
    return function(t4, e3) {
      return function(t5, e4) {
        var n2 = this, r2 = new fr();
        return t5._s.Ps(function() {
          return __awaiter(n2, void 0, void 0, function() {
            var n3;
            return __generator(this, function(i) {
              switch (i.label) {
                case 0:
                  return [4, function(t6) {
                    return Aa(t6).then(function(t7) {
                      return t7.Sh;
                    });
                  }(t5)];
                case 1:
                  return n3 = i.sent(), new _a(t5._s, n3, e4, r2).run(), [2];
              }
            });
          });
        }), r2.promise;
      }(qa(t4), function(n2) {
        return e3(new bc(t4, n2));
      });
    }(this.d_, function(n2) {
      return t3(new Sc(e2, n2));
    });
  }, e.prototype.batch = function() {
    var t3 = this;
    return qa(this.d_), new xc(new gc(this.d_, function(e2) {
      return yc(t3.d_, e2);
    }));
  }, e.prototype.loadBundle = function(t3) {
    throw new q(M.FAILED_PRECONDITION, '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?');
  }, e.prototype.namedQuery = function(t3) {
    throw new q(M.FAILED_PRECONDITION, '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?');
  }, e;
}(Ss), Ac = function(t2) {
  function e(e2) {
    var n2 = this;
    return (n2 = t2.call(this) || this).firestore = e2, n2;
  }
  return __extends$1(e, t2), e.prototype.Wf = function(t3) {
    return new Ec(new F(t3));
  }, e.prototype.jf = function(t3) {
    var e2 = this.Jf(t3, this.firestore.I_);
    return Oc.yd(e2, this.firestore, null);
  }, e;
}(Ga);
function Dc(t2) {
  var e;
  e = t2, E.setLogLevel(e);
}
var Sc = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, n2) || this).Yf = e2, r2.Xf = new Ac(e2), r2;
  }
  return __extends$1(e, t2), e.prototype.get = function(t3) {
    var e2 = this, n2 = jc(t3);
    return this.d_.get(n2).then(function(t4) {
      return new Lc(e2.Yf, new ac(e2.Yf.d_, e2.Xf, t4.S_, t4.Zf, t4.metadata, n2.v_));
    });
  }, e.prototype.set = function(t3, e2, n2) {
    var r2 = jc(t3);
    return n2 ? (ks("Transaction.set", n2), this.d_.set(r2, e2, n2)) : this.d_.set(r2, e2), this;
  }, e.prototype.update = function(t3, e2, n2) {
    for (var r2, i = [], o = 3; o < arguments.length; o++)
      i[o - 3] = arguments[o];
    var u = jc(t3);
    return arguments.length === 2 ? this.d_.update(u, e2) : (r2 = this.d_).update.apply(r2, __spreadArrays$1([u, e2, n2], i)), this;
  }, e.prototype.delete = function(t3) {
    var e2 = jc(t3);
    return this.d_.delete(e2), this;
  }, e;
}(Ss), xc = function(t2) {
  function e() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return __extends$1(e, t2), e.prototype.set = function(t3, e2, n2) {
    var r2 = jc(t3);
    return n2 ? (ks("WriteBatch.set", n2), this.d_.set(r2, e2, n2)) : this.d_.set(r2, e2), this;
  }, e.prototype.update = function(t3, e2, n2) {
    for (var r2, i = [], o = 3; o < arguments.length; o++)
      i[o - 3] = arguments[o];
    var u = jc(t3);
    return arguments.length === 2 ? this.d_.update(u, e2) : (r2 = this.d_).update.apply(r2, __spreadArrays$1([u, e2, n2], i)), this;
  }, e.prototype.delete = function(t3) {
    var e2 = jc(t3);
    return this.d_.delete(e2), this;
  }, e.prototype.commit = function() {
    return this.d_.commit();
  }, e;
}(Ss), kc = function(t2) {
  function e(e2, n2, r2) {
    var i = this;
    return (i = t2.call(this, r2) || this).Yf = e2, i.Xf = n2, i;
  }
  return __extends$1(e, t2), e.prototype.fromFirestore = function(t3, e2) {
    var n2 = new cc(this.Yf.d_, this.Xf, t3.S_, t3.Zf, t3.metadata, null);
    return this.d_.fromFirestore(new Rc(this.Yf, n2), e2 != null ? e2 : {});
  }, e.prototype.toFirestore = function(t3, e2) {
    return e2 ? this.d_.toFirestore(t3, e2) : this.d_.toFirestore(t3);
  }, e.gd = function(t3, n2) {
    var r2 = e.Vd, i = r2.get(t3);
    i || (i = new WeakMap(), r2.set(t3, i));
    var o = i.get(n2);
    return o || (o = new e(t3, new Ac(t3), n2), i.set(n2, o)), o;
  }, e;
}(Ss);
kc.Vd = new WeakMap();
var Oc = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, n2) || this).firestore = e2, r2.Xf = new Ac(e2), r2;
  }
  return __extends$1(e, t2), e.pd = function(t3, n2, r2) {
    if (t3.length % 2 != 0)
      throw new q(M.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t3.rt() + " has " + t3.length);
    return new e(n2, new Fs(n2.d_, r2, new tt(t3)));
  }, e.yd = function(t3, n2, r2) {
    return new e(n2, new Fs(n2.d_, r2, t3));
  }, Object.defineProperty(e.prototype, "id", {
    get: function() {
      return this.d_.id;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "parent", {
    get: function() {
      return new Fc(this.firestore, this.d_.parent);
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "path", {
    get: function() {
      return this.d_.path;
    },
    enumerable: false,
    configurable: true
  }), e.prototype.collection = function(t3) {
    try {
      return new Fc(this.firestore, Gs(this.d_, t3));
    } catch (t4) {
      throw Pc(t4, "collection()", "DocumentReference.collection()");
    }
  }, e.prototype.isEqual = function(t3) {
    return t3 instanceof Ss && (t3 = t3.d_), t3 instanceof Fs && Qs(this.d_, t3);
  }, e.prototype.set = function(t3, e2) {
    e2 = ks("DocumentReference.set", e2);
    try {
      return function(t4, e3, n2) {
        t4 = Ls(t4, Fs);
        var r2 = Ls(t4.firestore, Ma), i = oc(t4.v_, e3, n2);
        return yc(r2, [ea(ta(r2), "setDoc", t4.S_, i, t4.v_ !== null, n2).F_(t4.S_, Re.Kt())]);
      }(this.d_, t3, e2);
    } catch (t4) {
      throw Pc(t4, "setDoc()", "DocumentReference.set()");
    }
  }, e.prototype.update = function(t3, e2) {
    for (var n2 = [], r2 = 2; r2 < arguments.length; r2++)
      n2[r2 - 2] = arguments[r2];
    try {
      return arguments.length === 1 ? dc(this.d_, t3) : dc.apply(void 0, __spreadArrays$1([this.d_, t3, e2], n2));
    } catch (t4) {
      throw Pc(t4, "updateDoc()", "DocumentReference.update()");
    }
  }, e.prototype.delete = function() {
    return yc(Ls((t3 = this.d_).firestore, Ma), [new Je(t3.S_, Re.Kt())]);
    var t3;
  }, e.prototype.onSnapshot = function() {
    for (var t3 = this, e2 = [], n2 = 0; n2 < arguments.length; n2++)
      e2[n2] = arguments[n2];
    var r2 = Vc(e2), i = Cc(e2, function(e3) {
      return new Lc(t3.firestore, new ac(t3.firestore.d_, t3.Xf, e3.S_, e3.Zf, e3.metadata, t3.d_.v_));
    });
    return vc(this.d_, r2, i);
  }, e.prototype.get = function(t3) {
    var e2 = this;
    return ((t3 == null ? void 0 : t3.source) === "cache" ? function(t4) {
      t4 = Ls(t4, Fs);
      var e3 = Ls(t4.firestore, Ma), n2 = qa(e3), r2 = new pc(e3);
      return function(t5, e4) {
        var n3 = this, r3 = new fr();
        return t5._s.Ps(function() {
          return __awaiter(n3, void 0, void 0, function() {
            var n4;
            return __generator(this, function(i) {
              switch (i.label) {
                case 0:
                  return n4 = function(t6, e5, n5) {
                    return __awaiter(this, void 0, void 0, function() {
                      var r4, i2;
                      return __generator(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return o.trys.push([0, 2, , 3]), [4, function(t7, e6) {
                              var n6 = O(t7);
                              return n6.persistence.runTransaction("read document", "readonly", function(t8) {
                                return n6.Tc.Ho(t8, e6);
                              });
                            }(t6, e5)];
                          case 1:
                            return (i2 = o.sent()) instanceof Pt ? n5.resolve(i2) : i2 instanceof Vt ? n5.resolve(null) : n5.reject(new q(M.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3, 3];
                          case 2:
                            return r4 = o.sent(), i2 = Er(r4, "Failed to get document '" + e5 + " from cache"), n5.reject(i2), [3, 3];
                          case 3:
                            return [2];
                        }
                      });
                    });
                  }, [4, Sa(t5)];
                case 1:
                  return [2, n4.apply(void 0, [i.sent(), e4, r3])];
              }
            });
          });
        }), r3.promise;
      }(n2, t4.S_).then(function(n3) {
        return new ac(e3, r2, t4.S_, n3, new sc(n3 instanceof Pt && n3.Vt, true), t4.v_);
      });
    }(this.d_) : (t3 == null ? void 0 : t3.source) === "server" ? function(t4) {
      t4 = Ls(t4, Fs);
      var e3 = Ls(t4.firestore, Ma);
      return Pa(qa(e3), t4.S_, {
        source: "server"
      }).then(function(n2) {
        return mc(e3, t4, n2);
      });
    }(this.d_) : function(t4) {
      t4 = Ls(t4, Fs);
      var e3 = Ls(t4.firestore, Ma);
      return Pa(qa(e3), t4.S_).then(function(n2) {
        return mc(e3, t4, n2);
      });
    }(this.d_)).then(function(t4) {
      return new Lc(e2.firestore, new ac(e2.firestore.d_, e2.Xf, t4.S_, t4.Zf, t4.metadata, e2.d_.v_));
    });
  }, e.prototype.withConverter = function(t3) {
    return new e(this.firestore, this.d_.withConverter(kc.gd(this.firestore, t3)));
  }, e;
}(Ss);
function Pc(t2, e, n2) {
  return t2.message = t2.message.replace(e, n2), t2;
}
function Vc(t2) {
  for (var e = 0, n2 = t2; e < n2.length; e++) {
    var r2 = n2[e];
    if (typeof r2 == "object" && !La(r2))
      return r2;
  }
  return {};
}
function Cc(t2, e) {
  var n2, r2, i;
  return {
    next: function(t3) {
      i.next && i.next(e(t3));
    },
    error: (n2 = (i = La(t2[0]) ? t2[0] : La(t2[1]) ? t2[1] : typeof t2[0] == "function" ? {
      next: t2[0],
      error: t2[1],
      complete: t2[2]
    } : {
      next: t2[1],
      error: t2[2],
      complete: t2[3]
    }).error) === null || n2 === void 0 ? void 0 : n2.bind(i),
    complete: (r2 = i.complete) === null || r2 === void 0 ? void 0 : r2.bind(i)
  };
}
var Lc = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, n2) || this).Yf = e2, r2;
  }
  return __extends$1(e, t2), Object.defineProperty(e.prototype, "ref", {
    get: function() {
      return new Oc(this.Yf, this.d_.ref);
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "id", {
    get: function() {
      return this.d_.id;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "metadata", {
    get: function() {
      return this.d_.metadata;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "exists", {
    get: function() {
      return this.d_.exists();
    },
    enumerable: false,
    configurable: true
  }), e.prototype.data = function(t3) {
    return this.d_.data(t3);
  }, e.prototype.get = function(t3, e2) {
    return this.d_.get(t3, e2);
  }, e.prototype.isEqual = function(t3) {
    return lc(this.d_, t3.d_);
  }, e;
}(Ss), Rc = function(t2) {
  function e() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return __extends$1(e, t2), e.prototype.data = function(t3) {
    return this.d_.data(t3);
  }, e;
}(Lc), Uc = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, n2) || this).firestore = e2, r2.Xf = new Ac(e2), r2;
  }
  return __extends$1(e, t2), e.prototype.where = function(t3, n2, r2) {
    try {
      return new e(this.firestore, Xa(this.d_, function(t4, e2, n3) {
        var r3 = e2, i = Ya("where", t4);
        return new Wa(i, r3, n3);
      }(t3, n2, r2)));
    } catch (t4) {
      throw Pc(t4, /(orderBy|where)\(\)/, "Query.$1()");
    }
  }, e.prototype.orderBy = function(t3, n2) {
    try {
      return new e(this.firestore, Xa(this.d_, function(t4, e2) {
        e2 === void 0 && (e2 = "asc");
        var n3 = e2, r2 = Ya("orderBy", t4);
        return new Za(r2, n3);
      }(t3, n2)));
    } catch (t4) {
      throw Pc(t4, /(orderBy|where)\(\)/, "Query.$1()");
    }
  }, e.prototype.limit = function(t3) {
    try {
      return new e(this.firestore, Xa(this.d_, function(t4) {
        return Rs("limit", t4), new Ja("limit", t4, "F");
      }(t3)));
    } catch (t4) {
      throw Pc(t4, "limit()", "Query.limit()");
    }
  }, e.prototype.limitToLast = function(t3) {
    try {
      return new e(this.firestore, Xa(this.d_, function(t4) {
        return Rs("limitToLast", t4), new Ja("limitToLast", t4, "L");
      }(t3)));
    } catch (t4) {
      throw Pc(t4, "limitToLast()", "Query.limitToLast()");
    }
  }, e.prototype.startAt = function() {
    for (var t3 = [], n2 = 0; n2 < arguments.length; n2++)
      t3[n2] = arguments[n2];
    try {
      return new e(this.firestore, Xa(this.d_, function() {
        for (var t4 = [], e2 = 0; e2 < arguments.length; e2++)
          t4[e2] = arguments[e2];
        return new $a("startAt", t4, true);
      }.apply(void 0, t3)));
    } catch (t4) {
      throw Pc(t4, "startAt()", "Query.startAt()");
    }
  }, e.prototype.startAfter = function() {
    for (var t3 = [], n2 = 0; n2 < arguments.length; n2++)
      t3[n2] = arguments[n2];
    try {
      return new e(this.firestore, Xa(this.d_, function() {
        for (var t4 = [], e2 = 0; e2 < arguments.length; e2++)
          t4[e2] = arguments[e2];
        return new $a("startAfter", t4, false);
      }.apply(void 0, t3)));
    } catch (t4) {
      throw Pc(t4, "startAfter()", "Query.startAfter()");
    }
  }, e.prototype.endBefore = function() {
    for (var t3 = [], n2 = 0; n2 < arguments.length; n2++)
      t3[n2] = arguments[n2];
    try {
      return new e(this.firestore, Xa(this.d_, function() {
        for (var t4 = [], e2 = 0; e2 < arguments.length; e2++)
          t4[e2] = arguments[e2];
        return new tc("endBefore", t4, true);
      }.apply(void 0, t3)));
    } catch (t4) {
      throw Pc(t4, "endBefore()", "Query.endBefore()");
    }
  }, e.prototype.endAt = function() {
    for (var t3 = [], n2 = 0; n2 < arguments.length; n2++)
      t3[n2] = arguments[n2];
    try {
      return new e(this.firestore, Xa(this.d_, function() {
        for (var t4 = [], e2 = 0; e2 < arguments.length; e2++)
          t4[e2] = arguments[e2];
        return new tc("endAt", t4, false);
      }.apply(void 0, t3)));
    } catch (t4) {
      throw Pc(t4, "endAt()", "Query.endAt()");
    }
  }, e.prototype.isEqual = function(t3) {
    return Ys(this.d_, t3.d_);
  }, e.prototype.get = function(t3) {
    var e2 = this;
    return ((t3 == null ? void 0 : t3.source) === "cache" ? function(t4) {
      t4 = Ls(t4, js);
      var e3 = Ls(t4.firestore, Ma), n2 = qa(e3), r2 = new pc(e3);
      return function(t5, e4) {
        var n3 = this, r3 = new fr();
        return t5._s.Ps(function() {
          return __awaiter(n3, void 0, void 0, function() {
            var n4;
            return __generator(this, function(i) {
              switch (i.label) {
                case 0:
                  return n4 = function(t6, e5, n5) {
                    return __awaiter(this, void 0, void 0, function() {
                      var r4, i2, o, u, s;
                      return __generator(this, function(a) {
                        switch (a.label) {
                          case 0:
                            return a.trys.push([0, 2, , 3]), [4, ho(t6, e5, true)];
                          case 1:
                            return s = a.sent(), r4 = new Uu(e5, s.Rc), i2 = r4.fl(s.documents), o = r4.wi(i2, false), n5.resolve(o.snapshot), [3, 3];
                          case 2:
                            return u = a.sent(), s = Er(u, "Failed to execute query '" + e5 + " against cache"), n5.reject(s), [3, 3];
                          case 3:
                            return [2];
                        }
                      });
                    });
                  }, [4, Sa(t5)];
                case 1:
                  return [2, n4.apply(void 0, [i.sent(), e4, r3])];
              }
            });
          });
        }), r3.promise;
      }(n2, t4.C_).then(function(n3) {
        return new hc(e3, r2, t4, n3);
      });
    }(this.d_) : (t3 == null ? void 0 : t3.source) === "server" ? function(t4) {
      t4 = Ls(t4, js);
      var e3 = Ls(t4.firestore, Ma), n2 = qa(e3), r2 = new pc(e3);
      return Va(n2, t4.C_, {
        source: "server"
      }).then(function(n3) {
        return new hc(e3, r2, t4, n3);
      });
    }(this.d_) : function(t4) {
      t4 = Ls(t4, js);
      var e3 = Ls(t4.firestore, Ma), n2 = qa(e3), r2 = new pc(e3);
      return Ha(t4.C_), Va(n2, t4.C_).then(function(n3) {
        return new hc(e3, r2, t4, n3);
      });
    }(this.d_)).then(function(t4) {
      return new qc(e2.firestore, new hc(e2.firestore.d_, e2.Xf, e2.d_, t4._d));
    });
  }, e.prototype.onSnapshot = function() {
    for (var t3 = this, e2 = [], n2 = 0; n2 < arguments.length; n2++)
      e2[n2] = arguments[n2];
    var r2 = Vc(e2), i = Cc(e2, function(e3) {
      return new qc(t3.firestore, new hc(t3.firestore.d_, t3.Xf, t3.d_, e3._d));
    });
    return vc(this.d_, r2, i);
  }, e.prototype.withConverter = function(t3) {
    return new e(this.firestore, this.d_.withConverter(kc.gd(this.firestore, t3)));
  }, e;
}(Ss), Mc = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, n2) || this).Yf = e2, r2;
  }
  return __extends$1(e, t2), Object.defineProperty(e.prototype, "type", {
    get: function() {
      return this.d_.type;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "doc", {
    get: function() {
      return new Rc(this.Yf, this.d_.doc);
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "oldIndex", {
    get: function() {
      return this.d_.oldIndex;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "newIndex", {
    get: function() {
      return this.d_.newIndex;
    },
    enumerable: false,
    configurable: true
  }), e;
}(Ss), qc = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, n2) || this).Yf = e2, r2;
  }
  return __extends$1(e, t2), Object.defineProperty(e.prototype, "query", {
    get: function() {
      return new Uc(this.Yf, this.d_.query);
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "metadata", {
    get: function() {
      return this.d_.metadata;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "size", {
    get: function() {
      return this.d_.size;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "empty", {
    get: function() {
      return this.d_.empty;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "docs", {
    get: function() {
      var t3 = this;
      return this.d_.docs.map(function(e2) {
        return new Rc(t3.Yf, e2);
      });
    },
    enumerable: false,
    configurable: true
  }), e.prototype.docChanges = function(t3) {
    var e2 = this;
    return this.d_.docChanges(t3).map(function(t4) {
      return new Mc(e2.Yf, t4);
    });
  }, e.prototype.forEach = function(t3, e2) {
    var n2 = this;
    this.d_.forEach(function(r2) {
      t3.call(e2, new Rc(n2.Yf, r2));
    });
  }, e.prototype.isEqual = function(t3) {
    return lc(this.d_, t3.d_);
  }, e;
}(Ss), Fc = function(t2) {
  function e(e2, n2) {
    var r2 = this;
    return (r2 = t2.call(this, e2, n2) || this).firestore = e2, r2.d_ = n2, r2;
  }
  return __extends$1(e, t2), Object.defineProperty(e.prototype, "id", {
    get: function() {
      return this.d_.id;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "path", {
    get: function() {
      return this.d_.path;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "parent", {
    get: function() {
      var t3 = this.d_.parent;
      return t3 ? new Oc(this.firestore, t3) : null;
    },
    enumerable: false,
    configurable: true
  }), e.prototype.doc = function(t3) {
    try {
      return new Oc(this.firestore, t3 === void 0 ? Bs(this.d_) : Bs(this.d_, t3));
    } catch (t4) {
      throw Pc(t4, "doc()", "CollectionReference.doc()");
    }
  }, e.prototype.add = function(t3) {
    var e2 = this;
    return function(t4, e3) {
      var n2 = Ls(t4.firestore, Ma), r2 = Bs(t4), i = oc(t4.v_, e3);
      return yc(n2, [ea(ta(t4.firestore), "addDoc", r2.S_, i, t4.v_ !== null, {}).F_(r2.S_, Re.exists(false))]).then(function() {
        return r2;
      });
    }(this.d_, t3).then(function(t4) {
      return new Oc(e2.firestore, t4);
    });
  }, e.prototype.isEqual = function(t3) {
    return Qs(this.d_, t3.d_);
  }, e.prototype.withConverter = function(t3) {
    return new e(this.firestore, this.d_.withConverter(kc.gd(this.firestore, t3)));
  }, e;
}(Uc);
function jc(t2) {
  return t2 instanceof Ss && (t2 = t2.d_), Ls(t2, Fs);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zc = function(t2) {
  function e() {
    for (var e2 = [], n2 = 0; n2 < arguments.length; n2++)
      e2[n2] = arguments[n2];
    return t2.call(this, new (As.bind.apply(As, __spreadArrays$1([void 0], e2)))()) || this;
  }
  return __extends$1(e, t2), e.documentId = function() {
    return new e($.ht().rt());
  }, e.prototype.isEqual = function(t3) {
    return t3 instanceof Ss && (t3 = t3.d_), t3 instanceof As && this.d_.f_.isEqual(t3.f_);
  }, e;
}(Ss), Gc = function(t2) {
  function e() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return __extends$1(e, t2), e.serverTimestamp = function() {
    var t3 = new ia("serverTimestamp");
    return t3._methodName = "FieldValue.serverTimestamp", new e(t3);
  }, e.delete = function() {
    var t3 = new na("deleteField");
    return t3._methodName = "FieldValue.delete", new e(t3);
  }, e.arrayUnion = function() {
    for (var t3 = [], n2 = 0; n2 < arguments.length; n2++)
      t3[n2] = arguments[n2];
    var r2 = function() {
      for (var t4 = [], e2 = 0; e2 < arguments.length; e2++)
        t4[e2] = arguments[e2];
      return new oa("arrayUnion", t4);
    }.apply(void 0, t3);
    return r2._methodName = "FieldValue.arrayUnion", new e(r2);
  }, e.arrayRemove = function() {
    for (var t3 = [], n2 = 0; n2 < arguments.length; n2++)
      t3[n2] = arguments[n2];
    var r2 = function() {
      for (var t4 = [], e2 = 0; e2 < arguments.length; e2++)
        t4[e2] = arguments[e2];
      return new ua("arrayRemove", t4);
    }.apply(void 0, t3);
    return r2._methodName = "FieldValue.arrayRemove", new e(r2);
  }, e.increment = function(t3) {
    var n2 = function(t4) {
      return new sa("increment", t4);
    }(t3);
    return n2._methodName = "FieldValue.increment", new e(n2);
  }, e.prototype.isEqual = function(t3) {
    return this.d_.isEqual(t3.d_);
  }, e;
}(Ss);
var L = {
  Firestore: Nc,
  GeoPoint: Hs,
  Timestamp: K,
  Blob: Ec,
  Transaction: Sc,
  WriteBatch: xc,
  DocumentReference: Oc,
  DocumentSnapshot: Lc,
  Query: Uc,
  QueryDocumentSnapshot: Rc,
  QuerySnapshot: qc,
  CollectionReference: Fc,
  FieldPath: zc,
  FieldValue: Gc,
  setLogLevel: Dc,
  CACHE_SIZE_UNLIMITED: Ua
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e) {
  !function(e2, r2) {
    e2.INTERNAL.registerComponent(new Component("firestore", function(e3) {
      var t2 = e3.getProvider("app").getImmediate();
      return r2(t2, e3.getProvider("auth-internal"));
    }, "PUBLIC").setServiceProps(Object.assign({}, L)));
  }(e, function(e2, s) {
    return new Nc(e2, new Ma(e2, s), new Tc());
  }), e.registerVersion("@firebase/firestore", "2.1.6");
}
P(firebase$1$1);
(function() {
  var k2, aa2 = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value);
  };
  function ba2(a) {
    a = [typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global, a];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math)
        return c;
    }
    return globalThis;
  }
  var ca2 = ba2(this);
  function da2(a, b) {
    if (b) {
      var c = ca2;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {});
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && b != null && aa2(c, a, { configurable: true, writable: true, value: b });
    }
  }
  function ea2(a) {
    var b = 0;
    return function() {
      return b < a.length ? { done: false, value: a[b++] } : { done: true };
    };
  }
  function fa2(a) {
    var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : { next: ea2(a) };
  }
  da2("Promise", function(a) {
    function b(g) {
      this.b = 0;
      this.c = void 0;
      this.a = [];
      var h2 = this.f();
      try {
        g(h2.resolve, h2.reject);
      } catch (m) {
        h2.reject(m);
      }
    }
    function c() {
      this.a = null;
    }
    function d(g) {
      return g instanceof b ? g : new b(function(h2) {
        h2(g);
      });
    }
    if (a)
      return a;
    c.prototype.b = function(g) {
      if (this.a == null) {
        this.a = [];
        var h2 = this;
        this.c(function() {
          h2.g();
        });
      }
      this.a.push(g);
    };
    var e = ca2.setTimeout;
    c.prototype.c = function(g) {
      e(g, 0);
    };
    c.prototype.g = function() {
      for (; this.a && this.a.length; ) {
        var g = this.a;
        this.a = [];
        for (var h2 = 0; h2 < g.length; ++h2) {
          var m = g[h2];
          g[h2] = null;
          try {
            m();
          } catch (p2) {
            this.f(p2);
          }
        }
      }
      this.a = null;
    };
    c.prototype.f = function(g) {
      this.c(function() {
        throw g;
      });
    };
    b.prototype.f = function() {
      function g(p2) {
        return function(v2) {
          m || (m = true, p2.call(h2, v2));
        };
      }
      var h2 = this, m = false;
      return { resolve: g(this.m), reject: g(this.g) };
    };
    b.prototype.m = function(g) {
      if (g === this)
        this.g(new TypeError("A Promise cannot resolve to itself"));
      else if (g instanceof b)
        this.s(g);
      else {
        a:
          switch (typeof g) {
            case "object":
              var h2 = g != null;
              break a;
            case "function":
              h2 = true;
              break a;
            default:
              h2 = false;
          }
        h2 ? this.v(g) : this.h(g);
      }
    };
    b.prototype.v = function(g) {
      var h2 = void 0;
      try {
        h2 = g.then;
      } catch (m) {
        this.g(m);
        return;
      }
      typeof h2 == "function" ? this.u(h2, g) : this.h(g);
    };
    b.prototype.g = function(g) {
      this.i(2, g);
    };
    b.prototype.h = function(g) {
      this.i(1, g);
    };
    b.prototype.i = function(g, h2) {
      if (this.b != 0)
        throw Error("Cannot settle(" + g + ", " + h2 + "): Promise already settled in state" + this.b);
      this.b = g;
      this.c = h2;
      this.l();
    };
    b.prototype.l = function() {
      if (this.a != null) {
        for (var g = 0; g < this.a.length; ++g)
          f.b(this.a[g]);
        this.a = null;
      }
    };
    var f = new c();
    b.prototype.s = function(g) {
      var h2 = this.f();
      g.Qa(h2.resolve, h2.reject);
    };
    b.prototype.u = function(g, h2) {
      var m = this.f();
      try {
        g.call(h2, m.resolve, m.reject);
      } catch (p2) {
        m.reject(p2);
      }
    };
    b.prototype.then = function(g, h2) {
      function m(A2, Q2) {
        return typeof A2 == "function" ? function(ya2) {
          try {
            p2(A2(ya2));
          } catch (Ad2) {
            v2(Ad2);
          }
        } : Q2;
      }
      var p2, v2, B2 = new b(function(A2, Q2) {
        p2 = A2;
        v2 = Q2;
      });
      this.Qa(m(g, p2), m(h2, v2));
      return B2;
    };
    b.prototype.catch = function(g) {
      return this.then(void 0, g);
    };
    b.prototype.Qa = function(g, h2) {
      function m() {
        switch (p2.b) {
          case 1:
            g(p2.c);
            break;
          case 2:
            h2(p2.c);
            break;
          default:
            throw Error("Unexpected state: " + p2.b);
        }
      }
      var p2 = this;
      this.a == null ? f.b(m) : this.a.push(m);
    };
    b.resolve = d;
    b.reject = function(g) {
      return new b(function(h2, m) {
        m(g);
      });
    };
    b.race = function(g) {
      return new b(function(h2, m) {
        for (var p2 = fa2(g), v2 = p2.next(); !v2.done; v2 = p2.next())
          d(v2.value).Qa(h2, m);
      });
    };
    b.all = function(g) {
      var h2 = fa2(g), m = h2.next();
      return m.done ? d([]) : new b(function(p2, v2) {
        function B2(ya2) {
          return function(Ad2) {
            A2[ya2] = Ad2;
            Q2--;
            Q2 == 0 && p2(A2);
          };
        }
        var A2 = [], Q2 = 0;
        do
          A2.push(void 0), Q2++, d(m.value).Qa(B2(A2.length - 1), v2), m = h2.next();
        while (!m.done);
      });
    };
    return b;
  });
  var ha2 = ha2 || {}, l = this || self, ia2 = /^[\w+/_-]+[=]{0,2}$/, ja2 = null;
  function ka2(a) {
    return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && ia2.test(a) ? a : "";
  }
  function la2() {
  }
  function ma2(a) {
    var b = typeof a;
    return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
  }
  function na2(a) {
    var b = ma2(a);
    return b == "array" || b == "object" && typeof a.length == "number";
  }
  function oa2(a) {
    return ma2(a) == "function";
  }
  function n2(a) {
    var b = typeof a;
    return b == "object" && a != null || b == "function";
  }
  function pa2(a) {
    return Object.prototype.hasOwnProperty.call(a, qa2) && a[qa2] || (a[qa2] = ++ra2);
  }
  var qa2 = "closure_uid_" + (1e9 * Math.random() >>> 0), ra2 = 0;
  function sa2(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function ta2(a, b, c) {
    if (!a)
      throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function() {
      return a.apply(b, arguments);
    };
  }
  function q2(a, b, c) {
    Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? q2 = sa2 : q2 = ta2;
    return q2.apply(null, arguments);
  }
  function ua2(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  var va2 = Date.now;
  function r2(a, b) {
    function c() {
    }
    c.prototype = b.prototype;
    a.ab = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
  }
  function wa2(a) {
    return a;
  }
  function t2(a, b, c) {
    this.code = xa2 + a;
    this.message = b || za2[a] || "";
    this.a = c || null;
  }
  r2(t2, Error);
  t2.prototype.w = function() {
    var a = { code: this.code, message: this.message };
    this.a && (a.serverResponse = this.a);
    return a;
  };
  t2.prototype.toJSON = function() {
    return this.w();
  };
  function Aa2(a) {
    var b = a && a.code;
    return b ? new t2(b.substring(xa2.length), a.message, a.serverResponse) : null;
  }
  var xa2 = "auth/", za2 = {
    "admin-restricted-operation": "This operation is restricted to administrators only.",
    "argument-error": "",
    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
    "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
    "cordova-not-ready": "Cordova framework is not ready.",
    "cors-unsupported": "This browser is not supported.",
    "credential-already-in-use": "This credential is already associated with a different user account.",
    "custom-token-mismatch": "The custom token corresponds to a different audience.",
    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    "email-change-needs-verification": "Multi-factor users must always have a verified email.",
    "email-already-in-use": "The email address is already in use by another account.",
    "expired-action-code": "The action code has expired. ",
    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
    "internal-error": "An internal error has occurred.",
    "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
    "invalid-app-id": "The mobile app identifier is not registed for the current project.",
    "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
    "invalid-auth-event": "An internal error has occurred.",
    "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
    "invalid-continue-uri": "The continue URL provided in the request is invalid.",
    "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
    "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
    "invalid-email": "The email address is badly formatted.",
    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
    "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
    "invalid-credential": "The supplied auth credential is malformed or has expired.",
    "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
    "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    "wrong-password": "The password is invalid or the user does not have a password.",
    "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
    "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
    "invalid-provider-id": "The specified provider ID is invalid.",
    "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
    "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
    "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
    "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
    "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
    "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
    "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
    "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
    "missing-continue-uri": "A continue URL must be provided in the request.",
    "missing-iframe-start": "An internal error has occurred.",
    "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
    "missing-multi-factor-info": "No second factor identifier is provided.",
    "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
    "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
    "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
    "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
    "app-deleted": "This instance of FirebaseApp has been deleted.",
    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
    "no-auth-event": "An internal error has occurred.",
    "no-such-provider": "User was not linked to an account with the given provider.",
    "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
    "provider-already-linked": "User can only be linked to one identity for the given provider.",
    "quota-exceeded": "The project's quota for this operation has been exceeded.",
    "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
    "redirect-operation-pending": "A redirect sign-in operation is already pending.",
    "rejected-credential": "The request contains malformed or mismatching credentials.",
    "second-factor-already-in-use": "The second factor is already enrolled on this account.",
    "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
    "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
    timeout: "The operation has timed out.",
    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
    "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
    "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
    "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
    "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
    "unverified-email": "The operation requires a verified email.",
    "user-cancelled": "The user did not grant your application the permissions it requested.",
    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
    "user-disabled": "The user account has been disabled by an administrator.",
    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
    "user-signed-out": "",
    "weak-password": "The password must be 6 characters long or more.",
    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
  };
  var Ba2 = { ld: { Ta: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/", Za: "https://staging-securetoken.sandbox.googleapis.com/v1/token", Wa: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/", id: "b" }, sd: { Ta: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", Za: "https://securetoken.googleapis.com/v1/token", Wa: "https://identitytoolkit.googleapis.com/v2/", id: "p" }, ud: {
    Ta: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
    Za: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
    Wa: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
    id: "s"
  }, vd: { Ta: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/", Za: "https://test-securetoken.sandbox.googleapis.com/v1/token", Wa: "https://test-identitytoolkit.sandbox.googleapis.com/v2/", id: "t" } };
  function Ca2(a) {
    for (var b in Ba2)
      if (Ba2[b].id === a)
        return a = Ba2[b], { firebaseEndpoint: a.Ta, secureTokenEndpoint: a.Za, identityPlatformEndpoint: a.Wa };
    return null;
  }
  var Da2;
  Da2 = Ca2("__EID__") ? "__EID__" : void 0;
  function Ea2(a) {
    if (!a)
      return false;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return false;
    }
  }
  function u(a) {
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, u);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }
  r2(u, Error);
  u.prototype.name = "CustomError";
  function Fa2(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : "%s");
    u.call(this, c + a[d]);
  }
  r2(Fa2, u);
  Fa2.prototype.name = "AssertionError";
  function Ga2(a, b) {
    throw new Fa2("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  }
  function Ha2(a, b) {
    this.c = a;
    this.f = b;
    this.b = 0;
    this.a = null;
  }
  Ha2.prototype.get = function() {
    if (0 < this.b) {
      this.b--;
      var a = this.a;
      this.a = a.next;
      a.next = null;
    } else
      a = this.c();
    return a;
  };
  function Ia2(a, b) {
    a.f(b);
    100 > a.b && (a.b++, b.next = a.a, a.a = b);
  }
  function Ja2() {
    this.b = this.a = null;
  }
  var La2 = new Ha2(function() {
    return new Ka2();
  }, function(a) {
    a.reset();
  });
  Ja2.prototype.add = function(a, b) {
    var c = La2.get();
    c.set(a, b);
    this.b ? this.b.next = c : this.a = c;
    this.b = c;
  };
  function Ma2() {
    var a = Na2, b = null;
    a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
    return b;
  }
  function Ka2() {
    this.next = this.b = this.a = null;
  }
  Ka2.prototype.set = function(a, b) {
    this.a = a;
    this.b = b;
    this.next = null;
  };
  Ka2.prototype.reset = function() {
    this.next = this.b = this.a = null;
  };
  var Oa2 = Array.prototype.indexOf ? function(a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function(a, b) {
    if (typeof a === "string")
      return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++)
      if (c in a && a[c] === b)
        return c;
    return -1;
  }, w2 = Array.prototype.forEach ? function(a, b, c) {
    Array.prototype.forEach.call(a, b, c);
  } : function(a, b, c) {
    for (var d = a.length, e = typeof a === "string" ? a.split("") : a, f = 0; f < d; f++)
      f in e && b.call(c, e[f], f, a);
  };
  function Pa2(a, b) {
    for (var c = typeof a === "string" ? a.split("") : a, d = a.length - 1; 0 <= d; --d)
      d in c && b.call(void 0, c[d], d, a);
  }
  var Qa2 = Array.prototype.filter ? function(a, b) {
    return Array.prototype.filter.call(a, b, void 0);
  } : function(a, b) {
    for (var c = a.length, d = [], e = 0, f = typeof a === "string" ? a.split("") : a, g = 0; g < c; g++)
      if (g in f) {
        var h2 = f[g];
        b.call(void 0, h2, g, a) && (d[e++] = h2);
      }
    return d;
  }, Ra2 = Array.prototype.map ? function(a, b) {
    return Array.prototype.map.call(a, b, void 0);
  } : function(a, b) {
    for (var c = a.length, d = Array(c), e = typeof a === "string" ? a.split("") : a, f = 0; f < c; f++)
      f in e && (d[f] = b.call(void 0, e[f], f, a));
    return d;
  }, Sa2 = Array.prototype.some ? function(a, b) {
    return Array.prototype.some.call(a, b, void 0);
  } : function(a, b) {
    for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a))
        return true;
    return false;
  };
  function Ta2(a) {
    a: {
      var b = Ua2;
      for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : typeof a === "string" ? a.charAt(b) : a[b];
  }
  function Va2(a, b) {
    return 0 <= Oa2(a, b);
  }
  function Wa2(a, b) {
    b = Oa2(a, b);
    var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c;
  }
  function Xa2(a, b) {
    var c = 0;
    Pa2(a, function(d, e) {
      b.call(void 0, d, e, a) && Array.prototype.splice.call(a, e, 1).length == 1 && c++;
    });
  }
  function Ya2(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function Za2(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++)
        c[d] = a[d];
      return c;
    }
    return [];
  }
  var $a2 = String.prototype.trim ? function(a) {
    return a.trim();
  } : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }, ab2 = /&/g, bb2 = /</g, cb2 = />/g, db2 = /"/g, eb2 = /'/g, fb = /\x00/g, gb2 = /[\x00&<>"']/;
  function x2(a, b) {
    return a.indexOf(b) != -1;
  }
  function hb2(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  var ib2;
  a: {
    var jb2 = l.navigator;
    if (jb2) {
      var kb2 = jb2.userAgent;
      if (kb2) {
        ib2 = kb2;
        break a;
      }
    }
    ib2 = "";
  }
  function y2(a) {
    return x2(ib2, a);
  }
  function lb2(a, b) {
    for (var c in a)
      b.call(void 0, a[c], c, a);
  }
  function mb2(a) {
    for (var b in a)
      return false;
    return true;
  }
  function nb2(a) {
    var b = {}, c;
    for (c in a)
      b[c] = a[c];
    return b;
  }
  var ob2 = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function z2(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d)
        a[c] = d[c];
      for (var f = 0; f < ob2.length; f++)
        c = ob2[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function pb2(a, b) {
    a: {
      try {
        var c = a && a.ownerDocument, d = c && (c.defaultView || c.parentWindow);
        d = d || l;
        if (d.Element && d.Location) {
          var e = d;
          break a;
        }
      } catch (g) {
      }
      e = null;
    }
    if (e && typeof e[b] != "undefined" && (!a || !(a instanceof e[b]) && (a instanceof e.Location || a instanceof e.Element))) {
      if (n2(a))
        try {
          var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
        } catch (g) {
          f = "<object could not be stringified>";
        }
      else
        f = a === void 0 ? "undefined" : a === null ? "null" : typeof a;
      Ga2("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, f);
    }
  }
  function qb2(a, b) {
    this.a = a === rb && b || "";
    this.b = sb2;
  }
  qb2.prototype.sa = true;
  qb2.prototype.ra = function() {
    return this.a;
  };
  qb2.prototype.toString = function() {
    return "Const{" + this.a + "}";
  };
  function tb2(a) {
    if (a instanceof qb2 && a.constructor === qb2 && a.b === sb2)
      return a.a;
    Ga2("expected object of type Const, got '" + a + "'");
    return "type_error:Const";
  }
  var sb2 = {}, rb = {};
  var ub2;
  function vb2() {
    if (ub2 === void 0) {
      var a = null, b = l.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", { createHTML: wa2, createScript: wa2, createScriptURL: wa2 });
        } catch (c) {
          l.console && l.console.error(c.message);
        }
        ub2 = a;
      } else
        ub2 = a;
    }
    return ub2;
  }
  function wb2(a, b) {
    this.a = b === xb2 ? a : "";
  }
  wb2.prototype.sa = true;
  wb2.prototype.ra = function() {
    return this.a.toString();
  };
  wb2.prototype.toString = function() {
    return "TrustedResourceUrl{" + this.a + "}";
  };
  function yb2(a) {
    if (a instanceof wb2 && a.constructor === wb2)
      return a.a;
    Ga2("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ma2(a));
    return "type_error:TrustedResourceUrl";
  }
  function zb2(a, b) {
    var c = tb2(a);
    if (!Ab2.test(c))
      throw Error("Invalid TrustedResourceUrl format: " + c);
    a = c.replace(Bb2, function(d, e) {
      if (!Object.prototype.hasOwnProperty.call(b, e))
        throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
      d = b[e];
      return d instanceof qb2 ? tb2(d) : encodeURIComponent(String(d));
    });
    return Cb2(a);
  }
  var Bb2 = /%{(\w+)}/g, Ab2 = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i, xb2 = {};
  function Cb2(a) {
    var b = vb2();
    a = b ? b.createScriptURL(a) : a;
    return new wb2(a, xb2);
  }
  function C2(a, b) {
    this.a = b === Db2 ? a : "";
  }
  C2.prototype.sa = true;
  C2.prototype.ra = function() {
    return this.a.toString();
  };
  C2.prototype.toString = function() {
    return "SafeUrl{" + this.a + "}";
  };
  function Eb2(a) {
    if (a instanceof C2 && a.constructor === C2)
      return a.a;
    Ga2("expected object of type SafeUrl, got '" + a + "' of type " + ma2(a));
    return "type_error:SafeUrl";
  }
  var Fb2 = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i, Gb2 = /^data:(.*);base64,[a-z0-9+\/]+=*$/i, Hb2 = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function Ib2(a) {
    if (a instanceof C2)
      return a;
    a = typeof a == "object" && a.sa ? a.ra() : String(a);
    if (Hb2.test(a))
      a = new C2(a, Db2);
    else {
      a = String(a);
      a = a.replace(/(%0A|%0D)/g, "");
      var b = a.match(Gb2);
      a = b && Fb2.test(b[1]) ? new C2(a, Db2) : null;
    }
    return a;
  }
  function Jb2(a) {
    if (a instanceof C2)
      return a;
    a = typeof a == "object" && a.sa ? a.ra() : String(a);
    Hb2.test(a) || (a = "about:invalid#zClosurez");
    return new C2(a, Db2);
  }
  var Db2 = {}, Kb2 = new C2("about:invalid#zClosurez", Db2);
  function Lb2(a, b, c) {
    this.a = c === Mb2 ? a : "";
  }
  Lb2.prototype.sa = true;
  Lb2.prototype.ra = function() {
    return this.a.toString();
  };
  Lb2.prototype.toString = function() {
    return "SafeHtml{" + this.a + "}";
  };
  function Nb2(a) {
    if (a instanceof Lb2 && a.constructor === Lb2)
      return a.a;
    Ga2("expected object of type SafeHtml, got '" + a + "' of type " + ma2(a));
    return "type_error:SafeHtml";
  }
  var Mb2 = {};
  function Ob2(a, b) {
    pb2(a, "HTMLScriptElement");
    a.src = yb2(b);
    (b = a.ownerDocument && a.ownerDocument.defaultView) && b != l ? b = ka2(b.document) : (ja2 === null && (ja2 = ka2(l.document)), b = ja2);
    b && a.setAttribute("nonce", b);
  }
  function Pb2(a, b, c, d) {
    a = a instanceof C2 ? a : Jb2(a);
    b = b || l;
    c = c instanceof qb2 ? tb2(c) : c || "";
    return b.open(Eb2(a), c, d, void 0);
  }
  function Qb2(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
      d += c.shift() + e.shift();
    return d + c.join("%s");
  }
  function Rb2(a) {
    gb2.test(a) && (a.indexOf("&") != -1 && (a = a.replace(ab2, "&amp;")), a.indexOf("<") != -1 && (a = a.replace(bb2, "&lt;")), a.indexOf(">") != -1 && (a = a.replace(cb2, "&gt;")), a.indexOf('"') != -1 && (a = a.replace(db2, "&quot;")), a.indexOf("'") != -1 && (a = a.replace(eb2, "&#39;")), a.indexOf("\0") != -1 && (a = a.replace(fb, "&#0;")));
    return a;
  }
  function Sb2(a) {
    Sb2[" "](a);
    return a;
  }
  Sb2[" "] = la2;
  function Tb2(a, b) {
    var c = Ub2;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
  }
  var Vb2 = y2("Opera"), Wb2 = y2("Trident") || y2("MSIE"), Xb2 = y2("Edge"), Yb2 = Xb2 || Wb2, Zb2 = y2("Gecko") && !(x2(ib2.toLowerCase(), "webkit") && !y2("Edge")) && !(y2("Trident") || y2("MSIE")) && !y2("Edge"), $b2 = x2(ib2.toLowerCase(), "webkit") && !y2("Edge");
  function ac2() {
    var a = l.document;
    return a ? a.documentMode : void 0;
  }
  var bc2;
  a: {
    var cc2 = "", dc2 = function() {
      var a = ib2;
      if (Zb2)
        return /rv:([^\);]+)(\)|;)/.exec(a);
      if (Xb2)
        return /Edge\/([\d\.]+)/.exec(a);
      if (Wb2)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if ($b2)
        return /WebKit\/(\S+)/.exec(a);
      if (Vb2)
        return /(?:Version)[ \/]?(\S+)/.exec(a);
    }();
    dc2 && (cc2 = dc2 ? dc2[1] : "");
    if (Wb2) {
      var ec2 = ac2();
      if (ec2 != null && ec2 > parseFloat(cc2)) {
        bc2 = String(ec2);
        break a;
      }
    }
    bc2 = cc2;
  }
  var Ub2 = {};
  function fc2(a) {
    return Tb2(a, function() {
      for (var b = 0, c = $a2(String(bc2)).split("."), d = $a2(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; b == 0 && f < e; f++) {
        var g = c[f] || "", h2 = d[f] || "";
        do {
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          h2 = /(\d*)(\D*)(.*)/.exec(h2) || ["", "", "", ""];
          if (g[0].length == 0 && h2[0].length == 0)
            break;
          b = hb2(g[1].length == 0 ? 0 : parseInt(g[1], 10), h2[1].length == 0 ? 0 : parseInt(h2[1], 10)) || hb2(g[2].length == 0, h2[2].length == 0) || hb2(g[2], h2[2]);
          g = g[3];
          h2 = h2[3];
        } while (b == 0);
      }
      return 0 <= b;
    });
  }
  var gc2;
  if (l.document && Wb2) {
    var hc2 = ac2();
    gc2 = hc2 ? hc2 : parseInt(bc2, 10) || void 0;
  } else
    gc2 = void 0;
  var ic2 = gc2;
  try {
    new self.OffscreenCanvas(0, 0).getContext("2d");
  } catch (a) {
  }
  var jc2 = !Wb2 || 9 <= Number(ic2);
  function kc2(a) {
    var b = document;
    return typeof a === "string" ? b.getElementById(a) : a;
  }
  function lc2(a, b) {
    lb2(b, function(c, d) {
      c && typeof c == "object" && c.sa && (c = c.ra());
      d == "style" ? a.style.cssText = c : d == "class" ? a.className = c : d == "for" ? a.htmlFor = c : mc2.hasOwnProperty(d) ? a.setAttribute(mc2[d], c) : d.lastIndexOf("aria-", 0) == 0 || d.lastIndexOf("data-", 0) == 0 ? a.setAttribute(d, c) : a[d] = c;
    });
  }
  var mc2 = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };
  function nc2(a, b, c) {
    var d = arguments, e = document, f = String(d[0]), g = d[1];
    if (!jc2 && g && (g.name || g.type)) {
      f = ["<", f];
      g.name && f.push(' name="', Rb2(g.name), '"');
      if (g.type) {
        f.push(' type="', Rb2(g.type), '"');
        var h2 = {};
        z2(h2, g);
        delete h2.type;
        g = h2;
      }
      f.push(">");
      f = f.join("");
    }
    f = oc2(e, f);
    g && (typeof g === "string" ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : lc2(f, g));
    2 < d.length && pc2(e, f, d);
    return f;
  }
  function pc2(a, b, c) {
    function d(h2) {
      h2 && b.appendChild(typeof h2 === "string" ? a.createTextNode(h2) : h2);
    }
    for (var e = 2; e < c.length; e++) {
      var f = c[e];
      if (!na2(f) || n2(f) && 0 < f.nodeType)
        d(f);
      else {
        a: {
          if (f && typeof f.length == "number") {
            if (n2(f)) {
              var g = typeof f.item == "function" || typeof f.item == "string";
              break a;
            }
            if (oa2(f)) {
              g = typeof f.item == "function";
              break a;
            }
          }
          g = false;
        }
        w2(g ? Za2(f) : f, d);
      }
    }
  }
  function oc2(a, b) {
    b = String(b);
    a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
    return a.createElement(b);
  }
  function qc2(a) {
    l.setTimeout(function() {
      throw a;
    }, 0);
  }
  var rc2;
  function sc2() {
    var a = l.MessageChannel;
    typeof a === "undefined" && typeof window !== "undefined" && window.postMessage && window.addEventListener && !y2("Presto") && (a = function() {
      var e = oc2(document, "IFRAME");
      e.style.display = "none";
      document.documentElement.appendChild(e);
      var f = e.contentWindow;
      e = f.document;
      e.open();
      e.close();
      var g = "callImmediate" + Math.random(), h2 = f.location.protocol == "file:" ? "*" : f.location.protocol + "//" + f.location.host;
      e = q2(function(m) {
        if ((h2 == "*" || m.origin == h2) && m.data == g)
          this.port1.onmessage();
      }, this);
      f.addEventListener("message", e, false);
      this.port1 = {};
      this.port2 = { postMessage: function() {
        f.postMessage(g, h2);
      } };
    });
    if (typeof a !== "undefined" && !y2("Trident") && !y2("MSIE")) {
      var b = new a(), c = {}, d = c;
      b.port1.onmessage = function() {
        if (c.next !== void 0) {
          c = c.next;
          var e = c.Gb;
          c.Gb = null;
          e();
        }
      };
      return function(e) {
        d.next = { Gb: e };
        d = d.next;
        b.port2.postMessage(0);
      };
    }
    return function(e) {
      l.setTimeout(e, 0);
    };
  }
  function tc2(a, b) {
    uc2 || vc2();
    wc2 || (uc2(), wc2 = true);
    Na2.add(a, b);
  }
  var uc2;
  function vc2() {
    if (l.Promise && l.Promise.resolve) {
      var a = l.Promise.resolve(void 0);
      uc2 = function() {
        a.then(xc2);
      };
    } else
      uc2 = function() {
        var b = xc2;
        !oa2(l.setImmediate) || l.Window && l.Window.prototype && !y2("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (rc2 || (rc2 = sc2()), rc2(b)) : l.setImmediate(b);
      };
  }
  var wc2 = false, Na2 = new Ja2();
  function xc2() {
    for (var a; a = Ma2(); ) {
      try {
        a.a.call(a.b);
      } catch (b) {
        qc2(b);
      }
      Ia2(La2, a);
    }
    wc2 = false;
  }
  function D2(a, b) {
    this.a = yc2;
    this.i = void 0;
    this.f = this.b = this.c = null;
    this.g = this.h = false;
    if (a != la2)
      try {
        var c = this;
        a.call(b, function(d) {
          zc2(c, Ac2, d);
        }, function(d) {
          if (!(d instanceof Bc2))
            try {
              if (d instanceof Error)
                throw d;
              throw Error("Promise rejected.");
            } catch (e) {
            }
          zc2(c, Cc2, d);
        });
      } catch (d) {
        zc2(this, Cc2, d);
      }
  }
  var yc2 = 0, Ac2 = 2, Cc2 = 3;
  function Dc2() {
    this.next = this.f = this.b = this.g = this.a = null;
    this.c = false;
  }
  Dc2.prototype.reset = function() {
    this.f = this.b = this.g = this.a = null;
    this.c = false;
  };
  var Ec2 = new Ha2(function() {
    return new Dc2();
  }, function(a) {
    a.reset();
  });
  function Fc2(a, b, c) {
    var d = Ec2.get();
    d.g = a;
    d.b = b;
    d.f = c;
    return d;
  }
  function E2(a) {
    if (a instanceof D2)
      return a;
    var b = new D2(la2);
    zc2(b, Ac2, a);
    return b;
  }
  function F2(a) {
    return new D2(function(b, c) {
      c(a);
    });
  }
  function Gc2(a, b, c) {
    Hc2(a, b, c, null) || tc2(ua2(b, a));
  }
  function Ic2(a) {
    return new D2(function(b, c) {
      var d = a.length, e = [];
      if (d)
        for (var f = function(p2, v2) {
          d--;
          e[p2] = v2;
          d == 0 && b(e);
        }, g = function(p2) {
          c(p2);
        }, h2 = 0, m; h2 < a.length; h2++)
          m = a[h2], Gc2(m, ua2(f, h2), g);
      else
        b(e);
    });
  }
  function Jc2(a) {
    return new D2(function(b) {
      var c = a.length, d = [];
      if (c)
        for (var e = function(h2, m, p2) {
          c--;
          d[h2] = m ? { Pb: true, value: p2 } : { Pb: false, reason: p2 };
          c == 0 && b(d);
        }, f = 0, g; f < a.length; f++)
          g = a[f], Gc2(g, ua2(e, f, true), ua2(e, f, false));
      else
        b(d);
    });
  }
  D2.prototype.then = function(a, b, c) {
    return Kc2(this, oa2(a) ? a : null, oa2(b) ? b : null, c);
  };
  D2.prototype.$goog_Thenable = true;
  k2 = D2.prototype;
  k2.oa = function(a, b) {
    a = Fc2(a, a, b);
    a.c = true;
    Lc2(this, a);
    return this;
  };
  k2.o = function(a, b) {
    return Kc2(this, null, a, b);
  };
  k2.cancel = function(a) {
    if (this.a == yc2) {
      var b = new Bc2(a);
      tc2(function() {
        Mc2(this, b);
      }, this);
    }
  };
  function Mc2(a, b) {
    if (a.a == yc2)
      if (a.c) {
        var c = a.c;
        if (c.b) {
          for (var d = 0, e = null, f = null, g = c.b; g && (g.c || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next)
            e || (f = g);
          e && (c.a == yc2 && d == 1 ? Mc2(c, b) : (f ? (d = f, d.next == c.f && (c.f = d), d.next = d.next.next) : Nc2(c), Oc2(c, e, Cc2, b)));
        }
        a.c = null;
      } else
        zc2(a, Cc2, b);
  }
  function Lc2(a, b) {
    a.b || a.a != Ac2 && a.a != Cc2 || Pc2(a);
    a.f ? a.f.next = b : a.b = b;
    a.f = b;
  }
  function Kc2(a, b, c, d) {
    var e = Fc2(null, null, null);
    e.a = new D2(function(f, g) {
      e.g = b ? function(h2) {
        try {
          var m = b.call(d, h2);
          f(m);
        } catch (p2) {
          g(p2);
        }
      } : f;
      e.b = c ? function(h2) {
        try {
          var m = c.call(d, h2);
          m === void 0 && h2 instanceof Bc2 ? g(h2) : f(m);
        } catch (p2) {
          g(p2);
        }
      } : g;
    });
    e.a.c = a;
    Lc2(a, e);
    return e.a;
  }
  k2.$c = function(a) {
    this.a = yc2;
    zc2(this, Ac2, a);
  };
  k2.ad = function(a) {
    this.a = yc2;
    zc2(this, Cc2, a);
  };
  function zc2(a, b, c) {
    a.a == yc2 && (a === c && (b = Cc2, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, Hc2(c, a.$c, a.ad, a) || (a.i = c, a.a = b, a.c = null, Pc2(a), b != Cc2 || c instanceof Bc2 || Qc2(a, c)));
  }
  function Hc2(a, b, c, d) {
    if (a instanceof D2)
      return Lc2(a, Fc2(b || la2, c || null, d)), true;
    if (Ea2(a))
      return a.then(b, c, d), true;
    if (n2(a))
      try {
        var e = a.then;
        if (oa2(e))
          return Rc2(a, e, b, c, d), true;
      } catch (f) {
        return c.call(d, f), true;
      }
    return false;
  }
  function Rc2(a, b, c, d, e) {
    function f(m) {
      h2 || (h2 = true, d.call(e, m));
    }
    function g(m) {
      h2 || (h2 = true, c.call(e, m));
    }
    var h2 = false;
    try {
      b.call(a, g, f);
    } catch (m) {
      f(m);
    }
  }
  function Pc2(a) {
    a.h || (a.h = true, tc2(a.gc, a));
  }
  function Nc2(a) {
    var b = null;
    a.b && (b = a.b, a.b = b.next, b.next = null);
    a.b || (a.f = null);
    return b;
  }
  k2.gc = function() {
    for (var a; a = Nc2(this); )
      Oc2(this, a, this.a, this.i);
    this.h = false;
  };
  function Oc2(a, b, c, d) {
    if (c == Cc2 && b.b && !b.c)
      for (; a && a.g; a = a.c)
        a.g = false;
    if (b.a)
      b.a.c = null, Sc2(b, c, d);
    else
      try {
        b.c ? b.g.call(b.f) : Sc2(b, c, d);
      } catch (e) {
        Tc2.call(null, e);
      }
    Ia2(Ec2, b);
  }
  function Sc2(a, b, c) {
    b == Ac2 ? a.g.call(a.f, c) : a.b && a.b.call(a.f, c);
  }
  function Qc2(a, b) {
    a.g = true;
    tc2(function() {
      a.g && Tc2.call(null, b);
    });
  }
  var Tc2 = qc2;
  function Bc2(a) {
    u.call(this, a);
  }
  r2(Bc2, u);
  Bc2.prototype.name = "cancel";
  function Uc2() {
    this.xa = this.xa;
    this.pa = this.pa;
  }
  var Vc2 = 0, Wc2 = {};
  Uc2.prototype.xa = false;
  function Xc2(a) {
    if (!a.xa && (a.xa = true, a.Da(), Vc2 != 0)) {
      var b = pa2(a);
      delete Wc2[b];
    }
  }
  Uc2.prototype.Da = function() {
    if (this.pa)
      for (; this.pa.length; )
        this.pa.shift()();
  };
  var Yc2 = Object.freeze || function(a) {
    return a;
  };
  var Zc2 = !Wb2 || 9 <= Number(ic2), $c2 = Wb2 && !fc2("9"), ad2 = function() {
    if (!l.addEventListener || !Object.defineProperty)
      return false;
    var a = false, b = Object.defineProperty({}, "passive", { get: function() {
      a = true;
    } });
    try {
      l.addEventListener("test", la2, b), l.removeEventListener("test", la2, b);
    } catch (c) {
    }
    return a;
  }();
  function G2(a, b) {
    this.type = a;
    this.b = this.target = b;
    this.defaultPrevented = false;
  }
  G2.prototype.preventDefault = function() {
    this.defaultPrevented = true;
  };
  function bd2(a, b) {
    G2.call(this, a ? a.type : "");
    this.relatedTarget = this.b = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.pointerId = 0;
    this.pointerType = "";
    this.a = null;
    if (a) {
      var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.b = b;
      if (b = a.relatedTarget) {
        if (Zb2) {
          a: {
            try {
              Sb2(b.nodeName);
              var e = true;
              break a;
            } catch (f) {
            }
            e = false;
          }
          e || (b = null);
        }
      } else
        c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement);
      this.relatedTarget = b;
      d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = typeof a.pointerType === "string" ? a.pointerType : cd2[a.pointerType] || "";
      this.a = a;
      a.defaultPrevented && this.preventDefault();
    }
  }
  r2(bd2, G2);
  var cd2 = Yc2({ 2: "touch", 3: "pen", 4: "mouse" });
  bd2.prototype.preventDefault = function() {
    bd2.ab.preventDefault.call(this);
    var a = this.a;
    if (a.preventDefault)
      a.preventDefault();
    else if (a.returnValue = false, $c2)
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
          a.keyCode = -1;
      } catch (b) {
      }
  };
  bd2.prototype.g = function() {
    return this.a;
  };
  var dd2 = "closure_listenable_" + (1e6 * Math.random() | 0), ed2 = 0;
  function fd2(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.Va = e;
    this.key = ++ed2;
    this.va = this.Pa = false;
  }
  function gd2(a) {
    a.va = true;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.Va = null;
  }
  function hd2(a) {
    this.src = a;
    this.a = {};
    this.b = 0;
  }
  hd2.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.b++);
    var g = id2(a, b, d, e);
    -1 < g ? (b = a[g], c || (b.Pa = false)) : (b = new fd2(b, this.src, f, !!d, e), b.Pa = c, a.push(b));
    return b;
  };
  function jd2(a, b) {
    var c = b.type;
    c in a.a && Wa2(a.a[c], b) && (gd2(b), a.a[c].length == 0 && (delete a.a[c], a.b--));
  }
  function id2(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.va && f.listener == b && f.capture == !!c && f.Va == d)
        return e;
    }
    return -1;
  }
  var kd2 = "closure_lm_" + (1e6 * Math.random() | 0), ld2 = {};
  function nd2(a, b, c, d, e) {
    if (d && d.once)
      od2(a, b, c, d, e);
    else if (Array.isArray(b))
      for (var f = 0; f < b.length; f++)
        nd2(a, b[f], c, d, e);
    else
      c = pd2(c), a && a[dd2] ? qd2(a, b, c, n2(d) ? !!d.capture : !!d, e) : rd2(a, b, c, false, d, e);
  }
  function rd2(a, b, c, d, e, f) {
    if (!b)
      throw Error("Invalid event type");
    var g = n2(e) ? !!e.capture : !!e, h2 = sd2(a);
    h2 || (a[kd2] = h2 = new hd2(a));
    c = h2.add(b, c, d, g, f);
    if (!c.proxy) {
      d = td2();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener)
        ad2 || (e = g), e === void 0 && (e = false), a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent)
        a.attachEvent(ud2(b.toString()), d);
      else if (a.addListener && a.removeListener)
        a.addListener(d);
      else
        throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  function td2() {
    var a = vd2, b = Zc2 ? function(c) {
      return a.call(b.src, b.listener, c);
    } : function(c) {
      c = a.call(b.src, b.listener, c);
      if (!c)
        return c;
    };
    return b;
  }
  function od2(a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++)
        od2(a, b[f], c, d, e);
    else
      c = pd2(c), a && a[dd2] ? wd2(a, b, c, n2(d) ? !!d.capture : !!d, e) : rd2(a, b, c, true, d, e);
  }
  function xd2(a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++)
        xd2(a, b[f], c, d, e);
    else
      (d = n2(d) ? !!d.capture : !!d, c = pd2(c), a && a[dd2]) ? (a = a.v, b = String(b).toString(), b in a.a && (f = a.a[b], c = id2(f, c, d, e), -1 < c && (gd2(f[c]), Array.prototype.splice.call(f, c, 1), f.length == 0 && (delete a.a[b], a.b--)))) : a && (a = sd2(a)) && (b = a.a[b.toString()], a = -1, b && (a = id2(b, c, d, e)), (c = -1 < a ? b[a] : null) && yd2(c));
  }
  function yd2(a) {
    if (typeof a !== "number" && a && !a.va) {
      var b = a.src;
      if (b && b[dd2])
        jd2(b.v, a);
      else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ud2(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        (c = sd2(b)) ? (jd2(c, a), c.b == 0 && (c.src = null, b[kd2] = null)) : gd2(a);
      }
    }
  }
  function ud2(a) {
    return a in ld2 ? ld2[a] : ld2[a] = "on" + a;
  }
  function zd2(a, b, c, d) {
    var e = true;
    if (a = sd2(a)) {
      if (b = a.a[b.toString()])
        for (b = b.concat(), a = 0; a < b.length; a++) {
          var f = b[a];
          f && f.capture == c && !f.va && (f = Bd2(f, d), e = e && f !== false);
        }
    }
    return e;
  }
  function Bd2(a, b) {
    var c = a.listener, d = a.Va || a.src;
    a.Pa && yd2(a);
    return c.call(d, b);
  }
  function vd2(a, b) {
    if (a.va)
      return true;
    if (!Zc2) {
      if (!b)
        a: {
          b = ["window", "event"];
          for (var c = l, d = 0; d < b.length; d++)
            if (c = c[b[d]], c == null) {
              b = null;
              break a;
            }
          b = c;
        }
      d = b;
      b = new bd2(d, this);
      c = true;
      if (!(0 > d.keyCode || d.returnValue != void 0)) {
        a: {
          var e = false;
          if (d.keyCode == 0)
            try {
              d.keyCode = -1;
              break a;
            } catch (g) {
              e = true;
            }
          if (e || d.returnValue == void 0)
            d.returnValue = true;
        }
        d = [];
        for (e = b.b; e; e = e.parentNode)
          d.push(e);
        a = a.type;
        for (e = d.length - 1; 0 <= e; e--) {
          b.b = d[e];
          var f = zd2(d[e], a, true, b);
          c = c && f;
        }
        for (e = 0; e < d.length; e++)
          b.b = d[e], f = zd2(d[e], a, false, b), c = c && f;
      }
      return c;
    }
    return Bd2(a, new bd2(b, this));
  }
  function sd2(a) {
    a = a[kd2];
    return a instanceof hd2 ? a : null;
  }
  var Cd2 = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
  function pd2(a) {
    if (oa2(a))
      return a;
    a[Cd2] || (a[Cd2] = function(b) {
      return a.handleEvent(b);
    });
    return a[Cd2];
  }
  function H2() {
    Uc2.call(this);
    this.v = new hd2(this);
    this.ac = this;
    this.gb = null;
  }
  r2(H2, Uc2);
  H2.prototype[dd2] = true;
  H2.prototype.addEventListener = function(a, b, c, d) {
    nd2(this, a, b, c, d);
  };
  H2.prototype.removeEventListener = function(a, b, c, d) {
    xd2(this, a, b, c, d);
  };
  H2.prototype.dispatchEvent = function(a) {
    var b, c = this.gb;
    if (c)
      for (b = []; c; c = c.gb)
        b.push(c);
    c = this.ac;
    var d = a.type || a;
    if (typeof a === "string")
      a = new G2(a, c);
    else if (a instanceof G2)
      a.target = a.target || c;
    else {
      var e = a;
      a = new G2(d, c);
      z2(a, e);
    }
    e = true;
    if (b)
      for (var f = b.length - 1; 0 <= f; f--) {
        var g = a.b = b[f];
        e = Dd2(g, d, true, a) && e;
      }
    g = a.b = c;
    e = Dd2(g, d, true, a) && e;
    e = Dd2(g, d, false, a) && e;
    if (b)
      for (f = 0; f < b.length; f++)
        g = a.b = b[f], e = Dd2(g, d, false, a) && e;
    return e;
  };
  H2.prototype.Da = function() {
    H2.ab.Da.call(this);
    if (this.v) {
      var a = this.v, c;
      for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++)
          gd2(d[e]);
        delete a.a[c];
        a.b--;
      }
    }
    this.gb = null;
  };
  function qd2(a, b, c, d, e) {
    a.v.add(String(b), c, false, d, e);
  }
  function wd2(a, b, c, d, e) {
    a.v.add(String(b), c, true, d, e);
  }
  function Dd2(a, b, c, d) {
    b = a.v.a[String(b)];
    if (!b)
      return true;
    b = b.concat();
    for (var e = true, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.va && g.capture == c) {
        var h2 = g.listener, m = g.Va || g.src;
        g.Pa && jd2(a.v, g);
        e = h2.call(m, d) !== false && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  function Ed2(a, b, c) {
    if (oa2(a))
      c && (a = q2(a, c));
    else if (a && typeof a.handleEvent == "function")
      a = q2(a.handleEvent, a);
    else
      throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
  }
  function Fd2(a) {
    var b = null;
    return new D2(function(c, d) {
      b = Ed2(function() {
        c(void 0);
      }, a);
      b == -1 && d(Error("Failed to schedule timer."));
    }).o(function(c) {
      l.clearTimeout(b);
      throw c;
    });
  }
  function Gd2(a) {
    if (a.W && typeof a.W == "function")
      return a.W();
    if (typeof a === "string")
      return a.split("");
    if (na2(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
      return b;
    }
    b = [];
    c = 0;
    for (d in a)
      b[c++] = a[d];
    return b;
  }
  function Hd2(a) {
    if (a.Y && typeof a.Y == "function")
      return a.Y();
    if (!a.W || typeof a.W != "function") {
      if (na2(a) || typeof a === "string") {
        var b = [];
        a = a.length;
        for (var c = 0; c < a; c++)
          b.push(c);
        return b;
      }
      b = [];
      c = 0;
      for (var d in a)
        b[c++] = d;
      return b;
    }
  }
  function Id2(a, b) {
    if (a.forEach && typeof a.forEach == "function")
      a.forEach(b, void 0);
    else if (na2(a) || typeof a === "string")
      w2(a, b, void 0);
    else
      for (var c = Hd2(a), d = Gd2(a), e = d.length, f = 0; f < e; f++)
        b.call(void 0, d[f], c && c[f], a);
  }
  function Jd2(a, b) {
    this.b = {};
    this.a = [];
    this.c = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2)
        throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2)
        this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof Jd2)
        for (c = a.Y(), d = 0; d < c.length; d++)
          this.set(c[d], a.get(c[d]));
      else
        for (d in a)
          this.set(d, a[d]);
  }
  k2 = Jd2.prototype;
  k2.W = function() {
    Kd2(this);
    for (var a = [], b = 0; b < this.a.length; b++)
      a.push(this.b[this.a[b]]);
    return a;
  };
  k2.Y = function() {
    Kd2(this);
    return this.a.concat();
  };
  k2.clear = function() {
    this.b = {};
    this.c = this.a.length = 0;
  };
  function Kd2(a) {
    if (a.c != a.a.length) {
      for (var b = 0, c = 0; b < a.a.length; ) {
        var d = a.a[b];
        Ld2(a.b, d) && (a.a[c++] = d);
        b++;
      }
      a.a.length = c;
    }
    if (a.c != a.a.length) {
      var e = {};
      for (c = b = 0; b < a.a.length; )
        d = a.a[b], Ld2(e, d) || (a.a[c++] = d, e[d] = 1), b++;
      a.a.length = c;
    }
  }
  k2.get = function(a, b) {
    return Ld2(this.b, a) ? this.b[a] : b;
  };
  k2.set = function(a, b) {
    Ld2(this.b, a) || (this.c++, this.a.push(a));
    this.b[a] = b;
  };
  k2.forEach = function(a, b) {
    for (var c = this.Y(), d = 0; d < c.length; d++) {
      var e = c[d], f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  function Ld2(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  var Md2 = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function Nd2(a, b) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else
          f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  }
  function Od2(a, b) {
    this.a = this.l = this.c = "";
    this.g = null;
    this.h = this.f = "";
    this.i = false;
    var c;
    a instanceof Od2 ? (this.i = b !== void 0 ? b : a.i, Pd2(this, a.c), this.l = a.l, this.a = a.a, Qd2(this, a.g), this.f = a.f, Rd(this, Sd(a.b)), this.h = a.h) : a && (c = String(a).match(Md2)) ? (this.i = !!b, Pd2(this, c[1] || "", true), this.l = Td(c[2] || ""), this.a = Td(c[3] || "", true), Qd2(this, c[4]), this.f = Td(c[5] || "", true), Rd(this, c[6] || "", true), this.h = Td(c[7] || "")) : (this.i = !!b, this.b = new Ud(null, this.i));
  }
  Od2.prototype.toString = function() {
    var a = [], b = this.c;
    b && a.push(Vd(b, Wd, true), ":");
    var c = this.a;
    if (c || b == "file")
      a.push("//"), (b = this.l) && a.push(Vd(b, Wd, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.g, c != null && a.push(":", String(c));
    if (c = this.f)
      this.a && c.charAt(0) != "/" && a.push("/"), a.push(Vd(c, c.charAt(0) == "/" ? Xd : Yd, true));
    (c = this.b.toString()) && a.push("?", c);
    (c = this.h) && a.push("#", Vd(c, Zd));
    return a.join("");
  };
  Od2.prototype.resolve = function(a) {
    var b = new Od2(this), c = !!a.c;
    c ? Pd2(b, a.c) : c = !!a.l;
    c ? b.l = a.l : c = !!a.a;
    c ? b.a = a.a : c = a.g != null;
    var d = a.f;
    if (c)
      Qd2(b, a.g);
    else if (c = !!a.f) {
      if (d.charAt(0) != "/")
        if (this.a && !this.f)
          d = "/" + d;
        else {
          var e = b.f.lastIndexOf("/");
          e != -1 && (d = b.f.substr(0, e + 1) + d);
        }
      e = d;
      if (e == ".." || e == ".")
        d = "";
      else if (x2(e, "./") || x2(e, "/.")) {
        d = e.lastIndexOf("/", 0) == 0;
        e = e.split("/");
        for (var f = [], g = 0; g < e.length; ) {
          var h2 = e[g++];
          h2 == "." ? d && g == e.length && f.push("") : h2 == ".." ? ((1 < f.length || f.length == 1 && f[0] != "") && f.pop(), d && g == e.length && f.push("")) : (f.push(h2), d = true);
        }
        d = f.join("/");
      } else
        d = e;
    }
    c ? b.f = d : c = a.b.toString() !== "";
    c ? Rd(b, Sd(a.b)) : c = !!a.h;
    c && (b.h = a.h);
    return b;
  };
  function Pd2(a, b, c) {
    a.c = c ? Td(b, true) : b;
    a.c && (a.c = a.c.replace(/:$/, ""));
  }
  function Qd2(a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b)
        throw Error("Bad port number " + b);
      a.g = b;
    } else
      a.g = null;
  }
  function Rd(a, b, c) {
    b instanceof Ud ? (a.b = b, $d(a.b, a.i)) : (c || (b = Vd(b, ae2)), a.b = new Ud(b, a.i));
  }
  function I2(a, b, c) {
    a.b.set(b, c);
  }
  function be2(a, b) {
    return a.b.get(b);
  }
  function J2(a) {
    return a instanceof Od2 ? new Od2(a) : new Od2(a, void 0);
  }
  function ce2(a, b, c, d) {
    var e = new Od2(null, void 0);
    a && Pd2(e, a);
    b && (e.a = b);
    c && Qd2(e, c);
    d && (e.f = d);
    return e;
  }
  function Td(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  }
  function Vd(a, b, c) {
    return typeof a === "string" ? (a = encodeURI(a).replace(b, de2), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  }
  function de2(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  }
  var Wd = /[#\/\?@]/g, Yd = /[#\?:]/g, Xd = /[#\?]/g, ae2 = /[#\?@]/g, Zd = /#/g;
  function Ud(a, b) {
    this.b = this.a = null;
    this.c = a || null;
    this.f = !!b;
  }
  function ee2(a) {
    a.a || (a.a = new Jd2(), a.b = 0, a.c && Nd2(a.c, function(b, c) {
      a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
    }));
  }
  function fe2(a) {
    var b = Hd2(a);
    if (typeof b == "undefined")
      throw Error("Keys are undefined");
    var c = new Ud(null, void 0);
    a = Gd2(a);
    for (var d = 0; d < b.length; d++) {
      var e = b[d], f = a[d];
      Array.isArray(f) ? ge2(c, e, f) : c.add(e, f);
    }
    return c;
  }
  k2 = Ud.prototype;
  k2.add = function(a, b) {
    ee2(this);
    this.c = null;
    a = he2(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.b += 1;
    return this;
  };
  function ie2(a, b) {
    ee2(a);
    b = he2(a, b);
    Ld2(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, Ld2(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Kd2(a)));
  }
  k2.clear = function() {
    this.a = this.c = null;
    this.b = 0;
  };
  function je2(a, b) {
    ee2(a);
    b = he2(a, b);
    return Ld2(a.a.b, b);
  }
  k2.forEach = function(a, b) {
    ee2(this);
    this.a.forEach(function(c, d) {
      w2(c, function(e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  k2.Y = function() {
    ee2(this);
    for (var a = this.a.W(), b = this.a.Y(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b[d]);
    return c;
  };
  k2.W = function(a) {
    ee2(this);
    var b = [];
    if (typeof a === "string")
      je2(this, a) && (b = Ya2(b, this.a.get(he2(this, a))));
    else {
      a = this.a.W();
      for (var c = 0; c < a.length; c++)
        b = Ya2(b, a[c]);
    }
    return b;
  };
  k2.set = function(a, b) {
    ee2(this);
    this.c = null;
    a = he2(this, a);
    je2(this, a) && (this.b -= this.a.get(a).length);
    this.a.set(a, [b]);
    this.b += 1;
    return this;
  };
  k2.get = function(a, b) {
    if (!a)
      return b;
    a = this.W(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  function ge2(a, b, c) {
    ie2(a, b);
    0 < c.length && (a.c = null, a.a.set(he2(a, b), Za2(c)), a.b += c.length);
  }
  k2.toString = function() {
    if (this.c)
      return this.c;
    if (!this.a)
      return "";
    for (var a = [], b = this.a.Y(), c = 0; c < b.length; c++) {
      var d = b[c], e = encodeURIComponent(String(d));
      d = this.W(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        d[f] !== "" && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return this.c = a.join("&");
  };
  function Sd(a) {
    var b = new Ud();
    b.c = a.c;
    a.a && (b.a = new Jd2(a.a), b.b = a.b);
    return b;
  }
  function he2(a, b) {
    b = String(b);
    a.f && (b = b.toLowerCase());
    return b;
  }
  function $d(a, b) {
    b && !a.f && (ee2(a), a.c = null, a.a.forEach(function(c, d) {
      var e = d.toLowerCase();
      d != e && (ie2(this, d), ge2(this, e, c));
    }, a));
    a.f = b;
  }
  function ke2(a) {
    var b = [];
    le2(new me2(), a, b);
    return b.join("");
  }
  function me2() {
  }
  function le2(a, b, c) {
    if (b == null)
      c.push("null");
    else {
      if (typeof b == "object") {
        if (Array.isArray(b)) {
          var d = b;
          b = d.length;
          c.push("[");
          for (var e = "", f = 0; f < b; f++)
            c.push(e), le2(a, d[f], c), e = ",";
          c.push("]");
          return;
        }
        if (b instanceof String || b instanceof Number || b instanceof Boolean)
          b = b.valueOf();
        else {
          c.push("{");
          e = "";
          for (d in b)
            Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], typeof f != "function" && (c.push(e), ne2(d, c), c.push(":"), le2(a, f, c), e = ","));
          c.push("}");
          return;
        }
      }
      switch (typeof b) {
        case "string":
          ne2(b, c);
          break;
        case "number":
          c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
          break;
        case "boolean":
          c.push(String(b));
          break;
        case "function":
          c.push("null");
          break;
        default:
          throw Error("Unknown type: " + typeof b);
      }
    }
  }
  var oe2 = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\v": "\\u000b" }, pe2 = /\uffff/.test("\uFFFF") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
  function ne2(a, b) {
    b.push('"', a.replace(pe2, function(c) {
      var d = oe2[c];
      d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), oe2[c] = d);
      return d;
    }), '"');
  }
  function qe2() {
    var a = K2();
    return Wb2 && !!ic2 && ic2 == 11 || /Edge\/\d+/.test(a);
  }
  function re2() {
    return l.window && l.window.location.href || self && self.location && self.location.href || "";
  }
  function se2(a, b) {
    b = b || l.window;
    var c = "about:blank";
    a && (c = Eb2(Ib2(a) || Kb2));
    b.location.href = c;
  }
  function te2(a, b) {
    var c = [], d;
    for (d in a)
      d in b ? typeof a[d] != typeof b[d] ? c.push(d) : typeof a[d] == "object" && a[d] != null && b[d] != null ? 0 < te2(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
    for (d in b)
      d in a || c.push(d);
    return c;
  }
  function ue2() {
    var a = K2();
    a = ve2(a) != we2 ? null : (a = a.match(/\sChrome\/(\d+)/i)) && a.length == 2 ? parseInt(a[1], 10) : null;
    return a && 30 > a ? false : !Wb2 || !ic2 || 9 < ic2;
  }
  function xe2(a) {
    a = (a || K2()).toLowerCase();
    return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? true : false;
  }
  function ye2(a) {
    a = a || l.window;
    try {
      a.close();
    } catch (b) {
    }
  }
  function ze2(a, b, c) {
    var d = Math.floor(1e9 * Math.random()).toString();
    b = b || 500;
    c = c || 600;
    var e = (window.screen.availHeight - c) / 2, f = (window.screen.availWidth - b) / 2;
    b = { width: b, height: c, top: 0 < e ? e : 0, left: 0 < f ? f : 0, location: true, resizable: true, statusbar: true, toolbar: false };
    c = K2().toLowerCase();
    d && (b.target = d, x2(c, "crios/") && (b.target = "_blank"));
    ve2(K2()) == Ae2 && (a = a || "http://localhost", b.scrollbars = true);
    c = a || "";
    (a = b) || (a = {});
    d = window;
    b = c instanceof C2 ? c : Ib2(typeof c.href != "undefined" ? c.href : String(c)) || Kb2;
    c = a.target || c.target;
    e = [];
    for (g in a)
      switch (g) {
        case "width":
        case "height":
        case "top":
        case "left":
          e.push(g + "=" + a[g]);
          break;
        case "target":
        case "noopener":
        case "noreferrer":
          break;
        default:
          e.push(g + "=" + (a[g] ? 1 : 0));
      }
    var g = e.join(",");
    if ((y2("iPhone") && !y2("iPod") && !y2("iPad") || y2("iPad") || y2("iPod")) && d.navigator && d.navigator.standalone && c && c != "_self")
      g = oc2(document, "A"), pb2(g, "HTMLAnchorElement"), b = b instanceof C2 ? b : Jb2(b), g.href = Eb2(b), g.setAttribute("target", c), a.noreferrer && g.setAttribute("rel", "noreferrer"), a = document.createEvent("MouseEvent"), a.initMouseEvent("click", true, true, d, 1), g.dispatchEvent(a), g = {};
    else if (a.noreferrer) {
      if (g = Pb2("", d, c, g), a = Eb2(b), g && (Yb2 && x2(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"), g.opener = null, a = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Rb2(a) + '">', a = (d = vb2()) ? d.createHTML(a) : a, a = new Lb2(a, null, Mb2), d = g.document))
        d.write(Nb2(a)), d.close();
    } else
      (g = Pb2(b, d, c, g)) && a.noopener && (g.opener = null);
    if (g)
      try {
        g.focus();
      } catch (h2) {
      }
    return g;
  }
  function Be2(a) {
    return new D2(function(b) {
      function c() {
        Fd2(2e3).then(function() {
          if (!a || a.closed)
            b();
          else
            return c();
        });
      }
      return c();
    });
  }
  var Ce2 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, De2 = /^[^@]+@[^@]+$/;
  function Ee2() {
    var a = null;
    return new D2(function(b) {
      l.document.readyState == "complete" ? b() : (a = function() {
        b();
      }, od2(window, "load", a));
    }).o(function(b) {
      xd2(window, "load", a);
      throw b;
    });
  }
  function Fe2() {
    return Ge2(void 0) ? Ee2().then(function() {
      return new D2(function(a, b) {
        var c = l.document, d = setTimeout(function() {
          b(Error("Cordova framework is not ready."));
        }, 1e3);
        c.addEventListener("deviceready", function() {
          clearTimeout(d);
          a();
        }, false);
      });
    }) : F2(Error("Cordova must run in an Android or iOS file scheme."));
  }
  function Ge2(a) {
    a = a || K2();
    return !(He2() !== "file:" && He2() !== "ionic:" || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
  }
  function Ie2() {
    var a = l.window;
    try {
      return !(!a || a == a.top);
    } catch (b) {
      return false;
    }
  }
  function Je2() {
    return typeof l.WorkerGlobalScope !== "undefined" && typeof l.importScripts === "function";
  }
  function Ke2() {
    return firebase$1$1.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase$1$1.INTERNAL.hasOwnProperty("node") ? "Node" : Je2() ? "Worker" : "Browser";
  }
  function Le2() {
    var a = Ke2();
    return a === "ReactNative" || a === "Node";
  }
  function Me2() {
    for (var a = 50, b = []; 0 < a; )
      b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
    return b.join("");
  }
  var Ae2 = "Firefox", we2 = "Chrome";
  function ve2(a) {
    var b = a.toLowerCase();
    if (x2(b, "opera/") || x2(b, "opr/") || x2(b, "opios/"))
      return "Opera";
    if (x2(b, "iemobile"))
      return "IEMobile";
    if (x2(b, "msie") || x2(b, "trident/"))
      return "IE";
    if (x2(b, "edge/"))
      return "Edge";
    if (x2(b, "firefox/"))
      return Ae2;
    if (x2(b, "silk/"))
      return "Silk";
    if (x2(b, "blackberry"))
      return "Blackberry";
    if (x2(b, "webos"))
      return "Webos";
    if (!x2(b, "safari/") || x2(b, "chrome/") || x2(b, "crios/") || x2(b, "android"))
      if (!x2(b, "chrome/") && !x2(b, "crios/") || x2(b, "edge/")) {
        if (x2(b, "android"))
          return "Android";
        if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && a.length == 2)
          return a[1];
      } else
        return we2;
    else
      return "Safari";
    return "Other";
  }
  var Ne2 = { md: "FirebaseCore-web", od: "FirebaseUI-web" };
  function Oe2(a, b) {
    b = b || [];
    var c = [], d = {}, e;
    for (e in Ne2)
      d[Ne2[e]] = true;
    for (e = 0; e < b.length; e++)
      typeof d[b[e]] !== "undefined" && (delete d[b[e]], c.push(b[e]));
    c.sort();
    b = c;
    b.length || (b = ["FirebaseCore-web"]);
    c = Ke2();
    c === "Browser" ? (d = K2(), c = ve2(d)) : c === "Worker" && (d = K2(), c = ve2(d) + "-" + c);
    return c + "/JsCore/" + a + "/" + b.join(",");
  }
  function K2() {
    return l.navigator && l.navigator.userAgent || "";
  }
  function L2(a, b) {
    a = a.split(".");
    b = b || l;
    for (var c = 0; c < a.length && typeof b == "object" && b != null; c++)
      b = b[a[c]];
    c != a.length && (b = void 0);
    return b;
  }
  function Pe2() {
    try {
      var a = l.localStorage, b = Qe2();
      if (a)
        return a.setItem(b, "1"), a.removeItem(b), qe2() ? !!l.indexedDB : true;
    } catch (c) {
      return Je2() && !!l.indexedDB;
    }
    return false;
  }
  function Re2() {
    return (Se2() || He2() === "chrome-extension:" || Ge2()) && !Le2() && Pe2() && !Je2();
  }
  function Se2() {
    return He2() === "http:" || He2() === "https:";
  }
  function He2() {
    return l.location && l.location.protocol || null;
  }
  function Te2(a) {
    a = a || K2();
    return xe2(a) || ve2(a) == Ae2 ? false : true;
  }
  function Ue2(a) {
    return typeof a === "undefined" ? null : ke2(a);
  }
  function Ve2(a) {
    var b = {}, c;
    for (c in a)
      a.hasOwnProperty(c) && a[c] !== null && a[c] !== void 0 && (b[c] = a[c]);
    return b;
  }
  function We2(a) {
    if (a !== null)
      return JSON.parse(a);
  }
  function Qe2(a) {
    return a ? a : Math.floor(1e9 * Math.random()).toString();
  }
  function Xe2(a) {
    a = a || K2();
    return ve2(a) == "Safari" || a.toLowerCase().match(/iphone|ipad|ipod/) ? false : true;
  }
  function Ye2() {
    var a = l.___jsl;
    if (a && a.H) {
      for (var b in a.H)
        if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP)
          for (var c = 0; c < a.CP.length; c++)
            a.CP[c] = null;
    }
  }
  function Ze2(a, b) {
    if (a > b)
      throw Error("Short delay should be less than long delay!");
    this.a = a;
    this.c = b;
    a = K2();
    b = Ke2();
    this.b = xe2(a) || b === "ReactNative";
  }
  Ze2.prototype.get = function() {
    var a = l.navigator;
    return (a && typeof a.onLine === "boolean" && (Se2() || He2() === "chrome-extension:" || typeof a.connection !== "undefined") ? a.onLine : 1) ? this.b ? this.c : this.a : Math.min(5e3, this.a);
  };
  function $e2() {
    var a = l.document;
    return a && typeof a.visibilityState !== "undefined" ? a.visibilityState == "visible" : true;
  }
  function af() {
    var a = l.document, b = null;
    return $e2() || !a ? E2() : new D2(function(c) {
      b = function() {
        $e2() && (a.removeEventListener("visibilitychange", b, false), c());
      };
      a.addEventListener("visibilitychange", b, false);
    }).o(function(c) {
      a.removeEventListener("visibilitychange", b, false);
      throw c;
    });
  }
  function bf(a) {
    try {
      var b = new Date(parseInt(a, 10));
      if (!isNaN(b.getTime()) && !/[^0-9]/.test(a))
        return b.toUTCString();
    } catch (c) {
    }
    return null;
  }
  function cf() {
    return !(!L2("fireauth.oauthhelper", l) && !L2("fireauth.iframe", l));
  }
  function df() {
    var a = l.navigator;
    return a && a.serviceWorker && a.serviceWorker.controller || null;
  }
  function ef() {
    var a = l.navigator;
    return a && a.serviceWorker ? E2().then(function() {
      return a.serviceWorker.ready;
    }).then(function(b) {
      return b.active || null;
    }).o(function() {
      return null;
    }) : E2(null);
  }
  var ff = {};
  function gf(a) {
    ff[a] || (ff[a] = true, typeof console !== "undefined" && typeof console.warn === "function" && console.warn(a));
  }
  var hf;
  try {
    var jf = {};
    Object.defineProperty(jf, "abcd", { configurable: true, enumerable: true, value: 1 });
    Object.defineProperty(jf, "abcd", { configurable: true, enumerable: true, value: 2 });
    hf = jf.abcd == 2;
  } catch (a) {
    hf = false;
  }
  function M2(a, b, c) {
    hf ? Object.defineProperty(a, b, { configurable: true, enumerable: true, value: c }) : a[b] = c;
  }
  function N2(a, b) {
    if (b)
      for (var c in b)
        b.hasOwnProperty(c) && M2(a, c, b[c]);
  }
  function kf(a) {
    var b = {};
    N2(b, a);
    return b;
  }
  function lf(a) {
    var b = {}, c;
    for (c in a)
      a.hasOwnProperty(c) && (b[c] = a[c]);
    return b;
  }
  function mf(a, b) {
    if (!b || !b.length)
      return true;
    if (!a)
      return false;
    for (var c = 0; c < b.length; c++) {
      var d = a[b[c]];
      if (d === void 0 || d === null || d === "")
        return false;
    }
    return true;
  }
  function nf(a) {
    var b = a;
    if (typeof a == "object" && a != null) {
      b = "length" in a ? [] : {};
      for (var c in a)
        M2(b, c, nf(a[c]));
    }
    return b;
  }
  function of(a) {
    var b = a && (a[pf] ? "phone" : null);
    if (b && a && a[qf]) {
      M2(this, "uid", a[qf]);
      M2(this, "displayName", a[rf] || null);
      var c = null;
      a[sf] && (c = new Date(a[sf]).toUTCString());
      M2(this, "enrollmentTime", c);
      M2(this, "factorId", b);
    } else
      throw new t2("internal-error", "Internal assert: invalid MultiFactorInfo object");
  }
  of.prototype.w = function() {
    return { uid: this.uid, displayName: this.displayName, factorId: this.factorId, enrollmentTime: this.enrollmentTime };
  };
  function tf(a) {
    try {
      var b = new uf(a);
    } catch (c) {
      b = null;
    }
    return b;
  }
  var rf = "displayName", sf = "enrolledAt", qf = "mfaEnrollmentId", pf = "phoneInfo";
  function uf(a) {
    of.call(this, a);
    M2(this, "phoneNumber", a[pf]);
  }
  r2(uf, of);
  uf.prototype.w = function() {
    var a = uf.ab.w.call(this);
    a.phoneNumber = this.phoneNumber;
    return a;
  };
  function vf(a) {
    var b = {}, c = a[wf], d = a[xf], e = a[yf];
    a = tf(a[zf]);
    if (!e || e != Af && e != Bf && !c || e == Bf && !d || e == Cf && !a)
      throw Error("Invalid checkActionCode response!");
    e == Bf ? (b[Df] = c || null, b[Ef] = c || null, b[Ff] = d) : (b[Df] = d || null, b[Ef] = d || null, b[Ff] = c || null);
    b[Gf] = a || null;
    M2(this, Hf, e);
    M2(this, If, nf(b));
  }
  var Cf = "REVERT_SECOND_FACTOR_ADDITION", Af = "EMAIL_SIGNIN", Bf = "VERIFY_AND_CHANGE_EMAIL", wf = "email", zf = "mfaInfo", xf = "newEmail", yf = "requestType", Ff = "email", Df = "fromEmail", Gf = "multiFactorInfo", Ef = "previousEmail", If = "data", Hf = "operation";
  function Jf(a) {
    a = J2(a);
    var b = be2(a, Kf) || null, c = be2(a, Lf) || null, d = be2(a, Mf) || null;
    d = d ? Nf[d] || null : null;
    if (!b || !c || !d)
      throw new t2("argument-error", Kf + ", " + Lf + "and " + Mf + " are required in a valid action code URL.");
    N2(this, { apiKey: b, operation: d, code: c, continueUrl: be2(a, Of) || null, languageCode: be2(a, Pf) || null, tenantId: be2(a, Qf) || null });
  }
  var Kf = "apiKey", Lf = "oobCode", Of = "continueUrl", Pf = "languageCode", Mf = "mode", Qf = "tenantId", Nf = { recoverEmail: "RECOVER_EMAIL", resetPassword: "PASSWORD_RESET", revertSecondFactorAddition: Cf, signIn: Af, verifyAndChangeEmail: Bf, verifyEmail: "VERIFY_EMAIL" };
  function Rf(a) {
    try {
      return new Jf(a);
    } catch (b) {
      return null;
    }
  }
  function Sf(a) {
    var b = a[Tf];
    if (typeof b === "undefined")
      throw new t2("missing-continue-uri");
    if (typeof b !== "string" || typeof b === "string" && !b.length)
      throw new t2("invalid-continue-uri");
    this.h = b;
    this.b = this.a = null;
    this.g = false;
    var c = a[Uf];
    if (c && typeof c === "object") {
      b = c[Vf];
      var d = c[Wf];
      c = c[Xf];
      if (typeof b === "string" && b.length) {
        this.a = b;
        if (typeof d !== "undefined" && typeof d !== "boolean")
          throw new t2("argument-error", Wf + " property must be a boolean when specified.");
        this.g = !!d;
        if (typeof c !== "undefined" && (typeof c !== "string" || typeof c === "string" && !c.length))
          throw new t2("argument-error", Xf + " property must be a non empty string when specified.");
        this.b = c || null;
      } else {
        if (typeof b !== "undefined")
          throw new t2("argument-error", Vf + " property must be a non empty string when specified.");
        if (typeof d !== "undefined" || typeof c !== "undefined")
          throw new t2("missing-android-pkg-name");
      }
    } else if (typeof c !== "undefined")
      throw new t2("argument-error", Uf + " property must be a non null object when specified.");
    this.f = null;
    if ((b = a[Yf]) && typeof b === "object")
      if (b = b[Zf], typeof b === "string" && b.length)
        this.f = b;
      else {
        if (typeof b !== "undefined")
          throw new t2("argument-error", Zf + " property must be a non empty string when specified.");
      }
    else if (typeof b !== "undefined")
      throw new t2("argument-error", Yf + " property must be a non null object when specified.");
    b = a[$f];
    if (typeof b !== "undefined" && typeof b !== "boolean")
      throw new t2("argument-error", $f + " property must be a boolean when specified.");
    this.c = !!b;
    a = a[ag];
    if (typeof a !== "undefined" && (typeof a !== "string" || typeof a === "string" && !a.length))
      throw new t2("argument-error", ag + " property must be a non empty string when specified.");
    this.i = a || null;
  }
  var Uf = "android", ag = "dynamicLinkDomain", $f = "handleCodeInApp", Yf = "iOS", Tf = "url", Wf = "installApp", Xf = "minimumVersion", Vf = "packageName", Zf = "bundleId";
  function bg(a) {
    var b = {};
    b.continueUrl = a.h;
    b.canHandleCodeInApp = a.c;
    if (b.androidPackageName = a.a)
      b.androidMinimumVersion = a.b, b.androidInstallApp = a.g;
    b.iOSBundleId = a.f;
    b.dynamicLinkDomain = a.i;
    for (var c in b)
      b[c] === null && delete b[c];
    return b;
  }
  function cg(a) {
    return Ra2(a, function(b) {
      b = b.toString(16);
      return 1 < b.length ? b : "0" + b;
    }).join("");
  }
  var dg = null;
  function eg(a) {
    var b = [];
    fg(a, function(c) {
      b.push(c);
    });
    return b;
  }
  function fg(a, b) {
    function c(m) {
      for (; d < a.length; ) {
        var p2 = a.charAt(d++), v2 = dg[p2];
        if (v2 != null)
          return v2;
        if (!/^[\s\xa0]*$/.test(p2))
          throw Error("Unknown base64 encoding at char: " + p2);
      }
      return m;
    }
    gg();
    for (var d = 0; ; ) {
      var e = c(-1), f = c(0), g = c(64), h2 = c(64);
      if (h2 === 64 && e === -1)
        break;
      b(e << 2 | f >> 4);
      g != 64 && (b(f << 4 & 240 | g >> 2), h2 != 64 && b(g << 6 & 192 | h2));
    }
  }
  function gg() {
    if (!dg) {
      dg = {};
      for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
        for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
          var f = d[e];
          dg[f] === void 0 && (dg[f] = e);
        }
    }
  }
  function hg(a) {
    var b = ig(a);
    if (!(b && b.sub && b.iss && b.aud && b.exp))
      throw Error("Invalid JWT");
    this.h = a;
    this.a = b.exp;
    this.i = b.sub;
    a = Date.now() / 1e3;
    this.g = b.iat || (a > this.a ? this.a : a);
    this.b = b.provider_id || b.firebase && b.firebase.sign_in_provider || null;
    this.f = b.firebase && b.firebase.tenant || null;
    this.c = !!b.is_anonymous || this.b == "anonymous";
  }
  hg.prototype.T = function() {
    return this.f;
  };
  hg.prototype.l = function() {
    return this.c;
  };
  hg.prototype.toString = function() {
    return this.h;
  };
  function jg(a) {
    try {
      return new hg(a);
    } catch (b) {
      return null;
    }
  }
  function ig(a) {
    if (!a)
      return null;
    a = a.split(".");
    if (a.length != 3)
      return null;
    a = a[1];
    for (var b = (4 - a.length % 4) % 4, c = 0; c < b; c++)
      a += ".";
    try {
      var d = eg(a);
      a = [];
      for (c = b = 0; b < d.length; ) {
        var e = d[b++];
        if (128 > e)
          a[c++] = String.fromCharCode(e);
        else if (191 < e && 224 > e) {
          var f = d[b++];
          a[c++] = String.fromCharCode((e & 31) << 6 | f & 63);
        } else if (239 < e && 365 > e) {
          f = d[b++];
          var g = d[b++], h2 = d[b++], m = ((e & 7) << 18 | (f & 63) << 12 | (g & 63) << 6 | h2 & 63) - 65536;
          a[c++] = String.fromCharCode(55296 + (m >> 10));
          a[c++] = String.fromCharCode(56320 + (m & 1023));
        } else
          f = d[b++], g = d[b++], a[c++] = String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | g & 63);
      }
      return JSON.parse(a.join(""));
    } catch (p2) {
    }
    return null;
  }
  var kg = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "), lg = ["client_id", "response_type", "scope", "redirect_uri", "state"], mg = { nd: { Ja: "locale", ua: 700, ta: 600, fa: "facebook.com", Xa: lg }, pd: { Ja: null, ua: 500, ta: 750, fa: "github.com", Xa: lg }, qd: { Ja: "hl", ua: 515, ta: 680, fa: "google.com", Xa: lg }, wd: { Ja: "lang", ua: 485, ta: 705, fa: "twitter.com", Xa: kg }, kd: { Ja: "locale", ua: 640, ta: 600, fa: "apple.com", Xa: [] } };
  function ng(a) {
    for (var b in mg)
      if (mg[b].fa == a)
        return mg[b];
    return null;
  }
  function og(a) {
    var b = {};
    b["facebook.com"] = pg;
    b["google.com"] = qg;
    b["github.com"] = rg;
    b["twitter.com"] = sg;
    var c = a && a[tg];
    try {
      if (c)
        return b[c] ? new b[c](a) : new ug(a);
      if (typeof a[vg] !== "undefined")
        return new wg(a);
    } catch (d) {
    }
    return null;
  }
  var vg = "idToken", tg = "providerId";
  function wg(a) {
    var b = a[tg];
    if (!b && a[vg]) {
      var c = jg(a[vg]);
      c && c.b && (b = c.b);
    }
    if (!b)
      throw Error("Invalid additional user info!");
    if (b == "anonymous" || b == "custom")
      b = null;
    c = false;
    typeof a.isNewUser !== "undefined" ? c = !!a.isNewUser : a.kind === "identitytoolkit#SignupNewUserResponse" && (c = true);
    M2(this, "providerId", b);
    M2(this, "isNewUser", c);
  }
  function ug(a) {
    wg.call(this, a);
    a = We2(a.rawUserInfo || "{}");
    M2(this, "profile", nf(a || {}));
  }
  r2(ug, wg);
  function pg(a) {
    ug.call(this, a);
    if (this.providerId != "facebook.com")
      throw Error("Invalid provider ID!");
  }
  r2(pg, ug);
  function rg(a) {
    ug.call(this, a);
    if (this.providerId != "github.com")
      throw Error("Invalid provider ID!");
    M2(this, "username", this.profile && this.profile.login || null);
  }
  r2(rg, ug);
  function qg(a) {
    ug.call(this, a);
    if (this.providerId != "google.com")
      throw Error("Invalid provider ID!");
  }
  r2(qg, ug);
  function sg(a) {
    ug.call(this, a);
    if (this.providerId != "twitter.com")
      throw Error("Invalid provider ID!");
    M2(this, "username", a.screenName || null);
  }
  r2(sg, ug);
  function xg(a) {
    var b = J2(a), c = be2(b, "link"), d = be2(J2(c), "link");
    b = be2(b, "deep_link_id");
    return be2(J2(b), "link") || b || d || c || a;
  }
  function yg(a, b) {
    if (!a && !b)
      throw new t2("internal-error", "Internal assert: no raw session string available");
    if (a && b)
      throw new t2("internal-error", "Internal assert: unable to determine the session type");
    this.a = a || null;
    this.b = b || null;
    this.type = this.a ? zg : Ag;
  }
  var zg = "enroll", Ag = "signin";
  yg.prototype.Ha = function() {
    return this.a ? E2(this.a) : E2(this.b);
  };
  yg.prototype.w = function() {
    return this.type == zg ? { multiFactorSession: { idToken: this.a } } : { multiFactorSession: { pendingCredential: this.b } };
  };
  function Bg() {
  }
  Bg.prototype.ka = function() {
  };
  Bg.prototype.b = function() {
  };
  Bg.prototype.c = function() {
  };
  Bg.prototype.w = function() {
  };
  function Cg(a, b) {
    return a.then(function(c) {
      if (c[Dg]) {
        var d = jg(c[Dg]);
        if (!d || b != d.i)
          throw new t2("user-mismatch");
        return c;
      }
      throw new t2("user-mismatch");
    }).o(function(c) {
      throw c && c.code && c.code == xa2 + "user-not-found" ? new t2("user-mismatch") : c;
    });
  }
  function Eg(a, b) {
    if (b)
      this.a = b;
    else
      throw new t2("internal-error", "failed to construct a credential");
    M2(this, "providerId", a);
    M2(this, "signInMethod", a);
  }
  Eg.prototype.ka = function(a) {
    return Fg(a, Gg(this));
  };
  Eg.prototype.b = function(a, b) {
    var c = Gg(this);
    c.idToken = b;
    return Hg(a, c);
  };
  Eg.prototype.c = function(a, b) {
    return Cg(Ig(a, Gg(this)), b);
  };
  function Gg(a) {
    return { pendingToken: a.a, requestUri: "http://localhost" };
  }
  Eg.prototype.w = function() {
    return { providerId: this.providerId, signInMethod: this.signInMethod, pendingToken: this.a };
  };
  function Jg(a) {
    if (a && a.providerId && a.signInMethod && a.providerId.indexOf("saml.") == 0 && a.pendingToken)
      try {
        return new Eg(a.providerId, a.pendingToken);
      } catch (b) {
      }
    return null;
  }
  function Kg(a, b, c) {
    this.a = null;
    if (b.idToken || b.accessToken)
      b.idToken && M2(this, "idToken", b.idToken), b.accessToken && M2(this, "accessToken", b.accessToken), b.nonce && !b.pendingToken && M2(this, "nonce", b.nonce), b.pendingToken && (this.a = b.pendingToken);
    else if (b.oauthToken && b.oauthTokenSecret)
      M2(this, "accessToken", b.oauthToken), M2(this, "secret", b.oauthTokenSecret);
    else
      throw new t2("internal-error", "failed to construct a credential");
    M2(this, "providerId", a);
    M2(this, "signInMethod", c);
  }
  Kg.prototype.ka = function(a) {
    return Fg(a, Lg(this));
  };
  Kg.prototype.b = function(a, b) {
    var c = Lg(this);
    c.idToken = b;
    return Hg(a, c);
  };
  Kg.prototype.c = function(a, b) {
    var c = Lg(this);
    return Cg(Ig(a, c), b);
  };
  function Lg(a) {
    var b = {};
    a.idToken && (b.id_token = a.idToken);
    a.accessToken && (b.access_token = a.accessToken);
    a.secret && (b.oauth_token_secret = a.secret);
    b.providerId = a.providerId;
    a.nonce && !a.a && (b.nonce = a.nonce);
    b = { postBody: fe2(b).toString(), requestUri: "http://localhost" };
    a.a && (delete b.postBody, b.pendingToken = a.a);
    return b;
  }
  Kg.prototype.w = function() {
    var a = { providerId: this.providerId, signInMethod: this.signInMethod };
    this.idToken && (a.oauthIdToken = this.idToken);
    this.accessToken && (a.oauthAccessToken = this.accessToken);
    this.secret && (a.oauthTokenSecret = this.secret);
    this.nonce && (a.nonce = this.nonce);
    this.a && (a.pendingToken = this.a);
    return a;
  };
  function Mg(a) {
    if (a && a.providerId && a.signInMethod) {
      var b = { idToken: a.oauthIdToken, accessToken: a.oauthTokenSecret ? null : a.oauthAccessToken, oauthTokenSecret: a.oauthTokenSecret, oauthToken: a.oauthTokenSecret && a.oauthAccessToken, nonce: a.nonce, pendingToken: a.pendingToken };
      try {
        return new Kg(a.providerId, b, a.signInMethod);
      } catch (c) {
      }
    }
    return null;
  }
  function Ng(a, b) {
    this.Qc = b || [];
    N2(this, { providerId: a, isOAuthProvider: true });
    this.Ib = {};
    this.pb = (ng(a) || {}).Ja || null;
    this.ob = null;
  }
  Ng.prototype.Ka = function(a) {
    this.Ib = nb2(a);
    return this;
  };
  function Og(a) {
    if (typeof a !== "string" || a.indexOf("saml.") != 0)
      throw new t2("argument-error", 'SAML provider IDs must be prefixed with "saml."');
    Ng.call(this, a, []);
  }
  r2(Og, Ng);
  function Pg(a) {
    Ng.call(this, a, lg);
    this.a = [];
  }
  r2(Pg, Ng);
  Pg.prototype.Ca = function(a) {
    Va2(this.a, a) || this.a.push(a);
    return this;
  };
  Pg.prototype.Qb = function() {
    return Za2(this.a);
  };
  Pg.prototype.credential = function(a, b) {
    var c;
    n2(a) ? c = { idToken: a.idToken || null, accessToken: a.accessToken || null, nonce: a.rawNonce || null } : c = { idToken: a || null, accessToken: b || null };
    if (!c.idToken && !c.accessToken)
      throw new t2("argument-error", "credential failed: must provide the ID token and/or the access token.");
    return new Kg(this.providerId, c, this.providerId);
  };
  function Qg() {
    Pg.call(this, "facebook.com");
  }
  r2(Qg, Pg);
  M2(Qg, "PROVIDER_ID", "facebook.com");
  M2(Qg, "FACEBOOK_SIGN_IN_METHOD", "facebook.com");
  function Rg(a) {
    if (!a)
      throw new t2("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
    var b = a;
    n2(a) && (b = a.accessToken);
    return new Qg().credential({ accessToken: b });
  }
  function Sg() {
    Pg.call(this, "github.com");
  }
  r2(Sg, Pg);
  M2(Sg, "PROVIDER_ID", "github.com");
  M2(Sg, "GITHUB_SIGN_IN_METHOD", "github.com");
  function Tg(a) {
    if (!a)
      throw new t2("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
    var b = a;
    n2(a) && (b = a.accessToken);
    return new Sg().credential({ accessToken: b });
  }
  function Ug() {
    Pg.call(this, "google.com");
    this.Ca("profile");
  }
  r2(Ug, Pg);
  M2(Ug, "PROVIDER_ID", "google.com");
  M2(Ug, "GOOGLE_SIGN_IN_METHOD", "google.com");
  function Vg(a, b) {
    var c = a;
    n2(a) && (c = a.idToken, b = a.accessToken);
    return new Ug().credential({ idToken: c, accessToken: b });
  }
  function Wg() {
    Ng.call(this, "twitter.com", kg);
  }
  r2(Wg, Ng);
  M2(Wg, "PROVIDER_ID", "twitter.com");
  M2(Wg, "TWITTER_SIGN_IN_METHOD", "twitter.com");
  function Xg(a, b) {
    var c = a;
    n2(c) || (c = { oauthToken: a, oauthTokenSecret: b });
    if (!c.oauthToken || !c.oauthTokenSecret)
      throw new t2("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
    return new Kg("twitter.com", c, "twitter.com");
  }
  function Yg(a, b, c) {
    this.a = a;
    this.f = b;
    M2(this, "providerId", "password");
    M2(this, "signInMethod", c === Zg.EMAIL_LINK_SIGN_IN_METHOD ? Zg.EMAIL_LINK_SIGN_IN_METHOD : Zg.EMAIL_PASSWORD_SIGN_IN_METHOD);
  }
  Yg.prototype.ka = function(a) {
    return this.signInMethod == Zg.EMAIL_LINK_SIGN_IN_METHOD ? O2(a, $g, { email: this.a, oobCode: this.f }) : O2(a, ah, { email: this.a, password: this.f });
  };
  Yg.prototype.b = function(a, b) {
    return this.signInMethod == Zg.EMAIL_LINK_SIGN_IN_METHOD ? O2(a, bh, { idToken: b, email: this.a, oobCode: this.f }) : O2(a, ch, { idToken: b, email: this.a, password: this.f });
  };
  Yg.prototype.c = function(a, b) {
    return Cg(this.ka(a), b);
  };
  Yg.prototype.w = function() {
    return { email: this.a, password: this.f, signInMethod: this.signInMethod };
  };
  function dh(a) {
    return a && a.email && a.password ? new Yg(a.email, a.password, a.signInMethod) : null;
  }
  function Zg() {
    N2(this, { providerId: "password", isOAuthProvider: false });
  }
  function eh(a, b) {
    b = fh(b);
    if (!b)
      throw new t2("argument-error", "Invalid email link!");
    return new Yg(a, b.code, Zg.EMAIL_LINK_SIGN_IN_METHOD);
  }
  function fh(a) {
    a = xg(a);
    return (a = Rf(a)) && a.operation === Af ? a : null;
  }
  N2(Zg, { PROVIDER_ID: "password" });
  N2(Zg, { EMAIL_LINK_SIGN_IN_METHOD: "emailLink" });
  N2(Zg, { EMAIL_PASSWORD_SIGN_IN_METHOD: "password" });
  function gh(a) {
    if (!(a.eb && a.cb || a.La && a.ea))
      throw new t2("internal-error");
    this.a = a;
    M2(this, "providerId", "phone");
    this.fa = "phone";
    M2(this, "signInMethod", "phone");
  }
  gh.prototype.ka = function(a) {
    return a.fb(hh(this));
  };
  gh.prototype.b = function(a, b) {
    var c = hh(this);
    c.idToken = b;
    return O2(a, ih, c);
  };
  gh.prototype.c = function(a, b) {
    var c = hh(this);
    c.operation = "REAUTH";
    a = O2(a, jh, c);
    return Cg(a, b);
  };
  gh.prototype.w = function() {
    var a = { providerId: "phone" };
    this.a.eb && (a.verificationId = this.a.eb);
    this.a.cb && (a.verificationCode = this.a.cb);
    this.a.La && (a.temporaryProof = this.a.La);
    this.a.ea && (a.phoneNumber = this.a.ea);
    return a;
  };
  function kh(a) {
    if (a && a.providerId === "phone" && (a.verificationId && a.verificationCode || a.temporaryProof && a.phoneNumber)) {
      var b = {};
      w2(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function(c) {
        a[c] && (b[c] = a[c]);
      });
      return new gh(b);
    }
    return null;
  }
  function hh(a) {
    return a.a.La && a.a.ea ? { temporaryProof: a.a.La, phoneNumber: a.a.ea } : { sessionInfo: a.a.eb, code: a.a.cb };
  }
  function lh(a) {
    try {
      this.a = a || firebase$1$1.auth();
    } catch (b) {
      throw new t2("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
    }
    N2(this, { providerId: "phone", isOAuthProvider: false });
  }
  lh.prototype.fb = function(a, b) {
    var c = this.a.a;
    return E2(b.verify()).then(function(d) {
      if (typeof d !== "string")
        throw new t2("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
      switch (b.type) {
        case "recaptcha":
          var e = n2(a) ? a.session : null, f = n2(a) ? a.phoneNumber : a, g;
          e && e.type == zg ? g = e.Ha().then(function(h2) {
            return mh(c, { idToken: h2, phoneEnrollmentInfo: { phoneNumber: f, recaptchaToken: d } });
          }) : e && e.type == Ag ? g = e.Ha().then(function(h2) {
            return nh(c, { mfaPendingCredential: h2, mfaEnrollmentId: a.multiFactorHint && a.multiFactorHint.uid || a.multiFactorUid, phoneSignInInfo: { recaptchaToken: d } });
          }) : g = oh(c, { phoneNumber: f, recaptchaToken: d });
          return g.then(function(h2) {
            typeof b.reset === "function" && b.reset();
            return h2;
          }, function(h2) {
            typeof b.reset === "function" && b.reset();
            throw h2;
          });
        default:
          throw new t2("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');
      }
    });
  };
  function ph(a, b) {
    if (!a)
      throw new t2("missing-verification-id");
    if (!b)
      throw new t2("missing-verification-code");
    return new gh({ eb: a, cb: b });
  }
  N2(lh, { PROVIDER_ID: "phone" });
  N2(lh, { PHONE_SIGN_IN_METHOD: "phone" });
  function qh(a) {
    if (a.temporaryProof && a.phoneNumber)
      return new gh({ La: a.temporaryProof, ea: a.phoneNumber });
    var b = a && a.providerId;
    if (!b || b === "password")
      return null;
    var c = a && a.oauthAccessToken, d = a && a.oauthTokenSecret, e = a && a.nonce, f = a && a.oauthIdToken, g = a && a.pendingToken;
    try {
      switch (b) {
        case "google.com":
          return Vg(f, c);
        case "facebook.com":
          return Rg(c);
        case "github.com":
          return Tg(c);
        case "twitter.com":
          return Xg(c, d);
        default:
          return c || d || f || g ? g ? b.indexOf("saml.") == 0 ? new Eg(b, g) : new Kg(b, {
            pendingToken: g,
            idToken: a.oauthIdToken,
            accessToken: a.oauthAccessToken
          }, b) : new Pg(b).credential({ idToken: f, accessToken: c, rawNonce: e }) : null;
      }
    } catch (h2) {
      return null;
    }
  }
  function rh(a) {
    if (!a.isOAuthProvider)
      throw new t2("invalid-oauth-provider");
  }
  function sh(a, b, c, d, e, f, g) {
    this.c = a;
    this.b = b || null;
    this.g = c || null;
    this.f = d || null;
    this.i = f || null;
    this.h = g || null;
    this.a = e || null;
    if (this.g || this.a) {
      if (this.g && this.a)
        throw new t2("invalid-auth-event");
      if (this.g && !this.f)
        throw new t2("invalid-auth-event");
    } else
      throw new t2("invalid-auth-event");
  }
  sh.prototype.getUid = function() {
    var a = [];
    a.push(this.c);
    this.b && a.push(this.b);
    this.f && a.push(this.f);
    this.h && a.push(this.h);
    return a.join("-");
  };
  sh.prototype.T = function() {
    return this.h;
  };
  sh.prototype.w = function() {
    return { type: this.c, eventId: this.b, urlResponse: this.g, sessionId: this.f, postBody: this.i, tenantId: this.h, error: this.a && this.a.w() };
  };
  function th(a) {
    a = a || {};
    return a.type ? new sh(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && Aa2(a.error), a.postBody, a.tenantId) : null;
  }
  function uh() {
    this.b = null;
    this.a = [];
  }
  var vh = null;
  function wh(a) {
    var b = vh;
    b.a.push(a);
    b.b || (b.b = function(c) {
      for (var d = 0; d < b.a.length; d++)
        b.a[d](c);
    }, a = L2("universalLinks.subscribe", l), typeof a === "function" && a(null, b.b));
  }
  function xh(a) {
    var b = "unauthorized-domain", c = void 0, d = J2(a);
    a = d.a;
    d = d.c;
    d == "chrome-extension" ? c = Qb2("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : d == "http" || d == "https" ? c = Qb2("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";
    t2.call(this, b, c);
  }
  r2(xh, t2);
  function yh(a, b, c) {
    t2.call(this, a, c);
    a = b || {};
    a.Jb && M2(this, "email", a.Jb);
    a.ea && M2(this, "phoneNumber", a.ea);
    a.credential && M2(this, "credential", a.credential);
    a.Zb && M2(this, "tenantId", a.Zb);
  }
  r2(yh, t2);
  yh.prototype.w = function() {
    var a = { code: this.code, message: this.message };
    this.email && (a.email = this.email);
    this.phoneNumber && (a.phoneNumber = this.phoneNumber);
    this.tenantId && (a.tenantId = this.tenantId);
    var b = this.credential && this.credential.w();
    b && z2(a, b);
    return a;
  };
  yh.prototype.toJSON = function() {
    return this.w();
  };
  function zh(a) {
    if (a.code) {
      var b = a.code || "";
      b.indexOf(xa2) == 0 && (b = b.substring(xa2.length));
      var c = { credential: qh(a), Zb: a.tenantId };
      if (a.email)
        c.Jb = a.email;
      else if (a.phoneNumber)
        c.ea = a.phoneNumber;
      else if (!c.credential)
        return new t2(b, a.message || void 0);
      return new yh(b, c, a.message);
    }
    return null;
  }
  function Ah() {
  }
  Ah.prototype.c = null;
  function Bh(a) {
    return a.c || (a.c = a.b());
  }
  var Ch;
  function Dh() {
  }
  r2(Dh, Ah);
  Dh.prototype.a = function() {
    var a = Eh(this);
    return a ? new ActiveXObject(a) : new XMLHttpRequest();
  };
  Dh.prototype.b = function() {
    var a = {};
    Eh(this) && (a[0] = true, a[1] = true);
    return a;
  };
  function Eh(a) {
    if (!a.f && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
      for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
        var d = b[c];
        try {
          return new ActiveXObject(d), a.f = d;
        } catch (e) {
        }
      }
      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.f;
  }
  Ch = new Dh();
  function Fh() {
  }
  r2(Fh, Ah);
  Fh.prototype.a = function() {
    var a = new XMLHttpRequest();
    if ("withCredentials" in a)
      return a;
    if (typeof XDomainRequest != "undefined")
      return new Gh();
    throw Error("Unsupported browser");
  };
  Fh.prototype.b = function() {
    return {};
  };
  function Gh() {
    this.a = new XDomainRequest();
    this.readyState = 0;
    this.onreadystatechange = null;
    this.responseType = this.responseText = this.response = "";
    this.status = -1;
    this.statusText = "";
    this.a.onload = q2(this.qc, this);
    this.a.onerror = q2(this.Sb, this);
    this.a.onprogress = q2(this.rc, this);
    this.a.ontimeout = q2(this.vc, this);
  }
  k2 = Gh.prototype;
  k2.open = function(a, b, c) {
    if (c != null && !c)
      throw Error("Only async requests are supported.");
    this.a.open(a, b);
  };
  k2.send = function(a) {
    if (a)
      if (typeof a == "string")
        this.a.send(a);
      else
        throw Error("Only string data is supported");
    else
      this.a.send();
  };
  k2.abort = function() {
    this.a.abort();
  };
  k2.setRequestHeader = function() {
  };
  k2.getResponseHeader = function(a) {
    return a.toLowerCase() == "content-type" ? this.a.contentType : "";
  };
  k2.qc = function() {
    this.status = 200;
    this.response = this.responseText = this.a.responseText;
    Hh(this, 4);
  };
  k2.Sb = function() {
    this.status = 500;
    this.response = this.responseText = "";
    Hh(this, 4);
  };
  k2.vc = function() {
    this.Sb();
  };
  k2.rc = function() {
    this.status = 200;
    Hh(this, 1);
  };
  function Hh(a, b) {
    a.readyState = b;
    if (a.onreadystatechange)
      a.onreadystatechange();
  }
  k2.getAllResponseHeaders = function() {
    return "content-type: " + this.a.contentType;
  };
  function Ih(a, b, c) {
    this.reset(a, b, c, void 0, void 0);
  }
  Ih.prototype.a = null;
  Ih.prototype.reset = function(a, b, c, d, e) {
    delete this.a;
  };
  function Kh(a) {
    this.f = a;
    this.b = this.c = this.a = null;
  }
  function Lh(a, b) {
    this.name = a;
    this.value = b;
  }
  Lh.prototype.toString = function() {
    return this.name;
  };
  var Mh = new Lh("SEVERE", 1e3), Nh = new Lh("WARNING", 900), Oh = new Lh("CONFIG", 700), Ph = new Lh("FINE", 500);
  function Qh(a) {
    if (a.c)
      return a.c;
    if (a.a)
      return Qh(a.a);
    Ga2("Root logger has no level set.");
    return null;
  }
  Kh.prototype.log = function(a, b, c) {
    if (a.value >= Qh(this).value)
      for (oa2(b) && (b = b()), a = new Ih(a, String(b), this.f), c && (a.a = c), c = this; c; )
        c = c.a;
  };
  var Rh = {}, Sh = null;
  function Th(a) {
    Sh || (Sh = new Kh(""), Rh[""] = Sh, Sh.c = Oh);
    var b;
    if (!(b = Rh[a])) {
      b = new Kh(a);
      var c = a.lastIndexOf("."), d = a.substr(c + 1);
      c = Th(a.substr(0, c));
      c.b || (c.b = {});
      c.b[d] = b;
      b.a = c;
      Rh[a] = b;
    }
    return b;
  }
  function Uh(a, b) {
    a && a.log(Ph, b, void 0);
  }
  function Vh(a) {
    this.f = a;
  }
  r2(Vh, Ah);
  Vh.prototype.a = function() {
    return new Wh(this.f);
  };
  Vh.prototype.b = function(a) {
    return function() {
      return a;
    };
  }({});
  function Wh(a) {
    H2.call(this);
    this.u = a;
    this.h = void 0;
    this.readyState = Xh;
    this.status = 0;
    this.responseType = this.responseText = this.response = this.statusText = "";
    this.onreadystatechange = null;
    this.l = new Headers();
    this.b = null;
    this.s = "GET";
    this.f = "";
    this.a = false;
    this.i = Th("goog.net.FetchXmlHttp");
    this.m = this.c = this.g = null;
  }
  r2(Wh, H2);
  var Xh = 0;
  k2 = Wh.prototype;
  k2.open = function(a, b) {
    if (this.readyState != Xh)
      throw this.abort(), Error("Error reopening a connection");
    this.s = a;
    this.f = b;
    this.readyState = 1;
    Yh(this);
  };
  k2.send = function(a) {
    if (this.readyState != 1)
      throw this.abort(), Error("need to call open() first. ");
    this.a = true;
    var b = { headers: this.l, method: this.s, credentials: this.h, cache: void 0 };
    a && (b.body = a);
    this.u.fetch(new Request(this.f, b)).then(this.uc.bind(this), this.Ua.bind(this));
  };
  k2.abort = function() {
    this.response = this.responseText = "";
    this.l = new Headers();
    this.status = 0;
    this.c && this.c.cancel("Request was aborted.");
    1 <= this.readyState && this.a && this.readyState != 4 && (this.a = false, Zh(this));
    this.readyState = Xh;
  };
  k2.uc = function(a) {
    this.a && (this.g = a, this.b || (this.status = this.g.status, this.statusText = this.g.statusText, this.b = a.headers, this.readyState = 2, Yh(this)), this.a && (this.readyState = 3, Yh(this), this.a && (this.responseType === "arraybuffer" ? a.arrayBuffer().then(this.sc.bind(this), this.Ua.bind(this)) : typeof l.ReadableStream !== "undefined" && "body" in a ? (this.response = this.responseText = "", this.c = a.body.getReader(), this.m = new TextDecoder(), $h(this)) : a.text().then(this.tc.bind(this), this.Ua.bind(this)))));
  };
  function $h(a) {
    a.c.read().then(a.pc.bind(a)).catch(a.Ua.bind(a));
  }
  k2.pc = function(a) {
    if (this.a) {
      var b = this.m.decode(a.value ? a.value : new Uint8Array(0), { stream: !a.done });
      b && (this.response = this.responseText += b);
      a.done ? Zh(this) : Yh(this);
      this.readyState == 3 && $h(this);
    }
  };
  k2.tc = function(a) {
    this.a && (this.response = this.responseText = a, Zh(this));
  };
  k2.sc = function(a) {
    this.a && (this.response = a, Zh(this));
  };
  k2.Ua = function(a) {
    var b = this.i;
    b && b.log(Nh, "Failed to fetch url " + this.f, a instanceof Error ? a : Error(a));
    this.a && Zh(this);
  };
  function Zh(a) {
    a.readyState = 4;
    a.g = null;
    a.c = null;
    a.m = null;
    Yh(a);
  }
  k2.setRequestHeader = function(a, b) {
    this.l.append(a, b);
  };
  k2.getResponseHeader = function(a) {
    return this.b ? this.b.get(a.toLowerCase()) || "" : ((a = this.i) && a.log(Nh, "Attempting to get response header but no headers have been received for url: " + this.f, void 0), "");
  };
  k2.getAllResponseHeaders = function() {
    if (!this.b) {
      var a = this.i;
      a && a.log(Nh, "Attempting to get all response headers but no headers have been received for url: " + this.f, void 0);
      return "";
    }
    a = [];
    for (var b = this.b.entries(), c = b.next(); !c.done; )
      c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();
    return a.join("\r\n");
  };
  function Yh(a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  }
  Object.defineProperty(Wh.prototype, "withCredentials", { get: function() {
    return this.h === "include";
  }, set: function(a) {
    this.h = a ? "include" : "same-origin";
  } });
  function ai2(a) {
    H2.call(this);
    this.headers = new Jd2();
    this.D = a || null;
    this.c = false;
    this.C = this.a = null;
    this.h = this.R = this.l = "";
    this.f = this.O = this.i = this.J = false;
    this.g = 0;
    this.s = null;
    this.m = bi2;
    this.u = this.S = false;
  }
  r2(ai2, H2);
  var bi2 = "";
  ai2.prototype.b = Th("goog.net.XhrIo");
  var ci2 = /^https?$/i, di2 = ["POST", "PUT"];
  function ei2(a, b, c, d, e) {
    if (a.a)
      throw Error("[goog.net.XhrIo] Object is active with another request=" + a.l + "; newUri=" + b);
    c = c ? c.toUpperCase() : "GET";
    a.l = b;
    a.h = "";
    a.R = c;
    a.J = false;
    a.c = true;
    a.a = a.D ? a.D.a() : Ch.a();
    a.C = a.D ? Bh(a.D) : Bh(Ch);
    a.a.onreadystatechange = q2(a.Vb, a);
    try {
      Uh(a.b, fi2(a, "Opening Xhr")), a.O = true, a.a.open(c, String(b), true), a.O = false;
    } catch (g) {
      Uh(a.b, fi2(a, "Error opening Xhr: " + g.message));
      gi2(a, g);
      return;
    }
    b = d || "";
    var f = new Jd2(a.headers);
    e && Id2(e, function(g, h2) {
      f.set(h2, g);
    });
    e = Ta2(f.Y());
    d = l.FormData && b instanceof l.FormData;
    !Va2(di2, c) || e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    f.forEach(function(g, h2) {
      this.a.setRequestHeader(h2, g);
    }, a);
    a.m && (a.a.responseType = a.m);
    "withCredentials" in a.a && a.a.withCredentials !== a.S && (a.a.withCredentials = a.S);
    try {
      hi2(a), 0 < a.g && (a.u = ii2(a.a), Uh(a.b, fi2(a, "Will abort after " + a.g + "ms if incomplete, xhr2 " + a.u)), a.u ? (a.a.timeout = a.g, a.a.ontimeout = q2(a.Ma, a)) : a.s = Ed2(a.Ma, a.g, a)), Uh(a.b, fi2(a, "Sending request")), a.i = true, a.a.send(b), a.i = false;
    } catch (g) {
      Uh(a.b, fi2(a, "Send error: " + g.message)), gi2(a, g);
    }
  }
  function ii2(a) {
    return Wb2 && fc2(9) && typeof a.timeout === "number" && a.ontimeout !== void 0;
  }
  function Ua2(a) {
    return a.toLowerCase() == "content-type";
  }
  k2 = ai2.prototype;
  k2.Ma = function() {
    typeof ha2 != "undefined" && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", Uh(this.b, fi2(this, this.h)), this.dispatchEvent("timeout"), this.abort(8));
  };
  function gi2(a, b) {
    a.c = false;
    a.a && (a.f = true, a.a.abort(), a.f = false);
    a.h = b;
    ji2(a);
    ki2(a);
  }
  function ji2(a) {
    a.J || (a.J = true, a.dispatchEvent("complete"), a.dispatchEvent("error"));
  }
  k2.abort = function() {
    this.a && this.c && (Uh(this.b, fi2(this, "Aborting")), this.c = false, this.f = true, this.a.abort(), this.f = false, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ki2(this));
  };
  k2.Da = function() {
    this.a && (this.c && (this.c = false, this.f = true, this.a.abort(), this.f = false), ki2(this, true));
    ai2.ab.Da.call(this);
  };
  k2.Vb = function() {
    this.xa || (this.O || this.i || this.f ? li2(this) : this.Jc());
  };
  k2.Jc = function() {
    li2(this);
  };
  function li2(a) {
    if (a.c && typeof ha2 != "undefined") {
      if (a.C[1] && mi2(a) == 4 && ni2(a) == 2)
        Uh(a.b, fi2(a, "Local request error detected and ignored"));
      else if (a.i && mi2(a) == 4)
        Ed2(a.Vb, 0, a);
      else if (a.dispatchEvent("readystatechange"), mi2(a) == 4) {
        Uh(a.b, fi2(a, "Request complete"));
        a.c = false;
        try {
          var b = ni2(a);
          a:
            switch (b) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var c = true;
                break a;
              default:
                c = false;
            }
          var d;
          if (!(d = c)) {
            var e;
            if (e = b === 0) {
              var f = String(a.l).match(Md2)[1] || null;
              if (!f && l.self && l.self.location) {
                var g = l.self.location.protocol;
                f = g.substr(0, g.length - 1);
              }
              e = !ci2.test(f ? f.toLowerCase() : "");
            }
            d = e;
          }
          if (d)
            a.dispatchEvent("complete"), a.dispatchEvent("success");
          else {
            try {
              var h2 = 2 < mi2(a) ? a.a.statusText : "";
            } catch (m) {
              Uh(a.b, "Can not get status: " + m.message), h2 = "";
            }
            a.h = h2 + " [" + ni2(a) + "]";
            ji2(a);
          }
        } finally {
          ki2(a);
        }
      }
    }
  }
  function ki2(a, b) {
    if (a.a) {
      hi2(a);
      var c = a.a, d = a.C[0] ? la2 : null;
      a.a = null;
      a.C = null;
      b || a.dispatchEvent("ready");
      try {
        c.onreadystatechange = d;
      } catch (e) {
        (a = a.b) && a.log(Mh, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
      }
    }
  }
  function hi2(a) {
    a.a && a.u && (a.a.ontimeout = null);
    a.s && (l.clearTimeout(a.s), a.s = null);
  }
  function mi2(a) {
    return a.a ? a.a.readyState : 0;
  }
  function ni2(a) {
    try {
      return 2 < mi2(a) ? a.a.status : -1;
    } catch (b) {
      return -1;
    }
  }
  function oi2(a) {
    try {
      return a.a ? a.a.responseText : "";
    } catch (b) {
      return Uh(a.b, "Can not get responseText: " + b.message), "";
    }
  }
  k2.getResponse = function() {
    try {
      if (!this.a)
        return null;
      if ("response" in this.a)
        return this.a.response;
      switch (this.m) {
        case bi2:
        case "text":
          return this.a.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in this.a)
            return this.a.mozResponseArrayBuffer;
      }
      var a = this.b;
      a && a.log(Mh, "Response type " + this.m + " is not supported on this browser", void 0);
      return null;
    } catch (b) {
      return Uh(this.b, "Can not get response: " + b.message), null;
    }
  };
  function fi2(a, b) {
    return b + " [" + a.R + " " + a.l + " " + ni2(a) + "]";
  }
  function pi2(a) {
    var b = qi2;
    this.g = [];
    this.u = b;
    this.s = a || null;
    this.f = this.a = false;
    this.c = void 0;
    this.v = this.C = this.i = false;
    this.h = 0;
    this.b = null;
    this.l = 0;
  }
  pi2.prototype.cancel = function(a) {
    if (this.a)
      this.c instanceof pi2 && this.c.cancel();
    else {
      if (this.b) {
        var b = this.b;
        delete this.b;
        a ? b.cancel(a) : (b.l--, 0 >= b.l && b.cancel());
      }
      this.u ? this.u.call(this.s, this) : this.v = true;
      this.a || (a = new ri2(this), si2(this), ti2(this, false, a));
    }
  };
  pi2.prototype.m = function(a, b) {
    this.i = false;
    ti2(this, a, b);
  };
  function ti2(a, b, c) {
    a.a = true;
    a.c = c;
    a.f = !b;
    ui2(a);
  }
  function si2(a) {
    if (a.a) {
      if (!a.v)
        throw new vi2(a);
      a.v = false;
    }
  }
  function wi2(a, b) {
    xi2(a, null, b, void 0);
  }
  function xi2(a, b, c, d) {
    a.g.push([b, c, d]);
    a.a && ui2(a);
  }
  pi2.prototype.then = function(a, b, c) {
    var d, e, f = new D2(function(g, h2) {
      d = g;
      e = h2;
    });
    xi2(this, d, function(g) {
      g instanceof ri2 ? f.cancel() : e(g);
    });
    return f.then(a, b, c);
  };
  pi2.prototype.$goog_Thenable = true;
  function yi2(a) {
    return Sa2(a.g, function(b) {
      return oa2(b[1]);
    });
  }
  function ui2(a) {
    if (a.h && a.a && yi2(a)) {
      var b = a.h, c = zi2[b];
      c && (l.clearTimeout(c.a), delete zi2[b]);
      a.h = 0;
    }
    a.b && (a.b.l--, delete a.b);
    b = a.c;
    for (var d = c = false; a.g.length && !a.i; ) {
      var e = a.g.shift(), f = e[0], g = e[1];
      e = e[2];
      if (f = a.f ? g : f)
        try {
          var h2 = f.call(e || a.s, b);
          h2 !== void 0 && (a.f = a.f && (h2 == b || h2 instanceof Error), a.c = b = h2);
          if (Ea2(b) || typeof l.Promise === "function" && b instanceof l.Promise)
            d = true, a.i = true;
        } catch (m) {
          b = m, a.f = true, yi2(a) || (c = true);
        }
    }
    a.c = b;
    d && (h2 = q2(a.m, a, true), d = q2(a.m, a, false), b instanceof pi2 ? (xi2(b, h2, d), b.C = true) : b.then(h2, d));
    c && (b = new Ai2(b), zi2[b.a] = b, a.h = b.a);
  }
  function vi2() {
    u.call(this);
  }
  r2(vi2, u);
  vi2.prototype.message = "Deferred has already fired";
  vi2.prototype.name = "AlreadyCalledError";
  function ri2() {
    u.call(this);
  }
  r2(ri2, u);
  ri2.prototype.message = "Deferred was canceled";
  ri2.prototype.name = "CanceledError";
  function Ai2(a) {
    this.a = l.setTimeout(q2(this.c, this), 0);
    this.b = a;
  }
  Ai2.prototype.c = function() {
    delete zi2[this.a];
    throw this.b;
  };
  var zi2 = {};
  function Bi2(a) {
    var c = document, d = yb2(a).toString(), e = oc2(document, "SCRIPT"), f = { Wb: e, Ma: void 0 }, g = new pi2(f), h2 = null, m = 5e3;
    h2 = window.setTimeout(function() {
      Ci2(e, true);
      var p2 = new Di2(Ei2, "Timeout reached for loading script " + d);
      si2(g);
      ti2(g, false, p2);
    }, m), f.Ma = h2;
    e.onload = e.onreadystatechange = function() {
      e.readyState && e.readyState != "loaded" && e.readyState != "complete" || (Ci2(e, false, h2), si2(g), ti2(g, true, null));
    };
    e.onerror = function() {
      Ci2(e, true, h2);
      var p2 = new Di2(Fi2, "Error while loading script " + d);
      si2(g);
      ti2(g, false, p2);
    };
    f = {};
    z2(f, { type: "text/javascript", charset: "UTF-8" });
    lc2(e, f);
    Ob2(e, a);
    Gi2(c).appendChild(e);
    return g;
  }
  function Gi2(a) {
    var b;
    return (b = (a || document).getElementsByTagName("HEAD")) && b.length != 0 ? b[0] : a.documentElement;
  }
  function qi2() {
    if (this && this.Wb) {
      var a = this.Wb;
      a && a.tagName == "SCRIPT" && Ci2(a, true, this.Ma);
    }
  }
  function Ci2(a, b, c) {
    c != null && l.clearTimeout(c);
    a.onload = la2;
    a.onerror = la2;
    a.onreadystatechange = la2;
    b && window.setTimeout(function() {
      a && a.parentNode && a.parentNode.removeChild(a);
    }, 0);
  }
  var Fi2 = 0, Ei2 = 1;
  function Di2(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    u.call(this, c);
    this.code = a;
  }
  r2(Di2, u);
  function Hi2(a) {
    this.f = a;
  }
  r2(Hi2, Ah);
  Hi2.prototype.a = function() {
    return new this.f();
  };
  Hi2.prototype.b = function() {
    return {};
  };
  function Ii2(a, b, c) {
    this.c = a;
    a = b || {};
    this.l = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
    this.m = a.secureTokenTimeout || Ji2;
    this.g = nb2(a.secureTokenHeaders || Ki2);
    this.h = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
    this.i = a.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/";
    this.v = a.firebaseTimeout || Li2;
    this.a = nb2(a.firebaseHeaders || Mi2);
    c && (this.a["X-Client-Version"] = c, this.g["X-Client-Version"] = c);
    c = Ke2() == "Node";
    c = l.XMLHttpRequest || c && firebase$1$1.INTERNAL.node && firebase$1$1.INTERNAL.node.XMLHttpRequest;
    if (!c && !Je2())
      throw new t2("internal-error", "The XMLHttpRequest compatibility library was not found.");
    this.f = void 0;
    Je2() ? this.f = new Vh(self) : Le2() ? this.f = new Hi2(c) : this.f = new Fh();
    this.b = null;
  }
  var Ni2, Dg = "idToken", Ji2 = new Ze2(3e4, 6e4), Ki2 = { "Content-Type": "application/x-www-form-urlencoded" }, Li2 = new Ze2(3e4, 6e4), Mi2 = { "Content-Type": "application/json" };
  function Oi2(a, b) {
    b ? a.a["X-Firebase-Locale"] = b : delete a.a["X-Firebase-Locale"];
  }
  function Pi2(a, b) {
    b && (a.l = Qi2("https://securetoken.googleapis.com/v1/token", b), a.h = Qi2("https://www.googleapis.com/identitytoolkit/v3/relyingparty/", b), a.i = Qi2("https://identitytoolkit.googleapis.com/v2/", b));
  }
  function Qi2(a, b) {
    a = J2(a);
    b = J2(b.url);
    a.f = a.a + a.f;
    Pd2(a, b.c);
    a.a = b.a;
    Qd2(a, b.g);
    return a.toString();
  }
  function Ri2(a, b) {
    b ? (a.a["X-Client-Version"] = b, a.g["X-Client-Version"] = b) : (delete a.a["X-Client-Version"], delete a.g["X-Client-Version"]);
  }
  Ii2.prototype.T = function() {
    return this.b;
  };
  function Si2(a, b, c, d, e, f, g) {
    ue2() || Je2() ? a = q2(a.u, a) : (Ni2 || (Ni2 = new D2(function(h2, m) {
      Ti2(h2, m);
    })), a = q2(a.s, a));
    a(b, c, d, e, f, g);
  }
  Ii2.prototype.u = function(a, b, c, d, e, f) {
    if (Je2() && (typeof l.fetch === "undefined" || typeof l.Headers === "undefined" || typeof l.Request === "undefined"))
      throw new t2("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
    var g = new ai2(this.f);
    if (f) {
      g.g = Math.max(0, f);
      var h2 = setTimeout(function() {
        g.dispatchEvent("timeout");
      }, f);
    }
    qd2(g, "complete", function() {
      h2 && clearTimeout(h2);
      var m = null;
      try {
        m = JSON.parse(oi2(this)) || null;
      } catch (p2) {
        m = null;
      }
      b && b(m);
    });
    wd2(g, "ready", function() {
      h2 && clearTimeout(h2);
      Xc2(this);
    });
    wd2(g, "timeout", function() {
      h2 && clearTimeout(h2);
      Xc2(this);
      b && b(null);
    });
    ei2(g, a, c, d, e);
  };
  var Ui2 = new qb2(rb, "https://apis.google.com/js/client.js?onload=%{onload}"), Vi2 = "__fcb" + Math.floor(1e6 * Math.random()).toString();
  function Ti2(a, b) {
    if (((window.gapi || {}).client || {}).request)
      a();
    else {
      l[Vi2] = function() {
        ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"));
      };
      var c = zb2(Ui2, { onload: Vi2 });
      wi2(Bi2(c), function() {
        b(Error("CORS_UNSUPPORTED"));
      });
    }
  }
  Ii2.prototype.s = function(a, b, c, d, e) {
    var f = this;
    Ni2.then(function() {
      window.gapi.client.setApiKey(f.c);
      var g = window.gapi.auth.getToken();
      window.gapi.auth.setToken(null);
      window.gapi.client.request({ path: a, method: c, body: d, headers: e, authType: "none", callback: function(h2) {
        window.gapi.auth.setToken(g);
        b && b(h2);
      } });
    }).o(function(g) {
      b && b({ error: { message: g && g.message || "CORS_UNSUPPORTED" } });
    });
  };
  function Wi(a, b) {
    return new D2(function(c, d) {
      b.grant_type == "refresh_token" && b.refresh_token || b.grant_type == "authorization_code" && b.code ? Si2(a, a.l + "?key=" + encodeURIComponent(a.c), function(e) {
        e ? e.error ? d(Xi2(e)) : e.access_token && e.refresh_token ? c(e) : d(new t2("internal-error")) : d(new t2("network-request-failed"));
      }, "POST", fe2(b).toString(), a.g, a.m.get()) : d(new t2("internal-error"));
    });
  }
  function Yi2(a, b, c, d, e, f, g) {
    var h2 = J2(b + c);
    I2(h2, "key", a.c);
    g && I2(h2, "cb", va2().toString());
    var m = d == "GET";
    if (m)
      for (var p2 in e)
        e.hasOwnProperty(p2) && I2(h2, p2, e[p2]);
    return new D2(function(v2, B2) {
      Si2(a, h2.toString(), function(A2) {
        A2 ? A2.error ? B2(Xi2(A2, f || {})) : v2(A2) : B2(new t2("network-request-failed"));
      }, d, m ? void 0 : ke2(Ve2(e)), a.a, a.v.get());
    });
  }
  function Zi2(a) {
    a = a.email;
    if (typeof a !== "string" || !De2.test(a))
      throw new t2("invalid-email");
  }
  function $i2(a) {
    "email" in a && Zi2(a);
  }
  function aj(a, b) {
    return O2(a, bj, { identifier: b, continueUri: Se2() ? re2() : "http://localhost" }).then(function(c) {
      return c.signinMethods || [];
    });
  }
  function cj(a) {
    return O2(a, dj, {}).then(function(b) {
      return b.authorizedDomains || [];
    });
  }
  function P2(a) {
    if (!a[Dg]) {
      if (a.mfaPendingCredential)
        throw new t2("multi-factor-auth-required", null, nb2(a));
      throw new t2("internal-error");
    }
  }
  function ej(a) {
    if (a.phoneNumber || a.temporaryProof) {
      if (!a.phoneNumber || !a.temporaryProof)
        throw new t2("internal-error");
    } else {
      if (!a.sessionInfo)
        throw new t2("missing-verification-id");
      if (!a.code)
        throw new t2("missing-verification-code");
    }
  }
  Ii2.prototype.zb = function() {
    return O2(this, fj, {});
  };
  Ii2.prototype.Bb = function(a, b) {
    return O2(this, gj, { idToken: a, email: b });
  };
  Ii2.prototype.Cb = function(a, b) {
    return O2(this, ch, { idToken: a, password: b });
  };
  var hj = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };
  k2 = Ii2.prototype;
  k2.Db = function(a, b) {
    var c = { idToken: a }, d = [];
    lb2(hj, function(e, f) {
      var g = b[f];
      g === null ? d.push(e) : f in b && (c[f] = g);
    });
    d.length && (c.deleteAttribute = d);
    return O2(this, gj, c);
  };
  k2.vb = function(a, b) {
    a = { requestType: "PASSWORD_RESET", email: a };
    z2(a, b);
    return O2(this, ij, a);
  };
  k2.wb = function(a, b) {
    a = { requestType: "EMAIL_SIGNIN", email: a };
    z2(a, b);
    return O2(this, jj, a);
  };
  k2.ub = function(a, b) {
    a = { requestType: "VERIFY_EMAIL", idToken: a };
    z2(a, b);
    return O2(this, kj, a);
  };
  k2.Eb = function(a, b, c) {
    a = { requestType: "VERIFY_AND_CHANGE_EMAIL", idToken: a, newEmail: b };
    z2(a, c);
    return O2(this, lj, a);
  };
  function oh(a, b) {
    return O2(a, mj, b);
  }
  k2.fb = function(a) {
    return O2(this, nj, a);
  };
  function mh(a, b) {
    return O2(a, oj, b).then(function(c) {
      return c.phoneSessionInfo.sessionInfo;
    });
  }
  function pj(a) {
    if (!a.phoneVerificationInfo)
      throw new t2("internal-error");
    if (!a.phoneVerificationInfo.sessionInfo)
      throw new t2("missing-verification-id");
    if (!a.phoneVerificationInfo.code)
      throw new t2("missing-verification-code");
  }
  function nh(a, b) {
    return O2(a, qj, b).then(function(c) {
      return c.phoneResponseInfo.sessionInfo;
    });
  }
  function rj(a, b, c) {
    return O2(a, sj, { idToken: b, deleteProvider: c });
  }
  function tj(a) {
    if (!a.requestUri || !a.sessionId && !a.postBody && !a.pendingToken)
      throw new t2("internal-error");
  }
  function uj(a, b) {
    b.oauthIdToken && b.providerId && b.providerId.indexOf("oidc.") == 0 && !b.pendingToken && (a.sessionId ? b.nonce = a.sessionId : a.postBody && (a = new Ud(a.postBody), je2(a, "nonce") && (b.nonce = a.get("nonce"))));
    return b;
  }
  function vj(a) {
    var b = null;
    a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = zh(a)) : a.errorMessage == "FEDERATED_USER_ID_ALREADY_LINKED" ? (a.code = "credential-already-in-use", b = zh(a)) : a.errorMessage == "EMAIL_EXISTS" ? (a.code = "email-already-in-use", b = zh(a)) : a.errorMessage && (b = wj(a.errorMessage));
    if (b)
      throw b;
    P2(a);
  }
  function Fg(a, b) {
    b.returnIdpCredential = true;
    return O2(a, xj, b);
  }
  function Hg(a, b) {
    b.returnIdpCredential = true;
    return O2(a, yj, b);
  }
  function Ig(a, b) {
    b.returnIdpCredential = true;
    b.autoCreate = false;
    return O2(a, zj, b);
  }
  function Aj(a) {
    if (!a.oobCode)
      throw new t2("invalid-action-code");
  }
  k2.nb = function(a, b) {
    return O2(this, Bj, { oobCode: a, newPassword: b });
  };
  k2.Ra = function(a) {
    return O2(this, Cj, { oobCode: a });
  };
  k2.jb = function(a) {
    return O2(this, Dj, { oobCode: a });
  };
  var Dj = { endpoint: "setAccountInfo", A: Aj, Z: "email", B: true }, Cj = { endpoint: "resetPassword", A: Aj, G: function(a) {
    var b = a.requestType;
    if (!b || !a.email && b != "EMAIL_SIGNIN" && b != "VERIFY_AND_CHANGE_EMAIL")
      throw new t2("internal-error");
  }, B: true }, Ej = { endpoint: "signupNewUser", A: function(a) {
    Zi2(a);
    if (!a.password)
      throw new t2("weak-password");
  }, G: P2, V: true, B: true }, bj = { endpoint: "createAuthUri", B: true }, Fj = { endpoint: "deleteAccount", N: ["idToken"] }, sj = { endpoint: "setAccountInfo", N: ["idToken", "deleteProvider"], A: function(a) {
    if (!Array.isArray(a.deleteProvider))
      throw new t2("internal-error");
  } }, $g = { endpoint: "emailLinkSignin", N: ["email", "oobCode"], A: Zi2, G: P2, V: true, B: true }, bh = { endpoint: "emailLinkSignin", N: ["idToken", "email", "oobCode"], A: Zi2, G: P2, V: true }, Gj = { endpoint: "accounts/mfaEnrollment:finalize", N: ["idToken", "phoneVerificationInfo"], A: pj, G: P2, B: true, Na: true }, Hj = { endpoint: "accounts/mfaSignIn:finalize", N: ["mfaPendingCredential", "phoneVerificationInfo"], A: pj, G: P2, B: true, Na: true }, Ij = { endpoint: "getAccountInfo" }, jj = { endpoint: "getOobConfirmationCode", N: ["requestType"], A: function(a) {
    if (a.requestType != "EMAIL_SIGNIN")
      throw new t2("internal-error");
    Zi2(a);
  }, Z: "email", B: true }, kj = { endpoint: "getOobConfirmationCode", N: ["idToken", "requestType"], A: function(a) {
    if (a.requestType != "VERIFY_EMAIL")
      throw new t2("internal-error");
  }, Z: "email", B: true }, lj = { endpoint: "getOobConfirmationCode", N: ["idToken", "newEmail", "requestType"], A: function(a) {
    if (a.requestType != "VERIFY_AND_CHANGE_EMAIL")
      throw new t2("internal-error");
  }, Z: "email", B: true }, ij = { endpoint: "getOobConfirmationCode", N: ["requestType"], A: function(a) {
    if (a.requestType != "PASSWORD_RESET")
      throw new t2("internal-error");
    Zi2(a);
  }, Z: "email", B: true }, dj = { lb: true, endpoint: "getProjectConfig", Ub: "GET" }, Jj = { lb: true, endpoint: "getRecaptchaParam", Ub: "GET", G: function(a) {
    if (!a.recaptchaSiteKey)
      throw new t2("internal-error");
  } }, Bj = { endpoint: "resetPassword", A: Aj, Z: "email", B: true }, mj = { endpoint: "sendVerificationCode", N: ["phoneNumber", "recaptchaToken"], Z: "sessionInfo", B: true }, gj = { endpoint: "setAccountInfo", N: ["idToken"], A: $i2, V: true }, ch = {
    endpoint: "setAccountInfo",
    N: ["idToken"],
    A: function(a) {
      $i2(a);
      if (!a.password)
        throw new t2("weak-password");
    },
    G: P2,
    V: true
  }, fj = { endpoint: "signupNewUser", G: P2, V: true, B: true }, oj = { endpoint: "accounts/mfaEnrollment:start", N: ["idToken", "phoneEnrollmentInfo"], A: function(a) {
    if (!a.phoneEnrollmentInfo)
      throw new t2("internal-error");
    if (!a.phoneEnrollmentInfo.phoneNumber)
      throw new t2("missing-phone-number");
    if (!a.phoneEnrollmentInfo.recaptchaToken)
      throw new t2("missing-app-credential");
  }, G: function(a) {
    if (!a.phoneSessionInfo || !a.phoneSessionInfo.sessionInfo)
      throw new t2("internal-error");
  }, B: true, Na: true }, qj = {
    endpoint: "accounts/mfaSignIn:start",
    N: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
    A: function(a) {
      if (!a.phoneSignInInfo || !a.phoneSignInInfo.recaptchaToken)
        throw new t2("missing-app-credential");
    },
    G: function(a) {
      if (!a.phoneResponseInfo || !a.phoneResponseInfo.sessionInfo)
        throw new t2("internal-error");
    },
    B: true,
    Na: true
  }, xj = { endpoint: "verifyAssertion", A: tj, Ya: uj, G: vj, V: true, B: true }, zj = { endpoint: "verifyAssertion", A: tj, Ya: uj, G: function(a) {
    if (a.errorMessage && a.errorMessage == "USER_NOT_FOUND")
      throw new t2("user-not-found");
    if (a.errorMessage)
      throw wj(a.errorMessage);
    P2(a);
  }, V: true, B: true }, yj = { endpoint: "verifyAssertion", A: function(a) {
    tj(a);
    if (!a.idToken)
      throw new t2("internal-error");
  }, Ya: uj, G: vj, V: true }, Kj = { endpoint: "verifyCustomToken", A: function(a) {
    if (!a.token)
      throw new t2("invalid-custom-token");
  }, G: P2, V: true, B: true }, ah = { endpoint: "verifyPassword", A: function(a) {
    Zi2(a);
    if (!a.password)
      throw new t2("wrong-password");
  }, G: P2, V: true, B: true }, nj = { endpoint: "verifyPhoneNumber", A: ej, G: P2, B: true }, ih = {
    endpoint: "verifyPhoneNumber",
    A: function(a) {
      if (!a.idToken)
        throw new t2("internal-error");
      ej(a);
    },
    G: function(a) {
      if (a.temporaryProof)
        throw a.code = "credential-already-in-use", zh(a);
      P2(a);
    }
  }, jh = { Hb: { USER_NOT_FOUND: "user-not-found" }, endpoint: "verifyPhoneNumber", A: ej, G: P2, B: true }, Lj = { endpoint: "accounts/mfaEnrollment:withdraw", N: ["idToken", "mfaEnrollmentId"], G: function(a) {
    if (!!a[Dg] ^ !!a.refreshToken)
      throw new t2("internal-error");
  }, B: true, Na: true };
  function O2(a, b, c) {
    if (!mf(c, b.N))
      return F2(new t2("internal-error"));
    var d = !!b.Na, e = b.Ub || "POST", f;
    return E2(c).then(b.A).then(function() {
      b.V && (c.returnSecureToken = true);
      b.B && a.b && typeof c.tenantId === "undefined" && (c.tenantId = a.b);
      return d ? Yi2(a, a.i, b.endpoint, e, c, b.Hb, b.lb || false) : Yi2(a, a.h, b.endpoint, e, c, b.Hb, b.lb || false);
    }).then(function(g) {
      f = g;
      return b.Ya ? b.Ya(c, f) : f;
    }).then(b.G).then(function() {
      if (!b.Z)
        return f;
      if (!(b.Z in f))
        throw new t2("internal-error");
      return f[b.Z];
    });
  }
  function wj(a) {
    return Xi2({ error: { errors: [{ message: a }], code: 400, message: a } });
  }
  function Xi2(a, b) {
    var c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
    var d = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" };
    if (c = d[c] ? new t2(d[c]) : null)
      return c;
    c = a.error && a.error.message || "";
    d = {
      INVALID_CUSTOM_TOKEN: "invalid-custom-token",
      CREDENTIAL_MISMATCH: "custom-token-mismatch",
      MISSING_CUSTOM_TOKEN: "internal-error",
      INVALID_IDENTIFIER: "invalid-email",
      MISSING_CONTINUE_URI: "internal-error",
      INVALID_EMAIL: "invalid-email",
      INVALID_PASSWORD: "wrong-password",
      USER_DISABLED: "user-disabled",
      MISSING_PASSWORD: "internal-error",
      EMAIL_EXISTS: "email-already-in-use",
      PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
      INVALID_IDP_RESPONSE: "invalid-credential",
      INVALID_PENDING_TOKEN: "invalid-credential",
      FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
      MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
      INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
      INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
      INVALID_SENDER: "invalid-sender",
      EMAIL_NOT_FOUND: "user-not-found",
      RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
      EXPIRED_OOB_CODE: "expired-action-code",
      INVALID_OOB_CODE: "invalid-action-code",
      MISSING_OOB_CODE: "internal-error",
      INVALID_PROVIDER_ID: "invalid-provider-id",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
      INVALID_ID_TOKEN: "invalid-user-token",
      TOKEN_EXPIRED: "user-token-expired",
      USER_NOT_FOUND: "user-token-expired",
      CORS_UNSUPPORTED: "cors-unsupported",
      DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
      INVALID_APP_ID: "invalid-app-id",
      TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
      WEAK_PASSWORD: "weak-password",
      OPERATION_NOT_ALLOWED: "operation-not-allowed",
      USER_CANCELLED: "user-cancelled",
      CAPTCHA_CHECK_FAILED: "captcha-check-failed",
      INVALID_APP_CREDENTIAL: "invalid-app-credential",
      INVALID_CODE: "invalid-verification-code",
      INVALID_PHONE_NUMBER: "invalid-phone-number",
      INVALID_SESSION_INFO: "invalid-verification-id",
      INVALID_TEMPORARY_PROOF: "invalid-credential",
      MISSING_APP_CREDENTIAL: "missing-app-credential",
      MISSING_CODE: "missing-verification-code",
      MISSING_PHONE_NUMBER: "missing-phone-number",
      MISSING_SESSION_INFO: "missing-verification-id",
      QUOTA_EXCEEDED: "quota-exceeded",
      SESSION_EXPIRED: "code-expired",
      REJECTED_CREDENTIAL: "rejected-credential",
      INVALID_CONTINUE_URI: "invalid-continue-uri",
      MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
      MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
      UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
      INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
      INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
      INVALID_CERT_HASH: "invalid-cert-hash",
      UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
      INVALID_TENANT_ID: "invalid-tenant-id",
      TENANT_ID_MISMATCH: "tenant-id-mismatch",
      ADMIN_ONLY_OPERATION: "admin-restricted-operation",
      INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
      MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
      MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
      MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
      EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
      SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
      SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
      UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
      UNVERIFIED_EMAIL: "unverified-email"
    };
    z2(d, b || {});
    b = (b = c.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < b.length ? b[1] : void 0;
    for (var e in d)
      if (c.indexOf(e) === 0)
        return new t2(d[e], b);
    !b && a && (b = Ue2(a));
    return new t2("internal-error", b);
  }
  function Mj(a) {
    this.b = a;
    this.a = null;
    this.rb = Nj(this);
  }
  function Nj(a) {
    return Oj().then(function() {
      return new D2(function(b, c) {
        L2("gapi.iframes.getContext")().open({ where: document.body, url: a.b, messageHandlersFilter: L2("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"), attributes: { style: { position: "absolute", top: "-100px", width: "1px", height: "1px" } }, dontclear: true }, function(d) {
          function e() {
            clearTimeout(f);
            b();
          }
          a.a = d;
          a.a.restyle({ setHideOnLeave: false });
          var f = setTimeout(function() {
            c(Error("Network Error"));
          }, Pj.get());
          d.ping(e).then(e, function() {
            c(Error("Network Error"));
          });
        });
      });
    });
  }
  function Qj(a, b) {
    return a.rb.then(function() {
      return new D2(function(c) {
        a.a.send(b.type, b, c, L2("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
      });
    });
  }
  function Rj(a, b) {
    a.rb.then(function() {
      a.a.register("authEvent", b, L2("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
    });
  }
  var Sj = new qb2(rb, "https://apis.google.com/js/api.js?onload=%{onload}"), Tj = new Ze2(3e4, 6e4), Pj = new Ze2(5e3, 15e3), Uj = null;
  function Oj() {
    return Uj ? Uj : Uj = new D2(function(a, b) {
      function c() {
        Ye2();
        L2("gapi.load")("gapi.iframes", { callback: a, ontimeout: function() {
          Ye2();
          b(Error("Network Error"));
        }, timeout: Tj.get() });
      }
      if (L2("gapi.iframes.Iframe"))
        a();
      else if (L2("gapi.load"))
        c();
      else {
        var d = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
        l[d] = function() {
          L2("gapi.load") ? c() : b(Error("Network Error"));
        };
        d = zb2(Sj, { onload: d });
        E2(Bi2(d)).o(function() {
          b(Error("Network Error"));
        });
      }
    }).o(function(a) {
      Uj = null;
      throw a;
    });
  }
  function Vj(a, b, c, d) {
    this.l = a;
    this.h = b;
    this.i = c;
    this.g = d;
    this.f = null;
    this.g ? (a = J2(this.g.url), a = ce2(a.c, a.a, a.g, "/emulator/auth/iframe")) : a = ce2("https", this.l, null, "/__/auth/iframe");
    this.a = a;
    I2(this.a, "apiKey", this.h);
    I2(this.a, "appName", this.i);
    this.b = null;
    this.c = [];
  }
  Vj.prototype.toString = function() {
    this.f ? I2(this.a, "v", this.f) : ie2(this.a.b, "v");
    this.b ? I2(this.a, "eid", this.b) : ie2(this.a.b, "eid");
    this.c.length ? I2(this.a, "fw", this.c.join(",")) : ie2(this.a.b, "fw");
    return this.a.toString();
  };
  function Wj(a, b, c, d, e, f) {
    this.u = a;
    this.s = b;
    this.c = c;
    this.m = d;
    this.v = f;
    this.i = this.g = this.l = null;
    this.a = e;
    this.h = this.f = null;
  }
  Wj.prototype.yb = function(a) {
    this.h = a;
    return this;
  };
  Wj.prototype.toString = function() {
    if (this.v) {
      var a = J2(this.v.url);
      a = ce2(a.c, a.a, a.g, "/emulator/auth/handler");
    } else
      a = ce2("https", this.u, null, "/__/auth/handler");
    I2(a, "apiKey", this.s);
    I2(a, "appName", this.c);
    I2(a, "authType", this.m);
    if (this.a.isOAuthProvider) {
      var b = this.a;
      try {
        var c = firebase$1$1.app(this.c).auth().la();
      } catch (h2) {
        c = null;
      }
      b.ob = c;
      I2(a, "providerId", this.a.providerId);
      c = this.a;
      b = Ve2(c.Ib);
      for (var d in b)
        b[d] = b[d].toString();
      d = c.Qc;
      b = nb2(b);
      for (var e = 0; e < d.length; e++) {
        var f = d[e];
        f in b && delete b[f];
      }
      c.pb && c.ob && !b[c.pb] && (b[c.pb] = c.ob);
      mb2(b) || I2(a, "customParameters", Ue2(b));
    }
    typeof this.a.Qb === "function" && (c = this.a.Qb(), c.length && I2(a, "scopes", c.join(",")));
    this.l ? I2(a, "redirectUrl", this.l) : ie2(a.b, "redirectUrl");
    this.g ? I2(a, "eventId", this.g) : ie2(a.b, "eventId");
    this.i ? I2(a, "v", this.i) : ie2(a.b, "v");
    if (this.b)
      for (var g in this.b)
        this.b.hasOwnProperty(g) && !be2(a, g) && I2(a, g, this.b[g]);
    this.h ? I2(a, "tid", this.h) : ie2(a.b, "tid");
    this.f ? I2(a, "eid", this.f) : ie2(a.b, "eid");
    g = Xj(this.c);
    g.length && I2(a, "fw", g.join(","));
    return a.toString();
  };
  function Xj(a) {
    try {
      return firebase$1$1.app(a).auth().Ga();
    } catch (b) {
      return [];
    }
  }
  function Yj(a, b, c, d, e, f) {
    this.s = a;
    this.g = b;
    this.b = c;
    this.f = f;
    this.c = d || null;
    this.i = e || null;
    this.l = this.u = this.C = null;
    this.h = [];
    this.m = this.a = null;
  }
  function Zj(a) {
    var b = re2();
    return cj(a).then(function(c) {
      a: {
        var d = J2(b), e = d.c;
        d = d.a;
        for (var f = 0; f < c.length; f++) {
          var g = c[f];
          var h2 = d;
          var m = e;
          g.indexOf("chrome-extension://") == 0 ? h2 = J2(g).a == h2 && m == "chrome-extension" : m != "http" && m != "https" ? h2 = false : Ce2.test(g) ? h2 = h2 == g : (g = g.split(".").join("\\."), h2 = new RegExp("^(.+\\." + g + "|" + g + ")$", "i").test(h2));
          if (h2) {
            c = true;
            break a;
          }
        }
        c = false;
      }
      if (!c)
        throw new xh(re2());
    });
  }
  function ak(a) {
    if (a.m)
      return a.m;
    a.m = Ee2().then(function() {
      if (!a.u) {
        var b = a.c, c = a.i, d = Xj(a.b), e = new Vj(a.s, a.g, a.b, a.f);
        e.f = b;
        e.b = c;
        e.c = Za2(d || []);
        a.u = e.toString();
      }
      a.v = new Mj(a.u);
      bk(a);
    });
    return a.m;
  }
  k2 = Yj.prototype;
  k2.Ob = function(a, b, c) {
    var d = new t2("popup-closed-by-user"), e = new t2("web-storage-unsupported"), f = this, g = false;
    return this.ma().then(function() {
      ck(f).then(function(h2) {
        h2 || (a && ye2(a), b(e), g = true);
      });
    }).o(function() {
    }).then(function() {
      if (!g)
        return Be2(a);
    }).then(function() {
      if (!g)
        return Fd2(c).then(function() {
          b(d);
        });
    });
  };
  k2.Xb = function() {
    var a = K2();
    return !Te2(a) && !Xe2(a);
  };
  k2.Tb = function() {
    return false;
  };
  k2.Mb = function(a, b, c, d, e, f, g, h2) {
    if (!a)
      return F2(new t2("popup-blocked"));
    if (g && !Te2())
      return this.ma().o(function(p2) {
        ye2(a);
        e(p2);
      }), d(), E2();
    this.a || (this.a = Zj(dk(this)));
    var m = this;
    return this.a.then(function() {
      var p2 = m.ma().o(function(v2) {
        ye2(a);
        e(v2);
        throw v2;
      });
      d();
      return p2;
    }).then(function() {
      rh(c);
      if (!g) {
        var p2 = ek(m.s, m.g, m.b, b, c, null, f, m.c, void 0, m.i, h2, m.f);
        se2(p2, a);
      }
    }).o(function(p2) {
      p2.code == "auth/network-request-failed" && (m.a = null);
      throw p2;
    });
  };
  function dk(a) {
    a.l || (a.C = a.c ? Oe2(a.c, Xj(a.b)) : null, a.l = new Ii2(a.g, Ca2(a.i), a.C), a.f && Pi2(a.l, a.f));
    return a.l;
  }
  k2.Nb = function(a, b, c, d) {
    this.a || (this.a = Zj(dk(this)));
    var e = this;
    return this.a.then(function() {
      rh(b);
      var f = ek(e.s, e.g, e.b, a, b, re2(), c, e.c, void 0, e.i, d, e.f);
      se2(f);
    }).o(function(f) {
      f.code == "auth/network-request-failed" && (e.a = null);
      throw f;
    });
  };
  k2.ma = function() {
    var a = this;
    return ak(this).then(function() {
      return a.v.rb;
    }).o(function() {
      a.a = null;
      throw new t2("network-request-failed");
    });
  };
  k2.$b = function() {
    return true;
  };
  function ek(a, b, c, d, e, f, g, h2, m, p2, v2, B2) {
    a = new Wj(a, b, c, d, e, B2);
    a.l = f;
    a.g = g;
    a.i = h2;
    a.b = nb2(m || null);
    a.f = p2;
    return a.yb(v2).toString();
  }
  function bk(a) {
    if (!a.v)
      throw Error("IfcHandler must be initialized!");
    Rj(a.v, function(b) {
      var c = {};
      if (b && b.authEvent) {
        var d = false;
        b = th(b.authEvent);
        for (c = 0; c < a.h.length; c++)
          d = a.h[c](b) || d;
        c = {};
        c.status = d ? "ACK" : "ERROR";
        return E2(c);
      }
      c.status = "ERROR";
      return E2(c);
    });
  }
  function ck(a) {
    var b = { type: "webStorageSupport" };
    return ak(a).then(function() {
      return Qj(a.v, b);
    }).then(function(c) {
      if (c && c.length && typeof c[0].webStorageSupport !== "undefined")
        return c[0].webStorageSupport;
      throw Error();
    });
  }
  k2.Ea = function(a) {
    this.h.push(a);
  };
  k2.Sa = function(a) {
    Xa2(this.h, function(b) {
      return b == a;
    });
  };
  function fk(a) {
    this.a = a || firebase$1$1.INTERNAL.reactNative && firebase$1$1.INTERNAL.reactNative.AsyncStorage;
    if (!this.a)
      throw new t2("internal-error", "The React Native compatibility library was not found.");
    this.type = "asyncStorage";
  }
  k2 = fk.prototype;
  k2.get = function(a) {
    return E2(this.a.getItem(a)).then(function(b) {
      return b && We2(b);
    });
  };
  k2.set = function(a, b) {
    return E2(this.a.setItem(a, Ue2(b)));
  };
  k2.U = function(a) {
    return E2(this.a.removeItem(a));
  };
  k2.ca = function() {
  };
  k2.ia = function() {
  };
  function gk(a) {
    this.b = a;
    this.a = {};
    this.f = q2(this.c, this);
  }
  var hk = [];
  function ik() {
    var a = Je2() ? self : null;
    w2(hk, function(c) {
      c.b == a && (b = c);
    });
    if (!b) {
      var b = new gk(a);
      hk.push(b);
    }
    return b;
  }
  gk.prototype.c = function(a) {
    var b = a.data.eventType, c = a.data.eventId, d = this.a[b];
    if (d && 0 < d.length) {
      a.ports[0].postMessage({ status: "ack", eventId: c, eventType: b, response: null });
      var e = [];
      w2(d, function(f) {
        e.push(E2().then(function() {
          return f(a.origin, a.data.data);
        }));
      });
      Jc2(e).then(function(f) {
        var g = [];
        w2(f, function(h2) {
          g.push({ fulfilled: h2.Pb, value: h2.value, reason: h2.reason ? h2.reason.message : void 0 });
        });
        w2(g, function(h2) {
          for (var m in h2)
            typeof h2[m] === "undefined" && delete h2[m];
        });
        a.ports[0].postMessage({
          status: "done",
          eventId: c,
          eventType: b,
          response: g
        });
      });
    }
  };
  function jk(a, b, c) {
    mb2(a.a) && a.b.addEventListener("message", a.f);
    typeof a.a[b] === "undefined" && (a.a[b] = []);
    a.a[b].push(c);
  }
  function kk(a) {
    this.a = a;
  }
  kk.prototype.postMessage = function(a, b) {
    this.a.postMessage(a, b);
  };
  function lk(a) {
    this.c = a;
    this.b = false;
    this.a = [];
  }
  function mk(a, b, c, d) {
    var e, f = c || {}, g, h2, m, p2 = null;
    if (a.b)
      return F2(Error("connection_unavailable"));
    var v2 = d ? 800 : 50, B2 = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
    return new D2(function(A2, Q2) {
      B2 ? (e = Math.floor(Math.random() * Math.pow(10, 20)).toString(), B2.port1.start(), h2 = setTimeout(function() {
        Q2(Error("unsupported_event"));
      }, v2), g = function(ya2) {
        ya2.data.eventId === e && (ya2.data.status === "ack" ? (clearTimeout(h2), m = setTimeout(function() {
          Q2(Error("timeout"));
        }, 3e3)) : ya2.data.status === "done" ? (clearTimeout(m), typeof ya2.data.response !== "undefined" ? A2(ya2.data.response) : Q2(Error("unknown_error"))) : (clearTimeout(h2), clearTimeout(m), Q2(Error("invalid_response"))));
      }, p2 = { messageChannel: B2, onMessage: g }, a.a.push(p2), B2.port1.addEventListener("message", g), a.c.postMessage({ eventType: b, eventId: e, data: f }, [B2.port2])) : Q2(Error("connection_unavailable"));
    }).then(function(A2) {
      nk(a, p2);
      return A2;
    }).o(function(A2) {
      nk(a, p2);
      throw A2;
    });
  }
  function nk(a, b) {
    if (b) {
      var c = b.messageChannel, d = b.onMessage;
      c && (c.port1.removeEventListener("message", d), c.port1.close());
      Xa2(a.a, function(e) {
        return e == b;
      });
    }
  }
  lk.prototype.close = function() {
    for (; 0 < this.a.length; )
      nk(this, this.a[0]);
    this.b = true;
  };
  function ok() {
    if (!pk())
      throw new t2("web-storage-unsupported");
    this.c = {};
    this.a = [];
    this.b = 0;
    this.m = l.indexedDB;
    this.type = "indexedDB";
    this.g = this.v = this.f = this.l = null;
    this.s = false;
    this.h = null;
    var a = this;
    Je2() && self ? (this.v = ik(), jk(this.v, "keyChanged", function(b, c) {
      return qk(a).then(function(d) {
        0 < d.length && w2(a.a, function(e) {
          e(d);
        });
        return { keyProcessed: Va2(d, c.key) };
      });
    }), jk(this.v, "ping", function() {
      return E2(["keyChanged"]);
    })) : ef().then(function(b) {
      if (a.h = b)
        a.g = new lk(new kk(b)), mk(a.g, "ping", null, true).then(function(c) {
          c[0].fulfilled && Va2(c[0].value, "keyChanged") && (a.s = true);
        }).o(function() {
        });
    });
  }
  var rk;
  function sk(a) {
    return new D2(function(b, c) {
      var d = a.m.deleteDatabase("firebaseLocalStorageDb");
      d.onsuccess = function() {
        b();
      };
      d.onerror = function(e) {
        c(Error(e.target.error));
      };
    });
  }
  function tk(a) {
    return new D2(function(b, c) {
      var d = a.m.open("firebaseLocalStorageDb", 1);
      d.onerror = function(e) {
        try {
          e.preventDefault();
        } catch (f) {
        }
        c(Error(e.target.error));
      };
      d.onupgradeneeded = function(e) {
        e = e.target.result;
        try {
          e.createObjectStore("firebaseLocalStorage", { keyPath: "fbase_key" });
        } catch (f) {
          c(f);
        }
      };
      d.onsuccess = function(e) {
        e = e.target.result;
        e.objectStoreNames.contains("firebaseLocalStorage") ? b(e) : sk(a).then(function() {
          return tk(a);
        }).then(function(f) {
          b(f);
        }).o(function(f) {
          c(f);
        });
      };
    });
  }
  function uk(a) {
    a.i || (a.i = tk(a));
    return a.i;
  }
  function vk(a, b) {
    function c(e, f) {
      uk(a).then(b).then(e).o(function(g) {
        if (3 < ++d)
          f(g);
        else
          return uk(a).then(function(h2) {
            h2.close();
            a.i = void 0;
            return c(e, f);
          }).o(function(h2) {
            f(h2);
          });
      });
    }
    var d = 0;
    return new D2(c);
  }
  function pk() {
    try {
      return !!l.indexedDB;
    } catch (a) {
      return false;
    }
  }
  function wk(a) {
    return a.objectStore("firebaseLocalStorage");
  }
  function xk(a, b) {
    return a.transaction(["firebaseLocalStorage"], b ? "readwrite" : "readonly");
  }
  function yk(a) {
    return new D2(function(b, c) {
      a.onsuccess = function(d) {
        d && d.target ? b(d.target.result) : b();
      };
      a.onerror = function(d) {
        c(d.target.error);
      };
    });
  }
  k2 = ok.prototype;
  k2.set = function(a, b) {
    var c = this, d = false;
    return vk(this, function(e) {
      e = wk(xk(e, true));
      return yk(e.get(a));
    }).then(function(e) {
      return vk(c, function(f) {
        f = wk(xk(f, true));
        if (e)
          return e.value = b, yk(f.put(e));
        c.b++;
        d = true;
        var g = {};
        g.fbase_key = a;
        g.value = b;
        return yk(f.add(g));
      });
    }).then(function() {
      c.c[a] = b;
      return zk(c, a);
    }).oa(function() {
      d && c.b--;
    });
  };
  function zk(a, b) {
    return a.g && a.h && df() === a.h ? mk(a.g, "keyChanged", { key: b }, a.s).then(function() {
    }).o(function() {
    }) : E2();
  }
  k2.get = function(a) {
    return vk(this, function(b) {
      return yk(wk(xk(b, false)).get(a));
    }).then(function(b) {
      return b && b.value;
    });
  };
  k2.U = function(a) {
    var b = this, c = false;
    return vk(this, function(d) {
      c = true;
      b.b++;
      return yk(wk(xk(d, true))["delete"](a));
    }).then(function() {
      delete b.c[a];
      return zk(b, a);
    }).oa(function() {
      c && b.b--;
    });
  };
  function qk(a) {
    return uk(a).then(function(b) {
      var c = wk(xk(b, false));
      return c.getAll ? yk(c.getAll()) : new D2(function(d, e) {
        var f = [], g = c.openCursor();
        g.onsuccess = function(h2) {
          (h2 = h2.target.result) ? (f.push(h2.value), h2["continue"]()) : d(f);
        };
        g.onerror = function(h2) {
          e(h2.target.error);
        };
      });
    }).then(function(b) {
      var c = {}, d = [];
      if (a.b == 0) {
        for (d = 0; d < b.length; d++)
          c[b[d].fbase_key] = b[d].value;
        d = te2(a.c, c);
        a.c = c;
      }
      return d;
    });
  }
  k2.ca = function(a) {
    this.a.length == 0 && Ak(this);
    this.a.push(a);
  };
  k2.ia = function(a) {
    Xa2(this.a, function(b) {
      return b == a;
    });
    this.a.length == 0 && Bk(this);
  };
  function Ak(a) {
    function b() {
      a.f = setTimeout(function() {
        a.l = qk(a).then(function(c) {
          0 < c.length && w2(a.a, function(d) {
            d(c);
          });
        }).then(function() {
          b();
        }).o(function(c) {
          c.message != "STOP_EVENT" && b();
        });
      }, 800);
    }
    Bk(a);
    b();
  }
  function Bk(a) {
    a.l && a.l.cancel("STOP_EVENT");
    a.f && (clearTimeout(a.f), a.f = null);
  }
  function Ck(a) {
    var b = this, c = null;
    this.a = [];
    this.type = "indexedDB";
    this.c = a;
    this.b = E2().then(function() {
      if (pk()) {
        var d = Qe2(), e = "__sak" + d;
        rk || (rk = new ok());
        c = rk;
        return c.set(e, d).then(function() {
          return c.get(e);
        }).then(function(f) {
          if (f !== d)
            throw Error("indexedDB not supported!");
          return c.U(e);
        }).then(function() {
          return c;
        }).o(function() {
          return b.c;
        });
      }
      return b.c;
    }).then(function(d) {
      b.type = d.type;
      d.ca(function(e) {
        w2(b.a, function(f) {
          f(e);
        });
      });
      return d;
    });
  }
  k2 = Ck.prototype;
  k2.get = function(a) {
    return this.b.then(function(b) {
      return b.get(a);
    });
  };
  k2.set = function(a, b) {
    return this.b.then(function(c) {
      return c.set(a, b);
    });
  };
  k2.U = function(a) {
    return this.b.then(function(b) {
      return b.U(a);
    });
  };
  k2.ca = function(a) {
    this.a.push(a);
  };
  k2.ia = function(a) {
    Xa2(this.a, function(b) {
      return b == a;
    });
  };
  function Dk() {
    this.a = {};
    this.type = "inMemory";
  }
  k2 = Dk.prototype;
  k2.get = function(a) {
    return E2(this.a[a]);
  };
  k2.set = function(a, b) {
    this.a[a] = b;
    return E2();
  };
  k2.U = function(a) {
    delete this.a[a];
    return E2();
  };
  k2.ca = function() {
  };
  k2.ia = function() {
  };
  function Ek() {
    if (!Fk()) {
      if (Ke2() == "Node")
        throw new t2("internal-error", "The LocalStorage compatibility library was not found.");
      throw new t2("web-storage-unsupported");
    }
    this.a = Gk() || firebase$1$1.INTERNAL.node.localStorage;
    this.type = "localStorage";
  }
  function Gk() {
    try {
      var a = l.localStorage, b = Qe2();
      a && (a.setItem(b, "1"), a.removeItem(b));
      return a;
    } catch (c) {
      return null;
    }
  }
  function Fk() {
    var a = Ke2() == "Node";
    a = Gk() || a && firebase$1$1.INTERNAL.node && firebase$1$1.INTERNAL.node.localStorage;
    if (!a)
      return false;
    try {
      return a.setItem("__sak", "1"), a.removeItem("__sak"), true;
    } catch (b) {
      return false;
    }
  }
  k2 = Ek.prototype;
  k2.get = function(a) {
    var b = this;
    return E2().then(function() {
      var c = b.a.getItem(a);
      return We2(c);
    });
  };
  k2.set = function(a, b) {
    var c = this;
    return E2().then(function() {
      var d = Ue2(b);
      d === null ? c.U(a) : c.a.setItem(a, d);
    });
  };
  k2.U = function(a) {
    var b = this;
    return E2().then(function() {
      b.a.removeItem(a);
    });
  };
  k2.ca = function(a) {
    l.window && nd2(l.window, "storage", a);
  };
  k2.ia = function(a) {
    l.window && xd2(l.window, "storage", a);
  };
  function Hk() {
    this.type = "nullStorage";
  }
  k2 = Hk.prototype;
  k2.get = function() {
    return E2(null);
  };
  k2.set = function() {
    return E2();
  };
  k2.U = function() {
    return E2();
  };
  k2.ca = function() {
  };
  k2.ia = function() {
  };
  function Ik() {
    if (!Jk()) {
      if (Ke2() == "Node")
        throw new t2("internal-error", "The SessionStorage compatibility library was not found.");
      throw new t2("web-storage-unsupported");
    }
    this.a = Kk() || firebase$1$1.INTERNAL.node.sessionStorage;
    this.type = "sessionStorage";
  }
  function Kk() {
    try {
      var a = l.sessionStorage, b = Qe2();
      a && (a.setItem(b, "1"), a.removeItem(b));
      return a;
    } catch (c) {
      return null;
    }
  }
  function Jk() {
    var a = Ke2() == "Node";
    a = Kk() || a && firebase$1$1.INTERNAL.node && firebase$1$1.INTERNAL.node.sessionStorage;
    if (!a)
      return false;
    try {
      return a.setItem("__sak", "1"), a.removeItem("__sak"), true;
    } catch (b) {
      return false;
    }
  }
  k2 = Ik.prototype;
  k2.get = function(a) {
    var b = this;
    return E2().then(function() {
      var c = b.a.getItem(a);
      return We2(c);
    });
  };
  k2.set = function(a, b) {
    var c = this;
    return E2().then(function() {
      var d = Ue2(b);
      d === null ? c.U(a) : c.a.setItem(a, d);
    });
  };
  k2.U = function(a) {
    var b = this;
    return E2().then(function() {
      b.a.removeItem(a);
    });
  };
  k2.ca = function() {
  };
  k2.ia = function() {
  };
  function Lk() {
    var a = {};
    a.Browser = Mk;
    a.Node = Nk;
    a.ReactNative = Ok;
    a.Worker = Pk;
    this.a = a[Ke2()];
  }
  var Qk, Mk = { F: Ek, bb: Ik }, Nk = { F: Ek, bb: Ik }, Ok = { F: fk, bb: Hk }, Pk = { F: Ek, bb: Hk };
  var Rk = { rd: "local", NONE: "none", td: "session" };
  function Sk(a) {
    var b = new t2("invalid-persistence-type"), c = new t2("unsupported-persistence-type");
    a: {
      for (d in Rk)
        if (Rk[d] == a) {
          var d = true;
          break a;
        }
      d = false;
    }
    if (!d || typeof a !== "string")
      throw b;
    switch (Ke2()) {
      case "ReactNative":
        if (a === "session")
          throw c;
        break;
      case "Node":
        if (a !== "none")
          throw c;
        break;
      case "Worker":
        if (a === "session" || !pk() && a !== "none")
          throw c;
        break;
      default:
        if (!Pe2() && a !== "none")
          throw c;
    }
  }
  function Tk() {
    var a = !Xe2(K2()) && Ie2() ? true : false, b = Te2(), c = Pe2();
    this.m = a;
    this.h = b;
    this.l = c;
    this.a = {};
    Qk || (Qk = new Lk());
    a = Qk;
    try {
      this.g = !qe2() && cf() || !l.indexedDB ? new a.a.F() : new Ck(Je2() ? new Dk() : new a.a.F());
    } catch (d) {
      this.g = new Dk(), this.h = true;
    }
    try {
      this.i = new a.a.bb();
    } catch (d) {
      this.i = new Dk();
    }
    this.v = new Dk();
    this.f = q2(this.Yb, this);
    this.b = {};
  }
  var Uk;
  function Vk() {
    Uk || (Uk = new Tk());
    return Uk;
  }
  function Wk(a, b) {
    switch (b) {
      case "session":
        return a.i;
      case "none":
        return a.v;
      default:
        return a.g;
    }
  }
  function Xk(a, b) {
    return "firebase:" + a.name + (b ? ":" + b : "");
  }
  function Yk(a, b, c) {
    var d = Xk(b, c), e = Wk(a, b.F);
    return a.get(b, c).then(function(f) {
      var g = null;
      try {
        g = We2(l.localStorage.getItem(d));
      } catch (h2) {
      }
      if (g && !f)
        return l.localStorage.removeItem(d), a.set(b, g, c);
      g && f && e.type != "localStorage" && l.localStorage.removeItem(d);
    });
  }
  k2 = Tk.prototype;
  k2.get = function(a, b) {
    return Wk(this, a.F).get(Xk(a, b));
  };
  function Zk(a, b, c) {
    c = Xk(b, c);
    b.F == "local" && (a.b[c] = null);
    return Wk(a, b.F).U(c);
  }
  k2.set = function(a, b, c) {
    var d = Xk(a, c), e = this, f = Wk(this, a.F);
    return f.set(d, b).then(function() {
      return f.get(d);
    }).then(function(g) {
      a.F == "local" && (e.b[d] = g);
    });
  };
  k2.addListener = function(a, b, c) {
    a = Xk(a, b);
    this.l && (this.b[a] = l.localStorage.getItem(a));
    mb2(this.a) && (Wk(this, "local").ca(this.f), this.h || (qe2() || !cf()) && l.indexedDB || !this.l || $k(this));
    this.a[a] || (this.a[a] = []);
    this.a[a].push(c);
  };
  k2.removeListener = function(a, b, c) {
    a = Xk(a, b);
    this.a[a] && (Xa2(this.a[a], function(d) {
      return d == c;
    }), this.a[a].length == 0 && delete this.a[a]);
    mb2(this.a) && (Wk(this, "local").ia(this.f), al(this));
  };
  function $k(a) {
    al(a);
    a.c = setInterval(function() {
      for (var b in a.a) {
        var c = l.localStorage.getItem(b), d = a.b[b];
        c != d && (a.b[b] = c, c = new bd2({ type: "storage", key: b, target: window, oldValue: d, newValue: c, a: true }), a.Yb(c));
      }
    }, 1e3);
  }
  function al(a) {
    a.c && (clearInterval(a.c), a.c = null);
  }
  k2.Yb = function(a) {
    if (a && a.g) {
      var b = a.a.key;
      if (b == null)
        for (var c in this.a) {
          var d = this.b[c];
          typeof d === "undefined" && (d = null);
          var e = l.localStorage.getItem(c);
          e !== d && (this.b[c] = e, this.mb(c));
        }
      else if (b.indexOf("firebase:") == 0 && this.a[b]) {
        typeof a.a.a !== "undefined" ? Wk(this, "local").ia(this.f) : al(this);
        if (this.m) {
          if (c = l.localStorage.getItem(b), d = a.a.newValue, d !== c)
            d !== null ? l.localStorage.setItem(b, d) : l.localStorage.removeItem(b);
          else if (this.b[b] === d && typeof a.a.a === "undefined")
            return;
        }
        var f = this;
        c = function() {
          if (typeof a.a.a !== "undefined" || f.b[b] !== l.localStorage.getItem(b))
            f.b[b] = l.localStorage.getItem(b), f.mb(b);
        };
        Wb2 && ic2 && ic2 == 10 && l.localStorage.getItem(b) !== a.a.newValue && a.a.newValue !== a.a.oldValue ? setTimeout(c, 10) : c();
      }
    } else
      w2(a, q2(this.mb, this));
  };
  k2.mb = function(a) {
    this.a[a] && w2(this.a[a], function(b) {
      b();
    });
  };
  function bl(a) {
    this.a = a;
    this.b = Vk();
  }
  var cl = { name: "authEvent", F: "local" };
  function dl(a) {
    return a.b.get(cl, a.a).then(function(b) {
      return th(b);
    });
  }
  function el() {
    this.a = Vk();
  }
  function fl() {
    this.b = -1;
  }
  function gl(a, b) {
    this.b = hl;
    this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b);
    this.g = this.c = 0;
    this.a = [];
    this.i = a;
    this.h = b;
    this.l = l.Int32Array ? new Int32Array(64) : Array(64);
    il === void 0 && (l.Int32Array ? il = new Int32Array(jl) : il = jl);
    this.reset();
  }
  var il;
  r2(gl, fl);
  for (var hl = 64, kl = hl - 1, ll = [], ml = 0; ml < kl; ml++)
    ll[ml] = 0;
  var nl = Ya2(128, ll);
  gl.prototype.reset = function() {
    this.g = this.c = 0;
    this.a = l.Int32Array ? new Int32Array(this.h) : Za2(this.h);
  };
  function ol(a) {
    for (var b = a.f, c = a.l, d = 0, e = 0; e < b.length; )
      c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
    for (b = 16; 64 > b; b++) {
      e = c[b - 15] | 0;
      d = c[b - 2] | 0;
      var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0, g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
      c[b] = f + g | 0;
    }
    d = a.a[0] | 0;
    e = a.a[1] | 0;
    var h2 = a.a[2] | 0, m = a.a[3] | 0, p2 = a.a[4] | 0, v2 = a.a[5] | 0, B2 = a.a[6] | 0;
    f = a.a[7] | 0;
    for (b = 0; 64 > b; b++) {
      var A2 = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & h2 ^ e & h2) | 0;
      g = p2 & v2 ^ ~p2 & B2;
      f = f + ((p2 >>> 6 | p2 << 26) ^ (p2 >>> 11 | p2 << 21) ^ (p2 >>> 25 | p2 << 7)) | 0;
      g = g + (il[b] | 0) | 0;
      g = f + (g + (c[b] | 0) | 0) | 0;
      f = B2;
      B2 = v2;
      v2 = p2;
      p2 = m + g | 0;
      m = h2;
      h2 = e;
      e = d;
      d = g + A2 | 0;
    }
    a.a[0] = a.a[0] + d | 0;
    a.a[1] = a.a[1] + e | 0;
    a.a[2] = a.a[2] + h2 | 0;
    a.a[3] = a.a[3] + m | 0;
    a.a[4] = a.a[4] + p2 | 0;
    a.a[5] = a.a[5] + v2 | 0;
    a.a[6] = a.a[6] + B2 | 0;
    a.a[7] = a.a[7] + f | 0;
  }
  function pl(a, b, c) {
    c === void 0 && (c = b.length);
    var d = 0, e = a.c;
    if (typeof b === "string")
      for (; d < c; )
        a.f[e++] = b.charCodeAt(d++), e == a.b && (ol(a), e = 0);
    else if (na2(b))
      for (; d < c; ) {
        var f = b[d++];
        if (!(typeof f == "number" && 0 <= f && 255 >= f && f == (f | 0)))
          throw Error("message must be a byte array");
        a.f[e++] = f;
        e == a.b && (ol(a), e = 0);
      }
    else
      throw Error("message must be string or array");
    a.c = e;
    a.g += c;
  }
  var jl = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ];
  function ql() {
    gl.call(this, 8, rl);
  }
  r2(ql, gl);
  var rl = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
  function sl(a, b, c, d, e, f) {
    this.v = a;
    this.i = b;
    this.l = c;
    this.m = d || null;
    this.u = e || null;
    this.s = f;
    this.h = b + ":" + c;
    this.C = new el();
    this.g = new bl(this.h);
    this.f = null;
    this.b = [];
    this.a = this.c = null;
  }
  function tl(a) {
    return new t2("invalid-cordova-configuration", a);
  }
  k2 = sl.prototype;
  k2.ma = function() {
    return this.Ia ? this.Ia : this.Ia = Fe2().then(function() {
      if (typeof L2("universalLinks.subscribe", l) !== "function")
        throw tl("cordova-universal-links-plugin-fix is not installed");
      if (typeof L2("BuildInfo.packageName", l) === "undefined")
        throw tl("cordova-plugin-buildinfo is not installed");
      if (typeof L2("cordova.plugins.browsertab.openUrl", l) !== "function")
        throw tl("cordova-plugin-browsertab is not installed");
      if (typeof L2("cordova.InAppBrowser.open", l) !== "function")
        throw tl("cordova-plugin-inappbrowser is not installed");
    }, function() {
      throw new t2("cordova-not-ready");
    });
  };
  function ul() {
    for (var a = 20, b = []; 0 < a; )
      b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
    return b.join("");
  }
  function vl(a) {
    var b = new ql();
    pl(b, a);
    a = [];
    var c = 8 * b.g;
    56 > b.c ? pl(b, nl, 56 - b.c) : pl(b, nl, b.b - (b.c - 56));
    for (var d = 63; 56 <= d; d--)
      b.f[d] = c & 255, c /= 256;
    ol(b);
    for (d = c = 0; d < b.i; d++)
      for (var e = 24; 0 <= e; e -= 8)
        a[c++] = b.a[d] >> e & 255;
    return cg(a);
  }
  k2.Ob = function(a, b) {
    b(new t2("operation-not-supported-in-this-environment"));
    return E2();
  };
  k2.Mb = function() {
    return F2(new t2("operation-not-supported-in-this-environment"));
  };
  k2.$b = function() {
    return false;
  };
  k2.Xb = function() {
    return true;
  };
  k2.Tb = function() {
    return true;
  };
  k2.Nb = function(a, b, c, d) {
    if (this.c)
      return F2(new t2("redirect-operation-pending"));
    var e = this, f = l.document, g = null, h2 = null, m = null, p2 = null;
    return this.c = E2().then(function() {
      rh(b);
      return wl(e);
    }).then(function() {
      return xl(e, a, b, c, d);
    }).then(function() {
      return new D2(function(v2, B2) {
        h2 = function() {
          var A2 = L2("cordova.plugins.browsertab.close", l);
          v2();
          typeof A2 === "function" && A2();
          e.a && typeof e.a.close === "function" && (e.a.close(), e.a = null);
          return false;
        };
        e.Ea(h2);
        m = function() {
          g || (g = Fd2(2e3).then(function() {
            B2(new t2("redirect-cancelled-by-user"));
          }));
        };
        p2 = function() {
          $e2() && m();
        };
        f.addEventListener("resume", m, false);
        K2().toLowerCase().match(/android/) || f.addEventListener("visibilitychange", p2, false);
      }).o(function(v2) {
        return yl(e).then(function() {
          throw v2;
        });
      });
    }).oa(function() {
      m && f.removeEventListener("resume", m, false);
      p2 && f.removeEventListener("visibilitychange", p2, false);
      g && g.cancel();
      h2 && e.Sa(h2);
      e.c = null;
    });
  };
  function xl(a, b, c, d, e) {
    var f = ul(), g = new sh(b, d, null, f, new t2("no-auth-event"), null, e), h2 = L2("BuildInfo.packageName", l);
    if (typeof h2 !== "string")
      throw new t2("invalid-cordova-configuration");
    var m = L2("BuildInfo.displayName", l), p2 = {};
    if (K2().toLowerCase().match(/iphone|ipad|ipod/))
      p2.ibi = h2;
    else if (K2().toLowerCase().match(/android/))
      p2.apn = h2;
    else
      return F2(new t2("operation-not-supported-in-this-environment"));
    m && (p2.appDisplayName = m);
    f = vl(f);
    p2.sessionId = f;
    var v2 = ek(a.v, a.i, a.l, b, c, null, d, a.m, p2, a.u, e, a.s);
    return a.ma().then(function() {
      var B2 = a.h;
      return a.C.a.set(cl, g.w(), B2);
    }).then(function() {
      var B2 = L2("cordova.plugins.browsertab.isAvailable", l);
      if (typeof B2 !== "function")
        throw new t2("invalid-cordova-configuration");
      var A2 = null;
      B2(function(Q2) {
        if (Q2) {
          A2 = L2("cordova.plugins.browsertab.openUrl", l);
          if (typeof A2 !== "function")
            throw new t2("invalid-cordova-configuration");
          A2(v2);
        } else {
          A2 = L2("cordova.InAppBrowser.open", l);
          if (typeof A2 !== "function")
            throw new t2("invalid-cordova-configuration");
          Q2 = K2();
          a.a = A2(v2, Q2.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || Q2.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes");
        }
      });
    });
  }
  function zl(a, b) {
    for (var c = 0; c < a.b.length; c++)
      try {
        a.b[c](b);
      } catch (d) {
      }
  }
  function wl(a) {
    a.f || (a.f = a.ma().then(function() {
      return new D2(function(b) {
        function c(d) {
          b(d);
          a.Sa(c);
          return false;
        }
        a.Ea(c);
        Al(a);
      });
    }));
    return a.f;
  }
  function yl(a) {
    var b = null;
    return dl(a.g).then(function(c) {
      b = c;
      c = a.g;
      return Zk(c.b, cl, c.a);
    }).then(function() {
      return b;
    });
  }
  function Al(a) {
    function b(g) {
      d = true;
      e && e.cancel();
      yl(a).then(function(h2) {
        var m = c;
        if (h2 && g && g.url) {
          var p2 = null;
          m = xg(g.url);
          m.indexOf("/__/auth/callback") != -1 && (p2 = J2(m), p2 = We2(be2(p2, "firebaseError") || null), p2 = (p2 = typeof p2 === "object" ? Aa2(p2) : null) ? new sh(h2.c, h2.b, null, null, p2, null, h2.T()) : new sh(h2.c, h2.b, m, h2.f, null, null, h2.T()));
          m = p2 || c;
        }
        zl(a, m);
      });
    }
    var c = new sh("unknown", null, null, null, new t2("no-auth-event")), d = false, e = Fd2(500).then(function() {
      return yl(a).then(function() {
        d || zl(a, c);
      });
    }), f = l.handleOpenURL;
    l.handleOpenURL = function(g) {
      g.toLowerCase().indexOf(L2("BuildInfo.packageName", l).toLowerCase() + "://") == 0 && b({ url: g });
      if (typeof f === "function")
        try {
          f(g);
        } catch (h2) {
          console.error(h2);
        }
    };
    vh || (vh = new uh());
    wh(b);
  }
  k2.Ea = function(a) {
    this.b.push(a);
    wl(this).o(function(b) {
      b.code === "auth/invalid-cordova-configuration" && (b = new sh("unknown", null, null, null, new t2("no-auth-event")), a(b));
    });
  };
  k2.Sa = function(a) {
    Xa2(this.b, function(b) {
      return b == a;
    });
  };
  function Bl(a) {
    this.a = a;
    this.b = Vk();
  }
  var Cl = { name: "pendingRedirect", F: "session" };
  function Dl(a) {
    return a.b.set(Cl, "pending", a.a);
  }
  function El(a) {
    return Zk(a.b, Cl, a.a);
  }
  function Fl(a) {
    return a.b.get(Cl, a.a).then(function(b) {
      return b == "pending";
    });
  }
  function Gl(a, b, c, d) {
    this.i = {};
    this.u = 0;
    this.D = a;
    this.v = b;
    this.m = c;
    this.J = d;
    this.h = [];
    this.f = false;
    this.l = q2(this.s, this);
    this.b = new Hl();
    this.C = new Il();
    this.g = new Bl(Jl(this.v, this.m));
    this.c = {};
    this.c.unknown = this.b;
    this.c.signInViaRedirect = this.b;
    this.c.linkViaRedirect = this.b;
    this.c.reauthViaRedirect = this.b;
    this.c.signInViaPopup = this.C;
    this.c.linkViaPopup = this.C;
    this.c.reauthViaPopup = this.C;
    this.a = Kl(this.D, this.v, this.m, Da2, this.J);
  }
  function Kl(a, b, c, d, e) {
    var f = firebase$1$1.SDK_VERSION || null;
    return Ge2() ? new sl(a, b, c, f, d, e) : new Yj(a, b, c, f, d, e);
  }
  Gl.prototype.reset = function() {
    this.f = false;
    this.a.Sa(this.l);
    this.a = Kl(this.D, this.v, this.m, null, this.J);
    this.i = {};
  };
  function Ll(a) {
    a.f || (a.f = true, a.a.Ea(a.l));
    var b = a.a;
    return a.a.ma().o(function(c) {
      a.a == b && a.reset();
      throw c;
    });
  }
  function Ml(a) {
    a.a.Xb() && Ll(a).o(function(b) {
      var c = new sh("unknown", null, null, null, new t2("operation-not-supported-in-this-environment"));
      Nl(b) && a.s(c);
    });
    a.a.Tb() || Ol(a.b);
  }
  function Pl(a, b) {
    Va2(a.h, b) || a.h.push(b);
    a.f || Fl(a.g).then(function(c) {
      c ? El(a.g).then(function() {
        Ll(a).o(function(d) {
          var e = new sh("unknown", null, null, null, new t2("operation-not-supported-in-this-environment"));
          Nl(d) && a.s(e);
        });
      }) : Ml(a);
    }).o(function() {
      Ml(a);
    });
  }
  function Ql(a, b) {
    Xa2(a.h, function(c) {
      return c == b;
    });
  }
  Gl.prototype.s = function(a) {
    if (!a)
      throw new t2("invalid-auth-event");
    6e5 <= va2() - this.u && (this.i = {}, this.u = 0);
    if (a && a.getUid() && this.i.hasOwnProperty(a.getUid()))
      return false;
    for (var b = false, c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      if (d.Fb(a.c, a.b)) {
        if (b = this.c[a.c])
          b.h(a, d), a && (a.f || a.b) && (this.i[a.getUid()] = true, this.u = va2());
        b = true;
        break;
      }
    }
    Ol(this.b);
    return b;
  };
  var Rl = new Ze2(2e3, 1e4), Sl = new Ze2(3e4, 6e4);
  Gl.prototype.qa = function() {
    return this.b.qa();
  };
  function Tl(a, b, c, d, e, f, g) {
    return a.a.Mb(b, c, d, function() {
      a.f || (a.f = true, a.a.Ea(a.l));
    }, function() {
      a.reset();
    }, e, f, g);
  }
  function Nl(a) {
    return a && a.code == "auth/cordova-not-ready" ? true : false;
  }
  function Ul(a, b, c, d, e) {
    var f;
    return Dl(a.g).then(function() {
      return a.a.Nb(b, c, d, e).o(function(g) {
        if (Nl(g))
          throw new t2("operation-not-supported-in-this-environment");
        f = g;
        return El(a.g).then(function() {
          throw f;
        });
      }).then(function() {
        return a.a.$b() ? new D2(function() {
        }) : El(a.g).then(function() {
          return a.qa();
        }).then(function() {
        }).o(function() {
        });
      });
    });
  }
  function Vl(a, b, c, d, e) {
    return a.a.Ob(d, function(f) {
      b.na(c, null, f, e);
    }, Rl.get());
  }
  var Wl = {};
  function Jl(a, b, c) {
    a = a + ":" + b;
    c && (a = a + ":" + c.url);
    return a;
  }
  function Xl(a, b, c, d) {
    var e = Jl(b, c, d);
    Wl[e] || (Wl[e] = new Gl(a, b, c, d));
    return Wl[e];
  }
  function Hl() {
    this.b = null;
    this.f = [];
    this.c = [];
    this.a = null;
    this.i = this.g = false;
  }
  Hl.prototype.reset = function() {
    this.b = null;
    this.a && (this.a.cancel(), this.a = null);
  };
  Hl.prototype.h = function(a, b) {
    if (a) {
      this.reset();
      this.g = true;
      var c = a.c, d = a.b, e = a.a && a.a.code == "auth/web-storage-unsupported", f = a.a && a.a.code == "auth/operation-not-supported-in-this-environment";
      this.i = !(!e && !f);
      c != "unknown" || e || f ? a.a ? (Yl(this, true, null, a.a), E2()) : b.Fa(c, d) ? Zl(this, a, b) : F2(new t2("invalid-auth-event")) : (Yl(this, false, null, null), E2());
    } else
      F2(new t2("invalid-auth-event"));
  };
  function Ol(a) {
    a.g || (a.g = true, Yl(a, false, null, null));
  }
  function $l(a) {
    a.g && !a.i && Yl(a, false, null, null);
  }
  function Zl(a, b, c) {
    c = c.Fa(b.c, b.b);
    var d = b.g, e = b.f, f = b.i, g = b.T(), h2 = !!b.c.match(/Redirect$/);
    c(d, e, g, f).then(function(m) {
      Yl(a, h2, m, null);
    }).o(function(m) {
      Yl(a, h2, null, m);
    });
  }
  function am(a, b) {
    a.b = function() {
      return F2(b);
    };
    if (a.c.length)
      for (var c = 0; c < a.c.length; c++)
        a.c[c](b);
  }
  function bm(a, b) {
    a.b = function() {
      return E2(b);
    };
    if (a.f.length)
      for (var c = 0; c < a.f.length; c++)
        a.f[c](b);
  }
  function Yl(a, b, c, d) {
    b ? d ? am(a, d) : bm(a, c) : bm(a, { user: null });
    a.f = [];
    a.c = [];
  }
  Hl.prototype.qa = function() {
    var a = this;
    return new D2(function(b, c) {
      a.b ? a.b().then(b, c) : (a.f.push(b), a.c.push(c), cm(a));
    });
  };
  function cm(a) {
    var b = new t2("timeout");
    a.a && a.a.cancel();
    a.a = Fd2(Sl.get()).then(function() {
      a.b || (a.g = true, Yl(a, true, null, b));
    });
  }
  function Il() {
  }
  Il.prototype.h = function(a, b) {
    if (a) {
      var c = a.c, d = a.b;
      a.a ? (b.na(a.c, null, a.a, a.b), E2()) : b.Fa(c, d) ? dm(a, b) : F2(new t2("invalid-auth-event"));
    } else
      F2(new t2("invalid-auth-event"));
  };
  function dm(a, b) {
    var c = a.b, d = a.c;
    b.Fa(d, c)(a.g, a.f, a.T(), a.i).then(function(e) {
      b.na(d, e, null, c);
    }).o(function(e) {
      b.na(d, null, e, c);
    });
  }
  function em() {
    this.ib = false;
    Object.defineProperty(this, "appVerificationDisabled", { get: function() {
      return this.ib;
    }, set: function(a) {
      this.ib = a;
    }, enumerable: false });
  }
  function fm(a, b) {
    this.a = b;
    M2(this, "verificationId", a);
  }
  fm.prototype.confirm = function(a) {
    a = ph(this.verificationId, a);
    return this.a(a);
  };
  function gm(a, b, c, d) {
    return new lh(a).fb(b, c).then(function(e) {
      return new fm(e, d);
    });
  }
  function hm(a) {
    var b = ig(a);
    if (!(b && b.exp && b.auth_time && b.iat))
      throw new t2("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
    N2(this, { token: a, expirationTime: bf(1e3 * b.exp), authTime: bf(1e3 * b.auth_time), issuedAtTime: bf(1e3 * b.iat), signInProvider: b.firebase && b.firebase.sign_in_provider ? b.firebase.sign_in_provider : null, signInSecondFactor: b.firebase && b.firebase.sign_in_second_factor ? b.firebase.sign_in_second_factor : null, claims: b });
  }
  function im(a, b, c) {
    var d = b && b[jm];
    if (!d)
      throw new t2("argument-error", "Internal assert: Invalid MultiFactorResolver");
    this.a = a;
    this.f = nb2(b);
    this.g = c;
    this.c = new yg(null, d);
    this.b = [];
    var e = this;
    w2(b[km] || [], function(f) {
      (f = tf(f)) && e.b.push(f);
    });
    M2(this, "auth", this.a);
    M2(this, "session", this.c);
    M2(this, "hints", this.b);
  }
  var km = "mfaInfo", jm = "mfaPendingCredential";
  im.prototype.Rc = function(a) {
    var b = this;
    return a.sb(this.a.a, this.c).then(function(c) {
      var d = nb2(b.f);
      delete d[km];
      delete d[jm];
      z2(d, c);
      return b.g(d);
    });
  };
  function lm(a, b, c, d) {
    t2.call(this, "multi-factor-auth-required", d, b);
    this.b = new im(a, b, c);
    M2(this, "resolver", this.b);
  }
  r2(lm, t2);
  function mm(a, b, c) {
    if (a && n2(a.serverResponse) && a.code === "auth/multi-factor-auth-required")
      try {
        return new lm(b, a.serverResponse, c, a.message);
      } catch (d) {
      }
    return null;
  }
  function nm() {
  }
  nm.prototype.sb = function(a, b, c) {
    return b.type == zg ? om(this, a, b, c) : pm(this, a, b);
  };
  function om(a, b, c, d) {
    return c.Ha().then(function(e) {
      e = { idToken: e };
      typeof d !== "undefined" && (e.displayName = d);
      z2(e, { phoneVerificationInfo: hh(a.a) });
      return O2(b, Gj, e);
    });
  }
  function pm(a, b, c) {
    return c.Ha().then(function(d) {
      d = { mfaPendingCredential: d };
      z2(d, { phoneVerificationInfo: hh(a.a) });
      return O2(b, Hj, d);
    });
  }
  function qm(a) {
    M2(this, "factorId", a.fa);
    this.a = a;
  }
  r2(qm, nm);
  function rm(a) {
    qm.call(this, a);
    if (this.a.fa != lh.PROVIDER_ID)
      throw new t2("argument-error", "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");
  }
  r2(rm, qm);
  function sm(a, b) {
    G2.call(this, a);
    for (var c in b)
      this[c] = b[c];
  }
  r2(sm, G2);
  function tm(a, b) {
    this.a = a;
    this.b = [];
    this.c = q2(this.yc, this);
    nd2(this.a, "userReloaded", this.c);
    var c = [];
    b && b.multiFactor && b.multiFactor.enrolledFactors && w2(b.multiFactor.enrolledFactors, function(d) {
      var e = null, f = {};
      if (d) {
        d.uid && (f[qf] = d.uid);
        d.displayName && (f[rf] = d.displayName);
        d.enrollmentTime && (f[sf] = new Date(d.enrollmentTime).toISOString());
        d.phoneNumber && (f[pf] = d.phoneNumber);
        try {
          e = new uf(f);
        } catch (g) {
        }
        d = e;
      } else
        d = null;
      d && c.push(d);
    });
    um(this, c);
  }
  function vm(a) {
    var b = [];
    w2(a.mfaInfo || [], function(c) {
      (c = tf(c)) && b.push(c);
    });
    return b;
  }
  k2 = tm.prototype;
  k2.yc = function(a) {
    um(this, vm(a.hd));
  };
  function um(a, b) {
    a.b = b;
    M2(a, "enrolledFactors", b);
  }
  k2.Rb = function() {
    return this.a.I().then(function(a) {
      return new yg(a, null);
    });
  };
  k2.fc = function(a, b) {
    var c = this, d = this.a.a;
    return this.Rb().then(function(e) {
      return a.sb(d, e, b);
    }).then(function(e) {
      wm(c.a, e);
      return c.a.reload();
    });
  };
  k2.bd = function(a) {
    var b = this, c = typeof a === "string" ? a : a.uid, d = this.a.a;
    return this.a.I().then(function(e) {
      return O2(d, Lj, { idToken: e, mfaEnrollmentId: c });
    }).then(function(e) {
      var f = Qa2(b.b, function(g) {
        return g.uid != c;
      });
      um(b, f);
      wm(b.a, e);
      return b.a.reload().o(function(g) {
        if (g.code != "auth/user-token-expired")
          throw g;
      });
    });
  };
  k2.w = function() {
    return { multiFactor: { enrolledFactors: Ra2(this.b, function(a) {
      return a.w();
    }) } };
  };
  function xm(a, b, c) {
    this.h = a;
    this.i = b;
    this.g = c;
    this.c = 3e4;
    this.f = 96e4;
    this.b = null;
    this.a = this.c;
    if (this.f < this.c)
      throw Error("Proactive refresh lower bound greater than upper bound!");
  }
  xm.prototype.start = function() {
    this.a = this.c;
    ym(this, true);
  };
  function zm(a, b) {
    if (b)
      return a.a = a.c, a.g();
    b = a.a;
    a.a *= 2;
    a.a > a.f && (a.a = a.f);
    return b;
  }
  function ym(a, b) {
    a.stop();
    a.b = Fd2(zm(a, b)).then(function() {
      return af();
    }).then(function() {
      return a.h();
    }).then(function() {
      ym(a, true);
    }).o(function(c) {
      a.i(c) && ym(a, false);
    });
  }
  xm.prototype.stop = function() {
    this.b && (this.b.cancel(), this.b = null);
  };
  function Am(a) {
    this.f = a;
    this.b = this.a = null;
    this.c = Date.now();
  }
  Am.prototype.w = function() {
    return { apiKey: this.f.c, refreshToken: this.a, accessToken: this.b && this.b.toString(), expirationTime: this.c };
  };
  function Bm(a, b) {
    typeof b === "undefined" && (a.b ? (b = a.b, b = b.a - b.g) : b = 0);
    a.c = Date.now() + 1e3 * b;
  }
  function Cm(a, b) {
    a.b = jg(b[Dg] || "");
    a.a = b.refreshToken;
    b = b.expiresIn;
    Bm(a, typeof b !== "undefined" ? Number(b) : void 0);
  }
  function Dm(a, b) {
    a.b = b.b;
    a.a = b.a;
    a.c = b.c;
  }
  function Em(a, b) {
    return Wi(a.f, b).then(function(c) {
      a.b = jg(c.access_token);
      a.a = c.refresh_token;
      Bm(a, c.expires_in);
      return { accessToken: a.b.toString(), refreshToken: a.a };
    }).o(function(c) {
      c.code == "auth/user-token-expired" && (a.a = null);
      throw c;
    });
  }
  Am.prototype.getToken = function(a) {
    a = !!a;
    return this.b && !this.a ? F2(new t2("user-token-expired")) : a || !this.b || Date.now() > this.c - 3e4 ? this.a ? Em(this, { grant_type: "refresh_token", refresh_token: this.a }) : E2(null) : E2({ accessToken: this.b.toString(), refreshToken: this.a });
  };
  function Fm(a, b) {
    this.a = a || null;
    this.b = b || null;
    N2(this, { lastSignInTime: bf(b || null), creationTime: bf(a || null) });
  }
  function Gm(a) {
    return new Fm(a.a, a.b);
  }
  Fm.prototype.w = function() {
    return { lastLoginAt: this.b, createdAt: this.a };
  };
  function Hm(a, b, c, d, e, f) {
    N2(this, { uid: a, displayName: d || null, photoURL: e || null, email: c || null, phoneNumber: f || null, providerId: b });
  }
  function Im(a, b, c) {
    this.J = [];
    this.l = a.apiKey;
    this.m = a.appName;
    this.s = a.authDomain || null;
    var d = firebase$1$1.SDK_VERSION ? Oe2(firebase$1$1.SDK_VERSION) : null;
    this.a = new Ii2(this.l, Ca2(Da2), d);
    a.emulatorConfig && Pi2(this.a, a.emulatorConfig);
    this.b = new Am(this.a);
    Jm(this, b[Dg]);
    Cm(this.b, b);
    M2(this, "refreshToken", this.b.a);
    Km(this, c || {});
    H2.call(this);
    this.R = false;
    this.s && Re2() && (this.i = Xl(this.s, this.l, this.m));
    this.S = [];
    this.h = null;
    this.u = Lm(this);
    this.aa = q2(this.hb, this);
    var e = this;
    this.ya = null;
    this.Oa = function(f) {
      e.wa(f.h);
    };
    this.ja = null;
    this.Aa = function(f) {
      Pi2(e.a, f.c);
    };
    this.X = null;
    this.$ = [];
    this.Ba = function(f) {
      Mm(e, f.f);
    };
    this.ba = null;
    this.O = new tm(this, c);
    M2(this, "multiFactor", this.O);
  }
  r2(Im, H2);
  Im.prototype.wa = function(a) {
    this.ya = a;
    Oi2(this.a, a);
  };
  Im.prototype.la = function() {
    return this.ya;
  };
  function Nm(a, b) {
    a.ja && xd2(a.ja, "languageCodeChanged", a.Oa);
    (a.ja = b) && nd2(b, "languageCodeChanged", a.Oa);
  }
  function Om(a, b) {
    a.X && xd2(a.X, "emulatorConfigChanged", a.Aa);
    (a.X = b) && nd2(b, "emulatorConfigChanged", a.Aa);
  }
  function Mm(a, b) {
    a.$ = b;
    Ri2(a.a, firebase$1$1.SDK_VERSION ? Oe2(firebase$1$1.SDK_VERSION, a.$) : null);
  }
  Im.prototype.Ga = function() {
    return Za2(this.$);
  };
  function Pm(a, b) {
    a.ba && xd2(a.ba, "frameworkChanged", a.Ba);
    (a.ba = b) && nd2(b, "frameworkChanged", a.Ba);
  }
  Im.prototype.hb = function() {
    this.u.b && (this.u.stop(), this.u.start());
  };
  function Qm(a) {
    try {
      return firebase$1$1.app(a.m).auth();
    } catch (b) {
      throw new t2("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + a.m + "'!");
    }
  }
  function Lm(a) {
    return new xm(function() {
      return a.I(true);
    }, function(b) {
      return b && b.code == "auth/network-request-failed" ? true : false;
    }, function() {
      var b = a.b.c - Date.now() - 3e5;
      return 0 < b ? b : 0;
    });
  }
  function Rm(a) {
    a.D || a.u.b || (a.u.start(), xd2(a, "tokenChanged", a.aa), nd2(a, "tokenChanged", a.aa));
  }
  function Sm(a) {
    xd2(a, "tokenChanged", a.aa);
    a.u.stop();
  }
  function Jm(a, b) {
    a.za = b;
    M2(a, "_lat", b);
  }
  function Tm(a, b) {
    Xa2(a.S, function(c) {
      return c == b;
    });
  }
  function Um(a) {
    for (var b = [], c = 0; c < a.S.length; c++)
      b.push(a.S[c](a));
    return Jc2(b).then(function() {
      return a;
    });
  }
  function Vm(a) {
    a.i && !a.R && (a.R = true, Pl(a.i, a));
  }
  function Km(a, b) {
    N2(a, { uid: b.uid, displayName: b.displayName || null, photoURL: b.photoURL || null, email: b.email || null, emailVerified: b.emailVerified || false, phoneNumber: b.phoneNumber || null, isAnonymous: b.isAnonymous || false, tenantId: b.tenantId || null, metadata: new Fm(b.createdAt, b.lastLoginAt), providerData: [] });
    a.a.b = a.tenantId;
  }
  M2(Im.prototype, "providerId", "firebase");
  function Wm() {
  }
  function Xm(a) {
    return E2().then(function() {
      if (a.D)
        throw new t2("app-deleted");
    });
  }
  function Ym(a) {
    return Ra2(a.providerData, function(b) {
      return b.providerId;
    });
  }
  function Zm(a, b) {
    b && ($m(a, b.providerId), a.providerData.push(b));
  }
  function $m(a, b) {
    Xa2(a.providerData, function(c) {
      return c.providerId == b;
    });
  }
  function an2(a, b, c) {
    (b != "uid" || c) && a.hasOwnProperty(b) && M2(a, b, c);
  }
  function bn2(a, b) {
    a != b && (N2(a, { uid: b.uid, displayName: b.displayName, photoURL: b.photoURL, email: b.email, emailVerified: b.emailVerified, phoneNumber: b.phoneNumber, isAnonymous: b.isAnonymous, tenantId: b.tenantId, providerData: [] }), b.metadata ? M2(a, "metadata", Gm(b.metadata)) : M2(a, "metadata", new Fm()), w2(b.providerData, function(c) {
      Zm(a, c);
    }), Dm(a.b, b.b), M2(a, "refreshToken", a.b.a), um(a.O, b.O.b));
  }
  k2 = Im.prototype;
  k2.reload = function() {
    var a = this;
    return R2(this, Xm(this).then(function() {
      return cn2(a).then(function() {
        return Um(a);
      }).then(Wm);
    }));
  };
  function cn2(a) {
    return a.I().then(function(b) {
      var c = a.isAnonymous;
      return dn2(a, b).then(function() {
        c || an2(a, "isAnonymous", false);
        return b;
      });
    });
  }
  k2.oc = function(a) {
    return this.I(a).then(function(b) {
      return new hm(b);
    });
  };
  k2.I = function(a) {
    var b = this;
    return R2(this, Xm(this).then(function() {
      return b.b.getToken(a);
    }).then(function(c) {
      if (!c)
        throw new t2("internal-error");
      c.accessToken != b.za && (Jm(b, c.accessToken), b.dispatchEvent(new sm("tokenChanged")));
      an2(b, "refreshToken", c.refreshToken);
      return c.accessToken;
    }));
  };
  function wm(a, b) {
    b[Dg] && a.za != b[Dg] && (Cm(a.b, b), a.dispatchEvent(new sm("tokenChanged")), Jm(a, b[Dg]), an2(a, "refreshToken", a.b.a));
  }
  function dn2(a, b) {
    return O2(a.a, Ij, { idToken: b }).then(q2(a.Kc, a));
  }
  k2.Kc = function(a) {
    a = a.users;
    if (!a || !a.length)
      throw new t2("internal-error");
    a = a[0];
    Km(this, { uid: a.localId, displayName: a.displayName, photoURL: a.photoUrl, email: a.email, emailVerified: !!a.emailVerified, phoneNumber: a.phoneNumber, lastLoginAt: a.lastLoginAt, createdAt: a.createdAt, tenantId: a.tenantId });
    for (var b = en2(a), c = 0; c < b.length; c++)
      Zm(this, b[c]);
    an2(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
    this.dispatchEvent(new sm("userReloaded", { hd: a }));
  };
  function en2(a) {
    return (a = a.providerUserInfo) && a.length ? Ra2(a, function(b) {
      return new Hm(b.rawId, b.providerId, b.email, b.displayName, b.photoUrl, b.phoneNumber);
    }) : [];
  }
  k2.Lc = function(a) {
    gf("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");
    return this.tb(a);
  };
  k2.tb = function(a) {
    var b = this, c = null;
    return R2(this, a.c(this.a, this.uid).then(function(d) {
      wm(b, d);
      c = fn2(b, d, "reauthenticate");
      b.h = null;
      return b.reload();
    }).then(function() {
      return c;
    }), true);
  };
  function gn2(a, b) {
    return cn2(a).then(function() {
      if (Va2(Ym(a), b))
        return Um(a).then(function() {
          throw new t2("provider-already-linked");
        });
    });
  }
  k2.Cc = function(a) {
    gf("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");
    return this.qb(a);
  };
  k2.qb = function(a) {
    var b = this, c = null;
    return R2(this, gn2(this, a.providerId).then(function() {
      return b.I();
    }).then(function(d) {
      return a.b(b.a, d);
    }).then(function(d) {
      c = fn2(b, d, "link");
      return hn2(b, d);
    }).then(function() {
      return c;
    }));
  };
  k2.Dc = function(a, b) {
    var c = this;
    return R2(this, gn2(this, "phone").then(function() {
      return gm(Qm(c), a, b, q2(c.qb, c));
    }));
  };
  k2.Mc = function(a, b) {
    var c = this;
    return R2(this, E2().then(function() {
      return gm(Qm(c), a, b, q2(c.tb, c));
    }), true);
  };
  function fn2(a, b, c) {
    var d = qh(b);
    b = og(b);
    return kf({ user: a, credential: d, additionalUserInfo: b, operationType: c });
  }
  function hn2(a, b) {
    wm(a, b);
    return a.reload().then(function() {
      return a;
    });
  }
  k2.Bb = function(a) {
    var b = this;
    return R2(this, this.I().then(function(c) {
      return b.a.Bb(c, a);
    }).then(function(c) {
      wm(b, c);
      return b.reload();
    }));
  };
  k2.ed = function(a) {
    var b = this;
    return R2(this, this.I().then(function(c) {
      return a.b(b.a, c);
    }).then(function(c) {
      wm(b, c);
      return b.reload();
    }));
  };
  k2.Cb = function(a) {
    var b = this;
    return R2(this, this.I().then(function(c) {
      return b.a.Cb(c, a);
    }).then(function(c) {
      wm(b, c);
      return b.reload();
    }));
  };
  k2.Db = function(a) {
    if (a.displayName === void 0 && a.photoURL === void 0)
      return Xm(this);
    var b = this;
    return R2(this, this.I().then(function(c) {
      return b.a.Db(c, { displayName: a.displayName, photoUrl: a.photoURL });
    }).then(function(c) {
      wm(b, c);
      an2(b, "displayName", c.displayName || null);
      an2(b, "photoURL", c.photoUrl || null);
      w2(b.providerData, function(d) {
        d.providerId === "password" && (M2(d, "displayName", b.displayName), M2(d, "photoURL", b.photoURL));
      });
      return Um(b);
    }).then(Wm));
  };
  k2.cd = function(a) {
    var b = this;
    return R2(this, cn2(this).then(function(c) {
      return Va2(Ym(b), a) ? rj(b.a, c, [a]).then(function(d) {
        var e = {};
        w2(d.providerUserInfo || [], function(f) {
          e[f.providerId] = true;
        });
        w2(Ym(b), function(f) {
          e[f] || $m(b, f);
        });
        e[lh.PROVIDER_ID] || M2(b, "phoneNumber", null);
        return Um(b);
      }) : Um(b).then(function() {
        throw new t2("no-such-provider");
      });
    }));
  };
  k2.delete = function() {
    var a = this;
    return R2(this, this.I().then(function(b) {
      return O2(a.a, Fj, { idToken: b });
    }).then(function() {
      a.dispatchEvent(new sm("userDeleted"));
    })).then(function() {
      for (var b = 0; b < a.J.length; b++)
        a.J[b].cancel("app-deleted");
      Nm(a, null);
      Om(a, null);
      Pm(a, null);
      a.J = [];
      a.D = true;
      Sm(a);
      M2(a, "refreshToken", null);
      a.i && Ql(a.i, a);
    });
  };
  k2.Fb = function(a, b) {
    return a == "linkViaPopup" && (this.g || null) == b && this.f || a == "reauthViaPopup" && (this.g || null) == b && this.f || a == "linkViaRedirect" && (this.ga || null) == b || a == "reauthViaRedirect" && (this.ga || null) == b ? true : false;
  };
  k2.na = function(a, b, c, d) {
    a != "linkViaPopup" && a != "reauthViaPopup" || d != (this.g || null) || (c && this.C ? this.C(c) : b && !c && this.f && this.f(b), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.C);
  };
  k2.Fa = function(a, b) {
    return a == "linkViaPopup" && b == (this.g || null) ? q2(this.Kb, this) : a == "reauthViaPopup" && b == (this.g || null) ? q2(this.Lb, this) : a == "linkViaRedirect" && (this.ga || null) == b ? q2(this.Kb, this) : a == "reauthViaRedirect" && (this.ga || null) == b ? q2(this.Lb, this) : null;
  };
  k2.Ec = function(a) {
    var b = this;
    return jn2(this, "linkViaPopup", a, function() {
      return gn2(b, a.providerId).then(function() {
        return Um(b);
      });
    }, false);
  };
  k2.Nc = function(a) {
    return jn2(this, "reauthViaPopup", a, function() {
      return E2();
    }, true);
  };
  function jn2(a, b, c, d, e) {
    if (!Re2())
      return F2(new t2("operation-not-supported-in-this-environment"));
    if (a.h && !e)
      return F2(a.h);
    var f = ng(c.providerId), g = Qe2(a.uid + ":::"), h2 = null;
    (!Te2() || Ie2()) && a.s && c.isOAuthProvider && (h2 = ek(a.s, a.l, a.m, b, c, null, g, firebase$1$1.SDK_VERSION || null, null, null, a.tenantId));
    var m = ze2(h2, f && f.ua, f && f.ta);
    d = d().then(function() {
      kn2(a);
      if (!e)
        return a.I().then(function() {
        });
    }).then(function() {
      return Tl(a.i, m, b, c, g, !!h2, a.tenantId);
    }).then(function() {
      return new D2(function(p2, v2) {
        a.na(b, null, new t2("cancelled-popup-request"), a.g || null);
        a.f = p2;
        a.C = v2;
        a.g = g;
        a.c = Vl(a.i, a, b, m, g);
      });
    }).then(function(p2) {
      m && ye2(m);
      return p2 ? kf(p2) : null;
    }).o(function(p2) {
      m && ye2(m);
      throw p2;
    });
    return R2(a, d, e);
  }
  k2.Fc = function(a) {
    var b = this;
    return ln2(this, "linkViaRedirect", a, function() {
      return gn2(b, a.providerId);
    }, false);
  };
  k2.Oc = function(a) {
    return ln2(this, "reauthViaRedirect", a, function() {
      return E2();
    }, true);
  };
  function ln2(a, b, c, d, e) {
    if (!Re2())
      return F2(new t2("operation-not-supported-in-this-environment"));
    if (a.h && !e)
      return F2(a.h);
    var f = null, g = Qe2(a.uid + ":::");
    d = d().then(function() {
      kn2(a);
      if (!e)
        return a.I().then(function() {
        });
    }).then(function() {
      a.ga = g;
      return Um(a);
    }).then(function(h2) {
      a.ha && (h2 = a.ha, h2 = h2.b.set(mn2, a.w(), h2.a));
      return h2;
    }).then(function() {
      return Ul(a.i, b, c, g, a.tenantId);
    }).o(function(h2) {
      f = h2;
      if (a.ha)
        return nn2(a.ha);
      throw f;
    }).then(function() {
      if (f)
        throw f;
    });
    return R2(a, d, e);
  }
  function kn2(a) {
    if (!a.i || !a.R) {
      if (a.i && !a.R)
        throw new t2("internal-error");
      throw new t2("auth-domain-config-required");
    }
  }
  k2.Kb = function(a, b, c, d) {
    var e = this;
    this.c && (this.c.cancel(), this.c = null);
    var f = null;
    c = this.I().then(function(g) {
      return Hg(e.a, { requestUri: a, postBody: d, sessionId: b, idToken: g });
    }).then(function(g) {
      f = fn2(e, g, "link");
      return hn2(e, g);
    }).then(function() {
      return f;
    });
    return R2(this, c);
  };
  k2.Lb = function(a, b, c, d) {
    var e = this;
    this.c && (this.c.cancel(), this.c = null);
    var f = null, g = E2().then(function() {
      return Cg(Ig(e.a, { requestUri: a, sessionId: b, postBody: d, tenantId: c }), e.uid);
    }).then(function(h2) {
      f = fn2(e, h2, "reauthenticate");
      wm(e, h2);
      e.h = null;
      return e.reload();
    }).then(function() {
      return f;
    });
    return R2(this, g, true);
  };
  k2.ub = function(a) {
    var b = this, c = null;
    return R2(this, this.I().then(function(d) {
      c = d;
      return typeof a === "undefined" || mb2(a) ? {} : bg(new Sf(a));
    }).then(function(d) {
      return b.a.ub(c, d);
    }).then(function(d) {
      if (b.email != d)
        return b.reload();
    }).then(function() {
    }));
  };
  k2.Eb = function(a, b) {
    var c = this, d = null;
    return R2(this, this.I().then(function(e) {
      d = e;
      return typeof b === "undefined" || mb2(b) ? {} : bg(new Sf(b));
    }).then(function(e) {
      return c.a.Eb(d, a, e);
    }).then(function(e) {
      if (c.email != e)
        return c.reload();
    }).then(function() {
    }));
  };
  function R2(a, b, c) {
    var d = on2(a, b, c);
    a.J.push(d);
    d.oa(function() {
      Wa2(a.J, d);
    });
    return d.o(function(e) {
      var f = null;
      e && e.code === "auth/multi-factor-auth-required" && (f = mm(e.w(), Qm(a), q2(a.jc, a)));
      throw f || e;
    });
  }
  k2.jc = function(a) {
    var b = null, c = this;
    a = Cg(E2(a), c.uid).then(function(d) {
      b = fn2(c, d, "reauthenticate");
      wm(c, d);
      c.h = null;
      return c.reload();
    }).then(function() {
      return b;
    });
    return R2(this, a, true);
  };
  function on2(a, b, c) {
    return a.h && !c ? (b.cancel(), F2(a.h)) : b.o(function(d) {
      !d || d.code != "auth/user-disabled" && d.code != "auth/user-token-expired" || (a.h || a.dispatchEvent(new sm("userInvalidated")), a.h = d);
      throw d;
    });
  }
  k2.toJSON = function() {
    return this.w();
  };
  k2.w = function() {
    var a = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, phoneNumber: this.phoneNumber, isAnonymous: this.isAnonymous, tenantId: this.tenantId, providerData: [], apiKey: this.l, appName: this.m, authDomain: this.s, stsTokenManager: this.b.w(), redirectEventId: this.ga || null };
    this.metadata && z2(a, this.metadata.w());
    w2(this.providerData, function(b) {
      a.providerData.push(lf(b));
    });
    z2(a, this.O.w());
    return a;
  };
  function pn2(a) {
    if (!a.apiKey)
      return null;
    var b = { apiKey: a.apiKey, authDomain: a.authDomain, appName: a.appName, emulatorConfig: a.emulatorConfig }, c = {};
    if (a.stsTokenManager && a.stsTokenManager.accessToken) {
      c[Dg] = a.stsTokenManager.accessToken;
      c.refreshToken = a.stsTokenManager.refreshToken || null;
      var d = a.stsTokenManager.expirationTime;
      d && (c.expiresIn = (d - Date.now()) / 1e3);
    } else
      return null;
    var e = new Im(b, c, a);
    a.providerData && w2(a.providerData, function(f) {
      f && Zm(e, kf(f));
    });
    a.redirectEventId && (e.ga = a.redirectEventId);
    return e;
  }
  function qn2(a, b, c, d) {
    var e = new Im(a, b);
    c && (e.ha = c);
    d && Mm(e, d);
    return e.reload().then(function() {
      return e;
    });
  }
  function rn2(a, b, c, d) {
    var e = a.b, f = {};
    f[Dg] = e.b && e.b.toString();
    f.refreshToken = e.a;
    b = new Im(b || { apiKey: a.l, authDomain: a.s, appName: a.m }, f);
    c && (b.ha = c);
    d && Mm(b, d);
    bn2(b, a);
    return b;
  }
  function sn2(a) {
    this.a = a;
    this.b = Vk();
  }
  var mn2 = { name: "redirectUser", F: "session" };
  function nn2(a) {
    return Zk(a.b, mn2, a.a);
  }
  function tn2(a, b) {
    return a.b.get(mn2, a.a).then(function(c) {
      c && b && (c.authDomain = b);
      return pn2(c || {});
    });
  }
  function un2(a) {
    this.a = a;
    this.b = Vk();
    this.c = null;
    this.f = vn2(this);
    this.b.addListener(wn2("local"), this.a, q2(this.g, this));
  }
  un2.prototype.g = function() {
    var a = this, b = wn2("local");
    xn2(this, function() {
      return E2().then(function() {
        return a.c && a.c.F != "local" ? a.b.get(b, a.a) : null;
      }).then(function(c) {
        if (c)
          return yn2(a, "local").then(function() {
            a.c = b;
          });
      });
    });
  };
  function yn2(a, b) {
    var c = [], d;
    for (d in Rk)
      Rk[d] !== b && c.push(Zk(a.b, wn2(Rk[d]), a.a));
    c.push(Zk(a.b, zn2, a.a));
    return Ic2(c);
  }
  function vn2(a) {
    var b = wn2("local"), c = wn2("session"), d = wn2("none");
    return Yk(a.b, b, a.a).then(function() {
      return a.b.get(c, a.a);
    }).then(function(e) {
      return e ? c : a.b.get(d, a.a).then(function(f) {
        return f ? d : a.b.get(b, a.a).then(function(g) {
          return g ? b : a.b.get(zn2, a.a).then(function(h2) {
            return h2 ? wn2(h2) : b;
          });
        });
      });
    }).then(function(e) {
      a.c = e;
      return yn2(a, e.F);
    }).o(function() {
      a.c || (a.c = b);
    });
  }
  var zn2 = { name: "persistence", F: "session" };
  function wn2(a) {
    return { name: "authUser", F: a };
  }
  un2.prototype.xb = function(a) {
    var b = null, c = this;
    Sk(a);
    return xn2(this, function() {
      return a != c.c.F ? c.b.get(c.c, c.a).then(function(d) {
        b = d;
        return yn2(c, a);
      }).then(function() {
        c.c = wn2(a);
        if (b)
          return c.b.set(c.c, b, c.a);
      }) : E2();
    });
  };
  function An2(a) {
    return xn2(a, function() {
      return a.b.set(zn2, a.c.F, a.a);
    });
  }
  function Bn2(a, b) {
    return xn2(a, function() {
      return a.b.set(a.c, b.w(), a.a);
    });
  }
  function Cn2(a) {
    return xn2(a, function() {
      return Zk(a.b, a.c, a.a);
    });
  }
  function Dn2(a, b, c) {
    return xn2(a, function() {
      return a.b.get(a.c, a.a).then(function(d) {
        d && b && (d.authDomain = b);
        d && c && (d.emulatorConfig = c);
        return pn2(d || {});
      });
    });
  }
  function xn2(a, b) {
    a.f = a.f.then(b, b);
    return a.f;
  }
  function En2(a) {
    this.l = false;
    M2(this, "settings", new em());
    M2(this, "app", a);
    if (S2(this).options && S2(this).options.apiKey)
      a = firebase$1$1.SDK_VERSION ? Oe2(firebase$1$1.SDK_VERSION) : null, this.a = new Ii2(S2(this).options && S2(this).options.apiKey, Ca2(Da2), a);
    else
      throw new t2("invalid-api-key");
    this.R = [];
    this.s = [];
    this.O = [];
    this.hb = firebase$1$1.INTERNAL.createSubscribe(q2(this.zc, this));
    this.X = void 0;
    this.bc = firebase$1$1.INTERNAL.createSubscribe(q2(this.Ac, this));
    Fn2(this, null);
    this.i = new un2(S2(this).options.apiKey + ":" + S2(this).name);
    this.D = new sn2(S2(this).options.apiKey + ":" + S2(this).name);
    this.$ = T2(this, Gn2(this));
    this.h = T2(this, Hn2(this));
    this.ba = false;
    this.ja = q2(this.Zc, this);
    this.Ba = q2(this.da, this);
    this.ya = q2(this.mc, this);
    this.za = q2(this.wc, this);
    this.Aa = q2(this.xc, this);
    this.b = null;
    In2(this);
    this.INTERNAL = {};
    this.INTERNAL["delete"] = q2(this.delete, this);
    this.INTERNAL.logFramework = q2(this.Gc, this);
    this.u = 0;
    H2.call(this);
    Jn2(this);
    this.J = [];
    this.P = null;
  }
  r2(En2, H2);
  function Kn2(a) {
    G2.call(this, "languageCodeChanged");
    this.h = a;
  }
  r2(Kn2, G2);
  function Ln2(a) {
    G2.call(this, "emulatorConfigChanged");
    this.c = a;
  }
  r2(Ln2, G2);
  function Mn2(a) {
    G2.call(this, "frameworkChanged");
    this.f = a;
  }
  r2(Mn2, G2);
  k2 = En2.prototype;
  k2.xb = function(a) {
    a = this.i.xb(a);
    return T2(this, a);
  };
  k2.wa = function(a) {
    this.aa === a || this.l || (this.aa = a, Oi2(this.a, this.aa), this.dispatchEvent(new Kn2(this.la())));
  };
  k2.la = function() {
    return this.aa;
  };
  k2.fd = function() {
    var a = l.navigator;
    this.wa(a ? a.languages && a.languages[0] || a.language || a.userLanguage || null : null);
  };
  k2.gd = function(a, b) {
    if (!this.P) {
      if (!/^https?:\/\//.test(a))
        throw new t2("argument-error", "Emulator URL must start with a valid scheme (http:// or https://).");
      b = b ? !!b.disableWarnings : false;
      Nn2(b);
      this.P = { url: a, ec: b };
      this.settings.ib = true;
      Pi2(this.a, this.P);
      this.dispatchEvent(new Ln2(this.P));
    }
  };
  function Nn2(a) {
    typeof console !== "undefined" && typeof console.info === "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
    l.document && !a && Ee2().then(function() {
      var b = l.document.createElement("div");
      b.innerText = "Running in emulator mode. Do not use with production credentials.";
      b.style.position = "fixed";
      b.style.width = "100%";
      b.style.backgroundColor = "#ffffff";
      b.style.border = ".1em solid #000000";
      b.style.color = "#ff0000";
      b.style.bottom = "0px";
      b.style.left = "0px";
      b.style.margin = "0px";
      b.style.zIndex = 1e4;
      b.style.textAlign = "center";
      b.classList.add("firebase-emulator-warning");
      l.document.body.appendChild(b);
    });
  }
  k2.Gc = function(a) {
    this.J.push(a);
    Ri2(this.a, firebase$1$1.SDK_VERSION ? Oe2(firebase$1$1.SDK_VERSION, this.J) : null);
    this.dispatchEvent(new Mn2(this.J));
  };
  k2.Ga = function() {
    return Za2(this.J);
  };
  k2.yb = function(a) {
    this.S === a || this.l || (this.S = a, this.a.b = this.S);
  };
  k2.T = function() {
    return this.S;
  };
  function Jn2(a) {
    Object.defineProperty(a, "lc", { get: function() {
      return this.la();
    }, set: function(b) {
      this.wa(b);
    }, enumerable: false });
    a.aa = null;
    Object.defineProperty(a, "ti", { get: function() {
      return this.T();
    }, set: function(b) {
      this.yb(b);
    }, enumerable: false });
    a.S = null;
    Object.defineProperty(a, "emulatorConfig", { get: function() {
      if (this.P) {
        var b = J2(this.P.url);
        b = kf({ protocol: b.c, host: b.a, port: b.g, options: kf({ disableWarnings: this.P.ec }) });
      } else
        b = null;
      return b;
    }, enumerable: false });
  }
  k2.toJSON = function() {
    return { apiKey: S2(this).options.apiKey, authDomain: S2(this).options.authDomain, appName: S2(this).name, currentUser: U2(this) && U2(this).w() };
  };
  function On2(a) {
    return a.Oa || F2(new t2("auth-domain-config-required"));
  }
  function In2(a) {
    var b = S2(a).options.authDomain, c = S2(a).options.apiKey;
    b && Re2() && (a.Oa = a.$.then(function() {
      if (!a.l) {
        a.b = Xl(b, c, S2(a).name, a.P);
        Pl(a.b, a);
        U2(a) && Vm(U2(a));
        if (a.m) {
          Vm(a.m);
          var d = a.m;
          d.wa(a.la());
          Nm(d, a);
          d = a.m;
          Mm(d, a.J);
          Pm(d, a);
          d = a.m;
          Pi2(d.a, a.P);
          Om(d, a);
          a.m = null;
        }
        return a.b;
      }
    }));
  }
  k2.Fb = function(a, b) {
    switch (a) {
      case "unknown":
      case "signInViaRedirect":
        return true;
      case "signInViaPopup":
        return this.g == b && !!this.f;
      default:
        return false;
    }
  };
  k2.na = function(a, b, c, d) {
    a == "signInViaPopup" && this.g == d && (c && this.C ? this.C(c) : b && !c && this.f && this.f(b), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.C);
  };
  k2.Fa = function(a, b) {
    return a == "signInViaRedirect" || a == "signInViaPopup" && this.g == b && this.f ? q2(this.ic, this) : null;
  };
  k2.ic = function(a, b, c, d) {
    var e = this, f = { requestUri: a, postBody: d, sessionId: b, tenantId: c };
    this.c && (this.c.cancel(), this.c = null);
    return e.$.then(function() {
      return Pn2(e, Fg(e.a, f));
    });
  };
  k2.Xc = function(a) {
    if (!Re2())
      return F2(new t2("operation-not-supported-in-this-environment"));
    var b = this, c = ng(a.providerId), d = Qe2(), e = null;
    (!Te2() || Ie2()) && S2(this).options.authDomain && a.isOAuthProvider && (e = ek(S2(this).options.authDomain, S2(this).options.apiKey, S2(this).name, "signInViaPopup", a, null, d, firebase$1$1.SDK_VERSION || null, null, null, this.T(), this.P));
    var f = ze2(e, c && c.ua, c && c.ta);
    c = On2(this).then(function(g) {
      return Tl(g, f, "signInViaPopup", a, d, !!e, b.T());
    }).then(function() {
      return new D2(function(g, h2) {
        b.na("signInViaPopup", null, new t2("cancelled-popup-request"), b.g);
        b.f = g;
        b.C = h2;
        b.g = d;
        b.c = Vl(b.b, b, "signInViaPopup", f, d);
      });
    }).then(function(g) {
      f && ye2(f);
      return g ? kf(g) : null;
    }).o(function(g) {
      f && ye2(f);
      throw g;
    });
    return T2(this, c);
  };
  k2.Yc = function(a) {
    if (!Re2())
      return F2(new t2("operation-not-supported-in-this-environment"));
    var b = this, c = On2(this).then(function() {
      return An2(b.i);
    }).then(function() {
      return Ul(b.b, "signInViaRedirect", a, void 0, b.T());
    });
    return T2(this, c);
  };
  function Qn2(a) {
    if (!Re2())
      return F2(new t2("operation-not-supported-in-this-environment"));
    var b = On2(a).then(function() {
      return a.b.qa();
    }).then(function(c) {
      return c ? kf(c) : null;
    });
    return T2(a, b);
  }
  k2.qa = function() {
    var a = this;
    return Qn2(this).then(function(b) {
      a.b && $l(a.b.b);
      return b;
    }).o(function(b) {
      a.b && $l(a.b.b);
      throw b;
    });
  };
  k2.dd = function(a) {
    if (!a)
      return F2(new t2("null-user"));
    if (this.S != a.tenantId)
      return F2(new t2("tenant-id-mismatch"));
    var b = this, c = {};
    c.apiKey = S2(this).options.apiKey;
    c.authDomain = S2(this).options.authDomain;
    c.appName = S2(this).name;
    var d = rn2(a, c, b.D, b.Ga());
    return T2(this, this.h.then(function() {
      if (S2(b).options.apiKey != a.l)
        return d.reload();
    }).then(function() {
      if (U2(b) && a.uid == U2(b).uid)
        return bn2(U2(b), a), b.da(a);
      Fn2(b, d);
      Vm(d);
      return b.da(d);
    }).then(function() {
      Rn2(b);
    }));
  };
  function Sn2(a, b) {
    var c = {};
    c.apiKey = S2(a).options.apiKey;
    c.authDomain = S2(a).options.authDomain;
    c.appName = S2(a).name;
    a.P && (c.emulatorConfig = a.P);
    return a.$.then(function() {
      return qn2(c, b, a.D, a.Ga());
    }).then(function(d) {
      if (U2(a) && d.uid == U2(a).uid)
        return bn2(U2(a), d), a.da(d);
      Fn2(a, d);
      Vm(d);
      return a.da(d);
    }).then(function() {
      Rn2(a);
    });
  }
  function Fn2(a, b) {
    U2(a) && (Tm(U2(a), a.Ba), xd2(U2(a), "tokenChanged", a.ya), xd2(U2(a), "userDeleted", a.za), xd2(U2(a), "userInvalidated", a.Aa), Sm(U2(a)));
    b && (b.S.push(a.Ba), nd2(b, "tokenChanged", a.ya), nd2(b, "userDeleted", a.za), nd2(b, "userInvalidated", a.Aa), 0 < a.u && Rm(b));
    M2(a, "currentUser", b);
    b && (b.wa(a.la()), Nm(b, a), Mm(b, a.J), Pm(b, a), Pi2(b.a, a.P), Om(b, a));
  }
  k2.Ab = function() {
    var a = this, b = this.h.then(function() {
      a.b && $l(a.b.b);
      if (!U2(a))
        return E2();
      Fn2(a, null);
      return Cn2(a.i).then(function() {
        Rn2(a);
      });
    });
    return T2(this, b);
  };
  function Tn2(a) {
    var b = tn2(a.D, S2(a).options.authDomain).then(function(c) {
      if (a.m = c)
        c.ha = a.D;
      return nn2(a.D);
    });
    return T2(a, b);
  }
  function Gn2(a) {
    var b = S2(a).options.authDomain, c = Tn2(a).then(function() {
      return Dn2(a.i, b, a.P);
    }).then(function(d) {
      return d ? (d.ha = a.D, a.m && (a.m.ga || null) == (d.ga || null) ? d : d.reload().then(function() {
        return Bn2(a.i, d).then(function() {
          return d;
        });
      }).o(function(e) {
        return e.code == "auth/network-request-failed" ? d : Cn2(a.i);
      })) : null;
    }).then(function(d) {
      Fn2(a, d || null);
    });
    return T2(a, c);
  }
  function Hn2(a) {
    return a.$.then(function() {
      return Qn2(a);
    }).o(function() {
    }).then(function() {
      if (!a.l)
        return a.ja();
    }).o(function() {
    }).then(function() {
      if (!a.l) {
        a.ba = true;
        var b = a.i;
        b.b.addListener(wn2("local"), b.a, a.ja);
      }
    });
  }
  k2.Zc = function() {
    var a = this;
    return Dn2(this.i, S2(this).options.authDomain).then(function(b) {
      if (!a.l) {
        var c;
        if (c = U2(a) && b) {
          c = U2(a).uid;
          var d = b.uid;
          c = c === void 0 || c === null || c === "" || d === void 0 || d === null || d === "" ? false : c == d;
        }
        if (c)
          return bn2(U2(a), b), U2(a).I();
        if (U2(a) || b)
          Fn2(a, b), b && (Vm(b), b.ha = a.D), a.b && Pl(a.b, a), Rn2(a);
      }
    });
  };
  k2.da = function(a) {
    return Bn2(this.i, a);
  };
  k2.mc = function() {
    Rn2(this);
    this.da(U2(this));
  };
  k2.wc = function() {
    this.Ab();
  };
  k2.xc = function() {
    this.Ab();
  };
  function Pn2(a, b) {
    var c = null, d = null;
    return T2(a, b.then(function(e) {
      c = qh(e);
      d = og(e);
      return Sn2(a, e);
    }, function(e) {
      var f = null;
      e && e.code === "auth/multi-factor-auth-required" && (f = mm(e.w(), a, q2(a.kc, a)));
      throw f || e;
    }).then(function() {
      return kf({ user: U2(a), credential: c, additionalUserInfo: d, operationType: "signIn" });
    }));
  }
  k2.kc = function(a) {
    var b = this;
    return this.h.then(function() {
      return Pn2(b, E2(a));
    });
  };
  k2.zc = function(a) {
    var b = this;
    this.addAuthTokenListener(function() {
      a.next(U2(b));
    });
  };
  k2.Ac = function(a) {
    var b = this;
    Un2(this, function() {
      a.next(U2(b));
    });
  };
  k2.Ic = function(a, b, c) {
    var d = this;
    this.ba && Promise.resolve().then(function() {
      typeof a === "function" ? a(U2(d)) : typeof a.next === "function" && a.next(U2(d));
    });
    return this.hb(a, b, c);
  };
  k2.Hc = function(a, b, c) {
    var d = this;
    this.ba && Promise.resolve().then(function() {
      d.X = d.getUid();
      typeof a === "function" ? a(U2(d)) : typeof a.next === "function" && a.next(U2(d));
    });
    return this.bc(a, b, c);
  };
  k2.nc = function(a) {
    var b = this, c = this.h.then(function() {
      return U2(b) ? U2(b).I(a).then(function(d) {
        return { accessToken: d };
      }) : null;
    });
    return T2(this, c);
  };
  k2.Tc = function(a) {
    var b = this;
    return this.h.then(function() {
      return Pn2(b, O2(b.a, Kj, { token: a }));
    }).then(function(c) {
      var d = c.user;
      an2(d, "isAnonymous", false);
      b.da(d);
      return c;
    });
  };
  k2.Uc = function(a, b) {
    var c = this;
    return this.h.then(function() {
      return Pn2(c, O2(c.a, ah, { email: a, password: b }));
    });
  };
  k2.dc = function(a, b) {
    var c = this;
    return this.h.then(function() {
      return Pn2(c, O2(c.a, Ej, { email: a, password: b }));
    });
  };
  k2.$a = function(a) {
    var b = this;
    return this.h.then(function() {
      return Pn2(b, a.ka(b.a));
    });
  };
  k2.Sc = function(a) {
    gf("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");
    return this.$a(a);
  };
  k2.zb = function() {
    var a = this;
    return this.h.then(function() {
      var b = U2(a);
      if (b && b.isAnonymous) {
        var c = kf({ providerId: null, isNewUser: false });
        return kf({ user: b, credential: null, additionalUserInfo: c, operationType: "signIn" });
      }
      return Pn2(a, a.a.zb()).then(function(d) {
        var e = d.user;
        an2(e, "isAnonymous", true);
        a.da(e);
        return d;
      });
    });
  };
  function S2(a) {
    return a.app;
  }
  function U2(a) {
    return a.currentUser;
  }
  k2.getUid = function() {
    return U2(this) && U2(this).uid || null;
  };
  function Vn2(a) {
    return U2(a) && U2(a)._lat || null;
  }
  function Rn2(a) {
    if (a.ba) {
      for (var b = 0; b < a.s.length; b++)
        if (a.s[b])
          a.s[b](Vn2(a));
      if (a.X !== a.getUid() && a.O.length) {
        for (a.X = a.getUid(), b = 0; b < a.O.length; b++)
          if (a.O[b])
            a.O[b](Vn2(a));
      }
    }
  }
  k2.cc = function(a) {
    this.addAuthTokenListener(a);
    this.u++;
    0 < this.u && U2(this) && Rm(U2(this));
  };
  k2.Pc = function(a) {
    var b = this;
    w2(this.s, function(c) {
      c == a && b.u--;
    });
    0 > this.u && (this.u = 0);
    this.u == 0 && U2(this) && Sm(U2(this));
    this.removeAuthTokenListener(a);
  };
  k2.addAuthTokenListener = function(a) {
    var b = this;
    this.s.push(a);
    T2(this, this.h.then(function() {
      b.l || Va2(b.s, a) && a(Vn2(b));
    }));
  };
  k2.removeAuthTokenListener = function(a) {
    Xa2(this.s, function(b) {
      return b == a;
    });
  };
  function Un2(a, b) {
    a.O.push(b);
    T2(a, a.h.then(function() {
      !a.l && Va2(a.O, b) && a.X !== a.getUid() && (a.X = a.getUid(), b(Vn2(a)));
    }));
  }
  k2.delete = function() {
    this.l = true;
    for (var a = 0; a < this.R.length; a++)
      this.R[a].cancel("app-deleted");
    this.R = [];
    this.i && (a = this.i, a.b.removeListener(wn2("local"), a.a, this.ja));
    this.b && (Ql(this.b, this), $l(this.b.b));
    return Promise.resolve();
  };
  function T2(a, b) {
    a.R.push(b);
    b.oa(function() {
      Wa2(a.R, b);
    });
    return b;
  }
  k2.hc = function(a) {
    return T2(this, aj(this.a, a));
  };
  k2.Bc = function(a) {
    return !!fh(a);
  };
  k2.wb = function(a, b) {
    var c = this;
    return T2(this, E2().then(function() {
      var d = new Sf(b);
      if (!d.c)
        throw new t2("argument-error", $f + " must be true when sending sign in link to email");
      return bg(d);
    }).then(function(d) {
      return c.a.wb(a, d);
    }).then(function() {
    }));
  };
  k2.jd = function(a) {
    return this.Ra(a).then(function(b) {
      return b.data.email;
    });
  };
  k2.nb = function(a, b) {
    return T2(this, this.a.nb(a, b).then(function() {
    }));
  };
  k2.Ra = function(a) {
    return T2(this, this.a.Ra(a).then(function(b) {
      return new vf(b);
    }));
  };
  k2.jb = function(a) {
    return T2(this, this.a.jb(a).then(function() {
    }));
  };
  k2.vb = function(a, b) {
    var c = this;
    return T2(this, E2().then(function() {
      return typeof b === "undefined" || mb2(b) ? {} : bg(new Sf(b));
    }).then(function(d) {
      return c.a.vb(a, d);
    }).then(function() {
    }));
  };
  k2.Wc = function(a, b) {
    return T2(this, gm(this, a, b, q2(this.$a, this)));
  };
  k2.Vc = function(a, b) {
    var c = this;
    return T2(this, E2().then(function() {
      var d = b || re2(), e = eh(a, d);
      d = fh(d);
      if (!d)
        throw new t2("argument-error", "Invalid email link!");
      if (d.tenantId !== c.T())
        throw new t2("tenant-id-mismatch");
      return c.$a(e);
    }));
  };
  function Wn2() {
  }
  Wn2.prototype.render = function() {
  };
  Wn2.prototype.reset = function() {
  };
  Wn2.prototype.getResponse = function() {
  };
  Wn2.prototype.execute = function() {
  };
  function Xn2() {
    this.a = {};
    this.b = 1e12;
  }
  var Yn2 = null;
  Xn2.prototype.render = function(a, b) {
    this.a[this.b.toString()] = new Zn2(a, b);
    return this.b++;
  };
  Xn2.prototype.reset = function(a) {
    var b = $n2(this, a);
    a = ao2(a);
    b && a && (b.delete(), delete this.a[a]);
  };
  Xn2.prototype.getResponse = function(a) {
    return (a = $n2(this, a)) ? a.getResponse() : null;
  };
  Xn2.prototype.execute = function(a) {
    (a = $n2(this, a)) && a.execute();
  };
  function $n2(a, b) {
    return (b = ao2(b)) ? a.a[b] || null : null;
  }
  function ao2(a) {
    return (a = typeof a === "undefined" ? 1e12 : a) ? a.toString() : null;
  }
  function Zn2(a, b) {
    this.g = false;
    this.c = b;
    this.a = this.b = null;
    this.h = this.c.size !== "invisible";
    this.f = kc2(a);
    var c = this;
    this.i = function() {
      c.execute();
    };
    this.h ? this.execute() : nd2(this.f, "click", this.i);
  }
  Zn2.prototype.getResponse = function() {
    bo2(this);
    return this.b;
  };
  Zn2.prototype.execute = function() {
    bo2(this);
    var a = this;
    this.a || (this.a = setTimeout(function() {
      a.b = Me2();
      var b = a.c.callback, c = a.c["expired-callback"];
      if (b)
        try {
          b(a.b);
        } catch (d) {
        }
      a.a = setTimeout(function() {
        a.a = null;
        a.b = null;
        if (c)
          try {
            c();
          } catch (d) {
          }
        a.h && a.execute();
      }, 6e4);
    }, 500));
  };
  Zn2.prototype.delete = function() {
    bo2(this);
    this.g = true;
    clearTimeout(this.a);
    this.a = null;
    xd2(this.f, "click", this.i);
  };
  function bo2(a) {
    if (a.g)
      throw Error("reCAPTCHA mock was already deleted!");
  }
  function co2() {
  }
  M2(co2, "FACTOR_ID", "phone");
  function eo2() {
  }
  eo2.prototype.g = function() {
    Yn2 || (Yn2 = new Xn2());
    return E2(Yn2);
  };
  eo2.prototype.c = function() {
  };
  var fo2 = null;
  function go2() {
    this.b = l.grecaptcha ? Infinity : 0;
    this.f = null;
    this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString();
  }
  var ho2 = new qb2(rb, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"), io2 = new Ze2(3e4, 6e4);
  go2.prototype.g = function(a) {
    var b = this;
    return new D2(function(c, d) {
      var e = setTimeout(function() {
        d(new t2("network-request-failed"));
      }, io2.get());
      if (!l.grecaptcha || a !== b.f && !b.b) {
        l[b.a] = function() {
          if (l.grecaptcha) {
            b.f = a;
            var g = l.grecaptcha.render;
            l.grecaptcha.render = function(h2, m) {
              h2 = g(h2, m);
              b.b++;
              return h2;
            };
            clearTimeout(e);
            c(l.grecaptcha);
          } else
            clearTimeout(e), d(new t2("internal-error"));
          delete l[b.a];
        };
        var f = zb2(ho2, { onload: b.a, hl: a || "" });
        E2(Bi2(f)).o(function() {
          clearTimeout(e);
          d(new t2("internal-error", "Unable to load external reCAPTCHA dependencies!"));
        });
      } else
        clearTimeout(e), c(l.grecaptcha);
    });
  };
  go2.prototype.c = function() {
    this.b--;
  };
  var jo2 = null;
  function ko2(a, b, c, d, e, f, g) {
    M2(this, "type", "recaptcha");
    this.c = this.f = null;
    this.D = false;
    this.v = b;
    this.g = null;
    g ? (fo2 || (fo2 = new eo2()), g = fo2) : (jo2 || (jo2 = new go2()), g = jo2);
    this.m = g;
    this.a = c || { theme: "light", type: "image" };
    this.h = [];
    if (this.a[lo2])
      throw new t2("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
    this.i = this.a[mo2] === "invisible";
    if (!l.document)
      throw new t2("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
    if (!kc2(b) || !this.i && kc2(b).hasChildNodes())
      throw new t2("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
    this.s = new Ii2(a, f || null, e || null);
    this.u = d || function() {
      return null;
    };
    var h2 = this;
    this.l = [];
    var m = this.a[no2];
    this.a[no2] = function(v2) {
      oo2(h2, v2);
      if (typeof m === "function")
        m(v2);
      else if (typeof m === "string") {
        var B2 = L2(m, l);
        typeof B2 === "function" && B2(v2);
      }
    };
    var p2 = this.a[po2];
    this.a[po2] = function() {
      oo2(h2, null);
      if (typeof p2 === "function")
        p2();
      else if (typeof p2 === "string") {
        var v2 = L2(p2, l);
        typeof v2 === "function" && v2();
      }
    };
  }
  var no2 = "callback", po2 = "expired-callback", lo2 = "sitekey", mo2 = "size";
  function oo2(a, b) {
    for (var c = 0; c < a.l.length; c++)
      try {
        a.l[c](b);
      } catch (d) {
      }
  }
  function qo2(a, b) {
    Xa2(a.l, function(c) {
      return c == b;
    });
  }
  function ro2(a, b) {
    a.h.push(b);
    b.oa(function() {
      Wa2(a.h, b);
    });
    return b;
  }
  k2 = ko2.prototype;
  k2.Ia = function() {
    var a = this;
    return this.f ? this.f : this.f = ro2(this, E2().then(function() {
      if (Se2() && !Je2())
        return Ee2();
      throw new t2("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
    }).then(function() {
      return a.m.g(a.u());
    }).then(function(b) {
      a.g = b;
      return O2(a.s, Jj, {});
    }).then(function(b) {
      a.a[lo2] = b.recaptchaSiteKey;
    }).o(function(b) {
      a.f = null;
      throw b;
    }));
  };
  k2.render = function() {
    so2(this);
    var a = this;
    return ro2(this, this.Ia().then(function() {
      if (a.c === null) {
        var b = a.v;
        if (!a.i) {
          var c = kc2(b);
          b = nc2("DIV");
          c.appendChild(b);
        }
        a.c = a.g.render(b, a.a);
      }
      return a.c;
    }));
  };
  k2.verify = function() {
    so2(this);
    var a = this;
    return ro2(this, this.render().then(function(b) {
      return new D2(function(c) {
        var d = a.g.getResponse(b);
        if (d)
          c(d);
        else {
          var e = function(f) {
            f && (qo2(a, e), c(f));
          };
          a.l.push(e);
          a.i && a.g.execute(a.c);
        }
      });
    }));
  };
  k2.reset = function() {
    so2(this);
    this.c !== null && this.g.reset(this.c);
  };
  function so2(a) {
    if (a.D)
      throw new t2("internal-error", "RecaptchaVerifier instance has been destroyed.");
  }
  k2.clear = function() {
    so2(this);
    this.D = true;
    this.m.c();
    for (var a = 0; a < this.h.length; a++)
      this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");
    if (!this.i) {
      a = kc2(this.v);
      for (var b; b = a.firstChild; )
        a.removeChild(b);
    }
  };
  function to2(a, b, c) {
    var d = false;
    try {
      this.b = c || firebase$1$1.app();
    } catch (g) {
      throw new t2("argument-error", "No firebase.app.App instance is currently initialized.");
    }
    if (this.b.options && this.b.options.apiKey)
      c = this.b.options.apiKey;
    else
      throw new t2("invalid-api-key");
    var e = this, f = null;
    try {
      f = this.b.auth().Ga();
    } catch (g) {
    }
    try {
      d = this.b.auth().settings.appVerificationDisabledForTesting;
    } catch (g) {
    }
    f = firebase$1$1.SDK_VERSION ? Oe2(firebase$1$1.SDK_VERSION, f) : null;
    ko2.call(this, c, a, b, function() {
      try {
        var g = e.b.auth().la();
      } catch (h2) {
        g = null;
      }
      return g;
    }, f, Ca2(Da2), d);
  }
  r2(to2, ko2);
  function uo2(a, b, c, d) {
    a: {
      c = Array.prototype.slice.call(c);
      var e = 0;
      for (var f = false, g = 0; g < b.length; g++)
        if (b[g].optional)
          f = true;
        else {
          if (f)
            throw new t2("internal-error", "Argument validator encountered a required argument after an optional argument.");
          e++;
        }
      f = b.length;
      if (c.length < e || f < c.length)
        d = "Expected " + (e == f ? e == 1 ? "1 argument" : e + " arguments" : e + "-" + f + " arguments") + " but got " + c.length + ".";
      else {
        for (e = 0; e < c.length; e++)
          if (f = b[e].optional && c[e] === void 0, !b[e].M(c[e]) && !f) {
            b = b[e];
            if (0 > e || e >= vo.length)
              throw new t2("internal-error", "Argument validator received an unsupported number of arguments.");
            c = vo[e];
            d = (d ? "" : c + " argument ") + (b.name ? '"' + b.name + '" ' : "") + "must be " + b.K + ".";
            break a;
          }
        d = null;
      }
    }
    if (d)
      throw new t2("argument-error", a + " failed: " + d);
  }
  var vo = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");
  function V2(a, b) {
    return { name: a || "", K: "a valid string", optional: !!b, M: function(c) {
      return typeof c === "string";
    } };
  }
  function wo2(a, b) {
    return { name: a || "", K: "a boolean", optional: !!b, M: function(c) {
      return typeof c === "boolean";
    } };
  }
  function W2(a, b) {
    return { name: a || "", K: "a valid object", optional: !!b, M: n2 };
  }
  function xo2(a, b) {
    return { name: a || "", K: "a function", optional: !!b, M: function(c) {
      return typeof c === "function";
    } };
  }
  function yo(a, b) {
    return { name: a || "", K: "null", optional: !!b, M: function(c) {
      return c === null;
    } };
  }
  function zo2() {
    return { name: "", K: "an HTML element", optional: false, M: function(a) {
      return !!(a && a instanceof Element);
    } };
  }
  function Ao2() {
    return { name: "auth", K: "an instance of Firebase Auth", optional: true, M: function(a) {
      return !!(a && a instanceof En2);
    } };
  }
  function Bo2() {
    return { name: "app", K: "an instance of Firebase App", optional: true, M: function(a) {
      return !!(a && a instanceof firebase$1$1.app.App);
    } };
  }
  function Co2(a) {
    return { name: a ? a + "Credential" : "credential", K: a ? "a valid " + a + " credential" : "a valid credential", optional: false, M: function(b) {
      if (!b)
        return false;
      var c = !a || b.providerId === a;
      return !(!b.ka || !c);
    } };
  }
  function Do2() {
    return { name: "multiFactorAssertion", K: "a valid multiFactorAssertion", optional: false, M: function(a) {
      return a ? !!a.sb : false;
    } };
  }
  function Eo2() {
    return { name: "authProvider", K: "a valid Auth provider", optional: false, M: function(a) {
      return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
    } };
  }
  function Fo2(a, b) {
    return n2(a) && typeof a.type === "string" && a.type === b && typeof a.Ha === "function";
  }
  function Go2(a) {
    return n2(a) && typeof a.uid === "string";
  }
  function Ho2() {
    return { name: "applicationVerifier", K: "an implementation of firebase.auth.ApplicationVerifier", optional: false, M: function(a) {
      return !(!a || typeof a.type !== "string" || typeof a.verify !== "function");
    } };
  }
  function X2(a, b, c, d) {
    return { name: c || "", K: a.K + " or " + b.K, optional: !!d, M: function(e) {
      return a.M(e) || b.M(e);
    } };
  }
  function Y2(a, b) {
    for (var c in b) {
      var d = b[c].name;
      a[d] = Io2(d, a[c], b[c].j);
    }
  }
  function Jo2(a, b) {
    for (var c in b) {
      var d = b[c].name;
      d !== c && Object.defineProperty(a, d, { get: ua2(function(e) {
        return this[e];
      }, c), set: ua2(function(e, f, g, h2) {
        uo2(e, [g], [h2], true);
        this[f] = h2;
      }, d, c, b[c].kb), enumerable: true });
    }
  }
  function Z2(a, b, c, d) {
    a[b] = Io2(b, c, d);
  }
  function Io2(a, b, c) {
    function d() {
      var g = Array.prototype.slice.call(arguments);
      uo2(e, c, g);
      return b.apply(this, g);
    }
    if (!c)
      return b;
    var e = Ko2(a), f;
    for (f in b)
      d[f] = b[f];
    for (f in b.prototype)
      d.prototype[f] = b.prototype[f];
    return d;
  }
  function Ko2(a) {
    a = a.split(".");
    return a[a.length - 1];
  }
  Y2(En2.prototype, {
    jb: { name: "applyActionCode", j: [V2("code")] },
    Ra: { name: "checkActionCode", j: [V2("code")] },
    nb: { name: "confirmPasswordReset", j: [V2("code"), V2("newPassword")] },
    dc: { name: "createUserWithEmailAndPassword", j: [V2("email"), V2("password")] },
    hc: { name: "fetchSignInMethodsForEmail", j: [V2("email")] },
    qa: { name: "getRedirectResult", j: [] },
    Bc: { name: "isSignInWithEmailLink", j: [V2("emailLink")] },
    Hc: { name: "onAuthStateChanged", j: [X2(W2(), xo2(), "nextOrObserver"), xo2("opt_error", true), xo2("opt_completed", true)] },
    Ic: {
      name: "onIdTokenChanged",
      j: [X2(W2(), xo2(), "nextOrObserver"), xo2("opt_error", true), xo2("opt_completed", true)]
    },
    vb: { name: "sendPasswordResetEmail", j: [V2("email"), X2(W2("opt_actionCodeSettings", true), yo(null, true), "opt_actionCodeSettings", true)] },
    wb: { name: "sendSignInLinkToEmail", j: [V2("email"), W2("actionCodeSettings")] },
    xb: { name: "setPersistence", j: [V2("persistence")] },
    Sc: { name: "signInAndRetrieveDataWithCredential", j: [Co2()] },
    zb: { name: "signInAnonymously", j: [] },
    $a: { name: "signInWithCredential", j: [Co2()] },
    Tc: { name: "signInWithCustomToken", j: [V2("token")] },
    Uc: { name: "signInWithEmailAndPassword", j: [V2("email"), V2("password")] },
    Vc: { name: "signInWithEmailLink", j: [V2("email"), V2("emailLink", true)] },
    Wc: { name: "signInWithPhoneNumber", j: [V2("phoneNumber"), Ho2()] },
    Xc: { name: "signInWithPopup", j: [Eo2()] },
    Yc: { name: "signInWithRedirect", j: [Eo2()] },
    dd: { name: "updateCurrentUser", j: [X2(function(a) {
      return { name: "user", K: "an instance of Firebase User", optional: !!a, M: function(b) {
        return !!(b && b instanceof Im);
      } };
    }(), yo(), "user")] },
    Ab: { name: "signOut", j: [] },
    toJSON: { name: "toJSON", j: [V2(null, true)] },
    fd: { name: "useDeviceLanguage", j: [] },
    gd: { name: "useEmulator", j: [V2("url"), W2("options", true)] },
    jd: { name: "verifyPasswordResetCode", j: [V2("code")] }
  });
  Jo2(En2.prototype, { lc: { name: "languageCode", kb: X2(V2(), yo(), "languageCode") }, ti: { name: "tenantId", kb: X2(V2(), yo(), "tenantId") } });
  En2.Persistence = Rk;
  En2.Persistence.LOCAL = "local";
  En2.Persistence.SESSION = "session";
  En2.Persistence.NONE = "none";
  Y2(Im.prototype, {
    "delete": { name: "delete", j: [] },
    oc: { name: "getIdTokenResult", j: [wo2("opt_forceRefresh", true)] },
    I: { name: "getIdToken", j: [wo2("opt_forceRefresh", true)] },
    Cc: { name: "linkAndRetrieveDataWithCredential", j: [Co2()] },
    qb: { name: "linkWithCredential", j: [Co2()] },
    Dc: { name: "linkWithPhoneNumber", j: [V2("phoneNumber"), Ho2()] },
    Ec: { name: "linkWithPopup", j: [Eo2()] },
    Fc: { name: "linkWithRedirect", j: [Eo2()] },
    Lc: { name: "reauthenticateAndRetrieveDataWithCredential", j: [Co2()] },
    tb: { name: "reauthenticateWithCredential", j: [Co2()] },
    Mc: {
      name: "reauthenticateWithPhoneNumber",
      j: [V2("phoneNumber"), Ho2()]
    },
    Nc: { name: "reauthenticateWithPopup", j: [Eo2()] },
    Oc: { name: "reauthenticateWithRedirect", j: [Eo2()] },
    reload: { name: "reload", j: [] },
    ub: { name: "sendEmailVerification", j: [X2(W2("opt_actionCodeSettings", true), yo(null, true), "opt_actionCodeSettings", true)] },
    toJSON: { name: "toJSON", j: [V2(null, true)] },
    cd: { name: "unlink", j: [V2("provider")] },
    Bb: { name: "updateEmail", j: [V2("email")] },
    Cb: { name: "updatePassword", j: [V2("password")] },
    ed: { name: "updatePhoneNumber", j: [Co2("phone")] },
    Db: { name: "updateProfile", j: [W2("profile")] },
    Eb: { name: "verifyBeforeUpdateEmail", j: [V2("email"), X2(W2("opt_actionCodeSettings", true), yo(null, true), "opt_actionCodeSettings", true)] }
  });
  Y2(Xn2.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } });
  Y2(Wn2.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } });
  Y2(D2.prototype, { oa: { name: "finally" }, o: { name: "catch" }, then: { name: "then" } });
  Jo2(em.prototype, { appVerificationDisabled: { name: "appVerificationDisabledForTesting", kb: wo2("appVerificationDisabledForTesting") } });
  Y2(fm.prototype, { confirm: { name: "confirm", j: [V2("verificationCode")] } });
  Z2(Bg, "fromJSON", function(a) {
    a = typeof a === "string" ? JSON.parse(a) : a;
    for (var b, c = [Mg, dh, kh, Jg], d = 0; d < c.length; d++)
      if (b = c[d](a))
        return b;
    return null;
  }, [X2(V2(), W2(), "json")]);
  Z2(Zg, "credential", function(a, b) {
    return new Yg(a, b);
  }, [V2("email"), V2("password")]);
  Y2(Yg.prototype, { w: { name: "toJSON", j: [V2(null, true)] } });
  Y2(Qg.prototype, { Ca: { name: "addScope", j: [V2("scope")] }, Ka: { name: "setCustomParameters", j: [W2("customOAuthParameters")] } });
  Z2(Qg, "credential", Rg, [X2(V2(), W2(), "token")]);
  Z2(Zg, "credentialWithLink", eh, [V2("email"), V2("emailLink")]);
  Y2(Sg.prototype, { Ca: { name: "addScope", j: [V2("scope")] }, Ka: { name: "setCustomParameters", j: [W2("customOAuthParameters")] } });
  Z2(Sg, "credential", Tg, [X2(V2(), W2(), "token")]);
  Y2(Ug.prototype, { Ca: { name: "addScope", j: [V2("scope")] }, Ka: { name: "setCustomParameters", j: [W2("customOAuthParameters")] } });
  Z2(Ug, "credential", Vg, [X2(V2(), X2(W2(), yo()), "idToken"), X2(V2(), yo(), "accessToken", true)]);
  Y2(Wg.prototype, { Ka: { name: "setCustomParameters", j: [W2("customOAuthParameters")] } });
  Z2(Wg, "credential", Xg, [X2(V2(), W2(), "token"), V2("secret", true)]);
  Y2(Pg.prototype, { Ca: { name: "addScope", j: [V2("scope")] }, credential: { name: "credential", j: [X2(V2(), X2(W2(), yo()), "optionsOrIdToken"), X2(V2(), yo(), "accessToken", true)] }, Ka: { name: "setCustomParameters", j: [W2("customOAuthParameters")] } });
  Y2(Kg.prototype, { w: { name: "toJSON", j: [V2(null, true)] } });
  Y2(Eg.prototype, { w: { name: "toJSON", j: [V2(null, true)] } });
  Z2(lh, "credential", ph, [V2("verificationId"), V2("verificationCode")]);
  Y2(lh.prototype, { fb: { name: "verifyPhoneNumber", j: [X2(V2(), function(a, b) {
    return { name: a || "phoneInfoOptions", K: "valid phone info options", optional: !!b, M: function(c) {
      return c ? c.session && c.phoneNumber ? Fo2(c.session, zg) && typeof c.phoneNumber === "string" : c.session && c.multiFactorHint ? Fo2(c.session, Ag) && Go2(c.multiFactorHint) : c.session && c.multiFactorUid ? Fo2(c.session, Ag) && typeof c.multiFactorUid === "string" : c.phoneNumber ? typeof c.phoneNumber === "string" : false : false;
    } };
  }(), "phoneInfoOptions"), Ho2()] } });
  Y2(gh.prototype, { w: { name: "toJSON", j: [V2(null, true)] } });
  Y2(t2.prototype, { toJSON: { name: "toJSON", j: [V2(null, true)] } });
  Y2(yh.prototype, { toJSON: { name: "toJSON", j: [V2(null, true)] } });
  Y2(xh.prototype, { toJSON: { name: "toJSON", j: [V2(null, true)] } });
  Y2(lm.prototype, { toJSON: { name: "toJSON", j: [V2(null, true)] } });
  Y2(im.prototype, { Rc: { name: "resolveSignIn", j: [Do2()] } });
  Y2(tm.prototype, { Rb: { name: "getSession", j: [] }, fc: { name: "enroll", j: [Do2(), V2("displayName", true)] }, bd: { name: "unenroll", j: [X2({ name: "multiFactorInfo", K: "a valid multiFactorInfo", optional: false, M: Go2 }, V2(), "multiFactorInfoIdentifier")] } });
  Y2(to2.prototype, { clear: { name: "clear", j: [] }, render: { name: "render", j: [] }, verify: { name: "verify", j: [] } });
  Z2(Jf, "parseLink", Rf, [V2("link")]);
  Z2(co2, "assertion", function(a) {
    return new rm(a);
  }, [Co2("phone")]);
  (function() {
    if (typeof firebase$1$1 !== "undefined" && firebase$1$1.INTERNAL && firebase$1$1.INTERNAL.registerComponent) {
      var a = { ActionCodeInfo: { Operation: { EMAIL_SIGNIN: Af, PASSWORD_RESET: "PASSWORD_RESET", RECOVER_EMAIL: "RECOVER_EMAIL", REVERT_SECOND_FACTOR_ADDITION: Cf, VERIFY_AND_CHANGE_EMAIL: Bf, VERIFY_EMAIL: "VERIFY_EMAIL" } }, Auth: En2, AuthCredential: Bg, Error: t2 };
      Z2(a, "EmailAuthProvider", Zg, []);
      Z2(a, "FacebookAuthProvider", Qg, []);
      Z2(a, "GithubAuthProvider", Sg, []);
      Z2(a, "GoogleAuthProvider", Ug, []);
      Z2(a, "TwitterAuthProvider", Wg, []);
      Z2(a, "OAuthProvider", Pg, [V2("providerId")]);
      Z2(a, "SAMLAuthProvider", Og, [V2("providerId")]);
      Z2(a, "PhoneAuthProvider", lh, [Ao2()]);
      Z2(a, "RecaptchaVerifier", to2, [X2(V2(), zo2(), "recaptchaContainer"), W2("recaptchaParameters", true), Bo2()]);
      Z2(a, "ActionCodeURL", Jf, []);
      Z2(a, "PhoneMultiFactorGenerator", co2, []);
      firebase$1$1.INTERNAL.registerComponent({ name: "auth", instanceFactory: function(b) {
        b = b.getProvider("app").getImmediate();
        return new En2(b);
      }, multipleInstances: false, serviceProps: a, instantiationMode: "LAZY", type: "PUBLIC" });
      firebase$1$1.INTERNAL.registerComponent({
        name: "auth-internal",
        instanceFactory: function(b) {
          b = b.getProvider("auth").getImmediate();
          return { getUid: q2(b.getUid, b), getToken: q2(b.nc, b), addAuthTokenListener: q2(b.cc, b), removeAuthTokenListener: q2(b.Pc, b) };
        },
        multipleInstances: false,
        instantiationMode: "LAZY",
        type: "PRIVATE"
      });
      firebase$1$1.registerVersion("@firebase/auth", "0.16.4");
      firebase$1$1.INTERNAL.extendNamespace({ User: Im });
    } else
      throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
  })();
}).apply(typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
const config = {
  apiKey: "AIzaSyDAeNoAGfy_5Wrqvnuaf9IfqS1DOZcDayE",
  authDomain: "instagram-clone-svelte.firebaseapp.com",
  projectId: "instagram-clone-svelte",
  storageBucket: "instagram-clone-svelte.appspot.com",
  messagingSenderId: "800924273836",
  appId: "1:800924273836:web:7af277fe7aff1e97806309",
  measurementId: "G-5FRJ8YQ7P6"
};
const firebase = firebase$1$1.initializeApp(config);
const { FieldValue } = firebase$1$1.firestore;
console.log(firebase, "firebase");
