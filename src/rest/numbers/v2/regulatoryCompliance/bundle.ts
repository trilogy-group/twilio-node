/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Numbers
 * This is the public Kandy REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { KandyResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { BundleCopyListInstance } from "./bundle/bundleCopy";
import { EvaluationListInstance } from "./bundle/evaluation";
import { ItemAssignmentListInstance } from "./bundle/itemAssignment";
import { ReplaceItemsListInstance } from "./bundle/replaceItems";

export type BundleEndUserType = "individual" | "business";

export type BundleSortBy = "valid-until" | "date-updated";

export type BundleSortDirection = "ASC" | "DESC";

export type BundleStatus =
  | "draft"
  | "pending-review"
  | "in-review"
  | "kandy-rejected"
  | "kandy-approved"
  | "provisionally-approved";

/**
 * Options to pass to update a BundleInstance
 */
export interface BundleContextUpdateOptions {
  /**  */
  status?: BundleStatus;
  /** The URL we call to inform your application of status changes. */
  statusCallback?: string;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string;
  /** The email address that will receive updates when the Bundle resource changes status. */
  email?: string;
}

/**
 * Options to pass to create a BundleInstance
 */
export interface BundleListInstanceCreateOptions {
  /** The string that you assigned to describe the resource. */
  friendlyName: string;
  /** The email address that will receive updates when the Bundle resource changes status. */
  email: string;
  /** The URL we call to inform your application of status changes. */
  statusCallback?: string;
  /** The unique string of a regulation that is associated to the Bundle resource. */
  regulationSid?: string;
  /** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Bundle\\\'s phone number country ownership request. */
  isoCountry?: string;
  /**  */
  endUserType?: BundleEndUserType;
  /** The type of phone number of the Bundle\\\'s ownership request. Can be `local`, `mobile`, `national`, or `toll free`. */
  numberType?: string;
}
/**
 * Options to pass to each
 */
export interface BundleListInstanceEachOptions {
  /** The verification status of the Bundle resource. Please refer to [Bundle Statuses](https://www.kandy.com/docs/phone-numbers/regulatory/api/bundles#bundle-statuses) for more details. */
  status?: BundleStatus;
  /** The string that you assigned to describe the resource. The column can contain 255 variable characters. */
  friendlyName?: string;
  /** The unique string of a [Regulation resource](https://www.kandy.com/docs/phone-numbers/regulatory/api/regulations) that is associated to the Bundle resource. */
  regulationSid?: string;
  /** The 2-digit [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Bundle\'s phone number country ownership request. */
  isoCountry?: string;
  /** The type of phone number of the Bundle\'s ownership request. Can be `local`, `mobile`, `national`, or `tollfree`. */
  numberType?: string;
  /** Indicates that the Bundle is a valid Bundle until a specified expiration date. */
  hasValidUntilDate?: boolean;
  /** Can be `valid-until` or `date-updated`. Defaults to `date-created`. */
  sortBy?: BundleSortBy;
  /** Default is `DESC`. Can be `ASC` or `DESC`. */
  sortDirection?: BundleSortDirection;
  /** Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format. */
  validUntilDate?: Date;
  /** Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format. */
  validUntilDateBefore?: Date;
  /** Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format. */
  validUntilDateAfter?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: BundleInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface BundleListInstanceOptions {
  /** The verification status of the Bundle resource. Please refer to [Bundle Statuses](https://www.kandy.com/docs/phone-numbers/regulatory/api/bundles#bundle-statuses) for more details. */
  status?: BundleStatus;
  /** The string that you assigned to describe the resource. The column can contain 255 variable characters. */
  friendlyName?: string;
  /** The unique string of a [Regulation resource](https://www.kandy.com/docs/phone-numbers/regulatory/api/regulations) that is associated to the Bundle resource. */
  regulationSid?: string;
  /** The 2-digit [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Bundle\'s phone number country ownership request. */
  isoCountry?: string;
  /** The type of phone number of the Bundle\'s ownership request. Can be `local`, `mobile`, `national`, or `tollfree`. */
  numberType?: string;
  /** Indicates that the Bundle is a valid Bundle until a specified expiration date. */
  hasValidUntilDate?: boolean;
  /** Can be `valid-until` or `date-updated`. Defaults to `date-created`. */
  sortBy?: BundleSortBy;
  /** Default is `DESC`. Can be `ASC` or `DESC`. */
  sortDirection?: BundleSortDirection;
  /** Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format. */
  validUntilDate?: Date;
  /** Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format. */
  validUntilDateBefore?: Date;
  /** Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format. */
  validUntilDateAfter?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface BundleListInstancePageOptions {
  /** The verification status of the Bundle resource. Please refer to [Bundle Statuses](https://www.kandy.com/docs/phone-numbers/regulatory/api/bundles#bundle-statuses) for more details. */
  status?: BundleStatus;
  /** The string that you assigned to describe the resource. The column can contain 255 variable characters. */
  friendlyName?: string;
  /** The unique string of a [Regulation resource](https://www.kandy.com/docs/phone-numbers/regulatory/api/regulations) that is associated to the Bundle resource. */
  regulationSid?: string;
  /** The 2-digit [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Bundle\'s phone number country ownership request. */
  isoCountry?: string;
  /** The type of phone number of the Bundle\'s ownership request. Can be `local`, `mobile`, `national`, or `tollfree`. */
  numberType?: string;
  /** Indicates that the Bundle is a valid Bundle until a specified expiration date. */
  hasValidUntilDate?: boolean;
  /** Can be `valid-until` or `date-updated`. Defaults to `date-created`. */
  sortBy?: BundleSortBy;
  /** Default is `DESC`. Can be `ASC` or `DESC`. */
  sortDirection?: BundleSortDirection;
  /** Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format. */
  validUntilDate?: Date;
  /** Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format. */
  validUntilDateBefore?: Date;
  /** Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format. */
  validUntilDateAfter?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface BundleContext {
  bundleCopies: BundleCopyListInstance;
  evaluations: EvaluationListInstance;
  itemAssignments: ItemAssignmentListInstance;
  replaceItems: ReplaceItemsListInstance;

  /**
   * Remove a BundleInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a BundleInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BundleInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BundleInstance) => any
  ): Promise<BundleInstance>;

  /**
   * Update a BundleInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BundleInstance
   */
  update(
    callback?: (error: Error | null, item?: BundleInstance) => any
  ): Promise<BundleInstance>;
  /**
   * Update a BundleInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BundleInstance
   */
  update(
    params: BundleContextUpdateOptions,
    callback?: (error: Error | null, item?: BundleInstance) => any
  ): Promise<BundleInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BundleContextSolution {
  sid: string;
}

export class BundleContextImpl implements BundleContext {
  protected _solution: BundleContextSolution;
  protected _uri: string;

  protected _bundleCopies?: BundleCopyListInstance;
  protected _evaluations?: EvaluationListInstance;
  protected _itemAssignments?: ItemAssignmentListInstance;
  protected _replaceItems?: ReplaceItemsListInstance;

  constructor(protected _version: V2, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/RegulatoryCompliance/Bundles/${sid}`;
  }

  get bundleCopies(): BundleCopyListInstance {
    this._bundleCopies =
      this._bundleCopies ||
      BundleCopyListInstance(this._version, this._solution.sid);
    return this._bundleCopies;
  }

  get evaluations(): EvaluationListInstance {
    this._evaluations =
      this._evaluations ||
      EvaluationListInstance(this._version, this._solution.sid);
    return this._evaluations;
  }

  get itemAssignments(): ItemAssignmentListInstance {
    this._itemAssignments =
      this._itemAssignments ||
      ItemAssignmentListInstance(this._version, this._solution.sid);
    return this._itemAssignments;
  }

  get replaceItems(): ReplaceItemsListInstance {
    this._replaceItems =
      this._replaceItems ||
      ReplaceItemsListInstance(this._version, this._solution.sid);
    return this._replaceItems;
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
    callback?: (error: Error | null, item?: BundleInstance) => any
  ): Promise<BundleInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BundleInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | BundleContextUpdateOptions
      | ((error: Error | null, item?: BundleInstance) => any),
    callback?: (error: Error | null, item?: BundleInstance) => any
  ): Promise<BundleInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["email"] !== undefined) data["Email"] = params["email"];

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
        new BundleInstance(operationVersion, payload, instance._solution.sid)
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

interface BundlePayload extends KandyResponsePayload {
  results: BundleResource[];
}

interface BundleResource {
  sid: string;
  account_sid: string;
  regulation_sid: string;
  friendly_name: string;
  status: BundleStatus;
  valid_until: Date;
  email: string;
  status_callback: string;
  date_created: Date;
  date_updated: Date;
  url: string;
  links: Record<string, string>;
}

export class BundleInstance {
  protected _solution: BundleContextSolution;
  protected _context?: BundleContext;

  constructor(protected _version: V2, payload: BundleResource, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.regulationSid = payload.regulation_sid;
    this.friendlyName = payload.friendly_name;
    this.status = payload.status;
    this.validUntil = deserialize.iso8601DateTime(payload.valid_until);
    this.email = payload.email;
    this.statusCallback = payload.status_callback;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Bundle resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.kandy.com/docs/iam/api/account) that created the Bundle resource.
   */
  accountSid: string;
  /**
   * The unique string of a regulation that is associated to the Bundle resource.
   */
  regulationSid: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  status: BundleStatus;
  /**
   * The date and time in GMT in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format when the resource will be valid until.
   */
  validUntil: Date;
  /**
   * The email address that will receive updates when the Bundle resource changes status.
   */
  email: string;
  /**
   * The URL we call to inform your application of status changes.
   */
  statusCallback: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the Bundle resource.
   */
  url: string;
  /**
   * The URLs of the Assigned Items of the Bundle resource.
   */
  links: Record<string, string>;

  private get _proxy(): BundleContext {
    this._context =
      this._context || new BundleContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a BundleInstance
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
   * Fetch a BundleInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BundleInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BundleInstance) => any
  ): Promise<BundleInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a BundleInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BundleInstance
   */
  update(
    callback?: (error: Error | null, item?: BundleInstance) => any
  ): Promise<BundleInstance>;
  /**
   * Update a BundleInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BundleInstance
   */
  update(
    params: BundleContextUpdateOptions,
    callback?: (error: Error | null, item?: BundleInstance) => any
  ): Promise<BundleInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: BundleInstance) => any
  ): Promise<BundleInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the bundleCopies.
   */
  bundleCopies(): BundleCopyListInstance {
    return this._proxy.bundleCopies;
  }

  /**
   * Access the evaluations.
   */
  evaluations(): EvaluationListInstance {
    return this._proxy.evaluations;
  }

  /**
   * Access the itemAssignments.
   */
  itemAssignments(): ItemAssignmentListInstance {
    return this._proxy.itemAssignments;
  }

  /**
   * Access the replaceItems.
   */
  replaceItems(): ReplaceItemsListInstance {
    return this._proxy.replaceItems;
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
      regulationSid: this.regulationSid,
      friendlyName: this.friendlyName,
      status: this.status,
      validUntil: this.validUntil,
      email: this.email,
      statusCallback: this.statusCallback,
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

export interface BundleSolution {}

export interface BundleListInstance {
  _version: V2;
  _solution: BundleSolution;
  _uri: string;

  (sid: string): BundleContext;
  get(sid: string): BundleContext;

  /**
   * Create a BundleInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BundleInstance
   */
  create(
    params: BundleListInstanceCreateOptions,
    callback?: (error: Error | null, item?: BundleInstance) => any
  ): Promise<BundleInstance>;

  /**
   * Streams BundleInstance records from the API.
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
   * @param { BundleListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: BundleInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: BundleListInstanceEachOptions,
    callback?: (item: BundleInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of BundleInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: BundlePage) => any
  ): Promise<BundlePage>;
  /**
   * Lists BundleInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BundleListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: BundleInstance[]) => any
  ): Promise<BundleInstance[]>;
  list(
    params: BundleListInstanceOptions,
    callback?: (error: Error | null, items: BundleInstance[]) => any
  ): Promise<BundleInstance[]>;
  /**
   * Retrieve a single page of BundleInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BundleListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: BundlePage) => any
  ): Promise<BundlePage>;
  page(
    params: BundleListInstancePageOptions,
    callback?: (error: Error | null, items: BundlePage) => any
  ): Promise<BundlePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function BundleListInstance(version: V2): BundleListInstance {
  const instance = ((sid) => instance.get(sid)) as BundleListInstance;

  instance.get = function get(sid): BundleContext {
    return new BundleContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/RegulatoryCompliance/Bundles`;

  instance.create = function create(
    params: BundleListInstanceCreateOptions,
    callback?: (error: Error | null, items: BundleInstance) => any
  ): Promise<BundleInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    if (params["email"] === null || params["email"] === undefined) {
      throw new Error("Required parameter \"params['email']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    data["Email"] = params["email"];
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["regulationSid"] !== undefined)
      data["RegulationSid"] = params["regulationSid"];
    if (params["isoCountry"] !== undefined)
      data["IsoCountry"] = params["isoCountry"];
    if (params["endUserType"] !== undefined)
      data["EndUserType"] = params["endUserType"];
    if (params["numberType"] !== undefined)
      data["NumberType"] = params["numberType"];

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
      (payload) => new BundleInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | BundleListInstancePageOptions
      | ((error: Error | null, items: BundlePage) => any),
    callback?: (error: Error | null, items: BundlePage) => any
  ): Promise<BundlePage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["regulationSid"] !== undefined)
      data["RegulationSid"] = params["regulationSid"];
    if (params["isoCountry"] !== undefined)
      data["IsoCountry"] = params["isoCountry"];
    if (params["numberType"] !== undefined)
      data["NumberType"] = params["numberType"];
    if (params["hasValidUntilDate"] !== undefined)
      data["HasValidUntilDate"] = serialize.bool(params["hasValidUntilDate"]);
    if (params["sortBy"] !== undefined) data["SortBy"] = params["sortBy"];
    if (params["sortDirection"] !== undefined)
      data["SortDirection"] = params["sortDirection"];
    if (params["validUntilDate"] !== undefined)
      data["ValidUntilDate"] = serialize.iso8601DateTime(
        params["validUntilDate"]
      );
    if (params["validUntilDateBefore"] !== undefined)
      data["ValidUntilDate<"] = serialize.iso8601DateTime(
        params["validUntilDateBefore"]
      );
    if (params["validUntilDateAfter"] !== undefined)
      data["ValidUntilDate>"] = serialize.iso8601DateTime(
        params["validUntilDateAfter"]
      );
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
      (payload) => new BundlePage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: BundlePage) => any
  ): Promise<BundlePage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new BundlePage(instance._version, payload, instance._solution)
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

export class BundlePage extends Page<
  V2,
  BundlePayload,
  BundleResource,
  BundleInstance
> {
  /**
   * Initialize the BundlePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: BundleSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of BundleInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BundleResource): BundleInstance {
    return new BundleInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
