'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Credential', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'credentials': [
              {
                  'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'Test slow create',
                  'type': 'apn',
                  'sandbox': 'False',
                  'date_created': '2015-10-07T17:50:01Z',
                  'date_updated': '2015-10-07T17:50:01Z',
                  'url': 'https://chat.twilio.com/v1/Credentials/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 1,
              'first_page_url': 'https://chat.twilio.com/v1/Credentials?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v1/Credentials?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'credentials'
          }
      };
      holodeck.mock(new Response(200, body));
      client.chat.v1.credentials.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'credentials': [
              {
                  'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'Test slow create',
                  'type': 'apn',
                  'sandbox': 'False',
                  'date_created': '2015-10-07T17:50:01Z',
                  'date_updated': '2015-10-07T17:50:01Z',
                  'url': 'https://chat.twilio.com/v1/Credentials/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 1,
              'first_page_url': 'https://chat.twilio.com/v1/Credentials?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v1/Credentials?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'credentials'
          }
      };
      holodeck.mock(new Response(200, body));
      client.chat.v1.credentials.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://chat.twilio.com/v1/Credentials',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'credentials': [
              {
                  'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'Test slow create',
                  'type': 'apn',
                  'sandbox': 'False',
                  'date_created': '2015-10-07T17:50:01Z',
                  'date_updated': '2015-10-07T17:50:01Z',
                  'url': 'https://chat.twilio.com/v1/Credentials/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 1,
              'first_page_url': 'https://chat.twilio.com/v1/Credentials?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v1/Credentials?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'credentials'
          }
      };
      holodeck.mock(new Response(200, body));
      client.chat.v1.credentials.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.chat.v1.credentials.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://chat.twilio.com/v1/Credentials';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'credentials': [
              {
                  'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'Test slow create',
                  'type': 'apn',
                  'sandbox': 'False',
                  'date_created': '2015-10-07T17:50:01Z',
                  'date_updated': '2015-10-07T17:50:01Z',
                  'url': 'https://chat.twilio.com/v1/Credentials/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 1,
              'first_page_url': 'https://chat.twilio.com/v1/Credentials?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v1/Credentials?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'credentials'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v1.credentials.list();
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
          'credentials': [],
          'meta': {
              'page': 0,
              'page_size': 1,
              'first_page_url': 'https://chat.twilio.com/v1/Credentials?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v1/Credentials?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'credentials'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v1.credentials.list();
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

      var opts = {'type': 'gcm'};
      var promise = client.chat.v1.credentials.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://chat.twilio.com/v1/Credentials';

      var values = {'Type': 'gcm', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'Test slow create',
          'type': 'apn',
          'sandbox': 'False',
          'date_created': '2015-10-07T17:50:01Z',
          'date_updated': '2015-10-07T17:50:01Z',
          'url': 'https://chat.twilio.com/v1/Credentials/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {'type': 'gcm'};
      var promise = client.chat.v1.credentials.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.chat.v1.credentials('CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v1/Credentials/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'Test slow create',
          'type': 'apn',
          'sandbox': 'False',
          'date_created': '2015-10-07T17:50:01Z',
          'date_updated': '2015-10-07T17:50:01Z',
          'url': 'https://chat.twilio.com/v1/Credentials/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v1.credentials('CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.chat.v1.credentials('CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v1/Credentials/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'Test slow create',
          'type': 'apn',
          'sandbox': 'False',
          'date_created': '2015-10-07T17:50:01Z',
          'date_updated': '2015-10-07T17:50:01Z',
          'url': 'https://chat.twilio.com/v1/Credentials/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v1.credentials('CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
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

      var promise = client.chat.v1.credentials('CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v1/Credentials/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = null;

      holodeck.mock(new Response(204, body));

      var promise = client.chat.v1.credentials('CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
