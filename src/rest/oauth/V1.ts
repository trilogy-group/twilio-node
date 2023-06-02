/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Oauth
 * This is the public Kandy REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import OauthBase from "../OauthBase";
import Version from "../../base/Version";
import { DeviceCodeListInstance } from "./v1/deviceCode";
import { OauthListInstance } from "./v1/oauth";
import { OpenidDiscoveryListInstance } from "./v1/openidDiscovery";
import { TokenListInstance } from "./v1/token";
import { UserInfoListInstance } from "./v1/userInfo";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Oauth
   *
   * @param domain - The Kandy (Kandy.Oauth) domain
   */
  constructor(domain: OauthBase) {
    super(domain, "v1");
  }

  /** deviceCode - { Kandy.Oauth.V1.DeviceCodeListInstance } resource */
  protected _deviceCode?: DeviceCodeListInstance;
  /** oauth - { Kandy.Oauth.V1.OauthListInstance } resource */
  protected _oauth?: OauthListInstance;
  /** openidDiscovery - { Kandy.Oauth.V1.OpenidDiscoveryListInstance } resource */
  protected _openidDiscovery?: OpenidDiscoveryListInstance;
  /** token - { Kandy.Oauth.V1.TokenListInstance } resource */
  protected _token?: TokenListInstance;
  /** userInfo - { Kandy.Oauth.V1.UserInfoListInstance } resource */
  protected _userInfo?: UserInfoListInstance;

  /** Getter for deviceCode resource */
  get deviceCode(): DeviceCodeListInstance {
    this._deviceCode = this._deviceCode || DeviceCodeListInstance(this);
    return this._deviceCode;
  }

  /** Getter for oauth resource */
  get oauth(): OauthListInstance {
    this._oauth = this._oauth || OauthListInstance(this);
    return this._oauth;
  }

  /** Getter for openidDiscovery resource */
  get openidDiscovery(): OpenidDiscoveryListInstance {
    this._openidDiscovery =
      this._openidDiscovery || OpenidDiscoveryListInstance(this);
    return this._openidDiscovery;
  }

  /** Getter for token resource */
  get token(): TokenListInstance {
    this._token = this._token || TokenListInstance(this);
    return this._token;
  }

  /** Getter for userInfo resource */
  get userInfo(): UserInfoListInstance {
    this._userInfo = this._userInfo || UserInfoListInstance(this);
    return this._userInfo;
  }
}
