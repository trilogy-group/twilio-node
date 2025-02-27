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

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to create a DeviceCodeInstance
 */
export interface DeviceCodeListInstanceCreateOptions {
  /** A 34 character string that uniquely identifies this OAuth App. */
  clientSid: string;
  /** An Array of scopes for authorization request */
  scopes: Array<string>;
  /** An array of intended audiences for token requests */
  audiences?: Array<string>;
}

export interface DeviceCodeSolution {}

export interface DeviceCodeListInstance {
  _version: V1;
  _solution: DeviceCodeSolution;
  _uri: string;

  /**
   * Create a DeviceCodeInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeviceCodeInstance
   */
  create(
    params: DeviceCodeListInstanceCreateOptions,
    callback?: (error: Error | null, item?: DeviceCodeInstance) => any
  ): Promise<DeviceCodeInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DeviceCodeListInstance(version: V1): DeviceCodeListInstance {
  const instance = {} as DeviceCodeListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/device/code`;

  instance.create = function create(
    params: DeviceCodeListInstanceCreateOptions,
    callback?: (error: Error | null, items: DeviceCodeInstance) => any
  ): Promise<DeviceCodeInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["clientSid"] === null || params["clientSid"] === undefined) {
      throw new Error("Required parameter \"params['clientSid']\" missing.");
    }

    if (params["scopes"] === null || params["scopes"] === undefined) {
      throw new Error("Required parameter \"params['scopes']\" missing.");
    }

    let data: any = {};

    data["ClientSid"] = params["clientSid"];

    data["Scopes"] = serialize.map(params["scopes"], (e: string) => e);
    if (params["audiences"] !== undefined)
      data["Audiences"] = serialize.map(params["audiences"], (e: string) => e);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new DeviceCodeInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

interface DeviceCodePayload extends DeviceCodeResource {}

interface DeviceCodeResource {
  device_code: string;
  user_code: string;
  verification_uri: string;
  verification_uri_complete: string;
  expires_in: number;
  interval: number;
}

export class DeviceCodeInstance {
  constructor(protected _version: V1, payload: DeviceCodeResource) {
    this.deviceCode = payload.device_code;
    this.userCode = payload.user_code;
    this.verificationUri = payload.verification_uri;
    this.verificationUriComplete = payload.verification_uri_complete;
    this.expiresIn = payload.expires_in;
    this.interval = deserialize.integer(payload.interval);
  }

  /**
   * The device verification code.
   */
  deviceCode: string;
  /**
   * The verification code which end user uses to verify authorization request.
   */
  userCode: string;
  /**
   * The URI that the end user visits to verify authorization request.
   */
  verificationUri: string;
  /**
   * The URI with user_code that the end-user alternatively visits to verify authorization request.
   */
  verificationUriComplete: string;
  /**
   * The expiration time of the device_code and user_code in seconds.
   */
  expiresIn: number;
  /**
   * The minimum amount of time in seconds that the client should wait between polling requests to the token endpoint.
   */
  interval: number;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      deviceCode: this.deviceCode,
      userCode: this.userCode,
      verificationUri: this.verificationUri,
      verificationUriComplete: this.verificationUriComplete,
      expiresIn: this.expiresIn,
      interval: this.interval,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
