/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Messaging
 * This is the public Kandy REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to update a DomainCertsInstance
 */
export interface DomainCertsContextUpdateOptions {
  /** Contains the full TLS certificate and private for this domain in PEM format: https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail. Kandy uses this information to process HTTPS traffic sent to your domain. */
  tlsCert: string;
}

export interface DomainCertsContext {
  /**
   * Remove a DomainCertsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a DomainCertsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainCertsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DomainCertsInstance) => any
  ): Promise<DomainCertsInstance>;

  /**
   * Update a DomainCertsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainCertsInstance
   */
  update(
    params: DomainCertsContextUpdateOptions,
    callback?: (error: Error | null, item?: DomainCertsInstance) => any
  ): Promise<DomainCertsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DomainCertsContextSolution {
  domainSid: string;
}

export class DomainCertsContextImpl implements DomainCertsContext {
  protected _solution: DomainCertsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, domainSid: string) {
    if (!isValidPathParam(domainSid)) {
      throw new Error("Parameter 'domainSid' is not valid.");
    }

    this._solution = { domainSid };
    this._uri = `/LinkShortening/Domains/${domainSid}/Certificate`;
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
    callback?: (error: Error | null, item?: DomainCertsInstance) => any
  ): Promise<DomainCertsInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DomainCertsInstance(
          operationVersion,
          payload,
          instance._solution.domainSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params: DomainCertsContextUpdateOptions,
    callback?: (error: Error | null, item?: DomainCertsInstance) => any
  ): Promise<DomainCertsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["tlsCert"] === null || params["tlsCert"] === undefined) {
      throw new Error("Required parameter \"params['tlsCert']\" missing.");
    }

    let data: any = {};

    data["TlsCert"] = params["tlsCert"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DomainCertsInstance(
          operationVersion,
          payload,
          instance._solution.domainSid
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

interface DomainCertsPayload extends DomainCertsResource {}

interface DomainCertsResource {
  domain_sid: string;
  date_updated: Date;
  date_expires: Date;
  date_created: Date;
  domain_name: string;
  certificate_sid: string;
  url: string;
  cert_in_validation: any;
}

export class DomainCertsInstance {
  protected _solution: DomainCertsContextSolution;
  protected _context?: DomainCertsContext;

  constructor(
    protected _version: V1,
    payload: DomainCertsResource,
    domainSid?: string
  ) {
    this.domainSid = payload.domain_sid;
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.dateExpires = deserialize.iso8601DateTime(payload.date_expires);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.domainName = payload.domain_name;
    this.certificateSid = payload.certificate_sid;
    this.url = payload.url;
    this.certInValidation = payload.cert_in_validation;

    this._solution = { domainSid: domainSid || this.domainSid };
  }

  /**
   * The unique string that we created to identify the Domain resource.
   */
  domainSid: string;
  /**
   * Date that this Domain was last updated.
   */
  dateUpdated: Date;
  /**
   * Date that the private certificate associated with this domain expires. You will need to update the certificate before that date to ensure your shortened links will continue to work.
   */
  dateExpires: Date;
  /**
   * Date that this Domain was registered to the Kandy platform to create a new Domain object.
   */
  dateCreated: Date;
  /**
   * Full url path for this domain.
   */
  domainName: string;
  /**
   * The unique string that we created to identify this Certificate resource.
   */
  certificateSid: string;
  url: string;
  /**
   * Optional JSON field describing the status and upload date of a new certificate in the process of validation
   */
  certInValidation: any;

  private get _proxy(): DomainCertsContext {
    this._context =
      this._context ||
      new DomainCertsContextImpl(this._version, this._solution.domainSid);
    return this._context;
  }

  /**
   * Remove a DomainCertsInstance
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
   * Fetch a DomainCertsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainCertsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DomainCertsInstance) => any
  ): Promise<DomainCertsInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a DomainCertsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainCertsInstance
   */
  update(
    params: DomainCertsContextUpdateOptions,
    callback?: (error: Error | null, item?: DomainCertsInstance) => any
  ): Promise<DomainCertsInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: DomainCertsInstance) => any
  ): Promise<DomainCertsInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      domainSid: this.domainSid,
      dateUpdated: this.dateUpdated,
      dateExpires: this.dateExpires,
      dateCreated: this.dateCreated,
      domainName: this.domainName,
      certificateSid: this.certificateSid,
      url: this.url,
      certInValidation: this.certInValidation,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DomainCertsSolution {}

export interface DomainCertsListInstance {
  _version: V1;
  _solution: DomainCertsSolution;
  _uri: string;

  (domainSid: string): DomainCertsContext;
  get(domainSid: string): DomainCertsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DomainCertsListInstance(version: V1): DomainCertsListInstance {
  const instance = ((domainSid) =>
    instance.get(domainSid)) as DomainCertsListInstance;

  instance.get = function get(domainSid): DomainCertsContext {
    return new DomainCertsContextImpl(version, domainSid);
  };

  instance._version = version;
  instance._solution = {};
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
