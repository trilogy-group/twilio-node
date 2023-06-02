/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Media
 * This is the public Kandy REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to create a PlaybackGrantInstance
 */
export interface PlaybackGrantContextCreateOptions {
  /** The time to live of the PlaybackGrant. Default value is 15 seconds. Maximum value is 60 seconds. */
  ttl?: number;
  /** The full origin URL where the livestream can be streamed. If this is not provided, it can be streamed from any domain. */
  accessControlAllowOrigin?: string;
}

export interface PlaybackGrantContext {
  /**
   * Create a PlaybackGrantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PlaybackGrantInstance
   */
  create(
    callback?: (error: Error | null, item?: PlaybackGrantInstance) => any
  ): Promise<PlaybackGrantInstance>;
  /**
   * Create a PlaybackGrantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PlaybackGrantInstance
   */
  create(
    params: PlaybackGrantContextCreateOptions,
    callback?: (error: Error | null, item?: PlaybackGrantInstance) => any
  ): Promise<PlaybackGrantInstance>;

  /**
   * Fetch a PlaybackGrantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PlaybackGrantInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PlaybackGrantInstance) => any
  ): Promise<PlaybackGrantInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PlaybackGrantContextSolution {
  sid: string;
}

export class PlaybackGrantContextImpl implements PlaybackGrantContext {
  protected _solution: PlaybackGrantContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/PlayerStreamers/${sid}/PlaybackGrant`;
  }

  create(
    params?:
      | PlaybackGrantContextCreateOptions
      | ((error: Error | null, item?: PlaybackGrantInstance) => any),
    callback?: (error: Error | null, item?: PlaybackGrantInstance) => any
  ): Promise<PlaybackGrantInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["ttl"] !== undefined) data["Ttl"] = params["ttl"];
    if (params["accessControlAllowOrigin"] !== undefined)
      data["AccessControlAllowOrigin"] = params["accessControlAllowOrigin"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PlaybackGrantInstance(
          operationVersion,
          payload,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: PlaybackGrantInstance) => any
  ): Promise<PlaybackGrantInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PlaybackGrantInstance(
          operationVersion,
          payload,
          instance._solution.sid
        )
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

interface PlaybackGrantPayload extends PlaybackGrantResource {}

interface PlaybackGrantResource {
  sid: string;
  url: string;
  account_sid: string;
  date_created: Date;
  grant: any;
}

export class PlaybackGrantInstance {
  protected _solution: PlaybackGrantContextSolution;
  protected _context?: PlaybackGrantContext;

  constructor(
    protected _version: V1,
    payload: PlaybackGrantResource,
    sid: string
  ) {
    this.sid = payload.sid;
    this.url = payload.url;
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.grant = payload.grant;

    this._solution = { sid };
  }

  /**
   * The unique string generated to identify the PlayerStreamer resource that this PlaybackGrant authorizes views for.
   */
  sid: string;
  /**
   * The absolute URL of the resource.
   */
  url: string;
  /**
   * The SID of the [Account](https://www.kandy.com/docs/iam/api/account) that created this resource.
   */
  accountSid: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The grant that authorizes the player sdk to connect to the livestream
   */
  grant: any;

  private get _proxy(): PlaybackGrantContext {
    this._context =
      this._context ||
      new PlaybackGrantContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Create a PlaybackGrantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PlaybackGrantInstance
   */
  create(
    callback?: (error: Error | null, item?: PlaybackGrantInstance) => any
  ): Promise<PlaybackGrantInstance>;
  /**
   * Create a PlaybackGrantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PlaybackGrantInstance
   */
  create(
    params: PlaybackGrantContextCreateOptions,
    callback?: (error: Error | null, item?: PlaybackGrantInstance) => any
  ): Promise<PlaybackGrantInstance>;

  create(
    params?: any,
    callback?: (error: Error | null, item?: PlaybackGrantInstance) => any
  ): Promise<PlaybackGrantInstance> {
    return this._proxy.create(params, callback);
  }

  /**
   * Fetch a PlaybackGrantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PlaybackGrantInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PlaybackGrantInstance) => any
  ): Promise<PlaybackGrantInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      url: this.url,
      accountSid: this.accountSid,
      dateCreated: this.dateCreated,
      grant: this.grant,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface PlaybackGrantSolution {
  sid: string;
}

export interface PlaybackGrantListInstance {
  _version: V1;
  _solution: PlaybackGrantSolution;
  _uri: string;

  (): PlaybackGrantContext;
  get(): PlaybackGrantContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function PlaybackGrantListInstance(
  version: V1,
  sid: string
): PlaybackGrantListInstance {
  if (!isValidPathParam(sid)) {
    throw new Error("Parameter 'sid' is not valid.");
  }

  const instance = (() => instance.get()) as PlaybackGrantListInstance;

  instance.get = function get(): PlaybackGrantContext {
    return new PlaybackGrantContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = { sid };
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
