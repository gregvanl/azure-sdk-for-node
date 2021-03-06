/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Metadata information for the properties JSON document.
 *
 */
class DeviceTwinMetadata {
  /**
   * Create a DeviceTwinMetadata.
   * @member {string} [lastUpdated] The ISO8601 timestamp of the last time the
   * properties were updated.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeviceTwinMetadata
   *
   * @returns {object} metadata of DeviceTwinMetadata
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeviceTwinMetadata',
      type: {
        name: 'Composite',
        className: 'DeviceTwinMetadata',
        modelProperties: {
          lastUpdated: {
            required: false,
            serializedName: 'lastUpdated',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DeviceTwinMetadata;
