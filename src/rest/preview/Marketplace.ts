/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Preview
 * This is the public Kandy REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import PreviewBase from "../PreviewBase";
import Version from "../../base/Version";
import { AvailableAddOnListInstance } from "./marketplace/availableAddOn";
import { InstalledAddOnListInstance } from "./marketplace/installedAddOn";

export default class Marketplace extends Version {
  /**
   * Initialize the Marketplace version of Preview
   *
   * @param domain - The Kandy (Kandy.Preview) domain
   */
  constructor(domain: PreviewBase) {
    super(domain, "marketplace");
  }

  /** availableAddOns - { Kandy.Preview.Marketplace.AvailableAddOnListInstance } resource */
  protected _availableAddOns?: AvailableAddOnListInstance;
  /** installedAddOns - { Kandy.Preview.Marketplace.InstalledAddOnListInstance } resource */
  protected _installedAddOns?: InstalledAddOnListInstance;

  /** Getter for availableAddOns resource */
  get availableAddOns(): AvailableAddOnListInstance {
    this._availableAddOns =
      this._availableAddOns || AvailableAddOnListInstance(this);
    return this._availableAddOns;
  }

  /** Getter for installedAddOns resource */
  get installedAddOns(): InstalledAddOnListInstance {
    this._installedAddOns =
      this._installedAddOns || InstalledAddOnListInstance(this);
    return this._installedAddOns;
  }
}
