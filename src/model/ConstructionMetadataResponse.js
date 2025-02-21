/**
 * Rosetta
 * Build Once. Integrate Your Blockchain Everywhere.
 *
 * The version of the OpenAPI document: 1.4.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ConstructionMetadataResponse model module.
 * @module model/ConstructionMetadataResponse
 * @version 1.4.1
 */
class ConstructionMetadataResponse {
    /**
     * Constructs a new <code>ConstructionMetadataResponse</code>.
     * The ConstructionMetadataResponse returns network-specific metadata used for transaction construction.
     * @alias module:model/ConstructionMetadataResponse
     * @param metadata {Object} 
     */
    constructor(metadata) { 
        
        ConstructionMetadataResponse.initialize(this, metadata);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, metadata) { 
        obj['metadata'] = metadata;
    }

    /**
     * Constructs a <code>ConstructionMetadataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionMetadataResponse} obj Optional instance to populate.
     * @return {module:model/ConstructionMetadataResponse} The populated <code>ConstructionMetadataResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConstructionMetadataResponse();

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
ConstructionMetadataResponse.prototype['metadata'] = undefined;






export default ConstructionMetadataResponse;

