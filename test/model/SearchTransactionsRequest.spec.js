/**
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RosettaNodeSdkClient);
  }
}(this, function(expect, RosettaNodeSdkClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RosettaNodeSdkClient.SearchTransactionsRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SearchTransactionsRequest', function() {
    it('should create an instance of SearchTransactionsRequest', function() {
      // uncomment below and update the code to test SearchTransactionsRequest
      //var instane = new RosettaNodeSdkClient.SearchTransactionsRequest();
      //expect(instance).to.be.a(RosettaNodeSdkClient.SearchTransactionsRequest);
    });

    it('should have the property networkIdentifier (base name: "network_identifier")', function() {
      // uncomment below and update the code to test the property networkIdentifier
      //var instane = new RosettaNodeSdkClient.SearchTransactionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property operator (base name: "operator")', function() {
      // uncomment below and update the code to test the property operator
      //var instane = new RosettaNodeSdkClient.SearchTransactionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxBlock (base name: "max_block")', function() {
      // uncomment below and update the code to test the property maxBlock
      //var instane = new RosettaNodeSdkClient.SearchTransactionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property offset (base name: "offset")', function() {
      // uncomment below and update the code to test the property offset
      //var instane = new RosettaNodeSdkClient.SearchTransactionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instane = new RosettaNodeSdkClient.SearchTransactionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property transactionIdentifier (base name: "transaction_identifier")', function() {
      // uncomment below and update the code to test the property transactionIdentifier
      //var instane = new RosettaNodeSdkClient.SearchTransactionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property accountIdentifier (base name: "account_identifier")', function() {
      // uncomment below and update the code to test the property accountIdentifier
      //var instane = new RosettaNodeSdkClient.SearchTransactionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property coinIdentifier (base name: "coin_identifier")', function() {
      // uncomment below and update the code to test the property coinIdentifier
      //var instane = new RosettaNodeSdkClient.SearchTransactionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new RosettaNodeSdkClient.SearchTransactionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new RosettaNodeSdkClient.SearchTransactionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new RosettaNodeSdkClient.SearchTransactionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new RosettaNodeSdkClient.SearchTransactionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property success (base name: "success")', function() {
      // uncomment below and update the code to test the property success
      //var instane = new RosettaNodeSdkClient.SearchTransactionsRequest();
      //expect(instance).to.be();
    });

  });

}));
