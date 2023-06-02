/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Conversations
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
import { UserConversationListInstance } from "./user/userConversation";

export type UserWebhookEnabledType = "true" | "false";

/**
 * Options to pass to remove a UserInstance
 */
export interface UserContextRemoveOptions {
  /** The X-Kandy-Webhook-Enabled HTTP request header */
  xKandyWebhookEnabled?: UserWebhookEnabledType;
}

/**
 * Options to pass to update a UserInstance
 */
export interface UserContextUpdateOptions {
  /** The X-Kandy-Webhook-Enabled HTTP request header */
  xKandyWebhookEnabled?: UserWebhookEnabledType;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string;
  /** The JSON Object string that stores application-specific data. If attributes have not been set, `{}` is returned. */
  attributes?: string;
  /** The SID of a service-level [Role](https://www.kandy.com/docs/conversations/api/role-resource) to assign to the user. */
  roleSid?: string;
}

/**
 * Options to pass to create a UserInstance
 */
export interface UserListInstanceCreateOptions {
  /** The application-defined string that uniquely identifies the resource\\\'s User within the [Conversation Service](https://www.kandy.com/docs/conversations/api/service-resource). This value is often a username or an email address, and is case-sensitive. */
  identity: string;
  /** The X-Kandy-Webhook-Enabled HTTP request header */
  xKandyWebhookEnabled?: UserWebhookEnabledType;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string;
  /** The JSON Object string that stores application-specific data. If attributes have not been set, `{}` is returned. */
  attributes?: string;
  /** The SID of a service-level [Role](https://www.kandy.com/docs/conversations/api/role-resource) to assign to the user. */
  roleSid?: string;
}
/**
 * Options to pass to each
 */
export interface UserListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: UserInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface UserListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface UserListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface UserContext {
  userConversations: UserConversationListInstance;

  /**
   * Remove a UserInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a UserInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInstance
   */
  remove(
    params: UserContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a UserInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;

  /**
   * Update a UserInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInstance
   */
  update(
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;
  /**
   * Update a UserInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInstance
   */
  update(
    params: UserContextUpdateOptions,
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UserContextSolution {
  sid: string;
}

export class UserContextImpl implements UserContext {
  protected _solution: UserContextSolution;
  protected _uri: string;

  protected _userConversations?: UserConversationListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Users/${sid}`;
  }

  get userConversations(): UserConversationListInstance {
    this._userConversations =
      this._userConversations ||
      UserConversationListInstance(this._version, this._solution.sid);
    return this._userConversations;
  }

  remove(
    params?:
      | UserContextRemoveOptions
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
    if (params["xKandyWebhookEnabled"] !== undefined)
      headers["X-Kandy-Webhook-Enabled"] = params["xKandyWebhookEnabled"];

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
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new UserInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | UserContextUpdateOptions
      | ((error: Error | null, item?: UserInstance) => any),
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
    if (params["roleSid"] !== undefined) data["RoleSid"] = params["roleSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    if (params["xKandyWebhookEnabled"] !== undefined)
      headers["X-Kandy-Webhook-Enabled"] = params["xKandyWebhookEnabled"];

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
        new UserInstance(operationVersion, payload, instance._solution.sid)
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

interface UserPayload extends KandyResponsePayload {
  users: UserResource[];
}

interface UserResource {
  sid: string;
  account_sid: string;
  chat_service_sid: string;
  role_sid: string;
  identity: string;
  friendly_name: string;
  attributes: string;
  is_online: boolean;
  is_notifiable: boolean;
  date_created: Date;
  date_updated: Date;
  url: string;
  links: Record<string, string>;
}

export class UserInstance {
  protected _solution: UserContextSolution;
  protected _context?: UserContext;

  constructor(protected _version: V1, payload: UserResource, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.chatServiceSid = payload.chat_service_sid;
    this.roleSid = payload.role_sid;
    this.identity = payload.identity;
    this.friendlyName = payload.friendly_name;
    this.attributes = payload.attributes;
    this.isOnline = payload.is_online;
    this.isNotifiable = payload.is_notifiable;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the User resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.kandy.com/docs/iam/api/account) that created the User resource.
   */
  accountSid: string;
  /**
   * The SID of the [Conversation Service](https://www.kandy.com/docs/conversations/api/service-resource) the User resource is associated with.
   */
  chatServiceSid: string;
  /**
   * The SID of a service-level [Role](https://www.kandy.com/docs/conversations/api/role-resource) assigned to the user.
   */
  roleSid: string;
  /**
   * The application-defined string that uniquely identifies the resource\'s User within the [Conversation Service](https://www.kandy.com/docs/conversations/api/service-resource). This value is often a username or an email address, and is case-sensitive.
   */
  identity: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * The JSON Object string that stores application-specific data. If attributes have not been set, `{}` is returned.
   */
  attributes: string;
  /**
   * Whether the User is actively connected to this Conversations Service and online. This value is only returned by Fetch actions that return a single resource and `null` is always returned by a Read action. This value is `null` if the Service\'s `reachability_enabled` is `false`, if the User has never been online for this Conversations Service, even if the Service\'s `reachability_enabled` is `true`.
   */
  isOnline: boolean;
  /**
   * Whether the User has a potentially valid Push Notification registration (APN or GCM) for this Conversations Service. If at least one registration exists, `true`; otherwise `false`. This value is only returned by Fetch actions that return a single resource and `null` is always returned by a Read action. This value is `null` if the Service\'s `reachability_enabled` is `false`, and if the User has never had a notification registration, even if the Service\'s `reachability_enabled` is `true`.
   */
  isNotifiable: boolean;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * An absolute API resource URL for this user.
   */
  url: string;
  links: Record<string, string>;

  private get _proxy(): UserContext {
    this._context =
      this._context || new UserContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a UserInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a UserInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInstance
   */
  remove(
    params: UserContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  remove(
    params?: any,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a UserInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a UserInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInstance
   */
  update(
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;
  /**
   * Update a UserInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInstance
   */
  update(
    params: UserContextUpdateOptions,
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the userConversations.
   */
  userConversations(): UserConversationListInstance {
    return this._proxy.userConversations;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      chatServiceSid: this.chatServiceSid,
      roleSid: this.roleSid,
      identity: this.identity,
      friendlyName: this.friendlyName,
      attributes: this.attributes,
      isOnline: this.isOnline,
      isNotifiable: this.isNotifiable,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface UserSolution {}

export interface UserListInstance {
  _version: V1;
  _solution: UserSolution;
  _uri: string;

  (sid: string): UserContext;
  get(sid: string): UserContext;

  /**
   * Create a UserInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInstance
   */
  create(
    params: UserListInstanceCreateOptions,
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;

  /**
   * Streams UserInstance records from the API.
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
   * @param { UserListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: UserInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: UserListInstanceEachOptions,
    callback?: (item: UserInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of UserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: UserPage) => any
  ): Promise<UserPage>;
  /**
   * Lists UserInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: UserInstance[]) => any
  ): Promise<UserInstance[]>;
  list(
    params: UserListInstanceOptions,
    callback?: (error: Error | null, items: UserInstance[]) => any
  ): Promise<UserInstance[]>;
  /**
   * Retrieve a single page of UserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: UserPage) => any
  ): Promise<UserPage>;
  page(
    params: UserListInstancePageOptions,
    callback?: (error: Error | null, items: UserPage) => any
  ): Promise<UserPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function UserListInstance(version: V1): UserListInstance {
  const instance = ((sid) => instance.get(sid)) as UserListInstance;

  instance.get = function get(sid): UserContext {
    return new UserContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Users`;

  instance.create = function create(
    params: UserListInstanceCreateOptions,
    callback?: (error: Error | null, items: UserInstance) => any
  ): Promise<UserInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["identity"] === null || params["identity"] === undefined) {
      throw new Error("Required parameter \"params['identity']\" missing.");
    }

    let data: any = {};

    data["Identity"] = params["identity"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
    if (params["roleSid"] !== undefined) data["RoleSid"] = params["roleSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    if (params["xKandyWebhookEnabled"] !== undefined)
      headers["X-Kandy-Webhook-Enabled"] = params["xKandyWebhookEnabled"];

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new UserInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | UserListInstancePageOptions
      | ((error: Error | null, items: UserPage) => any),
    callback?: (error: Error | null, items: UserPage) => any
  ): Promise<UserPage> {
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
      (payload) => new UserPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: UserPage) => any
  ): Promise<UserPage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) => new UserPage(instance._version, payload, instance._solution)
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

export class UserPage extends Page<
  V1,
  UserPayload,
  UserResource,
  UserInstance
> {
  /**
   * Initialize the UserPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: UserSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of UserInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UserResource): UserInstance {
    return new UserInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
