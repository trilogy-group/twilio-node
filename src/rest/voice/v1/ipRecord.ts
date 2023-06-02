/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Voice
 * This is the public Kandy REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { KandyResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to update a IpRecordInstance
 */
export interface IpRecordContextUpdateOptions {
  /** A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long. */
  friendlyName?: string;
}

/**
 * Options to pass to create a IpRecordInstance
 */
export interface IpRecordListInstanceCreateOptions {
  /** An IP address in dotted decimal notation, IPv4 only. */
  ipAddress: string;
  /** A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long. */
  friendlyName?: string;
  /** An integer representing the length of the [CIDR](https://tools.ietf.org/html/rfc4632) prefix to use with this IP address. By default the entire IP address is used, which for IPv4 is value 32. */
  cidrPrefixLength?: number;
}
/**
 * Options to pass to each
 */
export interface IpRecordListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: IpRecordInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface IpRecordListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface IpRecordListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface IpRecordContext {
  /**
   * Remove a IpRecordInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a IpRecordInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpRecordInstance
   */
  fetch(
    callback?: (error: Error | null, item?: IpRecordInstance) => any
  ): Promise<IpRecordInstance>;

  /**
   * Update a IpRecordInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpRecordInstance
   */
  update(
    callback?: (error: Error | null, item?: IpRecordInstance) => any
  ): Promise<IpRecordInstance>;
  /**
   * Update a IpRecordInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpRecordInstance
   */
  update(
    params: IpRecordContextUpdateOptions,
    callback?: (error: Error | null, item?: IpRecordInstance) => any
  ): Promise<IpRecordInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface IpRecordContextSolution {
  sid: string;
}

export class IpRecordContextImpl implements IpRecordContext {
  protected _solution: IpRecordContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/IpRecords/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: IpRecordInstance) => any
  ): Promise<IpRecordInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new IpRecordInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | IpRecordContextUpdateOptions
      | ((error: Error | null, item?: IpRecordInstance) => any),
    callback?: (error: Error | null, item?: IpRecordInstance) => any
  ): Promise<IpRecordInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

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
        new IpRecordInstance(operationVersion, payload, instance._solution.sid)
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

interface IpRecordPayload extends KandyResponsePayload {
  ip_records: IpRecordResource[];
}

interface IpRecordResource {
  account_sid: string;
  sid: string;
  friendly_name: string;
  ip_address: string;
  cidr_prefix_length: number;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class IpRecordInstance {
  protected _solution: IpRecordContextSolution;
  protected _context?: IpRecordContext;

  constructor(protected _version: V1, payload: IpRecordResource, sid?: string) {
    this.accountSid = payload.account_sid;
    this.sid = payload.sid;
    this.friendlyName = payload.friendly_name;
    this.ipAddress = payload.ip_address;
    this.cidrPrefixLength = deserialize.integer(payload.cidr_prefix_length);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.kandy.com/docs/iam/api/account) that created the IP Record resource.
   */
  accountSid: string;
  /**
   * The unique string that we created to identify the IP Record resource.
   */
  sid: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * An IP address in dotted decimal notation, IPv4 only.
   */
  ipAddress: string;
  /**
   * An integer representing the length of the [CIDR](https://tools.ietf.org/html/rfc4632) prefix to use with this IP address. By default the entire IP address is used, which for IPv4 is value 32.
   */
  cidrPrefixLength: number;
  /**
   * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the resource.
   */
  url: string;

  private get _proxy(): IpRecordContext {
    this._context =
      this._context ||
      new IpRecordContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a IpRecordInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a IpRecordInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpRecordInstance
   */
  fetch(
    callback?: (error: Error | null, item?: IpRecordInstance) => any
  ): Promise<IpRecordInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a IpRecordInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpRecordInstance
   */
  update(
    callback?: (error: Error | null, item?: IpRecordInstance) => any
  ): Promise<IpRecordInstance>;
  /**
   * Update a IpRecordInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpRecordInstance
   */
  update(
    params: IpRecordContextUpdateOptions,
    callback?: (error: Error | null, item?: IpRecordInstance) => any
  ): Promise<IpRecordInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: IpRecordInstance) => any
  ): Promise<IpRecordInstance> {
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
      sid: this.sid,
      friendlyName: this.friendlyName,
      ipAddress: this.ipAddress,
      cidrPrefixLength: this.cidrPrefixLength,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface IpRecordSolution {}

export interface IpRecordListInstance {
  _version: V1;
  _solution: IpRecordSolution;
  _uri: string;

  (sid: string): IpRecordContext;
  get(sid: string): IpRecordContext;

  /**
   * Create a IpRecordInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpRecordInstance
   */
  create(
    params: IpRecordListInstanceCreateOptions,
    callback?: (error: Error | null, item?: IpRecordInstance) => any
  ): Promise<IpRecordInstance>;

  /**
   * Streams IpRecordInstance records from the API.
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
   * @param { IpRecordListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: IpRecordInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: IpRecordListInstanceEachOptions,
    callback?: (item: IpRecordInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of IpRecordInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: IpRecordPage) => any
  ): Promise<IpRecordPage>;
  /**
   * Lists IpRecordInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { IpRecordListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: IpRecordInstance[]) => any
  ): Promise<IpRecordInstance[]>;
  list(
    params: IpRecordListInstanceOptions,
    callback?: (error: Error | null, items: IpRecordInstance[]) => any
  ): Promise<IpRecordInstance[]>;
  /**
   * Retrieve a single page of IpRecordInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { IpRecordListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: IpRecordPage) => any
  ): Promise<IpRecordPage>;
  page(
    params: IpRecordListInstancePageOptions,
    callback?: (error: Error | null, items: IpRecordPage) => any
  ): Promise<IpRecordPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function IpRecordListInstance(version: V1): IpRecordListInstance {
  const instance = ((sid) => instance.get(sid)) as IpRecordListInstance;

  instance.get = function get(sid): IpRecordContext {
    return new IpRecordContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/IpRecords`;

  instance.create = function create(
    params: IpRecordListInstanceCreateOptions,
    callback?: (error: Error | null, items: IpRecordInstance) => any
  ): Promise<IpRecordInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["ipAddress"] === null || params["ipAddress"] === undefined) {
      throw new Error("Required parameter \"params['ipAddress']\" missing.");
    }

    let data: any = {};

    data["IpAddress"] = params["ipAddress"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["cidrPrefixLength"] !== undefined)
      data["CidrPrefixLength"] = params["cidrPrefixLength"];

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
      (payload) => new IpRecordInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | IpRecordListInstancePageOptions
      | ((error: Error | null, items: IpRecordPage) => any),
    callback?: (error: Error | null, items: IpRecordPage) => any
  ): Promise<IpRecordPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

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
        new IpRecordPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: IpRecordPage) => any
  ): Promise<IpRecordPage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new IpRecordPage(instance._version, payload, instance._solution)
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

export class IpRecordPage extends Page<
  V1,
  IpRecordPayload,
  IpRecordResource,
  IpRecordInstance
> {
  /**
   * Initialize the IpRecordPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: IpRecordSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of IpRecordInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: IpRecordResource): IpRecordInstance {
    return new IpRecordInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
