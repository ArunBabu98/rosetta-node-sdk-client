/**
 * Copyright (c) 2020 DigiByte Foundation NZ Limited
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Rosetta
 * A Standard for Blockchain Interaction
 *
 * The version of the OpenAPI document: 1.3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TransactionIdentifier from './TransactionIdentifier';

/**
 * The ConstructionSubmitResponse model module.
 * @module model/ConstructionSubmitResponse
 * @version 1.3.1
 */
class ConstructionSubmitResponse {
    /**
     * Constructs a new <code>ConstructionSubmitResponse</code>.
     * A TransactionSubmitResponse contains the transaction_identifier of a submitted transaction that was accepted into the mempool.
     * @alias module:model/ConstructionSubmitResponse
     * @param transactionIdentifier {module:model/TransactionIdentifier} 
     */
    constructor(transactionIdentifier) { 
        
        ConstructionSubmitResponse.initialize(this, transactionIdentifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionIdentifier) { 
        obj['transaction_identifier'] = transactionIdentifier;
    }

    /**
     * Constructs a <code>ConstructionSubmitResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionSubmitResponse} obj Optional instance to populate.
     * @return {module:model/ConstructionSubmitResponse} The populated <code>ConstructionSubmitResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConstructionSubmitResponse();

            if (data.hasOwnProperty('transaction_identifier')) {
                obj['transaction_identifier'] = TransactionIdentifier.constructFromObject(data['transaction_identifier']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TransactionIdentifier} transaction_identifier
 */
ConstructionSubmitResponse.prototype['transaction_identifier'] = undefined;

/**
 * @member {Object} metadata
 */
ConstructionSubmitResponse.prototype['metadata'] = undefined;






export default ConstructionSubmitResponse;

