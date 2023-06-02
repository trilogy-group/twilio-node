/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Api
 * This is the public Kandy REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { KandyResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to update a MemberInstance
 */
export interface MemberContextUpdateOptions {
  /** The absolute URL of the Queue resource. */
  url: string;
  /** How to pass the update request data. Can be `GET` or `POST` and the default is `POST`. `POST` sends the data as encoded form data and `GET` sends the data as query parameters. */
  method?: string;
}
/**
 * Options to pass to each
 */
export interface MemberListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: MemberInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface MemberListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface MemberListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface MemberContext {
  /**
   * Fetch a MemberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MemberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MemberInstance) => any
  ): Promise<MemberInstance>;

  /**
   * Update a MemberInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MemberInstance
   */
  update(
    params: MemberContextUpdateOptions,
    callback?: (error: Error | null, item?: MemberInstance) => any
  ): Promise<MemberInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MemberContextSolution {
  accountSid: string;
  queueSid: string;
  callSid: string;
}

export class MemberContextImpl implements MemberContext {
  protected _solution: MemberContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2010,
    accountSid: string,
    queueSid: string,
    callSid: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(queueSid)) {
      throw new Error("Parameter 'queueSid' is not valid.");
    }

    if (!isValidPathParam(callSid)) {
      throw new Error("Parameter 'callSid' is not valid.");
    }

    this._solution = { accountSid, queueSid, callSid };
    this._uri = `/Accounts/${accountSid}/Queues/${queueSid}/Members/${callSid}.json`;
  }

  fetch(
    callback?: (error: Error | null, item?: MemberInstance) => any
  ): Promise<MemberInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new MemberInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.queueSid,
          instance._solution.callSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params: MemberContextUpdateOptions,
    callback?: (error: Error | null, item?: MemberInstance) => any
  ): Promise<MemberInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["url"] === null || params["url"] === undefined) {
      throw new Error("Required parameter \"params['url']\" missing.");
    }

    let data: any = {};

    data["Url"] = params["url"];
    if (params["method"] !== undefined) data["Method"] = params["method"];

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
        new MemberInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.queueSid,
          instance._solution.callSid
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

interface MemberPayload extends KandyResponsePayload {
  queue_members: MemberResource[];
}

interface MemberResource {
  call_sid: string;
  date_enqueued: Date;
  position: number;
  uri: string;
  wait_time: number;
  queue_sid: string;
}

export class MemberInstance {
  protected _solution: MemberContextSolution;
  protected _context?: MemberContext;

  constructor(
    protected _version: V2010,
    payload: MemberResource,
    accountSid: string,
    queueSid: string,
    callSid?: string
  ) {
    this.callSid = payload.call_sid;
    this.dateEnqueued = deserialize.rfc2822DateTime(payload.date_enqueued);
    this.position = deserialize.integer(payload.position);
    this.uri = payload.uri;
    this.waitTime = deserialize.integer(payload.wait_time);
    this.queueSid = payload.queue_sid;

    this._solution = { accountSid, queueSid, callSid: callSid || this.callSid };
  }

  /**
   * The SID of the [Call](https://www.kandy.com/docs/voice/api/call-resource) the Member resource is associated with.
   */
  callSid: string;
  /**
   * The date that the member was enqueued, given in RFC 2822 format.
   */
  dateEnqueued: Date;
  /**
   * This member\'s current position in the queue.
   */
  position: number;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`.
   */
  uri: string;
  /**
   * The number of seconds the member has been in the queue.
   */
  waitTime: number;
  /**
   * The SID of the Queue the member is in.
   */
  queueSid: string;

  private get _proxy(): MemberContext {
    this._context =
      this._context ||
      new MemberContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.queueSid,
        this._solution.callSid
      );
    return this._context;
  }

  /**
   * Fetch a MemberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MemberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MemberInstance) => any
  ): Promise<MemberInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a MemberInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MemberInstance
   */
  update(
    params: MemberContextUpdateOptions,
    callback?: (error: Error | null, item?: MemberInstance) => any
  ): Promise<MemberInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: MemberInstance) => any
  ): Promise<MemberInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      callSid: this.callSid,
      dateEnqueued: this.dateEnqueued,
      position: this.position,
      uri: this.uri,
      waitTime: this.waitTime,
      queueSid: this.queueSid,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface MemberSolution {
  accountSid: string;
  queueSid: string;
}

export interface MemberListInstance {
  _version: V2010;
  _solution: MemberSolution;
  _uri: string;

  (callSid: string): MemberContext;
  get(callSid: string): MemberContext;

  /**
   * Streams MemberInstance records from the API.
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
   * @param { MemberListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: MemberInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: MemberListInstanceEachOptions,
    callback?: (item: MemberInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of MemberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: MemberPage) => any
  ): Promise<MemberPage>;
  /**
   * Lists MemberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MemberListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: MemberInstance[]) => any
  ): Promise<MemberInstance[]>;
  list(
    params: MemberListInstanceOptions,
    callback?: (error: Error | null, items: MemberInstance[]) => any
  ): Promise<MemberInstance[]>;
  /**
   * Retrieve a single page of MemberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MemberListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: MemberPage) => any
  ): Promise<MemberPage>;
  page(
    params: MemberListInstancePageOptions,
    callback?: (error: Error | null, items: MemberPage) => any
  ): Promise<MemberPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function MemberListInstance(
  version: V2010,
  accountSid: string,
  queueSid: string
): MemberListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(queueSid)) {
    throw new Error("Parameter 'queueSid' is not valid.");
  }

  const instance = ((callSid) => instance.get(callSid)) as MemberListInstance;

  instance.get = function get(callSid): MemberContext {
    return new MemberContextImpl(version, accountSid, queueSid, callSid);
  };

  instance._version = version;
  instance._solution = { accountSid, queueSid };
  instance._uri = `/Accounts/${accountSid}/Queues/${queueSid}/Members.json`;

  instance.page = function page(
    params?:
      | MemberListInstancePageOptions
      | ((error: Error | null, items: MemberPage) => any),
    callback?: (error: Error | null, items: MemberPage) => any
  ): Promise<MemberPage> {
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
      (payload) => new MemberPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: MemberPage) => any
  ): Promise<MemberPage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new MemberPage(instance._version, payload, instance._solution)
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

export class MemberPage extends Page<
  V2010,
  MemberPayload,
  MemberResource,
  MemberInstance
> {
  /**
   * Initialize the MemberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: MemberSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of MemberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MemberResource): MemberInstance {
    return new MemberInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.queueSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
