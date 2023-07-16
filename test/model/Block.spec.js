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
    instance = new RosettaNodeSdkClient.Block();
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

  describe('Block', function() {
    it('should create an instance of Block', function() {
      // uncomment below and update the code to test Block
      //var instane = new RosettaNodeSdkClient.Block();
      //expect(instance).to.be.a(RosettaNodeSdkClient.Block);
    });

    it('should have the property blockIdentifier (base name: "block_identifier")', function() {
      // uncomment below and update the code to test the property blockIdentifier
      //var instane = new RosettaNodeSdkClient.Block();
      //expect(instance).to.be();
    });

    it('should have the property parentBlockIdentifier (base name: "parent_block_identifier")', function() {
      // uncomment below and update the code to test the property parentBlockIdentifier
      //var instane = new RosettaNodeSdkClient.Block();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instane = new RosettaNodeSdkClient.Block();
      //expect(instance).to.be();
    });

    it('should have the property transactions (base name: "transactions")', function() {
      // uncomment below and update the code to test the property transactions
      //var instane = new RosettaNodeSdkClient.Block();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new RosettaNodeSdkClient.Block();
      //expect(instance).to.be();
    });

  });

}));
