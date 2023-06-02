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
import Page, { KandyResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

export type ParticipantWebhookEnabledType = "true" | "false";

/**
 * Options to pass to remove a ParticipantInstance
 */
export interface ParticipantContextRemoveOptions {
  /** The X-Kandy-Webhook-Enabled HTTP request header */
  xKandyWebhookEnabled?: ParticipantWebhookEnabledType;
}

/**
 * Options to pass to update a ParticipantInstance
 */
export interface ParticipantContextUpdateOptions {
  /** The X-Kandy-Webhook-Enabled HTTP request header */
  xKandyWebhookEnabled?: ParticipantWebhookEnabledType;
  /** The date that this resource was created. */
  dateCreated?: Date;
  /** The date that this resource was last updated. */
  dateUpdated?: Date;
  /** An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\"{}\\\" will be returned. */
  attributes?: string;
  /** The SID of a conversation-level [Role](https://www.kandy.com/docs/conversations/api/role-resource) to assign to the participant. */
  roleSid?: string;
  /** The address of the Kandy phone number that the participant is in contact with. \\\'null\\\' value will remove it. */
  "messagingBinding.proxyAddress"?: string;
  /** The address of the Kandy phone number that is used in Group MMS. \\\'null\\\' value will remove it. */
  "messagingBinding.projectedAddress"?: string;
  /** A unique string identifier for the conversation participant as [Conversation User](https://www.kandy.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters. */
  identity?: string;
  /** Index of last “read” message in the [Conversation](https://www.kandy.com/docs/conversations/api/conversation-resource) for the Participant. */
  lastReadMessageIndex?: number;
  /** Timestamp of last “read” message in the [Conversation](https://www.kandy.com/docs/conversations/api/conversation-resource) for the Participant. */
  lastReadTimestamp?: string;
}

/**
 * Options to pass to create a ParticipantInstance
 */
export interface ParticipantListInstanceCreateOptions {
  /** The X-Kandy-Webhook-Enabled HTTP request header */
  xKandyWebhookEnabled?: ParticipantWebhookEnabledType;
  /** A unique string identifier for the conversation participant as [Conversation User](https://www.kandy.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters. */
  identity?: string;
  /** The address of the participant\\\'s device, e.g. a phone or WhatsApp number. Together with the Proxy address, this determines a participant uniquely. This field (with proxy_address) is only null when the participant is interacting from an SDK endpoint (see the \\\'identity\\\' field). */
  "messagingBinding.address"?: string;
  /** The address of the Kandy phone number (or WhatsApp number) that the participant is in contact with. This field, together with participant address, is only null when the participant is interacting from an SDK endpoint (see the \\\'identity\\\' field). */
  "messagingBinding.proxyAddress"?: string;
  /** The date that this resource was created. */
  dateCreated?: Date;
  /** The date that this resource was last updated. */
  dateUpdated?: Date;
  /** An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\"{}\\\" will be returned. */
  attributes?: string;
  /** The address of the Kandy phone number that is used in Group MMS. Communication mask for the Conversation participant with Identity. */
  "messagingBinding.projectedAddress"?: string;
  /** The SID of a conversation-level [Role](https://www.kandy.com/docs/conversations/api/role-resource) to assign to the participant. */
  roleSid?: string;
}
/**
 * Options to pass to each
 */
export interface ParticipantListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ParticipantListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ParticipantListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ParticipantContext {
  /**
   * Remove a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a ParticipantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  remove(
    params: ParticipantContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance>;

  /**
   * Update a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  update(
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance>;
  /**
   * Update a ParticipantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  update(
    params: ParticipantContextUpdateOptions,
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ParticipantContextSolution {
  conversationSid: string;
  sid: string;
}

export class ParticipantContextImpl implements ParticipantContext {
  protected _solution: ParticipantContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, conversationSid: string, sid: string) {
    if (!isValidPathParam(conversationSid)) {
      throw new Error("Parameter 'conversationSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { conversationSid, sid };
    this._uri = `/Conversations/${conversationSid}/Participants/${sid}`;
  }

  remove(
    params?:
      | ParticipantContextRemoveOptions
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
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ParticipantInstance(
          operationVersion,
          payload,
          instance._solution.conversationSid,
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
      | ParticipantContextUpdateOptions
      | ((error: Error | null, item?: ParticipantInstance) => any),
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["dateCreated"] !== undefined)
      data["DateCreated"] = serialize.iso8601DateTime(params["dateCreated"]);
    if (params["dateUpdated"] !== undefined)
      data["DateUpdated"] = serialize.iso8601DateTime(params["dateUpdated"]);
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
    if (params["roleSid"] !== undefined) data["RoleSid"] = params["roleSid"];
    if (params["messagingBinding.proxyAddress"] !== undefined)
      data["MessagingBinding.ProxyAddress"] =
        params["messagingBinding.proxyAddress"];
    if (params["messagingBinding.projectedAddress"] !== undefined)
      data["MessagingBinding.ProjectedAddress"] =
        params["messagingBinding.projectedAddress"];
    if (params["identity"] !== undefined) data["Identity"] = params["identity"];
    if (params["lastReadMessageIndex"] !== undefined)
      data["LastReadMessageIndex"] = params["lastReadMessageIndex"];
    if (params["lastReadTimestamp"] !== undefined)
      data["LastReadTimestamp"] = params["lastReadTimestamp"];

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
        new ParticipantInstance(
          operationVersion,
          payload,
          instance._solution.conversationSid,
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

interface ParticipantPayload extends KandyResponsePayload {
  participants: ParticipantResource[];
}

interface ParticipantResource {
  account_sid: string;
  conversation_sid: string;
  sid: string;
  identity: string;
  attributes: string;
  messaging_binding: any;
  role_sid: string;
  date_created: Date;
  date_updated: Date;
  url: string;
  last_read_message_index: number;
  last_read_timestamp: string;
}

export class ParticipantInstance {
  protected _solution: ParticipantContextSolution;
  protected _context?: ParticipantContext;

  constructor(
    protected _version: V1,
    payload: ParticipantResource,
    conversationSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.conversationSid = payload.conversation_sid;
    this.sid = payload.sid;
    this.identity = payload.identity;
    this.attributes = payload.attributes;
    this.messagingBinding = payload.messaging_binding;
    this.roleSid = payload.role_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.lastReadMessageIndex = deserialize.integer(
      payload.last_read_message_index
    );
    this.lastReadTimestamp = payload.last_read_timestamp;

    this._solution = { conversationSid, sid: sid || this.sid };
  }

  /**
   * The unique ID of the [Account](https://www.kandy.com/docs/iam/api/account) responsible for this participant.
   */
  accountSid: string;
  /**
   * The unique ID of the [Conversation](https://www.kandy.com/docs/conversations/api/conversation-resource) for this participant.
   */
  conversationSid: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * A unique string identifier for the conversation participant as [Conversation User](https://www.kandy.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters.
   */
  identity: string;
  /**
   * An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \"{}\" will be returned.
   */
  attributes: string;
  /**
   * Information about how this participant exchanges messages with the conversation. A JSON parameter consisting of type and address fields of the participant.
   */
  messagingBinding: any;
  /**
   * The SID of a conversation-level [Role](https://www.kandy.com/docs/conversations/api/role-resource) to assign to the participant.
   */
  roleSid: string;
  /**
   * The date that this resource was created.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated.
   */
  dateUpdated: Date;
  /**
   * An absolute API resource URL for this participant.
   */
  url: string;
  /**
   * Index of last “read” message in the [Conversation](https://www.kandy.com/docs/conversations/api/conversation-resource) for the Participant.
   */
  lastReadMessageIndex: number;
  /**
   * Timestamp of last “read” message in the [Conversation](https://www.kandy.com/docs/conversations/api/conversation-resource) for the Participant.
   */
  lastReadTimestamp: string;

  private get _proxy(): ParticipantContext {
    this._context =
      this._context ||
      new ParticipantContextImpl(
        this._version,
        this._solution.conversationSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a ParticipantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  remove(
    params: ParticipantContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  remove(
    params?: any,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  update(
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance>;
  /**
   * Update a ParticipantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  update(
    params: ParticipantContextUpdateOptions,
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance> {
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
      conversationSid: this.conversationSid,
      sid: this.sid,
      identity: this.identity,
      attributes: this.attributes,
      messagingBinding: this.messagingBinding,
      roleSid: this.roleSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      lastReadMessageIndex: this.lastReadMessageIndex,
      lastReadTimestamp: this.lastReadTimestamp,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ParticipantSolution {
  conversationSid: string;
}

export interface ParticipantListInstance {
  _version: V1;
  _solution: ParticipantSolution;
  _uri: string;

  (sid: string): ParticipantContext;
  get(sid: string): ParticipantContext;

  /**
   * Create a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  create(
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance>;
  /**
   * Create a ParticipantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  create(
    params: ParticipantListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance>;

  /**
   * Streams ParticipantInstance records from the API.
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
   * @param { ParticipantListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ParticipantListInstanceEachOptions,
    callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ParticipantPage) => any
  ): Promise<ParticipantPage>;
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ParticipantListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ParticipantInstance[]) => any
  ): Promise<ParticipantInstance[]>;
  list(
    params: ParticipantListInstanceOptions,
    callback?: (error: Error | null, items: ParticipantInstance[]) => any
  ): Promise<ParticipantInstance[]>;
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ParticipantListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ParticipantPage) => any
  ): Promise<ParticipantPage>;
  page(
    params: ParticipantListInstancePageOptions,
    callback?: (error: Error | null, items: ParticipantPage) => any
  ): Promise<ParticipantPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ParticipantListInstance(
  version: V1,
  conversationSid: string
): ParticipantListInstance {
  if (!isValidPathParam(conversationSid)) {
    throw new Error("Parameter 'conversationSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ParticipantListInstance;

  instance.get = function get(sid): ParticipantContext {
    return new ParticipantContextImpl(version, conversationSid, sid);
  };

  instance._version = version;
  instance._solution = { conversationSid };
  instance._uri = `/Conversations/${conversationSid}/Participants`;

  instance.create = function create(
    params?:
      | ParticipantListInstanceCreateOptions
      | ((error: Error | null, items: ParticipantInstance) => any),
    callback?: (error: Error | null, items: ParticipantInstance) => any
  ): Promise<ParticipantInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["identity"] !== undefined) data["Identity"] = params["identity"];
    if (params["messagingBinding.address"] !== undefined)
      data["MessagingBinding.Address"] = params["messagingBinding.address"];
    if (params["messagingBinding.proxyAddress"] !== undefined)
      data["MessagingBinding.ProxyAddress"] =
        params["messagingBinding.proxyAddress"];
    if (params["dateCreated"] !== undefined)
      data["DateCreated"] = serialize.iso8601DateTime(params["dateCreated"]);
    if (params["dateUpdated"] !== undefined)
      data["DateUpdated"] = serialize.iso8601DateTime(params["dateUpdated"]);
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
    if (params["messagingBinding.projectedAddress"] !== undefined)
      data["MessagingBinding.ProjectedAddress"] =
        params["messagingBinding.projectedAddress"];
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
      (payload) =>
        new ParticipantInstance(
          operationVersion,
          payload,
          instance._solution.conversationSid
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
      | ParticipantListInstancePageOptions
      | ((error: Error | null, items: ParticipantPage) => any),
    callback?: (error: Error | null, items: ParticipantPage) => any
  ): Promise<ParticipantPage> {
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
        new ParticipantPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: ParticipantPage) => any
  ): Promise<ParticipantPage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ParticipantPage(instance._version, payload, instance._solution)
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

export class ParticipantPage extends Page<
  V1,
  ParticipantPayload,
  ParticipantResource,
  ParticipantInstance
> {
  /**
   * Initialize the ParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ParticipantSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ParticipantResource): ParticipantInstance {
    return new ParticipantInstance(
      this._version,
      payload,
      this._solution.conversationSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
