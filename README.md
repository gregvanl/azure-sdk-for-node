# Azure SDK for Node.js

[![NPM version](https://badge.fury.io/js/azure.png)](http://badge.fury.io/js/azure) [![Build Status](https://travis-ci.org/Azure/azure-sdk-for-node.png?branch=master)](https://travis-ci.org/Azure/azure-sdk-for-node)

This project provides Node.js packages that makes it easy to consume and manage Microsoft Azure Services.

If you are new to Azure and Node.js, see [Azure for Node.js developers](https://docs.microsoft.com/en-us/javascript/azure).

For documentation specific to the Azure SDK Node.js packages, see the [Azure Node SDK Reference](https://docs.microsoft.com/en-us/javascript/api/overview/azure).

## Usage

To install an individual Node.js package, look up the [package name](#azure-service-modules) and use [npm](https://www.npmjs.com/get-npm), the Node.js package manager, to install it into your project. 

For example to install the Storage package, you would run:

```shell
$ npm install azure-storage
```

Note: You can install all the packages in this SDK by using `npm install azure`. This will include [helper](CONTROL.md#base-libraries) modules (`ms-rest-azure`) as well as all of the individual modules. This organization method also allows for submodules (and peer dependent modules) to always be in sync with each other.

## Supported services

This SDK has support for:

- Azure services (packages with the naming convention of `azure-<servicename>`).
- [ARM services](CONTROL.md#azure-resource-management) (packages with the naming convention of `azure-arm-*`)
- legacy [ASM services](CONTROL.md#azure-service-management) (packages with the naming convention of `azure-asm-*`)

## Azure service modules

| **Package** | **Description** | **Documentation** |
| -------------| ---------------| ----------------- |
| [azure-gallery](https://www.npmjs.com/package/azure-gallery) | Access to the [Azure Marketplace](http://azure.microsoft.com/en-us/marketplace/)| [azure-gallery package](https://docs.microsoft.com/en-us/javascript/api/azure-gallery)|
| [azure-graph](https://www.npmjs.com/package/azure-graph) | Access to [Azure Active Directory](https://azure.microsoft.com/en-us/services/active-directory/) | [Azure Active Directory modules](https://docs.microsoft.com/en-us/javascript/api/overview/azure/activedirectory)|
| [azure-keyvault](https://www.npmjs.com/package/azure-keyvault) | Integrate with [Key Vault](http://azure.microsoft.com/en-us/services/key-vault/)| [Azure Key Vault modules](https://docs.microsoft.com/en-us/javascript/api/overview/azure/key-vault)|
| [azure-monitoring](https://www.npmjs.com/package/azure-monitoring) | [Azure Monitoring](https://docs.microsoft.com/azure/monitoring-and-diagnostics/monitoring-overview) | [azure-monitoring package](https://docs.microsoft.com/en-us/javascript/api/azure-monitoring) |
| [azure-scheduler](https://www.npmjs.com/package/azure-scheduler) | Create jobs with [Azure Scheduler](http://azure.microsoft.com/en-us/services/scheduler/) | [Azure Scheduler modules](https://docs.microsoft.com/en-us/javascript/api/overview/azure/scheduler)|
| [azure-servicefabric](https://www.npmjs.com/package/azure-servicefabric) | [Azure Service Fabric](https://azure.microsoft.com/en-us/services/service-fabric/) | [Azure Service Fabric modules](https://docs.microsoft.com/en-us/javascript/api/overview/azure/service-fabric) |
| [azure-sb](https://www.npmjs.com/package/azure-sb) | [Service Bus](http://azure.microsoft.com/en-us/services/service-bus/) | [Azure Service Bus modules](https://docs.microsoft.com/en-us/javascript/api/overview/azure/service-bus)|
| [azure-storage](https://www.npmjs.com/package/azure-storage) | [Storage](http://azure.microsoft.com/en-us/services/storage/) | [Azure Storage modules](https://docs.microsoft.com/javascript/api/overview/azure/storage)|
| [azure-batch](https://www.npmjs.com/package/azure-batch)| [Azure Batch](https://azure.microsoft.com/en-us/services/batch/) processing | [azure-batch package](https://docs.microsoft.com/en-us/javascript/api/azure-batch)|

>Note: If there is a Microsoft Azure service that doesn't have a package yet, [open an issue](https://github.com/Azure/azure-sdk-for-node/issues)
so that we may prioritize it in the backlog.

### Authenticating

There are three ways to authenticate against Azure while using the `azure-graph` sdk, use [this guide](./Documentation/Authentication.md) to determine which method to use.

## Third-party modules

## Need Help?

* [Read the docs](https://aka.ms/azure-node-sdk)
* [Open an issue in GitHub](http://github.com/azure/azure-sdk-for-node)
* [Microsoft Azure Forums on MSDN and Stack Overflow](http://go.microsoft.com/fwlink/?LinkId=234489)

## Related Projects

* [Azure CLI](http://github.com/azure/azure-xplat-cli)

## License

This project is licensed under MIT and Apache-2.0.
- "MIT" license is usually used for the client libraries generated using [Autorest](https://github.com/Azure/Autorest) that are targeting ARM (V2 version of Azure REST API). The license can be found in "LICENSE.MIT.txt" file in this repository.
- "Apache-2.0" license is usually used for the client libraries generated using an internal code generator that are targeting ASM (V1 version of Azure REST API). The license can be found in "LICENSE.Apache.txt" file in this repository.

## Contribute

* If you would like to become an active contributor to this project, please follow the instructions provided in [Microsoft Azure Projects Contribution Guidelines](http://azure.github.io/guidelines/).

