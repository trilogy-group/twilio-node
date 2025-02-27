/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Media
 * This is the public Kandy REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import MediaBase from "../MediaBase";
import Version from "../../base/Version";
import { MediaProcessorListInstance } from "./v1/mediaProcessor";
import { MediaRecordingListInstance } from "./v1/mediaRecording";
import { PlayerStreamerListInstance } from "./v1/playerStreamer";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Media
   *
   * @param domain - The Kandy (Kandy.Media) domain
   */
  constructor(domain: MediaBase) {
    super(domain, "v1");
  }

  /** mediaProcessor - { Kandy.Media.V1.MediaProcessorListInstance } resource */
  protected _mediaProcessor?: MediaProcessorListInstance;
  /** mediaRecording - { Kandy.Media.V1.MediaRecordingListInstance } resource */
  protected _mediaRecording?: MediaRecordingListInstance;
  /** playerStreamer - { Kandy.Media.V1.PlayerStreamerListInstance } resource */
  protected _playerStreamer?: PlayerStreamerListInstance;

  /** Getter for mediaProcessor resource */
  get mediaProcessor(): MediaProcessorListInstance {
    this._mediaProcessor =
      this._mediaProcessor || MediaProcessorListInstance(this);
    return this._mediaProcessor;
  }

  /** Getter for mediaRecording resource */
  get mediaRecording(): MediaRecordingListInstance {
    this._mediaRecording =
      this._mediaRecording || MediaRecordingListInstance(this);
    return this._mediaRecording;
  }

  /** Getter for playerStreamer resource */
  get playerStreamer(): PlayerStreamerListInstance {
    this._playerStreamer =
      this._playerStreamer || PlayerStreamerListInstance(this);
    return this._playerStreamer;
  }
}
