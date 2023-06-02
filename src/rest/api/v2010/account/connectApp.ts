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
import Page, { KandyResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

export type ConnectAppPermission = "get-all" | "post-all";

/**
 * Options to pass to update a ConnectAppInstance
 */
export interface ConnectAppContextUpdateOptions {
  /** The URL to redirect the user to after we authenticate the user and obtain authorization to access the Connect App. */
  authorizeRedirectUrl?: string;
  /** The company name to set for the Connect App. */
  companyName?: string;
  /** The HTTP method to use when calling `deauthorize_callback_url`. */
  deauthorizeCallbackMethod?: string;
  /** The URL to call using the `deauthorize_callback_method` to de-authorize the Connect App. */
  deauthorizeCallbackUrl?: string;
  /** A description of the Connect App. */
  description?: string;
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  friendlyName?: string;
  /** A public URL where users can obtain more information about this Connect App. */
  homepageUrl?: string;
  /** A comma-separated list of the permissions you will request from the users of this ConnectApp.  Can include: `get-all` and `post-all`. */
  permissions?: Array<ConnectAppPermission>;
}
/**
 * Options to pass to each
 */
export interface ConnectAppListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ConnectAppInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ConnectAppListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ConnectAppListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ConnectAppContext {
  /**
   * Remove a ConnectAppInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ConnectAppInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConnectAppInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ConnectAppInstance) => any
  ): Promise<ConnectAppInstance>;

  /**
   * Update a ConnectAppInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConnectAppInstance
   */
  update(
    callback?: (error: Error | null, item?: ConnectAppInstance) => any
  ): Promise<ConnectAppInstance>;
  /**
   * Update a ConnectAppInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConnectAppInstance
   */
  update(
    params: ConnectAppContextUpdateOptions,
    callback?: (error: Error | null, item?: ConnectAppInstance) => any
  ): Promise<ConnectAppInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConnectAppContextSolution {
  accountSid: string;
  sid: string;
}

export class ConnectAppContextImpl implements ConnectAppContext {
  protected _solution: ConnectAppContextSolution;
  protected _uri: string;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/ConnectApps/${sid}.json`;
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
    callback?: (error: Error | null, item?: ConnectAppInstance) => any
  ): Promise<ConnectAppInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ConnectAppInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.sid
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
      | ConnectAppContextUpdateOptions
      | ((error: Error | null, item?: ConnectAppInstance) => any),
    callback?: (error: Error | null, item?: ConnectAppInstance) => any
  ): Promise<ConnectAppInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["authorizeRedirectUrl"] !== undefined)
      data["AuthorizeRedirectUrl"] = params["authorizeRedirectUrl"];
    if (params["companyName"] !== undefined)
      data["CompanyName"] = params["companyName"];
    if (params["deauthorizeCallbackMethod"] !== undefined)
      data["DeauthorizeCallbackMethod"] = params["deauthorizeCallbackMethod"];
    if (params["deauthorizeCallbackUrl"] !== undefined)
      data["DeauthorizeCallbackUrl"] = params["deauthorizeCallbackUrl"];
    if (params["description"] !== undefined)
      data["Description"] = params["description"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["homepageUrl"] !== undefined)
      data["HomepageUrl"] = params["homepageUrl"];
    if (params["permissions"] !== undefined)
      data["Permissions"] = serialize.map(
        params["permissions"],
        (e: ConnectAppPermission) => e
      );

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
        new ConnectAppInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
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

interface ConnectAppPayload extends KandyResponsePayload {
  connect_apps: ConnectAppResource[];
}

interface ConnectAppResource {
  account_sid: string;
  authorize_redirect_url: string;
  company_name: string;
  deauthorize_callback_method: string;
  deauthorize_callback_url: string;
  description: string;
  friendly_name: string;
  homepage_url: string;
  permissions: Array<ConnectAppPermission>;
  sid: string;
  uri: string;
}

export class ConnectAppInstance {
  protected _solution: ConnectAppContextSolution;
  protected _context?: ConnectAppContext;

  constructor(
    protected _version: V2010,
    payload: ConnectAppResource,
    accountSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.authorizeRedirectUrl = payload.authorize_redirect_url;
    this.companyName = payload.company_name;
    this.deauthorizeCallbackMethod = payload.deauthorize_callback_method;
    this.deauthorizeCallbackUrl = payload.deauthorize_callback_url;
    this.description = payload.description;
    this.friendlyName = payload.friendly_name;
    this.homepageUrl = payload.homepage_url;
    this.permissions = payload.permissions;
    this.sid = payload.sid;
    this.uri = payload.uri;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.kandy.com/docs/iam/api/account) that created the ConnectApp resource.
   */
  accountSid: string;
  /**
   * The URL we redirect the user to after we authenticate the user and obtain authorization to access the Connect App.
   */
  authorizeRedirectUrl: string;
  /**
   * The company name set for the Connect App.
   */
  companyName: string;
  /**
   * The HTTP method we use to call `deauthorize_callback_url`.
   */
  deauthorizeCallbackMethod: string;
  /**
   * The URL we call using the `deauthorize_callback_method` to de-authorize the Connect App.
   */
  deauthorizeCallbackUrl: string;
  /**
   * The description of the Connect App.
   */
  description: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * The public URL where users can obtain more information about this Connect App.
   */
  homepageUrl: string;
  /**
   * The set of permissions that your ConnectApp requests.
   */
  permissions: Array<ConnectAppPermission>;
  /**
   * The unique string that that we created to identify the ConnectApp resource.
   */
  sid: string;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`.
   */
  uri: string;

  private get _proxy(): ConnectAppContext {
    this._context =
      this._context ||
      new ConnectAppContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a ConnectAppInstance
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
   * Fetch a ConnectAppInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConnectAppInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ConnectAppInstance) => any
  ): Promise<ConnectAppInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ConnectAppInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConnectAppInstance
   */
  update(
    callback?: (error: Error | null, item?: ConnectAppInstance) => any
  ): Promise<ConnectAppInstance>;
  /**
   * Update a ConnectAppInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConnectAppInstance
   */
  update(
    params: ConnectAppContextUpdateOptions,
    callback?: (error: Error | null, item?: ConnectAppInstance) => any
  ): Promise<ConnectAppInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: ConnectAppInstance) => any
  ): Promise<ConnectAppInstance> {
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
      authorizeRedirectUrl: this.authorizeRedirectUrl,
      companyName: this.companyName,
      deauthorizeCallbackMethod: this.deauthorizeCallbackMethod,
      deauthorizeCallbackUrl: this.deauthorizeCallbackUrl,
      description: this.description,
      friendlyName: this.friendlyName,
      homepageUrl: this.homepageUrl,
      permissions: this.permissions,
      sid: this.sid,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ConnectAppSolution {
  accountSid: string;
}

export interface ConnectAppListInstance {
  _version: V2010;
  _solution: ConnectAppSolution;
  _uri: string;

  (sid: string): ConnectAppContext;
  get(sid: string): ConnectAppContext;

  /**
   * Streams ConnectAppInstance records from the API.
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
   * @param { ConnectAppListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ConnectAppInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ConnectAppListInstanceEachOptions,
    callback?: (item: ConnectAppInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ConnectAppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ConnectAppPage) => any
  ): Promise<ConnectAppPage>;
  /**
   * Lists ConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConnectAppListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ConnectAppInstance[]) => any
  ): Promise<ConnectAppInstance[]>;
  list(
    params: ConnectAppListInstanceOptions,
    callback?: (error: Error | null, items: ConnectAppInstance[]) => any
  ): Promise<ConnectAppInstance[]>;
  /**
   * Retrieve a single page of ConnectAppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConnectAppListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ConnectAppPage) => any
  ): Promise<ConnectAppPage>;
  page(
    params: ConnectAppListInstancePageOptions,
    callback?: (error: Error | null, items: ConnectAppPage) => any
  ): Promise<ConnectAppPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ConnectAppListInstance(
  version: V2010,
  accountSid: string
): ConnectAppListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ConnectAppListInstance;

  instance.get = function get(sid): ConnectAppContext {
    return new ConnectAppContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/ConnectApps.json`;

  instance.page = function page(
    params?:
      | ConnectAppListInstancePageOptions
      | ((error: Error | null, items: ConnectAppPage) => any),
    callback?: (error: Error | null, items: ConnectAppPage) => any
  ): Promise<ConnectAppPage> {
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
        new ConnectAppPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: ConnectAppPage) => any
  ): Promise<ConnectAppPage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ConnectAppPage(instance._version, payload, instance._solution)
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

export class ConnectAppPage extends Page<
  V2010,
  ConnectAppPayload,
  ConnectAppResource,
  ConnectAppInstance
> {
  /**
   * Initialize the ConnectAppPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: ConnectAppSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ConnectAppInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ConnectAppResource): ConnectAppInstance {
    return new ConnectAppInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
