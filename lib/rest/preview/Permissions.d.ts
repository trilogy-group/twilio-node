/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Preview = require('../Preview');
import Version = require('../../base/Version');
import { VoicePermissionList } from './permissions/voicePermission';
import { VoicePermissionListInstance } from './permissions/voicePermission';


declare class Permissions extends Version {
  /**
   * Initialize the Permissions version of Preview
   *
   * @property voicePermissions - voicePermissions resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Preview);

  readonly voicePermissions: VoicePermissionListInstance;
}

export = Permissions;
