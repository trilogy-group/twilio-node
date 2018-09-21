/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Permissions = require('../../Permissions');
import Response = require('../../../../http/response');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the BulkCountryUpdateList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function BulkCountryUpdateList(version: Permissions): BulkCountryUpdateListInstance;

interface BulkCountryUpdateListInstance {
  /**
   * create a BulkCountryUpdateInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: BulkCountryUpdateListInstanceCreateOptions, callback?: (error: Error | null, item: BulkCountryUpdateInstance) => any): Promise<BulkCountryUpdateInstance>;
}

/**
 * Options to pass to create
 *
 * @property updateRequest - Json list of update objects
 */
interface BulkCountryUpdateListInstanceCreateOptions {
  updateRequest: string;
}

interface BulkCountryUpdatePayload extends BulkCountryUpdateResource, Page.TwilioResponsePayload {
}

interface BulkCountryUpdateResource {
  update_count: number;
  update_request: string;
}

interface BulkCountryUpdateSolution {
}


declare class BulkCountryUpdateInstance extends SerializableClass {
  /**
   * Initialize the BulkCountryUpdateContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property updateCount - The number of countries successfully updated
   * @property updateRequest - The update_request
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: Permissions, payload: BulkCountryUpdatePayload);

  /**
   * Produce a plain JSON object version of the BulkCountryUpdateInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  updateCount: number;
  updateRequest: string;
}


declare class BulkCountryUpdatePage extends Page<Permissions, BulkCountryUpdatePayload, BulkCountryUpdateResource, BulkCountryUpdateInstance> {
  /**
   * Initialize the BulkCountryUpdatePagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Permissions, response: Response<string>, solution: BulkCountryUpdateSolution);

  /**
   * Build an instance of BulkCountryUpdateInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BulkCountryUpdatePayload): BulkCountryUpdateInstance;
}

export { BulkCountryUpdateInstance, BulkCountryUpdateList, BulkCountryUpdateListInstance, BulkCountryUpdateListInstanceCreateOptions, BulkCountryUpdatePage, BulkCountryUpdatePayload, BulkCountryUpdateResource, BulkCountryUpdateSolution }
