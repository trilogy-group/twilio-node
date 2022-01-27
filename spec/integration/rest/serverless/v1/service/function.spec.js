'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Function', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functions.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://serverless.twilio.com/v1/Services/${serviceSid}/Functions`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'functions': [],
          'meta': {
              'first_page_url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Functions?PageSize=50&Page=0',
              'key': 'functions',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Functions?PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functions.list();
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

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functions('ZHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'ZHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://serverless.twilio.com/v1/Services/${serviceSid}/Functions/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'ZH00000000000000000000000000000000',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ZS00000000000000000000000000000000',
          'friendly_name': 'test-function',
          'date_created': '2018-11-10T20:00:00Z',
          'date_updated': '2018-11-10T20:00:00Z',
          'url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Functions/ZH00000000000000000000000000000000',
          'links': {
              'function_versions': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Functions/ZH00000000000000000000000000000000/Versions'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functions('ZHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functions('ZHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'ZHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://serverless.twilio.com/v1/Services/${serviceSid}/Functions/${sid}`;

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

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functions('ZHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'friendlyName': 'friendly_name'};
      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functions.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://serverless.twilio.com/v1/Services/${serviceSid}/Functions`;

      var values = {'FriendlyName': 'friendly_name', };
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
          'sid': 'ZH00000000000000000000000000000000',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ZS00000000000000000000000000000000',
          'friendly_name': 'function-friendly',
          'date_created': '2018-11-10T20:00:00Z',
          'date_updated': '2018-11-10T20:00:00Z',
          'url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Functions/ZH00000000000000000000000000000000',
          'links': {
              'function_versions': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Functions/ZH00000000000000000000000000000000/Versions'
          }
      };

      holodeck.mock(new Response(201, body));

      var opts = {'friendlyName': 'friendly_name'};
      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functions.create(opts);
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

      var opts = {'friendlyName': 'friendly_name'};
      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functions('ZHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'ZHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://serverless.twilio.com/v1/Services/${serviceSid}/Functions/${sid}`;

      var values = {'FriendlyName': 'friendly_name', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'sid': 'ZH00000000000000000000000000000000',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ZS00000000000000000000000000000000',
          'friendly_name': 'function-friendly-update',
          'date_created': '2018-11-10T20:00:00Z',
          'date_updated': '2018-11-10T20:00:00Z',
          'url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Functions/ZH00000000000000000000000000000000',
          'links': {
              'function_versions': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Functions/ZH00000000000000000000000000000000/Versions'
          }
      };

      holodeck.mock(new Response(200, body));

      var opts = {'friendlyName': 'friendly_name'};
      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functions('ZHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
