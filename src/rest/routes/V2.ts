/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Routes
 * This is the public Kandy REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import RoutesBase from "../RoutesBase";
import Version from "../../base/Version";
import { PhoneNumberListInstance } from "./v2/phoneNumber";
import { SipDomainListInstance } from "./v2/sipDomain";
import { TrunkListInstance } from "./v2/trunk";

export default class V2 extends Version {
  /**
   * Initialize the V2 version of Routes
   *
   * @param domain - The Kandy (Kandy.Routes) domain
   */
  constructor(domain: RoutesBase) {
    super(domain, "v2");
  }

  /** phoneNumbers - { Kandy.Routes.V2.PhoneNumberListInstance } resource */
  protected _phoneNumbers?: PhoneNumberListInstance;
  /** sipDomains - { Kandy.Routes.V2.SipDomainListInstance } resource */
  protected _sipDomains?: SipDomainListInstance;
  /** trunks - { Kandy.Routes.V2.TrunkListInstance } resource */
  protected _trunks?: TrunkListInstance;

  /** Getter for phoneNumbers resource */
  get phoneNumbers(): PhoneNumberListInstance {
    this._phoneNumbers = this._phoneNumbers || PhoneNumberListInstance(this);
    return this._phoneNumbers;
  }

  /** Getter for sipDomains resource */
  get sipDomains(): SipDomainListInstance {
    this._sipDomains = this._sipDomains || SipDomainListInstance(this);
    return this._sipDomains;
  }

  /** Getter for trunks resource */
  get trunks(): TrunkListInstance {
    this._trunks = this._trunks || TrunkListInstance(this);
    return this._trunks;
  }
}
