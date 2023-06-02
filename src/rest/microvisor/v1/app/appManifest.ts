/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Microvisor
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

export interface AppManifestContext {
  /**
   * Fetch a AppManifestInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AppManifestInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AppManifestInstance) => any
  ): Promise<AppManifestInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AppManifestContextSolution {
  appSid: string;
}

export class AppManifestContextImpl implements AppManifestContext {
  protected _solution: AppManifestContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, appSid: string) {
    if (!isValidPathParam(appSid)) {
      throw new Error("Parameter 'appSid' is not valid.");
    }

    this._solution = { appSid };
    this._uri = `/Apps/${appSid}/Manifest`;
  }

  fetch(
    callback?: (error: Error | null, item?: AppManifestInstance) => any
  ): Promise<AppManifestInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AppManifestInstance(
          operationVersion,
          payload,
          instance._solution.appSid
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

interface AppManifestPayload extends AppManifestResource {}

interface AppManifestResource {
  app_sid: string;
  hash: string;
  encoded_bytes: string;
  url: string;
}

export class AppManifestInstance {
  protected _solution: AppManifestContextSolution;
  protected _context?: AppManifestContext;

  constructor(
    protected _version: V1,
    payload: AppManifestResource,
    appSid: string
  ) {
    this.appSid = payload.app_sid;
    this.hash = payload.hash;
    this.encodedBytes = payload.encoded_bytes;
    this.url = payload.url;

    this._solution = { appSid };
  }

  /**
   * A 34-character string that uniquely identifies this App.
   */
  appSid: string;
  /**
   * App manifest hash represented as `hash_algorithm:hash_value`.
   */
  hash: string;
  /**
   * The base-64 encoded manifest
   */
  encodedBytes: string;
  /**
   * The absolute URL of this Manifest.
   */
  url: string;

  private get _proxy(): AppManifestContext {
    this._context =
      this._context ||
      new AppManifestContextImpl(this._version, this._solution.appSid);
    return this._context;
  }

  /**
   * Fetch a AppManifestInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AppManifestInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AppManifestInstance) => any
  ): Promise<AppManifestInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      appSid: this.appSid,
      hash: this.hash,
      encodedBytes: this.encodedBytes,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AppManifestSolution {
  appSid: string;
}

export interface AppManifestListInstance {
  _version: V1;
  _solution: AppManifestSolution;
  _uri: string;

  (): AppManifestContext;
  get(): AppManifestContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AppManifestListInstance(
  version: V1,
  appSid: string
): AppManifestListInstance {
  if (!isValidPathParam(appSid)) {
    throw new Error("Parameter 'appSid' is not valid.");
  }

  const instance = (() => instance.get()) as AppManifestListInstance;

  instance.get = function get(): AppManifestContext {
    return new AppManifestContextImpl(version, appSid);
  };

  instance._version = version;
  instance._solution = { appSid };
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
