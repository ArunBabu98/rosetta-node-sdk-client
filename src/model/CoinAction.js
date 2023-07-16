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
* Enum class CoinAction.
* @enum {}
* @readonly
*/
export default class CoinAction {
    
        /**
         * value: "coin_created"
         * @const
         */
        "created" = "coin_created";

    
        /**
         * value: "coin_spent"
         * @const
         */
        "spent" = "coin_spent";

    

    /**
    * Returns a <code>CoinAction</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CoinAction} The enum <code>CoinAction</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

