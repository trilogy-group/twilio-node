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
import Page, { KandyResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

export type BillingPeriodBpType = "ready" | "active";

/**
 * Options to pass to each
 */
export interface BillingPeriodListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: BillingPeriodInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface BillingPeriodListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface BillingPeriodListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface BillingPeriodSolution {
  simSid: string;
}

export interface BillingPeriodListInstance {
  _version: V1;
  _solution: BillingPeriodSolution;
  _uri: string;

  /**
   * Streams BillingPeriodInstance records from the API.
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
   * @param { BillingPeriodListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: BillingPeriodInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: BillingPeriodListInstanceEachOptions,
    callback?: (
      item: BillingPeriodInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of BillingPeriodInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: BillingPeriodPage) => any
  ): Promise<BillingPeriodPage>;
  /**
   * Lists BillingPeriodInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BillingPeriodListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: BillingPeriodInstance[]) => any
  ): Promise<BillingPeriodInstance[]>;
  list(
    params: BillingPeriodListInstanceOptions,
    callback?: (error: Error | null, items: BillingPeriodInstance[]) => any
  ): Promise<BillingPeriodInstance[]>;
  /**
   * Retrieve a single page of BillingPeriodInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BillingPeriodListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: BillingPeriodPage) => any
  ): Promise<BillingPeriodPage>;
  page(
    params: BillingPeriodListInstancePageOptions,
    callback?: (error: Error | null, items: BillingPeriodPage) => any
  ): Promise<BillingPeriodPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function BillingPeriodListInstance(
  version: V1,
  simSid: string
): BillingPeriodListInstance {
  if (!isValidPathParam(simSid)) {
    throw new Error("Parameter 'simSid' is not valid.");
  }

  const instance = {} as BillingPeriodListInstance;

  instance._version = version;
  instance._solution = { simSid };
  instance._uri = `/Sims/${simSid}/BillingPeriods`;

  instance.page = function page(
    params?:
      | BillingPeriodListInstancePageOptions
      | ((error: Error | null, items: BillingPeriodPage) => any),
    callback?: (error: Error | null, items: BillingPeriodPage) => any
  ): Promise<BillingPeriodPage> {
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
        new BillingPeriodPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: BillingPeriodPage) => any
  ): Promise<BillingPeriodPage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new BillingPeriodPage(instance._version, payload, instance._solution)
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

interface BillingPeriodPayload extends KandyResponsePayload {
  billing_periods: BillingPeriodResource[];
}

interface BillingPeriodResource {
  sid: string;
  account_sid: string;
  sim_sid: string;
  start_time: Date;
  end_time: Date;
  period_type: BillingPeriodBpType;
  date_created: Date;
  date_updated: Date;
}

export class BillingPeriodInstance {
  constructor(
    protected _version: V1,
    payload: BillingPeriodResource,
    simSid: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.simSid = payload.sim_sid;
    this.startTime = deserialize.iso8601DateTime(payload.start_time);
    this.endTime = deserialize.iso8601DateTime(payload.end_time);
    this.periodType = payload.period_type;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
  }

  /**
   * The SID of the Billing Period.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.kandy.com/docs/iam/api/account) the Super SIM belongs to.
   */
  accountSid: string;
  /**
   * The SID of the Super SIM the Billing Period belongs to.
   */
  simSid: string;
  /**
   * The start time of the Billing Period specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  startTime: Date;
  /**
   * The end time of the Billing Period specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  endTime: Date;
  periodType: BillingPeriodBpType;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      simSid: this.simSid,
      startTime: this.startTime,
      endTime: this.endTime,
      periodType: this.periodType,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class BillingPeriodPage extends Page<
  V1,
  BillingPeriodPayload,
  BillingPeriodResource,
  BillingPeriodInstance
> {
  /**
   * Initialize the BillingPeriodPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: BillingPeriodSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of BillingPeriodInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BillingPeriodResource): BillingPeriodInstance {
    return new BillingPeriodInstance(
      this._version,
      payload,
      this._solution.simSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
