/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Flex
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

/**
 * Options to pass to each
 */
export interface InsightsSegmentsListInstanceEachOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
  /** To unique id of the segment */
  segmentId?: string;
  /** The list of reservation Ids */
  reservationId?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: InsightsSegmentsInstance,
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
export interface InsightsSegmentsListInstanceOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
  /** To unique id of the segment */
  segmentId?: string;
  /** The list of reservation Ids */
  reservationId?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface InsightsSegmentsListInstancePageOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
  /** To unique id of the segment */
  segmentId?: string;
  /** The list of reservation Ids */
  reservationId?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface InsightsSegmentsSolution {}

export interface InsightsSegmentsListInstance {
  _version: V1;
  _solution: InsightsSegmentsSolution;
  _uri: string;

  /**
   * Streams InsightsSegmentsInstance records from the API.
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
   * @param { InsightsSegmentsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: InsightsSegmentsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: InsightsSegmentsListInstanceEachOptions,
    callback?: (
      item: InsightsSegmentsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of InsightsSegmentsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: InsightsSegmentsPage) => any
  ): Promise<InsightsSegmentsPage>;
  /**
   * Lists InsightsSegmentsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InsightsSegmentsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: InsightsSegmentsInstance[]) => any
  ): Promise<InsightsSegmentsInstance[]>;
  list(
    params: InsightsSegmentsListInstanceOptions,
    callback?: (error: Error | null, items: InsightsSegmentsInstance[]) => any
  ): Promise<InsightsSegmentsInstance[]>;
  /**
   * Retrieve a single page of InsightsSegmentsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InsightsSegmentsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: InsightsSegmentsPage) => any
  ): Promise<InsightsSegmentsPage>;
  page(
    params: InsightsSegmentsListInstancePageOptions,
    callback?: (error: Error | null, items: InsightsSegmentsPage) => any
  ): Promise<InsightsSegmentsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function InsightsSegmentsListInstance(
  version: V1
): InsightsSegmentsListInstance {
  const instance = {} as InsightsSegmentsListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Insights/Segments`;

  instance.page = function page(
    params?:
      | InsightsSegmentsListInstancePageOptions
      | ((error: Error | null, items: InsightsSegmentsPage) => any),
    callback?: (error: Error | null, items: InsightsSegmentsPage) => any
  ): Promise<InsightsSegmentsPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["segmentId"] !== undefined)
      data["SegmentId"] = params["segmentId"];
    if (params["reservationId"] !== undefined)
      data["ReservationId"] = serialize.map(
        params["reservationId"],
        (e: string) => e
      );
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};
    if (params["authorization"] !== undefined)
      headers["Authorization"] = params["authorization"];

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InsightsSegmentsPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: InsightsSegmentsPage) => any
  ): Promise<InsightsSegmentsPage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new InsightsSegmentsPage(instance._version, payload, instance._solution)
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

interface InsightsSegmentsPayload extends KandyResponsePayload {
  segments: InsightsSegmentsResource[];
}

interface InsightsSegmentsResource {
  segment_id: string;
  external_id: string;
  queue: string;
  external_contact: string;
  external_segment_link_id: string;
  date: string;
  account_id: string;
  external_segment_link: string;
  agent_id: string;
  agent_phone: string;
  agent_name: string;
  agent_team_name: string;
  agent_team_name_in_hierarchy: string;
  agent_link: string;
  customer_phone: string;
  customer_name: string;
  customer_link: string;
  segment_recording_offset: string;
  media: any;
  assessment_type: any;
  assessment_percentage: any;
  url: string;
}

export class InsightsSegmentsInstance {
  constructor(protected _version: V1, payload: InsightsSegmentsResource) {
    this.segmentId = payload.segment_id;
    this.externalId = payload.external_id;
    this.queue = payload.queue;
    this.externalContact = payload.external_contact;
    this.externalSegmentLinkId = payload.external_segment_link_id;
    this.date = payload.date;
    this.accountId = payload.account_id;
    this.externalSegmentLink = payload.external_segment_link;
    this.agentId = payload.agent_id;
    this.agentPhone = payload.agent_phone;
    this.agentName = payload.agent_name;
    this.agentTeamName = payload.agent_team_name;
    this.agentTeamNameInHierarchy = payload.agent_team_name_in_hierarchy;
    this.agentLink = payload.agent_link;
    this.customerPhone = payload.customer_phone;
    this.customerName = payload.customer_name;
    this.customerLink = payload.customer_link;
    this.segmentRecordingOffset = payload.segment_recording_offset;
    this.media = payload.media;
    this.assessmentType = payload.assessment_type;
    this.assessmentPercentage = payload.assessment_percentage;
    this.url = payload.url;
  }

  /**
   * To unique id of the segment
   */
  segmentId: string;
  /**
   * The unique id for the conversation.
   */
  externalId: string;
  queue: string;
  externalContact: string;
  /**
   * The uuid for the external_segment_link.
   */
  externalSegmentLinkId: string;
  /**
   * The date of the conversation.
   */
  date: string;
  /**
   * The unique id for the account.
   */
  accountId: string;
  /**
   * The hyperlink to recording of the task event.
   */
  externalSegmentLink: string;
  /**
   * The unique id for the agent.
   */
  agentId: string;
  /**
   * The phone number of the agent.
   */
  agentPhone: string;
  /**
   * The name of the agent.
   */
  agentName: string;
  /**
   * The team name to which agent belongs.
   */
  agentTeamName: string;
  /**
   * he team name to which agent belongs.
   */
  agentTeamNameInHierarchy: string;
  /**
   * The link to the agent conversation.
   */
  agentLink: string;
  /**
   * The phone number of the customer.
   */
  customerPhone: string;
  /**
   * The name of the customer.
   */
  customerName: string;
  /**
   * The link to the customer conversation.
   */
  customerLink: string;
  /**
   * The offset value for the recording.
   */
  segmentRecordingOffset: string;
  /**
   * The media identifiers of the conversation.
   */
  media: any;
  /**
   * The type of the assessment.
   */
  assessmentType: any;
  /**
   * The percentage scored on the Assessments.
   */
  assessmentPercentage: any;
  url: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      segmentId: this.segmentId,
      externalId: this.externalId,
      queue: this.queue,
      externalContact: this.externalContact,
      externalSegmentLinkId: this.externalSegmentLinkId,
      date: this.date,
      accountId: this.accountId,
      externalSegmentLink: this.externalSegmentLink,
      agentId: this.agentId,
      agentPhone: this.agentPhone,
      agentName: this.agentName,
      agentTeamName: this.agentTeamName,
      agentTeamNameInHierarchy: this.agentTeamNameInHierarchy,
      agentLink: this.agentLink,
      customerPhone: this.customerPhone,
      customerName: this.customerName,
      customerLink: this.customerLink,
      segmentRecordingOffset: this.segmentRecordingOffset,
      media: this.media,
      assessmentType: this.assessmentType,
      assessmentPercentage: this.assessmentPercentage,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class InsightsSegmentsPage extends Page<
  V1,
  InsightsSegmentsPayload,
  InsightsSegmentsResource,
  InsightsSegmentsInstance
> {
  /**
   * Initialize the InsightsSegmentsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: InsightsSegmentsSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of InsightsSegmentsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: InsightsSegmentsResource): InsightsSegmentsInstance {
    return new InsightsSegmentsInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
