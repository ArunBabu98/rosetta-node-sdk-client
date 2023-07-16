"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _NetworkIdentifier = _interopRequireDefault(require("./NetworkIdentifier"));
var _PartialBlockIdentifier = _interopRequireDefault(require("./PartialBlockIdentifier"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * rosetta-node-sdk-client
                                                                                                                                                                                                                                                                                                                                                                                               * Build Once. Integrate Your Blockchain Everywhere.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 1.4.13
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The BlockRequest model module.
 * @module model/BlockRequest
 * @version 1.4.13
 */
var BlockRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BlockRequest</code>.
   * A BlockRequest is utilized to make a block request on the /block endpoint.
   * @alias module:model/BlockRequest
   * @param networkIdentifier {module:model/NetworkIdentifier} 
   * @param blockIdentifier {module:model/PartialBlockIdentifier} 
   */
  function BlockRequest(networkIdentifier, blockIdentifier) {
    _classCallCheck(this, BlockRequest);
    BlockRequest.initialize(this, networkIdentifier, blockIdentifier);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(BlockRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkIdentifier, blockIdentifier) {
      obj['network_identifier'] = networkIdentifier;
      obj['block_identifier'] = blockIdentifier;
    }

    /**
     * Constructs a <code>BlockRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockRequest} obj Optional instance to populate.
     * @return {module:model/BlockRequest} The populated <code>BlockRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BlockRequest();
        if (data.hasOwnProperty('network_identifier')) {
          obj['network_identifier'] = _NetworkIdentifier["default"].constructFromObject(data['network_identifier']);
        }
        if (data.hasOwnProperty('block_identifier')) {
          obj['block_identifier'] = _PartialBlockIdentifier["default"].constructFromObject(data['block_identifier']);
        }
      }
      return obj;
    }
  }]);
  return BlockRequest;
}();
/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */
BlockRequest.prototype['network_identifier'] = undefined;

/**
 * @member {module:model/PartialBlockIdentifier} block_identifier
 */
BlockRequest.prototype['block_identifier'] = undefined;
var _default = BlockRequest;
exports["default"] = _default;