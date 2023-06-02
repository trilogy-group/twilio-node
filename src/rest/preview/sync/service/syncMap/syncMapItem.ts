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
import Page, { KandyResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Sync from "../../../Sync";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

export type SyncMapItemQueryFromBoundType = "inclusive" | "exclusive";

export type SyncMapItemQueryResultOrder = "asc" | "desc";

/**
 * Options to pass to remove a SyncMapItemInstance
 */
export interface SyncMapItemContextRemoveOptions {
  /** The If-Match HTTP request header */
  ifMatch?: string;
}

/**
 * Options to pass to update a SyncMapItemInstance
 */
export interface SyncMapItemContextUpdateOptions {
  /**  */
  data: any;
  /** The If-Match HTTP request header */
  ifMatch?: string;
}

/**
 * Options to pass to create a SyncMapItemInstance
 */
export interface SyncMapItemListInstanceCreateOptions {
  /**  */
  key: string;
  /**  */
  data: any;
}
/**
 * Options to pass to each
 */
export interface SyncMapItemListInstanceEachOptions {
  /**  */
  order?: SyncMapItemQueryResultOrder;
  /**  */
  from?: string;
  /**  */
  bounds?: SyncMapItemQueryFromBoundType;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: SyncMapItemInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface SyncMapItemListInstanceOptions {
  /**  */
  order?: SyncMapItemQueryResultOrder;
  /**  */
  from?: string;
  /**  */
  bounds?: SyncMapItemQueryFromBoundType;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface SyncMapItemListInstancePageOptions {
  /**  */
  order?: SyncMapItemQueryResultOrder;
  /**  */
  from?: string;
  /**  */
  bounds?: SyncMapItemQueryFromBoundType;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface SyncMapItemContext {
  /**
   * Remove a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a SyncMapItemInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncMapItemInstance
   */
  remove(
    params: SyncMapItemContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncMapItemInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SyncMapItemInstance) => any
  ): Promise<SyncMapItemInstance>;

  /**
   * Update a SyncMapItemInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncMapItemInstance
   */
  update(
    params: SyncMapItemContextUpdateOptions,
    callback?: (error: Error | null, item?: SyncMapItemInstance) => any
  ): Promise<SyncMapItemInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncMapItemContextSolution {
  serviceSid: string;
  mapSid: string;
  key: string;
}

export class SyncMapItemContextImpl implements SyncMapItemContext {
  protected _solution: SyncMapItemContextSolution;
  protected _uri: string;

  constructor(
    protected _version: Sync,
    serviceSid: string,
    mapSid: string,
    key: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(mapSid)) {
      throw new Error("Parameter 'mapSid' is not valid.");
    }

    if (!isValidPathParam(key)) {
      throw new Error("Parameter 'key' is not valid.");
    }

    this._solution = { serviceSid, mapSid, key };
    this._uri = `/Services/${serviceSid}/Maps/${mapSid}/Items/${key}`;
  }

  remove(
    params?:
      | SyncMapItemContextRemoveOptions
      | ((error: Error | null, item?: boolean) => any),
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    const headers: any = {};
    if (params["ifMatch"] !== undefined)
      headers["If-Match"] = params["ifMatch"];

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        params: data,
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: SyncMapItemInstance) => any
  ): Promise<SyncMapItemInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SyncMapItemInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.mapSid,
          instance._solution.key
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params: SyncMapItemContextUpdateOptions,
    callback?: (error: Error | null, item?: SyncMapItemInstance) => any
  ): Promise<SyncMapItemInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["data"] === null || params["data"] === undefined) {
      throw new Error("Required parameter \"params['data']\" missing.");
    }

    let data: any = {};

    data["Data"] = serialize.object(params["data"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    if (params["ifMatch"] !== undefined)
      headers["If-Match"] = params["ifMatch"];

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
        new SyncMapItemInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.mapSid,
          instance._solution.key
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

interface SyncMapItemPayload extends KandyResponsePayload {
  items: SyncMapItemResource[];
}

interface SyncMapItemResource {
  key: string;
  account_sid: string;
  service_sid: string;
  map_sid: string;
  url: string;
  revision: string;
  data: any;
  date_created: Date;
  date_updated: Date;
  created_by: string;
}

export class SyncMapItemInstance {
  protected _solution: SyncMapItemContextSolution;
  protected _context?: SyncMapItemContext;

  constructor(
    protected _version: Sync,
    payload: SyncMapItemResource,
    serviceSid: string,
    mapSid: string,
    key?: string
  ) {
    this.key = payload.key;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.mapSid = payload.map_sid;
    this.url = payload.url;
    this.revision = payload.revision;
    this.data = payload.data;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;

    this._solution = { serviceSid, mapSid, key: key || this.key };
  }

  key: string;
  accountSid: string;
  serviceSid: string;
  mapSid: string;
  url: string;
  revision: string;
  data: any;
  dateCreated: Date;
  dateUpdated: Date;
  createdBy: string;

  private get _proxy(): SyncMapItemContext {
    this._context =
      this._context ||
      new SyncMapItemContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.mapSid,
        this._solution.key
      );
    return this._context;
  }

  /**
   * Remove a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a SyncMapItemInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncMapItemInstance
   */
  remove(
    params: SyncMapItemContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  remove(
    params?: any,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncMapItemInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SyncMapItemInstance) => any
  ): Promise<SyncMapItemInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SyncMapItemInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncMapItemInstance
   */
  update(
    params: SyncMapItemContextUpdateOptions,
    callback?: (error: Error | null, item?: SyncMapItemInstance) => any
  ): Promise<SyncMapItemInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: SyncMapItemInstance) => any
  ): Promise<SyncMapItemInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      key: this.key,
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      mapSid: this.mapSid,
      url: this.url,
      revision: this.revision,
      data: this.data,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      createdBy: this.createdBy,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SyncMapItemSolution {
  serviceSid: string;
  mapSid: string;
}

export interface SyncMapItemListInstance {
  _version: Sync;
  _solution: SyncMapItemSolution;
  _uri: string;

  (key: string): SyncMapItemContext;
  get(key: string): SyncMapItemContext;

  /**
   * Create a SyncMapItemInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncMapItemInstance
   */
  create(
    params: SyncMapItemListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SyncMapItemInstance) => any
  ): Promise<SyncMapItemInstance>;

  /**
   * Streams SyncMapItemInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncMapItemListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: SyncMapItemInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: SyncMapItemListInstanceEachOptions,
    callback?: (item: SyncMapItemInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of SyncMapItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SyncMapItemPage) => any
  ): Promise<SyncMapItemPage>;
  /**
   * Lists SyncMapItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncMapItemListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: SyncMapItemInstance[]) => any
  ): Promise<SyncMapItemInstance[]>;
  list(
    params: SyncMapItemListInstanceOptions,
    callback?: (error: Error | null, items: SyncMapItemInstance[]) => any
  ): Promise<SyncMapItemInstance[]>;
  /**
   * Retrieve a single page of SyncMapItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncMapItemListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: SyncMapItemPage) => any
  ): Promise<SyncMapItemPage>;
  page(
    params: SyncMapItemListInstancePageOptions,
    callback?: (error: Error | null, items: SyncMapItemPage) => any
  ): Promise<SyncMapItemPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SyncMapItemListInstance(
  version: Sync,
  serviceSid: string,
  mapSid: string
): SyncMapItemListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(mapSid)) {
    throw new Error("Parameter 'mapSid' is not valid.");
  }

  const instance = ((key) => instance.get(key)) as SyncMapItemListInstance;

  instance.get = function get(key): SyncMapItemContext {
    return new SyncMapItemContextImpl(version, serviceSid, mapSid, key);
  };

  instance._version = version;
  instance._solution = { serviceSid, mapSid };
  instance._uri = `/Services/${serviceSid}/Maps/${mapSid}/Items`;

  instance.create = function create(
    params: SyncMapItemListInstanceCreateOptions,
    callback?: (error: Error | null, items: SyncMapItemInstance) => any
  ): Promise<SyncMapItemInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["key"] === null || params["key"] === undefined) {
      throw new Error("Required parameter \"params['key']\" missing.");
    }

    if (params["data"] === null || params["data"] === undefined) {
      throw new Error("Required parameter \"params['data']\" missing.");
    }

    let data: any = {};

    data["Key"] = params["key"];

    data["Data"] = serialize.object(params["data"]);

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
      (payload) =>
        new SyncMapItemInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.mapSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | SyncMapItemListInstancePageOptions
      | ((error: Error | null, items: SyncMapItemPage) => any),
    callback?: (error: Error | null, items: SyncMapItemPage) => any
  ): Promise<SyncMapItemPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["order"] !== undefined) data["Order"] = params["order"];
    if (params["from"] !== undefined) data["From"] = params["from"];
    if (params["bounds"] !== undefined) data["Bounds"] = params["bounds"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SyncMapItemPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SyncMapItemPage) => any
  ): Promise<SyncMapItemPage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new SyncMapItemPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
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

export class SyncMapItemPage extends Page<
  Sync,
  SyncMapItemPayload,
  SyncMapItemResource,
  SyncMapItemInstance
> {
  /**
   * Initialize the SyncMapItemPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Sync,
    response: Response<string>,
    solution: SyncMapItemSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SyncMapItemInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncMapItemResource): SyncMapItemInstance {
    return new SyncMapItemInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.mapSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
