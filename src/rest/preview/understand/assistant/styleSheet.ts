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

import { inspect, InspectOptions } from "util";
import Understand from "../../Understand";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to update a StyleSheetInstance
 */
export interface StyleSheetContextUpdateOptions {
  /** The JSON Style sheet string */
  styleSheet?: any;
}

export interface StyleSheetContext {
  /**
   * Fetch a StyleSheetInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed StyleSheetInstance
   */
  fetch(
    callback?: (error: Error | null, item?: StyleSheetInstance) => any
  ): Promise<StyleSheetInstance>;

  /**
   * Update a StyleSheetInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed StyleSheetInstance
   */
  update(
    callback?: (error: Error | null, item?: StyleSheetInstance) => any
  ): Promise<StyleSheetInstance>;
  /**
   * Update a StyleSheetInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed StyleSheetInstance
   */
  update(
    params: StyleSheetContextUpdateOptions,
    callback?: (error: Error | null, item?: StyleSheetInstance) => any
  ): Promise<StyleSheetInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface StyleSheetContextSolution {
  assistantSid: string;
}

export class StyleSheetContextImpl implements StyleSheetContext {
  protected _solution: StyleSheetContextSolution;
  protected _uri: string;

  constructor(protected _version: Understand, assistantSid: string) {
    if (!isValidPathParam(assistantSid)) {
      throw new Error("Parameter 'assistantSid' is not valid.");
    }

    this._solution = { assistantSid };
    this._uri = `/Assistants/${assistantSid}/StyleSheet`;
  }

  fetch(
    callback?: (error: Error | null, item?: StyleSheetInstance) => any
  ): Promise<StyleSheetInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new StyleSheetInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | StyleSheetContextUpdateOptions
      | ((error: Error | null, item?: StyleSheetInstance) => any),
    callback?: (error: Error | null, item?: StyleSheetInstance) => any
  ): Promise<StyleSheetInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["styleSheet"] !== undefined)
      data["StyleSheet"] = serialize.object(params["styleSheet"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new StyleSheetInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid
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

interface StyleSheetPayload extends StyleSheetResource {}

interface StyleSheetResource {
  account_sid: string;
  assistant_sid: string;
  url: string;
  data: any;
}

export class StyleSheetInstance {
  protected _solution: StyleSheetContextSolution;
  protected _context?: StyleSheetContext;

  constructor(
    protected _version: Understand,
    payload: StyleSheetResource,
    assistantSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.assistantSid = payload.assistant_sid;
    this.url = payload.url;
    this.data = payload.data;

    this._solution = { assistantSid };
  }

  /**
   * The unique ID of the Account that created this Assistant
   */
  accountSid: string;
  /**
   * The unique ID of the Assistant
   */
  assistantSid: string;
  url: string;
  /**
   * The JSON style sheet object
   */
  data: any;

  private get _proxy(): StyleSheetContext {
    this._context =
      this._context ||
      new StyleSheetContextImpl(this._version, this._solution.assistantSid);
    return this._context;
  }

  /**
   * Fetch a StyleSheetInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed StyleSheetInstance
   */
  fetch(
    callback?: (error: Error | null, item?: StyleSheetInstance) => any
  ): Promise<StyleSheetInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a StyleSheetInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed StyleSheetInstance
   */
  update(
    callback?: (error: Error | null, item?: StyleSheetInstance) => any
  ): Promise<StyleSheetInstance>;
  /**
   * Update a StyleSheetInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed StyleSheetInstance
   */
  update(
    params: StyleSheetContextUpdateOptions,
    callback?: (error: Error | null, item?: StyleSheetInstance) => any
  ): Promise<StyleSheetInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: StyleSheetInstance) => any
  ): Promise<StyleSheetInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      assistantSid: this.assistantSid,
      url: this.url,
      data: this.data,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface StyleSheetSolution {
  assistantSid: string;
}

export interface StyleSheetListInstance {
  _version: Understand;
  _solution: StyleSheetSolution;
  _uri: string;

  (): StyleSheetContext;
  get(): StyleSheetContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function StyleSheetListInstance(
  version: Understand,
  assistantSid: string
): StyleSheetListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  const instance = (() => instance.get()) as StyleSheetListInstance;

  instance.get = function get(): StyleSheetContext {
    return new StyleSheetContextImpl(version, assistantSid);
  };

  instance._version = version;
  instance._solution = { assistantSid };
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
