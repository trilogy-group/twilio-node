'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
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

describe('Dialogue', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .dialogues('UKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        assistantSid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'UKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://preview.twilio.com/understand/Assistants/<%= assistantSid %>/Dialogues/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'UKkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
          'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Dialogues/UKkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
          'data': {}
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .dialogues('UKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
