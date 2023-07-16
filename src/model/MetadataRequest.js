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
 * The MetadataRequest model module.
 * @module model/MetadataRequest
 * @version 1.4.13
 */
class MetadataRequest {
    /**
     * Constructs a new <code>MetadataRequest</code>.
     * A MetadataRequest is utilized in any request where the only argument is optional metadata.
     * @alias module:model/MetadataRequest
     */
    constructor() { 
        
        MetadataRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetadataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetadataRequest} obj Optional instance to populate.
     * @return {module:model/MetadataRequest} The populated <code>MetadataRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetadataRequest();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} metadata
 */
MetadataRequest.prototype['metadata'] = undefined;






export default MetadataRequest;

