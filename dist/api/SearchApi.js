"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _SearchTransactionsRequest = _interopRequireDefault(require("../model/SearchTransactionsRequest"));
var _SearchTransactionsResponse = _interopRequireDefault(require("../model/SearchTransactionsResponse"));
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
* Search service.
* @module api/SearchApi
* @version 1.4.13
*/
var SearchApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SearchApi. 
  * @alias module:api/SearchApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SearchApi(apiClient) {
    _classCallCheck(this, SearchApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the searchTransactions operation.
   * @callback module:api/SearchApi~searchTransactionsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/SearchTransactionsResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * [INDEXER] Search for Transactions
   * `/search/transactions` allows the caller to search for transactions that meet certain conditions. Some conditions include matching a transaction hash, containing an operation with a certain status, or containing an operation that affects a certain account. `/search/transactions` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
   * @param {module:model/SearchTransactionsRequest} searchTransactionsRequest 
   * @param {module:api/SearchApi~searchTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/SearchTransactionsResponse}
   */
  _createClass(SearchApi, [{
    key: "searchTransactions",
    value: function searchTransactions(searchTransactionsRequest, callback) {
      var postBody = searchTransactionsRequest;
      // verify the required parameter 'searchTransactionsRequest' is set
      if (searchTransactionsRequest === undefined || searchTransactionsRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'searchTransactionsRequest' when calling searchTransactions");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SearchTransactionsResponse["default"];
      return this.apiClient.callApi('/search/transactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return SearchApi;
}();
exports["default"] = SearchApi;