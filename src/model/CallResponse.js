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

import ApiClient from '../ApiClient';

/**
 * The CallResponse model module.
 * @module model/CallResponse
 * @version 1.4.13
 */
class CallResponse {
    /**
     * Constructs a new <code>CallResponse</code>.
     * CallResponse contains the result of a &#x60;/call&#x60; invocation.
     * @alias module:model/CallResponse
     * @param result {Object} Result contains the result of the `/call` invocation. This result will not be inspected or interpreted by Rosetta tooling and is left to the caller to decode.
     * @param idempotent {Boolean} Idempotent indicates that if `/call` is invoked with the same CallRequest again, at any point in time, it will return the same CallResponse. Integrators may cache the CallResponse if this is set to true to avoid making unnecessary calls to the Rosetta implementation. For this reason, implementers should be very conservative about returning true here or they could cause issues for the caller.
     */
    constructor(result, idempotent) { 
        
        CallResponse.initialize(this, result, idempotent);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, result, idempotent) { 
        obj['result'] = result;
        obj['idempotent'] = idempotent;
    }

    /**
     * Constructs a <code>CallResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CallResponse} obj Optional instance to populate.
     * @return {module:model/CallResponse} The populated <code>CallResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CallResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], Object);
            }
            if (data.hasOwnProperty('idempotent')) {
                obj['idempotent'] = ApiClient.convertToType(data['idempotent'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Result contains the result of the `/call` invocation. This result will not be inspected or interpreted by Rosetta tooling and is left to the caller to decode.
 * @member {Object} result
 */
CallResponse.prototype['result'] = undefined;

/**
 * Idempotent indicates that if `/call` is invoked with the same CallRequest again, at any point in time, it will return the same CallResponse. Integrators may cache the CallResponse if this is set to true to avoid making unnecessary calls to the Rosetta implementation. For this reason, implementers should be very conservative about returning true here or they could cause issues for the caller.
 * @member {Boolean} idempotent
 */
CallResponse.prototype['idempotent'] = undefined;






export default CallResponse;

