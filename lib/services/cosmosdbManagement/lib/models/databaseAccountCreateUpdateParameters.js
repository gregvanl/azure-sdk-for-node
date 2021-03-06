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
 * Parameters to create and update Cosmos DB database accounts.
 *
 * @extends models['Resource']
 */
class DatabaseAccountCreateUpdateParameters extends models['Resource'] {
  /**
   * Create a DatabaseAccountCreateUpdateParameters.
   * @member {string} [kind] Indicates the type of database account. This can
   * only be set at database account creation. Possible values include:
   * 'GlobalDocumentDB', 'MongoDB', 'Parse'. Default value: 'GlobalDocumentDB'
   * .
   * @member {object} [consistencyPolicy] The consistency policy for the Cosmos
   * DB account.
   * @member {string} [consistencyPolicy.defaultConsistencyLevel] The default
   * consistency level and configuration settings of the Cosmos DB account.
   * Possible values include: 'Eventual', 'Session', 'BoundedStaleness',
   * 'Strong', 'ConsistentPrefix'
   * @member {number} [consistencyPolicy.maxStalenessPrefix] When used with the
   * Bounded Staleness consistency level, this value represents the number of
   * stale requests tolerated. Accepted range for this value is 1 –
   * 2,147,483,647. Required when defaultConsistencyPolicy is set to
   * 'BoundedStaleness'.
   * @member {number} [consistencyPolicy.maxIntervalInSeconds] When used with
   * the Bounded Staleness consistency level, this value represents the time
   * amount of staleness (in seconds) tolerated. Accepted range for this value
   * is 5 - 86400. Required when defaultConsistencyPolicy is set to
   * 'BoundedStaleness'.
   * @member {array} locations An array that contains the georeplication
   * locations enabled for the Cosmos DB account.
   * @member {string} [ipRangeFilter] Cosmos DB Firewall Support: This value
   * specifies the set of IP addresses or IP address ranges in CIDR form to be
   * included as the allowed list of client IPs for a given database account.
   * IP addresses/ranges must be comma separated and must not contain any
   * spaces.
   * @member {boolean} [isVirtualNetworkFilterEnabled] Flag to indicate whether
   * to enable/disable Virtual Network ACL rules.
   * @member {boolean} [enableAutomaticFailover] Enables automatic failover of
   * the write region in the rare event that the region is unavailable due to
   * an outage. Automatic failover will result in a new write region for the
   * account and is chosen based on the failover priorities configured for the
   * account.
   * @member {array} [capabilities] List of Cosmos DB capabilities for the
   * account
   * @member {array} [virtualNetworkRules] List of Virtual Network ACL rules
   * configured for the Cosmos DB account.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DatabaseAccountCreateUpdateParameters
   *
   * @returns {object} metadata of DatabaseAccountCreateUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DatabaseAccountCreateUpdateParameters',
      type: {
        name: 'Composite',
        className: 'DatabaseAccountCreateUpdateParameters',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
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
          },
          kind: {
            required: false,
            serializedName: 'kind',
            defaultValue: 'GlobalDocumentDB',
            type: {
              name: 'String'
            }
          },
          consistencyPolicy: {
            required: false,
            serializedName: 'properties.consistencyPolicy',
            type: {
              name: 'Composite',
              className: 'ConsistencyPolicy'
            }
          },
          locations: {
            required: true,
            serializedName: 'properties.locations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LocationElementType',
                  type: {
                    name: 'Composite',
                    className: 'Location'
                  }
              }
            }
          },
          databaseAccountOfferType: {
            required: true,
            isConstant: true,
            serializedName: 'properties.databaseAccountOfferType',
            defaultValue: 'Standard',
            type: {
              name: 'String'
            }
          },
          ipRangeFilter: {
            required: false,
            serializedName: 'properties.ipRangeFilter',
            type: {
              name: 'String'
            }
          },
          isVirtualNetworkFilterEnabled: {
            required: false,
            serializedName: 'properties.isVirtualNetworkFilterEnabled',
            type: {
              name: 'Boolean'
            }
          },
          enableAutomaticFailover: {
            required: false,
            serializedName: 'properties.enableAutomaticFailover',
            type: {
              name: 'Boolean'
            }
          },
          capabilities: {
            required: false,
            serializedName: 'properties.capabilities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CapabilityElementType',
                  type: {
                    name: 'Composite',
                    className: 'Capability'
                  }
              }
            }
          },
          virtualNetworkRules: {
            required: false,
            serializedName: 'properties.virtualNetworkRules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VirtualNetworkRuleElementType',
                  type: {
                    name: 'Composite',
                    className: 'VirtualNetworkRule'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DatabaseAccountCreateUpdateParameters;
