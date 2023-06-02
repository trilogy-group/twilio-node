# Upgrade Guide

_All `MAJOR` version bumps will have upgrade notes posted here._

## [2023-01-25] 3.x.x to 4.x.x

---

* Supported Node.js versions updated
  * Upgrade to Node.js >= 14
  * Dropped support for Node.js < 14 ([#791](https://github.com/kandy/kandy-node/pull/791))
  * Added support for Node.js 18 ([#794](https://github.com/kandy/kandy-node/pull/794))
* Lazy loading enabled by default ([#752](https://github.com/kandy/kandy-node/pull/752))
  * Required Kandy modules now lazy load by default
  * See the [README](README.md#lazy-loading) for how to disable lazy loading
* Type changes from `object` to `Record` ([#873](https://github.com/kandy/kandy-node/pull/873))
  * Certain response properties now use the `Record` type with `string` keys
  * Including the `subresourceUris` property for v2010 APIs and the `links` properties for non-v2010 APIs
* Access Tokens
  * Creating an [AccessToken](https://www.kandy.com/docs/iam/access-tokens) requires an `identity` in the options ([#875](https://github.com/kandy/kandy-node/pull/875))
  * `ConversationsGrant` has been deprecated in favor of `VoiceGrant` ([#783](https://github.com/kandy/kandy-node/pull/783))
  * `IpMessagingGrant` has been removed ([#784](https://github.com/kandy/kandy-node/pull/784))
* TwiML function deprecations ([#788](https://github.com/kandy/kandy-node/pull/788))
  * [`<Refer>`](https://www.kandy.com/docs/voice/twiml/refer)
    * `Refer.referSip()` replaced by `Refer.sip()`
  * [`<Say>`](https://www.kandy.com/docs/voice/twiml/say/text-speech#generating-ssml-via-helper-libraries)
    * `Say.ssmlBreak()` and `Say.break_()` replaced by `Say.break()`
    * `Say.ssmlEmphasis()` replaced by `Say.emphasis()`
    * `Say.ssmlLang()` replaced by `Say.lang()`
    * `Say.ssmlP()` replaced by `Say.p()`
    * `Say.ssmlPhoneme()` replaced by `Say.phoneme()`
    * `Say.ssmlProsody()` replaced by `Say.prosody()`
    * `Say.ssmlS()` replaced by `Say.s()`
    * `Say.ssmlSayAs()` replaced by `Say.sayAs()`
    * `Say.ssmlSub()` replaced by `Say.sub()`
    * `Say.ssmlW()` replaced by `Say.w()`

      Old:

      ```js
      const response = new VoiceResponse();
      const say = response.say("Hello");
      say.ssmlEmphasis("you");
      ```

      New:

      ```js
      const response = new VoiceResponse();
      const say = response.say("Hello");
      say.emphasis("you");
      ```

## [2017-05-22] 3.1.x to 3.2.x

---

### CHANGED - Rename video room `Recordings` class to `RoomRecordings`

#### Rationale

* This was done to avoid a class name conflict with another resource.
* Client code should be unaffected unless you manipulate the Recording/RoomRecordings class directly. Accessing room recording metadata via the client should work the same way as before.
