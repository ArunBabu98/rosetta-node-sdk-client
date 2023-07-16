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
 * The Version model module.
 * @module model/Version
 * @version 1.4.13
 */
class Version {
    /**
     * Constructs a new <code>Version</code>.
     * The Version object is utilized to inform the client of the versions of different components of the Rosetta implementation.
     * @alias module:model/Version
     * @param rosettaVersion {String} The rosetta_version is the version of the Rosetta interface the implementation adheres to. This can be useful for clients looking to reliably parse responses.
     * @param nodeVersion {String} The node_version is the canonical version of the node runtime. This can help clients manage deployments.
     */
    constructor(rosettaVersion, nodeVersion) { 
        
        Version.initialize(this, rosettaVersion, nodeVersion);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rosettaVersion, nodeVersion) { 
        obj['rosetta_version'] = rosettaVersion;
        obj['node_version'] = nodeVersion;
    }

    /**
     * Constructs a <code>Version</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Version} obj Optional instance to populate.
     * @return {module:model/Version} The populated <code>Version</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Version();

            if (data.hasOwnProperty('rosetta_version')) {
                obj['rosetta_version'] = ApiClient.convertToType(data['rosetta_version'], 'String');
            }
            if (data.hasOwnProperty('node_version')) {
                obj['node_version'] = ApiClient.convertToType(data['node_version'], 'String');
            }
            if (data.hasOwnProperty('middleware_version')) {
                obj['middleware_version'] = ApiClient.convertToType(data['middleware_version'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }


}

/**
 * The rosetta_version is the version of the Rosetta interface the implementation adheres to. This can be useful for clients looking to reliably parse responses.
 * @member {String} rosetta_version
 */
Version.prototype['rosetta_version'] = undefined;

/**
 * The node_version is the canonical version of the node runtime. This can help clients manage deployments.
 * @member {String} node_version
 */
Version.prototype['node_version'] = undefined;

/**
 * When a middleware server is used to adhere to the Rosetta interface, it should return its version here. This can help clients manage deployments.
 * @member {String} middleware_version
 */
Version.prototype['middleware_version'] = undefined;

/**
 * Any other information that may be useful about versioning of dependent services should be returned here.
 * @member {Object} metadata
 */
Version.prototype['metadata'] = undefined;






export default Version;

