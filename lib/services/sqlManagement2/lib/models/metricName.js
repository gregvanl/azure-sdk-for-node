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
 * A database metric name.
 *
 */
class MetricName {
  /**
   * Create a MetricName.
   * @member {string} [value] The name of the database metric.
   * @member {string} [localizedValue] The friendly name of the database
   * metric.
   */
  constructor() {
  }

  /**
   * Defines the metadata of MetricName
   *
   * @returns {object} metadata of MetricName
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MetricName',
      type: {
        name: 'Composite',
        className: 'MetricName',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          },
          localizedValue: {
            required: false,
            readOnly: true,
            serializedName: 'localizedValue',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MetricName;