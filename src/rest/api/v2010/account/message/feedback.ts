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
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

export type FeedbackOutcome = "confirmed" | "unconfirmed";

/**
 * Options to pass to create a FeedbackInstance
 */
export interface FeedbackListInstanceCreateOptions {
  /**  */
  outcome?: FeedbackOutcome;
}

export interface FeedbackSolution {
  accountSid: string;
  messageSid: string;
}

export interface FeedbackListInstance {
  _version: V2010;
  _solution: FeedbackSolution;
  _uri: string;

  /**
   * Create a FeedbackInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FeedbackInstance
   */
  create(
    callback?: (error: Error | null, item?: FeedbackInstance) => any
  ): Promise<FeedbackInstance>;
  /**
   * Create a FeedbackInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FeedbackInstance
   */
  create(
    params: FeedbackListInstanceCreateOptions,
    callback?: (error: Error | null, item?: FeedbackInstance) => any
  ): Promise<FeedbackInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function FeedbackListInstance(
  version: V2010,
  accountSid: string,
  messageSid: string
): FeedbackListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(messageSid)) {
    throw new Error("Parameter 'messageSid' is not valid.");
  }

  const instance = {} as FeedbackListInstance;

  instance._version = version;
  instance._solution = { accountSid, messageSid };
  instance._uri = `/Accounts/${accountSid}/Messages/${messageSid}/Feedback.json`;

  instance.create = function create(
    params?:
      | FeedbackListInstanceCreateOptions
      | ((error: Error | null, items: FeedbackInstance) => any),
    callback?: (error: Error | null, items: FeedbackInstance) => any
  ): Promise<FeedbackInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["outcome"] !== undefined) data["Outcome"] = params["outcome"];

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
      (payload) =>
        new FeedbackInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.messageSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
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

interface FeedbackPayload extends FeedbackResource {}

interface FeedbackResource {
  account_sid: string;
  message_sid: string;
  outcome: FeedbackOutcome;
  date_created: Date;
  date_updated: Date;
  uri: string;
}

export class FeedbackInstance {
  constructor(
    protected _version: V2010,
    payload: FeedbackResource,
    accountSid: string,
    messageSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.messageSid = payload.message_sid;
    this.outcome = payload.outcome;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.uri = payload.uri;
  }

  /**
   * The SID of the [Account](https://www.kandy.com/docs/iam/api/account) that created the MessageFeedback resource.
   */
  accountSid: string;
  /**
   * The SID of the Message resource for which the feedback was provided.
   */
  messageSid: string;
  outcome: FeedbackOutcome;
  /**
   * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The URI of the resource, relative to `https://api.kandy.com`.
   */
  uri: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      messageSid: this.messageSid,
      outcome: this.outcome,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
