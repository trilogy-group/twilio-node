/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Insights
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

export type CallSummariesAnsweredBy =
  | "unknown"
  | "machine_start"
  | "machine_end_beep"
  | "machine_end_silence"
  | "machine_end_other"
  | "human"
  | "fax";

export type CallSummariesCallState =
  | "ringing"
  | "completed"
  | "busy"
  | "fail"
  | "noanswer"
  | "canceled"
  | "answered"
  | "undialed";

export type CallSummariesCallType = "carrier" | "sip" | "trunking" | "client";

export type CallSummariesProcessingState = "complete" | "partial";

export type CallSummariesProcessingStateRequest =
  | "completed"
  | "started"
  | "partial"
  | "all";

export type CallSummariesSortBy = "start_time" | "end_time";

/**
 * Options to pass to each
 */
export interface CallSummariesListInstanceEachOptions {
  /**  */
  from?: string;
  /**  */
  to?: string;
  /**  */
  fromCarrier?: string;
  /**  */
  toCarrier?: string;
  /**  */
  fromCountryCode?: string;
  /**  */
  toCountryCode?: string;
  /**  */
  branded?: boolean;
  /**  */
  verifiedCaller?: boolean;
  /**  */
  hasTag?: boolean;
  /**  */
  startTime?: string;
  /**  */
  endTime?: string;
  /**  */
  callType?: string;
  /**  */
  callState?: string;
  /**  */
  direction?: string;
  /**  */
  processingState?: CallSummariesProcessingStateRequest;
  /**  */
  sortBy?: CallSummariesSortBy;
  /**  */
  subaccount?: string;
  /**  */
  abnormalSession?: boolean;
  /**  */
  answeredBy?: CallSummariesAnsweredBy;
  /**  */
  connectivityIssues?: string;
  /**  */
  qualityIssues?: string;
  /**  */
  spam?: boolean;
  /**  */
  callScores?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: CallSummariesInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface CallSummariesListInstanceOptions {
  /**  */
  from?: string;
  /**  */
  to?: string;
  /**  */
  fromCarrier?: string;
  /**  */
  toCarrier?: string;
  /**  */
  fromCountryCode?: string;
  /**  */
  toCountryCode?: string;
  /**  */
  branded?: boolean;
  /**  */
  verifiedCaller?: boolean;
  /**  */
  hasTag?: boolean;
  /**  */
  startTime?: string;
  /**  */
  endTime?: string;
  /**  */
  callType?: string;
  /**  */
  callState?: string;
  /**  */
  direction?: string;
  /**  */
  processingState?: CallSummariesProcessingStateRequest;
  /**  */
  sortBy?: CallSummariesSortBy;
  /**  */
  subaccount?: string;
  /**  */
  abnormalSession?: boolean;
  /**  */
  answeredBy?: CallSummariesAnsweredBy;
  /**  */
  connectivityIssues?: string;
  /**  */
  qualityIssues?: string;
  /**  */
  spam?: boolean;
  /**  */
  callScores?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface CallSummariesListInstancePageOptions {
  /**  */
  from?: string;
  /**  */
  to?: string;
  /**  */
  fromCarrier?: string;
  /**  */
  toCarrier?: string;
  /**  */
  fromCountryCode?: string;
  /**  */
  toCountryCode?: string;
  /**  */
  branded?: boolean;
  /**  */
  verifiedCaller?: boolean;
  /**  */
  hasTag?: boolean;
  /**  */
  startTime?: string;
  /**  */
  endTime?: string;
  /**  */
  callType?: string;
  /**  */
  callState?: string;
  /**  */
  direction?: string;
  /**  */
  processingState?: CallSummariesProcessingStateRequest;
  /**  */
  sortBy?: CallSummariesSortBy;
  /**  */
  subaccount?: string;
  /**  */
  abnormalSession?: boolean;
  /**  */
  answeredBy?: CallSummariesAnsweredBy;
  /**  */
  connectivityIssues?: string;
  /**  */
  qualityIssues?: string;
  /**  */
  spam?: boolean;
  /**  */
  callScores?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface CallSummariesSolution {}

export interface CallSummariesListInstance {
  _version: V1;
  _solution: CallSummariesSolution;
  _uri: string;

  /**
   * Streams CallSummariesInstance records from the API.
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
   * @param { CallSummariesListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: CallSummariesInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: CallSummariesListInstanceEachOptions,
    callback?: (
      item: CallSummariesInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of CallSummariesInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: CallSummariesPage) => any
  ): Promise<CallSummariesPage>;
  /**
   * Lists CallSummariesInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CallSummariesListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: CallSummariesInstance[]) => any
  ): Promise<CallSummariesInstance[]>;
  list(
    params: CallSummariesListInstanceOptions,
    callback?: (error: Error | null, items: CallSummariesInstance[]) => any
  ): Promise<CallSummariesInstance[]>;
  /**
   * Retrieve a single page of CallSummariesInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CallSummariesListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: CallSummariesPage) => any
  ): Promise<CallSummariesPage>;
  page(
    params: CallSummariesListInstancePageOptions,
    callback?: (error: Error | null, items: CallSummariesPage) => any
  ): Promise<CallSummariesPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function CallSummariesListInstance(
  version: V1
): CallSummariesListInstance {
  const instance = {} as CallSummariesListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Voice/Summaries`;

  instance.page = function page(
    params?:
      | CallSummariesListInstancePageOptions
      | ((error: Error | null, items: CallSummariesPage) => any),
    callback?: (error: Error | null, items: CallSummariesPage) => any
  ): Promise<CallSummariesPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["from"] !== undefined) data["From"] = params["from"];
    if (params["to"] !== undefined) data["To"] = params["to"];
    if (params["fromCarrier"] !== undefined)
      data["FromCarrier"] = params["fromCarrier"];
    if (params["toCarrier"] !== undefined)
      data["ToCarrier"] = params["toCarrier"];
    if (params["fromCountryCode"] !== undefined)
      data["FromCountryCode"] = params["fromCountryCode"];
    if (params["toCountryCode"] !== undefined)
      data["ToCountryCode"] = params["toCountryCode"];
    if (params["branded"] !== undefined)
      data["Branded"] = serialize.bool(params["branded"]);
    if (params["verifiedCaller"] !== undefined)
      data["VerifiedCaller"] = serialize.bool(params["verifiedCaller"]);
    if (params["hasTag"] !== undefined)
      data["HasTag"] = serialize.bool(params["hasTag"]);
    if (params["startTime"] !== undefined)
      data["StartTime"] = params["startTime"];
    if (params["endTime"] !== undefined) data["EndTime"] = params["endTime"];
    if (params["callType"] !== undefined) data["CallType"] = params["callType"];
    if (params["callState"] !== undefined)
      data["CallState"] = params["callState"];
    if (params["direction"] !== undefined)
      data["Direction"] = params["direction"];
    if (params["processingState"] !== undefined)
      data["ProcessingState"] = params["processingState"];
    if (params["sortBy"] !== undefined) data["SortBy"] = params["sortBy"];
    if (params["subaccount"] !== undefined)
      data["Subaccount"] = params["subaccount"];
    if (params["abnormalSession"] !== undefined)
      data["AbnormalSession"] = serialize.bool(params["abnormalSession"]);
    if (params["answeredBy"] !== undefined)
      data["AnsweredBy"] = params["answeredBy"];
    if (params["connectivityIssues"] !== undefined)
      data["ConnectivityIssues"] = params["connectivityIssues"];
    if (params["qualityIssues"] !== undefined)
      data["QualityIssues"] = params["qualityIssues"];
    if (params["spam"] !== undefined)
      data["Spam"] = serialize.bool(params["spam"]);
    if (params["callScores"] !== undefined)
      data["CallScores"] = params["callScores"];
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
        new CallSummariesPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: CallSummariesPage) => any
  ): Promise<CallSummariesPage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new CallSummariesPage(instance._version, payload, instance._solution)
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

interface CallSummariesPayload extends KandyResponsePayload {
  call_summaries: CallSummariesResource[];
}

interface CallSummariesResource {
  account_sid: string;
  call_sid: string;
  answered_by: CallSummariesAnsweredBy;
  call_type: CallSummariesCallType;
  call_state: CallSummariesCallState;
  processing_state: CallSummariesProcessingState;
  created_time: Date;
  start_time: Date;
  end_time: Date;
  duration: number;
  connect_duration: number;
  from: any;
  to: any;
  carrier_edge: any;
  client_edge: any;
  sdk_edge: any;
  sip_edge: any;
  tags: Array<string>;
  url: string;
  attributes: any;
  properties: any;
  trust: any;
}

export class CallSummariesInstance {
  constructor(protected _version: V1, payload: CallSummariesResource) {
    this.accountSid = payload.account_sid;
    this.callSid = payload.call_sid;
    this.answeredBy = payload.answered_by;
    this.callType = payload.call_type;
    this.callState = payload.call_state;
    this.processingState = payload.processing_state;
    this.createdTime = deserialize.iso8601DateTime(payload.created_time);
    this.startTime = deserialize.iso8601DateTime(payload.start_time);
    this.endTime = deserialize.iso8601DateTime(payload.end_time);
    this.duration = deserialize.integer(payload.duration);
    this.connectDuration = deserialize.integer(payload.connect_duration);
    this.from = payload.from;
    this.to = payload.to;
    this.carrierEdge = payload.carrier_edge;
    this.clientEdge = payload.client_edge;
    this.sdkEdge = payload.sdk_edge;
    this.sipEdge = payload.sip_edge;
    this.tags = payload.tags;
    this.url = payload.url;
    this.attributes = payload.attributes;
    this.properties = payload.properties;
    this.trust = payload.trust;
  }

  accountSid: string;
  callSid: string;
  answeredBy: CallSummariesAnsweredBy;
  callType: CallSummariesCallType;
  callState: CallSummariesCallState;
  processingState: CallSummariesProcessingState;
  createdTime: Date;
  startTime: Date;
  endTime: Date;
  duration: number;
  connectDuration: number;
  from: any;
  to: any;
  carrierEdge: any;
  clientEdge: any;
  sdkEdge: any;
  sipEdge: any;
  tags: Array<string>;
  url: string;
  attributes: any;
  properties: any;
  trust: any;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      callSid: this.callSid,
      answeredBy: this.answeredBy,
      callType: this.callType,
      callState: this.callState,
      processingState: this.processingState,
      createdTime: this.createdTime,
      startTime: this.startTime,
      endTime: this.endTime,
      duration: this.duration,
      connectDuration: this.connectDuration,
      from: this.from,
      to: this.to,
      carrierEdge: this.carrierEdge,
      clientEdge: this.clientEdge,
      sdkEdge: this.sdkEdge,
      sipEdge: this.sipEdge,
      tags: this.tags,
      url: this.url,
      attributes: this.attributes,
      properties: this.properties,
      trust: this.trust,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class CallSummariesPage extends Page<
  V1,
  CallSummariesPayload,
  CallSummariesResource,
  CallSummariesInstance
> {
  /**
   * Initialize the CallSummariesPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: CallSummariesSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CallSummariesInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CallSummariesResource): CallSummariesInstance {
    return new CallSummariesInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
