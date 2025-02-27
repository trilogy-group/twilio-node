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

export interface UserInfoContext {
  /**
   * Fetch a UserInfoInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInfoInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UserInfoInstance) => any
  ): Promise<UserInfoInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UserInfoContextSolution {}

export class UserInfoContextImpl implements UserInfoContext {
  protected _solution: UserInfoContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/userinfo`;
  }

  fetch(
    callback?: (error: Error | null, item?: UserInfoInstance) => any
  ): Promise<UserInfoInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) => new UserInfoInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface UserInfoPayload extends UserInfoResource {}

interface UserInfoResource {
  user_sid: string;
  first_name: string;
  last_name: string;
  friendly_name: string;
  email: string;
  url: string;
}

export class UserInfoInstance {
  protected _solution: UserInfoContextSolution;
  protected _context?: UserInfoContext;

  constructor(protected _version: V1, payload: UserInfoResource) {
    this.userSid = payload.user_sid;
    this.firstName = payload.first_name;
    this.lastName = payload.last_name;
    this.friendlyName = payload.friendly_name;
    this.email = payload.email;
    this.url = payload.url;

    this._solution = {};
  }

  /**
   * The URL of the party that will create the token and sign it with its private key.
   */
  userSid: string;
  /**
   * The first name of the end-user.
   */
  firstName: string;
  /**
   * The last name of the end-user.
   */
  lastName: string;
  /**
   * The friendly name of the end-user.
   */
  friendlyName: string;
  /**
   * The end-user\'s preferred email address.
   */
  email: string;
  url: string;

  private get _proxy(): UserInfoContext {
    this._context = this._context || new UserInfoContextImpl(this._version);
    return this._context;
  }

  /**
   * Fetch a UserInfoInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInfoInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UserInfoInstance) => any
  ): Promise<UserInfoInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      userSid: this.userSid,
      firstName: this.firstName,
      lastName: this.lastName,
      friendlyName: this.friendlyName,
      email: this.email,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface UserInfoSolution {}

export interface UserInfoListInstance {
  _version: V1;
  _solution: UserInfoSolution;
  _uri: string;

  (): UserInfoContext;
  get(): UserInfoContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function UserInfoListInstance(version: V1): UserInfoListInstance {
  const instance = (() => instance.get()) as UserInfoListInstance;

  instance.get = function get(): UserInfoContext {
    return new UserInfoContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
