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
import V2010 from "../../../../../V2010";
const deserialize = require("../../../../../../../base/deserialize");
const serialize = require("../../../../../../../base/serialize");
import { isValidPathParam } from "../../../../../../../base/utility";
import { AuthCallsCredentialListMappingListInstance } from "./authTypeCalls/authCallsCredentialListMapping";
import { AuthCallsIpAccessControlListMappingListInstance } from "./authTypeCalls/authCallsIpAccessControlListMapping";

export interface AuthTypeCallsSolution {
  accountSid: string;
  domainSid: string;
}

export interface AuthTypeCallsListInstance {
  _version: V2010;
  _solution: AuthTypeCallsSolution;
  _uri: string;

  _credentialListMappings?: AuthCallsCredentialListMappingListInstance;
  credentialListMappings: AuthCallsCredentialListMappingListInstance;
  _ipAccessControlListMappings?: AuthCallsIpAccessControlListMappingListInstance;
  ipAccessControlListMappings: AuthCallsIpAccessControlListMappingListInstance;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AuthTypeCallsListInstance(
  version: V2010,
  accountSid: string,
  domainSid: string
): AuthTypeCallsListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(domainSid)) {
    throw new Error("Parameter 'domainSid' is not valid.");
  }

  const instance = {} as AuthTypeCallsListInstance;

  instance._version = version;
  instance._solution = { accountSid, domainSid };
  instance._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Calls.json`;

  Object.defineProperty(instance, "credentialListMappings", {
    get: function credentialListMappings() {
      if (!instance._credentialListMappings) {
        instance._credentialListMappings =
          AuthCallsCredentialListMappingListInstance(
            instance._version,
            instance._solution.accountSid,
            instance._solution.domainSid
          );
      }
      return instance._credentialListMappings;
    },
  });

  Object.defineProperty(instance, "ipAccessControlListMappings", {
    get: function ipAccessControlListMappings() {
      if (!instance._ipAccessControlListMappings) {
        instance._ipAccessControlListMappings =
          AuthCallsIpAccessControlListMappingListInstance(
            instance._version,
            instance._solution.accountSid,
            instance._solution.domainSid
          );
      }
      return instance._ipAccessControlListMappings;
    },
  });

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
