/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Intelligence
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

export type OperatorResultOperatorType =
  | "conversation_classify"
  | "utterance_classify"
  | "extract"
  | "extract_normalize"
  | "pii_extract";

/**
 * Options to pass to fetch a OperatorResultInstance
 */
export interface OperatorResultContextFetchOptions {
  /** Grant access to PII redacted/unredacted Language Understanding operator. The default is True. */
  redacted?: boolean;
}
/**
 * Options to pass to each
 */
export interface OperatorResultListInstanceEachOptions {
  /** Grant access to PII redacted/unredacted Language Understanding operator. The default is True. */
  redacted?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: OperatorResultInstance,
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
export interface OperatorResultListInstanceOptions {
  /** Grant access to PII redacted/unredacted Language Understanding operator. The default is True. */
  redacted?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface OperatorResultListInstancePageOptions {
  /** Grant access to PII redacted/unredacted Language Understanding operator. The default is True. */
  redacted?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface OperatorResultContext {
  /**
   * Fetch a OperatorResultInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OperatorResultInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OperatorResultInstance) => any
  ): Promise<OperatorResultInstance>;
  /**
   * Fetch a OperatorResultInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OperatorResultInstance
   */
  fetch(
    params: OperatorResultContextFetchOptions,
    callback?: (error: Error | null, item?: OperatorResultInstance) => any
  ): Promise<OperatorResultInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface OperatorResultContextSolution {
  transcriptSid: string;
  operatorSid: string;
}

export class OperatorResultContextImpl implements OperatorResultContext {
  protected _solution: OperatorResultContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2,
    transcriptSid: string,
    operatorSid: string
  ) {
    if (!isValidPathParam(transcriptSid)) {
      throw new Error("Parameter 'transcriptSid' is not valid.");
    }

    if (!isValidPathParam(operatorSid)) {
      throw new Error("Parameter 'operatorSid' is not valid.");
    }

    this._solution = { transcriptSid, operatorSid };
    this._uri = `/Transcripts/${transcriptSid}/OperatorResults/${operatorSid}`;
  }

  fetch(
    params?:
      | OperatorResultContextFetchOptions
      | ((error: Error | null, item?: OperatorResultInstance) => any),
    callback?: (error: Error | null, item?: OperatorResultInstance) => any
  ): Promise<OperatorResultInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["redacted"] !== undefined)
      data["Redacted"] = serialize.bool(params["redacted"]);

    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new OperatorResultInstance(
          operationVersion,
          payload,
          instance._solution.transcriptSid,
          instance._solution.operatorSid
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

interface OperatorResultPayload extends KandyResponsePayload {
  operator_results: OperatorResultResource[];
}

interface OperatorResultResource {
  operator_type: OperatorResultOperatorType;
  name: string;
  operator_sid: string;
  extract_match: boolean;
  match_probability: number;
  normalized_result: string;
  utterance_results: Array<any>;
  utterance_match: boolean;
  predicted_label: string;
  predicted_probability: number;
  label_probabilities: any;
  extract_results: any;
  transcript_sid: string;
  url: string;
}

export class OperatorResultInstance {
  protected _solution: OperatorResultContextSolution;
  protected _context?: OperatorResultContext;

  constructor(
    protected _version: V2,
    payload: OperatorResultResource,
    transcriptSid: string,
    operatorSid?: string
  ) {
    this.operatorType = payload.operator_type;
    this.name = payload.name;
    this.operatorSid = payload.operator_sid;
    this.extractMatch = payload.extract_match;
    this.matchProbability = payload.match_probability;
    this.normalizedResult = payload.normalized_result;
    this.utteranceResults = payload.utterance_results;
    this.utteranceMatch = payload.utterance_match;
    this.predictedLabel = payload.predicted_label;
    this.predictedProbability = payload.predicted_probability;
    this.labelProbabilities = payload.label_probabilities;
    this.extractResults = payload.extract_results;
    this.transcriptSid = payload.transcript_sid;
    this.url = payload.url;

    this._solution = {
      transcriptSid,
      operatorSid: operatorSid || this.operatorSid,
    };
  }

  operatorType: OperatorResultOperatorType;
  /**
   * The name of the applied Language Understanding.
   */
  name: string;
  /**
   * A 34 character string that identifies this Language Understanding operator sid.
   */
  operatorSid: string;
  /**
   * Boolean to tell if extract Language Understanding Processing model matches results.
   */
  extractMatch: boolean;
  /**
   * Percentage of \'matching\' class needed to consider a sentence matches
   */
  matchProbability: number;
  /**
   * Normalized output of extraction stage which matches Label.
   */
  normalizedResult: string;
  /**
   * List of mapped utterance object which matches sentences.
   */
  utteranceResults: Array<any>;
  /**
   * Boolean to tell if Utterance matches results.
   */
  utteranceMatch: boolean;
  /**
   * The \'matching\' class. This might be available on conversation classify model outputs.
   */
  predictedLabel: string;
  /**
   * Percentage of \'matching\' class needed to consider a sentence matches.
   */
  predictedProbability: number;
  /**
   * The labels probabilities. This might be available on conversation classify model outputs.
   */
  labelProbabilities: any;
  /**
   * List of text extraction results. This might be available on classify-extract model outputs.
   */
  extractResults: any;
  /**
   * A 34 character string that uniquely identifies this Transcript.
   */
  transcriptSid: string;
  /**
   * The URL of this resource.
   */
  url: string;

  private get _proxy(): OperatorResultContext {
    this._context =
      this._context ||
      new OperatorResultContextImpl(
        this._version,
        this._solution.transcriptSid,
        this._solution.operatorSid
      );
    return this._context;
  }

  /**
   * Fetch a OperatorResultInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OperatorResultInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OperatorResultInstance) => any
  ): Promise<OperatorResultInstance>;
  /**
   * Fetch a OperatorResultInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OperatorResultInstance
   */
  fetch(
    params: OperatorResultContextFetchOptions,
    callback?: (error: Error | null, item?: OperatorResultInstance) => any
  ): Promise<OperatorResultInstance>;

  fetch(
    params?: any,
    callback?: (error: Error | null, item?: OperatorResultInstance) => any
  ): Promise<OperatorResultInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      operatorType: this.operatorType,
      name: this.name,
      operatorSid: this.operatorSid,
      extractMatch: this.extractMatch,
      matchProbability: this.matchProbability,
      normalizedResult: this.normalizedResult,
      utteranceResults: this.utteranceResults,
      utteranceMatch: this.utteranceMatch,
      predictedLabel: this.predictedLabel,
      predictedProbability: this.predictedProbability,
      labelProbabilities: this.labelProbabilities,
      extractResults: this.extractResults,
      transcriptSid: this.transcriptSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface OperatorResultSolution {
  transcriptSid: string;
}

export interface OperatorResultListInstance {
  _version: V2;
  _solution: OperatorResultSolution;
  _uri: string;

  (operatorSid: string): OperatorResultContext;
  get(operatorSid: string): OperatorResultContext;

  /**
   * Streams OperatorResultInstance records from the API.
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
   * @param { OperatorResultListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: OperatorResultInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: OperatorResultListInstanceEachOptions,
    callback?: (
      item: OperatorResultInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of OperatorResultInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: OperatorResultPage) => any
  ): Promise<OperatorResultPage>;
  /**
   * Lists OperatorResultInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { OperatorResultListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: OperatorResultInstance[]) => any
  ): Promise<OperatorResultInstance[]>;
  list(
    params: OperatorResultListInstanceOptions,
    callback?: (error: Error | null, items: OperatorResultInstance[]) => any
  ): Promise<OperatorResultInstance[]>;
  /**
   * Retrieve a single page of OperatorResultInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { OperatorResultListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: OperatorResultPage) => any
  ): Promise<OperatorResultPage>;
  page(
    params: OperatorResultListInstancePageOptions,
    callback?: (error: Error | null, items: OperatorResultPage) => any
  ): Promise<OperatorResultPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function OperatorResultListInstance(
  version: V2,
  transcriptSid: string
): OperatorResultListInstance {
  if (!isValidPathParam(transcriptSid)) {
    throw new Error("Parameter 'transcriptSid' is not valid.");
  }

  const instance = ((operatorSid) =>
    instance.get(operatorSid)) as OperatorResultListInstance;

  instance.get = function get(operatorSid): OperatorResultContext {
    return new OperatorResultContextImpl(version, transcriptSid, operatorSid);
  };

  instance._version = version;
  instance._solution = { transcriptSid };
  instance._uri = `/Transcripts/${transcriptSid}/OperatorResults`;

  instance.page = function page(
    params?:
      | OperatorResultListInstancePageOptions
      | ((error: Error | null, items: OperatorResultPage) => any),
    callback?: (error: Error | null, items: OperatorResultPage) => any
  ): Promise<OperatorResultPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["redacted"] !== undefined)
      data["Redacted"] = serialize.bool(params["redacted"]);
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
        new OperatorResultPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: OperatorResultPage) => any
  ): Promise<OperatorResultPage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new OperatorResultPage(instance._version, payload, instance._solution)
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

export class OperatorResultPage extends Page<
  V2,
  OperatorResultPayload,
  OperatorResultResource,
  OperatorResultInstance
> {
  /**
   * Initialize the OperatorResultPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: OperatorResultSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of OperatorResultInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: OperatorResultResource): OperatorResultInstance {
    return new OperatorResultInstance(
      this._version,
      payload,
      this._solution.transcriptSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
