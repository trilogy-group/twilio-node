/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Taskrouter
 * This is the public Kandy REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to fetch a WorkersRealTimeStatisticsInstance
 */
export interface WorkersRealTimeStatisticsContextFetchOptions {
  /** Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`. */
  taskChannel?: string;
}

export interface WorkersRealTimeStatisticsContext {
  /**
   * Fetch a WorkersRealTimeStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkersRealTimeStatisticsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: WorkersRealTimeStatisticsInstance
    ) => any
  ): Promise<WorkersRealTimeStatisticsInstance>;
  /**
   * Fetch a WorkersRealTimeStatisticsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkersRealTimeStatisticsInstance
   */
  fetch(
    params: WorkersRealTimeStatisticsContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: WorkersRealTimeStatisticsInstance
    ) => any
  ): Promise<WorkersRealTimeStatisticsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkersRealTimeStatisticsContextSolution {
  workspaceSid: string;
}

export class WorkersRealTimeStatisticsContextImpl
  implements WorkersRealTimeStatisticsContext
{
  protected _solution: WorkersRealTimeStatisticsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, workspaceSid: string) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    this._solution = { workspaceSid };
    this._uri = `/Workspaces/${workspaceSid}/Workers/RealTimeStatistics`;
  }

  fetch(
    params?:
      | WorkersRealTimeStatisticsContextFetchOptions
      | ((
          error: Error | null,
          item?: WorkersRealTimeStatisticsInstance
        ) => any),
    callback?: (
      error: Error | null,
      item?: WorkersRealTimeStatisticsInstance
    ) => any
  ): Promise<WorkersRealTimeStatisticsInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["taskChannel"] !== undefined)
      data["TaskChannel"] = params["taskChannel"];

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
        new WorkersRealTimeStatisticsInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid
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

interface WorkersRealTimeStatisticsPayload
  extends WorkersRealTimeStatisticsResource {}

interface WorkersRealTimeStatisticsResource {
  account_sid: string;
  activity_statistics: Array<any>;
  total_workers: number;
  workspace_sid: string;
  url: string;
}

export class WorkersRealTimeStatisticsInstance {
  protected _solution: WorkersRealTimeStatisticsContextSolution;
  protected _context?: WorkersRealTimeStatisticsContext;

  constructor(
    protected _version: V1,
    payload: WorkersRealTimeStatisticsResource,
    workspaceSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.activityStatistics = payload.activity_statistics;
    this.totalWorkers = deserialize.integer(payload.total_workers);
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;

    this._solution = { workspaceSid };
  }

  /**
   * The SID of the [Account](https://www.kandy.com/docs/iam/api/account) that created the Worker resource.
   */
  accountSid: string;
  /**
   * The number of current Workers by Activity.
   */
  activityStatistics: Array<any>;
  /**
   * The total number of Workers.
   */
  totalWorkers: number;
  /**
   * The SID of the Workspace that contains the Workers.
   */
  workspaceSid: string;
  /**
   * The absolute URL of the Workers statistics resource.
   */
  url: string;

  private get _proxy(): WorkersRealTimeStatisticsContext {
    this._context =
      this._context ||
      new WorkersRealTimeStatisticsContextImpl(
        this._version,
        this._solution.workspaceSid
      );
    return this._context;
  }

  /**
   * Fetch a WorkersRealTimeStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkersRealTimeStatisticsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: WorkersRealTimeStatisticsInstance
    ) => any
  ): Promise<WorkersRealTimeStatisticsInstance>;
  /**
   * Fetch a WorkersRealTimeStatisticsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkersRealTimeStatisticsInstance
   */
  fetch(
    params: WorkersRealTimeStatisticsContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: WorkersRealTimeStatisticsInstance
    ) => any
  ): Promise<WorkersRealTimeStatisticsInstance>;

  fetch(
    params?: any,
    callback?: (
      error: Error | null,
      item?: WorkersRealTimeStatisticsInstance
    ) => any
  ): Promise<WorkersRealTimeStatisticsInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      activityStatistics: this.activityStatistics,
      totalWorkers: this.totalWorkers,
      workspaceSid: this.workspaceSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WorkersRealTimeStatisticsSolution {
  workspaceSid: string;
}

export interface WorkersRealTimeStatisticsListInstance {
  _version: V1;
  _solution: WorkersRealTimeStatisticsSolution;
  _uri: string;

  (): WorkersRealTimeStatisticsContext;
  get(): WorkersRealTimeStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function WorkersRealTimeStatisticsListInstance(
  version: V1,
  workspaceSid: string
): WorkersRealTimeStatisticsListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  const instance = (() =>
    instance.get()) as WorkersRealTimeStatisticsListInstance;

  instance.get = function get(): WorkersRealTimeStatisticsContext {
    return new WorkersRealTimeStatisticsContextImpl(version, workspaceSid);
  };

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = ``;

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
