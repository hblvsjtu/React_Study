(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Babel"] = factory();
	else
		root["Babel"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 276);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isRestProperty = isRestProperty;
exports.isSpreadProperty = isSpreadProperty;
exports.is = is;
exports.isType = isType;
exports.validate = validate;
exports.shallowEqual = shallowEqual;
exports.appendToMemberExpression = appendToMemberExpression;
exports.prependToMemberExpression = prependToMemberExpression;
exports.ensureBlock = ensureBlock;
exports.clone = clone;
exports.cloneWithoutLoc = cloneWithoutLoc;
exports.cloneDeep = cloneDeep;
exports.matchesPattern = matchesPattern;
exports.buildMatchMemberExpression = buildMatchMemberExpression;
exports.addComment = addComment;
exports.addComments = addComments;
exports.removeComments = removeComments;
exports.inheritsComments = inheritsComments;
exports.inheritTrailingComments = inheritTrailingComments;
exports.inheritLeadingComments = inheritLeadingComments;
exports.inheritInnerComments = inheritInnerComments;
exports.inherits = inherits;
exports.assertNode = assertNode;
exports.isNode = isNode;
exports.traverseFast = traverseFast;
exports.removeProperties = removeProperties;
exports.removePropertiesDeep = removePropertiesDeep;
Object.defineProperty(exports, "STATEMENT_OR_BLOCK_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.STATEMENT_OR_BLOCK_KEYS;
  }
});
Object.defineProperty(exports, "FLATTENABLE_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.FLATTENABLE_KEYS;
  }
});
Object.defineProperty(exports, "FOR_INIT_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.FOR_INIT_KEYS;
  }
});
Object.defineProperty(exports, "COMMENT_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.COMMENT_KEYS;
  }
});
Object.defineProperty(exports, "LOGICAL_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.LOGICAL_OPERATORS;
  }
});
Object.defineProperty(exports, "UPDATE_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.UPDATE_OPERATORS;
  }
});
Object.defineProperty(exports, "BOOLEAN_NUMBER_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BOOLEAN_NUMBER_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "EQUALITY_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.EQUALITY_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "COMPARISON_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.COMPARISON_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "BOOLEAN_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BOOLEAN_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "NUMBER_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.NUMBER_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "BOOLEAN_UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BOOLEAN_UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "NUMBER_UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.NUMBER_UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "STRING_UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.STRING_UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "INHERIT_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.INHERIT_KEYS;
  }
});
Object.defineProperty(exports, "BLOCK_SCOPED_SYMBOL", {
  enumerable: true,
  get: function get() {
    return _constants.BLOCK_SCOPED_SYMBOL;
  }
});
Object.defineProperty(exports, "NOT_LOCAL_BINDING", {
  enumerable: true,
  get: function get() {
    return _constants.NOT_LOCAL_BINDING;
  }
});
Object.defineProperty(exports, "VISITOR_KEYS", {
  enumerable: true,
  get: function get() {
    return _definitions.VISITOR_KEYS;
  }
});
Object.defineProperty(exports, "ALIAS_KEYS", {
  enumerable: true,
  get: function get() {
    return _definitions.ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "NODE_FIELDS", {
  enumerable: true,
  get: function get() {
    return _definitions.NODE_FIELDS;
  }
});
Object.defineProperty(exports, "BUILDER_KEYS", {
  enumerable: true,
  get: function get() {
    return _definitions.BUILDER_KEYS;
  }
});
Object.defineProperty(exports, "DEPRECATED_KEYS", {
  enumerable: true,
  get: function get() {
    return _definitions.DEPRECATED_KEYS;
  }
});
Object.defineProperty(exports, "getBindingIdentifiers", {
  enumerable: true,
  get: function get() {
    return _retrievers.getBindingIdentifiers;
  }
});
Object.defineProperty(exports, "getOuterBindingIdentifiers", {
  enumerable: true,
  get: function get() {
    return _retrievers.getOuterBindingIdentifiers;
  }
});
Object.defineProperty(exports, "isBinding", {
  enumerable: true,
  get: function get() {
    return _validators.isBinding;
  }
});
Object.defineProperty(exports, "isReferenced", {
  enumerable: true,
  get: function get() {
    return _validators.isReferenced;
  }
});
Object.defineProperty(exports, "isValidIdentifier", {
  enumerable: true,
  get: function get() {
    return _validators.isValidIdentifier;
  }
});
Object.defineProperty(exports, "isLet", {
  enumerable: true,
  get: function get() {
    return _validators.isLet;
  }
});
Object.defineProperty(exports, "isBlockScoped", {
  enumerable: true,
  get: function get() {
    return _validators.isBlockScoped;
  }
});
Object.defineProperty(exports, "isVar", {
  enumerable: true,
  get: function get() {
    return _validators.isVar;
  }
});
Object.defineProperty(exports, "isSpecifierDefault", {
  enumerable: true,
  get: function get() {
    return _validators.isSpecifierDefault;
  }
});
Object.defineProperty(exports, "isScope", {
  enumerable: true,
  get: function get() {
    return _validators.isScope;
  }
});
Object.defineProperty(exports, "isImmutable", {
  enumerable: true,
  get: function get() {
    return _validators.isImmutable;
  }
});
Object.defineProperty(exports, "isNodesEquivalent", {
  enumerable: true,
  get: function get() {
    return _validators.isNodesEquivalent;
  }
});
Object.defineProperty(exports, "toComputedKey", {
  enumerable: true,
  get: function get() {
    return _converters.toComputedKey;
  }
});
Object.defineProperty(exports, "toSequenceExpression", {
  enumerable: true,
  get: function get() {
    return _converters.toSequenceExpression;
  }
});
Object.defineProperty(exports, "toKeyAlias", {
  enumerable: true,
  get: function get() {
    return _converters.toKeyAlias;
  }
});
Object.defineProperty(exports, "toIdentifier", {
  enumerable: true,
  get: function get() {
    return _converters.toIdentifier;
  }
});
Object.defineProperty(exports, "toBindingIdentifierName", {
  enumerable: true,
  get: function get() {
    return _converters.toBindingIdentifierName;
  }
});
Object.defineProperty(exports, "toStatement", {
  enumerable: true,
  get: function get() {
    return _converters.toStatement;
  }
});
Object.defineProperty(exports, "toExpression", {
  enumerable: true,
  get: function get() {
    return _converters.toExpression;
  }
});
Object.defineProperty(exports, "toBlock", {
  enumerable: true,
  get: function get() {
    return _converters.toBlock;
  }
});
Object.defineProperty(exports, "valueToNode", {
  enumerable: true,
  get: function get() {
    return _converters.valueToNode;
  }
});
Object.defineProperty(exports, "createUnionTypeAnnotation", {
  enumerable: true,
  get: function get() {
    return _flow.createUnionTypeAnnotation;
  }
});
Object.defineProperty(exports, "removeTypeDuplicates", {
  enumerable: true,
  get: function get() {
    return _flow.removeTypeDuplicates;
  }
});
Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
  enumerable: true,
  get: function get() {
    return _flow.createTypeAnnotationBasedOnTypeof;
  }
});
exports.react = exports.TYPES = void 0;

var _toFastProperties = _interopRequireDefault(__webpack_require__(280));

var _clone = _interopRequireDefault(__webpack_require__(37));

var _uniq = _interopRequireDefault(__webpack_require__(89));

var _constants = __webpack_require__(91);

__webpack_require__(347);

var _definitions = __webpack_require__(10);

var _react = _interopRequireWildcard(__webpack_require__(353));

exports.react = _react;

var _retrievers = __webpack_require__(154);

var _validators = __webpack_require__(354);

var _converters = __webpack_require__(357);

var _flow = __webpack_require__(359);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var t = exports;

function registerType(type) {
  var is = t["is" + type];

  if (!is) {
    is = t["is" + type] = function (node, opts) {
      return t.is(type, node, opts);
    };
  }

  t["assert" + type] = function (node, opts) {
    opts = opts || {};

    if (!is(node, opts)) {
      throw new Error("Expected type " + JSON.stringify(type) + " with option " + JSON.stringify(opts));
    }
  };
}

for (var type in t.VISITOR_KEYS) {
  registerType(type);
}

function isRestProperty() {
  return t.isRestElement.apply(t, arguments);
}

function isSpreadProperty() {
  return t.isSpreadElement.apply(t, arguments);
}

t.FLIPPED_ALIAS_KEYS = {};
Object.keys(t.ALIAS_KEYS).forEach(function (type) {
  t.ALIAS_KEYS[type].forEach(function (alias) {
    var types = t.FLIPPED_ALIAS_KEYS[alias] = t.FLIPPED_ALIAS_KEYS[alias] || [];
    types.push(type);
  });
});
Object.keys(t.FLIPPED_ALIAS_KEYS).forEach(function (type) {
  t[type.toUpperCase() + "_TYPES"] = t.FLIPPED_ALIAS_KEYS[type];
  registerType(type);
});
var TYPES = Object.keys(t.VISITOR_KEYS).concat(Object.keys(t.FLIPPED_ALIAS_KEYS)).concat(Object.keys(t.DEPRECATED_KEYS));
exports.TYPES = TYPES;

function is(type, node, opts) {
  if (!node) return false;
  var matches = isType(node.type, type);
  if (!matches) return false;

  if (typeof opts === "undefined") {
    return true;
  } else {
    return t.shallowEqual(node, opts);
  }
}

function isType(nodeType, targetType) {
  if (nodeType === targetType) return true;
  if (t.ALIAS_KEYS[targetType]) return false;
  var aliases = t.FLIPPED_ALIAS_KEYS[targetType];

  if (aliases) {
    if (aliases[0] === nodeType) return true;

    for (var _iterator = aliases, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var _alias = _ref;
      if (nodeType === _alias) return true;
    }
  }

  return false;
}

Object.keys(t.BUILDER_KEYS).forEach(function (type) {
  var keys = t.BUILDER_KEYS[type];

  function builder() {
    if (arguments.length > keys.length) {
      throw new Error("t." + type + ": Too many arguments passed. Received " + arguments.length + " but can receive " + ("no more than " + keys.length));
    }

    var node = {};
    node.type = type;
    var i = 0;
    var _arr = keys;

    for (var _i2 = 0; _i2 < _arr.length; _i2++) {
      var key = _arr[_i2];
      var field = t.NODE_FIELDS[type][key];
      var arg = arguments[i++];
      if (arg === undefined) arg = (0, _clone.default)(field.default);
      node[key] = arg;
    }

    for (var _key in node) {
      validate(node, _key, node[_key]);
    }

    return node;
  }

  t[type] = builder;
  t[type[0].toLowerCase() + type.slice(1)] = builder;
});

var _loop = function _loop(_type) {
  var newType = t.DEPRECATED_KEYS[_type];

  function proxy(fn) {
    return function () {
      console.trace("The node type " + _type + " has been renamed to " + newType);
      return fn.apply(this, arguments);
    };
  }

  t[_type] = t[_type[0].toLowerCase() + _type.slice(1)] = proxy(t[newType]);
  t["is" + _type] = proxy(t["is" + newType]);
  t["assert" + _type] = proxy(t["assert" + newType]);
};

for (var _type in t.DEPRECATED_KEYS) {
  _loop(_type);
}

function validate(node, key, val) {
  if (!node) return;
  var fields = t.NODE_FIELDS[node.type];
  if (!fields) return;
  var field = fields[key];
  if (!field || !field.validate) return;
  if (field.optional && val == null) return;
  field.validate(node, key, val);
}

function shallowEqual(actual, expected) {
  var keys = Object.keys(expected);
  var _arr2 = keys;

  for (var _i3 = 0; _i3 < _arr2.length; _i3++) {
    var key = _arr2[_i3];

    if (actual[key] !== expected[key]) {
      return false;
    }
  }

  return true;
}

function appendToMemberExpression(member, append, computed) {
  member.object = t.memberExpression(member.object, member.property, member.computed);
  member.property = append;
  member.computed = !!computed;
  return member;
}

function prependToMemberExpression(member, prepend) {
  member.object = t.memberExpression(prepend, member.object);
  return member;
}

function ensureBlock(node, key) {
  if (key === void 0) {
    key = "body";
  }

  return node[key] = t.toBlock(node[key], node);
}

function clone(node) {
  if (!node) return node;
  var newNode = {};

  for (var key in node) {
    if (key[0] === "_") continue;
    newNode[key] = node[key];
  }

  return newNode;
}

function cloneWithoutLoc(node) {
  var newNode = clone(node);
  newNode.loc = null;
  return newNode;
}

function cloneDeep(node) {
  if (!node) return node;
  var newNode = {};

  for (var key in node) {
    if (key[0] === "_") continue;
    var val = node[key];

    if (val) {
      if (val.type) {
        val = t.cloneDeep(val);
      } else if (Array.isArray(val)) {
        val = val.map(t.cloneDeep);
      }
    }

    newNode[key] = val;
  }

  return newNode;
}

function matchesPattern(member, match, allowPartial) {
  if (!t.isMemberExpression(member)) return false;
  var parts = Array.isArray(match) ? match : match.split(".");
  var nodes = [];
  var node;

  for (node = member; t.isMemberExpression(node); node = node.object) {
    nodes.push(node.property);
  }

  nodes.push(node);
  if (nodes.length < parts.length) return false;
  if (!allowPartial && nodes.length > parts.length) return false;

  for (var i = 0, j = nodes.length - 1; i < parts.length; i++, j--) {
    var _node = nodes[j];
    var value = void 0;

    if (t.isIdentifier(_node)) {
      value = _node.name;
    } else if (t.isStringLiteral(_node)) {
      value = _node.value;
    } else {
      return false;
    }

    if (parts[i] !== value) return false;
  }

  return true;
}

function buildMatchMemberExpression(match, allowPartial) {
  var parts = match.split(".");
  return function (member) {
    return matchesPattern(member, parts, allowPartial);
  };
}

function addComment(node, type, content, line) {
  addComments(node, type, [{
    type: line ? "CommentLine" : "CommentBlock",
    value: content
  }]);
}

function addComments(node, type, comments) {
  if (!comments || !node) return;
  var key = type + "Comments";

  if (node[key]) {
    if (type === "leading") {
      node[key] = comments.concat(node[key]);
    } else {
      node[key] = node[key].concat(comments);
    }
  } else {
    node[key] = comments;
  }

  return node;
}

function removeComments(node) {
  for (var _iterator2 = t.COMMENT_KEYS, _isArray2 = Array.isArray(_iterator2), _i4 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray2) {
      if (_i4 >= _iterator2.length) break;
      _ref2 = _iterator2[_i4++];
    } else {
      _i4 = _iterator2.next();
      if (_i4.done) break;
      _ref2 = _i4.value;
    }

    var _key2 = _ref2;
    node[_key2] = null;
  }

  return node;
}

function inheritsComments(child, parent) {
  inheritTrailingComments(child, parent);
  inheritLeadingComments(child, parent);
  inheritInnerComments(child, parent);
  return child;
}

function inheritTrailingComments(child, parent) {
  _inheritComments("trailingComments", child, parent);
}

function inheritLeadingComments(child, parent) {
  _inheritComments("leadingComments", child, parent);
}

function inheritInnerComments(child, parent) {
  _inheritComments("innerComments", child, parent);
}

function _inheritComments(key, child, parent) {
  if (child && parent) {
    child[key] = (0, _uniq.default)([].concat(child[key], parent[key]).filter(Boolean));
  }
}

function inherits(child, parent) {
  if (!child || !parent) return child;
  var _arr3 = t.INHERIT_KEYS.optional;

  for (var _i5 = 0; _i5 < _arr3.length; _i5++) {
    var key = _arr3[_i5];

    if (child[key] == null) {
      child[key] = parent[key];
    }
  }

  for (var _key3 in parent) {
    if (_key3[0] === "_" && _key3 !== "__clone") child[_key3] = parent[_key3];
  }

  var _arr4 = t.INHERIT_KEYS.force;

  for (var _i6 = 0; _i6 < _arr4.length; _i6++) {
    var _key4 = _arr4[_i6];
    child[_key4] = parent[_key4];
  }

  t.inheritsComments(child, parent);
  return child;
}

function assertNode(node) {
  if (!isNode(node)) {
    throw new TypeError("Not a valid node " + (node && node.type));
  }
}

function isNode(node) {
  return !!(node && _definitions.VISITOR_KEYS[node.type]);
}

(0, _toFastProperties.default)(t);
(0, _toFastProperties.default)(t.VISITOR_KEYS);

function traverseFast(node, enter, opts) {
  if (!node) return;
  var keys = t.VISITOR_KEYS[node.type];
  if (!keys) return;
  opts = opts || {};
  enter(node, opts);

  for (var _iterator3 = keys, _isArray3 = Array.isArray(_iterator3), _i7 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
    var _ref3;

    if (_isArray3) {
      if (_i7 >= _iterator3.length) break;
      _ref3 = _iterator3[_i7++];
    } else {
      _i7 = _iterator3.next();
      if (_i7.done) break;
      _ref3 = _i7.value;
    }

    var _key5 = _ref3;
    var subNode = node[_key5];

    if (Array.isArray(subNode)) {
      for (var _iterator4 = subNode, _isArray4 = Array.isArray(_iterator4), _i8 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray4) {
          if (_i8 >= _iterator4.length) break;
          _ref4 = _iterator4[_i8++];
        } else {
          _i8 = _iterator4.next();
          if (_i8.done) break;
          _ref4 = _i8.value;
        }

        var _node3 = _ref4;
        traverseFast(_node3, enter, opts);
      }
    } else {
      traverseFast(subNode, enter, opts);
    }
  }
}

var CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];
var CLEAR_KEYS_PLUS_COMMENTS = t.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);

function removeProperties(node, opts) {
  opts = opts || {};
  var map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;

  for (var _iterator5 = map, _isArray5 = Array.isArray(_iterator5), _i9 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
    var _ref5;

    if (_isArray5) {
      if (_i9 >= _iterator5.length) break;
      _ref5 = _iterator5[_i9++];
    } else {
      _i9 = _iterator5.next();
      if (_i9.done) break;
      _ref5 = _i9.value;
    }

    var _key7 = _ref5;
    if (node[_key7] != null) node[_key7] = undefined;
  }

  for (var _key6 in node) {
    if (_key6[0] === "_" && node[_key6] != null) node[_key6] = undefined;
  }

  var syms = Object.getOwnPropertySymbols(node);

  for (var _iterator6 = syms, _isArray6 = Array.isArray(_iterator6), _i10 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
    var _ref6;

    if (_isArray6) {
      if (_i10 >= _iterator6.length) break;
      _ref6 = _iterator6[_i10++];
    } else {
      _i10 = _iterator6.next();
      if (_i10.done) break;
      _ref6 = _i10.value;
    }

    var _sym = _ref6;
    node[_sym] = null;
  }
}

function removePropertiesDeep(tree, opts) {
  traverseFast(tree, removeProperties, opts);
  return tree;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = _default;

var _cloneDeep = _interopRequireDefault(__webpack_require__(396));

var _has = _interopRequireDefault(__webpack_require__(164));

var _babelTraverse = _interopRequireDefault(__webpack_require__(4));

var babylon = _interopRequireWildcard(__webpack_require__(98));

var _babelCodeFrame = __webpack_require__(60);

var t = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var FROM_TEMPLATE = new Set();

function _default(firstArg) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  if (typeof firstArg === "string") {
    return factory.apply(void 0, [firstArg].concat(rest));
  } else {
    return template.apply(void 0, [firstArg].concat(rest));
  }
}

function template(partials) {
  if (!Array.isArray(partials)) {
    return templateApply.bind(undefined, partials);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return templateApply.apply(void 0, [null, partials].concat(args));
}

function templateApply(opts, partials) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  if (partials.some(function (str) {
    return str.includes("$BABEL_TEMPLATE$");
  })) {
    throw new Error("Template contains illegal substring $BABEL_TEMPLATE$");
  }

  if (partials.length == 1) {
    return factory(partials[0], opts);
  }

  var replacementSet = new Set();
  var replacementMap = new Map();
  var replacementValueMap = new Map();
  var hasNonNumericReplacement = false;

  for (var _i = 0; _i < args.length; _i++) {
    var arg = args[_i];

    if (replacementMap.has(arg)) {
      continue;
    }

    if (typeof arg === "number") {
      replacementMap.set(arg, "$" + arg);
    } else if (typeof arg === "string") {
      var replacementBase = "$BABEL_TEMPLATE$$" + t.toIdentifier(arg);
      var replacement = replacementBase;

      for (var i = 2; replacementSet.has(replacement); i++) {
        replacement = "" + replacementBase + i;
      }

      replacementSet.add(replacement);
      replacementMap.set(arg, replacement);
      hasNonNumericReplacement = true;
    } else {
      var name = "$BABEL_TEMPLATE$VALUE$" + replacementValueMap.size;
      replacementMap.set(arg, name);
      replacementValueMap.set(name, arg);
      hasNonNumericReplacement = true;
    }
  }

  if (hasNonNumericReplacement && replacementMap.has(0)) {
    throw new Error("Template cannot have a '0' replacement and a named replacement at the same time");
  }

  var code = partials.reduce(function (acc, partial, i) {
    if (acc == null) {
      return partial;
    }

    var replacement = replacementMap.get(args[i - 1]);
    return "" + acc + replacement + partial;
  }, null);
  var func = factory(code, opts);
  return function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    if (hasNonNumericReplacement) {
      var argObj = args[0] || {};
      var converted = {};

      for (var _iterator = replacementMap, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray) {
          if (_i2 >= _iterator.length) break;
          _ref2 = _iterator[_i2++];
        } else {
          _i2 = _iterator.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var _ref3 = _ref2;
        var _key5 = _ref3[0];
        var _replacement = _ref3[1];
        if (typeof _key5 === "number") continue;

        if (replacementValueMap.has(_replacement)) {
          converted[_replacement] = replacementValueMap.get(_replacement);
        } else {
          converted[_replacement] = argObj[_key5];
        }
      }

      args[0] = converted;
    }

    return func.apply(void 0, args);
  };
}

function factory(code, opts) {
  var stack;

  try {
    throw new Error();
  } catch (error) {
    if (error.stack) {
      stack = error.stack.split("\n").slice(2).join("\n");
    }
  }

  opts = Object.assign({
    allowReturnOutsideFunction: true,
    allowSuperOutsideMethod: true,
    preserveComments: false
  }, opts);

  var _getAst = function getAst() {
    var ast;

    try {
      ast = babylon.parse(code, opts);
      ast = _babelTraverse.default.removeProperties(ast, {
        preserveComments: opts.preserveComments
      });
    } catch (err) {
      var loc = err.loc;

      if (loc) {
        err.loc = null;
        err.message += "\n" + (0, _babelCodeFrame.codeFrameColumns)(code, {
          start: loc
        });
      }

      err.stack = err.stack + "\n    ==========================\n" + stack;
      throw err;
    }

    _getAst = function getAst() {
      return ast;
    };

    return ast;
  };

  return function () {
    for (var _len5 = arguments.length, args = new Array(_len5), _key6 = 0; _key6 < _len5; _key6++) {
      args[_key6] = arguments[_key6];
    }

    return useTemplate(_getAst(), args);
  };
}

function useTemplate(ast, nodes) {
  ast = (0, _cloneDeep.default)(ast);
  var _ast = ast,
      program = _ast.program;

  if (nodes.length) {
    _babelTraverse.default.cheap(ast, function (node) {
      FROM_TEMPLATE.add(node);
    });

    (0, _babelTraverse.default)(ast, templateVisitor, null, nodes);
    FROM_TEMPLATE.clear();
  }

  if (program.body.length > 1) {
    return program.body;
  } else {
    return program.body[0];
  }
}

var templateVisitor = {
  noScope: true,
  Identifier: function Identifier(path, args) {
    var _path = path,
        node = _path.node,
        parentPath = _path.parentPath;
    if (!FROM_TEMPLATE.has(node)) return path.skip();
    var replacement;

    if ((0, _has.default)(args[0], node.name)) {
      replacement = args[0][node.name];
    } else if (node.name[0] === "$") {
      var i = +node.name.slice(1);
      if (args[i]) replacement = args[i];
    }

    if (parentPath.isExpressionStatement()) {
      path = parentPath;
    }

    if (replacement === null) {
      path.remove();
    } else if (replacement) {
      path.replaceInline(replacement);
      path.skip();
    }
  },
  exit: function exit(_ref4) {
    var node = _ref4.node;

    if (!node.loc) {
      _babelTraverse.default.clearNode(node);
    }
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createTypeAnnotationBasedOnTypeof = exports.removeTypeDuplicates = exports.createUnionTypeAnnotation = exports.valueToNode = exports.toBlock = exports.toExpression = exports.toStatement = exports.toBindingIdentifierName = exports.toIdentifier = exports.toKeyAlias = exports.toSequenceExpression = exports.toComputedKey = exports.isNodesEquivalent = exports.isImmutable = exports.isScope = exports.isSpecifierDefault = exports.isVar = exports.isBlockScoped = exports.isLet = exports.isValidIdentifier = exports.isReferenced = exports.isBinding = exports.getOuterBindingIdentifiers = exports.getBindingIdentifiers = exports.TYPES = exports.react = exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = undefined;

var _getOwnPropertySymbols = __webpack_require__(253);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _getIterator2 = __webpack_require__(16);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = __webpack_require__(73);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(36);

var _stringify2 = _interopRequireDefault(_stringify);

var _constants = __webpack_require__(126);

Object.defineProperty(exports, "STATEMENT_OR_BLOCK_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.STATEMENT_OR_BLOCK_KEYS;
  }
});
Object.defineProperty(exports, "FLATTENABLE_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.FLATTENABLE_KEYS;
  }
});
Object.defineProperty(exports, "FOR_INIT_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.FOR_INIT_KEYS;
  }
});
Object.defineProperty(exports, "COMMENT_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.COMMENT_KEYS;
  }
});
Object.defineProperty(exports, "LOGICAL_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.LOGICAL_OPERATORS;
  }
});
Object.defineProperty(exports, "UPDATE_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.UPDATE_OPERATORS;
  }
});
Object.defineProperty(exports, "BOOLEAN_NUMBER_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BOOLEAN_NUMBER_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "EQUALITY_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.EQUALITY_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "COMPARISON_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.COMPARISON_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "BOOLEAN_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BOOLEAN_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "NUMBER_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.NUMBER_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "BOOLEAN_UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BOOLEAN_UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "NUMBER_UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.NUMBER_UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "STRING_UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.STRING_UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "INHERIT_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.INHERIT_KEYS;
  }
});
Object.defineProperty(exports, "BLOCK_SCOPED_SYMBOL", {
  enumerable: true,
  get: function get() {
    return _constants.BLOCK_SCOPED_SYMBOL;
  }
});
Object.defineProperty(exports, "NOT_LOCAL_BINDING", {
  enumerable: true,
  get: function get() {
    return _constants.NOT_LOCAL_BINDING;
  }
});
exports.is = is;
exports.isType = isType;
exports.validate = validate;
exports.shallowEqual = shallowEqual;
exports.appendToMemberExpression = appendToMemberExpression;
exports.prependToMemberExpression = prependToMemberExpression;
exports.ensureBlock = ensureBlock;
exports.clone = clone;
exports.cloneWithoutLoc = cloneWithoutLoc;
exports.cloneDeep = cloneDeep;
exports.buildMatchMemberExpression = buildMatchMemberExpression;
exports.removeComments = removeComments;
exports.inheritsComments = inheritsComments;
exports.inheritTrailingComments = inheritTrailingComments;
exports.inheritLeadingComments = inheritLeadingComments;
exports.inheritInnerComments = inheritInnerComments;
exports.inherits = inherits;
exports.assertNode = assertNode;
exports.isNode = isNode;
exports.traverseFast = traverseFast;
exports.removeProperties = removeProperties;
exports.removePropertiesDeep = removePropertiesDeep;

var _retrievers = __webpack_require__(265);

Object.defineProperty(exports, "getBindingIdentifiers", {
  enumerable: true,
  get: function get() {
    return _retrievers.getBindingIdentifiers;
  }
});
Object.defineProperty(exports, "getOuterBindingIdentifiers", {
  enumerable: true,
  get: function get() {
    return _retrievers.getOuterBindingIdentifiers;
  }
});

var _validators = __webpack_require__(603);

Object.defineProperty(exports, "isBinding", {
  enumerable: true,
  get: function get() {
    return _validators.isBinding;
  }
});
Object.defineProperty(exports, "isReferenced", {
  enumerable: true,
  get: function get() {
    return _validators.isReferenced;
  }
});
Object.defineProperty(exports, "isValidIdentifier", {
  enumerable: true,
  get: function get() {
    return _validators.isValidIdentifier;
  }
});
Object.defineProperty(exports, "isLet", {
  enumerable: true,
  get: function get() {
    return _validators.isLet;
  }
});
Object.defineProperty(exports, "isBlockScoped", {
  enumerable: true,
  get: function get() {
    return _validators.isBlockScoped;
  }
});
Object.defineProperty(exports, "isVar", {
  enumerable: true,
  get: function get() {
    return _validators.isVar;
  }
});
Object.defineProperty(exports, "isSpecifierDefault", {
  enumerable: true,
  get: function get() {
    return _validators.isSpecifierDefault;
  }
});
Object.defineProperty(exports, "isScope", {
  enumerable: true,
  get: function get() {
    return _validators.isScope;
  }
});
Object.defineProperty(exports, "isImmutable", {
  enumerable: true,
  get: function get() {
    return _validators.isImmutable;
  }
});
Object.defineProperty(exports, "isNodesEquivalent", {
  enumerable: true,
  get: function get() {
    return _validators.isNodesEquivalent;
  }
});

var _converters = __webpack_require__(611);

Object.defineProperty(exports, "toComputedKey", {
  enumerable: true,
  get: function get() {
    return _converters.toComputedKey;
  }
});
Object.defineProperty(exports, "toSequenceExpression", {
  enumerable: true,
  get: function get() {
    return _converters.toSequenceExpression;
  }
});
Object.defineProperty(exports, "toKeyAlias", {
  enumerable: true,
  get: function get() {
    return _converters.toKeyAlias;
  }
});
Object.defineProperty(exports, "toIdentifier", {
  enumerable: true,
  get: function get() {
    return _converters.toIdentifier;
  }
});
Object.defineProperty(exports, "toBindingIdentifierName", {
  enumerable: true,
  get: function get() {
    return _converters.toBindingIdentifierName;
  }
});
Object.defineProperty(exports, "toStatement", {
  enumerable: true,
  get: function get() {
    return _converters.toStatement;
  }
});
Object.defineProperty(exports, "toExpression", {
  enumerable: true,
  get: function get() {
    return _converters.toExpression;
  }
});
Object.defineProperty(exports, "toBlock", {
  enumerable: true,
  get: function get() {
    return _converters.toBlock;
  }
});
Object.defineProperty(exports, "valueToNode", {
  enumerable: true,
  get: function get() {
    return _converters.valueToNode;
  }
});

var _flow = __webpack_require__(614);

Object.defineProperty(exports, "createUnionTypeAnnotation", {
  enumerable: true,
  get: function get() {
    return _flow.createUnionTypeAnnotation;
  }
});
Object.defineProperty(exports, "removeTypeDuplicates", {
  enumerable: true,
  get: function get() {
    return _flow.removeTypeDuplicates;
  }
});
Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
  enumerable: true,
  get: function get() {
    return _flow.createTypeAnnotationBasedOnTypeof;
  }
});

var _toFastProperties = __webpack_require__(268);

var _toFastProperties2 = _interopRequireDefault(_toFastProperties);

var _clone = __webpack_require__(37);

var _clone2 = _interopRequireDefault(_clone);

var _uniq = __webpack_require__(89);

var _uniq2 = _interopRequireDefault(_uniq);

__webpack_require__(615);

var _definitions = __webpack_require__(17);

var _react2 = __webpack_require__(622);

var _react = _interopRequireWildcard(_react2);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var t = exports;

function registerType(type) {
  var is = t["is" + type];

  if (!is) {
    is = t["is" + type] = function (node, opts) {
      return t.is(type, node, opts);
    };
  }

  t["assert" + type] = function (node, opts) {
    opts = opts || {};

    if (!is(node, opts)) {
      throw new Error("Expected type " + (0, _stringify2.default)(type) + " with option " + (0, _stringify2.default)(opts));
    }
  };
}

exports.VISITOR_KEYS = _definitions.VISITOR_KEYS;
exports.ALIAS_KEYS = _definitions.ALIAS_KEYS;
exports.NODE_FIELDS = _definitions.NODE_FIELDS;
exports.BUILDER_KEYS = _definitions.BUILDER_KEYS;
exports.DEPRECATED_KEYS = _definitions.DEPRECATED_KEYS;
exports.react = _react;

for (var type in t.VISITOR_KEYS) {
  registerType(type);
}

t.FLIPPED_ALIAS_KEYS = {};
(0, _keys2.default)(t.ALIAS_KEYS).forEach(function (type) {
  t.ALIAS_KEYS[type].forEach(function (alias) {
    var types = t.FLIPPED_ALIAS_KEYS[alias] = t.FLIPPED_ALIAS_KEYS[alias] || [];
    types.push(type);
  });
});
(0, _keys2.default)(t.FLIPPED_ALIAS_KEYS).forEach(function (type) {
  t[type.toUpperCase() + "_TYPES"] = t.FLIPPED_ALIAS_KEYS[type];
  registerType(type);
});
var TYPES = exports.TYPES = (0, _keys2.default)(t.VISITOR_KEYS).concat((0, _keys2.default)(t.FLIPPED_ALIAS_KEYS)).concat((0, _keys2.default)(t.DEPRECATED_KEYS));

function is(type, node, opts) {
  if (!node) return false;
  var matches = isType(node.type, type);
  if (!matches) return false;

  if (typeof opts === "undefined") {
    return true;
  } else {
    return t.shallowEqual(node, opts);
  }
}

function isType(nodeType, targetType) {
  if (nodeType === targetType) return true;
  if (t.ALIAS_KEYS[targetType]) return false;
  var aliases = t.FLIPPED_ALIAS_KEYS[targetType];

  if (aliases) {
    if (aliases[0] === nodeType) return true;

    for (var _iterator = aliases, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var alias = _ref;
      if (nodeType === alias) return true;
    }
  }

  return false;
}

(0, _keys2.default)(t.BUILDER_KEYS).forEach(function (type) {
  var keys = t.BUILDER_KEYS[type];

  function builder() {
    if (arguments.length > keys.length) {
      throw new Error("t." + type + ": Too many arguments passed. Received " + arguments.length + " but can receive " + ("no more than " + keys.length));
    }

    var node = {};
    node.type = type;
    var i = 0;

    for (var _iterator2 = keys, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var _key = _ref2;
      var field = t.NODE_FIELDS[type][_key];
      var arg = arguments[i++];
      if (arg === undefined) arg = (0, _clone2.default)(field.default);
      node[_key] = arg;
    }

    for (var key in node) {
      validate(node, key, node[key]);
    }

    return node;
  }

  t[type] = builder;
  t[type[0].toLowerCase() + type.slice(1)] = builder;
});

var _loop = function _loop(_type) {
  var newType = t.DEPRECATED_KEYS[_type];

  function proxy(fn) {
    return function () {
      console.trace("The node type " + _type + " has been renamed to " + newType);
      return fn.apply(this, arguments);
    };
  }

  t[_type] = t[_type[0].toLowerCase() + _type.slice(1)] = proxy(t[newType]);
  t["is" + _type] = proxy(t["is" + newType]);
  t["assert" + _type] = proxy(t["assert" + newType]);
};

for (var _type in t.DEPRECATED_KEYS) {
  _loop(_type);
}

function validate(node, key, val) {
  if (!node) return;
  var fields = t.NODE_FIELDS[node.type];
  if (!fields) return;
  var field = fields[key];
  if (!field || !field.validate) return;
  if (field.optional && val == null) return;
  field.validate(node, key, val);
}

function shallowEqual(actual, expected) {
  var keys = (0, _keys2.default)(expected);

  for (var _iterator3 = keys, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
    var _ref3;

    if (_isArray3) {
      if (_i3 >= _iterator3.length) break;
      _ref3 = _iterator3[_i3++];
    } else {
      _i3 = _iterator3.next();
      if (_i3.done) break;
      _ref3 = _i3.value;
    }

    var key = _ref3;

    if (actual[key] !== expected[key]) {
      return false;
    }
  }

  return true;
}

function appendToMemberExpression(member, append, computed) {
  member.object = t.memberExpression(member.object, member.property, member.computed);
  member.property = append;
  member.computed = !!computed;
  return member;
}

function prependToMemberExpression(member, prepend) {
  member.object = t.memberExpression(prepend, member.object);
  return member;
}

function ensureBlock(node) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "body";
  return node[key] = t.toBlock(node[key], node);
}

function clone(node) {
  if (!node) return node;
  var newNode = {};

  for (var key in node) {
    if (key[0] === "_") continue;
    newNode[key] = node[key];
  }

  return newNode;
}

function cloneWithoutLoc(node) {
  var newNode = clone(node);
  delete newNode.loc;
  return newNode;
}

function cloneDeep(node) {
  if (!node) return node;
  var newNode = {};

  for (var key in node) {
    if (key[0] === "_") continue;
    var val = node[key];

    if (val) {
      if (val.type) {
        val = t.cloneDeep(val);
      } else if (Array.isArray(val)) {
        val = val.map(t.cloneDeep);
      }
    }

    newNode[key] = val;
  }

  return newNode;
}

function buildMatchMemberExpression(match, allowPartial) {
  var parts = match.split(".");
  return function (member) {
    if (!t.isMemberExpression(member)) return false;
    var search = [member];
    var i = 0;

    while (search.length) {
      var node = search.shift();

      if (allowPartial && i === parts.length) {
        return true;
      }

      if (t.isIdentifier(node)) {
        if (parts[i] !== node.name) return false;
      } else if (t.isStringLiteral(node)) {
        if (parts[i] !== node.value) return false;
      } else if (t.isMemberExpression(node)) {
        if (node.computed && !t.isStringLiteral(node.property)) {
          return false;
        } else {
          search.push(node.object);
          search.push(node.property);
          continue;
        }
      } else {
        return false;
      }

      if (++i > parts.length) {
        return false;
      }
    }

    return true;
  };
}

function removeComments(node) {
  for (var _iterator4 = t.COMMENT_KEYS, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
    var _ref4;

    if (_isArray4) {
      if (_i4 >= _iterator4.length) break;
      _ref4 = _iterator4[_i4++];
    } else {
      _i4 = _iterator4.next();
      if (_i4.done) break;
      _ref4 = _i4.value;
    }

    var key = _ref4;
    delete node[key];
  }

  return node;
}

function inheritsComments(child, parent) {
  inheritTrailingComments(child, parent);
  inheritLeadingComments(child, parent);
  inheritInnerComments(child, parent);
  return child;
}

function inheritTrailingComments(child, parent) {
  _inheritComments("trailingComments", child, parent);
}

function inheritLeadingComments(child, parent) {
  _inheritComments("leadingComments", child, parent);
}

function inheritInnerComments(child, parent) {
  _inheritComments("innerComments", child, parent);
}

function _inheritComments(key, child, parent) {
  if (child && parent) {
    child[key] = (0, _uniq2.default)([].concat(child[key], parent[key]).filter(Boolean));
  }
}

function inherits(child, parent) {
  if (!child || !parent) return child;

  for (var _iterator5 = t.INHERIT_KEYS.optional, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);;) {
    var _ref5;

    if (_isArray5) {
      if (_i5 >= _iterator5.length) break;
      _ref5 = _iterator5[_i5++];
    } else {
      _i5 = _iterator5.next();
      if (_i5.done) break;
      _ref5 = _i5.value;
    }

    var _key2 = _ref5;

    if (child[_key2] == null) {
      child[_key2] = parent[_key2];
    }
  }

  for (var key in parent) {
    if (key[0] === "_") child[key] = parent[key];
  }

  for (var _iterator6 = t.INHERIT_KEYS.force, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);;) {
    var _ref6;

    if (_isArray6) {
      if (_i6 >= _iterator6.length) break;
      _ref6 = _iterator6[_i6++];
    } else {
      _i6 = _iterator6.next();
      if (_i6.done) break;
      _ref6 = _i6.value;
    }

    var _key3 = _ref6;
    child[_key3] = parent[_key3];
  }

  t.inheritsComments(child, parent);
  return child;
}

function assertNode(node) {
  if (!isNode(node)) {
    throw new TypeError("Not a valid node " + (node && node.type));
  }
}

function isNode(node) {
  return !!(node && _definitions.VISITOR_KEYS[node.type]);
}

(0, _toFastProperties2.default)(t);
(0, _toFastProperties2.default)(t.VISITOR_KEYS);

function traverseFast(node, enter, opts) {
  if (!node) return;
  var keys = t.VISITOR_KEYS[node.type];
  if (!keys) return;
  opts = opts || {};
  enter(node, opts);

  for (var _iterator7 = keys, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);;) {
    var _ref7;

    if (_isArray7) {
      if (_i7 >= _iterator7.length) break;
      _ref7 = _iterator7[_i7++];
    } else {
      _i7 = _iterator7.next();
      if (_i7.done) break;
      _ref7 = _i7.value;
    }

    var key = _ref7;
    var subNode = node[key];

    if (Array.isArray(subNode)) {
      for (var _iterator8 = subNode, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);;) {
        var _ref8;

        if (_isArray8) {
          if (_i8 >= _iterator8.length) break;
          _ref8 = _iterator8[_i8++];
        } else {
          _i8 = _iterator8.next();
          if (_i8.done) break;
          _ref8 = _i8.value;
        }

        var _node = _ref8;
        traverseFast(_node, enter, opts);
      }
    } else {
      traverseFast(subNode, enter, opts);
    }
  }
}

var CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];
var CLEAR_KEYS_PLUS_COMMENTS = t.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);

function removeProperties(node, opts) {
  opts = opts || {};
  var map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;

  for (var _iterator9 = map, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);;) {
    var _ref9;

    if (_isArray9) {
      if (_i9 >= _iterator9.length) break;
      _ref9 = _iterator9[_i9++];
    } else {
      _i9 = _iterator9.next();
      if (_i9.done) break;
      _ref9 = _i9.value;
    }

    var _key4 = _ref9;
    if (node[_key4] != null) node[_key4] = undefined;
  }

  for (var key in node) {
    if (key[0] === "_" && node[key] != null) node[key] = undefined;
  }

  var syms = (0, _getOwnPropertySymbols2.default)(node);

  for (var _iterator10 = syms, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10);;) {
    var _ref10;

    if (_isArray10) {
      if (_i10 >= _iterator10.length) break;
      _ref10 = _iterator10[_i10++];
    } else {
      _i10 = _iterator10.next();
      if (_i10.done) break;
      _ref10 = _i10.value;
    }

    var sym = _ref10;
    node[sym] = null;
  }
}

function removePropertiesDeep(tree, opts) {
  traverseFast(tree, removeProperties, opts);
  return tree;
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = traverse;
Object.defineProperty(exports, "NodePath", {
  enumerable: true,
  get: function get() {
    return _path.default;
  }
});
Object.defineProperty(exports, "Scope", {
  enumerable: true,
  get: function get() {
    return _scope.default;
  }
});
Object.defineProperty(exports, "Hub", {
  enumerable: true,
  get: function get() {
    return _hub.default;
  }
});
exports.visitors = void 0;

var _context = _interopRequireDefault(__webpack_require__(279));

var visitors = _interopRequireWildcard(__webpack_require__(409));

exports.visitors = visitors;

var _includes = _interopRequireDefault(__webpack_require__(96));

var t = _interopRequireWildcard(__webpack_require__(0));

var cache = _interopRequireWildcard(__webpack_require__(59));

var _path = _interopRequireDefault(__webpack_require__(20));

var _scope = _interopRequireDefault(__webpack_require__(95));

var _hub = _interopRequireDefault(__webpack_require__(167));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function traverse(parent, opts, scope, state, parentPath) {
  if (!parent) return;
  if (!opts) opts = {};

  if (!opts.noScope && !scope) {
    if (parent.type !== "Program" && parent.type !== "File") {
      throw new Error("You must pass a scope and parentPath unless traversing a Program/File. " + ("Instead of that you tried to traverse a " + parent.type + " node without ") + "passing scope and parentPath.");
    }
  }

  visitors.explode(opts);
  traverse.node(parent, opts, scope, state, parentPath);
}

traverse.visitors = visitors;
traverse.verify = visitors.verify;
traverse.explode = visitors.explode;
traverse.NodePath = __webpack_require__(20);
traverse.Scope = __webpack_require__(95);
traverse.Hub = __webpack_require__(167);

traverse.cheap = function (node, enter) {
  return t.traverseFast(node, enter);
};

traverse.node = function (node, opts, scope, state, parentPath, skipKeys) {
  var keys = t.VISITOR_KEYS[node.type];
  if (!keys) return;
  var context = new _context.default(scope, opts, state, parentPath);

  for (var _iterator = keys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _key = _ref;
    if (skipKeys && skipKeys[_key]) continue;
    if (context.visit(node, _key)) return;
  }
};

traverse.clearNode = function (node, opts) {
  t.removeProperties(node, opts);
  cache.path.delete(node);
};

traverse.removeProperties = function (tree, opts) {
  t.traverseFast(tree, traverse.clearNode, opts);
  return tree;
};

function hasBlacklistedType(path, state) {
  if (path.node.type === state.type) {
    state.has = true;
    path.stop();
  }
}

traverse.hasType = function (tree, type, blacklistTypes) {
  if ((0, _includes.default)(blacklistTypes, tree.type)) return false;
  if (tree.type === type) return true;
  var state = {
    has: false,
    type: type
  };
  traverse(tree, {
    noScope: true,
    blacklist: blacklistTypes,
    enter: hasBlacklistedType
  }, null, state);
  return state.has;
};

traverse.cache = cache;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.5.1'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var freeGlobal = __webpack_require__(133);
/** Detect free variable `self`. */


var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}

module.exports = isObjectLike;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;
exports.assertEach = assertEach;
exports.assertOneOf = assertOneOf;
exports.assertNodeType = assertNodeType;
exports.assertNodeOrValueType = assertNodeOrValueType;
exports.assertValueType = assertValueType;
exports.chain = chain;
exports.default = defineType;
exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = void 0;

var t = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

var VISITOR_KEYS = {};
exports.VISITOR_KEYS = VISITOR_KEYS;
var ALIAS_KEYS = {};
exports.ALIAS_KEYS = ALIAS_KEYS;
var NODE_FIELDS = {};
exports.NODE_FIELDS = NODE_FIELDS;
var BUILDER_KEYS = {};
exports.BUILDER_KEYS = BUILDER_KEYS;
var DEPRECATED_KEYS = {};
exports.DEPRECATED_KEYS = DEPRECATED_KEYS;

function getType(val) {
  if (Array.isArray(val)) {
    return "array";
  } else if (val === null) {
    return "null";
  } else if (val === undefined) {
    return "undefined";
  } else {
    return _typeof(val);
  }
}

function assertEach(callback) {
  function validator(node, key, val) {
    if (!Array.isArray(val)) return;

    for (var i = 0; i < val.length; i++) {
      callback(node, key + "[" + i + "]", val[i]);
    }
  }

  validator.each = callback;
  return validator;
}

function assertOneOf() {
  for (var _len = arguments.length, vals = new Array(_len), _key = 0; _key < _len; _key++) {
    vals[_key] = arguments[_key];
  }

  function validate(node, key, val) {
    if (vals.indexOf(val) < 0) {
      throw new TypeError("Property " + key + " expected value to be one of " + JSON.stringify(vals) + " but got " + JSON.stringify(val));
    }
  }

  validate.oneOf = vals;
  return validate;
}

function assertNodeType() {
  for (var _len2 = arguments.length, types = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    types[_key2] = arguments[_key2];
  }

  function validate(node, key, val) {
    var valid = false;

    for (var _i = 0; _i < types.length; _i++) {
      var type = types[_i];

      if (t.is(type, val)) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + JSON.stringify(types) + " " + ("but instead got " + JSON.stringify(val && val.type)));
    }
  }

  validate.oneOfNodeTypes = types;
  return validate;
}

function assertNodeOrValueType() {
  for (var _len3 = arguments.length, types = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    types[_key3] = arguments[_key3];
  }

  function validate(node, key, val) {
    var valid = false;

    for (var _i2 = 0; _i2 < types.length; _i2++) {
      var type = types[_i2];

      if (getType(val) === type || t.is(type, val)) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + JSON.stringify(types) + " " + ("but instead got " + JSON.stringify(val && val.type)));
    }
  }

  validate.oneOfNodeOrValueTypes = types;
  return validate;
}

function assertValueType(type) {
  function validate(node, key, val) {
    var valid = getType(val) === type;

    if (!valid) {
      throw new TypeError("Property " + key + " expected type of " + type + " but got " + getType(val));
    }
  }

  validate.type = type;
  return validate;
}

function chain() {
  for (var _len4 = arguments.length, fns = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
  }

  function validate() {
    for (var _i3 = 0; _i3 < fns.length; _i3++) {
      var fn = fns[_i3];
      fn.apply(void 0, arguments);
    }
  }

  validate.chainOf = fns;
  return validate;
}

function defineType(type, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var inherits = opts.inherits && store[opts.inherits] || {};
  opts.fields = opts.fields || inherits.fields || {};
  opts.visitor = opts.visitor || inherits.visitor || [];
  opts.aliases = opts.aliases || inherits.aliases || [];
  opts.builder = opts.builder || inherits.builder || opts.visitor || [];

  if (opts.deprecatedAlias) {
    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
  }

  var _arr = opts.visitor.concat(opts.builder);

  for (var _i4 = 0; _i4 < _arr.length; _i4++) {
    var key = _arr[_i4];
    opts.fields[key] = opts.fields[key] || {};
  }

  for (var _key5 in opts.fields) {
    var field = opts.fields[_key5];

    if (opts.builder.indexOf(_key5) === -1) {
      field.optional = true;
    }

    if (field.default === undefined) {
      field.default = null;
    } else if (!field.validate) {
      field.validate = assertValueType(getType(field.default));
    }
  }

  VISITOR_KEYS[type] = opts.visitor;
  BUILDER_KEYS[type] = opts.builder;
  NODE_FIELDS[type] = opts.fields;
  ALIAS_KEYS[type] = opts.aliases;
  store[type] = opts;
}

var store = {};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;

  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];

    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
} // Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.


var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;

var splitPath = function splitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
}; // path.resolve([from ...], to)
// posix version


exports.resolve = function () {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : process.cwd(); // Skip empty and invalid entries

    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  } // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)
  // Normalize the path


  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');
  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}; // path.normalize(path)
// posix version


exports.normalize = function (path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/'; // Normalize the path

  path = normalizeArray(filter(path.split('/'), function (p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }

  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
}; // posix version


exports.isAbsolute = function (path) {
  return path.charAt(0) === '/';
}; // posix version


exports.join = function () {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function (p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }

    return p;
  }).join('/'));
}; // path.relative(from, to)
// posix version


exports.relative = function (from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;

    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;

    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;

  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];

  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};

exports.basename = function (path, ext) {
  var f = splitPath(path)[2]; // TODO: make this comparison case-insensitive on windows?

  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }

  return f;
};

exports.extname = function (path) {
  return splitPath(path)[3];
};

function filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }

  return res;
} // String.prototype.substr - negative index don't work in IE8


var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
  return str.substr(start, len);
} : function (str, start, len) {
  if (start < 0) start = str.length + start;
  return str.substr(start, len);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(28),
    getRawTag = __webpack_require__(292),
    objectToString = __webpack_require__(293);
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) { // compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }

  if (y < x) {
    return 1;
  }

  return 0;
}

function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }

  return !!(b != null && b._isBuffer);
} // based on node assert, original notice:
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


var util = __webpack_require__(205);

var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;

var functionsHaveNames = function () {
  return function foo() {}.name === 'foo';
}();

function pToString(obj) {
  return Object.prototype.toString.call(obj);
}

function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }

  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }

  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }

  if (!arrbuf) {
    return false;
  }

  if (arrbuf instanceof DataView) {
    return true;
  }

  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }

  return false;
} // 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.


var assert = module.exports = ok; // 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/; // based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js

function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }

  if (functionsHaveNames) {
    return func.name;
  }

  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;

  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }

  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();

    if (err.stack) {
      var out = err.stack; // try to strip useless frames

      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);

      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
}; // assert.AssertionError instanceof Error


util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }

  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' + name + ']';
}

function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' + self.operator + ' ' + truncate(inspect(self.expected), 128);
} // At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.
// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.


function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
} // EXTENSION! allows for well behaved errors defined elsewhere.


assert.fail = fail; // 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}

assert.ok = ok; // 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
}; // 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);


assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
}; // 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);


assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0; // 7.2. If the expected value is a Date object, the actual value is
    // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime(); // 7.3 If the expected value is a RegExp object, the actual value is
    // equivalent if it is also a RegExp object with the same source and
    // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase; // 7.4. Other pairs that do not both pass typeof value == 'object',
    // equivalence is determined by ==.
  } else if ((actual === null || _typeof(actual) !== 'object') && (expected === null || _typeof(expected) !== 'object')) {
    return strict ? actual === expected : actual == expected; // If both values are instances of typed arrays, wrap their underlying
    // ArrayBuffers in a Buffer each to increase performance
    // This optimization requires the arrays to have the same type as checked by
    // Object.prototype.toString (aka pToString). Never perform binary
    // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
    // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0; // 7.5 For all other Object pairs, including Array objects, equivalence is
    // determined by having the same number of owned properties (as verified
    // with Object.prototype.hasOwnProperty.call), the same set of keys
    // (although not necessarily the same order), equivalent values for every
    // corresponding key, and an identical 'prototype' property. Note: this
    // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {
      actual: [],
      expected: []
    };
    var actualIndex = memos.actual.indexOf(actual);

    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);
    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined) return false; // if one is a primitive, the other must be same

  if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;

  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }

  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i; // having the same number of owned properties (keys incorporates
  // hasOwnProperty)

  if (ka.length !== kb.length) return false; //the same set of keys (although not necessarily the same order),

  ka.sort();
  kb.sort(); //~~~cheap key test

  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i]) return false;
  } //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test


  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects)) return false;
  }

  return true;
} // 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);


assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;

function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
} // 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);


assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
}; // 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);


assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {// Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;

  try {
    block();
  } catch (e) {
    error = e;
  }

  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);
  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
    throw actual;
  }
} // 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);


assert.throws = function (block,
/*optional*/
error,
/*optional*/
message) {
  _throws(true, block, error, message);
}; // EXTENSION! This is annoying to write outside this module.


assert.doesNotThrow = function (block,
/*optional*/
error,
/*optional*/
message) {
  _throws(false, block, error, message);
};

assert.ifError = function (err) {
  if (err) throw err;
};

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }

  return keys;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(114)('wks');

var uid = __webpack_require__(70);

var _Symbol = __webpack_require__(14).Symbol;

var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(586),
  __esModule: true
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = undefined;

var _getIterator2 = __webpack_require__(16);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _stringify = __webpack_require__(36);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(74);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.assertEach = assertEach;
exports.assertOneOf = assertOneOf;
exports.assertNodeType = assertNodeType;
exports.assertNodeOrValueType = assertNodeOrValueType;
exports.assertValueType = assertValueType;
exports.chain = chain;
exports.default = defineType;

var _index = __webpack_require__(2);

var t = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var VISITOR_KEYS = exports.VISITOR_KEYS = {};
var ALIAS_KEYS = exports.ALIAS_KEYS = {};
var NODE_FIELDS = exports.NODE_FIELDS = {};
var BUILDER_KEYS = exports.BUILDER_KEYS = {};
var DEPRECATED_KEYS = exports.DEPRECATED_KEYS = {};

function getType(val) {
  if (Array.isArray(val)) {
    return "array";
  } else if (val === null) {
    return "null";
  } else if (val === undefined) {
    return "undefined";
  } else {
    return typeof val === "undefined" ? "undefined" : (0, _typeof3.default)(val);
  }
}

function assertEach(callback) {
  function validator(node, key, val) {
    if (!Array.isArray(val)) return;

    for (var i = 0; i < val.length; i++) {
      callback(node, key + "[" + i + "]", val[i]);
    }
  }

  validator.each = callback;
  return validator;
}

function assertOneOf() {
  for (var _len = arguments.length, vals = Array(_len), _key = 0; _key < _len; _key++) {
    vals[_key] = arguments[_key];
  }

  function validate(node, key, val) {
    if (vals.indexOf(val) < 0) {
      throw new TypeError("Property " + key + " expected value to be one of " + (0, _stringify2.default)(vals) + " but got " + (0, _stringify2.default)(val));
    }
  }

  validate.oneOf = vals;
  return validate;
}

function assertNodeType() {
  for (var _len2 = arguments.length, types = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    types[_key2] = arguments[_key2];
  }

  function validate(node, key, val) {
    var valid = false;

    for (var _iterator = types, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var type = _ref;

      if (t.is(type, val)) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + (0, _stringify2.default)(types) + " " + ("but instead got " + (0, _stringify2.default)(val && val.type)));
    }
  }

  validate.oneOfNodeTypes = types;
  return validate;
}

function assertNodeOrValueType() {
  for (var _len3 = arguments.length, types = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    types[_key3] = arguments[_key3];
  }

  function validate(node, key, val) {
    var valid = false;

    for (var _iterator2 = types, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var type = _ref2;

      if (getType(val) === type || t.is(type, val)) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + (0, _stringify2.default)(types) + " " + ("but instead got " + (0, _stringify2.default)(val && val.type)));
    }
  }

  validate.oneOfNodeOrValueTypes = types;
  return validate;
}

function assertValueType(type) {
  function validate(node, key, val) {
    var valid = getType(val) === type;

    if (!valid) {
      throw new TypeError("Property " + key + " expected type of " + type + " but got " + getType(val));
    }
  }

  validate.type = type;
  return validate;
}

function chain() {
  for (var _len4 = arguments.length, fns = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
  }

  function validate() {
    for (var _iterator3 = fns, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
      var _ref3;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref3 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var fn = _ref3;
      fn.apply(undefined, arguments);
    }
  }

  validate.chainOf = fns;
  return validate;
}

function defineType(type) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var inherits = opts.inherits && store[opts.inherits] || {};
  opts.fields = opts.fields || inherits.fields || {};
  opts.visitor = opts.visitor || inherits.visitor || [];
  opts.aliases = opts.aliases || inherits.aliases || [];
  opts.builder = opts.builder || inherits.builder || opts.visitor || [];

  if (opts.deprecatedAlias) {
    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
  }

  for (var _iterator4 = opts.visitor.concat(opts.builder), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
    var _ref4;

    if (_isArray4) {
      if (_i4 >= _iterator4.length) break;
      _ref4 = _iterator4[_i4++];
    } else {
      _i4 = _iterator4.next();
      if (_i4.done) break;
      _ref4 = _i4.value;
    }

    var _key5 = _ref4;
    opts.fields[_key5] = opts.fields[_key5] || {};
  }

  for (var key in opts.fields) {
    var field = opts.fields[key];

    if (opts.builder.indexOf(key) === -1) {
      field.optional = true;
    }

    if (field.default === undefined) {
      field.default = null;
    } else if (!field.validate) {
      field.validate = assertValueType(getType(field.default));
    }
  }

  VISITOR_KEYS[type] = opts.visitor;
  BUILDER_KEYS[type] = opts.builder;
  NODE_FIELDS[type] = opts.fields;
  ALIAS_KEYS[type] = opts.aliases;
  store[type] = opts;
}

var store = {};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createTypeAnnotationBasedOnTypeof = exports.removeTypeDuplicates = exports.createUnionTypeAnnotation = exports.valueToNode = exports.toBlock = exports.toExpression = exports.toStatement = exports.toBindingIdentifierName = exports.toIdentifier = exports.toKeyAlias = exports.toSequenceExpression = exports.toComputedKey = exports.isNodesEquivalent = exports.isImmutable = exports.isScope = exports.isSpecifierDefault = exports.isVar = exports.isBlockScoped = exports.isLet = exports.isValidIdentifier = exports.isReferenced = exports.isBinding = exports.getOuterBindingIdentifiers = exports.getBindingIdentifiers = exports.TYPES = exports.react = exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = undefined;

var _getOwnPropertySymbols = __webpack_require__(253);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _getIterator2 = __webpack_require__(16);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = __webpack_require__(73);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(36);

var _stringify2 = _interopRequireDefault(_stringify);

var _constants = __webpack_require__(127);

Object.defineProperty(exports, "STATEMENT_OR_BLOCK_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.STATEMENT_OR_BLOCK_KEYS;
  }
});
Object.defineProperty(exports, "FLATTENABLE_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.FLATTENABLE_KEYS;
  }
});
Object.defineProperty(exports, "FOR_INIT_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.FOR_INIT_KEYS;
  }
});
Object.defineProperty(exports, "COMMENT_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.COMMENT_KEYS;
  }
});
Object.defineProperty(exports, "LOGICAL_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.LOGICAL_OPERATORS;
  }
});
Object.defineProperty(exports, "UPDATE_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.UPDATE_OPERATORS;
  }
});
Object.defineProperty(exports, "BOOLEAN_NUMBER_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BOOLEAN_NUMBER_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "EQUALITY_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.EQUALITY_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "COMPARISON_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.COMPARISON_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "BOOLEAN_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BOOLEAN_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "NUMBER_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.NUMBER_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "BOOLEAN_UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BOOLEAN_UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "NUMBER_UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.NUMBER_UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "STRING_UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.STRING_UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "INHERIT_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.INHERIT_KEYS;
  }
});
Object.defineProperty(exports, "BLOCK_SCOPED_SYMBOL", {
  enumerable: true,
  get: function get() {
    return _constants.BLOCK_SCOPED_SYMBOL;
  }
});
Object.defineProperty(exports, "NOT_LOCAL_BINDING", {
  enumerable: true,
  get: function get() {
    return _constants.NOT_LOCAL_BINDING;
  }
});
exports.is = is;
exports.isType = isType;
exports.validate = validate;
exports.shallowEqual = shallowEqual;
exports.appendToMemberExpression = appendToMemberExpression;
exports.prependToMemberExpression = prependToMemberExpression;
exports.ensureBlock = ensureBlock;
exports.clone = clone;
exports.cloneWithoutLoc = cloneWithoutLoc;
exports.cloneDeep = cloneDeep;
exports.buildMatchMemberExpression = buildMatchMemberExpression;
exports.removeComments = removeComments;
exports.inheritsComments = inheritsComments;
exports.inheritTrailingComments = inheritTrailingComments;
exports.inheritLeadingComments = inheritLeadingComments;
exports.inheritInnerComments = inheritInnerComments;
exports.inherits = inherits;
exports.assertNode = assertNode;
exports.isNode = isNode;
exports.traverseFast = traverseFast;
exports.removeProperties = removeProperties;
exports.removePropertiesDeep = removePropertiesDeep;

var _retrievers = __webpack_require__(272);

Object.defineProperty(exports, "getBindingIdentifiers", {
  enumerable: true,
  get: function get() {
    return _retrievers.getBindingIdentifiers;
  }
});
Object.defineProperty(exports, "getOuterBindingIdentifiers", {
  enumerable: true,
  get: function get() {
    return _retrievers.getOuterBindingIdentifiers;
  }
});

var _validators = __webpack_require__(631);

Object.defineProperty(exports, "isBinding", {
  enumerable: true,
  get: function get() {
    return _validators.isBinding;
  }
});
Object.defineProperty(exports, "isReferenced", {
  enumerable: true,
  get: function get() {
    return _validators.isReferenced;
  }
});
Object.defineProperty(exports, "isValidIdentifier", {
  enumerable: true,
  get: function get() {
    return _validators.isValidIdentifier;
  }
});
Object.defineProperty(exports, "isLet", {
  enumerable: true,
  get: function get() {
    return _validators.isLet;
  }
});
Object.defineProperty(exports, "isBlockScoped", {
  enumerable: true,
  get: function get() {
    return _validators.isBlockScoped;
  }
});
Object.defineProperty(exports, "isVar", {
  enumerable: true,
  get: function get() {
    return _validators.isVar;
  }
});
Object.defineProperty(exports, "isSpecifierDefault", {
  enumerable: true,
  get: function get() {
    return _validators.isSpecifierDefault;
  }
});
Object.defineProperty(exports, "isScope", {
  enumerable: true,
  get: function get() {
    return _validators.isScope;
  }
});
Object.defineProperty(exports, "isImmutable", {
  enumerable: true,
  get: function get() {
    return _validators.isImmutable;
  }
});
Object.defineProperty(exports, "isNodesEquivalent", {
  enumerable: true,
  get: function get() {
    return _validators.isNodesEquivalent;
  }
});

var _converters = __webpack_require__(632);

Object.defineProperty(exports, "toComputedKey", {
  enumerable: true,
  get: function get() {
    return _converters.toComputedKey;
  }
});
Object.defineProperty(exports, "toSequenceExpression", {
  enumerable: true,
  get: function get() {
    return _converters.toSequenceExpression;
  }
});
Object.defineProperty(exports, "toKeyAlias", {
  enumerable: true,
  get: function get() {
    return _converters.toKeyAlias;
  }
});
Object.defineProperty(exports, "toIdentifier", {
  enumerable: true,
  get: function get() {
    return _converters.toIdentifier;
  }
});
Object.defineProperty(exports, "toBindingIdentifierName", {
  enumerable: true,
  get: function get() {
    return _converters.toBindingIdentifierName;
  }
});
Object.defineProperty(exports, "toStatement", {
  enumerable: true,
  get: function get() {
    return _converters.toStatement;
  }
});
Object.defineProperty(exports, "toExpression", {
  enumerable: true,
  get: function get() {
    return _converters.toExpression;
  }
});
Object.defineProperty(exports, "toBlock", {
  enumerable: true,
  get: function get() {
    return _converters.toBlock;
  }
});
Object.defineProperty(exports, "valueToNode", {
  enumerable: true,
  get: function get() {
    return _converters.valueToNode;
  }
});

var _flow = __webpack_require__(633);

Object.defineProperty(exports, "createUnionTypeAnnotation", {
  enumerable: true,
  get: function get() {
    return _flow.createUnionTypeAnnotation;
  }
});
Object.defineProperty(exports, "removeTypeDuplicates", {
  enumerable: true,
  get: function get() {
    return _flow.removeTypeDuplicates;
  }
});
Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
  enumerable: true,
  get: function get() {
    return _flow.createTypeAnnotationBasedOnTypeof;
  }
});

var _toFastProperties = __webpack_require__(268);

var _toFastProperties2 = _interopRequireDefault(_toFastProperties);

var _clone = __webpack_require__(37);

var _clone2 = _interopRequireDefault(_clone);

var _uniq = __webpack_require__(89);

var _uniq2 = _interopRequireDefault(_uniq);

__webpack_require__(634);

var _definitions = __webpack_require__(19);

var _react2 = __webpack_require__(641);

var _react = _interopRequireWildcard(_react2);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var t = exports;

function registerType(type) {
  var is = t["is" + type];

  if (!is) {
    is = t["is" + type] = function (node, opts) {
      return t.is(type, node, opts);
    };
  }

  t["assert" + type] = function (node, opts) {
    opts = opts || {};

    if (!is(node, opts)) {
      throw new Error("Expected type " + (0, _stringify2.default)(type) + " with option " + (0, _stringify2.default)(opts));
    }
  };
}

exports.VISITOR_KEYS = _definitions.VISITOR_KEYS;
exports.ALIAS_KEYS = _definitions.ALIAS_KEYS;
exports.NODE_FIELDS = _definitions.NODE_FIELDS;
exports.BUILDER_KEYS = _definitions.BUILDER_KEYS;
exports.DEPRECATED_KEYS = _definitions.DEPRECATED_KEYS;
exports.react = _react;

for (var type in t.VISITOR_KEYS) {
  registerType(type);
}

t.FLIPPED_ALIAS_KEYS = {};
(0, _keys2.default)(t.ALIAS_KEYS).forEach(function (type) {
  t.ALIAS_KEYS[type].forEach(function (alias) {
    var types = t.FLIPPED_ALIAS_KEYS[alias] = t.FLIPPED_ALIAS_KEYS[alias] || [];
    types.push(type);
  });
});
(0, _keys2.default)(t.FLIPPED_ALIAS_KEYS).forEach(function (type) {
  t[type.toUpperCase() + "_TYPES"] = t.FLIPPED_ALIAS_KEYS[type];
  registerType(type);
});
var TYPES = exports.TYPES = (0, _keys2.default)(t.VISITOR_KEYS).concat((0, _keys2.default)(t.FLIPPED_ALIAS_KEYS)).concat((0, _keys2.default)(t.DEPRECATED_KEYS));

function is(type, node, opts) {
  if (!node) return false;
  var matches = isType(node.type, type);
  if (!matches) return false;

  if (typeof opts === "undefined") {
    return true;
  } else {
    return t.shallowEqual(node, opts);
  }
}

function isType(nodeType, targetType) {
  if (nodeType === targetType) return true;
  if (t.ALIAS_KEYS[targetType]) return false;
  var aliases = t.FLIPPED_ALIAS_KEYS[targetType];

  if (aliases) {
    if (aliases[0] === nodeType) return true;

    for (var _iterator = aliases, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var alias = _ref;
      if (nodeType === alias) return true;
    }
  }

  return false;
}

(0, _keys2.default)(t.BUILDER_KEYS).forEach(function (type) {
  var keys = t.BUILDER_KEYS[type];

  function builder() {
    if (arguments.length > keys.length) {
      throw new Error("t." + type + ": Too many arguments passed. Received " + arguments.length + " but can receive " + ("no more than " + keys.length));
    }

    var node = {};
    node.type = type;
    var i = 0;

    for (var _iterator2 = keys, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var _key = _ref2;
      var field = t.NODE_FIELDS[type][_key];
      var arg = arguments[i++];
      if (arg === undefined) arg = (0, _clone2.default)(field.default);
      node[_key] = arg;
    }

    for (var key in node) {
      validate(node, key, node[key]);
    }

    return node;
  }

  t[type] = builder;
  t[type[0].toLowerCase() + type.slice(1)] = builder;
});

var _loop = function _loop(_type) {
  var newType = t.DEPRECATED_KEYS[_type];

  function proxy(fn) {
    return function () {
      console.trace("The node type " + _type + " has been renamed to " + newType);
      return fn.apply(this, arguments);
    };
  }

  t[_type] = t[_type[0].toLowerCase() + _type.slice(1)] = proxy(t[newType]);
  t["is" + _type] = proxy(t["is" + newType]);
  t["assert" + _type] = proxy(t["assert" + newType]);
};

for (var _type in t.DEPRECATED_KEYS) {
  _loop(_type);
}

function validate(node, key, val) {
  if (!node) return;
  var fields = t.NODE_FIELDS[node.type];
  if (!fields) return;
  var field = fields[key];
  if (!field || !field.validate) return;
  if (field.optional && val == null) return;
  field.validate(node, key, val);
}

function shallowEqual(actual, expected) {
  var keys = (0, _keys2.default)(expected);

  for (var _iterator3 = keys, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
    var _ref3;

    if (_isArray3) {
      if (_i3 >= _iterator3.length) break;
      _ref3 = _iterator3[_i3++];
    } else {
      _i3 = _iterator3.next();
      if (_i3.done) break;
      _ref3 = _i3.value;
    }

    var key = _ref3;

    if (actual[key] !== expected[key]) {
      return false;
    }
  }

  return true;
}

function appendToMemberExpression(member, append, computed) {
  member.object = t.memberExpression(member.object, member.property, member.computed);
  member.property = append;
  member.computed = !!computed;
  return member;
}

function prependToMemberExpression(member, prepend) {
  member.object = t.memberExpression(prepend, member.object);
  return member;
}

function ensureBlock(node) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "body";
  return node[key] = t.toBlock(node[key], node);
}

function clone(node) {
  if (!node) return node;
  var newNode = {};

  for (var key in node) {
    if (key[0] === "_") continue;
    newNode[key] = node[key];
  }

  return newNode;
}

function cloneWithoutLoc(node) {
  var newNode = clone(node);
  delete newNode.loc;
  return newNode;
}

function cloneDeep(node) {
  if (!node) return node;
  var newNode = {};

  for (var key in node) {
    if (key[0] === "_") continue;
    var val = node[key];

    if (val) {
      if (val.type) {
        val = t.cloneDeep(val);
      } else if (Array.isArray(val)) {
        val = val.map(t.cloneDeep);
      }
    }

    newNode[key] = val;
  }

  return newNode;
}

function buildMatchMemberExpression(match, allowPartial) {
  var parts = match.split(".");
  return function (member) {
    if (!t.isMemberExpression(member)) return false;
    var search = [member];
    var i = 0;

    while (search.length) {
      var node = search.shift();

      if (allowPartial && i === parts.length) {
        return true;
      }

      if (t.isIdentifier(node)) {
        if (parts[i] !== node.name) return false;
      } else if (t.isStringLiteral(node)) {
        if (parts[i] !== node.value) return false;
      } else if (t.isMemberExpression(node)) {
        if (node.computed && !t.isStringLiteral(node.property)) {
          return false;
        } else {
          search.push(node.object);
          search.push(node.property);
          continue;
        }
      } else {
        return false;
      }

      if (++i > parts.length) {
        return false;
      }
    }

    return true;
  };
}

function removeComments(node) {
  for (var _iterator4 = t.COMMENT_KEYS, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
    var _ref4;

    if (_isArray4) {
      if (_i4 >= _iterator4.length) break;
      _ref4 = _iterator4[_i4++];
    } else {
      _i4 = _iterator4.next();
      if (_i4.done) break;
      _ref4 = _i4.value;
    }

    var key = _ref4;
    delete node[key];
  }

  return node;
}

function inheritsComments(child, parent) {
  inheritTrailingComments(child, parent);
  inheritLeadingComments(child, parent);
  inheritInnerComments(child, parent);
  return child;
}

function inheritTrailingComments(child, parent) {
  _inheritComments("trailingComments", child, parent);
}

function inheritLeadingComments(child, parent) {
  _inheritComments("leadingComments", child, parent);
}

function inheritInnerComments(child, parent) {
  _inheritComments("innerComments", child, parent);
}

function _inheritComments(key, child, parent) {
  if (child && parent) {
    child[key] = (0, _uniq2.default)([].concat(child[key], parent[key]).filter(Boolean));
  }
}

function inherits(child, parent) {
  if (!child || !parent) return child;

  for (var _iterator5 = t.INHERIT_KEYS.optional, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);;) {
    var _ref5;

    if (_isArray5) {
      if (_i5 >= _iterator5.length) break;
      _ref5 = _iterator5[_i5++];
    } else {
      _i5 = _iterator5.next();
      if (_i5.done) break;
      _ref5 = _i5.value;
    }

    var _key2 = _ref5;

    if (child[_key2] == null) {
      child[_key2] = parent[_key2];
    }
  }

  for (var key in parent) {
    if (key[0] === "_") child[key] = parent[key];
  }

  for (var _iterator6 = t.INHERIT_KEYS.force, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);;) {
    var _ref6;

    if (_isArray6) {
      if (_i6 >= _iterator6.length) break;
      _ref6 = _iterator6[_i6++];
    } else {
      _i6 = _iterator6.next();
      if (_i6.done) break;
      _ref6 = _i6.value;
    }

    var _key3 = _ref6;
    child[_key3] = parent[_key3];
  }

  t.inheritsComments(child, parent);
  return child;
}

function assertNode(node) {
  if (!isNode(node)) {
    throw new TypeError("Not a valid node " + (node && node.type));
  }
}

function isNode(node) {
  return !!(node && _definitions.VISITOR_KEYS[node.type]);
}

(0, _toFastProperties2.default)(t);
(0, _toFastProperties2.default)(t.VISITOR_KEYS);

function traverseFast(node, enter, opts) {
  if (!node) return;
  var keys = t.VISITOR_KEYS[node.type];
  if (!keys) return;
  opts = opts || {};
  enter(node, opts);

  for (var _iterator7 = keys, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);;) {
    var _ref7;

    if (_isArray7) {
      if (_i7 >= _iterator7.length) break;
      _ref7 = _iterator7[_i7++];
    } else {
      _i7 = _iterator7.next();
      if (_i7.done) break;
      _ref7 = _i7.value;
    }

    var key = _ref7;
    var subNode = node[key];

    if (Array.isArray(subNode)) {
      for (var _iterator8 = subNode, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);;) {
        var _ref8;

        if (_isArray8) {
          if (_i8 >= _iterator8.length) break;
          _ref8 = _iterator8[_i8++];
        } else {
          _i8 = _iterator8.next();
          if (_i8.done) break;
          _ref8 = _i8.value;
        }

        var _node = _ref8;
        traverseFast(_node, enter, opts);
      }
    } else {
      traverseFast(subNode, enter, opts);
    }
  }
}

var CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];
var CLEAR_KEYS_PLUS_COMMENTS = t.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);

function removeProperties(node, opts) {
  opts = opts || {};
  var map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;

  for (var _iterator9 = map, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);;) {
    var _ref9;

    if (_isArray9) {
      if (_i9 >= _iterator9.length) break;
      _ref9 = _iterator9[_i9++];
    } else {
      _i9 = _iterator9.next();
      if (_i9.done) break;
      _ref9 = _i9.value;
    }

    var _key4 = _ref9;
    if (node[_key4] != null) node[_key4] = undefined;
  }

  for (var key in node) {
    if (key[0] === "_" && node[key] != null) node[key] = undefined;
  }

  var syms = (0, _getOwnPropertySymbols2.default)(node);

  for (var _iterator10 = syms, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10);;) {
    var _ref10;

    if (_isArray10) {
      if (_i10 >= _iterator10.length) break;
      _ref10 = _iterator10[_i10++];
    } else {
      _i10 = _iterator10.next();
      if (_i10.done) break;
      _ref10 = _i10.value;
    }

    var sym = _ref10;
    node[sym] = null;
  }
}

function removePropertiesDeep(tree, opts) {
  traverseFast(tree, removeProperties, opts);
  return tree;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = undefined;

var _getIterator2 = __webpack_require__(16);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _stringify = __webpack_require__(36);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(74);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.assertEach = assertEach;
exports.assertOneOf = assertOneOf;
exports.assertNodeType = assertNodeType;
exports.assertNodeOrValueType = assertNodeOrValueType;
exports.assertValueType = assertValueType;
exports.chain = chain;
exports.default = defineType;

var _index = __webpack_require__(18);

var t = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var VISITOR_KEYS = exports.VISITOR_KEYS = {};
var ALIAS_KEYS = exports.ALIAS_KEYS = {};
var NODE_FIELDS = exports.NODE_FIELDS = {};
var BUILDER_KEYS = exports.BUILDER_KEYS = {};
var DEPRECATED_KEYS = exports.DEPRECATED_KEYS = {};

function getType(val) {
  if (Array.isArray(val)) {
    return "array";
  } else if (val === null) {
    return "null";
  } else if (val === undefined) {
    return "undefined";
  } else {
    return typeof val === "undefined" ? "undefined" : (0, _typeof3.default)(val);
  }
}

function assertEach(callback) {
  function validator(node, key, val) {
    if (!Array.isArray(val)) return;

    for (var i = 0; i < val.length; i++) {
      callback(node, key + "[" + i + "]", val[i]);
    }
  }

  validator.each = callback;
  return validator;
}

function assertOneOf() {
  for (var _len = arguments.length, vals = Array(_len), _key = 0; _key < _len; _key++) {
    vals[_key] = arguments[_key];
  }

  function validate(node, key, val) {
    if (vals.indexOf(val) < 0) {
      throw new TypeError("Property " + key + " expected value to be one of " + (0, _stringify2.default)(vals) + " but got " + (0, _stringify2.default)(val));
    }
  }

  validate.oneOf = vals;
  return validate;
}

function assertNodeType() {
  for (var _len2 = arguments.length, types = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    types[_key2] = arguments[_key2];
  }

  function validate(node, key, val) {
    var valid = false;

    for (var _iterator = types, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var type = _ref;

      if (t.is(type, val)) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + (0, _stringify2.default)(types) + " " + ("but instead got " + (0, _stringify2.default)(val && val.type)));
    }
  }

  validate.oneOfNodeTypes = types;
  return validate;
}

function assertNodeOrValueType() {
  for (var _len3 = arguments.length, types = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    types[_key3] = arguments[_key3];
  }

  function validate(node, key, val) {
    var valid = false;

    for (var _iterator2 = types, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var type = _ref2;

      if (getType(val) === type || t.is(type, val)) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + (0, _stringify2.default)(types) + " " + ("but instead got " + (0, _stringify2.default)(val && val.type)));
    }
  }

  validate.oneOfNodeOrValueTypes = types;
  return validate;
}

function assertValueType(type) {
  function validate(node, key, val) {
    var valid = getType(val) === type;

    if (!valid) {
      throw new TypeError("Property " + key + " expected type of " + type + " but got " + getType(val));
    }
  }

  validate.type = type;
  return validate;
}

function chain() {
  for (var _len4 = arguments.length, fns = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
  }

  function validate() {
    for (var _iterator3 = fns, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
      var _ref3;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref3 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var fn = _ref3;
      fn.apply(undefined, arguments);
    }
  }

  validate.chainOf = fns;
  return validate;
}

function defineType(type) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var inherits = opts.inherits && store[opts.inherits] || {};
  opts.fields = opts.fields || inherits.fields || {};
  opts.visitor = opts.visitor || inherits.visitor || [];
  opts.aliases = opts.aliases || inherits.aliases || [];
  opts.builder = opts.builder || inherits.builder || opts.visitor || [];

  if (opts.deprecatedAlias) {
    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
  }

  for (var _iterator4 = opts.visitor.concat(opts.builder), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
    var _ref4;

    if (_isArray4) {
      if (_i4 >= _iterator4.length) break;
      _ref4 = _iterator4[_i4++];
    } else {
      _i4 = _iterator4.next();
      if (_i4.done) break;
      _ref4 = _i4.value;
    }

    var _key5 = _ref4;
    opts.fields[_key5] = opts.fields[_key5] || {};
  }

  for (var key in opts.fields) {
    var field = opts.fields[key];

    if (opts.builder.indexOf(key) === -1) {
      field.optional = true;
    }

    if (field.default === undefined) {
      field.default = null;
    } else if (!field.validate) {
      field.validate = assertValueType(getType(field.default));
    }
  }

  VISITOR_KEYS[type] = opts.visitor;
  BUILDER_KEYS[type] = opts.builder;
  NODE_FIELDS[type] = opts.fields;
  ALIAS_KEYS[type] = opts.aliases;
  store[type] = opts;
}

var store = {};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var virtualTypes = _interopRequireWildcard(__webpack_require__(131));

var _debug2 = _interopRequireDefault(__webpack_require__(360));

var _invariant = _interopRequireDefault(__webpack_require__(362));

var _index = _interopRequireDefault(__webpack_require__(4));

var _scope = _interopRequireDefault(__webpack_require__(95));

var t = _interopRequireWildcard(__webpack_require__(0));

var _cache = __webpack_require__(59);

var NodePath_ancestry = _interopRequireWildcard(__webpack_require__(379));

var NodePath_inference = _interopRequireWildcard(__webpack_require__(380));

var NodePath_replacement = _interopRequireWildcard(__webpack_require__(383));

var NodePath_evaluation = _interopRequireWildcard(__webpack_require__(393));

var NodePath_conversion = _interopRequireWildcard(__webpack_require__(394));

var NodePath_introspection = _interopRequireWildcard(__webpack_require__(401));

var NodePath_context = _interopRequireWildcard(__webpack_require__(402));

var NodePath_removal = _interopRequireWildcard(__webpack_require__(403));

var NodePath_modification = _interopRequireWildcard(__webpack_require__(405));

var NodePath_family = _interopRequireWildcard(__webpack_require__(407));

var NodePath_comments = _interopRequireWildcard(__webpack_require__(408));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var _debug = (0, _debug2.default)("babel");

var NodePath = function () {
  function NodePath(hub, parent) {
    this.parent = parent;
    this.hub = hub;
    this.contexts = [];
    this.data = {};
    this.shouldSkip = false;
    this.shouldStop = false;
    this.removed = false;
    this.state = null;
    this.opts = null;
    this.skipKeys = null;
    this.parentPath = null;
    this.context = null;
    this.container = null;
    this.listKey = null;
    this.inList = false;
    this.parentKey = null;
    this.key = null;
    this.node = null;
    this.scope = null;
    this.type = null;
    this.typeAnnotation = null;
  }

  NodePath.get = function get(_ref) {
    var hub = _ref.hub,
        parentPath = _ref.parentPath,
        parent = _ref.parent,
        container = _ref.container,
        listKey = _ref.listKey,
        key = _ref.key;

    if (!hub && parentPath) {
      hub = parentPath.hub;
    }

    (0, _invariant.default)(parent, "To get a node path the parent needs to exist");
    var targetNode = container[key];
    var paths = _cache.path.get(parent) || [];

    if (!_cache.path.has(parent)) {
      _cache.path.set(parent, paths);
    }

    var path;

    for (var i = 0; i < paths.length; i++) {
      var pathCheck = paths[i];

      if (pathCheck.node === targetNode) {
        path = pathCheck;
        break;
      }
    }

    if (!path) {
      path = new NodePath(hub, parent);
      paths.push(path);
    }

    path.setup(parentPath, container, listKey, key);
    return path;
  };

  var _proto = NodePath.prototype;

  _proto.getScope = function getScope(scope) {
    return this.isScope() ? new _scope.default(this) : scope;
  };

  _proto.setData = function setData(key, val) {
    return this.data[key] = val;
  };

  _proto.getData = function getData(key, def) {
    var val = this.data[key];
    if (!val && def) val = this.data[key] = def;
    return val;
  };

  _proto.buildCodeFrameError = function buildCodeFrameError(msg, Error) {
    if (Error === void 0) {
      Error = SyntaxError;
    }

    return this.hub.file.buildCodeFrameError(this.node, msg, Error);
  };

  _proto.traverse = function traverse(visitor, state) {
    (0, _index.default)(this.node, visitor, this.scope, state, this);
  };

  _proto.set = function set(key, node) {
    t.validate(this.node, key, node);
    this.node[key] = node;
  };

  _proto.getPathLocation = function getPathLocation() {
    var parts = [];
    var path = this;

    do {
      var key = path.key;
      if (path.inList) key = path.listKey + "[" + key + "]";
      parts.unshift(key);
    } while (path = path.parentPath);

    return parts.join(".");
  };

  _proto.debug = function debug(message) {
    if (!_debug.enabled) return;

    _debug(this.getPathLocation() + " " + this.type + ": " + message);
  };

  return NodePath;
}();

exports.default = NodePath;
Object.assign(NodePath.prototype, NodePath_ancestry, NodePath_inference, NodePath_replacement, NodePath_evaluation, NodePath_conversion, NodePath_introspection, NodePath_context, NodePath_removal, NodePath_modification, NodePath_family, NodePath_comments);

var _loop = function _loop(type) {
  var typeKey = "is" + type;

  NodePath.prototype[typeKey] = function (opts) {
    return t[typeKey](this.node, opts);
  };

  NodePath.prototype["assert" + type] = function (opts) {
    if (!this[typeKey](opts)) {
      throw new TypeError("Expected node path of type " + type);
    }
  };
};

var _arr = t.TYPES;

for (var _i = 0; _i < _arr.length; _i++) {
  var type = _arr[_i];

  _loop(type);
}

var _loop2 = function _loop2(type) {
  if (type[0] === "_") return "continue";
  if (t.TYPES.indexOf(type) < 0) t.TYPES.push(type);
  var virtualType = virtualTypes[type];

  NodePath.prototype["is" + type] = function (opts) {
    return virtualType.checkPath(this, opts);
  };
};

for (var type in virtualTypes) {
  var _ret = _loop2(type);

  if (_ret === "continue") continue;
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(291),
    getValue = __webpack_require__(296);
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(135),
    baseAssignValue = __webpack_require__(79);
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}

module.exports = copyObject;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(77),
    isLength = __webpack_require__(82);
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = _default;

var _babelHelperGetFunctionArity = _interopRequireDefault(__webpack_require__(395));

var _babelTemplate = _interopRequireDefault(__webpack_require__(1));

var t = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var buildPropertyMethodAssignmentWrapper = (0, _babelTemplate.default)("\n  (function (FUNCTION_KEY) {\n    function FUNCTION_ID() {\n      return FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    }\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n");
var buildGeneratorPropertyMethodAssignmentWrapper = (0, _babelTemplate.default)("\n  (function (FUNCTION_KEY) {\n    function* FUNCTION_ID() {\n      return yield* FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    };\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n");
var visitor = {
  "ReferencedIdentifier|BindingIdentifier": function ReferencedIdentifierBindingIdentifier(path, state) {
    if (path.node.name !== state.name) return;
    var localDeclar = path.scope.getBindingIdentifier(state.name);
    if (localDeclar !== state.outerDeclar) return;
    state.selfReference = true;
    path.stop();
  }
};

function wrap(state, method, id, scope) {
  if (state.selfReference) {
    if (scope.hasBinding(id.name) && !scope.hasGlobal(id.name)) {
      scope.rename(id.name);
    } else {
      if (!t.isFunction(method)) return;
      var build = buildPropertyMethodAssignmentWrapper;

      if (method.generator) {
        build = buildGeneratorPropertyMethodAssignmentWrapper;
      }

      var _template = build({
        FUNCTION: method,
        FUNCTION_ID: id,
        FUNCTION_KEY: scope.generateUidIdentifier(id.name)
      }).expression;
      var params = _template.callee.body.body[0].params;

      for (var i = 0, len = (0, _babelHelperGetFunctionArity.default)(method); i < len; i++) {
        params.push(scope.generateUidIdentifier("x"));
      }

      return _template;
    }
  }

  method.id = id;
  scope.getProgramParent().references[id.name] = true;
}

function visit(node, name, scope) {
  var state = {
    selfAssignment: false,
    selfReference: false,
    outerDeclar: scope.getBindingIdentifier(name),
    references: [],
    name: name
  };
  var binding = scope.getOwnBinding(name);

  if (binding) {
    if (binding.kind === "param") {
      state.selfReference = true;
    } else {}
  } else if (state.outerDeclar || scope.hasGlobal(name)) {
    scope.traverse(node, visitor, state);
  }

  return state;
}

function _default(_ref) {
  var node = _ref.node,
      parent = _ref.parent,
      scope = _ref.scope,
      id = _ref.id;
  if (node.id) return;

  if ((t.isObjectProperty(parent) || t.isObjectMethod(parent, {
    kind: "method"
  })) && (!parent.computed || t.isLiteral(parent.key))) {
    id = parent.key;
  } else if (t.isVariableDeclarator(parent)) {
    id = parent.id;

    if (t.isIdentifier(id)) {
      var binding = scope.parent.getBinding(id.name);

      if (binding && binding.constant && scope.getBinding(id.name) === binding) {
        node.id = id;
        node.id[t.NOT_LOCAL_BINDING] = true;
        return;
      }
    }
  } else if (t.isAssignmentExpression(parent)) {
    id = parent.left;
  } else if (!id) {
    return;
  }

  var name;

  if (id && t.isLiteral(id)) {
    name = id.value;
  } else if (id && t.isIdentifier(id)) {
    name = id.name;
  } else {
    return;
  }

  name = t.toBindingIdentifierName(name);
  id = t.identifier(name);
  id[t.NOT_LOCAL_BINDING] = true;
  var state = visit(node, name, scope);
  return wrap(state, node, id, scope) || node;
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(6);
/** Built-in value references. */


var _Symbol = root.Symbol;
module.exports = _Symbol;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(137),
    baseKeys = __webpack_require__(315),
    isArrayLike = __webpack_require__(24);
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */


function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(137),
    baseKeysIn = __webpack_require__(318),
    isArrayLike = __webpack_require__(24);
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(42)(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(34);

var createDesc = __webpack_require__(69);

module.exports = __webpack_require__(32) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(44);

var IE8_DOM_DEFINE = __webpack_require__(254);

var toPrimitive = __webpack_require__(113);

var dP = Object.defineProperty;
exports.f = __webpack_require__(32) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(577);

var defined = __webpack_require__(120);

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(599),
  __esModule: true
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(132);
/** Used to compose bitmasks for cloning. */


var CLONE_SYMBOLS_FLAG = 4;
/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */

function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
(function () {
  'use strict';

  exports.ast = __webpack_require__(355);
  exports.code = __webpack_require__(155);
  exports.keyword = __webpack_require__(356);
})();
/* vim: set sw=4 ts=4 et tw=80 : */

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var baseGetTag = __webpack_require__(12),
    isObjectLike = __webpack_require__(9);
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

module.exports = arrayMap;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}

exports.getArg = getArg;
var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);

  if (!match) {
    return null;
  }

  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}

exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';

  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }

  url += '//';

  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }

  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }

  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port;
  }

  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }

  return url;
}

exports.urlGenerate = urlGenerate;
/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */

function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);

  if (url) {
    if (!url.path) {
      return aPath;
    }

    path = url.path;
  }

  var isAbsolute = exports.isAbsolute(path);
  var parts = path.split(/\/+/);

  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];

    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }

  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }

  return path;
}

exports.normalize = normalize;
/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */

function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  if (aPath === "") {
    aPath = ".";
  }

  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);

  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  } // `join(foo, '//www.example.org')`


  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }

    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  } // `join('http://', 'www.example.com')`


  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/' ? aPath : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }

  return joined;
}

exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
};
/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */


function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, ''); // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.

  var level = 0;

  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");

    if (index < 0) {
      return aPath;
    } // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.


    aRoot = aRoot.slice(0, index);

    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  } // Make sure we add a "../" for each component we removed from the root.


  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}

exports.relative = relative;

var supportsNullProto = function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}();

function identity(s) {
  return s;
}
/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */


function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}

exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}

exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9
  /* "__proto__".length */
  ) {
      return false;
    }

  if (s.charCodeAt(length - 1) !== 95
  /* '_' */
  || s.charCodeAt(length - 2) !== 95
  /* '_' */
  || s.charCodeAt(length - 3) !== 111
  /* 'o' */
  || s.charCodeAt(length - 4) !== 116
  /* 't' */
  || s.charCodeAt(length - 5) !== 111
  /* 'o' */
  || s.charCodeAt(length - 6) !== 114
  /* 'r' */
  || s.charCodeAt(length - 7) !== 112
  /* 'p' */
  || s.charCodeAt(length - 8) !== 95
  /* '_' */
  || s.charCodeAt(length - 9) !== 95
  /* '_' */
  ) {
      return false;
    }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36
    /* '$' */
    ) {
        return false;
      }
  }

  return true;
}
/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */


function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = mappingA.source - mappingB.source;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}

exports.compareByOriginalPositions = compareByOriginalPositions;
/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */

function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = mappingA.source - mappingB.source;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}

exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}
/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */


function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}

exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(14);

var core = __webpack_require__(5);

var ctx = __webpack_require__(573);

var hide = __webpack_require__(33);

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue; // export native or passed

    out = own ? target[key] : source[key]; // prevent global pollution for namespaces

    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();

            case 1:
              return new C(a);

            case 2:
              return new C(a, b);
          }

          return new C(a, b, c);
        }

        return C.apply(this, arguments);
      };

      F[PROTOTYPE] = C[PROTOTYPE];
      return F; // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
}; // type bitmap


$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(68);

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(46),
    stackClear = __webpack_require__(286),
    stackDelete = __webpack_require__(287),
    stackGet = __webpack_require__(288),
    stackHas = __webpack_require__(289),
    stackSet = __webpack_require__(290);
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(281),
    listCacheDelete = __webpack_require__(282),
    listCacheGet = __webpack_require__(283),
    listCacheHas = __webpack_require__(284),
    listCacheSet = __webpack_require__(285);
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(27);
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

module.exports = assocIndexOf;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(21);
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(305);
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(312),
    isObjectLike = __webpack_require__(9);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = __webpack_require__(6),
    stubFalse = __webpack_require__(313);
/** Detect free variable `exports`. */


var freeExports = ( false ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))

/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(12),
    getPrototype = __webpack_require__(87),
    isObjectLike = __webpack_require__(9);
/** `Object#toString` result references. */


var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(364);
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */


function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}

module.exports = toInteger;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var eq = __webpack_require__(27),
    isArrayLike = __webpack_require__(24),
    isIndex = __webpack_require__(80),
    isObject = __webpack_require__(7);
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */


function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }

  var type = _typeof(index);

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}

module.exports = isIterateeCall;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(58),
    overRest = __webpack_require__(371),
    setToString = __webpack_require__(372);
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */


function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.clear = clear;
exports.clearPath = clearPath;
exports.clearScope = clearScope;
exports.scope = exports.path = void 0;
var path = new WeakMap();
exports.path = path;
var scope = new WeakMap();
exports.scope = scope;

function clear() {
  clearPath();
  clearScope();
}

function clearPath() {
  exports.path = path = new WeakMap();
}

function clearScope() {
  exports.scope = scope = new WeakMap();
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.codeFrameColumns = codeFrameColumns;
exports.default = _default;

var _jsTokens = _interopRequireWildcard(__webpack_require__(384));

var _esutils = _interopRequireDefault(__webpack_require__(38));

var _chalk = _interopRequireDefault(__webpack_require__(385));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var deprecationWarningShown = false;

function getDefs(chalk) {
  return {
    keyword: chalk.cyan,
    capitalized: chalk.yellow,
    jsx_tag: chalk.yellow,
    punctuator: chalk.yellow,
    number: chalk.magenta,
    string: chalk.green,
    regex: chalk.magenta,
    comment: chalk.grey,
    invalid: chalk.white.bgRed.bold,
    gutter: chalk.grey,
    marker: chalk.red.bold
  };
}

var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
var JSX_TAG = /^[a-z][\w-]*$/i;
var BRACKET = /^[()[\]{}]$/;

function getTokenType(match) {
  var _match$slice = match.slice(-2),
      offset = _match$slice[0],
      text = _match$slice[1];

  var token = (0, _jsTokens.matchToToken)(match);

  if (token.type === "name") {
    if (_esutils.default.keyword.isReservedWordES6(token.value)) {
      return "keyword";
    }

    if (JSX_TAG.test(token.value) && (text[offset - 1] === "<" || text.substr(offset - 2, 2) == "</")) {
      return "jsx_tag";
    }

    if (token.value[0] !== token.value[0].toLowerCase()) {
      return "capitalized";
    }
  }

  if (token.type === "punctuator" && BRACKET.test(token.value)) {
    return "bracket";
  }

  return token.type;
}

function highlight(defs, text) {
  return text.replace(_jsTokens.default, function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var type = getTokenType(args);
    var colorize = defs[type];

    if (colorize) {
      return args[0].split(NEWLINE).map(function (str) {
        return colorize(str);
      }).join("\n");
    } else {
      return args[0];
    }
  });
}

function getMarkerLines(loc, source, opts) {
  var startLoc = Object.assign({}, {
    column: 0,
    line: -1
  }, loc.start);
  var endLoc = Object.assign({}, startLoc, loc.end);
  var linesAbove = opts.linesAbove || 2;
  var linesBelow = opts.linesBelow || 3;
  var startLine = startLoc.line;
  var startColumn = startLoc.column;
  var endLine = endLoc.line;
  var endColumn = endLoc.column;
  var start = Math.max(startLine - (linesAbove + 1), 0);
  var end = Math.min(source.length, endLine + linesBelow);

  if (startLine === -1) {
    start = 0;
  }

  if (endLine === -1) {
    end = source.length;
  }

  var lineDiff = endLine - startLine;
  var markerLines = {};

  if (lineDiff) {
    for (var i = 0; i <= lineDiff; i++) {
      var lineNumber = i + startLine;

      if (!startColumn) {
        markerLines[lineNumber] = true;
      } else if (i === 0) {
        var sourceLength = source[lineNumber - 1].length;
        markerLines[lineNumber] = [startColumn, sourceLength - startColumn];
      } else if (i === lineDiff) {
        markerLines[lineNumber] = [0, endColumn];
      } else {
        var _sourceLength = source[lineNumber - i].length;
        markerLines[lineNumber] = [0, _sourceLength];
      }
    }
  } else {
    if (startColumn === endColumn) {
      if (startColumn) {
        markerLines[startLine] = [startColumn, 0];
      } else {
        markerLines[startLine] = true;
      }
    } else {
      markerLines[startLine] = [startColumn, endColumn - startColumn];
    }
  }

  return {
    start: start,
    end: end,
    markerLines: markerLines
  };
}

function codeFrameColumns(rawLines, loc, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var highlighted = opts.highlightCode && _chalk.default.supportsColor || opts.forceColor;
  var chalk = _chalk.default;

  if (opts.forceColor) {
    chalk = new _chalk.default.constructor({
      enabled: true
    });
  }

  var maybeHighlight = function maybeHighlight(chalkFn, string) {
    return highlighted ? chalkFn(string) : string;
  };

  var defs = getDefs(chalk);
  if (highlighted) rawLines = highlight(defs, rawLines);
  var lines = rawLines.split(NEWLINE);

  var _getMarkerLines = getMarkerLines(loc, lines, opts),
      start = _getMarkerLines.start,
      end = _getMarkerLines.end,
      markerLines = _getMarkerLines.markerLines;

  var numberMaxWidth = String(end).length;
  var frame = lines.slice(start, end).map(function (line, index) {
    var number = start + 1 + index;
    var paddedNumber = (" " + number).slice(-numberMaxWidth);
    var gutter = " " + paddedNumber + " | ";
    var hasMarker = markerLines[number];

    if (hasMarker) {
      var markerLine = "";

      if (Array.isArray(hasMarker)) {
        var markerSpacing = line.slice(0, Math.max(hasMarker[0] - 1, 0)).replace(/[^\t]/g, " ");
        var numberOfMarkers = hasMarker[1] || 1;
        markerLine = ["\n ", maybeHighlight(defs.gutter, gutter.replace(/\d/g, " ")), markerSpacing, maybeHighlight(defs.marker, "^").repeat(numberOfMarkers)].join("");
      }

      return [maybeHighlight(defs.marker, ">"), maybeHighlight(defs.gutter, gutter), line, markerLine].join("");
    } else {
      return " " + maybeHighlight(defs.gutter, gutter) + line;
    }
  }).join("\n");

  if (highlighted) {
    return chalk.reset(frame);
  } else {
    return frame;
  }
}

function _default(rawLines, lineNumber, colNumber, opts) {
  if (opts === void 0) {
    opts = {};
  }

  if (!deprecationWarningShown) {
    deprecationWarningShown = true;
    var deprecationError = new Error("Passing lineNumber and colNumber is deprecated to babel-code-frame. Please use `codeFrameColumns`.");
    deprecationError.name = "DeprecationWarning";

    if (process.emitWarning) {
      process.emitWarning(deprecationError);
    } else {
      console.warn(deprecationError);
    }
  }

  colNumber = Math.max(colNumber, 0);
  var location = {
    start: {
      column: colNumber,
      line: lineNumber
    }
  };
  return codeFrameColumns(rawLines, location, opts);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(39);
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;
exports.default = loadConfig;

var _optionManager = _interopRequireDefault(__webpack_require__(457));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function loadConfig(opts) {
  if (opts != null && _typeof(opts) !== "object") {
    throw new Error("Babel options must be an object, null, or undefined");
  }

  return (0, _optionManager.default)(opts || {});
}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
module.exports = function isExtglob(str) {
  return typeof str === 'string' && /[@?!+*]\(/.test(str);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var isExtglob = __webpack_require__(63);

module.exports = function isGlob(str) {
  return typeof str === 'string' && (/[*!?{}(|)[\]]/.test(str) || isExtglob(str));
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function () {
  return {
    manipulateOptions: function manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("asyncFunctions");
    }
  };
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = _default;

function _default() {
  return {
    manipulateOptions: function manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("exportExtensions");
    }
  };
}

/***/ }),
/* 67 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 68 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(257);

var enumBugKeys = __webpack_require__(123);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(596),
  __esModule: true
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;

var _iterator = __webpack_require__(604);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(606);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && _typeof2(_iterator2.default) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : _typeof2(obj);
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.runtimeProperty = runtimeProperty;
exports.isReference = isReference;
exports.replaceWithOrRemove = replaceWithOrRemove;

var _babelTypes = __webpack_require__(2);

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function runtimeProperty(name) {
  return t.memberExpression(t.identifier("regeneratorRuntime"), t.identifier(name), false);
}
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */


function isReference(path) {
  return path.isReferenced() || path.parentPath.isAssignmentExpression({
    left: path.node
  });
}

function replaceWithOrRemove(path, replacement) {
  if (replacement) {
    path.replaceWith(replacement);
  } else {
    path.remove();
  }
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(21),
    root = __webpack_require__(6);
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(12),
    isObject = __webpack_require__(7);
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(297),
    mapCacheDelete = __webpack_require__(304),
    mapCacheGet = __webpack_require__(306),
    mapCacheHas = __webpack_require__(307),
    mapCacheSet = __webpack_require__(308);
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(136);
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),
/* 80 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(314),
    baseUnary = __webpack_require__(52),
    nodeUtil = __webpack_require__(138);
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),
/* 82 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),
/* 83 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

module.exports = copyArray;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(321),
    stubArray = __webpack_require__(141);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
module.exports = getSymbols;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

module.exports = arrayPush;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(139);
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(147);
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */


function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(337);
/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */


function uniq(array) {
  return array && array.length ? baseUniq(array) : [];
}

module.exports = uniq;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(341),
    baseIsNaN = __webpack_require__(342),
    strictIndexOf = __webpack_require__(343);
/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = void 0;
var STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
exports.STATEMENT_OR_BLOCK_KEYS = STATEMENT_OR_BLOCK_KEYS;
var FLATTENABLE_KEYS = ["body", "expressions"];
exports.FLATTENABLE_KEYS = FLATTENABLE_KEYS;
var FOR_INIT_KEYS = ["left", "init"];
exports.FOR_INIT_KEYS = FOR_INIT_KEYS;
var COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
exports.COMMENT_KEYS = COMMENT_KEYS;
var LOGICAL_OPERATORS = ["||", "&&"];
exports.LOGICAL_OPERATORS = LOGICAL_OPERATORS;
var UPDATE_OPERATORS = ["++", "--"];
exports.UPDATE_OPERATORS = UPDATE_OPERATORS;
var BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
exports.BOOLEAN_NUMBER_BINARY_OPERATORS = BOOLEAN_NUMBER_BINARY_OPERATORS;
var EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
exports.EQUALITY_BINARY_OPERATORS = EQUALITY_BINARY_OPERATORS;
var COMPARISON_BINARY_OPERATORS = [].concat(EQUALITY_BINARY_OPERATORS, ["in", "instanceof"]);
exports.COMPARISON_BINARY_OPERATORS = COMPARISON_BINARY_OPERATORS;
var BOOLEAN_BINARY_OPERATORS = [].concat(COMPARISON_BINARY_OPERATORS, BOOLEAN_NUMBER_BINARY_OPERATORS);
exports.BOOLEAN_BINARY_OPERATORS = BOOLEAN_BINARY_OPERATORS;
var NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
exports.NUMBER_BINARY_OPERATORS = NUMBER_BINARY_OPERATORS;
var BINARY_OPERATORS = ["+"].concat(NUMBER_BINARY_OPERATORS, BOOLEAN_BINARY_OPERATORS);
exports.BINARY_OPERATORS = BINARY_OPERATORS;
var BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
exports.BOOLEAN_UNARY_OPERATORS = BOOLEAN_UNARY_OPERATORS;
var NUMBER_UNARY_OPERATORS = ["+", "-", "~"];
exports.NUMBER_UNARY_OPERATORS = NUMBER_UNARY_OPERATORS;
var STRING_UNARY_OPERATORS = ["typeof"];
exports.STRING_UNARY_OPERATORS = STRING_UNARY_OPERATORS;
var UNARY_OPERATORS = ["void", "throw"].concat(BOOLEAN_UNARY_OPERATORS, NUMBER_UNARY_OPERATORS, STRING_UNARY_OPERATORS);
exports.UNARY_OPERATORS = UNARY_OPERATORS;
var INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
exports.INHERIT_KEYS = INHERIT_KEYS;
var BLOCK_SCOPED_SYMBOL = Symbol.for("var used to be block scoped");
exports.BLOCK_SCOPED_SYMBOL = BLOCK_SCOPED_SYMBOL;
var NOT_LOCAL_BINDING = Symbol.for("should not be considered a local binding");
exports.NOT_LOCAL_BINDING = NOT_LOCAL_BINDING;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.patternLikeCommon = exports.functionDeclarationCommon = exports.functionCommon = void 0;

var t = _interopRequireWildcard(__webpack_require__(0));

var _constants = __webpack_require__(91);

var _index2 = _interopRequireWildcard(__webpack_require__(10));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

(0, _index2.default)("ArrayExpression", {
  fields: {
    elements: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
      default: []
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
(0, _index2.default)("AssignmentExpression", {
  fields: {
    operator: {
      validate: (0, _index2.assertValueType)("string")
    },
    left: {
      validate: (0, _index2.assertNodeType)("LVal")
    },
    right: {
      validate: (0, _index2.assertNodeType)("Expression")
    }
  },
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Expression"]
});
(0, _index2.default)("BinaryExpression", {
  builder: ["operator", "left", "right"],
  fields: {
    operator: {
      validate: _index2.assertOneOf.apply(void 0, _constants.BINARY_OPERATORS)
    },
    left: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    right: {
      validate: (0, _index2.assertNodeType)("Expression")
    }
  },
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"]
});
(0, _index2.default)("Directive", {
  visitor: ["value"],
  fields: {
    value: {
      validate: (0, _index2.assertNodeType)("DirectiveLiteral")
    }
  }
});
(0, _index2.default)("DirectiveLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _index2.assertValueType)("string")
    }
  }
});
(0, _index2.default)("BlockStatement", {
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
  fields: {
    directives: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
});
(0, _index2.default)("BreakStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _index2.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
(0, _index2.default)("CallExpression", {
  visitor: ["callee", "arguments", "typeParameters"],
  builder: ["callee", "arguments"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    arguments: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Expression", "SpreadElement")))
    },
    optional: {
      validate: (0, _index2.assertOneOf)(true, false),
      optional: true
    },
    typeParameters: {
      validate: (0, _index2.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    }
  }
});
(0, _index2.default)("CatchClause", {
  visitor: ["param", "body"],
  fields: {
    param: {
      validate: (0, _index2.assertNodeType)("Identifier"),
      optional: true
    },
    body: {
      validate: (0, _index2.assertNodeType)("BlockStatement")
    }
  },
  aliases: ["Scopable", "BlockParent"]
});
(0, _index2.default)("ConditionalExpression", {
  visitor: ["test", "consequent", "alternate"],
  fields: {
    test: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    alternate: {
      validate: (0, _index2.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression", "Conditional"]
});
(0, _index2.default)("ContinueStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _index2.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
(0, _index2.default)("DebuggerStatement", {
  aliases: ["Statement"]
});
(0, _index2.default)("DoWhileStatement", {
  visitor: ["test", "body"],
  fields: {
    test: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _index2.assertNodeType)("Statement")
    }
  },
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
});
(0, _index2.default)("EmptyStatement", {
  aliases: ["Statement"]
});
(0, _index2.default)("ExpressionStatement", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _index2.assertNodeType)("Expression")
    }
  },
  aliases: ["Statement", "ExpressionWrapper"]
});
(0, _index2.default)("File", {
  builder: ["program", "comments", "tokens"],
  visitor: ["program"],
  fields: {
    program: {
      validate: (0, _index2.assertNodeType)("Program")
    }
  }
});
(0, _index2.default)("ForInStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: (0, _index2.assertNodeType)("VariableDeclaration", "LVal")
    },
    right: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _index2.assertNodeType)("Statement")
    }
  }
});
(0, _index2.default)("ForStatement", {
  visitor: ["init", "test", "update", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
  fields: {
    init: {
      validate: (0, _index2.assertNodeType)("VariableDeclaration", "Expression"),
      optional: true
    },
    test: {
      validate: (0, _index2.assertNodeType)("Expression"),
      optional: true
    },
    update: {
      validate: (0, _index2.assertNodeType)("Expression"),
      optional: true
    },
    body: {
      validate: (0, _index2.assertNodeType)("Statement")
    }
  }
});
var functionCommon = {
  params: {
    validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("LVal")))
  },
  generator: {
    default: false,
    validate: (0, _index2.assertValueType)("boolean")
  },
  async: {
    validate: (0, _index2.assertValueType)("boolean"),
    default: false
  },
  returnType: {
    validate: (0, _index2.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, _index2.assertNodeType)("TypeParameterDeclaration", "Noop"),
    optional: true
  }
};
exports.functionCommon = functionCommon;

var functionDeclarationCommon = _extends({}, functionCommon, {
  declare: {
    validate: (0, _index2.assertValueType)("boolean"),
    optional: true
  },
  id: {
    validate: (0, _index2.assertNodeType)("Identifier"),
    optional: true
  }
});

exports.functionDeclarationCommon = functionDeclarationCommon;
(0, _index2.default)("FunctionDeclaration", {
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "params", "body", "returnType", "typeParameters"],
  fields: _extends({}, functionDeclarationCommon, {
    body: {
      validate: (0, _index2.assertNodeType)("BlockStatement")
    }
  }),
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"]
});
(0, _index2.default)("FunctionExpression", {
  inherits: "FunctionDeclaration",
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: _extends({}, functionCommon, {
    id: {
      validate: (0, _index2.assertNodeType)("Identifier"),
      optional: true
    },
    body: {
      validate: (0, _index2.assertNodeType)("BlockStatement")
    }
  })
});
var patternLikeCommon = {
  typeAnnotation: {
    validate: (0, _index2.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  decorators: {
    validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator")))
  }
};
exports.patternLikeCommon = patternLikeCommon;
(0, _index2.default)("Identifier", {
  builder: ["name"],
  visitor: ["typeAnnotation"],
  aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
  fields: _extends({}, patternLikeCommon, {
    name: {
      validate: function validate(node, key, val) {
        if (!t.isValidIdentifier(val)) {}
      }
    },
    optional: {
      validate: (0, _index2.assertValueType)("boolean"),
      optional: true
    }
  })
});
(0, _index2.default)("IfStatement", {
  visitor: ["test", "consequent", "alternate"],
  aliases: ["Statement", "Conditional"],
  fields: {
    test: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _index2.assertNodeType)("Statement")
    },
    alternate: {
      optional: true,
      validate: (0, _index2.assertNodeType)("Statement")
    }
  }
});
(0, _index2.default)("LabeledStatement", {
  visitor: ["label", "body"],
  aliases: ["Statement"],
  fields: {
    label: {
      validate: (0, _index2.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, _index2.assertNodeType)("Statement")
    }
  }
});
(0, _index2.default)("StringLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _index2.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _index2.default)("NumericLiteral", {
  builder: ["value"],
  deprecatedAlias: "NumberLiteral",
  fields: {
    value: {
      validate: (0, _index2.assertValueType)("number")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _index2.default)("NullLiteral", {
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _index2.default)("BooleanLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _index2.assertValueType)("boolean")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _index2.default)("RegExpLiteral", {
  builder: ["pattern", "flags"],
  deprecatedAlias: "RegexLiteral",
  aliases: ["Expression", "Literal"],
  fields: {
    pattern: {
      validate: (0, _index2.assertValueType)("string")
    },
    flags: {
      validate: (0, _index2.assertValueType)("string"),
      default: ""
    }
  }
});
(0, _index2.default)("LogicalExpression", {
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
  fields: {
    operator: {
      validate: _index2.assertOneOf.apply(void 0, _constants.LOGICAL_OPERATORS)
    },
    left: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    right: {
      validate: (0, _index2.assertNodeType)("Expression")
    }
  }
});
(0, _index2.default)("MemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression", "LVal"],
  fields: {
    object: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        var normal = (0, _index2.assertNodeType)("Identifier");
        var computed = (0, _index2.assertNodeType)("Expression");
        return function (node, key, val) {
          var validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }()
    },
    computed: {
      default: false
    },
    optional: {
      validate: (0, _index2.assertOneOf)(true, false),
      optional: true
    }
  }
});
(0, _index2.default)("NewExpression", {
  inherits: "CallExpression"
});
(0, _index2.default)("Program", {
  visitor: ["directives", "body"],
  builder: ["body", "directives", "sourceType"],
  fields: {
    sourceFile: {
      validate: (0, _index2.assertValueType)("string")
    },
    sourceType: {
      validate: (0, _index2.assertOneOf)("script", "module"),
      default: "script"
    },
    directives: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block"]
});
(0, _index2.default)("ObjectExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
    }
  }
});
(0, _index2.default)("ObjectMethod", {
  builder: ["kind", "key", "params", "body", "computed"],
  fields: _extends({}, functionCommon, {
    kind: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("string"), (0, _index2.assertOneOf)("method", "get", "set")),
      default: "method"
    },
    computed: {
      validate: (0, _index2.assertValueType)("boolean"),
      default: false
    },
    key: {
      validate: function () {
        var normal = (0, _index2.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        var computed = (0, _index2.assertNodeType)("Expression");
        return function (node, key, val) {
          var validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }()
    },
    decorators: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator")))
    },
    body: {
      validate: (0, _index2.assertNodeType)("BlockStatement")
    }
  }),
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
});
(0, _index2.default)("ObjectProperty", {
  builder: ["key", "value", "computed", "shorthand", "decorators"],
  fields: {
    computed: {
      validate: (0, _index2.assertValueType)("boolean"),
      default: false
    },
    key: {
      validate: function () {
        var normal = (0, _index2.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        var computed = (0, _index2.assertNodeType)("Expression");
        return function (node, key, val) {
          var validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }()
    },
    value: {
      validate: (0, _index2.assertNodeType)("Expression", "PatternLike")
    },
    shorthand: {
      validate: (0, _index2.assertValueType)("boolean"),
      default: false
    },
    decorators: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator"))),
      optional: true
    }
  },
  visitor: ["key", "value", "decorators"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"]
});
(0, _index2.default)("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  builder: ["argument"],
  aliases: ["LVal", "PatternLike"],
  fields: _extends({}, patternLikeCommon, {
    argument: {
      validate: (0, _index2.assertNodeType)("LVal")
    }
  })
});
(0, _index2.default)("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _index2.assertNodeType)("Expression"),
      optional: true
    }
  }
});
(0, _index2.default)("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Expression")))
    }
  },
  aliases: ["Expression"]
});
(0, _index2.default)("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: (0, _index2.assertNodeType)("Expression"),
      optional: true
    },
    consequent: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Statement")))
    }
  }
});
(0, _index2.default)("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    cases: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("SwitchCase")))
    }
  }
});
(0, _index2.default)("ThisExpression", {
  aliases: ["Expression"]
});
(0, _index2.default)("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _index2.assertNodeType)("Expression")
    }
  }
});
(0, _index2.default)("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    block: {
      validate: (0, _index2.assertNodeType)("BlockStatement")
    },
    handler: {
      optional: true,
      validate: (0, _index2.assertNodeType)("CatchClause")
    },
    finalizer: {
      optional: true,
      validate: (0, _index2.assertNodeType)("BlockStatement")
    }
  }
});
(0, _index2.default)("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: true
    },
    argument: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    operator: {
      validate: _index2.assertOneOf.apply(void 0, _constants.UNARY_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"]
});
(0, _index2.default)("UpdateExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: false
    },
    argument: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    operator: {
      validate: _index2.assertOneOf.apply(void 0, _constants.UPDATE_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["Expression"]
});
(0, _index2.default)("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    declare: {
      validate: (0, _index2.assertValueType)("boolean"),
      optional: true
    },
    kind: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("string"), (0, _index2.assertOneOf)("var", "let", "const"))
    },
    declarations: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("VariableDeclarator")))
    }
  }
});
(0, _index2.default)("VariableDeclarator", {
  visitor: ["id", "init"],
  fields: {
    id: {
      validate: (0, _index2.assertNodeType)("LVal")
    },
    init: {
      optional: true,
      validate: (0, _index2.assertNodeType)("Expression")
    }
  }
});
(0, _index2.default)("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _index2.assertNodeType)("BlockStatement", "Statement")
    }
  }
});
(0, _index2.default)("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      object: (0, _index2.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _index2.assertNodeType)("BlockStatement", "Statement")
    }
  }
});

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classMethodOrDeclareMethodCommon = exports.classMethodOrPropertyCommon = void 0;

var _index = _interopRequireWildcard(__webpack_require__(10));

var _core = __webpack_require__(92);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

(0, _index.default)("AssignmentPattern", {
  visitor: ["left", "right"],
  builder: ["left", "right"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: _extends({}, _core.patternLikeCommon, {
    left: {
      validate: (0, _index.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern")
    },
    right: {
      validate: (0, _index.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
    }
  })
});
(0, _index.default)("ArrayPattern", {
  visitor: ["elements", "typeAnnotation"],
  builder: ["elements"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: _extends({}, _core.patternLikeCommon, {
    elements: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("PatternLike")))
    },
    decorators: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
    }
  })
});
(0, _index.default)("ArrowFunctionExpression", {
  builder: ["params", "body", "async"],
  visitor: ["params", "body", "returnType", "typeParameters"],
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: _extends({}, _core.functionCommon, {
    expression: {
      validate: (0, _index.assertValueType)("boolean")
    },
    body: {
      validate: (0, _index.assertNodeType)("BlockStatement", "Expression")
    }
  })
});
(0, _index.default)("ClassBody", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("ClassMethod", "ClassProperty", "TSDeclareMethod", "TSIndexSignature")))
    }
  }
});
var classCommon = {
  typeParameters: {
    validate: (0, _index.assertNodeType)("TypeParameterDeclaration", "Noop"),
    optional: true
  },
  body: {
    validate: (0, _index.assertNodeType)("ClassBody")
  },
  superClass: {
    optional: true,
    validate: (0, _index.assertNodeType)("Expression")
  },
  superTypeParameters: {
    validate: (0, _index.assertNodeType)("TypeParameterInstantiation"),
    optional: true
  },
  implements: {
    validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("TSExpressionWithTypeArguments", "FlowClassImplements"))),
    optional: true
  }
};
(0, _index.default)("ClassDeclaration", {
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
  aliases: ["Scopable", "Class", "Statement", "Declaration", "Pureish"],
  fields: _extends({}, classCommon, {
    declare: {
      validate: (0, _index.assertValueType)("boolean"),
      optional: true
    },
    abstract: {
      validate: (0, _index.assertValueType)("boolean"),
      optional: true
    },
    id: {
      validate: (0, _index.assertNodeType)("Identifier"),
      optional: true
    },
    decorators: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator"))),
      optional: true
    }
  })
});
(0, _index.default)("ClassExpression", {
  inherits: "ClassDeclaration",
  aliases: ["Scopable", "Class", "Expression", "Pureish"],
  fields: _extends({}, classCommon, {
    id: {
      optional: true,
      validate: (0, _index.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, _index.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _index.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator"))),
      optional: true
    }
  })
});
(0, _index.default)("ExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    source: {
      validate: (0, _index.assertNodeType)("StringLiteral")
    }
  }
});
(0, _index.default)("ExportDefaultDeclaration", {
  visitor: ["declaration"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, _index.assertNodeType)("FunctionDeclaration", "TSDeclareFunction", "ClassDeclaration", "Expression")
    }
  }
});
(0, _index.default)("ExportNamedDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, _index.assertNodeType)("Declaration"),
      optional: true
    },
    specifiers: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier")))
    },
    source: {
      validate: (0, _index.assertNodeType)("StringLiteral"),
      optional: true
    }
  }
});
(0, _index.default)("ExportSpecifier", {
  visitor: ["local", "exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _index.assertNodeType)("Identifier")
    },
    exported: {
      validate: (0, _index.assertNodeType)("Identifier")
    }
  }
});
(0, _index.default)("ForOfStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: (0, _index.assertNodeType)("VariableDeclaration", "LVal")
    },
    right: {
      validate: (0, _index.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _index.assertNodeType)("Statement")
    },
    await: {
      default: false,
      validate: (0, _index.assertValueType)("boolean")
    }
  }
});
(0, _index.default)("ImportDeclaration", {
  visitor: ["specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration"],
  fields: {
    specifiers: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
    },
    source: {
      validate: (0, _index.assertNodeType)("StringLiteral")
    }
  }
});
(0, _index.default)("ImportDefaultSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _index.assertNodeType)("Identifier")
    }
  }
});
(0, _index.default)("ImportNamespaceSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _index.assertNodeType)("Identifier")
    }
  }
});
(0, _index.default)("ImportSpecifier", {
  visitor: ["local", "imported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _index.assertNodeType)("Identifier")
    },
    imported: {
      validate: (0, _index.assertNodeType)("Identifier")
    },
    importKind: {
      validate: (0, _index.assertOneOf)(null, "type", "typeof")
    }
  }
});
(0, _index.default)("MetaProperty", {
  visitor: ["meta", "property"],
  aliases: ["Expression"],
  fields: {
    meta: {
      validate: (0, _index.assertNodeType)("Identifier")
    },
    property: {
      validate: (0, _index.assertNodeType)("Identifier")
    }
  }
});
var classMethodOrPropertyCommon = {
  abstract: {
    validate: (0, _index.assertValueType)("boolean"),
    optional: true
  },
  accessibility: {
    validate: (0, _index.chain)((0, _index.assertValueType)("string"), (0, _index.assertOneOf)("public", "private", "protected")),
    optional: true
  },
  static: {
    validate: (0, _index.assertValueType)("boolean"),
    optional: true
  },
  computed: {
    default: false,
    validate: (0, _index.assertValueType)("boolean")
  },
  optional: {
    validate: (0, _index.assertValueType)("boolean"),
    optional: true
  },
  key: {
    validate: function () {
      var normal = (0, _index.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
      var computed = (0, _index.assertNodeType)("Expression");
      return function (node, key, val) {
        var validator = node.computed ? computed : normal;
        validator(node, key, val);
      };
    }()
  }
};
exports.classMethodOrPropertyCommon = classMethodOrPropertyCommon;

var classMethodOrDeclareMethodCommon = _extends({}, _core.functionCommon, classMethodOrPropertyCommon, {
  kind: {
    validate: (0, _index.chain)((0, _index.assertValueType)("string"), (0, _index.assertOneOf)("get", "set", "method", "constructor")),
    default: "method"
  },
  access: {
    validate: (0, _index.chain)((0, _index.assertValueType)("string"), (0, _index.assertOneOf)("public", "private", "protected")),
    optional: true
  },
  decorators: {
    validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator"))),
    optional: true
  }
});

exports.classMethodOrDeclareMethodCommon = classMethodOrDeclareMethodCommon;
(0, _index.default)("ClassMethod", {
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
  builder: ["kind", "key", "params", "body", "computed", "static"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  fields: _extends({}, classMethodOrDeclareMethodCommon, {
    body: {
      validate: (0, _index.assertNodeType)("BlockStatement")
    }
  })
});
(0, _index.default)("ObjectPattern", {
  visitor: ["properties", "typeAnnotation"],
  builder: ["properties"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: _extends({}, _core.patternLikeCommon, {
    properties: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("RestElement", "ObjectProperty")))
    }
  })
});
(0, _index.default)("SpreadElement", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  fields: {
    argument: {
      validate: (0, _index.assertNodeType)("Expression")
    }
  }
});
(0, _index.default)("Super", {
  aliases: ["Expression"]
});
(0, _index.default)("TaggedTemplateExpression", {
  visitor: ["tag", "quasi"],
  aliases: ["Expression"],
  fields: {
    tag: {
      validate: (0, _index.assertNodeType)("Expression")
    },
    quasi: {
      validate: (0, _index.assertNodeType)("TemplateLiteral")
    }
  }
});
(0, _index.default)("TemplateElement", {
  builder: ["value", "tail"],
  fields: {
    value: {},
    tail: {
      validate: (0, _index.assertValueType)("boolean"),
      default: false
    }
  }
});
(0, _index.default)("TemplateLiteral", {
  visitor: ["quasis", "expressions"],
  aliases: ["Expression", "Literal"],
  fields: {
    quasis: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("TemplateElement")))
    },
    expressions: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Expression")))
    }
  }
});
(0, _index.default)("YieldExpression", {
  builder: ["argument", "delegate"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    delegate: {
      validate: (0, _index.assertValueType)("boolean"),
      default: false
    },
    argument: {
      optional: true,
      validate: (0, _index.assertNodeType)("Expression")
    }
  }
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsRegExp = __webpack_require__(358),
    baseUnary = __webpack_require__(52),
    nodeUtil = __webpack_require__(138);
/* Node.js helper references. */


var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;
/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */

var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
module.exports = isRegExp;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _includes = _interopRequireDefault(__webpack_require__(96));

var _repeat = _interopRequireDefault(__webpack_require__(158));

var _renamer = _interopRequireDefault(__webpack_require__(369));

var _index = _interopRequireDefault(__webpack_require__(4));

var _defaults = _interopRequireDefault(__webpack_require__(161));

var _binding2 = _interopRequireDefault(__webpack_require__(160));

var _globals = _interopRequireDefault(__webpack_require__(377));

var t = _interopRequireWildcard(__webpack_require__(0));

var _cache = __webpack_require__(59);

var _class, _temp;

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var _crawlCallsCount = 0;

function gatherNodeParts(node, parts) {
  if (t.isModuleDeclaration(node)) {
    if (node.source) {
      gatherNodeParts(node.source, parts);
    } else if (node.specifiers && node.specifiers.length) {
      var _arr = node.specifiers;

      for (var _i = 0; _i < _arr.length; _i++) {
        var specifier = _arr[_i];
        gatherNodeParts(specifier, parts);
      }
    } else if (node.declaration) {
      gatherNodeParts(node.declaration, parts);
    }
  } else if (t.isModuleSpecifier(node)) {
    gatherNodeParts(node.local, parts);
  } else if (t.isMemberExpression(node)) {
    gatherNodeParts(node.object, parts);
    gatherNodeParts(node.property, parts);
  } else if (t.isIdentifier(node)) {
    parts.push(node.name);
  } else if (t.isLiteral(node)) {
    parts.push(node.value);
  } else if (t.isCallExpression(node)) {
    gatherNodeParts(node.callee, parts);
  } else if (t.isObjectExpression(node) || t.isObjectPattern(node)) {
    var _arr2 = node.properties;

    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var prop = _arr2[_i2];
      gatherNodeParts(prop.key || prop.argument, parts);
    }
  }
}

var collectorVisitor = {
  For: function For(path) {
    var _arr3 = t.FOR_INIT_KEYS;

    for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
      var key = _arr3[_i3];
      var declar = path.get(key);

      if (declar.isVar()) {
        var parentScope = path.scope.getFunctionParent() || path.scope.getProgramParent();
        parentScope.registerBinding("var", declar);
      }
    }
  },
  Declaration: function Declaration(path) {
    if (path.isBlockScoped()) return;

    if (path.isExportDeclaration() && path.get("declaration").isDeclaration()) {
      return;
    }

    var parent = path.scope.getFunctionParent() || path.scope.getProgramParent();
    parent.registerDeclaration(path);
  },
  ReferencedIdentifier: function ReferencedIdentifier(path, state) {
    state.references.push(path);
  },
  ForXStatement: function ForXStatement(path, state) {
    var left = path.get("left");

    if (left.isPattern() || left.isIdentifier()) {
      state.constantViolations.push(path);
    }
  },
  ExportDeclaration: {
    exit: function exit(path) {
      var node = path.node,
          scope = path.scope;
      var declar = node.declaration;

      if (t.isClassDeclaration(declar) || t.isFunctionDeclaration(declar)) {
        var _id = declar.id;
        if (!_id) return;
        var binding = scope.getBinding(_id.name);
        if (binding) binding.reference(path);
      } else if (t.isVariableDeclaration(declar)) {
        var _arr4 = declar.declarations;

        for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
          var decl = _arr4[_i4];
          var ids = t.getBindingIdentifiers(decl);

          for (var name in ids) {
            var _binding = scope.getBinding(name);

            if (_binding) _binding.reference(path);
          }
        }
      }
    }
  },
  LabeledStatement: function LabeledStatement(path) {
    path.scope.getProgramParent().addGlobal(path.node);
    path.scope.getBlockParent().registerDeclaration(path);
  },
  AssignmentExpression: function AssignmentExpression(path, state) {
    state.assignments.push(path);
  },
  UpdateExpression: function UpdateExpression(path, state) {
    state.constantViolations.push(path);
  },
  UnaryExpression: function UnaryExpression(path, state) {
    if (path.node.operator === "delete") {
      state.constantViolations.push(path);
    }
  },
  BlockScoped: function BlockScoped(path) {
    var scope = path.scope;
    if (scope.path === path) scope = scope.parent;
    scope.getBlockParent().registerDeclaration(path);
  },
  ClassDeclaration: function ClassDeclaration(path) {
    var id = path.node.id;
    if (!id) return;
    var name = id.name;
    path.scope.bindings[name] = path.scope.getBinding(name);
  },
  Block: function Block(path) {
    var paths = path.get("body");
    var _arr5 = paths;

    for (var _i5 = 0; _i5 < _arr5.length; _i5++) {
      var bodyPath = _arr5[_i5];

      if (bodyPath.isFunctionDeclaration()) {
        path.scope.getBlockParent().registerDeclaration(bodyPath);
      }
    }
  }
};
var uid = 0;
var Scope = (_temp = _class = function () {
  function Scope(path) {
    var node = path.node;

    var cached = _cache.scope.get(node);

    if (cached && cached.path === path) {
      return cached;
    }

    _cache.scope.set(node, this);

    this.uid = uid++;
    this.block = node;
    this.path = path;
    this.labels = new Map();
  }

  var _proto = Scope.prototype;

  _proto.traverse = function traverse(node, opts, state) {
    (0, _index.default)(node, opts, this, state, this.path);
  };

  _proto.generateDeclaredUidIdentifier = function generateDeclaredUidIdentifier(name) {
    if (name === void 0) {
      name = "temp";
    }

    var id = this.generateUidIdentifier(name);
    this.push({
      id: id
    });
    return id;
  };

  _proto.generateUidIdentifier = function generateUidIdentifier(name) {
    if (name === void 0) {
      name = "temp";
    }

    return t.identifier(this.generateUid(name));
  };

  _proto.generateUid = function generateUid(name) {
    if (name === void 0) {
      name = "temp";
    }

    name = t.toIdentifier(name).replace(/^_+/, "").replace(/[0-9]+$/g, "");
    var uid;
    var i = 0;

    do {
      uid = this._generateUid(name, i);
      i++;
    } while (this.hasLabel(uid) || this.hasBinding(uid) || this.hasGlobal(uid) || this.hasReference(uid));

    var program = this.getProgramParent();
    program.references[uid] = true;
    program.uids[uid] = true;
    return uid;
  };

  _proto._generateUid = function _generateUid(name, i) {
    var id = name;
    if (i > 1) id += i;
    return "_" + id;
  };

  _proto.generateUidIdentifierBasedOnNode = function generateUidIdentifierBasedOnNode(parent, defaultName) {
    var node = parent;

    if (t.isAssignmentExpression(parent)) {
      node = parent.left;
    } else if (t.isVariableDeclarator(parent)) {
      node = parent.id;
    } else if (t.isObjectProperty(node) || t.isObjectMethod(node)) {
      node = node.key;
    }

    var parts = [];
    gatherNodeParts(node, parts);
    var id = parts.join("$");
    id = id.replace(/^_/, "") || defaultName || "ref";
    return this.generateUidIdentifier(id.slice(0, 20));
  };

  _proto.isStatic = function isStatic(node) {
    if (t.isThisExpression(node) || t.isSuper(node)) {
      return true;
    }

    if (t.isIdentifier(node)) {
      var binding = this.getBinding(node.name);

      if (binding) {
        return binding.constant;
      } else {
        return this.hasBinding(node.name);
      }
    }

    return false;
  };

  _proto.maybeGenerateMemoised = function maybeGenerateMemoised(node, dontPush) {
    if (this.isStatic(node)) {
      return null;
    } else {
      var _id2 = this.generateUidIdentifierBasedOnNode(node);

      if (!dontPush) this.push({
        id: _id2
      });
      return _id2;
    }
  };

  _proto.checkBlockScopedCollisions = function checkBlockScopedCollisions(local, kind, name, id) {
    if (kind === "param") return;
    if (local.kind === "local") return;
    if (kind === "hoisted" && local.kind === "let") return;
    var duplicate = kind === "let" || local.kind === "let" || local.kind === "const" || local.kind === "module" || local.kind === "param" && (kind === "let" || kind === "const");

    if (duplicate) {
      throw this.hub.file.buildCodeFrameError(id, "Duplicate declaration \"" + name + "\"", TypeError);
    }
  };

  _proto.rename = function rename(oldName, newName, block) {
    var binding = this.getBinding(oldName);

    if (binding) {
      newName = newName || this.generateUidIdentifier(oldName).name;
      return new _renamer.default(binding, oldName, newName).rename(block);
    }
  };

  _proto._renameFromMap = function _renameFromMap(map, oldName, newName, value) {
    if (map[oldName]) {
      map[newName] = value;
      map[oldName] = null;
    }
  };

  _proto.dump = function dump() {
    var sep = (0, _repeat.default)("-", 60);
    console.log(sep);
    var scope = this;

    do {
      console.log("#", scope.block.type);

      for (var name in scope.bindings) {
        var binding = scope.bindings[name];
        console.log(" -", name, {
          constant: binding.constant,
          references: binding.references,
          violations: binding.constantViolations.length,
          kind: binding.kind
        });
      }
    } while (scope = scope.parent);

    console.log(sep);
  };

  _proto.toArray = function toArray(node, i) {
    var file = this.hub.file;

    if (t.isIdentifier(node)) {
      var binding = this.getBinding(node.name);

      if (binding && binding.constant && binding.path.isGenericType("Array")) {
        return node;
      }
    }

    if (t.isArrayExpression(node)) {
      return node;
    }

    if (t.isIdentifier(node, {
      name: "arguments"
    })) {
      return t.callExpression(t.memberExpression(t.memberExpression(t.memberExpression(t.identifier("Array"), t.identifier("prototype")), t.identifier("slice")), t.identifier("call")), [node]);
    }

    var helperName = "toArray";
    var args = [node];

    if (i === true) {
      helperName = "toConsumableArray";
    } else if (i) {
      args.push(t.numericLiteral(i));
      helperName = "slicedToArray";
    }

    return t.callExpression(file.addHelper(helperName), args);
  };

  _proto.hasLabel = function hasLabel(name) {
    return !!this.getLabel(name);
  };

  _proto.getLabel = function getLabel(name) {
    return this.labels.get(name);
  };

  _proto.registerLabel = function registerLabel(path) {
    this.labels.set(path.node.label.name, path);
  };

  _proto.registerDeclaration = function registerDeclaration(path) {
    if (path.isLabeledStatement()) {
      this.registerLabel(path);
    } else if (path.isFunctionDeclaration()) {
      this.registerBinding("hoisted", path.get("id"), path);
    } else if (path.isVariableDeclaration()) {
      var declarations = path.get("declarations");
      var _arr6 = declarations;

      for (var _i6 = 0; _i6 < _arr6.length; _i6++) {
        var declar = _arr6[_i6];
        this.registerBinding(path.node.kind, declar);
      }
    } else if (path.isClassDeclaration()) {
      this.registerBinding("let", path);
    } else if (path.isImportDeclaration()) {
      var specifiers = path.get("specifiers");
      var _arr7 = specifiers;

      for (var _i7 = 0; _i7 < _arr7.length; _i7++) {
        var specifier = _arr7[_i7];
        this.registerBinding("module", specifier);
      }
    } else if (path.isExportDeclaration()) {
      var _declar = path.get("declaration");

      if (_declar.isClassDeclaration() || _declar.isFunctionDeclaration() || _declar.isVariableDeclaration()) {
        this.registerDeclaration(_declar);
      }
    } else {
      this.registerBinding("unknown", path);
    }
  };

  _proto.buildUndefinedNode = function buildUndefinedNode() {
    if (this.hasBinding("undefined")) {
      return t.unaryExpression("void", t.numericLiteral(0), true);
    } else {
      return t.identifier("undefined");
    }
  };

  _proto.registerConstantViolation = function registerConstantViolation(path) {
    var ids = path.getBindingIdentifiers();

    for (var name in ids) {
      var binding = this.getBinding(name);
      if (binding) binding.reassign(path);
    }
  };

  _proto.registerBinding = function registerBinding(kind, path, bindingPath) {
    if (bindingPath === void 0) {
      bindingPath = path;
    }

    if (!kind) throw new ReferenceError("no `kind`");

    if (path.isVariableDeclaration()) {
      var declarators = path.get("declarations");

      for (var _iterator = declarators, _isArray = Array.isArray(_iterator), _i8 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i8 >= _iterator.length) break;
          _ref = _iterator[_i8++];
        } else {
          _i8 = _iterator.next();
          if (_i8.done) break;
          _ref = _i8.value;
        }

        var _declar2 = _ref;
        this.registerBinding(kind, _declar2);
      }

      return;
    }

    var parent = this.getProgramParent();
    var ids = path.getBindingIdentifiers(true);

    for (var name in ids) {
      var _arr8 = ids[name];

      for (var _i9 = 0; _i9 < _arr8.length; _i9++) {
        var _id3 = _arr8[_i9];
        var local = this.getOwnBinding(name);

        if (local) {
          if (local.identifier === _id3) continue;
          this.checkBlockScopedCollisions(local, kind, name, _id3);
        }

        if (local && local.path.isFlow()) local = null;
        parent.references[name] = true;

        if (local) {
          this.registerConstantViolation(bindingPath);
        } else {
          this.bindings[name] = new _binding2.default({
            identifier: _id3,
            scope: this,
            path: bindingPath,
            kind: kind
          });
        }
      }
    }
  };

  _proto.addGlobal = function addGlobal(node) {
    this.globals[node.name] = node;
  };

  _proto.hasUid = function hasUid(name) {
    var scope = this;

    do {
      if (scope.uids[name]) return true;
    } while (scope = scope.parent);

    return false;
  };

  _proto.hasGlobal = function hasGlobal(name) {
    var scope = this;

    do {
      if (scope.globals[name]) return true;
    } while (scope = scope.parent);

    return false;
  };

  _proto.hasReference = function hasReference(name) {
    var scope = this;

    do {
      if (scope.references[name]) return true;
    } while (scope = scope.parent);

    return false;
  };

  _proto.isPure = function isPure(node, constantsOnly) {
    if (t.isIdentifier(node)) {
      var binding = this.getBinding(node.name);
      if (!binding) return false;
      if (constantsOnly) return binding.constant;
      return true;
    } else if (t.isClass(node)) {
      if (node.superClass && !this.isPure(node.superClass, constantsOnly)) {
        return false;
      }

      return this.isPure(node.body, constantsOnly);
    } else if (t.isClassBody(node)) {
      for (var _iterator2 = node.body, _isArray2 = Array.isArray(_iterator2), _i10 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i10 >= _iterator2.length) break;
          _ref2 = _iterator2[_i10++];
        } else {
          _i10 = _iterator2.next();
          if (_i10.done) break;
          _ref2 = _i10.value;
        }

        var _method = _ref2;
        if (!this.isPure(_method, constantsOnly)) return false;
      }

      return true;
    } else if (t.isBinary(node)) {
      return this.isPure(node.left, constantsOnly) && this.isPure(node.right, constantsOnly);
    } else if (t.isArrayExpression(node)) {
      var _arr9 = node.elements;

      for (var _i11 = 0; _i11 < _arr9.length; _i11++) {
        var elem = _arr9[_i11];
        if (!this.isPure(elem, constantsOnly)) return false;
      }

      return true;
    } else if (t.isObjectExpression(node)) {
      var _arr10 = node.properties;

      for (var _i12 = 0; _i12 < _arr10.length; _i12++) {
        var prop = _arr10[_i12];
        if (!this.isPure(prop, constantsOnly)) return false;
      }

      return true;
    } else if (t.isClassMethod(node)) {
      if (node.computed && !this.isPure(node.key, constantsOnly)) return false;
      if (node.kind === "get" || node.kind === "set") return false;
      return true;
    } else if (t.isClassProperty(node) || t.isObjectProperty(node)) {
      if (node.computed && !this.isPure(node.key, constantsOnly)) return false;
      return this.isPure(node.value, constantsOnly);
    } else if (t.isUnaryExpression(node)) {
      return this.isPure(node.argument, constantsOnly);
    } else if (t.isTaggedTemplateExpression(node)) {
      return t.matchesPattern(node.tag, "String.raw") && !this.hasBinding("String", true) && this.isPure(node.quasi, constantsOnly);
    } else if (t.isTemplateLiteral(node)) {
      var _arr11 = node.expressions;

      for (var _i13 = 0; _i13 < _arr11.length; _i13++) {
        var expression = _arr11[_i13];
        if (!this.isPure(expression, constantsOnly)) return false;
      }

      return true;
    } else {
      return t.isPureish(node);
    }
  };

  _proto.setData = function setData(key, val) {
    return this.data[key] = val;
  };

  _proto.getData = function getData(key) {
    var scope = this;

    do {
      var data = scope.data[key];
      if (data != null) return data;
    } while (scope = scope.parent);
  };

  _proto.removeData = function removeData(key) {
    var scope = this;

    do {
      var data = scope.data[key];
      if (data != null) scope.data[key] = null;
    } while (scope = scope.parent);
  };

  _proto.init = function init() {
    if (!this.references) this.crawl();
  };

  _proto.crawl = function crawl() {
    _crawlCallsCount++;

    this._crawl();

    _crawlCallsCount--;
  };

  _proto._crawl = function _crawl() {
    var path = this.path;
    this.references = Object.create(null);
    this.bindings = Object.create(null);
    this.globals = Object.create(null);
    this.uids = Object.create(null);
    this.data = Object.create(null);

    if (path.isLoop()) {
      var _arr12 = t.FOR_INIT_KEYS;

      for (var _i14 = 0; _i14 < _arr12.length; _i14++) {
        var key = _arr12[_i14];
        var node = path.get(key);
        if (node.isBlockScoped()) this.registerBinding(node.node.kind, node);
      }
    }

    if (path.isFunctionExpression() && path.has("id")) {
      if (!path.get("id").node[t.NOT_LOCAL_BINDING]) {
        this.registerBinding("local", path.get("id"), path);
      }
    }

    if (path.isClassExpression() && path.has("id")) {
      if (!path.get("id").node[t.NOT_LOCAL_BINDING]) {
        this.registerBinding("local", path);
      }
    }

    if (path.isFunction()) {
      var params = path.get("params");

      for (var _iterator3 = params, _isArray3 = Array.isArray(_iterator3), _i15 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i15 >= _iterator3.length) break;
          _ref3 = _iterator3[_i15++];
        } else {
          _i15 = _iterator3.next();
          if (_i15.done) break;
          _ref3 = _i15.value;
        }

        var _param = _ref3;
        this.registerBinding("param", _param);
      }
    }

    if (path.isCatchClause()) {
      this.registerBinding("let", path);
    }

    var parent = this.getProgramParent();
    if (parent.crawling) return;
    var state = {
      references: [],
      constantViolations: [],
      assignments: []
    };
    this.crawling = true;
    path.traverse(collectorVisitor, state);
    this.crawling = false;

    for (var _iterator4 = state.assignments, _isArray4 = Array.isArray(_iterator4), _i16 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray4) {
        if (_i16 >= _iterator4.length) break;
        _ref4 = _iterator4[_i16++];
      } else {
        _i16 = _iterator4.next();
        if (_i16.done) break;
        _ref4 = _i16.value;
      }

      var _path3 = _ref4;

      var ids = _path3.getBindingIdentifiers();

      var programParent = void 0;

      for (var name in ids) {
        if (_path3.scope.getBinding(name)) continue;
        programParent = programParent || _path3.scope.getProgramParent();
        programParent.addGlobal(ids[name]);
      }

      _path3.scope.registerConstantViolation(_path3);
    }

    for (var _iterator5 = state.references, _isArray5 = Array.isArray(_iterator5), _i17 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray5) {
        if (_i17 >= _iterator5.length) break;
        _ref5 = _iterator5[_i17++];
      } else {
        _i17 = _iterator5.next();
        if (_i17.done) break;
        _ref5 = _i17.value;
      }

      var _ref7 = _ref5;

      var binding = _ref7.scope.getBinding(_ref7.node.name);

      if (binding) {
        binding.reference(_ref7);
      } else {
        _ref7.scope.getProgramParent().addGlobal(_ref7.node);
      }
    }

    for (var _iterator6 = state.constantViolations, _isArray6 = Array.isArray(_iterator6), _i18 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
      var _ref6;

      if (_isArray6) {
        if (_i18 >= _iterator6.length) break;
        _ref6 = _iterator6[_i18++];
      } else {
        _i18 = _iterator6.next();
        if (_i18.done) break;
        _ref6 = _i18.value;
      }

      var _path4 = _ref6;

      _path4.scope.registerConstantViolation(_path4);
    }
  };

  _proto.push = function push(opts) {
    var path = this.path;

    if (!path.isBlockStatement() && !path.isProgram()) {
      path = this.getBlockParent().path;
    }

    if (path.isSwitchStatement()) {
      path = (this.getFunctionParent() || this.getProgramParent()).path;
    }

    if (path.isLoop() || path.isCatchClause() || path.isFunction()) {
      path.ensureBlock();
      path = path.get("body");
    }

    var unique = opts.unique;
    var kind = opts.kind || "var";
    var blockHoist = opts._blockHoist == null ? 2 : opts._blockHoist;
    var dataKey = "declaration:" + kind + ":" + blockHoist;
    var declarPath = !unique && path.getData(dataKey);

    if (!declarPath) {
      var declar = t.variableDeclaration(kind, []);
      declar._blockHoist = blockHoist;

      var _path$unshiftContaine = path.unshiftContainer("body", [declar]);

      declarPath = _path$unshiftContaine[0];
      if (!unique) path.setData(dataKey, declarPath);
    }

    var declarator = t.variableDeclarator(opts.id, opts.init);
    declarPath.node.declarations.push(declarator);
    this.registerBinding(kind, declarPath.get("declarations").pop());
  };

  _proto.getProgramParent = function getProgramParent() {
    var scope = this;

    do {
      if (scope.path.isProgram()) {
        return scope;
      }
    } while (scope = scope.parent);

    throw new Error("Couldn't find a Program");
  };

  _proto.getFunctionParent = function getFunctionParent() {
    var scope = this;

    do {
      if (scope.path.isFunctionParent()) {
        return scope;
      }
    } while (scope = scope.parent);

    return null;
  };

  _proto.getBlockParent = function getBlockParent() {
    var scope = this;

    do {
      if (scope.path.isBlockParent()) {
        return scope;
      }
    } while (scope = scope.parent);

    throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...");
  };

  _proto.getAllBindings = function getAllBindings() {
    var ids = Object.create(null);
    var scope = this;

    do {
      (0, _defaults.default)(ids, scope.bindings);
      scope = scope.parent;
    } while (scope);

    return ids;
  };

  _proto.getAllBindingsOfKind = function getAllBindingsOfKind() {
    var ids = Object.create(null);
    var _arr13 = arguments;

    for (var _i19 = 0; _i19 < _arr13.length; _i19++) {
      var kind = _arr13[_i19];
      var scope = this;

      do {
        for (var name in scope.bindings) {
          var binding = scope.bindings[name];
          if (binding.kind === kind) ids[name] = binding;
        }

        scope = scope.parent;
      } while (scope);
    }

    return ids;
  };

  _proto.bindingIdentifierEquals = function bindingIdentifierEquals(name, node) {
    return this.getBindingIdentifier(name) === node;
  };

  _proto.warnOnFlowBinding = function warnOnFlowBinding(binding) {
    if (_crawlCallsCount === 0 && binding && binding.path.isFlow()) {
      console.warn("\n        You or one of the Babel plugins you are using are using Flow declarations as bindings.\n        Support for this will be removed in version 7. To find out the caller, grep for this\n        message and change it to a `console.trace()`.\n      ");
    }

    return binding;
  };

  _proto.getBinding = function getBinding(name) {
    var scope = this;

    do {
      var binding = scope.getOwnBinding(name);
      if (binding) return this.warnOnFlowBinding(binding);
    } while (scope = scope.parent);
  };

  _proto.getOwnBinding = function getOwnBinding(name) {
    return this.warnOnFlowBinding(this.bindings[name]);
  };

  _proto.getBindingIdentifier = function getBindingIdentifier(name) {
    var info = this.getBinding(name);
    return info && info.identifier;
  };

  _proto.getOwnBindingIdentifier = function getOwnBindingIdentifier(name) {
    var binding = this.bindings[name];
    return binding && binding.identifier;
  };

  _proto.hasOwnBinding = function hasOwnBinding(name) {
    return !!this.getOwnBinding(name);
  };

  _proto.hasBinding = function hasBinding(name, noGlobals) {
    if (!name) return false;
    if (this.hasOwnBinding(name)) return true;
    if (this.parentHasBinding(name, noGlobals)) return true;
    if (this.hasUid(name)) return true;
    if (!noGlobals && (0, _includes.default)(Scope.globals, name)) return true;
    if (!noGlobals && (0, _includes.default)(Scope.contextVariables, name)) return true;
    return false;
  };

  _proto.parentHasBinding = function parentHasBinding(name, noGlobals) {
    return this.parent && this.parent.hasBinding(name, noGlobals);
  };

  _proto.moveBindingTo = function moveBindingTo(name, scope) {
    var info = this.getBinding(name);

    if (info) {
      info.scope.removeOwnBinding(name);
      info.scope = scope;
      scope.bindings[name] = info;
    }
  };

  _proto.removeOwnBinding = function removeOwnBinding(name) {
    delete this.bindings[name];
  };

  _proto.removeBinding = function removeBinding(name) {
    var info = this.getBinding(name);

    if (info) {
      info.scope.removeOwnBinding(name);
    }

    var scope = this;

    do {
      if (scope.uids[name]) {
        scope.uids[name] = false;
      }
    } while (scope = scope.parent);
  };

  _createClass(Scope, [{
    key: "parent",
    get: function get() {
      var parent = this.path.findParent(function (p) {
        return p.isScope();
      });
      return parent && parent.scope;
    }
  }, {
    key: "parentBlock",
    get: function get() {
      return this.path.parent;
    }
  }, {
    key: "hub",
    get: function get() {
      return this.path.hub;
    }
  }]);

  return Scope;
}(), Object.defineProperty(_class, "globals", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Object.keys(_globals.default.builtin)
}), Object.defineProperty(_class, "contextVariables", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["arguments", "undefined", "Infinity", "NaN"]
}), _temp);
exports.default = Scope;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(90),
    isArrayLike = __webpack_require__(24),
    isString = __webpack_require__(363),
    toInteger = __webpack_require__(55),
    values = __webpack_require__(157);
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeMax = Math.max;
/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */

function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
  var length = collection.length;

  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }

  return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
}

module.exports = includes;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(57),
    isIterateeCall = __webpack_require__(56);
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */


function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}

module.exports = createAssigner;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
}); // A second optional argument can be given to further configure
// the parser process. These options are recognized:

var defaultOptions = {
  // Source type ("script" or "module") for different semantics
  sourceType: "script",
  // Source filename.
  sourceFilename: undefined,
  // Line from which to start counting source. Useful for
  // integration with other tools.
  startLine: 1,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: false,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program.
  allowImportExportEverywhere: false,
  // TODO
  allowSuperOutsideMethod: false,
  // An array of plugins to enable
  plugins: [],
  // TODO
  strictMode: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: false,
  // Adds all parsed tokens to a `tokens` property on the `File` node
  tokens: false
}; // Interpret and default an options object

function getOptions(opts) {
  var options = {};

  for (var key in defaultOptions) {
    options[key] = opts && key in opts ? opts[key] : defaultOptions[key];
  }

  return options;
}

var inheritsLoose = function inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}; // ## Token types
// The assignment of fine-grained, information-carrying type objects
// allows the tokenizer to store the information it has about a
// token in a way that is very cheap for the parser to look up.
// All token type variables start with an underscore, to make them
// easy to recognize.
// The `beforeExpr` property is used to disambiguate between regular
// expressions and divisions. It is set on all token types that can
// be followed by an expression (thus, a slash after them would be a
// regular expression).
//
// `isLoop` marks a keyword as starting a loop, which is important
// to know when parsing a label, in order to allow or disallow
// continue jumps to that label.


var beforeExpr = true;
var startsExpr = true;
var isLoop = true;
var isAssign = true;
var prefix = true;
var postfix = true;

var TokenType = function TokenType(label, conf) {
  if (conf === void 0) {
    conf = {};
  }

  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.rightAssociative = !!conf.rightAssociative;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop === 0 ? 0 : conf.binop || null;
  this.updateContext = null;
};

var KeywordTokenType = function (_TokenType) {
  inheritsLoose(KeywordTokenType, _TokenType);

  function KeywordTokenType(name, options) {
    if (options === void 0) {
      options = {};
    }

    options.keyword = name;
    return _TokenType.call(this, name, options) || this;
  }

  return KeywordTokenType;
}(TokenType);

var BinopTokenType = function (_TokenType2) {
  inheritsLoose(BinopTokenType, _TokenType2);

  function BinopTokenType(name, prec) {
    return _TokenType2.call(this, name, {
      beforeExpr: beforeExpr,
      binop: prec
    }) || this;
  }

  return BinopTokenType;
}(TokenType);

var types = {
  num: new TokenType("num", {
    startsExpr: startsExpr
  }),
  bigint: new TokenType("bigint", {
    startsExpr: startsExpr
  }),
  regexp: new TokenType("regexp", {
    startsExpr: startsExpr
  }),
  string: new TokenType("string", {
    startsExpr: startsExpr
  }),
  name: new TokenType("name", {
    startsExpr: startsExpr
  }),
  eof: new TokenType("eof"),
  // Punctuation token types.
  bracketL: new TokenType("[", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  braceBarL: new TokenType("{|", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  braceR: new TokenType("}"),
  braceBarR: new TokenType("|}"),
  parenL: new TokenType("(", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  parenR: new TokenType(")"),
  comma: new TokenType(",", {
    beforeExpr: beforeExpr
  }),
  semi: new TokenType(";", {
    beforeExpr: beforeExpr
  }),
  colon: new TokenType(":", {
    beforeExpr: beforeExpr
  }),
  doubleColon: new TokenType("::", {
    beforeExpr: beforeExpr
  }),
  dot: new TokenType("."),
  question: new TokenType("?", {
    beforeExpr: beforeExpr
  }),
  questionDot: new TokenType("?."),
  arrow: new TokenType("=>", {
    beforeExpr: beforeExpr
  }),
  template: new TokenType("template"),
  ellipsis: new TokenType("...", {
    beforeExpr: beforeExpr
  }),
  backQuote: new TokenType("`", {
    startsExpr: startsExpr
  }),
  dollarBraceL: new TokenType("${", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  at: new TokenType("@"),
  hash: new TokenType("#"),
  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.
  eq: new TokenType("=", {
    beforeExpr: beforeExpr,
    isAssign: isAssign
  }),
  assign: new TokenType("_=", {
    beforeExpr: beforeExpr,
    isAssign: isAssign
  }),
  incDec: new TokenType("++/--", {
    prefix: prefix,
    postfix: postfix,
    startsExpr: startsExpr
  }),
  bang: new TokenType("!", {
    beforeExpr: beforeExpr,
    prefix: prefix,
    startsExpr: startsExpr
  }),
  tilde: new TokenType("~", {
    beforeExpr: beforeExpr,
    prefix: prefix,
    startsExpr: startsExpr
  }),
  pipeline: new BinopTokenType("|>", 0),
  logicalOR: new BinopTokenType("||", 1),
  logicalAND: new BinopTokenType("&&", 2),
  bitwiseOR: new BinopTokenType("|", 3),
  bitwiseXOR: new BinopTokenType("^", 4),
  bitwiseAND: new BinopTokenType("&", 5),
  equality: new BinopTokenType("==/!=", 6),
  relational: new BinopTokenType("</>", 7),
  bitShift: new BinopTokenType("<</>>", 8),
  plusMin: new TokenType("+/-", {
    beforeExpr: beforeExpr,
    binop: 9,
    prefix: prefix,
    startsExpr: startsExpr
  }),
  modulo: new BinopTokenType("%", 10),
  star: new BinopTokenType("*", 10),
  slash: new BinopTokenType("/", 10),
  exponent: new TokenType("**", {
    beforeExpr: beforeExpr,
    binop: 11,
    rightAssociative: true
  })
};
var keywords = {
  break: new KeywordTokenType("break"),
  case: new KeywordTokenType("case", {
    beforeExpr: beforeExpr
  }),
  catch: new KeywordTokenType("catch"),
  continue: new KeywordTokenType("continue"),
  debugger: new KeywordTokenType("debugger"),
  default: new KeywordTokenType("default", {
    beforeExpr: beforeExpr
  }),
  do: new KeywordTokenType("do", {
    isLoop: isLoop,
    beforeExpr: beforeExpr
  }),
  else: new KeywordTokenType("else", {
    beforeExpr: beforeExpr
  }),
  finally: new KeywordTokenType("finally"),
  for: new KeywordTokenType("for", {
    isLoop: isLoop
  }),
  function: new KeywordTokenType("function", {
    startsExpr: startsExpr
  }),
  if: new KeywordTokenType("if"),
  return: new KeywordTokenType("return", {
    beforeExpr: beforeExpr
  }),
  switch: new KeywordTokenType("switch"),
  throw: new KeywordTokenType("throw", {
    beforeExpr: beforeExpr,
    prefix: prefix,
    startsExpr: startsExpr
  }),
  try: new KeywordTokenType("try"),
  var: new KeywordTokenType("var"),
  let: new KeywordTokenType("let"),
  const: new KeywordTokenType("const"),
  while: new KeywordTokenType("while", {
    isLoop: isLoop
  }),
  with: new KeywordTokenType("with"),
  new: new KeywordTokenType("new", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  this: new KeywordTokenType("this", {
    startsExpr: startsExpr
  }),
  super: new KeywordTokenType("super", {
    startsExpr: startsExpr
  }),
  class: new KeywordTokenType("class"),
  extends: new KeywordTokenType("extends", {
    beforeExpr: beforeExpr
  }),
  export: new KeywordTokenType("export"),
  import: new KeywordTokenType("import", {
    startsExpr: startsExpr
  }),
  yield: new KeywordTokenType("yield", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  null: new KeywordTokenType("null", {
    startsExpr: startsExpr
  }),
  true: new KeywordTokenType("true", {
    startsExpr: startsExpr
  }),
  false: new KeywordTokenType("false", {
    startsExpr: startsExpr
  }),
  in: new KeywordTokenType("in", {
    beforeExpr: beforeExpr,
    binop: 7
  }),
  instanceof: new KeywordTokenType("instanceof", {
    beforeExpr: beforeExpr,
    binop: 7
  }),
  typeof: new KeywordTokenType("typeof", {
    beforeExpr: beforeExpr,
    prefix: prefix,
    startsExpr: startsExpr
  }),
  void: new KeywordTokenType("void", {
    beforeExpr: beforeExpr,
    prefix: prefix,
    startsExpr: startsExpr
  }),
  delete: new KeywordTokenType("delete", {
    beforeExpr: beforeExpr,
    prefix: prefix,
    startsExpr: startsExpr
  })
}; // Map keyword names to token types.

Object.keys(keywords).forEach(function (name) {
  types["_" + name] = keywords[name];
});
/* eslint max-len: 0 */

function makePredicate(words) {
  var wordsArr = words.split(" ");
  return function (str) {
    return wordsArr.indexOf(str) >= 0;
  };
} // Reserved word lists for various dialects of the language


var reservedWords = {
  "6": makePredicate("enum await"),
  strict: makePredicate("implements interface let package private protected public static yield"),
  strictBind: makePredicate("eval arguments")
}; // And the keywords

var isKeyword = makePredicate("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this let const class extends export import yield super"); // ## Character categories
// Big ugly regular expressions that match characters in the
// whitespace, identifier, and identifier-start categories. These
// are only applied when a character is found to actually have a
// code point above 128.
// Generated by `bin/generate-identifier-regex.js`.

var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA900-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null; // These are a run-length and offset encoded representation of the
// >0xffff code points that are a valid part of identifiers. The
// offset starts at 0x10000, and each pair of numbers represents an
// offset to the next range, and then a size of the range. They were
// generated by `bin/generate-identifier-regex.js`.
// eslint-disable-next-line comma-spacing

/* prettier-ignore */

var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 17, 26, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 26, 45, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 785, 52, 76, 44, 33, 24, 27, 35, 42, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 54, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 86, 25, 391, 63, 32, 0, 449, 56, 264, 8, 2, 36, 18, 0, 50, 29, 881, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 881, 68, 12, 0, 67, 12, 65, 0, 32, 6124, 20, 754, 9486, 1, 3071, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 4149, 196, 60, 67, 1213, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 10591, 541]; // eslint-disable-next-line comma-spacing

/* prettier-ignore */

var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 1306, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 52, 0, 13, 2, 49, 13, 10, 2, 4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 57, 0, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 87, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 423, 9, 838, 7, 2, 7, 17, 9, 57, 21, 2, 13, 19882, 9, 135, 4, 60, 6, 26, 9, 1016, 45, 17, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 2214, 6, 110, 6, 6, 9, 792487, 239]; // This has a complexity linear to the value of the code. The
// assumption is that looking up astral identifier characters is
// rare.

function isInAstralSet(code, set) {
  var pos = 0x10000;

  for (var i = 0; i < set.length; i += 2) {
    pos += set[i];
    if (pos > code) return false;
    pos += set[i + 1];
    if (pos >= code) return true;
  }

  return false;
} // Test whether a given character code starts an identifier.


function isIdentifierStart(code) {
  if (code < 65) return code === 36;
  if (code < 91) return true;
  if (code < 97) return code === 95;
  if (code < 123) return true;
  if (code <= 0xffff) return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
  return isInAstralSet(code, astralIdentifierStartCodes);
} // Test whether a given character is part of an identifier.


function isIdentifierChar(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code < 91) return true;
  if (code < 97) return code === 95;
  if (code < 123) return true;
  if (code <= 0xffff) return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
} // Matches a whole line break (where CRLF is considered a single
// line break). Used to count lines.


var lineBreak = /\r\n?|\n|\u2028|\u2029/;
var lineBreakG = new RegExp(lineBreak.source, "g");

function isNewLine(code) {
  return code === 10 || code === 13 || code === 0x2028 || code === 0x2029;
}

var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/; // The algorithm used to determine whether a regexp can appear at a
// given point in the program is loosely based on sweet.js' approach.
// See https://github.com/mozilla/sweet.js/wiki/design

var TokContext = function TokContext(token, isExpr, preserveSpace, override) // Takes a Tokenizer as a this-parameter, and returns void.
{
  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
};

var types$1 = {
  braceStatement: new TokContext("{", false),
  braceExpression: new TokContext("{", true),
  templateQuasi: new TokContext("${", true),
  parenStatement: new TokContext("(", false),
  parenExpression: new TokContext("(", true),
  template: new TokContext("`", true, true, function (p) {
    return p.readTmplToken();
  }),
  functionExpression: new TokContext("function", true)
}; // Token-specific context update code

types.parenR.updateContext = types.braceR.updateContext = function () {
  if (this.state.context.length === 1) {
    this.state.exprAllowed = true;
    return;
  }

  var out = this.state.context.pop();

  if (out === types$1.braceStatement && this.curContext() === types$1.functionExpression) {
    this.state.context.pop();
    this.state.exprAllowed = false;
  } else if (out === types$1.templateQuasi) {
    this.state.exprAllowed = true;
  } else {
    this.state.exprAllowed = !out.isExpr;
  }
};

types.name.updateContext = function (prevType) {
  if (this.state.value === "of" && this.curContext() === types$1.parenStatement) {
    this.state.exprAllowed = !prevType.beforeExpr;
    return;
  }

  this.state.exprAllowed = false;

  if (prevType === types._let || prevType === types._const || prevType === types._var) {
    if (lineBreak.test(this.input.slice(this.state.end))) {
      this.state.exprAllowed = true;
    }
  }
};

types.braceL.updateContext = function (prevType) {
  this.state.context.push(this.braceIsBlock(prevType) ? types$1.braceStatement : types$1.braceExpression);
  this.state.exprAllowed = true;
};

types.dollarBraceL.updateContext = function () {
  this.state.context.push(types$1.templateQuasi);
  this.state.exprAllowed = true;
};

types.parenL.updateContext = function (prevType) {
  var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
  this.state.context.push(statementParens ? types$1.parenStatement : types$1.parenExpression);
  this.state.exprAllowed = true;
};

types.incDec.updateContext = function () {// tokExprAllowed stays unchanged
};

types._function.updateContext = function () {
  if (this.curContext() !== types$1.braceStatement) {
    this.state.context.push(types$1.functionExpression);
  }

  this.state.exprAllowed = false;
};

types.backQuote.updateContext = function () {
  if (this.curContext() === types$1.template) {
    this.state.context.pop();
  } else {
    this.state.context.push(types$1.template);
  }

  this.state.exprAllowed = false;
}; // These are used when `options.locations` is on, for the
// `startLoc` and `endLoc` properties.


var Position = function Position(line, col) {
  this.line = line;
  this.column = col;
};

var SourceLocation = function SourceLocation(start, end) {
  this.start = start; // $FlowIgnore (may start as null, but initialized later)

  this.end = end;
}; // The `getLineInfo` function is mostly useful when the
// `locations` option is off (for performance reasons) and you
// want to find the line/column position for a given character
// offset. `input` should be the code string that the offset refers
// into.


function getLineInfo(input, offset) {
  for (var line = 1, cur = 0;;) {
    lineBreakG.lastIndex = cur;
    var match = lineBreakG.exec(input);

    if (match && match.index < offset) {
      ++line;
      cur = match.index + match[0].length;
    } else {
      return new Position(line, offset - cur);
    }
  } // istanbul ignore next


  throw new Error("Unreachable");
}

var BaseParser = function () {
  function BaseParser() {} // Properties set by constructor in index.js
  // Initialized by Tokenizer


  BaseParser.prototype.isReservedWord = function isReservedWord(word) {
    if (word === "await") {
      return this.inModule;
    } else {
      return reservedWords[6](word);
    }
  };

  BaseParser.prototype.hasPlugin = function hasPlugin(name) {
    return !!this.plugins[name];
  };

  return BaseParser;
}();
/* eslint max-len: 0 */

/**
 * Based on the comment attachment algorithm used in espree and estraverse.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright
 *   notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 *   notice, this list of conditions and the following disclaimer in the
 *   documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


function last(stack) {
  return stack[stack.length - 1];
}

var CommentsParser = function (_BaseParser) {
  inheritsLoose(CommentsParser, _BaseParser);

  function CommentsParser() {
    return _BaseParser.apply(this, arguments) || this;
  }

  CommentsParser.prototype.addComment = function addComment(comment) {
    if (this.filename) comment.loc.filename = this.filename;
    this.state.trailingComments.push(comment);
    this.state.leadingComments.push(comment);
  };

  CommentsParser.prototype.processComment = function processComment(node) {
    if (node.type === "Program" && node.body.length > 0) return;
    var stack = this.state.commentStack;
    var firstChild = void 0,
        lastChild = void 0,
        trailingComments = void 0,
        i = void 0,
        j = void 0;

    if (this.state.trailingComments.length > 0) {
      // If the first comment in trailingComments comes after the
      // current node, then we're good - all comments in the array will
      // come after the node and so it's safe to add them as official
      // trailingComments.
      if (this.state.trailingComments[0].start >= node.end) {
        trailingComments = this.state.trailingComments;
        this.state.trailingComments = [];
      } else {
        // Otherwise, if the first comment doesn't come after the
        // current node, that means we have a mix of leading and trailing
        // comments in the array and that leadingComments contains the
        // same items as trailingComments. Reset trailingComments to
        // zero items and we'll handle this by evaluating leadingComments
        // later.
        this.state.trailingComments.length = 0;
      }
    } else {
      var lastInStack = last(stack);

      if (stack.length > 0 && lastInStack.trailingComments && lastInStack.trailingComments[0].start >= node.end) {
        trailingComments = lastInStack.trailingComments;
        lastInStack.trailingComments = null;
      }
    } // Eating the stack.


    if (stack.length > 0 && last(stack).start >= node.start) {
      firstChild = stack.pop();
    }

    while (stack.length > 0 && last(stack).start >= node.start) {
      lastChild = stack.pop();
    }

    if (!lastChild && firstChild) lastChild = firstChild; // Attach comments that follow a trailing comma on the last
    // property in an object literal or a trailing comma in function arguments
    // as trailing comments

    if (firstChild && this.state.leadingComments.length > 0) {
      var lastComment = last(this.state.leadingComments);

      if (firstChild.type === "ObjectProperty") {
        if (lastComment.start >= node.start) {
          if (this.state.commentPreviousNode) {
            for (j = 0; j < this.state.leadingComments.length; j++) {
              if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
                this.state.leadingComments.splice(j, 1);
                j--;
              }
            }

            if (this.state.leadingComments.length > 0) {
              firstChild.trailingComments = this.state.leadingComments;
              this.state.leadingComments = [];
            }
          }
        }
      } else if (node.type === "CallExpression" && node.arguments && node.arguments.length) {
        var lastArg = last(node.arguments);

        if (lastArg && lastComment.start >= lastArg.start && lastComment.end <= node.end) {
          if (this.state.commentPreviousNode) {
            if (this.state.leadingComments.length > 0) {
              lastArg.trailingComments = this.state.leadingComments;
              this.state.leadingComments = [];
            }
          }
        }
      }
    }

    if (lastChild) {
      if (lastChild.leadingComments) {
        if (lastChild !== node && last(lastChild.leadingComments).end <= node.start) {
          node.leadingComments = lastChild.leadingComments;
          lastChild.leadingComments = null;
        } else {
          // A leading comment for an anonymous class had been stolen by its first ClassMethod,
          // so this takes back the leading comment.
          // See also: https://github.com/eslint/espree/issues/158
          for (i = lastChild.leadingComments.length - 2; i >= 0; --i) {
            if (lastChild.leadingComments[i].end <= node.start) {
              node.leadingComments = lastChild.leadingComments.splice(0, i + 1);
              break;
            }
          }
        }
      }
    } else if (this.state.leadingComments.length > 0) {
      if (last(this.state.leadingComments).end <= node.start) {
        if (this.state.commentPreviousNode) {
          for (j = 0; j < this.state.leadingComments.length; j++) {
            if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
              this.state.leadingComments.splice(j, 1);
              j--;
            }
          }
        }

        if (this.state.leadingComments.length > 0) {
          node.leadingComments = this.state.leadingComments;
          this.state.leadingComments = [];
        }
      } else {
        // https://github.com/eslint/espree/issues/2
        //
        // In special cases, such as return (without a value) and
        // debugger, all comments will end up as leadingComments and
        // will otherwise be eliminated. This step runs when the
        // commentStack is empty and there are comments left
        // in leadingComments.
        //
        // This loop figures out the stopping point between the actual
        // leading and trailing comments by finding the location of the
        // first comment that comes after the given node.
        for (i = 0; i < this.state.leadingComments.length; i++) {
          if (this.state.leadingComments[i].end > node.start) {
            break;
          }
        } // Split the array based on the location of the first comment
        // that comes after the node. Keep in mind that this could
        // result in an empty array, and if so, the array must be
        // deleted.


        var leadingComments = this.state.leadingComments.slice(0, i);
        node.leadingComments = leadingComments.length === 0 ? null : leadingComments; // Similarly, trailing comments are attached later. The variable
        // must be reset to null if there are no trailing comments.

        trailingComments = this.state.leadingComments.slice(i);

        if (trailingComments.length === 0) {
          trailingComments = null;
        }
      }
    }

    this.state.commentPreviousNode = node;

    if (trailingComments) {
      if (trailingComments.length && trailingComments[0].start >= node.start && last(trailingComments).end <= node.end) {
        node.innerComments = trailingComments;
      } else {
        node.trailingComments = trailingComments;
      }
    }

    stack.push(node);
  };

  return CommentsParser;
}(BaseParser); // takes an offset integer (into the current `input`) to indicate
// the location of the error, attaches the position to the end
// of the error message, and then raises a `SyntaxError` with that
// message.


var LocationParser = function (_CommentsParser) {
  inheritsLoose(LocationParser, _CommentsParser);

  function LocationParser() {
    return _CommentsParser.apply(this, arguments) || this;
  }

  LocationParser.prototype.raise = function raise(pos, message, missingPluginNames) {
    var loc = getLineInfo(this.input, pos);
    message += " (".concat(loc.line, ":").concat(loc.column, ")"); // $FlowIgnore

    var err = new SyntaxError(message);
    err.pos = pos;
    err.loc = loc;

    if (missingPluginNames) {
      err.missingPlugin = missingPluginNames;
    }

    throw err;
  };

  return LocationParser;
}(CommentsParser);

var State = function () {
  function State() {}

  State.prototype.init = function init(options, input) {
    this.strict = options.strictMode === false ? false : options.sourceType === "module";
    this.input = input;
    this.potentialArrowAt = -1;
    this.noArrowAt = [];
    this.noArrowParamsConversionAt = []; // eslint-disable-next-line max-len

    this.inMethod = this.inFunction = this.inGenerator = this.inAsync = this.inPropertyName = this.inType = this.inClassProperty = this.noAnonFunctionType = false;
    this.classLevel = 0;
    this.labels = [];
    this.decoratorStack = [[]];
    this.tokens = [];
    this.comments = [];
    this.trailingComments = [];
    this.leadingComments = [];
    this.commentStack = []; // $FlowIgnore

    this.commentPreviousNode = null;
    this.pos = this.lineStart = 0;
    this.curLine = options.startLine;
    this.type = types.eof;
    this.value = null;
    this.start = this.end = this.pos;
    this.startLoc = this.endLoc = this.curPosition(); // $FlowIgnore

    this.lastTokEndLoc = this.lastTokStartLoc = null;
    this.lastTokStart = this.lastTokEnd = this.pos;
    this.context = [types$1.braceStatement];
    this.exprAllowed = true;
    this.containsEsc = this.containsOctal = false;
    this.octalPosition = null;
    this.invalidTemplateEscapePosition = null;
    this.exportedIdentifiers = [];
  }; // TODO


  State.prototype.curPosition = function curPosition() {
    return new Position(this.curLine, this.pos - this.lineStart);
  };

  State.prototype.clone = function clone(skipArrays) {
    var state = new State();

    for (var key in this) {
      // $FlowIgnore
      var val = this[key];

      if ((!skipArrays || key === "context") && Array.isArray(val)) {
        val = val.slice();
      } // $FlowIgnore


      state[key] = val;
    }

    return state;
  };

  return State;
}();
/* eslint max-len: 0 */
// an immediate sibling of NumericLiteralSeparator _


var forbiddenNumericSeparatorSiblings = {
  decBinOct: [46, // .
  66, // B
  69, // E
  79, // O
  95, // _ (multiple separators are not allowed)
  98, // b
  101, // e
  111],
  hex: [46, // .
  88, // X
  95, // _ (multiple separators are not allowed)
  120]
};
var allowedNumericSeparatorSiblings = {};
allowedNumericSeparatorSiblings.bin = [// 0 - 1
48, 49];
allowedNumericSeparatorSiblings.oct = [].concat(allowedNumericSeparatorSiblings.bin, [50, 51, 52, 53, 54, 55]);
allowedNumericSeparatorSiblings.dec = [].concat(allowedNumericSeparatorSiblings.oct, [56, 57]);
allowedNumericSeparatorSiblings.hex = [].concat(allowedNumericSeparatorSiblings.dec, [// A - F
65, 66, 67, 68, 69, 70, // a - f
97, 98, 99, 100, 101, 102]); // Object type used to represent tokens. Note that normally, tokens
// simply exist as properties on the parser object. This is only
// used for the onToken callback and the external tokenizer.

var Token = function Token(state) {
  this.type = state.type;
  this.value = state.value;
  this.start = state.start;
  this.end = state.end;
  this.loc = new SourceLocation(state.startLoc, state.endLoc);
}; // ## Tokenizer


function codePointToString(code) {
  // UTF-16 Decoding
  if (code <= 0xffff) {
    return String.fromCharCode(code);
  } else {
    return String.fromCharCode((code - 0x10000 >> 10) + 0xd800, (code - 0x10000 & 1023) + 0xdc00);
  }
}

var Tokenizer = function (_LocationParser) {
  inheritsLoose(Tokenizer, _LocationParser); // Forward-declarations
  // parser/util.js

  function Tokenizer(options, input) {
    var _this;

    _this = _LocationParser.call(this) || this;
    _this.state = new State();

    _this.state.init(options, input);

    _this.isLookahead = false;
    return _this;
  } // Move to the next token


  Tokenizer.prototype.next = function next() {
    if (this.options.tokens && !this.isLookahead) {
      this.state.tokens.push(new Token(this.state));
    }

    this.state.lastTokEnd = this.state.end;
    this.state.lastTokStart = this.state.start;
    this.state.lastTokEndLoc = this.state.endLoc;
    this.state.lastTokStartLoc = this.state.startLoc;
    this.nextToken();
  }; // TODO


  Tokenizer.prototype.eat = function eat(type) {
    if (this.match(type)) {
      this.next();
      return true;
    } else {
      return false;
    }
  }; // TODO


  Tokenizer.prototype.match = function match(type) {
    return this.state.type === type;
  }; // TODO


  Tokenizer.prototype.isKeyword = function isKeyword$$1(word) {
    return isKeyword(word);
  }; // TODO


  Tokenizer.prototype.lookahead = function lookahead() {
    var old = this.state;
    this.state = old.clone(true);
    this.isLookahead = true;
    this.next();
    this.isLookahead = false;
    var curr = this.state;
    this.state = old;
    return curr;
  }; // Toggle strict mode. Re-reads the next number or string to please
  // pedantic tests (`"use strict"; 010;` should fail).


  Tokenizer.prototype.setStrict = function setStrict(strict) {
    this.state.strict = strict;
    if (!this.match(types.num) && !this.match(types.string)) return;
    this.state.pos = this.state.start;

    while (this.state.pos < this.state.lineStart) {
      this.state.lineStart = this.input.lastIndexOf("\n", this.state.lineStart - 2) + 1;
      --this.state.curLine;
    }

    this.nextToken();
  };

  Tokenizer.prototype.curContext = function curContext() {
    return this.state.context[this.state.context.length - 1];
  }; // Read a single token, updating the parser object's token-related
  // properties.


  Tokenizer.prototype.nextToken = function nextToken() {
    var curContext = this.curContext();
    if (!curContext || !curContext.preserveSpace) this.skipSpace();
    this.state.containsOctal = false;
    this.state.octalPosition = null;
    this.state.start = this.state.pos;
    this.state.startLoc = this.state.curPosition();
    if (this.state.pos >= this.input.length) return this.finishToken(types.eof);

    if (curContext.override) {
      return curContext.override(this);
    } else {
      return this.readToken(this.fullCharCodeAtPos());
    }
  };

  Tokenizer.prototype.readToken = function readToken(code) {
    // Identifier or keyword. '\uXXXX' sequences are allowed in
    // identifiers, so '\' also dispatches to that.
    if (isIdentifierStart(code) || code === 92
    /* '\' */
    ) {
        return this.readWord();
      } else {
      return this.getTokenFromCode(code);
    }
  };

  Tokenizer.prototype.fullCharCodeAtPos = function fullCharCodeAtPos() {
    var code = this.input.charCodeAt(this.state.pos);
    if (code <= 0xd7ff || code >= 0xe000) return code;
    var next = this.input.charCodeAt(this.state.pos + 1);
    return (code << 10) + next - 0x35fdc00;
  };

  Tokenizer.prototype.pushComment = function pushComment(block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "CommentBlock" : "CommentLine",
      value: text,
      start: start,
      end: end,
      loc: new SourceLocation(startLoc, endLoc)
    };

    if (!this.isLookahead) {
      if (this.options.tokens) this.state.tokens.push(comment);
      this.state.comments.push(comment);
      this.addComment(comment);
    }
  };

  Tokenizer.prototype.skipBlockComment = function skipBlockComment() {
    var startLoc = this.state.curPosition();
    var start = this.state.pos;
    var end = this.input.indexOf("*/", this.state.pos += 2);
    if (end === -1) this.raise(this.state.pos - 2, "Unterminated comment");
    this.state.pos = end + 2;
    lineBreakG.lastIndex = start;
    var match = void 0;

    while ((match = lineBreakG.exec(this.input)) && match.index < this.state.pos) {
      ++this.state.curLine;
      this.state.lineStart = match.index + match[0].length;
    }

    this.pushComment(true, this.input.slice(start + 2, end), start, this.state.pos, startLoc, this.state.curPosition());
  };

  Tokenizer.prototype.skipLineComment = function skipLineComment(startSkip) {
    var start = this.state.pos;
    var startLoc = this.state.curPosition();
    var ch = this.input.charCodeAt(this.state.pos += startSkip);

    if (this.state.pos < this.input.length) {
      while (ch !== 10 && ch !== 13 && ch !== 8232 && ch !== 8233 && ++this.state.pos < this.input.length) {
        ch = this.input.charCodeAt(this.state.pos);
      }
    }

    this.pushComment(false, this.input.slice(start + startSkip, this.state.pos), start, this.state.pos, startLoc, this.state.curPosition());
  }; // Called at the start of the parse and after every token. Skips
  // whitespace and comments, and.


  Tokenizer.prototype.skipSpace = function skipSpace() {
    loop: while (this.state.pos < this.input.length) {
      var ch = this.input.charCodeAt(this.state.pos);

      switch (ch) {
        case 32: // space

        case 160:
          // non-breaking space
          ++this.state.pos;
          break;

        case 13:
          // '\r' carriage return
          if (this.input.charCodeAt(this.state.pos + 1) === 10) {
            ++this.state.pos;
          }

        case 10: // '\n' line feed

        case 8232: // line separator

        case 8233:
          // paragraph separator
          ++this.state.pos;
          ++this.state.curLine;
          this.state.lineStart = this.state.pos;
          break;

        case 47:
          // '/'
          switch (this.input.charCodeAt(this.state.pos + 1)) {
            case 42:
              // '*'
              this.skipBlockComment();
              break;

            case 47:
              this.skipLineComment(2);
              break;

            default:
              break loop;
          }

          break;

        default:
          if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
            ++this.state.pos;
          } else {
            break loop;
          }

      }
    }
  }; // Called at the end of every token. Sets `end`, `val`, and
  // maintains `context` and `exprAllowed`, and skips the space after
  // the token, so that the next one's `start` will point at the
  // right position.


  Tokenizer.prototype.finishToken = function finishToken(type, val) {
    this.state.end = this.state.pos;
    this.state.endLoc = this.state.curPosition();
    var prevType = this.state.type;
    this.state.type = type;
    this.state.value = val;
    this.updateContext(prevType);
  }; // ### Token reading
  // This is the function that is called to fetch the next token. It
  // is somewhat obscure, because it works in character codes rather
  // than characters, and because operator parsing has been inlined
  // into it.
  //
  // All in the name of speed.
  //


  Tokenizer.prototype.readToken_dot = function readToken_dot() {
    var next = this.input.charCodeAt(this.state.pos + 1);

    if (next >= 48 && next <= 57) {
      return this.readNumber(true);
    }

    var next2 = this.input.charCodeAt(this.state.pos + 2);

    if (next === 46 && next2 === 46) {
      // 46 = dot '.'
      this.state.pos += 3;
      return this.finishToken(types.ellipsis);
    } else {
      ++this.state.pos;
      return this.finishToken(types.dot);
    }
  };

  Tokenizer.prototype.readToken_slash = function readToken_slash() {
    // '/'
    if (this.state.exprAllowed) {
      ++this.state.pos;
      return this.readRegexp();
    }

    var next = this.input.charCodeAt(this.state.pos + 1);

    if (next === 61) {
      return this.finishOp(types.assign, 2);
    } else {
      return this.finishOp(types.slash, 1);
    }
  };

  Tokenizer.prototype.readToken_mult_modulo = function readToken_mult_modulo(code) {
    // '%*'
    var type = code === 42 ? types.star : types.modulo;
    var width = 1;
    var next = this.input.charCodeAt(this.state.pos + 1); // Exponentiation operator **

    if (code === 42 && next === 42) {
      width++;
      next = this.input.charCodeAt(this.state.pos + 2);
      type = types.exponent;
    }

    if (next === 61) {
      width++;
      type = types.assign;
    }

    return this.finishOp(type, width);
  };

  Tokenizer.prototype.readToken_pipe_amp = function readToken_pipe_amp(code) {
    // '|&'
    var next = this.input.charCodeAt(this.state.pos + 1);
    if (next === code) return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2);

    if (code === 124) {
      // '|>'
      if (next === 62) {
        return this.finishOp(types.pipeline, 2);
      } else if (next === 125 && this.hasPlugin("flow")) {
        // '|}'
        return this.finishOp(types.braceBarR, 2);
      }
    }

    if (next === 61) return this.finishOp(types.assign, 2);
    return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1);
  };

  Tokenizer.prototype.readToken_caret = function readToken_caret() {
    // '^'
    var next = this.input.charCodeAt(this.state.pos + 1);

    if (next === 61) {
      return this.finishOp(types.assign, 2);
    } else {
      return this.finishOp(types.bitwiseXOR, 1);
    }
  };

  Tokenizer.prototype.readToken_plus_min = function readToken_plus_min(code) {
    // '+-'
    var next = this.input.charCodeAt(this.state.pos + 1);

    if (next === code) {
      if (next === 45 && !this.inModule && this.input.charCodeAt(this.state.pos + 2) === 62 && lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.pos))) {
        // A `-->` line comment
        this.skipLineComment(3);
        this.skipSpace();
        return this.nextToken();
      }

      return this.finishOp(types.incDec, 2);
    }

    if (next === 61) {
      return this.finishOp(types.assign, 2);
    } else {
      return this.finishOp(types.plusMin, 1);
    }
  };

  Tokenizer.prototype.readToken_lt_gt = function readToken_lt_gt(code) {
    // '<>'
    var next = this.input.charCodeAt(this.state.pos + 1);
    var size = 1;

    if (next === code) {
      size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;
      if (this.input.charCodeAt(this.state.pos + size) === 61) return this.finishOp(types.assign, size + 1);
      return this.finishOp(types.bitShift, size);
    }

    if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {
      // `<!--`, an XML-style comment that should be interpreted as a line comment
      this.skipLineComment(4);
      this.skipSpace();
      return this.nextToken();
    }

    if (next === 61) {
      // <= | >=
      size = 2;
    }

    return this.finishOp(types.relational, size);
  };

  Tokenizer.prototype.readToken_eq_excl = function readToken_eq_excl(code) {
    // '=!'
    var next = this.input.charCodeAt(this.state.pos + 1);
    if (next === 61) return this.finishOp(types.equality, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);

    if (code === 61 && next === 62) {
      // '=>'
      this.state.pos += 2;
      return this.finishToken(types.arrow);
    }

    return this.finishOp(code === 61 ? types.eq : types.bang, 1);
  };

  Tokenizer.prototype.readToken_question = function readToken_question() {
    // '?'
    var next = this.input.charCodeAt(this.state.pos + 1);
    var next2 = this.input.charCodeAt(this.state.pos + 2);

    if (next === 46 && !(next2 >= 48 && next2 <= 57)) {
      // '.' not followed by a number
      this.state.pos += 2;
      return this.finishToken(types.questionDot);
    } else {
      ++this.state.pos;
      return this.finishToken(types.question);
    }
  };

  Tokenizer.prototype.getTokenFromCode = function getTokenFromCode(code) {
    switch (code) {
      case 35:
        // '#'
        if ((this.hasPlugin("classPrivateProperties") || this.hasPlugin("classPrivateMethods")) && this.state.classLevel > 0) {
          ++this.state.pos;
          return this.finishToken(types.hash);
        } else {
          this.raise(this.state.pos, "Unexpected character '".concat(codePointToString(code), "'"));
        }

      // The interpretation of a dot depends on whether it is followed
      // by a digit or another two dots.

      case 46:
        // '.'
        return this.readToken_dot();
      // Punctuation tokens.

      case 40:
        ++this.state.pos;
        return this.finishToken(types.parenL);

      case 41:
        ++this.state.pos;
        return this.finishToken(types.parenR);

      case 59:
        ++this.state.pos;
        return this.finishToken(types.semi);

      case 44:
        ++this.state.pos;
        return this.finishToken(types.comma);

      case 91:
        ++this.state.pos;
        return this.finishToken(types.bracketL);

      case 93:
        ++this.state.pos;
        return this.finishToken(types.bracketR);

      case 123:
        if (this.hasPlugin("flow") && this.input.charCodeAt(this.state.pos + 1) === 124) {
          return this.finishOp(types.braceBarL, 2);
        } else {
          ++this.state.pos;
          return this.finishToken(types.braceL);
        }

      case 125:
        ++this.state.pos;
        return this.finishToken(types.braceR);

      case 58:
        if (this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58) {
          return this.finishOp(types.doubleColon, 2);
        } else {
          ++this.state.pos;
          return this.finishToken(types.colon);
        }

      case 63:
        return this.readToken_question();

      case 64:
        ++this.state.pos;
        return this.finishToken(types.at);

      case 96:
        // '`'
        ++this.state.pos;
        return this.finishToken(types.backQuote);

      case 48:
        {
          // '0'
          var next = this.input.charCodeAt(this.state.pos + 1);
          if (next === 120 || next === 88) return this.readRadixNumber(16); // '0x', '0X' - hex number

          if (next === 111 || next === 79) return this.readRadixNumber(8); // '0o', '0O' - octal number

          if (next === 98 || next === 66) return this.readRadixNumber(2); // '0b', '0B' - binary number
        }
      // Anything else beginning with a digit is an integer, octal
      // number, or float.

      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        // 1-9
        return this.readNumber(false);
      // Quotes produce strings.

      case 34:
      case 39:
        // '"', "'"
        return this.readString(code);
      // Operators are parsed inline in tiny state machines. '=' (61) is
      // often referred to. `finishOp` simply skips the amount of
      // characters it is given as second argument, and returns a token
      // of the type given by its first argument.

      case 47:
        // '/'
        return this.readToken_slash();

      case 37:
      case 42:
        // '%*'
        return this.readToken_mult_modulo(code);

      case 124:
      case 38:
        // '|&'
        return this.readToken_pipe_amp(code);

      case 94:
        // '^'
        return this.readToken_caret();

      case 43:
      case 45:
        // '+-'
        return this.readToken_plus_min(code);

      case 60:
      case 62:
        // '<>'
        return this.readToken_lt_gt(code);

      case 61:
      case 33:
        // '=!'
        return this.readToken_eq_excl(code);

      case 126:
        // '~'
        return this.finishOp(types.tilde, 1);
    }

    this.raise(this.state.pos, "Unexpected character '".concat(codePointToString(code), "'"));
  };

  Tokenizer.prototype.finishOp = function finishOp(type, size) {
    var str = this.input.slice(this.state.pos, this.state.pos + size);
    this.state.pos += size;
    return this.finishToken(type, str);
  };

  Tokenizer.prototype.readRegexp = function readRegexp() {
    var start = this.state.pos;
    var escaped = void 0,
        inClass = void 0;

    for (;;) {
      if (this.state.pos >= this.input.length) this.raise(start, "Unterminated regular expression");
      var ch = this.input.charAt(this.state.pos);

      if (lineBreak.test(ch)) {
        this.raise(start, "Unterminated regular expression");
      }

      if (escaped) {
        escaped = false;
      } else {
        if (ch === "[") {
          inClass = true;
        } else if (ch === "]" && inClass) {
          inClass = false;
        } else if (ch === "/" && !inClass) {
          break;
        }

        escaped = ch === "\\";
      }

      ++this.state.pos;
    }

    var content = this.input.slice(start, this.state.pos);
    ++this.state.pos; // Need to use `readWord1` because '\uXXXX' sequences are allowed
    // here (don't ask).

    var mods = this.readWord1();

    if (mods) {
      var validFlags = /^[gmsiyu]*$/;
      if (!validFlags.test(mods)) this.raise(start, "Invalid regular expression flag");
    }

    return this.finishToken(types.regexp, {
      pattern: content,
      flags: mods
    });
  }; // Read an integer in the given radix. Return null if zero digits
  // were read, the integer value otherwise. When `len` is given, this
  // will return `null` unless the integer has exactly `len` digits.


  Tokenizer.prototype.readInt = function readInt(radix, len) {
    var start = this.state.pos;
    var forbiddenSiblings = radix === 16 ? forbiddenNumericSeparatorSiblings.hex : forbiddenNumericSeparatorSiblings.decBinOct;
    var allowedSiblings = radix === 16 ? allowedNumericSeparatorSiblings.hex : radix === 10 ? allowedNumericSeparatorSiblings.dec : radix === 8 ? allowedNumericSeparatorSiblings.oct : allowedNumericSeparatorSiblings.bin;
    var total = 0;

    for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
      var code = this.input.charCodeAt(this.state.pos);
      var val = void 0;

      if (this.hasPlugin("numericSeparator")) {
        var prev = this.input.charCodeAt(this.state.pos - 1);
        var next = this.input.charCodeAt(this.state.pos + 1);

        if (code === 95) {
          if (allowedSiblings.indexOf(next) === -1) {
            this.raise(this.state.pos, "Invalid or unexpected token");
          }

          if (forbiddenSiblings.indexOf(prev) > -1 || forbiddenSiblings.indexOf(next) > -1 || Number.isNaN(next)) {
            this.raise(this.state.pos, "Invalid or unexpected token");
          } // Ignore this _ character


          ++this.state.pos;
          continue;
        }
      }

      if (code >= 97) {
        val = code - 97 + 10; // a
      } else if (code >= 65) {
        val = code - 65 + 10; // A
      } else if (code >= 48 && code <= 57) {
        val = code - 48; // 0-9
      } else {
        val = Infinity;
      }

      if (val >= radix) break;
      ++this.state.pos;
      total = total * radix + val;
    }

    if (this.state.pos === start || len != null && this.state.pos - start !== len) return null;
    return total;
  };

  Tokenizer.prototype.readRadixNumber = function readRadixNumber(radix) {
    var start = this.state.pos;
    var isBigInt = false;
    this.state.pos += 2; // 0x

    var val = this.readInt(radix);
    if (val == null) this.raise(this.state.start + 2, "Expected number in radix " + radix);

    if (this.hasPlugin("bigInt")) {
      if (this.input.charCodeAt(this.state.pos) === 0x6e) {
        // 'n'
        ++this.state.pos;
        isBigInt = true;
      }
    }

    if (isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.state.pos, "Identifier directly after number");

    if (isBigInt) {
      var str = this.input.slice(start, this.state.pos).replace(/[_n]/g, "");
      return this.finishToken(types.bigint, str);
    }

    return this.finishToken(types.num, val);
  }; // Read an integer, octal integer, or floating-point number.


  Tokenizer.prototype.readNumber = function readNumber(startsWithDot) {
    var start = this.state.pos;
    var octal = this.input.charCodeAt(start) === 0x30; // '0'

    var isFloat = false;
    var isBigInt = false;
    if (!startsWithDot && this.readInt(10) === null) this.raise(start, "Invalid number");
    if (octal && this.state.pos == start + 1) octal = false; // number === 0

    var next = this.input.charCodeAt(this.state.pos);

    if (next === 0x2e && !octal) {
      // '.'
      ++this.state.pos;
      this.readInt(10);
      isFloat = true;
      next = this.input.charCodeAt(this.state.pos);
    }

    if ((next === 0x45 || next === 0x65) && !octal) {
      // 'Ee'
      next = this.input.charCodeAt(++this.state.pos);
      if (next === 0x2b || next === 0x2d) ++this.state.pos; // '+-'

      if (this.readInt(10) === null) this.raise(start, "Invalid number");
      isFloat = true;
      next = this.input.charCodeAt(this.state.pos);
    }

    if (this.hasPlugin("bigInt")) {
      if (next === 0x6e) {
        // 'n'
        // disallow floats and legacy octal syntax, new style octal ("0o") is handled in this.readRadixNumber
        if (isFloat || octal) this.raise(start, "Invalid BigIntLiteral");
        ++this.state.pos;
        isBigInt = true;
      }
    }

    if (isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.state.pos, "Identifier directly after number"); // remove "_" for numeric literal separator, and "n" for BigInts

    var str = this.input.slice(start, this.state.pos).replace(/[_n]/g, "");

    if (isBigInt) {
      return this.finishToken(types.bigint, str);
    }

    var val = void 0;

    if (isFloat) {
      val = parseFloat(str);
    } else if (!octal || str.length === 1) {
      val = parseInt(str, 10);
    } else if (this.state.strict) {
      this.raise(start, "Invalid number");
    } else if (/[89]/.test(str)) {
      val = parseInt(str, 10);
    } else {
      val = parseInt(str, 8);
    }

    return this.finishToken(types.num, val);
  }; // Read a string value, interpreting backslash-escapes.


  Tokenizer.prototype.readCodePoint = function readCodePoint(throwOnInvalid) {
    var ch = this.input.charCodeAt(this.state.pos);
    var code = void 0;

    if (ch === 123) {
      // '{'
      var codePos = ++this.state.pos;
      code = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, throwOnInvalid);
      ++this.state.pos;

      if (code === null) {
        // $FlowFixMe (is this always non-null?)
        --this.state.invalidTemplateEscapePosition; // to point to the '\'' instead of the 'u'
      } else if (code > 0x10ffff) {
        if (throwOnInvalid) {
          this.raise(codePos, "Code point out of bounds");
        } else {
          this.state.invalidTemplateEscapePosition = codePos - 2;
          return null;
        }
      }
    } else {
      code = this.readHexChar(4, throwOnInvalid);
    }

    return code;
  };

  Tokenizer.prototype.readString = function readString(quote) {
    var out = "",
        chunkStart = ++this.state.pos;

    for (;;) {
      if (this.state.pos >= this.input.length) this.raise(this.state.start, "Unterminated string constant");
      var ch = this.input.charCodeAt(this.state.pos);
      if (ch === quote) break;

      if (ch === 92) {
        // '\'
        out += this.input.slice(chunkStart, this.state.pos); // $FlowFixMe

        out += this.readEscapedChar(false);
        chunkStart = this.state.pos;
      } else {
        if (isNewLine(ch)) this.raise(this.state.start, "Unterminated string constant");
        ++this.state.pos;
      }
    }

    out += this.input.slice(chunkStart, this.state.pos++);
    return this.finishToken(types.string, out);
  }; // Reads template string tokens.


  Tokenizer.prototype.readTmplToken = function readTmplToken() {
    var out = "",
        chunkStart = this.state.pos,
        containsInvalid = false;

    for (;;) {
      if (this.state.pos >= this.input.length) this.raise(this.state.start, "Unterminated template");
      var ch = this.input.charCodeAt(this.state.pos);

      if (ch === 96 || ch === 36 && this.input.charCodeAt(this.state.pos + 1) === 123) {
        // '`', '${'
        if (this.state.pos === this.state.start && this.match(types.template)) {
          if (ch === 36) {
            this.state.pos += 2;
            return this.finishToken(types.dollarBraceL);
          } else {
            ++this.state.pos;
            return this.finishToken(types.backQuote);
          }
        }

        out += this.input.slice(chunkStart, this.state.pos);
        return this.finishToken(types.template, containsInvalid ? null : out);
      }

      if (ch === 92) {
        // '\'
        out += this.input.slice(chunkStart, this.state.pos);
        var escaped = this.readEscapedChar(true);

        if (escaped === null) {
          containsInvalid = true;
        } else {
          out += escaped;
        }

        chunkStart = this.state.pos;
      } else if (isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.state.pos);
        ++this.state.pos;

        switch (ch) {
          case 13:
            if (this.input.charCodeAt(this.state.pos) === 10) ++this.state.pos;

          case 10:
            out += "\n";
            break;

          default:
            out += String.fromCharCode(ch);
            break;
        }

        ++this.state.curLine;
        this.state.lineStart = this.state.pos;
        chunkStart = this.state.pos;
      } else {
        ++this.state.pos;
      }
    }
  }; // Used to read escaped characters


  Tokenizer.prototype.readEscapedChar = function readEscapedChar(inTemplate) {
    var throwOnInvalid = !inTemplate;
    var ch = this.input.charCodeAt(++this.state.pos);
    ++this.state.pos;

    switch (ch) {
      case 110:
        return "\n";
      // 'n' -> '\n'

      case 114:
        return "\r";
      // 'r' -> '\r'

      case 120:
        {
          // 'x'
          var code = this.readHexChar(2, throwOnInvalid);
          return code === null ? null : String.fromCharCode(code);
        }

      case 117:
        {
          // 'u'
          var _code = this.readCodePoint(throwOnInvalid);

          return _code === null ? null : codePointToString(_code);
        }

      case 116:
        return "\t";
      // 't' -> '\t'

      case 98:
        return "\b";
      // 'b' -> '\b'

      case 118:
        return "\x0B";
      // 'v' -> '\u000b'

      case 102:
        return "\f";
      // 'f' -> '\f'

      case 13:
        if (this.input.charCodeAt(this.state.pos) === 10) ++this.state.pos;
      // '\r\n'

      case 10:
        // ' \n'
        this.state.lineStart = this.state.pos;
        ++this.state.curLine;
        return "";

      default:
        if (ch >= 48 && ch <= 55) {
          var codePos = this.state.pos - 1; // $FlowFixMe

          var octalStr = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/)[0];
          var octal = parseInt(octalStr, 8);

          if (octal > 255) {
            octalStr = octalStr.slice(0, -1);
            octal = parseInt(octalStr, 8);
          }

          if (octal > 0) {
            if (inTemplate) {
              this.state.invalidTemplateEscapePosition = codePos;
              return null;
            } else if (this.state.strict) {
              this.raise(codePos, "Octal literal in strict mode");
            } else if (!this.state.containsOctal) {
              // These properties are only used to throw an error for an octal which occurs
              // in a directive which occurs prior to a "use strict" directive.
              this.state.containsOctal = true;
              this.state.octalPosition = codePos;
            }
          }

          this.state.pos += octalStr.length - 1;
          return String.fromCharCode(octal);
        }

        return String.fromCharCode(ch);
    }
  }; // Used to read character escape sequences ('\x', '\u').


  Tokenizer.prototype.readHexChar = function readHexChar(len, throwOnInvalid) {
    var codePos = this.state.pos;
    var n = this.readInt(16, len);

    if (n === null) {
      if (throwOnInvalid) {
        this.raise(codePos, "Bad character escape sequence");
      } else {
        this.state.pos = codePos - 1;
        this.state.invalidTemplateEscapePosition = codePos - 1;
      }
    }

    return n;
  }; // Read an identifier, and return it as a string. Sets `this.state.containsEsc`
  // to whether the word contained a '\u' escape.
  //
  // Incrementally adds only escaped chars, adding other chunks as-is
  // as a micro-optimization.


  Tokenizer.prototype.readWord1 = function readWord1() {
    this.state.containsEsc = false;
    var word = "",
        first = true,
        chunkStart = this.state.pos;

    while (this.state.pos < this.input.length) {
      var ch = this.fullCharCodeAtPos();

      if (isIdentifierChar(ch)) {
        this.state.pos += ch <= 0xffff ? 1 : 2;
      } else if (ch === 92) {
        // "\"
        this.state.containsEsc = true;
        word += this.input.slice(chunkStart, this.state.pos);
        var escStart = this.state.pos;

        if (this.input.charCodeAt(++this.state.pos) !== 117) {
          // "u"
          this.raise(this.state.pos, "Expecting Unicode escape sequence \\uXXXX");
        }

        ++this.state.pos;
        var esc = this.readCodePoint(true); // $FlowFixMe (thinks esc may be null, but throwOnInvalid is true)

        if (!(first ? isIdentifierStart : isIdentifierChar)(esc, true)) {
          this.raise(escStart, "Invalid Unicode escape");
        } // $FlowFixMe


        word += codePointToString(esc);
        chunkStart = this.state.pos;
      } else {
        break;
      }

      first = false;
    }

    return word + this.input.slice(chunkStart, this.state.pos);
  }; // Read an identifier or keyword token. Will check for reserved
  // words when necessary.


  Tokenizer.prototype.readWord = function readWord() {
    var word = this.readWord1();
    var type = types.name;

    if (this.isKeyword(word)) {
      if (this.state.containsEsc) {
        this.raise(this.state.pos, "Escape sequence in keyword ".concat(word));
      }

      type = keywords[word];
    }

    return this.finishToken(type, word);
  };

  Tokenizer.prototype.braceIsBlock = function braceIsBlock(prevType) {
    if (prevType === types.colon) {
      var parent = this.curContext();

      if (parent === types$1.braceStatement || parent === types$1.braceExpression) {
        return !parent.isExpr;
      }
    }

    if (prevType === types._return) {
      return lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start));
    }

    if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR) {
      return true;
    }

    if (prevType === types.braceL) {
      return this.curContext() === types$1.braceStatement;
    }

    if (prevType === types.relational) {
      // `class C<T> { ... }`
      return true;
    }

    return !this.state.exprAllowed;
  };

  Tokenizer.prototype.updateContext = function updateContext(prevType) {
    var type = this.state.type;
    var update = void 0;

    if (type.keyword && (prevType === types.dot || prevType === types.questionDot)) {
      this.state.exprAllowed = false;
    } else if (update = type.updateContext) {
      update.call(this, prevType);
    } else {
      this.state.exprAllowed = type.beforeExpr;
    }
  };

  return Tokenizer;
}(LocationParser);

var UtilParser = function (_Tokenizer) {
  inheritsLoose(UtilParser, _Tokenizer);

  function UtilParser() {
    return _Tokenizer.apply(this, arguments) || this;
  } // TODO


  UtilParser.prototype.addExtra = function addExtra(node, key, val) {
    if (!node) return;
    var extra = node.extra = node.extra || {};
    extra[key] = val;
  }; // TODO


  UtilParser.prototype.isRelational = function isRelational(op) {
    return this.match(types.relational) && this.state.value === op;
  }; // TODO


  UtilParser.prototype.expectRelational = function expectRelational(op) {
    if (this.isRelational(op)) {
      this.next();
    } else {
      this.unexpected(null, types.relational);
    }
  }; // eat() for relational operators.


  UtilParser.prototype.eatRelational = function eatRelational(op) {
    if (this.isRelational(op)) {
      this.next();
      return true;
    }

    return false;
  }; // Tests whether parsed token is a contextual keyword.


  UtilParser.prototype.isContextual = function isContextual(name) {
    return this.match(types.name) && this.state.value === name;
  }; // Consumes contextual keyword if possible.


  UtilParser.prototype.eatContextual = function eatContextual(name) {
    return this.state.value === name && this.eat(types.name);
  }; // Asserts that following token is given contextual keyword.


  UtilParser.prototype.expectContextual = function expectContextual(name, message) {
    if (!this.eatContextual(name)) this.unexpected(null, message);
  }; // Test whether a semicolon can be inserted at the current position.


  UtilParser.prototype.canInsertSemicolon = function canInsertSemicolon() {
    return this.match(types.eof) || this.match(types.braceR) || this.hasPrecedingLineBreak();
  };

  UtilParser.prototype.hasPrecedingLineBreak = function hasPrecedingLineBreak() {
    return lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start));
  }; // TODO


  UtilParser.prototype.isLineTerminator = function isLineTerminator() {
    return this.eat(types.semi) || this.canInsertSemicolon();
  }; // Consume a semicolon, or, failing that, see if we are allowed to
  // pretend that there is a semicolon at this position.


  UtilParser.prototype.semicolon = function semicolon() {
    if (!this.isLineTerminator()) this.unexpected(null, types.semi);
  }; // Expect a token of a given type. If found, consume it, otherwise,
  // raise an unexpected token error at given pos.


  UtilParser.prototype.expect = function expect(type, pos) {
    this.eat(type) || this.unexpected(pos, type);
  }; // Raise an unexpected token error. Can take the expected token type
  // instead of a message string.


  UtilParser.prototype.unexpected = function unexpected(pos, messageOrType) {
    if (messageOrType === void 0) {
      messageOrType = "Unexpected token";
    }

    if (typeof messageOrType !== "string") {
      messageOrType = "Unexpected token, expected ".concat(messageOrType.label);
    }

    throw this.raise(pos != null ? pos : this.state.start, messageOrType);
  };

  UtilParser.prototype.expectPlugin = function expectPlugin(name, pos) {
    if (!this.hasPlugin(name)) {
      throw this.raise(pos != null ? pos : this.state.start, "This experimental syntax requires enabling the parser plugin: '".concat(name, "'"), [name]);
    }
  };

  UtilParser.prototype.expectOnePlugin = function expectOnePlugin(names, pos) {
    var _this2 = this;

    if (!names.some(function (n) {
      return _this2.hasPlugin(n);
    })) {
      throw this.raise(pos != null ? pos : this.state.start, "This experimental syntax requires enabling one of the following parser plugin(s): '".concat(names.join(", "), "'"), names);
    }
  };

  return UtilParser;
}(Tokenizer); // Start an AST node, attaching a start offset.


var commentKeys = ["leadingComments", "trailingComments", "innerComments"];

var Node = function () {
  function Node(parser, pos, loc) {
    this.type = "";
    this.start = pos;
    this.end = 0;
    this.loc = new SourceLocation(loc);
    if (parser && parser.options.ranges) this.range = [pos, 0];
    if (parser && parser.filename) this.loc.filename = parser.filename;
  }

  Node.prototype.__clone = function __clone() {
    // $FlowIgnore
    var node2 = new Node();

    for (var _key in this) {
      // Do not clone comments that are already attached to the node
      if (commentKeys.indexOf(_key) < 0) {
        // $FlowIgnore
        node2[_key] = this[_key];
      }
    }

    return node2;
  };

  return Node;
}();

var NodeUtils = function (_UtilParser) {
  inheritsLoose(NodeUtils, _UtilParser);

  function NodeUtils() {
    return _UtilParser.apply(this, arguments) || this;
  }

  NodeUtils.prototype.startNode = function startNode() {
    // $FlowIgnore
    return new Node(this, this.state.start, this.state.startLoc);
  };

  NodeUtils.prototype.startNodeAt = function startNodeAt(pos, loc) {
    // $FlowIgnore
    return new Node(this, pos, loc);
  };
  /** Start a new node with a previous node's location. */


  NodeUtils.prototype.startNodeAtNode = function startNodeAtNode(type) {
    return this.startNodeAt(type.start, type.loc.start);
  }; // Finish an AST node, adding `type` and `end` properties.


  NodeUtils.prototype.finishNode = function finishNode(node, type) {
    return this.finishNodeAt(node, type, this.state.lastTokEnd, this.state.lastTokEndLoc);
  }; // Finish node at given position


  NodeUtils.prototype.finishNodeAt = function finishNodeAt(node, type, pos, loc) {
    node.type = type;
    node.end = pos;
    node.loc.end = loc;
    if (this.options.ranges) node.range[1] = pos;
    this.processComment(node);
    return node;
  };
  /**
   * Reset the start location of node to the start location of locationNode
   */


  NodeUtils.prototype.resetStartLocationFromNode = function resetStartLocationFromNode(node, locationNode) {
    node.start = locationNode.start;
    node.loc.start = locationNode.loc.start;
    if (this.options.ranges) node.range[0] = locationNode.range[0];
  };

  return NodeUtils;
}(UtilParser);

var LValParser = function (_NodeUtils) {
  inheritsLoose(LValParser, _NodeUtils);

  function LValParser() {
    return _NodeUtils.apply(this, arguments) || this;
  } // Forward-declaration: defined in expression.js
  // Forward-declaration: defined in statement.js
  // Convert existing expression atom to assignable pattern
  // if possible.


  LValParser.prototype.toAssignable = function toAssignable(node, isBinding, contextDescription) {
    if (node) {
      switch (node.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
          break;

        case "ObjectExpression":
          node.type = "ObjectPattern";

          for (var _iterator = node.properties.entries(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref2 = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref2 = _i.value;
            }

            var _ref3 = _ref2;
            var _index = _ref3[0];
            var _prop = _ref3[1];
            this.toAssignableObjectExpressionProp(_prop, isBinding, _index === node.properties.length - 1);
          }

          break;

        case "ObjectProperty":
          this.toAssignable(node.value, isBinding, contextDescription);
          break;

        case "SpreadElement":
          {
            this.checkToRestConversion(node);
            node.type = "RestElement";
            var arg = node.argument;
            this.toAssignable(arg, isBinding, contextDescription);
            break;
          }

        case "ArrayExpression":
          node.type = "ArrayPattern";
          this.toAssignableList(node.elements, isBinding, contextDescription);
          break;

        case "AssignmentExpression":
          if (node.operator === "=") {
            node.type = "AssignmentPattern";
            delete node.operator;
          } else {
            this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
          }

          break;

        case "MemberExpression":
          if (!isBinding) break;

        default:
          {
            var message = "Invalid left-hand side" + (contextDescription ? " in " + contextDescription :
            /* istanbul ignore next */
            "expression");
            this.raise(node.start, message);
          }
      }
    }

    return node;
  };

  LValParser.prototype.toAssignableObjectExpressionProp = function toAssignableObjectExpressionProp(prop, isBinding, isLast) {
    if (prop.type === "ObjectMethod") {
      var error = prop.kind === "get" || prop.kind === "set" ? "Object pattern can't contain getter or setter" : "Object pattern can't contain methods";
      this.raise(prop.key.start, error);
    } else if (prop.type === "SpreadElement" && !isLast) {
      this.raise(prop.start, "The rest element has to be the last element when destructuring");
    } else {
      this.toAssignable(prop, isBinding, "object destructuring pattern");
    }
  }; // Convert list of expression atoms to binding list.


  LValParser.prototype.toAssignableList = function toAssignableList(exprList, isBinding, contextDescription) {
    var end = exprList.length;

    if (end) {
      var last = exprList[end - 1];

      if (last && last.type === "RestElement") {
        --end;
      } else if (last && last.type === "SpreadElement") {
        last.type = "RestElement";
        var arg = last.argument;
        this.toAssignable(arg, isBinding, contextDescription);

        if (arg.type !== "Identifier" && arg.type !== "MemberExpression" && arg.type !== "ArrayPattern") {
          this.unexpected(arg.start);
        }

        --end;
      }
    }

    for (var i = 0; i < end; i++) {
      var elt = exprList[i];
      if (elt && elt.type === "SpreadElement") this.raise(elt.start, "The rest element has to be the last element when destructuring");
      if (elt) this.toAssignable(elt, isBinding, contextDescription);
    }

    return exprList;
  }; // Convert list of expression atoms to a list of


  LValParser.prototype.toReferencedList = function toReferencedList(exprList) {
    return exprList;
  }; // Parses spread element.


  LValParser.prototype.parseSpread = function parseSpread(refShorthandDefaultPos) {
    var node = this.startNode();
    this.next();
    node.argument = this.parseMaybeAssign(false, refShorthandDefaultPos);
    return this.finishNode(node, "SpreadElement");
  };

  LValParser.prototype.parseRest = function parseRest() {
    var node = this.startNode();
    this.next();
    node.argument = this.parseBindingAtom();
    return this.finishNode(node, "RestElement");
  };

  LValParser.prototype.shouldAllowYieldIdentifier = function shouldAllowYieldIdentifier() {
    return this.match(types._yield) && !this.state.strict && !this.state.inGenerator;
  };

  LValParser.prototype.parseBindingIdentifier = function parseBindingIdentifier() {
    return this.parseIdentifier(this.shouldAllowYieldIdentifier());
  }; // Parses lvalue (assignable) atom.


  LValParser.prototype.parseBindingAtom = function parseBindingAtom() {
    switch (this.state.type) {
      case types._yield:
      case types.name:
        return this.parseBindingIdentifier();

      case types.bracketL:
        {
          var node = this.startNode();
          this.next();
          node.elements = this.parseBindingList(types.bracketR, true);
          return this.finishNode(node, "ArrayPattern");
        }

      case types.braceL:
        return this.parseObj(true);

      default:
        throw this.unexpected();
    }
  };

  LValParser.prototype.parseBindingList = function parseBindingList(close, allowEmpty, allowModifiers) {
    var elts = [];
    var first = true;

    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);
      }

      if (allowEmpty && this.match(types.comma)) {
        // $FlowFixMe This method returns `$ReadOnlyArray<?Pattern>` if `allowEmpty` is set.
        elts.push(null);
      } else if (this.eat(close)) {
        break;
      } else if (this.match(types.ellipsis)) {
        elts.push(this.parseAssignableListItemTypes(this.parseRest()));
        this.expect(close);
        break;
      } else {
        var decorators = [];

        if (this.match(types.at) && this.hasPlugin("decorators2")) {
          this.raise(this.state.start, "Stage 2 decorators cannot be used to decorate parameters");
        }

        while (this.match(types.at)) {
          decorators.push(this.parseDecorator());
        }

        elts.push(this.parseAssignableListItem(allowModifiers, decorators));
      }
    }

    return elts;
  };

  LValParser.prototype.parseAssignableListItem = function parseAssignableListItem(allowModifiers, decorators) {
    var left = this.parseMaybeDefault();
    this.parseAssignableListItemTypes(left);
    var elt = this.parseMaybeDefault(left.start, left.loc.start, left);

    if (decorators.length) {
      left.decorators = decorators;
    }

    return elt;
  };

  LValParser.prototype.parseAssignableListItemTypes = function parseAssignableListItemTypes(param) {
    return param;
  }; // Parses assignment pattern around given atom if possible.


  LValParser.prototype.parseMaybeDefault = function parseMaybeDefault(startPos, startLoc, left) {
    startLoc = startLoc || this.state.startLoc;
    startPos = startPos || this.state.start;
    left = left || this.parseBindingAtom();
    if (!this.eat(types.eq)) return left;
    var node = this.startNodeAt(startPos, startLoc);
    node.left = left;
    node.right = this.parseMaybeAssign();
    return this.finishNode(node, "AssignmentPattern");
  }; // Verify that a node is an lval â€” something that can be assigned
  // to.


  LValParser.prototype.checkLVal = function checkLVal(expr, isBinding, checkClashes, contextDescription) {
    switch (expr.type) {
      case "Identifier":
        this.checkReservedWord(expr.name, expr.start, false, true);

        if (checkClashes) {
          // we need to prefix this with an underscore for the cases where we have a key of
          // `__proto__`. there's a bug in old V8 where the following wouldn't work:
          //
          //   > var obj = Object.create(null);
          //   undefined
          //   > obj.__proto__
          //   null
          //   > obj.__proto__ = true;
          //   true
          //   > obj.__proto__
          //   null
          var _key = "_".concat(expr.name);

          if (checkClashes[_key]) {
            this.raise(expr.start, "Argument name clash in strict mode");
          } else {
            checkClashes[_key] = true;
          }
        }

        break;

      case "MemberExpression":
        if (isBinding) this.raise(expr.start, "Binding member expression");
        break;

      case "ObjectPattern":
        for (var _iterator2 = expr.properties, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref4;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref4 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref4 = _i2.value;
          }

          var _prop2 = _ref4;
          if (_prop2.type === "ObjectProperty") _prop2 = _prop2.value;
          this.checkLVal(_prop2, isBinding, checkClashes, "object destructuring pattern");
        }

        break;

      case "ArrayPattern":
        for (var _iterator3 = expr.elements, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref5;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref5 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref5 = _i3.value;
          }

          var _elem = _ref5;
          if (_elem) this.checkLVal(_elem, isBinding, checkClashes, "array destructuring pattern");
        }

        break;

      case "AssignmentPattern":
        this.checkLVal(expr.left, isBinding, checkClashes, "assignment pattern");
        break;

      case "RestElement":
        this.checkLVal(expr.argument, isBinding, checkClashes, "rest element");
        break;

      default:
        {
          var message = (isBinding ?
          /* istanbul ignore next */
          "Binding invalid" : "Invalid") + " left-hand side" + (contextDescription ? " in " + contextDescription :
          /* istanbul ignore next */
          "expression");
          this.raise(expr.start, message);
        }
    }
  };

  LValParser.prototype.checkToRestConversion = function checkToRestConversion(node) {
    var validArgumentTypes = ["Identifier", "MemberExpression"];

    if (validArgumentTypes.indexOf(node.argument.type) !== -1) {
      return;
    }

    this.raise(node.argument.start, "Invalid rest operator's argument");
  };

  return LValParser;
}(NodeUtils);
/* eslint max-len: 0 */
// A recursive descent parser operates by defining functions for all
// syntactic elements, and recursively calling those, each function
// advancing the input stream and returning an AST node. Precedence
// of constructs (for example, the fact that `!x[1]` means `!(x[1])`
// instead of `(!x)[1]` is handled by the fact that the parser
// function that parses unary prefix operators is called first, and
// in turn calls the function that parses `[]` subscripts â€” that
// way, it'll receive the node for `x[1]` already parsed, and wraps
// *that* in the unary operator node.
//
// Acorn uses an [operator precedence parser][opp] to handle binary
// operator precedence, because it is much more compact than using
// the technique outlined above, which uses different, nesting
// functions to specify precedence, for all of the ten binary
// precedence levels that JavaScript defines.
//
// [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser


var ExpressionParser = function (_LValParser) {
  inheritsLoose(ExpressionParser, _LValParser);

  function ExpressionParser() {
    return _LValParser.apply(this, arguments) || this;
  } // Forward-declaration: defined in statement.js
  // Check if property name clashes with already added.
  // Object/class getters and setters are not allowed to clash â€”
  // either with each other or with an init property â€” and in
  // strict mode, init properties are also not allowed to be repeated.


  ExpressionParser.prototype.checkPropClash = function checkPropClash(prop, propHash) {
    if (prop.computed || prop.kind) return;
    var key = prop.key; // It is either an Identifier or a String/NumericLiteral

    var name = key.type === "Identifier" ? key.name : String(key.value);

    if (name === "__proto__") {
      if (propHash.proto) this.raise(key.start, "Redefinition of __proto__ property");
      propHash.proto = true;
    }
  }; // Convenience method to parse an Expression only


  ExpressionParser.prototype.getExpression = function getExpression() {
    this.nextToken();
    var expr = this.parseExpression();

    if (!this.match(types.eof)) {
      this.unexpected();
    }

    expr.comments = this.state.comments;
    return expr;
  }; // ### Expression parsing
  // These nest, from the most general expression type at the top to
  // 'atomic', nondivisible expression types at the bottom. Most of
  // the functions will simply let the function (s) below them parse,
  // and, *if* the syntactic construct they handle is present, wrap
  // the AST node that the inner parser gave them in another node.
  // Parse a full expression. The optional arguments are used to
  // forbid the `in` operator (in for loops initialization expressions)
  // and provide reference for storing '=' operator inside shorthand
  // property assignment in contexts where both object expression
  // and object pattern might appear (so it's possible to raise
  // delayed syntax error at correct position).


  ExpressionParser.prototype.parseExpression = function parseExpression(noIn, refShorthandDefaultPos) {
    var startPos = this.state.start;
    var startLoc = this.state.startLoc;
    var expr = this.parseMaybeAssign(noIn, refShorthandDefaultPos);

    if (this.match(types.comma)) {
      var _node = this.startNodeAt(startPos, startLoc);

      _node.expressions = [expr];

      while (this.eat(types.comma)) {
        _node.expressions.push(this.parseMaybeAssign(noIn, refShorthandDefaultPos));
      }

      this.toReferencedList(_node.expressions);
      return this.finishNode(_node, "SequenceExpression");
    }

    return expr;
  }; // Parse an assignment expression. This includes applications of
  // operators like `+=`.


  ExpressionParser.prototype.parseMaybeAssign = function parseMaybeAssign(noIn, refShorthandDefaultPos, afterLeftParse, refNeedsArrowPos) {
    var startPos = this.state.start;
    var startLoc = this.state.startLoc;

    if (this.match(types._yield) && this.state.inGenerator) {
      var _left = this.parseYield();

      if (afterLeftParse) _left = afterLeftParse.call(this, _left, startPos, startLoc);
      return _left;
    }

    var failOnShorthandAssign = void 0;

    if (refShorthandDefaultPos) {
      failOnShorthandAssign = false;
    } else {
      refShorthandDefaultPos = {
        start: 0
      };
      failOnShorthandAssign = true;
    }

    if (this.match(types.parenL) || this.match(types.name)) {
      this.state.potentialArrowAt = this.state.start;
    }

    var left = this.parseMaybeConditional(noIn, refShorthandDefaultPos, refNeedsArrowPos);
    if (afterLeftParse) left = afterLeftParse.call(this, left, startPos, startLoc);

    if (this.state.type.isAssign) {
      var _node2 = this.startNodeAt(startPos, startLoc);

      _node2.operator = this.state.value;
      _node2.left = this.match(types.eq) ? this.toAssignable(left, undefined, "assignment expression") : left;
      refShorthandDefaultPos.start = 0; // reset because shorthand default was used correctly

      this.checkLVal(left, undefined, undefined, "assignment expression");

      if (left.extra && left.extra.parenthesized) {
        var errorMsg = void 0;

        if (left.type === "ObjectPattern") {
          errorMsg = "`({a}) = 0` use `({a} = 0)`";
        } else if (left.type === "ArrayPattern") {
          errorMsg = "`([a]) = 0` use `([a] = 0)`";
        }

        if (errorMsg) {
          this.raise(left.start, "You're trying to assign to a parenthesized expression, eg. instead of ".concat(errorMsg));
        }
      }

      this.next();
      _node2.right = this.parseMaybeAssign(noIn);
      return this.finishNode(_node2, "AssignmentExpression");
    } else if (failOnShorthandAssign && refShorthandDefaultPos.start) {
      this.unexpected(refShorthandDefaultPos.start);
    }

    return left;
  }; // Parse a ternary conditional (`?:`) operator.


  ExpressionParser.prototype.parseMaybeConditional = function parseMaybeConditional(noIn, refShorthandDefaultPos, refNeedsArrowPos) {
    var startPos = this.state.start;
    var startLoc = this.state.startLoc;
    var potentialArrowAt = this.state.potentialArrowAt;
    var expr = this.parseExprOps(noIn, refShorthandDefaultPos);

    if (expr.type === "ArrowFunctionExpression" && expr.start === potentialArrowAt) {
      return expr;
    }

    if (refShorthandDefaultPos && refShorthandDefaultPos.start) return expr;
    return this.parseConditional(expr, noIn, startPos, startLoc, refNeedsArrowPos);
  };

  ExpressionParser.prototype.parseConditional = function parseConditional(expr, noIn, startPos, startLoc, // FIXME: Disabling this for now since can't seem to get it to play nicely
  refNeedsArrowPos) {
    if (this.eat(types.question)) {
      var _node3 = this.startNodeAt(startPos, startLoc);

      _node3.test = expr;
      _node3.consequent = this.parseMaybeAssign();
      this.expect(types.colon);
      _node3.alternate = this.parseMaybeAssign(noIn);
      return this.finishNode(_node3, "ConditionalExpression");
    }

    return expr;
  }; // Start the precedence parser.


  ExpressionParser.prototype.parseExprOps = function parseExprOps(noIn, refShorthandDefaultPos) {
    var startPos = this.state.start;
    var startLoc = this.state.startLoc;
    var potentialArrowAt = this.state.potentialArrowAt;
    var expr = this.parseMaybeUnary(refShorthandDefaultPos);

    if (expr.type === "ArrowFunctionExpression" && expr.start === potentialArrowAt) {
      return expr;
    }

    if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
      return expr;
    }

    return this.parseExprOp(expr, startPos, startLoc, -1, noIn);
  }; // Parse binary operators with the operator precedence parsing
  // algorithm. `left` is the left-hand side of the operator.
  // `minPrec` provides context that allows the function to stop and
  // defer further parser to one of its callers when it encounters an
  // operator that has a lower precedence than the set it is parsing.


  ExpressionParser.prototype.parseExprOp = function parseExprOp(left, leftStartPos, leftStartLoc, minPrec, noIn) {
    var prec = this.state.type.binop;

    if (prec != null && (!noIn || !this.match(types._in))) {
      if (prec > minPrec) {
        var _node4 = this.startNodeAt(leftStartPos, leftStartLoc);

        _node4.left = left;
        _node4.operator = this.state.value;

        if (_node4.operator === "**" && left.type === "UnaryExpression" && left.extra && !left.extra.parenthesizedArgument && !left.extra.parenthesized) {
          this.raise(left.argument.start, "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.");
        }

        var op = this.state.type;
        this.next();
        var startPos = this.state.start;
        var startLoc = this.state.startLoc;

        if (_node4.operator === "|>") {
          this.expectPlugin("pipelineOperator"); // Support syntax such as 10 |> x => x + 1

          this.state.potentialArrowAt = startPos;
        }

        _node4.right = this.parseExprOp(this.parseMaybeUnary(), startPos, startLoc, op.rightAssociative ? prec - 1 : prec, noIn);
        this.finishNode(_node4, op === types.logicalOR || op === types.logicalAND ? "LogicalExpression" : "BinaryExpression");
        return this.parseExprOp(_node4, leftStartPos, leftStartLoc, minPrec, noIn);
      }
    }

    return left;
  }; // Parse unary operators, both prefix and postfix.


  ExpressionParser.prototype.parseMaybeUnary = function parseMaybeUnary(refShorthandDefaultPos) {
    if (this.state.type.prefix) {
      var _node5 = this.startNode();

      var update = this.match(types.incDec);
      _node5.operator = this.state.value;
      _node5.prefix = true;

      if (_node5.operator === "throw") {
        this.expectPlugin("throwExpressions");
      }

      this.next();
      var argType = this.state.type;
      _node5.argument = this.parseMaybeUnary();
      this.addExtra(_node5, "parenthesizedArgument", argType === types.parenL && (!_node5.argument.extra || !_node5.argument.extra.parenthesized));

      if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
        this.unexpected(refShorthandDefaultPos.start);
      }

      if (update) {
        this.checkLVal(_node5.argument, undefined, undefined, "prefix operation");
      } else if (this.state.strict && _node5.operator === "delete") {
        var arg = _node5.argument;

        if (arg.type === "Identifier") {
          this.raise(_node5.start, "Deleting local variable in strict mode");
        } else if (arg.type === "MemberExpression" && arg.property.type === "PrivateName") {
          this.raise(_node5.start, "Deleting a private field is not allowed");
        }
      }

      return this.finishNode(_node5, update ? "UpdateExpression" : "UnaryExpression");
    }

    var startPos = this.state.start;
    var startLoc = this.state.startLoc;
    var expr = this.parseExprSubscripts(refShorthandDefaultPos);
    if (refShorthandDefaultPos && refShorthandDefaultPos.start) return expr;

    while (this.state.type.postfix && !this.canInsertSemicolon()) {
      var _node6 = this.startNodeAt(startPos, startLoc);

      _node6.operator = this.state.value;
      _node6.prefix = false;
      _node6.argument = expr;
      this.checkLVal(expr, undefined, undefined, "postfix operation");
      this.next();
      expr = this.finishNode(_node6, "UpdateExpression");
    }

    return expr;
  }; // Parse call, dot, and `[]`-subscript expressions.


  ExpressionParser.prototype.parseExprSubscripts = function parseExprSubscripts(refShorthandDefaultPos) {
    var startPos = this.state.start;
    var startLoc = this.state.startLoc;
    var potentialArrowAt = this.state.potentialArrowAt;
    var expr = this.parseExprAtom(refShorthandDefaultPos);

    if (expr.type === "ArrowFunctionExpression" && expr.start === potentialArrowAt) {
      return expr;
    }

    if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
      return expr;
    }

    return this.parseSubscripts(expr, startPos, startLoc);
  };

  ExpressionParser.prototype.parseSubscripts = function parseSubscripts(base, startPos, startLoc, noCalls) {
    var state = {
      stop: false
    };

    do {
      base = this.parseSubscript(base, startPos, startLoc, noCalls, state);
    } while (!state.stop);

    return base;
  };
  /** @param state Set 'state.stop = true' to indicate that we should stop parsing subscripts. */


  ExpressionParser.prototype.parseSubscript = function parseSubscript(base, startPos, startLoc, noCalls, state) {
    if (!noCalls && this.eat(types.doubleColon)) {
      var _node7 = this.startNodeAt(startPos, startLoc);

      _node7.object = base;
      _node7.callee = this.parseNoCallExpr();
      state.stop = true;
      return this.parseSubscripts(this.finishNode(_node7, "BindExpression"), startPos, startLoc, noCalls);
    } else if (this.match(types.questionDot)) {
      this.expectPlugin("optionalChaining");

      if (noCalls && this.lookahead().type == types.parenL) {
        state.stop = true;
        return base;
      }

      this.next();

      var _node8 = this.startNodeAt(startPos, startLoc);

      if (this.eat(types.bracketL)) {
        _node8.object = base;
        _node8.property = this.parseExpression();
        _node8.computed = true;
        _node8.optional = true;
        this.expect(types.bracketR);
        return this.finishNode(_node8, "MemberExpression");
      } else if (this.eat(types.parenL)) {
        var possibleAsync = this.atPossibleAsync(base);
        _node8.callee = base;
        _node8.arguments = this.parseCallExpressionArguments(types.parenR, possibleAsync);
        _node8.optional = true;
        return this.finishNode(_node8, "CallExpression");
      } else {
        _node8.object = base;
        _node8.property = this.parseIdentifier(true);
        _node8.computed = false;
        _node8.optional = true;
        return this.finishNode(_node8, "MemberExpression");
      }
    } else if (this.eat(types.dot)) {
      var _node9 = this.startNodeAt(startPos, startLoc);

      _node9.object = base;
      _node9.property = this.parseMaybePrivateName();
      _node9.computed = false;
      return this.finishNode(_node9, "MemberExpression");
    } else if (this.eat(types.bracketL)) {
      var _node10 = this.startNodeAt(startPos, startLoc);

      _node10.object = base;
      _node10.property = this.parseExpression();
      _node10.computed = true;
      this.expect(types.bracketR);
      return this.finishNode(_node10, "MemberExpression");
    } else if (!noCalls && this.match(types.parenL)) {
      var _possibleAsync = this.atPossibleAsync(base);

      this.next();

      var _node11 = this.startNodeAt(startPos, startLoc);

      _node11.callee = base; // TODO: Clean up/merge this into `this.state` or a class like acorn's
      // `DestructuringErrors` alongside refShorthandDefaultPos and
      // refNeedsArrowPos.

      var refTrailingCommaPos = {
        start: -1
      };
      _node11.arguments = this.parseCallExpressionArguments(types.parenR, _possibleAsync, refTrailingCommaPos);
      this.finishCallExpression(_node11);

      if (_possibleAsync && this.shouldParseAsyncArrow()) {
        state.stop = true;

        if (refTrailingCommaPos.start > -1) {
          this.raise(refTrailingCommaPos.start, "A trailing comma is not permitted after the rest element");
        }

        return this.parseAsyncArrowFromCallExpression(this.startNodeAt(startPos, startLoc), _node11);
      } else {
        this.toReferencedList(_node11.arguments);
      }

      return _node11;
    } else if (this.match(types.backQuote)) {
      var _node12 = this.startNodeAt(startPos, startLoc);

      _node12.tag = base;
      _node12.quasi = this.parseTemplate(true);
      return this.finishNode(_node12, "TaggedTemplateExpression");
    } else {
      state.stop = true;
      return base;
    }
  };

  ExpressionParser.prototype.atPossibleAsync = function atPossibleAsync(base) {
    return this.state.potentialArrowAt === base.start && base.type === "Identifier" && base.name === "async" && !this.canInsertSemicolon();
  };

  ExpressionParser.prototype.finishCallExpression = function finishCallExpression(node) {
    if (node.callee.type === "Import") {
      if (node.arguments.length !== 1) {
        this.raise(node.start, "import() requires exactly one argument");
      }

      var importArg = node.arguments[0];

      if (importArg && importArg.type === "SpreadElement") {
        this.raise(importArg.start, "... is not allowed in import()");
      }
    }

    return this.finishNode(node, "CallExpression");
  };

  ExpressionParser.prototype.parseCallExpressionArguments = function parseCallExpressionArguments(close, possibleAsyncArrow, refTrailingCommaPos) {
    var elts = [];
    var innerParenStart = void 0;
    var first = true;

    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);
        if (this.eat(close)) break;
      } // we need to make sure that if this is an async arrow functions, that we don't allow inner parens inside the params


      if (this.match(types.parenL) && !innerParenStart) {
        innerParenStart = this.state.start;
      }

      elts.push(this.parseExprListItem(false, possibleAsyncArrow ? {
        start: 0
      } : undefined, possibleAsyncArrow ? {
        start: 0
      } : undefined, possibleAsyncArrow ? refTrailingCommaPos : undefined));
    } // we found an async arrow function so let's not allow any inner parens


    if (possibleAsyncArrow && innerParenStart && this.shouldParseAsyncArrow()) {
      this.unexpected();
    }

    return elts;
  };

  ExpressionParser.prototype.shouldParseAsyncArrow = function shouldParseAsyncArrow() {
    return this.match(types.arrow);
  };

  ExpressionParser.prototype.parseAsyncArrowFromCallExpression = function parseAsyncArrowFromCallExpression(node, call) {
    this.expect(types.arrow);
    return this.parseArrowExpression(node, call.arguments, true);
  }; // Parse a no-call expression (like argument of `new` or `::` operators).


  ExpressionParser.prototype.parseNoCallExpr = function parseNoCallExpr() {
    var startPos = this.state.start;
    var startLoc = this.state.startLoc;
    return this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
  }; // Parse an atomic expression â€” either a single token that is an
  // expression, an expression started by a keyword like `function` or
  // `new`, or an expression wrapped in punctuation like `()`, `[]`,
  // or `{}`.


  ExpressionParser.prototype.parseExprAtom = function parseExprAtom(refShorthandDefaultPos) {
    var canBeArrow = this.state.potentialArrowAt === this.state.start;
    var node = void 0;

    switch (this.state.type) {
      case types._super:
        if (!this.state.inMethod && !this.state.inClassProperty && !this.options.allowSuperOutsideMethod) {
          this.raise(this.state.start, "'super' outside of function or class");
        }

        node = this.startNode();
        this.next();

        if (!this.match(types.parenL) && !this.match(types.bracketL) && !this.match(types.dot)) {
          this.unexpected();
        }

        if (this.match(types.parenL) && this.state.inMethod !== "constructor" && !this.options.allowSuperOutsideMethod) {
          this.raise(node.start, "super() is only valid inside a class constructor. Make sure the method name is spelled exactly as 'constructor'.");
        }

        return this.finishNode(node, "Super");

      case types._import:
        if (this.lookahead().type === types.dot) {
          return this.parseImportMetaProperty();
        }

        this.expectPlugin("dynamicImport");
        node = this.startNode();
        this.next();

        if (!this.match(types.parenL)) {
          this.unexpected(null, types.parenL);
        }

        return this.finishNode(node, "Import");

      case types._this:
        node = this.startNode();
        this.next();
        return this.finishNode(node, "ThisExpression");

      case types._yield:
        if (this.state.inGenerator) this.unexpected();

      case types.name:
        {
          node = this.startNode();
          var allowAwait = this.state.value === "await" && this.state.inAsync;
          var allowYield = this.shouldAllowYieldIdentifier();
          var id = this.parseIdentifier(allowAwait || allowYield);

          if (id.name === "await") {
            if (this.state.inAsync || this.inModule) {
              return this.parseAwait(node);
            }
          } else if (id.name === "async" && this.match(types._function) && !this.canInsertSemicolon()) {
            this.next();
            return this.parseFunction(node, false, false, true);
          } else if (canBeArrow && id.name === "async" && this.match(types.name)) {
            var params = [this.parseIdentifier()];
            this.expect(types.arrow); // let foo = bar => {};

            return this.parseArrowExpression(node, params, true);
          }

          if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
            return this.parseArrowExpression(node, [id]);
          }

          return id;
        }

      case types._do:
        {
          this.expectPlugin("doExpressions");

          var _node13 = this.startNode();

          this.next();
          var oldInFunction = this.state.inFunction;
          var oldLabels = this.state.labels;
          this.state.labels = [];
          this.state.inFunction = false;
          _node13.body = this.parseBlock(false);
          this.state.inFunction = oldInFunction;
          this.state.labels = oldLabels;
          return this.finishNode(_node13, "DoExpression");
        }

      case types.regexp:
        {
          var value = this.state.value;
          node = this.parseLiteral(value.value, "RegExpLiteral");
          node.pattern = value.pattern;
          node.flags = value.flags;
          return node;
        }

      case types.num:
        return this.parseLiteral(this.state.value, "NumericLiteral");

      case types.bigint:
        return this.parseLiteral(this.state.value, "BigIntLiteral");

      case types.string:
        return this.parseLiteral(this.state.value, "StringLiteral");

      case types._null:
        node = this.startNode();
        this.next();
        return this.finishNode(node, "NullLiteral");

      case types._true:
      case types._false:
        return this.parseBooleanLiteral();

      case types.parenL:
        return this.parseParenAndDistinguishExpression(canBeArrow);

      case types.bracketL:
        node = this.startNode();
        this.next();
        node.elements = this.parseExprList(types.bracketR, true, refShorthandDefaultPos);
        this.toReferencedList(node.elements);
        return this.finishNode(node, "ArrayExpression");

      case types.braceL:
        return this.parseObj(false, refShorthandDefaultPos);

      case types._function:
        return this.parseFunctionExpression();

      case types.at:
        this.parseDecorators();

      case types._class:
        node = this.startNode();
        this.takeDecorators(node);
        return this.parseClass(node, false);

      case types._new:
        return this.parseNew();

      case types.backQuote:
        return this.parseTemplate(false);

      case types.doubleColon:
        {
          node = this.startNode();
          this.next();
          node.object = null;
          var callee = node.callee = this.parseNoCallExpr();

          if (callee.type === "MemberExpression") {
            return this.finishNode(node, "BindExpression");
          } else {
            throw this.raise(callee.start, "Binding should be performed on object property.");
          }
        }

      default:
        throw this.unexpected();
    }
  };

  ExpressionParser.prototype.parseBooleanLiteral = function parseBooleanLiteral() {
    var node = this.startNode();
    node.value = this.match(types._true);
    this.next();
    return this.finishNode(node, "BooleanLiteral");
  };

  ExpressionParser.prototype.parseMaybePrivateName = function parseMaybePrivateName() {
    var isPrivate = this.match(types.hash);

    if (isPrivate) {
      this.expectOnePlugin(["classPrivateProperties", "classPrivateMethods"]);

      var _node14 = this.startNode();

      this.next();
      _node14.id = this.parseIdentifier(true);
      return this.finishNode(_node14, "PrivateName");
    } else {
      return this.parseIdentifier(true);
    }
  };

  ExpressionParser.prototype.parseFunctionExpression = function parseFunctionExpression() {
    var node = this.startNode();
    var meta = this.parseIdentifier(true);

    if (this.state.inGenerator && this.eat(types.dot)) {
      return this.parseMetaProperty(node, meta, "sent");
    }

    return this.parseFunction(node, false);
  };

  ExpressionParser.prototype.parseMetaProperty = function parseMetaProperty(node, meta, propertyName) {
    node.meta = meta;

    if (meta.name === "function" && propertyName === "sent") {
      if (this.isContextual(propertyName)) {
        this.expectPlugin("functionSent");
      } else if (!this.hasPlugin("functionSent")) {
        // They didn't actually say `function.sent`, just `function.`, so a simple error would be less confusing.
        this.unexpected();
      }
    }

    node.property = this.parseIdentifier(true);

    if (node.property.name !== propertyName) {
      this.raise(node.property.start, "The only valid meta property for ".concat(meta.name, " is ").concat(meta.name, ".").concat(propertyName));
    }

    return this.finishNode(node, "MetaProperty");
  };

  ExpressionParser.prototype.parseImportMetaProperty = function parseImportMetaProperty() {
    var node = this.startNode();
    var id = this.parseIdentifier(true);
    this.expect(types.dot);

    if (id.name === "import") {
      if (this.isContextual("meta")) {
        this.expectPlugin("importMeta");
      } else if (!this.hasPlugin("importMeta")) {
        this.raise(id.start, "Dynamic imports require a parameter: import('a.js').then");
      }
    }

    if (!this.inModule) {
      this.raise(id.start, "import.meta may appear only with 'sourceType: \"module\"'");
    }

    return this.parseMetaProperty(node, id, "meta");
  };

  ExpressionParser.prototype.parseLiteral = function parseLiteral(value, type, startPos, startLoc) {
    startPos = startPos || this.state.start;
    startLoc = startLoc || this.state.startLoc;
    var node = this.startNodeAt(startPos, startLoc);
    this.addExtra(node, "rawValue", value);
    this.addExtra(node, "raw", this.input.slice(startPos, this.state.end));
    node.value = value;
    this.next();
    return this.finishNode(node, type);
  };

  ExpressionParser.prototype.parseParenExpression = function parseParenExpression() {
    this.expect(types.parenL);
    var val = this.parseExpression();
    this.expect(types.parenR);
    return val;
  };

  ExpressionParser.prototype.parseParenAndDistinguishExpression = function parseParenAndDistinguishExpression(canBeArrow) {
    var startPos = this.state.start;
    var startLoc = this.state.startLoc;
    var val = void 0;
    this.expect(types.parenL);
    var innerStartPos = this.state.start;
    var innerStartLoc = this.state.startLoc;
    var exprList = [];
    var refShorthandDefaultPos = {
      start: 0
    };
    var refNeedsArrowPos = {
      start: 0
    };
    var first = true;
    var spreadStart = void 0;
    var optionalCommaStart = void 0;

    while (!this.match(types.parenR)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma, refNeedsArrowPos.start || null);

        if (this.match(types.parenR)) {
          optionalCommaStart = this.state.start;
          break;
        }
      }

      if (this.match(types.ellipsis)) {
        var spreadNodeStartPos = this.state.start;
        var spreadNodeStartLoc = this.state.startLoc;
        spreadStart = this.state.start;
        exprList.push(this.parseParenItem(this.parseRest(), spreadNodeStartPos, spreadNodeStartLoc));

        if (this.match(types.comma) && this.lookahead().type === types.parenR) {
          this.raise(this.state.start, "A trailing comma is not permitted after the rest element");
        }

        break;
      } else {
        exprList.push(this.parseMaybeAssign(false, refShorthandDefaultPos, this.parseParenItem, refNeedsArrowPos));
      }
    }

    var innerEndPos = this.state.start;
    var innerEndLoc = this.state.startLoc;
    this.expect(types.parenR);
    var arrowNode = this.startNodeAt(startPos, startLoc);

    if (canBeArrow && this.shouldParseArrow() && (arrowNode = this.parseArrow(arrowNode))) {
      for (var _i = 0; _i < exprList.length; _i++) {
        var param = exprList[_i];
        if (param.extra && param.extra.parenthesized) this.unexpected(param.extra.parenStart);
      }

      return this.parseArrowExpression(arrowNode, exprList);
    }

    if (!exprList.length) {
      this.unexpected(this.state.lastTokStart);
    }

    if (optionalCommaStart) this.unexpected(optionalCommaStart);
    if (spreadStart) this.unexpected(spreadStart);
    if (refShorthandDefaultPos.start) this.unexpected(refShorthandDefaultPos.start);
    if (refNeedsArrowPos.start) this.unexpected(refNeedsArrowPos.start);

    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.toReferencedList(val.expressions);
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }

    this.addExtra(val, "parenthesized", true);
    this.addExtra(val, "parenStart", startPos);
    return val;
  };

  ExpressionParser.prototype.shouldParseArrow = function shouldParseArrow() {
    return !this.canInsertSemicolon();
  };

  ExpressionParser.prototype.parseArrow = function parseArrow(node) {
    if (this.eat(types.arrow)) {
      return node;
    }
  };

  ExpressionParser.prototype.parseParenItem = function parseParenItem(node, startPos, // eslint-disable-next-line no-unused-vars
  startLoc) {
    return node;
  }; // New's precedence is slightly tricky. It must allow its argument to
  // be a `[]` or dot subscript expression, but not a call â€” at least,
  // not without wrapping it in parentheses. Thus, it uses the noCalls
  // argument to parseSubscripts to prevent it from consuming the
  // argument list.


  ExpressionParser.prototype.parseNew = function parseNew() {
    var node = this.startNode();
    var meta = this.parseIdentifier(true);

    if (this.eat(types.dot)) {
      var metaProp = this.parseMetaProperty(node, meta, "target");

      if (!this.state.inFunction) {
        this.raise(metaProp.property.start, "new.target can only be used in functions");
      }

      return metaProp;
    }

    node.callee = this.parseNoCallExpr();
    if (this.eat(types.questionDot)) node.optional = true;
    this.parseNewArguments(node);
    return this.finishNode(node, "NewExpression");
  };

  ExpressionParser.prototype.parseNewArguments = function parseNewArguments(node) {
    if (this.eat(types.parenL)) {
      var args = this.parseExprList(types.parenR);
      this.toReferencedList(args); // $FlowFixMe (parseExprList should be all non-null in this case)

      node.arguments = args;
    } else {
      node.arguments = [];
    }
  }; // Parse template expression.


  ExpressionParser.prototype.parseTemplateElement = function parseTemplateElement(isTagged) {
    var elem = this.startNode();

    if (this.state.value === null) {
      if (!isTagged) {
        // TODO: fix this
        this.raise(this.state.invalidTemplateEscapePosition || 0, "Invalid escape sequence in template");
      } else {
        this.state.invalidTemplateEscapePosition = null;
      }
    }

    elem.value = {
      raw: this.input.slice(this.state.start, this.state.end).replace(/\r\n?/g, "\n"),
      cooked: this.state.value
    };
    this.next();
    elem.tail = this.match(types.backQuote);
    return this.finishNode(elem, "TemplateElement");
  };

  ExpressionParser.prototype.parseTemplate = function parseTemplate(isTagged) {
    var node = this.startNode();
    this.next();
    node.expressions = [];
    var curElt = this.parseTemplateElement(isTagged);
    node.quasis = [curElt];

    while (!curElt.tail) {
      this.expect(types.dollarBraceL);
      node.expressions.push(this.parseExpression());
      this.expect(types.braceR);
      node.quasis.push(curElt = this.parseTemplateElement(isTagged));
    }

    this.next();
    return this.finishNode(node, "TemplateLiteral");
  }; // Parse an object literal or binding pattern.


  ExpressionParser.prototype.parseObj = function parseObj(isPattern, refShorthandDefaultPos) {
    var decorators = [];
    var propHash = Object.create(null);
    var first = true;
    var node = this.startNode();
    node.properties = [];
    this.next();
    var firstRestLocation = null;

    while (!this.eat(types.braceR)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);
        if (this.eat(types.braceR)) break;
      }

      if (this.match(types.at)) {
        if (this.hasPlugin("decorators2")) {
          this.raise(this.state.start, "Stage 2 decorators disallow object literal property decorators");
        } else {
          // we needn't check if decorators (stage 0) plugin is enabled since it's checked by
          // the call to this.parseDecorator
          while (this.match(types.at)) {
            decorators.push(this.parseDecorator());
          }
        }
      }

      var prop = this.startNode(),
          isGenerator = false,
          _isAsync = false,
          startPos = void 0,
          startLoc = void 0;

      if (decorators.length) {
        prop.decorators = decorators;
        decorators = [];
      }

      if (this.match(types.ellipsis)) {
        this.expectPlugin("objectRestSpread");
        prop = this.parseSpread(isPattern ? {
          start: 0
        } : undefined);

        if (isPattern) {
          this.toAssignable(prop, true, "object pattern");
        }

        node.properties.push(prop);

        if (isPattern) {
          var position = this.state.start;

          if (firstRestLocation !== null) {
            this.unexpected(firstRestLocation, "Cannot have multiple rest elements when destructuring");
          } else if (this.eat(types.braceR)) {
            break;
          } else if (this.match(types.comma) && this.lookahead().type === types.braceR) {
            this.unexpected(position, "A trailing comma is not permitted after the rest element");
          } else {
            firstRestLocation = position;
            continue;
          }
        } else {
          continue;
        }
      }

      prop.method = false;

      if (isPattern || refShorthandDefaultPos) {
        startPos = this.state.start;
        startLoc = this.state.startLoc;
      }

      if (!isPattern) {
        isGenerator = this.eat(types.star);
      }

      if (!isPattern && this.isContextual("async")) {
        if (isGenerator) this.unexpected();
        var asyncId = this.parseIdentifier();

        if (this.match(types.colon) || this.match(types.parenL) || this.match(types.braceR) || this.match(types.eq) || this.match(types.comma)) {
          prop.key = asyncId;
          prop.computed = false;
        } else {
          _isAsync = true;

          if (this.match(types.star)) {
            this.expectPlugin("asyncGenerators");
            this.next();
            isGenerator = true;
          }

          this.parsePropertyName(prop);
        }
      } else {
        this.parsePropertyName(prop);
      }

      this.parseObjPropValue(prop, startPos, startLoc, isGenerator, _isAsync, isPattern, refShorthandDefaultPos);
      this.checkPropClash(prop, propHash);

      if (prop.shorthand) {
        this.addExtra(prop, "shorthand", true);
      }

      node.properties.push(prop);
    }

    if (firstRestLocation !== null) {
      this.unexpected(firstRestLocation, "The rest element has to be the last element when destructuring");
    }

    if (decorators.length) {
      this.raise(this.state.start, "You have trailing decorators with no property");
    }

    return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
  };

  ExpressionParser.prototype.isGetterOrSetterMethod = function isGetterOrSetterMethod(prop, isPattern) {
    return !isPattern && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.match(types.string) || // get "string"() {}
    this.match(types.num) || // get 1() {}
    this.match(types.bracketL) || // get ["string"]() {}
    this.match(types.name) || // get foo() {}
    !!this.state.type.keyword) // get debugger() {}
    ;
  }; // get methods aren't allowed to have any parameters
  // set methods must have exactly 1 parameter


  ExpressionParser.prototype.checkGetterSetterParamCount = function checkGetterSetterParamCount(method) {
    var paramCount = method.kind === "get" ? 0 : 1;

    if (method.params.length !== paramCount) {
      var start = method.start;

      if (method.kind === "get") {
        this.raise(start, "getter should have no params");
      } else {
        this.raise(start, "setter should have exactly one param");
      }
    }
  };

  ExpressionParser.prototype.parseObjectMethod = function parseObjectMethod(prop, isGenerator, isAsync, isPattern) {
    if (isAsync || isGenerator || this.match(types.parenL)) {
      if (isPattern) this.unexpected();
      prop.kind = "method";
      prop.method = true;
      return this.parseMethod(prop, isGenerator, isAsync,
      /* isConstructor */
      false, "ObjectMethod");
    }

    if (this.isGetterOrSetterMethod(prop, isPattern)) {
      if (isGenerator || isAsync) this.unexpected();
      prop.kind = prop.key.name;
      this.parsePropertyName(prop);
      this.parseMethod(prop,
      /* isGenerator */
      false,
      /* isAsync */
      false,
      /* isConstructor */
      false, "ObjectMethod");
      this.checkGetterSetterParamCount(prop);
      return prop;
    }
  };

  ExpressionParser.prototype.parseObjectProperty = function parseObjectProperty(prop, startPos, startLoc, isPattern, refShorthandDefaultPos) {
    prop.shorthand = false;

    if (this.eat(types.colon)) {
      prop.value = isPattern ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssign(false, refShorthandDefaultPos);
      return this.finishNode(prop, "ObjectProperty");
    }

    if (!prop.computed && prop.key.type === "Identifier") {
      this.checkReservedWord(prop.key.name, prop.key.start, true, true);

      if (isPattern) {
        prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
      } else if (this.match(types.eq) && refShorthandDefaultPos) {
        if (!refShorthandDefaultPos.start) {
          refShorthandDefaultPos.start = this.state.start;
        }

        prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
      } else {
        prop.value = prop.key.__clone();
      }

      prop.shorthand = true;
      return this.finishNode(prop, "ObjectProperty");
    }
  };

  ExpressionParser.prototype.parseObjPropValue = function parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, refShorthandDefaultPos) {
    var node = this.parseObjectMethod(prop, isGenerator, isAsync, isPattern) || this.parseObjectProperty(prop, startPos, startLoc, isPattern, refShorthandDefaultPos);
    if (!node) this.unexpected(); // $FlowFixMe

    return node;
  };

  ExpressionParser.prototype.parsePropertyName = function parsePropertyName(prop) {
    if (this.eat(types.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(types.bracketR);
    } else {
      var oldInPropertyName = this.state.inPropertyName;
      this.state.inPropertyName = true; // We check if it's valid for it to be a private name when we push it.

      prop.key = this.match(types.num) || this.match(types.string) ? this.parseExprAtom() : this.parseMaybePrivateName();

      if (prop.key.type !== "PrivateName") {
        // ClassPrivateProperty is never computed, so we don't assign in that case.
        prop.computed = false;
      }

      this.state.inPropertyName = oldInPropertyName;
    }

    return prop.key;
  }; // Initialize empty function node.


  ExpressionParser.prototype.initFunction = function initFunction(node, isAsync) {
    node.id = null;
    node.generator = false;
    node.expression = false;
    node.async = !!isAsync;
  }; // Parse object or class method.


  ExpressionParser.prototype.parseMethod = function parseMethod(node, isGenerator, isAsync, isConstructor, type) {
    var oldInMethod = this.state.inMethod;
    this.state.inMethod = node.kind || true;
    this.initFunction(node, isAsync);
    this.expect(types.parenL);
    var allowModifiers = isConstructor; // For TypeScript parameter properties

    node.params = this.parseBindingList(types.parenR,
    /* allowEmpty */
    false, allowModifiers);
    node.generator = !!isGenerator;
    this.parseFunctionBodyAndFinish(node, type);
    this.state.inMethod = oldInMethod;
    return node;
  }; // Parse arrow function expression with given parameters.


  ExpressionParser.prototype.parseArrowExpression = function parseArrowExpression(node, params, isAsync) {
    this.initFunction(node, isAsync);
    this.setArrowFunctionParameters(node, params);
    this.parseFunctionBody(node, true);
    return this.finishNode(node, "ArrowFunctionExpression");
  };

  ExpressionParser.prototype.setArrowFunctionParameters = function setArrowFunctionParameters(node, params) {
    node.params = this.toAssignableList(params, true, "arrow function parameters");
  };

  ExpressionParser.prototype.isStrictBody = function isStrictBody(node, isExpression) {
    if (!isExpression && node.body.directives.length) {
      for (var _iterator = node.body.directives, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i2 >= _iterator.length) break;
          _ref = _iterator[_i2++];
        } else {
          _i2 = _iterator.next();
          if (_i2.done) break;
          _ref = _i2.value;
        }

        var _directive = _ref;

        if (_directive.value.value === "use strict") {
          return true;
        }
      }
    }

    return false;
  };

  ExpressionParser.prototype.parseFunctionBodyAndFinish = function parseFunctionBodyAndFinish(node, type, allowExpressionBody) {
    // $FlowIgnore (node is not bodiless if we get here)
    this.parseFunctionBody(node, allowExpressionBody);
    this.finishNode(node, type);
  }; // Parse function body and check parameters.


  ExpressionParser.prototype.parseFunctionBody = function parseFunctionBody(node, allowExpression) {
    var isExpression = allowExpression && !this.match(types.braceL);
    var oldInAsync = this.state.inAsync;
    this.state.inAsync = node.async;

    if (isExpression) {
      node.body = this.parseMaybeAssign();
      node.expression = true;
    } else {
      // Start a new scope with regard to labels and the `inFunction`
      // flag (restore them to their old value afterwards).
      var oldInFunc = this.state.inFunction;
      var oldInGen = this.state.inGenerator;
      var oldLabels = this.state.labels;
      this.state.inFunction = true;
      this.state.inGenerator = node.generator;
      this.state.labels = [];
      node.body = this.parseBlock(true);
      node.expression = false;
      this.state.inFunction = oldInFunc;
      this.state.inGenerator = oldInGen;
      this.state.labels = oldLabels;
    }

    this.state.inAsync = oldInAsync;
    this.checkFunctionNameAndParams(node, allowExpression);
  };

  ExpressionParser.prototype.checkFunctionNameAndParams = function checkFunctionNameAndParams(node, isArrowFunction) {
    // If this is a strict mode function, verify that argument names
    // are not repeated, and it does not try to bind the words `eval`
    // or `arguments`.
    var isStrict = this.isStrictBody(node, node.expression); // Also check for arrow functions

    var checkLVal = this.state.strict || isStrict || isArrowFunction;

    if (isStrict && node.id && node.id.type === "Identifier" && node.id.name === "yield") {
      this.raise(node.id.start, "Binding yield in strict mode");
    }

    if (checkLVal) {
      var nameHash = Object.create(null);
      var oldStrict = this.state.strict;
      if (isStrict) this.state.strict = true;

      if (node.id) {
        this.checkLVal(node.id, true, undefined, "function name");
      }

      for (var _iterator2 = node.params, _isArray2 = Array.isArray(_iterator2), _i3 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i3 >= _iterator2.length) break;
          _ref2 = _iterator2[_i3++];
        } else {
          _i3 = _iterator2.next();
          if (_i3.done) break;
          _ref2 = _i3.value;
        }

        var _param = _ref2;

        if (isStrict && _param.type !== "Identifier") {
          this.raise(_param.start, "Non-simple parameter in strict mode");
        }

        this.checkLVal(_param, true, nameHash, "function parameter list");
      }

      this.state.strict = oldStrict;
    }
  }; // Parses a comma-separated list of expressions, and returns them as
  // an array. `close` is the token type that ends the list, and
  // `allowEmpty` can be turned on to allow subsequent commas with
  // nothing in between them to be parsed as `null` (which is needed
  // for array literals).


  ExpressionParser.prototype.parseExprList = function parseExprList(close, allowEmpty, refShorthandDefaultPos) {
    var elts = [];
    var first = true;

    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);
        if (this.eat(close)) break;
      }

      elts.push(this.parseExprListItem(allowEmpty, refShorthandDefaultPos));
    }

    return elts;
  };

  ExpressionParser.prototype.parseExprListItem = function parseExprListItem(allowEmpty, refShorthandDefaultPos, refNeedsArrowPos, refTrailingCommaPos) {
    var elt = void 0;

    if (allowEmpty && this.match(types.comma)) {
      elt = null;
    } else if (this.match(types.ellipsis)) {
      elt = this.parseSpread(refShorthandDefaultPos);

      if (refTrailingCommaPos && this.match(types.comma)) {
        refTrailingCommaPos.start = this.state.start;
      }
    } else {
      elt = this.parseMaybeAssign(false, refShorthandDefaultPos, this.parseParenItem, refNeedsArrowPos);
    }

    return elt;
  }; // Parse the next token as an identifier. If `liberal` is true (used
  // when parsing properties), it will also convert keywords into
  // identifiers.


  ExpressionParser.prototype.parseIdentifier = function parseIdentifier(liberal) {
    var node = this.startNode();
    var name = this.parseIdentifierName(node.start, liberal);
    node.name = name;
    node.loc.identifierName = name;
    return this.finishNode(node, "Identifier");
  };

  ExpressionParser.prototype.parseIdentifierName = function parseIdentifierName(pos, liberal) {
    if (!liberal) {
      this.checkReservedWord(this.state.value, this.state.start, !!this.state.type.keyword, false);
    }

    var name = void 0;

    if (this.match(types.name)) {
      name = this.state.value;
    } else if (this.state.type.keyword) {
      name = this.state.type.keyword;
    } else {
      throw this.unexpected();
    }

    if (!liberal && name === "await" && this.state.inAsync) {
      this.raise(pos, "invalid use of await inside of an async function");
    }

    this.next();
    return name;
  };

  ExpressionParser.prototype.checkReservedWord = function checkReservedWord(word, startLoc, checkKeywords, isBinding) {
    if (this.isReservedWord(word) || checkKeywords && this.isKeyword(word)) {
      this.raise(startLoc, word + " is a reserved word");
    }

    if (this.state.strict && (reservedWords.strict(word) || isBinding && reservedWords.strictBind(word))) {
      this.raise(startLoc, word + " is a reserved word in strict mode");
    }
  }; // Parses await expression inside async function.


  ExpressionParser.prototype.parseAwait = function parseAwait(node) {
    // istanbul ignore next: this condition is checked at the call site so won't be hit here
    if (!this.state.inAsync) {
      this.unexpected();
    }

    if (this.match(types.star)) {
      this.raise(node.start, "await* has been removed from the async functions proposal. Use Promise.all() instead.");
    }

    node.argument = this.parseMaybeUnary();
    return this.finishNode(node, "AwaitExpression");
  }; // Parses yield expression inside generator.


  ExpressionParser.prototype.parseYield = function parseYield() {
    var node = this.startNode();
    this.next();

    if (this.match(types.semi) || this.canInsertSemicolon() || !this.match(types.star) && !this.state.type.startsExpr) {
      node.delegate = false;
      node.argument = null;
    } else {
      node.delegate = this.eat(types.star);
      node.argument = this.parseMaybeAssign();
    }

    return this.finishNode(node, "YieldExpression");
  };

  return ExpressionParser;
}(LValParser);
/* eslint max-len: 0 */


var empty = [];
var loopLabel = {
  kind: "loop"
};
var switchLabel = {
  kind: "switch"
};

var StatementParser = function (_ExpressionParser) {
  inheritsLoose(StatementParser, _ExpressionParser);

  function StatementParser() {
    return _ExpressionParser.apply(this, arguments) || this;
  } // ### Statement parsing
  // Parse a program. Initializes the parser, reads any number of
  // statements, and wraps them in a Program node.  Optionally takes a
  // `program` argument.  If present, the statements will be appended
  // to its body instead of creating a new node.


  StatementParser.prototype.parseTopLevel = function parseTopLevel(file, program) {
    program.sourceType = this.options.sourceType;
    this.parseBlockBody(program, true, true, types.eof);
    file.program = this.finishNode(program, "Program");
    file.comments = this.state.comments;
    if (this.options.tokens) file.tokens = this.state.tokens;
    return this.finishNode(file, "File");
  }; // TODO


  StatementParser.prototype.stmtToDirective = function stmtToDirective(stmt) {
    var expr = stmt.expression;
    var directiveLiteral = this.startNodeAt(expr.start, expr.loc.start);
    var directive = this.startNodeAt(stmt.start, stmt.loc.start);
    var raw = this.input.slice(expr.start, expr.end);
    var val = directiveLiteral.value = raw.slice(1, -1); // remove quotes

    this.addExtra(directiveLiteral, "raw", raw);
    this.addExtra(directiveLiteral, "rawValue", val);
    directive.value = this.finishNodeAt(directiveLiteral, "DirectiveLiteral", expr.end, expr.loc.end);
    return this.finishNodeAt(directive, "Directive", stmt.end, stmt.loc.end);
  }; // Parse a single statement.
  //
  // If expecting a statement and finding a slash operator, parse a
  // regular expression literal. This is to handle cases like
  // `if (foo) /blah/.exec(foo)`, where looking at the previous token
  // does not help.


  StatementParser.prototype.parseStatement = function parseStatement(declaration, topLevel) {
    if (this.match(types.at)) {
      this.parseDecorators(true);
    }

    return this.parseStatementContent(declaration, topLevel);
  };

  StatementParser.prototype.parseStatementContent = function parseStatementContent(declaration, topLevel) {
    var starttype = this.state.type;
    var node = this.startNode(); // Most types of statements are recognized by the keyword they
    // start with. Many are trivial to parse, some require a bit of
    // complexity.

    switch (starttype) {
      case types._break:
      case types._continue:
        // $FlowFixMe
        return this.parseBreakContinueStatement(node, starttype.keyword);

      case types._debugger:
        return this.parseDebuggerStatement(node);

      case types._do:
        return this.parseDoStatement(node);

      case types._for:
        return this.parseForStatement(node);

      case types._function:
        if (this.lookahead().type === types.dot) break;
        if (!declaration) this.unexpected();
        return this.parseFunctionStatement(node);

      case types._class:
        if (!declaration) this.unexpected();
        return this.parseClass(node, true);

      case types._if:
        return this.parseIfStatement(node);

      case types._return:
        return this.parseReturnStatement(node);

      case types._switch:
        return this.parseSwitchStatement(node);

      case types._throw:
        return this.parseThrowStatement(node);

      case types._try:
        return this.parseTryStatement(node);

      case types._let:
      case types._const:
        if (!declaration) this.unexpected();
      // NOTE: falls through to _var

      case types._var:
        return this.parseVarStatement(node, starttype);

      case types._while:
        return this.parseWhileStatement(node);

      case types._with:
        return this.parseWithStatement(node);

      case types.braceL:
        return this.parseBlock();

      case types.semi:
        return this.parseEmptyStatement(node);

      case types._export:
      case types._import:
        if (this.hasPlugin("dynamicImport") && this.lookahead().type === types.parenL || this.hasPlugin("importMeta") && this.lookahead().type === types.dot) break;

        if (!this.options.allowImportExportEverywhere) {
          if (!topLevel) {
            this.raise(this.state.start, "'import' and 'export' may only appear at the top level");
          }

          if (!this.inModule) {
            this.raise(this.state.start, "'import' and 'export' may appear only with 'sourceType: \"module\"'");
          }
        }

        this.next();

        if (starttype == types._import) {
          return this.parseImport(node);
        } else {
          return this.parseExport(node);
        }

      case types.name:
        if (this.state.value === "async") {
          // peek ahead and see if next token is a function
          var state = this.state.clone();
          this.next();

          if (this.match(types._function) && !this.canInsertSemicolon()) {
            this.expect(types._function);
            return this.parseFunction(node, true, false, true);
          } else {
            this.state = state;
          }
        }

    } // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.


    var maybeName = this.state.value;
    var expr = this.parseExpression();

    if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon)) {
      return this.parseLabeledStatement(node, maybeName, expr);
    } else {
      return this.parseExpressionStatement(node, expr);
    }
  };

  StatementParser.prototype.takeDecorators = function takeDecorators(node) {
    var decorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];

    if (decorators.length) {
      node.decorators = decorators;
      this.resetStartLocationFromNode(node, decorators[0]);
      this.state.decoratorStack[this.state.decoratorStack.length - 1] = [];
    }
  };

  StatementParser.prototype.parseDecorators = function parseDecorators(allowExport) {
    if (this.hasPlugin("decorators2")) {
      allowExport = false;
    }

    var currentContextDecorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];

    while (this.match(types.at)) {
      var decorator = this.parseDecorator();
      currentContextDecorators.push(decorator);
    }

    if (this.match(types._export)) {
      if (allowExport) {
        return;
      } else {
        this.raise(this.state.start, "Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead");
      }
    }

    if (!this.match(types._class)) {
      this.raise(this.state.start, "Leading decorators must be attached to a class declaration");
    }
  };

  StatementParser.prototype.parseDecorator = function parseDecorator() {
    this.expectOnePlugin(["decorators", "decorators2"]);
    var node = this.startNode();
    this.next();

    if (this.hasPlugin("decorators2")) {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var expr = this.parseIdentifier(false);

      while (this.eat(types.dot)) {
        var _node = this.startNodeAt(startPos, startLoc);

        _node.object = expr;
        _node.property = this.parseIdentifier(true);
        _node.computed = false;
        expr = this.finishNode(_node, "MemberExpression");
      }

      if (this.eat(types.parenL)) {
        var _node2 = this.startNodeAt(startPos, startLoc);

        _node2.callee = expr; // Every time a decorator class expression is evaluated, a new empty array is pushed onto the stack
        // So that the decorators of any nested class expressions will be dealt with separately

        this.state.decoratorStack.push([]);
        _node2.arguments = this.parseCallExpressionArguments(types.parenR, false);
        this.state.decoratorStack.pop();
        expr = this.finishNode(_node2, "CallExpression");
        this.toReferencedList(expr.arguments);
      }

      node.expression = expr;
    } else {
      node.expression = this.parseMaybeAssign();
    }

    return this.finishNode(node, "Decorator");
  };

  StatementParser.prototype.parseBreakContinueStatement = function parseBreakContinueStatement(node, keyword) {
    var isBreak = keyword === "break";
    this.next();

    if (this.isLineTerminator()) {
      node.label = null;
    } else if (!this.match(types.name)) {
      this.unexpected();
    } else {
      node.label = this.parseIdentifier();
      this.semicolon();
    } // Verify that there is an actual destination to break or
    // continue to.


    var i = void 0;

    for (i = 0; i < this.state.labels.length; ++i) {
      var lab = this.state.labels[i];

      if (node.label == null || lab.name === node.label.name) {
        if (lab.kind != null && (isBreak || lab.kind === "loop")) break;
        if (node.label && isBreak) break;
      }
    }

    if (i === this.state.labels.length) this.raise(node.start, "Unsyntactic " + keyword);
    return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
  };

  StatementParser.prototype.parseDebuggerStatement = function parseDebuggerStatement(node) {
    this.next();
    this.semicolon();
    return this.finishNode(node, "DebuggerStatement");
  };

  StatementParser.prototype.parseDoStatement = function parseDoStatement(node) {
    this.next();
    this.state.labels.push(loopLabel);
    node.body = this.parseStatement(false);
    this.state.labels.pop();
    this.expect(types._while);
    node.test = this.parseParenExpression();
    this.eat(types.semi);
    return this.finishNode(node, "DoWhileStatement");
  }; // Disambiguating between a `for` and a `for`/`in` or `for`/`of`
  // loop is non-trivial. Basically, we have to parse the init `var`
  // statement or expression, disallowing the `in` operator (see
  // the second parameter to `parseExpression`), and then check
  // whether the next token is `in` or `of`. When there is no init
  // part (semicolon immediately after the opening parenthesis), it
  // is a regular `for` loop.


  StatementParser.prototype.parseForStatement = function parseForStatement(node) {
    this.next();
    this.state.labels.push(loopLabel);
    var forAwait = false;

    if (this.state.inAsync && this.isContextual("await")) {
      this.expectPlugin("asyncGenerators");
      forAwait = true;
      this.next();
    }

    this.expect(types.parenL);

    if (this.match(types.semi)) {
      if (forAwait) {
        this.unexpected();
      }

      return this.parseFor(node, null);
    }

    if (this.match(types._var) || this.match(types._let) || this.match(types._const)) {
      var _init = this.startNode();

      var varKind = this.state.type;
      this.next();
      this.parseVar(_init, true, varKind);
      this.finishNode(_init, "VariableDeclaration");

      if (this.match(types._in) || this.isContextual("of")) {
        if (_init.declarations.length === 1 && !_init.declarations[0].init) {
          return this.parseForIn(node, _init, forAwait);
        }
      }

      if (forAwait) {
        this.unexpected();
      }

      return this.parseFor(node, _init);
    }

    var refShorthandDefaultPos = {
      start: 0
    };
    var init = this.parseExpression(true, refShorthandDefaultPos);

    if (this.match(types._in) || this.isContextual("of")) {
      var description = this.isContextual("of") ? "for-of statement" : "for-in statement";
      this.toAssignable(init, undefined, description);
      this.checkLVal(init, undefined, undefined, description);
      return this.parseForIn(node, init, forAwait);
    } else if (refShorthandDefaultPos.start) {
      this.unexpected(refShorthandDefaultPos.start);
    }

    if (forAwait) {
      this.unexpected();
    }

    return this.parseFor(node, init);
  };

  StatementParser.prototype.parseFunctionStatement = function parseFunctionStatement(node) {
    this.next();
    return this.parseFunction(node, true);
  };

  StatementParser.prototype.parseIfStatement = function parseIfStatement(node) {
    this.next();
    node.test = this.parseParenExpression();
    node.consequent = this.parseStatement(false);
    node.alternate = this.eat(types._else) ? this.parseStatement(false) : null;
    return this.finishNode(node, "IfStatement");
  };

  StatementParser.prototype.parseReturnStatement = function parseReturnStatement(node) {
    if (!this.state.inFunction && !this.options.allowReturnOutsideFunction) {
      this.raise(this.state.start, "'return' outside of function");
    }

    this.next(); // In `return` (and `break`/`continue`), the keywords with
    // optional arguments, we eagerly look for a semicolon or the
    // possibility to insert one.

    if (this.isLineTerminator()) {
      node.argument = null;
    } else {
      node.argument = this.parseExpression();
      this.semicolon();
    }

    return this.finishNode(node, "ReturnStatement");
  };

  StatementParser.prototype.parseSwitchStatement = function parseSwitchStatement(node) {
    this.next();
    node.discriminant = this.parseParenExpression();
    var cases = node.cases = [];
    this.expect(types.braceL);
    this.state.labels.push(switchLabel); // Statements under must be grouped (by label) in SwitchCase
    // nodes. `cur` is used to keep the node that we are currently
    // adding statements to.

    var cur = void 0;

    for (var sawDefault; !this.match(types.braceR);) {
      if (this.match(types._case) || this.match(types._default)) {
        var isCase = this.match(types._case);
        if (cur) this.finishNode(cur, "SwitchCase");
        cases.push(cur = this.startNode());
        cur.consequent = [];
        this.next();

        if (isCase) {
          cur.test = this.parseExpression();
        } else {
          if (sawDefault) this.raise(this.state.lastTokStart, "Multiple default clauses");
          sawDefault = true;
          cur.test = null;
        }

        this.expect(types.colon);
      } else {
        if (cur) {
          cur.consequent.push(this.parseStatement(true));
        } else {
          this.unexpected();
        }
      }
    }

    if (cur) this.finishNode(cur, "SwitchCase");
    this.next(); // Closing brace

    this.state.labels.pop();
    return this.finishNode(node, "SwitchStatement");
  };

  StatementParser.prototype.parseThrowStatement = function parseThrowStatement(node) {
    this.next();
    if (lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start))) this.raise(this.state.lastTokEnd, "Illegal newline after throw");
    node.argument = this.parseExpression();
    this.semicolon();
    return this.finishNode(node, "ThrowStatement");
  };

  StatementParser.prototype.parseTryStatement = function parseTryStatement(node) {
    this.next();
    node.block = this.parseBlock();
    node.handler = null;

    if (this.match(types._catch)) {
      var clause = this.startNode();
      this.next();

      if (this.match(types.parenL)) {
        this.expect(types.parenL);
        clause.param = this.parseBindingAtom();
        this.checkLVal(clause.param, true, Object.create(null), "catch clause");
        this.expect(types.parenR);
      } else {
        this.expectPlugin("optionalCatchBinding");
        clause.param = null;
      }

      clause.body = this.parseBlock();
      node.handler = this.finishNode(clause, "CatchClause");
    }

    node.guardedHandlers = empty;
    node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;

    if (!node.handler && !node.finalizer) {
      this.raise(node.start, "Missing catch or finally clause");
    }

    return this.finishNode(node, "TryStatement");
  };

  StatementParser.prototype.parseVarStatement = function parseVarStatement(node, kind) {
    this.next();
    this.parseVar(node, false, kind);
    this.semicolon();
    return this.finishNode(node, "VariableDeclaration");
  };

  StatementParser.prototype.parseWhileStatement = function parseWhileStatement(node) {
    this.next();
    node.test = this.parseParenExpression();
    this.state.labels.push(loopLabel);
    node.body = this.parseStatement(false);
    this.state.labels.pop();
    return this.finishNode(node, "WhileStatement");
  };

  StatementParser.prototype.parseWithStatement = function parseWithStatement(node) {
    if (this.state.strict) this.raise(this.state.start, "'with' in strict mode");
    this.next();
    node.object = this.parseParenExpression();
    node.body = this.parseStatement(false);
    return this.finishNode(node, "WithStatement");
  };

  StatementParser.prototype.parseEmptyStatement = function parseEmptyStatement(node) {
    this.next();
    return this.finishNode(node, "EmptyStatement");
  };

  StatementParser.prototype.parseLabeledStatement = function parseLabeledStatement(node, maybeName, expr) {
    for (var _iterator = this.state.labels, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var _label2 = _ref;

      if (_label2.name === maybeName) {
        this.raise(expr.start, "Label '".concat(maybeName, "' is already declared"));
      }
    }

    var kind = this.state.type.isLoop ? "loop" : this.match(types._switch) ? "switch" : null;

    for (var i = this.state.labels.length - 1; i >= 0; i--) {
      var _label = this.state.labels[i];

      if (_label.statementStart === node.start) {
        _label.statementStart = this.state.start;
        _label.kind = kind;
      } else {
        break;
      }
    }

    this.state.labels.push({
      name: maybeName,
      kind: kind,
      statementStart: this.state.start
    });
    node.body = this.parseStatement(true);

    if (node.body.type == "ClassDeclaration" || node.body.type == "VariableDeclaration" && node.body.kind !== "var" || node.body.type == "FunctionDeclaration" && (this.state.strict || node.body.generator || node.body.async)) {
      this.raise(node.body.start, "Invalid labeled declaration");
    }

    this.state.labels.pop();
    node.label = expr;
    return this.finishNode(node, "LabeledStatement");
  };

  StatementParser.prototype.parseExpressionStatement = function parseExpressionStatement(node, expr) {
    node.expression = expr;
    this.semicolon();
    return this.finishNode(node, "ExpressionStatement");
  }; // Parse a semicolon-enclosed block of statements, handling `"use
  // strict"` declarations when `allowStrict` is true (used for
  // function bodies).


  StatementParser.prototype.parseBlock = function parseBlock(allowDirectives) {
    var node = this.startNode();
    this.expect(types.braceL);
    this.parseBlockBody(node, allowDirectives, false, types.braceR);
    return this.finishNode(node, "BlockStatement");
  };

  StatementParser.prototype.isValidDirective = function isValidDirective(stmt) {
    return stmt.type === "ExpressionStatement" && stmt.expression.type === "StringLiteral" && !stmt.expression.extra.parenthesized;
  };

  StatementParser.prototype.parseBlockBody = function parseBlockBody(node, allowDirectives, topLevel, end) {
    var body = node.body = [];
    var directives = node.directives = [];
    this.parseBlockOrModuleBlockBody(body, allowDirectives ? directives : undefined, topLevel, end);
  }; // Undefined directives means that directives are not allowed.


  StatementParser.prototype.parseBlockOrModuleBlockBody = function parseBlockOrModuleBlockBody(body, directives, topLevel, end) {
    var parsedNonDirective = false;
    var oldStrict = void 0;
    var octalPosition = void 0;

    while (!this.eat(end)) {
      if (!parsedNonDirective && this.state.containsOctal && !octalPosition) {
        octalPosition = this.state.octalPosition;
      }

      var stmt = this.parseStatement(true, topLevel);

      if (directives && !parsedNonDirective && this.isValidDirective(stmt)) {
        var directive = this.stmtToDirective(stmt);
        directives.push(directive);

        if (oldStrict === undefined && directive.value.value === "use strict") {
          oldStrict = this.state.strict;
          this.setStrict(true);

          if (octalPosition) {
            this.raise(octalPosition, "Octal literal in strict mode");
          }
        }

        continue;
      }

      parsedNonDirective = true;
      body.push(stmt);
    }

    if (oldStrict === false) {
      this.setStrict(false);
    }
  }; // Parse a regular `for` loop. The disambiguation code in
  // `parseStatement` will already have parsed the init statement or
  // expression.


  StatementParser.prototype.parseFor = function parseFor(node, init) {
    node.init = init;
    this.expect(types.semi);
    node.test = this.match(types.semi) ? null : this.parseExpression();
    this.expect(types.semi);
    node.update = this.match(types.parenR) ? null : this.parseExpression();
    this.expect(types.parenR);
    node.body = this.parseStatement(false);
    this.state.labels.pop();
    return this.finishNode(node, "ForStatement");
  }; // Parse a `for`/`in` and `for`/`of` loop, which are almost
  // same from parser's perspective.


  StatementParser.prototype.parseForIn = function parseForIn(node, init, forAwait) {
    var type = this.match(types._in) ? "ForInStatement" : "ForOfStatement";

    if (forAwait) {
      this.eatContextual("of");
    } else {
      this.next();
    }

    if (type === "ForOfStatement") {
      node.await = !!forAwait;
    }

    node.left = init;
    node.right = this.parseExpression();
    this.expect(types.parenR);
    node.body = this.parseStatement(false);
    this.state.labels.pop();
    return this.finishNode(node, type);
  }; // Parse a list of variable declarations.


  StatementParser.prototype.parseVar = function parseVar(node, isFor, kind) {
    var declarations = node.declarations = []; // $FlowFixMe

    node.kind = kind.keyword;

    for (;;) {
      var decl = this.startNode();
      this.parseVarHead(decl);

      if (this.eat(types.eq)) {
        decl.init = this.parseMaybeAssign(isFor);
      } else {
        if (kind === types._const && !(this.match(types._in) || this.isContextual("of"))) {
          // `const` with no initializer is allowed in TypeScript. It could be a declaration `const x: number;`.
          if (!this.hasPlugin("typescript")) {
            this.unexpected();
          }
        } else if (decl.id.type !== "Identifier" && !(isFor && (this.match(types._in) || this.isContextual("of")))) {
          this.raise(this.state.lastTokEnd, "Complex binding patterns require an initialization value");
        }

        decl.init = null;
      }

      declarations.push(this.finishNode(decl, "VariableDeclarator"));
      if (!this.eat(types.comma)) break;
    }

    return node;
  };

  StatementParser.prototype.parseVarHead = function parseVarHead(decl) {
    decl.id = this.parseBindingAtom();
    this.checkLVal(decl.id, true, undefined, "variable declaration");
  }; // Parse a function declaration or literal (depending on the
  // `isStatement` parameter).


  StatementParser.prototype.parseFunction = function parseFunction(node, isStatement, allowExpressionBody, isAsync, optionalId) {
    var oldInMethod = this.state.inMethod;
    this.state.inMethod = false;
    this.initFunction(node, isAsync);

    if (this.match(types.star)) {
      if (node.async) {
        this.expectPlugin("asyncGenerators");
      }

      node.generator = true;
      this.next();
    }

    if (isStatement && !optionalId && !this.match(types.name) && !this.match(types._yield)) {
      this.unexpected();
    }

    if (this.match(types.name) || this.match(types._yield)) {
      node.id = this.parseBindingIdentifier();
    }

    this.parseFunctionParams(node);
    this.parseFunctionBodyAndFinish(node, isStatement ? "FunctionDeclaration" : "FunctionExpression", allowExpressionBody);
    this.state.inMethod = oldInMethod;
    return node;
  };

  StatementParser.prototype.parseFunctionParams = function parseFunctionParams(node) {
    this.expect(types.parenL);
    node.params = this.parseBindingList(types.parenR);
  }; // Parse a class declaration or literal (depending on the
  // `isStatement` parameter).


  StatementParser.prototype.parseClass = function parseClass(node, isStatement, optionalId) {
    this.next();
    this.takeDecorators(node);
    this.parseClassId(node, isStatement, optionalId);
    this.parseClassSuper(node);
    this.parseClassBody(node);
    return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
  };

  StatementParser.prototype.isClassProperty = function isClassProperty() {
    return this.match(types.eq) || this.match(types.semi) || this.match(types.braceR);
  };

  StatementParser.prototype.isClassMethod = function isClassMethod() {
    return this.match(types.parenL);
  };

  StatementParser.prototype.isNonstaticConstructor = function isNonstaticConstructor(method) {
    return !method.computed && !method.static && (method.key.name === "constructor" || // Identifier
    method.key.value === "constructor") // String literal
    ;
  };

  StatementParser.prototype.parseClassBody = function parseClassBody(node) {
    // class bodies are implicitly strict
    var oldStrict = this.state.strict;
    this.state.strict = true;
    this.state.classLevel++;
    var state = {
      hadConstructor: false
    };
    var decorators = [];
    var classBody = this.startNode();
    classBody.body = [];
    this.expect(types.braceL);

    while (!this.eat(types.braceR)) {
      if (this.eat(types.semi)) {
        if (decorators.length > 0) {
          this.raise(this.state.lastTokEnd, "Decorators must not be followed by a semicolon");
        }

        continue;
      }

      if (this.match(types.at)) {
        decorators.push(this.parseDecorator());
        continue;
      }

      var member = this.startNode(); // steal the decorators if there are any

      if (decorators.length) {
        member.decorators = decorators;
        this.resetStartLocationFromNode(member, decorators[0]);
        decorators = [];
      }

      this.parseClassMember(classBody, member, state);

      if (this.hasPlugin("decorators2") && member.kind != "method" && member.decorators && member.decorators.length > 0) {
        this.raise(member.start, "Stage 2 decorators may only be used with a class or a class method");
      }
    }

    if (decorators.length) {
      this.raise(this.state.start, "You have trailing decorators with no method");
    }

    node.body = this.finishNode(classBody, "ClassBody");
    this.state.classLevel--;
    this.state.strict = oldStrict;
  };

  StatementParser.prototype.parseClassMember = function parseClassMember(classBody, member, state) {
    var isStatic = false;

    if (this.match(types.name) && this.state.value === "static") {
      var key = this.parseIdentifier(true); // eats 'static'

      if (this.isClassMethod()) {
        var method = member; // a method named 'static'

        method.kind = "method";
        method.computed = false;
        method.key = key;
        method.static = false;
        this.pushClassMethod(classBody, method, false, false,
        /* isConstructor */
        false);
        return;
      } else if (this.isClassProperty()) {
        var prop = member; // a property named 'static'

        prop.computed = false;
        prop.key = key;
        prop.static = false;
        classBody.body.push(this.parseClassProperty(prop));
        return;
      } // otherwise something static


      isStatic = true;
    }

    this.parseClassMemberWithIsStatic(classBody, member, state, isStatic);
  };

  StatementParser.prototype.parseClassMemberWithIsStatic = function parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
    var publicMethod = member;
    var privateMethod = member;
    var publicProp = member;
    var privateProp = member;
    var method = publicMethod;
    var publicMember = publicMethod;
    member.static = isStatic;

    if (this.eat(types.star)) {
      // a generator
      method.kind = "method";
      this.parseClassPropertyName(method);

      if (method.key.type === "PrivateName") {
        // Private generator method
        this.pushClassPrivateMethod(classBody, privateMethod, true, false);
        return;
      }

      if (this.isNonstaticConstructor(publicMethod)) {
        this.raise(publicMethod.key.start, "Constructor can't be a generator");
      }

      this.pushClassMethod(classBody, publicMethod, true, false,
      /* isConstructor */
      false);
      return;
    }

    var key = this.parseClassPropertyName(member);
    var isPrivate = key.type === "PrivateName"; // Check the key is not a computed expression or string literal.

    var isSimple = key.type === "Identifier";
    this.parsePostMemberNameModifiers(publicMember);

    if (this.isClassMethod()) {
      method.kind = "method";

      if (isPrivate) {
        this.pushClassPrivateMethod(classBody, privateMethod, false, false);
        return;
      } // a normal method


      var isConstructor = this.isNonstaticConstructor(publicMethod);

      if (isConstructor) {
        publicMethod.kind = "constructor";

        if (publicMethod.decorators) {
          this.raise(publicMethod.start, "You can't attach decorators to a class constructor");
        } // TypeScript allows multiple overloaded constructor declarations.


        if (state.hadConstructor && !this.hasPlugin("typescript")) {
          this.raise(key.start, "Duplicate constructor in the same class");
        }

        state.hadConstructor = true;
      }

      this.pushClassMethod(classBody, publicMethod, false, false, isConstructor);
    } else if (this.isClassProperty()) {
      if (isPrivate) {
        this.pushClassPrivateProperty(classBody, privateProp);
      } else {
        this.pushClassProperty(classBody, publicProp);
      }
    } else if (isSimple && key.name === "async" && !this.isLineTerminator()) {
      // an async method
      var isGenerator = this.match(types.star);

      if (isGenerator) {
        this.expectPlugin("asyncGenerators");
        this.next();
      }

      method.kind = "method"; // The so-called parsed name would have been "async": get the real name.

      this.parseClassPropertyName(method);

      if (method.key.type === "PrivateName") {
        // private async method
        this.pushClassPrivateMethod(classBody, privateMethod, isGenerator, true);
      } else {
        if (this.isNonstaticConstructor(publicMethod)) {
          this.raise(publicMethod.key.start, "Constructor can't be an async function");
        }

        this.pushClassMethod(classBody, publicMethod, isGenerator, true,
        /* isConstructor */
        false);
      }
    } else if (isSimple && (key.name === "get" || key.name === "set") && !(this.isLineTerminator() && this.match(types.star))) {
      // `get\n*` is an uninitialized property named 'get' followed by a generator.
      // a getter or setter
      method.kind = key.name; // The so-called parsed name would have been "get/set": get the real name.

      this.parseClassPropertyName(publicMethod);

      if (method.key.type === "PrivateName") {
        // private getter/setter
        this.pushClassPrivateMethod(classBody, privateMethod, false, false);
      } else {
        if (this.isNonstaticConstructor(publicMethod)) {
          this.raise(publicMethod.key.start, "Constructor can't have get/set modifier");
        }

        this.pushClassMethod(classBody, publicMethod, false, false,
        /* isConstructor */
        false);
      }

      this.checkGetterSetterParamCount(publicMethod);
    } else if (this.isLineTerminator()) {
      // an uninitialized class property (due to ASI, since we don't otherwise recognize the next token)
      if (isPrivate) {
        this.pushClassPrivateProperty(classBody, privateProp);
      } else {
        this.pushClassProperty(classBody, publicProp);
      }
    } else {
      this.unexpected();
    }
  };

  StatementParser.prototype.parseClassPropertyName = function parseClassPropertyName(member) {
    var key = this.parsePropertyName(member);

    if (!member.computed && member.static && (key.name === "prototype" || key.value === "prototype")) {
      this.raise(key.start, "Classes may not have static property named prototype");
    }

    if (key.type === "PrivateName" && key.id.name === "constructor") {
      this.raise(key.start, "Classes may not have a private field named '#constructor'");
    }

    return key;
  };

  StatementParser.prototype.pushClassProperty = function pushClassProperty(classBody, prop) {
    // This only affects properties, not methods.
    if (this.isNonstaticConstructor(prop)) {
      this.raise(prop.key.start, "Classes may not have a non-static field named 'constructor'");
    }

    classBody.body.push(this.parseClassProperty(prop));
  };

  StatementParser.prototype.pushClassPrivateProperty = function pushClassPrivateProperty(classBody, prop) {
    this.expectPlugin("classPrivateProperties", prop.key.start);
    classBody.body.push(this.parseClassPrivateProperty(prop));
  };

  StatementParser.prototype.pushClassMethod = function pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor) {
    classBody.body.push(this.parseMethod(method, isGenerator, isAsync, isConstructor, "ClassMethod"));
  };

  StatementParser.prototype.pushClassPrivateMethod = function pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
    this.expectPlugin("classPrivateMethods", method.key.start);
    classBody.body.push(this.parseMethod(method, isGenerator, isAsync,
    /* isConstructor */
    false, "ClassPrivateMethod"));
  }; // Overridden in typescript.js


  StatementParser.prototype.parsePostMemberNameModifiers = function parsePostMemberNameModifiers( // eslint-disable-next-line no-unused-vars
  methodOrProp) {}; // Overridden in typescript.js


  StatementParser.prototype.parseAccessModifier = function parseAccessModifier() {
    return undefined;
  };

  StatementParser.prototype.parseClassPrivateProperty = function parseClassPrivateProperty(node) {
    this.state.inClassProperty = true;
    node.value = this.eat(types.eq) ? this.parseMaybeAssign() : null;
    this.semicolon();
    this.state.inClassProperty = false;
    return this.finishNode(node, "ClassPrivateProperty");
  };

  StatementParser.prototype.parseClassProperty = function parseClassProperty(node) {
    if (!node.typeAnnotation) {
      this.expectPlugin("classProperties");
    }

    this.state.inClassProperty = true;

    if (this.match(types.eq)) {
      this.expectPlugin("classProperties");
      this.next();
      node.value = this.parseMaybeAssign();
    } else {
      node.value = null;
    }

    this.semicolon();
    this.state.inClassProperty = false;
    return this.finishNode(node, "ClassProperty");
  };

  StatementParser.prototype.parseClassId = function parseClassId(node, isStatement, optionalId) {
    if (this.match(types.name)) {
      node.id = this.parseIdentifier();
    } else {
      if (optionalId || !isStatement) {
        node.id = null;
      } else {
        this.unexpected(null, "A class name is required");
      }
    }
  };

  StatementParser.prototype.parseClassSuper = function parseClassSuper(node) {
    node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
  }; // Parses module export declaration.
  // TODO: better type. Node is an N.AnyExport.


  StatementParser.prototype.parseExport = function parseExport(node) {
    // export * from '...'
    if (this.shouldParseExportStar()) {
      this.parseExportStar(node, this.hasPlugin("exportExtensions"));
      if (node.type === "ExportAllDeclaration") return node;
    } else if (this.hasPlugin("exportExtensions") && this.isExportDefaultSpecifier()) {
      var specifier = this.startNode();
      specifier.exported = this.parseIdentifier(true);
      var specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
      node.specifiers = specifiers;

      if (this.match(types.comma) && this.lookahead().type === types.star) {
        this.expect(types.comma);

        var _specifier = this.startNode();

        this.expect(types.star);
        this.expectContextual("as");
        _specifier.exported = this.parseIdentifier();
        specifiers.push(this.finishNode(_specifier, "ExportNamespaceSpecifier"));
      } else {
        this.parseExportSpecifiersMaybe(node);
      }

      this.parseExportFrom(node, true);
    } else if (this.eat(types._default)) {
      // export default ...
      var expr = this.startNode();
      var needsSemi = false;

      if (this.eat(types._function)) {
        expr = this.parseFunction(expr, true, false, false, true);
      } else if (this.isContextual("async") && this.lookahead().type === types._function) {
        // async function declaration
        this.eatContextual("async");
        this.eat(types._function);
        expr = this.parseFunction(expr, true, false, true, true);
      } else if (this.match(types._class)) {
        expr = this.parseClass(expr, true, true);
      } else {
        needsSemi = true;
        expr = this.parseMaybeAssign();
      }

      node.declaration = expr;
      if (needsSemi) this.semicolon();
      this.checkExport(node, true, true);
      return this.finishNode(node, "ExportDefaultDeclaration");
    } else if (this.shouldParseExportDeclaration()) {
      if (this.isContextual("async")) {
        var next = this.lookahead(); // export async;

        if (next.type !== types._function) {
          this.unexpected(next.start, "Unexpected token, expected function");
        }
      }

      node.specifiers = [];
      node.source = null;
      node.declaration = this.parseExportDeclaration(node);
    } else {
      // export { x, y as z } [from '...']
      node.declaration = null;
      node.specifiers = this.parseExportSpecifiers();
      this.parseExportFrom(node);
    }

    this.checkExport(node, true);
    return this.finishNode(node, "ExportNamedDeclaration");
  }; // eslint-disable-next-line no-unused-vars


  StatementParser.prototype.parseExportDeclaration = function parseExportDeclaration(node) {
    return this.parseStatement(true);
  };

  StatementParser.prototype.isExportDefaultSpecifier = function isExportDefaultSpecifier() {
    if (this.match(types.name)) {
      return this.state.value !== "async";
    }

    if (!this.match(types._default)) {
      return false;
    }

    var lookahead = this.lookahead();
    return lookahead.type === types.comma || lookahead.type === types.name && lookahead.value === "from";
  };

  StatementParser.prototype.parseExportSpecifiersMaybe = function parseExportSpecifiersMaybe(node) {
    if (this.eat(types.comma)) {
      node.specifiers = node.specifiers.concat(this.parseExportSpecifiers());
    }
  };

  StatementParser.prototype.parseExportFrom = function parseExportFrom(node, expect) {
    if (this.eatContextual("from")) {
      node.source = this.match(types.string) ? this.parseExprAtom() : this.unexpected();
      this.checkExport(node);
    } else {
      if (expect) {
        this.unexpected();
      } else {
        node.source = null;
      }
    }

    this.semicolon();
  };

  StatementParser.prototype.shouldParseExportStar = function shouldParseExportStar() {
    return this.match(types.star);
  };

  StatementParser.prototype.parseExportStar = function parseExportStar(node, allowNamed) {
    this.expect(types.star);

    if (allowNamed && this.isContextual("as")) {
      var specifier = this.startNodeAt(this.state.lastTokStart, this.state.lastTokStartLoc);
      this.next();
      specifier.exported = this.parseIdentifier(true);
      node.specifiers = [this.finishNode(specifier, "ExportNamespaceSpecifier")];
      this.parseExportSpecifiersMaybe(node);
      this.parseExportFrom(node, true);
    } else {
      this.parseExportFrom(node, true);
      this.finishNode(node, "ExportAllDeclaration");
    }
  };

  StatementParser.prototype.shouldParseExportDeclaration = function shouldParseExportDeclaration() {
    return this.state.type.keyword === "var" || this.state.type.keyword === "const" || this.state.type.keyword === "let" || this.state.type.keyword === "function" || this.state.type.keyword === "class" || this.isContextual("async");
  };

  StatementParser.prototype.checkExport = function checkExport(node, checkNames, isDefault) {
    if (checkNames) {
      // Check for duplicate exports
      if (isDefault) {
        // Default exports
        this.checkDuplicateExports(node, "default");
      } else if (node.specifiers && node.specifiers.length) {
        // Named exports
        for (var _iterator2 = node.specifiers, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var _specifier2 = _ref2;
          this.checkDuplicateExports(_specifier2, _specifier2.exported.name);
        }
      } else if (node.declaration) {
        // Exported declarations
        if (node.declaration.type === "FunctionDeclaration" || node.declaration.type === "ClassDeclaration") {
          this.checkDuplicateExports(node, node.declaration.id.name);
        } else if (node.declaration.type === "VariableDeclaration") {
          for (var _iterator3 = node.declaration.declarations, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray3) {
              if (_i3 >= _iterator3.length) break;
              _ref3 = _iterator3[_i3++];
            } else {
              _i3 = _iterator3.next();
              if (_i3.done) break;
              _ref3 = _i3.value;
            }

            var _declaration = _ref3;
            this.checkDeclaration(_declaration.id);
          }
        }
      }
    }

    var currentContextDecorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];

    if (currentContextDecorators.length) {
      var isClass = node.declaration && (node.declaration.type === "ClassDeclaration" || node.declaration.type === "ClassExpression");

      if (!node.declaration || !isClass) {
        throw this.raise(node.start, "You can only use decorators on an export when exporting a class");
      }

      this.takeDecorators(node.declaration);
    }
  };

  StatementParser.prototype.checkDeclaration = function checkDeclaration(node) {
    if (node.type === "ObjectPattern") {
      for (var _iterator4 = node.properties, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray4) {
          if (_i4 >= _iterator4.length) break;
          _ref4 = _iterator4[_i4++];
        } else {
          _i4 = _iterator4.next();
          if (_i4.done) break;
          _ref4 = _i4.value;
        }

        var _prop = _ref4; // $FlowFixMe (prop may be an AssignmentProperty, in which case this does nothing?)

        this.checkDeclaration(_prop);
      }
    } else if (node.type === "ArrayPattern") {
      for (var _iterator5 = node.elements, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
        var _ref5;

        if (_isArray5) {
          if (_i5 >= _iterator5.length) break;
          _ref5 = _iterator5[_i5++];
        } else {
          _i5 = _iterator5.next();
          if (_i5.done) break;
          _ref5 = _i5.value;
        }

        var _elem = _ref5;

        if (_elem) {
          this.checkDeclaration(_elem);
        }
      }
    } else if (node.type === "ObjectProperty") {
      this.checkDeclaration(node.value);
    } else if (node.type === "RestElement") {
      this.checkDeclaration(node.argument);
    } else if (node.type === "Identifier") {
      this.checkDuplicateExports(node, node.name);
    }
  };

  StatementParser.prototype.checkDuplicateExports = function checkDuplicateExports(node, name) {
    if (this.state.exportedIdentifiers.indexOf(name) > -1) {
      this.raiseDuplicateExportError(node, name);
    }

    this.state.exportedIdentifiers.push(name);
  };

  StatementParser.prototype.raiseDuplicateExportError = function raiseDuplicateExportError(node, name) {
    throw this.raise(node.start, name === "default" ? "Only one default export allowed per module." : "`".concat(name, "` has already been exported. Exported identifiers must be unique."));
  }; // Parses a comma-separated list of module exports.


  StatementParser.prototype.parseExportSpecifiers = function parseExportSpecifiers() {
    var nodes = [];
    var first = true;
    var needsFrom = void 0; // export { x, y as z } [from '...']

    this.expect(types.braceL);

    while (!this.eat(types.braceR)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);
        if (this.eat(types.braceR)) break;
      }

      var isDefault = this.match(types._default);
      if (isDefault && !needsFrom) needsFrom = true;
      var node = this.startNode();
      node.local = this.parseIdentifier(isDefault);
      node.exported = this.eatContextual("as") ? this.parseIdentifier(true) : node.local.__clone();
      nodes.push(this.finishNode(node, "ExportSpecifier"));
    } // https://github.com/ember-cli/ember-cli/pull/3739


    if (needsFrom && !this.isContextual("from")) {
      this.unexpected();
    }

    return nodes;
  }; // Parses import declaration.


  StatementParser.prototype.parseImport = function parseImport(node) {
    // import '...'
    if (this.match(types.string)) {
      node.specifiers = [];
      node.source = this.parseExprAtom();
    } else {
      node.specifiers = [];
      this.parseImportSpecifiers(node);
      this.expectContextual("from");
      node.source = this.match(types.string) ? this.parseExprAtom() : this.unexpected();
    }

    this.semicolon();
    return this.finishNode(node, "ImportDeclaration");
  }; // Parses a comma-separated list of module imports.


  StatementParser.prototype.parseImportSpecifiers = function parseImportSpecifiers(node) {
    var first = true;

    if (this.match(types.name)) {
      // import defaultObj, { x, y as z } from '...'
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      node.specifiers.push(this.parseImportSpecifierDefault(this.parseIdentifier(), startPos, startLoc));
      if (!this.eat(types.comma)) return;
    }

    if (this.match(types.star)) {
      var specifier = this.startNode();
      this.next();
      this.expectContextual("as");
      specifier.local = this.parseIdentifier();
      this.checkLVal(specifier.local, true, undefined, "import namespace specifier");
      node.specifiers.push(this.finishNode(specifier, "ImportNamespaceSpecifier"));
      return;
    }

    this.expect(types.braceL);

    while (!this.eat(types.braceR)) {
      if (first) {
        first = false;
      } else {
        // Detect an attempt to deep destructure
        if (this.eat(types.colon)) {
          this.unexpected(null, "ES2015 named imports do not destructure. Use another statement for destructuring after the import.");
        }

        this.expect(types.comma);
        if (this.eat(types.braceR)) break;
      }

      this.parseImportSpecifier(node);
    }
  };

  StatementParser.prototype.parseImportSpecifier = function parseImportSpecifier(node) {
    var specifier = this.startNode();
    specifier.imported = this.parseIdentifier(true);

    if (this.eatContextual("as")) {
      specifier.local = this.parseIdentifier();
    } else {
      this.checkReservedWord(specifier.imported.name, specifier.start, true, true);
      specifier.local = specifier.imported.__clone();
    }

    this.checkLVal(specifier.local, true, undefined, "import specifier");
    node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
  };

  StatementParser.prototype.parseImportSpecifierDefault = function parseImportSpecifierDefault(id, startPos, startLoc) {
    var node = this.startNodeAt(startPos, startLoc);
    node.local = id;
    this.checkLVal(node.local, true, undefined, "default import specifier");
    return this.finishNode(node, "ImportDefaultSpecifier");
  };

  return StatementParser;
}(ExpressionParser);

var plugins = {};

var Parser = function (_StatementParser) {
  inheritsLoose(Parser, _StatementParser);

  function Parser(options, input) {
    var _this;

    options = getOptions(options);
    _this = _StatementParser.call(this, options, input) || this;
    _this.options = options;
    _this.inModule = _this.options.sourceType === "module";
    _this.input = input;
    _this.plugins = pluginsMap(_this.options.plugins);
    _this.filename = options.sourceFilename; // If enabled, skip leading hashbang line.

    if (_this.state.pos === 0 && _this.input[0] === "#" && _this.input[1] === "!") {
      _this.skipLineComment(2);
    }

    return _this;
  }

  Parser.prototype.parse = function parse() {
    var file = this.startNode();
    var program = this.startNode();
    this.nextToken();
    return this.parseTopLevel(file, program);
  };

  return Parser;
}(StatementParser);

function pluginsMap(pluginList) {
  var pluginMap = {};

  for (var _iterator = pluginList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _name2 = _ref;
    pluginMap[_name2] = true;
  }

  return pluginMap;
}

function isSimpleProperty(node) {
  return node != null && node.type === "Property" && node.kind === "init" && node.method === false;
}

var estreePlugin = function estreePlugin(superClass) {
  return function (_superClass) {
    inheritsLoose(_class, _superClass);

    function _class() {
      return _superClass.apply(this, arguments) || this;
    }

    _class.prototype.estreeParseRegExpLiteral = function estreeParseRegExpLiteral(_ref) {
      var pattern = _ref.pattern,
          flags = _ref.flags;
      var regex = null;

      try {
        regex = new RegExp(pattern, flags);
      } catch (e) {// In environments that don't support these flags value will
        // be null as the regex can't be represented natively.
      }

      var node = this.estreeParseLiteral(regex);
      node.regex = {
        pattern: pattern,
        flags: flags
      };
      return node;
    };

    _class.prototype.estreeParseLiteral = function estreeParseLiteral(value) {
      return this.parseLiteral(value, "Literal");
    };

    _class.prototype.directiveToStmt = function directiveToStmt(directive) {
      var directiveLiteral = directive.value;
      var stmt = this.startNodeAt(directive.start, directive.loc.start);
      var expression = this.startNodeAt(directiveLiteral.start, directiveLiteral.loc.start);
      expression.value = directiveLiteral.value;
      expression.raw = directiveLiteral.extra.raw;
      stmt.expression = this.finishNodeAt(expression, "Literal", directiveLiteral.end, directiveLiteral.loc.end);
      stmt.directive = directiveLiteral.extra.raw.slice(1, -1);
      return this.finishNodeAt(stmt, "ExpressionStatement", directive.end, directive.loc.end);
    }; // ==================================
    // Overrides
    // ==================================


    _class.prototype.checkDeclaration = function checkDeclaration(node) {
      if (isSimpleProperty(node)) {
        // $FlowFixMe
        this.checkDeclaration(node.value);
      } else {
        _superClass.prototype.checkDeclaration.call(this, node);
      }
    };

    _class.prototype.checkGetterSetterParamCount = function checkGetterSetterParamCount(prop) {
      var paramCount = prop.kind === "get" ? 0 : 1; // $FlowFixMe (prop.value present for ObjectMethod, but for ClassMethod should use prop.params?)

      if (prop.value.params.length !== paramCount) {
        var start = prop.start;

        if (prop.kind === "get") {
          this.raise(start, "getter should have no params");
        } else {
          this.raise(start, "setter should have exactly one param");
        }
      }
    };

    _class.prototype.checkLVal = function checkLVal(expr, isBinding, checkClashes, contextDescription) {
      var _this2 = this;

      switch (expr.type) {
        case "ObjectPattern":
          expr.properties.forEach(function (prop) {
            _this2.checkLVal(prop.type === "Property" ? prop.value : prop, isBinding, checkClashes, "object destructuring pattern");
          });
          break;

        default:
          _superClass.prototype.checkLVal.call(this, expr, isBinding, checkClashes, contextDescription);

      }
    };

    _class.prototype.checkPropClash = function checkPropClash(prop, propHash) {
      if (prop.computed || !isSimpleProperty(prop)) return;
      var key = prop.key; // It is either an Identifier or a String/NumericLiteral

      var name = key.type === "Identifier" ? key.name : String(key.value);

      if (name === "__proto__") {
        if (propHash.proto) this.raise(key.start, "Redefinition of __proto__ property");
        propHash.proto = true;
      }
    };

    _class.prototype.isStrictBody = function isStrictBody(node, isExpression) {
      if (!isExpression && node.body.body.length > 0) {
        for (var _iterator = node.body.body, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref2 = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref2 = _i.value;
          }

          var _directive = _ref2;

          if (_directive.type === "ExpressionStatement" && _directive.expression.type === "Literal") {
            if (_directive.expression.value === "use strict") return true;
          } else {
            // Break for the first non literal expression
            break;
          }
        }
      }

      return false;
    };

    _class.prototype.isValidDirective = function isValidDirective(stmt) {
      return stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && typeof stmt.expression.value === "string" && (!stmt.expression.extra || !stmt.expression.extra.parenthesized);
    };

    _class.prototype.stmtToDirective = function stmtToDirective(stmt) {
      var directive = _superClass.prototype.stmtToDirective.call(this, stmt);

      var value = stmt.expression.value; // Reset value to the actual value as in estree mode we want
      // the stmt to have the real value and not the raw value

      directive.value.value = value;
      return directive;
    };

    _class.prototype.parseBlockBody = function parseBlockBody(node, allowDirectives, topLevel, end) {
      var _this3 = this;

      _superClass.prototype.parseBlockBody.call(this, node, allowDirectives, topLevel, end);

      var directiveStatements = node.directives.map(function (d) {
        return _this3.directiveToStmt(d);
      });
      node.body = directiveStatements.concat(node.body);
      delete node.directives;
    };

    _class.prototype.pushClassMethod = function pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor) {
      this.parseMethod(method, isGenerator, isAsync, isConstructor, "MethodDefinition");

      if (method.typeParameters) {
        // $FlowIgnore
        method.value.typeParameters = method.typeParameters;
        delete method.typeParameters;
      }

      classBody.body.push(method);
    };

    _class.prototype.parseExprAtom = function parseExprAtom(refShorthandDefaultPos) {
      switch (this.state.type) {
        case types.regexp:
          return this.estreeParseRegExpLiteral(this.state.value);

        case types.num:
        case types.string:
          return this.estreeParseLiteral(this.state.value);

        case types._null:
          return this.estreeParseLiteral(null);

        case types._true:
          return this.estreeParseLiteral(true);

        case types._false:
          return this.estreeParseLiteral(false);

        default:
          return _superClass.prototype.parseExprAtom.call(this, refShorthandDefaultPos);
      }
    };

    _class.prototype.parseLiteral = function parseLiteral(value, type, startPos, startLoc) {
      var node = _superClass.prototype.parseLiteral.call(this, value, type, startPos, startLoc);

      node.raw = node.extra.raw;
      delete node.extra;
      return node;
    };

    _class.prototype.parseMethod = function parseMethod(node, isGenerator, isAsync, isConstructor, type) {
      var funcNode = this.startNode();
      funcNode.kind = node.kind; // provide kind, so super method correctly sets state

      funcNode = _superClass.prototype.parseMethod.call(this, funcNode, isGenerator, isAsync, isConstructor, "FunctionExpression");
      delete funcNode.kind; // $FlowIgnore

      node.value = funcNode;
      return this.finishNode(node, type);
    };

    _class.prototype.parseObjectMethod = function parseObjectMethod(prop, isGenerator, isAsync, isPattern) {
      var node = _superClass.prototype.parseObjectMethod.call(this, prop, isGenerator, isAsync, isPattern);

      if (node) {
        node.type = "Property";
        if (node.kind === "method") node.kind = "init";
        node.shorthand = false;
      }

      return node;
    };

    _class.prototype.parseObjectProperty = function parseObjectProperty(prop, startPos, startLoc, isPattern, refShorthandDefaultPos) {
      var node = _superClass.prototype.parseObjectProperty.call(this, prop, startPos, startLoc, isPattern, refShorthandDefaultPos);

      if (node) {
        node.kind = "init";
        node.type = "Property";
      }

      return node;
    };

    _class.prototype.toAssignable = function toAssignable(node, isBinding, contextDescription) {
      if (isSimpleProperty(node)) {
        this.toAssignable(node.value, isBinding, contextDescription);
        return node;
      }

      return _superClass.prototype.toAssignable.call(this, node, isBinding, contextDescription);
    };

    _class.prototype.toAssignableObjectExpressionProp = function toAssignableObjectExpressionProp(prop, isBinding, isLast) {
      if (prop.kind === "get" || prop.kind === "set") {
        this.raise(prop.key.start, "Object pattern can't contain getter or setter");
      } else if (prop.method) {
        this.raise(prop.key.start, "Object pattern can't contain methods");
      } else {
        _superClass.prototype.toAssignableObjectExpressionProp.call(this, prop, isBinding, isLast);
      }
    };

    return _class;
  }(superClass);
};
/* eslint max-len: 0 */


var primitiveTypes = ["any", "mixed", "empty", "bool", "boolean", "number", "string", "void", "null"];

function isEsModuleType(bodyElement) {
  return bodyElement.type === "DeclareExportAllDeclaration" || bodyElement.type === "DeclareExportDeclaration" && (!bodyElement.declaration || bodyElement.declaration.type !== "TypeAlias" && bodyElement.declaration.type !== "InterfaceDeclaration");
}

var exportSuggestions = {
  const: "declare export var",
  let: "declare export var",
  type: "export type",
  interface: "export interface"
}; // Like Array#filter, but returns a tuple [ acceptedElements, discardedElements ]

function partition(list, test) {
  var list1 = [];
  var list2 = [];

  for (var i = 0; i < list.length; i++) {
    (test(list[i], i, list) ? list1 : list2).push(list[i]);
  }

  return [list1, list2];
}

var flowPlugin = function flowPlugin(superClass) {
  return function (_superClass) {
    inheritsLoose(_class, _superClass);

    function _class() {
      return _superClass.apply(this, arguments) || this;
    }

    _class.prototype.flowParseTypeInitialiser = function flowParseTypeInitialiser(tok) {
      var oldInType = this.state.inType;
      this.state.inType = true;
      this.expect(tok || types.colon);
      var type = this.flowParseType();
      this.state.inType = oldInType;
      return type;
    };

    _class.prototype.flowParsePredicate = function flowParsePredicate() {
      var node = this.startNode();
      var moduloLoc = this.state.startLoc;
      var moduloPos = this.state.start;
      this.expect(types.modulo);
      var checksLoc = this.state.startLoc;
      this.expectContextual("checks"); // Force '%' and 'checks' to be adjacent

      if (moduloLoc.line !== checksLoc.line || moduloLoc.column !== checksLoc.column - 1) {
        this.raise(moduloPos, "Spaces between Â´%Â´ and Â´checksÂ´ are not allowed here.");
      }

      if (this.eat(types.parenL)) {
        node.value = this.parseExpression();
        this.expect(types.parenR);
        return this.finishNode(node, "DeclaredPredicate");
      } else {
        return this.finishNode(node, "InferredPredicate");
      }
    };

    _class.prototype.flowParseTypeAndPredicateInitialiser = function flowParseTypeAndPredicateInitialiser() {
      var oldInType = this.state.inType;
      this.state.inType = true;
      this.expect(types.colon);
      var type = null;
      var predicate = null;

      if (this.match(types.modulo)) {
        this.state.inType = oldInType;
        predicate = this.flowParsePredicate();
      } else {
        type = this.flowParseType();
        this.state.inType = oldInType;

        if (this.match(types.modulo)) {
          predicate = this.flowParsePredicate();
        }
      }

      return [type, predicate];
    };

    _class.prototype.flowParseDeclareClass = function flowParseDeclareClass(node) {
      this.next();
      this.flowParseInterfaceish(node);
      return this.finishNode(node, "DeclareClass");
    };

    _class.prototype.flowParseDeclareFunction = function flowParseDeclareFunction(node) {
      this.next();
      var id = node.id = this.parseIdentifier();
      var typeNode = this.startNode();
      var typeContainer = this.startNode();

      if (this.isRelational("<")) {
        typeNode.typeParameters = this.flowParseTypeParameterDeclaration();
      } else {
        typeNode.typeParameters = null;
      }

      this.expect(types.parenL);
      var tmp = this.flowParseFunctionTypeParams();
      typeNode.params = tmp.params;
      typeNode.rest = tmp.rest;
      this.expect(types.parenR);

      var _flowParseTypeAndPred = this.flowParseTypeAndPredicateInitialiser(); // $FlowFixMe (destructuring not supported yet)


      typeNode.returnType = _flowParseTypeAndPred[0]; // $FlowFixMe (destructuring not supported yet)

      node.predicate = _flowParseTypeAndPred[1];
      typeContainer.typeAnnotation = this.finishNode(typeNode, "FunctionTypeAnnotation");
      id.typeAnnotation = this.finishNode(typeContainer, "TypeAnnotation");
      this.finishNode(id, id.type);
      this.semicolon();
      return this.finishNode(node, "DeclareFunction");
    };

    _class.prototype.flowParseDeclare = function flowParseDeclare(node, insideModule) {
      if (this.match(types._class)) {
        return this.flowParseDeclareClass(node);
      } else if (this.match(types._function)) {
        return this.flowParseDeclareFunction(node);
      } else if (this.match(types._var)) {
        return this.flowParseDeclareVariable(node);
      } else if (this.isContextual("module")) {
        if (this.lookahead().type === types.dot) {
          return this.flowParseDeclareModuleExports(node);
        } else {
          if (insideModule) this.unexpected(null, "`declare module` cannot be used inside another `declare module`");
          return this.flowParseDeclareModule(node);
        }
      } else if (this.isContextual("type")) {
        return this.flowParseDeclareTypeAlias(node);
      } else if (this.isContextual("opaque")) {
        return this.flowParseDeclareOpaqueType(node);
      } else if (this.isContextual("interface")) {
        return this.flowParseDeclareInterface(node);
      } else if (this.match(types._export)) {
        return this.flowParseDeclareExportDeclaration(node, insideModule);
      } else {
        throw this.unexpected();
      }
    };

    _class.prototype.flowParseDeclareVariable = function flowParseDeclareVariable(node) {
      this.next();
      node.id = this.flowParseTypeAnnotatableIdentifier(
      /*allowPrimitiveOverride*/
      true);
      this.semicolon();
      return this.finishNode(node, "DeclareVariable");
    };

    _class.prototype.flowParseDeclareModule = function flowParseDeclareModule(node) {
      var _this2 = this;

      this.next();

      if (this.match(types.string)) {
        node.id = this.parseExprAtom();
      } else {
        node.id = this.parseIdentifier();
      }

      var bodyNode = node.body = this.startNode();
      var body = bodyNode.body = [];
      this.expect(types.braceL);

      while (!this.match(types.braceR)) {
        var _bodyNode = this.startNode();

        if (this.match(types._import)) {
          var lookahead = this.lookahead();

          if (lookahead.value !== "type" && lookahead.value !== "typeof") {
            this.unexpected(null, "Imports within a `declare module` body must always be `import type` or `import typeof`");
          }

          this.next();
          this.parseImport(_bodyNode);
        } else {
          this.expectContextual("declare", "Only declares and type imports are allowed inside declare module");
          _bodyNode = this.flowParseDeclare(_bodyNode, true);
        }

        body.push(_bodyNode);
      }

      this.expect(types.braceR);
      this.finishNode(bodyNode, "BlockStatement");
      var kind = null;
      var hasModuleExport = false;
      var errorMessage = "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module";
      body.forEach(function (bodyElement) {
        if (isEsModuleType(bodyElement)) {
          if (kind === "CommonJS") _this2.unexpected(bodyElement.start, errorMessage);
          kind = "ES";
        } else if (bodyElement.type === "DeclareModuleExports") {
          if (hasModuleExport) _this2.unexpected(bodyElement.start, "Duplicate `declare module.exports` statement");
          if (kind === "ES") _this2.unexpected(bodyElement.start, errorMessage);
          kind = "CommonJS";
          hasModuleExport = true;
        }
      });
      node.kind = kind || "CommonJS";
      return this.finishNode(node, "DeclareModule");
    };

    _class.prototype.flowParseDeclareExportDeclaration = function flowParseDeclareExportDeclaration(node, insideModule) {
      this.expect(types._export);

      if (this.eat(types._default)) {
        if (this.match(types._function) || this.match(types._class)) {
          // declare export default class ...
          // declare export default function ...
          node.declaration = this.flowParseDeclare(this.startNode());
        } else {
          // declare export default [type];
          node.declaration = this.flowParseType();
          this.semicolon();
        }

        node.default = true;
        return this.finishNode(node, "DeclareExportDeclaration");
      } else {
        if (this.match(types._const) || this.match(types._let) || (this.isContextual("type") || this.isContextual("interface")) && !insideModule) {
          var label = this.state.value;
          var suggestion = exportSuggestions[label];
          this.unexpected(this.state.start, "`declare export ".concat(label, "` is not supported. Use `").concat(suggestion, "` instead"));
        }

        if (this.match(types._var) || // declare export var ...
        this.match(types._function) || // declare export function ...
        this.match(types._class) || // declare export class ...
        this.isContextual("opaque") // declare export opaque ..
        ) {
            node.declaration = this.flowParseDeclare(this.startNode());
            node.default = false;
            return this.finishNode(node, "DeclareExportDeclaration");
          } else if (this.match(types.star) || // declare export * from ''
        this.match(types.braceL) || // declare export {} ...
        this.isContextual("interface") || // declare export interface ...
        this.isContextual("type") || // declare export type ...
        this.isContextual("opaque") // declare export opaque type ...
        ) {
            node = this.parseExport(node);

            if (node.type === "ExportNamedDeclaration") {
              // flow does not support the ExportNamedDeclaration
              // $FlowIgnore
              node.type = "ExportDeclaration"; // $FlowFixMe

              node.default = false;
              delete node.exportKind;
            } // $FlowIgnore


            node.type = "Declare" + node.type;
            return node;
          }
      }

      throw this.unexpected();
    };

    _class.prototype.flowParseDeclareModuleExports = function flowParseDeclareModuleExports(node) {
      this.expectContextual("module");
      this.expect(types.dot);
      this.expectContextual("exports");
      node.typeAnnotation = this.flowParseTypeAnnotation();
      this.semicolon();
      return this.finishNode(node, "DeclareModuleExports");
    };

    _class.prototype.flowParseDeclareTypeAlias = function flowParseDeclareTypeAlias(node) {
      this.next();
      this.flowParseTypeAlias(node);
      return this.finishNode(node, "DeclareTypeAlias");
    };

    _class.prototype.flowParseDeclareOpaqueType = function flowParseDeclareOpaqueType(node) {
      this.next();
      this.flowParseOpaqueType(node, true);
      return this.finishNode(node, "DeclareOpaqueType");
    };

    _class.prototype.flowParseDeclareInterface = function flowParseDeclareInterface(node) {
      this.next();
      this.flowParseInterfaceish(node);
      return this.finishNode(node, "DeclareInterface");
    }; // Interfaces


    _class.prototype.flowParseInterfaceish = function flowParseInterfaceish(node) {
      node.id = this.parseIdentifier();

      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      } else {
        node.typeParameters = null;
      }

      node.extends = [];
      node.mixins = [];

      if (this.eat(types._extends)) {
        do {
          node.extends.push(this.flowParseInterfaceExtends());
        } while (this.eat(types.comma));
      }

      if (this.isContextual("mixins")) {
        this.next();

        do {
          node.mixins.push(this.flowParseInterfaceExtends());
        } while (this.eat(types.comma));
      }

      node.body = this.flowParseObjectType(true, false, false);
    };

    _class.prototype.flowParseInterfaceExtends = function flowParseInterfaceExtends() {
      var node = this.startNode();
      node.id = this.flowParseQualifiedTypeIdentifier();

      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterInstantiation();
      } else {
        node.typeParameters = null;
      }

      return this.finishNode(node, "InterfaceExtends");
    };

    _class.prototype.flowParseInterface = function flowParseInterface(node) {
      this.flowParseInterfaceish(node);
      return this.finishNode(node, "InterfaceDeclaration");
    };

    _class.prototype.flowParseRestrictedIdentifier = function flowParseRestrictedIdentifier(liberal) {
      if (primitiveTypes.indexOf(this.state.value) > -1) {
        this.raise(this.state.start, "Cannot overwrite primitive type ".concat(this.state.value));
      }

      return this.parseIdentifier(liberal);
    }; // Type aliases


    _class.prototype.flowParseTypeAlias = function flowParseTypeAlias(node) {
      node.id = this.flowParseRestrictedIdentifier();

      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      } else {
        node.typeParameters = null;
      }

      node.right = this.flowParseTypeInitialiser(types.eq);
      this.semicolon();
      return this.finishNode(node, "TypeAlias");
    };

    _class.prototype.flowParseOpaqueType = function flowParseOpaqueType(node, declare) {
      this.expectContextual("type");
      node.id = this.flowParseRestrictedIdentifier();

      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      } else {
        node.typeParameters = null;
      } // Parse the supertype


      node.supertype = null;

      if (this.match(types.colon)) {
        node.supertype = this.flowParseTypeInitialiser(types.colon);
      }

      node.impltype = null;

      if (!declare) {
        node.impltype = this.flowParseTypeInitialiser(types.eq);
      }

      this.semicolon();
      return this.finishNode(node, "OpaqueType");
    }; // Type annotations


    _class.prototype.flowParseTypeParameter = function flowParseTypeParameter() {
      var node = this.startNode();
      var variance = this.flowParseVariance();
      var ident = this.flowParseTypeAnnotatableIdentifier();
      node.name = ident.name;
      node.variance = variance;
      node.bound = ident.typeAnnotation;

      if (this.match(types.eq)) {
        this.eat(types.eq);
        node.default = this.flowParseType();
      }

      return this.finishNode(node, "TypeParameter");
    };

    _class.prototype.flowParseTypeParameterDeclaration = function flowParseTypeParameterDeclaration() {
      var oldInType = this.state.inType;
      var node = this.startNode();
      node.params = [];
      this.state.inType = true; // istanbul ignore else: this condition is already checked at all call sites

      if (this.isRelational("<") || this.match(types.jsxTagStart)) {
        this.next();
      } else {
        this.unexpected();
      }

      do {
        node.params.push(this.flowParseTypeParameter());

        if (!this.isRelational(">")) {
          this.expect(types.comma);
        }
      } while (!this.isRelational(">"));

      this.expectRelational(">");
      this.state.inType = oldInType;
      return this.finishNode(node, "TypeParameterDeclaration");
    };

    _class.prototype.flowParseTypeParameterInstantiation = function flowParseTypeParameterInstantiation() {
      var node = this.startNode();
      var oldInType = this.state.inType;
      node.params = [];
      this.state.inType = true;
      this.expectRelational("<");

      while (!this.isRelational(">")) {
        node.params.push(this.flowParseType());

        if (!this.isRelational(">")) {
          this.expect(types.comma);
        }
      }

      this.expectRelational(">");
      this.state.inType = oldInType;
      return this.finishNode(node, "TypeParameterInstantiation");
    };

    _class.prototype.flowParseObjectPropertyKey = function flowParseObjectPropertyKey() {
      return this.match(types.num) || this.match(types.string) ? this.parseExprAtom() : this.parseIdentifier(true);
    };

    _class.prototype.flowParseObjectTypeIndexer = function flowParseObjectTypeIndexer(node, isStatic, variance) {
      node.static = isStatic;
      this.expect(types.bracketL);

      if (this.lookahead().type === types.colon) {
        node.id = this.flowParseObjectPropertyKey();
        node.key = this.flowParseTypeInitialiser();
      } else {
        node.id = null;
        node.key = this.flowParseType();
      }

      this.expect(types.bracketR);
      node.value = this.flowParseTypeInitialiser();
      node.variance = variance;
      return this.finishNode(node, "ObjectTypeIndexer");
    };

    _class.prototype.flowParseObjectTypeMethodish = function flowParseObjectTypeMethodish(node) {
      node.params = [];
      node.rest = null;
      node.typeParameters = null;

      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      }

      this.expect(types.parenL);

      while (!this.match(types.parenR) && !this.match(types.ellipsis)) {
        node.params.push(this.flowParseFunctionTypeParam());

        if (!this.match(types.parenR)) {
          this.expect(types.comma);
        }
      }

      if (this.eat(types.ellipsis)) {
        node.rest = this.flowParseFunctionTypeParam();
      }

      this.expect(types.parenR);
      node.returnType = this.flowParseTypeInitialiser();
      return this.finishNode(node, "FunctionTypeAnnotation");
    };

    _class.prototype.flowParseObjectTypeCallProperty = function flowParseObjectTypeCallProperty(node, isStatic) {
      var valueNode = this.startNode();
      node.static = isStatic;
      node.value = this.flowParseObjectTypeMethodish(valueNode);
      return this.finishNode(node, "ObjectTypeCallProperty");
    };

    _class.prototype.flowParseObjectType = function flowParseObjectType(allowStatic, allowExact, allowSpread) {
      var oldInType = this.state.inType;
      this.state.inType = true;
      var nodeStart = this.startNode();
      nodeStart.callProperties = [];
      nodeStart.properties = [];
      nodeStart.indexers = [];
      var endDelim = void 0;
      var exact = void 0;

      if (allowExact && this.match(types.braceBarL)) {
        this.expect(types.braceBarL);
        endDelim = types.braceBarR;
        exact = true;
      } else {
        this.expect(types.braceL);
        endDelim = types.braceR;
        exact = false;
      }

      nodeStart.exact = exact;

      while (!this.match(endDelim)) {
        var isStatic = false;
        var node = this.startNode();

        if (allowStatic && this.isContextual("static") && this.lookahead().type !== types.colon) {
          this.next();
          isStatic = true;
        }

        var variance = this.flowParseVariance();

        if (this.match(types.bracketL)) {
          nodeStart.indexers.push(this.flowParseObjectTypeIndexer(node, isStatic, variance));
        } else if (this.match(types.parenL) || this.isRelational("<")) {
          if (variance) {
            this.unexpected(variance.start);
          }

          nodeStart.callProperties.push(this.flowParseObjectTypeCallProperty(node, isStatic));
        } else {
          var kind = "init";

          if (this.isContextual("get") || this.isContextual("set")) {
            var lookahead = this.lookahead();

            if (lookahead.type === types.name || lookahead.type === types.string || lookahead.type === types.num) {
              kind = this.state.value;
              this.next();
            }
          }

          nodeStart.properties.push(this.flowParseObjectTypeProperty(node, isStatic, variance, kind, allowSpread));
        }

        this.flowObjectTypeSemicolon();
      }

      this.expect(endDelim);
      var out = this.finishNode(nodeStart, "ObjectTypeAnnotation");
      this.state.inType = oldInType;
      return out;
    };

    _class.prototype.flowParseObjectTypeProperty = function flowParseObjectTypeProperty(node, isStatic, variance, kind, allowSpread) {
      if (this.match(types.ellipsis)) {
        if (!allowSpread) {
          this.unexpected(null, "Spread operator cannot appear in class or interface definitions");
        }

        if (variance) {
          this.unexpected(variance.start, "Spread properties cannot have variance");
        }

        this.expect(types.ellipsis);
        node.argument = this.flowParseType();
        return this.finishNode(node, "ObjectTypeSpreadProperty");
      } else {
        node.key = this.flowParseObjectPropertyKey();
        node.static = isStatic;
        node.kind = kind;
        var optional = false;

        if (this.isRelational("<") || this.match(types.parenL)) {
          // This is a method property
          if (variance) {
            this.unexpected(variance.start);
          }

          node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.start, node.loc.start));
          if (kind === "get" || kind === "set") this.flowCheckGetterSetterParamCount(node);
        } else {
          if (kind !== "init") this.unexpected();

          if (this.eat(types.question)) {
            optional = true;
          }

          node.value = this.flowParseTypeInitialiser();
          node.variance = variance;
        }

        node.optional = optional;
        return this.finishNode(node, "ObjectTypeProperty");
      }
    }; // This is similar to checkGetterSetterParamCount, but as
    // babylon uses non estree properties we cannot reuse it here


    _class.prototype.flowCheckGetterSetterParamCount = function flowCheckGetterSetterParamCount(property) {
      var paramCount = property.kind === "get" ? 0 : 1;

      if (property.value.params.length !== paramCount) {
        var start = property.start;

        if (property.kind === "get") {
          this.raise(start, "getter should have no params");
        } else {
          this.raise(start, "setter should have exactly one param");
        }
      }
    };

    _class.prototype.flowObjectTypeSemicolon = function flowObjectTypeSemicolon() {
      if (!this.eat(types.semi) && !this.eat(types.comma) && !this.match(types.braceR) && !this.match(types.braceBarR)) {
        this.unexpected();
      }
    };

    _class.prototype.flowParseQualifiedTypeIdentifier = function flowParseQualifiedTypeIdentifier(startPos, startLoc, id) {
      startPos = startPos || this.state.start;
      startLoc = startLoc || this.state.startLoc;
      var node = id || this.parseIdentifier();

      while (this.eat(types.dot)) {
        var node2 = this.startNodeAt(startPos, startLoc);
        node2.qualification = node;
        node2.id = this.parseIdentifier();
        node = this.finishNode(node2, "QualifiedTypeIdentifier");
      }

      return node;
    };

    _class.prototype.flowParseGenericType = function flowParseGenericType(startPos, startLoc, id) {
      var node = this.startNodeAt(startPos, startLoc);
      node.typeParameters = null;
      node.id = this.flowParseQualifiedTypeIdentifier(startPos, startLoc, id);

      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterInstantiation();
      }

      return this.finishNode(node, "GenericTypeAnnotation");
    };

    _class.prototype.flowParseTypeofType = function flowParseTypeofType() {
      var node = this.startNode();
      this.expect(types._typeof);
      node.argument = this.flowParsePrimaryType();
      return this.finishNode(node, "TypeofTypeAnnotation");
    };

    _class.prototype.flowParseTupleType = function flowParseTupleType() {
      var node = this.startNode();
      node.types = [];
      this.expect(types.bracketL); // We allow trailing commas

      while (this.state.pos < this.input.length && !this.match(types.bracketR)) {
        node.types.push(this.flowParseType());
        if (this.match(types.bracketR)) break;
        this.expect(types.comma);
      }

      this.expect(types.bracketR);
      return this.finishNode(node, "TupleTypeAnnotation");
    };

    _class.prototype.flowParseFunctionTypeParam = function flowParseFunctionTypeParam() {
      var name = null;
      var optional = false;
      var typeAnnotation = null;
      var node = this.startNode();
      var lh = this.lookahead();

      if (lh.type === types.colon || lh.type === types.question) {
        name = this.parseIdentifier();

        if (this.eat(types.question)) {
          optional = true;
        }

        typeAnnotation = this.flowParseTypeInitialiser();
      } else {
        typeAnnotation = this.flowParseType();
      }

      node.name = name;
      node.optional = optional;
      node.typeAnnotation = typeAnnotation;
      return this.finishNode(node, "FunctionTypeParam");
    };

    _class.prototype.reinterpretTypeAsFunctionTypeParam = function reinterpretTypeAsFunctionTypeParam(type) {
      var node = this.startNodeAt(type.start, type.loc.start);
      node.name = null;
      node.optional = false;
      node.typeAnnotation = type;
      return this.finishNode(node, "FunctionTypeParam");
    };

    _class.prototype.flowParseFunctionTypeParams = function flowParseFunctionTypeParams(params) {
      if (params === void 0) {
        params = [];
      }

      var rest = null;

      while (!this.match(types.parenR) && !this.match(types.ellipsis)) {
        params.push(this.flowParseFunctionTypeParam());

        if (!this.match(types.parenR)) {
          this.expect(types.comma);
        }
      }

      if (this.eat(types.ellipsis)) {
        rest = this.flowParseFunctionTypeParam();
      }

      return {
        params: params,
        rest: rest
      };
    };

    _class.prototype.flowIdentToTypeAnnotation = function flowIdentToTypeAnnotation(startPos, startLoc, node, id) {
      switch (id.name) {
        case "any":
          return this.finishNode(node, "AnyTypeAnnotation");

        case "void":
          return this.finishNode(node, "VoidTypeAnnotation");

        case "bool":
        case "boolean":
          return this.finishNode(node, "BooleanTypeAnnotation");

        case "mixed":
          return this.finishNode(node, "MixedTypeAnnotation");

        case "empty":
          return this.finishNode(node, "EmptyTypeAnnotation");

        case "number":
          return this.finishNode(node, "NumberTypeAnnotation");

        case "string":
          return this.finishNode(node, "StringTypeAnnotation");

        default:
          return this.flowParseGenericType(startPos, startLoc, id);
      }
    }; // The parsing of types roughly parallels the parsing of expressions, and
    // primary types are kind of like primary expressions...they're the
    // primitives with which other types are constructed.


    _class.prototype.flowParsePrimaryType = function flowParsePrimaryType() {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var node = this.startNode();
      var tmp = void 0;
      var type = void 0;
      var isGroupedType = false;
      var oldNoAnonFunctionType = this.state.noAnonFunctionType;

      switch (this.state.type) {
        case types.name:
          return this.flowIdentToTypeAnnotation(startPos, startLoc, node, this.parseIdentifier());

        case types.braceL:
          return this.flowParseObjectType(false, false, true);

        case types.braceBarL:
          return this.flowParseObjectType(false, true, true);

        case types.bracketL:
          return this.flowParseTupleType();

        case types.relational:
          if (this.state.value === "<") {
            node.typeParameters = this.flowParseTypeParameterDeclaration();
            this.expect(types.parenL);
            tmp = this.flowParseFunctionTypeParams();
            node.params = tmp.params;
            node.rest = tmp.rest;
            this.expect(types.parenR);
            this.expect(types.arrow);
            node.returnType = this.flowParseType();
            return this.finishNode(node, "FunctionTypeAnnotation");
          }

          break;

        case types.parenL:
          this.next(); // Check to see if this is actually a grouped type

          if (!this.match(types.parenR) && !this.match(types.ellipsis)) {
            if (this.match(types.name)) {
              var token = this.lookahead().type;
              isGroupedType = token !== types.question && token !== types.colon;
            } else {
              isGroupedType = true;
            }
          }

          if (isGroupedType) {
            this.state.noAnonFunctionType = false;
            type = this.flowParseType();
            this.state.noAnonFunctionType = oldNoAnonFunctionType; // A `,` or a `) =>` means this is an anonymous function type

            if (this.state.noAnonFunctionType || !(this.match(types.comma) || this.match(types.parenR) && this.lookahead().type === types.arrow)) {
              this.expect(types.parenR);
              return type;
            } else {
              // Eat a comma if there is one
              this.eat(types.comma);
            }
          }

          if (type) {
            tmp = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(type)]);
          } else {
            tmp = this.flowParseFunctionTypeParams();
          }

          node.params = tmp.params;
          node.rest = tmp.rest;
          this.expect(types.parenR);
          this.expect(types.arrow);
          node.returnType = this.flowParseType();
          node.typeParameters = null;
          return this.finishNode(node, "FunctionTypeAnnotation");

        case types.string:
          return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");

        case types._true:
        case types._false:
          node.value = this.match(types._true);
          this.next();
          return this.finishNode(node, "BooleanLiteralTypeAnnotation");

        case types.plusMin:
          if (this.state.value === "-") {
            this.next();
            if (!this.match(types.num)) this.unexpected(null, "Unexpected token, expected number");
            return this.parseLiteral(-this.state.value, "NumberLiteralTypeAnnotation", node.start, node.loc.start);
          }

          this.unexpected();

        case types.num:
          return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");

        case types._null:
          this.next();
          return this.finishNode(node, "NullLiteralTypeAnnotation");

        case types._this:
          this.next();
          return this.finishNode(node, "ThisTypeAnnotation");

        case types.star:
          this.next();
          return this.finishNode(node, "ExistsTypeAnnotation");

        default:
          if (this.state.type.keyword === "typeof") {
            return this.flowParseTypeofType();
          }

      }

      throw this.unexpected();
    };

    _class.prototype.flowParsePostfixType = function flowParsePostfixType() {
      var startPos = this.state.start,
          startLoc = this.state.startLoc;
      var type = this.flowParsePrimaryType();

      while (!this.canInsertSemicolon() && this.match(types.bracketL)) {
        var node = this.startNodeAt(startPos, startLoc);
        node.elementType = type;
        this.expect(types.bracketL);
        this.expect(types.bracketR);
        type = this.finishNode(node, "ArrayTypeAnnotation");
      }

      return type;
    };

    _class.prototype.flowParsePrefixType = function flowParsePrefixType() {
      var node = this.startNode();

      if (this.eat(types.question)) {
        node.typeAnnotation = this.flowParsePrefixType();
        return this.finishNode(node, "NullableTypeAnnotation");
      } else {
        return this.flowParsePostfixType();
      }
    };

    _class.prototype.flowParseAnonFunctionWithoutParens = function flowParseAnonFunctionWithoutParens() {
      var param = this.flowParsePrefixType();

      if (!this.state.noAnonFunctionType && this.eat(types.arrow)) {
        // TODO: This should be a type error. Passing in a SourceLocation, and it expects a Position.
        var node = this.startNodeAt(param.start, param.loc.start);
        node.params = [this.reinterpretTypeAsFunctionTypeParam(param)];
        node.rest = null;
        node.returnType = this.flowParseType();
        node.typeParameters = null;
        return this.finishNode(node, "FunctionTypeAnnotation");
      }

      return param;
    };

    _class.prototype.flowParseIntersectionType = function flowParseIntersectionType() {
      var node = this.startNode();
      this.eat(types.bitwiseAND);
      var type = this.flowParseAnonFunctionWithoutParens();
      node.types = [type];

      while (this.eat(types.bitwiseAND)) {
        node.types.push(this.flowParseAnonFunctionWithoutParens());
      }

      return node.types.length === 1 ? type : this.finishNode(node, "IntersectionTypeAnnotation");
    };

    _class.prototype.flowParseUnionType = function flowParseUnionType() {
      var node = this.startNode();
      this.eat(types.bitwiseOR);
      var type = this.flowParseIntersectionType();
      node.types = [type];

      while (this.eat(types.bitwiseOR)) {
        node.types.push(this.flowParseIntersectionType());
      }

      return node.types.length === 1 ? type : this.finishNode(node, "UnionTypeAnnotation");
    };

    _class.prototype.flowParseType = function flowParseType() {
      var oldInType = this.state.inType;
      this.state.inType = true;
      var type = this.flowParseUnionType();
      this.state.inType = oldInType; // Ensure that a brace after a function generic type annotation is a
      // statement, except in arrow functions (noAnonFunctionType)

      this.state.exprAllowed = this.state.exprAllowed || this.state.noAnonFunctionType;
      return type;
    };

    _class.prototype.flowParseTypeAnnotation = function flowParseTypeAnnotation() {
      var node = this.startNode();
      node.typeAnnotation = this.flowParseTypeInitialiser();
      return this.finishNode(node, "TypeAnnotation");
    };

    _class.prototype.flowParseTypeAnnotatableIdentifier = function flowParseTypeAnnotatableIdentifier(allowPrimitiveOverride) {
      var ident = allowPrimitiveOverride ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();

      if (this.match(types.colon)) {
        ident.typeAnnotation = this.flowParseTypeAnnotation();
        this.finishNode(ident, ident.type);
      }

      return ident;
    };

    _class.prototype.typeCastToParameter = function typeCastToParameter(node) {
      node.expression.typeAnnotation = node.typeAnnotation;
      return this.finishNodeAt(node.expression, node.expression.type, node.typeAnnotation.end, node.typeAnnotation.loc.end);
    };

    _class.prototype.flowParseVariance = function flowParseVariance() {
      var variance = null;

      if (this.match(types.plusMin)) {
        variance = this.startNode();

        if (this.state.value === "+") {
          variance.kind = "plus";
        } else {
          variance.kind = "minus";
        }

        this.next();
        this.finishNode(variance, "Variance");
      }

      return variance;
    }; // ==================================
    // Overrides
    // ==================================


    _class.prototype.parseFunctionBody = function parseFunctionBody(node, allowExpressionBody) {
      var _this3 = this;

      if (allowExpressionBody) {
        return this.forwardNoArrowParamsConversionAt(node, function () {
          return _superClass.prototype.parseFunctionBody.call(_this3, node, true);
        });
      }

      return _superClass.prototype.parseFunctionBody.call(this, node, false);
    };

    _class.prototype.parseFunctionBodyAndFinish = function parseFunctionBodyAndFinish(node, type, allowExpressionBody) {
      // For arrow functions, `parseArrow` handles the return type itself.
      if (!allowExpressionBody && this.match(types.colon)) {
        var typeNode = this.startNode();

        var _flowParseTypeAndPred2 = this.flowParseTypeAndPredicateInitialiser(); // $FlowFixMe (destructuring not supported yet)


        typeNode.typeAnnotation = _flowParseTypeAndPred2[0]; // $FlowFixMe (destructuring not supported yet)

        node.predicate = _flowParseTypeAndPred2[1];
        node.returnType = typeNode.typeAnnotation ? this.finishNode(typeNode, "TypeAnnotation") : null;
      }

      _superClass.prototype.parseFunctionBodyAndFinish.call(this, node, type, allowExpressionBody);
    }; // interfaces


    _class.prototype.parseStatement = function parseStatement(declaration, topLevel) {
      // strict mode handling of `interface` since it's a reserved word
      if (this.state.strict && this.match(types.name) && this.state.value === "interface") {
        var node = this.startNode();
        this.next();
        return this.flowParseInterface(node);
      } else {
        return _superClass.prototype.parseStatement.call(this, declaration, topLevel);
      }
    }; // declares, interfaces and type aliases


    _class.prototype.parseExpressionStatement = function parseExpressionStatement(node, expr) {
      if (expr.type === "Identifier") {
        if (expr.name === "declare") {
          if (this.match(types._class) || this.match(types.name) || this.match(types._function) || this.match(types._var) || this.match(types._export)) {
            return this.flowParseDeclare(node);
          }
        } else if (this.match(types.name)) {
          if (expr.name === "interface") {
            return this.flowParseInterface(node);
          } else if (expr.name === "type") {
            return this.flowParseTypeAlias(node);
          } else if (expr.name === "opaque") {
            return this.flowParseOpaqueType(node, false);
          }
        }
      }

      return _superClass.prototype.parseExpressionStatement.call(this, node, expr);
    }; // export type


    _class.prototype.shouldParseExportDeclaration = function shouldParseExportDeclaration() {
      return this.isContextual("type") || this.isContextual("interface") || this.isContextual("opaque") || _superClass.prototype.shouldParseExportDeclaration.call(this);
    };

    _class.prototype.isExportDefaultSpecifier = function isExportDefaultSpecifier() {
      if (this.match(types.name) && (this.state.value === "type" || this.state.value === "interface" || this.state.value == "opaque")) {
        return false;
      }

      return _superClass.prototype.isExportDefaultSpecifier.call(this);
    };

    _class.prototype.parseConditional = function parseConditional(expr, noIn, startPos, startLoc, refNeedsArrowPos) {
      var _this4 = this;

      if (!this.match(types.question)) return expr; // only do the expensive clone if there is a question mark
      // and if we come from inside parens

      if (refNeedsArrowPos) {
        var _state = this.state.clone();

        try {
          return _superClass.prototype.parseConditional.call(this, expr, noIn, startPos, startLoc);
        } catch (err) {
          if (err instanceof SyntaxError) {
            this.state = _state;
            refNeedsArrowPos.start = err.pos || this.state.start;
            return expr;
          } else {
            // istanbul ignore next: no such error is expected
            throw err;
          }
        }
      }

      this.expect(types.question);
      var state = this.state.clone();
      var originalNoArrowAt = this.state.noArrowAt;
      var node = this.startNodeAt(startPos, startLoc);

      var _tryParseConditionalC = this.tryParseConditionalConsequent(),
          consequent = _tryParseConditionalC.consequent,
          failed = _tryParseConditionalC.failed;

      var _getArrowLikeExpressi = this.getArrowLikeExpressions(consequent),
          valid = _getArrowLikeExpressi[0],
          invalid = _getArrowLikeExpressi[1];

      if (failed || invalid.length > 0) {
        var noArrowAt = [].concat(originalNoArrowAt);

        if (invalid.length > 0) {
          this.state = state;
          this.state.noArrowAt = noArrowAt;

          for (var i = 0; i < invalid.length; i++) {
            noArrowAt.push(invalid[i].start);
          }

          var _tryParseConditionalC2 = this.tryParseConditionalConsequent();

          consequent = _tryParseConditionalC2.consequent;
          failed = _tryParseConditionalC2.failed;

          var _getArrowLikeExpressi2 = this.getArrowLikeExpressions(consequent);

          valid = _getArrowLikeExpressi2[0];
          invalid = _getArrowLikeExpressi2[1];
        }

        if (failed && valid.length > 1) {
          // if there are two or more possible correct ways of parsing, throw an
          // error.
          // e.g.   Source: a ? (b): c => (d): e => f
          //      Result 1: a ? b : (c => ((d): e => f))
          //      Result 2: a ? ((b): c => d) : (e => f)
          this.raise(state.start, "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.");
        }

        if (failed && valid.length === 1) {
          this.state = state;
          this.state.noArrowAt = noArrowAt.concat(valid[0].start);

          var _tryParseConditionalC3 = this.tryParseConditionalConsequent();

          consequent = _tryParseConditionalC3.consequent;
          failed = _tryParseConditionalC3.failed;
        }

        this.getArrowLikeExpressions(consequent, true);
      }

      this.state.noArrowAt = originalNoArrowAt;
      this.expect(types.colon);
      node.test = expr;
      node.consequent = consequent;
      node.alternate = this.forwardNoArrowParamsConversionAt(node, function () {
        return _this4.parseMaybeAssign(noIn, undefined, undefined, undefined);
      });
      return this.finishNode(node, "ConditionalExpression");
    };

    _class.prototype.tryParseConditionalConsequent = function tryParseConditionalConsequent() {
      this.state.noArrowParamsConversionAt.push(this.state.start);
      var consequent = this.parseMaybeAssign();
      var failed = !this.match(types.colon);
      this.state.noArrowParamsConversionAt.pop();
      return {
        consequent: consequent,
        failed: failed
      };
    }; // Given an expression, walks throught its arrow functions whose body is
    // an expression and throught conditional expressions. It returns every
    // function which has been parsed with a return type but could have been
    // parenthesized expressions.
    // These functions are separated into two arrays: one containing the ones
    // whose parameters can be converted to assignable lists, one containing the
    // others.


    _class.prototype.getArrowLikeExpressions = function getArrowLikeExpressions(node, disallowInvalid) {
      var _this5 = this;

      var stack = [node];
      var arrows = [];

      while (stack.length !== 0) {
        var _node = stack.pop();

        if (_node.type === "ArrowFunctionExpression") {
          if (_node.typeParameters || !_node.returnType) {
            // This is an arrow expression without ambiguity, so check its parameters
            this.toAssignableList( // node.params is Expression[] instead of $ReadOnlyArray<Pattern> because it
            // has not been converted yet.
            _node.params, true, "arrow function parameters"); // Use super's method to force the parameters to be checked

            _superClass.prototype.checkFunctionNameAndParams.call(this, _node, true);
          } else {
            arrows.push(_node);
          }

          stack.push(_node.body);
        } else if (_node.type === "ConditionalExpression") {
          stack.push(_node.consequent);
          stack.push(_node.alternate);
        }
      }

      if (disallowInvalid) {
        for (var i = 0; i < arrows.length; i++) {
          this.toAssignableList(node.params, true, "arrow function parameters");
        }

        return [arrows, []];
      }

      return partition(arrows, function (node) {
        try {
          _this5.toAssignableList(node.params, true, "arrow function parameters");

          return true;
        } catch (err) {
          return false;
        }
      });
    };

    _class.prototype.forwardNoArrowParamsConversionAt = function forwardNoArrowParamsConversionAt(node, parse) {
      var result = void 0;

      if (this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
        this.state.noArrowParamsConversionAt.push(this.state.start);
        result = parse();
        this.state.noArrowParamsConversionAt.pop();
      } else {
        result = parse();
      }

      return result;
    };

    _class.prototype.parseParenItem = function parseParenItem(node, startPos, startLoc) {
      node = _superClass.prototype.parseParenItem.call(this, node, startPos, startLoc);

      if (this.eat(types.question)) {
        node.optional = true;
      }

      if (this.match(types.colon)) {
        var typeCastNode = this.startNodeAt(startPos, startLoc);
        typeCastNode.expression = node;
        typeCastNode.typeAnnotation = this.flowParseTypeAnnotation();
        return this.finishNode(typeCastNode, "TypeCastExpression");
      }

      return node;
    };

    _class.prototype.parseExport = function parseExport(node) {
      node = _superClass.prototype.parseExport.call(this, node);

      if (node.type === "ExportNamedDeclaration" || node.type === "ExportAllDeclaration") {
        node.exportKind = node.exportKind || "value";
      }

      return node;
    };

    _class.prototype.parseExportDeclaration = function parseExportDeclaration(node) {
      if (this.isContextual("type")) {
        node.exportKind = "type";
        var declarationNode = this.startNode();
        this.next();

        if (this.match(types.braceL)) {
          // export type { foo, bar };
          node.specifiers = this.parseExportSpecifiers();
          this.parseExportFrom(node);
          return null;
        } else {
          // export type Foo = Bar;
          return this.flowParseTypeAlias(declarationNode);
        }
      } else if (this.isContextual("opaque")) {
        node.exportKind = "type";

        var _declarationNode = this.startNode();

        this.next(); // export opaque type Foo = Bar;

        return this.flowParseOpaqueType(_declarationNode, false);
      } else if (this.isContextual("interface")) {
        node.exportKind = "type";

        var _declarationNode2 = this.startNode();

        this.next();
        return this.flowParseInterface(_declarationNode2);
      } else {
        return _superClass.prototype.parseExportDeclaration.call(this, node);
      }
    };

    _class.prototype.shouldParseExportStar = function shouldParseExportStar() {
      return _superClass.prototype.shouldParseExportStar.call(this) || this.isContextual("type") && this.lookahead().type === types.star;
    };

    _class.prototype.parseExportStar = function parseExportStar(node, allowNamed) {
      if (this.eatContextual("type")) {
        node.exportKind = "type";
        allowNamed = false;
      }

      return _superClass.prototype.parseExportStar.call(this, node, allowNamed);
    };

    _class.prototype.parseClassId = function parseClassId(node, isStatement, optionalId) {
      _superClass.prototype.parseClassId.call(this, node, isStatement, optionalId);

      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      }
    }; // don't consider `void` to be a keyword as then it'll use the void token type
    // and set startExpr


    _class.prototype.isKeyword = function isKeyword(name) {
      if (this.state.inType && name === "void") {
        return false;
      } else {
        return _superClass.prototype.isKeyword.call(this, name);
      }
    }; // ensure that inside flow types, we bypass the jsx parser plugin


    _class.prototype.readToken = function readToken(code) {
      if (this.state.inType && (code === 62 || code === 60)) {
        return this.finishOp(types.relational, 1);
      } else {
        return _superClass.prototype.readToken.call(this, code);
      }
    };

    _class.prototype.toAssignable = function toAssignable(node, isBinding, contextDescription) {
      if (node.type === "TypeCastExpression") {
        return _superClass.prototype.toAssignable.call(this, this.typeCastToParameter(node), isBinding, contextDescription);
      } else {
        return _superClass.prototype.toAssignable.call(this, node, isBinding, contextDescription);
      }
    }; // turn type casts that we found in function parameter head into type annotated params


    _class.prototype.toAssignableList = function toAssignableList(exprList, isBinding, contextDescription) {
      for (var i = 0; i < exprList.length; i++) {
        var expr = exprList[i];

        if (expr && expr.type === "TypeCastExpression") {
          exprList[i] = this.typeCastToParameter(expr);
        }
      }

      return _superClass.prototype.toAssignableList.call(this, exprList, isBinding, contextDescription);
    }; // this is a list of nodes, from something like a call expression, we need to filter the
    // type casts that we've found that are illegal in this context


    _class.prototype.toReferencedList = function toReferencedList(exprList) {
      for (var i = 0; i < exprList.length; i++) {
        var expr = exprList[i];

        if (expr && expr._exprListItem && expr.type === "TypeCastExpression") {
          this.raise(expr.start, "Unexpected type cast");
        }
      }

      return exprList;
    }; // parse an item inside a expression list eg. `(NODE, NODE)` where NODE represents
    // the position where this function is called


    _class.prototype.parseExprListItem = function parseExprListItem(allowEmpty, refShorthandDefaultPos, refNeedsArrowPos) {
      var container = this.startNode();

      var node = _superClass.prototype.parseExprListItem.call(this, allowEmpty, refShorthandDefaultPos, refNeedsArrowPos);

      if (this.match(types.colon)) {
        container._exprListItem = true;
        container.expression = node;
        container.typeAnnotation = this.flowParseTypeAnnotation();
        return this.finishNode(container, "TypeCastExpression");
      } else {
        return node;
      }
    };

    _class.prototype.checkLVal = function checkLVal(expr, isBinding, checkClashes, contextDescription) {
      if (expr.type !== "TypeCastExpression") {
        return _superClass.prototype.checkLVal.call(this, expr, isBinding, checkClashes, contextDescription);
      }
    }; // parse class property type annotations


    _class.prototype.parseClassProperty = function parseClassProperty(node) {
      if (this.match(types.colon)) {
        node.typeAnnotation = this.flowParseTypeAnnotation();
      }

      return _superClass.prototype.parseClassProperty.call(this, node);
    }; // determine whether or not we're currently in the position where a class method would appear


    _class.prototype.isClassMethod = function isClassMethod() {
      return this.isRelational("<") || _superClass.prototype.isClassMethod.call(this);
    }; // determine whether or not we're currently in the position where a class property would appear


    _class.prototype.isClassProperty = function isClassProperty() {
      return this.match(types.colon) || _superClass.prototype.isClassProperty.call(this);
    };

    _class.prototype.isNonstaticConstructor = function isNonstaticConstructor(method) {
      return !this.match(types.colon) && _superClass.prototype.isNonstaticConstructor.call(this, method);
    }; // parse type parameters for class methods


    _class.prototype.pushClassMethod = function pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor) {
      if (method.variance) {
        this.unexpected(method.variance.start);
      }

      delete method.variance;

      if (this.isRelational("<")) {
        method.typeParameters = this.flowParseTypeParameterDeclaration();
      }

      _superClass.prototype.pushClassMethod.call(this, classBody, method, isGenerator, isAsync, isConstructor);
    };

    _class.prototype.pushClassPrivateMethod = function pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
      if (method.variance) {
        this.unexpected(method.variance.start);
      }

      delete method.variance;

      if (this.isRelational("<")) {
        method.typeParameters = this.flowParseTypeParameterDeclaration();
      }

      _superClass.prototype.pushClassPrivateMethod.call(this, classBody, method, isGenerator, isAsync);
    }; // parse a the super class type parameters and implements


    _class.prototype.parseClassSuper = function parseClassSuper(node) {
      _superClass.prototype.parseClassSuper.call(this, node);

      if (node.superClass && this.isRelational("<")) {
        node.superTypeParameters = this.flowParseTypeParameterInstantiation();
      }

      if (this.isContextual("implements")) {
        this.next();
        var implemented = node.implements = [];

        do {
          var _node2 = this.startNode();

          _node2.id = this.parseIdentifier();

          if (this.isRelational("<")) {
            _node2.typeParameters = this.flowParseTypeParameterInstantiation();
          } else {
            _node2.typeParameters = null;
          }

          implemented.push(this.finishNode(_node2, "ClassImplements"));
        } while (this.eat(types.comma));
      }
    };

    _class.prototype.parsePropertyName = function parsePropertyName(node) {
      var variance = this.flowParseVariance();

      var key = _superClass.prototype.parsePropertyName.call(this, node); // $FlowIgnore ("variance" not defined on TsNamedTypeElementBase)


      node.variance = variance;
      return key;
    }; // parse type parameters for object method shorthand


    _class.prototype.parseObjPropValue = function parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, refShorthandDefaultPos) {
      if (prop.variance) {
        this.unexpected(prop.variance.start);
      }

      delete prop.variance;
      var typeParameters = void 0; // method shorthand

      if (this.isRelational("<")) {
        typeParameters = this.flowParseTypeParameterDeclaration();
        if (!this.match(types.parenL)) this.unexpected();
      }

      _superClass.prototype.parseObjPropValue.call(this, prop, startPos, startLoc, isGenerator, isAsync, isPattern, refShorthandDefaultPos); // add typeParameters if we found them


      if (typeParameters) {
        // $FlowFixMe (trying to set '.typeParameters' on an expression)
        (prop.value || prop).typeParameters = typeParameters;
      }
    };

    _class.prototype.parseAssignableListItemTypes = function parseAssignableListItemTypes(param) {
      if (this.eat(types.question)) {
        if (param.type !== "Identifier") {
          throw this.raise(param.start, "A binding pattern parameter cannot be optional in an implementation signature.");
        }

        param.optional = true;
      }

      if (this.match(types.colon)) {
        param.typeAnnotation = this.flowParseTypeAnnotation();
      }

      this.finishNode(param, param.type);
      return param;
    };

    _class.prototype.parseMaybeDefault = function parseMaybeDefault(startPos, startLoc, left) {
      var node = _superClass.prototype.parseMaybeDefault.call(this, startPos, startLoc, left);

      if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
        this.raise(node.typeAnnotation.start, "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`");
      }

      return node;
    }; // parse typeof and type imports


    _class.prototype.parseImportSpecifiers = function parseImportSpecifiers(node) {
      node.importKind = "value";
      var kind = null;

      if (this.match(types._typeof)) {
        kind = "typeof";
      } else if (this.isContextual("type")) {
        kind = "type";
      }

      if (kind) {
        var lh = this.lookahead();

        if (lh.type === types.name && lh.value !== "from" || lh.type === types.braceL || lh.type === types.star) {
          this.next();
          node.importKind = kind;
        }
      }

      _superClass.prototype.parseImportSpecifiers.call(this, node);
    }; // parse import-type/typeof shorthand


    _class.prototype.parseImportSpecifier = function parseImportSpecifier(node) {
      var specifier = this.startNode();
      var firstIdentLoc = this.state.start;
      var firstIdent = this.parseIdentifier(true);
      var specifierTypeKind = null;

      if (firstIdent.name === "type") {
        specifierTypeKind = "type";
      } else if (firstIdent.name === "typeof") {
        specifierTypeKind = "typeof";
      }

      var isBinding = false;

      if (this.isContextual("as")) {
        var as_ident = this.parseIdentifier(true);

        if (specifierTypeKind !== null && !this.match(types.name) && !this.state.type.keyword) {
          // `import {type as ,` or `import {type as }`
          specifier.imported = as_ident;
          specifier.importKind = specifierTypeKind;
          specifier.local = as_ident.__clone();
        } else {
          // `import {type as foo`
          specifier.imported = firstIdent;
          specifier.importKind = null;
          specifier.local = this.parseIdentifier();
        }
      } else if (specifierTypeKind !== null && (this.match(types.name) || this.state.type.keyword)) {
        // `import {type foo`
        specifier.imported = this.parseIdentifier(true);
        specifier.importKind = specifierTypeKind;

        if (this.eatContextual("as")) {
          specifier.local = this.parseIdentifier();
        } else {
          isBinding = true;
          specifier.local = specifier.imported.__clone();
        }
      } else {
        isBinding = true;
        specifier.imported = firstIdent;
        specifier.importKind = null;
        specifier.local = specifier.imported.__clone();
      }

      if ((node.importKind === "type" || node.importKind === "typeof") && (specifier.importKind === "type" || specifier.importKind === "typeof")) {
        this.raise(firstIdentLoc, "`The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements`");
      }

      if (isBinding) this.checkReservedWord(specifier.local.name, specifier.start, true, true);
      this.checkLVal(specifier.local, true, undefined, "import specifier");
      node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
    }; // parse function type parameters - function foo<T>() {}


    _class.prototype.parseFunctionParams = function parseFunctionParams(node) {
      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      }

      _superClass.prototype.parseFunctionParams.call(this, node);
    }; // parse flow type annotations on variable declarator heads - let foo: string = bar


    _class.prototype.parseVarHead = function parseVarHead(decl) {
      _superClass.prototype.parseVarHead.call(this, decl);

      if (this.match(types.colon)) {
        decl.id.typeAnnotation = this.flowParseTypeAnnotation();
        this.finishNode(decl.id, decl.id.type);
      }
    }; // parse the return type of an async arrow function - let foo = (async (): number => {});


    _class.prototype.parseAsyncArrowFromCallExpression = function parseAsyncArrowFromCallExpression(node, call) {
      if (this.match(types.colon)) {
        var oldNoAnonFunctionType = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = true;
        node.returnType = this.flowParseTypeAnnotation();
        this.state.noAnonFunctionType = oldNoAnonFunctionType;
      }

      return _superClass.prototype.parseAsyncArrowFromCallExpression.call(this, node, call);
    }; // todo description


    _class.prototype.shouldParseAsyncArrow = function shouldParseAsyncArrow() {
      return this.match(types.colon) || _superClass.prototype.shouldParseAsyncArrow.call(this);
    }; // We need to support type parameter declarations for arrow functions. This
    // is tricky. There are three situations we need to handle
    //
    // 1. This is either JSX or an arrow function. We'll try JSX first. If that
    //    fails, we'll try an arrow function. If that fails, we'll throw the JSX
    //    error.
    // 2. This is an arrow function. We'll parse the type parameter declaration,
    //    parse the rest, make sure the rest is an arrow function, and go from
    //    there
    // 3. This is neither. Just call the super method


    _class.prototype.parseMaybeAssign = function parseMaybeAssign(noIn, refShorthandDefaultPos, afterLeftParse, refNeedsArrowPos) {
      var _this6 = this;

      var jsxError = null;

      if (types.jsxTagStart && this.match(types.jsxTagStart)) {
        var state = this.state.clone();

        try {
          return _superClass.prototype.parseMaybeAssign.call(this, noIn, refShorthandDefaultPos, afterLeftParse, refNeedsArrowPos);
        } catch (err) {
          if (err instanceof SyntaxError) {
            this.state = state; // Remove `tc.j_expr` and `tc.j_oTag` from context added
            // by parsing `jsxTagStart` to stop the JSX plugin from
            // messing with the tokens

            this.state.context.length -= 2;
            jsxError = err;
          } else {
            // istanbul ignore next: no such error is expected
            throw err;
          }
        }
      }

      if (jsxError != null || this.isRelational("<")) {
        var arrowExpression = void 0;
        var typeParameters = void 0;

        try {
          typeParameters = this.flowParseTypeParameterDeclaration();
          arrowExpression = this.forwardNoArrowParamsConversionAt(typeParameters, function () {
            return _superClass.prototype.parseMaybeAssign.call(_this6, noIn, refShorthandDefaultPos, afterLeftParse, refNeedsArrowPos);
          });
          arrowExpression.typeParameters = typeParameters;
          this.resetStartLocationFromNode(arrowExpression, typeParameters);
        } catch (err) {
          throw jsxError || err;
        }

        if (arrowExpression.type === "ArrowFunctionExpression") {
          return arrowExpression;
        } else if (jsxError != null) {
          throw jsxError;
        } else {
          this.raise(typeParameters.start, "Expected an arrow function after this type parameter declaration");
        }
      }

      return _superClass.prototype.parseMaybeAssign.call(this, noIn, refShorthandDefaultPos, afterLeftParse, refNeedsArrowPos);
    }; // handle return types for arrow functions


    _class.prototype.parseArrow = function parseArrow(node) {
      if (this.match(types.colon)) {
        var state = this.state.clone();

        try {
          var oldNoAnonFunctionType = this.state.noAnonFunctionType;
          this.state.noAnonFunctionType = true;
          var typeNode = this.startNode();

          var _flowParseTypeAndPred3 = this.flowParseTypeAndPredicateInitialiser(); // $FlowFixMe (destructuring not supported yet)


          typeNode.typeAnnotation = _flowParseTypeAndPred3[0]; // $FlowFixMe (destructuring not supported yet)

          node.predicate = _flowParseTypeAndPred3[1];
          this.state.noAnonFunctionType = oldNoAnonFunctionType;
          if (this.canInsertSemicolon()) this.unexpected();
          if (!this.match(types.arrow)) this.unexpected(); // assign after it is clear it is an arrow

          node.returnType = typeNode.typeAnnotation ? this.finishNode(typeNode, "TypeAnnotation") : null;
        } catch (err) {
          if (err instanceof SyntaxError) {
            this.state = state;
          } else {
            // istanbul ignore next: no such error is expected
            throw err;
          }
        }
      }

      return _superClass.prototype.parseArrow.call(this, node);
    };

    _class.prototype.shouldParseArrow = function shouldParseArrow() {
      return this.match(types.colon) || _superClass.prototype.shouldParseArrow.call(this);
    };

    _class.prototype.setArrowFunctionParameters = function setArrowFunctionParameters(node, params) {
      if (this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
        node.params = params;
      } else {
        _superClass.prototype.setArrowFunctionParameters.call(this, node, params);
      }
    };

    _class.prototype.checkFunctionNameAndParams = function checkFunctionNameAndParams(node, isArrowFunction) {
      if (isArrowFunction && this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
        return;
      }

      return _superClass.prototype.checkFunctionNameAndParams.call(this, node, isArrowFunction);
    };

    _class.prototype.parseParenAndDistinguishExpression = function parseParenAndDistinguishExpression(canBeArrow) {
      return _superClass.prototype.parseParenAndDistinguishExpression.call(this, canBeArrow && this.state.noArrowAt.indexOf(this.state.start) === -1);
    };

    _class.prototype.parseSubscripts = function parseSubscripts(base, startPos, startLoc, noCalls) {
      if (base.type === "Identifier" && base.name === "async" && this.state.noArrowAt.indexOf(startPos) !== -1) {
        this.next();
        var node = this.startNodeAt(startPos, startLoc);
        node.callee = base;
        node.arguments = this.parseCallExpressionArguments(types.parenR, false);
        base = this.finishNode(node, "CallExpression");
      }

      return _superClass.prototype.parseSubscripts.call(this, base, startPos, startLoc, noCalls);
    };

    return _class;
  }(superClass);
};

var entities = {
  quot: "\"",
  amp: "&",
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: "\xA0",
  iexcl: "\xA1",
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  brvbar: "\xA6",
  sect: "\xA7",
  uml: "\xA8",
  copy: "\xA9",
  ordf: "\xAA",
  laquo: "\xAB",
  not: "\xAC",
  shy: "\xAD",
  reg: "\xAE",
  macr: "\xAF",
  deg: "\xB0",
  plusmn: "\xB1",
  sup2: "\xB2",
  sup3: "\xB3",
  acute: "\xB4",
  micro: "\xB5",
  para: "\xB6",
  middot: "\xB7",
  cedil: "\xB8",
  sup1: "\xB9",
  ordm: "\xBA",
  raquo: "\xBB",
  frac14: "\xBC",
  frac12: "\xBD",
  frac34: "\xBE",
  iquest: "\xBF",
  Agrave: "\xC0",
  Aacute: "\xC1",
  Acirc: "\xC2",
  Atilde: "\xC3",
  Auml: "\xC4",
  Aring: "\xC5",
  AElig: "\xC6",
  Ccedil: "\xC7",
  Egrave: "\xC8",
  Eacute: "\xC9",
  Ecirc: "\xCA",
  Euml: "\xCB",
  Igrave: "\xCC",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Iuml: "\xCF",
  ETH: "\xD0",
  Ntilde: "\xD1",
  Ograve: "\xD2",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Otilde: "\xD5",
  Ouml: "\xD6",
  times: "\xD7",
  Oslash: "\xD8",
  Ugrave: "\xD9",
  Uacute: "\xDA",
  Ucirc: "\xDB",
  Uuml: "\xDC",
  Yacute: "\xDD",
  THORN: "\xDE",
  szlig: "\xDF",
  agrave: "\xE0",
  aacute: "\xE1",
  acirc: "\xE2",
  atilde: "\xE3",
  auml: "\xE4",
  aring: "\xE5",
  aelig: "\xE6",
  ccedil: "\xE7",
  egrave: "\xE8",
  eacute: "\xE9",
  ecirc: "\xEA",
  euml: "\xEB",
  igrave: "\xEC",
  iacute: "\xED",
  icirc: "\xEE",
  iuml: "\xEF",
  eth: "\xF0",
  ntilde: "\xF1",
  ograve: "\xF2",
  oacute: "\xF3",
  ocirc: "\xF4",
  otilde: "\xF5",
  ouml: "\xF6",
  divide: "\xF7",
  oslash: "\xF8",
  ugrave: "\xF9",
  uacute: "\xFA",
  ucirc: "\xFB",
  uuml: "\xFC",
  yacute: "\xFD",
  thorn: "\xFE",
  yuml: "\xFF",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  fnof: "\u0192",
  circ: "\u02C6",
  tilde: "\u02DC",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  bull: "\u2022",
  hellip: "\u2026",
  permil: "\u2030",
  prime: "\u2032",
  Prime: "\u2033",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  oline: "\u203E",
  frasl: "\u2044",
  euro: "\u20AC",
  image: "\u2111",
  weierp: "\u2118",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666"
};
var HEX_NUMBER = /^[\da-fA-F]+$/;
var DECIMAL_NUMBER = /^\d+$/;
types$1.j_oTag = new TokContext("<tag", false);
types$1.j_cTag = new TokContext("</tag", false);
types$1.j_expr = new TokContext("<tag>...</tag>", true, true);
types.jsxName = new TokenType("jsxName");
types.jsxText = new TokenType("jsxText", {
  beforeExpr: true
});
types.jsxTagStart = new TokenType("jsxTagStart", {
  startsExpr: true
});
types.jsxTagEnd = new TokenType("jsxTagEnd");

types.jsxTagStart.updateContext = function () {
  this.state.context.push(types$1.j_expr); // treat as beginning of JSX expression

  this.state.context.push(types$1.j_oTag); // start opening tag context

  this.state.exprAllowed = false;
};

types.jsxTagEnd.updateContext = function (prevType) {
  var out = this.state.context.pop();

  if (out === types$1.j_oTag && prevType === types.slash || out === types$1.j_cTag) {
    this.state.context.pop();
    this.state.exprAllowed = this.curContext() === types$1.j_expr;
  } else {
    this.state.exprAllowed = true;
  }
}; // Transforms JSX element name to string.


function getQualifiedJSXName(object) {
  if (object.type === "JSXIdentifier") {
    return object.name;
  }

  if (object.type === "JSXNamespacedName") {
    return object.namespace.name + ":" + object.name.name;
  }

  if (object.type === "JSXMemberExpression") {
    return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
  } // istanbul ignore next


  throw new Error("Node had unexpected type: " + object.type);
}

var jsxPlugin = function jsxPlugin(superClass) {
  return function (_superClass) {
    inheritsLoose(_class, _superClass);

    function _class() {
      return _superClass.apply(this, arguments) || this;
    } // Reads inline JSX contents token.


    _class.prototype.jsxReadToken = function jsxReadToken() {
      var out = "";
      var chunkStart = this.state.pos;

      for (;;) {
        if (this.state.pos >= this.input.length) {
          this.raise(this.state.start, "Unterminated JSX contents");
        }

        var ch = this.input.charCodeAt(this.state.pos);

        switch (ch) {
          case 60: // "<"

          case 123:
            // "{"
            if (this.state.pos === this.state.start) {
              if (ch === 60 && this.state.exprAllowed) {
                ++this.state.pos;
                return this.finishToken(types.jsxTagStart);
              }

              return this.getTokenFromCode(ch);
            }

            out += this.input.slice(chunkStart, this.state.pos);
            return this.finishToken(types.jsxText, out);

          case 38:
            // "&"
            out += this.input.slice(chunkStart, this.state.pos);
            out += this.jsxReadEntity();
            chunkStart = this.state.pos;
            break;

          default:
            if (isNewLine(ch)) {
              out += this.input.slice(chunkStart, this.state.pos);
              out += this.jsxReadNewLine(true);
              chunkStart = this.state.pos;
            } else {
              ++this.state.pos;
            }

        }
      }
    };

    _class.prototype.jsxReadNewLine = function jsxReadNewLine(normalizeCRLF) {
      var ch = this.input.charCodeAt(this.state.pos);
      var out = void 0;
      ++this.state.pos;

      if (ch === 13 && this.input.charCodeAt(this.state.pos) === 10) {
        ++this.state.pos;
        out = normalizeCRLF ? "\n" : "\r\n";
      } else {
        out = String.fromCharCode(ch);
      }

      ++this.state.curLine;
      this.state.lineStart = this.state.pos;
      return out;
    };

    _class.prototype.jsxReadString = function jsxReadString(quote) {
      var out = "";
      var chunkStart = ++this.state.pos;

      for (;;) {
        if (this.state.pos >= this.input.length) {
          this.raise(this.state.start, "Unterminated string constant");
        }

        var ch = this.input.charCodeAt(this.state.pos);
        if (ch === quote) break;

        if (ch === 38) {
          // "&"
          out += this.input.slice(chunkStart, this.state.pos);
          out += this.jsxReadEntity();
          chunkStart = this.state.pos;
        } else if (isNewLine(ch)) {
          out += this.input.slice(chunkStart, this.state.pos);
          out += this.jsxReadNewLine(false);
          chunkStart = this.state.pos;
        } else {
          ++this.state.pos;
        }
      }

      out += this.input.slice(chunkStart, this.state.pos++);
      return this.finishToken(types.string, out);
    };

    _class.prototype.jsxReadEntity = function jsxReadEntity() {
      var str = "";
      var count = 0;
      var entity = void 0;
      var ch = this.input[this.state.pos];
      var startPos = ++this.state.pos;

      while (this.state.pos < this.input.length && count++ < 10) {
        ch = this.input[this.state.pos++];

        if (ch === ";") {
          if (str[0] === "#") {
            if (str[1] === "x") {
              str = str.substr(2);
              if (HEX_NUMBER.test(str)) entity = String.fromCodePoint(parseInt(str, 16));
            } else {
              str = str.substr(1);
              if (DECIMAL_NUMBER.test(str)) entity = String.fromCodePoint(parseInt(str, 10));
            }
          } else {
            entity = entities[str];
          }

          break;
        }

        str += ch;
      }

      if (!entity) {
        this.state.pos = startPos;
        return "&";
      }

      return entity;
    }; // Read a JSX identifier (valid tag or attribute name).
    //
    // Optimized version since JSX identifiers can"t contain
    // escape characters and so can be read as single slice.
    // Also assumes that first character was already checked
    // by isIdentifierStart in readToken.


    _class.prototype.jsxReadWord = function jsxReadWord() {
      var ch = void 0;
      var start = this.state.pos;

      do {
        ch = this.input.charCodeAt(++this.state.pos);
      } while (isIdentifierChar(ch) || ch === 45); // "-"


      return this.finishToken(types.jsxName, this.input.slice(start, this.state.pos));
    }; // Parse next token as JSX identifier


    _class.prototype.jsxParseIdentifier = function jsxParseIdentifier() {
      var node = this.startNode();

      if (this.match(types.jsxName)) {
        node.name = this.state.value;
      } else if (this.state.type.keyword) {
        node.name = this.state.type.keyword;
      } else {
        this.unexpected();
      }

      this.next();
      return this.finishNode(node, "JSXIdentifier");
    }; // Parse namespaced identifier.


    _class.prototype.jsxParseNamespacedName = function jsxParseNamespacedName() {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var name = this.jsxParseIdentifier();
      if (!this.eat(types.colon)) return name;
      var node = this.startNodeAt(startPos, startLoc);
      node.namespace = name;
      node.name = this.jsxParseIdentifier();
      return this.finishNode(node, "JSXNamespacedName");
    }; // Parses element name in any form - namespaced, member
    // or single identifier.


    _class.prototype.jsxParseElementName = function jsxParseElementName() {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var node = this.jsxParseNamespacedName();

      while (this.eat(types.dot)) {
        var newNode = this.startNodeAt(startPos, startLoc);
        newNode.object = node;
        newNode.property = this.jsxParseIdentifier();
        node = this.finishNode(newNode, "JSXMemberExpression");
      }

      return node;
    }; // Parses any type of JSX attribute value.


    _class.prototype.jsxParseAttributeValue = function jsxParseAttributeValue() {
      var node = void 0;

      switch (this.state.type) {
        case types.braceL:
          node = this.jsxParseExpressionContainer();

          if (node.expression.type === "JSXEmptyExpression") {
            throw this.raise(node.start, "JSX attributes must only be assigned a non-empty expression");
          } else {
            return node;
          }

        case types.jsxTagStart:
        case types.string:
          return this.parseExprAtom();

        default:
          throw this.raise(this.state.start, "JSX value should be either an expression or a quoted JSX text");
      }
    }; // JSXEmptyExpression is unique type since it doesn't actually parse anything,
    // and so it should start at the end of last read token (left brace) and finish
    // at the beginning of the next one (right brace).


    _class.prototype.jsxParseEmptyExpression = function jsxParseEmptyExpression() {
      var node = this.startNodeAt(this.state.lastTokEnd, this.state.lastTokEndLoc);
      return this.finishNodeAt(node, "JSXEmptyExpression", this.state.start, this.state.startLoc);
    }; // Parse JSX spread child


    _class.prototype.jsxParseSpreadChild = function jsxParseSpreadChild() {
      var node = this.startNode();
      this.expect(types.braceL);
      this.expect(types.ellipsis);
      node.expression = this.parseExpression();
      this.expect(types.braceR);
      return this.finishNode(node, "JSXSpreadChild");
    }; // Parses JSX expression enclosed into curly brackets.


    _class.prototype.jsxParseExpressionContainer = function jsxParseExpressionContainer() {
      var node = this.startNode();
      this.next();

      if (this.match(types.braceR)) {
        node.expression = this.jsxParseEmptyExpression();
      } else {
        node.expression = this.parseExpression();
      }

      this.expect(types.braceR);
      return this.finishNode(node, "JSXExpressionContainer");
    }; // Parses following JSX attribute name-value pair.


    _class.prototype.jsxParseAttribute = function jsxParseAttribute() {
      var node = this.startNode();

      if (this.eat(types.braceL)) {
        this.expect(types.ellipsis);
        node.argument = this.parseMaybeAssign();
        this.expect(types.braceR);
        return this.finishNode(node, "JSXSpreadAttribute");
      }

      node.name = this.jsxParseNamespacedName();
      node.value = this.eat(types.eq) ? this.jsxParseAttributeValue() : null;
      return this.finishNode(node, "JSXAttribute");
    }; // Parses JSX opening tag starting after "<".


    _class.prototype.jsxParseOpeningElementAt = function jsxParseOpeningElementAt(startPos, startLoc) {
      var node = this.startNodeAt(startPos, startLoc);
      node.attributes = [];
      node.name = this.jsxParseElementName();

      while (!this.match(types.slash) && !this.match(types.jsxTagEnd)) {
        node.attributes.push(this.jsxParseAttribute());
      }

      node.selfClosing = this.eat(types.slash);
      this.expect(types.jsxTagEnd);
      return this.finishNode(node, "JSXOpeningElement");
    }; // Parses JSX closing tag starting after "</".


    _class.prototype.jsxParseClosingElementAt = function jsxParseClosingElementAt(startPos, startLoc) {
      var node = this.startNodeAt(startPos, startLoc);
      node.name = this.jsxParseElementName();
      this.expect(types.jsxTagEnd);
      return this.finishNode(node, "JSXClosingElement");
    }; // Parses entire JSX element, including it"s opening tag
    // (starting after "<"), attributes, contents and closing tag.


    _class.prototype.jsxParseElementAt = function jsxParseElementAt(startPos, startLoc) {
      var node = this.startNodeAt(startPos, startLoc);
      var children = [];
      var openingElement = this.jsxParseOpeningElementAt(startPos, startLoc);
      var closingElement = null;

      if (!openingElement.selfClosing) {
        contents: for (;;) {
          switch (this.state.type) {
            case types.jsxTagStart:
              startPos = this.state.start;
              startLoc = this.state.startLoc;
              this.next();

              if (this.eat(types.slash)) {
                closingElement = this.jsxParseClosingElementAt(startPos, startLoc);
                break contents;
              }

              children.push(this.jsxParseElementAt(startPos, startLoc));
              break;

            case types.jsxText:
              children.push(this.parseExprAtom());
              break;

            case types.braceL:
              if (this.lookahead().type === types.ellipsis) {
                children.push(this.jsxParseSpreadChild());
              } else {
                children.push(this.jsxParseExpressionContainer());
              }

              break;
            // istanbul ignore next - should never happen

            default:
              throw this.unexpected();
          }
        }

        if ( // $FlowIgnore
        getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
          this.raise( // $FlowIgnore
          closingElement.start, "Expected corresponding JSX closing tag for <" + getQualifiedJSXName(openingElement.name) + ">");
        }
      }

      node.openingElement = openingElement;
      node.closingElement = closingElement;
      node.children = children;

      if (this.match(types.relational) && this.state.value === "<") {
        this.raise(this.state.start, "Adjacent JSX elements must be wrapped in an enclosing tag");
      }

      return this.finishNode(node, "JSXElement");
    }; // Parses entire JSX element from current position.


    _class.prototype.jsxParseElement = function jsxParseElement() {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      this.next();
      return this.jsxParseElementAt(startPos, startLoc);
    }; // ==================================
    // Overrides
    // ==================================


    _class.prototype.parseExprAtom = function parseExprAtom(refShortHandDefaultPos) {
      if (this.match(types.jsxText)) {
        return this.parseLiteral(this.state.value, "JSXText");
      } else if (this.match(types.jsxTagStart)) {
        return this.jsxParseElement();
      } else {
        return _superClass.prototype.parseExprAtom.call(this, refShortHandDefaultPos);
      }
    };

    _class.prototype.readToken = function readToken(code) {
      if (this.state.inPropertyName) return _superClass.prototype.readToken.call(this, code);
      var context = this.curContext();

      if (context === types$1.j_expr) {
        return this.jsxReadToken();
      }

      if (context === types$1.j_oTag || context === types$1.j_cTag) {
        if (isIdentifierStart(code)) {
          return this.jsxReadWord();
        }

        if (code === 62) {
          ++this.state.pos;
          return this.finishToken(types.jsxTagEnd);
        }

        if ((code === 34 || code === 39) && context === types$1.j_oTag) {
          return this.jsxReadString(code);
        }
      }

      if (code === 60 && this.state.exprAllowed) {
        ++this.state.pos;
        return this.finishToken(types.jsxTagStart);
      }

      return _superClass.prototype.readToken.call(this, code);
    };

    _class.prototype.updateContext = function updateContext(prevType) {
      if (this.match(types.braceL)) {
        var curContext = this.curContext();

        if (curContext === types$1.j_oTag) {
          this.state.context.push(types$1.braceExpression);
        } else if (curContext === types$1.j_expr) {
          this.state.context.push(types$1.templateQuasi);
        } else {
          _superClass.prototype.updateContext.call(this, prevType);
        }

        this.state.exprAllowed = true;
      } else if (this.match(types.slash) && prevType === types.jsxTagStart) {
        this.state.context.length -= 2; // do not consider JSX expr -> JSX open tag -> ... anymore

        this.state.context.push(types$1.j_cTag); // reconsider as closing tag context

        this.state.exprAllowed = false;
      } else {
        return _superClass.prototype.updateContext.call(this, prevType);
      }
    };

    return _class;
  }(superClass);
};

function nonNull(x) {
  if (x == null) {
    // $FlowIgnore
    throw new Error("Unexpected ".concat(x, " value."));
  }

  return x;
}

function assert(x) {
  if (!x) {
    throw new Error("Assert fail");
  }
} // Doesn't handle "void" or "null" because those are keywords, not identifiers.


function keywordTypeFromName(value) {
  switch (value) {
    case "any":
      return "TSAnyKeyword";

    case "boolean":
      return "TSBooleanKeyword";

    case "never":
      return "TSNeverKeyword";

    case "number":
      return "TSNumberKeyword";

    case "object":
      return "TSObjectKeyword";

    case "string":
      return "TSStringKeyword";

    case "symbol":
      return "TSSymbolKeyword";

    case "undefined":
      return "TSUndefinedKeyword";

    default:
      return undefined;
  }
}

var typescriptPlugin = function typescriptPlugin(superClass) {
  return function (_superClass) {
    inheritsLoose(_class, _superClass);

    function _class() {
      return _superClass.apply(this, arguments) || this;
    }

    _class.prototype.tsIsIdentifier = function tsIsIdentifier() {
      // TODO: actually a bit more complex in TypeScript, but shouldn't matter.
      // See https://github.com/Microsoft/TypeScript/issues/15008
      return this.match(types.name);
    };

    _class.prototype.tsNextTokenCanFollowModifier = function tsNextTokenCanFollowModifier() {
      // Note: TypeScript's implementation is much more complicated because
      // more things are considered modifiers there.
      // This implementation only handles modifiers not handled by babylon itself. And "static".
      // TODO: Would be nice to avoid lookahead. Want a hasLineBreakUpNext() method...
      this.next();
      return !this.hasPrecedingLineBreak() && !this.match(types.parenL) && !this.match(types.colon) && !this.match(types.eq) && !this.match(types.question);
    };
    /** Parses a modifier matching one the given modifier names. */


    _class.prototype.tsParseModifier = function tsParseModifier(allowedModifiers) {
      if (!this.match(types.name)) {
        return undefined;
      }

      var modifier = this.state.value;

      if (allowedModifiers.indexOf(modifier) !== -1 && this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) {
        return modifier;
      }

      return undefined;
    };

    _class.prototype.tsIsListTerminator = function tsIsListTerminator(kind) {
      switch (kind) {
        case "EnumMembers":
        case "TypeMembers":
          return this.match(types.braceR);

        case "HeritageClauseElement":
          return this.match(types.braceL);

        case "TupleElementTypes":
          return this.match(types.bracketR);

        case "TypeParametersOrArguments":
          return this.isRelational(">");
      }

      throw new Error("Unreachable");
    };

    _class.prototype.tsParseList = function tsParseList(kind, parseElement) {
      var result = [];

      while (!this.tsIsListTerminator(kind)) {
        // Skipping "parseListElement" from the TS source since that's just for error handling.
        result.push(parseElement());
      }

      return result;
    };

    _class.prototype.tsParseDelimitedList = function tsParseDelimitedList(kind, parseElement) {
      return nonNull(this.tsParseDelimitedListWorker(kind, parseElement,
      /* expectSuccess */
      true));
    };

    _class.prototype.tsTryParseDelimitedList = function tsTryParseDelimitedList(kind, parseElement) {
      return this.tsParseDelimitedListWorker(kind, parseElement,
      /* expectSuccess */
      false);
    };
    /**
    * If !expectSuccess, returns undefined instead of failing to parse.
    * If expectSuccess, parseElement should always return a defined value.
    */


    _class.prototype.tsParseDelimitedListWorker = function tsParseDelimitedListWorker(kind, parseElement, expectSuccess) {
      var result = [];

      while (true) {
        if (this.tsIsListTerminator(kind)) {
          break;
        }

        var element = parseElement();

        if (element == null) {
          return undefined;
        }

        result.push(element);

        if (this.eat(types.comma)) {
          continue;
        }

        if (this.tsIsListTerminator(kind)) {
          break;
        }

        if (expectSuccess) {
          // This will fail with an error about a missing comma
          this.expect(types.comma);
        }

        return undefined;
      }

      return result;
    };

    _class.prototype.tsParseBracketedList = function tsParseBracketedList(kind, parseElement, bracket, skipFirstToken) {
      if (!skipFirstToken) {
        if (bracket) {
          this.expect(types.bracketL);
        } else {
          this.expectRelational("<");
        }
      }

      var result = this.tsParseDelimitedList(kind, parseElement);

      if (bracket) {
        this.expect(types.bracketR);
      } else {
        this.expectRelational(">");
      }

      return result;
    };

    _class.prototype.tsParseEntityName = function tsParseEntityName(allowReservedWords) {
      var entity = this.parseIdentifier();

      while (this.eat(types.dot)) {
        var node = this.startNodeAtNode(entity);
        node.left = entity;
        node.right = this.parseIdentifier(allowReservedWords);
        entity = this.finishNode(node, "TSQualifiedName");
      }

      return entity;
    };

    _class.prototype.tsParseTypeReference = function tsParseTypeReference() {
      var node = this.startNode();
      node.typeName = this.tsParseEntityName(
      /* allowReservedWords */
      false);

      if (!this.hasPrecedingLineBreak() && this.isRelational("<")) {
        node.typeParameters = this.tsParseTypeArguments();
      }

      return this.finishNode(node, "TSTypeReference");
    };

    _class.prototype.tsParseThisTypePredicate = function tsParseThisTypePredicate(lhs) {
      this.next();
      var node = this.startNode();
      node.parameterName = lhs;
      node.typeAnnotation = this.tsParseTypeAnnotation(
      /* eatColon */
      false);
      return this.finishNode(node, "TSTypePredicate");
    };

    _class.prototype.tsParseThisTypeNode = function tsParseThisTypeNode() {
      var node = this.startNode();
      this.next();
      return this.finishNode(node, "TSThisType");
    };

    _class.prototype.tsParseTypeQuery = function tsParseTypeQuery() {
      var node = this.startNode();
      this.expect(types._typeof);
      node.exprName = this.tsParseEntityName(
      /* allowReservedWords */
      true);
      return this.finishNode(node, "TSTypeQuery");
    };

    _class.prototype.tsParseTypeParameter = function tsParseTypeParameter() {
      var node = this.startNode();
      node.name = this.parseIdentifierName(node.start);

      if (this.eat(types._extends)) {
        node.constraint = this.tsParseType();
      }

      if (this.eat(types.eq)) {
        node.default = this.tsParseType();
      }

      return this.finishNode(node, "TSTypeParameter");
    };

    _class.prototype.tsTryParseTypeParameters = function tsTryParseTypeParameters() {
      if (this.isRelational("<")) {
        return this.tsParseTypeParameters();
      }
    };

    _class.prototype.tsParseTypeParameters = function tsParseTypeParameters() {
      var node = this.startNode();

      if (this.isRelational("<") || this.match(types.jsxTagStart)) {
        this.next();
      } else {
        this.unexpected();
      }

      node.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this),
      /* bracket */
      false,
      /* skipFirstToken */
      true);
      return this.finishNode(node, "TSTypeParameterDeclaration");
    }; // Note: In TypeScript implementation we must provide `yieldContext` and `awaitContext`,
    // but here it's always false, because this is only used for types.


    _class.prototype.tsFillSignature = function tsFillSignature(returnToken, signature) {
      // Arrow fns *must* have return token (`=>`). Normal functions can omit it.
      var returnTokenRequired = returnToken === types.arrow;
      signature.typeParameters = this.tsTryParseTypeParameters();
      this.expect(types.parenL);
      signature.parameters = this.tsParseBindingListForSignature();

      if (returnTokenRequired) {
        signature.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
      } else if (this.match(returnToken)) {
        signature.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
      }
    };

    _class.prototype.tsParseBindingListForSignature = function tsParseBindingListForSignature() {
      var _this2 = this;

      return this.parseBindingList(types.parenR).map(function (pattern) {
        if (pattern.type !== "Identifier" && pattern.type !== "RestElement") {
          throw _this2.unexpected(pattern.start, "Name in a signature must be an Identifier.");
        }

        return pattern;
      });
    };

    _class.prototype.tsParseTypeMemberSemicolon = function tsParseTypeMemberSemicolon() {
      if (!this.eat(types.comma)) {
        this.semicolon();
      }
    };

    _class.prototype.tsParseSignatureMember = function tsParseSignatureMember(kind) {
      var node = this.startNode();

      if (kind === "TSConstructSignatureDeclaration") {
        this.expect(types._new);
      }

      this.tsFillSignature(types.colon, node);
      this.tsParseTypeMemberSemicolon();
      return this.finishNode(node, kind);
    };

    _class.prototype.tsIsUnambiguouslyIndexSignature = function tsIsUnambiguouslyIndexSignature() {
      this.next(); // Skip '{'

      return this.eat(types.name) && this.match(types.colon);
    };

    _class.prototype.tsTryParseIndexSignature = function tsTryParseIndexSignature(node) {
      if (!(this.match(types.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this)))) {
        return undefined;
      }

      this.expect(types.bracketL);
      var id = this.parseIdentifier();
      this.expect(types.colon);
      id.typeAnnotation = this.tsParseTypeAnnotation(
      /* eatColon */
      false);
      this.expect(types.bracketR);
      node.parameters = [id];
      var type = this.tsTryParseTypeAnnotation();
      if (type) node.typeAnnotation = type;
      this.tsParseTypeMemberSemicolon();
      return this.finishNode(node, "TSIndexSignature");
    };

    _class.prototype.tsParsePropertyOrMethodSignature = function tsParsePropertyOrMethodSignature(node, readonly) {
      this.parsePropertyName(node);
      if (this.eat(types.question)) node.optional = true;
      var nodeAny = node;

      if (!readonly && (this.match(types.parenL) || this.isRelational("<"))) {
        var method = nodeAny;
        this.tsFillSignature(types.colon, method);
        this.tsParseTypeMemberSemicolon();
        return this.finishNode(method, "TSMethodSignature");
      } else {
        var property = nodeAny;
        if (readonly) property.readonly = true;
        var type = this.tsTryParseTypeAnnotation();
        if (type) property.typeAnnotation = type;
        this.tsParseTypeMemberSemicolon();
        return this.finishNode(property, "TSPropertySignature");
      }
    };

    _class.prototype.tsParseTypeMember = function tsParseTypeMember() {
      if (this.match(types.parenL) || this.isRelational("<")) {
        return this.tsParseSignatureMember("TSCallSignatureDeclaration");
      }

      if (this.match(types._new) && this.tsLookAhead(this.tsIsStartOfConstructSignature.bind(this))) {
        return this.tsParseSignatureMember("TSConstructSignatureDeclaration");
      } // Instead of fullStart, we create a node here.


      var node = this.startNode();
      var readonly = !!this.tsParseModifier(["readonly"]);
      var idx = this.tsTryParseIndexSignature(node);

      if (idx) {
        if (readonly) node.readonly = true;
        return idx;
      }

      return this.tsParsePropertyOrMethodSignature(node, readonly);
    };

    _class.prototype.tsIsStartOfConstructSignature = function tsIsStartOfConstructSignature() {
      this.next();
      return this.match(types.parenL) || this.isRelational("<");
    };

    _class.prototype.tsParseTypeLiteral = function tsParseTypeLiteral() {
      var node = this.startNode();
      node.members = this.tsParseObjectTypeMembers();
      return this.finishNode(node, "TSTypeLiteral");
    };

    _class.prototype.tsParseObjectTypeMembers = function tsParseObjectTypeMembers() {
      this.expect(types.braceL);
      var members = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
      this.expect(types.braceR);
      return members;
    };

    _class.prototype.tsIsStartOfMappedType = function tsIsStartOfMappedType() {
      this.next();

      if (this.isContextual("readonly")) {
        this.next();
      }

      if (!this.match(types.bracketL)) {
        return false;
      }

      this.next();

      if (!this.tsIsIdentifier()) {
        return false;
      }

      this.next();
      return this.match(types._in);
    };

    _class.prototype.tsParseMappedTypeParameter = function tsParseMappedTypeParameter() {
      var node = this.startNode();
      node.name = this.parseIdentifierName(node.start);
      this.expect(types._in);
      node.constraint = this.tsParseType();
      return this.finishNode(node, "TSTypeParameter");
    };

    _class.prototype.tsParseMappedType = function tsParseMappedType() {
      var node = this.startNode();
      this.expect(types.braceL);

      if (this.eatContextual("readonly")) {
        node.readonly = true;
      }

      this.expect(types.bracketL);
      node.typeParameter = this.tsParseMappedTypeParameter();
      this.expect(types.bracketR);

      if (this.eat(types.question)) {
        node.optional = true;
      }

      node.typeAnnotation = this.tsTryParseType();
      this.semicolon();
      this.expect(types.braceR);
      return this.finishNode(node, "TSMappedType");
    };

    _class.prototype.tsParseTupleType = function tsParseTupleType() {
      var node = this.startNode();
      node.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseType.bind(this),
      /* bracket */
      true,
      /* skipFirstToken */
      false);
      return this.finishNode(node, "TSTupleType");
    };

    _class.prototype.tsParseParenthesizedType = function tsParseParenthesizedType() {
      var node = this.startNode();
      this.expect(types.parenL);
      node.typeAnnotation = this.tsParseType();
      this.expect(types.parenR);
      return this.finishNode(node, "TSParenthesizedType");
    };

    _class.prototype.tsParseFunctionOrConstructorType = function tsParseFunctionOrConstructorType(type) {
      var node = this.startNode();

      if (type === "TSConstructorType") {
        this.expect(types._new);
      }

      this.tsFillSignature(types.arrow, node);
      return this.finishNode(node, type);
    };

    _class.prototype.tsParseLiteralTypeNode = function tsParseLiteralTypeNode() {
      var _this3 = this;

      var node = this.startNode();

      node.literal = function () {
        switch (_this3.state.type) {
          case types.num:
            return _this3.parseLiteral(_this3.state.value, "NumericLiteral");

          case types.string:
            return _this3.parseLiteral(_this3.state.value, "StringLiteral");

          case types._true:
          case types._false:
            return _this3.parseBooleanLiteral();

          default:
            throw _this3.unexpected();
        }
      }();

      return this.finishNode(node, "TSLiteralType");
    };

    _class.prototype.tsParseNonArrayType = function tsParseNonArrayType() {
      switch (this.state.type) {
        case types.name:
        case types._void:
        case types._null:
          {
            var type = this.match(types._void) ? "TSVoidKeyword" : this.match(types._null) ? "TSNullKeyword" : keywordTypeFromName(this.state.value);

            if (type !== undefined && this.lookahead().type !== types.dot) {
              var node = this.startNode();
              this.next();
              return this.finishNode(node, type);
            }

            return this.tsParseTypeReference();
          }

        case types.string:
        case types.num:
        case types._true:
        case types._false:
          return this.tsParseLiteralTypeNode();

        case types.plusMin:
          if (this.state.value === "-") {
            var _node = this.startNode();

            this.next();

            if (!this.match(types.num)) {
              throw this.unexpected();
            }

            _node.literal = this.parseLiteral(-this.state.value, "NumericLiteral", _node.start, _node.loc.start);
            return this.finishNode(_node, "TSLiteralType");
          }

          break;

        case types._this:
          {
            var thisKeyword = this.tsParseThisTypeNode();

            if (this.isContextual("is") && !this.hasPrecedingLineBreak()) {
              return this.tsParseThisTypePredicate(thisKeyword);
            } else {
              return thisKeyword;
            }
          }

        case types._typeof:
          return this.tsParseTypeQuery();

        case types.braceL:
          return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();

        case types.bracketL:
          return this.tsParseTupleType();

        case types.parenL:
          return this.tsParseParenthesizedType();
      }

      throw this.unexpected();
    };

    _class.prototype.tsParseArrayTypeOrHigher = function tsParseArrayTypeOrHigher() {
      var type = this.tsParseNonArrayType();

      while (!this.hasPrecedingLineBreak() && this.eat(types.bracketL)) {
        if (this.match(types.bracketR)) {
          var node = this.startNodeAtNode(type);
          node.elementType = type;
          this.expect(types.bracketR);
          type = this.finishNode(node, "TSArrayType");
        } else {
          var _node2 = this.startNodeAtNode(type);

          _node2.objectType = type;
          _node2.indexType = this.tsParseType();
          this.expect(types.bracketR);
          type = this.finishNode(_node2, "TSIndexedAccessType");
        }
      }

      return type;
    };

    _class.prototype.tsParseTypeOperator = function tsParseTypeOperator(operator) {
      var node = this.startNode();
      this.expectContextual(operator);
      node.operator = operator;
      node.typeAnnotation = this.tsParseTypeOperatorOrHigher();
      return this.finishNode(node, "TSTypeOperator");
    };

    _class.prototype.tsParseTypeOperatorOrHigher = function tsParseTypeOperatorOrHigher() {
      if (this.isContextual("keyof")) {
        return this.tsParseTypeOperator("keyof");
      }

      return this.tsParseArrayTypeOrHigher();
    };

    _class.prototype.tsParseUnionOrIntersectionType = function tsParseUnionOrIntersectionType(kind, parseConstituentType, operator) {
      this.eat(operator);
      var type = parseConstituentType();

      if (this.match(operator)) {
        var types$$1 = [type];

        while (this.eat(operator)) {
          types$$1.push(parseConstituentType());
        }

        var node = this.startNodeAtNode(type);
        node.types = types$$1;
        type = this.finishNode(node, kind);
      }

      return type;
    };

    _class.prototype.tsParseIntersectionTypeOrHigher = function tsParseIntersectionTypeOrHigher() {
      return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), types.bitwiseAND);
    };

    _class.prototype.tsParseUnionTypeOrHigher = function tsParseUnionTypeOrHigher() {
      return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), types.bitwiseOR);
    };

    _class.prototype.tsIsStartOfFunctionType = function tsIsStartOfFunctionType() {
      if (this.isRelational("<")) {
        return true;
      }

      return this.match(types.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
    };

    _class.prototype.tsSkipParameterStart = function tsSkipParameterStart() {
      if (this.match(types.name) || this.match(types._this)) {
        this.next();
        return true;
      }

      return false;
    };

    _class.prototype.tsIsUnambiguouslyStartOfFunctionType = function tsIsUnambiguouslyStartOfFunctionType() {
      this.next();

      if (this.match(types.parenR) || this.match(types.ellipsis)) {
        // ( )
        // ( ...
        return true;
      }

      if (this.tsSkipParameterStart()) {
        if (this.match(types.colon) || this.match(types.comma) || this.match(types.question) || this.match(types.eq)) {
          // ( xxx :
          // ( xxx ,
          // ( xxx ?
          // ( xxx =
          return true;
        }

        if (this.match(types.parenR)) {
          this.next();

          if (this.match(types.arrow)) {
            // ( xxx ) =>
            return true;
          }
        }
      }

      return false;
    };

    _class.prototype.tsParseTypeOrTypePredicateAnnotation = function tsParseTypeOrTypePredicateAnnotation(returnToken) {
      var t = this.startNode();
      this.expect(returnToken);
      var typePredicateVariable = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));

      if (!typePredicateVariable) {
        return this.tsParseTypeAnnotation(
        /* eatColon */
        false, t);
      }

      var type = this.tsParseTypeAnnotation(
      /* eatColon */
      false);
      var node = this.startNodeAtNode(typePredicateVariable);
      node.parameterName = typePredicateVariable;
      node.typeAnnotation = type;
      t.typeAnnotation = this.finishNode(node, "TSTypePredicate");
      return this.finishNode(t, "TSTypeAnnotation");
    };

    _class.prototype.tsTryParseTypeOrTypePredicateAnnotation = function tsTryParseTypeOrTypePredicateAnnotation() {
      return this.match(types.colon) ? this.tsParseTypeOrTypePredicateAnnotation(types.colon) : undefined;
    };

    _class.prototype.tsTryParseTypeAnnotation = function tsTryParseTypeAnnotation() {
      return this.match(types.colon) ? this.tsParseTypeAnnotation() : undefined;
    };

    _class.prototype.tsTryParseType = function tsTryParseType() {
      return this.eat(types.colon) ? this.tsParseType() : undefined;
    };

    _class.prototype.tsParseTypePredicatePrefix = function tsParseTypePredicatePrefix() {
      var id = this.parseIdentifier();

      if (this.isContextual("is") && !this.hasPrecedingLineBreak()) {
        this.next();
        return id;
      }
    };

    _class.prototype.tsParseTypeAnnotation = function tsParseTypeAnnotation(eatColon, t) {
      if (eatColon === void 0) {
        eatColon = true;
      }

      if (t === void 0) {
        t = this.startNode();
      }

      if (eatColon) this.expect(types.colon);
      t.typeAnnotation = this.tsParseType();
      return this.finishNode(t, "TSTypeAnnotation");
    };

    _class.prototype.tsParseType = function tsParseType() {
      // Need to set `state.inType` so that we don't parse JSX in a type context.
      var oldInType = this.state.inType;
      this.state.inType = true;

      try {
        if (this.tsIsStartOfFunctionType()) {
          return this.tsParseFunctionOrConstructorType("TSFunctionType");
        }

        if (this.match(types._new)) {
          // As in `new () => Date`
          return this.tsParseFunctionOrConstructorType("TSConstructorType");
        }

        return this.tsParseUnionTypeOrHigher();
      } finally {
        this.state.inType = oldInType;
      }
    };

    _class.prototype.tsParseTypeAssertion = function tsParseTypeAssertion() {
      var node = this.startNode();
      node.typeAnnotation = this.tsParseType();
      this.expectRelational(">");
      node.expression = this.parseMaybeUnary();
      return this.finishNode(node, "TSTypeAssertion");
    };

    _class.prototype.tsTryParseTypeArgumentsInExpression = function tsTryParseTypeArgumentsInExpression() {
      var _this4 = this;

      return this.tsTryParseAndCatch(function () {
        var res = _this4.startNode();

        _this4.expectRelational("<");

        var typeArguments = _this4.tsParseDelimitedList("TypeParametersOrArguments", _this4.tsParseType.bind(_this4));

        _this4.expectRelational(">");

        res.params = typeArguments;

        _this4.finishNode(res, "TSTypeParameterInstantiation");

        _this4.expect(types.parenL);

        return res;
      });
    };

    _class.prototype.tsParseHeritageClause = function tsParseHeritageClause() {
      return this.tsParseDelimitedList("HeritageClauseElement", this.tsParseExpressionWithTypeArguments.bind(this));
    };

    _class.prototype.tsParseExpressionWithTypeArguments = function tsParseExpressionWithTypeArguments() {
      var node = this.startNode(); // Note: TS uses parseLeftHandSideExpressionOrHigher,
      // then has grammar errors later if it's not an EntityName.

      node.expression = this.tsParseEntityName(
      /* allowReservedWords */
      false);

      if (this.isRelational("<")) {
        node.typeParameters = this.tsParseTypeArguments();
      }

      return this.finishNode(node, "TSExpressionWithTypeArguments");
    };

    _class.prototype.tsParseInterfaceDeclaration = function tsParseInterfaceDeclaration(node) {
      node.id = this.parseIdentifier();
      node.typeParameters = this.tsTryParseTypeParameters();

      if (this.eat(types._extends)) {
        node.extends = this.tsParseHeritageClause();
      }

      var body = this.startNode();
      body.body = this.tsParseObjectTypeMembers();
      node.body = this.finishNode(body, "TSInterfaceBody");
      return this.finishNode(node, "TSInterfaceDeclaration");
    };

    _class.prototype.tsParseTypeAliasDeclaration = function tsParseTypeAliasDeclaration(node) {
      node.id = this.parseIdentifier();
      node.typeParameters = this.tsTryParseTypeParameters();
      this.expect(types.eq);
      node.typeAnnotation = this.tsParseType();
      this.semicolon();
      return this.finishNode(node, "TSTypeAliasDeclaration");
    };

    _class.prototype.tsParseEnumMember = function tsParseEnumMember() {
      var node = this.startNode(); // Computed property names are grammar errors in an enum, so accept just string literal or identifier.

      node.id = this.match(types.string) ? this.parseLiteral(this.state.value, "StringLiteral") : this.parseIdentifier(
      /* liberal */
      true);

      if (this.eat(types.eq)) {
        node.initializer = this.parseMaybeAssign();
      }

      return this.finishNode(node, "TSEnumMember");
    };

    _class.prototype.tsParseEnumDeclaration = function tsParseEnumDeclaration(node, isConst) {
      if (isConst) node.const = true;
      node.id = this.parseIdentifier();
      this.expect(types.braceL);
      node.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this));
      this.expect(types.braceR);
      return this.finishNode(node, "TSEnumDeclaration");
    };

    _class.prototype.tsParseModuleBlock = function tsParseModuleBlock() {
      var node = this.startNode();
      this.expect(types.braceL); // Inside of a module block is considered "top-level", meaning it can have imports and exports.

      this.parseBlockOrModuleBlockBody(node.body = [],
      /* directives */
      undefined,
      /* topLevel */
      true,
      /* end */
      types.braceR);
      return this.finishNode(node, "TSModuleBlock");
    };

    _class.prototype.tsParseModuleOrNamespaceDeclaration = function tsParseModuleOrNamespaceDeclaration(node) {
      node.id = this.parseIdentifier();

      if (this.eat(types.dot)) {
        var inner = this.startNode();
        this.tsParseModuleOrNamespaceDeclaration(inner);
        node.body = inner;
      } else {
        node.body = this.tsParseModuleBlock();
      }

      return this.finishNode(node, "TSModuleDeclaration");
    };

    _class.prototype.tsParseAmbientExternalModuleDeclaration = function tsParseAmbientExternalModuleDeclaration(node) {
      if (this.isContextual("global")) {
        node.global = true;
        node.id = this.parseIdentifier();
      } else if (this.match(types.string)) {
        node.id = this.parseExprAtom();
      } else {
        this.unexpected();
      }

      if (this.match(types.braceL)) {
        node.body = this.tsParseModuleBlock();
      } else {
        this.semicolon();
      }

      return this.finishNode(node, "TSModuleDeclaration");
    };

    _class.prototype.tsParseImportEqualsDeclaration = function tsParseImportEqualsDeclaration(node, isExport) {
      node.isExport = isExport || false;
      node.id = this.parseIdentifier();
      this.expect(types.eq);
      node.moduleReference = this.tsParseModuleReference();
      this.semicolon();
      return this.finishNode(node, "TSImportEqualsDeclaration");
    };

    _class.prototype.tsIsExternalModuleReference = function tsIsExternalModuleReference() {
      return this.isContextual("require") && this.lookahead().type === types.parenL;
    };

    _class.prototype.tsParseModuleReference = function tsParseModuleReference() {
      return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(
      /* allowReservedWords */
      false);
    };

    _class.prototype.tsParseExternalModuleReference = function tsParseExternalModuleReference() {
      var node = this.startNode();
      this.expectContextual("require");
      this.expect(types.parenL);

      if (!this.match(types.string)) {
        throw this.unexpected();
      }

      node.expression = this.parseLiteral(this.state.value, "StringLiteral");
      this.expect(types.parenR);
      return this.finishNode(node, "TSExternalModuleReference");
    }; // Utilities


    _class.prototype.tsLookAhead = function tsLookAhead(f) {
      var state = this.state.clone();
      var res = f();
      this.state = state;
      return res;
    };

    _class.prototype.tsTryParseAndCatch = function tsTryParseAndCatch(f) {
      var state = this.state.clone();

      try {
        return f();
      } catch (e) {
        if (e instanceof SyntaxError) {
          this.state = state;
          return undefined;
        }

        throw e;
      }
    };

    _class.prototype.tsTryParse = function tsTryParse(f) {
      var state = this.state.clone();
      var result = f();

      if (result !== undefined && result !== false) {
        return result;
      } else {
        this.state = state;
        return undefined;
      }
    };

    _class.prototype.nodeWithSamePosition = function nodeWithSamePosition(original, type) {
      var node = this.startNodeAtNode(original);
      node.type = type;
      node.end = original.end;
      node.loc.end = original.loc.end;
      if (original.leadingComments) node.leadingComments = original.leadingComments;
      if (original.trailingComments) node.trailingComments = original.trailingComments;
      if (original.innerComments) node.innerComments = original.innerComments;
      return node;
    };

    _class.prototype.tsTryParseDeclare = function tsTryParseDeclare(nany) {
      switch (this.state.type) {
        case types._function:
          this.next();
          return this.parseFunction(nany,
          /* isStatement */
          true);

        case types._class:
          return this.parseClass(nany,
          /* isStatement */
          true,
          /* optionalId */
          false);

        case types._const:
          if (this.match(types._const) && this.lookaheadIsContextual("enum")) {
            // `const enum = 0;` not allowed because "enum" is a strict mode reserved word.
            this.expect(types._const);
            this.expectContextual("enum");
            return this.tsParseEnumDeclaration(nany,
            /* isConst */
            true);
          }

        // falls through

        case types._var:
        case types._let:
          return this.parseVarStatement(nany, this.state.type);

        case types.name:
          {
            var value = this.state.value;

            if (value === "global") {
              return this.tsParseAmbientExternalModuleDeclaration(nany);
            } else {
              return this.tsParseDeclaration(nany, value,
              /* next */
              true);
            }
          }
      }
    };

    _class.prototype.lookaheadIsContextual = function lookaheadIsContextual(name) {
      var l = this.lookahead();
      return l.type === types.name && l.value === name;
    }; // Note: this won't be called unless the keyword is allowed in `shouldParseExportDeclaration`.


    _class.prototype.tsTryParseExportDeclaration = function tsTryParseExportDeclaration() {
      return this.tsParseDeclaration(this.startNode(), this.state.value,
      /* next */
      true);
    };

    _class.prototype.tsParseExpressionStatement = function tsParseExpressionStatement(node, expr) {
      switch (expr.name) {
        case "declare":
          {
            var declaration = this.tsTryParseDeclare(node);

            if (declaration) {
              declaration.declare = true;
              return declaration;
            }

            break;
          }

        case "global":
          // `global { }` (with no `declare`) may appear inside an ambient module declaration.
          // Would like to use tsParseAmbientExternalModuleDeclaration here, but already ran past "global".
          if (this.match(types.braceL)) {
            var mod = node;
            mod.global = true;
            mod.id = expr;
            mod.body = this.tsParseModuleBlock();
            return this.finishNode(mod, "TSModuleDeclaration");
          }

          break;

        default:
          return this.tsParseDeclaration(node, expr.name,
          /* next */
          false);
      }
    }; // Common to tsTryParseDeclare, tsTryParseExportDeclaration, and tsParseExpressionStatement.


    _class.prototype.tsParseDeclaration = function tsParseDeclaration(node, value, next) {
      switch (value) {
        case "abstract":
          if (next || this.match(types._class)) {
            var cls = node;
            cls.abstract = true;
            if (next) this.next();
            return this.parseClass(cls,
            /* isStatement */
            true,
            /* optionalId */
            false);
          }

          break;

        case "enum":
          if (next || this.match(types.name)) {
            if (next) this.next();
            return this.tsParseEnumDeclaration(node,
            /* isConst */
            false);
          }

          break;

        case "interface":
          if (next || this.match(types.name)) {
            if (next) this.next();
            return this.tsParseInterfaceDeclaration(node);
          }

          break;

        case "module":
          if (next) this.next();

          if (this.match(types.string)) {
            return this.tsParseAmbientExternalModuleDeclaration(node);
          } else if (next || this.match(types.name)) {
            return this.tsParseModuleOrNamespaceDeclaration(node);
          }

          break;

        case "namespace":
          if (next || this.match(types.name)) {
            if (next) this.next();
            return this.tsParseModuleOrNamespaceDeclaration(node);
          }

          break;

        case "type":
          if (next || this.match(types.name)) {
            if (next) this.next();
            return this.tsParseTypeAliasDeclaration(node);
          }

          break;
      }
    };

    _class.prototype.tsTryParseGenericAsyncArrowFunction = function tsTryParseGenericAsyncArrowFunction(startPos, startLoc) {
      var _this5 = this;

      var res = this.tsTryParseAndCatch(function () {
        var node = _this5.startNodeAt(startPos, startLoc);

        node.typeParameters = _this5.tsParseTypeParameters(); // Don't use overloaded parseFunctionParams which would look for "<" again.

        _superClass.prototype.parseFunctionParams.call(_this5, node);

        node.returnType = _this5.tsTryParseTypeOrTypePredicateAnnotation();

        _this5.expect(types.arrow);

        return node;
      });

      if (!res) {
        return undefined;
      }

      res.id = null;
      res.generator = false;
      res.expression = true; // May be set again by parseFunctionBody.

      res.async = true;
      this.parseFunctionBody(res, true);
      return this.finishNode(res, "ArrowFunctionExpression");
    };

    _class.prototype.tsParseTypeArguments = function tsParseTypeArguments() {
      var node = this.startNode();
      this.expectRelational("<");
      node.params = this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this));
      this.expectRelational(">");
      return this.finishNode(node, "TSTypeParameterInstantiation");
    }; // ======================================================
    // OVERRIDES
    // ======================================================


    _class.prototype.isExportDefaultSpecifier = function isExportDefaultSpecifier() {
      if (this.match(types.name) && (this.state.value === "type" || this.state.value === "interface" || this.state.value === "enum")) {
        return false;
      }

      return _superClass.prototype.isExportDefaultSpecifier.call(this);
    };

    _class.prototype.parseAssignableListItem = function parseAssignableListItem(allowModifiers, decorators) {
      var accessibility = void 0;
      var readonly = false;

      if (allowModifiers) {
        accessibility = this.parseAccessModifier();
        readonly = !!this.tsParseModifier(["readonly"]);
      }

      var left = this.parseMaybeDefault();
      this.parseAssignableListItemTypes(left);
      var elt = this.parseMaybeDefault(left.start, left.loc.start, left);

      if (accessibility || readonly) {
        var pp = this.startNodeAtNode(elt);

        if (decorators.length) {
          pp.decorators = decorators;
        }

        if (accessibility) pp.accessibility = accessibility;
        if (readonly) pp.readonly = readonly;

        if (elt.type !== "Identifier" && elt.type !== "AssignmentPattern") {
          throw this.raise(pp.start, "A parameter property may not be declared using a binding pattern.");
        }

        pp.parameter = elt;
        return this.finishNode(pp, "TSParameterProperty");
      } else {
        if (decorators.length) {
          left.decorators = decorators;
        }

        return elt;
      }
    };

    _class.prototype.parseFunctionBodyAndFinish = function parseFunctionBodyAndFinish(node, type, allowExpressionBody) {
      // For arrow functions, `parseArrow` handles the return type itself.
      if (!allowExpressionBody && this.match(types.colon)) {
        node.returnType = this.tsParseTypeOrTypePredicateAnnotation(types.colon);
      }

      var bodilessType = type === "FunctionDeclaration" ? "TSDeclareFunction" : type === "ClassMethod" ? "TSDeclareMethod" : undefined;

      if (bodilessType && !this.match(types.braceL) && this.isLineTerminator()) {
        this.finishNode(node, bodilessType);
        return;
      }

      _superClass.prototype.parseFunctionBodyAndFinish.call(this, node, type, allowExpressionBody);
    };

    _class.prototype.parseSubscript = function parseSubscript(base, startPos, startLoc, noCalls, state) {
      if (this.eat(types.bang)) {
        var nonNullExpression = this.startNodeAt(startPos, startLoc);
        nonNullExpression.expression = base;
        return this.finishNode(nonNullExpression, "TSNonNullExpression");
      }

      if (!noCalls && this.isRelational("<")) {
        if (this.atPossibleAsync(base)) {
          // Almost certainly this is a generic async function `async <T>() => ...
          // But it might be a call with a type argument `async<T>();`
          var asyncArrowFn = this.tsTryParseGenericAsyncArrowFunction(startPos, startLoc);

          if (asyncArrowFn) {
            return asyncArrowFn;
          }
        }

        var node = this.startNodeAt(startPos, startLoc);
        node.callee = base; // May be passing type arguments. But may just be the `<` operator.

        var typeArguments = this.tsTryParseTypeArgumentsInExpression(); // Also eats the "("

        if (typeArguments) {
          // possibleAsync always false here, because we would have handled it above.
          // $FlowIgnore (won't be any undefined arguments)
          node.arguments = this.parseCallExpressionArguments(types.parenR,
          /* possibleAsync */
          false);
          node.typeParameters = typeArguments;
          return this.finishCallExpression(node);
        }
      }

      return _superClass.prototype.parseSubscript.call(this, base, startPos, startLoc, noCalls, state);
    };

    _class.prototype.parseNewArguments = function parseNewArguments(node) {
      var _this6 = this;

      if (this.isRelational("<")) {
        // tsTryParseAndCatch is expensive, so avoid if not necessary.
        // 99% certain this is `new C<T>();`. But may be `new C < T;`, which is also legal.
        var typeParameters = this.tsTryParseAndCatch(function () {
          var args = _this6.tsParseTypeArguments();

          if (!_this6.match(types.parenL)) _this6.unexpected();
          return args;
        });

        if (typeParameters) {
          node.typeParameters = typeParameters;
        }
      }

      _superClass.prototype.parseNewArguments.call(this, node);
    };

    _class.prototype.parseExprOp = function parseExprOp(left, leftStartPos, leftStartLoc, minPrec, noIn) {
      if (nonNull(types._in.binop) > minPrec && !this.hasPrecedingLineBreak() && this.eatContextual("as")) {
        var node = this.startNodeAt(leftStartPos, leftStartLoc);
        node.expression = left;
        node.typeAnnotation = this.tsParseType();
        this.finishNode(node, "TSAsExpression");
        return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn);
      }

      return _superClass.prototype.parseExprOp.call(this, left, leftStartPos, leftStartLoc, minPrec, noIn);
    };

    _class.prototype.checkReservedWord = function checkReservedWord(word, startLoc, checkKeywords, // eslint-disable-next-line no-unused-vars
    isBinding) {} // Don't bother checking for TypeScript code.
    // Strict mode words may be allowed as in `declare namespace N { const static: number; }`.
    // And we have a type checker anyway, so don't bother having the parser do it.

    /*
    Don't bother doing this check in TypeScript code because:
    1. We may have a nested export statement with the same name:
      export const x = 0;
      export namespace N {
        export const x = 1;
      }
    2. We have a type checker to warn us about this sort of thing.
    */
    ;

    _class.prototype.checkDuplicateExports = function checkDuplicateExports() {};

    _class.prototype.parseImport = function parseImport(node) {
      if (this.match(types.name) && this.lookahead().type === types.eq) {
        return this.tsParseImportEqualsDeclaration(node);
      }

      return _superClass.prototype.parseImport.call(this, node);
    };

    _class.prototype.parseExport = function parseExport(node) {
      if (this.match(types._import)) {
        // `export import A = B;`
        this.expect(types._import);
        return this.tsParseImportEqualsDeclaration(node,
        /* isExport */
        true);
      } else if (this.eat(types.eq)) {
        // `export = x;`
        var assign = node;
        assign.expression = this.parseExpression();
        this.semicolon();
        return this.finishNode(assign, "TSExportAssignment");
      } else if (this.eatContextual("as")) {
        // `export as namespace A;`
        var decl = node; // See `parseNamespaceExportDeclaration` in TypeScript's own parser

        this.expectContextual("namespace");
        decl.id = this.parseIdentifier();
        this.semicolon();
        return this.finishNode(decl, "TSNamespaceExportDeclaration");
      } else {
        return _superClass.prototype.parseExport.call(this, node);
      }
    };

    _class.prototype.parseStatementContent = function parseStatementContent(declaration, topLevel) {
      if (this.state.type === types._const) {
        var ahead = this.lookahead();

        if (ahead.type === types.name && ahead.value === "enum") {
          var node = this.startNode();
          this.expect(types._const);
          this.expectContextual("enum");
          return this.tsParseEnumDeclaration(node,
          /* isConst */
          true);
        }
      }

      return _superClass.prototype.parseStatementContent.call(this, declaration, topLevel);
    };

    _class.prototype.parseAccessModifier = function parseAccessModifier() {
      return this.tsParseModifier(["public", "protected", "private"]);
    };

    _class.prototype.parseClassMember = function parseClassMember(classBody, member, state) {
      var accessibility = this.parseAccessModifier();
      if (accessibility) member.accessibility = accessibility;

      _superClass.prototype.parseClassMember.call(this, classBody, member, state);
    };

    _class.prototype.parseClassMemberWithIsStatic = function parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
      var methodOrProp = member;
      var prop = member;
      var propOrIdx = member;
      var abstract = false,
          readonly = false;
      var mod = this.tsParseModifier(["abstract", "readonly"]);

      switch (mod) {
        case "readonly":
          readonly = true;
          abstract = !!this.tsParseModifier(["abstract"]);
          break;

        case "abstract":
          abstract = true;
          readonly = !!this.tsParseModifier(["readonly"]);
          break;
      }

      if (abstract) methodOrProp.abstract = true;
      if (readonly) propOrIdx.readonly = true;

      if (!abstract && !isStatic && !methodOrProp.accessibility) {
        var idx = this.tsTryParseIndexSignature(member);

        if (idx) {
          classBody.body.push(idx);
          return;
        }
      }

      if (readonly) {
        // Must be a property (if not an index signature).
        methodOrProp.static = isStatic;
        this.parseClassPropertyName(prop);
        this.parsePostMemberNameModifiers(methodOrProp);
        this.pushClassProperty(classBody, prop);
        return;
      }

      _superClass.prototype.parseClassMemberWithIsStatic.call(this, classBody, member, state, isStatic);
    };

    _class.prototype.parsePostMemberNameModifiers = function parsePostMemberNameModifiers(methodOrProp) {
      var optional = this.eat(types.question);
      if (optional) methodOrProp.optional = true;
    }; // Note: The reason we do this in `parseExpressionStatement` and not `parseStatement`
    // is that e.g. `type()` is valid JS, so we must try parsing that first.
    // If it's really a type, we will parse `type` as the statement, and can correct it here
    // by parsing the rest.


    _class.prototype.parseExpressionStatement = function parseExpressionStatement(node, expr) {
      var decl = expr.type === "Identifier" ? this.tsParseExpressionStatement(node, expr) : undefined;
      return decl || _superClass.prototype.parseExpressionStatement.call(this, node, expr);
    }; // export type
    // Should be true for anything parsed by `tsTryParseExportDeclaration`.


    _class.prototype.shouldParseExportDeclaration = function shouldParseExportDeclaration() {
      if (this.match(types.name)) {
        switch (this.state.value) {
          case "abstract":
          case "declare":
          case "enum":
          case "interface":
          case "module":
          case "namespace":
          case "type":
            return true;
        }
      }

      return _superClass.prototype.shouldParseExportDeclaration.call(this);
    }; // An apparent conditional expression could actually be an optional parameter in an arrow function.


    _class.prototype.parseConditional = function parseConditional(expr, noIn, startPos, startLoc, refNeedsArrowPos) {
      // only do the expensive clone if there is a question mark
      // and if we come from inside parens
      if (!refNeedsArrowPos || !this.match(types.question)) {
        return _superClass.prototype.parseConditional.call(this, expr, noIn, startPos, startLoc, refNeedsArrowPos);
      }

      var state = this.state.clone();

      try {
        return _superClass.prototype.parseConditional.call(this, expr, noIn, startPos, startLoc);
      } catch (err) {
        if (!(err instanceof SyntaxError)) {
          // istanbul ignore next: no such error is expected
          throw err;
        }

        this.state = state;
        refNeedsArrowPos.start = err.pos || this.state.start;
        return expr;
      }
    }; // Note: These "type casts" are *not* valid TS expressions.
    // But we parse them here and change them when completing the arrow function.


    _class.prototype.parseParenItem = function parseParenItem(node, startPos, startLoc) {
      node = _superClass.prototype.parseParenItem.call(this, node, startPos, startLoc);

      if (this.eat(types.question)) {
        node.optional = true;
      }

      if (this.match(types.colon)) {
        var typeCastNode = this.startNodeAt(startPos, startLoc);
        typeCastNode.expression = node;
        typeCastNode.typeAnnotation = this.tsParseTypeAnnotation();
        return this.finishNode(typeCastNode, "TSTypeCastExpression");
      }

      return node;
    };

    _class.prototype.parseExportDeclaration = function parseExportDeclaration(node) {
      // "export declare" is equivalent to just "export".
      var isDeclare = this.eatContextual("declare");
      var declaration = void 0;

      if (this.match(types.name)) {
        declaration = this.tsTryParseExportDeclaration();
      }

      if (!declaration) {
        declaration = _superClass.prototype.parseExportDeclaration.call(this, node);
      }

      if (declaration && isDeclare) {
        declaration.declare = true;
      }

      return declaration;
    };

    _class.prototype.parseClassId = function parseClassId(node, isStatement, optionalId) {
      var _superClass$prototype;

      if ((!isStatement || optionalId) && this.isContextual("implements")) {
        return;
      }

      (_superClass$prototype = _superClass.prototype.parseClassId).call.apply(_superClass$prototype, [this].concat(Array.prototype.slice.call(arguments)));

      var typeParameters = this.tsTryParseTypeParameters();
      if (typeParameters) node.typeParameters = typeParameters;
    };

    _class.prototype.parseClassProperty = function parseClassProperty(node) {
      var type = this.tsTryParseTypeAnnotation();
      if (type) node.typeAnnotation = type;
      return _superClass.prototype.parseClassProperty.call(this, node);
    };

    _class.prototype.pushClassMethod = function pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor) {
      var typeParameters = this.tsTryParseTypeParameters();
      if (typeParameters) method.typeParameters = typeParameters;

      _superClass.prototype.pushClassMethod.call(this, classBody, method, isGenerator, isAsync, isConstructor);
    };

    _class.prototype.pushClassPrivateMethod = function pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
      var typeParameters = this.tsTryParseTypeParameters();
      if (typeParameters) method.typeParameters = typeParameters;

      _superClass.prototype.pushClassPrivateMethod.call(this, classBody, method, isGenerator, isAsync);
    };

    _class.prototype.parseClassSuper = function parseClassSuper(node) {
      _superClass.prototype.parseClassSuper.call(this, node);

      if (node.superClass && this.isRelational("<")) {
        node.superTypeParameters = this.tsParseTypeArguments();
      }

      if (this.eatContextual("implements")) {
        node.implements = this.tsParseHeritageClause();
      }
    };

    _class.prototype.parseObjPropValue = function parseObjPropValue(prop) {
      var _superClass$prototype2;

      if (this.isRelational("<")) {
        throw new Error("TODO");
      }

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_superClass$prototype2 = _superClass.prototype.parseObjPropValue).call.apply(_superClass$prototype2, [this, prop].concat(args));
    };

    _class.prototype.parseFunctionParams = function parseFunctionParams(node) {
      var typeParameters = this.tsTryParseTypeParameters();
      if (typeParameters) node.typeParameters = typeParameters;

      _superClass.prototype.parseFunctionParams.call(this, node);
    }; // `let x: number;`


    _class.prototype.parseVarHead = function parseVarHead(decl) {
      _superClass.prototype.parseVarHead.call(this, decl);

      var type = this.tsTryParseTypeAnnotation();

      if (type) {
        decl.id.typeAnnotation = type;
        this.finishNode(decl.id, decl.id.type); // set end position to end of type
      }
    }; // parse the return type of an async arrow function - let foo = (async (): number => {});


    _class.prototype.parseAsyncArrowFromCallExpression = function parseAsyncArrowFromCallExpression(node, call) {
      if (this.match(types.colon)) {
        node.returnType = this.tsParseTypeAnnotation();
      }

      return _superClass.prototype.parseAsyncArrowFromCallExpression.call(this, node, call);
    };

    _class.prototype.parseMaybeAssign = function parseMaybeAssign() {
      // Note: When the JSX plugin is on, type assertions (`<T> x`) aren't valid syntax.
      var jsxError = void 0;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (this.match(types.jsxTagStart)) {
        var context = this.curContext();
        assert(context === types$1.j_oTag); // Only time j_oTag is pushed is right after j_expr.

        assert(this.state.context[this.state.context.length - 2] === types$1.j_expr); // Prefer to parse JSX if possible. But may be an arrow fn.

        var _state = this.state.clone();

        try {
          var _superClass$prototype3;

          return (_superClass$prototype3 = _superClass.prototype.parseMaybeAssign).call.apply(_superClass$prototype3, [this].concat(args));
        } catch (err) {
          if (!(err instanceof SyntaxError)) {
            // istanbul ignore next: no such error is expected
            throw err;
          }

          this.state = _state; // Pop the context added by the jsxTagStart.

          assert(this.curContext() === types$1.j_oTag);
          this.state.context.pop();
          assert(this.curContext() === types$1.j_expr);
          this.state.context.pop();
          jsxError = err;
        }
      }

      if (jsxError === undefined && !this.isRelational("<")) {
        var _superClass$prototype4;

        return (_superClass$prototype4 = _superClass.prototype.parseMaybeAssign).call.apply(_superClass$prototype4, [this].concat(args));
      } // Either way, we're looking at a '<': tt.jsxTagStart or relational.


      var arrowExpression = void 0;
      var typeParameters = void 0;
      var state = this.state.clone();

      try {
        var _superClass$prototype5; // This is similar to TypeScript's `tryParseParenthesizedArrowFunctionExpression`.


        typeParameters = this.tsParseTypeParameters();
        arrowExpression = (_superClass$prototype5 = _superClass.prototype.parseMaybeAssign).call.apply(_superClass$prototype5, [this].concat(args));

        if (arrowExpression.type !== "ArrowFunctionExpression") {
          this.unexpected(); // Go to the catch block (needs a SyntaxError).
        }
      } catch (err) {
        var _superClass$prototype6;

        if (!(err instanceof SyntaxError)) {
          // istanbul ignore next: no such error is expected
          throw err;
        }

        if (jsxError) {
          throw jsxError;
        } // Try parsing a type cast instead of an arrow function.
        // This will never happen outside of JSX.
        // (Because in JSX the '<' should be a jsxTagStart and not a relational.


        assert(!this.hasPlugin("jsx")); // Parsing an arrow function failed, so try a type cast.

        this.state = state; // This will start with a type assertion (via parseMaybeUnary).
        // But don't directly call `this.tsParseTypeAssertion` because we want to handle any binary after it.

        return (_superClass$prototype6 = _superClass.prototype.parseMaybeAssign).call.apply(_superClass$prototype6, [this].concat(args));
      } // Correct TypeScript code should have at least 1 type parameter, but don't crash on bad code.


      if (typeParameters && typeParameters.params.length !== 0) {
        this.resetStartLocationFromNode(arrowExpression, typeParameters.params[0]);
      }

      arrowExpression.typeParameters = typeParameters;
      return arrowExpression;
    }; // Handle type assertions


    _class.prototype.parseMaybeUnary = function parseMaybeUnary(refShorthandDefaultPos) {
      if (!this.hasPlugin("jsx") && this.eatRelational("<")) {
        return this.tsParseTypeAssertion();
      } else {
        return _superClass.prototype.parseMaybeUnary.call(this, refShorthandDefaultPos);
      }
    };

    _class.prototype.parseArrow = function parseArrow(node) {
      if (this.match(types.colon)) {
        // This is different from how the TS parser does it.
        // TS uses lookahead. Babylon parses it as a parenthesized expression and converts.
        var state = this.state.clone();

        try {
          var returnType = this.tsParseTypeOrTypePredicateAnnotation(types.colon);
          if (this.canInsertSemicolon()) this.unexpected();
          if (!this.match(types.arrow)) this.unexpected();
          node.returnType = returnType;
        } catch (err) {
          if (err instanceof SyntaxError) {
            this.state = state;
          } else {
            // istanbul ignore next: no such error is expected
            throw err;
          }
        }
      }

      return _superClass.prototype.parseArrow.call(this, node);
    }; // Allow type annotations inside of a parameter list.


    _class.prototype.parseAssignableListItemTypes = function parseAssignableListItemTypes(param) {
      if (this.eat(types.question)) {
        if (param.type !== "Identifier") {
          throw this.raise(param.start, "A binding pattern parameter cannot be optional in an implementation signature.");
        }

        param.optional = true;
      }

      var type = this.tsTryParseTypeAnnotation();
      if (type) param.typeAnnotation = type;
      return this.finishNode(param, param.type);
    };

    _class.prototype.toAssignable = function toAssignable(node, isBinding, contextDescription) {
      switch (node.type) {
        case "TSTypeCastExpression":
          return _superClass.prototype.toAssignable.call(this, this.typeCastToParameter(node), isBinding, contextDescription);

        case "TSParameterProperty":
          return _superClass.prototype.toAssignable.call(this, node, isBinding, contextDescription);

        default:
          return _superClass.prototype.toAssignable.call(this, node, isBinding, contextDescription);
      }
    };

    _class.prototype.checkLVal = function checkLVal(expr, isBinding, checkClashes, contextDescription) {
      switch (expr.type) {
        case "TSTypeCastExpression":
          // Allow "typecasts" to appear on the left of assignment expressions,
          // because it may be in an arrow function.
          // e.g. `const f = (foo: number = 0) => foo;`
          return;

        case "TSParameterProperty":
          this.checkLVal(expr.parameter, isBinding, checkClashes, "parameter property");
          return;

        default:
          _superClass.prototype.checkLVal.call(this, expr, isBinding, checkClashes, contextDescription);

          return;
      }
    };

    _class.prototype.parseBindingAtom = function parseBindingAtom() {
      switch (this.state.type) {
        case types._this:
          // "this" may be the name of a parameter, so allow it.
          return this.parseIdentifier(
          /* liberal */
          true);

        default:
          return _superClass.prototype.parseBindingAtom.call(this);
      }
    }; // === === === === === === === === === === === === === === === ===
    // Note: All below methods are duplicates of something in flow.js.
    // Not sure what the best way to combine these is.
    // === === === === === === === === === === === === === === === ===


    _class.prototype.isClassMethod = function isClassMethod() {
      return this.isRelational("<") || _superClass.prototype.isClassMethod.call(this);
    };

    _class.prototype.isClassProperty = function isClassProperty() {
      return this.match(types.colon) || _superClass.prototype.isClassProperty.call(this);
    };

    _class.prototype.parseMaybeDefault = function parseMaybeDefault() {
      var _superClass$prototype7;

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var node = (_superClass$prototype7 = _superClass.prototype.parseMaybeDefault).call.apply(_superClass$prototype7, [this].concat(args));

      if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
        this.raise(node.typeAnnotation.start, "Type annotations must come before default assignments, " + "e.g. instead of `age = 25: number` use `age: number = 25`");
      }

      return node;
    }; // ensure that inside types, we bypass the jsx parser plugin


    _class.prototype.readToken = function readToken(code) {
      if (this.state.inType && (code === 62 || code === 60)) {
        return this.finishOp(types.relational, 1);
      } else {
        return _superClass.prototype.readToken.call(this, code);
      }
    };

    _class.prototype.toAssignableList = function toAssignableList(exprList, isBinding, contextDescription) {
      for (var i = 0; i < exprList.length; i++) {
        var expr = exprList[i];

        if (expr && expr.type === "TSTypeCastExpression") {
          exprList[i] = this.typeCastToParameter(expr);
        }
      }

      return _superClass.prototype.toAssignableList.call(this, exprList, isBinding, contextDescription);
    };

    _class.prototype.typeCastToParameter = function typeCastToParameter(node) {
      node.expression.typeAnnotation = node.typeAnnotation;
      return this.finishNodeAt(node.expression, node.expression.type, node.typeAnnotation.end, node.typeAnnotation.loc.end);
    };

    _class.prototype.toReferencedList = function toReferencedList(exprList) {
      for (var i = 0; i < exprList.length; i++) {
        var expr = exprList[i];

        if (expr && expr._exprListItem && expr.type === "TsTypeCastExpression") {
          this.raise(expr.start, "Did not expect a type annotation here.");
        }
      }

      return exprList;
    };

    _class.prototype.shouldParseArrow = function shouldParseArrow() {
      return this.match(types.colon) || _superClass.prototype.shouldParseArrow.call(this);
    };

    _class.prototype.shouldParseAsyncArrow = function shouldParseAsyncArrow() {
      return this.match(types.colon) || _superClass.prototype.shouldParseAsyncArrow.call(this);
    };

    return _class;
  }(superClass);
};

plugins.estree = estreePlugin;
plugins.flow = flowPlugin;
plugins.jsx = jsxPlugin;
plugins.typescript = typescriptPlugin;

function parse(input, options) {
  return getParser(options, input).parse();
}

function parseExpression(input, options) {
  var parser = getParser(options, input);

  if (parser.options.strictMode) {
    parser.state.strict = true;
  }

  return parser.getExpression();
}

function getParser(options, input) {
  var cls = options && options.plugins ? getParserClass(options.plugins) : Parser;
  return new cls(options, input);
}

var parserClassCache = {};
/** Get a Parser class with plugins applied. */

function getParserClass(pluginsFromOptions) {
  if (pluginsFromOptions.indexOf("decorators") >= 0 && pluginsFromOptions.indexOf("decorators2") >= 0) {
    throw new Error("Cannot use decorators and decorators2 plugin together");
  } // Filter out just the plugins that have an actual mixin associated with them.


  var pluginList = pluginsFromOptions.filter(function (p) {
    return p === "estree" || p === "flow" || p === "jsx" || p === "typescript";
  });

  if (pluginList.indexOf("flow") >= 0) {
    // ensure flow plugin loads last
    pluginList = pluginList.filter(function (plugin) {
      return plugin !== "flow";
    });
    pluginList.push("flow");
  }

  if (pluginList.indexOf("flow") >= 0 && pluginList.indexOf("typescript") >= 0) {
    throw new Error("Cannot combine flow and typescript plugins.");
  }

  if (pluginList.indexOf("typescript") >= 0) {
    // ensure typescript plugin loads last
    pluginList = pluginList.filter(function (plugin) {
      return plugin !== "typescript";
    });
    pluginList.push("typescript");
  }

  if (pluginList.indexOf("estree") >= 0) {
    // ensure estree plugin loads first
    pluginList = pluginList.filter(function (plugin) {
      return plugin !== "estree";
    });
    pluginList.unshift("estree");
  }

  var key = pluginList.join("/");
  var cls = parserClassCache[key];

  if (!cls) {
    cls = Parser;

    for (var _iterator = pluginList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var _plugin = _ref;
      cls = plugins[_plugin](cls);
    }

    parserClassCache[key] = cls;
  }

  return cls;
}

exports.parse = parse;
exports.parseExpression = parseExpression;
exports.tokTypes = types;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isArray = __webpack_require__(3),
    isSymbol = __webpack_require__(39);
/** Used to match property names within property paths. */


var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Identifier = Identifier;
exports.SpreadElement = exports.RestElement = RestElement;
exports.ObjectPattern = exports.ObjectExpression = ObjectExpression;
exports.ObjectMethod = ObjectMethod;
exports.ObjectProperty = ObjectProperty;
exports.ArrayPattern = exports.ArrayExpression = ArrayExpression;
exports.RegExpLiteral = RegExpLiteral;
exports.BooleanLiteral = BooleanLiteral;
exports.NullLiteral = NullLiteral;
exports.NumericLiteral = NumericLiteral;
exports.StringLiteral = StringLiteral;

var t = _interopRequireWildcard(__webpack_require__(0));

var _jsesc = _interopRequireDefault(__webpack_require__(449));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function Identifier(node) {
  this.word(node.name);
}

function RestElement(node) {
  this.token("...");
  this.print(node.argument, node);
}

function ObjectExpression(node) {
  var props = node.properties;
  this.token("{");
  this.printInnerComments(node);

  if (props.length) {
    this.space();
    this.printList(props, node, {
      indent: true,
      statement: true
    });
    this.space();
  }

  this.token("}");
}

function ObjectMethod(node) {
  this.printJoin(node.decorators, node);

  this._methodHead(node);

  this.space();
  this.print(node.body, node);
}

function ObjectProperty(node) {
  this.printJoin(node.decorators, node);

  if (node.computed) {
    this.token("[");
    this.print(node.key, node);
    this.token("]");
  } else {
    if (t.isAssignmentPattern(node.value) && t.isIdentifier(node.key) && node.key.name === node.value.left.name) {
      this.print(node.value, node);
      return;
    }

    this.print(node.key, node);

    if (node.shorthand && t.isIdentifier(node.key) && t.isIdentifier(node.value) && node.key.name === node.value.name) {
      return;
    }
  }

  this.token(":");
  this.space();
  this.print(node.value, node);
}

function ArrayExpression(node) {
  var elems = node.elements;
  var len = elems.length;
  this.token("[");
  this.printInnerComments(node);

  for (var i = 0; i < elems.length; i++) {
    var elem = elems[i];

    if (elem) {
      if (i > 0) this.space();
      this.print(elem, node);
      if (i < len - 1) this.token(",");
    } else {
      this.token(",");
    }
  }

  this.token("]");
}

function RegExpLiteral(node) {
  this.word("/" + node.pattern + "/" + node.flags);
}

function BooleanLiteral(node) {
  this.word(node.value ? "true" : "false");
}

function NullLiteral() {
  this.word("null");
}

function NumericLiteral(node) {
  var raw = this.getPossibleRaw(node);
  var value = node.value + "";

  if (raw == null) {
    this.number(value);
  } else if (this.format.minified) {
    this.number(raw.length < value.length ? raw : value);
  } else {
    this.number(raw);
  }
}

function StringLiteral(node, parent) {
  var raw = this.getPossibleRaw(node);

  if (!this.format.minified && raw != null) {
    this.token(raw);
    return;
  }

  var opts = {
    quotes: t.isJSX(parent) ? "double" : this.format.quotes,
    wrap: true
  };

  if (this.format.jsonCompatibleStrings) {
    opts.json = true;
  }

  var val = (0, _jsesc.default)(node.value, opts);
  return this.token(val);
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.findConfigs = findConfigs;
exports.loadConfig = loadConfig;
exports.resolvePlugin = resolvePlugin;
exports.resolvePreset = resolvePreset;
exports.loadPlugin = loadPlugin;
exports.loadPreset = loadPreset;
exports.loadParser = loadParser;
exports.loadGenerator = loadGenerator;

function findConfigs(dirname) {
  return [];
}

function loadConfig(name, dirname) {
  throw new Error("Cannot load " + name + " relative to " + dirname + " in a browser");
}

function resolvePlugin(name, dirname) {
  return null;
}

function resolvePreset(name, dirname) {
  return null;
}

function loadPlugin(name, dirname) {
  throw new Error("Cannot load plugin " + name + " relative to " + dirname + " in a browser");
}

function loadPreset(name, dirname) {
  throw new Error("Cannot load preset " + name + " relative to " + dirname + " in a browser");
}

function loadParser(name, dirname) {
  throw new Error("Cannot load parser " + name + " relative to " + dirname + " in a browser");
}

function loadGenerator(name, dirname) {
  throw new Error("Cannot load generator " + name + " relative to " + dirname + " in a browser");
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.getEnv = getEnv;

function getEnv(defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = "development";
  }

  return process.env.BABEL_ENV || "production" || defaultValue;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var win32 = process && process.platform === 'win32';

var path = __webpack_require__(11);

var fileRe = __webpack_require__(468);

var utils = module.exports;
/**
 * Module dependencies
 */

utils.diff = __webpack_require__(469);
utils.unique = __webpack_require__(471);
utils.braces = __webpack_require__(472);
utils.brackets = __webpack_require__(482);
utils.extglob = __webpack_require__(484);
utils.isExtglob = __webpack_require__(63);
utils.isGlob = __webpack_require__(64);
utils.typeOf = __webpack_require__(104);
utils.normalize = __webpack_require__(485);
utils.omit = __webpack_require__(487);
utils.parseGlob = __webpack_require__(491);
utils.cache = __webpack_require__(495);
/**
 * Get the filename of a filepath
 *
 * @param {String} `string`
 * @return {String}
 */

utils.filename = function filename(fp) {
  var seg = fp.match(fileRe());
  return seg && seg[0];
};
/**
 * Returns a function that returns true if the given
 * pattern is the same as a given `filepath`
 *
 * @param {String} `pattern`
 * @return {Function}
 */


utils.isPath = function isPath(pattern, opts) {
  opts = opts || {};
  return function (fp) {
    var unixified = utils.unixify(fp, opts);

    if (opts.nocase) {
      return pattern.toLowerCase() === unixified.toLowerCase();
    }

    return pattern === unixified;
  };
};
/**
 * Returns a function that returns true if the given
 * pattern contains a `filepath`
 *
 * @param {String} `pattern`
 * @return {Function}
 */


utils.hasPath = function hasPath(pattern, opts) {
  return function (fp) {
    return utils.unixify(pattern, opts).indexOf(fp) !== -1;
  };
};
/**
 * Returns a function that returns true if the given
 * pattern matches or contains a `filepath`
 *
 * @param {String} `pattern`
 * @return {Function}
 */


utils.matchPath = function matchPath(pattern, opts) {
  var fn = opts && opts.contains ? utils.hasPath(pattern, opts) : utils.isPath(pattern, opts);
  return fn;
};
/**
 * Returns a function that returns true if the given
 * regex matches the `filename` of a file path.
 *
 * @param {RegExp} `re`
 * @return {Boolean}
 */


utils.hasFilename = function hasFilename(re) {
  return function (fp) {
    var name = utils.filename(fp);
    return name && re.test(name);
  };
};
/**
 * Coerce `val` to an array
 *
 * @param  {*} val
 * @return {Array}
 */


utils.arrayify = function arrayify(val) {
  return !Array.isArray(val) ? [val] : val;
};
/**
 * Normalize all slashes in a file path or glob pattern to
 * forward slashes.
 */


utils.unixify = function unixify(fp, opts) {
  if (opts && opts.unixify === false) return fp;

  if (opts && opts.unixify === true || win32 || path.sep === '\\') {
    return utils.normalize(fp, false);
  }

  if (opts && opts.unescape === true) {
    return fp ? fp.toString().replace(/\\(\w)/g, '$1') : '';
  }

  return fp;
};
/**
 * Escape/unescape utils
 */


utils.escapePath = function escapePath(fp) {
  return fp.replace(/[\\.]/g, '\\$&');
};

utils.unescapeGlob = function unescapeGlob(fp) {
  return fp.replace(/[\\"']/g, '');
};

utils.escapeRe = function escapeRe(str) {
  return str.replace(/[-[\\$*+?.#^\s{}(|)\]]/g, '\\$&');
};
/**
 * Expose `utils`
 */


module.exports = utils;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(186);

var toString = Object.prototype.toString;
/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }

  if (val === null) {
    return 'null';
  }

  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }

  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }

  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  } // functions


  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  } // array


  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  } // check for instances of RegExp and Date before calling `toString`


  if (val instanceof RegExp) {
    return 'regexp';
  }

  if (val instanceof Date) {
    return 'date';
  } // other objects


  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }

  if (type === '[object Date]') {
    return 'date';
  }

  if (type === '[object Arguments]') {
    return 'arguments';
  }

  if (type === '[object Error]') {
    return 'error';
  } // buffer


  if (isBuffer(val)) {
    return 'buffer';
  } // es6: Map, WeakMap, Set, WeakSet


  if (type === '[object Set]') {
    return 'set';
  }

  if (type === '[object WeakSet]') {
    return 'weakset';
  }

  if (type === '[object Map]') {
    return 'map';
  }

  if (type === '[object WeakMap]') {
    return 'weakmap';
  }

  if (type === '[object Symbol]') {
    return 'symbol';
  } // typed arrays


  if (type === '[object Int8Array]') {
    return 'int8array';
  }

  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }

  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }

  if (type === '[object Int16Array]') {
    return 'int16array';
  }

  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }

  if (type === '[object Int32Array]') {
    return 'int32array';
  }

  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }

  if (type === '[object Float32Array]') {
    return 'float32array';
  }

  if (type === '[object Float64Array]') {
    return 'float64array';
  } // must be a plain object


  return 'object';
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = _default;

function _default() {
  return {
    manipulateOptions: function manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("flow");
    }
  };
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = _default;

function _default() {
  return {
    manipulateOptions: function manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("jsx");
    }
  };
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = _default;

var _babelHelperWrapFunction = _interopRequireDefault(__webpack_require__(204));

var t = _interopRequireWildcard(__webpack_require__(0));

var _forAwait = _interopRequireDefault(__webpack_require__(523));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var awaitVisitor = {
  Function: function Function(path) {
    path.skip();
  },
  AwaitExpression: function AwaitExpression(_ref, _ref2) {
    var node = _ref.node;
    var wrapAwait = _ref2.wrapAwait;
    node.type = "YieldExpression";

    if (wrapAwait) {
      node.argument = t.callExpression(wrapAwait, [node.argument]);
    }
  },
  ForOfStatement: function ForOfStatement(path, _ref3) {
    var file = _ref3.file,
        wrapAwait = _ref3.wrapAwait;
    var node = path.node;
    if (!node.await) return;
    var build = (0, _forAwait.default)(path, {
      getAsyncIterator: file.addHelper("asyncIterator"),
      wrapAwait: wrapAwait
    });
    var declar = build.declar,
        loop = build.loop;
    var block = loop.body;
    path.ensureBlock();

    if (declar) {
      block.body.push(declar);
    }

    block.body = block.body.concat(node.body.body);
    t.inherits(loop, node);
    t.inherits(loop.body, node.body);

    if (build.replaceParent) {
      path.parentPath.replaceWithMultiple(build.node);
    } else {
      path.replaceWithMultiple(build.node);
    }
  }
};

function _default(path, file, helpers) {
  path.traverse(awaitVisitor, {
    file: file,
    wrapAwait: helpers.wrapAwait
  });
  path.node.async = false;
  path.node.generator = true;
  (0, _babelHelperWrapFunction.default)(path, helpers.wrapAsync);
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addDefault = addDefault;
exports.addNamed = addNamed;
exports.addNamespace = addNamespace;
exports.addSideEffect = addSideEffect;
Object.defineProperty(exports, "ImportInjector", {
  enumerable: true,
  get: function get() {
    return _importInjector.default;
  }
});
Object.defineProperty(exports, "isModule", {
  enumerable: true,
  get: function get() {
    return _isModule.default;
  }
});

var _importInjector = _interopRequireDefault(__webpack_require__(525));

var _isModule = _interopRequireDefault(__webpack_require__(206));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function addDefault(path, importedSource, opts) {
  return new _importInjector.default(path).addDefault(importedSource, opts);
}

function addNamed(path, name, importedSource, opts) {
  return new _importInjector.default(path).addNamed(name, importedSource, opts);
}

function addNamespace(path, importedSource, opts) {
  return new _importInjector.default(path).addNamespace(importedSource, opts);
}

function addSideEffect(path, importedSource, opts) {
  return new _importInjector.default(path).addSideEffect(importedSource, opts);
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.rewriteModuleStatementsAndPrepareHeader = rewriteModuleStatementsAndPrepareHeader;
exports.ensureStatementsHoisted = ensureStatementsHoisted;
exports.wrapInterop = wrapInterop;
exports.buildNamespaceInitStatements = buildNamespaceInitStatements;
Object.defineProperty(exports, "isModule", {
  enumerable: true,
  get: function get() {
    return _babelHelperModuleImports.isModule;
  }
});
Object.defineProperty(exports, "hasExports", {
  enumerable: true,
  get: function get() {
    return _normalizeAndLoadMetadata.hasExports;
  }
});
Object.defineProperty(exports, "isSideEffectImport", {
  enumerable: true,
  get: function get() {
    return _normalizeAndLoadMetadata.isSideEffectImport;
  }
});

var _assert = _interopRequireDefault(__webpack_require__(13));

var t = _interopRequireWildcard(__webpack_require__(0));

var _babelTemplate = _interopRequireDefault(__webpack_require__(1));

var _chunk = _interopRequireDefault(__webpack_require__(533));

var _babelHelperModuleImports = __webpack_require__(108);

var _rewriteThis = _interopRequireDefault(__webpack_require__(535));

var _rewriteLiveReferences = _interopRequireDefault(__webpack_require__(536));

var _normalizeAndLoadMetadata = _interopRequireWildcard(__webpack_require__(537));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function rewriteModuleStatementsAndPrepareHeader(path, _ref) {
  var exportName = _ref.exportName,
      strict = _ref.strict,
      allowTopLevelThis = _ref.allowTopLevelThis,
      strictMode = _ref.strictMode,
      loose = _ref.loose,
      noInterop = _ref.noInterop;
  (0, _assert.default)((0, _babelHelperModuleImports.isModule)(path), "Cannot process module statements in a script");
  path.node.sourceType = "script";
  var meta = (0, _normalizeAndLoadMetadata.default)(path, exportName, {
    noInterop: noInterop
  });

  if (!allowTopLevelThis) {
    (0, _rewriteThis.default)(path);
  }

  (0, _rewriteLiveReferences.default)(path, meta);

  if (strictMode !== false) {
    var hasStrict = path.node.directives.some(function (directive) {
      return directive.value.value === "use strict";
    });

    if (!hasStrict) {
      path.unshiftContainer("directives", t.directive(t.directiveLiteral("use strict")));
    }
  }

  var headers = [];

  if ((0, _normalizeAndLoadMetadata.hasExports)(meta) && !strict) {
    headers.push(buildESModuleHeader(meta, loose));
  }

  var nameList = buildExportNameListDeclaration(path, meta);

  if (nameList) {
    meta.exportNameListName = nameList.name;
    headers.push(nameList.statement);
  }

  headers.push.apply(headers, buildExportInitializationStatements(path, meta));
  return {
    meta: meta,
    headers: headers
  };
}

function ensureStatementsHoisted(statements) {
  statements.forEach(function (header) {
    header._blockHoist = 3;
  });
}

function wrapInterop(programPath, expr, type) {
  if (type === "none") {
    return null;
  }

  var helper;

  if (type === "default") {
    helper = "interopRequireDefault";
  } else if (type === "namespace") {
    helper = "interopRequireWildcard";
  } else {
    throw new Error("Unknown interop: " + type);
  }

  return t.callExpression(programPath.hub.file.addHelper(helper), [expr]);
}

var buildNamespaceInit = (0, _babelTemplate.default)("\n  var NAME = SOURCE;\n");
var buildReexportNamespace = (0, _babelTemplate.default)("\n  EXPORTS.NAME = NAMESPACE;\n");

function buildNamespaceInitStatements(metadata, sourceMetadata) {
  var statements = [];

  for (var _iterator = sourceMetadata.importsNamespace, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref2 = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref2 = _i.value;
    }

    var _localName = _ref2;
    if (_localName === sourceMetadata.name) continue;
    statements.push(buildNamespaceInit({
      NAME: t.identifier(_localName),
      SOURCE: t.identifier(sourceMetadata.name)
    }));
  }

  for (var _iterator2 = sourceMetadata.reexportNamespace, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref3;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref3 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref3 = _i2.value;
    }

    var _exportName = _ref3;
    statements.push(buildReexportNamespace({
      EXPORTS: t.identifier(metadata.exportName),
      NAME: t.identifier(_exportName),
      NAMESPACE: t.identifier(sourceMetadata.name)
    }));
  }

  if (sourceMetadata.reexportAll) {
    var statement = buildNamespaceReexport(metadata, sourceMetadata.name);
    statement.loc = sourceMetadata.reexportAll.loc;
    statements.push(statement);
  }

  return statements;
}

var moduleHeader = (0, _babelTemplate.default)("\n  Object.defineProperty(EXPORTS, \"__esModule\", {\n    value: true,\n  })\n");
var moduleHeaderLoose = (0, _babelTemplate.default)("\n  EXPORTS.__esModule = true;\n");

function buildESModuleHeader(metadata, enumerable) {
  if (enumerable === void 0) {
    enumerable = false;
  }

  if (enumerable) {
    return moduleHeaderLoose({
      EXPORTS: t.identifier(metadata.exportName)
    });
  }

  return moduleHeader({
    EXPORTS: t.identifier(metadata.exportName)
  });
}

var namespaceReexport = (0, _babelTemplate.default)("\n  Object.keys(NAMESPACE).forEach(function(key) {\n    if (key === \"default\" || key === \"__esModule\") return;\n    VERIFY_NAME_LIST;\n\n    Object.defineProperty(EXPORTS, key, {\n      enumerable: true,\n      get: function() {\n        return NAMESPACE[key];\n      },\n    });\n  });\n");
var buildNameListCheck = (0, _babelTemplate.default)("\n  if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;\n");

function buildNamespaceReexport(metadata, namespace) {
  return namespaceReexport({
    NAMESPACE: t.identifier(namespace),
    EXPORTS: t.identifier(metadata.exportName),
    VERIFY_NAME_LIST: metadata.exportNameListName ? buildNameListCheck({
      EXPORTS_LIST: t.identifier(metadata.exportNameListName)
    }) : null
  });
}

var reexportGetter = (0, _babelTemplate.default)("\n  Object.defineProperty(EXPORTS, EXPORT_NAME, {\n    enumerable: true,\n    get: function() {\n      return NAMESPACE.IMPORT_NAME;\n    },\n  });\n");

function buildExportNameListDeclaration(programPath, metadata) {
  var exportedVars = Object.create(null);

  for (var _iterator3 = metadata.local.values(), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
    var _ref4;

    if (_isArray3) {
      if (_i3 >= _iterator3.length) break;
      _ref4 = _iterator3[_i3++];
    } else {
      _i3 = _iterator3.next();
      if (_i3.done) break;
      _ref4 = _i3.value;
    }

    var _data2 = _ref4;

    for (var _iterator5 = _data2.names, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
      var _ref6;

      if (_isArray5) {
        if (_i5 >= _iterator5.length) break;
        _ref6 = _iterator5[_i5++];
      } else {
        _i5 = _iterator5.next();
        if (_i5.done) break;
        _ref6 = _i5.value;
      }

      var _name2 = _ref6;
      exportedVars[_name2] = true;
    }
  }

  var hasReexport = false;

  for (var _iterator4 = metadata.source.values(), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
    var _ref5;

    if (_isArray4) {
      if (_i4 >= _iterator4.length) break;
      _ref5 = _iterator4[_i4++];
    } else {
      _i4 = _iterator4.next();
      if (_i4.done) break;
      _ref5 = _i4.value;
    }

    var _data3 = _ref5;

    for (var _iterator6 = _data3.reexports.keys(), _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
      var _ref7;

      if (_isArray6) {
        if (_i6 >= _iterator6.length) break;
        _ref7 = _iterator6[_i6++];
      } else {
        _i6 = _iterator6.next();
        if (_i6.done) break;
        _ref7 = _i6.value;
      }

      var _exportName3 = _ref7;
      exportedVars[_exportName3] = true;
    }

    for (var _iterator7 = _data3.reexportNamespace, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
      var _ref8;

      if (_isArray7) {
        if (_i7 >= _iterator7.length) break;
        _ref8 = _iterator7[_i7++];
      } else {
        _i7 = _iterator7.next();
        if (_i7.done) break;
        _ref8 = _i7.value;
      }

      var _exportName4 = _ref8;
      exportedVars[_exportName4] = true;
    }

    hasReexport = hasReexport || _data3.reexportAll;
  }

  if (!hasReexport || Object.keys(exportedVars).length === 0) return null;
  var name = programPath.scope.generateUidIdentifier("exportNames");
  delete exportedVars.default;
  return {
    name: name.name,
    statement: t.variableDeclaration("var", [t.variableDeclarator(name, t.valueToNode(exportedVars))])
  };
}

function buildExportInitializationStatements(programPath, metadata) {
  var initStatements = [];
  var exportNames = [];

  for (var _iterator8 = metadata.local, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
    var _ref10;

    if (_isArray8) {
      if (_i8 >= _iterator8.length) break;
      _ref10 = _iterator8[_i8++];
    } else {
      _i8 = _iterator8.next();
      if (_i8.done) break;
      _ref10 = _i8.value;
    }

    var _ref12 = _ref10;
    var _localName2 = _ref12[0];
    var _data5 = _ref12[1];

    if (_data5.kind === "import") {} else if (_data5.kind === "hoisted") {
      initStatements.push(buildInitStatement(metadata, _data5.names, t.identifier(_localName2)));
    } else {
      exportNames.push.apply(exportNames, _data5.names);
    }
  }

  for (var _iterator9 = metadata.source.values(), _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
    var _ref11;

    if (_isArray9) {
      if (_i9 >= _iterator9.length) break;
      _ref11 = _iterator9[_i9++];
    } else {
      _i9 = _iterator9.next();
      if (_i9.done) break;
      _ref11 = _i9.value;
    }

    var _data6 = _ref11;

    for (var _iterator10 = _data6.reexports, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
      var _ref14;

      if (_isArray10) {
        if (_i10 >= _iterator10.length) break;
        _ref14 = _iterator10[_i10++];
      } else {
        _i10 = _iterator10.next();
        if (_i10.done) break;
        _ref14 = _i10.value;
      }

      var _ref16 = _ref14;
      var _exportName6 = _ref16[0];
      var _importName = _ref16[1];
      initStatements.push(reexportGetter({
        EXPORTS: t.identifier(metadata.exportName),
        EXPORT_NAME: t.stringLiteral(_exportName6),
        NAMESPACE: t.identifier(_data6.name),
        IMPORT_NAME: t.identifier(_importName)
      }));
    }

    for (var _iterator11 = _data6.reexportNamespace, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();;) {
      var _ref15;

      if (_isArray11) {
        if (_i11 >= _iterator11.length) break;
        _ref15 = _iterator11[_i11++];
      } else {
        _i11 = _iterator11.next();
        if (_i11.done) break;
        _ref15 = _i11.value;
      }

      var _exportName7 = _ref15;
      exportNames.push(_exportName7);
    }
  }

  initStatements.push.apply(initStatements, (0, _chunk.default)(exportNames, 100).map(function (members) {
    return buildInitStatement(metadata, members, programPath.scope.buildUndefinedNode());
  }));
  return initStatements;
}

var initStatement = (0, _babelTemplate.default)("\n  EXPORTS.NAME = VALUE;\n");

function buildInitStatement(metadata, exportNames, initExpr) {
  return t.expressionStatement(exportNames.reduce(function (acc, exportName) {
    return initStatement({
      EXPORTS: t.identifier(metadata.exportName),
      NAME: t.identifier(exportName),
      VALUE: acc
    }).expression;
  }, initExpr));
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(57),
    pullAll = __webpack_require__(541);
/**
 * Removes all given values from `array` using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
 * to remove elements from an array by predicate.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...*} [values] The values to remove.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pull(array, 'a', 'c');
 * console.log(array);
 * // => ['b', 'b']
 */


var pull = baseRest(pullAll);
module.exports = pull;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = _default;

var _esutils = _interopRequireDefault(__webpack_require__(38));

var t = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _default(opts) {
  var visitor = {};

  visitor.JSXNamespacedName = function (path) {
    throw path.buildCodeFrameError("Namespace tags are not supported. ReactJSX is not XML.");
  };

  visitor.JSXElement = {
    exit: function exit(path, file) {
      var callExpr = buildElementCall(path, file);

      if (callExpr) {
        path.replaceWith(t.inherits(callExpr, path.node));
      }
    }
  };
  return visitor;

  function convertJSXIdentifier(node, parent) {
    if (t.isJSXIdentifier(node)) {
      if (node.name === "this" && t.isReferenced(node, parent)) {
        return t.thisExpression();
      } else if (_esutils.default.keyword.isIdentifierNameES6(node.name)) {
        node.type = "Identifier";
      } else {
        return t.stringLiteral(node.name);
      }
    } else if (t.isJSXMemberExpression(node)) {
      return t.memberExpression(convertJSXIdentifier(node.object, node), convertJSXIdentifier(node.property, node));
    }

    return node;
  }

  function convertAttributeValue(node) {
    if (t.isJSXExpressionContainer(node)) {
      return node.expression;
    } else {
      return node;
    }
  }

  function convertAttribute(node) {
    var value = convertAttributeValue(node.value || t.booleanLiteral(true));

    if (t.isStringLiteral(value) && !t.isJSXExpressionContainer(node.value)) {
      value.value = value.value.replace(/\n\s+/g, " ");

      if (value.extra && value.extra.raw) {
        delete value.extra.raw;
      }
    }

    if (t.isValidIdentifier(node.name.name)) {
      node.name.type = "Identifier";
    } else {
      node.name = t.stringLiteral(node.name.name);
    }

    return t.inherits(t.objectProperty(node.name, value), node);
  }

  function buildElementCall(path, file) {
    if (opts.filter && !opts.filter(path.node, file)) return;
    var openingPath = path.get("openingElement");
    openingPath.parent.children = t.react.buildChildren(openingPath.parent);
    var tagExpr = convertJSXIdentifier(openingPath.node.name, openingPath.node);
    var args = [];
    var tagName;

    if (t.isIdentifier(tagExpr)) {
      tagName = tagExpr.name;
    } else if (t.isLiteral(tagExpr)) {
      tagName = tagExpr.value;
    }

    var state = {
      tagExpr: tagExpr,
      tagName: tagName,
      args: args
    };

    if (opts.pre) {
      opts.pre(state, file);
    }

    var attribs = openingPath.node.attributes;

    if (attribs.length) {
      attribs = buildOpeningElementAttributes(attribs, file);
    } else {
      attribs = t.nullLiteral();
    }

    args.push.apply(args, [attribs].concat(path.node.children));

    if (opts.post) {
      opts.post(state, file);
    }

    return state.call || t.callExpression(state.callee, args);
  }

  function pushProps(_props, objs) {
    if (!_props.length) return _props;
    objs.push(t.objectExpression(_props));
    return [];
  }

  function buildOpeningElementAttributes(attribs, file) {
    var _props = [];
    var objs = [];
    var useBuiltIns = file.opts.useBuiltIns || false;

    if (typeof useBuiltIns !== "boolean") {
      throw new Error("transform-react-jsx currently only accepts a boolean option for " + "useBuiltIns (defaults to false)");
    }

    while (attribs.length) {
      var prop = attribs.shift();

      if (t.isJSXSpreadAttribute(prop)) {
        _props = pushProps(_props, objs);
        objs.push(prop.argument);
      } else {
        _props.push(convertAttribute(prop));
      }
    }

    pushProps(_props, objs);

    if (objs.length === 1) {
      attribs = objs[0];
    } else {
      if (!t.isObjectExpression(objs[0])) {
        objs.unshift(t.objectExpression([]));
      }

      var helper = useBuiltIns ? t.memberExpression(t.identifier("Object"), t.identifier("assign")) : file.addHelper("extends");
      attribs = t.callExpression(helper, objs);
    }

    return attribs;
  }
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ECMAScript 6 symbols shim

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = __webpack_require__(14);

var has = __webpack_require__(26);

var DESCRIPTORS = __webpack_require__(32);

var $export = __webpack_require__(43);

var redefine = __webpack_require__(256);

var META = __webpack_require__(575).KEY;

var $fails = __webpack_require__(42);

var shared = __webpack_require__(114);

var setToStringTag = __webpack_require__(115);

var uid = __webpack_require__(70);

var wks = __webpack_require__(15);

var wksExt = __webpack_require__(116);

var wksDefine = __webpack_require__(117);

var enumKeys = __webpack_require__(576);

var isArray = __webpack_require__(581);

var anObject = __webpack_require__(44);

var toIObject = __webpack_require__(35);

var toPrimitive = __webpack_require__(113);

var createDesc = __webpack_require__(69);

var _create = __webpack_require__(125);

var gOPNExt = __webpack_require__(584);

var $GOPD = __webpack_require__(585);

var $DP = __webpack_require__(34);

var $keys = __webpack_require__(71);

var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return _typeof(it) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);

  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }

    return setSymbolDesc(it, key, D);
  }

  return dP(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;

  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }

  return it;
};

var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }

  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }

  return result;
}; // 19.4.1.1 Symbol([description])


if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };

    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(259).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(124).f = $propertyIsEnumerable;
  __webpack_require__(258).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(118)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols

  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    var args = [it];
    var i = 1;
    var replacer, $replacer;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(33)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(68); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(14);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(34).f;

var has = __webpack_require__(26);

var TAG = __webpack_require__(15)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(15);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(14);

var core = __webpack_require__(5);

var LIBRARY = __webpack_require__(118);

var wksExt = __webpack_require__(116);

var defineProperty = __webpack_require__(34).f;

module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt.f(name)
  });
};

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 119 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 120 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 121 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(114)('keys');

var uid = __webpack_require__(70);

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 123 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 124 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(44);

var dPs = __webpack_require__(582);

var enumBugKeys = __webpack_require__(123);

var IE_PROTO = __webpack_require__(122)('IE_PROTO');

var Empty = function Empty() {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(255)('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(583).appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;

  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }

  return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = undefined;

var _for = __webpack_require__(264);

var _for2 = _interopRequireDefault(_for);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var STATEMENT_OR_BLOCK_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
var FLATTENABLE_KEYS = exports.FLATTENABLE_KEYS = ["body", "expressions"];
var FOR_INIT_KEYS = exports.FOR_INIT_KEYS = ["left", "init"];
var COMMENT_KEYS = exports.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
var LOGICAL_OPERATORS = exports.LOGICAL_OPERATORS = ["||", "&&"];
var UPDATE_OPERATORS = exports.UPDATE_OPERATORS = ["++", "--"];
var BOOLEAN_NUMBER_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
var EQUALITY_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
var COMPARISON_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = [].concat(EQUALITY_BINARY_OPERATORS, ["in", "instanceof"]);
var BOOLEAN_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = [].concat(COMPARISON_BINARY_OPERATORS, BOOLEAN_NUMBER_BINARY_OPERATORS);
var NUMBER_BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
var BINARY_OPERATORS = exports.BINARY_OPERATORS = ["+"].concat(NUMBER_BINARY_OPERATORS, BOOLEAN_BINARY_OPERATORS);
var BOOLEAN_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
var NUMBER_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = ["+", "-", "++", "--", "~"];
var STRING_UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = ["typeof"];
var UNARY_OPERATORS = exports.UNARY_OPERATORS = ["void"].concat(BOOLEAN_UNARY_OPERATORS, NUMBER_UNARY_OPERATORS, STRING_UNARY_OPERATORS);
var INHERIT_KEYS = exports.INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
var BLOCK_SCOPED_SYMBOL = exports.BLOCK_SCOPED_SYMBOL = (0, _for2.default)("var used to be block scoped");
var NOT_LOCAL_BINDING = exports.NOT_LOCAL_BINDING = (0, _for2.default)("should not be considered a local binding");

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = undefined;

var _for = __webpack_require__(264);

var _for2 = _interopRequireDefault(_for);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var STATEMENT_OR_BLOCK_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
var FLATTENABLE_KEYS = exports.FLATTENABLE_KEYS = ["body", "expressions"];
var FOR_INIT_KEYS = exports.FOR_INIT_KEYS = ["left", "init"];
var COMMENT_KEYS = exports.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
var LOGICAL_OPERATORS = exports.LOGICAL_OPERATORS = ["||", "&&"];
var UPDATE_OPERATORS = exports.UPDATE_OPERATORS = ["++", "--"];
var BOOLEAN_NUMBER_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
var EQUALITY_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
var COMPARISON_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = [].concat(EQUALITY_BINARY_OPERATORS, ["in", "instanceof"]);
var BOOLEAN_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = [].concat(COMPARISON_BINARY_OPERATORS, BOOLEAN_NUMBER_BINARY_OPERATORS);
var NUMBER_BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
var BINARY_OPERATORS = exports.BINARY_OPERATORS = ["+"].concat(NUMBER_BINARY_OPERATORS, BOOLEAN_BINARY_OPERATORS);
var BOOLEAN_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
var NUMBER_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = ["+", "-", "++", "--", "~"];
var STRING_UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = ["typeof"];
var UNARY_OPERATORS = exports.UNARY_OPERATORS = ["void"].concat(BOOLEAN_UNARY_OPERATORS, NUMBER_UNARY_OPERATORS, STRING_UNARY_OPERATORS);
var INHERIT_KEYS = exports.INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
var BLOCK_SCOPED_SYMBOL = exports.BLOCK_SCOPED_SYMBOL = (0, _for2.default)("var used to be block scoped");
var NOT_LOCAL_BINDING = exports.NOT_LOCAL_BINDING = (0, _for2.default)("should not be considered a local binding");

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = _default;

var _babelPluginTransformEs2015TemplateLiterals = _interopRequireDefault(__webpack_require__(238));

var _babelPluginTransformEs2015Literals = _interopRequireDefault(__webpack_require__(225));

var _babelPluginTransformEs2015FunctionName = _interopRequireDefault(__webpack_require__(223));

var _babelPluginTransformEs2015ArrowFunctions = _interopRequireDefault(__webpack_require__(210));

var _babelPluginTransformEs2015BlockScopedFunctions = _interopRequireDefault(__webpack_require__(211));

var _babelPluginTransformEs2015Classes = _interopRequireDefault(__webpack_require__(213));

var _babelPluginTransformEs2015ObjectSuper = _interopRequireDefault(__webpack_require__(232));

var _babelPluginTransformEs2015ShorthandProperties = _interopRequireDefault(__webpack_require__(234));

var _babelPluginTransformEs2015DuplicateKeys = _interopRequireDefault(__webpack_require__(221));

var _babelPluginTransformEs2015ComputedProperties = _interopRequireDefault(__webpack_require__(219));

var _babelPluginTransformEs2015ForOf = _interopRequireDefault(__webpack_require__(222));

var _babelPluginTransformEs2015StickyRegex = _interopRequireDefault(__webpack_require__(236));

var _babelPluginTransformEs2015UnicodeRegex = _interopRequireDefault(__webpack_require__(240));

var _babelPluginCheckEs2015Constants = _interopRequireDefault(__webpack_require__(191));

var _babelPluginTransformEs2015Spread = _interopRequireDefault(__webpack_require__(235));

var _babelPluginTransformEs2015Parameters = _interopRequireDefault(__webpack_require__(233));

var _babelPluginTransformEs2015Destructuring = _interopRequireDefault(__webpack_require__(220));

var _babelPluginTransformEs2015BlockScoping = _interopRequireDefault(__webpack_require__(212));

var _babelPluginTransformEs2015TypeofSymbol = _interopRequireDefault(__webpack_require__(239));

var _babelPluginTransformEs2015ModulesCommonjs = _interopRequireDefault(__webpack_require__(228));

var _babelPluginTransformEs2015ModulesSystemjs = _interopRequireDefault(__webpack_require__(229));

var _babelPluginTransformEs2015ModulesAmd = _interopRequireDefault(__webpack_require__(226));

var _babelPluginTransformEs2015ModulesUmd = _interopRequireDefault(__webpack_require__(231));

var _babelPluginTransformEs2015Instanceof = _interopRequireDefault(__webpack_require__(224));

var _babelPluginTransformRegenerator = _interopRequireDefault(__webpack_require__(252));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _default(context, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var moduleTypes = ["commonjs", "amd", "umd", "systemjs"];
  var loose = false;
  var modules = "commonjs";
  var spec = false;

  if (opts !== undefined) {
    if (opts.loose !== undefined) loose = opts.loose;
    if (opts.modules !== undefined) modules = opts.modules;
    if (opts.spec !== undefined) spec = opts.spec;
  }

  if (typeof loose !== "boolean") {
    throw new Error("Preset es2015 'loose' option must be a boolean.");
  }

  if (typeof spec !== "boolean") {
    throw new Error("Preset es2015 'spec' option must be a boolean.");
  }

  if (modules !== false && moduleTypes.indexOf(modules) === -1) {
    throw new Error("Preset es2015 'modules' option must be 'false' to indicate no modules\n" + "or a module type which be be one of: 'commonjs' (default), 'amd', 'umd', 'systemjs'");
  }

  var optsLoose = {
    loose: loose
  };
  return {
    plugins: [[_babelPluginTransformEs2015TemplateLiterals.default, {
      loose: loose,
      spec: spec
    }], _babelPluginTransformEs2015Literals.default, _babelPluginTransformEs2015FunctionName.default, [_babelPluginTransformEs2015ArrowFunctions.default, {
      spec: spec
    }], _babelPluginTransformEs2015BlockScopedFunctions.default, [_babelPluginTransformEs2015Classes.default, optsLoose], _babelPluginTransformEs2015ObjectSuper.default, _babelPluginTransformEs2015ShorthandProperties.default, _babelPluginTransformEs2015DuplicateKeys.default, [_babelPluginTransformEs2015ComputedProperties.default, optsLoose], [_babelPluginTransformEs2015ForOf.default, optsLoose], _babelPluginTransformEs2015StickyRegex.default, _babelPluginTransformEs2015UnicodeRegex.default, _babelPluginCheckEs2015Constants.default, [_babelPluginTransformEs2015Spread.default, optsLoose], [_babelPluginTransformEs2015Parameters.default, optsLoose], [_babelPluginTransformEs2015Destructuring.default, optsLoose], _babelPluginTransformEs2015BlockScoping.default, _babelPluginTransformEs2015TypeofSymbol.default, _babelPluginTransformEs2015Instanceof.default, modules === "commonjs" && [_babelPluginTransformEs2015ModulesCommonjs.default, optsLoose], modules === "systemjs" && [_babelPluginTransformEs2015ModulesSystemjs.default, optsLoose], modules === "amd" && [_babelPluginTransformEs2015ModulesAmd.default, optsLoose], modules === "umd" && [_babelPluginTransformEs2015ModulesUmd.default, optsLoose], [_babelPluginTransformRegenerator.default, {
      async: false,
      asyncGenerators: false
    }]].filter(Boolean)
  };
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.loadOptions = loadOptions;
exports.Plugin = Plugin;
Object.defineProperty(exports, "buildExternalHelpers", {
  enumerable: true,
  get: function get() {
    return _buildExternalHelpers.default;
  }
});
Object.defineProperty(exports, "resolvePlugin", {
  enumerable: true,
  get: function get() {
    return _files.resolvePlugin;
  }
});
Object.defineProperty(exports, "resolvePreset", {
  enumerable: true,
  get: function get() {
    return _files.resolvePreset;
  }
});
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function get() {
    return _package.version;
  }
});
Object.defineProperty(exports, "getEnv", {
  enumerable: true,
  get: function get() {
    return _environment.getEnv;
  }
});
Object.defineProperty(exports, "traverse", {
  enumerable: true,
  get: function get() {
    return _babelTraverse.default;
  }
});
Object.defineProperty(exports, "template", {
  enumerable: true,
  get: function get() {
    return _babelTemplate.default;
  }
});
Object.defineProperty(exports, "transform", {
  enumerable: true,
  get: function get() {
    return _transform.default;
  }
});
Object.defineProperty(exports, "transformFromAst", {
  enumerable: true,
  get: function get() {
    return _transformAst.default;
  }
});
Object.defineProperty(exports, "transformFile", {
  enumerable: true,
  get: function get() {
    return _transformFile.default;
  }
});
Object.defineProperty(exports, "transformFileSync", {
  enumerable: true,
  get: function get() {
    return _transformFileSync.default;
  }
});
exports.types = exports.DEFAULT_EXTENSIONS = exports.OptionManager = void 0;

var _buildExternalHelpers = _interopRequireDefault(__webpack_require__(278));

var _files = __webpack_require__(101);

var _package = __webpack_require__(456);

var _environment = __webpack_require__(102);

var _types = _interopRequireWildcard(__webpack_require__(0));

exports.types = _types;

var _babelTraverse = _interopRequireDefault(__webpack_require__(4));

var _babelTemplate = _interopRequireDefault(__webpack_require__(1));

var _config = _interopRequireDefault(__webpack_require__(62));

var _transform = _interopRequireDefault(__webpack_require__(502));

var _transformAst = _interopRequireDefault(__webpack_require__(517));

var _transformFile = _interopRequireDefault(__webpack_require__(518));

var _transformFileSync = _interopRequireDefault(__webpack_require__(519));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function loadOptions(opts) {
  var config = (0, _config.default)(opts);
  return config ? config.options : null;
}

var OptionManager = function () {
  function OptionManager() {}

  var _proto = OptionManager.prototype;

  _proto.init = function init(opts) {
    return loadOptions(opts);
  };

  return OptionManager;
}();

exports.OptionManager = OptionManager;

function Plugin(alias) {
  throw new Error("The (" + alias + ") Babel 5 plugin is being run with an unsupported Babel version.");
}

var DEFAULT_EXTENSIONS = Object.freeze([".js", ".jsx", ".es6", ".es", ".mjs"]);
exports.DEFAULT_EXTENSIONS = DEFAULT_EXTENSIONS;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.get = get;
exports.default = exports.list = void 0;

var _babelTraverse = _interopRequireDefault(__webpack_require__(4));

var t = _interopRequireWildcard(__webpack_require__(0));

var _helpers = _interopRequireDefault(__webpack_require__(410));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function makePath(path) {
  var parts = [];

  for (; path.parentPath; path = path.parentPath) {
    parts.push(path.key);
    if (path.inList) parts.push(path.listKey);
  }

  return parts.reverse().join(".");
}

function getHelperMetadata(file) {
  var globals = new Set();
  var localBindingNames = new Set();
  var dependencies = new Map();
  var exportName;
  var exportPath;
  var exportBindingAssignments = [];
  var importPaths = [];
  var importBindingsReferences = [];
  (0, _babelTraverse.default)(file, {
    ImportDeclaration: function ImportDeclaration(child) {
      var name = child.node.source.value;

      if (!_helpers.default[name]) {
        throw child.buildCodeFrameError("Unknown helper " + name);
      }

      if (child.get("specifiers").length !== 1 || !child.get("specifiers.0").isImportDefaultSpecifier()) {
        throw child.buildCodeFrameError("Helpers can only import a default value");
      }

      var bindingIdentifier = child.node.specifiers[0].local;
      dependencies.set(bindingIdentifier, name);
      importPaths.push(makePath(child));
    },
    ExportDefaultDeclaration: function ExportDefaultDeclaration(child) {
      var decl = child.get("declaration");

      if (decl.isFunctionDeclaration()) {
        if (!decl.node.id) {
          throw decl.buildCodeFrameError("Helpers should give names to their exported func declaration");
        }

        exportName = decl.node.id.name;
      }

      exportPath = makePath(child);
    },
    ExportAllDeclaration: function ExportAllDeclaration(child) {
      throw child.buildCodeFrameError("Helpers can only export default");
    },
    ExportNamedDeclaration: function ExportNamedDeclaration(child) {
      throw child.buildCodeFrameError("Helpers can only export default");
    },
    Statement: function Statement(child) {
      if (child.isModuleDeclaration()) return;
      child.skip();
    }
  });
  (0, _babelTraverse.default)(file, {
    Program: function Program(path) {
      var bindings = path.scope.getAllBindings();
      Object.keys(bindings).forEach(function (name) {
        if (name === exportName) return;
        if (dependencies.has(bindings[name].identifier)) return;
        localBindingNames.add(name);
      });
    },
    ReferencedIdentifier: function ReferencedIdentifier(child) {
      var name = child.node.name;
      var binding = child.scope.getBinding(name, true);

      if (!binding) {
        globals.add(name);
      } else if (dependencies.has(binding.identifier)) {
        importBindingsReferences.push(makePath(child));
      }
    },
    AssignmentExpression: function AssignmentExpression(child) {
      var left = child.get("left");
      if (!(exportName in left.getBindingIdentifiers())) return;

      if (!left.isIdentifier()) {
        throw left.buildCodeFrameError("Only simple assignments to exports are allowed in helpers");
      }

      var binding = child.scope.getBinding(exportName);

      if (binding && binding.scope.path.isProgram()) {
        exportBindingAssignments.push(makePath(child));
      }
    }
  });
  if (!exportPath) throw new Error("Helpers must default-export something.");
  exportBindingAssignments.reverse();
  return {
    globals: Array.from(globals),
    localBindingNames: Array.from(localBindingNames),
    dependencies: dependencies,
    exportBindingAssignments: exportBindingAssignments,
    exportPath: exportPath,
    exportName: exportName,
    importBindingsReferences: importBindingsReferences,
    importPaths: importPaths
  };
}

function permuteHelperAST(file, metadata, id, getLocalBindings, getDependency) {
  if (getLocalBindings && !id) {
    throw new Error("Unexpected local bindings for module-based helpers.");
  }

  if (!id) return;
  var localBindingNames = metadata.localBindingNames,
      dependencies = metadata.dependencies,
      exportBindingAssignments = metadata.exportBindingAssignments,
      exportPath = metadata.exportPath,
      exportName = metadata.exportName,
      importBindingsReferences = metadata.importBindingsReferences,
      importPaths = metadata.importPaths;
  var dependenciesRefs = {};
  dependencies.forEach(function (name, id) {
    dependenciesRefs[id.name] = typeof getDependency === "function" ? getDependency(name) : id;
  });
  var toRename = {};
  var bindings = new Set(getLocalBindings && getLocalBindings() || []);
  localBindingNames.forEach(function (name) {
    var newName = name;

    while (bindings.has(newName)) {
      newName = "_" + newName;
    }

    if (newName !== name) toRename[name] = newName;
  });

  if (id.type === "Identifier" && exportName !== id.name) {
    toRename[exportName] = id.name;
  }

  (0, _babelTraverse.default)(file, {
    Program: function Program(path) {
      var exp = path.get(exportPath);
      var imps = importPaths.map(function (p) {
        return path.get(p);
      });
      var impsBindingRefs = importBindingsReferences.map(function (p) {
        return path.get(p);
      });
      var decl = exp.get("declaration");

      if (id.type === "Identifier") {
        if (decl.isFunctionDeclaration()) {
          exp.replaceWith(decl);
        } else {
          exp.replaceWith(t.variableDeclaration("var", [t.variableDeclarator(id, decl.node)]));
        }
      } else if (id.type === "MemberExpression") {
        if (decl.isFunctionDeclaration()) {
          exportBindingAssignments.forEach(function (assignPath) {
            var assign = path.get(assignPath);
            assign.replaceWith(t.assignmentExpression("=", id, assign.node));
          });
          exp.replaceWith(decl);
          path.pushContainer("body", t.expressionStatement(t.assignmentExpression("=", id, t.identifier(exportName))));
        } else {
          exp.replaceWith(t.expressionStatement(t.assignmentExpression("=", id, decl.node)));
        }
      } else {
        throw new Error("Unexpected helper format.");
      }

      Object.keys(toRename).forEach(function (name) {
        path.scope.rename(name, toRename[name]);
      });

      for (var _iterator = imps, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var _path3 = _ref;

        _path3.remove();
      }

      for (var _iterator2 = impsBindingRefs, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var _path4 = _ref2;
        var node = t.cloneDeep(dependenciesRefs[_path4.node.name]);

        _path4.replaceWith(node);
      }

      path.stop();
    }
  });
}

var helperData = {};

function loadHelper(name) {
  if (!helperData[name]) {
    if (!_helpers.default[name]) throw new ReferenceError("Unknown helper " + name);

    var fn = function fn() {
      var ast = _helpers.default[name]();

      return t.file(t.program(Array.isArray(ast) ? ast : [ast]));
    };

    var metadata = getHelperMetadata(fn());
    metadata.dependencies.forEach(loadHelper);

    helperData[name] = function (getDependency, id, getLocalBindings) {
      var file = fn();
      permuteHelperAST(file, metadata, id, getLocalBindings, getDependency);
      return {
        nodes: file.program.body,
        globals: metadata.globals
      };
    };
  }

  return helperData[name];
}

function get(name, getDependency, id, getLocalBindings) {
  var helper = loadHelper(name);
  return helper(getDependency, id, getLocalBindings);
}

var list = Object.keys(_helpers.default).map(function (name) {
  return name.replace(/^_/, "");
}).filter(function (name) {
  return name !== "__esModule";
});
exports.list = list;
var _default = get;
exports.default = _default;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ForAwaitStatement = exports.NumericLiteralTypeAnnotation = exports.ExistentialTypeParam = exports.SpreadProperty = exports.RestProperty = exports.Flow = exports.Pure = exports.Generated = exports.User = exports.Var = exports.BlockScoped = exports.Referenced = exports.Scope = exports.Expression = exports.Statement = exports.BindingIdentifier = exports.ReferencedMemberExpression = exports.ReferencedIdentifier = void 0;

var t = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var ReferencedIdentifier = {
  types: ["Identifier", "JSXIdentifier"],
  checkPath: function checkPath(_ref, opts) {
    var node = _ref.node,
        parent = _ref.parent;

    if (!t.isIdentifier(node, opts) && !t.isJSXMemberExpression(parent, opts)) {
      if (t.isJSXIdentifier(node, opts)) {
        if (t.react.isCompatTag(node.name)) return false;
      } else {
        return false;
      }
    }

    return t.isReferenced(node, parent);
  }
};
exports.ReferencedIdentifier = ReferencedIdentifier;
var ReferencedMemberExpression = {
  types: ["MemberExpression"],
  checkPath: function checkPath(_ref2) {
    var node = _ref2.node,
        parent = _ref2.parent;
    return t.isMemberExpression(node) && t.isReferenced(node, parent);
  }
};
exports.ReferencedMemberExpression = ReferencedMemberExpression;
var BindingIdentifier = {
  types: ["Identifier"],
  checkPath: function checkPath(_ref3) {
    var node = _ref3.node,
        parent = _ref3.parent;
    return t.isIdentifier(node) && t.isBinding(node, parent);
  }
};
exports.BindingIdentifier = BindingIdentifier;
var Statement = {
  types: ["Statement"],
  checkPath: function checkPath(_ref4) {
    var node = _ref4.node,
        parent = _ref4.parent;

    if (t.isStatement(node)) {
      if (t.isVariableDeclaration(node)) {
        if (t.isForXStatement(parent, {
          left: node
        })) return false;
        if (t.isForStatement(parent, {
          init: node
        })) return false;
      }

      return true;
    } else {
      return false;
    }
  }
};
exports.Statement = Statement;
var Expression = {
  types: ["Expression"],
  checkPath: function checkPath(path) {
    if (path.isIdentifier()) {
      return path.isReferencedIdentifier();
    } else {
      return t.isExpression(path.node);
    }
  }
};
exports.Expression = Expression;
var Scope = {
  types: ["Scopable"],
  checkPath: function checkPath(path) {
    return t.isScope(path.node, path.parent);
  }
};
exports.Scope = Scope;
var Referenced = {
  checkPath: function checkPath(path) {
    return t.isReferenced(path.node, path.parent);
  }
};
exports.Referenced = Referenced;
var BlockScoped = {
  checkPath: function checkPath(path) {
    return t.isBlockScoped(path.node);
  }
};
exports.BlockScoped = BlockScoped;
var Var = {
  types: ["VariableDeclaration"],
  checkPath: function checkPath(path) {
    return t.isVar(path.node);
  }
};
exports.Var = Var;
var User = {
  checkPath: function checkPath(path) {
    return path.node && !!path.node.loc;
  }
};
exports.User = User;
var Generated = {
  checkPath: function checkPath(path) {
    return !path.isUser();
  }
};
exports.Generated = Generated;
var Pure = {
  checkPath: function checkPath(path, opts) {
    return path.scope.isPure(path.node, opts);
  }
};
exports.Pure = Pure;
var Flow = {
  types: ["Flow", "ImportDeclaration", "ExportDeclaration", "ImportSpecifier"],
  checkPath: function checkPath(_ref5) {
    var node = _ref5.node;

    if (t.isFlow(node)) {
      return true;
    } else if (t.isImportDeclaration(node)) {
      return node.importKind === "type" || node.importKind === "typeof";
    } else if (t.isExportDeclaration(node)) {
      return node.exportKind === "type";
    } else if (t.isImportSpecifier(node)) {
      return node.importKind === "type" || node.importKind === "typeof";
    } else {
      return false;
    }
  }
};
exports.Flow = Flow;
var RestProperty = {
  types: ["RestElement"],
  checkPath: function checkPath(path) {
    return path.parentPath && path.parentPath.isObjectPattern();
  }
};
exports.RestProperty = RestProperty;
var SpreadProperty = {
  types: ["RestElement"],
  checkPath: function checkPath(path) {
    return path.parentPath && path.parentPath.isObjectExpression();
  }
};
exports.SpreadProperty = SpreadProperty;
var ExistentialTypeParam = {
  types: ["ExistsTypeAnnotation"]
};
exports.ExistentialTypeParam = ExistentialTypeParam;
var NumericLiteralTypeAnnotation = {
  types: ["NumberLiteralTypeAnnotation"]
};
exports.NumericLiteralTypeAnnotation = NumericLiteralTypeAnnotation;
var ForAwaitStatement = {
  types: ["ForOfStatement"],
  checkPath: function checkPath(_ref6) {
    var node = _ref6.node;
    return node.await === true;
  }
};
exports.ForAwaitStatement = ForAwaitStatement;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(45),
    arrayEach = __webpack_require__(309),
    assignValue = __webpack_require__(135),
    baseAssign = __webpack_require__(310),
    baseAssignIn = __webpack_require__(317),
    cloneBuffer = __webpack_require__(140),
    copyArray = __webpack_require__(84),
    copySymbols = __webpack_require__(320),
    copySymbolsIn = __webpack_require__(322),
    getAllKeys = __webpack_require__(143),
    getAllKeysIn = __webpack_require__(323),
    getTag = __webpack_require__(145),
    initCloneArray = __webpack_require__(327),
    initCloneByTag = __webpack_require__(328),
    initCloneObject = __webpack_require__(151),
    isArray = __webpack_require__(3),
    isBuffer = __webpack_require__(51),
    isObject = __webpack_require__(7),
    keys = __webpack_require__(29);
/** Used to compose bitmasks for cloning. */


var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */

var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */

function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }

  if (result !== undefined) {
    return result;
  }

  if (!isObject(value)) {
    return value;
  }

  var isArr = isArray(value);

  if (isArr) {
    result = initCloneArray(value);

    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }

    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);

      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }

      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  } // Check for circular references and return its corresponding clone.


  stack || (stack = new Stack());
  var stacked = stack.get(value);

  if (stacked) {
    return stacked;
  }

  stack.set(value, result);
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    } // Recursively populate clone (susceptible to call stack limits).


    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ }),
/* 134 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(79),
    eq = __webpack_require__(27);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(21);

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(311),
    isArguments = __webpack_require__(50),
    isArray = __webpack_require__(3),
    isBuffer = __webpack_require__(51),
    isIndex = __webpack_require__(80),
    isTypedArray = __webpack_require__(81);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var freeGlobal = __webpack_require__(133);
/** Detect free variable `exports`. */


var freeExports = ( false ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))

/***/ }),
/* 139 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = __webpack_require__(6);
/** Detect free variable `exports`. */


var freeExports = ( false ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))

/***/ }),
/* 141 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(86),
    getPrototype = __webpack_require__(87),
    getSymbols = __webpack_require__(85),
    stubArray = __webpack_require__(141);
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
  var result = [];

  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }

  return result;
};
module.exports = getSymbolsIn;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(144),
    getSymbols = __webpack_require__(85),
    keys = __webpack_require__(29);
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(86),
    isArray = __webpack_require__(3);
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */


function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(324),
    Map = __webpack_require__(76),
    Promise = __webpack_require__(325),
    Set = __webpack_require__(146),
    WeakMap = __webpack_require__(326),
    baseGetTag = __webpack_require__(12),
    toSource = __webpack_require__(134);
/** `Object#toString` result references. */


var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}

module.exports = getTag;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(21),
    root = __webpack_require__(6);
/* Built-in method references that are verified to be native. */


var Set = getNative(root, 'Set');
module.exports = Set;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(6);
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),
/* 148 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }

  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }

  return accumulator;
}

module.exports = arrayReduce;

/***/ }),
/* 149 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(88);
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(336),
    getPrototype = __webpack_require__(87),
    isPrototype = __webpack_require__(83);
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(78),
    setCacheAdd = __webpack_require__(338),
    setCacheHas = __webpack_require__(339);
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */


function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

/***/ }),
/* 153 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getBindingIdentifiers = getBindingIdentifiers;
exports.getOuterBindingIdentifiers = getOuterBindingIdentifiers;

var t = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function getBindingIdentifiers(node, duplicates, outerOnly) {
  var search = [].concat(node);
  var ids = Object.create(null);

  while (search.length) {
    var id = search.shift();
    if (!id) continue;
    var keys = t.getBindingIdentifiers.keys[id.type];

    if (t.isIdentifier(id)) {
      if (duplicates) {
        var _ids = ids[id.name] = ids[id.name] || [];

        _ids.push(id);
      } else {
        ids[id.name] = id;
      }

      continue;
    }

    if (t.isExportDeclaration(id)) {
      if (t.isDeclaration(id.declaration)) {
        search.push(id.declaration);
      }

      continue;
    }

    if (outerOnly) {
      if (t.isFunctionDeclaration(id)) {
        search.push(id.id);
        continue;
      }

      if (t.isFunctionExpression(id)) {
        continue;
      }
    }

    if (keys) {
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];

        if (id[key]) {
          search = search.concat(id[key]);
        }
      }
    }
  }

  return ids;
}

getBindingIdentifiers.keys = {
  DeclareClass: ["id"],
  DeclareFunction: ["id"],
  DeclareModule: ["id"],
  DeclareVariable: ["id"],
  InterfaceDeclaration: ["id"],
  TypeAlias: ["id"],
  OpaqueType: ["id"],
  CatchClause: ["param"],
  LabeledStatement: ["label"],
  UnaryExpression: ["argument"],
  AssignmentExpression: ["left"],
  ImportSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportDefaultSpecifier: ["local"],
  ImportDeclaration: ["specifiers"],
  ExportSpecifier: ["exported"],
  ExportNamespaceSpecifier: ["exported"],
  ExportDefaultSpecifier: ["exported"],
  FunctionDeclaration: ["id", "params"],
  FunctionExpression: ["id", "params"],
  ForInStatement: ["left"],
  ForOfStatement: ["left"],
  ClassDeclaration: ["id"],
  ClassExpression: ["id"],
  RestElement: ["argument"],
  UpdateExpression: ["argument"],
  ObjectProperty: ["value"],
  AssignmentPattern: ["left"],
  ArrayPattern: ["elements"],
  ObjectPattern: ["properties"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id"]
};

function getOuterBindingIdentifiers(node, duplicates) {
  return getBindingIdentifiers(node, duplicates, true);
}

/***/ }),
/* 155 */
/***/ (function(module, exports) {

/*
  Copyright (C) 2013-2014 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2014 Ivan Nikulin <ifaaan@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
(function () {
  'use strict';

  var ES6Regex, ES5Regex, NON_ASCII_WHITESPACES, IDENTIFIER_START, IDENTIFIER_PART, ch; // See `tools/generate-identifier-regex.js`.

  ES5Regex = {
    // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierStart:
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierPart:
    NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
  };
  ES6Regex = {
    // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierStart:
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,
    // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierPart:
    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
  };

  function isDecimalDigit(ch) {
    return 0x30 <= ch && ch <= 0x39; // 0..9
  }

  function isHexDigit(ch) {
    return 0x30 <= ch && ch <= 0x39 || // 0..9
    0x61 <= ch && ch <= 0x66 || // a..f
    0x41 <= ch && ch <= 0x46; // A..F
  }

  function isOctalDigit(ch) {
    return ch >= 0x30 && ch <= 0x37; // 0..7
  } // 7.2 White Space


  NON_ASCII_WHITESPACES = [0x1680, 0x180E, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF];

  function isWhiteSpace(ch) {
    return ch === 0x20 || ch === 0x09 || ch === 0x0B || ch === 0x0C || ch === 0xA0 || ch >= 0x1680 && NON_ASCII_WHITESPACES.indexOf(ch) >= 0;
  } // 7.3 Line Terminators


  function isLineTerminator(ch) {
    return ch === 0x0A || ch === 0x0D || ch === 0x2028 || ch === 0x2029;
  } // 7.6 Identifier Names and Identifiers


  function fromCodePoint(cp) {
    if (cp <= 0xFFFF) {
      return String.fromCharCode(cp);
    }

    var cu1 = String.fromCharCode(Math.floor((cp - 0x10000) / 0x400) + 0xD800);
    var cu2 = String.fromCharCode((cp - 0x10000) % 0x400 + 0xDC00);
    return cu1 + cu2;
  }

  IDENTIFIER_START = new Array(0x80);

  for (ch = 0; ch < 0x80; ++ch) {
    IDENTIFIER_START[ch] = ch >= 0x61 && ch <= 0x7A || // a..z
    ch >= 0x41 && ch <= 0x5A || // A..Z
    ch === 0x24 || ch === 0x5F; // $ (dollar) and _ (underscore)
  }

  IDENTIFIER_PART = new Array(0x80);

  for (ch = 0; ch < 0x80; ++ch) {
    IDENTIFIER_PART[ch] = ch >= 0x61 && ch <= 0x7A || // a..z
    ch >= 0x41 && ch <= 0x5A || // A..Z
    ch >= 0x30 && ch <= 0x39 || // 0..9
    ch === 0x24 || ch === 0x5F; // $ (dollar) and _ (underscore)
  }

  function isIdentifierStartES5(ch) {
    return ch < 0x80 ? IDENTIFIER_START[ch] : ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
  }

  function isIdentifierPartES5(ch) {
    return ch < 0x80 ? IDENTIFIER_PART[ch] : ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
  }

  function isIdentifierStartES6(ch) {
    return ch < 0x80 ? IDENTIFIER_START[ch] : ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
  }

  function isIdentifierPartES6(ch) {
    return ch < 0x80 ? IDENTIFIER_PART[ch] : ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
  }

  module.exports = {
    isDecimalDigit: isDecimalDigit,
    isHexDigit: isHexDigit,
    isOctalDigit: isOctalDigit,
    isWhiteSpace: isWhiteSpace,
    isLineTerminator: isLineTerminator,
    isIdentifierStartES5: isIdentifierStartES5,
    isIdentifierPartES5: isIdentifierPartES5,
    isIdentifierStartES6: isIdentifierStartES6,
    isIdentifierPartES6: isIdentifierPartES6
  };
})();
/* vim: set sw=4 ts=4 et tw=80 : */

/***/ }),
/* 156 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};

  var type = _typeof(val);

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, n, name) {
  if (ms < n) {
    return;
  }

  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }

  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(366),
    keys = __webpack_require__(29);
/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */


function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var baseRepeat = __webpack_require__(367),
    isIterateeCall = __webpack_require__(56),
    toInteger = __webpack_require__(55),
    toString = __webpack_require__(159);
/**
 * Repeats the given string `n` times.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to repeat.
 * @param {number} [n=1] The number of times to repeat the string.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the repeated string.
 * @example
 *
 * _.repeat('*', 3);
 * // => '***'
 *
 * _.repeat('abc', 2);
 * // => 'abcabc'
 *
 * _.repeat('abc', 0);
 * // => ''
 */


function repeat(string, n, guard) {
  if (guard ? isIterateeCall(string, n, guard) : n === undefined) {
    n = 1;
  } else {
    n = toInteger(n);
  }

  return baseRepeat(toString(string), n);
}

module.exports = repeat;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(368);
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var Binding = function () {
  function Binding(_ref) {
    var identifier = _ref.identifier,
        scope = _ref.scope,
        path = _ref.path,
        kind = _ref.kind;
    this.identifier = identifier;
    this.scope = scope;
    this.path = path;
    this.kind = kind;
    this.constantViolations = [];
    this.constant = true;
    this.referencePaths = [];
    this.referenced = false;
    this.references = 0;
    this.clearValue();
  }

  var _proto = Binding.prototype;

  _proto.deoptValue = function deoptValue() {
    this.clearValue();
    this.hasDeoptedValue = true;
  };

  _proto.setValue = function setValue(value) {
    if (this.hasDeoptedValue) return;
    this.hasValue = true;
    this.value = value;
  };

  _proto.clearValue = function clearValue() {
    this.hasDeoptedValue = false;
    this.hasValue = false;
    this.value = null;
  };

  _proto.reassign = function reassign(path) {
    this.constant = false;

    if (this.constantViolations.indexOf(path) !== -1) {
      return;
    }

    this.constantViolations.push(path);
  };

  _proto.reference = function reference(path) {
    if (this.referencePaths.indexOf(path) !== -1) {
      return;
    }

    this.referenced = true;
    this.references++;
    this.referencePaths.push(path);
  };

  _proto.dereference = function dereference() {
    this.references--;
    this.referenced = !!this.references;
  };

  return Binding;
}();

exports.default = Binding;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(162),
    assignInWith = __webpack_require__(370),
    baseRest = __webpack_require__(57),
    customDefaultsAssignIn = __webpack_require__(376);
/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */


var defaults = baseRest(function (args) {
  args.push(undefined, customDefaultsAssignIn);
  return apply(assignInWith, undefined, args);
});
module.exports = defaults;

/***/ }),
/* 162 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

module.exports = apply;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(389); // NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)


var reverseKeywords = {};

for (var key in cssKeywords) {
  if (cssKeywords.hasOwnProperty(key)) {
    reverseKeywords[cssKeywords[key]] = key;
  }
}

var convert = module.exports = {
  rgb: {
    channels: 3,
    labels: 'rgb'
  },
  hsl: {
    channels: 3,
    labels: 'hsl'
  },
  hsv: {
    channels: 3,
    labels: 'hsv'
  },
  hwb: {
    channels: 3,
    labels: 'hwb'
  },
  cmyk: {
    channels: 4,
    labels: 'cmyk'
  },
  xyz: {
    channels: 3,
    labels: 'xyz'
  },
  lab: {
    channels: 3,
    labels: 'lab'
  },
  lch: {
    channels: 3,
    labels: 'lch'
  },
  hex: {
    channels: 1,
    labels: ['hex']
  },
  keyword: {
    channels: 1,
    labels: ['keyword']
  },
  ansi16: {
    channels: 1,
    labels: ['ansi16']
  },
  ansi256: {
    channels: 1,
    labels: ['ansi256']
  },
  hcg: {
    channels: 3,
    labels: ['h', 'c', 'g']
  },
  apple: {
    channels: 3,
    labels: ['r16', 'g16', 'b16']
  },
  gray: {
    channels: 1,
    labels: ['gray']
  }
}; // hide .channels and .labels properties

for (var model in convert) {
  if (convert.hasOwnProperty(model)) {
    if (!('channels' in convert[model])) {
      throw new Error('missing channels property: ' + model);
    }

    if (!('labels' in convert[model])) {
      throw new Error('missing channel labels property: ' + model);
    }

    if (convert[model].labels.length !== convert[model].channels) {
      throw new Error('channel and label counts mismatch: ' + model);
    }

    var channels = convert[model].channels;
    var labels = convert[model].labels;
    delete convert[model].channels;
    delete convert[model].labels;
    Object.defineProperty(convert[model], 'channels', {
      value: channels
    });
    Object.defineProperty(convert[model], 'labels', {
      value: labels
    });
  }
}

convert.rgb.hsl = function (rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;
  var min = Math.min(r, g, b);
  var max = Math.max(r, g, b);
  var delta = max - min;
  var h;
  var s;
  var l;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
  var r = rgb[0];
  var g = rgb[1];
  var b = rgb[2];
  var min = Math.min(r, g, b);
  var max = Math.max(r, g, b);
  var delta = max - min;
  var h;
  var s;
  var v;

  if (max === 0) {
    s = 0;
  } else {
    s = delta / max * 1000 / 10;
  }

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  v = max / 255 * 1000 / 10;
  return [h, s, v];
};

convert.rgb.hwb = function (rgb) {
  var r = rgb[0];
  var g = rgb[1];
  var b = rgb[2];
  var h = convert.rgb.hsl(rgb)[0];
  var w = 1 / 255 * Math.min(r, Math.min(g, b));
  b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
  return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;
  var c;
  var m;
  var y;
  var k;
  k = Math.min(1 - r, 1 - g, 1 - b);
  c = (1 - r - k) / (1 - k) || 0;
  m = (1 - g - k) / (1 - k) || 0;
  y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
};
/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */


function comparativeDistance(x, y) {
  return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
}

convert.rgb.keyword = function (rgb) {
  var reversed = reverseKeywords[rgb];

  if (reversed) {
    return reversed;
  }

  var currentClosestDistance = Infinity;
  var currentClosestKeyword;

  for (var keyword in cssKeywords) {
    if (cssKeywords.hasOwnProperty(keyword)) {
      var value = cssKeywords[keyword]; // Compute comparative distance

      var distance = comparativeDistance(rgb, value); // Check if its less, if so set as closest

      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestKeyword = keyword;
      }
    }
  }

  return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
  return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255; // assume sRGB

  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
  var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
  var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
  return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
  var xyz = convert.rgb.xyz(rgb);
  var x = xyz[0];
  var y = xyz[1];
  var z = xyz[2];
  var l;
  var a;
  var b;
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
  l = 116 * y - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);
  return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
  var h = hsl[0] / 360;
  var s = hsl[1] / 100;
  var l = hsl[2] / 100;
  var t1;
  var t2;
  var t3;
  var rgb;
  var val;

  if (s === 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }

  t1 = 2 * l - t2;
  rgb = [0, 0, 0];

  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * -(i - 1);

    if (t3 < 0) {
      t3++;
    }

    if (t3 > 1) {
      t3--;
    }

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }

    rgb[i] = val * 255;
  }

  return rgb;
};

convert.hsl.hsv = function (hsl) {
  var h = hsl[0];
  var s = hsl[1] / 100;
  var l = hsl[2] / 100;
  var smin = s;
  var lmin = Math.max(l, 0.01);
  var sv;
  var v;
  l *= 2;
  s *= l <= 1 ? l : 2 - l;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  v = (l + s) / 2;
  sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
  return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
  var h = hsv[0] / 60;
  var s = hsv[1] / 100;
  var v = hsv[2] / 100;
  var hi = Math.floor(h) % 6;
  var f = h - Math.floor(h);
  var p = 255 * v * (1 - s);
  var q = 255 * v * (1 - s * f);
  var t = 255 * v * (1 - s * (1 - f));
  v *= 255;

  switch (hi) {
    case 0:
      return [v, t, p];

    case 1:
      return [q, v, p];

    case 2:
      return [p, v, t];

    case 3:
      return [p, q, v];

    case 4:
      return [t, p, v];

    case 5:
      return [v, p, q];
  }
};

convert.hsv.hsl = function (hsv) {
  var h = hsv[0];
  var s = hsv[1] / 100;
  var v = hsv[2] / 100;
  var vmin = Math.max(v, 0.01);
  var lmin;
  var sl;
  var l;
  l = (2 - s) * v;
  lmin = (2 - s) * vmin;
  sl = s * vmin;
  sl /= lmin <= 1 ? lmin : 2 - lmin;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
}; // http://dev.w3.org/csswg/css-color/#hwb-to-rgb


convert.hwb.rgb = function (hwb) {
  var h = hwb[0] / 360;
  var wh = hwb[1] / 100;
  var bl = hwb[2] / 100;
  var ratio = wh + bl;
  var i;
  var v;
  var f;
  var n; // wh + bl cant be > 1

  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }

  i = Math.floor(6 * h);
  v = 1 - bl;
  f = 6 * h - i;

  if ((i & 0x01) !== 0) {
    f = 1 - f;
  }

  n = wh + f * (v - wh); // linear interpolation

  var r;
  var g;
  var b;

  switch (i) {
    default:
    case 6:
    case 0:
      r = v;
      g = n;
      b = wh;
      break;

    case 1:
      r = n;
      g = v;
      b = wh;
      break;

    case 2:
      r = wh;
      g = v;
      b = n;
      break;

    case 3:
      r = wh;
      g = n;
      b = v;
      break;

    case 4:
      r = n;
      g = wh;
      b = v;
      break;

    case 5:
      r = v;
      g = wh;
      b = n;
      break;
  }

  return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
  var c = cmyk[0] / 100;
  var m = cmyk[1] / 100;
  var y = cmyk[2] / 100;
  var k = cmyk[3] / 100;
  var r;
  var g;
  var b;
  r = 1 - Math.min(1, c * (1 - k) + k);
  g = 1 - Math.min(1, m * (1 - k) + k);
  b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
  var x = xyz[0] / 100;
  var y = xyz[1] / 100;
  var z = xyz[2] / 100;
  var r;
  var g;
  var b;
  r = x * 3.2406 + y * -1.5372 + z * -0.4986;
  g = x * -0.9689 + y * 1.8758 + z * 0.0415;
  b = x * 0.0557 + y * -0.2040 + z * 1.0570; // assume sRGB

  r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;
  g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;
  b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;
  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);
  return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
  var x = xyz[0];
  var y = xyz[1];
  var z = xyz[2];
  var l;
  var a;
  var b;
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
  l = 116 * y - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);
  return [l, a, b];
};

convert.lab.xyz = function (lab) {
  var l = lab[0];
  var a = lab[1];
  var b = lab[2];
  var x;
  var y;
  var z;
  y = (l + 16) / 116;
  x = a / 500 + y;
  z = y - b / 200;
  var y2 = Math.pow(y, 3);
  var x2 = Math.pow(x, 3);
  var z2 = Math.pow(z, 3);
  y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
  x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
  z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
  x *= 95.047;
  y *= 100;
  z *= 108.883;
  return [x, y, z];
};

convert.lab.lch = function (lab) {
  var l = lab[0];
  var a = lab[1];
  var b = lab[2];
  var hr;
  var h;
  var c;
  hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;

  if (h < 0) {
    h += 360;
  }

  c = Math.sqrt(a * a + b * b);
  return [l, c, h];
};

convert.lch.lab = function (lch) {
  var l = lch[0];
  var c = lch[1];
  var h = lch[2];
  var a;
  var b;
  var hr;
  hr = h / 360 * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
  var r = args[0];
  var g = args[1];
  var b = args[2];
  var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

  value = Math.round(value / 50);

  if (value === 0) {
    return 30;
  }

  var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

  if (value === 2) {
    ansi += 60;
  }

  return ansi;
};

convert.hsv.ansi16 = function (args) {
  // optimization here; we already know the value and don't need to get
  // it converted for us.
  return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
  var r = args[0];
  var g = args[1];
  var b = args[2]; // we use the extended greyscale palette here, with the exception of
  // black and white. normal palette only has 4 greyscale shades.

  if (r === g && g === b) {
    if (r < 8) {
      return 16;
    }

    if (r > 248) {
      return 231;
    }

    return Math.round((r - 8) / 247 * 24) + 232;
  }

  var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
  return ansi;
};

convert.ansi16.rgb = function (args) {
  var color = args % 10; // handle greyscale

  if (color === 0 || color === 7) {
    if (args > 50) {
      color += 3.5;
    }

    color = color / 10.5 * 255;
    return [color, color, color];
  }

  var mult = (~~(args > 50) + 1) * 0.5;
  var r = (color & 1) * mult * 255;
  var g = (color >> 1 & 1) * mult * 255;
  var b = (color >> 2 & 1) * mult * 255;
  return [r, g, b];
};

convert.ansi256.rgb = function (args) {
  // handle greyscale
  if (args >= 232) {
    var c = (args - 232) * 10 + 8;
    return [c, c, c];
  }

  args -= 16;
  var rem;
  var r = Math.floor(args / 36) / 5 * 255;
  var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
  var b = rem % 6 / 5 * 255;
  return [r, g, b];
};

convert.rgb.hex = function (args) {
  var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
  var string = integer.toString(16).toUpperCase();
  return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
  var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

  if (!match) {
    return [0, 0, 0];
  }

  var colorString = match[0];

  if (match[0].length === 3) {
    colorString = colorString.split('').map(function (char) {
      return char + char;
    }).join('');
  }

  var integer = parseInt(colorString, 16);
  var r = integer >> 16 & 0xFF;
  var g = integer >> 8 & 0xFF;
  var b = integer & 0xFF;
  return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;
  var max = Math.max(Math.max(r, g), b);
  var min = Math.min(Math.min(r, g), b);
  var chroma = max - min;
  var grayscale;
  var hue;

  if (chroma < 1) {
    grayscale = min / (1 - chroma);
  } else {
    grayscale = 0;
  }

  if (chroma <= 0) {
    hue = 0;
  } else if (max === r) {
    hue = (g - b) / chroma % 6;
  } else if (max === g) {
    hue = 2 + (b - r) / chroma;
  } else {
    hue = 4 + (r - g) / chroma + 4;
  }

  hue /= 6;
  hue %= 1;
  return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
  var s = hsl[1] / 100;
  var l = hsl[2] / 100;
  var c = 1;
  var f = 0;

  if (l < 0.5) {
    c = 2.0 * s * l;
  } else {
    c = 2.0 * s * (1.0 - l);
  }

  if (c < 1.0) {
    f = (l - 0.5 * c) / (1.0 - c);
  }

  return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
  var s = hsv[1] / 100;
  var v = hsv[2] / 100;
  var c = s * v;
  var f = 0;

  if (c < 1.0) {
    f = (v - c) / (1 - c);
  }

  return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
  var h = hcg[0] / 360;
  var c = hcg[1] / 100;
  var g = hcg[2] / 100;

  if (c === 0.0) {
    return [g * 255, g * 255, g * 255];
  }

  var pure = [0, 0, 0];
  var hi = h % 1 * 6;
  var v = hi % 1;
  var w = 1 - v;
  var mg = 0;

  switch (Math.floor(hi)) {
    case 0:
      pure[0] = 1;
      pure[1] = v;
      pure[2] = 0;
      break;

    case 1:
      pure[0] = w;
      pure[1] = 1;
      pure[2] = 0;
      break;

    case 2:
      pure[0] = 0;
      pure[1] = 1;
      pure[2] = v;
      break;

    case 3:
      pure[0] = 0;
      pure[1] = w;
      pure[2] = 1;
      break;

    case 4:
      pure[0] = v;
      pure[1] = 0;
      pure[2] = 1;
      break;

    default:
      pure[0] = 1;
      pure[1] = 0;
      pure[2] = w;
  }

  mg = (1.0 - c) * g;
  return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
};

convert.hcg.hsv = function (hcg) {
  var c = hcg[1] / 100;
  var g = hcg[2] / 100;
  var v = c + g * (1.0 - c);
  var f = 0;

  if (v > 0.0) {
    f = c / v;
  }

  return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
  var c = hcg[1] / 100;
  var g = hcg[2] / 100;
  var l = g * (1.0 - c) + 0.5 * c;
  var s = 0;

  if (l > 0.0 && l < 0.5) {
    s = c / (2 * l);
  } else if (l >= 0.5 && l < 1.0) {
    s = c / (2 * (1 - l));
  }

  return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
  var c = hcg[1] / 100;
  var g = hcg[2] / 100;
  var v = c + g * (1.0 - c);
  return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
  var w = hwb[1] / 100;
  var b = hwb[2] / 100;
  var v = 1 - b;
  var c = v - w;
  var g = 0;

  if (c < 1) {
    g = (v - c) / (1 - c);
  }

  return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
  return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
};

convert.rgb.apple = function (rgb) {
  return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
};

convert.gray.rgb = function (args) {
  return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
  return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
  return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
  return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
  return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
  var val = Math.round(gray[0] / 100 * 255) & 0xFF;
  var integer = (val << 16) + (val << 8) + val;
  var string = integer.toString(16).toUpperCase();
  return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
  var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
  return [val / 255 * 100];
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var baseHas = __webpack_require__(397),
    hasPath = __webpack_require__(165);
/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */


function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(166),
    isArguments = __webpack_require__(50),
    isArray = __webpack_require__(3),
    isIndex = __webpack_require__(80),
    isLength = __webpack_require__(82),
    toKey = __webpack_require__(61);
/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */


function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);

    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }

    object = object[key];
  }

  if (result || ++index != length) {
    return result;
  }

  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

module.exports = hasPath;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(3),
    isKey = __webpack_require__(99),
    stringToPath = __webpack_require__(398),
    toString = __webpack_require__(159);
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */


function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }

  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var Hub = function Hub(file) {
  this.file = file;
};

exports.default = Hub;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = _default;
exports.CodeGenerator = void 0;

var _sourceMap = _interopRequireDefault(__webpack_require__(411));

var _printer = _interopRequireDefault(__webpack_require__(418));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var Generator = function (_Printer) {
  _inheritsLoose(Generator, _Printer);

  function Generator(ast, opts, code) {
    var _this;

    if (opts === void 0) {
      opts = {};
    }

    var format = normalizeOptions(code, opts);
    var map = opts.sourceMaps ? new _sourceMap.default(opts, code) : null;
    _this = _Printer.call(this, format, map) || this;
    _this.ast = ast;
    return _this;
  }

  var _proto = Generator.prototype;

  _proto.generate = function generate() {
    return _Printer.prototype.generate.call(this, this.ast);
  };

  return Generator;
}(_printer.default);

function normalizeOptions(code, opts) {
  var format = {
    auxiliaryCommentBefore: opts.auxiliaryCommentBefore,
    auxiliaryCommentAfter: opts.auxiliaryCommentAfter,
    shouldPrintComment: opts.shouldPrintComment,
    retainLines: opts.retainLines,
    retainFunctionParens: opts.retainFunctionParens,
    comments: opts.comments == null || opts.comments,
    compact: opts.compact,
    minified: opts.minified,
    concise: opts.concise,
    quotes: "double",
    jsonCompatibleStrings: opts.jsonCompatibleStrings,
    indent: {
      adjustMultilineComment: true,
      style: "  ",
      base: 0
    }
  };

  if (format.minified) {
    format.compact = true;

    format.shouldPrintComment = format.shouldPrintComment || function () {
      return format.comments;
    };
  } else {
    format.shouldPrintComment = format.shouldPrintComment || function (value) {
      return format.comments || value.indexOf("@license") >= 0 || value.indexOf("@preserve") >= 0;
    };
  }

  if (format.compact === "auto") {
    format.compact = code.length > 500000;

    if (format.compact) {
      console.error("[BABEL] Note: The code generator has deoptimised the styling of " + (opts.filename + " as it exceeds the max of " + "500KB" + "."));
    }
  }

  if (format.compact) {
    format.indent.adjustMultilineComment = false;
  }

  return format;
}

var CodeGenerator = function () {
  function CodeGenerator(ast, opts, code) {
    this._generator = new Generator(ast, opts, code);
  }

  var _proto2 = CodeGenerator.prototype;

  _proto2.generate = function generate() {
    return this._generator.generate();
  };

  return CodeGenerator;
}();

exports.CodeGenerator = CodeGenerator;

function _default(ast, opts, code) {
  var gen = new Generator(ast, opts, code);
  return gen.generate();
}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(170).SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(414).SourceMapConsumer;
exports.SourceNode = __webpack_require__(417).SourceNode;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var base64VLQ = __webpack_require__(171);

var util = __webpack_require__(41);

var ArraySet = __webpack_require__(172).ArraySet;

var MappingList = __webpack_require__(413).MappingList;
/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */


function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }

  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;
/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */

SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
  var sourceRoot = aSourceMapConsumer.sourceRoot;
  var generator = new SourceMapGenerator({
    file: aSourceMapConsumer.file,
    sourceRoot: sourceRoot
  });
  aSourceMapConsumer.eachMapping(function (mapping) {
    var newMapping = {
      generated: {
        line: mapping.generatedLine,
        column: mapping.generatedColumn
      }
    };

    if (mapping.source != null) {
      newMapping.source = mapping.source;

      if (sourceRoot != null) {
        newMapping.source = util.relative(sourceRoot, newMapping.source);
      }

      newMapping.original = {
        line: mapping.originalLine,
        column: mapping.originalColumn
      };

      if (mapping.name != null) {
        newMapping.name = mapping.name;
      }
    }

    generator.addMapping(newMapping);
  });
  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      generator.setSourceContent(sourceFile, content);
    }
  });
  return generator;
};
/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */


SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
  var generated = util.getArg(aArgs, 'generated');
  var original = util.getArg(aArgs, 'original', null);
  var source = util.getArg(aArgs, 'source', null);
  var name = util.getArg(aArgs, 'name', null);

  if (!this._skipValidation) {
    this._validateMapping(generated, original, source, name);
  }

  if (source != null) {
    source = String(source);

    if (!this._sources.has(source)) {
      this._sources.add(source);
    }
  }

  if (name != null) {
    name = String(name);

    if (!this._names.has(name)) {
      this._names.add(name);
    }
  }

  this._mappings.add({
    generatedLine: generated.line,
    generatedColumn: generated.column,
    originalLine: original != null && original.line,
    originalColumn: original != null && original.column,
    source: source,
    name: name
  });
};
/**
 * Set the source content for a source file.
 */


SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
  var source = aSourceFile;

  if (this._sourceRoot != null) {
    source = util.relative(this._sourceRoot, source);
  }

  if (aSourceContent != null) {
    // Add the source content to the _sourcesContents map.
    // Create a new _sourcesContents map if the property is null.
    if (!this._sourcesContents) {
      this._sourcesContents = Object.create(null);
    }

    this._sourcesContents[util.toSetString(source)] = aSourceContent;
  } else if (this._sourcesContents) {
    // Remove the source file from the _sourcesContents map.
    // If the _sourcesContents map is empty, set the property to null.
    delete this._sourcesContents[util.toSetString(source)];

    if (Object.keys(this._sourcesContents).length === 0) {
      this._sourcesContents = null;
    }
  }
};
/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */


SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
  var sourceFile = aSourceFile; // If aSourceFile is omitted, we will use the file property of the SourceMap

  if (aSourceFile == null) {
    if (aSourceMapConsumer.file == null) {
      throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' + 'or the source map\'s "file" property. Both were omitted.');
    }

    sourceFile = aSourceMapConsumer.file;
  }

  var sourceRoot = this._sourceRoot; // Make "sourceFile" relative if an absolute Url is passed.

  if (sourceRoot != null) {
    sourceFile = util.relative(sourceRoot, sourceFile);
  } // Applying the SourceMap can add and remove items from the sources and
  // the names array.


  var newSources = new ArraySet();
  var newNames = new ArraySet(); // Find mappings for the "sourceFile"

  this._mappings.unsortedForEach(function (mapping) {
    if (mapping.source === sourceFile && mapping.originalLine != null) {
      // Check if it can be mapped by the source map, then update the mapping.
      var original = aSourceMapConsumer.originalPositionFor({
        line: mapping.originalLine,
        column: mapping.originalColumn
      });

      if (original.source != null) {
        // Copy mapping
        mapping.source = original.source;

        if (aSourceMapPath != null) {
          mapping.source = util.join(aSourceMapPath, mapping.source);
        }

        if (sourceRoot != null) {
          mapping.source = util.relative(sourceRoot, mapping.source);
        }

        mapping.originalLine = original.line;
        mapping.originalColumn = original.column;

        if (original.name != null) {
          mapping.name = original.name;
        }
      }
    }

    var source = mapping.source;

    if (source != null && !newSources.has(source)) {
      newSources.add(source);
    }

    var name = mapping.name;

    if (name != null && !newNames.has(name)) {
      newNames.add(name);
    }
  }, this);

  this._sources = newSources;
  this._names = newNames; // Copy sourcesContents of applied map.

  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      if (aSourceMapPath != null) {
        sourceFile = util.join(aSourceMapPath, sourceFile);
      }

      if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
      }

      this.setSourceContent(sourceFile, content);
    }
  }, this);
};
/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */


SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
  // When aOriginal is truthy but has empty values for .line and .column,
  // it is most likely a programmer error. In this case we throw a very
  // specific error message to try to guide them the right way.
  // For example: https://github.com/Polymer/polymer-bundler/pull/519
  if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
    throw new Error('original.line and original.column are not numbers -- you probably meant to omit ' + 'the original mapping entirely and only map the generated position. If so, pass ' + 'null for the original mapping instead of an object with empty or null values.');
  }

  if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
    // Case 1.
    return;
  } else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aOriginal && 'line' in aOriginal && 'column' in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
    // Cases 2 and 3.
    return;
  } else {
    throw new Error('Invalid mapping: ' + JSON.stringify({
      generated: aGenerated,
      source: aSource,
      original: aOriginal,
      name: aName
    }));
  }
};
/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */


SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
  var previousGeneratedColumn = 0;
  var previousGeneratedLine = 1;
  var previousOriginalColumn = 0;
  var previousOriginalLine = 0;
  var previousName = 0;
  var previousSource = 0;
  var result = '';
  var next;
  var mapping;
  var nameIdx;
  var sourceIdx;

  var mappings = this._mappings.toArray();

  for (v