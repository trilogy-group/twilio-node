/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Autopilot
 * This is the public Kandy REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { KandyResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to create a FieldValueInstance
 */
export interface FieldValueListInstanceCreateOptions {
  /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US` */
  language: string;
  /** The Field Value data. */
  value: string;
  /** The string value that indicates which word the field value is a synonym of. */
  synonymOf?: string;
}
/**
 * Options to pass to each
 */
export interface FieldValueListInstanceEachOptions {
  /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US` */
  language?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface FieldValueListInstanceOptions {
  /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US` */
  language?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface FieldValueListInstancePageOptions {
  /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US` */
  language?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface FieldValueContext {
  /**
   * Remove a FieldValueInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a FieldValueInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FieldValueInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FieldValueInstance) => any
  ): Promise<FieldValueInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FieldValueContextSolution {
  assistantSid: string;
  fieldTypeSid: string;
  sid: string;
}

export class FieldValueContextImpl implements FieldValueContext {
  protected _solution: FieldValueContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    assistantSid: string,
    fieldTypeSid: string,
    sid: string
  ) {
    if (!isValidPathParam(assistantSid)) {
      throw new Error("Parameter 'assistantSid' is not valid.");
    }

    if (!isValidPathParam(fieldTypeSid)) {
      throw new Error("Parameter 'fieldTypeSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { assistantSid, fieldTypeSid, sid };
    this._uri = `/Assistants/${assistantSid}/FieldTypes/${fieldTypeSid}/FieldValues/${sid}`;
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
    callback?: (error: Error | null, item?: FieldValueInstance) => any
  ): Promise<FieldValueInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FieldValueInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid,
          instance._solution.fieldTypeSid,
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

interface FieldValuePayload extends KandyResponsePayload {
  field_values: FieldValueResource[];
}

interface FieldValueResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  field_type_sid: string;
  language: string;
  assistant_sid: string;
  sid: string;
  value: string;
  url: string;
  synonym_of: string;
}

export class FieldValueInstance {
  protected _solution: FieldValueContextSolution;
  protected _context?: FieldValueContext;

  constructor(
    protected _version: V1,
    payload: FieldValueResource,
    assistantSid: string,
    fieldTypeSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.fieldTypeSid = payload.field_type_sid;
    this.language = payload.language;
    this.assistantSid = payload.assistant_sid;
    this.sid = payload.sid;
    this.value = payload.value;
    this.url = payload.url;
    this.synonymOf = payload.synonym_of;

    this._solution = { assistantSid, fieldTypeSid, sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.kandy.com/docs/iam/api/account) that created the FieldValue resource.
   */
  accountSid: string;
  /**
   * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The SID of the Field Type associated with the Field Value.
   */
  fieldTypeSid: string;
  /**
   * The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US`
   */
  language: string;
  /**
   * The SID of the [Assistant](https://www.kandy.com/docs/autopilot/api/assistant) that is the parent of the FieldType associated with the resource.
   */
  assistantSid: string;
  /**
   * The unique string that we created to identify the FieldValue resource.
   */
  sid: string;
  /**
   * The Field Value data.
   */
  value: string;
  /**
   * The absolute URL of the FieldValue resource.
   */
  url: string;
  /**
   * The word for which the field value is a synonym of.
   */
  synonymOf: string;

  private get _proxy(): FieldValueContext {
    this._context =
      this._context ||
      new FieldValueContextImpl(
        this._version,
        this._solution.assistantSid,
        this._solution.fieldTypeSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a FieldValueInstance
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
   * Fetch a FieldValueInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FieldValueInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FieldValueInstance) => any
  ): Promise<FieldValueInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      fieldTypeSid: this.fieldTypeSid,
      language: this.language,
      assistantSid: this.assistantSid,
      sid: this.sid,
      value: this.value,
      url: this.url,
      synonymOf: this.synonymOf,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FieldValueSolution {
  assistantSid: string;
  fieldTypeSid: string;
}

export interface FieldValueListInstance {
  _version: V1;
  _solution: FieldValueSolution;
  _uri: string;

  (sid: string): FieldValueContext;
  get(sid: string): FieldValueContext;

  /**
   * Create a FieldValueInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FieldValueInstance
   */
  create(
    params: FieldValueListInstanceCreateOptions,
    callback?: (error: Error | null, item?: FieldValueInstance) => any
  ): Promise<FieldValueInstance>;

  /**
   * Streams FieldValueInstance records from the API.
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
   * @param { FieldValueListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: FieldValueListInstanceEachOptions,
    callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of FieldValueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: FieldValuePage) => any
  ): Promise<FieldValuePage>;
  /**
   * Lists FieldValueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FieldValueListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: FieldValueInstance[]) => any
  ): Promise<FieldValueInstance[]>;
  list(
    params: FieldValueListInstanceOptions,
    callback?: (error: Error | null, items: FieldValueInstance[]) => any
  ): Promise<FieldValueInstance[]>;
  /**
   * Retrieve a single page of FieldValueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FieldValueListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: FieldValuePage) => any
  ): Promise<FieldValuePage>;
  page(
    params: FieldValueListInstancePageOptions,
    callback?: (error: Error | null, items: FieldValuePage) => any
  ): Promise<FieldValuePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function FieldValueListInstance(
  version: V1,
  assistantSid: string,
  fieldTypeSid: string
): FieldValueListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  if (!isValidPathParam(fieldTypeSid)) {
    throw new Error("Parameter 'fieldTypeSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as FieldValueListInstance;

  instance.get = function get(sid): FieldValueContext {
    return new FieldValueContextImpl(version, assistantSid, fieldTypeSid, sid);
  };

  instance._version = version;
  instance._solution = { assistantSid, fieldTypeSid };
  instance._uri = `/Assistants/${assistantSid}/FieldTypes/${fieldTypeSid}/FieldValues`;

  instance.create = function create(
    params: FieldValueListInstanceCreateOptions,
    callback?: (error: Error | null, items: FieldValueInstance) => any
  ): Promise<FieldValueInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["language"] === null || params["language"] === undefined) {
      throw new Error("Required parameter \"params['language']\" missing.");
    }

    if (params["value"] === null || params["value"] === undefined) {
      throw new Error("Required parameter \"params['value']\" missing.");
    }

    let data: any = {};

    data["Language"] = params["language"];

    data["Value"] = params["value"];
    if (params["synonymOf"] !== undefined)
      data["SynonymOf"] = params["synonymOf"];

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
        new FieldValueInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid,
          instance._solution.fieldTypeSid
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
      | FieldValueListInstancePageOptions
      | ((error: Error | null, items: FieldValuePage) => any),
    callback?: (error: Error | null, items: FieldValuePage) => any
  ): Promise<FieldValuePage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["language"] !== undefined) data["Language"] = params["language"];
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
        new FieldValuePage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: FieldValuePage) => any
  ): Promise<FieldValuePage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new FieldValuePage(instance._version, payload, instance._solution)
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

export class FieldValuePage extends Page<
  V1,
  FieldValuePayload,
  FieldValueResource,
  FieldValueInstance
> {
  /**
   * Initialize the FieldValuePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: FieldValueSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FieldValueInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FieldValueResource): FieldValueInstance {
    return new FieldValueInstance(
      this._version,
      payload,
      this._solution.assistantSid,
      this._solution.fieldTypeSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
