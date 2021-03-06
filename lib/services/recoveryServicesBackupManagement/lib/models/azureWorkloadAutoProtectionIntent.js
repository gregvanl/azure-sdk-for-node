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
 * Azure Recovery Services Vault specific protection intent item.
 *
 * @extends models['AzureRecoveryServiceVaultProtectionIntent']
 */
class AzureWorkloadAutoProtectionIntent extends models['AzureRecoveryServiceVaultProtectionIntent'] {
  /**
   * Create a AzureWorkloadAutoProtectionIntent.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureWorkloadAutoProtectionIntent
   *
   * @returns {object} metadata of AzureWorkloadAutoProtectionIntent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureWorkloadAutoProtectionIntent',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'protectionIntentItemType',
          clientName: 'protectionIntentItemType'
        },
        uberParent: 'ProtectionIntent',
        className: 'AzureWorkloadAutoProtectionIntent',
        modelProperties: {
          backupManagementType: {
            required: false,
            serializedName: 'backupManagementType',
            type: {
              name: 'String'
            }
          },
          sourceResourceId: {
            required: false,
            serializedName: 'sourceResourceId',
            type: {
              name: 'String'
            }
          },
          itemId: {
            required: false,
            serializedName: 'itemId',
            type: {
              name: 'String'
            }
          },
          policyId: {
            required: false,
            serializedName: 'policyId',
            type: {
              name: 'String'
            }
          },
          protectionState: {
            required: false,
            serializedName: 'protectionState',
            type: {
              name: 'String'
            }
          },
          protectionIntentItemType: {
            required: true,
            serializedName: 'protectionIntentItemType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureWorkloadAutoProtectionIntent;
