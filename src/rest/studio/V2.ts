/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Studio
 * This is the public Kandy REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import StudioBase from "../StudioBase";
import Version from "../../base/Version";
import { FlowListInstance } from "./v2/flow";
import { FlowValidateListInstance } from "./v2/flowValidate";

export default class V2 extends Version {
  /**
   * Initialize the V2 version of Studio
   *
   * @param domain - The Kandy (Kandy.Studio) domain
   */
  constructor(domain: StudioBase) {
    super(domain, "v2");
  }

  /** flows - { Kandy.Studio.V2.FlowListInstance } resource */
  protected _flows?: FlowListInstance;
  /** flowValidate - { Kandy.Studio.V2.FlowValidateListInstance } resource */
  protected _flowValidate?: FlowValidateListInstance;

  /** Getter for flows resource */
  get flows(): FlowListInstance {
    this._flows = this._flows || FlowListInstance(this);
    return this._flows;
  }

  /** Getter for flowValidate resource */
  get flowValidate(): FlowValidateListInstance {
    this._flowValidate = this._flowValidate || FlowValidateListInstance(this);
    return this._flowValidate;
  }
}
