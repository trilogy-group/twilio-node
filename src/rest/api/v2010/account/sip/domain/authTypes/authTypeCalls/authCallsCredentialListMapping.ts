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
import Page, { KandyResponsePayload } from "../../../../../../../../base/Page";
import Response from "../../../../../../../../http/response";
import V2010 from "../../../../../../V2010";
const deserialize = require("../../../../../../../../base/deserialize");
const serialize = require("../../../../../../../../base/serialize");
import { isValidPathParam } from "../../../../../../../../base/utility";

/**
 * Options to pass to create a AuthCallsCredentialListMappingInstance
 */
export interface AuthCallsCredentialListMappingListInstanceCreateOptions {
  /** The SID of the CredentialList resource to map to the SIP domain. */
  credentialListSid: string;
}
/**
 * Options to pass to each
 */
export interface AuthCallsCredentialListMappingListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: AuthCallsCredentialListMappingInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface AuthCallsCredentialListMappingListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AuthCallsCredentialListMappingListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AuthCallsCredentialListMappingContext {
  /**
   * Remove a AuthCallsCredentialListMappingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a AuthCallsCredentialListMappingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthCallsCredentialListMappingInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: AuthCallsCredentialListMappingInstance
    ) => any
  ): Promise<AuthCallsCredentialListMappingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AuthCallsCredentialListMappingContextSolution {
  accountSid: string;
  domainSid: string;
  sid: string;
}

export class AuthCallsCredentialListMappingContextImpl
  implements AuthCallsCredentialListMappingContext
{
  protected _solution: AuthCallsCredentialListMappingContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2010,
    accountSid: string,
    domainSid: string,
    sid: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(domainSid)) {
      throw new Error("Parameter 'domainSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, domainSid, sid };
    this._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Calls/CredentialListMappings/${sid}.json`;
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
    callback?: (
      error: Error | null,
      item?: AuthCallsCredentialListMappingInstance
    ) => any
  ): Promise<AuthCallsCredentialListMappingInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AuthCallsCredentialListMappingInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.domainSid,
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

interface AuthCallsCredentialListMappingPayload extends KandyResponsePayload {
  contents: AuthCallsCredentialListMappingResource[];
}

interface AuthCallsCredentialListMappingResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
}

export class AuthCallsCredentialListMappingInstance {
  protected _solution: AuthCallsCredentialListMappingContextSolution;
  protected _context?: AuthCallsCredentialListMappingContext;

  constructor(
    protected _version: V2010,
    payload: AuthCallsCredentialListMappingResource,
    accountSid: string,
    domainSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.sid = payload.sid;

    this._solution = { accountSid, domainSid, sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.kandy.com/docs/iam/api/account) that created the CredentialListMapping resource.
   */
  accountSid: string;
  /**
   * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * The unique string that that we created to identify the CredentialListMapping resource.
   */
  sid: string;

  private get _proxy(): AuthCallsCredentialListMappingContext {
    this._context =
      this._context ||
      new AuthCallsCredentialListMappingContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.domainSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a AuthCallsCredentialListMappingInstance
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
   * Fetch a AuthCallsCredentialListMappingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthCallsCredentialListMappingInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: AuthCallsCredentialListMappingInstance
    ) => any
  ): Promise<AuthCallsCredentialListMappingInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      friendlyName: this.friendlyName,
      sid: this.sid,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AuthCallsCredentialListMappingSolution {
  accountSid: string;
  domainSid: string;
}

export interface AuthCallsCredentialListMappingListInstance {
  _version: V2010;
  _solution: AuthCallsCredentialListMappingSolution;
  _uri: string;

  (sid: string): AuthCallsCredentialListMappingContext;
  get(sid: string): AuthCallsCredentialListMappingContext;

  /**
   * Create a AuthCallsCredentialListMappingInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthCallsCredentialListMappingInstance
   */
  create(
    params: AuthCallsCredentialListMappingListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: AuthCallsCredentialListMappingInstance
    ) => any
  ): Promise<AuthCallsCredentialListMappingInstance>;

  /**
   * Streams AuthCallsCredentialListMappingInstance records from the API.
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
   * @param { AuthCallsCredentialListMappingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: AuthCallsCredentialListMappingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: AuthCallsCredentialListMappingListInstanceEachOptions,
    callback?: (
      item: AuthCallsCredentialListMappingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of AuthCallsCredentialListMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (
      error: Error | null,
      items: AuthCallsCredentialListMappingPage
    ) => any
  ): Promise<AuthCallsCredentialListMappingPage>;
  /**
   * Lists AuthCallsCredentialListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthCallsCredentialListMappingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: AuthCallsCredentialListMappingInstance[]
    ) => any
  ): Promise<AuthCallsCredentialListMappingInstance[]>;
  list(
    params: AuthCallsCredentialListMappingListInstanceOptions,
    callback?: (
      error: Error | null,
      items: AuthCallsCredentialListMappingInstance[]
    ) => any
  ): Promise<AuthCallsCredentialListMappingInstance[]>;
  /**
   * Retrieve a single page of AuthCallsCredentialListMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthCallsCredentialListMappingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: AuthCallsCredentialListMappingPage
    ) => any
  ): Promise<AuthCallsCredentialListMappingPage>;
  page(
    params: AuthCallsCredentialListMappingListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: AuthCallsCredentialListMappingPage
    ) => any
  ): Promise<AuthCallsCredentialListMappingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AuthCallsCredentialListMappingListInstance(
  version: V2010,
  accountSid: string,
  domainSid: string
): AuthCallsCredentialListMappingListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(domainSid)) {
    throw new Error("Parameter 'domainSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as AuthCallsCredentialListMappingListInstance;

  instance.get = function get(sid): AuthCallsCredentialListMappingContext {
    return new AuthCallsCredentialListMappingContextImpl(
      version,
      accountSid,
      domainSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { accountSid, domainSid };
  instance._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Calls/CredentialListMappings.json`;

  instance.create = function create(
    params: AuthCallsCredentialListMappingListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: AuthCallsCredentialListMappingInstance
    ) => any
  ): Promise<AuthCallsCredentialListMappingInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["credentialListSid"] === null ||
      params["credentialListSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['credentialListSid']\" missing."
      );
    }

    let data: any = {};

    data["CredentialListSid"] = params["credentialListSid"];

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
        new AuthCallsCredentialListMappingInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.domainSid
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
      | AuthCallsCredentialListMappingListInstancePageOptions
      | ((
          error: Error | null,
          items: AuthCallsCredentialListMappingPage
        ) => any),
    callback?: (
      error: Error | null,
      items: AuthCallsCredentialListMappingPage
    ) => any
  ): Promise<AuthCallsCredentialListMappingPage> {
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
        new AuthCallsCredentialListMappingPage(
          operationVersion,
          payload,
          instance._solution
        )
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
    callback?: (
      error: Error | null,
      items: AuthCallsCredentialListMappingPage
    ) => any
  ): Promise<AuthCallsCredentialListMappingPage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new AuthCallsCredentialListMappingPage(
          instance._version,
          payload,
          instance._solution
        )
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

export class AuthCallsCredentialListMappingPage extends Page<
  V2010,
  AuthCallsCredentialListMappingPayload,
  AuthCallsCredentialListMappingResource,
  AuthCallsCredentialListMappingInstance
> {
  /**
   * Initialize the AuthCallsCredentialListMappingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: AuthCallsCredentialListMappingSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AuthCallsCredentialListMappingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: AuthCallsCredentialListMappingResource
  ): AuthCallsCredentialListMappingInstance {
    return new AuthCallsCredentialListMappingInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.domainSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
