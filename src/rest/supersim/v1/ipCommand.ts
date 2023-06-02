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

export type IpCommandDirection = "to_sim" | "from_sim";

export type IpCommandPayloadType = "text" | "binary";

export type IpCommandStatus = "queued" | "sent" | "received" | "failed";

/**
 * Options to pass to create a IpCommandInstance
 */
export interface IpCommandListInstanceCreateOptions {
  /** The `sid` or `unique_name` of the [Super SIM](https://www.kandy.com/docs/iot/supersim/api/sim-resource) to send the IP Command to. */
  sim: string;
  /** The data that will be sent to the device. The payload cannot exceed 1300 bytes. If the PayloadType is set to text, the payload is encoded in UTF-8. If PayloadType is set to binary, the payload is encoded in Base64. */
  payload: string;
  /** The device port to which the IP Command will be sent. */
  devicePort: number;
  /**  */
  payloadType?: IpCommandPayloadType;
  /** The URL we should call using the `callback_method` after we have sent the IP Command. */
  callbackUrl?: string;
  /** The HTTP method we should use to call `callback_url`. Can be `GET` or `POST`, and the default is `POST`. */
  callbackMethod?: string;
}
/**
 * Options to pass to each
 */
export interface IpCommandListInstanceEachOptions {
  /** The SID or unique name of the Sim resource that IP Command was sent to or from. */
  sim?: string;
  /** The ICCID of the Sim resource that IP Command was sent to or from. */
  simIccid?: string;
  /** The status of the IP Command. Can be: `queued`, `sent`, `received` or `failed`. See the [IP Command Status Values](https://www.kandy.com/docs/wireless/api/ipcommand-resource#status-values) for a description of each. */
  status?: IpCommandStatus;
  /** The direction of the IP Command. Can be `to_sim` or `from_sim`. The value of `to_sim` is synonymous with the term `mobile terminated`, and `from_sim` is synonymous with the term `mobile originated`. */
  direction?: IpCommandDirection;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: IpCommandInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface IpCommandListInstanceOptions {
  /** The SID or unique name of the Sim resource that IP Command was sent to or from. */
  sim?: string;
  /** The ICCID of the Sim resource that IP Command was sent to or from. */
  simIccid?: string;
  /** The status of the IP Command. Can be: `queued`, `sent`, `received` or `failed`. See the [IP Command Status Values](https://www.kandy.com/docs/wireless/api/ipcommand-resource#status-values) for a description of each. */
  status?: IpCommandStatus;
  /** The direction of the IP Command. Can be `to_sim` or `from_sim`. The value of `to_sim` is synonymous with the term `mobile terminated`, and `from_sim` is synonymous with the term `mobile originated`. */
  direction?: IpCommandDirection;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface IpCommandListInstancePageOptions {
  /** The SID or unique name of the Sim resource that IP Command was sent to or from. */
  sim?: string;
  /** The ICCID of the Sim resource that IP Command was sent to or from. */
  simIccid?: string;
  /** The status of the IP Command. Can be: `queued`, `sent`, `received` or `failed`. See the [IP Command Status Values](https://www.kandy.com/docs/wireless/api/ipcommand-resource#status-values) for a description of each. */
  status?: IpCommandStatus;
  /** The direction of the IP Command. Can be `to_sim` or `from_sim`. The value of `to_sim` is synonymous with the term `mobile terminated`, and `from_sim` is synonymous with the term `mobile originated`. */
  direction?: IpCommandDirection;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface IpCommandContext {
  /**
   * Fetch a IpCommandInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpCommandInstance
   */
  fetch(
    callback?: (error: Error | null, item?: IpCommandInstance) => any
  ): Promise<IpCommandInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface IpCommandContextSolution {
  sid: string;
}

export class IpCommandContextImpl implements IpCommandContext {
  protected _solution: IpCommandContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/IpCommands/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: IpCommandInstance) => any
  ): Promise<IpCommandInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new IpCommandInstance(operationVersion, payload, instance._solution.sid)
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

interface IpCommandPayload extends KandyResponsePayload {
  ip_commands: IpCommandResource[];
}

interface IpCommandResource {
  sid: string;
  account_sid: string;
  sim_sid: string;
  sim_iccid: string;
  status: IpCommandStatus;
  direction: IpCommandDirection;
  device_ip: string;
  device_port: number;
  payload_type: IpCommandPayloadType;
  payload: string;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class IpCommandInstance {
  protected _solution: IpCommandContextSolution;
  protected _context?: IpCommandContext;

  constructor(
    protected _version: V1,
    payload: IpCommandResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.simSid = payload.sim_sid;
    this.simIccid = payload.sim_iccid;
    this.status = payload.status;
    this.direction = payload.direction;
    this.deviceIp = payload.device_ip;
    this.devicePort = deserialize.integer(payload.device_port);
    this.payloadType = payload.payload_type;
    this.payload = payload.payload;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the IP Command resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.kandy.com/docs/iam/api/account) that created the IP Command resource.
   */
  accountSid: string;
  /**
   * The SID of the [Super SIM](https://www.kandy.com/docs/iot/supersim/api/sim-resource) that this IP Command was sent to or from.
   */
  simSid: string;
  /**
   * The [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID) of the [Super SIM](https://www.kandy.com/docs/iot/supersim/api/sim-resource) that this IP Command was sent to or from.
   */
  simIccid: string;
  status: IpCommandStatus;
  direction: IpCommandDirection;
  /**
   * The IP address of the device that the IP Command was sent to or received from. For an IP Command sent to a Super SIM, `device_ip` starts out as `null`, and once the IP Command is “sent”, the `device_ip` will be filled out. An IP Command sent from a Super SIM have its `device_ip` always set.
   */
  deviceIp: string;
  /**
   * For an IP Command sent to a Super SIM, it would be the destination port of the IP message. For an IP Command sent from a Super SIM, it would be the source port of the IP message.
   */
  devicePort: number;
  payloadType: IpCommandPayloadType;
  /**
   * The payload that is carried in the IP/UDP message. The payload can be encoded in either text or binary format. For text payload, UTF-8 encoding must be used.  For an IP Command sent to a Super SIM, the payload is appended to the IP/UDP message “as is”. The payload should not exceed 1300 bytes.  For an IP Command sent from a Super SIM, the payload from the received IP/UDP message is extracted and sent in binary encoding. For an IP Command sent from a Super SIM, the payload should not exceed 1300 bytes. If it is larger than 1300 bytes, there might be fragmentation on the upstream and the message may appear truncated.
   */
  payload: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the IP Command resource.
   */
  url: string;

  private get _proxy(): IpCommandContext {
    this._context =
      this._context ||
      new IpCommandContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a IpCommandInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpCommandInstance
   */
  fetch(
    callback?: (error: Error | null, item?: IpCommandInstance) => any
  ): Promise<IpCommandInstance> {
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
      simSid: this.simSid,
      simIccid: this.simIccid,
      status: this.status,
      direction: this.direction,
      deviceIp: this.deviceIp,
      devicePort: this.devicePort,
      payloadType: this.payloadType,
      payload: this.payload,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface IpCommandSolution {}

export interface IpCommandListInstance {
  _version: V1;
  _solution: IpCommandSolution;
  _uri: string;

  (sid: string): IpCommandContext;
  get(sid: string): IpCommandContext;

  /**
   * Create a IpCommandInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpCommandInstance
   */
  create(
    params: IpCommandListInstanceCreateOptions,
    callback?: (error: Error | null, item?: IpCommandInstance) => any
  ): Promise<IpCommandInstance>;

  /**
   * Streams IpCommandInstance records from the API.
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
   * @param { IpCommandListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: IpCommandInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: IpCommandListInstanceEachOptions,
    callback?: (item: IpCommandInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of IpCommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: IpCommandPage) => any
  ): Promise<IpCommandPage>;
  /**
   * Lists IpCommandInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { IpCommandListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: IpCommandInstance[]) => any
  ): Promise<IpCommandInstance[]>;
  list(
    params: IpCommandListInstanceOptions,
    callback?: (error: Error | null, items: IpCommandInstance[]) => any
  ): Promise<IpCommandInstance[]>;
  /**
   * Retrieve a single page of IpCommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { IpCommandListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: IpCommandPage) => any
  ): Promise<IpCommandPage>;
  page(
    params: IpCommandListInstancePageOptions,
    callback?: (error: Error | null, items: IpCommandPage) => any
  ): Promise<IpCommandPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function IpCommandListInstance(version: V1): IpCommandListInstance {
  const instance = ((sid) => instance.get(sid)) as IpCommandListInstance;

  instance.get = function get(sid): IpCommandContext {
    return new IpCommandContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/IpCommands`;

  instance.create = function create(
    params: IpCommandListInstanceCreateOptions,
    callback?: (error: Error | null, items: IpCommandInstance) => any
  ): Promise<IpCommandInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["sim"] === null || params["sim"] === undefined) {
      throw new Error("Required parameter \"params['sim']\" missing.");
    }

    if (params["payload"] === null || params["payload"] === undefined) {
      throw new Error("Required parameter \"params['payload']\" missing.");
    }

    if (params["devicePort"] === null || params["devicePort"] === undefined) {
      throw new Error("Required parameter \"params['devicePort']\" missing.");
    }

    let data: any = {};

    data["Sim"] = params["sim"];

    data["Payload"] = params["payload"];

    data["DevicePort"] = params["devicePort"];
    if (params["payloadType"] !== undefined)
      data["PayloadType"] = params["payloadType"];
    if (params["callbackUrl"] !== undefined)
      data["CallbackUrl"] = params["callbackUrl"];
    if (params["callbackMethod"] !== undefined)
      data["CallbackMethod"] = params["callbackMethod"];

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
      (payload) => new IpCommandInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | IpCommandListInstancePageOptions
      | ((error: Error | null, items: IpCommandPage) => any),
    callback?: (error: Error | null, items: IpCommandPage) => any
  ): Promise<IpCommandPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["sim"] !== undefined) data["Sim"] = params["sim"];
    if (params["simIccid"] !== undefined) data["SimIccid"] = params["simIccid"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["direction"] !== undefined)
      data["Direction"] = params["direction"];
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
        new IpCommandPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: IpCommandPage) => any
  ): Promise<IpCommandPage> {
    const operationPromise = instance._version._domain.kandy.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new IpCommandPage(instance._version, payload, instance._solution)
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

export class IpCommandPage extends Page<
  V1,
  IpCommandPayload,
  IpCommandResource,
  IpCommandInstance
> {
  /**
   * Initialize the IpCommandPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: IpCommandSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of IpCommandInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: IpCommandResource): IpCommandInstance {
    return new IpCommandInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
