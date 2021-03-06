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
 * Update protected item input properties.
 *
 */
class UpdateReplicationProtectedItemInputProperties {
  /**
   * Create a UpdateReplicationProtectedItemInputProperties.
   * @member {string} [recoveryAzureVMName] Target azure VM name given by the
   * user.
   * @member {string} [recoveryAzureVMSize] Target Azure Vm size.
   * @member {string} [selectedRecoveryAzureNetworkId] Target Azure Network Id.
   * @member {string} [selectedSourceNicId] The selected source nic Id which
   * will be used as the primary nic during failover.
   * @member {string} [enableRdpOnTargetOption] The selected option to enable
   * RDP\SSH on target vm after failover. String value of
   * {SrsDataContract.EnableRDPOnTargetOption} enum.
   * @member {array} [vmNics] The list of vm nic details.
   * @member {string} [licenseType] License type. Possible values include:
   * 'NotSpecified', 'NoLicenseType', 'WindowsServer'
   * @member {string} [recoveryAvailabilitySetId] The target availability set
   * id.
   * @member {object} [providerSpecificDetails] The provider specific input to
   * update replication protected item.
   * @member {string} [providerSpecificDetails.instanceType] Polymorphic
   * Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateReplicationProtectedItemInputProperties
   *
   * @returns {object} metadata of UpdateReplicationProtectedItemInputProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateReplicationProtectedItemInputProperties',
      type: {
        name: 'Composite',
        className: 'UpdateReplicationProtectedItemInputProperties',
        modelProperties: {
          recoveryAzureVMName: {
            required: false,
            serializedName: 'recoveryAzureVMName',
            type: {
              name: 'String'
            }
          },
          recoveryAzureVMSize: {
            required: false,
            serializedName: 'recoveryAzureVMSize',
            type: {
              name: 'String'
            }
          },
          selectedRecoveryAzureNetworkId: {
            required: false,
            serializedName: 'selectedRecoveryAzureNetworkId',
            type: {
              name: 'String'
            }
          },
          selectedSourceNicId: {
            required: false,
            serializedName: 'selectedSourceNicId',
            type: {
              name: 'String'
            }
          },
          enableRdpOnTargetOption: {
            required: false,
            serializedName: 'enableRdpOnTargetOption',
            type: {
              name: 'String'
            }
          },
          vmNics: {
            required: false,
            serializedName: 'vmNics',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VMNicInputDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'VMNicInputDetails'
                  }
              }
            }
          },
          licenseType: {
            required: false,
            serializedName: 'licenseType',
            type: {
              name: 'String'
            }
          },
          recoveryAvailabilitySetId: {
            required: false,
            serializedName: 'recoveryAvailabilitySetId',
            type: {
              name: 'String'
            }
          },
          providerSpecificDetails: {
            required: false,
            serializedName: 'providerSpecificDetails',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'instanceType',
                clientName: 'instanceType'
              },
              uberParent: 'UpdateReplicationProtectedItemProviderInput',
              className: 'UpdateReplicationProtectedItemProviderInput'
            }
          }
        }
      }
    };
  }
}

module.exports = UpdateReplicationProtectedItemInputProperties;
