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
import { FleetListInstance } from "./deployed_devices/fleet";

export default class DeployedDevices extends Version {
  /**
   * Initialize the DeployedDevices version of Preview
   *
   * @param domain - The Kandy (Kandy.Preview) domain
   */
  constructor(domain: PreviewBase) {
    super(domain, "DeployedDevices");
  }

  /** fleets - { Kandy.Preview.DeployedDevices.FleetListInstance } resource */
  protected _fleets?: FleetListInstance;

  /** Getter for fleets resource */
  get fleets(): FleetListInstance {
    this._fleets = this._fleets || FleetListInstance(this);
    return this._fleets;
  }
}
