"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ConstructionCombineRequest = _interopRequireDefault(require("../model/ConstructionCombineRequest"));
var _ConstructionCombineResponse = _interopRequireDefault(require("../model/ConstructionCombineResponse"));
var _ConstructionDeriveRequest = _interopRequireDefault(require("../model/ConstructionDeriveRequest"));
var _ConstructionDeriveResponse = _interopRequireDefault(require("../model/ConstructionDeriveResponse"));
var _ConstructionHashRequest = _interopRequireDefault(require("../model/ConstructionHashRequest"));
var _ConstructionMetadataRequest = _interopRequireDefault(require("../model/ConstructionMetadataRequest"));
var _ConstructionMetadataResponse = _interopRequireDefault(require("../model/ConstructionMetadataResponse"));
var _ConstructionParseRequest = _interopRequireDefault(require("../model/ConstructionParseRequest"));
var _ConstructionParseResponse = _interopRequireDefault(require("../model/ConstructionParseResponse"));
var _ConstructionPayloadsRequest = _interopRequireDefault(require("../model/ConstructionPayloadsRequest"));
var _ConstructionPayloadsResponse = _interopRequireDefault(require("../model/ConstructionPayloadsResponse"));
var _ConstructionPreprocessRequest = _interopRequireDefault(require("../model/ConstructionPreprocessRequest"));
var _ConstructionPreprocessResponse = _interopRequireDefault(require("../model/ConstructionPreprocessResponse"));
var _ConstructionSubmitRequest = _interopRequireDefault(require("../model/ConstructionSubmitRequest"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _TransactionIdentifierResponse = _interopRequireDefault(require("../model/TransactionIdentifierResponse"));
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
* Construction service.
* @module api/ConstructionApi
* @version 1.4.13
*/
var ConstructionApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ConstructionApi. 
  * @alias module:api/ConstructionApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ConstructionApi(apiClient) {
    _classCallCheck(this, ConstructionApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the constructionCombine operation.
   * @callback module:api/ConstructionApi~constructionCombineCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ConstructionCombineResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create Network Transaction from Signatures
   * Combine creates a network-specific transaction from an unsigned transaction and an array of provided signatures. The signed transaction returned from this method will be sent to the `/construction/submit` endpoint by the caller.
   * @param {module:model/ConstructionCombineRequest} constructionCombineRequest 
   * @param {module:api/ConstructionApi~constructionCombineCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ConstructionCombineResponse}
   */
  _createClass(ConstructionApi, [{
    key: "constructionCombine",
    value: function constructionCombine(constructionCombineRequest, callback) {
      var postBody = constructionCombineRequest;
      // verify the required parameter 'constructionCombineRequest' is set
      if (constructionCombineRequest === undefined || constructionCombineRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionCombineRequest' when calling constructionCombine");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConstructionCombineResponse["default"];
      return this.apiClient.callApi('/construction/combine', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the constructionDerive operation.
     * @callback module:api/ConstructionApi~constructionDeriveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConstructionDeriveResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Derive an AccountIdentifier from a PublicKey
     * Derive returns the AccountIdentifier associated with a public key. Blockchains that require an on-chain action to create an account should not implement this method.
     * @param {module:model/ConstructionDeriveRequest} constructionDeriveRequest 
     * @param {module:api/ConstructionApi~constructionDeriveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConstructionDeriveResponse}
     */
  }, {
    key: "constructionDerive",
    value: function constructionDerive(constructionDeriveRequest, callback) {
      var postBody = constructionDeriveRequest;
      // verify the required parameter 'constructionDeriveRequest' is set
      if (constructionDeriveRequest === undefined || constructionDeriveRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionDeriveRequest' when calling constructionDerive");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConstructionDeriveResponse["default"];
      return this.apiClient.callApi('/construction/derive', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the constructionHash operation.
     * @callback module:api/ConstructionApi~constructionHashCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionIdentifierResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Hash of a Signed Transaction
     * TransactionHash returns the network-specific transaction hash for a signed transaction.
     * @param {module:model/ConstructionHashRequest} constructionHashRequest 
     * @param {module:api/ConstructionApi~constructionHashCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactionIdentifierResponse}
     */
  }, {
    key: "constructionHash",
    value: function constructionHash(constructionHashRequest, callback) {
      var postBody = constructionHashRequest;
      // verify the required parameter 'constructionHashRequest' is set
      if (constructionHashRequest === undefined || constructionHashRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionHashRequest' when calling constructionHash");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TransactionIdentifierResponse["default"];
      return this.apiClient.callApi('/construction/hash', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the constructionMetadata operation.
     * @callback module:api/ConstructionApi~constructionMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConstructionMetadataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Metadata for Transaction Construction
     * Get any information required to construct a transaction for a specific network. Metadata returned here could be a recent hash to use, an account sequence number, or even arbitrary chain state. The request used when calling this endpoint is created by calling `/construction/preprocess` in an offline environment. You should NEVER assume that the request sent to this endpoint will be created by the caller or populated with any custom parameters. This must occur in `/construction/preprocess`. It is important to clarify that this endpoint should not pre-construct any transactions for the client (this should happen in `/construction/payloads`). This endpoint is left purposely unstructured because of the wide scope of metadata that could be required.
     * @param {module:model/ConstructionMetadataRequest} constructionMetadataRequest 
     * @param {module:api/ConstructionApi~constructionMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConstructionMetadataResponse}
     */
  }, {
    key: "constructionMetadata",
    value: function constructionMetadata(constructionMetadataRequest, callback) {
      var postBody = constructionMetadataRequest;
      // verify the required parameter 'constructionMetadataRequest' is set
      if (constructionMetadataRequest === undefined || constructionMetadataRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionMetadataRequest' when calling constructionMetadata");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConstructionMetadataResponse["default"];
      return this.apiClient.callApi('/construction/metadata', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the constructionParse operation.
     * @callback module:api/ConstructionApi~constructionParseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConstructionParseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parse a Transaction
     * Parse is called on both unsigned and signed transactions to understand the intent of the formulated transaction. This is run as a sanity check before signing (after `/construction/payloads`) and before broadcast (after `/construction/combine`). 
     * @param {module:model/ConstructionParseRequest} constructionParseRequest 
     * @param {module:api/ConstructionApi~constructionParseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConstructionParseResponse}
     */
  }, {
    key: "constructionParse",
    value: function constructionParse(constructionParseRequest, callback) {
      var postBody = constructionParseRequest;
      // verify the required parameter 'constructionParseRequest' is set
      if (constructionParseRequest === undefined || constructionParseRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionParseRequest' when calling constructionParse");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConstructionParseResponse["default"];
      return this.apiClient.callApi('/construction/parse', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the constructionPayloads operation.
     * @callback module:api/ConstructionApi~constructionPayloadsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConstructionPayloadsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate an Unsigned Transaction and Signing Payloads
     * Payloads is called with an array of operations and the response from `/construction/metadata`. It returns an unsigned transaction blob and a collection of payloads that must be signed by particular AccountIdentifiers using a certain SignatureType. The array of operations provided in transaction construction often times can not specify all \"effects\" of a transaction (consider invoked transactions in Ethereum). However, they can deterministically specify the \"intent\" of the transaction, which is sufficient for construction. For this reason, parsing the corresponding transaction in the Data API (when it lands on chain) will contain a superset of whatever operations were provided during construction.
     * @param {module:model/ConstructionPayloadsRequest} constructionPayloadsRequest 
     * @param {module:api/ConstructionApi~constructionPayloadsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConstructionPayloadsResponse}
     */
  }, {
    key: "constructionPayloads",
    value: function constructionPayloads(constructionPayloadsRequest, callback) {
      var postBody = constructionPayloadsRequest;
      // verify the required parameter 'constructionPayloadsRequest' is set
      if (constructionPayloadsRequest === undefined || constructionPayloadsRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionPayloadsRequest' when calling constructionPayloads");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConstructionPayloadsResponse["default"];
      return this.apiClient.callApi('/construction/payloads', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the constructionPreprocess operation.
     * @callback module:api/ConstructionApi~constructionPreprocessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConstructionPreprocessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Request to Fetch Metadata
     * Preprocess is called prior to `/construction/payloads` to construct a request for any metadata that is needed for transaction construction given (i.e. account nonce). The `options` object returned from this endpoint will be sent to the `/construction/metadata` endpoint UNMODIFIED by the caller (in an offline execution environment). If your Construction API implementation has configuration options, they MUST be specified in the `/construction/preprocess` request (in the `metadata` field).
     * @param {module:model/ConstructionPreprocessRequest} constructionPreprocessRequest 
     * @param {module:api/ConstructionApi~constructionPreprocessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConstructionPreprocessResponse}
     */
  }, {
    key: "constructionPreprocess",
    value: function constructionPreprocess(constructionPreprocessRequest, callback) {
      var postBody = constructionPreprocessRequest;
      // verify the required parameter 'constructionPreprocessRequest' is set
      if (constructionPreprocessRequest === undefined || constructionPreprocessRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionPreprocessRequest' when calling constructionPreprocess");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConstructionPreprocessResponse["default"];
      return this.apiClient.callApi('/construction/preprocess', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the constructionSubmit operation.
     * @callback module:api/ConstructionApi~constructionSubmitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionIdentifierResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit a Signed Transaction
     * Submit a pre-signed transaction to the node. This call should not block on the transaction being included in a block. Rather, it should return immediately with an indication of whether or not the transaction was included in the mempool. The transaction submission response should only return a 200 status if the submitted transaction could be included in the mempool. Otherwise, it should return an error.
     * @param {module:model/ConstructionSubmitRequest} constructionSubmitRequest 
     * @param {module:api/ConstructionApi~constructionSubmitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactionIdentifierResponse}
     */
  }, {
    key: "constructionSubmit",
    value: function constructionSubmit(constructionSubmitRequest, callback) {
      var postBody = constructionSubmitRequest;
      // verify the required parameter 'constructionSubmitRequest' is set
      if (constructionSubmitRequest === undefined || constructionSubmitRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionSubmitRequest' when calling constructionSubmit");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TransactionIdentifierResponse["default"];
      return this.apiClient.callApi('/construction/submit', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return ConstructionApi;
}();
exports["default"] = ConstructionApi;