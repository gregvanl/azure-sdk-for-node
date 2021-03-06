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
 * Properties describing exposure level of the image.
 *
 */
class ExposureProperties {
  /**
   * Create a ExposureProperties.
   * @member {string} [exposureLevel] An enum value indicating level of
   * exposure. Possible values include: 'UnderExposure', 'GoodExposure',
   * 'OverExposure'
   * @member {number} [value] A number indicating level of exposure level
   * ranging from 0 to 1. [0, 0.25) is under exposure. [0.25, 0.75) is good
   * exposure. [0.75, 1] is over exposure.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExposureProperties
   *
   * @returns {object} metadata of ExposureProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExposureProperties',
      type: {
        name: 'Composite',
        className: 'ExposureProperties',
        modelProperties: {
          exposureLevel: {
            required: false,
            serializedName: 'exposureLevel',
            type: {
              name: 'Enum',
              allowedValues: [ 'UnderExposure', 'GoodExposure', 'OverExposure' ]
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            constraints: {
              InclusiveMaximum: 1,
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ExposureProperties;
