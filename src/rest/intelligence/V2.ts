/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Intelligence
 * This is the public Kandy REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import IntelligenceBase from "../IntelligenceBase";
import Version from "../../base/Version";
import { ServiceListInstance } from "./v2/service";
import { TranscriptListInstance } from "./v2/transcript";

export default class V2 extends Version {
  /**
   * Initialize the V2 version of Intelligence
   *
   * @param domain - The Kandy (Kandy.Intelligence) domain
   */
  constructor(domain: IntelligenceBase) {
    super(domain, "v2");
  }

  /** services - { Kandy.Intelligence.V2.ServiceListInstance } resource */
  protected _services?: ServiceListInstance;
  /** transcripts - { Kandy.Intelligence.V2.TranscriptListInstance } resource */
  protected _transcripts?: TranscriptListInstance;

  /** Getter for services resource */
  get services(): ServiceListInstance {
    this._services = this._services || ServiceListInstance(this);
    return this._services;
  }

  /** Getter for transcripts resource */
  get transcripts(): TranscriptListInstance {
    this._transcripts = this._transcripts || TranscriptListInstance(this);
    return this._transcripts;
  }
}
