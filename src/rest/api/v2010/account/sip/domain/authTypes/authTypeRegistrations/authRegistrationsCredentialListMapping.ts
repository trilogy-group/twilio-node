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
 * Options to pass to create a AuthRegistrationsCredentialListMappingInstance
 */
export interface AuthRegistrationsCredentialListMappingListInstanceCreateOptions {
  /** The SID of the CredentialList resource to map to the SIP domain. */
  credentialListSid: string;
}
/**
 * Options to pass to each
 */
export interface AuthRegistrationsCredentialListMappingListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: AuthRegistrationsCredentialListMappingInstance,
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
export interface AuthRegistrationsCredentialListMappingListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AuthRegistrationsCredentialListMappingListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AuthRegistrationsCredentialListMappingContext {
  /**
   * Remove a AuthRegistrationsCredentialListMappingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a AuthRegistrationsCredentialListMappingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthRegistrationsCredentialListMappingInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: AuthRegistrationsCredentialListMappingInstance
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AuthRegistrationsCredentialListMappingContextSolution {
  accountSid: string;
  domainSid: string;
  sid: string;
}

export class AuthRegistrationsCredentialListMappingContextImpl
  implements AuthRegistrationsCredentialListMappingContext
{
  protected _solution: AuthRegistrationsCredentialListMappingContextSolution;
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
    this._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Registrations/CredentialListMappings/${sid}.json`;
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
      item?: AuthRegistrationsCredentialListMappingInstance
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AuthRegistrationsCredentialListMappingInstance(
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

interface AuthRegistrationsCredentialListMappingPayload
  extends KandyResponsePayload {
  contents: AuthRegistrationsCredentialListMappingResource[];
}

interface AuthRegistrationsCredentialListMappingResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
}

export class AuthRegistrationsCredentialListMappingInstance {
  protected _solution: AuthRegistrationsCredentialListMappingContextSolution;
  protected _context?: AuthRegistrationsCredentialListMappingContext;

  constructor(
    protected _version: V2010,
    payload: AuthRegistrationsCredentialListMappingResource,
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

  private get _proxy(): AuthRegistrationsCredentialListMappingContext {
    this._context =
      this._context ||
      new AuthRegistrationsCredentialListMappingContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.domainSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a AuthRegistrationsCredentialListMappingInstance
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
   * Fetch a AuthRegistrationsCredentialListMappingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthRegistrationsCredentialListMappingInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: AuthRegistrationsCredentialListMappingInstance
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingInstance> {
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

export interface AuthRegistrationsCredentialListMappingSolution {
  accountSid: string;
  domainSid: string;
}

export interface AuthRegistrationsCredentialListMappingListInstance {
  _version: V2010;
  _solution: AuthRegistrationsCredentialListMappingSolution;
  _uri: string;

  (sid: string): AuthRegistrationsCredentialListMappingContext;
  get(sid: string): AuthRegistrationsCredentialListMappingContext;

  /**
   * Create a AuthRegistrationsCredentialListMappingInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthRegistrationsCredentialListMappingInstance
   */
  create(
    params: AuthRegistrationsCredentialListMappingListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: AuthRegistrationsCredentialListMappingInstance
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingInstance>;

  /**
   * Streams AuthRegistrationsCredentialListMappingInstance records from the API.
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
   * @param { AuthRegistrationsCredentialListMappingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: AuthRegistrationsCredentialListMappingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: AuthRegistrationsCredentialListMappingListInstanceEachOptions,
    callback?: (
      item: AuthRegistrationsCredentialListMappingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of AuthRegistrationsCredentialListMappingInstance records from the API.
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
      items: AuthRegistrationsCredentialListMappingPage
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingPage>;
  /**
   * Lists AuthRegistrationsCredentialListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthRegistrationsCredentialListMappingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: AuthRegistrationsCredentialListMappingInstance[]
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingInstance[]>;
  list(
    params: AuthRegistrationsCredentialListMappingListInstanceOptions,
    callback?: (
      error: Error | null,
      items: AuthRegistrationsCredentialListMappingInstance[]
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingInstance[]>;
  /**
   * Retrieve a single page of AuthRegistrationsCredentialListMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthRegistrationsCredentialListMappingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: AuthRegistrationsCredentialListMappingPage
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingPage>;
  page(
    params: AuthRegistrationsCredentialListMappingListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: AuthRegistrationsCredentialListMappingPage
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AuthRegistrationsCredentialListMappingListInstance(
  version: V2010,
  accountSid: string,
  domainSid: string
): AuthRegistrationsCredentialListMappingListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(domainSid)) {
    throw new Error("Parameter 'domainSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as AuthRegistrationsCredentialListMappingListInstance;

  instance.get = function get(
    sid
  ): AuthRegistrationsCredentialListMappingContext {
    return new AuthRegistrationsCredentialListMappingContextImpl(
      version,
      accountSid,
      domainSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { accountSid, domainSid };
  instance._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Registrations/CredentialListMappings.json`;

  instance.create = function create(
    params: AuthRegistrationsCredentialListMappingListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: AuthRegistrationsCredentialListMappingInstance
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingInstance> {
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
        new AuthRegistrationsCredentialListMappingInstance(
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
      | AuthRegistrationsCredentialListMappingListInstancePageOptions
      | ((
          error: Error | null,
          items: AuthRegistrationsCredentialListMappingPage
        ) => any),
    callback?: (
      error: Error | null,
      items: AuthRegistrationsCredentialListMappingPage
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingPage> {
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
        new AuthRegistrationsCredentialListMappingPage(
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
      items: AuthRegistrationsCredentialListMappingPage
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingPage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new AuthRegistrationsCredentialListMappingPage(
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

export class AuthRegistrationsCredentialListMappingPage extends Page<
  V2010,
  AuthRegistrationsCredentialListMappingPayload,
  AuthRegistrationsCredentialListMappingResource,
  AuthRegistrationsCredentialListMappingInstance
> {
  /**
   * Initialize the AuthRegistrationsCredentialListMappingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: AuthRegistrationsCredentialListMappingSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AuthRegistrationsCredentialListMappingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: AuthRegistrationsCredentialListMappingResource
  ): AuthRegistrationsCredentialListMappingInstance {
    return new AuthRegistrationsCredentialListMappingInstance(
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
