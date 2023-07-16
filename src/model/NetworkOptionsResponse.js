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
import Allow from './Allow';
import Version from './Version';

/**
 * The NetworkOptionsResponse model module.
 * @module model/NetworkOptionsResponse
 * @version 1.4.13
 */
class NetworkOptionsResponse {
    /**
     * Constructs a new <code>NetworkOptionsResponse</code>.
     * NetworkOptionsResponse contains information about the versioning of the node and the allowed operation statuses, operation types, and errors.
     * @alias module:model/NetworkOptionsResponse
     * @param version {module:model/Version} 
     * @param allow {module:model/Allow} 
     */
    constructor(version, allow) { 
        
        NetworkOptionsResponse.initialize(this, version, allow);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, version, allow) { 
        obj['version'] = version;
        obj['allow'] = allow;
    }

    /**
     * Constructs a <code>NetworkOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkOptionsResponse} obj Optional instance to populate.
     * @return {module:model/NetworkOptionsResponse} The populated <code>NetworkOptionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkOptionsResponse();

            if (data.hasOwnProperty('version')) {
                obj['version'] = Version.constructFromObject(data['version']);
            }
            if (data.hasOwnProperty('allow')) {
                obj['allow'] = Allow.constructFromObject(data['allow']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Version} version
 */
NetworkOptionsResponse.prototype['version'] = undefined;

/**
 * @member {module:model/Allow} allow
 */
NetworkOptionsResponse.prototype['allow'] = undefined;






export default NetworkOptionsResponse;

