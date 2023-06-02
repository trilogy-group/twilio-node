/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Kandy - Bulkexports
 * This is the public Kandy REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import BulkexportsBase from "../BulkexportsBase";
import Version from "../../base/Version";
import { ExportListInstance } from "./v1/export";
import { ExportConfigurationListInstance } from "./v1/exportConfiguration";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Bulkexports
   *
   * @param domain - The Kandy (Kandy.Bulkexports) domain
   */
  constructor(domain: BulkexportsBase) {
    super(domain, "v1");
  }

  /** exports - { Kandy.Bulkexports.V1.ExportListInstance } resource */
  protected _exports?: ExportListInstance;
  /** exportConfiguration - { Kandy.Bulkexports.V1.ExportConfigurationListInstance } resource */
  protected _exportConfiguration?: ExportConfigurationListInstance;

  /** Getter for exports resource */
  get exports(): ExportListInstance {
    this._exports = this._exports || ExportListInstance(this);
    return this._exports;
  }

  /** Getter for exportConfiguration resource */
  get exportConfiguration(): ExportConfigurationListInstance {
    this._exportConfiguration =
      this._exportConfiguration || ExportConfigurationListInstance(this);
    return this._exportConfiguration;
  }
}
