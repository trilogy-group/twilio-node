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

/**
 * Options to pass to each
 */
export interface SentenceListInstanceEachOptions {
  /** Grant access to PII Redacted/Unredacted Sentences. The default is `true` to access redacted sentences. */
  redacted?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: SentenceInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface SentenceListInstanceOptions {
  /** Grant access to PII Redacted/Unredacted Sentences. The default is `true` to access redacted sentences. */
  redacted?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface SentenceListInstancePageOptions {
  /** Grant access to PII Redacted/Unredacted Sentences. The default is `true` to access redacted sentences. */
  redacted?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface SentenceSolution {
  transcriptSid: string;
}

export interface SentenceListInstance {
  _version: V2;
  _solution: SentenceSolution;
  _uri: string;

  /**
   * Streams SentenceInstance records from the API.
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
   * @param { SentenceListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: SentenceInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: SentenceListInstanceEachOptions,
    callback?: (item: SentenceInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of SentenceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SentencePage) => any
  ): Promise<SentencePage>;
  /**
   * Lists SentenceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SentenceListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: SentenceInstance[]) => any
  ): Promise<SentenceInstance[]>;
  list(
    params: SentenceListInstanceOptions,
    callback?: (error: Error | null, items: SentenceInstance[]) => any
  ): Promise<SentenceInstance[]>;
  /**
   * Retrieve a single page of SentenceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SentenceListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: SentencePage) => any
  ): Promise<SentencePage>;
  page(
    params: SentenceListInstancePageOptions,
    callback?: (error: Error | null, items: SentencePage) => any
  ): Promise<SentencePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SentenceListInstance(
  version: V2,
  transcriptSid: string
): SentenceListInstance {
  if (!isValidPathParam(transcriptSid)) {
    throw new Error("Parameter 'transcriptSid' is not valid.");
  }

  const instance = {} as SentenceListInstance;

  instance._version = version;
  instance._solution = { transcriptSid };
  instance._uri = `/Transcripts/${transcriptSid}/Sentences`;

  instance.page = function page(
    params?:
      | SentenceListInstancePageOptions
      | ((error: Error | null, items: SentencePage) => any),
    callback?: (error: Error | null, items: SentencePage) => any
  ): Promise<SentencePage> {
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
        new SentencePage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: SentencePage) => any
  ): Promise<SentencePage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new SentencePage(instance._version, payload, instance._solution)
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

interface SentencePayload extends KandyResponsePayload {
  sentences: SentenceResource[];
}

interface SentenceResource {
  media_channel: number;
  sentence_index: number;
  start_time: number;
  end_time: number;
  transcript: string;
  sid: string;
  confidence: number;
}

export class SentenceInstance {
  constructor(
    protected _version: V2,
    payload: SentenceResource,
    transcriptSid: string
  ) {
    this.mediaChannel = deserialize.integer(payload.media_channel);
    this.sentenceIndex = deserialize.integer(payload.sentence_index);
    this.startTime = payload.start_time;
    this.endTime = payload.end_time;
    this.transcript = payload.transcript;
    this.sid = payload.sid;
    this.confidence = payload.confidence;
  }

  /**
   * The channel number.
   */
  mediaChannel: number;
  /**
   * The index of the sentence in the transcript.
   */
  sentenceIndex: number;
  /**
   * Offset from the beginning of the transcript when this sentence starts.
   */
  startTime: number;
  /**
   * Offset from the beginning of the transcript when this sentence ends.
   */
  endTime: number;
  /**
   * Transcript text.
   */
  transcript: string;
  /**
   * A 34 character string that uniquely identifies this Sentence.
   */
  sid: string;
  confidence: number;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      mediaChannel: this.mediaChannel,
      sentenceIndex: this.sentenceIndex,
      startTime: this.startTime,
      endTime: this.endTime,
      transcript: this.transcript,
      sid: this.sid,
      confidence: this.confidence,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class SentencePage extends Page<
  V2,
  SentencePayload,
  SentenceResource,
  SentenceInstance
> {
  /**
   * Initialize the SentencePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: SentenceSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SentenceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SentenceResource): SentenceInstance {
    return new SentenceInstance(
      this._version,
      payload,
      this._solution.transcriptSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
