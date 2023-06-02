import IRequestClient from "./base/RequestClient";
import IKandy from "./rest/Kandy";
import * as webhooks from "./webhooks/webhooks";

import type { ClientOpts as IClientOpts } from "./base/BaseKandy";
import IAccessToken from "./jwt/AccessToken";
import IClientCapability from "./jwt/ClientCapability";
import IVoiceResponse from "./twiml/VoiceResponse";
import IMessagingResponse from "./twiml/MessagingResponse";
import IFaxResponse from "./twiml/FaxResponse";

// Shorthand to automatically create a RestClient
function KandySDK(
  accountSid?: string,
  authToken?: string,
  opts?: IClientOpts
): KandySDK.Kandy {
  return new KandySDK.Kandy(accountSid, authToken, opts);
}

namespace KandySDK {
  // Main functional components of the Kandy module
  export type Kandy = IKandy;
  export const Kandy = IKandy;
  export namespace jwt {
    export type AccessToken = IAccessToken;
    export const AccessToken = IAccessToken;
    export type ClientCapability = IClientCapability;
    export const ClientCapability = IClientCapability;
  }
  export namespace twiml {
    export type VoiceResponse = IVoiceResponse;
    export const VoiceResponse = IVoiceResponse;
    export type MessagingResponse = IMessagingResponse;
    export const MessagingResponse = IMessagingResponse;
    export type FaxResponse = IFaxResponse;
    export const FaxResponse = IFaxResponse;
  }
  export type RequestClient = IRequestClient;
  export const RequestClient = IRequestClient;
  // Setup webhook helper functionality
  export type validateBody = typeof webhooks.validateBody;
  export const validateBody = webhooks.validateBody;
  export type validateRequest = typeof webhooks.validateRequest;
  export const validateRequest = webhooks.validateRequest;
  export type validateRequestWithBody = typeof webhooks.validateRequestWithBody;
  export const validateRequestWithBody = webhooks.validateRequestWithBody;
  export type validateExpressRequest = typeof webhooks.validateExpressRequest;
  export const validateExpressRequest = webhooks.validateExpressRequest;
  export type validateIncomingRequest = typeof webhooks.validateIncomingRequest;
  export const validateIncomingRequest = webhooks.validateIncomingRequest;
  export type getExpectedBodyHash = typeof webhooks.getExpectedBodyHash;
  export const getExpectedBodyHash = webhooks.getExpectedBodyHash;
  export type getExpectedKandySignature =
    typeof webhooks.getExpectedKandySignature;
  export const getExpectedKandySignature = webhooks.getExpectedKandySignature;
  export type webhook = typeof webhooks.webhook;
  export const webhook = webhooks.webhook;
  // Export the client options type for convenience
  export type ClientOpts = IClientOpts;
}

// Public module interface is a function, which passes through to RestClient constructor
export = KandySDK;
