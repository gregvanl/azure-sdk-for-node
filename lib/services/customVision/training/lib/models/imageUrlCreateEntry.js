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

const models = require('./index');

/**
 * Class representing a ImageUrlCreateEntry.
 */
class ImageUrlCreateEntry {
  /**
   * Create a ImageUrlCreateEntry.
   * @member {string} [url]
   * @member {array} [tagIds]
   * @member {array} [regions]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageUrlCreateEntry
   *
   * @returns {object} metadata of ImageUrlCreateEntry
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageUrlCreateEntry',
      type: {
        name: 'Composite',
        className: 'ImageUrlCreateEntry',
        modelProperties: {
          url: {
            required: false,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          tagIds: {
            required: false,
            serializedName: 'tagIds',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UuidElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          regions: {
            required: false,
            serializedName: 'regions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RegionElementType',
                  type: {
                    name: 'Composite',
                    className: 'Region'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ImageUrlCreateEntry;
