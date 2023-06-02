/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Supersim
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

export type EsimProfileStatus =
  | "new"
  | "reserving"
  | "available"
  | "downloaded"
  | "installed"
  | "failed";

/**
 * Options to pass to create a EsimProfileInstance
 */
export interface EsimProfileListInstanceCreateOptions {
  /** The URL we should call using the `callback_method` when the status of the eSIM Profile changes. At this stage of the eSIM Profile pilot, the a request to the URL will only be called when the ESimProfile resource changes from `reserving` to `available`. */
  callbackUrl?: string;
  /** The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is POST. */
  callbackMethod?: string;
  /** When set to `true`, a value for `Eid` does not need to be provided. Instead, when the eSIM profile is reserved, a matching ID will be generated and returned via the `matching_id` property. This identifies the specific eSIM profile that can be used by any capable device to claim and download the profile. */
  generateMatchingId?: boolean;
  /** Identifier of the eUICC that will claim the eSIM Profile. */
  eid?: string;
}
/**
 * Options to pass to each
 */
export interface EsimProfileListInstanceEachOptions {
  /** List the eSIM Profiles that have been associated with an EId. */
  eid?: string;
  /** Find the eSIM Profile resource related to a [Sim](https://www.kandy.com/docs/wireless/api/sim-resource) resource by providing the SIM SID. Will always return an array with either 1 or 0 records. */
  simSid?: string;
  /** List the eSIM Profiles that are in a given status. */
  status?: EsimProfileStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: EsimProfileInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface EsimProfileListInstanceOptions {
  /** List the eSIM Profiles that have been associated with an EId. */
  eid?: string;
  /** Find the eSIM Profile resource related to a [Sim](https://www.kandy.com/docs/wireless/api/sim-resource) resource by providing the SIM SID. Will always return an array with either 1 or 0 records. */
  simSid?: string;
  /** List the eSIM Profiles that are in a given status. */
  status?: EsimProfileStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface EsimProfileListInstancePageOptions {
  /** List the eSIM Profiles that have been associated with an EId. */
  eid?: string;
  /** Find the eSIM Profile resource related to a [Sim](https://www.kandy.com/docs/wireless/api/sim-resource) resource by providing the SIM SID. Will always return an array with either 1 or 0 records. */
  simSid?: string;
  /** List the eSIM Profiles that are in a given status. */
  status?: EsimProfileStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface EsimProfileContext {
  /**
   * Fetch a EsimProfileInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EsimProfileInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EsimProfileInstance) => any
  ): Promise<EsimProfileInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EsimProfileContextSolution {
  sid: string;
}

export class EsimProfileContextImpl implements EsimProfileContext {
  protected _solution: EsimProfileContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/ESimProfiles/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: EsimProfileInstance) => any
  ): Promise<EsimProfileInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new EsimProfileInstance(
          operationVersion,
          payload,
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

interface EsimProfilePayload extends KandyResponsePayload {
  esim_profiles: EsimProfileResource[];
}

interface EsimProfileResource {
  sid: string;
  account_sid: string;
  iccid: string;
  sim_sid: string;
  status: EsimProfileStatus;
  eid: string;
  smdp_plus_address: string;
  matching_id: string;
  activation_code: string;
  error_code: string;
  error_message: string;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class EsimProfileInstance {
  protected _solution: EsimProfileContextSolution;
  protected _context?: EsimProfileContext;

  constructor(
    protected _version: V1,
    payload: EsimProfileResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.iccid = payload.iccid;
    this.simSid = payload.sim_sid;
    this.status = payload.status;
    this.eid = payload.eid;
    this.smdpPlusAddress = payload.smdp_plus_address;
    this.matchingId = payload.matching_id;
    this.activationCode = payload.activation_code;
    this.errorCode = payload.error_code;
    this.errorMessage = payload.error_message;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the eSIM Profile resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.kandy.com/docs/iam/api/account) to which the eSIM Profile resource belongs.
   */
  accountSid: string;
  /**
   * The [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID) associated with the Sim resource.
   */
  iccid: string;
  /**
   * The SID of the [Sim](https://www.kandy.com/docs/wireless/api/sim-resource) resource that this eSIM Profile controls.
   */
  simSid: string;
  status: EsimProfileStatus;
  /**
   * Identifier of the eUICC that can claim the eSIM Profile.
   */
  eid: string;
  /**
   * Address of the SM-DP+ server from which the Profile will be downloaded. The URL will appear once the eSIM Profile reaches the status `available`.
   */
  smdpPlusAddress: string;
  /**
   * Unique identifier of the eSIM profile that can be used to identify and download the eSIM profile from the SM-DP+ server. Populated if `generate_matching_id` is set to `true` when creating the eSIM profile reservation.
   */
  matchingId: string;
  /**
   * Combined machine-readable activation code for acquiring an eSIM Profile with the Activation Code download method. Can be used in a QR code to download an eSIM profile.
   */
  activationCode: string;
  /**
   * Code indicating the failure if the download of the SIM Profile failed and the eSIM Profile is in `failed` state.
   */
  errorCode: string;
  /**
   * Error message describing the failure if the download of the SIM Profile failed and the eSIM Profile is in `failed` state.
   */
  errorMessage: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the eSIM Profile resource.
   */
  url: string;

  private get _proxy(): EsimProfileContext {
    this._context =
      this._context ||
      new EsimProfileContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a EsimProfileInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EsimProfileInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EsimProfileInstance) => any
  ): Promise<EsimProfileInstance> {
    return this._proxy.fetch(callback);
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
      iccid: this.iccid,
      simSid: this.simSid,
      status: this.status,
      eid: this.eid,
      smdpPlusAddress: this.smdpPlusAddress,
      matchingId: this.matchingId,
      activationCode: this.activationCode,
      errorCode: this.errorCode,
      errorMessage: this.errorMessage,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface EsimProfileSolution {}

export interface EsimProfileListInstance {
  _version: V1;
  _solution: EsimProfileSolution;
  _uri: string;

  (sid: string): EsimProfileContext;
  get(sid: string): EsimProfileContext;

  /**
   * Create a EsimProfileInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EsimProfileInstance
   */
  create(
    callback?: (error: Error | null, item?: EsimProfileInstance) => any
  ): Promise<EsimProfileInstance>;
  /**
   * Create a EsimProfileInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EsimProfileInstance
   */
  create(
    params: EsimProfileListInstanceCreateOptions,
    callback?: (error: Error | null, item?: EsimProfileInstance) => any
  ): Promise<EsimProfileInstance>;

  /**
   * Streams EsimProfileInstance records from the API.
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
   * @param { EsimProfileListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: EsimProfileInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: EsimProfileListInstanceEachOptions,
    callback?: (item: EsimProfileInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of EsimProfileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: EsimProfilePage) => any
  ): Promise<EsimProfilePage>;
  /**
   * Lists EsimProfileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EsimProfileListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: EsimProfileInstance[]) => any
  ): Promise<EsimProfileInstance[]>;
  list(
    params: EsimProfileListInstanceOptions,
    callback?: (error: Error | null, items: EsimProfileInstance[]) => any
  ): Promise<EsimProfileInstance[]>;
  /**
   * Retrieve a single page of EsimProfileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EsimProfileListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: EsimProfilePage) => any
  ): Promise<EsimProfilePage>;
  page(
    params: EsimProfileListInstancePageOptions,
    callback?: (error: Error | null, items: EsimProfilePage) => any
  ): Promise<EsimProfilePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function EsimProfileListInstance(version: V1): EsimProfileListInstance {
  const instance = ((sid) => instance.get(sid)) as EsimProfileListInstance;

  instance.get = function get(sid): EsimProfileContext {
    return new EsimProfileContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/ESimProfiles`;

  instance.create = function create(
    params?:
      | EsimProfileListInstanceCreateOptions
      | ((error: Error | null, items: EsimProfileInstance) => any),
    callback?: (error: Error | null, items: EsimProfileInstance) => any
  ): Promise<EsimProfileInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["callbackUrl"] !== undefined)
      data["CallbackUrl"] = params["callbackUrl"];
    if (params["callbackMethod"] !== undefined)
      data["CallbackMethod"] = params["callbackMethod"];
    if (params["generateMatchingId"] !== undefined)
      data["GenerateMatchingId"] = serialize.bool(params["generateMatchingId"]);
    if (params["eid"] !== undefined) data["Eid"] = params["eid"];

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
      (payload) => new EsimProfileInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | EsimProfileListInstancePageOptions
      | ((error: Error | null, items: EsimProfilePage) => any),
    callback?: (error: Error | null, items: EsimProfilePage) => any
  ): Promise<EsimProfilePage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["eid"] !== undefined) data["Eid"] = params["eid"];
    if (params["simSid"] !== undefined) data["SimSid"] = params["simSid"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
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
        new EsimProfilePage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: EsimProfilePage) => any
  ): Promise<EsimProfilePage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new EsimProfilePage(instance._version, payload, instance._solution)
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

export class EsimProfilePage extends Page<
  V1,
  EsimProfilePayload,
  EsimProfileResource,
  EsimProfileInstance
> {
  /**
   * Initialize the EsimProfilePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: EsimProfileSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of EsimProfileInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EsimProfileResource): EsimProfileInstance {
    return new EsimProfileInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
