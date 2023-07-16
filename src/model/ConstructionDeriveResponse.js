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
import AccountIdentifier from './AccountIdentifier';

/**
 * The ConstructionDeriveResponse model module.
 * @module model/ConstructionDeriveResponse
 * @version 1.4.13
 */
class ConstructionDeriveResponse {
    /**
     * Constructs a new <code>ConstructionDeriveResponse</code>.
     * ConstructionDeriveResponse is returned by the &#x60;/construction/derive&#x60; endpoint.
     * @alias module:model/ConstructionDeriveResponse
     */
    constructor() { 
        
        ConstructionDeriveResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConstructionDeriveResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionDeriveResponse} obj Optional instance to populate.
     * @return {module:model/ConstructionDeriveResponse} The populated <code>ConstructionDeriveResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConstructionDeriveResponse();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('account_identifier')) {
                obj['account_identifier'] = AccountIdentifier.constructFromObject(data['account_identifier']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }


}

/**
 * [DEPRECATED by `account_identifier` in `v1.4.4`] Address in network-specific format.
 * @member {String} address
 */
ConstructionDeriveResponse.prototype['address'] = undefined;

/**
 * @member {module:model/AccountIdentifier} account_identifier
 */
ConstructionDeriveResponse.prototype['account_identifier'] = undefined;

/**
 * @member {Object} metadata
 */
ConstructionDeriveResponse.prototype['metadata'] = undefined;






export default ConstructionDeriveResponse;

