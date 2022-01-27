'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Message', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .messages('IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var channelSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v2/Services/${serviceSid}/Channels/${channelSid}/Messages/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'to': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2016-03-24T20:37:57Z',
          'date_updated': '2016-03-24T20:37:57Z',
          'last_updated_by': null,
          'was_edited': false,
          'from': 'system',
          'attributes': '{}',
          'body': 'Hello',
          'index': 0,
          'type': 'text',
          'media': null,
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .messages('IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch_media response',
    function(done) {
      var body = {
          'sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'to': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2016-03-24T20:37:57Z',
          'date_updated': '2016-03-24T20:37:57Z',
          'last_updated_by': null,
          'was_edited': false,
          'from': 'system',
          'attributes': '{}',
          'body': 'Hello',
          'index': 0,
          'type': 'media',
          'media': {
              'sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'size': 99999999999999,
              'content_type': 'application/pdf',
              'filename': 'hello.pdf'
          },
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .messages('IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'xTwilioWebhookEnabled': 'true'};
      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .messages.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var channelSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v2/Services/${serviceSid}/Channels/${channelSid}/Messages`;

      var headers = {'X-Twilio-Webhook-Enabled': 'true'};
      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'to': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'attributes': null,
          'date_created': '2016-03-24T20:37:57Z',
          'date_updated': '2016-03-24T20:37:57Z',
          'last_updated_by': 'system',
          'was_edited': false,
          'from': 'system',
          'body': 'Hello',
          'index': 0,
          'type': 'text',
          'media': null,
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .messages.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_with_all response',
    function(done) {
      var body = {
          'sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'to': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-12-16T22:18:37Z',
          'date_updated': '2015-12-16T22:18:38Z',
          'last_updated_by': 'username',
          'was_edited': true,
          'from': 'system',
          'attributes': '{\'test\': \'test\'}',
          'body': 'Hello',
          'index': 0,
          'type': 'text',
          'media': null,
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .messages.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_media response',
    function(done) {
      var body = {
          'sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'to': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'attributes': null,
          'date_created': '2016-03-24T20:37:57Z',
          'date_updated': '2016-03-24T20:37:57Z',
          'last_updated_by': 'system',
          'was_edited': false,
          'from': 'system',
          'body': 'Hello',
          'index': 0,
          'type': 'text',
          'media': {
              'sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'size': 99999999999999,
              'content_type': 'application/pdf',
              'filename': 'hello.pdf'
          },
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .messages.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'messages'
          },
          'messages': [
              {
                  'sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'to': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'last_updated_by': null,
                  'was_edited': false,
                  'from': 'system',
                  'attributes': '{}',
                  'body': 'Hello',
                  'index': 0,
                  'type': 'text',
                  'media': null,
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'to': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'last_updated_by': null,
                  'was_edited': false,
                  'from': 'system',
                  'attributes': '{}',
                  'body': 'Hello',
                  'index': 0,
                  'type': 'media',
                  'media': {
                      'sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'size': 99999999999999,
                      'content_type': 'application/pdf',
                      'filename': 'hello.pdf'
                  },
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .messages.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'messages'
          },
          'messages': [
              {
                  'sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'to': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'last_updated_by': null,
                  'was_edited': false,
                  'from': 'system',
                  'attributes': '{}',
                  'body': 'Hello',
                  'index': 0,
                  'type': 'text',
                  'media': null,
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'to': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'last_updated_by': null,
                  'was_edited': false,
                  'from': 'system',
                  'attributes': '{}',
                  'body': 'Hello',
                  'index': 0,
                  'type': 'media',
                  'media': {
                      'sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'size': 99999999999999,
                      'content_type': 'application/pdf',
                      'filename': 'hello.pdf'
                  },
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .messages.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://chat.twilio.com/v2/Services/${serviceSid}/Channels/${channelSid}/Messages',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'messages'
          },
          'messages': [
              {
                  'sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'to': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'last_updated_by': null,
                  'was_edited': false,
                  'from': 'system',
                  'attributes': '{}',
                  'body': 'Hello',
                  'index': 0,
                  'type': 'text',
                  'media': null,
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'to': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'last_updated_by': null,
                  'was_edited': false,
                  'from': 'system',
                  'attributes': '{}',
                  'body': 'Hello',
                  'index': 0,
                  'type': 'media',
                  'media': {
                      'sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'size': 99999999999999,
                      'content_type': 'application/pdf',
                      'filename': 'hello.pdf'
                  },
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .messages.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .messages.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var channelSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v2/Services/${serviceSid}/Channels/${channelSid}/Messages`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'messages'
          },
          'messages': [
              {
                  'sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'to': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'last_updated_by': null,
                  'was_edited': false,
                  'from': 'system',
                  'attributes': '{}',
                  'body': 'Hello',
                  'index': 0,
                  'type': 'text',
                  'media': null,
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'to': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'last_updated_by': null,
                  'was_edited': false,
                  'from': 'system',
                  'attributes': '{}',
                  'body': 'Hello',
                  'index': 0,
                  'type': 'media',
                  'media': {
                      'sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'size': 99999999999999,
                      'content_type': 'application/pdf',
                      'filename': 'hello.pdf'
                  },
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .messages.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'messages'
          },
          'messages': []
      };

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .messages.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'xTwilioWebhookEnabled': 'true'};
      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .messages('IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var channelSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v2/Services/${serviceSid}/Channels/${channelSid}/Messages/${sid}`;

      var headers = {'X-Twilio-Webhook-Enabled': 'true'};
      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = null;

      holodeck.mock(new Response(204, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .messages('IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'xTwilioWebhookEnabled': 'true'};
      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .messages('IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var channelSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v2/Services/${serviceSid}/Channels/${channelSid}/Messages/${sid}`;

      var headers = {'X-Twilio-Webhook-Enabled': 'true'};
      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'to': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'attributes': '{ \'foo\': \'bar\' }',
          'date_created': '2015-12-16T22:18:37Z',
          'date_updated': '2015-12-16T22:18:38Z',
          'last_updated_by': 'username',
          'was_edited': true,
          'from': 'fromUser',
          'body': 'Hello',
          'index': 0,
          'type': 'text',
          'media': null,
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .messages('IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
