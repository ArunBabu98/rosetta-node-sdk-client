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
import NetworkIdentifier from './NetworkIdentifier';

/**
 * The EventsBlocksRequest model module.
 * @module model/EventsBlocksRequest
 * @version 1.4.13
 */
class EventsBlocksRequest {
    /**
     * Constructs a new <code>EventsBlocksRequest</code>.
     * EventsBlocksRequest is utilized to fetch a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state.
     * @alias module:model/EventsBlocksRequest
     * @param networkIdentifier {module:model/NetworkIdentifier} 
     */
    constructor(networkIdentifier) { 
        
        EventsBlocksRequest.initialize(this, networkIdentifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, networkIdentifier) { 
        obj['network_identifier'] = networkIdentifier;
    }

    /**
     * Constructs a <code>EventsBlocksRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventsBlocksRequest} obj Optional instance to populate.
     * @return {module:model/EventsBlocksRequest} The populated <code>EventsBlocksRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventsBlocksRequest();

            if (data.hasOwnProperty('network_identifier')) {
                obj['network_identifier'] = NetworkIdentifier.constructFromObject(data['network_identifier']);
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */
EventsBlocksRequest.prototype['network_identifier'] = undefined;

/**
 * offset is the offset into the event stream to sync events from. If this field is not populated, we return the limit events backwards from tip. If this is set to 0, we start from the beginning.
 * @member {Number} offset
 */
EventsBlocksRequest.prototype['offset'] = undefined;

/**
 * limit is the maximum number of events to fetch in one call. The implementation may return <= limit events.
 * @member {Number} limit
 */
EventsBlocksRequest.prototype['limit'] = undefined;






export default EventsBlocksRequest;

