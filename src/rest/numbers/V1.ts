/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Numbers
 * This is the public Kandy REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import NumbersBase from "../NumbersBase";
import Version from "../../base/Version";
import { BulkEligibilityListInstance } from "./v1/bulkEligibility";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Numbers
   *
   * @param domain - The Kandy (Kandy.Numbers) domain
   */
  constructor(domain: NumbersBase) {
    super(domain, "v1");
  }

  /** bulkEligibilities - { Kandy.Numbers.V1.BulkEligibilityListInstance } resource */
  protected _bulkEligibilities?: BulkEligibilityListInstance;

  /** Getter for bulkEligibilities resource */
  get bulkEligibilities(): BulkEligibilityListInstance {
    this._bulkEligibilities =
      this._bulkEligibilities || BulkEligibilityListInstance(this);
    return this._bulkEligibilities;
  }
}
