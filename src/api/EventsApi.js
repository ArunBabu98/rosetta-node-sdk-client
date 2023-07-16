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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import EventsBlocksRequest from '../model/EventsBlocksRequest';
import EventsBlocksResponse from '../model/EventsBlocksResponse';

/**
* Events service.
* @module api/EventsApi
* @version 1.4.13
*/
export default class EventsApi {

    /**
    * Constructs a new EventsApi. 
    * @alias module:api/EventsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the eventsBlocks operation.
     * @callback module:api/EventsApi~eventsBlocksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EventsBlocksResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [INDEXER] Get a range of BlockEvents
     * `/events/blocks` allows the caller to query a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state. Following BlockEvents allows lightweight clients to update their state without needing to implement their own syncing logic (like finding the common parent in a reorg). `/events/blocks` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * @param {module:model/EventsBlocksRequest} eventsBlocksRequest 
     * @param {module:api/EventsApi~eventsBlocksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EventsBlocksResponse}
     */
    eventsBlocks(eventsBlocksRequest, callback) {
      let postBody = eventsBlocksRequest;
      // verify the required parameter 'eventsBlocksRequest' is set
      if (eventsBlocksRequest === undefined || eventsBlocksRequest === null) {
        throw new Error("Missing the required parameter 'eventsBlocksRequest' when calling eventsBlocks");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EventsBlocksResponse;
      return this.apiClient.callApi(
        '/events/blocks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
