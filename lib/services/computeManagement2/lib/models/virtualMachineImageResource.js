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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the VirtualMachineImageResource class.
 * @constructor
 * Virtual machine image resource information.
 * @member {string} name the name of the resource.
 * 
 * @member {string} location the location of the resource.
 * 
 * @member {object} [tags] the tags attached to the resource.
 * 
 */
function VirtualMachineImageResource() {
  VirtualMachineImageResource['super_'].call(this);
}

util.inherits(VirtualMachineImageResource, models['SubResource']);

/**
 * Defines the metadata of VirtualMachineImageResource
 *
 * @returns {object} metadata of VirtualMachineImageResource
 *
 */
VirtualMachineImageResource.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VirtualMachineImageResource',
    type: {
      name: 'Composite',
      className: 'VirtualMachineImageResource',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = VirtualMachineImageResource;